"use client";
import { Footer, Nav, PicCard, picCardText } from "@/app/common";
import { useState } from "react";


export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleMoreCooperationClick = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };
    
    return (
        <>
            <Nav></Nav>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-indigo-50 pt-40">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-green-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6">
                        早期中华文明智能体平台
                    </h1>
                    <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                        ECC Agent
                    </p>
                </div>
                {/* Content Section */}
                <div className="max-w-5xl pt-10 mx-auto px-4 py-16">
                    {/* Unified Content Card */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl py-12 px-8 shadow-2xl border border-white/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left side - Content sections */}
                            <div className="space-y-6">
                                

                                {/* Content sections */}
                                <div className="space-y-6 text-gray-800 leading-relaxed">
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                        {/* Header section */}
                                        <div className="mb-8 pl-4">
                                            <h2 className="text-4xl lg:text-2xl font-bold mb-4 leading-tight">平台简介</h2>
                                        </div>
                                        <div className="text-base lg:text-lg text-gray-800 font-medium ">
                                            <p className="m-4 mb-16 pt-4">
                                                ECC Agent 是专为早期中华文明研究打造的多学科、多场景人工智能代理体系，集成持续对话、任务拆解、多轮推理与自主规划等关键能力，能够实现精准理解与智能响应。
                                            </p>
                                            <p className="m-4 mb-16">
                                                通过构建可追溯、可验证的知识生成机制，ECC Agent 确保所有输出均基于可靠的信息来源与完整的证据链，切实满足考古、历史、古文字等领域对结果可信度与可解释性的专业要求。
                                            </p>
                                            <p className="m-4 mb-20">
                                                作为一个开放型智能体系统，ECC Agent 同时赋能教育、科研及大文化产业，广泛应用于学术研究辅助、教学资源生成、公共知识服务与文化创意开发等场景。
                                            </p>
                                        </div>
                                    </div>

                                    {/* <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start space-x-4">
                                            <p className="text-base lg:text-lg text-gray-800 font-medium">
                                                通过构建可追溯、可验证的知识生成机制，ECC Agent 确保所有输出均基于可靠的信息来源与完整的证据链，切实满足考古、历史、古文字等领域对结果可信度与可解释性的专业要求。
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-start space-x-4">
                                            <p className="text-base lg:text-lg text-gray-800 font-medium">
                                                作为一个开放型智能体系统，ECC Agent 同时赋能教育、科研及大文化产业，广泛应用于学术研究辅助、教学资源生成、公共知识服务与文化创意开发等场景。
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                            {/* Right side - 3D Architecture */}
                            <div className="flex justify-center">
                                <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-6 lg:p-8 w-full flex flex-col relative overflow-hidden shadow-xl">
                                {/* Background grid pattern */}
                                {/* <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `
                                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                                        `,
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div> */}
                                
                                {/* Ring Container */}
                                <div className="relative text-center flex-1 flex items-center justify-center">
                                    {/* 3D Ring Architecture with Enhanced Text Effects */}
                                    <div className="relative w-84 h-84">
                                        {/* Outer ring - 第一层：接口层 */}
                                        <div className="absolute inset-0 rounded-full border-4 border-blue-400/40" style={{
                                            background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.15))',
                                            boxShadow: '0 0 50px rgba(59, 130, 246, 0.4), inset 0 0 50px rgba(59, 130, 246, 0.15)'
                                        }}>
                                            {/* 3D Text Labels for Outer Ring */}
                                            <div className="absolute top-2 right-3 transform">
                                                <div className="relative">
                                                    
                                                    <span className="relative text-sm text-blue-200 font-bold drop-shadow-lg" style={{
                                                        textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)'
                                                    }}>考古报告生成</span>
                                                </div>
                                            </div>
                                            
                                            <div className="absolute bottom-22 -right-7 transform ">
                                                <div className="relative">
                                                    <span className="relative text-sm text-blue-200 font-bold drop-shadow-lg" style={{
                                                        textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)'
                                                    }}>考古类型学分析</span>
                                                </div>
                                            </div>
                                            
                                            <div className="absolute top-1/4 -left-4">
                                                <div className="relative">
                                                    <span className="relative text-sm text-blue-200 font-bold drop-shadow-lg" style={{
                                                        textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)'
                                                    }}>古籍校勘</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Middle ring - 第二层：推理层 */}
                                        <div className="absolute inset-12 rounded-full border-4 border-purple-400/50" style={{
                                            background: 'conic-gradient(from 90deg, rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                                            boxShadow: '0 0 40px rgba(147, 51, 234, 0.5), inset 0 0 40px rgba(147, 51, 234, 0.2)'
                                        }}>
                                            {/* 3D Text Labels for Middle Ring */}
                                            <div className="absolute bottom-17 -left-8">
                                                <div className="relative">
                                                    <span className="relative text-sm text-purple-200 font-bold drop-shadow-lg" style={{
                                                        textShadow: '0 0 10px rgba(147, 51, 234, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)'
                                                    }}>古籍版本比对</span>
                                                </div>
                                            </div>
                                            
                                            <div className="absolute top-23 -right-14 transform">
                                                <div className="relative">
                                                    <span className="absolute inset-0 text-sm text-purple-600/50 font-bold transform translate-x-1 translate-y-1 blur-sm">考古简报/报告撰写Agent</span>
                                                    <span className="relative text-sm text-purple-200 font-bold drop-shadow-lg" style={{
                                                        textShadow: '0 0 10px rgba(147, 51, 234, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)'
                                                    }}>古文字识别</span>
                                                </div>
                                            </div>
                                            
                                            <div className="absolute -bottom-6 -right-12">
                                                <div className="relative">
                                                    <span className="relative text-sm text-purple-200 font-bold drop-shadow-lg" style={{
                                                        textShadow: '0 0 10px rgba(147, 51, 234, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)'
                                                    }}>历史地理标注与可视化</span>
                                                </div>
                                            </div>

                                            <div className="absolute -bottom-6 -left-16">
                                                <div className="relative">
                                                    <span className="absolute inset-0 text-sm text-purple-600/50 font-bold transform translate-x-1 translate-y-1 blur-sm">古音拟构与韵律分析 Agent</span>
                                                    <span className="relative text-sm text-purple-200 font-bold drop-shadow-lg" style={{
                                                        textShadow: '0 0 10px rgba(147, 51, 234, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)'
                                                    }}>古音拟构与韵律分析</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Inner core - 核心层：ECC Agent */}
                                        <div className="absolute inset-20 rounded-full border-4 border-cyan-400/60" style={{
                                            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2))',
                                            boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 30px rgba(6, 182, 212, 0.3)'
                                        }}>
                                            {/* Core content with 3D effect */}
                                            <div className="w-full h-full rounded-full flex items-center justify-center">
                                                <div className="text-center relative">
                                                    {/* 3D Shadow for ECC */}
                                                    <div className="absolute inset-0 transform translate-x-2 translate-y-2">
                                                        <h3 className="text-3xl font-black text-cyan-900/50 blur-sm">ECC</h3>
                                                        <h3 className="text-2xl font-black text-cyan-900/50 blur-sm">Agent</h3>
                                                    </div>
                                                    {/* Main text */}
                                                    <h3 className="relative text-3xl font-black text-white mb-1" style={{
                                                        textShadow: '0 0 20px rgba(6, 182, 212, 1), 0 4px 8px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0.5)'
                                                    }}>ECC</h3>
                                                    <h3 className="relative text-2xl font-black text-cyan-100" style={{
                                                        textShadow: '0 0 15px rgba(6, 182, 212, 0.8), 0 2px 6px rgba(0, 0, 0, 0.6)'
                                                    }}>Agent</h3>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Enhanced floating particles with 3D effect */}
                                        <div className="absolute top-8 right-12 w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg" style={{boxShadow: '0 0 15px rgba(59, 130, 246, 0.8)'}}></div>
                                        <div className="absolute bottom-12 left-8 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse delay-500 shadow-lg" style={{boxShadow: '0 0 12px rgba(147, 51, 234, 0.8)'}}></div>
                                        <div className="absolute top-1/3 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-1000 shadow-lg" style={{boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'}}></div>
                                        <div className="absolute bottom-1/4 right-4 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-pulse delay-700 shadow-lg" style={{boxShadow: '0 0 12px rgba(99, 102, 241, 0.8)'}}></div>
                                        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse delay-300 shadow-lg" style={{boxShadow: '0 0 8px rgba(52, 211, 153, 0.8)'}}></div>
                                        <div className="absolute bottom-1/3 left-12 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-900 shadow-lg" style={{boxShadow: '0 0 10px rgba(244, 114, 182, 0.8)'}}></div>
                                    </div>
                                </div>
                                
                                {/* Architecture Diagram Section - Below the rings */}
                                <div className="mt-6 px-4">
                                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-2xl">
                                        {/* Top level - 技术支撑 and 领域反馈 */}
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="flex flex-col items-center">
                                                {/* <div className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mb-1 shadow-lg"></div> */}
                                                <span className="text-xs font-semibold text-cyan-200 bg-cyan-500/20 px-2 py-0.5 rounded-full border border-cyan-400/30">技术支撑</span>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                {/* <div className="w-2 h-6 bg-gradient-to-b from-purple-400 to-indigo-500 rounded-full mb-1 shadow-lg"></div> */}
                                                <span className="text-xs font-semibold text-purple-200 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-400/30">领域反馈</span>
                                            </div>
                                        </div>
                                        
                                        {/* Main platform */}
                                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 mb-4 border border-blue-400/30 backdrop-blur-sm">
                                            <h4 className="text-center text-sm font-bold text-white mb-3">早期中华文明多模态Agent平台</h4>
                                            
                                            {/* Three main modules */}
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="bg-white/15 backdrop-blur-sm rounded p-2 border border-blue-300/30 hover:bg-white/25 transition-all duration-300">
                                                    <div className="text-center text-xs font-medium text-blue-200">多模态数据对齐链路</div>
                                                </div>
                                                <div className="bg-white/15 backdrop-blur-sm rounded p-2 border border-purple-300/30 hover:bg-white/25 transition-all duration-300">
                                                    <div className="text-center text-xs font-medium text-purple-200">时空多模态生成模型</div>
                                                </div>
                                                <div className="bg-white/15 backdrop-blur-sm rounded p-2 border border-indigo-300/30 hover:bg-white/25 transition-all duration-300">
                                                    <div className="text-center text-xs font-medium text-indigo-200">因果逻辑推断系统</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Bottom level - 数据基础 and 多模态大模型 */}
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-gray-500/20 rounded p-3 border border-gray-400/30">
                                                <div className="text-center">
                                                        <div className="text-xs font-semibold text-blue-200 mb-1">数据基础</div>
                                                        <div className="text-xs text-blue-300">数据提取 | 服务平台 | 安全审核平台</div>
                                                </div>
                                            </div>
                                            <div className="bg-blue-500/20 rounded p-3 border border-blue-400/30">
                                                <div className="text-center">
                                                    <div className="text-xs font-semibold text-blue-200 mb-1">多模态大模型</div>
                                                    <div className="text-xs text-blue-300">感知与表征 | 分析与决策 | 时空仿真系统</div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Connection lines */}
                                        <div className="absolute inset-0 pointer-events-none">
                                            <div className="absolute top-8 left-1/2 w-0.5 h-4 bg-gradient-to-b from-cyan-400/60 to-transparent transform -translate-x-1/2"></div>
                                            <div className="absolute bottom-12 left-1/2 w-0.5 h-4 bg-gradient-to-t from-blue-400/60 to-transparent transform -translate-x-1/2"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom title
                                    <div className="text-center mt-3">
                                        <span className="text-xs text-gray-800 font-medium">ECC Agent 架构</span>
                                    </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 学科合作 Section */}
                <div className="relative py-20 overflow-hidden">
                    {/* Background decorative elements */}
                    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-indigo-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
                    
                    <div className="max-w-5xl mx-auto px-4 relative z-10">
                        {/* Header section */}
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight">学科合作</h2>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    ECC Agent依托复旦大学百年人文社科积淀，
                                    
                                </p>
                                <p className="text-lg text-gray-800 leading-relaxed mb-6">
                                    
                                    与众多机构共同研发具有体系科研研究场景的智能体。
                                </p>
                                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                            </div>
                        </div>
                        
                        {/* Cards container */}
                        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/30">
                            <div className="grid grid-cols-3 gap-8">
                                {
                                    picCardText.map((item, index) => (
                                        <PicCard key={index} index={index} onMoreCooperationClick={handleMoreCooperationClick} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 合作弹窗 */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
                        <div className="p-8">
                            {/* 关闭按钮 */}
                            <div className="flex justify-end mb-4">
                                <button 
                                    onClick={closeModal}
                                    className="text-gray-800 hover:text-gray-600 text-2xl font-bold transition-colors"
                                >
                                    ×
                                </button>
                            </div>
                            
                            {/* 标题 */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                                    更多合作
                                </h2>
                                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                            </div>
                            
                            {/* 内容 */}
                            <div className="space-y-6 text-gray-800 leading-relaxed">
                                <p className="text-lg">
                                    ECC Agent坚持开放协作的发展理念，持续拓展跨学科、跨机构的合作网络。我们欢迎来自高校科研机构、博物馆、图书馆、档案馆等各类人文社科研究平台的深度参与，共同探索人工智能在人文学科研究中的创新应用。
                                </p>
                                
                                <p className="text-lg">
                                    我们期待与更多致力于早期中华文明研究的机构携手，共建具有人文视野与科研能力的AI未来。
                                </p>
                                
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-400">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">联系我们</h3>
                                    <p className="text-lg mb-2">
                                        如果您希望了解合作详情，或有具体合作意向，欢迎联系我们：
                                    </p>
                                    <div className="space-y-2 text-gray-800">
                                        <p>
                                            <span className="font-semibold">上海科学智能研究院：</span>
                                            <a href="mailto:sais@sais.com.cn" className="text-blue-600 hover:text-blue-800 transition-colors">
                                                sais@sais.com.cn
                                            </a>
                                        </p>
                                        <p>
                                            <span className="font-semibold">早期中华文明多模态大模型项目 张利伟：</span>
                                            <a href="mailto:zhangliwei@sais.com.cn" className="text-blue-600 hover:text-blue-800 transition-colors">
                                                zhangliwei@sais.com.cn
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* 底部按钮 */}
                            <div className="mt-8 text-center">
                                <button 
                                    onClick={closeModal}
                                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    关闭
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            <Footer></Footer>
        </>
    )
}
