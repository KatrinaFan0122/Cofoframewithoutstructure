import React from 'react';
import { 
  Calendar, 
  Users, 
  ArrowUpRight, 
  Briefcase, 
  Banknote, 
  Rocket,
  Sparkles,
  ChevronRight,
  AlertCircle,
  Clock,
  Edit3,
  Check,
  X
} from 'lucide-react';

const ProjectOverview = ({ project, setActiveModule, setActiveSubItem }) => {
  const [isEditingName, setIsEditingName] = React.useState(false);
  const [editedName, setEditedName] = React.useState(project.name);
  const [editedCode, setEditedCode] = React.useState(project.code);

  const handleSaveEdit = () => {
    // 这里可以添加保存到后端的逻辑
    project.name = editedName;
    project.code = editedCode;
    setIsEditingName(false);
  };

  const handleCancelEdit = () => {
    setEditedName(project.name);
    setEditedCode(project.code);
    setIsEditingName(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  // 各维度的完成度数据
  const dimensions = [
    {
      id: 'business',
      icon: <Briefcase size={20} />,
      title: '事 · 商业价值',
      subtitle: '已完成核心假设定义与市场初步分析',
      progress: 25,
      color: 'blue'
    },
    {
      id: 'team',
      icon: <Users size={20} />,
      title: '人 · 团队人才',
      subtitle: '核心团队已搭建完毕/核心角色缺失待解决',
      progress: 10,
      color: 'orange'
    },
    {
      id: 'finance',
      icon: <Banknote size={20} />,
      title: '钱 · 生存风险',
      subtitle: '财务建模空缺，建议优先开始此维度',
      progress: 0,
      color: 'gray'
    },
    {
      id: 'action',
      icon: <Rocket size={20} />,
      title: '行 · 落地迭代',
      subtitle: '当前里程碑已设置/待补充更多关键节点',
      progress: 5,
      color: 'blue'
    }
  ];

  const getProgressColor = (color, progress) => {
    if (progress === 0) return 'bg-slate-200';
    const colors = {
      blue: 'bg-blue-500',
      orange: 'bg-orange-500',
      gray: 'bg-slate-200'
    };
    return colors[color] || 'bg-blue-500';
  };

  const getTextColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      orange: 'text-orange-600',
      gray: 'text-slate-400'
    };
    return colors[color] || 'text-blue-600';
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {!isEditingName ? (
                <>
                  <h1 className="text-slate-800 font-semibold">
                    {project.code} {project.name}
                  </h1>
                  <button 
                    className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-600"
                    title="编辑项目信息"
                    onClick={() => setIsEditingName(true)}
                  >
                    <Edit3 size={18} />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editedCode}
                      onChange={(e) => setEditedCode(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className="px-2 py-1 border border-slate-300 rounded text-slate-800 font-semibold w-20"
                      placeholder="代码"
                      autoFocus
                    />
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                      onKeyDown={handleKeyPress}
                      className="px-2 py-1 border border-slate-300 rounded text-slate-800 font-semibold flex-1"
                      placeholder="项目名称"
                    />
                  </div>
                  <button
                    onClick={handleSaveEdit}
                    className="p-1.5 hover:bg-green-100 rounded-lg transition-colors text-green-600 hover:text-green-700"
                    title="保存"
                  >
                    <Check size={18} />
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="p-1.5 hover:bg-red-100 rounded-lg transition-colors text-red-500 hover:text-red-600"
                    title="取消"
                  >
                    <X size={18} />
                  </button>
                </>
              )}
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded border border-indigo-200 text-sm">
                早期验证阶段
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-3xl mb-4">
              致力于为律所及独立律师提供AI驱动的智能化辅助工具。提升案件分析、法律研究及文书起草的效率与精准度（PMF）。
            </p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>创建于 2024.03.15</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>核心团队: 2人</span>
              </div>
            </div>
          </div>
          
          {/* Co-Fo Score Card */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 px-6 py-4 min-w-[200px]">
            <div className="text-slate-500 mb-1 text-sm">Co-Fo 评分</div>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-indigo-600 font-semibold" style={{ fontSize: '32px', lineHeight: '1' }}>420</span>
                <span className="text-slate-400 text-sm">/1000</span>
              </div>
              <div className="text-right">
                <div className="text-green-600 flex items-center gap-1 justify-end mb-1 text-sm">
                  <ArrowUpRight size={16} />
                  <span>健康度</span>
                </div>
                <div className="text-green-600 font-semibold">B级</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Four Dimensions Progress */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={20} className="text-indigo-600" />
          <h2 className="text-slate-800">四维核验证度</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {dimensions.map((dim) => (
            <button
              key={dim.id}
              onClick={() => {
                setActiveModule(dim.id);
                setActiveSubItem(`p${dim.id === 'business' ? '2' : dim.id === 'team' ? '3' : dim.id === 'finance' ? '4' : '5'}.0`);
              }}
              className="bg-white rounded-xl border border-slate-200 p-6 text-left hover:border-indigo-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  dim.progress === 0 ? 'bg-slate-100 text-slate-400' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {dim.icon}
                </div>
                <span className={`${getTextColor(dim.color)}`}>
                  {dim.progress}%
                </span>
              </div>
              
              <h3 className="text-slate-800 mb-2">{dim.title}</h3>
              <p className="text-slate-500 leading-snug mb-4 text-sm">
                {dim.subtitle}
              </p>
              
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getProgressColor(dim.color, dim.progress)} transition-all`}
                  style={{ width: `${dim.progress}%` }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Section: AI Insight + Todo */}
      <div className="grid grid-cols-3 gap-6">
        {/* AI CO-FOUNDER Insight - Takes 2/3 width */}
        <div className="col-span-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 rounded-xl p-6 text-white shadow-lg flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={18} />
            <span className="uppercase tracking-wider text-indigo-100 text-xs">AI CO-FOUNDER 提醒</span>
          </div>
          
          <h3 className="mb-3 text-white">
            商业逻辑初步成立，需关注核增补缺
          </h3>
          
          <p className="text-white/90 leading-relaxed mb-4 flex-1 text-sm">
            目前你的赛道分类属于"法律SaaS"，你的团队具备基础的专业素质、特别是细分赛道的行业洞察力（TAM/SAM/SOM）明确。我基于你现有输入内容、建议补充一些核心矛盾点、掌握核心壁垒及市场的真实刚需力。
          </p>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg transition-colors border border-white/30 w-fit">
            <span>查看详细分析报告</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Todo List - Takes 1/3 width */}
        <div className="col-span-1 bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-800">待办提醒</h3>
            <span className="text-red-500 text-xs">2 紧急</span>
          </div>
          
          <div className="space-y-3 flex-1">
            <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
              <AlertCircle size={16} className="text-orange-600 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="text-slate-800 mb-1 text-sm">完善 TAM/SAM/SOM 数据</div>
                <div className="text-slate-500 flex items-center gap-1 text-xs">
                  <Clock size={12} />
                  <span>2 天内到期</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <AlertCircle size={16} className="text-slate-400 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="text-slate-600 mb-1 text-sm">邀请核心人员加入工作区</div>
                <div className="text-slate-400 text-xs">延期中</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;