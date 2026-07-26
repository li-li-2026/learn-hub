const groups = [
  {
    title: "📌 今日任务",
    modules: [
      {
        id: "daily-checkin",
        icon: "✅",
        title: "每日打卡计划",
        description: "舞蹈 · 吉他 · 体态 · 学习",
        videos: [
          { title: "每日学习计划如何坚持 30 天", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=每日学习计划坚持" },
          { title: "习惯养成与打卡技巧", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=习惯养成打卡技巧" }
        ]
      }
    ]
  },
  {
    title: "📚 学习成长",
    modules: [
      {
        id: "hiphop",
        icon: "🕺",
        title: "Hiphop 舞蹈自学",
        description: "周训练计划 · 纠错笔记",
        videos: [
          { title: "HipHop 基础律动 30 天计划", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=HipHop基础律动30天" },
          { title: "街舞动作纠错与细节分析", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=街舞动作纠错" }
        ]
      },
      {
        id: "guitar",
        icon: "🎸",
        title: "电吉他自学进度",
        description: "入门知识 · 乐谱 · 配件",
        videos: [
          { title: "电吉他零基础系统入门", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=电吉他零基础系统入门" },
          { title: "常用乐谱阅读与配件选购", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=电吉他乐谱配件" }
        ]
      }
    ]
  },
  {
    title: "💡 内容创作",
    modules: [
      {
        id: "short-video",
        icon: "🎬",
        title: "短视频选题灵感",
        description: "自动抓取热点 · 文案复盘",
        videos: [
          { title: "短视频爆款选题方法论", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=短视频爆款选题方法论" },
          { title: "热点追踪与文案复盘技巧", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=短视频热点追踪文案复盘" }
        ]
      }
    ]
  },
  {
    title: "🧘 生活记录",
    modules: [
      {
        id: "posture",
        icon: "🧘",
        title: "体态矫正记录",
        description: "高低肩 · 腰酸矫正打卡",
        videos: [
          { title: "高低肩矫正训练", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=高低肩矫正训练" },
          { title: "腰酸/骨盆前倾改善", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=腰酸骨盆前倾改善" }
        ]
      },
      {
        id: "mood",
        icon: "📝",
        title: "情绪备忘录",
        description: "心情记录 · 人际避雷复盘",
        videos: [
          { title: "情绪管理与日记记录", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=情绪管理日记记录" },
          { title: "人际关系复盘与边界感", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=人际关系复盘边界感" }
        ]
      },
      {
        id: "shopping",
        icon: "🛒",
        title: "好物选购对比",
        description: "吉他 · 课程 · 日用品比价",
        videos: [
          { title: "电吉他入门型号选购对比", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=电吉他入门型号选购" },
          { title: "日用品比价与消费决策", platform: "Bilibili", url: "https://search.bilibili.com/all?keyword=日用品比价消费决策" }
        ]
      }
    ]
  }
];

function renderApp() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = groups.map((group) => `
    <section class="group">
      <h2 class="group-title"><span class="icon">${escapeHtml(group.title.split(" ")[0])}</span> ${escapeHtml(group.title.split(" ").slice(1).join(" "))}</h2>
      <div class="card-list">
        ${group.modules.map((mod) => renderModule(mod)).join("")}
      </div>
    </section>
  `).join("");

  bindEvents();
}

function renderModule(mod) {
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
    : `<div class="empty-state">暂无视频，可在 app.js 中添加。</div>`;

  return `
    <article class="module-card" data-module-id="${escapeHtml(mod.id)}">
      <button class="module-header" aria-expanded="false" aria-controls="body-${escapeHtml(mod.id)}">
        <span class="module-icon-box">${escapeHtml(mod.icon)}</span>
        <span class="module-info">
          <span class="module-title">${escapeHtml(mod.title)}</span>
          <span class="module-desc">${escapeHtml(mod.description)}</span>
        </span>
        <span class="module-meta">
          ${hasVideos ? `<span class="badge">${mod.videos.length}</span>` : ""}
          <span class="arrow" aria-hidden="true">›</span>
        </span>
      </button>
      <div class="module-body" id="body-${escapeHtml(mod.id)}" role="region">
        ${videoListHtml}
      </div>
    </article>
  `;
}

function bindEvents() {
  document.querySelectorAll(".module-header").forEach((header) => {
    header.addEventListener("click", () => {
      const card = header.closest(".module-card");
      const isOpen = card.classList.contains("open");

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

renderApp();
