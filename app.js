const modules = [
  {
    id: "daily-checkin",
    icon: "✅",
    title: "每日打卡",
    description: "记录每日学习进度，保持习惯节奏",
    videos: [
      { title: "如何建立高效的学习打卡习惯", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=每日打卡习惯" },
      { title: "30 天习惯养成法", platform: "YouTube", url: "https://www.youtube.com/results?search_query=30+day+habit+challenge" }
    ]
  },
  {
    id: "fitness",
    icon: "💪",
    title: "健身训练",
    description: "胸/背/腿/肩/核心/全身燃脂 + 视频",
    videos: [
      { title: "全身燃脂训练（无器械）", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=全身燃脂训练" },
      { title: "胸肩背腿分化训练指南", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=胸肩背腿分化训练" }
    ]
  },
  {
    id: "posture",
    icon: "🦴",
    title: "体态矫正专区",
    description: "大小脸、脊柱侧弯、O 型腿、足弓 + 视频",
    videos: [
      { title: "脊柱侧弯矫正训练", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=脊柱侧弯矫正" },
      { title: "O 型腿/足弓塌陷改善", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=O型腿足弓塌陷改善" }
    ]
  },
  {
    id: "english-speaking",
    icon: "🗣️",
    title: "英语口语",
    description: "日常对话、发音纠正、听力输入",
    videos: [
      { title: "每日英语口语练习", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=每日英语口语练习" },
      { title: "影子跟读法训练听力口语", platform: "YouTube", url: "https://www.youtube.com/results?search_query=shadowing+english+speaking" }
    ]
  },
  {
    id: "operations",
    icon: "📈",
    title: "运营学习",
    description: "热点抓取 + 文案复盘",
    videos: [
      { title: "新媒体运营入门", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=新媒体运营入门" },
      { title: "爆款文案写作技巧", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=爆款文案写作技巧" }
    ]
  },
  {
    id: "short-video",
    icon: "🎬",
    title: "短视频选题",
    description: "选题策划、热点抓取、文案复盘",
    videos: [
      { title: "短视频选题技巧", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=短视频选题技巧" },
      { title: "如何找到爆款选题", platform: "抖音", url: "https://www.douyin.com/search/%E7%88%86%E6%AC%BE%E9%80%89%E9%A2%98" }
    ]
  },
  {
    id: "hiphop",
    icon: "🕺",
    title: "HipHop 舞蹈",
    description: "0 基础三阶段 + 视频",
    videos: [
      { title: "HipHop 基础律动教学", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=HipHop基础律动教学" },
      { title: "三个月街舞入门计划", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=街舞三个月入门计划" }
    ]
  },
  {
    id: "guitar",
    icon: "🎸",
    title: "电吉他",
    description: "入门知识 + 乐谱 + 配件",
    videos: [
      { title: "电吉他零基础入门", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=电吉他零基础入门" },
      { title: "常用乐谱与配件介绍", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=电吉他配件乐谱" }
    ]
  },
  {
    id: "finance",
    icon: "💰",
    title: "每日金融小知识",
    description: "股票/基金/宏观/实战 + 视频",
    videos: [
      { title: "股票基金入门知识", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=股票基金入门" },
      { title: "宏观经济与投资理财", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=宏观经济投资理财" }
    ]
  },
  {
    id: "placeholder-10",
    icon: "📌",
    title: "待确认模块 10",
    description: "图片中该模块名称不清晰，等待补充",
    videos: []
  },
  {
    id: "placeholder-11",
    icon: "📌",
    title: "待确认模块 11",
    description: "图片中该模块名称不清晰，等待补充",
    videos: []
  }
];

function renderModules() {
  const container = document.getElementById("modules");
  if (!container) return;

  container.innerHTML = modules.map((mod) => {
    const hasVideos = mod.videos && mod.videos.length > 0;
    const videoListHtml = hasVideos
      ? `<ul class="video-list">${mod.videos.map((video) => `
          <li class="video-item">
            <div class="video-info">
              <div class="video-title">${escapeHtml(video.title)}</div>
              <div class="video-platform">${escapeHtml(video.platform)}</div>
            </div>
            <a class="video-link" href="${escapeHtml(video.url)}" target="_blank" rel="noopener noreferrer">观看</a>
          </li>
        `).join("")}</ul>`
      : `<div class="empty-state">暂无视频链接，请在 app.js 中添加。</div>`;

    return `
      <article class="module-card" data-module-id="${escapeHtml(mod.id)}">
        <button class="module-header" aria-expanded="false" aria-controls="body-${escapeHtml(mod.id)}">
          <span class="module-title">
            <span class="module-icon">${escapeHtml(mod.icon)}</span>
            ${escapeHtml(mod.title)}
          </span>
          <span class="chevron" aria-hidden="true">▼</span>
        </button>
        <div class="module-body" id="body-${escapeHtml(mod.id)}" role="region">
          <p class="module-desc">${escapeHtml(mod.description)}</p>
          ${videoListHtml}
        </div>
      </article>
    `;
  }).join("");

  bindEvents();
}

function bindEvents() {
  const headers = document.querySelectorAll(".module-header");
  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const card = header.closest(".module-card");
      const isOpen = card.classList.contains("open");

      // 可选：每次只展开一个模块
      // document.querySelectorAll(".module-card.open").forEach((c) => c.classList.remove("open"));

      if (isOpen) {
        card.classList.remove("open");
        header.setAttribute("aria-expanded", "false");
      } else {
        card.classList.add("open");
        header.setAttribute("aria-expanded", "true");
      }
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

renderModules();
