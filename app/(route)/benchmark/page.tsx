"use client";
import { Footer, Nav } from "@/app/common";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    // 题目列表数据
    const questionList = [
        {
            id: 0,
            question: "根据下图所示，分析图中第5件器物（鹭鸟衔鱼图陶壶）的装饰图案特点及其可能的文化意义，并结合仰韶文化的相关背景进行阐述。",
            answer: ["图中第5件器物（鹭鸟衔鱼图陶壶）的装饰图案描绘了一只水鸟，引颈长喙，头顶有冠，形似苍鹭，嘴中衔有一尾鳗鱼，构图生动。这种图案可能反映了仰韶文化时期人们对自然界的观察和对鸟类捕食行为的描绘。在仰韶文化中，鸟类和鱼类不仅是重要的食物来源，也可能具有象征意义，如鸟类可能象征自由和飞翔，而鱼类则可能代表丰饶和生命。此外，这种写实性的绘画风格体现了仰韶文化居民的艺术才能和对生活的细致观察。"],
            tags: ["学科领域：考古；文物", "历史分期：新石器时代", "核心目的：特征描述；分析推论"],
            reference: ["杨亚长. 仰韶文化的美术考古简述[J]. 华夏考古,1988,(1): 64-68"],
            image: "0.svg",
            image_name: "仰韶文化彩陶"
        },
        {
            id: 1,
            question: "根据下图所示的殷墟文化器物，结合考古学知识，分析图中的骨笄和骨鏃在殷墟文化分期中的意义，并解释为何这些器物能帮助确定M1217和M1500墓葬的年代？",
            answer: ["图二中的骨笄和骨鏃在殷墟文化分期中具有重要意义。图中的1号和2号物品是骨笄，分别属于削过的铅笔形和平头方牌形，属于殷墟文化早期的骨笄类型。而3号、4号和5号物品是柳叶形、长锥形和圆棒形骨鏃，属于殷墟文化早期的骨鏃类型。6号物品是一个铜爵，属于殷墟文化晚期的青铜器物。", "通过对比苗圃北地遗址出土的骨笄和骨鏃，可以发现M1217和M1500墓葬中的骨笄和骨鏃与苗圃北地殷墟文化三、四期的样式相似。例如，M1217和M1500中的骨鏃以圆棒形为主，而柳叶形和长锥形数量较少，这与苗圃北地三、四期的情况一致。此外，M1217和M1500中的骨笄杆较粗，与苗圃北地三、四期的骨笄杆相似，且未见早期流行的细杆骨笄样式。", "因此，这些器物的样式特征表明M1217和M1500墓葬属于殷墟文化第三期，即廪辛、康丁、武乙和文丁时期。"],
            tags: ["学科领域：考古；文物", "历史分期：商", "核心目的：分析推论"],
            reference: ["杨锡璋. 关于殷墟初期王陵问题[J]. 华夏考古,1988,(1): 86-94."],
            image: "1.svg",
            image_name: "殷墟文化器物"
        },
        {
            id: 2,
            question: "根据下图所示的木制圆盘豆结构，描述闭口不透直榫与闭口不透半直榫的具体应用及其在结构中的作用。",
            answer: ["闭口不透直榫和闭口不透半直榫在图示木制圆盘豆结构中发挥了关键的连接作用。闭口不透直榫用于豆柄与盘、座之间的连接，具体表现为豆柄上下两端加工成直榫头，而盘底面和座上面则凿出与榫头尺寸匹配的闭口不透直榫孔，通过嵌入实现稳固连接。闭口不透半直榫则用于木凤颈与身的连接，木凤颈下端加工成半直榫头，而木凤身肩部凿出闭口不透直榫槽，通过榫头嵌入榫槽实现连接。这两种榫卯结构确保了部件间的精确配合和整体结构的稳定性。"],
            tags: ["学科领域：考古；文物", "历史分期：东周", "核心目的：特征描述；分析推论"],
            reference: ["思谦,蒋红杰. 从信阳楚墓出土的木制品看战国早期的细木工榫接合工艺[J]. 华夏考古,1990,(4): 88-95,29."],
            image: "2.svg",
            image_name: "闭口不透直榫与闭口不透半直榫"
        }
    ];

    // 当前题目索引
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questionList[currentQuestionIndex];
    const totalQuestions = questionList.length;

    // 翻页函数
    const goToPrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // 简答题示例数据
    const [currentShortAnswer, setCurrentShortAnswer] = useState(0);
    const shortAnswerList = [
        {
            question: "在探讨西周夷王在位年数的学术争议中，学者如何基于《史记·秦本纪》的记载推断夷王在位年数不长？请分析该推断的局限性，并讨论彭裕商等学者提出的反驳观点。",
            answer: [
                "界定核心问题：核心争议在于西周夷王在位年数的长短，部分学者依据《史记·秦本纪》推断其年数不长，但该推断存在方法论缺陷。",
                "列举相关学术观点：1. 依据《史记·秦本纪》（中华书局点校本，1982年），非子受封于孝王，其后秦侯、公伯、秦仲在位年数短促（秦侯10年、公伯3年、秦仲23年），秦仲死于周宣王六年，自秦侯元年至宣王六年共36年，推断夷王在位年数不长（彭裕商，《西周青铜器窃曲纹研究》）。",
                "2. 梁玉绳《史记志疑》推算非子在位30余年，基于夷王在位仅七八年（《竹书纪年》）和厉王37年奔彘（《史记·周本纪》）。",
                "多维论证：3. 非子在位年数无史载，但由秦侯、公伯在位短促推之，非子可能长达50年（如周穆王55年），若受封在孝王晚末，则夷王初年至宣王六年可达80年以上（逻辑依据：通过历史类比法推定在位年数范围）。",
                "4. 厉王奔彘时间存疑，《史记·周本纪》称37年奔彘，但《卫世家》和《齐世家》记载自夷王命卫为侯至厉王奔彘不超过24年，且胡公被杀至奔彘仅18年，暗示奔彘时间早于37年（文献依据：《史记·卫世家》载\"顷侯立十二年卒，子趋侯立。趋侯十三年，周厉王出奔于彘\"；《史记·齐世家》载\"胡公徙都薄姑而当周夷王之时...武公九年，周厉王出奔\"）。",
                "学说比较：比较《史记》内部矛盾：《本纪》与《世家》冲突，彭裕商认为《世家》更可信，因两个世家一致支持较短奔彘时间；而陈梦家《西周年代考》（朱风瀚、张荣明编《西周诸王年代研究》，第81页）指出\"懿孝二王年数似不甚长\"，支持夷世较长。",
                "阶段性结论：由《秦本纪》推断夷王在位年数不长缺乏可靠性，因非子在位年数和厉王奔彘时间不确定，夷王在位33年以上完全合理。"
            ],
            tags: ["学科领域：中国古代史", "历史分期：西周", "核心目的：分析推论；事实呈现"],
            reference: ["彭裕商. 西周金文所见夷厉二王在位年数及相关问题[J]. 历史研究,2002,(3): 13-25."]
        },
        {
            question: "豫东地区大汶口文化分期研究中，段寨遗址的分期方案存在学术争议。请阐述简报作者对段寨遗存的原始分期观点，并详细说明研究者如何通过陶器类型学对比重新论证(河南)段寨H11、(河南)段寨H15、(河南)段寨M2等单位的年代相当于建新中期、尉迟寺早期和大河村第四期文化。",
            answer: [
                "简报作者将(河南)段寨M1、(河南)段寨M2、(河南)段寨H1等划为早期遗存，时代定于大汶口文化晚期及仰韶文化晚期；(河南)段寨H11定为中期遗存，归属龙山文化中期。",
                "研究者通过器物形态对比提出新分期：首先，(河南)段寨H11:15方唇折沿鼓腹下垂横斜篮纹鼎与(安徽)尉迟寺T3103H17:4鼎近同；(河南)段寨H11:1短颈圆肩绳纹壶与(郑州)大河村第四期文化T1④:5壶相同；(河南)段寨H11:17深腹横斜篮纹圈足罐与(山东)建新M48:3圈足罐接近；(河南)段寨H11:10短颈圆鼓腹凹底绳纹罐与(安徽)尉迟寺T1101H03:8罐近似；(河南)段寨H11:8卷沿短颈平底罐与(安徽)尉迟寺T3103⑩:2罐相近。",
                "此外，(河南)段寨H15陶片的禾叶纹彩绘属(郑州)大河村第四期文化典型纹饰。这些器物特征一致性表明(河南)段寨H11、(河南)段寨H15、(河南)段寨M2等单位年代对应于建新中期、(安徽)尉迟寺早期及(郑州)大河村第四期文化。"
            ],
            tags: ["学科领域：考古；文物", "历史分期：新石器时代", "核心目的：事实呈现；分析推论"],
            reference: ["肖燕,春夏. 皖北、豫东地区大汶口文化的分期与性质[J]. 华夏考古,2001,(3): 36-51+86."]
        },
        {
            question: "根据《世本·居》、《竹书纪年》和《尚书·盘庚上》的记载，分析商汤灭夏前后亳都的位置争议，并解释《世本》中盘庚迁殷为何被视为复居汤始居之亳的说法如何与《竹书纪年》和《尚书》的记录一致。",
            answer: [
                "界定核心问题：商汤灭夏前后亳都位置存在争议，汤灭夏前所居之亳位于豫北冀南地区（规模较小），而灭夏后所建亳都位置不明；《世本》记载盘庚迁殷为复居亳，与《竹书纪年》《尚书》的迁殷记录表面冲突，需通过地理和文献整合解释一致性。",
                "列举相关学术观点：豫北亳邑说（如内黄亳邑说、汤阴亳邑说）主张汤始居亳在豫北冀南；考古证据表明先商文化中心在豫北冀南但未发现都城遗址；《竹书纪年》和《尚书》强调迁殷地点。",
                "多维论证：第一，文献依据显示汤灭夏前亳在豫北，《世本·居》（清辑本，中华书局，2010年）记载\"汤始居亳...盘庚复居亳\"，结合地理分析（田昌五，1992），汤伐韦、顾时亳位于漳河流域（豫北冀南）。",
                "第二，逻辑依据通过历史地理对比推定：殷（今河南安阳）地处漳河之南，与汤阴、内黄相邻，属同一区域；考古证据（李伯谦）支持先商文化中心在此，但规模小，符合文献\"亳仅70里\"的描述。",
                "第三，文献校对表明《竹书纪年》（方诗铭校注，上海古籍出版社，2005年）记\"盘庚旬自奄迁于北蒙，曰殷\"，《尚书·盘庚上》（中华书局点校本，1982年）记\"盘庚迁于殷\"，与《世本》的\"复居亳\"不矛盾，因殷地即汤始居亳地。",
                "学说比较：内黄亳邑说强调汤始居亳在豫北，与汤建国后亳都区分；《竹书纪年》侧重迁都地点名称，《世本》突出历史连续性。",
                "阶段性结论：豫北亳邑说成立，盘庚迁殷是复居汤始居之亳，三者记录一致，体现商都地理延续性。"
            ],
            tags: [],
            reference: ["江林昌. 《商颂》与商汤之\"亳\"[J]. 历史研究,2000,(5): 38-48+190."]
        }
    ];

    const nextShortAnswer = () => {
        if (currentShortAnswer < shortAnswerList.length - 1) {
            setCurrentShortAnswer(currentShortAnswer + 1);
        }
    };

    const prevShortAnswer = () => {
        if (currentShortAnswer > 0) {
            setCurrentShortAnswer(currentShortAnswer - 1);
        }
    };

    const currentShortAnswerData = shortAnswerList[currentShortAnswer];
    const totalShortAnswers = shortAnswerList.length;

    // 选择题示例数据
    const [currentMultipleChoice, setCurrentMultipleChoice] = useState(0);
    const multipleChoiceList = [
        {
            question: "根据《睡虎地秦简·金布律》（文物出版社，1978年）、《张家山汉简·津关令》（文物出版社，2001年）等出土文献分析，秦汉时期律与令关系的实质是什么？",
            options: [
                "A. 令是规范行为条例，律是规定惩罚措施",
                "B. 令是对律的补充、修订或说明",
                "C. 令和律在功能上完全独立且互不关联",
                "D. 律是临时性法令，令是永久性法典"
            ],
            answer: "B",
            tags: ["学科领域：中国古代史；历史文献学", "历史分期：秦；西汉", "核心目的：分析推论"],
            reference: ["孟彦弘.秦汉法典体系的演变[J].历史研究,2005,(3): 19-36+190"]
        },
        {
            question: "根据山东省乐陵市和庆云县考古调查，岳石文化陶豆的凸棱纹特征与典型岳石文化相比，主要差异是什么？",
            options: [
                "A. 盘心下凹形成凸棱纹，制作粗糙",
                "B. 盘心凸起，制作精细",
                "C. 无凸棱纹，以绳纹为主",
                "D. 凸棱纹位于豆柄部"
            ],
            answer: "A",
            tags: ["学科领域：考古；文物", "历史分期：新石器时代；商", "核心目的：分析推论；特征描述"],
            reference: ["张立明,王玉芝,刘金亭.山东乐陵、庆云古遗址调查简报[J].华夏考古, 2000(1):1"]
        },
        {
            question: "在西周中期的季姬方尊铭文中，季姬所称扬的\"王母\"，根据李学勤等学者的研究及金文语言环境分析，最可能的含义是什么？",
            options: [
                "A. 祖母（依据《尔雅·释亲》解释）",
                "B. 母亲（与\"皇母\"互通）",
                "C. 周王的王后",
                "D. 季姬的曾祖母"
            ],
            answer: "B",
            tags: [""],
            reference: ["李晶. 《尔雅·释亲》王父王母考[J]. 历史研究,2016,(6): 173-180."]
        }
    ];

    const nextMultipleChoice = () => {
        if (currentMultipleChoice < multipleChoiceList.length - 1) {
            setCurrentMultipleChoice(currentMultipleChoice + 1);
        }
    };

    const prevMultipleChoice = () => {
        if (currentMultipleChoice > 0) {
            setCurrentMultipleChoice(currentMultipleChoice - 1);
        }
    };

    const currentMultipleChoiceData = multipleChoiceList[currentMultipleChoice];
    const totalMultipleChoices = multipleChoiceList.length;

    // 判断题示例数据
    const trueFalseList = [
        {
            question: "在商代子姓贵族的内婚制中，表亲通婚的夫妇所生子女的日名与父亲相同。",
            answer: "错误",
            tags: {
                subject: ["中国古代史", "历史文献学"],
                period: "商",
                purpose: "事实呈现"
            },
            references: ["张富祥. 商王名号与上古日名制研究[J]. 历史研究,2005,(2): 3-27+190."]
        },
        {
            question: "郑州地区的汉画像砖墓在西汉晚期已普遍采用多室结构。",
            answer: "错误",
            tags: {
                subject: ["文物", "考古"],
                period: "西汉",
                purpose: "事实呈现"
            },
            references: ["蔡全法. 十年来河南秦汉考古的发现与研究[J]. 华夏考古,1989,(3): 30-40+92."]
        },
        {
            question: "汉文帝二年（公元前178年）的诏书废除了诽谤妖言法。",
            answer: "错误",
            tags: {
                subject: ["中国古代史"],
                period: "西汉",
                purpose: "事实呈现"
            },
            references: ["宋洁. 汉文帝\"除诽谤妖言诏\"发覆[J]. 史学月刊,2014,(3): 133-136."]
        }
    ];

    const [currentTrueFalse, setCurrentTrueFalse] = useState(0);
    const totalTrueFalses = trueFalseList.length;
    const currentTrueFalseData = trueFalseList[currentTrueFalse];

    const nextTrueFalse = () => {
        if (currentTrueFalse < totalTrueFalses - 1) {
            setCurrentTrueFalse(currentTrueFalse + 1);
        }
    };

    const prevTrueFalse = () => {
        if (currentTrueFalse > 0) {
            setCurrentTrueFalse(currentTrueFalse - 1);
        }
    };

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
                            全球首创聚焦早期中华文明的万题级研究导向评测集
                        </p>
                    </div>

                    {/* Framework Cards */}
                    <div className="space-y-12">
                        {/* 第一个框 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="p-8">
                                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                    本评测集是全球规模最大、聚焦早期中华文明的高质量研究导向型评测集，旨在填补该领域系统性、大规模能力评估的空白。
                                </p>
                                
                                {/* 重新设计的三栏布局 */}
                                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                                    {/* 首创性 */}
                                    <div className="bg-blue-50 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                                            首创性
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            作为全球首个聚焦早期中华文明深度研究能力的万题级研究导向评测集，首创开放式问答评估体系，在规模与深度上实现双重突破，成为该领域能力评估的创新里程碑。
                                        </p>
                                        <div className="mt-4 p-4 text-gray-700 rounded-lg">
                                            <div className="text-center">
                                                <div className="text-3xl font-bold text-blue-600">10,000</div>
                                                <div className="text-lg text-gray-700">题目规模</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* 系统性 */}
                                    <div className="bg-green-50 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                            <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                                            系统性
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            测评集内容系统覆盖中华文明起源、形成与发展的各个历史时期，广泛涉及该议题相关学科的一手史料与研究文献；题目设计按专业领域分类、依能力维度设题、结合研究场景布局，实现多维度系统评估。
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            {`独创\"学科领域 × 问题类型 × 研究场景\"三维设计体系，实现精准、多维度能力评估。`}
                                        </p>        
                                        {/* 真实的历史分期分布图 */}
                                        <div className="bg-white rounded-lg mt-4 p-3 border border-green-200">
                                            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/history_periods_chart.svg`} alt="历史分期分布图" className="w-full h-auto" width={400} height={300} />
                                        </div>
                                        

                                    </div>
                                    
                                    {/* 权威性 */}
                                    <div className="bg-purple-50 rounded-xl p-6 lg:col-span-1 md:col-span-2">
                                        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                                            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                                            权威性
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            依托专业的多模态数据制备与审核流程，全面采集权威数据库的学术资源 ，并经领域专家多轮标注审核，严格确保题目专业性与可靠性。
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
                                    独创三维分层体系
                                </h2>
                            </div>
                            <div className="p-8">
              
                                

                                {/* 一、学科领域全覆盖 */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                                        八大学科领域，全面覆盖研究范畴
                                    </h3>
                                    
                                    <div className="rounded-lg p-6">
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
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                                        四大题目类型，精准定位模型能力
                                    </h3>
                                

                                    <div className="rounded-lg p-6">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200 hover:bg-blue-100 transition-colors">
                                                <p className="font-semibold text-blue-700 mb-4">判断题</p>
                                                <p className="font-xl">概念辨析</p>
                                                <p className="font-xl">事实甄别</p>
                                                <p className="font-xl">认知去偏</p>
  
                                            </div>
                                            <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200 hover:bg-purple-100 transition-colors">
                                                <p className="font-semibold text-green-700 mb-4">选择题</p>
                                                <p className="font-xl">信息锚定</p>
                                                <p className="font-xl">关系推演</p>
                                                <p className="font-xl">干扰排除</p>

                                            </div>

                                            <div className="bg-orange-50 rounded-lg p-4 text-center border border-orange-200 hover:bg-orange-100 transition-colors">
                                                <p className="font-semibold text-orange-700 mb-4">简答题</p>
                                                <p className="font-xl">要素提炼</p>
                                                <p className="font-xl">分析推理</p>
                                                <p className="font-xl">结构化阐释</p>
                                                
                                                
                                                
                                            </div>
                                            <div className="bg-red-50 rounded-lg p-4 text-center border border-red-200 hover:bg-red-100 transition-colors">
                                                <p className="font-semibold text-red-700 mb-4">图文简答题</p>
                                                <p className="font-xl">图像识别</p>
                                                <p className="font-xl">跨模态整合</p>
                                                <p className="font-xl">证据链构建</p>
                                                
                                                
                                                
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                
                                {/* 二、七大研究场景测评 */}
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                                        七大适配场景，深度契合科研需求
                                    </h3>
                                    
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-white rounded-lg p-5 border border-indigo-200 shadow-sm">
                                            <h4 className="font-bold text-indigo-800 mb-3 flex items-center">
                                                <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">1</span>
                                                检索
                                            </h4>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                评估信息定位与筛选能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-purple-200 shadow-sm">
                                            <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                                                <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">2</span>
                                                翻译
                                            </h4>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                测评对语言形式（如古今文、语种、风格等）进行准确转换并保持原意的能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm">
                                            <h4 className="font-bold text-blue-800 mb-3 flex items-center">
                                                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">3</span>
                                                语料/图像精准识读
                                            </h4>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                考察对原始材料（文字、图像等）的准确释读与信息提取能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-green-200 shadow-sm">
                                            <h4 className="font-bold text-green-800 mb-3 flex items-center">
                                                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">4</span>
                                                事实呈现
                                            </h4>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                测评客观、清晰地陈述关键史实或信息的能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-yellow-200 shadow-sm">
                                            <h4 className="font-bold text-yellow-800 mb-3 flex items-center">
                                                <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">5</span>
                                                特征描述
                                            </h4>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                要求识别并准确描述研究对象（文本、文物、现象等）的显著特点。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-red-200 shadow-sm">
                                            <h4 className="font-bold text-red-800 mb-3 flex items-center">
                                                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">6</span>
                                                信度考据
                                            </h4>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                评估对信息来源、证据可靠性的判断与考辨能力。
                                            </p>
                                        </div>
                                        
                                        <div className="bg-white rounded-lg p-5 border border-teal-200 shadow-sm md:col-span-2 lg:col-span-1">
                                            <h4 className="font-bold text-teal-800 mb-3 flex items-center">
                                                <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">7</span>
                                                分析推论
                                            </h4>
                                            <p className="text-gray-600 text-lg leading-relaxed">
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
                                    严循学术研究标准
                                </h2>
                            </div>
                            <div className="p-8 bg-white bg-opacity-95">
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        本多模态评测数据制备流程严格遵循专业保障体系，构建从原始数据到高质量数据集的完整链路，确保每一道题目都经过严格的专业审核机制。
                                    </p>
                                </div>
                                

                                
                                {/* 核心特色 */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                                            数据源专业权威
                                        </h3>
                                        
                                        <div className="space-y-0 whitespace-nowrap">
                                            <div className="flex items-center p-2">
                                                <span className="text-gray-700">聚合多领域专业知识库，确保学科覆盖广泛且精准</span>
                                            </div>
                                            <div className="flex items-center p-2">
                                                <span className="text-gray-700">建立规范的数据采集流程，保障数据来源权威可靠</span>
                                            </div>
                                            <div className="flex items-center p-2">
                                                <span className="text-gray-700">遵循相关法律法规，确保数据采集合法合规</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
                                        <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center">
                                            题目质量精准可靠
                                        </h3>
                                    
                                        <div className="space-y-0 whitespace-nowrap">
                                            
                                            <div className="flex items-center p-2">
                                                <span className="text-gray-700">领域专家开展深度标注，确保题目专业性与学科匹配度</span>
                                            </div>
                                            <div className="flex items-center p-2">
                                                <span className="text-gray-700">质检专家执行交叉审核，提升题目准确性与标准一致性</span>
                                            </div>
                                            <div className="flex items-center p-2">
                                                <span className="text-gray-700">质量管理团队实施动态抽查，优化测评集的科学性与可靠性</span>
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
                                    图文题示例
                                </h2>
                            </div>
                            <div className="p-8">
                                {/* 图片和文字部分 */}
                                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                    
                                    {/* 左侧文字 */}
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-blue-800 mb-3">题目</h4>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                        {currentQuestion.question}
                                        </p>
                                    </div>
                                    {/* 右侧图片 */}
                                    <div className="bg-white shadow-sm">
                                        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/qc_pics/${currentQuestion.image}`} alt="题目配图" className="w-full h-auto rounded-lg" width={500} height={400} />
                                        {/* 图片文字说明 */}
                                        <div className="p-4">
                                            <p className="text-center text-gray-700 font-medium text-lg">
                                                {currentQuestion.image_name}
                                            </p>
                                        </div>
                                    </div>
                                    

                                </div>
                                {/* 参考答案 */}
                                <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 mb-6">
                                    <h4 className="text-lg font-bold text-green-800 mb-3">参考答案</h4>
                                    {currentQuestion.answer.map((item, index) => (
                                        <p key={index} className="text-gray-700 text-lg leading-relaxed">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                                {/* 标签信息和参考文献 - 两列布局 */}
                                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                    {/* 标签信息 */}
                                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-blue-800 mb-3">题目标签</h4>
                                        {currentQuestion.tags.map((tag, index) => (
                                            <p key={index} className="text-gray-700 text-lg leading-relaxed">
                                                {tag}
                                            </p>
                                        ))}
                                    </div>
                                    
                                    {/* 参考文献 */}
                                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-orange-800 mb-3">参考文献</h4>
                                        {currentQuestion.reference.map((item, index) => (
                                            <p key={index} className="text-gray-700 text-lg leading-relaxed">
                                                {item}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* 翻页导航 */}
                                <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                                    <div className="text-gray-600 font-medium">
                                        第 {currentQuestionIndex + 1} 题 / 共 {totalQuestions} 题
                                    </div>
                                    <div className="flex space-x-4">
                                        <button 
                                            onClick={goToPrevious}
                                            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                                            disabled={currentQuestionIndex === 0}
                                        >
                                            ← 上一题
                                        </button>
                                        <button 
                                            onClick={goToNext}
                                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={currentQuestionIndex === totalQuestions - 1}
                                        >
                                            下一题 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 简答题示例 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-green-600 to-cyan-600 p-6">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    简答题示例
                                </h2>
                            </div>
                            <div className="p-8">
                                {/* 题目内容 */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                                    <h4 className="text-lg font-bold text-blue-800 mb-3">题目</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {currentShortAnswerData.question}
                                    </p>
                                </div>
                                
                                {/* 参考答案 */}
                                <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 mb-6">
                                    <h4 className="text-lg font-bold text-green-800 mb-3">参考答案</h4>
                                    <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                                        {currentShortAnswerData.answer.map((paragraph, index) => (
                                            <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* 标签信息和参考文献 - 两列布局 */}
                                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                    {/* 标签信息 */}
                                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-blue-800 mb-3">题目标签</h4>
                                        <div className="text-gray-700 text-lg leading-relaxed space-y-2">
                                            {currentShortAnswerData.tags.map((tag, index) => (
                                                <p key={index}>{tag}</p>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* 参考文献 */}
                                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-orange-800 mb-3">参考文献</h4>
                                        <div className="text-gray-700 text-lg leading-relaxed space-y-2">
                                            {currentShortAnswerData.reference.map((ref, index) => (
                                                <p key={index}>{ref}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 翻页导航 */}
                                <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                                    <div className="text-gray-600 font-medium">
                                        第 {currentShortAnswer + 1} 题 / 共 {totalShortAnswers} 题
                                    </div>
                                    <div className="flex space-x-4">
                                        <button 
                                            onClick={prevShortAnswer}
                                            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                                            disabled={currentShortAnswer === 0}
                                        >
                                            ← 上一题
                                        </button>
                                        <button 
                                            onClick={nextShortAnswer}
                                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={currentShortAnswer === totalShortAnswers - 1}
                                        >
                                            下一题 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 选择题示例 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    选择题示例
                                </h2>
                            </div>
                            <div className="p-8">
                                {/* 题目内容 */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                                    <h4 className="text-lg font-bold text-blue-800 mb-3">题目</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                                        {currentMultipleChoiceData.question}
                                    </p>
                                    
                                    {/* 选项 */}
                                    <div className="space-y-3">
                                        {currentMultipleChoiceData.options.map((option, index) => (
                                            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                                                <p className="text-gray-700">{option}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* 参考答案 */}
                                <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 mb-6">
                                    <h4 className="text-lg font-bold text-green-800 mb-3">参考答案</h4>
                                    <div className="text-gray-700 text-lg font-semibold">
                                        {currentMultipleChoiceData.answer}
                                    </div>
                                </div>
                                
                                {/* 标签信息和参考文献 - 两列布局 */}
                                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                    {/* 标签信息 */}
                                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-blue-800 mb-3">题目标签</h4>
                                        <div className="text-gray-700 text-lg leading-relaxed space-y-2">
                                            {currentMultipleChoiceData.tags.map((tag, index) => (
                                                <p key={index}>{tag}</p>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* 参考文献 */}
                                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-orange-800 mb-3">参考文献</h4>
                                        <div className="text-gray-700 text-lg leading-relaxed space-y-2">
                                            {currentMultipleChoiceData.reference.map((ref, index) => (
                                                <p key={index}>{ref}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 翻页导航 */}
                                <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                                    <div className="text-gray-600 font-medium">
                                        第 {currentMultipleChoice + 1} 题 / 共 {totalMultipleChoices} 题
                                    </div>
                                    <div className="flex space-x-4">
                                        <button 
                                            onClick={prevMultipleChoice}
                                            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                                            disabled={currentMultipleChoice === 0}
                                        >
                                            ← 上一题
                                        </button>
                                        <button 
                                            onClick={nextMultipleChoice}
                                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={currentMultipleChoice === totalMultipleChoices - 1}
                                        >
                                            下一题 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 判断题示例 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    判断题示例
                                </h2>
                            </div>
                            <div className="p-8">
                                {/* 题目内容 */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                                    <h4 className="text-lg font-bold text-blue-800 mb-3">题目</h4>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {currentTrueFalseData.question}
                                    </p>
                                </div>
                                
                                {/* 参考答案 */}
                                <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 mb-6">
                                    <h4 className="text-lg font-bold text-green-800 mb-3">参考答案</h4>
                                    <div className="text-gray-700 text-lg font-semibold">
                                        {currentTrueFalseData.answer}
                                    </div>
                                </div>
                                
                                {/* 标签信息和参考文献 - 两列布局 */}
                                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                    {/* 标签信息 */}
                                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-blue-800 mb-3">题目标签</h4>
                                        <div className="text-gray-700 text-lg leading-relaxed space-y-2">
                                            <p>学科领域：{currentTrueFalseData.tags.subject.join("；")}</p>
                                            <p>历史分期：{currentTrueFalseData.tags.period}</p>
                                            <p>核心目的：{currentTrueFalseData.tags.purpose}</p>
                                        </div>
                                    </div>
                                    
                                    {/* 参考文献 */}
                                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
                                        <h4 className="text-lg font-bold text-orange-800 mb-3">参考文献</h4>
                                        <div className="text-gray-700 text-lg leading-relaxed space-y-2">
                                            {currentTrueFalseData.references.map((ref, index) => (
                                                <p key={index}>{ref}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* 翻页导航 */}
                                <div className="flex justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                                    <div className="text-gray-600 font-medium">
                                        第 {currentTrueFalse + 1} 题 / 共 {totalTrueFalses} 题
                                    </div>
                                    <div className="flex space-x-4">
                                        <button 
                                            onClick={prevTrueFalse}
                                            className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                                            disabled={currentTrueFalse === 0}
                                        >
                                            ← 上一题
                                        </button>
                                        <button 
                                            onClick={nextTrueFalse}
                                            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={currentTrueFalse === totalTrueFalses - 1}
                                        >
                                            下一题 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 测评功能模块 */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    测评功能模块
                                </h2>
                            </div>
                            <div className="p-8">
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* 自测评数据下载 */}
                                    <div className="group relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-blue-800 mb-3">自测评数据下载</h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                获取完整的测评数据集，包括题目、答案和评分标准，支持多种格式下载。
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-lg group-hover:shadow-xl transition-all cursor-not-allowed opacity-60">
                                                <span className="mr-2">📥</span>
                                                <span>敬请期待</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 测评提交表单 */}
                                    <div className="group relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                            <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-emerald-800 mb-3">测评提交表单</h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                提交您的模型测评结果，支持多种格式上传，自动验证和处理。
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-semibold shadow-lg group-hover:shadow-xl transition-all cursor-not-allowed opacity-60">
                                                <span className="mr-2">📤</span>
                                                <span>敬请期待</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 测评榜单 */}
                                    <div className="group relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl p-8 border border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                            <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-2xl font-bold text-purple-800 mb-3">测评榜单</h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">
                                                查看各模型在不同维度的测评排名，实时更新的性能对比和分析报告。
                                            </p>
                                        </div>
                                        <div className="text-center">
                                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg group-hover:shadow-xl transition-all cursor-not-allowed opacity-60">
                                                <span className="mr-2">🏆</span>
                                                <span>敬请期待</span>
                                            </div>
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
