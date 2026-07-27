// 创作工作台 · 9 大模块 + 子选项（含视频链接）+ 每日任务清单

const modules = [
  {
    id: "daily-checkin",
    icon: "✅",
    title: "每日打卡",
    subtitle: "舞蹈 · 吉他 · 体态 · 学习",
    options: [
      {
        name: "舞蹈",
        videos: [
          { title: "HipHop 基础律动 30 天计划", platform: "Bilibili", tip: "0 基础入门三阶段", url: "https://search.bilibili.com/all?keyword=HipHop基础律动30天" },
          { title: "街舞动作纠错与细节分析", platform: "Bilibili", tip: "周训练 + 纠错笔记", url: "https://search.bilibili.com/all?keyword=街舞动作纠错" }
        ]
      },
      {
        name: "吉他",
        videos: [
          { title: "电吉他零基础系统入门", platform: "Bilibili", tip: "入门知识 + 乐谱 + 配件", url: "https://search.bilibili.com/all?keyword=电吉他零基础系统入门" },
          { title: "电吉他每日练习 20 分钟", platform: "Bilibili", tip: "爬格子 + 节奏 + 乐句", url: "https://search.bilibili.com/all?keyword=电吉他每日练习" }
        ]
      },
      {
        name: "体态",
        videos: [
          { title: "体态矫正 21 天打卡", platform: "Bilibili", tip: "高低肩 / 脊柱侧弯 / 足弓", url: "https://search.bilibili.com/all?keyword=体态矫正21天打卡" },
          { title: "每日 10 分钟体态训练", platform: "Bilibili", tip: "晨间 / 睡前各 5 分钟", url: "https://search.bilibili.com/all?keyword=每日体态训练10分钟" }
        ]
      },
      {
        name: "学习",
        videos: [
          { title: "30 天每日打卡习惯养成法", platform: "Bilibili", tip: "如何拆解目标、每天打勾", url: "https://search.bilibili.com/all?keyword=30天每日打卡习惯" },
          { title: "高效晨间计划与每日复盘", platform: "Bilibili", tip: "专注力 + 时间管理", url: "https://search.bilibili.com/all?keyword=晨间计划每日复盘" }
        ]
      }
    ],
    defaultTasks: [
      "舞蹈练习 20 分钟",
      "吉他练习 20 分钟",
      "体态训练 10 分钟",
      "完成今日学习任务"
    ]
  },
  {
    id: "english-speaking",
    icon: "🗣️",
    title: "英语口语",
    subtitle: "3 个月计划 + 视频",
    options: [
      {
        name: "第 1 月｜基础发音与输入",
        videos: [
          { title: "英语音标发音系统课", platform: "Bilibili", tip: "48 个音标逐个纠正", url: "https://search.bilibili.com/all?keyword=英语音标发音系统课" },
          { title: "每日英语影子跟读 Shadowing", platform: "YouTube", tip: "听说同步训练", url: "https://www.youtube.com/results?search_query=shadowing+english+speaking" }
        ]
      },
      {
        name: "第 2 月｜日常对话与场景",
        videos: [
          { title: "365 句日常口语跟读", platform: "Bilibili", tip: "吃饭 / 工作 / 社交场景", url: "https://search.bilibili.com/all?keyword=365句日常口语跟读" },
          { title: "英语口语流利说 30 天", platform: "Bilibili", tip: "开口训练 + 自言自语法", url: "https://search.bilibili.com/all?keyword=英语口语流利说30天" }
        ]
      },
      {
        name: "第 3 月｜输出与实战",
        videos: [
          { title: "和外教 1v1 对话实战", platform: "Bilibili", tip: "HiNative / Cambly 体验", url: "https://search.bilibili.com/all?keyword=和外教对话实战" },
          { title: "用英语自言自语训练法", platform: "YouTube", tip: "Self-talk 提升流利度", url: "https://www.youtube.com/results?search_query=self+talk+english+fluency" }
        ]
      }
    ],
    defaultTasks: [
      "今日影子跟读 10 分钟",
      "背 5 个常用口语短句",
      "录音对比昨日纠正发音"
    ]
  },
  {
    id: "operations",
    icon: "📈",
    title: "运营学习",
    subtitle: "0 基础三阶段 + 视频",
    options: [
      {
        name: "阶段 1｜平台规则与账号定位",
        videos: [
          { title: "新媒体运营入门到精通", platform: "Bilibili", tip: "抖音 / 小红书 / B 站规则", url: "https://search.bilibili.com/all?keyword=新媒体运营入门到精通" },
          { title: "账号定位与人设搭建", platform: "Bilibili", tip: "找到你的差异化标签", url: "https://search.bilibili.com/all?keyword=账号定位人设搭建" }
        ]
      },
      {
        name: "阶段 2｜内容生产与文案",
        videos: [
          { title: "爆款文案公式与结构拆解", platform: "Bilibili", tip: "钩子 + 痛点 + 价值", url: "https://search.bilibili.com/all?keyword=爆款文案公式结构" },
          { title: "用户心理与情绪文案写作", platform: "Bilibili", tip: "如何戳中用户情绪", url: "https://search.bilibili.com/all?keyword=用户心理情绪文案" }
        ]
      },
      {
        name: "阶段 3｜数据复盘与增长",
        videos: [
          { title: "短视频数据复盘方法论", platform: "Bilibili", tip: "完播率 / 互动率 / 转化率", url: "https://search.bilibili.com/all?keyword=短视频数据复盘方法论" },
          { title: "从 0 到 1 起号增长案例", platform: "Bilibili", tip: "拆解 5 个涨粉 10w+ 账号", url: "https://search.bilibili.com/all?keyword=从0到1起号增长案例" }
        ]
      }
    ],
    defaultTasks: [
      "学习 1 条运营知识点",
      "复盘昨日作品数据",
      "写出 3 条标题候选"
    ]
  },
  {
    id: "posture",
    icon: "🦴",
    title: "体态矫正专区",
    subtitle: "大小脸 · 脊柱侧弯 · O 型腿 · 足弓",
    options: [
      {
        name: "大小脸",
        videos: [
          { title: "大小脸自我矫正训练", platform: "Bilibili", tip: "咬肌 + 颞肌放松", url: "https://search.bilibili.com/all?keyword=大小脸自我矫正训练" },
          { title: "面部不对称改善跟练", platform: "Bilibili", tip: "每日 5 分钟", url: "https://search.bilibili.com/all?keyword=面部不对称改善跟练" }
        ]
      },
      {
        name: "脊柱侧弯",
        videos: [
          { title: "脊柱侧弯矫正训练", platform: "Bilibili", tip: "施罗斯训练法", url: "https://search.bilibili.com/all?keyword=脊柱侧弯矫正训练" },
          { title: "脊柱侧弯自测 + 改善动作", platform: "Bilibili", tip: "前屈测试 + 日常动作", url: "https://search.bilibili.com/all?keyword=脊柱侧弯自测改善" }
        ]
      },
      {
        name: "O 型腿",
        videos: [
          { title: "O 型腿矫正训练", platform: "Bilibili", tip: "大腿内旋 + 内收肌", url: "https://search.bilibili.com/all?keyword=O型腿矫正训练" },
          { title: "O 型腿绑带法是否靠谱", platform: "Bilibili", tip: "科普 + 正确做法", url: "https://search.bilibili.com/all?keyword=O型腿绑带法" }
        ]
      },
      {
        name: "足弓",
        videos: [
          { title: "扁平足 / 足弓塌陷改善", platform: "Bilibili", tip: "短足训练 + 抓毛巾", url: "https://search.bilibili.com/all?keyword=扁平足足弓塌陷改善" },
          { title: "足弓训练 5 个动作", platform: "Bilibili", tip: "每日 10 分钟", url: "https://search.bilibili.com/all?keyword=足弓训练动作" }
        ]
      }
    ],
    defaultTasks: [
      "大小脸训练 5 分钟",
      "脊柱侧弯矫正 10 分钟",
      "足弓训练 10 分钟"
    ]
  },
  {
    id: "hiphop",
    icon: "🕺",
    title: "Hiphop 舞蹈",
    subtitle: "周训练 + 纠错笔记",
    options: [
      {
        name: "周训练计划",
        videos: [
          { title: "HipHop 基础律动 30 天计划", platform: "Bilibili", tip: "0 基础入门三阶段", url: "https://search.bilibili.com/all?keyword=HipHop基础律动30天" },
          { title: "街舞周训练安排", platform: "Bilibili", tip: "律动 / 控制 / 编舞", url: "https://search.bilibili.com/all?keyword=街舞周训练安排" },
          { title: "HipHop Body Wave 教学", platform: "Bilibili", tip: "Wave / Roll 基础", url: "https://search.bilibili.com/all?keyword=HipHop+Body+Wave教学" }
        ]
      },
      {
        name: "纠错笔记",
        videos: [
          { title: "街舞动作纠错与细节分析", platform: "Bilibili", tip: "Bounce / Rock 常见错误", url: "https://search.bilibili.com/all?keyword=街舞动作纠错" },
          { title: "自学街舞如何录像复盘", platform: "Bilibili", tip: "录像对比 + 逐帧分析", url: "https://search.bilibili.com/all?keyword=自学街舞录像复盘" }
        ]
      }
    ],
    defaultTasks: [
      "今日律动练习 20 分钟",
      "录制 1 段视频做纠错",
      "记录 2 个待改进点"
    ]
  },
  {
    id: "fitness",
    icon: "💪",
    title: "健身训练",
    subtitle: "胸 · 背 · 腿 · 肩 · 核心 · 全身燃脂",
    options: [
      {
        name: "胸",
        videos: [
          { title: "胸肌训练入门（俯卧撑进阶）", platform: "Bilibili", tip: "标准 / 钻石 / 击掌", url: "https://search.bilibili.com/all?keyword=胸肌训练俯卧撑进阶" }
        ]
      },
      {
        name: "背",
        videos: [
          { title: "背部训练（引体向上入门）", platform: "Bilibili", tip: "弹力带辅助 + 划船", url: "https://search.bilibili.com/all?keyword=背部训练引体向上入门" }
        ]
      },
      {
        name: "腿",
        videos: [
          { title: "腿部训练（深蹲标准动作）", platform: "Bilibili", tip: "深蹲 / 箭步蹲 / 臀桥", url: "https://search.bilibili.com/all?keyword=腿部训练深蹲标准动作" }
        ]
      },
      {
        name: "肩",
        videos: [
          { title: "肩部训练（推举 + 飞鸟）", platform: "Bilibili", tip: "前中后束均衡", url: "https://search.bilibili.com/all?keyword=肩部训练推举飞鸟" }
        ]
      },
      {
        name: "核心",
        videos: [
          { title: "核心训练 10 分钟跟练", platform: "Bilibili", tip: "平板支撑 / 死虫 / 举腿", url: "https://search.bilibili.com/all?keyword=核心训练10分钟跟练" }
        ]
      },
      {
        name: "全身燃脂",
        videos: [
          { title: "全身燃脂训练（无器械）", platform: "Bilibili", tip: "HIIT 20 分钟", url: "https://search.bilibili.com/all?keyword=全身燃脂训练无器械" },
          { title: "Tabata 全身燃脂跟练", platform: "Bilibili", tip: "4 分钟高强度", url: "https://search.bilibili.com/all?keyword=Tabata全身燃脂跟练" }
        ]
      }
    ],
    defaultTasks: [
      "今日训练部位 ______",
      "训练时长 30 分钟",
      "记录负重 / 组数 / 次数"
    ]
  },
  {
    id: "guitar",
    icon: "🎸",
    title: "电吉他",
    subtitle: "入门知识 · 乐谱 · 配件",
    options: [
      {
        name: "入门知识",
        videos: [
          { title: "电吉他零基础系统入门", platform: "Bilibili", tip: "持琴 / 拨片 / 调音", url: "https://search.bilibili.com/all?keyword=电吉他零基础系统入门" },
          { title: "电吉他音阶与指法", platform: "Bilibili", tip: "C 大调 / 五声音阶", url: "https://search.bilibili.com/all?keyword=电吉他音阶指法" }
        ]
      },
      {
        name: "乐谱",
        videos: [
          { title: "电吉他六线谱怎么看", platform: "Bilibili", tip: "TAB 谱入门", url: "https://search.bilibili.com/all?keyword=电吉他六线谱怎么看" },
          { title: "电吉他入门乐谱 10 首", platform: "Bilibili", tip: "简单riff + solo", url: "https://search.bilibili.com/all?keyword=电吉他入门乐谱" }
        ]
      },
      {
        name: "配件",
        videos: [
          { title: "电吉他配件选购指南", platform: "Bilibili", tip: "效果器 / 线材 / 拨片", url: "https://search.bilibili.com/all?keyword=电吉他配件选购指南" },
          { title: "电吉他音箱怎么选", platform: "Bilibili", tip: "练习音箱推荐", url: "https://search.bilibili.com/all?keyword=电吉他音箱怎么选" }
        ]
      }
    ],
    defaultTasks: [
      "爬格子热身 5 分钟",
      "练习 1 条乐句 / riff",
      "录音回听找问题"
    ]
  },
  {
    id: "short-video",
    icon: "🎬",
    title: "短视频选题",
    subtitle: "每日平台热点抓取分类 + 启示",
    options: [
      {
        name: "抖音热点",
        videos: [
          { title: "抖音热点榜怎么看", platform: "抖音", tip: "热点宝 / 巨量算数", url: "https://www.douyin.com/search/%E6%8A%96%E9%9F%B3%E7%83%AD%E7%82%B9%E6%A6%9C" },
          { title: "抖音爆款选题方法论", platform: "Bilibili", tip: "选题 4 大原则", url: "https://search.bilibili.com/all?keyword=抖音爆款选题方法论" }
        ]
      },
      {
        name: "小红书热点",
        videos: [
          { title: "小红书爆款笔记拆解", platform: "Bilibili", tip: "封面 + 标题 + 正文", url: "https://search.bilibili.com/all?keyword=小红书爆款笔记拆解" },
          { title: "小红书热点话题怎么蹭", platform: "Bilibili", tip: "蹭热点不翻车", url: "https://search.bilibili.com/all?keyword=小红书蹭热点" }
        ]
      },
      {
        name: "B 站热点",
        videos: [
          { title: "B 站热门视频拆解", platform: "Bilibili", tip: "分区热榜 + 频道", url: "https://search.bilibili.com/all?keyword=B站热门视频拆解" },
          { title: "B 站 UP 主选题技巧", platform: "Bilibili", tip: "如何找差异化选题", url: "https://search.bilibili.com/all?keyword=B站UP主选题技巧" }
        ]
      },
      {
        name: "给我的启示",
        videos: [
          { title: "如何从热点中得到选题启示", platform: "Bilibili", tip: "热点 → 我的领域", url: "https://search.bilibili.com/all?keyword=热点选题启示" },
          { title: "热点二创思路汇总", platform: "Bilibili", tip: "模板 / 反转 / 整活", url: "https://search.bilibili.com/all?keyword=热点二创思路" }
        ]
      }
    ],
    defaultTasks: [
      "抓取 3 条今日热点并分类",
      "筛选 1 条可二创选题",
      "写出 3 条标题候选 + 我的启示"
    ]
  },
  {
    id: "finance",
    icon: "💰",
    title: "每日金融小知识",
    subtitle: "股票 · 基金 · 宏观 · 实战",
    options: [
      {
        name: "股票",
        videos: [
          { title: "股票入门基础知识", platform: "Bilibili", tip: "K 线 / 均线 / 量能", url: "https://search.bilibili.com/all?keyword=股票入门基础知识" },
          { title: "新手炒股常见误区", platform: "Bilibili", tip: "追涨杀跌 / 满仓", url: "https://search.bilibili.com/all?keyword=新手炒股常见误区" }
        ]
      },
      {
        name: "基金",
        videos: [
          { title: "基金定投入门", platform: "Bilibili", tip: "指数基金 / 定投策略", url: "https://search.bilibili.com/all?keyword=基金定投入门" },
          { title: "基金怎么选才不亏", platform: "Bilibili", tip: "晨星评级 / 最大回撤", url: "https://search.bilibili.com/all?keyword=基金怎么选才不亏" }
        ]
      },
      {
        name: "宏观",
        videos: [
          { title: "宏观经济指标怎么看", platform: "Bilibili", tip: "CPI / PMI / LPR", url: "https://search.bilibili.com/all?keyword=宏观经济指标怎么看" },
          { title: "美联储加息对 A 股影响", platform: "Bilibili", tip: "汇率 / 资金流向", url: "https://search.bilibili.com/all?keyword=美联储加息对A股影响" }
        ]
      },
      {
        name: "实战",
        videos: [
          { title: "个人理财资产配置实战", platform: "Bilibili", tip: "4321 法则", url: "https://search.bilibili.com/all?keyword=个人理财资产配置实战" },
          { title: "复盘我的投资日记", platform: "Bilibili", tip: "记录交易逻辑", url: "https://search.bilibili.com/all?keyword=复盘投资日记" }
        ]
      }
    ],
    defaultTasks: [
      "看 1 条金融小知识视频",
      "记录 1 个核心知识点",
      "复盘今日持仓 / 观察"
    ]
  }
];

