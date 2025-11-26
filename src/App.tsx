import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  Users, 
  Banknote, 
  Rocket, 
  ChevronRight, 
  ChevronDown, 
  Bell, 
  Search, 
  Settings, 
  PlusCircle,
  FileText,
  Zap,
  Target,
  GraduationCap,
  MoreHorizontal,
  ArrowUpRight,
  CheckCircle2,
  Circle,
  Lock,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import { ModulePathView } from './components/ModulePath';
import ProjectOverview from './components/ProjectOverview';

// --- Mock Data & Configuration (Based on CoFo_L3_Module_list.docx) ---

const USER_PROFILE = {
  name: "Alex Founder",
  role: "连续创业者",
  avatar: "AF"
};

const PROJECTS = [
  { id: 'p1', code: 'P-2024-X', name: 'AI 辅助法律咨询平台', status: '早期验证阶段' },
  { id: 'p2', code: 'P-2023-Y', name: '跨境电商物流聚合', status: '种子轮' }
];

// Module Configuration based on the L3 Doc
const MODULES = {
  personal: {
    id: 'personal',
    title: '可 · 可能性',
    icon: <Zap size={18} />,
    items: [
      { id: 'p1.1', title: '我的职业档案' },
      { id: 'p1.2', title: '我的创业者特质' },
      { id: 'p1.3', title: '我的创业策略' },
      { id: 'p1.4', title: '创业想法池' },
    ]
  },
  business: {
    id: 'business',
    title: '事 · 商业价值',
    icon: <Briefcase size={18} />,
    items: [
      { id: 'p2.0', title: '概览', isSummary: true },
      { id: 'p2.1', title: '项目方向', desc: '明确解决什么问题' },
      { id: 'p2.2', title: '产品定位', desc: '产品在市场中的位置' },
      { id: 'p2.3', title: '赛道选择', desc: '行业趋势与天花板' },
      { id: 'p2.4', title: '市场潜力', desc: 'TAM/SAM/SOM分析' },
      { id: 'p2.5', title: '用户洞察', desc: 'Persona与痛点分析' },
      { id: 'p2.6', title: '业务战略', desc: '核心增长引擎' },
      { id: 'p2.7', title: '价值主张', desc: '独特的销售主张 (USP)' },
      { id: 'p2.8', title: '商业模式', desc: '如何创造与获取价值' },
    ]
  },
  team: {
    id: 'team',
    title: '人 · 团队人才',
    icon: <Users size={18} />,
    items: [
      { id: 'p3.0', title: '概览', isSummary: true },
      { id: 'p3.1', title: '愿景准则' },
      { id: 'p3.2', title: '能力策略' },
      { id: 'p3.3', title: '伙伴评估' },
    ]
  },
  finance: {
    id: 'finance',
    title: '钱 · 生存风险',
    icon: <Banknote size={18} />,
    items: [
      { id: 'p4.0', title: '概览', isSummary: true },
      { id: 'p4.1', title: '智能财务模型' },
      { id: 'p4.2', title: '公司起点' },
      { id: 'p4.3', title: '风险管理' },
      { id: 'p4.4', title: '融资策略' },
    ]
  },
  action: {
    id: 'action',
    title: '行 · 落地迭代',
    icon: <Rocket size={18} />,
    items: [
      { id: 'p5.0', title: '概览', isSummary: true },
      { id: 'p5.1', title: '行动计划' },
      { id: 'p5.2', title: '里程碑管理' },
    ]
  }
};

// --- Components ---

