"use client";
import { Footer, Nav } from "@/app/common";

export default function Privacy() {
    return (
        <>
            <Nav></Nav>
            <div className="max-w-4xl mx-auto px-4 py-16 pt-32">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-white/20">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold shadow-lg">🔒 Privacy Policy</span>
                        </div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
                            隐私政策
                        </h1>
                        <p className="text-lg text-gray-600">
                            我们重视并保护您的个人隐私
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8 text-gray-700 leading-relaxed">
                        {/* 更新时间 */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-400">
                            <p className="text-sm text-gray-600">
                                <strong>最后更新时间：</strong>2025年7月
                            </p>
                        </div>

                        {/* 引言 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">引言</h2>
                            <p className="mb-4">
                                早期中华文明多模态大模型团队（以下简称&quot;我们&quot;）深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>权责一致原则：明确个人信息处理目的、方式和范围，确保处理活动与处理目的直接相关</li>
                                <li>目的明确原则：处理个人信息应当具有明确、合理的目的</li>
                                <li>最小必要原则：只处理满足处理目的所必需的最少个人信息</li>
                                <li>公开透明原则：公开个人信息处理规则，明示处理的目的、方式和范围</li>
                                <li>质量保证原则：确保个人信息的质量，避免因个人信息不准确、不完整对您的合法权益造成不良影响</li>
                                <li>安全保障原则：采用相应的管理措施和技术手段，确保个人信息安全</li>
                            </ul>
                        </section>

                        {/* 信息收集 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">我们收集的信息</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">1. 您主动提供的信息</h3>
                                    <p className="mb-2">当您使用我们的服务时，您可能会主动向我们提供以下信息：</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>联系信息（如姓名、邮箱地址、电话号码）</li>
                                        <li>学术背景信息（如所在机构、研究领域、学术职位）</li>
                                        <li>研究需求和反馈信息</li>
                                        <li>通过表单、邮件或其他方式提交的信息</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">2. 自动收集的信息</h3>
                                    <p className="mb-2">当您访问我们的网站时，我们可能会自动收集以下技术信息：</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>设备信息（如设备类型、操作系统、浏览器类型）</li>
                                        <li>访问信息（如IP地址、访问时间、访问页面）</li>
                                        <li>使用情况统计（如页面浏览量、停留时间）</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 信息使用 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">我们如何使用您的信息</h2>
                            <p className="mb-4">我们收集和使用您的个人信息主要用于以下目的：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>提供、维护和改进我们的研究平台和服务</li>
                                <li>响应您的咨询、请求和反馈</li>
                                <li>进行学术交流和合作</li>
                                <li>发送重要通知和更新信息</li>
                                <li>进行数据分析以改善用户体验</li>
                                <li>遵守法律法规要求</li>
                                <li>保护我们的合法权益和安全</li>
                            </ul>
                        </section>

                        {/* 信息共享 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">信息共享与披露</h2>
                            <p className="mb-4">我们承诺不会出售、出租或以其他方式商业化您的个人信息。我们仅在以下情况下可能共享您的信息：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>获得您的明确同意：</strong>在获得您明确同意的情况下</li>
                                <li><strong>学术合作：</strong>与合作研究机构共享必要信息以开展学术研究</li>
                                <li><strong>法律要求：</strong>根据法律法规、法律程序、政府要求或司法裁定</li>
                                <li><strong>保护权益：</strong>为保护我们、用户或公众的合法权益、财产或安全</li>
                                <li><strong>服务提供商：</strong>与为我们提供技术支持的第三方服务提供商（在严格保密协议下）</li>
                            </ul>
                        </section>

                        {/* 数据安全 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">数据安全</h2>
                            <p className="mb-4">我们采取多种安全措施来保护您的个人信息：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>使用加密技术保护数据传输和存储</li>
                                <li>实施访问控制，限制对个人信息的访问</li>
                                <li>定期进行安全评估和漏洞检测</li>
                                <li>建立数据泄露应急响应机制</li>
                                <li>对员工进行隐私保护培训</li>
                                <li>与第三方服务提供商签署保密协议</li>
                            </ul>
                        </section>

                        {/* 您的权利 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">您的权利</h2>
                            <p className="mb-4">根据相关法律法规，您享有以下权利：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>知情权：</strong>了解我们处理您个人信息的情况</li>
                                <li><strong>访问权：</strong>查看我们持有的您的个人信息</li>
                                <li><strong>更正权：</strong>要求更正不准确或不完整的个人信息</li>
                                <li><strong>删除权：</strong>在特定情况下要求删除您的个人信息</li>
                                <li><strong>限制处理权：</strong>要求限制对您个人信息的处理</li>
                                <li><strong>撤回同意权：</strong>撤回您之前给予的同意</li>
                            </ul>
                            <p className="mt-4">
                                如需行使上述权利，请通过本政策末尾提供的联系方式与我们联系。
                            </p>
                        </section>

                        {/* Cookie政策 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie 和类似技术</h2>
                            <p className="mb-4">
                                我们使用 Cookie 和类似技术来改善您的浏览体验、分析网站使用情况并提供个性化内容。Cookie 是存储在您设备上的小型文本文件。
                            </p>
                            <p className="mb-4">我们使用的 Cookie 类型包括：</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>必要 Cookie：</strong>确保网站正常运行所必需的</li>
                                <li><strong>功能 Cookie：</strong>记住您的偏好设置</li>
                                <li><strong>分析 Cookie：</strong>帮助我们了解网站使用情况</li>
                            </ul>
                            <p className="mt-4">
                                您可以通过浏览器设置管理或禁用 Cookie，但这可能会影响网站的某些功能。
                            </p>
                        </section>

                        {/* 政策更新 */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">隐私政策更新</h2>
                            <p className="mb-4">
                                我们可能会不时更新本隐私政策。当我们对政策进行重大更改时，我们会通过网站公告或其他适当方式通知您。建议您定期查看本政策以了解最新信息。
                            </p>
                            <p>
                                继续使用我们的服务即表示您接受更新后的隐私政策。
                            </p>
                        </section>

                        {/* 联系我们 */}
                        <section>
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-400">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">联系我们</h2>
                                <p className="mb-4">
                                    如果您对本隐私政策有任何疑问、意见或建议，或需要行使您的个人信息权利，请通过以下方式联系我们：
                                </p>
                                <div className="space-y-2">
                                    <p>
                                        <strong>上海科学智能研究院：</strong>
                                        <a href="mailto:sais@sais.com.cn" className="text-blue-600 hover:text-blue-800 transition-colors ml-2">
                                            sais@sais.com.cn
                                        </a>
                                    </p>
                                    <p>
                                        <strong>早期中华文明多模态大模型项目组：</strong>
                                        <a href="mailto:zhangliwei@sais.com.cn" className="text-blue-600 hover:text-blue-800 transition-colors ml-2">
                                            zhangliwei@sais.com.cn
                                        </a>
                                    </p>
                                </div>
                                <p className="mt-4 text-sm text-gray-600">
                                    我们将在收到您的请求后尽快回复，通常不超过15个工作日。
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}