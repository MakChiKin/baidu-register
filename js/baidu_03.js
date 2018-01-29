$(document).ready(function () {
    skinBtn();
    msgBtn();
    moreProductShow();
    settingShow();
    accountShow();
    skinHeader_activate();
    activateArea();
    contentHead_activate();
    activatecontent();
    content_setting();
    mouseScroll();
    cilckDown();
    loadNewsFlash(realTimeHtspots01);
    upDateNewsList();
    loadNews(newsData);
    myNav();
    myVideo();
    dragBtn();
    channelBtn();
    body();
})
//数据
//背景图片数据
// 热门
var HDWallpapersHOt = {'backgroundImage':[
    {'url':'img/bg/hot/01.jpg','name':'钢铁侠'},
    {'url':'img/bg/hot/02.jpg','name':'磅礴夕阳'},
    {'url':'img/bg/hot/03.jpg','name':'变形金刚'},
    {'url':'img/bg/hot/04.jpg','name':'碧绿海滩'},
    {'url':'img/bg/hot/05.jpg','name':'蓝天白云'},
    {'url':'img/bg/hot/06.jpg','name':'翠绿海滩'},
    {'url':'img/bg/hot/07.jpg','name':'钢铁侠'},
    {'url':'img/bg/hot/08.jpg','name':'蝙蝠侠'},
    {'url':'img/bg/hot/09.jpg','name':'绿野茵茵'},
    {'url':'img/bg/hot/10.jpg','name':'夕阳美景'},
    {'url':'img/bg/hot/11.jpg','name':'蓝天晚霞'},
    {'url':'img/bg/hot/12.jpg','name':'深林公园'},
]}
// 游戏
var HDWallpapersGame = {'backgroundImage':[
    {'url':'img/bg/game/01.jpg','name':'英雄联盟'},
    {'url':'img/bg/game/02.jpg','name':'愤怒的小鸟'},
    {'url':'img/bg/game/03.jpg','name':'英雄联盟'},
    {'url':'img/bg/game/04.jpg','name':'黑暗血统2'},
    {'url':'img/bg/game/05.jpg','name':'黑暗血统2'},
    {'url':'img/bg/game/06.jpg','name':'英雄联盟'},
    {'url':'img/bg/game/07.jpg','name':'英雄联盟'},
    {'url':'img/bg/game/08.jpg','name':'魔兽争霸'},
    {'url':'img/bg/game/09.jpg','name':'使命召唤'},
    {'url':'img/bg/game/10.jpg','name':'使命召唤'},
    {'url':'img/bg/game/11.jpg','name':'使命召唤'},
    {'url':'img/bg/game/12.jpg','name':'刺客信条'},
]}
// 卡通
var HDWallpapersCatoon = {'backgroundImage':[
    {'url':'img/bg/catoon/01.jpg','name':'新世纪福音战士'},
    {'url':'img/bg/catoon/02.jpg','name':'灌篮高手'},
    {'url':'img/bg/catoon/03.jpg','name':'蜡笔小新'},
    {'url':'img/bg/catoon/04.jpg','name':'火影忍者'},
    {'url':'img/bg/catoon/05.jpg','name':'火影忍者'},
    {'url':'img/bg/catoon/06.jpg','name':'火影忍者'},
    {'url':'img/bg/catoon/07.jpg','name':'火影忍者'},
    {'url':'img/bg/catoon/08.jpg','name':'你的名字'},
    {'url':'img/bg/catoon/09.jpg','name':'灌篮高手'},
    {'url':'img/bg/catoon/10.jpg','name':'忍者乱太郎'},
    {'url':'img/bg/catoon/11.jpg','name':'火影忍者'},
    {'url':'img/bg/catoon/12.jpg','name':'灌篮高手'},
]}
// 实时热点
var realTimeHtspots01 ={'data':[
    {'title':'女子骂交警拘3天','state':'new','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A5%B3%E5%AD%90%E9%AA%82%E4%BA%A4%E8%AD%A6%E6%8B%983%E5%A4%A9&rsv_idx=2'},
    {'title':'纪念曼德拉国际日','state':'new','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E7%BA%AA%E5%BF%B5%E6%9B%BC%E5%BE%B7%E6%8B%89%E5%9B%BD%E9%99%85%E6%97%A5&rsv_idx=2'},
    {'title':'英升级台风战斗机','state':'new','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E8%8B%B1%E5%8D%87%E7%BA%A7%E5%8F%B0%E9%A3%8E%E6%88%98%E6%96%97%E6%9C%BA&rsv_idx=2'},
    {'title':'黄磊为孙莉庆生','state':'new','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E9%BB%84%E7%A3%8A%E4%B8%BA%E5%AD%99%E8%8E%89%E5%BA%86%E7%94%9F&rsv_idx=2'},
    {'title':'普京请吃冰淇淋','state':'new','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%99%AE%E4%BA%AC%E8%AF%B7%E5%90%83%E5%86%B0%E6%B7%87%E6%B7%8B&rsv_idx=2'},
    {'title':'广州宣布租购同权','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%B9%BF%E5%B7%9E%E5%AE%A3%E5%B8%83%E7%A7%9F%E8%B4%AD%E5%90%8C%E6%9D%83&rsv_idx=2'},
    {'title':'全国最深地铁站','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%85%A8%E5%9B%BD%E6%9C%80%E6%B7%B1%E5%9C%B0%E9%93%81%E7%AB%99&rsv_idx=2'},
    {'title':'3D打印柔性心脏','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=3D%E6%89%93%E5%8D%B0%E6%9F%94%E6%80%A7%E5%BF%83%E8%84%8F&rsv_idx=2'},
    {'title':'女子当孩面捡手机','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A5%B3%E5%AD%90%E5%BD%93%E5%AD%A9%E9%9D%A2%E6%8D%A1%E6%89%8B%E6%9C%BA&rsv_idx=2'},
    {'title':'王思聪相亲遭嫌弃','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E7%8E%8B%E6%80%9D%E8%81%AA%E7%9B%B8%E4%BA%B2%E9%81%AD%E5%AB%8C%E5%BC%83&rsv_idx=2'},
    {'title':'女子被地铁拖行','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%9C%B0%E9%93%81%E6%8B%96%E8%A1%8C&rsv_idx=2'},
    {'title':'政府网站瘦身','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%94%BF%E5%BA%9C%E7%BD%91%E7%AB%99%E7%98%A6%E8%BA%AB&rsv_idx=2'},
    {'title':'日狂撒10亿美元','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%97%A5%E7%8B%82%E6%92%9210%E4%BA%BF%E7%BE%8E%E5%85%83&rsv_idx=2'},
    {'title':'老板骂走一半员工','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E8%80%81%E6%9D%BF%E9%AA%82%E8%B5%B0%E4%B8%80%E5%8D%8A%E5%91%98%E5%B7%A5&rsv_idx=2'},
    {'title':'吴尊全裸海滩度假','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%90%B4%E5%B0%8A%E5%85%A8%E8%A3%B8%E6%B5%B7%E6%BB%A9%E5%BA%A6%E5%81%87&rsv_idx=2'},
    {'title':'僵尸之父肺癌去世','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%83%B5%E5%B0%B8%E4%B9%8B%E7%88%B6%E8%82%BA%E7%99%8C%E5%8E%BB%E4%B8%96&rsv_idx=2'}
]}
var realTimeHtspots02 ={'data':[
    {'title':'坐月子中暑身亡','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%9D%90%E6%9C%88%E5%AD%90%E4%B8%AD%E6%9A%91%E8%BA%AB%E4%BA%A1&rsv_idx=2'},
    {'title':'偷电动车买装备','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%81%B7%E7%94%B5%E5%8A%A8%E8%BD%A6%E4%B9%B0%E8%A3%85%E5%A4%87&rsv_idx=2'},
    {'title':'买野生猴子被抓','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E4%B9%B0%E9%87%8E%E7%94%9F%E7%8C%95%E7%8C%B4%E8%A2%AB%E6%8A%93&rsv_idx=2'},
    {'title':'河北破系列骗保案','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%B2%B3%E5%8C%97%E7%A0%B4%E7%B3%BB%E5%88%97%E9%AA%97%E4%BF%9D%E6%A1%88&rsv_idx=2'},
    {'title':'领导有特权可插队','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E9%A2%86%E5%AF%BC%E6%9C%89%E7%89%B9%E6%9D%83%E5%8F%AF%E6%8F%92%E9%98%9F&rsv_idx=2'},
    {'title':'徐玉玉案宣判','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%BE%90%E7%8E%89%E7%8E%89%E6%A1%88%E5%AE%A3%E5%88%A4&rsv_idx=2'},
    {'title':'女模在跑道拍片','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A5%B3%E6%A8%A1%E5%9C%A8%E8%B7%91%E9%81%93%E6%8B%8D%E7%89%87&rsv_idx=2'},
    {'title':'杭州小区孝心车位','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%9D%AD%E5%B7%9E%E5%B0%8F%E5%8C%BA%E5%AD%9D%E5%BF%83%E8%BD%A6%E4%BD%8D&rsv_idx=2'},
    {'title':'女孩被杀藏尸床箱','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A5%B3%E5%AD%A9%E8%A2%AB%E6%9D%80%E8%97%8F%E5%B0%B8%E5%BA%8A%E7%AE%B1&rsv_idx=2'},
    {'title':'游轮成家庭游新宠','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E9%82%AE%E8%BD%AE%E6%88%90%E5%AE%B6%E5%BA%AD%E6%B8%B8%E6%96%B0%E5%AE%A0&rsv_idx=2'},
    {'title':'习近平会谈阿巴斯','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E4%B9%A0%E8%BF%91%E5%B9%B3%E4%BC%9A%E8%B0%88%E9%98%BF%E5%B7%B4%E6%96%AF&rsv_idx=2'},
    {'title':'日本影帝承认出轨','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%97%A5%E6%9C%AC%E5%BD%B1%E5%B8%9D%E6%89%BF%E8%AE%A4%E5%87%BA%E8%BD%A8&rsv_idx=2'},
    {'title':'女子16万买内衣','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A5%B3%E5%AD%9016%E4%B8%87%E4%B9%B0%E5%86%85%E8%A1%A3&rsv_idx=2'},
    {'title':'河南打击涉黑团伙','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%B2%B3%E5%8D%97%E6%89%93%E5%87%BB%E6%B6%89%E9%BB%91%E5%9B%A2%E4%BC%99&rsv_idx=2'},
    {'title':'家里进贼短信报警','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%AE%B6%E9%87%8C%E8%BF%9B%E8%B4%BC%E7%9F%AD%E4%BF%A1%E6%8A%A5%E8%AD%A6&rsv_idx=2'},
    {'title':'山西侦破盗掘古墓','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%B1%B1%E8%A5%BF%E4%BE%A6%E7%A0%B4%E7%9B%97%E6%8E%98%E5%8F%A4%E5%A2%93&rsv_idx=2'},
]}
var realTimeHtspots03 ={'data':[
    {'title':'女艺人上朝鲜节目','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A5%B3%E8%89%BA%E4%BA%BA%E4%B8%8A%E6%9C%9D%E9%B2%9C%E8%8A%82%E7%9B%AE&rsv_idx=2'},
    {'title':'手镯事件成功和解','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%89%8B%E9%95%AF%E4%BA%8B%E4%BB%B6%E6%88%90%E5%8A%9F%E5%92%8C%E8%A7%A3&rsv_idx=2'},
    {'title':'交警跪地求助老人','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E4%BA%A4%E8%AD%A6%E8%B7%AA%E5%9C%B0%E6%95%91%E5%8A%A9%E8%80%81%E4%BA%BA&rsv_idx=2'},
    {'title':'舒淇抱娃自侃搬货','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E8%88%92%E6%B7%87%E6%8A%B1%E5%A8%83%E8%87%AA%E4%BE%83%E6%90%AC%E8%B4%A7&rsv_idx=2'},
    {'title':'张天爱延误谁机场','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%BB%B6%E8%AF%AF%E7%9D%A1%E6%9C%BA%E5%9C%BA&rsv_idx=2'},
    {'title':'世界最大魔方比赛','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E4%B8%96%E7%95%8C%E6%9C%80%E5%A4%A7%E9%AD%94%E6%96%B9%E6%AF%94%E8%B5%9B&rsv_idx=2'},
    {'title':'取27个隐形眼镜','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%8F%9627%E4%B8%AA%E9%9A%90%E5%BD%A2%E7%9C%BC%E9%95%9C&rsv_idx=2'},
    {'title':'女婿查岳父婚外情','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A5%B3%E5%A9%BF%E6%9F%A5%E5%B2%B3%E7%88%B6%E5%A9%9A%E5%A4%96%E6%83%85&rsv_idx=2'},
    {'title':'外卖送上高铁','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%A4%96%E5%8D%96%E9%80%81%E4%B8%8A%E9%AB%98%E9%93%81&rsv_idx=2'},
    {'title':'亚投行获最高评级','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E4%BA%9A%E6%8A%95%E8%A1%8C%E8%8E%B7%E6%9C%80%E9%AB%98%E8%AF%84%E7%BA%A7&rsv_idx=2'},
    {'title':'金融传销猖獗','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E9%87%91%E8%9E%8D%E4%BC%A0%E9%94%80%E7%8C%96%E7%8D%97&rsv_idx=2'},
    {'title':'老人被撞拒要赔偿','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E8%80%81%E4%BA%BA%E8%A2%AB%E6%92%9E%E6%8B%92%E8%A6%81%E8%B5%94%E5%81%BF&rsv_idx=2'},
    {'title':'勒令毒贩像鸡道歉','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E5%8B%92%E4%BB%A4%E6%AF%92%E8%B4%A9%E5%90%91%E9%B8%A1%E9%81%93%E6%AD%89&rsv_idx=2'},
    {'title':'新加坡扩空军基地','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%89%A9%E7%A9%BA%E5%86%9B%E5%9F%BA%E5%9C%B0&rsv_idx=2'},
    {'title':'西乡沃尔玛砍人','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E8%A5%BF%E4%B9%A1%E6%B2%83%E5%B0%94%E7%8E%9B%E7%A0%8D%E4%BA%BA&rsv_idx=2'},
    {'title':'曝蒲巴甲梁洁恋情','state':'old','url':'https://www.baidu.com/s?cl=3&tn=baidutop10&fr=top1000&wd=%E6%9B%9D%E8%92%B2%E5%B7%B4%E7%94%B2%E6%A2%81%E6%B4%81%E6%81%8B%E6%83%85&rsv_idx=2'},
]}
// 全局变量
var keepContentHeight;
var hotPointNews = [realTimeHtspots01,realTimeHtspots02,realTimeHtspots03];
var dropdown=false;
var boxA;
var boxB;
var boxA03;
// 加载背景图数据事件
//新闻数据
var newsData ={'data':[
    {'type':'1','title':'切尔西官方宣布签莫拉塔拉协议','img01':'img/news/0001.jpg','from':'腾讯体育','time':'07-20 01:57','hot':'true','url':'http://sports.qq.com/a/20170720/001226.htm'},
    {'type':'1','title':'李小鹏娇妻晒美照 网友却纷纷因为这个心疼他','img01':'img/news/0002.png','from':'中国日报网','time':'07-18 14:36','hot':'flase','url':'http://ent.chinadaily.com.cn/2017-07/18/content_30155039.htm'},
    {'type':'2','title':'她为救胡歌而离世，胡歌用她的名字捐了30所希望小学','img01':'img/news/0301.jpeg','img02':'img/news/0302.jpeg','img03':'img/news/0303.jpeg','from':'搜狐旅游','time':'07-18 16:32','hot':'flase','url':'http://travel.sohu.com/20170718/n502415834.shtml'},
    {'type':'2','title':'农村小伙去相亲24灯全灭，被当众羞辱！说完家世后','img01':'img/news/0401.jpeg','img02':'img/news/0402.jpeg','img03':'img/news/0403.jpeg','from':'搜狐时尚','time':'07-19 19:39','hot':'true','url':'http://fashion.sohu.com/20170719/n502814020.shtml'},
    {'type':'2','title':'加拿大18岁少女“精灵姐姐”惊为天人','img01':'img/news/0501.jpeg','img02':'img/news/0502.jpeg','img03':'img/news/0503.jpeg','from':'中国日报网','time':'07-19 14:19','hot':'flase','url':'http://ent.chinadaily.com.cn/2017-07/19/content_30171484.htm'},
    {'type':'2','title':'uber特斯拉都和特朗普扯上关系为何人们只抵制uber','img01':'img/news/0601.jpeg','img02':'img/news/0602.jpeg','img03':'img/news/0603.PNG','from':'cnbeta','time':'','hot':'flase','url':'http://www.cnbeta.com/articles/584063.htm'},
    {'type':'2','title':'李冰冰遭身材傲人女翻译抢镜表情亮了 网友：眼神能杀了对方','img01':'img/news/0701.jpeg','img02':'img/news/0702.jpeg','img03':'img/news/0703.jpeg','from':'前瞻网','time':'07-19 10:52','hot':'flase','url':'http://ent.qianzhan.com/yc/detail/170719-a03ba637.html'},
    {'type':'2','title':'王思聪为何不敢撕景甜？这几张照片你就懂了','img01':'img/news/0801.jpeg','img02':'img/news/0802.jpeg','img03':'img/news/0803.jpeg','from':'比特网','time':'07-19 09:12','hot':'flase','url':'http://net.chinabyte.com/hot/210/14226710.shtml'},
    {'type':'2','title':'史上最牛空气雨伞，没有伞布也能遮雨','img01':'img/news/0901.jpeg','img02':'img/news/0902.PNG','img03':'img/news/0903.jpeg','from':'凤凰公益','time':'07-19 11:27','hot':'flase','url':'http://gongyi.ifeng.com/a/20170719/44653202_0.shtml'},
    {'type':'2','title':'医生从她眼里取出27层隐形眼镜！一直担忧的事情还是发生了','img01':'img/news/1001.jpeg','img02':'img/news/1002.jpeg','img03':'img/news/1003.jpeg','from':'搜狐教育','time':'07-18 22:00','hot':'flase','url':'http://learning.sohu.com/20170718/n502537450.shtml'},
    {'type':'2','title':'《火影忍者》比辉夜更强大的神明即将出现','img01':'img/news/1101.jpeg','img02':'img/news/1102.jpeg','img03':'img/news/1103.jpeg','from':'中国日报网','time':'07-18 08:11','hot':'flase','url':'http://cnews.chinadaily.com.cn/2017-07/18/content_30149357.htm'},
    {'type':'2','title':'岛国人民的神奇发明！彻底服了','img01':'img/news/1201.jpeg','img02':'img/news/1202.jpeg','img03':'img/news/1203.jpeg','from':'搜狐文化','time':'07-19 10:37','hot':'flase','url':'http://cul.sohu.com/20170719/n502628733.shtml'},
    {'type':'2','title':'1分钟短片告诉你，运动和不运动的区别','img01':'img/news/1301.jpeg','img02':'img/news/1302.jpeg','img03':'img/news/1303.jpeg','from':'搜狐体育','time':'07-19 12:30','hot':'true','url':'http://sports.sohu.com/20170719/n502648138.shtml'},
    {'type':'2','title':'揭开一个隐藏在《清明上河图》中的阴谋与杀局','img01':'img/news/1401.jpeg','img02':'img/news/1402.jpeg','img03':'img/news/1403.jpeg','from':'品科技','time':'07-17 19:34','hot':'flase','url':'http://news.pconline.com.cn/958/9583564.html'},
    {'type':'3','title':'滞印54年老兵回国后水土不服血压不稳','from':'凤凰视频','time':'','hot':'flase','url':'http://v.ifeng.com/vblog/others/201702/04e02ec7-90d3-d06f-2b06-0412f0397d95.shtml'},
    {'type':'3','title':'中国版“特斯拉”入京4天订单超3000 掀抢购狂潮','from':'搜狐汽车','time':'07-18 15:02','hot':'flase','url':'http://auto.sohu.com/20170718/n502372082.shtml'},
]}
//导航数据
var navData_information = {
    'title':'资讯消息',
    'data':[
    {'name':'腾讯网','img':'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/8694a4c27d1ed21b6ccc7ceea76eddc451da3fb7.jpg','url':'http://www.qq.com/'},
    {'name':'新浪网','img':'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/574e9258d109b3dea9e8b663c6bf6c81800a4c61.jpg','url':'http://www.sina.com.cn/'},
    {'name':'微博','img':'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/fd039245d688d43fd9f3c3f9771ed21b0ef43b66.jpg','url':'http://www.weibo.com/'},
    {'name':'搜狐网','img':'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/1c950a7b02087bf4b87605e2f8d3572c11dfcf27.jpg','url':'http://www.sohu.com/'},
    {'name':'网易','img':'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/d53f8794a4c27d1eb3bf69cf11d5ad6eddc4381b.jpg','url':'http://www.163.com/'},
    {'name':'光明网','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/4afbfbedab64034ffc54900da5c379310a551d1b.jpg','url':'http://www.gmw.cn/'},
    {'name':'央视网','img':'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/7a899e510fb30f2434cdbe08c295d143ad4b0361.jpg','url':'http://www.cntv.cn/'},
    {'name':'人民网','img':'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/2cf5e0fe9925bc31755b539354df8db1cb1370b2.jpg','url':'http://www.people.com.cn/'},
    {'name':'中国网','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/b21c8701a18b87d6832bf9140d0828381f30fd54.jpg','url':'http://www.china.com.cn/'},
    {'name':'中国日报','img':'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/b64543a98226cffc912cedb9b3014a90f603eab3.jpg','url':'http://www.chinadaily.com.cn/'},
    {'name':'凤凰网','img':'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/caef76094b36acaf2bb6c4f776d98d1001e99c62.jpg','url':'http://www.ifeng.com/'},
    {'name':'新华网','img':'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/3b292df5e0fe992594643b5b3ea85edf8db17154.jpg','url':'http://www.xinhuanet.com/'},
    {'name':'中关村在线','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/279759ee3d6d55fb7653242d67224f4a20a4dd20.jpg','url':'http://www.zol.com.cn/'},
    {'name':'虎扑体育','img':'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/50da81cb39dbb6fd3833b72d0324ab18972b3754.jpg','url':'http://www.hupu.com/'},
    {'name':'汽车之家','img':'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/d043ad4bd11373f0ff573d94ae0f4bfbfbed0454.jpg','url':'http://www.autohome.com.cn/'},
    {'name':'雪球','img':'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/a8014c086e061d95a510653371f40ad162d9ca63.jpg','url':'http://www.xueqiu.com/'},]

}
var navData_entertainment = {
    'title':'娱乐休闲',
    'data':[
    {'name':'爱奇艺','img':'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/0d338744ebf81a4c8a5ebec2dd2a6059252da649.jpg','url':'http://www.iqiyi.com/'},
    {'name':'优酷','img':'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/838ba61ea8d3fd1f030cf0313a4e251f95ca5fb7.jpg','url':'http://www.youku.com/'},
    {'name':'土豆','img':'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/9825bc315c6034a87576ea8ac113495409237620.jpg','url':'http://www.tudou.com/'},
    {'name':'4399','img':'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/6609c93d70cf3bc7d0989fe7db00baa1cd112a24.jpg','url':'http://www.4399.com/'},
    {'name':'乐视网','img':'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/6609c93d70cf3bc7d0989fe7db00baa1cd112a24.jpg','url':'http://www.letv.com/'},
    {'name':'3DMGAME','img':'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/d1a20cf431adcbef745f2c0da6af2edda3cc9f55.jpg','url':'http://www.3dmgame.com/'},
    {'name':'哔哩哔哩','img':'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/ac6eddc451da81cb51e3d1c65866d016092431b7.jpg','url':'http://www.bilibili.com/'},
    {'name':'起点中文网','img':'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/b17eca8065380cd7691bf0e6ab44ad34598281b0.jpg','url':'http://www.qidian.com/'},
    {'name':'17173','img':'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/11385343fbf2b211602fd745c08065380cd78ebc.jpg','url':'http://www.17173.com/'},
    {'name':'音悦台','img':'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/adaf2edda3cc7cd9857266d23301213fb80e9159.jpg','url':'http://www.yinyuetai.com/'},
    {'name':'多玩游戏','img':'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/6c224f4a20a44623c39bf7699222720e0cf3d76c.jpg','url':'http://www.duowan.com/'},
]}
var navData_shopping = {
    'title':'购物海购',
    'data':[
        {'name':'百度糯米','img':'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/8ad4b31c8701a18b24b74044942f07082838fe59.jpg','url':'http://www.nuomi.com/?cid=xsydh02'},
        {'name':'京东商城','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/d439b6003af33a87051f5211cc5c10385343b54f.jpg','url':'http://www.jd.com/'},
        {'name':'淘宝网','img':'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/18d8bc3eb13533fabcbcc125a2d3fd1f41345bb6.jpg','url':'http://www.taobao.com/'},
        {'name':'爱淘宝','img':'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/6159252dd42a2834d6f7640051b5c9ea15cebf6c.jpg','url':'http://ai.taobao.com/?pid=mm_110502715_10024318_42370103'},
        {'name':'天猫超市','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/d439b6003af33a87053c5211cc5c10385343b56c.jpg','url':'http://chaoshi.tmall.com/activity/hub.htm?t=baiduvip2'},
        {'name':'唯品会','img':'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/342ac65c103853430ac4d52a9913b07eca8088b6.jpg','url':'http://www.vip.com/'},
        {'name':'当当网','img':'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/fcfaaf51f3deb48fad63f3d5fa1f3a292df578b6.jpg','url':'http://www.dangdang.com/'},
        {'name':'1号店','img':'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/1ad5ad6eddc451dae6a95ee0bcfd5266d0163259.jpg','url':'http://www.yihaodian.com/'},
        {'name':'苏宁易购','img':'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/359b033b5bb5c9eaf3f851e8df39b6003af3b3b6.jpg','url':'http://www.suning.com/'},
        {'name':'蘑菇街','img':'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/fcfaaf51f3deb48fad39f3d5fa1f3a292df5786c.jpg','url':'http://www.mogujie.com/'},
        {'name':'国美在线','img':'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/e1fe9925bc315c601ec539e487b1cb134954776c.jpg','url':'http://www.gome.com.cn/'},
        {'name':'聚美优品','img':'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/86d6277f9e2f07088f92780be324b899a901f222.jpg','url':'http://www.jumei.com/'},
        {'name':'有货网','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/d439b6003af33a8705325211cc5c10385343b55a.jpg','url':'http://www.yohobuy.com/'},
        {'name':'我买网','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/b21c8701a18b87d68312f9140d0828381f30fd6d.jpg','url':'http://www.womai.com/index-0-0.htm'},
        {'name':'优购网','img':'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/f603918fa0ec08faee5041ac53ee3d6d55fbda6d.jpg','url':'http://www.yougou.com/'},
        {'name':'折800','img':'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/f2deb48f8c5494eed3215d1227f5e0fe99257ebd.jpg','url':'http://www.zhe800.com/'},
        {'name':'美丽说','img':'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/80cb39dbb6fd5266bb756e1fa118972bd407365a.jpg','url':'http://www.meilishuo.com/'},
        {'name':'丽芙家居','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/c2cec3fdfc0392458ab6b3048d94a4c27d1e25bd.jpg','url':'http://www.lifevc.com/'},
    ]}
