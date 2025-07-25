"use client";
import { Footer, Nav } from "@/app/common";

export default function Home() {
    return (
        <>
            <Nav></Nav>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
                {/* Hero Section */}
                <div className="max-w-5xl mx-auto px-4 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-6">
                            早期中华文明评测集
                        </h1>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            <span className="font-semibold text-blue-800">全球首创：</span>
                            聚焦早期中华文明（旧石器至西汉）的万题级研究导向评测集
                        </p>
                    </div>

                    {/* Framework Cards */}
                    <div className="space-y-12">
                        {/* 第一个框 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    核心概述
                                </h2>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-700 mb-8 leading-relaxed">
                                    本评测集是全球规模最大（10,000 道题）、聚焦早期中华文明（旧石器时代至西汉）的高质量中文研究导向评测集，旨在填补该领域系统性、大规模能力评估的空白。其核心优势体现为首创性、系统性与权威性的有机统一。
                                </p>
                                
                                {/* 重新设计的三栏布局 */}
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                                    {/* 首创性 */}
                                    <div className="bg-blue-50 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                            首创性
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            首开先河：全球首个面向早期中华文明领域深度研究能力的万题级研究导向评测集，首创开放式问答评估体系，在规模与深度上实现双重突破。
                                        </p>
                                        <div className="mt-4 p-4 bg-white rounded-lg border border-blue-200">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-blue-600">10,000+</div>
                                                <div className="text-sm text-gray-600">题目规模</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* 系统性 */}
                                    <div className="bg-green-50 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                            系统性
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            历史分期覆盖：系统覆盖旧石器时代至西汉各历史分期。
                                        </p>
                                        
                                        {/* 真实的历史分期分布图 */}
                                        <div className="bg-white rounded-lg p-3 border border-green-200">
                                            <img src="/history_periods_chart.svg" alt="历史分期分布图" className="w-full h-auto"/>
                                        </div>
                                        
                                        <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                                            三维分层架构体系：独创"学科领域 × 问题类型 × 研究场景"三维设计体系，实现精准、多维度能力评估。
                                        </p>
                                    </div>
                                    
                                    {/* 权威性 */}
                                    <div className="bg-purple-50 rounded-xl p-6 lg:col-span-1 md:col-span-2">
                                        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                            权威性
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            本测评集基于专业化多核心数据制备与严格审核体系，题目根基源于专业研究文献与权威数据库，经由领域专业人士进行多层深度标注审核，确保每道题目的专业性与可靠性达到最高标准。
                                        </p>
                                        
            
                                        
                                        <p className="text-gray-700 leading-relaxed mt-4">
                                            早期中华文明评测集为精准、多维度评估大语言模型在早期中华文明研究领域的深度专业能力与研究素养构建了坚实基础，是该领域能力评估创新的里程碑。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 第二个框 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    评测集结构完善性：三维度分层设计体系
                                </h2>
                            </div>
                            <div className="p-8">
              
                                
                                {/* 三个分布图表在同一行 */}
                                <div className="grid lg:grid-cols-3 gap-6 mb-10">
                                    {/* 学科领域分布 */}
                                    <div className="bg-blue-50 rounded-xl p-4 h-48 flex flex-col">
                                        <h4 className="font-bold text-blue-800 mb-3 text-center">学科领域分布</h4>
                                        <div className="bg-white rounded-lg p-3 border border-blue-200 flex-1 flex items-center min-h-[120px]">
                                            <p className="text-gray-700 text-sm leading-relaxed text-justify">
                                                系统覆盖八大核心学科，考古学、文物学、中国古代史、历史地理学、历史文献学、中国古典文献学、汉语言文字学、中国古代文学，建立综合评估基础。
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* 题型分布 */}
                                    <div className="bg-orange-50 rounded-xl p-4 h-48 flex flex-col">
                                        <h4 className="font-bold text-orange-800 mb-3 text-center">题型分布</h4>
                                        <div className="bg-white rounded-lg p-3 border border-orange-200 flex-1 flex items-center min-h-[120px]">
                                            <p className="text-gray-700 text-sm leading-relaxed text-justify">
                                                判断题、选择题、简答题、图文题四大题型精准匹配能力维度，确保测评方式与目标能力高度契合。
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* 研究场景分布 */}
                                    <div className="bg-teal-50 rounded-xl p-4 h-48 flex flex-col">
                                        <h4 className="font-bold text-teal-800 mb-3 text-center">研究场景分布</h4>
                                        <div className="bg-white rounded-lg p-3 border border-teal-200 flex-1 flex items-center min-h-[120px]">
                                            <p className="text-gray-700 text-sm leading-relaxed text-justify">
                                                评测内容紧密围绕相关研究的核心环节，系统模拟检索、翻译、语料/图像精准识读、事实呈现、特征描述、信度考据、分析推论七大关键研究场景。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 一、学科领域全覆盖 */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6">一、学科领域全覆盖：构建知识评估基座</h3>
                                    
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        系统覆盖八大核心学科，建立综合评估基础。
                                    </p>
                                    
                                    <div className="bg-white rounded-lg p-6 border border-blue-200 shadow-sm">
                                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                             <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200 hover:bg-blue-100 transition-colors">
                                                 <span className="font-semibold text-blue-700">考古学</span>
                                             </div>
                                             <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200 hover:bg-purple-100 transition-colors">
                                                 <span className="font-semibold text-purple-700">文物学</span>
                                             </div>
                                             <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200 hover:bg-green-100 transition-colors">
                                                 <span className="font-semibold text-green-700">中国古代史</span>
                                             </div>
                                             <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200 hover:bg-orange-100 transition-colors">
                                                 <span className="font-semibold text-orange-700">历史地理学</span>
                                             </div>
                                             <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200 hover:bg-red-100 transition-colors">
                                                 <span className="font-semibold text-red-700">历史文献学</span>
                                             </div>
                                             <div className="bg-indigo-50 rounded-lg p-4 text-center border border-indigo-200 hover:bg-indigo-100 transition-colors">
                                                 <span className="font-semibold text-indigo-700">中国古典文献学</span>
                                             </div>
                                             <div className="bg-teal-50 rounded-lg p-4 text-center border border-teal-200 hover:bg-teal-100 transition-colors">
                                                 <span className="font-semibold text-teal-700">汉语言文字学</span>
                                             </div>
                                             <div className="bg-pink-50 rounded-lg p-4 text-center border border-pink-200 hover:bg-pink-100 transition-colors">
                                                 <span className="font-semibold text-pink-700">中国古代文学</span>
                                             </div>
                                         </div>
                                     </div>
                                </div>
                                {/* 一、四大题型能力分层 */}
                                <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-8 mb-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6">二、四大题型能力分层：精准定位模型能力域</h3>
                                    
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        多元题型精准匹配能力维度，确保测评方式与目标能力高度契合。
                                    </p>
                                    
                                    <div className="bg-white rounded-lg p-6 border border-emerald-200 shadow-sm">
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="border-b border-gray-200">
                                                        <th className="text-left py-3 px-4 font-bold text-gray-800 bg-emerald-50">题型</th>
                                                        <th className="text-left py-3 px-4 font-bold text-gray-800 bg-emerald-50">测试重点</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 font-semibold text-blue-700">判断题</td>
                                                        <td className="py-4 px-4 text-gray-700">概念理解·信息确认·抗幻觉能力</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 font-semibold text-purple-700">选择题</td>
                                                        <td className="py-4 px-4 text-gray-700">事实辨析·分析推论·迷惑项过滤</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                                        <td className="py-4 px-4 font-semibold text-green-700">简答题</td>
                                                        <td className="py-4 px-4 text-gray-700">因果推理显性化·要素结构化提炼</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-4 px-4 font-semibold text-orange-700">图文题</td>
                                                        <td className="py-4 px-4 text-gray-700">图像-文本联合推理·证据链重构</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 二、七大研究场景测评 */}
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6">三、七大研究场景测评：契合相关研究实际需求</h3>
                                    
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        评测内容紧密围绕相关研究的核心环节，系统模拟六大关键研究场景：
                                    </p>
                                    
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-white rounded-lg p-5 border border-indigo-200 shadow-sm">
                                            <h4 className="font-bold text-indigo-800 mb-3 flex items-center">
                                                <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">1</span>
                                                检索
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                评估信息定位与筛选能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-purple-200 shadow-sm">
                                            <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                                                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">2</span>
                                                翻译
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                测评对语言形式（如古今文、语种、风格等）进行准确转换并保持原意的能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm">
                                            <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                                                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">3</span>
                                                语料/图像精准识读
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                考察对原始材料（文字、图像等）的准确释读与信息提取能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-green-200 shadow-sm">
                                            <h4 className="font-bold text-green-800 mb-3 flex items-center">
                                                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">4</span>
                                                事实呈现
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                测评客观、清晰地陈述关键史实或信息的能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-yellow-200 shadow-sm">
                                            <h4 className="font-bold text-yellow-800 mb-3 flex items-center">
                                                <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">5</span>
                                                特征描述
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                要求识别并准确描述研究对象（文本、文物、现象等）的显著特点。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-red-200 shadow-sm">
                                            <h4 className="font-bold text-red-800 mb-3 flex items-center">
                                                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">6</span>
                                                信度考据
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                评估对信息来源、证据可靠性的判断与考辨能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-teal-200 shadow-sm md:col-span-2 lg:col-span-1">
                                            <h4 className="font-bold text-teal-800 mb-3 flex items-center">
                                                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">7</span>
                                                分析推论
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                综合考察基于证据进行逻辑推理、形成见解或提出假设的能力。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 第三个框 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden" style={{backgroundImage: 'url(/data_preparation_flow.svg)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 bg-opacity-90">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    测评集权威基础构建：专业化数据制备与权威审核体系
                                </h2>
                            </div>
                            <div className="p-8 bg-white bg-opacity-95">
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        本多模态评测数据制备流程严格遵循专业保障体系，构建从原始数据到高质量数据集的完整链路，确保每一道题目都经过严格的专业审核机制。
                                    </p>
                                </div>
                                

                                
                                {/* 核心特色 */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                                            <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                            知识来源权威化
                                        </h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            保证题目来源的可靠性与知识覆盖的广泛性
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                                                <span className="text-blue-500 mr-3">📚</span>
                                                <span className="text-gray-700">基于专业研究文献与学术期刊</span>
                                            </div>
                                            <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                                                <span className="text-blue-500 mr-3">🗄️</span>
                                                <span className="text-gray-700">依托相关领域权威数据库</span>
                                            </div>
                                            <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                                                <span className="text-blue-500 mr-3">🏛️</span>
                                                <span className="text-gray-700">整合考古报告与文物资料</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                                            <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                            题目生产专业化
                                        </h3>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            多维度专业标注与严格质量控制体系
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                                                <span className="text-emerald-500 mr-3">👨‍🎓</span>
                                                <span className="text-gray-700">专业人士多层标注与审核</span>
                                            </div>
                                            <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                                                <span className="text-emerald-500 mr-3">📏</span>
                                                <span className="text-gray-700">18+标准维度精细化把控</span>
                                            </div>
                                            <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
                                                <span className="text-emerald-500 mr-3">🔄</span>
                                                <span className="text-gray-700">双重复审机制确保可靠性</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 第四个框 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    技术创新示例问题
                                </h2>
                            </div>
                            <div className="p-8">
                                {/* Question Navigation */}
                                <div className="flex justify-between items-center mb-6">
                                    <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors">
                                        ← 上一题
                                    </button>
                                    <div className="text-gray-600 font-medium">
                                        第 1 题 / 共 5 题
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition-colors">
                                        下一题 →
                                    </button>
                                </div>
                                
                                {/* Question and Image Section */}
                                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                    {/* Image */}
                                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                                        <h3 className="text-lg font-bold text-gray-800 mb-4">考古文物图片</h3>
                                        <img src="/archaeological_artifacts.svg" alt="考古文物" className="w-full h-auto rounded-lg border border-gray-200"/>
                                        <p className="text-sm text-gray-500 mt-3 italic">
                                            附图《华夏考古》1989年第4期《登封市新密新郑时代早期文明文化遗存的调查与试掘》
                                        </p>
                                    </div>
                                    
                                    {/* Question */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                                        <h3 className="text-lg font-bold text-indigo-800 mb-4">题目</h3>
                                        <p className="text-gray-700 leading-relaxed text-base">
                                            根据左图所示的新石器时代早期文明文化遗存中出土的陶器为主的器物，并结合文本信息分析其可能的功能和制作工艺。请从以下几个方面进行分析：
                                        </p>
                                        <ul className="mt-4 space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="text-indigo-500 mr-2">•</span>
                                                器物的形态特征和功能用途
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-indigo-500 mr-2">•</span>
                                                制作工艺和技术水平
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-indigo-500 mr-2">•</span>
                                                文化背景和历史意义
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* Answer Section */}
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-emerald-800 mb-6 flex items-center">
                                        <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">答</span>
                                        参考答案
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="bg-white rounded-lg p-5 border border-emerald-200">
                                            <h4 className="font-bold text-emerald-700 mb-3">1. 器物形态特征与功能分析</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                图中展示的器物为新石器时代早期典型的陶器制品，器形规整，表面光滑，显示出较高的制作水平。从器形分析，该器物具有明显的实用功能特征：器口较大，便于盛装和取用；器身深度适中，适合储存液体或固体食物；底部设计合理，保证了器物的稳定性。这些特征表明该器物主要用于日常生活中的储存和盛装功能。
                                            </p>
                                        </div>
                                        


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}
