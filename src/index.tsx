import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

interface Game {
  id: string;
  name: string;
  description: string;
  category: string;
  path: string;
  icon?: string;
}

const GameStore: React.FC = () => {
  const [games] = useState<Game[]>([
    // Microsoft Classics
    { id: 'minesweeper-1', name: '扫雷', description: '经典扫雷游戏', category: '微软经典', path: '/games/microsoft-classics/Minesweeper/index.html' },
    { id: 'solitaire-1', name: '纸牌接龙', description: 'Klondike纸牌游戏', category: '微软经典', path: '/games/microsoft-classics/Solitaire/index.html' },
    { id: 'spider-solitaire-1', name: '蜘蛛纸牌', description: '多列纸牌游戏', category: '微软经典', path: '/games/microsoft-classics/Spider_Solitaire/index.html' },
    { id: 'freecell-1', name: '空当接龙', description: 'FreeCell策略游戏', category: '微软经典', path: '/games/microsoft-classics/Freecell/freecell.html' },
    { id: 'hearts-1', name: '红心大战', description: '四人卡牌对战', category: '微软经典', path: '/games/microsoft-classics/hearts/index.html' },
    
    // Digital Puzzles
    { id: '2048-1', name: '2048', description: '数字合并游戏', category: '数字益智', path: '/games/digital-puzzles/2048/index.html' },
    { id: 'sudoku-1', name: '数独', description: '逻辑推理填数', category: '数字益智', path: '/games/digital-puzzles/sudoku/index.html' },
    { id: 'memory-1', name: '记忆翻牌', description: '配对记忆游戏', category: '数字益智', path: '/games/digital-puzzles/memory-game/index.html' },
    { id: 'peg-solitaire-1', name: '孔明棋', description: '跳棋消除游戏', category: '数字益智', path: '/games/digital-puzzles/peg-solitaire/index.html' },
    { id: 'jigsaw-1', name: '拼图', description: '图像拼图游戏', category: '数字益智', path: '/games/digital-puzzles/Jigsaw_Puzzle/index.html' },
    
    // Arcade Action
    { id: 'tetris-1', name: '俄罗斯方块', description: '经典方块游戏', category: '街机动作', path: '/games/arcade-action/tetris/index.html' },
    { id: 'snake-1', name: '贪吃蛇', description: '经典蛇形游戏', category: '街机动作', path: '/games/arcade-action/snake-game/index.html' },
    { id: 'breakout-1', name: '打砖块', description: '弹球击砖游戏', category: '街机动作', path: '/games/arcade-action/breakout/index.html' },
    { id: 'pacman-1', name: '吃豆人', description: '经典迷宫游戏', category: '街机动作', path: '/games/arcade-action/pacman/index.html' },
    { id: 'flappy-bird-1', name: 'Flappy Bird', description: '飞行躲避游戏', category: '街机动作', path: '/games/arcade-action/Flappy_Bird/index.html' },
    
    // Board Strategy
    { id: 'tictactoe-1', name: '井字棋', description: '简单策略游戏', category: '棋牌策略', path: '/games/board-strategy/tictactoe/index.html' },
    { id: 'connect-four-1', name: '四子棋', description: '连线策略游戏', category: '棋牌策略', path: '/games/board-strategy/connect-four/index.html' },
    { id: 'chess-1', name: '国际象棋', description: '经典棋类游戏', category: '棋牌策略', path: '/games/board-strategy/chessJS/index.html' },
    { id: 'checkers-1', name: '跳棋', description: '跳跃吃子游戏', category: '棋牌策略', path: '/games/board-strategy/checkers/index.html' },
    { id: 'reversi-1', name: '黑白棋', description: '翻转棋子游戏', category: '棋牌策略', path: '/games/board-strategy/Reversi/index.html' },
    { id: 'gomoku-1', name: '五子棋', description: '连珠游戏', category: '棋牌策略', path: '/games/board-strategy/Gomoku/index.html' },
    { id: 'mahjong-1', name: '麻将消除', description: '配对消除游戏', category: '棋牌策略', path: '/games/board-strategy/Green_Mahjong/index.html' },
    
    // Word Games
    { id: 'wordle-1', name: 'Wordle', description: '单词猜谜游戏', category: '文字游戏', path: '/games/word-games/wordle-clone/index.html' }
  ]);

  const [categories] = useState<string[]>(['微软经典', '数字益智', '街机动作', '棋牌策略', '文字游戏']);
  const [offlineStatus, setOfflineStatus] = useState('online');

  useEffect(() => {
    const updateOnlineStatus = () => {
      setOfflineStatus(navigator.onLine ? 'online' : 'offline');
    };
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
    
    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  const groupedGames = categories.map(category => ({
    category,
    games: games.filter(game => game.category === category)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="fixed top-4 right-4 px-3 py-1 rounded text-white text-sm font-medium"
           style={{ backgroundColor: offlineStatus === 'online' ? '#10B981' : '#EF4444' }}>
        {offlineStatus === 'online' ? '在线' : '离线'}
      </div>
      
      <header className="text-center text-white mb-8">
        <h1 className="text-4xl font-bold mb-2">🎮 离线游戏商城</h1>
        <p className="text-xl opacity-90">20+ 经典游戏，完全离线畅玩</p>
      </header>
      
      <main>
        {groupedGames.map(({ category, games }) => (
          <section key={category} className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 pb-2 border-b-2 border-white border-opacity-30">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {games.map(game => (
                <div key={game.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{game.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{game.description}</p>
                  <a 
                    href={game.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm"
                  >
                    开始游戏
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<GameStore />);