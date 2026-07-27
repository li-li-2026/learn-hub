// 左侧 4 大模块 + 每个模块的子任务、视频、知识点
// 原 10 个任务（每日打卡 / 健身训练 / 体态矫正 / 英语口语 / 运营学习
// / 短视频选题 / HipHop 舞蹈 / 电吉他 / 每日金融小知识 / 好物选购与情绪记录）
// 已全部揉和到下列四大类中。

const modules = [
  {
    id: "daily-plan",
    icon: "📅",
    title: "每日计划",
    subtitle: "打卡 · 体态 · 情绪 · 选购",
    // 揉和：每日打卡 / 体态矫正专区 / 情绪备忘录 / 好物选购
    defaultTasks: [
      "完成今日 4 大类学习任务打卡",
      "体态矫正训练（高低肩 / 脊柱侧弯 / O 型腿 / 足弓）",
      "记录今日情绪与人际复盘",
      "对比 1 件待购物品（吉他 / 课程 / 日用品）",
      "复盘昨日完成情况，调整明日计划"
    ],
    videos: [
      {
        title: "30 天每日打卡习惯养成法",
        platform: "Bilibili",
        tip: "每日打卡 · 如何拆解目标、每天打勾",
        url: "https://search.bilibili.com/all?keyword=30天每日打卡习惯"
      },
      {
        title: "体态矫正专区｜高低肩 / 脊柱侧弯 / O 型腿 / 足弓",
        platform: "Bilibili",
        tip: "体态矫正 · 21 天打卡训练",
        url: "https://search.bilibili.com/all?keyword=体态矫正高低肩脊柱侧弯O型腿足弓"
      },
      {
        title: "情绪管理与日记复盘技巧",
        platform: "Bilibili",
        tip: "情绪记录 · 人际避雷与边界感",
        url: "https://search.bilibili.com/all?keyword=情绪管理日记复盘"
      },
      {
        title: "理性消费与好物比价思维",
        platform: "Bilibili",
        tip: "好物选购 · 比价与消费决策",
        url: "https://search.bilibili.com/all?keyword=理性消费好物比价"
      }
    ]
  },
  {
    id: "topic-inspiration",
    icon: "💡",
    title: "选题每日灵感",
    subtitle: "选题 · 文案 · 运营",
    // 揉和：短视频选题 / 运营学习
    defaultTasks: [
      "抓取 3 条今日热点（抖音 / 小红书 / B 站）",
      "筛选 1 条可二创的短视频选题",
      "写出 3 条标题候选与钩子文案",
      "复盘昨日作品数据，调整选题方向",
      "学习 1 条新媒体运营知识点"
    ],
    videos: [
      {
        title: "短视频爆款选题方法论",
        platform: "Bilibili",
        tip: "短视频选题 · 4 大核心原则",
        url: "https://search.bilibili.com/all?keyword=短视频爆款选题方法论"
      },
      {
        title: "爆款文案公式与结构拆解",
        platform: "Bilibili",
        tip: "文案复盘 · 钩子 + 痛点 + 价值",
        url: "https://search.bilibili.com/all?keyword=爆款文案公式结构"
      },
      {
        title: "用户心理与情绪文案写作",
        platform: "Bilibili",
        tip: "运营学习 · 如何戳中用户情绪",
        url: "https://search.bilibili.com/all?keyword=用户心理情绪文案"
      },
      {
        title: "新媒体运营入门到精通",
        platform: "Bilibili",
        tip: "运营学习 · 选题 / 排版 / 数据复盘",
        url: "https://search.bilibili.com/all?keyword=新媒体运营入门到精通"
      },
      {
        title: "热点追踪与抖音选题灵感",
        platform: "抖音",
        tip: "短视频选题 · 热门 BGM / 模板",
        url: "https://www.douyin.com/search/%E7%9F%AD%E8%A7%86%E9%A2%91%E9%80%89%E9%A2%98"
      }
    ]
  },
  {
    id: "hot-video",
    icon: "🔥",
    title: "爆款热点视频 / 二创",
    subtitle: "拆解 · 二次创作",
    // 揉和：短视频选题（爆款拆解）/ HipHop 二创 / 电吉他二创
    defaultTasks: [
      "拆解 1 条本周热门视频（3 秒钩子 / 情绪曲线 / 结尾反转）",
      "找出可二创的爆点结构与 BGM",
      "用 HipHop / 电吉他素材完成 1 条二创脚本",
      "检查二创版权合规与原创度",
      "发布并追踪数据复盘"
    ],
    videos: [
      {
        title: "如何拆解爆款视频结构",
        platform: "Bilibili",
        tip: "爆款拆解 · 3 秒钩子 / 情绪曲线 / 结尾反转",
        url: "https://search.bilibili.com/all?keyword=拆解爆款视频结构"
      },
      {
        title: "二创视频的合规与爆点技巧",
        platform: "Bilibili",
        tip: "二创 · 避开版权 + 制造共鸣",
        url: "https://search.bilibili.com/all?keyword=二创视频技巧爆点"
      },
      {
        title: "用 Hiphop 舞蹈做二创内容",
        platform: "Bilibili",
        tip: "HipHop 二创 · 音乐 + 视觉双爆点",
        url: "https://search.bilibili.com/all?keyword=HipHop舞蹈二创视频"
      },
      {
        title: "电吉他翻奏与二创剪辑",
        platform: "Bilibili",
        tip: "电吉他二创 · 翻奏 + 节奏卡点",
        url: "https://search.bilibili.com/all?keyword=电吉他翻奏二创剪辑"
      },
      {
        title: "抖音热点追踪与爆款复盘",
        platform: "抖音",
        tip: "爆款热点 · 热门 BGM / 模板 / 文案",
        url: "https://www.douyin.com/search/%E7%88%86%E6%AC%BE%E7%83%AD%E7%82%B9"
      }
    ]
  },
  {
    id: "personal-growth",
    icon: "🌱",
    title: "个人成长计划",
    subtitle: "舞蹈 · 吉他 · 口语 · 健身 · 金融",
    // 揉和：HipHop 舞蹈 / 电吉他 / 英语口语 / 健身训练 / 每日金融小知识
    defaultTasks: [
      "HipHop 舞蹈练习 20 分钟（基础律动 + 动作纠错）",
      "电吉他练习 20 分钟（入门知识 + 乐谱 + 配件）",
      "英语口语影子跟读 10 分钟",
      "健身训练 30 分钟（胸 / 背 / 腿 / 肩 / 核心）",
      "看 1 条每日金融小知识视频"
    ],
    videos: [
      {
        title: "HipHop 基础律动 30 天计划",
        platform: "Bilibili",
        tip: "HipHop 舞蹈 · 0 基础入门三阶段",
        url: "https://search.bilibili.com/all?keyword=HipHop基础律动30天"
      },
      {
        title: "街舞动作纠错与细节分析",
        platform: "Bilibili",
        tip: "HipHop 舞蹈 · 周训练计划 + 纠错笔记",
        url: "https://search.bilibili.com/all?keyword=街舞动作纠错"
      },
      {
        title: "电吉他零基础系统入门",
        platform: "Bilibili",
        tip: "电吉他 · 入门知识 + 乐谱 + 配件",
        url: "https://search.bilibili.com/all?keyword=电吉他零基础系统入门"
      },
      {
        title: "每日英语口语影子跟读 Shadowing",
        platform: "YouTube",
        tip: "英语口语 · 听说同步训练",
        url: "https://www.youtube.com/results?search_query=shadowing+english+speaking"
      },
      {
        title: "全身燃脂训练（无器械）",
        platform: "Bilibili",
        tip: "健身训练 · 胸背腿肩 / 核心训练",
        url: "https://search.bilibili.com/all?keyword=全身燃脂训练无器械"
      },
      {
        title: "每日金融小知识｜股票 / 基金 / 宏观入门",
        platform: "Bilibili",
        tip: "每日金融小知识 · 实战派理财",
        url: "https://search.bilibili.com/all?keyword=每日金融小知识股票基金"
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
