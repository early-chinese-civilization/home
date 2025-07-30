
import Link from "next/link";

export function SidebarButton({ text, url }: { text: string, url: string }) {
    return (
        <Link className='
      text-gray-800 hover:text-gray-900 text-lg font-medium 
      hover:bg-white hover:text-black'
            href={`${url}`}>
            {text}
        </Link>
    )
}

export function Nav() {
    return (
        <>
        <nav className="fixed top-0 left-0 right-0 z-50 py-4 bg-white shadow-sm" >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Site Name */}
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-gray-800 font-medium leading-tight">
                            <div className="text-base">早期中华文明多模态大模型</div>
                            <div className="text-base">Early Chinese Civilization Multimodal Model</div>
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        <SidebarButton text="主页" url="/"></SidebarButton>
                        <SidebarButton text="测评集" url="/benchmark"></SidebarButton>
                        <SidebarButton text="模型" url="/model"></SidebarButton>
                        <SidebarButton text="Agent" url="/agent"></SidebarButton>
                        <SidebarButton text="团队" url="/team"></SidebarButton>
                        <a href="#" className="bg-black text-white px-3 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
                            中文
                        </a>
                    </div>
                    </div>
                </div>

            </nav>

        </>
    )
}

export function Footer() {
    return (
        <>
            <footer className="mt-2 bg-white text-sm text-gray-800 py-12 pt-10">
                <div className="flex flex-col items-center text-center space-y-2">
                    <p>© 2025 早期中华文明多模态大模型团队. 版权所有</p>
                    <div className="flex space-x-4">
                        <Link href="/privacy" className="text-blue-500 hover:text-blue-700">隐私政策</Link>
                        <span className="text-gray-800">|</span>
                        <Link href="/team" className="text-blue-500 hover:text-blue-700">了解团队</Link>
                        <span className="text-gray-800">|</span>
                        <Link href="https://www.sais.com.cn/recruitList" className="text-blue-500 hover:text-blue-700">加入我们</Link>
                    </div>
                </div>
            </footer>
        </>
    )
  }

