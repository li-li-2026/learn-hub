# 创作工作台 v2

一个左侧模块导航 + 右侧任务清单 + 视频知识点的纯前端工作台。
任务清单支持 **勾选 / 新增 / 删除**，并使用 `localStorage` **持久化**保存。

## 界面预览

- 左侧：📅 每日计划 / 💡 选题每日灵感 / 🔥 爆款热点视频 / 二创 / 🌱 个人成长计划
- 右侧：
  - 今日任务清单（可勾选、新增、删除，进度自动统计）
  - 相关视频 / 知识点（标题、平台、知识点提示、跳转链接）

## 使用

```bash
# 直接用浏览器打开 index.html 即可
open index.html   # macOS
start index.html  # Windows
```

或部署到任意静态托管（GitHub Pages / Vercel / Netlify 等）。

## 数据存储

- `localStorage` 的 key：`create-workbench-v2`
- 存储内容：当前模块 id、各模块的自定义任务（含完成状态）
- 清空数据：在浏览器控制台执行 `localStorage.removeItem('create-workbench-v2')`，刷新页面即恢复默认。

## 二次开发

- 模块、默认任务、视频列表全部定义在 `app.js` 顶部的 `modules` 数组中。
- 想要新增模块：往数组里 push 一个对象即可：
  ```js
  {
    id: "reading",
    icon: "📖",
    title: "每日阅读",
    subtitle: "读书 · 笔记",
    defaultTasks: ["读 30 分钟", "做 3 条笔记"],
    videos: [{ title: "...", platform: "Bilibili", tip: "...", url: "..." }]
  }
  ```
- 样式集中在 `styles.css`，主题色在 `:root` 的 CSS 变量中。

## 文件结构

```
learn-hub/
├── index.html     # 页面骨架
├── styles.css     # 样式
├── app.js         # 数据 + 渲染 + 交互
├── README.md
└── .gitignore
```
