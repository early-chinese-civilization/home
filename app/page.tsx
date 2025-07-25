"use client";
import { Footer, Nav } from "@/app/common";

const TextCardDataList = [
  {
    "title1": "ECC Bench",
    "title2": "洞见AI研究的智能试金石",
    "description": [
      "ECC Bench是全球最大的早期中华文明多模态数据和评测集，系统覆盖考古、历史、语言、古文字等学科领域，汇聚超100T专业化语料、5万SFT数据、1万个高质量研究问题。",
      "作为专门为早期中华文明研究打造的测评集，ECC Bench首创\"学科领域×问题难度×研究场景\"三维度分层设计体系，联合领域专家开展数据筛选与标注，以严谨的学术标准确保数据权威性与应用价值。",
      "ECC Bench 为可为AI for Humanities的多模态模型测评、智能体训练与知识生成提供坚实支撑，重塑人文社科智能研究的评估标准。"
    ],
    "url": "",
    "button_text": "查看"
  },
  {
    "title1": "ECC Model",
    "title2": "解码中华早期文明的智慧中枢",
    "description": [
      "ECC Model 是首个专为早期中华文明研究打造的多模态基础大模型，基于统一的Diffusion Transformer架构推出 8B 与 72B 两种参数规模，全面支持文本、图像、音频、视频、空间地理信息等五大模态的统一理解与生成。",
      "模型创新性提出MCTS-GRPO 多模态强化训练框架，首次将人文学科研究范式深度融入大模型训练，使模型具备文献检索、史料识读、事实呈现、特征描述、信度考据与分析推理等多项核心科研能力，满足大多数科研需求。"
    ],
    "url": "",
    "button_text": "试用"
  },
  {
    "title1": "ECC Agent",
    "title2": "赋能教育、科研、大文化的智能体",
    "description": [
      "ECC Agent 是专为早期中华文明研究打造的多学科、多场景人工智能代理体系，集成持续对话、任务拆解、多轮推理与自主规划等关键能力，能够实现精准理解与智能响应。通过构建可追溯、可验证的知识生成机制，确保模型输出依托可靠来源与完整证据链，切实满足考古、历史、古文字等领域的科研要求。"
    ],
    "url": "",
    "button_text": "试用"
  }
]

const SidebarCardList = [
  ["专家团队", "本项目由专家指导委员会领衔", "AI科学家、专业领域学者、工程技术人员联合开发"],
  ["贡献者名单", "本项目是集体努力的成果", "向所有参与人员致谢"],
  ["阅读文章", "阅读我们基于本项目撰写的", "“AI for Humanity” 主题文章"],
  ["加入我们，推动知识与技术的共生演进", "成为我们的领域专家", "共同引领人工智能在文明研究中的深度突破"]
]

export function TextCard({ index }: { index: number }) {
  let data = TextCardDataList[index]
  const gradients = [
    'from-blue-50 to-indigo-100',
    'from-purple-50 to-pink-100', 
    'from-green-50 to-emerald-100'
  ]
  
  return (
    <>
      <div className={`bg-gradient-to-br ${gradients[index]} border border-gray-200/50 p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 h-120 flex flex-col rounded-2xl backdrop-blur-sm`}>
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
          <h3 className="text-xl font-bold text-gray-800">{data.title1}</h3>
        </div>
        <p className="text-lg font-semibold mb-6 text-gray-700 leading-relaxed">{data.title2}</p>

        {/* 上方文字区域 - 固定高度，超出显示省略号 */}
        <div className="flex-1 overflow-hidden">
          <div className="text-sm text-gray-600 h-70 leading-relaxed">
            <p className="mb-2 whitespace-pre-line">{data.description.join('\n')}</p>
          </div>
        </div>

        {/* 下方按钮区域 - 固定在底部居中 */}
        <div className="flex justify-center mt-6">
          <a href="#" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            {data.button_text}
          </a>
        </div>
      </div>
    </>
  )
}

export function SidebarCard({ index, spanNumber }: { index: number, spanNumber: number }) {
  let card = SidebarCardList[index]
  const cardColors = [
    'from-amber-50 to-orange-100 border-amber-200',
    'from-rose-50 to-pink-100 border-rose-200',
    'from-cyan-50 to-blue-100 border-cyan-200',
    'from-violet-50 to-purple-100 border-violet-200'
  ]
  
  return (
    <>
      {/* Expert Team */}
      <div className={`${spanNumber === 5 ? 'col-span-5' : 'col-span-3'} p-8 rounded-2xl bg-gradient-to-br ${cardColors[index]} border hover:shadow-2xl hover:scale-102 transition-all duration-500 group`}>
        <div className="flex items-start mb-6">
          <div>
            <h3 className="font-bold text-2xl mb-8 text-gray-800 group-hover:text-gray-900 transition-colors">{card[0]}</h3>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white text-lg font-bold transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-3 group-hover:text-gray-800 transition-colors">
              {card[1]}
            </p>
            <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors">
              {card[2]}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
    <Nav></Nav>
    
    {/* Hero Background */}
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <main className="max-w-5xl mx-auto px-6 py-12 pt-24">
        {/* Hero Section */}
        <section className="mb-20 pt-12">
          <div className="grid grid-cols-4 gap-8 items-center">
            <div className="col-span-3">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full text-sm font-medium text-blue-800 mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                全球首创 · 多模态AI
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
                全球首个聚焦早期中华文明的
              </h1>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight">
                多模态大模型
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The world's first multimodal foundation model dedicated to early Chinese civilization.
              </p>
            </div>
            <div className="col-span-1">
              <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500"></div>
            </div>
          </div>
        </section>
  
        {/* Content Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 mb-16">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed text-justify">
              早期中华文明多模态大模型（Early Chinese Civilization Multimodal Model）是全球首个聚焦早期中华文明的多模态大模型，旨在贯彻习近平总书记关于"在创造性转化和创新性发展中赓续中华文脉"的重要指示、围绕"中华文明起源、形成与早期发展"这一重大课题，以多学科、多角度、多层次、全方位的方式，为早期中华文明研究开辟智能化新路径、构筑文明传承与创新发展的数字基座。
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                  该大模型——
                </h3>

                <div className="space-y-6 ml-5">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      系统覆盖考古、文物、中国古代史、历史地理学、文献学、汉语言文字学、中国古代文学、中国少数民族语言文学等学科领域，整合甲骨金文、方志舆图等珍稀史料，实现多元史料交叉验证与综合阐释；
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      全面融合文本、图像、音频、视频、空间地理信息等多维数据，打通异构信息的关联链路，推动多模态信息的深度交互与协同呈现；
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      深度嵌入人文社科研究范式，充分体现以语境还原为前提、以证据互证为路径、以多元诠释为目标的知识生产逻辑，注重多元视角的开放性解释与批判性反思的学术传统，开创智能化研究新模式。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Features Section */}
      <section className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">核心产品</h2>
          <p className="text-xl text-gray-600">探索早期中华文明的智能化研究工具</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {TextCardDataList.map((item, index) => (
            <TextCard key={index} index={index}></TextCard>
          ))}
        </div>
      </section>

        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4">了解我们</h2>
            <p className="text-xl text-gray-600">携手共建人文智能研究的未来</p>
          </div>
          <div className="grid grid-cols-8 gap-8">
            {[5, 3, 3, 5].map((item, index) => (
              <SidebarCard key={index} index={index} spanNumber={item}></SidebarCard>
            ))}
          </div>
        </section>
      </main>
    </div>
    <Footer></Footer>
    </>
  )

}
