/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MongoDB
 Source Server Version : 40406
 Source Host           : localhost:27017
 Source Schema         : admin_db

 Target Server Type    : MongoDB
 Target Server Version : 40406
 File Encoding         : 65001

 Date: 30/06/2021 17:26:49
*/
use ("admin_db")

// ----------------------------
// Collection structure for categorys
// ----------------------------
db.getCollection("categorys").drop();
db.createCollection("categorys");

// ----------------------------
// Documents of categorys
// ----------------------------
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d43efd410d483f08d2ad8b"),
    parentId: "0",
    name: "基礎保養 （洗臉、卸妝、化妝水、前導精華、面膜）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d43f1c410d483f08d2ad8c"),
    parentId: "0",
    name: "進階護膚 （去角質、眼睫保養、唇部保養、進階保養）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d43f28410d483f08d2ad8d"),
    parentId: "0",
    name: "防曬 （臉部防曬、身體防曬）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d43f58410d483f08d2ad8e"),
    parentId: "0",
    name: "底妝 （妝前、遮瑕、粉底、定妝）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d43f79410d483f08d2ad8f"),
    parentId: "0",
    name: "彩妝 （眉彩、眼線/影、睫毛、腮紅、修容、唇彩、美甲）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d440df410d483f08d2ad90"),
    parentId: "0",
    name: "身體保養 （手部保養、腿足保養、私密護理、沐浴清潔）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d440f4410d483f08d2ad91"),
    parentId: "0",
    name: "美髮 （洗髮、潤/護髮、染髮、頭皮護理、頭髮造型）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d440fe410d483f08d2ad92"),
    parentId: "0",
    name: "香水香氛 （香水、香精、香氛）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d4410a410d483f08d2ad93"),
    parentId: "0",
    name: "美容工具 （臉部保養工具、彩妝工具、按摩工具、美容家電）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d44119410d483f08d2ad94"),
    parentId: "0",
    name: "營養補給 （膠原蛋白、玻尿酸、積雪草 、維他命）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d4412a410d483f08d2ad95"),
    parentId: "0",
    name: "特殊用途 （曬後護理、礦物彩妝、無香料、弱酸性）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d4413f410d483f08d2ad96"),
    parentId: "0",
    name: "特殊產品 （新品、得賞品、聯名款、限量）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d4414e410d483f08d2ad97"),
    parentId: "0",
    name: "換季專題 （秋冬保養、抗老保養、夏季底妝）",
    __v: NumberInt("0")
} ]);
db.getCollection("categorys").insert([ {
    _id: ObjectId("60d4415b410d483f08d2ad98"),
    parentId: "0",
    name: "問題困擾（肌膚問題、頭皮問題、美體問題）",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for products
// ----------------------------
db.getCollection("products").drop();
db.createCollection("products");

// ----------------------------
// Documents of products
// ----------------------------
db.getCollection("products").insert([ {
    _id: ObjectId("60d5810f5dfbfa1d900b2f50"),
    status: NumberInt("2"),
    imgs: [
        "image-1642138009247.jpg",
        "image-1642137794370.jpg",
        "image-1642137798046.jpg"
    ],
    categoryId: "60d43efd410d483f08d2ad8b",
    name: "微晶3D全能洗顏霜(VitaBtech升級版)",
    price: NumberInt("580"),
    desc: "Swissvita 薇佳卸妝清潔系列",
    detail:"<ul><li>毛孔深度清潔，保濕不乾澀</li><li>添加深海微生物多醣配方</li><li>舒緩肌膚不適，富含30%胺基酸的超晶透泡泡</li><li>深層清潔毛孔髒污，添加辣木籽萃取物</li><li>維持肌膚油水平衡，保濕水潤一整天</li></ul>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d581e05dfbfa1d900b2f51"),
    status: NumberInt("1"),
    imgs: [
        "image-1642150310564.jpg",
        "image-1642150316174.jpg",
        "image-1642150321145.jpg",
        "image-1642150334366.jpg"
    ],
    categoryId: "60d43efd410d483f08d2ad8b",
    name: "全新全能奇蹟金萃潔顏油",
    price: NumberInt("3650"),
    desc: "shu uemura 植村秀潔顏系列",
    detail:"<p><strong>最新乳化科技 </strong></p><p><strong>接睫毛也可用 </strong></p><p><strong>溼手也可用</strong></p><p><strong>更能有效吸附髒污，</strong></p><p><strong>即使濕手也可進行卸妝，</strong></p><p><strong>接睫毛也適用!😍</strong></p><p></p><p><strong>輕油質地在遇水的瞬間，立即完美乳化，</strong></p><p><strong>輕鬆卸除所有防水彩妝，</strong></p><p><strong>溫和深入毛孔，卸妝後不殘留油感，</strong></p><p><strong>肌膚完美零殘妝。😃</strong></p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582055dfbfa1d900b2f52"),
    status: NumberInt("1"),
    imgs: [
        "image-1642150539968.jpg"
    ],
    categoryId: "60d43efd410d483f08d2ad8b",
    name: "極潤保濕化粧水",
    price: NumberInt("400"),
    desc: "Hada-Labo 肌研極潤保濕系列",
    detail:"<p>1. 肌研經典明星產品，</p><p>締造全球熱賣突破1億瓶熱銷奇蹟。</p><p></p><p>2. 添加日本樂敦全新獨家「發酵玻尿酸」，</p><p>提供潤澤同時還能為肌膚建立防護屏障，</p><p>使肌膚更健康透亮。🎉</p><p></p><p>3. 4重玻尿酸完美保濕處方</p><p>「發酵玻尿酸、高效玻尿酸、玻尿酸、水解玻尿酸」，</p><p>補水鎖水，為肌膚帶來極致潤澤，更水潤Q彈。</p><p></p><p>4. 精華液般潤澤觸感，輕拍瞬間吸收，舒緩乾燥肌膚。</p><p></p><p>5. 採用與健康肌膚相同的弱酸性。</p><p></p><p>6. 以溫和對待肌膚為重點，低刺激性，</p><p>無添加香料、色素、油份、酒精。<p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582255dfbfa1d900b2f53"),
    status: NumberInt("1"),
    imgs: [
        "image-1642151508649.jpg",
        "image-1642151520876.jpg",
        "image-1642151549899.jpg"
    ],
    categoryId: "60d43efd410d483f08d2ad8b",
    name: "特潤超導全方位修護露",
    price: NumberInt("3980"),
    desc: "Estée Lauder 雅詩蘭黛特潤系列",
    detail:"<p><strong>全新</strong><strong><ins>「特潤超導全方位修護露」</ins></strong><strong>質地更輕盈，</strong></p><p><strong>能促使肌膚迅速吸收。使用一滴管，</strong></p><p><strong>迅速釋放滿滿水分吸收到肌膚底層，</strong></p><p><strong>擁有煥然新生的緊緻肌膚新體驗，</strong></p><p><strong>使用完一整瓶</strong><strong><ins>「特潤超導全方位修護露」</ins></strong><strong>後，</strong></p><p><strong>幫助肌膚緊緻毛孔，持續撫紋，</strong></p><p><strong>綻放彈嫩透亮，締造健康年輕肌膚的彈力與活力。😍</strong></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582315dfbfa1d900b2f54"),
    status: NumberInt("1"),
    imgs: [
        "image-1642151566079.jpg"
    ],
    categoryId: "60d43efd410d483f08d2ad8b",
    name: "極效服貼海葡萄保濕面膜",
    price: NumberInt("339"),
    desc: "SENKA 專科保養系列",
    detail:"<p><strong>專科面膜創新技術水凝膜，</strong></p><p><strong>彷彿隱形的第二層肌膚般完美服貼，</strong></p><p><strong>高效超導力強化吸收、密集保濕。</strong></p><p><strong>添加3重玻尿酸保濕精華和超級成分——</strong><strong><em>海葡萄與海藻萃取，</em></strong></p><p><strong>深層補水，同時感受海洋般舒涼，給你飽水澎潤的素顏肌。😀</strong></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582375dfbfa1d900b2f55"),
    status: NumberInt("2"),
    imgs: [
        "image-1642151646423.jpg",
        "image-1642151654157.jpg",
        "image-1642151658289.jpg",
        "image-1642151666367.jpg"
    ],
    categoryId: "60d43f1c410d483f08d2ad8c",
    name: "二合一臉部純淨磨砂膏",
    price: NumberInt("1680"),
    desc: "SABON復活草純淨保濕系列",
    detail:"<p>具備洗面乳與磨砂膏雙重功能，</p><p>加入天然荷荷巴顆粒，以奶油般的溫和質地為肌膚清潔拋光，</p><p>使肌膚平滑柔嫩並自然地散發柔嫩透明感。成份取自於自然，</p><p>復活草純淨保濕系列的共同成份─復活草、死海礦物質也賦予肌膚充足的滋潤，😍</p><p><strong><ins>不含矽、礦物油、硫酸鹽與Paraben防腐劑</ins></strong>。</p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d5823d5dfbfa1d900b2f56"),
    status: NumberInt("2"),
    imgs: [
        "image-1642151711027.jpg"
    ],
    categoryId: "60d43f1c410d483f08d2ad8c",
    name: "濃萃修復眼霜 ",
    price: NumberInt("8900"),
    desc: "LA MER 海洋拉娜眼部護理系列",
    detail:"<p><strong>含有3倍濃縮精華、3重修護功效、能顯著改善！🤘</strong></p><p><strong>持續使用可改善紋路問題，強化眼周保護屏障，喚醒活力青春明眸。</strong></p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f57"),
    status: NumberInt("1"),
    imgs: [
        "image-1642151762977.jpg",
        "image-1642151767062.jpg",
        "image-1642151769742.jpg",
        "image-1642151800052.jpg"
    ],
    categoryId: "60d43f1c410d483f08d2ad8c",
    name: "晶鑽桂馥潤色護唇膏 ",
    price: NumberInt("1250"),
    desc: "BOBBI BROWN 芭比波朗晶鑽桂馥系列",
    detail:"<p>BOBBI BROWN頂級保養晶鑽桂馥系列首次推出超滋潤的晶鑽桂馥潤色護唇膏，</p><p>能軟化與撫平雙唇，同時能根據膚溫賦予晶透粉紅色，加強嘴唇的自然色彩。</p><p>配方注入了<strong>橄欖油複合物、維他命E與C、巴巴蘇棕櫚籽油與荷荷芭油</strong>，</p><p>能調理修護疲憊的嘴唇，長時間使用更可減少唇部細紋與皺紋。😍</p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f58"),
    status: NumberInt("2"),
    imgs: [
        "image-1642151820628.jpg"
    ],
    categoryId: "60d43f1c410d483f08d2ad8c",
    name: "杏仁酸亮白煥膚精華18% ",
    price: NumberInt("1500"),
    desc: "DR.WU 達爾膚杏仁酸煥膚系列",
    detail:"<p>高濃度杏仁酸18%，運用<strong>杏仁酸大分子</strong>及優越的親膚的效果，</p><p>可快速清除表面角質堆積，深入毛孔有效清除黑白頭粉刺，</p><p><ins>改善暗沉、膚色不均、毛孔粗大、皺紋</ins>等問題，</p><p><strong>玻尿酸和β-聚葡萄醣體</strong>，同時<ins>修復保濕，賦予肌膚飽水滋潤</ins>；</p><p>另外<strong>亮白修護精萃</strong>能由肌底層層煥白，</p><p>從內而外打造晶透瞬白，長期不間段持續煥顏，</p><p>能達到緊緻活膚、肌膚再活化，重現完美無瑕細嫩肌膚。😍</p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f59"),
    status: NumberInt("1"),
    imgs: [
        "image-1642151844809.jpg"
    ],
    categoryId: "60d43f28410d483f08d2ad8d",
    name: "安耐曬金鑽高效防曬凝膠",
    price: NumberInt("790"),
    desc: "SHISEIDO 資生堂東京櫃安耐曬系列",
    detail:"<p>雙效美肌保養成分 升級進化</p><p>●抗氧化功效： 京都宇治 (綠茶萃取物))&nbsp;</p><p>●防止砂礫黏附在肌膚上。&nbsp;&nbsp;</p><p>●將汗水異味調和成清新宜人的芳香。&nbsp;&nbsp;</p><p></p><p>-清新的柑橘香氛 升級進化</p><p>●持續水潤不黏膩。</p><p>●可當作粧前乳使用。</p><p>●可輕鬆使用肥皂或日常潔面皂洗淨。</p><p>●不含色素</p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f60"),
    status: NumberInt("2"),
    imgs: [
        "image-1642151897172.jpg",
        "image-1642151899071.jpg"
    ],
    categoryId: "60d43f58410d483f08d2ad8e",
    name: "心機星魅平衡持粧控粧前乳EX SPF50+/PA++++",
    price: NumberInt("900"),
    desc: "SHISEIDO 資生堂東京櫃心機彩粧系列",
    detail:"<p>「夏日高溫」、「紫外線」出油乾燥樣樣來，</p><p>加上「口罩」摩擦，脫粧問題實在惱人!!&nbsp;</p><p>心機星魅平衡持粧控粧前乳EX UV+  2021/6/21進化新上市，</p><p>雙重美肌防禦+超強UV隔離，潤澤零油光，整天不脫粧!!😎</p><p></p><p>進化特點1：</p><p>因添加「<ins>美肌鎖水粉末</ins>」，</p><p>感應並調控膚況，乾燥時補水，</p><p>出油時吸附多餘油脂，<strong>保濕、控油、持粧</strong>一次滿足，</p><p>突破底粧待肌時間，啟動雙重美肌防禦</p><p></p><p>進化特點2：</p><p><strong>SPF50+高防曬係數</strong>，且擁有高延展性的滑順質地，</p><p>能輕鬆推勻全臉，無間隙的守護肌膚，</p><p>更能有效阻擋乾燥、紫外線的影響，展現超強UV隔離😁</p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f61"),
    status: NumberInt("1"),
    imgs: [
        "image-1642151930352.jpg"
    ],
    categoryId: "60d43f58410d483f08d2ad8e",
    name: "FIT ME遮遮稱奇遮瑕膏",
    price: NumberInt("300"),
    desc: "MAYBELLINE 媚比琳底妝系列",
    detail:"<p>輕盈水潤<strong>無油質地</strong> 遮瑕打亮隨心所欲</p><p>質地輕盈水潤<strong>不含油脂</strong>，</p><p>保濕潤澤，<strong>不脫妝、無細紋、不卡粉</strong>，</p><p>能夠<em>百分百貼合肌膚</em>，</p><p>無論是眼周暗沉、痘疤黯沉或是臉部瑕疵，</p><p>只要輕輕一抹，瑕疵都能瞬間隱形!👊👊</p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f62"),
    status: NumberInt("1"),
    imgs: [
        "image-1642151947802.jpg",
        "image-1642151971461.jpg",
        "image-1642151981011.jpg",
        "image-1642151982883.jpg"
    ],
    categoryId: "60d43f58410d483f08d2ad8e",
    name: "煥顏透明蜜粉",
    price: NumberInt("1500"),
    desc: "LAURA MERCIER 蘿拉蜜思底妝系列",
    detail:"<ul><li>2021 年度大賞 定妝 第2名🎉</li><li>2019 年度大賞 定妝 第1名🎉</li><li>2010 年度大賞 蜜粉 第2名🎉</li></ul><p></p><p><em>煥顏透明蜜粉 </em></p><p><em>2019HOLIDAY 限量聯名燦金耶誕系列 </em></p><p><em>NT$1,500/30g</em></p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f63"),
    status: NumberInt("2"),
    imgs: [
        "image-1642152013213.jpg",
        "image-1642152035050.jpg",
    ],
    categoryId: "60d43f79410d483f08d2ad8f",
    name: "旋轉眉筆",
    price: NumberInt("190"),
    desc: "Za眼部彩妝系列",
    detail:"<p>暢銷多年的Za超人氣明星商品旋轉眉筆進化了，</p><p>解決一般眉筆筆芯較硬，難以上色的缺點，</p><p>以<em>網狀蠟配方</em>將色彩及油質均勻包覆，觸感更柔軟，</p><p>不需任何技巧，就能輕鬆描繪自然出色眉型，</p><p>同時耐汗，粧效更加持久！</p><p></p><p>貼心的<strong>旋轉式筆芯</strong>設計，</p><p>不需削筆器，後端附上<strong>眉刷</strong>，方便梳整眉型，</p><p>隨時都能輕鬆上粧。</p><p></p><p>一次推出4種適合<strong>亞洲膚色</strong>的色彩，</p><p>可依髮色及粧感自由選擇，</p><p>簡單就擁有雜誌模特兒般的自然眉型！😍</p><p></p><p>共4色</p><p>#GY951</p><p>#BR611</p><p>#BR631</p><p>#BR771</p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f64"),
    status: NumberInt("2"),
    imgs: [
        "image-1642152065071.jpg",
        "image-1642152072213.jpg",
        "image-1642152075474.jpg",
        "image-1642152114576.jpg"
    ],
    categoryId: "60d43f79410d483f08d2ad8f",
    name: "解放狂想迷你6色眼彩盤[限量]",
    price: NumberInt("950"),
    desc: "NARS解放狂想系列",
    detail:"<p><strong>【 限量 】</strong></p><p>NARS 壓軸推出 2021 最華麗奪目的聖誕限量彩妝</p><p>一盤精選實用度最高的完美 6 色，</p><p>與<strong>綿密霧面</strong>、<strong>絲綢緞光</strong>、<strong>金屬珠光 </strong>3 大奢華細緻質地，</p><p>為眼神堆疊層次光影，一抹極致服貼，綻放絕美飽滿色彩。</p><p>承襲解放狂想系列的<ins>禁忌緞帶包裝</ins>，</p><p>加上全新<ins>輕巧迷你眼盤設計</ins>，</p><p>方便隨身打造渾然天成的誘惑電眼，</p><p>年末派對輕鬆演繹最勾人的璀璨眼妝，任誰都難以抵擋！💃</p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f65"),
    status: NumberInt("1"),
    imgs: [
        "image-1642152134735.jpg",
        "image-1642152139042.jpg",
        "image-1642152141681.jpg",
        "image-1642152180286.jpg"
    ],
    categoryId: "60d43f79410d483f08d2ad8f",
    name: "花漾腮紅 ",
    price: NumberInt("920"),
    desc: "CLINIQUE 倩碧彩妝系列",
    detail:"<p><em>#05 奶油粉</em></p><p><em>#13 玫瑰粉</em></p><p><em>#15 蘿蘭紫</em></p><p><em>#14 杜鵑粉</em></p><p><em>#12 薔薇粉</em></p><p><em>#08 甜瓜橘</em></p><p></p><p>最新專利「<strong><ins>慢火精緻烘焙技術(new patented slow-bake process)</ins></strong>」，</p><p>讓腮紅由液狀轉為粉狀，顏色更為持久，</p><p>同時提供最純淨自然的紅潤色調，絕對顯色不脫妝。</p><p>這款腮紅以腮紅刷輕刷可以呈現粉霧的繽紛感，</p><p>用指腹疊擦則有絲滑乳霜的豐盈質地。👏</p><p>它能輕鬆呈現持久的頰色，全天呈現光采無瑕的美麗肌膚，</p><p>呈現繽紛時髦的紅潤臉頰，是春天時尚妝扮的完美搭配。🎉</p><p></p><p><strong>＊質地輕盈，觸感絲滑</strong></p><p><strong>＊自然紅潤，服貼不留粉痕</strong></p><p><strong>＊用手或腮紅刷就可直接上妝，方便使用</strong></p><p><strong>＊妝容維持10小時不脫妝</strong></p><p><strong>＊浮雕菊花從第一擦到最後一擦都俏麗到底</strong></p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f66"),
    status: NumberInt("1"),
    imgs: [
        "image-1642152378539.jpg",
        "image-1642152381085.jpg",
        "image-1642152384148.jpg",
        "image-1642152387298.jpg",
        "image-1642152390078.jpg",
        "image-1642152394599.jpg"
    ],
    categoryId: "60d43f79410d483f08d2ad8f",
    name: "絲柔粉霧唇膏 Powderkiss",
    price: NumberInt("850"),
    desc: "M.A.C唇部彩妝系列",
    detail:"<p><strong><em>專利乳霜保濕粉體科技 極致滋潤 輕盈無感 </em></strong></p><p>歷時多年研發的全新配方，打破霧面唇彩偏乾的迷思，</p><p>近乎頂級乳霜觸感的質地，結合富含<ins>維他命E</ins>美唇精華，</p><p>以及<ins>精油包覆球體粉末</ins>的高科技保濕配方，</p><p>讓霧面唇膏也能擁有極致保濕的特色，能立即潤澤唇瓣，</p><p>保持一整天的滋潤度，並帶給雙唇輕盈無負擔的舒適感受。</p><p></p><p><strong><em>柔焦慕斯質地 柔順絲滑 柔焦無痕  </em></strong></p><p>霧唇最怕卡唇紋或是容易失手唇型卻越補越歪，</p><p>絲柔粉霧唇膏的<ins>獨家慕斯粉霧膏體</ins>，上妝不拉扯雙唇，</p><p>能夠打造超綿密超滑順的妝感，還能立即柔焦唇緣、唇紋，</p><p>彷彿套上最強大的柔霧美唇濾鏡，讓唇妝一抹即可輕鬆完成，</p><p>時刻保持最完美的狀態，不糊不黏膩。</p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f67"),
    status: NumberInt("2"),
    imgs: [
        "image-1642152458349.jpg",
        "image-1642152461541.jpg"
    ],
    categoryId: "60d43f79410d483f08d2ad8f",
    name: "晶緻亮采餅 Baked Highlighter",
    price: NumberInt("270"),
    desc: "heme 彩妝系列",
    detail:"<p>👉heme本季以「恰恰好的光澤感」為概念，</p><p>訂製適合<strong>亞洲人的打亮光感</strong>，以米白及粉膚為肌底，</p><p>完美融入肌膚，宛若天生好命光，</p><p><strong>粉體細緻服貼</strong>、<strong>不顯毛孔</strong>，悄悄提升整臉妝容精緻度，</p><p>由內而外散發澎潤光澤感。😋</p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f68"),
    status: NumberInt("1"),
    imgs: [
        "image-1642152498347.jpg",
        "image-1642152499939.jpg",
        "image-1642152502553.jpg",
        "image-1642152504605.jpg"
    ],
    categoryId: "60d440df410d483f08d2ad90",
    name: "乳油木護手霜 Shea Butter Hand Cream",
    price: NumberInt("1100"),
    desc: "L'OCCITANE 歐舒丹乳油木果油系列",
    detail:"<p>全球每3秒賣出1條的暢銷明星商品「乳油木護手霜」，</p><p>換上全新限量插畫包裝，可隨心發揮創意，塗上繽紛色彩，</p><p>打造專屬於個人的護手霜。</p><p>蘊含高達20%的<strong>乳油木果油及蜂蜜、杏仁、椰子油</strong>等多重天然保濕因子，</p><p>為手部肌膚帶來深度滋養柔潤，</p><p>有效<strong>舒緩、保濕、修護乾燥</strong>粗糙的肌膚；</p><p>輕盈柔滑乳霜質地，塗抹於肌膚的瞬間即迅速被吸收，</p><p>呈現細緻絲滑柔嫩膚觸。</p><p></p><ul><li>30 ml包裝局部上色，可接續著色創作</li><li>150 ml包裝無著色空間，可於專屬外盒創作</li></ul><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f69"),
    status: NumberInt("1"),
    imgs: [
        "image-1642152550830.jpg"
    ],
    categoryId: "60d440df410d483f08d2ad90",
    name: "深層修護乳液",
    price: NumberInt("179"),
    desc: "NIVEA 妮維雅美體保養系列",
    detail:"<p>-輕盈保濕新體感，水嫩透亮</p><p></p><p>-創新清爽保濕配方，水潤清新同時擁有。</p><p>輕薄透的乳液質地，清爽不黏膩，好推好吸收。</p><p></p><p>-德國百年護膚專家妮維雅研發「<strong>極效潤澤精華plus</strong>」，</p><p>搭配含酪梨油及維他命E的加強保濕配方，</p><p>讓保濕效果更持久，給肌膚看得見的水嫩透亮。😀</p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f70"),
    status: NumberInt("1"),
    imgs: [
        "image-1642152597406.jpg",
        "image-1642152599359.jpg",
        "image-1642152601818.jpg",
        "image-1642152604051.jpg",
        "image-1642152607438.jpg"
    ],
    categoryId: "60d440f4410d483f08d2ad91",
    name: "富麗絲漂髮系列",
    price: NumberInt("289"),
    desc: "Schwarzkopf 施華蔻富麗絲系列",
    detail:"<p>FRESH LIGHT富麗絲小布娃娃日韓同步流行&nbsp;</p><p>#富麗絲酷女孩😎</p><p></p><p>☆含八種氨基酸漂後頭髮光澤滋潤</p><p>☆便利式染髮梳頭一個人也可以輕鬆漂髮</p><p>☆新包裝贈送太陽花精萃護髮膜讓髮絲不糾結</p><p>☆漂 + 染 玩色好EASY😜</p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f71"),
    status: NumberInt("2"),
    imgs: [
        "image-1642152653105.jpg",
        "image-1642152662803.jpg",
        "image-1642152666018.jpg",
        "image-1642152668421.jpg",
        "image-1642152672675.jpg"
    ],
    categoryId: "60d440fe410d483f08d2ad92",
    name: "英國梨與小蒼蘭 English Pear & Freesia",
    price: NumberInt("4200"),
    desc: "JO MALONE香水系列",
    detail:"<p>甘甜多汁，清涼。</p><p>英國梨與小蒼蘭捕捉了<strong>清新梨子甜美感性香氣</strong>，</p><p>爽脆果香外層包裹<strong>白色小蒼蘭與野玫瑰</strong>。</p><p><strong>琥珀</strong>，<strong>廣霍香</strong>及<strong>木香</strong>溫暖著基調。</p><p>(2010上市)</p><p></p><p><em>2018.10上市 婚禮蕾絲系列 </em></p><p><em>(雛菊葉蕾絲、野玫瑰蕾絲)​</em></p><p><em>100ml/NT$5,600</em></p><p></p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f72"),
    status: NumberInt("1"),
    imgs: [
        "image-1642152675002.jpg"
    ],
    categoryId: "60d440fe410d483f08d2ad92",
    name: "曠野之心淬鍊香精",
    price: NumberInt("5050"),
    desc: "Dior 迪奧 SAUVAGE曠野之心系列",
    detail:"<p>全新<strong>《SAUVAGE曠野之心淬鍊香精》</strong>是一款讚嘆大自然的香氛鉅作，</p><p>源自於迪奧對原材料珍稀、豐富度的苛求，</p><p>並以最貼近自然古法的方式培育、摘採、嚴選萃取，</p><p>再透過迪奧首席調香師 François Demachy的精準調製，</p><p>以大膽無畏的手法，徹底昇華曠野之心的桀驁本色，</p><p>不僅於前調增添溫暖濃郁的「辛香料氣息」，</p><p>同時凸顯「<strong>訂製薰衣草香精</strong>」的迷烈氣蘊，</p><p>以及尾韻「<strong>廣藿香</strong>」的木質個性，當核心成分凝聚交織，</p><p>純粹又令人上癮的迷幻魅力徹底釋放而出，</p><p>濃烈中不失細膩，層次堆疊中帶著豐富表情，</p><p>木質、醇郁、辛香互相撞擊跌宕，</p><p>激發一股令人應接不暇的香氛能量，令人無法自拔。😎</p>",
    __v: NumberInt("0")
} ]);
db.getCollection("products").insert([ {
    _id: ObjectId("60d582435dfbfa1d900b2f73"),
    status: NumberInt("2"),
    imgs: [
        "image-1642153006220.jpg",
        "image-1642153009414.jpg",
        "image-1642153011462.jpg",
        "image-1642153013864.jpg"
    ],
    categoryId: "60d4410a410d483f08d2ad93",
    name: "貼膚粉底刷",
    price: NumberInt("1500"),
    desc: "MAKE UP FOREVER美容工具系列",
    detail:"<p><strong><em>#112小顏刷</em></strong></p><p><strong><em>#108粉底刷</em></strong></p><p><strong><em>#154勻粉紅刷</em></strong></p><p><strong><em>#136雙頭修容刷 </em></strong></p><p></p>",
    __v: NumberInt("0")
} ]);


