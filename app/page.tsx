"use client";
import { Footer, Nav, TextCard, TextCardDataList } from "@/app/common";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Nav></Nav>
    
    {/* Hero Background */}
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <main className="max-w-5xl mx-auto px-4 py-12 pt-24">
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
              <p className="text-xl text-gray-800 mb-8 leading-relaxed">
                The world&apos;s first multimodal foundation model dedicated to early Chinese civilization.
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
            <h2 className="text-xl font-bold text-gray-800 mb-8 leading-relaxed text-justify">
                早期中华文明多模态大模型（Early Chinese Civilization Multimodal Model）是全球首个聚焦早期中华文明的多模态大模型。 该模型积极响应习总书记关于&quot;加快建设文化强国&quot;、&quot;推动中华优秀传统文化创造性转化、创新性发展&quot;的重要指示，围绕&quot;中华文明起源、形成与早期发展&quot;这一重大课题，致力于通过多学科、多角度、多层次、全方位的探索，为早期中华文明研究开辟智能化新路径，为建设中华民族现代文明构筑坚实的数字基座。
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
                    <p className="text-gray-800 leading-relaxed text-lg">
                      系统覆盖考古、文物、中国古代史、历史地理学、文献学、汉语言文字学、中国古代文学、中国少数民族语言文学等学科领域，整合甲骨金文、方志舆图等珍稀史料，实现多元史料交叉验证与综合阐释；                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-800 leading-relaxed text-lg">
                        全面融合文本、图像、音频、视频、空间地理信息等多维数据，打通异构信息的关联链路，推动多模态信息的深度交互与协同呈现；
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-800 leading-relaxed text-lg">
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
          <p className="text-xl text-gray-800 leading-relaxed">探索早期中华文明的智能化研究工具</p>
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
            <p className="text-xl text-gray-800 leading-relaxed">携手共建人文智能研究的未来</p>
          </div>
          <div className="grid grid-cols-8 gap-8">

              <div className="col-span-5 p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200 border hover:shadow-2xl hover:scale-102 transition-all duration-500 group cursor-pointer">
                <div className="flex items-start mb-6">
                  <div>
                    <h3 className="font-bold text-2xl mb-8 text-gray-800 group-hover:text-gray-900 transition-colors">专家团队</h3>
                    <Link href="/team">  
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <span className="text-white text-lg font-bold transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </Link>
                    <p className="text-gray-800 text-lg leading-relaxed mb-3 group-hover:text-gray-800 transition-colors">
                      本项目由专家指导委员会领衔
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                      由AI科学家、专业领域学者、工程技术人员联合开发
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-span-3 p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-100 border-rose-200 to-pink-200 border hover:shadow-2xl hover:scale-102 transition-all duration-500 group cursor-pointer"}>
                <div className="flex items-start mb-6">
                  <div>
                    <h3 className="font-bold text-2xl mb-8 text-gray-800 group-hover:text-gray-900 transition-colors">贡献者名单</h3>
                    <Link href="/team#contributors">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <span className="text-white text-lg font-bold transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </Link>
                    <p className="text-gray-800 text-lg leading-relaxed mb-3 group-hover:text-gray-800 transition-colors">
                      本项目是集体努力的成果
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                      向所有参与人员致谢
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-span-3 p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-100 border-cyan-200 border hover:shadow-2xl hover:scale-102 transition-all duration-500 group cursor-pointer"}>
                <div className="flex items-start mb-6">
                  <div>
                    <h3 className="font-bold text-2xl mb-8 text-gray-800 group-hover:text-gray-900 transition-colors">阅读文章</h3>
                    <Link href="/" className="cursor-not-allowed">

                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <span className="text-white text-lg font-bold transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        
                      </div>
                    </Link>
                    <p className="text-gray-800 text-lg leading-relaxed mb-3 group-hover:text-gray-800 transition-colors">
                      阅读我们基于本项目撰写的
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                      专题研究
                    </p>
                  </div>
                </div>
              </div>
              <div className={"col-span-5 p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-100 border-violet-200 border hover:shadow-2xl hover:scale-102 transition-all duration-500 group cursor-pointer"}>
                <div className="flex items-start mb-6">
                  <div>
                    <h3 className="font-bold text-2xl mb-8 text-gray-800 group-hover:text-gray-900 transition-colors">加入我们，推动知识与技术的共生演进</h3>
                    <Link href="https://www.sais.com.cn/recruitList">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <span className="text-white text-lg font-bold transform group-hover:translate-x-1 transition-transform duration-300">
                          →</span>
                      </div>
                    </Link>
                    <p className="text-gray-800 text-lg leading-relaxed mb-3 group-hover:text-gray-800 transition-colors">
                      成为我们的领域专家
                    </p>
                    <p className="text-gray-800 text-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                      共同引领人工智能在文明研究中的深度突破
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>
    </div>
    <Footer></Footer>
    </>
  )

}
