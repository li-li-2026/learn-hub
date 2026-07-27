// 左侧 4 大模块 + 每个模块的子任务、视频、知识点

const modules = [
  {
    id: "daily-plan",
    icon: "📅",
    title: "每日计划",
    subtitle: "打卡 · 体态 · 复盘",
    defaultTasks: [
      "完成今日 4 个学习任务",
      "记录体态状态（高低肩 / 腰酸）",
      "复盘昨日完成情况"
    ],
    videos: [
      {
        title: "30 天每日计划如何坚持",
        platform: "Bilibili",
        tip: "如何拆解目标、每天打勾",
        url: "https://search.bilibili.com/all?keyword=30天每日计划坚持"
      },
      {
        title: "高效晨间计划与每日复盘",
        platform: "Bilibili",
        tip: "提升专注力 + 时间管理",
        url: "https://search.bilibili.com/all?keyword=晨间计划每日复盘"
      },
      {
        title: "体态矫正 21 天打卡",
        platform: "Bilibili",
        tip: "高低肩 / 骨盆前倾 / 足弓",
        url: "https://search.bilibili.com/all?keyword=体态矫正21天打卡"
      }
    ]
  },
  {
    id: "topic-inspiration",
    icon: "💡",
    title: "选题每日灵感",
    subtitle: "选题 · 文案 · 运营",
    defaultTasks: [
      "抓取 3 条今日热点",
      "筛选 1 条可二创的选题",
      "写出 3 条标题候选"
    ],
    videos: [
      {
        title: "短视频爆款选题方法论",
        platform: "Bilibili",
        tip: "选题的 4 大核心原则",
        url: "https://search.bilibili.com/all?keyword=短视频爆款选题方法论"
      },
      {
        title: "文案公式与爆款结构",
        platform: "Bilibili",
        tip: "钩子 + 痛点 + 价值",
        url: "https://search.bilibili.com/all?keyword=爆款文案公式结构"
      },
      {
        title: "用户心理与情绪文案",
        platform: "Bilibili",
        tip: "如何戳中用户情绪",
        url: "https://search.bilibili.com/all?keyword=用户心理情绪文案"
      },
      {
        title: "新媒体运营入门到精通",
        platform: "Bilibili",
        tip: "选题 / 排版 / 数据复盘",
        url: "https://search.bilibili.com/all?keyword=新媒体运营入门"
      }
    ]
  },
  {
    id: "hot-video",
    icon: "🔥",
    title: "爆款热点视频 / 二创",
    subtitle: "拆解 · 二次创作",
    defaultTasks: [
      "拆解 1 条本周热门视频",
      "找出可二创的爆点结构",
      "完成 1 条二创脚本"
    ],
    videos: [
      {
        title: "如何拆解爆款视频结构",
        platform: "Bilibili",
        tip: "3 秒钩子 / 情绪曲线 / 结尾反转",
        url: "https://search.bilibili.com/all?keyword=拆解爆款视频结构"
      },
      {
        title: "二创视频的合规与爆点",
        platform: "Bilibili",
        tip: "如何避开版权 + 制造共鸣",
        url: "https://search.bilibili.com/all?keyword=二创视频技巧爆点"
      },
      {
        title: "用 Hiphop / 吉他做二创内容",
        platform: "Bilibili",
        tip: "音乐 + 视觉双爆点",
        url: "https://search.bilibili.com/all?keyword=二创音乐视频"
      },
      {
        title: "抖音热点追踪与复盘",
        platform: "抖音",
        tip: "热门 BGM / 模板 / 文案",
        url: "https://www.douyin.com/search/%E7%88%86%E6%AC%BE%E9%80%89%E9%A2%98"
      }
    ]
  },
  {
    id: "personal-growth",
    icon: "🌱",
    title: "个人成长计划",
    subtitle: "舞蹈 · 吉他 · 口语 · 健身 · 金融",
    defaultTasks: [
      "舞蹈 / 吉他 各练习 20 分钟",
      "英语影子跟读 10 分钟",
      "健身 / 体态训练 30 分钟",
      "看 1 条金融 / 个人成长视频"
    ],
    videos: [
      {
        title: "HipHop 基础律动 30 天计划",
        platform: "Bilibili",
        tip: "0 基础入门三阶段",
        url: "https://search.bilibili.com/all?keyword=HipHop基础律动30天"
      },
      {
        title: "电吉他零基础系统入门",
        platform: "Bilibili",
        tip: "入门知识 + 乐谱 + 配件",
        url: "https://search.bilibili.com/all?keyword=电吉他零基础系统入门"
      },
      {
        title: "每日英语口语影子跟读",
        platform: "YouTube",
        tip: "Shadowing 听说同步训练",
        url: "https://www.youtube.com/results?search_query=shadowing+english+speaking"
      },
      {
        title: "全身燃脂训练（无器械）",
        platform: "Bilibili",
        tip: "胸背腿肩 / 核心训练",
        url: "https://search.bilibili.com/all?keyword=全身燃脂训练"
      },
      {
        title: "股票 / 基金 / 宏观入门",
        platform: "Bilibili",
        tip: "实战派金融小知识",
        url: "https://search.bilibili.com/all?keyword=股票基金入门"
      }
    ]
  }
];