// 1. Sidebar Component
const Sidebar = ({ activeModule, setActiveModule, activeSubItem, setActiveSubItem, sidebarCollapsed, setSidebarCollapsed }) => {
  const [projectExpanded, setProjectExpanded] = useState(true);

  const NavItem = ({ id, icon, title, isActive, onClick, hasSub = false }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg transition-all duration-200 group
        ${isActive 
          ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200' 
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}
    >
      <div className="flex items-center gap-3">
        <span className={`${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
          {icon}
        </span>
        {!sidebarCollapsed && <span style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}>{title}</span>}
      </div>
      {hasSub && !sidebarCollapsed && <ChevronRight size={14} className={`text-slate-400 ${isActive ? 'rotate-90' : ''} transition-transform`} />}
    </button>
  );

  return (
    <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} h-screen bg-white border-r border-slate-200 flex flex-col fixed left-0 top-0 z-20 transition-all duration-300`}>
      {/* Logo Area */}
      <div className="h-16 flex items-center px-5 border-b border-slate-100 justify-between">
        {!sidebarCollapsed && (
          <>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3 shadow-indigo-200 shadow-lg">
                <span className="text-white text-sm">C</span>
              </div>
              <span className="text-slate-800 tracking-tight text-sm">Co-Fo <span className="text-indigo-600">.ai</span></span>
            </div>
          </>
        )}
        <button 
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ChevronRight size={16} className={`text-slate-400 transition-transform duration-300 ${sidebarCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {/* Section 1: Personal (The "Ke" Module) */}
        {!sidebarCollapsed && (
          <div className="space-y-0.5">
            <div className="px-3 uppercase tracking-wider mb-1.5 text-slate-400 text-xs leading-tight" style={{ fontWeight: '700' }}>
              我的档案
            </div>
            {MODULES.personal.items.map((item) => (
               <NavItem 
                key={item.id}
                id={item.id}
                icon={<FileText size={16} />}
                title={item.title}
                isActive={activeSubItem === item.id}
                onClick={() => {
                  setActiveModule('personal');
                  setActiveSubItem(item.id);
                }}
              />
            ))}
          </div>
        )}

        {/* Section 2: Project Context Switcher */}
        <div className="relative">
          {!sidebarCollapsed ? (
            <>
              <div 
                className="mx-1 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:border-indigo-300 transition-colors"
                onClick={() => {
                  setActiveModule('project-overview');
                  setActiveSubItem('project-overview');
                }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-500 text-xs leading-tight" style={{ fontWeight: '700' }}>当前项目</span>
                  <ChevronDown size={14} className="text-slate-400" />
                </div>
                <div className="text-slate-800 truncate text-sm leading-tight" style={{ fontWeight: '700' }}>P-2024-X AI法律...</div>
              </div>
            </>
          ) : (
            <div 
              className="mx-auto w-10 h-10 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center cursor-pointer hover:border-indigo-300 transition-colors"
              onClick={() => {
                setActiveModule('project-overview');
                setActiveSubItem('project-overview');
              }}
            >
              <Briefcase size={18} className="text-slate-400" />
            </div>
          )}
          
          {/* Project Actions */}
          <div className="mt-3 space-y-0.5">
             {['business', 'team', 'finance', 'action'].map(key => {
               const module = MODULES[key];
               return (
                 <NavItem
                    key={module.id}
                    id={module.id}
                    icon={module.icon}
                    title={module.title}
                    isActive={activeModule === key}
                    onClick={() => {
                      setActiveModule(key);
                      // Default to first item
                      setActiveSubItem(MODULES[key].items[0].id);
                    }}
                 />
               )
             })}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      {!sidebarCollapsed && (
        <div className="p-4 border-t border-slate-100 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-1.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm leading-tight">
            <GraduationCap size={18} />
            可否校友会
          </button>
           <button className="w-full flex items-center gap-3 px-3 py-1.5 text-slate-600 hover:bg-slate-50 rounded-lg text-sm leading-tight">
            <MoreHorizontal size={18} />
            更多设置
          </button>
        </div>
      )}
    </div>
  );
};

// 2. Main Layout Structure
const TopBar = ({ currentProject, activeModule }) => (
  <div className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
    <div className="flex items-center gap-4">
      {/* Breadcrumb / Context - Only show for business, team, finance, action modules */}
      {['business', 'team', 'finance', 'action'].includes(activeModule) && (
        <div className="flex items-center">
          <span className="text-slate-500" style={{ fontSize: 'var(--text-base)' }}>项目速写</span>
          <ChevronRight size={14} className="mx-2 text-slate-300" />
          <span className="text-slate-700" style={{ fontSize: 'var(--text-base)' }}>
            {currentProject.code} {currentProject.name}
          </span>
          <span className="ml-3 text-slate-400 border-l border-slate-200 pl-3" style={{ fontSize: 'var(--text-base)' }}>
            状态: {currentProject.status}
          </span>
        </div>
      )}
    </div>

    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input 
          type="text" 
          placeholder="搜索模块或文档..." 
          className="pl-9 pr-4 py-1.5 bg-slate-100 border-transparent focus:bg-white focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 rounded-full w-64 transition-all outline-none text-[14px]"
        />
      </div>
      <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors relative">
        <Bell size={18} />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
      </button>
      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer">
        AF
      </div>
    </div>
  </div>
);

// 3. Content Area Components
const ModuleSummary = ({ moduleId, setActiveSubItem, items }) => {
  const summaryContent = {
    business: {
      title: '事 · 商业价值',
      subtitle: '理清商业本质，定义价值创造路径',
      description: '在这个模块中，你将系统性地思考你的商业核心：你要解决什么问题？为谁解决？如何创造价值并获取价值？这些问题的答案将构成你的商业基础。',
      keyPoints: [
        { icon: <Target size={20} />, title: '项目方向', desc: '明确核心问题与解决方案，找到切入点' },
        { icon: <Briefcase size={20} />, title: '产品定位', desc: '定义产品在市场中的独特位置' },
        { icon: <ArrowUpRight size={20} />, title: '市场潜力', desc: '评估市场规模与增长空间 (TAM/SAM/SOM)' },
        { icon: <Users size={20} />, title: '用户洞察', desc: '深入理解目标用户的痛点与需求' },
      ],
      metrics: [
        { label: '完成度', value: '45%', color: 'bg-blue-500' },
        { label: '关键指标', value: '3/8', color: 'bg-green-500' },
      ]
    },
    team: {
      title: '人 · 团队人才',
      subtitle: '找对人，做对事',
      description: '团队是创业成功的关键。在这个模块中，你将思考如何建立共同的愿景、评估团队能力、寻找合适的合作伙伴。好的团队不仅是能力的互补，更是价值观的共振。',
      keyPoints: [
        { icon: <Target size={20} />, title: '愿景准则', desc: '建立团队的共同目标与价值观' },
        { icon: <Zap size={20} />, title: '能力策略', desc: '评估现有能力与未来需求的差距' },
        { icon: <Users size={20} />, title: '伙伴评估', desc: '寻找并评估潜在的合作伙伴' },
      ],
      metrics: [
        { label: '完成度', value: '20%', color: 'bg-purple-500' },
        { label: '关键指标', value: '1/3', color: 'bg-green-500' },
      ]
    },
    finance: {
      title: '钱 · 生存风险',
      subtitle: '活下去，才能赢',
      description: '现金流是创业公司的生命线。在这个模块中，你将学习如何建立财务模型、管理生存风险、制定融资策略。理解钱从哪里来、到哪里去，是创业者的必修课。',
      keyPoints: [
        { icon: <Banknote size={20} />, title: '智能财务模型', desc: '构建可持续的财务预测模型' },
        { icon: <Target size={20} />, title: '公司起点', desc: '设定合理的初始财务基础' },
        { icon: <FileText size={20} />, title: '风险管理', desc: '识别并应对财务风险' },
        { icon: <ArrowUpRight size={20} />, title: '融资策略', desc: '规划融资时机与策略' },
      ],
      metrics: [
        { label: '完成度', value: '10%', color: 'bg-yellow-500' },
        { label: '关键指标', value: '0/4', color: 'bg-red-500' },
      ]
    },
    action: {
      title: '行 · 落地迭代',
      subtitle: '从想法到行动，从计划到执行',
      description: '再好的计划也需要执行。在这个模块中，你将把前面的思考转化为可执行的行动计划，设定里程碑，并持续迭代。创业是一场马拉松，合理的节奏与持续的进步至关重要。',
      keyPoints: [
        { icon: <Rocket size={20} />, title: '行动计划', desc: '将战略转化为具体的执行步骤' },
        { icon: <Target size={20} />, title: '里程碑管理', desc: '设定阶段性目标与验证点' },
      ],
      metrics: [
        { label: '完成度', value: '5%', color: 'bg-red-500' },
        { label: '关键指标', value: '0/2', color: 'bg-red-500' },
      ]
    }
  };

  const content = summaryContent[moduleId];
  if (!content) return null;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-white shadow-lg">
        <h2 className="mb-2">{content.title}</h2>
        <p className="text-indigo-100 mb-4">{content.subtitle}</p>
        <p className="text-white/90 leading-relaxed max-w-3xl">{content.description}</p>
        
        {/* Metrics */}
        <div className="flex gap-6 mt-6">
          {content.metrics.map((metric, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-white/70 mb-1">{metric.label}</div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${metric.color}`}></div>
                <span>{metric.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Points Grid */}
      <div>
        <h3 className="text-slate-800 mb-4">核心模块</h3>
        <div className="grid grid-cols-2 gap-4">
          {content.keyPoints.map((point, idx) => {
            const relatedItem = items.find(item => item.title === point.title);
            return (
              <button
                key={idx}
                onClick={() => relatedItem && setActiveSubItem(relatedItem.id)}
                className="bg-white rounded-xl border border-slate-200 p-6 text-left hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-800 mb-1 group-hover:text-indigo-700 transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-slate-500">{point.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
        <div className="flex items-start gap-3">
          <Zap size={20} className="text-purple-600 mt-1" />
          <div className="flex-1">
            <h4 className="text-slate-800 mb-2">AI 智能建议</h4>
            <p className="text-slate-600 mb-4">
              Co-Fo 可以帮助你快速完善这个模块的内容。基于你的行业和项目阶段，AI 将为你提供个性化的建议和模板。
            </p>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm">
              <Zap size={16} />
              开始 AI 辅助填写
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModuleTabs = ({ module, activeSubItem, setActiveSubItem }) => {
  return (
    <div className="px-8 pt-6 pb-2 border-b border-slate-200 bg-slate-50/50">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-slate-800 flex items-center gap-3 font-bold">
            {module.title}
          </h1>
          <p className="text-slate-500 mt-1">完善此模块以提升项目评估分数</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
        {module.items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSubItem(item.id)}
            className={`pb-3 whitespace-nowrap border-b-2 transition-colors px-1
              ${activeSubItem === item.id 
                ? 'border-indigo-600 text-indigo-700' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            style={{ fontSize: 'var(--text-sm)', fontWeight: '600' }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

const ContentPlaceholder = ({ title, desc, itemId, markAsCompleted, isCompleted }) => (
  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 min-h-[500px]">
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center h-full py-20">
      {/* Figma Design Placeholder */}
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
          <FileText size={48} className="text-indigo-600" />
        </div>
        
        <div>
          <h3 className="text-slate-800 mb-2 text-xl">
            此处可接入 Figma 设计稿
          </h3>
          <p className="text-slate-500 max-w-md mx-auto" style={{ fontSize: 'var(--text-base)' }}>
            当前模块：<span className="font-semibold text-slate-700">{title}</span>
          </p>
          {desc && (
            <p className="text-slate-400 mt-2 text-sm max-w-md mx-auto">
              {desc}
            </p>
          )}
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 max-w-lg mx-auto text-left">
          <h4 className="text-slate-700 mb-3 flex items-center gap-2">
            <Target size={16} className="text-indigo-600" />
            开发者提示
          </h4>
          <ul className="space-y-2 text-slate-600" style={{ fontSize: 'var(--text-sm)' }}>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>在此处导入您的 Figma 设计组件</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>使用 ContentPlaceholder 组件作为容器</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>保持与整体设计系统的一致性</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm transition-all">
            导入 Figma 组件
          </button>
          <button className="px-5 py-2.5 bg-white text-slate-600 border border-slate-300 rounded-lg hover:bg-slate-50 transition-all">
            查看文档
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = ({ activeModule, activeSubItem, setActiveSubItem, completedItems, markAsCompleted, setActiveModule }) => {
  const currentModule = MODULES[activeModule];
  const currentSubItem = currentModule?.items.find(i => i.id === activeSubItem) || currentModule?.items[0];

  // Special handling for project overview
  if (activeModule === 'project-overview') {
    return (
      <main className="flex-1 bg-slate-50 overflow-y-auto h-[calc(100vh-64px)] p-8">
        <div className="max-w-6xl mx-auto">
          <ProjectOverview 
            project={PROJECTS[0]} 
            setActiveModule={setActiveModule}
            setActiveSubItem={setActiveSubItem}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-slate-50 overflow-y-auto h-[calc(100vh-64px)] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Dynamic Content Rendering */}
        {currentSubItem ? (
          currentSubItem.isSummary ? (
            <ModulePathView 
              moduleId={activeModule} 
              setActiveSubItem={setActiveSubItem}
              items={currentModule.items}
              completedItems={completedItems}
            />
          ) : (
            <ContentPlaceholder 
              title={currentSubItem.title} 
              desc={currentSubItem.desc} 
              itemId={currentSubItem.id}
              markAsCompleted={markAsCompleted}
              isCompleted={completedItems.has(currentSubItem.id)}
            />
          )
        ) : (
          <div className="flex items-center justify-center h-64 text-slate-400">
            请选择一个模块开始
          </div>
        )}
      </div>
    </main>
  );
};

export default function App() {
  const [activeModule, setActiveModule] = useState('business');
  const [activeSubItem, setActiveSubItem] = useState('p2.0'); // Start with summary page
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Track completion status for each item
  const [completedItems, setCompletedItems] = useState(new Set([
    'p2.1', 'p2.2', // Pre-completed items for demo
  ]));
  
  // Function to mark an item as completed
  const markAsCompleted = (itemId) => {
    setCompletedItems(prev => new Set([...prev, itemId]));
  };
  
  const currentModuleData = MODULES[activeModule];

  return (
    <div className="flex h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Sidebar 
        activeModule={activeModule} 
        setActiveModule={setActiveModule}
        activeSubItem={activeSubItem}
        setActiveSubItem={setActiveSubItem}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />
      
      <div className={`flex-1 ${sidebarCollapsed ? 'ml-16' : 'ml-64'} flex flex-col h-screen transition-all duration-300`}>
        <TopBar currentProject={PROJECTS[0]} activeModule={activeModule} />
        
        {/* Contextual Sub-navigation (The Tabs) */}
        {currentModuleData && (
          <ModuleTabs 
            module={currentModuleData} 
            activeSubItem={activeSubItem}
            setActiveSubItem={setActiveSubItem}
          />
        )}
        
        <Dashboard 
          activeModule={activeModule} 
          activeSubItem={activeSubItem} 
          setActiveSubItem={setActiveSubItem}
          completedItems={completedItems}
          markAsCompleted={markAsCompleted}
          setActiveModule={setActiveModule}
        />
      </div>
    </div>
  );
}