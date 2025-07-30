"use client";
import { Footer, Nav } from "@/app/common";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Nav></Nav>
            
            <div className="min-h-screen bg-gradient-to-br pt-25 from-blue-50 to-indigo-100">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    {/* 页面标题 */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">
                            早期中华文明理解生成大模型
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                    </div>

                    {/* 核心概述框 */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mb-12 overflow-hidden">
                        <div className="p-8">
                            <div className="p-6 mb-8">
                                <p className="text-lg text-gray-800 leading-relaxed">
                                    面向早期中华文明研究的独特需求与技术瓶颈，打造符合中华文明价值观的可信赖智能研究基座，为人文社科领域提供坚实支撑。
                                </p>
                            </div>
                            
                            {/* 三大功能模块 */}
                            <div className="space-y-8">
                                {/* 模块1 */}
                                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-cyan-800 mb-4 flex items-center">
                                        <span className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                                        统一多模态架构
                                    </h3>
                                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                                        模型基于统一的Diffusion Transformer架构，推出8B与72B两种参数规模，全面支持文本、图像、音频、视频、空间地理信息等五大模态的统一理解与生成。
                                    </p>
                                </div>
                                
                                {/* 模块2 */}
                                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                                        <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                                        融入人文研究范式
                                    </h3>
                                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                                        模型创新性提出MCTS-GRPO多模态强化训练框架，首次将人文学科研究范式深度融入大模型训练，赋予模型遵循人文学科范式的严谨推演能力，确保大模型知识生产契合人文学科的复杂性与批判性思维。
                                    </p>
                                </div>
                            
                                
                                {/* 模块3 */}
                                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                                        <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                                        赋能学术研究革新
                                    </h3>
                                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                                        多模态大模型具备极速检索、史料识读、精准翻译、分析推论等功能，可显著提升研究效率；其跨模态关联分析能力更有助于拓展研究维度、挖掘研究深度，最终实现学术研究的革命性提升。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 架构图框 */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

                        <div className="px-8 py-4">
                            
                            {/* 架构图 */}
                            <div className="bg-white rounded-xl p-6">
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/fusion.svg`} alt="ECC模型架构图" className="w-full h-auto mx-auto" width={800} height={600} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </>
    )
}