// ---------- 持久化 ----------

const STORE_KEY = "create-workbench-v2";

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function saveStore(store) {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch (e) {
    /* ignore */
  }
}

function defaultStore() {
  const tasksByModule = {};
  modules.forEach((m) => {
    tasksByModule[m.id] = m.defaultTasks.map((text, i) => ({
      id: `${m.id}-init-${i}`,
      text,
      done: false
    }));
  });
  return {
    activeId: modules[0].id,
    tasksByModule
  };
}

let store = loadStore() || defaultStore();
// 兼容：新增模块没有存储任务时，自动补默认
modules.forEach((m) => {
  if (!store.tasksByModule[m.id]) {
    store.tasksByModule[m.id] = m.defaultTasks.map((text, i) => ({
      id: `${m.id}-init-${i}`,
      text,
      done: false
    }));
  }
});

function persist() {
  saveStore(store);
}

// ---------- 渲染 ----------

function getActiveModule() {
  return modules.find((m) => m.id === store.activeId) || modules[0];
}

function renderNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  nav.innerHTML = modules.map((m) => `
    <button class="nav-item ${m.id === store.activeId ? "active" : ""}" data-id="${escapeHtml(m.id)}">
      <span class="nav-icon">${escapeHtml(m.icon)}</span>
      <span class="nav-text">${escapeHtml(m.title)}</span>
    </button>
  `).join("");

  nav.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      if (id && id !== store.activeId) {
        store.activeId = id;
        persist();
        renderNav();
        renderTasks();
        renderVideos();
      }
    });
  });
}

function renderTasks() {
  const list = document.getElementById("task-list");
  const progress = document.getElementById("task-progress");
  if (!list || !progress) return;

  const tasks = store.tasksByModule[store.activeId] || [];
  if (tasks.length === 0) {
    list.innerHTML = `<li class="task-empty">还没有任务，下方输入框添加第一个吧～</li>`;
    progress.textContent = "0 / 0 已完成";
    return;
  }

  list.innerHTML = tasks.map((t) => `
    <li class="task-item ${t.done ? "completed" : ""}" data-task-id="${escapeHtml(t.id)}">
      <span class="task-check" role="checkbox" aria-checked="${t.done}" tabindex="0">${t.done ? "✓" : ""}</span>
      <span class="task-text">${escapeHtml(t.text)}</span>
      <button class="task-delete" aria-label="删除任务">✕</button>
    </li>
  `).join("");

  bindTaskEvents();

  const done = tasks.filter((t) => t.done).length;
  progress.textContent = `${done} / ${tasks.length} 已完成`;
}

function bindTaskEvents() {
  document.querySelectorAll(".task-item").forEach((item) => {
    const id = item.getAttribute("data-task-id");
    const check = item.querySelector(".task-check");
    const onToggle = () => {
      const tasks = store.tasksByModule[store.activeId];
      const t = tasks.find((x) => x.id === id);
      if (!t) return;
      t.done = !t.done;
      persist();
      renderTasks();
    };
    check.addEventListener("click", onToggle);
    check.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        onToggle();
      }
    });

    const del = item.querySelector(".task-delete");
    del.addEventListener("click", () => {
      const tasks = store.tasksByModule[store.activeId];
      const idx = tasks.findIndex((x) => x.id === id);
      if (idx >= 0) {
        tasks.splice(idx, 1);
        persist();
        renderTasks();
      }
    });
  });
}

function renderVideos() {
  const list = document.getElementById("video-list");
  if (!list) return;

  const mod = getActiveModule();
  const videos = mod.videos || [];
  if (videos.length === 0) {
    list.innerHTML = `<li class="task-empty">该模块暂无视频。</li>`;
    return;
  }

  list.innerHTML = videos.map((v) => `
    <li class="video-item">
      <div class="video-info">
        <div class="video-title">${escapeHtml(v.title)}</div>
        <div>
          <span class="video-platform">${escapeHtml(v.platform)}</span>
          <span class="video-tip">${escapeHtml(v.tip || "")}</span>
        </div>
      </div>
      <a class="video-link" href="${escapeHtml(v.url)}" target="_blank" rel="noopener noreferrer">观看</a>
    </li>
  `).join("");
}

function bindAddForm() {
  const form = document.getElementById("add-task-form");
  const input = document.getElementById("task-input");
  if (!form || !input) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const id = `${store.activeId}-${Date.now()}`;
    const tasks = store.tasksByModule[store.activeId];
    tasks.push({ id, text, done: false });
    persist();
    input.value = "";
    renderTasks();
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text == null ? "" : String(text);
  return div.innerHTML;
}

renderNav();
renderTasks();
renderVideos();
bindAddForm();