export const picCardText = [
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


export function PicCard({ index, onMoreCooperationClick }: { index: number, onMoreCooperationClick: () => void }) {
    const picText = picCardText[index]
    const isMoreCooperation = picText.p1 === "更多合作>>>"
    return (
        <>
            <div className={isMoreCooperation ? "cursor-pointer" : ""}>
                <div
                    className="bg-cover bg-center h-48 rounded-lg overflow-hidden mb-4"
                    style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}/agent_pics/${index}.jpg)` }}
                    onClick={isMoreCooperation ? onMoreCooperationClick : undefined}
                ></div>
                <div className="text-gray-800">
                    <h3
                        className={`text-base font-bold mb-2 whitespace-nowrap ${isMoreCooperation ? 'cursor-pointer hover:text-blue-600 transition-colors' : ''}`}
                        onClick={isMoreCooperation ? onMoreCooperationClick : undefined}
                    >
                        {picText.p1}
                    </h3>
                    <p className="text-base mb-1">{picText.p2}</p>
                    <p className="text-base">{picText.p3}</p>
                </div>
            </div>
        </>
    )
}

export const TextCardDataList = [
    {
        "title1": "ECC Bench",
        "title2": "洞见AI研究的智能试金石",
        "description": [
            "ECC Bench是全球最大的早期中华文明多模态数据和评测集，系统覆盖考古、历史、语言、古文字等学科领域，汇聚超100T专业化语料、5万SFT数据、1万个高质量研究问题。",
            "作为专门为早期中华文明研究打造的测评集，ECC Bench首创\"学科领域×问题难度×研究场景\"三维度分层设计体系，联合领域专家开展数据筛选与标注，以严谨的学术标准确保数据权威性与应用价值。",
            "ECC Bench 为可为AI for Humanities的多模态模型测评、智能体训练与知识生成提供坚实支撑，重塑人文社科智能研究的评估标准。"
        ],
        "url": "/benchmark",
        "button_text": "了解更多"
    },
    {
        "title1": "ECC Model",
        "title2": "解码中华早期文明的智慧中枢",
        "description": [
            "ECC Model 是首个专为早期中华文明研究打造的多模态基础大模型，基于统一的Diffusion Transformer架构推出 8B 与 72B 两种参数规模，全面支持文本、图像、音频、视频、空间地理信息等五大模态的统一理解与生成。",
            "模型创新性提出MCTS-GRPO 多模态强化训练框架，首次将人文学科研究范式深度融入大模型训练，使模型具备文献检索、史料识读、资料翻译、事实呈现、特征描述、信度考据与分析推理等多项核心能力，满足多种科研需求。"
        ],
        "url": "/model",
        "button_text": "了解更多"
    },
    {
        "title1": "ECC Agent",
        "title2": "赋能教育、科研、大文化的智能体",
        "description": [
            "ECC Agent 是专为早期中华文明研究打造的多学科、多场景人工智能代理体系，集成持续对话、任务拆解、多轮推理与自主规划等关键能力，能够实现精准理解与智能响应。通过构建可追溯、可验证的知识生成机制，确保模型输出依托可靠来源与完整证据链，切实满足考古、历史、古文字等领域的科研要求。",
            "作为一个开放型智能体，ECC Agent 不仅可服务于专业研究，亦可广泛赋能教育培训、科研创新与大文化产业，为中华文明的创造性转化与创新性发展注入智能动能。"

        ],
        "url": "/agent",
        "button_text": "了解更多"
    }
]

export const SidebarCardList = [
    ["专家团队", "本项目由专家指导委员会领衔", "由AI科学家、专业领域学者、工程技术人员联合开发"],
    ["贡献者名单", "本项目是集体努力的成果", "向所有参与人员致谢"],
    ["阅读文章", "阅读我们基于本项目撰写的", "专题研究"],
    ["加入我们，推动知识与技术的共生演进", "成为我们的领域专家", "共同引领人工智能在文明研究中的深度突破"]
]

export function TextCard({ index }: { index: number }) {
    const data = TextCardDataList[index]
    const gradients = [
        'from-blue-50 to-indigo-100',
        'from-purple-50 to-pink-100',
        'from-green-50 to-emerald-100'
    ]

    return (
        <>
            <div className={`bg-gradient-to-br ${gradients[index]} border border-gray-200/50 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 h-190 flex flex-col rounded-2xl backdrop-blur-sm`}>
                <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                    <h3 className="text-xl font-bold text-gray-800">{data.title1}</h3>
                </div>
                <p className="text-base font-semibold mb-6 text-gray-800 leading-relaxed whitespace-nowrap">{data.title2}</p>

                {/* 上方文字区域 - 固定高度，超出显示省略号 */}
                <div className="flex-1 overflow-hidden">
                    <div className="text-lg text-gray-800 h-100 leading-relaxed">
                        <p className="mb-2 whitespace-pre-line">{data.description.join('\n')}</p>
                    </div>
                </div>

                {/* 下方按钮区域 - 固定在底部居中 */}
                <div className="flex justify-center mt-6">
                    <Link href={data.url} className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        {data.button_text}
                    </Link>
                </div>
            </div>
        </>
    )
}

export function SidebarCard({ index, spanNumber }: { index: number, spanNumber: number }) {
    const card = SidebarCardList[index]
    const cardColors = [
        'from-amber-50 to-orange-100 border-amber-200',
        'from-rose-50 to-pink-100 border-rose-200',
        'from-cyan-50 to-blue-100 border-cyan-200',
        'from-violet-50 to-purple-100 border-violet-200'
    ]

    const getClickHandler = () => {
        if (index === 0) {
            // 专家团队 - 跳转到team页面
            return () => window.location.href = '/team'
        } else if (index === 1) {
            // 贡献者名单 - 跳转到team页面的其他贡献者部分
            return () => window.location.href = '/team#contributors'
        } else if (index === 3) {
            // 加入我们 - 跳转到SAIS招聘页面
            return () => window.location.href = 'https://www.sais.com.cn/recruitList'
        }
        return undefined
    }

    const isClickable = index === 0 || index === 1 || index === 3

    return (
        <>
            {/* Expert Team */}
            <div 
                className={`${spanNumber === 5 ? 'col-span-5' : 'col-span-3'} p-8 rounded-2xl bg-gradient-to-br ${cardColors[index]} border hover:shadow-2xl hover:scale-102 transition-all duration-500 group ${isClickable ? 'cursor-pointer' : ''}`}
                onClick={getClickHandler()}
            >
                <div className="flex items-start mb-6">
                    <div>
                        <h3 className="font-bold text-2xl mb-8 text-gray-800 group-hover:text-gray-900 transition-colors">{card[0]}</h3>
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <span className="text-white text-lg font-bold transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </div>
                        <p className="text-gray-800 text-lg leading-relaxed group-hover:text-gray-800 transition-colors">
                            {card[1]}
                        </p>
                        <p className="text-gray-800 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                            {card[2]}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
  }