var navData_live = {
    'title':'生活周边',
    'data':[
    {'name':'大众点评','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/dc54564e9258d10987e7fbb9db58ccbf6c814db0.jpg','url':'http://www.dianping.com/'},
    {'name':'12306','img':'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/1f178a82b9014a90656014b6a3773912b31bee5b.jpg','url':'http://www.12306.cn/'},
    {'name':'智联招聘','img':'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/a686c9177f3e6709855517f431c79f3df8dc5567.jpg','url':'http://www.zhaopin.com/'},
    {'name':'天涯社区','img':'https://ss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/0b7b02087bf40ad1d1ba95e85d2c11dfa9ecce5b.jpg','url':'http://www.tianya.cn/'},
    {'name':'赶集网','img':'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/0b46f21fbe096b6323470c5b06338744ebf8ac5b.jpg','url':'http://www.ganji.com/'},
    {'name':'快递100','img':'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/f636afc379310a553ab28cffbd4543a982261022.jpg','url':'http://www.kuaidi100.com/'},
    {'name':'去哪儿网','img':'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/f9198618367adab4d746494881d4b31c8701e423.jpg','url':'http://www.qunar.com/'},
]}
var video = {
    'data01':[
        {'type_01':'movie','name':'龙珠超','value':'7.5','time':'','type_02':'动漫','stat':'46px','img':'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2945204150,1112555716&fm=58','url':'http://www.iqiyi.com/a_19rrhb5shh.html?vfm=2008_aldbd','textURL':'http://www.iqiyi.com/a_19rrhb5shh.html?vfm=2008_aldbd'},
        {'type_01':'movie','name':'欢乐颂','value':'7.0','time':'42全集','type_02':'电视剧','stat':'46px','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1646850645,3729037548&fm=58','url':'http://www.iqiyi.com/a_19rrhagj55.html?vfm=2008_aldbd','textURL':'http://www.iqiyi.com/a_19rrhagj55.html?vfm=2008_aldbd'},
        {'type_01':'video','name':'太想红！11名少年为持刀拍黑帮片被抓','time':'03:28','img':'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=302439458,1722463507&fm=58','url':'http://www.iqiyi.com/v_19rr7nc6oo.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nc6oo.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'美20岁女生“睡”14岁男孩被捕在中国会判刑吗','time':'02:09','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=498251974,2652752731&fm=58','url':'http://www.iqiyi.com/v_19rr7nel58.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nel58.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'极端分子乔装女人被抓 扮相非常辣眼睛','time':'02:14','img':'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4108482086,1902564916&fm=58','url':'http://www.iqiyi.com/v_19rr7nb51c.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nb51c.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'重型货车藏8具尸体30个病人这是要干什么？','time':'01:11','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2235672906,3612286857&fm=58','url':'http://www.iqiyi.com/v_19rr7nfmwg.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nfmwg.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'接受脑部手术时弹吉他 这名印度音乐家心真大','time':'00:36','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1845909685,3869049280&fm=58','url':'http://www.iqiyi.com/v_19rr7nc3f8.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nc3f8.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'最强嘻哈，小学生也开始杀马特','time':'02:05','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1474365598,2996021351&fm=58','url':'http://www.iqiyi.com/v_19rr7nfbbw.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nfbbw.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'曾经来中国领空嘚瑟的全死了比如它','time':'52:28','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2165116114,3547492114&fm=58','url':'http://www.iqiyi.com/v_19rr7n8zes.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7n8zes.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'昆仑决三亚站：马沙德高扫进攻战胜沃伦','time':'18:41','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1703332893,3871295055&fm=58','url':'http://www.iqiyi.com/v_19rr7nd2j8.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nd2j8.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'楚乔传pk醉玲珑谁是赢家','time':'04:14','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2452715545,3957322180&fm=58','url':'http://www.iqiyi.com/v_19rr7nd3l8.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nd3l8.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'中国又获一黑科技！超越美国，国人喜上眉笑了','time':'02:52','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=435586477,2761263641&fm=58','url':'http://www.iqiyi.com/v_19rr7n7how.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7n7how.html?vfm=f_109_bdxs'},
        {'type_01':'movie','name':'琅琊榜','value':'9.1','time':'54全集','type_02':'电视剧','stat':'60px','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2344287321,3665827361&fm=58','url':'http://www.iqiyi.com/a_19rrhc0u75.html?vfm=2008_aldbd','textURL':'http://www.iqiyi.com/a_19rrhc0u75.html?vfm=2008_aldbd'},
        ],
    'data02':[
        {'type_01':'movie','name':'极限挑战第二季','value':'5.5','time':'','type_02':'综艺','stat':'33px','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=302732662,463467167&fm=58','url':'http://www.iqiyi.com/a_19rrhahplt.html?vfm=2008_aldbd','textURL':'http://www.iqiyi.com/a_19rrhahplt.html?vfm=2008_aldbd'},
        {'type_01':'movie','name':'五亿探长雷诺传1:雷老虎','value':'7.6','time':'128:00','type_02':'电影','stat':'46px','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3735562207,1300547131&fm=58','url':'http://v.qq.com/cover/e/e7ho8gvzl4qs5hg.html?ptag=baidu_aladdin.movie','textURL':'http://v.qq.com/cover/e/e7ho8gvzl4qs5hg.html?ptag=baidu_aladdin.movie'},
        {'type_01':'video','name':'日本AV女拍片现场身亡 搭档用力过猛致死','time':'00:55','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1912027510,328036800&fm=58','url':'http://www.iqiyi.com/v_19rrifvqct.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rrifvqct.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'看胖妹跑步机上捡笔太痛苦','time':'01:46','img':'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1573813553,3376571575&fm=58','url':'http://www.iqiyi.com/v_19rr7ni8ok.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7ni8ok.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'小伙搞笑飙歌《2017天真热》','time':'03:54','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1231133526,2954003516&fm=58','url':'http://www.iqiyi.com/v_19rr7ni3so.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7ni3so.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'中国为何至今不造核动力航母？','time':'06:54','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1571497519,3795470747&fm=58','url':'http://www.iqiyi.com/v_19rr7n7w5k.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7n7w5k.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'普京自爆在克格勃工作期间曾用名','time':'03:59','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3573805125,1158702611&fm=58','url':'http://www.iqiyi.com/v_19rr7o0fes.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7o0fes.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'二个逗比搞笑翻唱《爱之初体验》也是醉了','time':'04:06','img':'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2169907367,3491508826&fm=58','url':'http://www.iqiyi.com/v_19rr7nf3p0.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nf3p0.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'盘点火星人的“兄弟情','time':'05:31','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1265854518,3379408342&fm=58','url':'http://www.iqiyi.com/v_19rr7nbdag.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nbdag.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'涛哥花血本撩小伙女友，被追出一条街','time':'05:31','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1265854518,3379408342&fm=58','url':'http://www.iqiyi.com/v_19rr7nazw4.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nazw4.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'《决战江桥》终极大结局[款娘]','time':'05:33','img':'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1823093822,4045257672&fm=58','url':'http://www.iqiyi.com/v_19rr7naqi4.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7nazw4.html?vfm=f_109_bdxs'},
        {'type_01':'video','name':'吓尿！奇葩的菜刀按摩居然受追捧？！','time':'05:53','img':'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3582202849,1834946642&fm=58','url':'http://www.iqiyi.com/v_19rr7naw70.html?vfm=f_109_bdxs','textURL':'http://www.iqiyi.com/v_19rr7naw70.html?vfm=f_109_bdxs'},
        {'type_01':'movie','name':'神话','value':'6.2','time':'114:10','type_02':'电影','stat':'46px','img':'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2500417920,1265120035&fm=58','url':'http://vip.1905.com/play/430549.shtml?__hz=55a7cf9c71f1c9c4','textURL':'http://vip.1905.com/play/430549.shtml?__hz=55a7cf9c71f1c9c4'},
    ]
}

function loadBGImg(obj){
    // 循环给DOM相对应的属性
    //如果字体全部都为深灰色 即为首次加载
    if ($('.contentHead li:nth-child(1)').css('color')=='rgb(51, 51, 51)' &&
        $('.contentHead li:nth-child(2)').css('color')=='rgb(51, 51, 51)' &&
        $('.contentHead li:nth-child(3)').css('color')=='rgb(51, 51, 51)'
    ){
        $.each(HDWallpapersHOt.backgroundImage,function (index,value) {//$代表数据
            $('#skinHotLeft div img').eq(index).attr('src',$(value).attr('url'))
            $('#skinHotLeft div span').eq(index).text($(value).attr('name'))
        })
    }
    // console.log($('.contentHead li:nth-child(1)').css('background-color'));
    // console.log($('.contentHead li:nth-child(2)').css('background-color'));
    // console.log($('.contentHead li:nth-child(3)').css('background-color'));
    // console.log($(obj).text());
    //如果tab底色为激活状态的蓝色，接加载第一个tab相对应的图片
    if ($(obj).text()=='热门'){
        $.each(HDWallpapersHOt.backgroundImage,function (index,value) {//$代表数据
            $('#skinHotLeft div img').eq(index).attr('src',$(value).attr('url'))
            $('#skinHotLeft div span').eq(index).text($(value).attr('name'))
        })
    }
    //如果tab底色为激活状态的蓝色，接加载第二个tab相对应的图片
    if ($(obj).text()=='游戏'){
        $.each(HDWallpapersGame.backgroundImage,function (index,value) {//$代表数据
            $('#skinGameLeft div img').eq(index).attr('src',$(value).attr('url'))
            $('#skinGameLeft div span').eq(index).text($(value).attr('name'))
        })
    }
    //如果tab底色为激活状态的蓝色，接加载第三个tab相对应的图片
    if ($(obj).text()=='卡通'){
        // console.log($(value).attr('name'));
        $.each(HDWallpapersCatoon.backgroundImage,function (index,value) {//$代表数据
            $('#skinCatoonLeft div img').eq(index).attr('src',$(value).attr('url'))
            $('#skinCatoonLeft div span').eq(index).text($(value).attr('name'))
        })
    }
}
//换肤按钮事件
function skinBtn() {
    loadBGImg();
    $('#skinBtn').click(function (event) {
        $('#skinPeeler').slideDown(500);
        event.stopPropagation();
    })
    $('#skinPeeler').click(function (event) {
        $('#skinPeeler').slideDown(500);
        event.stopPropagation();
    })
    $('#skinHeader_right').click(function (event) {
        $('#skinPeeler').slideUp(500);
        event.stopPropagation();
    })
}
function showBG(obj) {
    var thisImg = $(obj).children('img').attr('src');//返回img/bg/01.jpg
    $('#logopreviewhot').css('background-position-y','-33px')
    $('#logopreviewGame').css('background-position-y','-33px')
    $('#logopreviewCatoon').css('background-position-y','-33px')
    $('.previewCentent img').attr('src',thisImg)
}
function hideBG() {
    $('#logopreview').css('background-position-y','0')
    $('#logopreviewGame').css('background-position-y','0')
    $('#logopreviewCatoon').css('background-position-y','0')
    $('.previewCentent img').attr('src','')
}
function clickBG(obj) {
    var BGwidth = document.body.clientWidth;
    var BGheight = document.body.clientHeight;
    var thisImg = $(obj).children('img').attr('src');//返回img/bg/01.jpg
    $('#BG').attr('src',thisImg);
    $('#BG').css({
        'width':'100%',
        'height':'auto',
    });
    //这里后面需要优化成切换CSS文件
}
// 消息按钮事件
function msgBtn() {
    $('#msgBtn').click(function (event) {
        $('#msgSetting').css('display','block');
        event.stopPropagation();
    })
    $('#msgSetting').click(function (event) {
        $('#msgSetting').css('display','block');
        event.stopPropagation();
    })
}
//body事件
function body() {
    $('body').click(function () {
        $('#skinPeeler').slideUp(500);
    })
    $('body').click(function () {
        $('#msgSetting').css('display','none');
    })
    $('body').click(function () {
        $('.content_setting_plane').slideUp(500);
    })
}
//更多产品hover事件
function moreProductShow() {
    $("#moreProductBtn").hover(function(){
        $("#moreProduct").css("display","block");
    },function(){
        $("#moreProduct").css("display","none");
    });
}
//设置hover事件
function settingShow() {
    $(".setting_parent").hover(function(){
        $(".setting_child").css("display","block");
    },function(){
        $(".setting_child").css("display","none");
    });
}
//个人账号hover事件
function accountShow() {
    $(".account").hover(function(){
        $(".account_child").css("display","block");
    },function(){
        $(".account_child").css("display","none");
    });
}
//换肤默认激活事件
function skinHeader_activate() {
    $('.skinCenter li').hide();//隐藏所有tab内容
    //显示列表中第一个tab按钮并显示为激活状态
    $(".skinHeader_left li:first").addClass("skinHeader_left_activate").show();
    $('.skinCenter li:nth-child(1)').show();//显示第一个tab的内容
}
//换肤tab切换点击事件
function activateArea() {
    $('.skinHeader_left li').click(function () {
        //去除所有tab的激活状态
        $('.skinHeader_left li').removeClass('skinHeader_left_activate');
        //被点击的tab加载激活状态的class
        $(this).addClass('skinHeader_left_activate');
        $(".skinCenter li").hide(); //隐藏全部标签内容
        //找到所属属性值来识别活跃选项卡和内容
        var activeTab = undefined;
        activeTab = $(this).index();//找到列表中自身所在的位置
        activeTab = activeTab+1;//因为li第一个不是0，而是1
        var activeTabStr = '.skinCenter li:nth-child('+activeTab.toString()+')';//表明选择li的位置
        $(activeTabStr).show();//显示对应tab的内容
        loadBGImg(this);
    })
}
//主内容默认激活事件
function contentHead_activate() {
    //显示列表中第一个tab按钮并显示为激活状态
    $(".contentHead li:nth-child(2)").addClass("contentHead_activate").show();
    $(".contentHead li:nth-child(2) a").addClass("contentHead_activate").show();
    $('.content li:nth-child(2)').hide();//隐藏所有tab内容
    $('.content li:nth-child(2)').show();//显示第一个tab的内容
}
//切换主内容tab
function activatecontent() {
    $('.contentHead li').click(function () {
        //去除所有tab的激活状态
        $('.contentHead li').removeClass('contentHead_activate');
        //由于第一个tab既有图又有字所以需要单独处理
        if($('.contentHead li:nth-child(1)').css('color')=='rgb(51, 51, 51)'){
            $('.myAttentionFont').css('color','#333');
            $('.myAttentionIcon').css('background-position-y','-108px');
        };
        //被点击的tab加载激活状态的class
        $(this).addClass('contentHead_activate');
        //由于第一个tab既有图又有字所以需要单独处理
        //console.log($('.contentHead li:nth-child(1)').css('color'));
        if ($('.contentHead li:nth-child(1)').css('color')=='rgb(255, 255, 255)'){
            // console.log('6')
            $('.myAttentionFont').css('color','#ffffff');
            $('.myAttentionIcon').css('background-position-y','-186px');
        }
        $(".content li").hide(); //隐藏全部标签内容
        //找到所属属性值来识别活跃选项卡和内容
        var activeTab = undefined;
        activeTab = $(this).index();//找到列表中自身所在的位置
        // console.log(activeTab);
        activeTab = activeTab+1;//因为li第一个不是0，而是1
        var activeTabStr = '.content li:nth-child('+activeTab.toString()+')';//表明选择li的位置
        $(activeTabStr).show();//显示对应tab的内容
        if (activeTab==2){
            loadNewsFlash(hotPointNews[0]);
        }
        changeCententTab();
    })
}
//主内容设置面板
function content_setting() {
    $('.content_setting').click(function (event) {
        $('.content_setting_plane').slideToggle(500);
        event.stopPropagation();
    })
}
// 鼠标滚动事件
function mouseScroll() {
    window.onscroll = function () {
        dropdown =true;
        changeContent();
        newsWaterFall();
        showSearchTop();
        goTop();
    }
}
//点击内容下拉事件
function cilckDown() {
    $('.contentFoot').click(function () {
        dropdown =true;
        changeContent();
    })
}
//下拉或滚动时改变内容样式
function  changeContent() {
    // 在第1个tab按时
    if ($('.contentHead li:nth-child(1) a').css('color')=='rgb(255, 255, 255)'){
        $('.contentFoot').hide();
        $('.foot').show();
        $('.foot').css('position','absolute');
        $('.foot').css('bottom','130px');
        $('.main').css('height','100%');
        $('.video').css('overflow-y','visible');
        // $('.foot').css('top','-2');
    }
    // 在第2个tab按时
    if ($('.contentHead li:nth-child(2)').css('color')=='rgb(255, 255, 255)'){

        $('.main').css('height','100%');
        $('.foot').css('position','absolute');
        $('.foot').css('top','-2');
        $('.contentFoot').hide();
        $('.foot').hide();
        $('.video').css('overflow-y','visible');
        newsWaterFall();
    }
    // 在第3个tab按时
    if ($('.contentHead li:nth-child(3)').css('color')=='rgb(255, 255, 255)'){
        $('.contentFoot').hide();
        $('.foot').show();
        $('.content').css('height','1370px');
        $('.recommendArea_bodyL').css('height','1370px');
        $('.main').css('height','1450px');
        $('.foot').css('position','relative');
        $('.foot').css('bottom','0');
        $('.video').css('overflow-y','visible');
        loadNavInfo();

    }
    // 在第4个tab按时
    if ($('.contentHead li:nth-child(4)').css('color')=='rgb(255, 255, 255)'){
        $('.main').css('height','100%');
        $('.foot').css('position','absolute');
        $('.foot').css('top','-2');
        $('.contentFoot').hide();
        $('.foot').hide();
        $('.video').css('overflow-y','visible');
        // console.log('adfad');
        loadVideoInfo();
    }
}
//滚动条到底即马上增加高度
function scrollSide() {
    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
        refreshHight();
        return true;
    }
    else {
        return false;
    }
}
//自动增加推荐页面高度
function refreshHight() {
    //如果激活的页面不是我的关注就执行 否则设置为默认值
    if ($('.contentHead li:nth-child(2)').css('color') == 'rgb(255, 255, 255)' ||
        $('.contentHead li:nth-child(4)').css('color') == 'rgb(255, 255, 255)'
    ) {
        var contentHeight = $('.content').height();
        contentHeight = contentHeight + 1000;
        // console.log(contentHeight);
        $('.content').css('height', contentHeight);
        $('.recommendArea_bodyL').css('height', contentHeight);
        keepContentHeight = contentHeight;
    }
    if($('.contentHead li:nth-child(4)').css('color') == 'rgb(255, 255, 255)'){
        // console.log('刷新高度');
        loadVideoInfo();
    }
}

//切换tab内容
function changeCententTab() {

   if(dropdown){
       //如果第一个页面为激活
       if ($('.contentHead li:nth-child(1) a').css('color')=='rgb(255, 255, 255)'){
           $('.content').css('height','365px');
           $('.contentFoot').hide();
           $('.foot').show();
           $('.main').css('height','100%');
           $('.foot').css({
               'bottom':'130px',
               'position':'absolute',
               'top':'-2',
           });
       }
       //如果第二个页面为激活
       //如果之前已经刷新过高度，就按照原来的高度，否则没有激活高度则自动激活并加重瀑布流内容

       if(keepContentHeight!=undefined) {
           if ($('.contentHead li:nth-child(2)').css('color') == 'rgb(255, 255, 255)') {
               $('.content').css('height', keepContentHeight);
               $('.recommendArea_bodyL').css('height', keepContentHeight);
               $('.main').css('height','100%');
               $('.contentFoot').hide();
               $('.foot').css('position','absolute');
               $('.foot').css('top','-2');
               $('.foot').hide();
           }
       }
       else {
           $('.main').css('height','100%');
           $('.foot').css('position','absolute');
           $('.foot').css('top','-2');
           $('.contentFoot').hide();
           $('.foot').hide();
           refreshHight();
           newsWaterFall();
       }
       //如果第三个页面为激活
       if ($('.contentHead li:nth-child(3)').css('color')=='rgb(255, 255, 255)') {
           $('.content').css('height','1370px');
           $('.recommendArea_bodyL').css('height','1370px');
           $('.contentFoot').hide();
           $('.foot').show();
           $('.main').css('height','1430px');
           $('.foot').css('position','relative');
           $('.foot').css('bottom','0');
           if(dropdown==true){
               loadNavInfo();
           }
       }
       if ($('.contentHead li:nth-child(4)').css('color')=='rgb(255, 255, 255)'){
           $('.content').css('height',keepContentHeight);
           $('.recommendArea_bodyL').css('height',keepContentHeight);
           $('.main').css('height','100%');
           $('.foot').css('position','absolute');
           $('.foot').css('top','-2');
           $('.contentFoot').hide();
           $('.foot').hide();
           refreshHight();
           loadVideoInfo();

       }
   }
   else {
       $('.content').css('height','365px');
   }
}

//加载简短新闻列表
function loadNewsFlash(obj) {
    $.each(obj.data,function (index,value) {//动态创建新闻列表对象
        var box =  $('<li>').addClass('news_list_li').appendTo($('#newsLists'));
        var Alabel = $('<a>').addClass('news_list_a').appendTo(box);
        Alabel.text($(value).attr('title'));
        Alabel.attr('href',$(value).attr('url'));
        Alabel.attr('target',"_blank");
        if ($(value).attr('state')=='new'){
            var spanLabel = $('<span>').addClass('newNewsIcon').appendTo(box);
            spanLabel.text('新')
        }
    })
    return true;
}
//刷出简短新闻列表
function upDateNewsList() {
    $('#uploadNews').click(function () {
        var listNum;
        if ($('#newsLists li:nth-child(1)').text() =='女子骂交警拘3天新'){
            listNum = hotPointNews[1];
        }
        if ($('#newsLists li:nth-child(1)').text() =='坐月子中暑身亡'){
            listNum = hotPointNews[2];
        }
        if ($('#newsLists li:nth-child(1)').text() =='女艺人上朝鲜节目'){
            listNum = hotPointNews[0];
        }
        // 清除所有原有列表
        var news_list =$('#newsLists li');
        $.each(news_list,function (index,value) {
            $(value).remove();
        })
        loadNewsFlash(listNum);
    })
}

// 加载A类型的新闻模板
function newsA(obj) {
    var box =  $('<div>').addClass('RAB_news_A').appendTo($('#recommendArea_bodyL'));
    var boxLeft = $('<div>').addClass('RAB_news_A_left').appendTo(box);
    var boxLeftA = $('<a>').addClass('RAB_news_A_a').appendTo(boxLeft);
    boxLeftA.attr('href',$(obj).attr('url'));
    boxLeftA.attr('target',"_blank");
    var boxLeftAImg = $('<img>').appendTo(boxLeftA);
    boxLeftAImg.attr('src',$(obj).attr('img01'));
    var boxRight = $('<div>').addClass('RAB_news_A_right').appendTo(box);
    var boxRightA = $('<a>').addClass('news_title').appendTo(boxRight);
    boxRightA.attr('href',$(obj).attr('url'));
    boxRightA.text($(obj).attr('title'));
    boxRightA.attr('target',"_blank");
    var boxRightBox =  $('<div>').addClass('RAR_news_info').appendTo(boxRight);
    var boxRightBoxA = $('<a>').addClass('newsInfo').appendTo(boxRightBox);
    boxRightBoxA.attr('href',$(obj).attr('url'));
    boxRightBoxA.text($(obj).attr('from'));
    boxRightBoxA.attr('target',"_blank");
    var boxRightBoxSpan = $('<span>').addClass('newsInfo').appendTo(boxRightBox);
    boxRightBoxSpan.text($(obj).attr('time'));
    if ($(obj).attr('hot')=='true') {
        var boxRightBoxSpan = $('<span>').addClass('newsInfoHot').appendTo(boxRightBox);
        boxRightBoxSpan.text('热点');
    }
}

// 加载B类型的新闻模板
function newsB(obj) {
    var box =  $('<div>').addClass('RAB_news_B').appendTo($('#recommendArea_bodyL'));
    var boxHead =  $('<div>').addClass('newsTitleArea').appendTo(box);
    var boxHeadA = $('<a>').addClass('news_title').appendTo(boxHead);
    boxHeadA.attr('href',$(obj).attr('url'));
    boxHeadA.text($(obj).attr('title'));
    var boxBody =  $('<a>').addClass('newsImgGroup').appendTo(box);
    boxBody.attr('href',$(obj).attr('url'))
    boxBody.attr('target',"_blank");
    var boxBodyImg01 = $('<img>').addClass('imgNews').appendTo(boxBody);
    boxBodyImg01.attr('src',$(obj).attr('img01'))
    var boxBodyImg02 = $('<img>').addClass('imgNews').appendTo(boxBody);
    boxBodyImg02.attr('src',$(obj).attr('img02'))
    var boxBodyImg03 = $('<img>').addClass('imgNews').appendTo(boxBody);
    boxBodyImg03.attr('src',$(obj).attr('img03'))
    var boxFoot =  $('<div>').addClass('RAR_news_info').appendTo(box);
    var boxFootA = $('<a>').addClass('newsInfo').appendTo(boxFoot);
    boxFootA.attr('href',$(obj).attr('url'));
    boxFootA.text($(obj).attr('from'));
    boxFootA.attr('target',"_blank");
    var boxFootSpan = $('<span>').addClass('newsInfo').appendTo(boxFoot);
    boxFootSpan.text($(obj).attr('time'));
    if ($(obj).attr('hot')=='true') {
        var boxFootHotSpan = $('<span>').addClass('newsInfoHot').appendTo(boxFoot);
        boxFootHotSpan.text('热点');
    }
}

// 加载C类型的新闻模板
function newsC(obj) {
    var box =  $('<div>').addClass('RAB_news_C').appendTo($('#recommendArea_bodyL'));
    var boxContent =  $('<div>').addClass('news_C_content').appendTo(box);
    var boxHeadA = $('<a>').addClass('news_title').appendTo(boxContent);
    boxHeadA.attr('href',$(obj).attr('url'));
    boxHeadA.text($(obj).attr('title'));
    boxHeadA.attr('target',"_blank");
    var boxFoot =  $('<div>').addClass('RAR_news_info').appendTo(boxContent);
    var boxFootA = $('<a>').addClass('newsInfo').appendTo(boxFoot);
    boxFootA.attr('href',$(obj).attr('url'));
    boxFootA.text($(obj).attr('from'));
    boxFootA.attr('target',"_blank");
    var boxFootSpan = $('<span>').addClass('newsInfo').appendTo(boxFoot);
    boxFootSpan.text($(obj).attr('time'));
    if ($(obj).attr('hot')=='true') {
        var boxFootHotSpan = $('<span>').addClass('newsInfoHot').appendTo(boxFoot);
        boxFootHotSpan.text('热点');
    }
}

//加载新闻列表
function loadNews(obj) {
    $.each(obj.data,function (index,value) {//动态创建新闻列表对象
        if (index<3) { /*只加载前两个新闻,第三个由于超出边界所有会被隐藏，但实际上默认加载了3个新闻*/
            if ($(value).attr('type')=='1'){/* 判断新闻模板类型*/
                newsA(value);
            }
            if ($(value).attr('type')=='2'){/* 判断新闻模板类型*/
                newsB(value);
            }
            if ($(value).attr('type')=='3'){/* 判断新闻模板类型*/
                newsC(value);
            }
        }
    })
    return true;
}

//判断加载哪一类型模板
function loadNewsmodle() {
    $.each(newsData.data,function (index,value) {//动态创建新闻列表对象
        if(index>3){
            if ($(value).attr('type')=='1'){/* 判断新闻模板类型*/
                newsA(value);
            }
            if ($(value).attr('type')=='2'){/* 判断新闻模板类型*/
                newsB(value);
            }
            if ($(value).attr('type')=='3'){/* 判断新闻模板类型*/
                newsC(value);
            }
        }
    })
}
//新闻瀑布流
function newsWaterFall() {
    //触底加载
    if(scrollSide()){
        loadNewsmodle();
    }
    //按下拉加载
    if($('.recommendArea_bodyL').height()>=1010 && dropdown==true){
        loadNewsmodle();
    }
}
//滚动下拉出现置顶搜索栏
function showSearchTop() {
    if($(document).scrollTop()>=208){
        $('.searchTop').css('display','block');
    }
    else {
        $('.searchTop').css('display','none');
    }
    if($(document).scrollTop()>=340){
        $('.RBR_positon02').css({
            'position':'fixed',
            'top':'80px',
        });
    }
    else {
        $('.RBR_positon02').css({
            'position':'absolute',
            'top':'0',
        });
    }
}


// 加载导航tab信息
function loadNavInfo() {
    if ($('.navigationArea').height()<1383) {
        //加载大模块
        var information = $('<div>').addClass('nav_B').appendTo($('.navigationArea'));
        var Entertainment = $('<div>').addClass('nav_D').appendTo($('.navigationArea'));
        var shopping = $('<div>').addClass('nav_B').appendTo($('.navigationArea'));
        var live = $('<div>').addClass('nav_D').appendTo($('.navigationArea'));
        //加载各模块标题
        var informationH1 = $('<h1>').addClass('nav_Title').appendTo(information);
        informationH1.text('资讯消息');
        var EntertainmentH1 = $('<h1>').addClass('nav_Title').appendTo(Entertainment);
        EntertainmentH1.text('娱乐休闲');
        var shoppingH1 = $('<h1>').addClass('nav_Title').appendTo(shopping);
        shoppingH1.text('购物海购');
        var liveH1 = $('<h1>').addClass('nav_Title').appendTo(live);
        liveH1.text('生活周边');

        //加载各模块内容
        $.each(navData_information.data, function (index, value) {
            var informationDiv = $('<div>').addClass('nav_item').appendTo(information);
            var informationA = $('<a>').addClass('nav_item_a').appendTo(informationDiv);
            var informationImg = $('<img>').addClass('nav_item_img').appendTo(informationA);
            informationA.attr('href', $(value).attr('url'));
            informationA.attr('title', $(value).attr('name'));
            informationA.attr('target', $(value).attr('_blank'));
            informationImg.attr('src', $(value).attr('img'))
        })
        $.each(navData_entertainment.data, function (index, value) {
            var EntertainmentDiv = $('<div>').addClass('nav_item').appendTo(Entertainment);
            var EntertainmentA = $('<a>').addClass('nav_item_a').appendTo(EntertainmentDiv);
            var EntertainmentImg = $('<img>').addClass('nav_item_img').appendTo(EntertainmentA);
            EntertainmentA.attr('href', $(value).attr('url'));
            EntertainmentA.attr('title', $(value).attr('name'));
            EntertainmentA.attr('target', $(value).attr('_blank'));
            EntertainmentImg.attr('src', $(value).attr('img'))
        })
        $.each(navData_shopping.data, function (index, value) {
            var shoppingDiv = $('<div>').addClass('nav_item').appendTo(shopping);
            var shoppingA = $('<a>').addClass('nav_item_a').appendTo(shoppingDiv);
            var shoppingImg = $('<img>').addClass('nav_item_img').appendTo(shoppingA);
            shoppingA.attr('href', $(value).attr('url'));
            shoppingA.attr('title', $(value).attr('name'));
            shoppingA.attr('target', $(value).attr('_blank'));
            shoppingImg.attr('src', $(value).attr('img'))
        })
        $.each(navData_live.data, function (index, value) {
            var liveDiv = $('<div>').addClass('nav_item').appendTo(live);
            var liveA = $('<a>').addClass('nav_item_a').appendTo(liveDiv);
            var liveImg = $('<img>').addClass('nav_item_img').appendTo(liveA);
            liveA.attr('href', $(value).attr('url'));
            liveA.attr('title', $(value).attr('name'));
            liveA.attr('target', $(value).attr('_blank'));
            liveImg.attr('src', $(value).attr('img'))
        })
    }
}
//加载视频具体内容
function loadVideoInfoDetail(obj01,obj02) {

    //加载具体能容
    $.each(obj01,function (index,value) {
        //如果0.1.12 就建立一个box
        if (index<2 || index==12){
            var boxA01 = $('<div>').addClass('video_item').appendTo(obj02);
            var VID01 = $('<div>').addClass('v_item_div01').appendTo(boxA01);
            var VID01a = $('<a>').addClass('v_item_div01_a').appendTo(VID01);
            VID01a.attr('href',$(value).attr('url'));
            VID01a.attr('target','_blank');
            var VID01img = $('<img>').addClass('v_item_div01_img').appendTo(VID01a);
            VID01img.attr('src',$(value).attr('img'));
            var VIM =  $('<i>').addClass('v_item_movie').appendTo(VID01);
            var VIMsel =  $('<i>').addClass('v_item_movie_sel').appendTo(VID01);
            $('<i>').addClass('moiveDel').appendTo(VIMsel);
            $('<i>').addClass('moiveConcern').appendTo(VIMsel);
            var VILC = $('<div>').addClass('v_item_lineColor').appendTo(VID01);
            var VIT = $('<span>').addClass('v_item_time').appendTo(VILC);
            VIT.text($(value).attr('time'));

            var VID02 = $('<div>').addClass('v_item_div02').appendTo(boxA01);
            var VID02text =  $('<div>').addClass('v_item_div02_text').appendTo(VID02);
            var VID02texta =  $('<a>').addClass('v_item_div02_text_a').appendTo(VID02text);
            VID02texta.attr('href',$(value).attr('textURL'));
            VID02texta.attr('target','_blank');
            VID02texta.text($(value).attr('name'));

            var VID02star =  $('<div>').addClass('v_item_div02_star').appendTo(VID02);
            var VID02spP =  $('<span>').addClass('v_item_div02_star_span_Parent').appendTo(VID02star);
            var VID02spC =  $('<span>').addClass('v_item_div02_star_span_Chirdren').appendTo(VID02spP);
            VID02spC.css('width',$(value).attr('stat'))
            var VID02spP02 =  $('<span>').appendTo(VID02star);
            VID02spP02.text($(value).attr('value'));
        }
        else{//否则（2.3 4 5 6 7 8 9 10 11）
            //如果是偶数建立一个box
            if(index%2==0){//偶数
                boxA03 = $('<div>').addClass('video_item').appendTo(obj02);
            }
            var VIC01 =  $('<div>').addClass('v_item_C').appendTo(boxA03);
            var VIC01_up =  $('<div>').addClass('v_item_C_up').appendTo(VIC01);
            var VIC01_up_a = $('<a>').addClass('v_item_C_img').appendTo(VIC01_up);
            VIC01_up_a.attr('href',$(value).attr('url'));
            VIC01_up_a.attr('target','_blank');
            var VIC01_up_img = $('<img>').appendTo(VIC01_up_a);
            VIC01_up_img.attr('src',$(value).attr('img'));
            var VIM_sel = $('<i>').addClass('v_item_movie_sel').appendTo(VIC01_up_a);
            $('<i>').addClass('moiveDel').appendTo(VIM_sel);
            $('<i>').addClass('moiveConcern').appendTo(VIM_sel);
            var VILC = $('<div>').addClass('v_item_lineColor').appendTo(VIC01_up_a);
            var VIT = $('<span>').addClass('v_item_time').appendTo(VILC);
            VIT.text($(value).attr('time'));

            var VIC01_down =  $('<div>').addClass('v_item_C_down').appendTo(VIC01);
            var VICdarea =  $('<div>').addClass('v_item_C_downArae').appendTo(VIC01_down);
            var VICDtext = $('<a>').addClass('v_item_C_downArae_a').appendTo(VICdarea);
            VICDtext.attr('href',$(value).attr('textURL'))
            VICDtext.attr('target','_blank')
            VICDtext.text($(value).attr('name'));

        }
    })
}

//加载视频模块
function loadVideoModle() {
    //加载大模块
    boxA = $('<div>').addClass('videoArea').appendTo("#video");
    boxB = $('<div>').addClass('videoArea').appendTo("#video");
    //加载子模块
    loadVideoInfoDetail(video.data01, boxA);
    loadVideoInfoDetail(video.data02, boxB);
}

function loadVideoInfo() {
    if(scrollSide()){
        loadVideoModle();
    }
    //按下拉加载
    if($('.video').children().length==1 && dropdown==true){
        loadVideoModle();
        loadVideoModle();
    }
}

//置顶功能
function goTop(){
    // 置顶按钮
    var topbtn = $('#goTop02');
    var timer = null;//定时器
    var backtop = document.body.scrollTop;//获取当前屏幕高度，即滚动的高度
    //如果当前滚动的高度大于或等于屏幕高度 则显示出来
    //显示/隐藏置顶按钮
    if (backtop >= 30) {
        topbtn.css('opacity','1');
    }
    else
    {
        topbtn.css('opacity','0');
    }
    //置顶运动
    topbtn.click(function () {
        timer = setInterval(function(){
            var backtop = document.body.scrollTop; //设置界面位置
            // var backtop = $(document).scrollTop(); //设置界面位置
            var speedtop = backtop/5;//改变匀速运动
            //document.body.scrollTop -= 100; //递减100 匀速动画
            document.body.scrollTop = backtop-speedtop; //不匀速运动，最后会减慢直到停止
            //当滑动到顶端的时候停止
            if (backtop==0) {
                clearInterval(timer);//但滑动到顶端时候停止函数执行
            }
        },30);//设置动画效果,30毫秒设置一次
    })
}

function myNav() {
    $('.myNav').click(function () {
        if($('.myNav').height()<=39) {
            $('.myNav').addClass('myFocusTabHeight');
            $('.myNavContent').slideDown(500);
            $('.mayNavTriangle').css('transform','rotate(90deg)');
        }
        else {
            $('.myNavContent').slideUp(500);
            $('.mayNavTriangle').css('transform','rotate(0deg)');
        }
    })
}
function myVideo() {
    $('.myVideo').click(function () {
        if($('.myVideo').height()<=39) {
            $('.myVideo').addClass('myFocusTabHeight');
            $('.myVideoContent').slideDown(500);
            $('.myVideoTriangle').css('transform','rotate(90deg)');
        }
        else {
            $('.myVideoContent').slideUp(500);
            $('.myVideoTriangle').css('transform','rotate(0deg)');
        }
    })
}

//拖拽功能
function dragBtn() {
    $('.CSP_main').DDSort({
        target: '.CSP div',		// 示例而用，默认即 li，
        delay: 50,         // 延时处理，默认为 50 ms，防止手抖点击 A 链接无效
        floatStyle: {
            'border': '1px solid #ccc',
            'background-color': '#fff'
        }
    });
}
function channelChange(obj) {
    var objText = obj.text();
    var objID = obj.attr('id');
    var newObj;
    // console.log((obj.parent()[0].className));
    if((obj.parent()[0].className)=='CSPL_body CSP'){
        newObj = $('<div>').addClass('CSP_rightli').appendTo('.CSPR_body').text(objText);
        newObj.attr('id',objID);
    }
    else{
        newObj = $('<div>').addClass('CSP_leftli').appendTo('.CSPL_body').text(objText);
        newObj.attr('id',objID);
    }
    obj.remove();
    event.stopPropagation();
}

//点击频道按钮
function channelBtn() {
    $('#CSP_recommend').click(function () {
        channelChange($('#CSP_recommend'));
    });
    $('#CSP_nav').click(function () {
        channelChange($('#CSP_nav'));
    });
    $('#CSP_video').click(function () {
        channelChange($('#CSP_video'));
    });
    $('#CSP_music').click(function () {
        channelChange($('#CSP_music'));
    });
    $('#CSP_sports').click(function () {
        channelChange($('#CSP_sports'));
    });
    $('#CSP_fiction').click(function () {
        channelChange($('#CSP_fiction'));
    });


}
