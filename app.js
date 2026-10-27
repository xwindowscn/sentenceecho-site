/* ============================================================
   SentenceEcho 官网 — 双语切换 / 截图联动 / 滚动出现
   无外部依赖；文案默认中文，英文见 I18N.en。
   ============================================================ */

(function () {
  "use strict";

  // 下载地址：发布时改成 CDN / Releases 直链即可（只需改这一行）
  var DOWNLOAD_URL = "https://github.com/xwindowscn/sentenceecho-downloads/releases/latest/download/SentenceEcho-Voice-0.1.0.dmg";

  var I18N = {
    zh: {
      meta_title: "SentenceEcho 逐句 — 最强大的复读、学习、播放软件（macOS）",
      meta_desc: "SentenceEcho（逐句）是 macOS 英语听写软件：按句复读、Word 式 .docx 文稿、跟随校验、音标查字、本地生成字幕、硬字幕处理与错词本，全部在同一个窗口，本地运行。",
      og_title: "SentenceEcho 逐句 — 最强大的复读、学习、播放软件",
      og_desc: "播放器、Word 式文稿、跟随校验、音标查字与错词本，在同一个窗口里完成一次听写。",
      shot_alt: "SentenceEcho 主界面：上方播放与字幕，下方 Word 式文稿",

      skip: "跳到正文",
      nav_label: "主导航",
      nav_pains: "痛点",
      nav_modules: "模块",
      nav_compare: "对比",
      nav_pipeline: "流水线",
      nav_keys: "快捷键",
      nav_download: "下载",

      hero_eb: "macOS 英语听写 · 本地运行",
      hero_h1_1: "把听到的话，",
      hero_h1_2: "一句一句听写下来。",
      hero_tag: "最强大的复读、学习、播放软件",
      hero_lead: "播放器、Word 式文稿、逐句校验、音标查字，都在同一个窗口。听到一句就写一句：写对了自动往下走，写错了就停在这句反复听。",
      cta_dl: "下载 macOS 版",
      cta_how: "看它怎么工作",
      hero_meta: "免费 · macOS 13+ · Apple 芯片 · 素材不出本机",
      facts_label: "产品要点",

      fact1_k: "播放", fact1_v: "通用播放器 · 格式尽量广",
      fact2_k: "复读", fact2_v: "按句，不按秒",
      fact3_k: "文稿", fact3_v: "真 .docx · Word 可打开",
      fact4_k: "查字", fact4_v: "20 万词 · 统一英式音标",
      fact5_k: "运行", fact5_v: "本地 · 素材不出本机",
      fact6_k: "价格", fact6_v: "免费",

      shot_cap_l: "同一窗口：播放、字幕、Word 式文稿；左侧两棵独立文件树",
      shot_cap_r: "SentenceEcho · macOS",

      legs_label: "播放、复读、学习",
      leg1_k: "播放", leg1_h: "也是一个通用播放器",
      leg1_p: "本地 mpv 内核，常见视频与音频格式尽量广。字幕、变速、音量、全屏、上下或左右布局——日常看片听音，打开就用。",
      leg2_k: "复读", leg2_h: "复读按句，不按秒",
      leg2_p: "单句循环、重复 N 次自动前进、A–B 区间、跟读留白。⇧← / ⇧→ 按句跳，不再拖进度条对起点终点。",
      leg3_k: "学习", leg3_h: "听写在同一个窗口完成",
      leg3_p: "Word 式 .docx 文稿、跟随校验、按音查字、错词本，从第一句到交稿不换应用。",

      sec1_eb: "01 · 痛点",
      pains_h: "听了很久，为什么还是听不懂",
      pains_sub: "七个卡点，每一个都不是「再多听一点」能解决的。",

      p1_t: "听懂一点就切走，一年下来还停在「泛听」",
      p1_p: "看剧、刷播客，注意力跟着情节走；声音进过耳朵，却没有一句被你写下来。没有落笔，就没有真正的理解。",
      p1_s: "一句一段，强制落笔。先按句复读，再把听到的写下来——写不出来，就是这一句还没听懂。",
      p2_t: "一句话要拖五六次进度条",
      p2_p: "市面播放器的循环是「按时间」的 A–B：起点早一点、终点晚一点，一句要手动对齐五六次，还常常吞掉开头。",
      p2_s: "复读按句子走：单句循环、重复 N 次后自动前进、A–B 标段、跟读留白。⇧← / ⇧→ 直接跳句，不用再和进度条较劲。",
      p3_t: "听写要开三个软件",
      p3_p: "播放器放音、Word 写稿、词典查词。每查一个词就切一次窗口，注意力断了，刚才那句的语流也接不上了。",
      p3_s: "一个窗口：播放区、字幕条、Word 式文稿上下（或左右）相接，查字在同一个界面浮出，光标不离开文稿。",
      p4_t: "音认识，字不认，字典按拼写根本查不到",
      p4_p: "你听得清 /bɜːd/，却拼不出 bird。字典按拼写查，拼不出来就查不到——越查不到，越不敢写。",
      p4_s: "按音查字：敲音标 b3rd 得到 bird，敲 reinbou 得到 rainbow。20 万词，统一英式音标，回车插入。",
      p5_t: "写完不知道对不对",
      p5_p: "交上去没人改，自己也不确定；错了的地方没有标记，下次还会错在同一个词上。",
      p5_s: "一键校验：对→自动进下一句；错→停住并循环这一句，直到你改对；实在过不去可以跳过，错词自动进错词本。",
      p6_t: "硬字幕挡不住，看着看着变成「读字幕」",
      p6_p: "字幕烧在画面里，视线自然往下掉；以为在练听力，其实在做阅读理解。",
      p6_s: "听写时字幕自动隐藏；需要干净素材就处理硬字幕：遮罩、裁剪、快速涂抹、逐帧去字幕，生成新文件，原片一键恢复。",
      p7_t: "学完的词记不住，错词没有沉淀",
      p7_p: "当时查过、当时改对，过后没有沉淀；错过的词散落在不同文件里，没法集中复习。",
      p7_s: "错词本自动收集写错的词，按错误次数排序，记下出处句子，一键导出 Excel。",

      sec2_eb: "02 · 核心模块",
      mods_h: "一个窗口里，八个模块",
      mods_sub: "从播放到交稿，每一件都在它该在的位置上。",
      m_lbl_solve: "解决什么", m_lbl_how: "怎么用",

      m1_t: "播放器",
      m1_solve: "日常看视频、听音频也要顺手，不能只有学习时才打开。",
      m1_how: "⌘O 打开本地视频或音频；字幕自动找；⌘↑ / ⌘↓ 变速，⌥⌘L 换布局，⌃⌘F 全屏。",
      m1_c1: "本地 mpv 内核",
      m1_c2: "视频 mp4 / mkv / mov / m4v / webm / avi 等",
      m1_c3: "音频 mp3 / m4a / wav / flac / aac / ogg 等",
      m1_c4: "字幕 srt / ass / vtt，外挂或内嵌",
      m1_c5: "0.5×–3.0× 不变调",
      m1_c6: "上下 / 左右布局；纯音频无画面",

      m2_t: "复读引擎",
      m2_solve: "手动拖进度条对不齐，循环按时间不按句。",
      m2_how: "⇧R 单句循环；N 设重复次数，播 N 遍自动下一句；A / B 标段；G 留跟读间隔；⇧← / ⇧→ 按句跳。",
      m2_c1: "按句，不按秒",
      m2_c2: "单句循环",
      m2_c3: "重复 N 次自动前进",
      m2_c4: "A–B 区间",
      m2_c5: "跟读留白",

      m3_t: "文稿区",
      m3_solve: "听写要另开 Word，切窗口、复制粘贴、再排版。",
      m3_how: "在播放区下方直接写；⌘S 存成 .docx；同名文稿下次自动带出，草稿自动保存。",
      m3_c1: "真 .docx 读写",
      m3_c2: "字体 · 字号 · 颜色 · 高亮",
      m3_c3: "对齐 · 列表 · 行距",
      m3_c4: "一句一段",
      m3_c5: "自动草稿",
      m3_c6: "同名文稿配对",

      m4_t: "跟随校验",
      m4_solve: "写完不知道对错，错了也没人逼你改。",
      m4_how: "⌘D 进入听写（字幕隐藏，光标落回文稿）；⌘↩ 校验：对→下一句，错→停住重播；⌥⌘↩ 跳过。",
      m4_c1: "三级判定",
      m4_c2: "对 → 自动前进",
      m4_c3: "错 → 卡住并重播",
      m4_c4: "可跳过",
      m4_c5: "连错 3 次自动降速",
      m4_c6: "错词进错词本",

      m5_t: "音标拼写查字",
      m5_solve: "认识音、不认字，字典按拼写查不到。",
      m5_how: "⌥> 唤出查字；音素键盘点选，或直接打 b3rd、reinbou 这样的音标与听感拼写。",
      m5_c1: "20 万词",
      m5_c2: "统一英式音标",
      m5_c3: "音素键盘 + ASCII 别名",
      m5_c4: "拼写模糊匹配",
      m5_c5: "一行结果，回车插入",

      m6_t: "硬字幕处理",
      m6_solve: "字幕烧死在画面里，看着看着就变成读字幕。",
      m6_how: "⌥⌘S 遮罩，高度 5%–60%（按画面实际区域算，黑边不影响）；⌘/ 逐帧去字幕（较慢、无糊边），⌥⌘/ 裁剪（更快）；都生成新文件，不动原片。",
      m6_c1: "遮罩（按画面区域）",
      m6_c2: "裁剪（更快）",
      m6_c3: "快速涂抹",
      m6_c4: "逐帧去字幕",
      m6_c5: "高度 5%–60%",
      m6_c6: "生成新文件",
      m6_c7: "一键恢复原片",

      m7_t: "错词本",
      m7_solve: "学完的词记不住，错词散在各处没有沉淀。",
      m7_how: "⌥< 打开错词本；校验时自动收集，按错误次数排序，一键导出 .xlsx。",
      m7_c1: "自动收集",
      m7_c2: "按错误次数排序",
      m7_c3: "保留出处句子",
      m7_c4: "导出 Excel",
      m7_c5: "可清空",

      m8_t: "全局键盘",
      m8_solve: "鼠标一动，注意力就离开刚才那句。",
      m8_how: "每个动作都有键位，顶部快捷条也能点；听写时单键让位给打字，⌘ / ⌥ 组合始终可用。",
      m8_c1: "两套绑定",
      m8_c2: "快捷条可点",
      m8_c3: "单键让位给打字",
      m8_c4: "⌘ 组合始终可用",
      m8_c5: "全部可改键",

      spot_eb: "无字幕 · 本地生成",
      spot_h: "没有字幕，也能直接开始",
      spot_sub: "英文素材没有 .srt？不用到处找字幕。本地识别先把声音切成句子，转完就进复读与听写。",
      spot1_t: "本地出字幕",
      spot1_p: "没有字幕轨时，本地 whisper.cpp 自动识别成句，不用再去下载 .srt。",
      spot2_t: "转完即听写",
      spot2_p: "生成的句子表直接可用：按句循环、按句跳、逐句校验，不需要二次导入。",
      spot3_t: "再开秒出",
      spot3_p: "转写结果按「文件 + 模型」缓存；同一素材再打开不重转。",
      spot_note: "识别在本机运行，音频不上传。识别引擎与多语种模型已内置在安装包里（约 160 MB），装好即用、全程离线。",

      sec3_eb: "03 · 对比",
      eng_h: "两个真正干活的引擎：听音查字、任意 A-B",
      eng_sub: "市面上的播放器大多只管\"放\"，查词要另开词典、循环只能按秒拖。这两件事在这里是内置的。",
      eng1_t: "内置听音查字 / 拼写查字引擎",
      eng1_p1: "听到一个词却拼不出来——这是听力练习里最常见的卡点。这里不靠\"你会拼\"，而靠\"你听到的音\"：在音素键盘上按音打音标（b3rd → bird、reinbou → rainbow），也可以直接拼个大概。",
      eng1_p2: "20 万词库、统一英式音标、音素级模糊匹配（同距离按词频，常用词在前）；拼写模式里\"完全拼对的词永远第一\"，前缀同族紧随其后（doom → dooms/doomy）。结果一行显示，回车插入并关闭。",
      eng2_t: "任意 A-B：起止自己定，不依赖字幕",
      eng2_p1: "按 ⌘[ 设 A 点、⌘] 设 B 点，就在任意两处之间来回播——可跨句、可只练半句、可卡住一个长句的中间难点；Esc 一键取消。",
      eng2_p2: "区间在进度条上用洋红色带标出，A/B 端点看得见；没有字幕的素材同样可用。循环中随时可跳上一句/下一句，不会和 A-B 打架。",
      r3_h: "复读不是一种模式，而是三档：覆盖约 90% 的真实使用场景",
      r3_sub: "同一个键区解决三种练法，不用在设置里翻来翻去。",
      r3_1t: "① 任意 A-B 段复读",
      r3_1p: "⌘[ / ⌘] 定起止，跨句、半句、长句中间都能卡；进度条上有洋红色带和 A/B 端点，Esc 取消。",
      r3_2t: "② 当前句复读",
      r3_2p: "⇧⌘R 随时把这一句从头再来；听漏了、走神了，一下回到这句起点。",
      r3_3t: "③ 单句任意次数循环",
      r3_3p: "⌘R 开启单句循环；循环次数可设 0（无限）或 n（每句播 n 遍后自动进下一句），状态栏实时显示。",
      r3_p2: "配合「按句播放听写」：一句一句放、一句一句写，写完 ⌘↩ 校验——对了自动进下一句，错了停在这句反复听，直到改对。",
      r3_p3: "界面为「轻松听、轻松写」设计：播放器、文稿、校验、查词在同一个窗口，左边状态栏实时列出当前生效的操作，不需要在几个软件之间来回切。",
      wf_h: "查词即插入，错词自动沉淀",
      wf_1t: "查词结果自动填充",
      wf_1p: "查到词后按回车（或双击、或点按钮），词就直接填进文稿当前光标处，对话框随即关闭——不用复制、不用切换、不会打断听写节奏。",
      wf_2t: "错词自动积累 · 自由导出",
      wf_2p: "校验时写错、漏写的词会自动记进错词本，按错误次数与最近时间排序，附来源素材与所在句子；一键导出 Excel，随时做成自己的复习清单。",
      cmp_h: "和现有工具比，差在哪一列",
      cmp_sub: "按品类归纳，不针对具体产品。功能有无只是表象；能不能连成一条线，才是差别。",
      cmp_caption: "SentenceEcho 与同类工具的功能对照",
      cmp_cap: "能力",
      cmp_us: "SentenceEcho",
      cmp_c1: "通用播放器",
      cmp_c2: "泛听 · 课程 App",
      cmp_c3: "精听 · 听写工具",
      cmp_c4: "词典 · 发音工具",
      cmp_c5: "转录工具",
      cmp_r1: "句级复读（按句不按秒）",
      cmp_r2: "重复 N 次后自动前进",
      cmp_r3: "跟读留白",
      cmp_r4: "同窗 Word 式 .docx 文稿",
      cmp_r5: "跟随校验与错句回环",
      cmp_r6: "按音（音标）查字",
      cmp_r7: "硬字幕处理",
      cmp_r8: "本地自动生成英文字幕",
      cmp_r9: "生成字幕后直接进入听写",
      cmp_r10: "本地离线",
      cmp_r11: "素材自由度",
      cmp_r12: "价格",
      v_yes: "支持", v_no: "不提供", v_na: "未核实", v_partial: "部分", v_free: "免费",
      cmp_note: "※ 品类归纳，非逐家评测。「部分」表示该品类中常见但不普遍，「—」表示通常不提供，不代表不存在例外。竞品价格与版本未逐家核实，故留空。本产品的本地字幕生成需另装识别引擎与英文模型。",
      cmp_hint: "← 左右滑动查看完整表格 →",

      sec4_eb: "04 · 独一无二的整合",
      pipe_h_a: "单点各有工具，",
      pipe_h_b: "串成一条线只有这一个窗口",
      pipe_sub: "听写的七步，不换应用、不复制粘贴、不重排格式。",
      pipe_badge: "同一条听写流水线",
      ps1_t: "打开素材", ps1_d: "视频、音频、字幕三支路；没字幕就本地生成",
      ps2_t: "按句复读", ps2_d: "单句循环、N 次、跟读留白",
      ps3_t: "边听边写", ps3_d: "Word 式文稿就在下方",
      ps4_t: "校验回环", ps4_d: "对了前进，错了停住重播",
      ps5_t: "按音查字", ps5_d: "卡住的词当场反查",
      ps6_t: "保存 .docx", ps6_d: "真文档，格式不丢",
      ps7_t: "错词沉淀", ps7_d: "自动进错词本，可按次数排序",
      pipe_b1: "全程一个窗口", pipe_b2: "素材不出本机", pipe_b3: "手不离键盘",
      pipe_note: "播放器能播不能教，课程 App 能听不能写，听写工具让你另开 Word，词典按拼写查，转录工具只给字幕。把这几件事按听写的顺序排进同一个窗口的，我们只见过这一个。",

      sec5_eb: "05 · 学习便利性",
      stats_h: "少切换、少操作、少打断",
      stats_sub: "把「方便」写成可以数的次数，而不是形容词。",
      st1_label: "一次听写里切换应用的次数",
      st1_note: "口径：10 分钟素材、约 40 句，原本在播放器、Word、词典之间来回切。",
      st2_label: "复读同一句的操作次数",
      st2_note: "原本要拖进度条对齐起点与终点；现在 ⇧R，或一次 ⌘R。",
      st3_label: "同时打开的软件数",
      st3_note: "播放、写稿、查字共用一个窗口，文稿还在原处。",
      st4_label: "手离开键盘的次数",
      st4_note: "快捷条也能点，但每个动作都有键位；单键在打字时自动让位。",
      stats_note: "以上是我们在该场景下的设计目标口径，不是第三方统计。",
      esc_h: "Esc 一键退一层",
      esc_p: "A–B 区间、单句循环、重复次数、跟读间隔、遮挡字幕、听写、视频独占——按一下退一层，不用回头找开关。",

      sec6_eb: "06 · 快捷键",
      keys_h_a: "每个动作都有键，",
      keys_h_b: "手不用离开键盘",
      keys_sub: "两套绑定：⌘ / ⌥ 组合在听写打字时依然生效；单键只在焦点不在文本框时生效。全部可在设置里改键。",
      keys_g1: "听写中始终可用", keys_tag1: "⌘ / ⌥ 组合",
      keys_g2: "播放时单键", keys_tag2: "焦点不在文本框",

      k_play: "播放 / 暂停",
      k_replay: "重播本句",
      k_loop: "单句循环开关",
      k_prevnext: "上一句 / 下一句",
      k_repeat: "重复次数（N 次后前进）",
      k_gap: "跟读留白开关",
      k_markab: "标记 A 点 / B 点",
      k_clear_ab: "取消 A–B / 退出当前模式",
      k_dict: "进入 / 退出听写",
      k_check: "校验当前句",
      k_skip: "跳过这句",
      k_lookup: "音标 / 拼写查字",
      k_wordbook: "错词本",
      k_subs: "显示 / 隐藏字幕",
      k_mask: "遮罩硬字幕",
      k_maskresize: "调整遮挡高度（5%–60%）",
      k_repair: "逐帧去字幕（较慢、无糊边）",
      k_crop: "裁剪去字幕（更快）",
      k_layout: "切换上下 / 左右布局",
      k_full: "全屏",
      k_open: "打开媒体 / 打开 .docx",
      k_save: "保存 .docx / 导出",

      kp_play: "播放 / 暂停",
      kp_replay: "重播本句",
      kp_loop: "单句循环",
      kp_prevnext: "上一句 / 下一句",
      kp_seek: "后退 / 前进 5 秒",
      kp_nudge: "微调 1 秒",
      kp_speed: "加快 / 放慢语速",
      kp_vol: "音量",
      kp_markab: "标记 A 点 / B 点",
      kp_repeat: "重复次数",
      kp_gap: "跟读间隔 / 设置间隔",
      kp_dict: "进入 / 退出听写",
      kp_svfm: "字幕 / 静音 / 全屏",
      kp_layout: "切换布局",
      kp_help: "快捷键帮助",

      sec7_eb: "07 · 下载",
      dl_h: "下载 SentenceEcho",
      dl_p: "免费。macOS 13 或更新，Apple 芯片。安装包未做 Apple 签名——第一次打开请右键 →「打开」。",
      dl_btn: "下载 .dmg（约 160 MB）",
      dl_c1: "macOS 13+", dl_c2: "Apple 芯片", dl_c3: "约 160 MB", dl_c4: "免费",
      dl_note: "识别在本机完成（whisper.cpp），素材与文稿不上传。识别引擎与多语种模型已内置，装好即用，无需另外安装任何依赖。",

      foot_nav_label: "页脚导航",
      foot_tag: "SentenceEcho 是 Yellowfir Group Limited 的产品。",
      foot_top: "回到顶部 ↑"
    },

    en: {
      meta_title: "SentenceEcho — The most powerful repeat, study and play app for macOS",
      meta_desc: "SentenceEcho is a macOS dictation app for English: sentence-level repeat, a Word-style .docx manuscript, follow-along checking, IPA lookup, local subtitle generation and a word book — all in one window.",
      og_title: "SentenceEcho — The most powerful repeat, study and play app",
      og_desc: "Player, Word-style manuscript, follow-along checking, lookup by sound and a word book, in one window.",
      shot_alt: "SentenceEcho main window: player and subtitles above, Word-style manuscript below",

      skip: "Skip to content",
      nav_label: "Main navigation",
      nav_pains: "Pain points",
      nav_modules: "Modules",
      nav_compare: "Compare",
      nav_pipeline: "Pipeline",
      nav_keys: "Shortcuts",
      nav_download: "Download",

      hero_eb: "macOS dictation · runs locally",
      hero_h1_1: "Write down what you hear —",
      hero_h1_2: "one sentence at a time.",
      hero_tag: "The most powerful repeat, study and play app",
      hero_lead: "Player, Word-style manuscript, sentence-by-sentence checking and IPA lookup in one window. Write each sentence as you hear it: right moves you on, wrong holds you there until it is fixed.",
      cta_dl: "Download for macOS",
      cta_how: "See how it works",
      hero_meta: "Free · macOS 13+ · Apple silicon · media never leaves your Mac",
      facts_label: "Product facts",

      fact1_k: "Play", fact1_v: "A real player · broad format support",
      fact2_k: "Repeat", fact2_v: "By sentence, not by second",
      fact3_k: "Document", fact3_v: "Real .docx, opens in Word",
      fact4_k: "Lookup", fact4_v: "200k words · British IPA",
      fact5_k: "Privacy", fact5_v: "Local · media stays on your Mac",
      fact6_k: "Price", fact6_v: "Free",

      shot_cap_l: "One window: player, subtitles and a Word-style manuscript; two independent file trees on the left",
      shot_cap_r: "SentenceEcho · macOS",

      legs_label: "Play, repeat and study",
      leg1_k: "Play", leg1_h: "It is also a general player",
      leg1_p: "Local mpv core with broad support for common video and audio formats. Subtitles, speed, volume, full screen, stacked or side-by-side layout — open it for everyday watching and listening.",
      leg2_k: "Repeat", leg2_h: "Repeat by sentence, not by second",
      leg2_p: "Loop one sentence, repeat N times then advance, mark A–B, leave a shadowing gap. ⇧← / ⇧→ jumps by sentence instead of dragging a scrub bar.",
      leg3_k: "Study", leg3_h: "Dictation finishes in the same window",
      leg3_p: "A Word-style .docx manuscript, follow-along checking, lookup by sound and a word book — from the first sentence to the finished document without switching apps.",

      sec1_eb: "01 · Pain points",
      pains_h: "Why years of listening still leave no trace",
      pains_sub: "Seven blockers. None of them is fixed by listening to a little more.",

      p1_t: "You follow the plot, drift away, and stay at passive listening",
      p1_p: "You watch, you nod along; the sound passes through but not one sentence is written down. Without writing, there is no proof you understood.",
      p1_s: "One sentence per paragraph, written down. Repeat the sentence, then write what you heard. If you cannot write it, you have not heard it yet.",
      p2_t: "Five or six scrubs to replay a single sentence",
      p2_p: "Loops in ordinary players are time-based A–B marks: nudge the start, nudge the end, and the first word still gets clipped.",
      p2_s: "Repeat follows sentences: loop one, repeat N times then advance, mark an A–B range, leave a shadowing gap. ⇧← / ⇧→ jumps by sentence — no more fighting the scrub bar.",
      p3_t: "Dictation takes three apps",
      p3_p: "A player for audio, Word for writing, a dictionary for spelling. Every lookup is a window switch; the sentence you were holding slips away.",
      p3_s: "One window: player, subtitle line and Word-style manuscript stacked (or side by side). Lookup floats over the same screen and the caret never leaves the manuscript.",
      p4_t: "You know the sound, not the spelling — and a dictionary cannot find it",
      p4_p: "You hear /bɜːd/ clearly but cannot spell bird. Dictionaries search by spelling: if you cannot spell it, you cannot find it, and the less you find, the less you dare to write.",
      p4_s: "Look up by sound: type b3rd and get bird, type reinbou and get rainbow. 200,000 words, one British IPA standard, Enter inserts.",
      p5_t: "You finish with no idea whether it is right",
      p5_p: "No one marks it. Mistakes stay unmarked, and the same word goes wrong next time.",
      p5_s: "One-key check: right moves you on; wrong stops and loops the sentence until you fix it. Skip if you must, and missed words go to the word book automatically.",
      p6_t: "Hardcoded subtitles turn listening into reading",
      p6_p: "Burn-in text sits in the frame, your eyes drop to it, and practice quietly becomes reading comprehension.",
      p6_s: "Subtitles hide automatically in dictation. Need clean footage? Mask, crop, quick-smear or remove subtitles frame by frame into a new file; the original restores with one click.",
      p7_t: "The words do not stick, and misses go nowhere",
      p7_p: "Looked up once, corrected once, then scattered across files with no way to practise them together.",
      p7_s: "The word book collects every miss automatically, ranks by error count, keeps the source sentence and exports to Excel.",

      sec2_eb: "02 · Modules",
      mods_h: "Eight modules in one window",
      mods_sub: "From playback to a finished manuscript, each part sits where it belongs.",
      m_lbl_solve: "Solves", m_lbl_how: "How to use",

      m1_t: "Player",
      m1_solve: "Everyday watching and listening has to feel native, not a study-only mode.",
      m1_how: "⌘O opens local video or audio; subtitles are found automatically; ⌘↑ / ⌘↓ changes speed, ⌥⌘L flips the layout, ⌃⌘F goes full screen.",
      m1_c1: "Local mpv core",
      m1_c2: "Video: mp4 / mkv / mov / m4v / webm / avi and more",
      m1_c3: "Audio: mp3 / m4a / wav / flac / aac / ogg and more",
      m1_c4: "Subtitles: srt / ass / vtt, external or embedded",
      m1_c5: "0.5×–3.0× without pitch shift",
      m1_c6: "Stacked or side by side; audio-only shows no video",

      m2_t: "Repeat engine",
      m2_solve: "Manual scrubbing never lines up, and loops are timed rather than sentence-based.",
      m2_how: "⇧R loops the current sentence; N sets a repeat count and advances automatically; A / B mark a range; G leaves a shadowing gap; ⇧← / ⇧→ jump by sentence.",
      m2_c1: "By sentence, not by second",
      m2_c2: "Single-sentence loop",
      m2_c3: "Repeat N, then advance",
      m2_c4: "A–B range",
      m2_c5: "Shadowing gap",

      m3_t: "Manuscript",
      m3_solve: "Dictation means opening Word, switching windows, copying, pasting and reformatting.",
      m3_how: "Type directly below the player; ⌘S saves .docx; the same-named manuscript returns next time; drafts autosave.",
      m3_c1: "Real .docx read/write",
      m3_c2: "Font, size, colour, highlight",
      m3_c3: "Alignment, lists, line spacing",
      m3_c4: "One sentence per paragraph",
      m3_c5: "Autosaved drafts",
      m3_c6: "Same-name pairing",

      m4_t: "Follow-along check",
      m4_solve: "You finish with no idea whether it is right, and nothing forces a correction.",
      m4_how: "⌘D enters dictation (subtitles hide, caret returns to the manuscript); ⌘↩ checks: right → next sentence, wrong → hold and replay; ⌥⌘↩ skips.",
      m4_c1: "Three-level matching",
      m4_c2: "Right → advance",
      m4_c3: "Wrong → hold and replay",
      m4_c4: "Skippable",
      m4_c5: "3 misses → auto slow-down",
      m4_c6: "Misses enter the word book",

      m5_t: "Lookup by sound",
      m5_solve: "You know the sound, not the spelling, and spelling-based dictionaries cannot help.",
      m5_how: "⌥> opens lookup; tap the IPA keyboard, or type an IPA or sound-alike spelling such as b3rd or reinbou.",
      m5_c1: "200,000 words",
      m5_c2: "British IPA throughout",
      m5_c3: "IPA keyboard + ASCII aliases",
      m5_c4: "Fuzzy spelling",
      m5_c5: "One-line result, Enter inserts",

      m6_t: "Hardcoded subtitles",
      m6_solve: "Burn-in text sits in the frame, and watching quietly becomes reading.",
      m6_how: "⌥⌘S masks the band — 5%–60% of the actual picture area, letterbox ignored; ⌘/ removes subtitles frame by frame (slower, no blur), ⌥⌘/ crops (faster); both write a new file and leave the source untouched.",
      m6_c1: "Mask (picture area)",
      m6_c2: "Crop (faster)",
      m6_c3: "Quick smear",
      m6_c4: "Frame-by-frame removal",
      m6_c5: "5–60% height",
      m6_c6: "New file",
      m6_c7: "One-click restore",

      m7_t: "Word book",
      m7_solve: "Words do not stick, and misses are scattered with no place to settle.",
      m7_how: "⌥< opens the word book; misses are collected during checking, ranked by error count, and exported to .xlsx in one click.",
      m7_c1: "Collected automatically",
      m7_c2: "Sorted by error count",
      m7_c3: "Source sentence kept",
      m7_c4: "Excel export",
      m7_c5: "Clearable",

      m8_t: "Keyboard everywhere",
      m8_solve: "Reaching for the mouse breaks the sentence you were holding.",
      m8_how: "Every action has a key and a clickable chip on the top bar; bare keys yield to typing, while ⌘ / ⌥ combos stay live.",
      m8_c1: "Two binding sets",
      m8_c2: "Clickable quick bar",
      m8_c3: "Bare keys yield to typing",
      m8_c4: "⌘ combos always live",
      m8_c5: "Fully remappable",

      spot_eb: "No subtitles · generated locally",
      spot_h: "No subtitles? Start anyway",
      spot_sub: "No .srt for an English clip? Stop hunting for one. Local recognition turns the audio into sentences, then hands them straight to repeat and dictation.",
      spot1_t: "Subtitles made locally",
      spot1_p: "When there is no subtitle track, local whisper.cpp transcribes the audio into sentences. No more downloading .srt files.",
      spot2_t: "Ready for dictation immediately",
      spot2_p: "The generated sentence list is usable at once: loop by sentence, jump by sentence, check sentence by sentence — no second import.",
      spot3_t: "Instant on reopen",
      spot3_p: "Transcriptions are cached by file and model, so opening the same media again does not re-run recognition.",
      spot_note: "Recognition runs on your Mac and audio is never uploaded. The recognition engine and multilingual model ship inside the installer (~160 MB) — works offline out of the box.",

      sec3_eb: "03 · Comparison",
      eng_h: "Two engines that actually do the work: lookup by sound, and arbitrary A-B",
      eng_sub: "Most players just play: word lookup means opening another dictionary, and looping means dragging by the second. Here both are built in.",
      eng1_t: "Built-in lookup by sound / by spelling",
      eng1_p1: "Hearing a word you cannot spell is the classic listening bottleneck. Lookup works from the sound, not the spelling: tap the phoneme keyboard (b3rd → bird, reinbou → rainbow), or just type your best guess.",
      eng1_p2: "200k words, consistent British IPA, phoneme-level fuzzy matching (ties broken by frequency, common words first). In spelling mode an exact match always ranks first, with prefix siblings next (doom → dooms/doomy). One-line results; press Enter to insert and close.",
      eng2_t: "Arbitrary A-B — you set both ends, no subtitles needed",
      eng2_p1: "Press ⌘[ for A and ⌘] for B to loop between any two points: across sentences, half a sentence, or the hard middle of a long line. Esc clears it.",
      eng2_p2: "The range is drawn as a magenta band on the seek bar with visible A/B markers, and works on media without subtitles. You can still jump to the prev/next sentence mid-loop without fighting the A-B range.",
      r3_h: "Repeat is not one mode but three — covering roughly 90% of real practice",
      r3_sub: "One key area covers three ways of drilling, with no digging through settings.",
      r3_1t: "① Arbitrary A-B range",
      r3_1p: "Set A with ⌘[ and B with ⌘]: across sentences, half a sentence, or the hard middle of a long line. Magenta band and A/B markers on the seek bar; Esc clears it.",
      r3_2t: "② Replay the current sentence",
      r3_2p: "⇧⌘R restarts this sentence from the top — one key back to where it began when you got lost.",
      r3_3t: "③ Repeat a sentence N times",
      r3_3p: "⌘R turns on sentence loop; set 0 for endless, or n to play each sentence n times then advance automatically. The status column shows it live.",
      r3_p2: "Together with sentence-by-sentence dictation: play one, write one, press ⌘↩ to check — right advances you, wrong holds the sentence until it is right.",
      r3_p3: "Built for listening and writing without friction: player, manuscript, checking and lookup share one window, with a live status column listing what is currently active — no switching between apps.",
      wf_h: "Insert as you look up, collect mistakes automatically",
      wf_1t: "Lookup results fill in directly",
      wf_1p: "Press Enter (or double-click, or the button) and the word lands at the cursor in the manuscript; the dialog closes at once — no copy, no switching, no break in your dictation flow.",
      wf_2t: "Mistakes collected · export freely",
      wf_2p: "Words you mistype or miss during checking are collected into the word book, ranked by how often and how recently you missed them, with the source media and sentence; export to Excel in one click for your own review list.",
      cmp_h: "Where the other tools stop",
      cmp_sub: "Grouped by category, not by brand. Feature ticks are the surface; whether they connect is the difference.",
      cmp_caption: "Feature comparison between SentenceEcho and adjacent tool categories",
      cmp_cap: "Capability",
      cmp_us: "SentenceEcho",
      cmp_c1: "General players",
      cmp_c2: "Listening & course apps",
      cmp_c3: "Intensive dictation tools",
      cmp_c4: "Dictionaries & pronunciation",
      cmp_c5: "Transcribers",
      cmp_r1: "Sentence-level repeat (by sentence, not seconds)",
      cmp_r2: "Repeat N times, then advance",
      cmp_r3: "Shadowing gap",
      cmp_r4: "Word-style .docx in the same window",
      cmp_r5: "Follow-along check with a wrong-sentence loop",
      cmp_r6: "Lookup by sound (IPA)",
      cmp_r7: "Hardcoded subtitle handling",
      cmp_r8: "Local automatic English subtitles",
      cmp_r9: "Generated subtitles feed straight into dictation",
      cmp_r10: "Local & offline",
      cmp_r11: "Freedom of material",
      cmp_r12: "Price",
      v_yes: "Supported", v_no: "Not offered", v_na: "Not verified", v_partial: "Partial", v_free: "Free",
      cmp_note: "※ A category summary, not a product-by-product review. “Partial” means common but not universal in that category; “—” means typically absent, not impossible. Competitor prices and versions were not verified one by one, so they are left blank. Local subtitle generation here requires the recognition engine and English model to be installed.",
      cmp_hint: "← swipe to see the full table →",

      sec4_eb: "04 · One pipeline",
      pipe_h_a: "Every piece exists elsewhere.",
      pipe_h_b: "One window connects them.",
      pipe_sub: "Seven steps of dictation, without switching apps, copy-pasting or reformatting.",
      pipe_badge: "One dictation pipeline",
      ps1_t: "Open media", ps1_d: "Video, audio, subtitles: three paths; no subtitles, generate locally",
      ps2_t: "Repeat by sentence", ps2_d: "Loop, N times, shadowing gap",
      ps3_t: "Write as you listen", ps3_d: "Word-style manuscript right below",
      ps4_t: "Check loop", ps4_d: "Right advances, wrong holds and replays",
      ps5_t: "Lookup by sound", ps5_d: "Resolve the stuck word on the spot",
      ps6_t: "Save .docx", ps6_d: "A real document, formatting intact",
      ps7_t: "Collect misses", ps7_d: "Into the word book, ranked by count",
      pipe_b1: "One window", pipe_b2: "Media stays on your Mac", pipe_b3: "Hands stay on the keyboard",
      pipe_note: "A player plays but cannot teach; course apps let you listen but not write; dictation tools send you to Word; dictionaries search by spelling; transcribers only hand you subtitles. This is the only window we have seen that orders all of it the way dictation actually happens.",

      sec5_eb: "05 · Convenience",
      stats_h: "Fewer switches, fewer steps, fewer interruptions",
      stats_sub: "Convenience written as countable actions, not adjectives.",
      st1_label: "App switches in one dictation",
      st1_note: "Basis: a 10-minute clip, about 40 sentences, bouncing between player, Word and dictionary.",
      st2_label: "Actions to replay the same sentence",
      st2_note: "Before: dragging a scrub bar to line up both ends. Now: ⇧R, or one ⌘R.",
      st3_label: "Apps open at once",
      st3_note: "Playback, writing and lookup share one window, and the manuscript stays put.",
      st4_label: "Times your hand leaves the keyboard",
      st4_note: "The quick bar is clickable, but every action has a key; bare keys yield while typing.",
      stats_note: "These are our design-target figures for that scenario, not third-party statistics.",
      esc_h: "Esc peels back one layer",
      esc_p: "A–B range, single-sentence loop, repeat count, shadowing gap, subtitle mask, dictation, video-only — one press exits one layer, no hunting for the switch.",

      sec6_eb: "06 · Shortcuts",
      keys_h_a: "Every action has a key.",
      keys_h_b: "Your hands stay on the keys.",
      keys_sub: "Two binding sets: ⌘ / ⌥ combos stay live while you type; bare keys apply only when focus is outside the text box. Every binding can be changed in settings.",
      keys_g1: "Always available during dictation", keys_tag1: "⌘ / ⌥ combos",
      keys_g2: "Bare keys while playing", keys_tag2: "Focus outside the text box",

      k_play: "Play / pause",
      k_replay: "Replay this sentence",
      k_loop: "Toggle single-sentence loop",
      k_prevnext: "Previous / next sentence",
      k_repeat: "Repeat count (advance after N)",
      k_gap: "Shadowing gap",
      k_markab: "Mark A / B",
      k_clear_ab: "Cancel A–B / leave the current mode",
      k_dict: "Enter / leave dictation",
      k_check: "Check this sentence",
      k_skip: "Skip this sentence",
      k_lookup: "Lookup by IPA or spelling",
      k_wordbook: "Word book",
      k_subs: "Show / hide subtitles",
      k_mask: "Mask hardcoded subtitles",
      k_maskresize: "Resize the mask (5%–60%)",
      k_repair: "Frame-by-frame removal (slower, no blur)",
      k_crop: "Crop subtitles out (faster)",
      k_layout: "Switch stacked / side-by-side",
      k_full: "Full screen",
      k_open: "Open media / open .docx",
      k_save: "Save .docx / export",

      kp_play: "Play / pause",
      kp_replay: "Replay this sentence",
      kp_loop: "Single-sentence loop",
      kp_prevnext: "Previous / next sentence",
      kp_seek: "Back / forward 5 seconds",
      kp_nudge: "Nudge 1 second",
      kp_speed: "Faster / slower",
      kp_vol: "Volume up / down",
      kp_markab: "Mark A / B",
      kp_repeat: "Repeat count",
      kp_gap: "Shadowing gap / set gap",
      kp_dict: "Enter / leave dictation",
      kp_svfm: "Subtitles / mute / full screen",
      kp_layout: "Switch layout",
      kp_help: "Shortcut help",

      sec7_eb: "07 · Download",
      dl_h: "Download SentenceEcho",
      dl_p: "Free. macOS 13 or later, Apple silicon. The build is unsigned — the first time, right-click → Open.",
      dl_btn: "Download .dmg (~160 MB)",
      dl_c1: "macOS 13+", dl_c2: "Apple silicon", dl_c3: "~160 MB", dl_c4: "Free",
      dl_note: "Recognition runs locally (whisper.cpp); media and manuscripts are never uploaded. Subtitle generation needs the recognition engine and English model installed locally (~160 MB).",

      foot_nav_label: "Footer navigation",
      foot_tag: "SentenceEcho is a product of Yellowfir Group Limited.",
      foot_top: "Back to top ↑"
    }
  };

  var STORAGE_KEY = "sentenceecho-lang";
  var root = document.documentElement;
  var langBtn = document.getElementById("langbtn");
  var shot = document.getElementById("shotimg");

  function readLang() {
    try {
      var v = localStorage.getItem(STORAGE_KEY); return (v === "en" || v === "zh" || v === "bi") ? v : "bi";
    } catch (e) {
      return "zh";
    }
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute("content", value);
  }

  function apply(lang) {
    var dict = I18N[lang] || I18N.zh;

    root.lang = lang === "en" ? "en" : "zh-CN";
    root.setAttribute("data-lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    var bi = (lang === "bi");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (!Object.prototype.hasOwnProperty.call(dict, key)) continue;
      if (!bi) { nodes[i].textContent = dict[key]; continue; }
      // 对照模式：中文主行 + 英文小字副行，同屏可见
      var zhText = I18N.zh[key] || "";
      var enText = I18N.en[key] || "";
      nodes[i].textContent = "";
      nodes[i].appendChild(document.createTextNode(zhText));
      if (enText && enText !== zhText) {
        var sp = document.createElement("span");
        sp.className = "bi-en";
        sp.lang = "en";
        sp.textContent = enText;
        nodes[i].appendChild(sp);
      }
    }

    var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var j = 0; j < ariaNodes.length; j++) {
      var akey = ariaNodes[j].getAttribute("data-i18n-aria");
      if (Object.prototype.hasOwnProperty.call(dict, akey)) {
        ariaNodes[j].setAttribute("aria-label", dict[akey]);
      }
    }

    document.title = dict.meta_title;
    setMeta('meta[name="description"]', dict.meta_desc);
    setMeta('meta[property="og:title"]', dict.og_title);
    setMeta('meta[property="og:description"]', dict.og_desc);
    setMeta('meta[property="og:image"]',
      new URL(lang === "en" ? "assets/app-en.png" : "assets/app-zh.png", location.href).href);

    if (shot) {
      shot.src = lang === "en" ? "assets/app-en.png" : "assets/app-zh.png";
      shot.alt = dict.shot_alt;
    }

    if (langBtn) {
      langBtn.textContent = lang === "bi" ? "EN" : (lang === "en" ? "中文" : "对照");
      langBtn.setAttribute("aria-label",
        lang === "en" ? "Switch to Chinese (中文)" : "Switch to English");
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }

    root.classList.remove("i18n-pending");
  }

  var lang = readLang();
  apply(lang);

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      // 三态轮换：对照 → 英文 → 中文 → 对照
      lang = lang === "bi" ? "en" : (lang === "en" ? "zh" : "bi");
      apply(lang);
    });
  }

  // 下载地址集中配置
  var dlBtn = document.getElementById("dlbtn");
  if (dlBtn) {
    dlBtn.setAttribute("href", DOWNLOAD_URL);
    if (/^https?:/i.test(DOWNLOAD_URL)) {
      dlBtn.setAttribute("target", "_blank");
      dlBtn.setAttribute("rel", "noopener");
    }
  }

  // 预取另一语言截图，切换时不再白屏
  window.addEventListener("load", function () {
    var pre = new Image();
    pre.src = lang === "en" ? "assets/app-zh.png" : "assets/app-en.png";
  });

  // 滚动出现
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
    for (var k = 0; k < reveals.length; k++) io.observe(reveals[k]);
  } else {
    for (var m = 0; m < reveals.length; m++) reveals[m].classList.add("in");
  }

  // 兜底：任何情况下 2.4 秒后都显示，避免脚本异常导致空白
  setTimeout(function () {
    for (var n = 0; n < reveals.length; n++) reveals[n].classList.add("in");
    root.classList.remove("i18n-pending");
  }, 2400);
})();
