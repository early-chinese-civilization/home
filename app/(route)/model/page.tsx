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
                            ECC Model 解码中华早期文明的智慧中枢
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
                    </div>

                    {/* 核心概述框 */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 mb-12 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                早期中华文明多模态理解生成大模型
                            </h2>
                        </div>
                        <div className="p-8">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-bold text-indigo-800 mb-4">核心概述：</h3>
                                <p className="text-gray-700 leading-relaxed text-base">
                                    面向早期中华文明研究的独特需求与技术瓶颈，打造符合中华文明价值观的可信赖智能研究基座，为人文社科领域提供坚实支撑。
                                </p>
                            </div>
                            
                            {/* 三大功能模块 */}
                            <div className="space-y-8">
                                {/* 模块1 */}
                                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-cyan-800 mb-4 flex items-center">
                                        <span className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                        统一架构·多模态交互
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        基于Diffusion Transformer统一架构，推出8B与72B双参数规格。模型高效对齐早期中华文明时空多模态数据，系统性解析历史规律与文化关联。当前覆盖文本、图像双模态理解与生成，未来将扩展至文本、图像、音频、视频、时空数据五模态统一融合，实现深度跨模态交互与协同。
                                    </p>
                                </div>
                                
                                {/* 模块2 */}
                                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                                        <span className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                        训练创新·人文社科范式内核
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        首创MCTS-GRPO多模态强化训练框架，赋予模型遵循人文学科范式的严谨推演能力，可对历史脉络、文化符号等复杂逻辑进行实证推理。依托权威数据，输出结果均基于可靠知识源与充实证据链。确保大模型知识生产契合人文学科的复杂性与批判性思维，如历史语境还原、证据链可验证、多元阐释兼容等。
                                    </p>
                                </div>
                                
                                {/* 模块3 */}
                                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                                        <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                        范式跃迁·驱动研究效率与深度革命
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        {`多模态大模型具备极速检索、智能识读、多语言精准翻译等功能，可显著提升研究效率。其跨模态关联分析能力更有助于强化研究深度；驱动传统\"二重证据法\"向文本、图像、音频、视频、时空数据五模态互证体系的革命性升级，构建跨模态协同验证框架，显著拓展研究维度与洞察力，实现研究深度的革命性提升。`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 架构图框 */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                早期中华文明多模态理解生成大模型运行机制示意图
                            </h2>
                        </div>
                        <div className="p-8">
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                                <p className="text-gray-700 leading-relaxed text-lg text-center">
                                    展示ECC Model的完整技术架构与运行流程，从多模态数据输入到智能化输出的全链路处理机制
                                </p>
                            </div>
                            
                            {/* 架构图 */}
                            <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-lg">
                                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/fusion.png`} alt="ECC模型架构图" className="w-full h-auto mx-auto" width={800} height={600} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </>
    )
}
