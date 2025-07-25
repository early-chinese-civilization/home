"use client";
import { Footer, Nav } from "@/app/common";

export default function Home() {
    // 所有专家数据
    const allExperts = [
        {
            role: "总负责人",
            name: "陈志敏",
            title1: "复旦大学副校长",
            title2: "教育部长江特聘教授"
        },
        {
            role: "总协调人",
            name: "吴力波",
            title1: "复旦大学数据学院副院长",
            title2: "教育部长江特聘教授"
        },
        {
            role: "首席科学家",
            name: "漆远",
            title1: "复旦大学人工智能创新与产业研究院院长",
            title2: "上海科学智能研究院研究院长"
        },
        {
            role: "首席科学家",
            name: "刘钊",
            title1: "复旦大学出土文献与古文字研究中心主任",
            title2: "马王堆文化研究院名誉院长"
        },
        {
            role: "首席科学家",
            name: "陈思和",
            title1: "复旦大学资深教授",
            title2: ""
        },


    ];



    const getRoleColor = (role: string) => {
        const colors = {
            "总负责人": "from-red-500 to-pink-500",
            "总协调人": "from-blue-500 to-indigo-500",
            "首席科学家": "from-purple-500 to-violet-500",
            "AI科学家": "from-green-500 to-emerald-500",
            "领域专家": "from-orange-500 to-amber-500"
        };
        return colors[role as keyof typeof colors] || "from-gray-500 to-slate-500";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-indigo-200/40 rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-700"></div>
            
            <Nav></Nav>

            <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-20 pt-20">
                    <div className="inline-block mb-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold">👥 Expert Advisory Committee</span>
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">专家指导委员会</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        汇聚顶尖学者与专家，共同推进早期中华文明研究的数字化创新
                    </p>
                    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
                
                {/* 专家信息容器 */}
                <div className="relative mb-20">
                    {/* 专家展示容器 */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
                        {/* 专家网格 - 显示所有专家 */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {allExperts.map((expert, index) => (
                                <div key={index} className="text-center group">
                                    <div className="mb-4">
                                        <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${getRoleColor(expert.role)} text-white rounded-full text-xs font-semibold shadow-lg`}>
                                            <span className="mr-1">✨</span>
                                            {expert.role}
                                        </div>
                                    </div>
                                    {/* 头像容器 */}
                                    <div className="relative mb-4">
                                        <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full mx-auto shadow-lg border-4 border-white group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                                            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                                <span className="text-2xl font-bold text-gray-600">{expert.name.charAt(0)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{expert.name}</h3>
                                    <p className="text-xs text-gray-600 mb-1 leading-tight break-words">{expert.title1}</p>
                                    {expert.title2 && <p className="text-xs text-gray-500 leading-tight break-words">{expert.title2}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* 团队分类卡片 */}
                <div className="mb-20">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* 领域专家卡片 */}
                            <div className="group bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-gray-500 font-medium">Domain Experts</span>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <div className="bg-blue-50/50 rounded-lg p-3 border-l-4 border-blue-300">
                                            <p className="text-sm font-medium text-gray-700">朱思语</p>
                                            <p className="text-xs text-gray-500">复旦大学、上海科学智能研究院</p>
                                        </div>
                                        <div className="bg-purple-50/50 rounded-lg p-3 border-l-4 border-purple-300">
                                            <p className="text-sm font-medium text-gray-700">陈保友</p>
                                            <p className="text-xs text-gray-500">上海科学智能研究院</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">领域专家</h2>
                            </div>
                            
                            {/* AI科学家卡片 */}
                            <div className="group bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-gray-500 font-medium">AI Scientists</span>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-green-50/50 rounded-lg p-2 border-l-4 border-green-300">
                                            <p className="text-sm font-medium text-gray-700">文少卿</p>
                                            <p className="text-xs text-gray-500">复旦大学</p>
                                        </div>
                                        <div className="bg-emerald-50/50 rounded-lg p-2 border-l-4 border-emerald-300">
                                            <p className="text-sm font-medium text-gray-700">张梦瀚</p>
                                            <p className="text-xs text-gray-500">复旦大学</p>
                                        </div>
                                        <div className="bg-teal-50/50 rounded-lg p-2 border-l-4 border-teal-300">
                                            <p className="text-sm font-medium text-gray-700">任   攀</p>
                                            <p className="text-xs text-gray-500">复旦大学</p>
                                        </div>
                                        <div className="bg-cyan-50/50 rounded-lg p-2 border-l-4 border-cyan-300">
                                            <p className="text-sm font-medium text-gray-700">张晓声</p>
                                            <p className="text-xs text-gray-500">复旦大学</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-green-800 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">AI科学家</h2>
                            </div>
                            
                            {/* 工程团队卡片 */}
                            <div className="group bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-gray-500 font-medium">Engineering Team</span>
                                    </div>
                                    
                                    <div className="bg-orange-50/50 rounded-lg p-4 border-l-4 border-orange-300">
                                        <p className="text-sm font-medium text-gray-700">蔡志强</p>
                                        <p className="text-xs text-gray-500">上海科学智能研究院</p>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-orange-800 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300">工程团队</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 其他贡献者部分 */}
                <div className="text-center">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
                        <div className="inline-block mb-6">
                            <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-semibold">🤝 Contributors</span>
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">其他贡献者</h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">致敬携手共进的协作伙伴</p>
                        
                        <div className="flex justify-center gap-6">
                            <button className="px-8 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-xl text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                                实习生
                            </button>
                            <button className="px-8 py-3 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-xl text-purple-700 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                                标注人员
                            </button>
                            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                                成为一分子
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
