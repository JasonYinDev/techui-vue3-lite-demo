import{r as v,o as p,d as y,u as f,c as _,a as b,t as A,i as D,F as C,b as H,n as G,e as k,f as W,_ as E,$ as h,w as $,g as T}from"./index-d856743e.js";import{h as q}from"./api-87564056.js";import{_ as U,a as J}from"./externalLinks-c35f0047.js";const j="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==",X={__name:"echart-barHorizScroll",setup(x){const t=reactive({chartData:{yAxis:["任務A","任務B","任務C","任務較長名稱D","任務E","任務F","任務G","任務H","任務I"],color:[$c.cyl4,$c.orl5,$c.rel5],data:[69,96,35,26,96,32,52,22,72]},chartOption:{}}),r=computed(()=>new Array(t.chartData.data.length).fill(100)),o=s=>{let i=[];for(var c=0;c<s.length;c++)i.push({value:s[c],symbolPosition:"end"});return i},a=()=>{t.chartData.legend,t.chartData.colors,t.chartData.yAxis,t.chartData.data,t.chartOption.yAxis.data=t.chartData.yAxis,t.chartOption.series[0].data=t.chartData.data,t.chartOption.series[1].data=r,t.chartOption.series[2].data=o(t.chartData.data),l()},e=()=>{t.chartOption={update:!1,title:{show:!1,textStyle:{color:$c.cbl5,fontSize:16,fontWeight:"normal"}},grid:{top:"15%",left:"18%",right:"12%",bottom:"5%"},tooltip:{show:!1},xAxis:{type:"value",min:0,max:100,axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},dataZoom:{yAxisIndex:0,show:!1,type:"slider",startValue:0,endValue:4},yAxis:{type:"category",inverse:!0,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,interval:0,margin:10,fontSize:12,width:50,lineHeight:14,overflow:"breakAll",fontWeight:"normal"},axisTick:{show:!1},data:[]},series:[{type:"bar",barWidth:"40%",animationDuration:2e3,itemStyle:{borderWidth:0,borderRadius:10,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:$c.cyl8},{offset:1,color:$c.cyl4}]}},label:{show:!1},data:[],z:0},{type:"bar",barWidth:"40%",barGap:"-100%",animation:!1,itemStyle:{borderWidth:0,borderRadius:5,color:"rgba(0,202,255,0.2)"},label:{show:!0,position:["101%","20%"],fontSize:14,fontWeight:"normal",formatter:s=>" "+t.chartData.data[s.dataIndex]+"%"},data:[],z:0},{type:"pictorialBar",animation:!0,animationDuration:3e3,symbol:j,symbolSize:[50,50],symbolOffset:[20,0],z:12,itemStyle:{color:"#fff"},data:[]}]},a()},{proxy:n}=getCtx(),l=()=>{n.$timer("dataScrollBarHorizC",()=>{let{data:s}=t.chartData,{dataZoom:i}=t.chartOption;i.endValue==s.length?(i.endValue=4,i.startValue=0):(i.endValue++,i.startValue++),t.chartOption.update=!0,l()},5e3)};return onMounted(()=>{e()}),onBeforeMount(()=>{n.$timer("dataScrollBarHorizC")}),(s,i)=>{const c=v("echartsInit");return p(),y(c,{chartOption:f(t).chartOption},null,8,["chartOption"])}}};const K={class:"echart-wrap-dashC"},Q={class:"total-digital"},Y={class:"desc"},tt={__name:"echart-pie",setup(x){const t=reactive({chartData:{legend:["軟件","硬件","服務","安全","廣告"],colors:[$c.bll5,$c.inl3,$c.aql3,$c.yel3,$c.orl3,$c.rel3],data:[325,252,323,183,120,43]},counter:{title:"费用总量",num:1723},chartOption:{}}),r=()=>{let{legend:a,colors:e,data:n}=t.chartData,l=[];a.forEach((s,i)=>{l.push({value:n[i],name:a[i],itemStyle:{color:e[i]}})}),t.chartOption.series[0].data=l,t.chartOption.legend.data=a},o=()=>{t.chartOption={update:!1,title:{show:!1,text:"",x:"center",top:"32%",textStyle:{color:$c.bll5,fontSize:24,fontWeight:"bold",lineHeight:30}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",show:!0,right:"20",top:"22%",data:[],formatter:a=>{let e;for(let n=0;n<t.chartData.data.length;n++)t.chartData.legend[n]==a&&(e=t.chartData.data[n]);return"{a|"+a+"} {b|"+e+"}"},textStyle:{rich:{a:{fontSize:14,color:$c.bll5,padding:10},b:{fontSize:16,color:$c.cyl5}}}},series:[{name:"数据类别",type:"pie",radius:["55%","80%"],center:["30%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"outside"},itemStyle:{borderRadius:10,borderColor:$c.bll9,borderWidth:5},emphasis:{label:{show:!1,fontSize:"20",color:$c.gyd5}},labelLine:{show:!1},data:[]}]},r()};return onMounted(()=>{o()}),(a,e)=>{const n=v("DigitalTransform"),l=v("echartsInit");return p(),_("div",K,[b("div",Q,[b("span",Y,A(f(t).counter.title),1),D(n,{class:"counter",value:f(t).counter.num,interval:1e3,dislocation:!1},null,8,["value"])]),D(l,{chartOption:f(t).chartOption},null,8,["chartOption"])])}}},at={__name:"echart-gaugeTriple",setup(x){const t=reactive({chartData:{title:"任務完成情況",legend:["開發任務1","採購任務2","銷售任務3"],colors:[$c.aql4,$c.cyl4,$c.cbl3],colorsD:[$c.aql8,$c.cyl8,$c.bll8],data:[72,14,36],radius:["60%","75%","60%"],position:[["17%","55%"],["50%","55%"],["83%","55%"]]},chartOption:{}}),r=()=>{const{legend:a,colors:e,colorsD:n,data:l,radius:s,position:i}=t.chartData;let c=[];a.forEach((u,m)=>{c.push({type:"gauge",startAngle:90,endAngle:-270,center:i[m],radius:s[m],pointer:{show:!1},title:{fontSize:14},itemStyle:{color:e[m],shadowColor:e[m]},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1,itemStyle:{}},detail:{width:50,height:14,borderColor:"inherit",borderRadius:20,borderWidth:0,formatter:function(S){return"{value|"+S.toFixed(0)+"}{unit|%}"},rich:{value:{fontSize:24,color:e[m],fontWeight:"bolder"},unit:{fontSize:12,color:$c.darken(e[m],1)}}},axisLine:{lineStyle:{color:[[1,$c.darken(e[m],4)]],width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:[{value:l[m],name:a[m],title:{color:$c.lighten(e[m],1),offsetCenter:["0%","30%"]},detail:{valueAnimation:!0,offsetCenter:["0","-30%"]}}]})}),t.chartOption.series=c},o=()=>{t.chartOption={update:!1,series:[]},r()};return onMounted(()=>{o()}),(a,e)=>{const n=v("echartsInit");return p(),y(n,{chartOption:f(t).chartOption},null,8,["chartOption"])}}},et="path://m569.52,440.01c18.46,31.99-4.71,71.99-41.58,71.99H48.05c-36.94,0-60-40.05-41.58-71.99L246.42,23.99c18.47-32.01,64.72-31.95,83.15,0l239.94,416.03h0Zm-281.52-86.01c-25.4,0-46,20.6-46,46s20.6,46,46,46,46-20.6,46-46-20.6-46-46-46Zm-43.67-165.35l7.42,136c.35,6.36,5.61,11.35,11.98,11.35h48.55c6.37,0,11.64-4.98,11.98-11.35l7.42-136c.38-6.87-5.1-12.65-11.98-12.65h-63.38c-6.88,0-12.36,5.78-11.98,12.65h0Z",P={icon:et};const ot={class:"map-counter-alt-wrap"},rt={class:"counter-item"},ct={class:"name"},nt={class:"unit"},st={class:"content"},lt={class:"num"},it={key:0,class:"plus"},pt={__name:"map-counter",setup(x){const t=reactive({counterList:[{name:"软件销售额",icon:"i carbon:ibm-z-cloud-mod-stack",num:13694,unit:"元",plus:218},{name:"硬件销售额",icon:"i carbon:chip",num:14558,unit:"元"},{name:"技术服务",icon:"i carbon:user-speaker",num:3962,unit:"元",plus:462},{name:"安全服务",icon:"i carbon:rule",num:5302,unit:"元",plus:775}]});return(r,o)=>{const a=v("DigitalTransform");return p(),_("div",ot,[(p(!0),_(C,null,H(f(t).counterList,(e,n)=>(p(),_("div",rt,[b("i",{class:G("icon "+e.icon)},null,2),b("div",ct,[k(A(e.name)+" ",1),b("span",nt,"("+A(e.unit)+")",1)]),b("div",st,[b("span",lt,[D(a,{class:"num",value:e.num,useGrouping:!0,interval:2e3},null,8,["value"]),e.plus?(p(),_("span",it,"+"+A(e.plus),1)):W("",!0)])])]))),256))])}}};const ht={class:"mapC-wrap"},dt={ref:"map",class:"full-map"},ut={__name:"echart-map",setup(x){const{proxy:t}=getCtx(),r=reactive({map:{},colors:{pin_A:h.cyl6,pin_B:h.cbl6,font:h.cbl3,fontHov:h.wh,mapBG_A:h.blA13,mapBG_B:h.blA18,mapBG_hov_A:h.cbA10,mapBG_hov_B:h.blA15,mapBD_A:h.cbA12,mapBD_B:h.cbA13,mapGlow:h.cbl7,visualMap:[h.fade("cbA13",.7),h.fade("blA19",.7)]},chartData:{alladcode:[],geoJson:{},dept:[{code:0,name:"liaoningMap"}],mapData:[],pointData:[],pinData:[],circleData:[],warningData:[],dangerData:[],sum:0,maxData:1e3,minData:0,maxPin:90,minPin:20,layoutCenter:["50%","53%"],layoutSize:"90%",visualMapPos:{right:"26.5%",bottom:"5%"}},chartInstance:"",chartOption:{update:!1},clickData:{show:!1,area:"北京",data:"325",info:"文字信息",x:120,y:120}}),{colors:o,chartData:a,chartOption:e}=r,n=()=>{r.chartData.geoJson.code=0,r.chartData.geoJson.name="liaoningMap",echarts.registerMap("liaoningMap",r.chartData.geoJson),r.chartInstance=echarts.init(t.$refs.map),l()},l=()=>{let c=[],u=[],m=[],S=[],O=[],z=[],B=0,R=[12,8,6,7,11,14],N=[13,5],V=[3];r.chartData.geoJson.features.forEach((d,w)=>{if(d.properties.name){let M=t.randomNumber(1,a.maxData/3),L=t.randomNumber(a.maxData/2,a.maxData);if(d.properties.center)if(R.includes(w)){let g={name:d.properties.name,value:[d.properties.center[0],d.properties.center[1],L],cityCode:parseInt(d.properties.adcode)};m.push(g),u.push(g)}else if(N.includes(w))O.push({name:d.properties.name,value:[d.properties.center[0],d.properties.center[1],"warning","区域数据触发异常告警"],cityCode:parseInt(d.properties.adcode)});else if(V.includes(w))z.push({name:d.properties.name,value:[d.properties.center[0],d.properties.center[1],"danger","区域数据触发危急告警"],cityCode:parseInt(d.properties.adcode)});else{M<100&&(M=0);let g={name:d.properties.name,value:[d.properties.center[0],d.properties.center[1],M],cityCode:parseInt(d.properties.adcode)};u.push(g),S.push(g)}B+=M}}),r.chartData.mapData=c,r.chartData.pointData=u,r.chartData.pinData=m,r.chartData.circleData=S,r.chartData.warningData=O,r.chartData.dangerData=z,r.chartData.sum=B,s()},s=c=>{c=r.chartData.dept[0];const{visualMapPos:u,layoutCenter:m,layoutSize:S}=r.chartData;let O={title:{show:!1,text:c.name,left:"center"},geo:{type:"map",map:c.name,roam:!0,scaleLimit:{min:.5,max:3},layoutCenter:m,layoutSize:S,zlevel:1,label:{show:!0,color:o.font,fontSize:12,formatter:z=>z.name},itemStyle:{borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:o.mapBD_A},{offset:1,color:o.mapBD_B}],!1),borderWidth:2,shadowColor:o.mapGlow,shadowOffsetY:0,shadowBlur:10,areaColor:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:h.fade(o.mapBG_A,.5)},{offset:1,color:h.fade(o.mapBG_B,.5)}]}},select:{label:{show:!0,color:o.fontHov,fontSize:14},itemStyle:{areaColor:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:h.lighten(o.mapBG_hov_A,.2)},{offset:1,color:h.lighten(o.mapBG_hov_B,.2)}]}}},emphasis:{label:{color:o.fontHov,fontSize:14,show:!0},itemStyle:{areaColor:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:h.fade(o.mapBG_hov_A,.5)},{offset:1,color:h.fade(o.mapBG_hov_B,.5)}]}}}},series:[]};for(let z in O)r.chartOption[z]=O[z];i()},i=c=>{const{mapData:u,pointData:m,pinData:S,circleData:O,warningData:z,dangerData:B,sum:R,dept:N,maxData:V,minData:d,maxPin:w,minPin:M}=a;let L=[];L.push({data:m,geoIndex:0,type:"map"},{symbolSize:5,label:{position:"center",align:"center",show:!1,color:o.font,fontSize:12,formatter:function(g){return g.data.name}},emphasis:{label:{show:!1,fontSize:14,color:o.fontHov,fontWeight:"bold"}},symbolOffset:[0,0],itemStyle:{color:"#fff"},name:"light",type:"scatter",coordinateSystem:"geo",zlevel:2,data:m},{type:"scatter",symbol:"circle",coordinateSystem:"geo",symbolOffset:[0,0],large:!0,label:{show:!1},emphasis:{label:{fontSize:14,color:o.fontHov,fontWeight:"bold"}},itemStyle:{color:o.pin_A},symbolSize:20,data:O,zlevel:2},{type:"scatter",symbol:"pin",coordinateSystem:"geo",symbolOffset:[0,0],large:!0,label:{show:!0,position:"inside",align:"center",color:h.wh,fontSize:14,formatter:g=>g.data.value[2].toString().length>4?(g.data.value[2]/1e4).toFixed(0)+"万":g.data.value[2]},emphasis:{label:{fontSize:18,color:o.fontHov,fontWeight:"bold"}},itemStyle:{color:{type:"radial",x:.3,y:.3,r:.5,colorStops:[{offset:0,color:o.pin_A},{offset:1,color:o.pin_B}],global:!1}},symbolSize:g=>{var I=(w-M)/(V-d),Z=w-I*d;return Z=w-I*V,I*g[2]+Z*1.3},data:S,zlevel:2},{type:"scatter",symbol:P.icon,coordinateSystem:"geo",symbolOffset:[0,-10],label:{show:!1},itemStyle:{color:{type:"radial",x:.3,y:.3,r:.5,colorStops:[{offset:0,color:h.yel1},{offset:1,color:h.yel6}],global:!1}},symbolSize:24,emphasis:{scale:1.5},data:z,zlevel:2},{type:"scatter",symbol:P.icon,coordinateSystem:"geo",symbolOffset:[0,-10],label:{show:!1},itemStyle:{color:{type:"radial",x:.3,y:.3,r:.5,colorStops:[{offset:0,color:h.rel3},{offset:1,color:h.rel5}],global:!1}},symbolSize:24,emphasis:{scale:1.5},data:B,zlevel:2}),r.chartOption.series=L,r.chartInstance.setOption(r.chartOption,!0)};return onMounted(()=>{q("/static/maps/","shenyangHK.json").then(c=>{console.log("mapRes",c),r.chartData.alladcode=c,r.chartData.geoJson=c,n()})}),(c,u)=>(p(),_("div",ht,[D(pt),b("div",dt,null,512)]))}},F=E(ut,[["__scopeId","data-v-49bbbd73"]]),mt={__name:"echart-sunburst",setup(x){getCtx();const t=reactive({fontColor:$c.wh,subFontColor:$c.cbl3,chartData:{title:"業務利潤佔比",colors:[$c.aql7,$c.cyl5],data:[{name:"軟件",children:[{name:"產品",value:123,children:[{name:"GIS系統",value:49},{name:"可視化",value:25},{name:"財務系統",value:11}]},{name:"定制",value:90,children:[{name:"業務系統",value:35},{name:"門戶",value:15}]}]},{name:"硬件",children:[{name:"服務器",value:230,children:[{name:"入門級",value:43},{name:"企業級",value:121}]},{name:"網管設備",value:55,children:[{name:"安全網關",value:23},{name:"路由器",value:12}]}]}],dataMax:300},chartOption:{},dataOri:[]}),{dataOri:r,fontColor:o,subFontColor:a}=toRefs(t),e=()=>{const{colors:l,data:s}=t.chartData;let i=[];i.push({type:"sunburst",data:s,radius:[20,"80%"],center:["53%","50%"],itemStyle:{borderRadius:7,borderWidth:2,borderColor:$c.bll9},label:{show:!0,color:o,fontSize:12,rotate:"tangential"},emphasis:{label:{show:!0,fontSize:"16",color:$c.wh,formatter:function(c){return c.name+`
`+c.value}}},levels:[{}]}),t.chartOption.series=i},n=()=>{const{dataMax:l,colors:s}=t.chartData;t.chartOption={update:!1,title:{text:"数据单位:万元 点击数据可下钻",subtext:"",left:40,bottom:0,textStyle:{color:a,fontSize:12,fontWeight:"normal"}},visualMap:{type:"continuous",left:0,bottom:0,min:0,max:l,inRange:{color:s},textStyle:{color:o}},series:[]},e()};return onMounted(()=>{n()}),(l,s)=>{const i=v("echartsInit");return p(),y(i,{chartOption:f(t).chartOption},null,8,["chartOption"])}}},ft={svg0:"path://M488.6 256.7L388 219V107.9c0-15-9.3-28.4-23.4-33.7l-96-36c-8.1-3.1-17.1-3.1-25.3 0l-96 36c-14.1 5.3-23.4 18.7-23.4 33.7V219L23.4 256.7C9.3 262 0 275.4 0 290.4v101.3c0 13.6 7.7 26.1 19.9 32.2l96 48c10.1 5.1 22.1 5.1 32.2 0L256 418l107.9 54c10.1 5.1 22.1 5.1 32.2 0l96-48c12.2-6.1 19.9-18.6 19.9-32.2V290.4c0-15-9.3-28.4-23.4-33.7zM16.5 403.8V295.1l107.2 46.5v115.8zm231 0l-107.2 53.6V341.6l107.2-46.5zm0-126.7l-115.5 50-115.5-50v-.2L131 234l107.6 39.6 8.9 3.3zm.3-19.7L195 239.6l-54.5-20.4V112.5L247.8 159zM140.5 94.5v-.1L256 51l115.5 43.3v.2l-115.5 50zM264.2 159l107.2-46.5v106.7L317 239.6l-52.8 17.8zm107.6 298.4l-107.2-53.6V295.1l107.2 46.5zm123.7-53.6l-107.2 53.6V341.6l107.2-46.5zm0-126.7l-115.5 50L264.5 277v-.2l8.9-3.3L381 234l114.5 42.9z",svg1:"path://M368 0H144c-26.51 0-48 21.49-48 48v416c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zm16 464c0 8.822-7.178 16-16 16H144c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h224c8.822 0 16 7.178 16 16v416zm128-358v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z",svg2:"path://M320 352h-4.7c-12.16 0-24 2.9-35.5 6.8a173.76 173.76 0 0 1-111.64 0c-11.48-3.9-23.29-6.78-35.42-6.78H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM32 480a96.1 96.1 0 0 1 96-96h4.74c6.92 0 14.92 1.62 25.16 5.09a205.75 205.75 0 0 0 132.16 0c10.31-3.49 18.33-5.11 25.24-5.11h4.7a96.1 96.1 0 0 1 96 96zm16-256a16 16 0 0 0 16-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 0 1-80 80h-32a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h96a112.14 112.14 0 0 0 112-112v-16C416 86.12 329.88 0 224 0S32 86.12 32 192v16a16 16 0 0 0 16 16zM224 96a95.57 95.57 0 0 1 71.23 159.76c0 .09.13.15.18.24H304a47.89 47.89 0 0 0 40.55-22.58C349 220.36 352 206.58 352 192a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a63.25 63.25 0 0 1 8.93-32A95.58 95.58 0 0 1 224 96z",svg3:"path://M272,240a16,16,0,1,0,16,16A16,16,0,0,0,272,240ZM466.5,83.68l-192-80A57.4,57.4,0,0,0,256.05,0a57.4,57.4,0,0,0-18.46,3.67l-192,80A47.93,47.93,0,0,0,16,128C16,326.5,130.5,463.72,237.5,508.32a48.12,48.12,0,0,0,36.91,0C360.09,472.61,496,349.3,496,128A48,48,0,0,0,466.5,83.68ZM262.13,478.77a16.1,16.1,0,0,1-12.32,0C152.61,438.27,48,311.21,48,128a15.9,15.9,0,0,1,9.9-14.76L249.76,33.27A30,30,0,0,1,256.05,32a30.64,30.64,0,0,1,6.14,1.21l192,80A16.1,16.1,0,0,1,464,128C464,338.91,331.93,449.68,262.13,478.77ZM384,224H371.88c-28.51,0-42.79-34.47-22.63-54.63l8.58-8.57a16,16,0,1,0-22.63-22.63l-8.57,8.58a31.32,31.32,0,0,1-22.4,9.43c-16.45,0-32.23-12.77-32.23-32.06V112a16,16,0,0,0-32,0v12.12c0,19.29-15.78,32.06-32.23,32.06a31.34,31.34,0,0,1-22.4-9.43l-8.57-8.58a16,16,0,0,0-22.63,22.63l8.58,8.57c20.16,20.16,5.88,54.63-22.63,54.63H128a16,16,0,0,0,0,32h12.12c28.51,0,42.79,34.47,22.63,54.63l-8.58,8.57a16,16,0,1,0,22.63,22.63l8.57-8.58a31.3,31.3,0,0,1,22.4-9.43c16.45,0,32.23,12.77,32.23,32.06V368a16,16,0,0,0,32,0V355.88c0-19.29,15.78-32.07,32.23-32.06a31.34,31.34,0,0,1,22.4,9.43l8.57,8.58a16,16,0,0,0,22.63-22.63l-8.58-8.57C329.09,290.47,343.37,256,371.88,256H384a16,16,0,0,0,0-32Zm-71.25,39.51A64.17,64.17,0,0,0,308,291.92c-1.23-.07-2.48-.1-3.73-.1a64.37,64.37,0,0,0-44.12,17.41c-1.48,1.37-2.87,2.81-4.19,4.29a64.18,64.18,0,0,0-48.15-21.7c-1.25,0-2.49,0-3.73.11A64.38,64.38,0,0,0,182.51,240,64.38,64.38,0,0,0,204,188.08c1.23.07,2.48.1,3.73.1A64.17,64.17,0,0,0,256,166.38a64.17,64.17,0,0,0,48.23,21.8c1.25,0,2.5,0,3.73-.1A64.38,64.38,0,0,0,329.49,240,64.11,64.11,0,0,0,312.75,263.51ZM240,208a16,16,0,1,0,16,16A16,16,0,0,0,240,208Z",svg4:"path://M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm16 336c0 8.82-7.18 16-16 16H48c-8.82 0-16-7.18-16-16V112c0-8.82 7.18-16 16-16h416c8.82 0 16 7.18 16 16v288zm-72-240h-16c-4.42 0-8 3.58-8 8v64.88c-9.45-5.5-20.28-8.88-32-8.88-35.35 0-64 28.65-64 64s28.65 64 64 64c11.72 0 22.55-3.38 32-8.88v.88c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V168c0-4.42-3.58-8-8-8zm-56 160c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zM196.97 165.13a8.007 8.007 0 0 0-7.47-5.13h-27.01c-3.31 0-6.28 2.04-7.47 5.13l-67.69 176C85.31 346.37 89.18 352 94.8 352h17.15c3.31 0 6.28-2.04 7.47-5.13L142.07 288h67.86l22.64 58.87a8.007 8.007 0 0 0 7.47 5.13h17.15c5.62 0 9.48-5.63 7.47-10.87l-67.69-176zM154.37 256L176 199.77 197.63 256h-43.26z",svg5:"path://M312 416h-80c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h80c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM64 240v96c0 8.84 8.19 16 18.29 16h219.43c10.1 0 18.29-7.16 18.29-16v-96c0-8.84-8.19-16-18.29-16H82.29C72.19 224 64 231.16 64 240zm32 16h192v64H96v-64zM72 96h112c4.42 0 8-3.58 8-8V72c0-4.42-3.58-8-8-8H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm0 64h112c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm297.9-62.02L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zm95.98 431.42c0 8.8-7.2 16-16 16H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01z",svg6:"path://M497.9 97.98L414.02 14.1c-9-9-21.19-14.1-33.89-14.1H176c-26.5.1-47.99 21.6-47.99 48.09V165.7c-5.97 0-11.94-1.68-24.13-5.03-1.7-.46-3.36-.66-4.96-.66-5.56 0-10.43 2.5-13.66 5.79-17.95 18.26-17.07 17.77-41.7 24.5-6.7 1.81-11.97 7.21-13.78 14.07-6.47 24.67-6.09 24.16-24.02 42.32-4.95 5.04-6.9 12.48-5.08 19.43 6.56 24.38 6.52 24.39 0 48.76-1.82 6.95.12 14.4 5.08 19.45 18 18.15 17.58 17.79 24.02 42.29 1.8 6.88 7.08 12.27 13.78 14.1 1.8.48 2.92.8 4.46 1.21V496c0 5.55 2.87 10.69 7.59 13.61 4.66 2.91 10.59 3.16 15.56.7l56.84-28.42 56.84 28.42c2.25 1.12 4.72 1.69 7.16 1.69h272c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM384.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zM33.28 316.68c5.7-22.3 5.7-30.23.01-52.39 15.65-16.2 19.56-22.98 25.63-45.06 21.57-6.13 28.06-9.92 43.88-25.69 9.8 2.62 16.82 4.15 25.21 4.15 8.28 0 15.25-1.49 25.19-4.16 15.56 15.51 22.49 19.58 43.86 25.68 5.98 21.95 9.71 28.63 25.65 45.07-5.77 22.45-5.76 30 0 52.4-15.62 16.17-19.55 22.96-25.61 44.96-14.63 3.92-24 7.36-37.25 19.36-9.94-4.53-20.78-6.89-31.85-6.89s-21.9 2.36-31.85 6.9c-13.18-11.88-22.56-15.34-37.23-19.33-5.97-21.89-9.72-28.57-25.64-45zm101.89 133.01c-4.5-2.25-9.81-2.25-14.31 0l-40.84 20.42V409.9c.12.12.19.17.31.29 3.75 3.82 8.68 5.79 13.64 5.79 3.5 0 7.02-.98 10.16-2.97 7.25-4.59 15.56-6.88 23.87-6.88s16.62 2.29 23.87 6.86c3.16 2.02 6.68 3.01 10.17 3.01 4.96 0 9.87-1.99 13.63-5.79.13-.13.21-.18.34-.32v60.22l-40.84-20.42zm344.84 14.32c0 8.8-7.2 16-16 16h-256V391.9c1.54-.4 2.65-.71 4.44-1.19 6.7-1.82 11.97-7.22 13.77-14.08 6.47-24.68 6.09-24.16 24.03-42.32 4.95-5.04 6.9-12.49 5.07-19.44-6.53-24.33-6.55-24.34 0-48.76 1.83-6.95-.12-14.4-5.07-19.45-18-18.15-17.58-17.79-24.03-42.29-1.8-6.87-7.07-12.27-13.75-14.09-24.23-6.57-23.89-6.23-41.72-24.52-2.94-2.97-6.78-4.52-10.74-5.16V48.09c0-8.8 7.2-16.09 16-16.09h176.03v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01z",svg7:"path://M336 32c-48.6 0-92.6 9-124.5 23.4-.9.4-51.5 21-51.5 56.6v16.7C76.1 132.2 0 163.4 0 208v192c0 44.2 78.8 80 176 80s176-35.8 176-80v-16.4c89.7-3.7 160-37.9 160-79.6V112c0-37-62.1-80-176-80zm-16 368c0 13.9-50.5 48-144 48S32 413.9 32 400v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V400zm0-96c0 13.9-50.5 48-144 48S32 317.9 32 304v-50.1c31.8 20.6 84.4 34.1 144 34.1s112.2-13.5 144-34.1V304zm-144-48c-81 0-146.7-21.5-146.7-48S95 160 176 160s146.7 21.5 146.7 48S257 256 176 256zm304 48c0 13.1-45 43.6-128 47.3v-64.1c52.8-2.2 99.1-14.6 128-33.3V304zm0-96c0 13.1-45.1 43.4-128 47.2V208c0-5.6-1.7-11-4.1-16.3 54.6-1.7 102.4-14.5 132.1-33.8V208zm-144-48c-7.3 0-14-.5-20.9-.9-36.9-21.7-85-28.2-115.6-30-6.3-5.3-10.1-11-10.1-17.1 0-26.5 65.7-48 146.7-48s146.7 21.5 146.7 48S417 160 336 160z"},_t={__name:"echart-hill",setup(x){const t=reactive({chartData:{xAxis:["軟件","硬件","服務","安全","廣告","專利","許可","投資"],colors:[$c.aql4,$c.cbl4,$c.aql3],data:[23,40,15,12,9,7,12,5],symbolSize:[[20,20],[18,20],[18,20],[18,20],[20,14],[16,20],[20,20],[20,20]]},chartOption:{}}),r=()=>{let{colors:a,xAxis:e,data:n,symbolSize:l}=t.chartData,s=[],i=[];n.forEach((c,u)=>{i.push({value:n[u],symbol:ft["svg"+u],symbolSize:l[u]})}),s.push({name:"hill",type:"pictorialBar",barCategoryGap:"-130%",symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",itemStyle:{opacity:.5},emphasis:{itemStyle:{opacity:1}},data:n,z:10},{name:"glyph",type:"pictorialBar",barGap:"-100%",symbolPosition:"end",symbolSize:50,symbolOffset:[0,"-120%"],data:i}),t.chartOption.series=s,t.chartOption.xAxis.data=e},o=()=>{const{colors:a}=t.chartData;t.chartOption={update:!1,title:{text:"单位:万元",right:0,top:0,textStyle:{fontSize:16,fontWeight:"normal"}},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+": "+e[0].value}},grid:{left:"5%",right:"8%",bottom:"8%",top:"25%",containLabel:!0},yAxis:{type:"value",splitNumber:3,axisLabel:{show:!1}},xAxis:{type:"category",boundaryGap:!0,data:[],axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},axisLabel:{align:"center"}},color:a,series:[]},r()};return onMounted(()=>{o()}),(a,e)=>{const n=v("echartsInit");return p(),y(n,{chartOption:f(t).chartOption},null,8,["chartOption"])}}},vt={__name:"echart-bar",setup(x){const t=reactive({chartData:{legend:["本地視頻會議","異地視頻會議"],xAxis:["十二月","一月","二月","三月","四月","五月","六月","七月","八月"],colors:[$c.bll4,$c.aql4,$c.ipl3,$c.cbl3],data:[[235,210,187,212,278,220,320,302],[68,121,34,56,23,120,132,101,134]]},chartOption:{}}),r=()=>{let a=t.chartData.legend,e=t.chartData.colors,n=t.chartData.xAxis,l=t.chartData.data,s=[];a.forEach((i,c)=>{s.push({name:a[c],type:"bar",label:{show:!1,position:"insideRight"},itemStyle:{color:e[c],borderRadius:5},data:l[c]})}),t.chartOption.series=s,t.chartOption.xAxis.data=n,t.chartOption.legend.data=a},o=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0,data:[],top:0,right:10},grid:{left:"2%",right:"5%",bottom:"5%",top:"25%",containLabel:!0},yAxis:{type:"value",splitNumber:3,axisLabel:{align:"right"}},xAxis:{type:"category",data:[],axisLabel:{align:"center"}},series:[]},r()};return onMounted(()=>{o()}),(a,e)=>{const n=v("echartsInit");return p(),y(n,{chartOption:f(t).chartOption},null,8,["chartOption"])}}},bt={__name:"echart-line",setup(x){const t=reactive({chartData:{legend:["本地","異地"],xAxis:["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12"],colors:[$c.aql4,$c.bll5,$c.ipl3,$c.cbl3],data:[[230,210,220,179,123,120,132,101,168,181,134,126,134,190],[301,334,390,330,300,240,235,210,187,212,278,220,320,302]]},chartOption:{}}),r=()=>{let a=t.chartData.legend,e=t.chartData.colors,n=t.chartData.xAxis,l=t.chartData.data,s=[];a.forEach((i,c)=>{s.push({name:a[c],type:"line",barWidth:15,label:{show:!1,position:"insideRight"},itemStyle:{color:e[c],borderRadius:5},smooth:!0,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(e[c],.9)},{offset:.8,color:$c.fade(e[c],.1)}],!1),shadowcolor:$c.fade(e[c],.3),shadowBlur:10},data:l[c]})}),t.chartOption.series=s,t.chartOption.xAxis.data=n,t.chartOption.legend.data=a},o=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0,data:[],top:"5",right:10},grid:{left:"5%",right:"5%",bottom:"5%",top:"15%",containLabel:!0},yAxis:{type:"value",axisLabel:{align:"right"}},xAxis:{type:"category",boundaryGap:!1,data:[],axisLabel:{interval:0,align:"center"}},series:[]},r()};return onMounted(()=>{o()}),(a,e)=>{const n=v("echartsInit");return p(),y(n,{chartOption:f(t).chartOption},null,8,["chartOption"])}}};const gt={class:"screenA-counterGrid"},yt={class:"inner-content"},xt={class:"block-title"},Dt={key:0},zt={class:"total"},At={__name:"counter-grid",setup(x){const t=reactive({arry:[{title:"軟件銷售額",icon:"i carbon:ibm-z-cloud-mod-stack",unit:"萬元",total:"1874"},{title:"硬件銷售額",icon:"i carbon:chip",unit:"萬元",total:"3276"},{title:"技術服務",icon:"i carbon:user-speaker",unit:"萬元",total:"315"},{title:"安全服務",icon:"i carbon:rule",unit:"萬元",total:"769"}]}),r=o=>{let a;return o==0?a="x":o==1?a="all":o==2?a=null:o==3&&(a="y"),{dur:3,opacity:.7,rotate:a}};return(o,a)=>{const e=v("DigitalTransform"),n=v("aYinTechBorderB3");return p(),_("div",gt,[(p(!0),_(C,null,H(f(t).arry,(l,s)=>(p(),y(n,{config:r(s),key:s},{default:$(()=>[b("div",yt,[b("div",xt,[k(A(l.title)+" ",1),l.unit?(p(),_("span",Dt,"("+A(l.unit)+")",1)):W("",!0)]),b("div",zt,[b("i",{class:G([l.icon,"icon"])},null,2),D(e,{class:"numbers",value:l.total,useGrouping:!0,interval:3e3},null,8,["value"])])])]),_:2},1032,["config"]))),128))])}}},St={__name:"echart-barHoriz",setup(x){const t=reactive({chartData:{legend:["收入","支出"],yAxis:["業務1","業務2","業務3","業務4","業務5","業務6"],colors:[$c.cbl4,$c.bll5],data:[[320,302,341,374,390,450],[-120,-132,-101,-134,-190,-230]]},chartOption:{}}),r=()=>{let{legend:a,colors:e,yAxis:n,data:l}=t.chartData,s=[];a.forEach((i,c)=>{s.push({name:a[c],type:"bar",barWidth:10,stack:"Total",label:{show:!0},emphasis:{focus:"series"},itemStyle:{color:$c.fade(e[c],.9),borderRadius:3},data:l[c]})}),t.chartOption.legend.data=a,t.chartOption.series=s,t.chartOption.yAxis.data=n},o=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{right:"10",top:"10"},grid:{left:"5%",right:"10%",bottom:"8%",top:"15%",containLabel:!0},xAxis:{type:"value",axisLabel:{align:"center",interval:0}},yAxis:{type:"category",axisTick:{show:!1},data:[],axisLabel:{formatter:"{value}",align:"right"}}},r()};return onMounted(()=>{o()}),(a,e)=>{const n=v("echartsInit");return p(),y(n,{chartOption:f(t).chartOption},null,8,["chartOption"])}}};const Ot={class:"screen1080C"},wt={class:"portlet-wrapper"},Mt={__name:"layout",setup(x){getCtx();const t={echartMap:F,echartGaugeTriple:at,echartPie:tt,echartBarHorizScroll:X,echartSunburst:mt,echartHill:_t,echartBar:vt,echartBarHoriz:St,echartLine:bt,counterGrid:At},r=reactive({systemTitleConfig:{width:1e3},panelTitleConfig:{scale:1.1},tabActive:0,configBLeft:{rotate:{y:8},transformOrigin:"right",view3d:!0,showShadow:!1,hoverDelay:0},configBCenter:{rotate:{x:30},transformOrigin:"bottom",view3d:!0,showShadow:!1,hoverDelay:0},configBRight:{rotate:{y:-8},transformOrigin:"left",view3d:!0,showShadow:!1,hoverDelay:0},areas:[{name:"left",portlets:[{id:"r1",title:"銷售情況",component:"echartBar",border:"blank"},{id:"r2",title:"任務完成情況",component:"echartGaugeTriple",border:"blank"},{id:"r3",title:"開支佔比",component:"echartSunburst",border:"blank"}]},{name:"right",portlets:[{id:"l2",title:"收支情況",component:"echartPie",border:"blank"},{id:"l3",title:"業務收益情況",component:"echartBarHorizScroll",border:"blank"},{id:"l1",title:"行業收入佔比",component:"echartHill",border:"blank"}]}]}),{systemTitleConfig:o,panelTitleConfig:a,areas:e}=toRefs(r);return onMounted(()=>{}),(n,l)=>{const s=v("panelTitleB1"),i=v("systemTitleA3");return p(),_("div",Ot,[D(U),D(J),(p(!0),_(C,null,H(f(e),c=>(p(),_("div",{class:G(`area-box area-${c.name}`)},[(p(!0),_(C,null,H(c.portlets,(u,m)=>(p(),_("div",wt,[u.border?(p(),y(T(u.border),{key:0},{default:$(()=>[u.hideTitle?W("",!0):(p(),y(s,{key:0,config:f(a)},{default:$(()=>[k(A(u.title),1)]),_:2},1032,["config"])),(p(),y(T(t[u.component]))),b("i",null,A(u.component),1)]),_:2},1024)):(p(),_(C,{key:1},[(p(),y(T(u.component))),b("i",null,A(u.component),1)],64))]))),256))],2))),256)),D(i,{config:f(o)},{default:$(()=>[k("TechUI數據可視化成型工具")]),_:1},8,["config"]),D(F)])}}},Vt={__name:"dashboardC-index",setup(x){const t=reactive({APConfig:{height:930,backgroundFillAll:!0,backgroundName:"A1",chartCount:6}});return(r,o)=>{const a=v("adaptivePanel");return p(),y(a,{config:f(t).APConfig},{default:$(()=>[D(Mt)]),_:1},8,["config"])}}};export{Vt as default};