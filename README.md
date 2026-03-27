# 🎮 PWA离线游戏商城 (Offline Game Store)

> **77款经典HTML5游戏合集，支持完全离线运行**

[![GitHub stars](https://img.shields.io/github/stars/lietxia/offline-games?style=social)](https://github.com/lietxia/offline-games/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/lietxia/offline-games?style=social)](https://github.com/lietxia/offline-games/network/members)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ✨ 特性

- 🎮 **77款精选游戏** - 涵盖6大类别，从经典到现代
- 📱 **PWA技术** - 支持安装到桌面，完全离线运行
- ⚡ **极速加载** - Service Worker智能缓存策略
- 🔍 **实时搜索** - 快速找到想玩的游戏
- 📦 **零依赖** - 所有游戏独立运行，无需外部资源
- 🎨 **响应式设计** - 完美支持桌面和移动设备

## 🎯 游戏分类

### 🃏 微软经典 (Microsoft Classics)
- 扫雷 (Minesweeper) - 3个版本
- 纸牌接龙 (Solitaire) - 2个版本
- 蜘蛛纸牌 (Spider Solitaire) - 2个版本
- 空当接龙 (FreeCell) - 2个版本
- 红心大战 (Hearts)

### 🧩 数字益智 (Digital Puzzles)
- 2048 - 2个版本
- 数独 (Sudoku) - 2个版本
- 记忆翻牌 (Memory Match) - 4个版本
- 孔明棋 (Peg Solitaire) - 2个版本
- 拼图游戏 (Jigsaw Puzzle)

### 👾 街机动作 (Arcade Action)
- 俄罗斯方块 (Tetris) - 2个版本
- 贪吃蛇 (Snake) - 2个版本
- 打砖块 (Breakout) - 2个版本
- 吃豆人 (Pac-Man) - 2个版本
- Flappy Bird - 2个版本

### ♟️ 棋牌策略 (Board Strategy)
- 国际象棋 (Chess) - 2个版本
- 井字棋 (Tic-Tac-Toe) - 2个版本
- 四子棋 (Connect Four) - 2个版本
- 跳棋 (Checkers) - 2个版本
- 黑白棋 (Reversi)
- 五子棋 (Gomoku)
- 麻将消除 (Mahjong)

### 📝 文字游戏 (Word Games)
- Wordle - 2个版本
- 刽子手 (Hangman)
- 极速打字 (Speed Typing)
- 打字游戏

### 🎯 休闲益智 (Casual Games)
- 糖果粉碎 (Candy Crush)
- 涂鸦跳跃 (Doodle Jump)
- 横冲直撞 (Crossy Road)
- 石头剪刀布
- 叠塔游戏
- 射箭游戏
- 打地鼠
- 水果切片
- 更多...

## 🚀 快速开始

### 方式一：直接访问
1. 克隆仓库
```bash
git clone https://github.com/lietxia/offline-games.git
cd offline-games
```

2. 启动本地服务器（可选）
```bash
# 使用Python
python -m http.server 3000

# 或使用Node.js
npx serve .

# 或使用Bun
bun --port 3000 .
```

3. 打开浏览器访问 `http://localhost:3000`

### 方式二：PWA安装
1. 在Chrome浏览器中打开应用
2. 点击地址栏右侧的"安装"图标
3. 或在菜单中选择"安装应用"
4. 应用将作为独立程序安装在您的设备上

## 🛠️ 技术栈

- **运行时**: Bun.js 1.3.11+
- **前端**: HTML5 + CSS3 + Vanilla JavaScript
- **架构**: PWA (Progressive Web App)
- **缓存**: Service Worker + Cache API
- **游戏引擎**: Canvas API + DOM操作

## 📁 项目结构

```
offline-games/
├── public/
│   ├── games/                    # 游戏文件目录
│   │   ├── microsoft-classics/   # 微软经典游戏
│   │   ├── digital-puzzles/      # 数字益智游戏
│   │   ├── arcade-action/        # 街机动作游戏
│   │   ├── board-strategy/       # 棋牌策略游戏
│   │   ├── word-games/          # 文字游戏
│   │   └── additional/          # 额外游戏合集
│   ├── index-enhanced.html      # PWA主页面
│   ├── games-config.json        # 游戏配置
│   ├── sw.js                    # Service Worker
│   └── manifest.json            # PWA清单
├── server.js                    # Bun.js服务器
├── package.json                 # 项目配置
└── README.md                    # 说明文档
```

## 🎮 游戏来源

所有游戏均来自GitHub开源项目，感谢以下开发者：

- [freeopensourcegames/minesweeper](https://github.com/freeopensourcegames/minesweeper)
- [gabrielecirulli/2048](https://github.com/gabrielecirulli/2048)
- [dionyziz/canvas-tetris](https://github.com/dionyziz/canvas-tetris)
- [kubowania/memory-game](https://github.com/kubowania/memory-game)
- [he-is-talha/html-css-javascript-games](https://github.com/he-is-talha/html-css-javascript-games)
- 以及更多贡献者...

## 📝 使用说明

### 基本控制
- **方向键**: 控制移动（俄罗斯方块、贪吃蛇、2048等）
- **鼠标点击**: 选择和操作（扫雷、纸牌、棋类游戏等）
- **触摸屏**: 支持移动设备触摸操作

### 存档功能
部分游戏支持本地存档，使用浏览器localStorage：
- 2048: 最高分记录
- 数独: 游戏进度保存
- 部分棋类游戏: 对局记录

## 🔧 开发

### 环境要求
- Bun.js 1.3.11+ 或 Node.js 18+
- 现代浏览器（Chrome、Firefox、Safari、Edge）

### 本地开发
```bash
# 安装Bun
curl -fsSL https://bun.sh/install | bash

# 安装依赖
bun install

# 启动开发服务器
bun run server.js

# 访问 http://localhost:3000
```

### 添加新游戏
1. 在 `public/games/` 下创建游戏目录
2. 将游戏文件放入目录
3. 更新 `public/games-config.json`
4. Service Worker会自动缓存新游戏

## 📊 统计

- **总游戏数**: 77款
- **游戏分类**: 6大类别
- **代码行数**: 70,000+
- **文件数量**: 500+

## 🤝 贡献

欢迎贡献代码、报告问题或提出建议！

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📜 许可证

各个游戏遵循其原始开源许可证，主要包括：
- MIT License
- Apache License 2.0
- GPL v3

请在使用前查看各游戏目录中的LICENSE文件。

## 🙏 致谢

感谢所有开源游戏开发者的贡献，让经典游戏得以在Web平台上延续！

---

**🎮 享受游戏时光！所有游戏均可在无网络环境下运行**

[⬆ 返回顶部](#-pwa离线游戏商城-offline-game-store)