// ---------- 持久化 ----------

const STORE_KEY = "create-workbench-v3";

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
  } catch (e) {}
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
  return { activeId: modules[0].id, tasksByModule };
}

let store = loadStore() || defaultStore();
modules.forEach((m) => {
  if (!store.tasksByModule[m.id]) {
    store.tasksByModule[m.id] = m.defaultTasks.map((text, i) => ({
      id: `${m.id}-init-${i}`,
      text,
      done: false
    }));
  }
});

function persist() { saveStore(store); }

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
        renderContent();
      }
    });
  });
}

function renderContent() {
  const mod = getActiveModule();
  document.getElementById("module-title").textContent = `${mod.icon} ${mod.title}`;
  document.getElementById("module-subtitle").textContent = mod.subtitle;
  renderTasks();
  renderOptions();
}

function renderTasks() {
  const list = document.getElementById("task-list");
  const progress = document.getElementById("task-progress");
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
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); onToggle(); }
    });
    const del = item.querySelector(".task-delete");
    del.addEventListener("click", () => {
      const tasks = store.tasksByModule[store.activeId];
      const idx = tasks.findIndex((x) => x.id === id);
      if (idx >= 0) { tasks.splice(idx, 1); persist(); renderTasks(); }
    });
  });
}

function renderOptions() {
  const wrap = document.getElementById("options");
  const mod = getActiveModule();
  wrap.innerHTML = mod.options.map((opt, i) => `
    <div class="option-card" data-idx="${i}">
      <button class="option-header" aria-expanded="false">
        <span class="option-name">${escapeHtml(opt.name)}</span>
        <span class="option-count">${opt.videos.length} 个视频</span>
        <span class="arrow" aria-hidden="true">›</span>
      </button>
      <div class="option-body">
        <ul class="video-list">
          ${opt.videos.map((v) => `
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
          `).join("")}
        </ul>
      </div>
    </div>
  `).join("");
  wrap.querySelectorAll(".option-card").forEach((card) => {
    const header = card.querySelector(".option-header");
    header.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      header.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
}

function bindAddForm() {
  const form = document.getElementById("add-task-form");
  const input = document.getElementById("task-input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const id = `${store.activeId}-${Date.now()}`;
    store.tasksByModule[store.activeId].push({ id, text, done: false });
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
renderContent();
bindAddForm();
