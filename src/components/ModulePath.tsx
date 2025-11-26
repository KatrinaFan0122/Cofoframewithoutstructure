import React from 'react';
import {
  CheckCircle2,
  Circle,
  ChevronRight,
  Target,
  Briefcase,
  Users,
  Banknote,
  ArrowUpRight,
  FileText,
  Rocket,
  Zap,
  Lightbulb,
  TrendingUp,
  GraduationCap,
  ArrowDown
} from 'lucide-react';

// Learning path configurations with status, why, and what
const LEARNING_PATHS = {
  business: {
    title: '事 · 商业价值',
    subtitle: '从想法到商业模式的系统化思考',
    overallWhy: '建立商业思维框架，确保项目建立在坚实的商业逻辑之上',
    overallWhat: '8个递进式模块，完成问题发现到商业模式设计的完整闭环',
    pathItems: [
      {
        id: 'p2.1',
        title: '项目方向',
        subtitle: '解决什么问题？问题有多痛？',
        status: 'completed',
        icon: <Target size={20} />,
        order: 1,
        why: '找到真实存在且值得解决的问题',
        what: '明确核心问题及其严重程度和普遍性',
        methods: ['问题树分析', '痛点评估矩阵'],
        keyQuestions: ['解决什么问题？', '问题有多痛？', '影响多少人？'],
        estimatedTime: '30分钟',
      },
      {
        id: 'p2.2',
        title: '产品定位',
        subtitle: '产品是什么？为何选你？',
        status: 'completed',
        icon: <Briefcase size={20} />,
        order: 2,
        why: '在用户心智中占据独特位置',
        what: '定义产品独特价值与差异化优势',
        methods: ['定位画布', '竞品分析'],
        keyQuestions: ['产品是什么？', '核心差异？', '为何选你？'],
        estimatedTime: '45分钟',
        dependencies: ['p2.1']
      },
      {
        id: 'p2.3',
        title: '赛道选择',
        subtitle: '行业增长？竞争强度？',
        status: 'inProgress',
        icon: <TrendingUp size={20} />,
        order: 3,
        why: '选择比努力更重要',
        what: '评估行业趋势、竞争格局与进入壁垒',
        methods: ['五力模型', '趋势分析'],
        keyQuestions: ['行业增长？', '竞争强度？', '独特优势？'],
        estimatedTime: '60分钟',
        dependencies: ['p2.2']
      },
      {
        id: 'p2.4',
        title: '市场潜力',
        subtitle: '市场多大？能服务多少？',
        status: 'notStarted',
        icon: <ArrowUpRight size={20} />,
        order: 4,
        why: '天花板决定估值',
        what: '通过TAM/SAM/SOM科学估算市场规模',
        methods: ['TAM/SAM/SOM', '市场测算'],
        keyQuestions: ['市场多大？', '能服务多少？', '可获取份额？'],
        estimatedTime: '90分钟',
        dependencies: ['p2.3']
      },
      {
        id: 'p2.5',
        title: '用户洞察',
        subtitle: '目标用户？核心痛点？',
        status: 'notStarted',
        icon: <Users size={20} />,
        order: 5,
        why: '深入理解真实痛点与决策逻辑',
        what: '构建用户画像、旅程地图、痛点分析',
        methods: ['用户画像', '旅程地图'],
        keyQuestions: ['目标用户？', '核心痛点？', '决策流程？'],
        estimatedTime: '75分钟',
        dependencies: ['p2.4']
      },
      {
        id: 'p2.6',
        title: '业务战略',
        subtitle: '核心指标？增长驱动？',
        status: 'notStarted',
        icon: <Rocket size={20} />,
        order: 6,
        why: '战略是取舍的艺术',
        what: '确定北极星指标与增长飞轮',
        methods: ['北极星指标', '增长飞轮'],
        keyQuestions: ['核心指标？', '增长驱动？', '如何规模化？'],
        estimatedTime: '120分钟',
        dependencies: ['p2.5']
      },
      {
        id: 'p2.7',
        title: '价值主张',
        subtitle: '用户买什么？USP是什么？',
        status: 'notStarted',
        icon: <Lightbulb size={20} />,
        order: 7,
        why: '3秒内说清你的价值',
        what: '提炼USP，找到最打动用户的表达',
        methods: ['价值主张画布', 'USP提炼'],
        keyQuestions: ['用户买什么？', 'USP是什么？', '一句话说清？'],
        estimatedTime: '45分钟',
        dependencies: ['p2.6']
      },
      {
        id: 'p2.8',
        title: '商业模式',
        subtitle: '如何赚钱？经济模型健康？',
        status: 'notStarted',
        icon: <Banknote size={20} />,
        order: 8,
        why: '如何创造并获取价值',
        what: '设计收入来源、成本结构、关键资源',
        methods: ['商业画布', '单位经济模型'],
        keyQuestions: ['如何赚钱？', '经济模型健康？', '可持续性？'],
        estimatedTime: '120分钟',
        dependencies: ['p2.7']
      },
    ]
  },
  team: {
    title: '人 · 团队人才',
    subtitle: '找对人，建立高效协作的创业团队',
    overallWhy: '70%创业失败源于团队问题',
    overallWhat: '从愿景共识到能力盘点，再到合伙人评估',
    pathItems: [
      {
        id: 'p3.1',
        title: '愿景准则',
        subtitle: '为何在一起？要去哪里？',
        status: 'inProgress',
        icon: <Target size={20} />,
        order: 1,
        why: '团队决策的北极星',
        what: '制定使命、愿景、价值观与决策准则',
        methods: ['使命画布', '价值观提炼'],
        keyQuestions: ['为何在一起？', '要去哪里？', '坚持什么？'],
        estimatedTime: '60分钟',
      },
      {
        id: 'p3.2',
        title: '能力策略',
        subtitle: '有什么能力？缺什么？',
        status: 'notStarted',
        icon: <Zap size={20} />,
        order: 2,
        why: '看清能力差距',
        what: '评估技能图谱、找出关键缺口',
        methods: ['技能图谱', '能力矩阵'],
        keyQuestions: ['有什么能力？', '缺什么能力？', '如何补齐？'],
        estimatedTime: '75分钟',
        dependencies: ['p3.1']
      },
      {
        id: 'p3.3',
        title: '伙伴评估',
        subtitle: '谁合适？如何评估？',
        status: 'notStarted',
        icon: <Users size={20} />,
        order: 3,
        why: '选错合伙人比选错方向更致命',
        what: '从能力、价值观、承诺度评估合伙人',
        methods: ['合伙人评估表', '股权计算器'],
        keyQuestions: ['谁合适？', '如何评估？', '股权设计？'],
        estimatedTime: '90分钟',
        dependencies: ['p3.2']
      },
    ]
  },
  finance: {
    title: '钱 · 生存风险',
    subtitle: '理解现金流，掌握创业公司的生命线',
    overallWhy: '80%创业公司死于现金流断裂',
    overallWhat: '建立完整的财务思维框架',
    pathItems: [
      {
        id: 'p4.1',
        title: '智能财务模型',
        subtitle: '收入结构？成本合理？',
        status: 'notStarted',
        icon: <FileText size={20} />,
        order: 1,
        why: '创业的GPS',
        what: '搭建三表、财务预测、敏感性分析',
        methods: ['三表模型', '敏感性分析'],
        keyQuestions: ['收入结构？', '成本合理？', '何时平衡？'],
        estimatedTime: '120分钟',
      },
      {
        id: 'p4.2',
        title: '公司起点',
        subtitle: '股权分配？启动资金？',
        status: 'notStarted',
        icon: <Target size={20} />,
        order: 2,
        why: '好的开始是成功的一半',
        what: '设计股权分配、确定启动资金',
        methods: ['股权分配表', '期权池设计'],
        keyQuestions: ['股权分配？', '启动资金？', '期权池？'],
        estimatedTime: '90分钟',
        dependencies: ['p4.1']
      },
      {
        id: 'p4.3',
        title: '风险管理',
        subtitle: '有哪些风险？能活多久？',
        status: 'notStarted',
        icon: <Banknote size={20} />,
        order: 3,
        why: '识别风险，提高生存概率',
        what: '建立预警机制、制定应急预案',
        methods: ['风险矩阵', 'Runway计算'],
        keyQuestions: ['有哪些风险？', '能活多久？', '应对预案？'],
        estimatedTime: '60分钟',
        dependencies: ['p4.2']
      },
      {
        id: 'p4.4',
        title: '融资策略',
        subtitle: '何时融资？融多少？',
        status: 'notStarted',
        icon: <ArrowUpRight size={20} />,
        order: 4,
        why: '时机、金额、投资人都需要策略',
        what: '规划融资时间表、准备融资材料',
        methods: ['融资线图', 'BP模板'],
        keyQuestions: ['何时融资？', '融多少？', '找谁？'],
        estimatedTime: '120分钟',
        dependencies: ['p4.3']
      },
    ]
  },
  action: {
    title: '行 · 落地迭代',
    subtitle: '从计划到执行，用里程碑驱动进步',
    overallWhy: '想法不值钱，执行才值钱',
    overallWhat: '制定清晰行动计划，建立迭代节奏',
    pathItems: [
      {
        id: 'p5.1',
        title: '行动计划',
        subtitle: '做什么？优先级？谁负责？',
        status: 'notStarted',
        icon: <Rocket size={20} />,
        order: 1,
        why: '战略转化为具体任务',
        what: '制定3个月和12个月行动计划',
        methods: ['OKR设定', '任务分解'],
        keyQuestions: ['做什么？', '优先级？', '谁负责？'],
        estimatedTime: '90分钟',
      },
      {
        id: 'p5.2',
        title: '里程碑管理',
        subtitle: '阶段目标？如何衡量？',
        status: 'notStarted',
        icon: <Target size={20} />,
        order: 2,
        why: '验证假设的检查点',
        what: '设定阶段目标、定义成功标准',
        methods: ['里程碑地图', '复盘模板'],
        keyQuestions: ['阶段目标？', '如何衡量？', '何时复盘？'],
        estimatedTime: '60分钟',
        dependencies: ['p5.1']
      },
    ]
  }
};

