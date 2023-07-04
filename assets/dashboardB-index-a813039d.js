import{r as m,o as d,d as g,u as p,c as _,a as A,t as L,i as y,F as S,b as $,w as b,n as T,e as B,f as M,g as w}from"./index-d856743e.js";import{_ as C,a as k}from"./externalLinks-c35f0047.js";const z={__name:"echart-barHoriz",setup(f){const t=reactive({chartData:{legend:["income","expenses"],yAxis:["Business 1","Business 2","Business 3","Business 4","Business 5","Business 6"],colors:[$c.cbl4,$c.bll5],data:[[320,302,341,374,390,450],[-120,-132,-101,-134,-190,-230]]},chartOption:{}}),l=()=>{let{legend:e,colors:a,yAxis:o,data:i}=t.chartData,r=[];e.forEach((s,n)=>{r.push({name:e[n],type:"bar",barWidth:10,stack:"Total",label:{color:$c.wh,show:!0},emphasis:{focus:"series"},itemStyle:{color:$c.fade(a[n],.9),borderRadius:3},data:i[n]})}),t.chartOption.legend.data=e,t.chartOption.series=r,t.chartOption.yAxis.data=o},h=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{left:"15",top:"5"},grid:{left:"5%",right:"10%",bottom:"8%",top:"15%",containLabel:!0},xAxis:{type:"value",axisLabel:{align:"center",interval:0}},yAxis:{type:"category",axisTick:{show:!1},data:[],axisLabel:{formatter:"{value}",align:"right"}}},l()};return onMounted(()=>{h()}),(e,a)=>{const o=m("echartsInit");return d(),g(o,{chartOption:p(t).chartOption},null,8,["chartOption"])}}},R={__name:"echart-bar",setup(f){const t=reactive({chartData:{legend:["Business A","Business B"],xAxis:["December","January","February","March","April","May","June","July","August"],colors:[$c.bll4,$c.aql4,$c.ipl3,$c.cbl3],data:[[235,210,187,212,278,220,320,302],[68,121,34,56,23,120,132,101,134]]},chartOption:{}}),l=()=>{let e=t.chartData.legend,a=t.chartData.colors,o=t.chartData.xAxis,i=t.chartData.data,r=[];e.forEach((s,n)=>{r.push({name:e[n],type:"bar",label:{show:!1,position:"insideRight"},itemStyle:{color:a[n],borderRadius:5},data:i[n]})}),t.chartOption.series=r,t.chartOption.xAxis.data=o},h=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[],top:"5",right:60},grid:{left:"5%",right:"5%",bottom:"5%",top:"20%",containLabel:!0},yAxis:{type:"value",axisLabel:{align:"right"}},xAxis:{type:"category",data:[],axisLabel:{align:"center"}},series:[]},l()};return onMounted(()=>{h()}),(e,a)=>{const o=m("echartsInit");return d(),g(o,{chartOption:p(t).chartOption},null,8,["chartOption"])}}},I={__name:"echart-line",setup(f){const t=reactive({chartData:{legend:["Local","Offsite"],xAxis:["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12"],colors:[$c.aql4,$c.bll5,$c.ipl3,$c.cbl3],data:[[230,210,220,179,123,120,132,101,168,181,134,126,134,190],[301,334,390,330,300,240,235,210,187,212,278,220,320,302]]},chartOption:{}}),l=()=>{let e=t.chartData.legend,a=t.chartData.colors,o=t.chartData.xAxis,i=t.chartData.data,r=[];e.forEach((s,n)=>{r.push({name:e[n],type:"line",barWidth:15,label:{show:!1,position:"insideRight"},itemStyle:{color:a[n],borderRadius:5},smooth:!0,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(a[n],.9)},{offset:.8,color:$c.fade(a[n],.1)}],!1),shadowcolor:$c.fade(a[n],.3),shadowBlur:10},data:i[n]})}),t.chartOption.series=r,t.chartOption.xAxis.data=o,t.chartOption.legend.data=e},h=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0,data:[],top:5,left:15},grid:{left:"5%",right:"5%",bottom:"5%",top:"20%",containLabel:!0},yAxis:{type:"value",axisLabel:{align:"right"}},xAxis:{type:"category",boundaryGap:!1,data:[],axisLabel:{interval:0,align:"center"}},series:[]},l()};return onMounted(()=>{h()}),(e,a)=>{const o=m("echartsInit");return d(),g(o,{chartOption:p(t).chartOption},null,8,["chartOption"])}}},W={__name:"echart-barLine",setup(f){const t=reactive({chartData:{legend:["Contract cost","Gross profit","Received payment","Invoiced","Gross profit margin %","Receipt rate %"],xAxis:["Data 1","Data 2","Data 3","Data 4","Data 5","Data 6","Data 7","Data 8","Data 9","Data 10","Data 11","Data 12","Data 13","Data 14","Data 15","Data 16","Data 17","Data 18","Data 19","Data 20","Data 21","Data 22","Data 23","Data 24"],colors:[$c.aql2,$c.acl6,$c.bil4,$c.ipl4,$c.rel4,$c.yel3],data:[[235,210,187,212,278,220,320,302,301,334,390,330,300,240,345,235,210,187,212,278,220,320,302,301,334,390,330,300,240,345],[22,76,13,20,35,30,20,9,13,10,50,15,88,50,85,22,76,13,20,35,60,20,9,13,10,80,15,88,50,85],[193,185,122,76,70,120,135,24,32,9,13,110,132,53,88,193,185,122,76,32,120,135,14,42,9,13,110,132,12,88],[35,10,22,9,13,10,32,15,0,93,85,22,76,13,20,35,10,0,9,13,10,32,15,0,93,85,22,76,13,20],[5,20,9,13,10,22,23,13,20,35,4,15,37,0,54,5,20,9,13,10,22,23,13,20,35,4,15,37,0,54],[35,0,15,58,0,0,20,9,13,10,85,22,76,13,20,35,0,15,58,0,0,20,9,13,10,85,22,76,13,20]]},chartOption:{}}),l=()=>{let{legend:e,colors:a,xAxis:o,data:i}=t.chartData,r=[],s=0,n=["Long contract name text Long contract name text A","Long contract name text Long contract name text B","Long contract name text Long contract name text C","Long contract name text Long contract name text D","Long contract name text Long contract name text E","Long contract name text Long contract name text F","Long contract name text Long contract name text G","Long contract name text Long contract name text H","Long contract name text Long contract name text I","Long contract name text Long contract name text J","Long contract name text Long contract name text K","Long contract name text Long contract name text L","Long contract name text Long contract name text M","Long contract name text Long contract name text N","Long contract name text Long contract name text O","Long contract name text Long contract name text P","Long contract name text Long contract name text Q","Long contract name text Long contract name text R","Long contract name text Long contract name text S","Long contract name text Long contract name text T","Long contract name text Long contract name text U","Long contract name text Long contract name text V","Long contract name text Long contract name text W","Long contract name text Long contract name text X","Long contract name text Long contract name text Y","Long contract name text Long contract name text Z"];o.forEach((x,c)=>{o[c]=n[c]}),e.forEach((x,c)=>{c>3&&(s=1),r.push({name:e[c],type:c>=e.length-2?"line":"bar",stack:c<2?"01":null,barWidth:c==0?20:15,label:{show:!1,position:"insideRight"},itemStyle:{color:$c.fade(a[c],.9),borderRadius:3},z:10-c,smooth:!0,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(a[c],.9)},{offset:.8,color:$c.fade(a[c],.1)}],!1),shadowcolor:$c.fade(a[c],.3),shadowBlur:10},yAxisIndex:s,data:i[c]})}),t.chartOption.legend.data=e,t.chartOption.series=r,t.chartOption.xAxis.data=o,t.chartOption.xAxis.axisLabel.formatter=(x,c)=>{let u=x,D=0,v=0;for(let O=0;O<x.length;O++)if(D<20)x.charCodeAt(O)>255?D++:D+=.5;else{v=O;break}return v>0&&(u=u.substring(0,v)+"..."),u}},h=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{itemGap:15,left:"center",top:"50"},dataZoom:[{type:"slider",xAxisIndex:[0],height:30,filterMode:"filter",bottom:40,start:0,end:20,show:!0,minSpan:5,maxSpan:30,moveHandleSize:15,showDetail:!1},{type:"inside",start:0,end:20,xAxisIndex:[0],minSpan:5,maxSpan:30}],grid:{left:"2%",right:"2%",bottom:"20%",top:"25%",containLabel:!0},yAxis:[{type:"value",name:"Unit:$10K",splitNumber:3,position:"left",axisLabel:{formatter:"{value}",align:"right"}},{type:"value",name:"Unit:%",min:0,max:100,position:"right",offset:0,splitLine:{show:!1},axisLabel:{formatter:"{value}"}}],xAxis:{type:"category",data:[],axisLabel:{align:"center",interval:0,width:90,lineHeight:14,overflow:"breakAll",margin:20}},series:[]},l()};return onMounted(()=>{h()}),(e,a)=>{const o=m("echartsInit");return d(),g(o,{chartOption:p(t).chartOption},null,8,["chartOption"])}}},V="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==",N={__name:"echart-barHorizScroll",setup(f){const t=reactive({chartData:{yAxis:["Task A","Task B","Task C","Task Longer Name","Task E","Task F","Task G","Task H","Task I"],color:[$c.cyl4,$c.orl5,$c.rel5],data:[69,96,35,26,96,32,52,22,72]},chartOption:{}}),l=computed(()=>new Array(t.chartData.data.length).fill(100)),h=r=>{let s=[];for(var n=0;n<r.length;n++)s.push({value:r[n],symbolPosition:"end"});return s},e=()=>{t.chartData.legend,t.chartData.colors,t.chartData.yAxis,t.chartData.data,t.chartOption.yAxis.data=t.chartData.yAxis,t.chartOption.series[0].data=t.chartData.data,t.chartOption.series[1].data=l,t.chartOption.series[2].data=h(t.chartData.data),i()},a=()=>{t.chartOption={update:!1,title:{show:!1,textStyle:{color:$c.cbl5,fontSize:16,fontWeight:"normal"}},grid:{top:"10%",left:"18%",right:"12%",bottom:"5%"},tooltip:{show:!1},xAxis:{type:"value",min:0,max:100,axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},dataZoom:{yAxisIndex:0,show:!1,type:"slider",startValue:0,endValue:5},yAxis:{type:"category",inverse:!0,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,interval:0,margin:10,fontSize:12,width:50,lineHeight:14,overflow:"break",fontWeight:"normal"},axisTick:{show:!1},data:[]},series:[{type:"bar",barWidth:"40%",animationDuration:2e3,itemStyle:{borderWidth:0,borderRadius:10,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:$c.cyl8},{offset:1,color:$c.cyl4}]}},label:{show:!1},data:[],z:0},{type:"bar",barWidth:"40%",barGap:"-100%",animation:!1,itemStyle:{borderWidth:0,borderRadius:5,color:"rgba(0,202,255,0.2)"},label:{show:!0,position:["101%","20%"],fontSize:14,fontWeight:"normal",formatter:r=>" "+t.chartData.data[r.dataIndex]+"%"},data:[],z:0},{type:"pictorialBar",animation:!0,animationDuration:3e3,symbol:V,symbolSize:[50,50],symbolOffset:[20,0],z:12,itemStyle:{color:"#fff"},data:[]}]},e()},{proxy:o}=getCtx(),i=()=>{o.$timer("dataScrollBarHorizB",()=>{let{data:r}=t.chartData,{dataZoom:s}=t.chartOption;s.endValue==r.length?(s.endValue=5,s.startValue=0):(s.endValue++,s.startValue++),t.chartOption.update=!0,i()},5e3)};return onMounted(()=>{a()}),onBeforeMount(()=>{o.$timer("dataScrollBarHorizB")}),(r,s)=>{const n=m("echartsInit");return d(),g(n,{chartOption:p(t).chartOption},null,8,["chartOption"])}}},E={__name:"echart-gaugeTriple",setup(f){const t=reactive({chartData:{title:"Task Completion",legend:["Dev","Purchasing","Sales"],colors:[$c.aql4,$c.cyl4,$c.cbl3],colorsD:[$c.aql8,$c.cyl8,$c.bll8],data:[72,14,36],radius:["50%","65%","50%"],position:[["17%","55%"],["50%","55%"],["83%","55%"]]},chartOption:{}}),l=()=>{const{legend:e,colors:a,colorsD:o,data:i,radius:r,position:s}=t.chartData;let n=[];e.forEach((x,c)=>{n.push({type:"gauge",startAngle:90,endAngle:-270,center:s[c],radius:r[c],pointer:{show:!1},title:{fontSize:14},itemStyle:{color:a[c],shadowColor:a[c]},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1,itemStyle:{}},detail:{width:50,height:14,borderColor:"inherit",borderRadius:20,borderWidth:0,formatter:function(u){return"{value|"+u.toFixed(0)+"}{unit|%}"},rich:{value:{fontSize:24,color:a[c],fontWeight:"bolder"},unit:{fontSize:12,color:$c.darken(a[c],1)}}},axisLine:{lineStyle:{color:[[1,$c.darken(a[c],4)]],width:10}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:[{value:i[c],name:e[c],title:{color:$c.lighten(a[c],1),offsetCenter:["0%","30%"]},detail:{valueAnimation:!0,offsetCenter:["0","-30%"]}}]})}),t.chartOption.series=n},h=()=>{t.chartOption={update:!1,series:[]},l()};return onMounted(()=>{h()}),(e,a)=>{const o=m("echartsInit");return d(),g(o,{chartOption:p(t).chartOption},null,8,["chartOption"])}}},F={__name:"echarts-radar",setup(f){const t=reactive({chartData:{legend:["Budget Allocation","Actual Expenses"],colors:[$c.bll5,$c.cyl5],data:[[5e3,3400,2800,4100,4200,2100],[4300,3e3,3700,1500,5e3,4900]],indicator:[{name:"Sales",max:5e3},{name:"Management",max:5e3},{name:"Technology",max:5e3},{name:"Service",max:5e3},{name:"R&D",max:5e3},{name:"Market",max:5e3}]},chartOption:{}}),l=()=>{let{legend:e,colors:a,data:o,indicator:i}=t.chartData,r=[];e.forEach((s,n)=>{r.push({name:e[n],type:"radar",symbol:"circle",color:a[n],symbolSize:10,areaStyle:{color:$c.fade(a[n],.4)},lineStyle:{color:$c.fade(a[n],.9),width:2},data:[o[n]]})}),t.chartOption.legend.data=e,t.chartOption.series=r,t.chartOption.radar.indicator=i},h=()=>{t.chartOption={update:!1,title:{text:"异常特征分布1",show:!1,left:0,top:0,textStyle:{color:$c.cbl5,fontSize:16,fontWeight:"normal"}},tooltip:{show:!0,trigger:"item"},legend:{show:!0,right:15,top:15,width:50,data:[]},radar:{center:["50%","53%"],radius:"78%",startAngle:90,splitNumber:4,shape:"circle",splitArea:{areaStyle:{color:["transparent"]}},axisLabel:{show:!1,fontSize:12},axisLine:{show:!0,lineStyle:{type:"dashed"}},splitLine:{show:!0,lineStyle:{type:"dashed"}},axisName:{fontSize:14,borderWidth:1,borderRadius:0},indicator:[]},series:[]},l()};return onMounted(()=>{h()}),(e,a)=>{const o=m("echartsInit");return d(),g(o,{chartOption:p(t).chartOption},null,8,["chartOption"])}}};const G={class:"echart-wrap-dashB"},H={class:"total-digital"},P={class:"desc"},Z={__name:"echart-pie",setup(f){const t=reactive({chartData:{legend:["Software","Hardware","Services","Security","Advertising"],colors:[$c.bll5,$c.inl3,$c.aql3,$c.yel3,$c.orl3,$c.rel3],data:[325,252,323,183,120,43]},counter:{title:"Total Cost",num:1723},chartOption:{}}),l=()=>{let{legend:e,colors:a,data:o}=t.chartData,i=[];e.forEach((r,s)=>{i.push({value:o[s],name:e[s],itemStyle:{color:a[s]}})}),t.chartOption.series[0].data=i,t.chartOption.legend.data=e},h=()=>{t.chartOption={update:!1,title:{show:!1,text:"",x:"center",top:"32%",textStyle:{color:$c.bll5,fontSize:24,fontWeight:"bold",lineHeight:30}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",show:!0,right:"40",top:"22%",data:[],formatter:e=>{let a;for(let o=0;o<t.chartData.data.length;o++)t.chartData.legend[o]==e&&(a=t.chartData.data[o]);return"{a|"+e+"} {b|"+a+"}"},textStyle:{rich:{a:{fontSize:14,color:$c.bll5,padding:10},b:{fontSize:16,color:$c.cyl5}}}},series:[{name:"数据类别",type:"pie",radius:["55%","80%"],center:["30%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"outside"},itemStyle:{borderRadius:10,borderColor:$c.bll9,borderWidth:5},emphasis:{label:{show:!1,fontSize:"20",color:$c.gyd5}},labelLine:{show:!1},data:[]}]},l()};return onMounted(()=>{h()}),(e,a)=>{const o=m("DigitalTransform"),i=m("echartsInit");return d(),_("div",G,[A("div",H,[A("span",P,L(p(t).counter.title),1),y(o,{class:"counter",value:p(t).counter.num,interval:1e3,dislocation:!1},null,8,["value"])]),y(i,{chartOption:p(t).chartOption},null,8,["chartOption"])])}}},U={__name:"echarts-PictorialBar",setup(f){const t={0:"path://M288,358.3c13.98-8.09,17.53-30.04,28.88-41.39s33.3-14.88,41.39-28.87c7.98-13.79,.17-34.54,4.37-50.29,4.06-15.25,20.46-29.25,20.46-45.75s-17.27-30.52-21.34-45.73c-4.21-15.75,3.61-36.5-4.36-50.29-8.09-13.98-30.03-17.52-41.38-28.87-11.35-11.35-14.89-33.3-28.87-41.39-13.79-7.98-34.54-.16-50.29-4.38-14.36-4.08-28.36-21.35-44.86-21.35s-30.5,17.27-45.7,21.34c-15.8,4.2-36.5-3.61-50.32,4.36-13.98,8.09-17.52,30.04-28.87,41.38-11.34,11.35-33.3,14.89-41.39,28.87-7.98,13.75-.16,34.55-4.37,50.25-4.08,15.3-21.35,29.3-21.35,45.8s17.27,30.52,21.34,45.73c4.21,15.75-3.61,36.5,4.36,50.29,8.1,13.98,30.04,17.48,41.38,28.88,11.35,11.35,14.89,33.3,28.88,41.4,13.79,7.98,34.53,.16,50.28,4.37,15.26,4.03,29.26,21.33,45.76,21.33s30.52-17.27,45.74-21.34c15.76-4.16,36.46,3.64,50.26-4.36ZM112,192c0-44.27,35.81-80,80-80s80,35.73,80,80-35.81,80-80,80-80-35.8-80-80ZM1.72,433.2c-3.25,8.19-1.78,17.48,3.87,24.25,5.66,6.75,14.53,9.9,23.12,8.15l45.19-9.04,21.43,42.27c4.13,8.17,12.27,13.17,21.37,13.17,.34,0,.66-.01,1.01-.03,9.5-.38,17.65-6.08,21.24-14.88l33.58-82.08c-53.71-4.64-102-28.12-138.2-63.95L1.72,433.2Zm347.88-82.1c-36.15,35.83-84.45,59.31-138.2,63.95l33.58,82.08c3.59,8.8,11.74,14.5,21.24,14.88,.38-.91-.12-.01,1.08-.01,9.09,0,17.23-4.97,21.35-13.14l21.43-42.28,45.19,9.04c8.59,1.75,17.47-1.4,23.12-8.15,5.66-6.77,7.12-16.06,3.88-24.25l-32.66-82.12Z"},l=reactive({chartData:{legend:["Budget cost"],yAxis:["teamA","teamB","teamC","teamD","teamE"],colors:["#19e680","#00e8b8","#00e6df","#00c7f3","#009af3"],colorsD:["#052e1a","#003328","#003331","#002a33","002033"],data:[93,85,22,76,13]},chartOption:{}}),h=()=>{let{legend:a,colors:o,colorsD:i,yAxis:r,data:s}=l.chartData,n={tooltip:{show:!1},z:4,type:"pictorialBar",symbolSize:["20","25"],symbolRepeat:"fixed",symbolMargin:12,itemStyle:{color:c=>$c.fade(i[c.dataIndex],.8)},data:[]},x={z:6,type:"pictorialBar",symbolSize:["20","25"],animation:!0,symbolRepeat:"fixed",symbolMargin:12,symbolClip:!0,symbolPosition:"start",symbolOffset:[0,0],itemStyle:{color:c=>$c.fade(o[c.dataIndex],.8)},data:[],label:{show:!0,color:"#18fcff",fontSize:14,position:"right",offset:[20,0]}};s.forEach((c,u)=>{n.data.push({value:100,symbol:t[0]}),x.data.push({value:c,symbol:t[0]})}),l.chartOption.series[0]=n,l.chartOption.series[1]=x,l.chartOption.yAxis.data=r},e=()=>{l.chartOption={update:!1,grid:{left:"5%",top:"20%",bottom:"5%",right:"20%",containLabel:!0},tooltip:{trigger:"item"},xAxis:{splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},yAxis:{type:"category",inverse:!0,data:[],axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1,lineStyle:{type:"dashed"}},axisLabel:{margin:20,fontSize:14}},series:[]},h()};return onMounted(()=>{e()}),(a,o)=>{const i=m("echartsInit");return d(),g(i,{chartOption:p(l).chartOption},null,8,["chartOption"])}}};const Y={class:"screenB-counterGrid"},q={class:"block-title"},K={key:0,class:"unit"},J={__name:"counter-grid",setup(f){const t=reactive({arry:[{title:"Software Sales",icon:"i carbon:ibm-z-cloud-mod-stack",unit:"$10K",total:"1874"},{title:"Hardware Sales",icon:"i carbon:chip",unit:"$10K",total:"3276"},{title:"Technical Services",icon:"i carbon:user-speaker",unit:"$10K",total:"315"},{title:"Security Service",icon:"i carbon:rule",unit:"$10K",total:"769"},{title:"Total Expenses",icon:"i carbon:airline-digital-gate",unit:"$10K",total:"23769"}]}),l={directionAlt:!0,scale:.8};return(h,e)=>{const a=m("decoFrameA2"),o=m("DigitalTransform");return d(),_("div",Y,[(d(!0),_(S,null,$(p(t).arry,(i,r)=>(d(),_("div",{class:"content-wrap",key:r},[y(a,{config:l},{default:b(()=>[A("i",{class:T([i.icon,"icon"])},null,2)]),_:2},1024),y(o,{class:"numbers",value:i.total,useGrouping:!0,interval:3e3},null,8,["value"]),A("div",q,[B(L(i.title)+" ",1),i.unit?(d(),_("span",K,"("+L(i.unit)+")",1)):M("",!0)])]))),128))])}}};const X={class:"screen1080B"},Q={class:"portlet-wrapper"},j={__name:"layout",setup(f){useRouter(),getCtx();const t={echartBarHoriz:z,echartLine:I,echartBar:R,echartBarHorizScroll:N,echartGaugeTriple:E,echartsRadar:F,counterGrid:J,echartPie:Z,echartsPictorialBar:U,echartBarLine:W},l=reactive({systemTitleConfig:{width:500},panelTitleConfig:{width:160},dialogConfig:{show:!1,width:"60%",height:"60%",title:"对话框标题",titleWidth:350},areas:[{name:"left",portlets:[{id:"l2",title:"Team Sales Completion",component:"echartsPictorialBar",border:"aYinTechBorderA1",hideTitle:!0},{id:"l3",title:"Business Income",component:"echartBar",border:"aYinTechBorderA1",hideTitle:!0},{id:"l1",title:"Budget vs Actual",component:"echartsRadar",border:"aYinTechBorderA1",hideTitle:!0}]},{name:"center",portlets:[{id:"c1",title:"Sales",component:"counterGrid",border:"blank",hideTitle:!0},{id:"c2",title:"Task Completion",component:"echartPie",border:"aYinTechBorderA1",hideTitle:!0},{id:"c3",title:"Proportion of profit",component:"echartGaugeTriple",border:"aYinTechBorderA1",hideTitle:!0},{id:"c4",title:"Contract Situation",component:"echartBarLine",border:"aYinTechBorderB4"}]},{name:"right",portlets:[{id:"r1",title:"Sales Situation",component:"echartLine",border:"aYinTechBorderA1",hideTitle:!0},{id:"r2",title:"Revenue Expenditure",component:"echartBarHoriz",border:"aYinTechBorderA1",hideTitle:!0},{id:"r3",title:"Task Completion",component:"echartBarHorizScroll",border:"aYinTechBorderA1",hideTitle:!0}]}]}),{systemTitleConfig:h,panelTitleConfig:e,dialogConfig:a,areas:o}=toRefs(l);computed(()=>this.$vuex.state.adaptiveConfig.chartCounter);const i=r=>{const{id:s}=r;return s=="c2"?{title:r.title,titleWidth:160,opacity:.5,decoration:!1}:s=="c3"?{title:r.title,titleWidth:160,opacity:.5,rotate:"y",decoration:!1}:s.includes("l")?{title:r.title,titleWidth:170,decoration:!1,decorationAlt:!0,rotate:"y",opacity:.5}:{title:r.title,titleWidth:170,decoration:!1,opacity:.5}};return onMounted(()=>{}),(r,s)=>{const n=m("panelTitleA1"),x=m("systemTitleA1");return d(),_("div",X,[y(C),y(k),(d(!0),_(S,null,$(p(o),c=>(d(),_("div",{class:T(`area-box area-${c.name}`)},[(d(!0),_(S,null,$(c.portlets,(u,D)=>(d(),_("div",Q,[u.border?(d(),g(w(u.border),{key:0,config:i(u)},{default:b(()=>[u.hideTitle?M("",!0):(d(),g(n,{key:0,config:p(e)},{default:b(()=>[B(L(u.title),1)]),_:2},1032,["config"])),(d(),g(w(t[u.component])))]),_:2},1032,["config"])):(d(),_(S,{key:1},[(d(),g(w(u.component))),A("i",null,L(u.component),1)],64))]))),256))],2))),256)),y(x,{config:p(h)},{default:b(()=>[B("TechUI Data Visualization Tool")]),_:1},8,["config"])])}}},at={__name:"dashboardB-index",setup(f){const t=reactive({APConfig:{height:930,backgroundFillAll:!0,backgroundName:"A2",chartCount:9}});return(l,h)=>{const e=m("adaptivePanel");return d(),g(e,{config:p(t).APConfig},{default:b(()=>[y(j)]),_:1},8,["config"])}}};export{at as default};