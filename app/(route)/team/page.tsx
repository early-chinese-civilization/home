"use client";
import { Footer, Nav } from "@/app/common";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [isScrollHighlighted, setIsScrollHighlighted] = useState(false);
    // 所有专家数据
    const allExperts = [
        {
            role: "总负责人",
            name: "陈志敏",
            title1: "复旦大学副校长",
            title2: "教育部长江特聘教授",
            avatar: "/processors/chenzhimin.svg"
        },
        {
            role: "总协调人",
            name: "吴力波",
            title1: "复旦大学数据学院副院长",
            title2: "教育部长江特聘教授",
            avatar: "/processors/wulibo.svg"
        },
        {
            role: "首席科学家",
            name: "漆远",
            title1: "复旦大学人工智能创新与产业研究院院长",
            title2: "上海科学智能研究院研究院长",
            avatar: "/processors/qixuan.svg"
        },
        {
            role: "首席科学家",
            name: "刘钊",
            title1: "复旦大学出土文献与古文字研究中心主任",
            title2: "马王堆文化研究院名誉院长",
            avatar: "/processors/liuzhao.svg"
        },
        {
            role: "首席科学家",
            name: "陈思和",
            title1: "复旦大学资深教授",
            title2: "",
            avatar: "/processors/chensihe.svg"
        },


    ];



    const getRoleColor = (role: string) => {
        const colors = {
            "总负责人": "from-red-500 to-pink-500",
            "总协调人": "from-blue-500 to-indigo-500",
            "首席科学家": "from-purple-500 to-violet-500",
            "AI科学家": "from-green-500 to-emerald-500",
            "领域专家": "from-orange-500 to-amber-500"
        };
        return colors[role as keyof typeof colors] || "from-gray-500 to-slate-500";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-indigo-200/40 rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-cyan-200/30 rounded-full blur-xl animate-pulse delay-700"></div>
            
            <Nav></Nav>

            <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-20 pt-20">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">专家指导委员会</h1>
                    <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                        汇聚顶尖学者与专家，共同推进早期中华文明研究的数字化创新
                    </p>
                    <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>
                
                {/* 专家信息容器 */}
                <div className="relative mb-20">
                    {/* 专家展示容器 */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
                        {/* 专家网格 - 显示所有专家 */}
                        <div className="space-y-8">
                            {/* 第一行 - 2位负责人，居中显示在空隙中间 */}
                            <div className="flex justify-center">
                                {allExperts.slice(0, 2).map((expert, index) => (
                                    <div key={index} className="text-center group flex-1 max-w-xs">
                                        <div className="mb-4">
                                            <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${getRoleColor(expert.role)} text-white rounded-full text-xs font-semibold shadow-lg`}>
                                                {expert.role}
                                            </div>
                                        </div>
                                        {/* 头像容器 */}
                                        <div className="relative mb-4">
                                            <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full mx-auto shadow-lg border-4 border-white group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 overflow-hidden">
                                                {expert.avatar ? (
                                                    <Image
                                                        src={process.env.NEXT_PUBLIC_BASE_PATH + expert.avatar}
                                                        alt={expert.name}
                                                        width={80}
                                                        height={80}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                                        <span className="text-2xl font-bold text-gray-800">{expert.name.charAt(0)}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{expert.name}</h3>
                                        <div className="h-16 flex flex-col justify-start">
                                            <p className="text-lg text-gray-800 mb-1 leading-tight break-words">{expert.title1}</p>
                                            {expert.title2 && <p className="text-lg text-gray-800 leading-tight break-words">{expert.title2}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* 第二行 - 3位首席科学家 */}
                            <div className="flex justify-evenly">
                                {allExperts.slice(2, 5).map((expert, index) => (
                                    <div key={index + 2} className="text-center group flex-1 max-w-xs">
                                        <div className="mb-4">
                                            <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${getRoleColor(expert.role)} text-white rounded-full text-xs font-semibold shadow-lg`}>
                                                {expert.role}
                                            </div>
                                        </div>
                                        {/* 头像容器 */}
                                        <div className="relative mb-4">
                                            <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-100 rounded-full mx-auto shadow-lg border-4 border-white group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 overflow-hidden">
                                                {expert.avatar ? (
                                                    <Image 
                                                        src={process.env.NEXT_PUBLIC_BASE_PATH + expert.avatar}
                                                        alt={expert.name}
                                                        width={80}
                                                        height={80}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                                        <span className="text-2xl font-bold text-gray-800">{expert.name.charAt(0)}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <h3 className="text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{expert.name}</h3>
                                        <div className="h-20 flex flex-col justify-start">
                                            {expert.name === '漆远' ? (
                                                 <>
                                                     <p className="text-lg text-gray-800 mb-1 leading-tight break-words">复旦大学人工智能创新</p>
                                                     <p className="text-lg text-gray-800 mb-1 leading-tight break-words">与产业研究院院长</p>
                                                     <p className="text-lg text-gray-800 leading-tight break-words">上海科学智能研究院研究院长</p>
                                                 </>
                                            ) : expert.name === '刘钊' ? (
                                                <>
                                                    <p className="text-lg text-gray-800 mb-1 leading-tight break-words">复旦大学出土文献与</p>
                                                    <p className="text-lg text-gray-800 mb-1 leading-tight break-words">古文字研究中心主任</p>
                                                    <p className="text-lg text-gray-800 leading-tight break-words">马王堆文化研究院名誉院长</p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-lg text-gray-800 mb-1 leading-tight break-words">{expert.title1}</p>
                                                    {expert.title2 && <p className="text-lg text-gray-800 leading-tight break-words">{expert.title2}</p>}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            
                        </div>
                        
                        {/* 新增专家名单 */}
                        <div className="mt-12 pt-8 pl-6 border-t border-gray-200/50">
                            <div className="text-left space-y-2 text-lg text-gray-800">
                                <div className="flex"><span className="w-20 inline-block">金   力</span><span>复旦大学校长，中国科学院院士</span></div>
                                <div className="flex"><span className="w-20 inline-block">陆建松</span><span>复旦大学文物与博物馆学系教授、博导，国家文物局专家库专家</span></div>
                                <div className="flex"><span className="w-20 inline-block">袁   靖</span><span>复旦大学特聘教授、博导</span></div>
                                <div className="flex"><span className="w-20 inline-block">陈   淳</span><span>复旦大学文物与博物馆学系教授、博导</span></div>
                                <div className="flex"><span className="w-20 inline-block">黄   洋</span><span>复旦大学历史学系系主任、教授、博导</span></div>
                                <div className="flex"><span className="w-20 inline-block">张晓虹</span><span>复旦大学中国历史地理研究所所长、教授、博导</span></div>
                                <div className="flex"><span className="w-20 inline-block">杨光辉</span><span>复旦大学图书馆副馆长、研究馆员，中华古籍保护研究院常务副院长</span></div>
                                <div className="flex"><span className="w-20 inline-block">郑建明</span><span>复旦大学文物与博物馆学系副系主任、教授、博导，科技考古研究院院长</span></div>
                                <div className="flex"><span className="w-20 inline-block">陈忠敏</span><span>复旦大学中文系教授、博导，现代语言学研究院学术委员会副主任</span></div>
                                <div className="flex"><span className="w-20 inline-block">潘悟云</span><span>复旦大学中文系教授、博导，现代人类学研究中心语言学顾问</span></div>
                                <div className="flex"><span className="w-20 inline-block">张计龙</span><span>复旦大学图书馆副馆长、研究馆员，社会科学数据研究中心副主任</span></div>
                            </div>
                    </div>
                </div>
                
                {/* 团队分类卡片 */}
                <div className="mb-20 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* AI科学家卡片 */}
                            <div className="group bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="text-lg text-gray-800 grid grid-cols-2 gap-x-6 gap-y-1 justify-items-center">
                                        <div>朱思语</div>
                                        <div>陈保友</div>
                                        <div>夏翰宸</div>
                                        <div>陈济民</div>
                                        <div>梅芮乔</div>
                                    </div>
                                </div>
                                <h2 className="text-2xl pl-6 font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">AI科学家</h2>
                            </div>

                            
                            {/* 领域专家卡片 */}
                            <div className="group bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="text-lg text-gray-800 grid grid-cols-2 gap-x-6 gap-y-1 justify-items-center">
                                        <div>刘　钊</div>
                                        <div>张晓虹</div>
                                        <div>高　晞</div>
                                        <div>杨光辉</div>
                                        <div>文少卿</div>
                                        <div>张梦翰</div>
                                        <div>任　攀</div>
                                        <div>潘晓声</div>
                                    </div>
                                </div>
                                <h2 className="text-2xl pl-6 font-bold bg-gradient-to-r from-gray-800 to-green-800 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">领域专家</h2>
                            </div>

                            {/* 工程团队卡片 */}
                            <div className="group bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-3xl p-8 h-80 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm">
                                <div className="space-y-4">
                                    <div className="text-lg text-gray-800 grid grid-cols-2 gap-x-6 gap-y-1 justify-items-center">
                                        <div>张兴盟</div>
                                        <div>张利伟</div>
                                        <div>黄宸莹</div>
                                        <div>刘冠麟</div>
                                        <div>王　楷</div>
                                        <div>史浩均</div>
                                    </div>
                                </div>
                                <h2 className="text-2xl pl-6 font-bold bg-gradient-to-r from-gray-800 to-orange-800 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300">
                                    工程团队</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* 其他贡献者部分 */}
                <div id="contributors" className="text-center">
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">其他贡献者</h2>
                        <p className="text-lg text-gray-800 mb-12 leading-relaxed">致敬携手共进的协作伙伴</p>
                        
                        <div className="flex justify-center gap-6 mb-8">
                            <button 
                                onClick={() => setIsScrollHighlighted(!isScrollHighlighted)}
                                className={`px-8 py-3 backdrop-blur-sm border-2 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium ${
                                    isScrollHighlighted 
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400 shadow-purple-200' 
                                        : 'bg-white/80 border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300'
                                }`}
                            >
                                标注人员
                            </button>
                            <Link href="https://www.sais.com.cn/recruitList" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                                成为一份子
                            </Link>
                        </div>
                        
                        {/* 标注人员滚动卡片 */}
                        <div className={`relative overflow-hidden rounded-2xl p-6 shadow-inner transition-all duration-500 ${
                            isScrollHighlighted 
                                ? 'bg-gradient-to-r from-purple-100 via-pink-100 to-indigo-100 border-2 border-purple-300 shadow-lg shadow-purple-200/50 ring-4 ring-purple-200/30' 
                                : 'bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border border-purple-100/50'
                        }`}>
                            <div className="flex animate-scroll whitespace-nowrap">
                                <div className={`flex text-lg space-x-8 font-medium transition-all duration-500 ${
                                    isScrollHighlighted ? 'text-purple-800 font-semibold' : 'text-gray-800'
                                }`}>
                                    <span>徐艺洺</span>
                                    <span>潘馨怡</span>
                                    <span>周俊然</span>
                                    <span>郭苏玮</span>
                                    <span>张嘉政</span>
                                    <span>付梦寒</span>
                                    <span>叶欣悦</span>
                                    <span>陈科睿</span>
                                    <span>王淳</span>
                                    <span>周嘉昕</span>
                                    <span>郑博文</span>
                                    <span>何姗</span>
                                    <span>田洁</span>
                                    <span>陈昊扬</span>
                                    <span>汪炀</span>
                                    <span>陈李妍</span>
                                    <span>张丹妮</span>
                                    <span>赵健洁</span>
                                    <span>陈吟</span>
                                    <span>赵昀晰</span>
                                    <span>宋婧怡</span>
                                    <span>余可绎</span>
                                    <span>赵小韵</span>
                                    <span>胡妙婷</span>
                                    <span>吕兰希</span>
                                    <span>王心驰</span>
                                    <span>周书剑</span>
                                    <span>李青泽</span>
                                    <span>孟慧洋</span>
                                    <span>崔源育</span>
                                    <span>崔雅迪</span>
                                    <span>林琪竣</span>
                                    <span>王子烨</span>
                                    <span>谭晶晶</span>
                                    <span>孙宇欣</span>
                                    <span>李韵涵</span>
                                    <span>王攀林</span>
                                    <span>蓝国铭</span>
                                    <span>董佳丽</span>
                                    <span>宗竞存</span>
                                    <span>赵闻瑾</span>
                                    <span>陈恰</span>
                                    <span>江雨濛</span>
                                    <span>马俊</span>
                                    <span>崔越</span>
                                </div>
                                {/* 重复一遍实现无缝滚动 */}
                                <div className={`flex space-x-8 font-medium ml-8 transition-all duration-500 ${
                                    isScrollHighlighted ? 'text-purple-800 font-semibold' : 'text-gray-800'
                                }`}>
                                    <span>徐艺洺</span>
                                    <span>潘馨怡</span>
                                    <span>周俊然</span>
                                    <span>郭苏玮</span>
                                    <span>张嘉政</span>
                                    <span>付梦寒</span>
                                    <span>叶欣悦</span>
                                    <span>陈科睿</span>
                                    <span>王淳</span>
                                    <span>周嘉昕</span>
                                    <span>郑博文</span>
                                    <span>何姗</span>
                                    <span>田洁</span>
                                    <span>陈昊扬</span>
                                    <span>汪炀</span>
                                    <span>陈李妍</span>
                                    <span>张丹妮</span>
                                    <span>赵健洁</span>
                                    <span>陈吟</span>
                                    <span>赵昀晰</span>
                                    <span>宋婧怡</span>
                                    <span>余可绎</span>
                                    <span>赵小韵</span>
                                    <span>胡妙婷</span>
                                    <span>吕兰希</span>
                                    <span>王心驰</span>
                                    <span>周书剑</span>
                                    <span>李青泽</span>
                                    <span>孟慧洋</span>
                                    <span>崔源育</span>
                                    <span>崔雅迪</span>
                                    <span>林琪竣</span>
                                    <span>王子烨</span>
                                    <span>谭晶晶</span>
                                    <span>孙宇欣</span>
                                    <span>李韵涵</span>
                                    <span>王攀林</span>
                                    <span>蓝国铭</span>
                                    <span>董佳丽</span>
                                    <span>宗竞存</span>
                                    <span>赵闻瑾</span>
                                    <span>陈恰</span>
                                    <span>江雨濛</span>
                                    <span>马俊</span>
                                    <span>崔越</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}
