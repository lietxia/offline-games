const CACHE_NAME = 'game-store-v1';
const STATIC_CACHE = 'static-v1';
const GAMES_CACHE = 'games-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// 安装Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)),
      caches.open(GAMES_CACHE)
    ])
  );
});

// 激活Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![STATIC_CACHE, GAMES_CACHE, CACHE_NAME].includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 拦截请求
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 静态资源 - 网络优先
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(STATIC_CACHE).then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }
  
  // 游戏文件 - 缓存优先
  if (url.pathname.startsWith('/games/')) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then((networkResponse) => {
              const responseClone = networkResponse.clone();
              caches.open(GAMES_CACHE).then((cache) => cache.put(request, responseClone));
              return networkResponse;
            })
            .catch(() => caches.match('/offline.html'));
        })
    );
    return;
  }
  
  // 其他资源 - 网络优先
  event.respondWith(
    fetch(request)
      .catch(() => caches.match(request))
  );
});

// 后台同步
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // 同步游戏数据
  console.log('Background sync triggered');
}