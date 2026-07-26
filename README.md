# 每日学习仓库

一个可交互的学习资源导航页，包含每日打卡、健身训练、英语口语、运营学习、HipHop 舞蹈、电吉他、金融知识等模块。点击模块即可展开相关学习视频链接。

## 在线预览

直接用浏览器打开 `index.html` 即可使用；也可以部署到 GitHub Pages 或任意静态托管服务。

## 仓库结构

```
learn-hub/
├── index.html    # 主页面
├── styles.css    # 样式
├── app.js        # 模块数据与交互逻辑
├── README.md     # 说明文档
└── .gitignore    # Git 忽略文件
```

## 如何添加/修改内容

打开 `app.js`，找到 `modules` 数组，按以下格式添加或编辑模块：

```js
{
  id: "unique-id",
  icon: "🚀",
  title: "模块名称",
  description: "模块说明",
  videos: [
    { title: "视频标题", platform: "Bilibili", url: "https://www.bilibili.com/video/xxx" },
    { title: "另一个视频", platform: "YouTube", url: "https://www.youtube.com/watch?v=xxx" }
  ]
}
```

## 待补充

图片中最后两个模块名称不清晰，当前以「待确认模块」占位，可在 `app.js` 中直接替换。
