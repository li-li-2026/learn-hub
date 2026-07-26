# 创作工作台

一个移动端风格的学习资源导航页。界面按分组展示模块卡片，点击卡片即可展开相关学习视频链接。

## 在线预览

用浏览器直接打开 `index.html` 即可；也可部署到 GitHub Pages 等静态托管服务。

## 仓库结构

```
learn-hub/
├── index.html    # 主页面
├── styles.css    # 移动端风格样式
├── app.js        # 分组、模块数据与交互逻辑
├── README.md     # 说明文档
└── .gitignore
```

## 当前分组

- 📌 今日任务：每日打卡计划
- 📚 学习成长：Hiphop 舞蹈自学、电吉他自学进度
- 💡 内容创作：短视频选题灵感
- 🧘 生活记录：体态矫正记录、情绪备忘录、好物选购对比

## 如何添加/修改内容

编辑 `app.js` 中的 `groups` 数组，按以下格式增减模块或视频：

```js
{
  id: "unique-id",
  icon: "🚀",
  title: "模块名称",
  description: "副标题说明",
  videos: [
    { title: "视频标题", platform: "Bilibili", url: "https://www.bilibili.com/video/xxx" }
  ]
}
```

## 说明

当前视频链接使用搜索链接作为示例，后续可替换为真实收藏的视频地址。