const PathItemCard = ({ item, onStart, isCompleted }) => {
  const statusConfig = {
    completed: {
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500',
      statusText: '已完成',
      statusIcon: <CheckCircle2 size={14} className="text-green-500" />,
      borderColor: 'border-green-200',
    },
    inProgress: {
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      statusText: '进行中',
      statusIcon: <Circle size={14} className="text-blue-500 fill-blue-500" />,
      borderColor: 'border-blue-200',
    },
    notStarted: {
      iconBg: 'bg-slate-50',
      iconColor: 'text-slate-400',
      statusText: '待开始',
      statusIcon: <Circle size={14} className="text-slate-400" />,
      borderColor: 'border-slate-200',
    }
  };

  const config = statusConfig[item.status] || statusConfig.notStarted;

  return (
    <button
      onClick={() => onStart(item.id)}
      className="relative w-full text-left transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
    >
      {/* Step number badge - positioned at top-left corner */}
      <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg z-10 group-hover:scale-110 transition-all ${
        isCompleted 
          ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
          : 'bg-slate-300'
      }`} style={{ fontSize: 'var(--text-base)', fontWeight: '700' }}>
        {item.order}
      </div>

      {/* Card - Simple white card with subtle shadow */}
      <div className={`bg-white rounded-xl border-2 ${config.borderColor} shadow-sm p-5 min-h-[180px] flex flex-col hover:border-indigo-300 transition-all`}>
        {/* Icon - Simple circle with icon */}
        <div className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center mb-4 ${config.iconColor} group-hover:scale-110 transition-transform`}>
          {React.cloneElement(item.icon, {
            size: 22,
            strokeWidth: 1.5
          })}
        </div>

        {/* Title */}
        <h3 className="text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors" style={{ fontSize: 'var(--text-base)', fontWeight: '600' }}>
          {item.title}
        </h3>

        {/* Subtitle Question */}
        <p className="text-slate-500 mb-auto" style={{ fontSize: 'var(--text-sm)', lineHeight: '1.5' }}>
          {item.subtitle}
        </p>

        {/* Bottom section: Method + Status */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
          {/* Method tag */}
          <div className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded" style={{ fontSize: 'var(--text-xs)', fontWeight: '500' }}>
            {item.methods && item.methods[0]}
          </div>
          
          {/* Status with icon */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500" style={{ fontSize: 'var(--text-xs)' }}>
              {config.statusText}
            </span>
            {config.statusIcon}
          </div>
        </div>
      </div>
    </button>
  );
};

export const ModulePathView = ({ moduleId, setActiveSubItem, items, completedItems }) => {
  const pathData = LEARNING_PATHS[moduleId];
  if (!pathData) return null;

  // Calculate progress stats based on completedItems
  const totalItems = pathData.pathItems.length;
  const completedCount = pathData.pathItems.filter(item => completedItems && completedItems.has(item.id)).length;
  const inProgressItems = pathData.pathItems.filter(item => item.status === 'inProgress').length;
  const progressPercentage = Math.round((completedCount / totalItems) * 100);

  // Create rows for snake/zigzag layout (4 cards per row)
  const createRows = (items) => {
    const rows = [];
    let currentRow = [];
    const itemsPerRow = 4;

    items.forEach((item, index) => {
      currentRow.push(item);
      
      if (currentRow.length === itemsPerRow || index === items.length - 1) {
        rows.push([...currentRow]);
        currentRow = [];
      }
    });

    return rows;
  };

  const rows = createRows(pathData.pathItems);

  return (
    <div className="space-y-8">
      {/* Header Section - Simplified */}
      <div>
        <p className="text-slate-600" style={{ fontSize: 'var(--text-base)', lineHeight: '1.6' }}>
          在投入大规模资源之前，请确保你的商业逻辑经得起验证。点击下方卡片，进入每一个关键节点的深度验证。
        </p>
      </div>

      {/* Cards Grid - Snake layout */}
      <div className="space-y-5">
        {rows.map((row, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const displayRow = isEvenRow ? row : [...row].reverse();
          
          return (
            <div key={rowIndex} className="grid grid-cols-4 gap-5">
              {displayRow.map((item) => (
                <PathItemCard 
                  key={item.id}
                  item={item} 
                  onStart={setActiveSubItem}
                  isCompleted={completedItems && completedItems.has(item.id)}
                />
              ))}
            </div>
          );
        })}
      </div>

      {/* Bottom Progress Section */}
      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
        <div className="flex items-center justify-between">
          {/* Left: Circular Progress */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <svg className="transform -rotate-90 w-16 h-16">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-slate-200"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (1 - progressPercentage / 100)}`}
                  className="text-indigo-500 transition-all duration-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-slate-900" style={{ fontSize: '16px', fontWeight: '700' }}>
                  {progressPercentage}%
                </span>
              </div>
            </div>

            {/* Progress Stats */}
            <div>
              <div className="text-slate-900 mb-1" style={{ fontSize: 'var(--text-base)', fontWeight: '600' }}>
                商业完成度
              </div>
              <div className="text-slate-500" style={{ fontSize: 'var(--text-sm)' }}>
                已完成 {completedCount} / {totalItems} 个关键节点
              </div>
            </div>
          </div>

          {/* Middle: Tips Icon + Text */}
          <div className="flex items-center gap-3 flex-1 mx-8 px-6 py-3 bg-white rounded-lg border border-slate-200">
            <FileText size={20} className="text-slate-400" />
            <div>
              <div className="text-slate-700 mb-0.5" style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>
                商业筹备期
              </div>
              <div className="text-slate-500" style={{ fontSize: 'var(--text-xs)' }}>
                {completedCount === 0 
                  ? '万事开头难。不用担心完美，点击任意卡片，开始验证你的第一个假设。'
                  : '继续完成剩余模块，逐步完善你的商业体系。'}
              </div>
            </div>
          </div>

          {/* Right: Action Button */}
          <button className="px-5 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors" style={{ fontSize: 'var(--text-sm)', fontWeight: '500' }}>
            访谈经历示例画布
          </button>
        </div>
      </div>
    </div>
  );
};