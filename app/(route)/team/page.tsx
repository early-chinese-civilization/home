"use client";
import { Footer, Nav } from "@/app/common";
import { useState } from "react";

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
        {
            role: "AI科学家",
            name: "朱思明",
            title1: "复旦大学，上海科学智能研究院",
            title2: ""
        },
        {
            role: "AI科学家",
            name: "陈保友",
            title1: "上海科学智能研究院",
            title2: ""
        },
        {
            role: "领域专家",
            name: "文少卿",
            title1: "复旦大学",
            title2: ""
        },
        {
            role: "领域专家",
            name: "张梦翰",
            title1: "复旦大学",
            title2: ""
        },
        {
            role: "领域专家",
            name: "张兴旺",
            title1: "上海科学智能研究院",
            title2: ""
        }
    ];

    const [currentPage, setCurrentPage] = useState(0);
    const expertsPerPage = 5;
    const totalPages = Math.ceil(allExperts.length / expertsPerPage);

    const getCurrentExperts = () => {
        const startIndex = currentPage * expertsPerPage;
        return allExperts.slice(startIndex, startIndex + expertsPerPage);
    };

    const goToPrevPage = () => {
        setCurrentPage(prev => prev > 0 ? prev - 1 : totalPages - 1);
    };

    const goToNextPage = () => {
        setCurrentPage(prev => prev < totalPages - 1 ? prev + 1 : 0);
    };

    return (
        <>
            <Nav></Nav>

            <div className="max-w-5xl mx-auto px-4 py-16">
                {/* 专家指导委员会标题 */}
                <h1 className="text-3xl font-bold text-center mb-12 text-gray-800 pt-20">专家指导委员会</h1>
                
                {/* 专家信息容器 */}
                <div className="relative grid grid-cols-10 gap-4 items-center">
                    {/* 左箭头 */}
                    <button 
                        onClick={goToPrevPage}
                        className="col-span-1 flex items-center justify-center h-full text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                    >
                        ≪
                    </button>
                    
                    {/* 蓝色圆角边框容器 */}
                    <div className="col-span-8 rounded-3xl p-12 bg-gray-50">
                        {/* 专家网格 - 每页显示5个 */}
                        <div className="grid grid-cols-5 gap-8">
                            {getCurrentExperts().map((expert, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="font-bold text-gray-800 mb-4">{expert.role}</h3>
                                    {/* 头像占位符 */}
                                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4"></div>
                                    <p className="text-sm text-gray-600 mb-2">{expert.name}</p>
                                    <p className="text-xs text-gray-500">{expert.title1}</p>
                                    {expert.title2 && <p className="text-xs text-gray-500">{expert.title2}</p>}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 右箭头 */}
                    <button 
                        onClick={goToNextPage}
                        className="col-span-1 flex items-center justify-center h-full text-gray-400 hover:text-gray-600 text-2xl transition-colors"
                    >
                        ≫
                    </button>
                </div>
                


                
                {/* 领域专家和工程团队卡片 */}
                <div className="grid grid-cols-10 gap-4 pt-30 items-center">
                    <div className="col-span-1"></div>
                        <div className="col-span-8 text-center">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                {/* 领域专家卡片 */}
                                <div className="bg-gray-50 rounded-3xl p-8 h-80 flex flex-col justify-between">
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="text-left">
        
                                            <p className="text-sm font-medium text-gray-700">朱思语</p>
                                            <p className="text-xs text-gray-500">复旦大学、上海科学智能研究院</p>
                                        </div>
                                        
                                        
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-gray-700">陈保友</p>
                                            <p className="text-xs text-gray-500">上海科学智能研究院</p>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-left text-gray-800">领域专家</h2>
                                </div>
                                {/* AI科学家卡片 - 下方靠左 */}
                                <div className="bg-gray-50 rounded-3xl p-8 h-80 flex flex-col justify-between">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-gray-700">文少卿</p>
                                            <p className="text-xs text-gray-500">复旦大学</p>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-gray-700">张梦瀚</p>
                                            <p className="text-xs text-gray-500">复旦大学</p>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-gray-700">任   攀</p>
                                            <p className="text-xs text-gray-500">复旦大学</p>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm font-medium text-gray-700">张晓声</p>
                                            <p className="text-xs text-gray-500">复旦大学</p>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl font-bold text-left text-gray-800">AI科学家</h2>
                                </div>
                                {/* 工程团队卡片 */}
                                <div className="bg-gray-50 rounded-3xl p-8 h-80 flex flex-col justify-between">
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-gray-700">蔡志强</p>
                                        <p className="text-xs text-gray-500">上海科学智能研究院</p>
                                    </div>
                                    <h2 className="text-2xl font-bold text-left text-gray-800">工程团队</h2>
                                </div>

                </div>
                 </div>
                 </div>  
                
                {/* 其他贡献者部分 */}
                <div className="text-center mt-16 mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">其他贡献者</h2>
                    <p className="text-gray-600 mb-8">致敬携手共进的协作伙伴</p>
                    
                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            实习生
                        </button>
                        <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                            标注人员
                        </button>
                        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            成为一分子
                        </button>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </>
    )
}
