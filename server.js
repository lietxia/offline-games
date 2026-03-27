#!/usr/bin/env node
import { serve } from 'bun';
import { join } from 'path';

const PORT = 3000;
const PUBLIC_DIR = './public';

console.log(`🎮 Starting PWA Game Store server on port ${PORT}...`);

const server = serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    let filePath = url.pathname === '/' ? '/index-enhanced.html' : url.pathname;
    
    // Handle static files
    if (filePath.startsWith('/games/')) {
      filePath = filePath.substring(1); // Remove leading slash
    }
    
    const fullPath = join(PUBLIC_DIR, filePath);
    
    try {
      const file = Bun.file(fullPath);
      if (file.type) {
        return new Response(file, {
          headers: { 'Content-Type': file.type }
        });
      }
    } catch (e) {
      // File not found, serve index
    }
    
    // Serve index.html for SPA routing
    const indexFile = Bun.file(join(PUBLIC_DIR, 'index-enhanced.html'));
    return new Response(indexFile);
  }
});

console.log(`✅ Server running at http://localhost:${PORT}`);
console.log(`🎯 PWA Game Store ready with 70+ games!`);