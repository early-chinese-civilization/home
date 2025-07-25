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
  return (
    <>
      <div className="bg-[rgb(234,234,234)] border border-gray-200 p-6 hover:shadow-md transition-shadow h-120 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{data.title1}</h3>
        <p className="text-lg font-semibold mb-4">{data.title2}</p>

        {/* 上方文字区域 - 固定高度，超出显示省略号 */}
        <div className="flex-1 overflow-hidden">
          <div className="text-sm text-gray-900  h-70">
            <p className="mb-2 whitespace-pre-line">{data.description.join('\n')}</p>
          </div>
        </div>

        {/* 下方按钮区域 - 固定在底部居中 */}
        <div className="flex justify-center mt-4">
          <a href="#" className="bg-black text-white px-3 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors">
            {data.button_text}
          </a>
        </div>
      </div>
    </>
  )
}

export function SidebarCard({ index, spanNumber }: { index: number, spanNumber: number }) {
  let card = SidebarCardList[index]
  return (
    <>
      {/* Expert Team */}
      <div className={`${spanNumber === 5 ? 'col-span-5' : 'col-span-3'} p-8 rounded-lg border-1 border-gray-200 hover:shadow-lg transition-shadow duration-300`}>
        <div className="flex items-start mb-6">
          <div>
            <h3 className="font-bold text-xl mb-8">{card[0]}</h3>
            <div className="bg-[#eaeaea] w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mb-8">
              <span className="text-gray-700 text-lg font-bold">→</span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-2">
              {card[1]}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
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

    <main className="max-w-5xl mx-auto px-4 py-12 pt-24">
    {/* Hero Section */}
      <section className="mb-16 pt-8">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <h1 className="text-4xl font-bold mb-4">全球首个聚焦早期中华文明的多模态大模型</h1>
            <p className="text-gray-600 mb-4">The world's first multimodal foundation model dedicated to early Chinese civilization.</p>
          </div>
          <div className="col-span-1">
          </div>
        </div>
      </section>
  
      <div className="mt-12 px-1">
          <h2 className="text-gray-900">
            早期中华文明多模态大模型（Early Chinese Civilization Multimodal Model）是全球首个聚焦早期中华文明的多模态大模型，旨在贯彻习近平总书记关于“在创造性转化和创新性发展中赓续中华文脉”的重要指示、围绕“中华文明起源、形成与早期发展”这一重大课题，以多学科、多角度、多层次、全方位的方式，为早期中华文明研究开辟智能化新路径、构筑文明传承与创新发展的数字基座。
          </h2>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-gray-900">该大模型——</h3>

              <p className="text-gray-900">
                系统覆盖考古、文物、中国古代史、历史地理学、文献学、汉语言文字学、中国古代文学、中国少数民族语言文学等学科领域，整合甲骨金文、方志舆图等珍稀史料，实现多元史料交叉验证与综合阐释；
              </p>
              <p className="text-gray-900">
                全面融合文本、图像、音频、视频、空间地理信息等多维数据，打通异构信息的关联链路，推动多模态信息的深度交互与协同呈现；
              </p>
              <p className="text-gray-900">
                深度嵌入人文社科研究范式，充分体现以语境还原为前提、以证据互证为路径、以多元诠释为目标的知识生产逻辑，注重多元视角的开放性解释与批判性反思的学术传统，开创智能化研究新模式。
              </p>
            </div>


          </div>
      </div>

      {/* Features Section */}
      <section className="mb-16 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {TextCardDataList.map((item, index) => (
            <TextCard key={index} index={index}></TextCard>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12">了解我们</h2>
        <div className="grid grid-cols-8 gap-8">
          {[5, 3, 3, 5].map((item, index) => (
            <SidebarCard key={index} index={index} spanNumber={item}></SidebarCard>
          ))}
        </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  )

}