// ----------------------------
// Collection structure for roles
// ----------------------------
db.getCollection("roles").drop();
db.createCollection("roles");

// ----------------------------
// Documents of roles
// ----------------------------
db.getCollection("roles").insert([ {
    _id: ObjectId("60dc0e2a82cf3b00549fb0ba"),
    menus: [
        "products",
        "category",
        "product"
    ],
    name: "商品管理員",
    "create_time": 1625034282420,
    __v: NumberInt("0"),
    "auth_name": "admin",
    "auth_time": 1625034380040
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("60dc0e7782cf3b00549fb0bb"),
    menus: [
        "charts",
        "bar",
        "line",
        "pie"
    ],
    name: "圖表管理員",
    "create_time": 1625034359699,
    __v: NumberInt("0"),
    "auth_name": "admin",
    "auth_time": 1625034372997
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("60dc0ea482cf3b00549fb0bc"),
    menus: [
        "home",
        "category",
        "user",
        "bar",
        "pie"
    ],
    name: "特殊管理員",
    "create_time": 1625034404776,
    __v: NumberInt("0"),
    "auth_name": "admin",
    "auth_time": 1625034418733
} ]);
db.getCollection("roles").insert([ {
    _id: ObjectId("60dc10c582cf3b00549fb0bd"),
    menus: [
        "home"
    ],
    name: "首頁管理員",
    "create_time": 1625034949872,
    __v: NumberInt("0"),
    "auth_name": "admin",
    "auth_time": 1625034954330
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("60d1342029ac623e1cbba92a"),
    username: "admin",
    password: "21232f297a57a5a743894a0e4a801fc3",
    "create_time": 1624323104488,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60dc34244d994523200f911e"),
    username: "Chillseph",
    password: "e10adc3949ba59abbe56e057f20f883e",
    email: "Chillseph54088@gmail.com",
    phone: "09378554088",
    "role_id": "60dc10c582cf3b00549fb0bd",
    "create_time": 1625044004292,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60dc34374d994523200f911f"),
    username: "Annie",
    password: "e10adc3949ba59abbe56e057f20f883e",
    email: "annie666@yahoo.com.tw",
    phone: "0988666123",
    "role_id": "60dc0ea482cf3b00549fb0bc",
    "create_time": 1625044023748,
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60dc38984d994523200f9120"),
    username: "Jessica",
    password: "e10adc3949ba59abbe56e057f20f883e",
    email: "jessicaaaa@gmail.com",
    phone: "0987654321",
    "role_id": "60dc0e2a82cf3b00549fb0ba",
    "create_time": 1625045144256,
    __v: NumberInt("0")
} ]);
