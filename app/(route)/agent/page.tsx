"use client";
import { Footer, Nav } from "@/app/common";

const picCardText = [
    {
        "p1": "ECC Agent X 历史地理研究中心",
        "p2": "中国地方志资料建设",
        "p3": "中国历史地理大模型",
    },
    {
        "p1": "ECC Agent X 出土文献与古文字研究中心",
        "p2": "中国古文字多模态数据集",
        "p3": "中国古文字知识图谱",
    },
    {
        "p1": "ECC Agent X 现代语言学研究院",
        "p2": "东亚语言 / 方言数据集",
        "p3": "社会结构的模拟孪生系统",
    },
    {
        "p1": "ECC Agent X 文物与博物馆学系",
        "p2": "中国考古报告语料建设",
        "p3": "考古报告生成Agent",
    },
    {
        "p1": "ECC Agent X 中国古籍保护研究院",
        "p2": "上海地方志语料建设",
        "p3": "",
    },
    {
        "p1": "更多合作>>>",
        "p2": "",
        "p3": "",
    }
]





export function PicCard({index}:{index:number}) {
    let picText = picCardText[index]
    return (
        <>
            <div className="">
                <div className="bg-cover bg-center h-48 rounded-lg overflow-hidden mb-4" style={{ backgroundImage: `url(/agent_pics/${index}.jpg)` }}></div>
                <div className="text-gray-800">
                    <h3 className="text-base font-bold mb-2 whitespace-nowrap">{picText.p1}</h3>
                    <p className="text-sm mb-1">{picText.p2}</p>
                    <p className="text-sm">{picText.p3}</p>
                </div>
            </div>
        </>
    )
}

export default function Home() {
    return (
        <>
            <Nav></Nav>
            {/* Hero Section */}
            <div className="relative h-180 flex items-center justify-center">
                {/* Background Image */}
                
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(/agent_bg.png)'
                    }}
                ></div>
                
                {/* Overlay - temporarily removed to test background image */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
                
                {/* Content */}
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-6xl font-bold mb-4">ECC Agent</h1>
                    <p className="text-xl mb-8">早期中华文明Agent平台</p>
                    <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
                        试用
                    </button>
                </div>

                
            </div>
            
            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <div className="grid grid-cols-2 gap-12 items-stretch">
                    {/* Left side - Image */}
                    <div className="flex justify-center">
                        <div className="bg-gray-100 rounded-lg p-8 w-full h-full flex flex-col justify-center">
                            <div className="relative text-center">
                                {/* Top text */}
                                <div className="mb-6">
                                    <span className="text-sm text-gray-600">多模态数据对话系统</span>
                                </div>
                                
                                {/* Left text */}
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                                    <span className="text-sm text-gray-600 transform -rotate-90 whitespace-nowrap">时空关系建立与推理</span>
                                </div>
                                
                                {/* Right text */}
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                    <span className="text-sm text-gray-600 transform rotate-90 whitespace-nowrap">数据库连</span>
                                </div>
                                
                                {/* Center background image with title */}
                                <div className="relative mx-auto w-56 h-40 bg-contain bg-no-repeat bg-center rounded-lg flex items-center justify-center" style={{backgroundImage: 'url(/ecc_agent_bg.png)'}}>
                                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">ECC Agent</h3>
                                </div>
                                
                                {/* Bottom left text */}
                                <div className="absolute bottom-6 left-8">
                                    <span className="text-sm text-gray-600">因果推理系统</span>
                                </div>
                                
                                {/* Bottom right text */}
                                <div className="absolute bottom-6 right-8">
                                    <span className="text-sm text-gray-600">多模态大模型</span>
                                </div>
                                
                                {/* Bottom text */}
                                <div className="text-sm text-gray-600 mt-8">
                                    <span>ECC Agent架构</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="h-full flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">早期中华文明智能体平台</h2>
                        <p className="text-lg text-gray-600 mb-6">ECC Agent</p>
                        
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                ECC Agent 是专为早期中华文明研究打造的多学科、多场景人工智能代理体系，集成持续对话、任务拆解、多轮推理与自主规划等关键能力，能够实现精准理解与智能响应。任务拆解、多轮推理与自主规划等关键能力，能够实现精准理解与智能响应。
                            </p>
                            <p>
                                通过构建可追溯、可验证的知识生成机制，ECC Agent 确保所有输出均基于可靠的信息来源与完整的证据链，切实满足考古、历史、古文字等领域对结果可信度与可解释性的专业要求，为高水平人文社科研究提供有力支撑。
                            </p>
                            <p>
                                作为一个开放型智能体系统，ECC Agent 同时赋能教育、科研及大文化产业，广泛应用于学术研究辅助、教学资源生成、公共知识服务与文化创意开发等专场景，助推中华文明的数字转化与创新性发展。
                            </p>
                        </div>
                        
                        <div className="mt-8">
                            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors w-full">
                                体验ECC Agent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* 学科合作 Section */}
            <div className="max-w-5xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-4">学科合作</h2>
                <p className="text-gray-600 mb-12">ECC Agent依托复旦大学百年人文社科积淀，与众多机构共同研发具有体系科研研究场景的智能体。</p>
                <div className="grid grid-cols-3 gap-6">
                    {/* 第一行 */}
                    {
                        picCardText.map((item, index) => (
                            <PicCard key={index} index={index} />
                        ))
                    }
                </div>
            </div>
            
            <Footer></Footer>
        </>
    )
}
