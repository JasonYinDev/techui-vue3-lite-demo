import{r as y,o,c,a as e,F as m,b as $,d as b,w as v,e as T,t as f,u as g,n as C,f as B,g as w,h as k,i as F}from"./index-d856743e.js";import{_ as S,a as D}from"./externalLinks-c35f0047.js";const V={class:"techBorder-en deco-demo"},L={class:"border-toggle"},Y={key:0,class:"deco-wrap"},I=e("div",{class:"deco-intro"},[e("div",{class:"intro"},"簡介："),e("div",{class:"content"},[e("p",null,"受@jiaminghi/data-view開源組件啟發，設計並開發了以下科技風格邊框。 "),e("p",null,"科技風格邊框採用動態SVG節點，其自適應過程，相當於是SVG節點的重複計算。 "),e("p",null,"含多項配置項，風格可自定義。完全版的風格跟隨系統主題切換，lite版本無主題功能。 ")])],-1),R={class:"deco-group"},P={class:"group-name"},q={class:"title"},U={class:"subTitle"},W={class:"desc"},M={key:0,class:"border-name"},z={__name:"techBorder",setup(A){const t=reactive({show:!1,aYinBorders:[],pageConfig:{col:{current:4,children:[{title:"三列",label:3},{title:"四列",label:4}]},height:{current:"short",children:[{title:"高",label:"high"},{title:"矮",label:"short"}]},config:{current:"cfgOn",children:[{title:"配置項開",label:"cfgOn"},{title:"配置項關",label:"cfgOff"}]}}}),i=computed(()=>t.pageConfig.col.current),{aYinBorders:u,pageConfig:s,show:h}=toRefs(t),p=()=>{let d=[{name:"aYinTechBorderA1",children:[{border:"aYinTechBorderA1",config:{}},{border:"aYinTechBorderA1",config:{rotate:"x",decorationAlt:!0}},{border:"aYinTechBorderA1",config:{rotate:"y"}},{border:"aYinTechBorderA1",config:{rotate:"z"}},{border:"aYinTechBorderA1",config:{title:"測試標題",titleWidth:100}},{border:"aYinTechBorderA1",config:{title:"測試六字標題",decorationAlt:!0,rotate:"x"}},{border:"aYinTechBorderA1",config:{title:"測試十個字十個字標題",titleWidth:190,decorationAlt:!0,rotate:"y"}},{border:"aYinTechBorderA1",config:{title:"測試標題",titleWidth:100,rotate:"z"}},{border:"aYinTechBorderA1",config:{borderWidth:3}},{border:"aYinTechBorderA1",config:{border:!1}},{border:"aYinTechBorderA1",config:{title:"測試標題",titleWidth:100,decoration:!1,glow:!0}},{border:"aYinTechBorderA1",config:{scale:.8,glow:!0,glowRange:20}}]},{name:"aYinTechBorderA2",children:[{border:"aYinTechBorderA2",config:{decorationColor:[$c.bll3,$c.orl3],title:"壹號"}},{border:"aYinTechBorderA2",config:{decorationColor:[$c.bll3,$c.cbl5],title:"貳號",rotate:"x"}},{border:"aYinTechBorderA2",config:{decorationColor:[$c.bll3,$c.rel4],title:"No.1",rotate:"y"}},{border:"aYinTechBorderA2",config:{title:"No.15",rotate:"z"}},{border:"aYinTechBorderA2",config:{borderWidth:3,title:"No.15"}},{border:"aYinTechBorderA2",config:{border:!1,decoration:!1,title:"No.15"}},{border:"aYinTechBorderA2",config:{glow:!0,title:"No.15"}}]},{name:"aYinTechBorderB1",children:[{border:"aYinTechBorderB1",config:{}},{border:"aYinTechBorderB1",config:{borderWidth:3,bdFilter:!0}},{border:"aYinTechBorderB1",config:{border:!1}},{border:"aYinTechBorderB1",config:{glow:!0,decoration:!1}}]},{name:"aYinTechBorderB2",children:[{border:"aYinTechBorderB2",config:{dur:3}},{border:"aYinTechBorderB2",config:{rotate:"x",borderWidth:3,ani:!1,bdFilter:!0}},{border:"aYinTechBorderB2",config:{decorationColor:[$c.cyl3,$c.rel5],border:!1,dur:3}},{border:"aYinTechBorderB2",config:{decoration:!1,glow:!0,dur:3}}]},{name:"aYinTechBorderB3",children:[{border:"aYinTechBorderB3",config:{}},{border:"aYinTechBorderB3",config:{rotate:"x",borderWidth:3,bdFilter:!0}},{border:"aYinTechBorderB3",config:{rotate:"y",decoration:!1,decorationAlt:!0}},{border:"aYinTechBorderB3",config:{rotate:"z",glow:!0,decoration:!1}}]},{name:"aYinTechBorderB4",children:[{border:"aYinTechBorderB4",config:{}},{border:"aYinTechBorderB4",config:{borderWidth:3,bdFilter:!0}},{border:"aYinTechBorderB4",config:{border:!1}},{border:"aYinTechBorderB4",config:{glow:!0,decoration:!1}}]}];d.forEach((_,l)=>{_.children.forEach((r,a)=>{r.config.opacity=.7})}),t.aYinBorders=d};return onMounted(()=>{p(),nextTick(()=>{t.show=!0})}),(d,_)=>{const l=y("el-radio-button"),r=y("el-radio-group");return o(),c("div",V,[e("div",L,[(o(!0),c(m,null,$(g(s),(a,n)=>(o(),b(r,{key:n,modelValue:a.current,"onUpdate:modelValue":x=>a.current=x},{default:v(()=>[(o(!0),c(m,null,$(a.children,x=>(o(),b(l,{label:x.label,key:x.label},{default:v(()=>[T(f(x.title),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),g(h)?(o(),c("div",Y,[I,(o(!0),c(m,null,$(g(u),(a,n)=>(o(),c("div",R,[e("div",P,[e("span",q,f(a.name),1),e("span",U,f(a.subTitle),1),e("span",W,f(a.desc),1)]),e("div",{class:"group-content",style:k(`grid-template-columns: repeat(${g(i)}, 1fr);`)},[(o(!0),c(m,null,$(a.children,(x,O)=>(o(),c("div",{class:C(`border-item border-${g(s).height.current}`),key:O},[(o(),b(w(x.border),{config:x.config},{default:v(()=>[g(s).config.current=="cfgOn"?(o(),c("div",M,f(x),1)):B("",!0)]),_:2},1032,["config"]))],2))),128))],4)]))),256))])):B("",!0)])}}};const N={class:"techButton-en deco-demo"},E={class:"border-toggle"},H={key:0,class:"deco-wrap"},Z=e("div",{class:"deco-intro"},[e("div",{class:"intro"},"簡介："),e("div",{class:"content"},[e("p",null,"科技按鈕，用於替代頁面中的普通按鈕，使之有科技感。 "),e("p",null,"此組件A類採用了動態SVG節點開發，此組件雖然不需要自適應功能，但設定其寬度的時候，SVG節點會根據標題寬度進行自動計算定位。 "),e("p",null,"含多項配置項，如寬度、縮放等級、動畫等，風格可自定義，請參考下方案例中的配置項。完全版的風格跟隨系統主題切換，lite版本無主題功能。 ")])],-1),G={class:"techButton-title"},X={class:"item"},j={class:"chs"},Q={class:"deco-group"},K={class:"group-name"},J={class:"title"},ee={class:"subTitle"},te={class:"desc"},oe={class:"group-content"},ce={class:C("techButton-item ")},ae={class:"button-wrap"},ne={key:0,class:"config-detail"},re={__name:"techButton",setup(A){const t=reactive({show:!0,update:0,pageConfig:{config:{current:"cfgOff",children:[{title:"配置項開",label:"cfgOn"},{title:"配置項關",label:"cfgOff"}]}},buttonTitle:[{label:"正常",labelE:"Normal"},{label:"長文字",labelE:"Long Text"},{label:"激活狀態",labelE:"Active"},{label:"禁用狀態",labelE:"Disabled"},{label:"自定義風格",labelE:"Custom style"},{label:"激活狀態",labelE:"Scale"}],techTitle:[{name:"techButtonA1",desc:"",children:[{button:"techButtonA1",text:"buttonText",config:{}},{button:"techButtonA1",text:"buttonTextLongLong",config:{}},{button:"techButtonA1",class:"active",text:"buttonActive",config:{}},{button:"techButtonA1",class:"disabled",text:"buttonDisabled",config:{}},{button:"techButtonA1",text:"buttonCustom",config:{normal:{fc:$c.cyl5,bg:$c.aql8,bd:$c.aql5},hover:{fc:$c.rel7,bg:$c.orl6,bd:$c.orl4},decorationColor:[$c.wh,$c.rel3]}},{button:"techButtonA1",text:"buttonScale",config:{decorationColorAlt:!0,scaleAction:!1,glow:!1,scale:1.4}}]},{name:"techButtonA2",desc:"",children:[{button:"techButtonA2",text:"buttonText",config:{}},{button:"techButtonA2",text:"buttonTextLongLong",config:{}},{button:"techButtonA2",text:"buttonActive",class:"active",config:{}},{button:"techButtonA2",text:"buttonDisabled",class:"disabled",config:{}},{button:"techButtonA2",text:"buttonCustom",config:{normal:{fc:$c.cyl5,bg:$c.aql8,bd:$c.aql5},hover:{fc:$c.rel7,bg:$c.orl6,bd:$c.orl4},decorationColor:[$c.cyl3,$c.rel3]}},{button:"techButtonA2",text:"buttonScale",config:{decorationColorAlt:!0,scaleAction:!1,scale:1.5,glow:!1}}]},{name:"techButtonB1",desc:"",children:[{button:"techButtonB1",text:"buttonText",config:{}},{button:"techButtonB1",text:"buttonTextLongLong",config:{borderWidth:5}},{button:"techButtonB1",class:"active",text:"buttonActive",config:{}},{button:"techButtonB1",class:"disabled",text:"buttonDisabled",config:{}},{button:"techButtonB1",text:"buttonCustom",config:{normal:{fc:$c.wh,bg:$c.aql8,bd:$c.aql5},hover:{fc:$c.rel7,bg:$c.orl6,bd:$c.orl4},decorationColor:[$c.aql3,$c.rel3]}},{button:"techButtonB1",text:"buttonScale",config:{decorationColorAlt:!0,scaleAction:!1,decorationLength:19,glow:!0,scale:1.4}}]},{name:"techButtonB2",desc:"",children:[{button:"techButtonB2",text:"buttonText",config:{}},{button:"techButtonB2",text:"buttonTextLongLong",config:{}},{button:"techButtonB2",text:"buttonActive",class:"active",config:{}},{button:"techButtonB2",text:"buttonDisabled",class:"disabled",config:{}},{button:"techButtonB2",text:"buttonCustom",config:{normal:{fc:$c.cyl5,bg:$c.aql8,bd:$c.aql5},hover:{fc:$c.wh,bg:$c.aql6,bd:$c.aql4},decorationColor:[$c.aql3,$c.acl3],decorationWidth:5}},{button:"techButtonB2",text:"buttonScale",config:{decorationColorAlt:!0,scaleAction:!1,decorationWidth:5,glow:!0,scale:1.3}}]}]}),{techTitle:i,buttonTitle:u,pageConfig:s,show:h}=toRefs(t);return onMounted(()=>{nextTick(()=>{t.show=!0})}),(p,d)=>{const _=y("el-radio-button"),l=y("el-radio-group");return o(),c("div",N,[e("div",E,[(o(!0),c(m,null,$(g(s),(r,a)=>(o(),b(l,{key:a,modelValue:r.current,"onUpdate:modelValue":n=>r.current=n},{default:v(()=>[(o(!0),c(m,null,$(r.children,n=>(o(),b(_,{label:n.label,key:n.label},{default:v(()=>[T(f(n.title),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),g(h)?(o(),c("div",H,[Z,e("div",G,[(o(!0),c(m,null,$(g(u),(r,a)=>(o(),c("div",X,[e("p",j,f(r.label),1)]))),256))]),(o(!0),c(m,null,$(g(i),(r,a)=>(o(),c("div",Q,[e("div",K,[e("span",J,f(r.name),1),e("span",ee,f(r.subTitle),1),e("span",te,f(r.desc),1)]),e("div",oe,[(o(!0),c(m,null,$(r.children,n=>(o(),c("div",ce,[e("div",ae,[(o(),b(w(n.button),{class:C(n.class),config:n.config},{default:v(()=>[T(f(n.text),1)]),_:2},1032,["class","config"]))]),g(s).config.current=="cfgOn"?(o(),c("div",ne,f(n),1)):B("",!0)]))),256))])]))),256))])):B("",!0)])}}};const le={class:"techTitle-en deco-demo"},ie={class:"border-toggle"},se={key:0,class:"deco-wrap"},de=e("div",{class:"deco-intro"},[e("div",{class:"intro"},"簡介："),e("div",{class:"content"},[e("p",null,"系統標題組件是位於頁面頂部的用於展示系統名稱的科技風格組件。 "),e("p",null,"此組件採用了動態SVG節點開發，此組件雖然不需要自適應功能，但設定其寬度的時候，SVG節點會根據標題寬度進行自動計算定位。 "),e("p",null,"含多項配置項，如寬度、縮放等級、動畫等，風格可自定義，請參考下方案例中的配置項。完全版的風格跟隨系統主題切換，lite版本無主題功能。 ")])],-1),ue={class:"deco-group"},he={class:"group-name"},ge={class:"title"},pe={class:"subTitle"},fe={class:"desc"},_e={class:"group-content"},be={class:C("systemTitle-item ")},me={key:0,class:"config-detail"},$e={__name:"systemTitle",setup(A){const t=reactive({show:!0,update:0,pageConfig:{config:{current:"cfgOff",children:[{title:"配置项开",label:"cfgOn"},{title:"配置项关",label:"cfgOff"}]}},techTitle:[{name:"systemTitleA1",desc:"带动画效果的系统标题组件,原创开发的第一款标题组件。",children:[{border:"systemTitleA1",title:"TechUI數據可視化成型工具",config:{}},{border:"systemTitleA1",title:"TechUI數據可視化成型工具快速成型組件庫",config:{gradientBG:!1,decorationColorAlt:!0,width:700}},{border:"systemTitleA1",title:"TechUI數據可視化成型工具",config:{ani:!1,backgroundColor:$c.aql5,decorationColor:[$c.aql3,$c.cyl5],fontColor:[$c.cyl9,$c.aql7]}},{border:"systemTitleA1",title:"TechUI數據可視化成型工具",config:{dur:1,scale:.7,gradientReverse:!0,decoration:!1}}]},{name:"systemTitleA2",desc:"",children:[{border:"systemTitleA2",title:"TechUI數據可視化成型工具",config:{}},{border:"systemTitleA2",title:"TechUI數據可視化成型工具",config:{decorationColorAlt:!0}},{border:"systemTitleA2",title:"TechUI數據可視化成型工具",config:{backgroundColor:$c.acl6,decorationColor:[$c.acl3,$c.cyl7],fontColor:[$c.cyl9,$c.aql7]}},{border:"systemTitleA2",title:"TechUI數據可視化成型工具",config:{scale:.7,gradientReverse:!0,decoration:!1}}]},{name:"systemTitleA3",desc:"",children:[{border:"systemTitleA3",title:"TechUI數據可視化成型工具",config:{}},{border:"systemTitleA3",title:"TechUI數據可視化成型工具",config:{decorationColorAlt:!0}},{border:"systemTitleA3",title:"TechUI數據可視化成型工具",config:{backgroundColor:$c.acl6,decorationColor:[$c.acl3,$c.cyl7],fontColor:[$c.cyl9,$c.aql7]}},{border:"systemTitleA3",title:"TechUI數據可視化成型工具",config:{scale:.7,gradientReverse:!0,decoration:!1}}]},{name:"systemTitleA4",desc:"",children:[{border:"systemTitleA4",title:"TechUI數據可視化成型工具",config:{}},{border:"systemTitleA4",title:"TechUI數據可視化成型工具",config:{decorationColorAlt:!0}},{border:"systemTitleA4",title:"TechUI數據可視化成型工具",config:{backgroundColor:$c.acl6,decorationColor:[$c.acl3,$c.cyl7],fontColor:[$c.cyl9,$c.aql7]}},{border:"systemTitleA4",title:"TechUI數據可視化成型工具",config:{scale:.7,gradientReverse:!0,decoration:!1}}]}]}),{techTitle:i,pageConfig:u,show:s}=toRefs(t);return onMounted(()=>{nextTick(()=>{t.show=!0})}),(h,p)=>{const d=y("el-radio-button"),_=y("el-radio-group");return o(),c("div",le,[e("div",ie,[(o(!0),c(m,null,$(g(u),(l,r)=>(o(),b(_,{key:r,modelValue:l.current,"onUpdate:modelValue":a=>l.current=a},{default:v(()=>[(o(!0),c(m,null,$(l.children,a=>(o(),b(d,{label:a.label,key:a.label},{default:v(()=>[T(f(a.title),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),g(s)?(o(),c("div",se,[de,(o(!0),c(m,null,$(g(i),(l,r)=>(o(),c("div",ue,[e("div",he,[e("span",ge,f(l.name),1),e("span",pe,f(l.subTitle),1),e("span",fe,f(l.desc),1)]),e("div",_e,[(o(!0),c(m,null,$(l.children,a=>(o(),c("div",be,[(o(),b(w(a.border),{config:a.config},{default:v(()=>[T(f(a.title),1)]),_:2},1032,["config"])),g(u).config.current=="cfgOn"?(o(),c("div",me,f(a),1)):B("",!0)]))),256))])]))),256))])):B("",!0)])}}};const ye={class:"panelTitle-en deco-demo"},ve={class:"border-toggle"},Ae={key:0,class:"deco-wrap"},xe=e("div",{class:"deco-intro"},[e("div",{class:"intro"},"簡介："),e("div",{class:"content"},[e("p",null,"塊標題組件是用來給部分科技面板添加標題的組件，如aYinTechBorderB1-B4這類型不含科技標題的面板。 "),e("p",null,"此組件A類型採用了動態SVG節點開發，此組件雖然不需要自適應功能，但設定其寬度的時候，SVG節點會根據標題寬度進行自動計算定位。 "),e("p",null,"配置項相對簡單，如寬度、文字顏色、裝飾顏色等")])],-1),Be={class:"deco-group"},Te={class:"group-name"},Ce={class:"title"},we={class:"subTitle"},Fe={class:"desc"},Oe={class:"group-content"},ke={class:C("panelTitle-item ")},Se={key:0,class:"config-detail"},De={__name:"panelTitle",setup(A){const t=reactive({show:!0,update:0,pageConfig:{config:{current:"cfgOn",children:[{title:"配置項開",label:"cfgOn"},{title:"配置項關",label:"cfgOff"}]}},panelTitle:[{name:"panelTitleA1",desc:"",children:[{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"中間標題",config:{}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"長塊標題長塊標題長塊標題",config:{fontSize:18,width:280}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"自定義風格",config:{scale:1.3,position:"left",decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}}]},{name:"panelTitleB1",desc:"",children:[{border:"aYinTechBorderB4",blockTi:"panelTitleB1",title:"側面標題",config:{}},{border:"aYinTechBorderB4",blockTi:"panelTitleB1",title:"側面標題",config:{fontSize:18}},{border:"aYinTechBorderB4",blockTi:"panelTitleB1",title:"自定義風格",config:{scale:1.3,position:"right",decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}}]}]}),{panelTitle:i,pageConfig:u,show:s}=toRefs(t);return onMounted(()=>{nextTick(()=>{t.show=!0})}),(h,p)=>{const d=y("el-radio-button"),_=y("el-radio-group");return o(),c("div",ye,[e("div",ve,[(o(!0),c(m,null,$(g(u),(l,r)=>(o(),b(_,{key:r,modelValue:l.current,"onUpdate:modelValue":a=>l.current=a},{default:v(()=>[(o(!0),c(m,null,$(l.children,a=>(o(),b(d,{label:a.label,key:a.label},{default:v(()=>[T(f(a.title),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),g(s)?(o(),c("div",Ae,[xe,(o(!0),c(m,null,$(g(i),(l,r)=>(o(),c("div",Be,[e("div",Te,[e("span",Ce,f(l.name),1),e("span",we,f(l.subTitle),1),e("span",Fe,f(l.desc),1)]),e("div",Oe,[(o(!0),c(m,null,$(l.children,a=>(o(),c("div",ke,[(o(),b(w(a.border),null,{default:v(()=>[(o(),b(w(a.blockTi),{config:a.config},{default:v(()=>[T(f(a.title),1)]),_:2},1032,["config"])),g(u).config.current=="cfgOn"?(o(),c("div",Se,f(a),1)):B("",!0)]),_:2},1024))]))),256))])]))),256))])):B("",!0)])}}};const Ve={class:"decoFrame-en deco-demo"},Le={class:"border-toggle"},Ye={key:0,class:"deco-wrap"},Ie=e("div",{class:"deco-intro"},[e("div",{class:"intro"},"簡介："),e("div",{class:"content"},[e("p",null,"裝飾框，用於為頁面中的計數器、圖標等內容，添加一層裝飾邊框，使之有科技感。 "),e("p",null,"此組件B類採用了動態SVG節點開發，除了B類具備寬度自適應的功能外，其他幾類，均為等寬高的設計，通過scale來調整大小"),e("p",null,"含多項配置項，縮放等級、外觀子類（subType）、方向切換等，風格可自定義，請參考下方案例中的配置項。 ")])],-1),Re={class:"deco-group"},Pe={class:"group-name"},qe={class:"title"},Ue={class:"subTitle"},We={class:"desc"},Me={class:"group-content"},ze={class:C("decoFrame-item ")},Ne={class:"decoFrame-wrap"},Ee={key:0,class:"config-detail"},He={__name:"decoFrame",setup(A){const t=reactive({show:!0,update:0,pageConfig:{config:{current:"cfgOff",children:[{title:"配置項開",label:"cfgOn"},{title:"配置項關",label:"cfgOff"}]}},techTitle:[{name:"decoFrameA1",desc:"",children:[{decoFrame:"decoFrameA1",counter:369,config:{}},{decoFrame:"decoFrameA1",icon:"i carbon:catalog",config:{decorationAlt:!0,glow:!1}},{decoFrame:"decoFrameA1",icon:"i carbon:catalog",config:{backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:$c.rel3}},{decoFrame:"decoFrameA1",icon:"i carbon:catalog",config:{border:!1,scale:1.5,backgroundOpacity:.5}}]},{name:"decoFrameA2",desc:"",children:[{decoFrame:"decoFrameA2",counter:369,config:{}},{decoFrame:"decoFrameA2",icon:"i carbon:bat",config:{decorationAlt:!0,glow:!1}},{decoFrame:"decoFrameA2",icon:"i carbon:bat",config:{backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:$c.rel3}},{decoFrame:"decoFrameA2",icon:"i carbon:bat",config:{border:!1,scale:1.5,backgroundOpacity:.5}},{decoFrame:"decoFrameA2",counter:369,config:{directionAlt:!0}},{decoFrame:"decoFrameA2",icon:"i carbon:bat",config:{directionAlt:!0,decorationAlt:!0,glow:!1}},{decoFrame:"decoFrameA2",icon:"i carbon:bat",config:{directionAlt:!0,backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:$c.rel3}},{decoFrame:"decoFrameA2",icon:"i carbon:bat",config:{directionAlt:!0,border:!1,scale:1.5,backgroundOpacity:.5}}]},{name:"decoFrameA3",desc:"",children:[{decoFrame:"decoFrameA3",counter:369,config:{}},{decoFrame:"decoFrameA3",icon:"i carbon:add-comment",config:{decorationAlt:!0,glow:!1}},{decoFrame:"decoFrameA3",icon:"i carbon:add-comment",config:{backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:$c.rel3}},{decoFrame:"decoFrameA3",icon:"i carbon:add-comment",config:{border:!1,scale:1.5,backgroundOpacity:.5}},{decoFrame:"decoFrameA3",counter:369,config:{directionAlt:!0}},{decoFrame:"decoFrameA3",icon:"i carbon:add-comment",config:{directionAlt:!0,decorationAlt:!0,glow:!1}},{decoFrame:"decoFrameA3",icon:"i carbon:add-comment",config:{directionAlt:!0,backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:$c.rel3}},{decoFrame:"decoFrameA3",icon:"i carbon:add-comment",config:{directionAlt:!0,border:!1,scale:1.5,backgroundOpacity:.5}}]},{name:"decoFrameB1",desc:"",children:[{decoFrame:"decoFrameB1",counter:369842,config:{}},{decoFrame:"decoFrameB1",icon:"i carbon:manage-protection",config:{glow:!1}},{decoFrame:"decoFrameB1",icon:"i carbon:manage-protection",config:{backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:[$c.yel3,$c.rel3]}},{decoFrame:"decoFrameB1",icon:"i carbon:manage-protection",config:{decorationAlt:!0,scale:1.5,backgroundOpacity:.5}}]},{name:"decoFrameB2",desc:"",children:[{decoFrame:"decoFrameB2",counter:369842,config:{}},{decoFrame:"decoFrameB2",icon:"i carbon:notification",config:{glow:!1}},{decoFrame:"decoFrameB2",icon:"i carbon:notification",config:{backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:[$c.yel3,$c.rel3]}},{decoFrame:"decoFrameB2",icon:"i carbon:notification",config:{decorationAlt:!0,scale:1.5,backgroundOpacity:.5}}]},{name:"decoFrameB3",desc:"",children:[{decoFrame:"decoFrameB3",counter:369842,config:{}},{decoFrame:"decoFrameB3",icon:"i carbon:mixed-rain-hail",config:{glow:!1}},{decoFrame:"decoFrameB3",icon:"i carbon:mixed-rain-hail",config:{backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:[$c.yel3,$c.rel3]}},{decoFrame:"decoFrameB3",icon:"i carbon:mixed-rain-hail",config:{decorationAlt:!0,scale:1.5,backgroundOpacity:.5}}]},{name:"decoFrameB4",desc:"",children:[{decoFrame:"decoFrameB4",counter:369842,config:{}},{decoFrame:"decoFrameB4",icon:"i carbon:center-circle",config:{glow:!1}},{decoFrame:"decoFrameB4",icon:"i carbon:center-circle",config:{backgroundColor:$c.aql8,glowColor:$c.cyl3,textColor:$c.cyl5,decorationColor:[$c.yel3,$c.rel3]}},{decoFrame:"decoFrameB4",icon:"i carbon:center-circle",config:{decorationAlt:!0,scale:1.5,backgroundOpacity:.5}}]}]}),{techTitle:i,pageConfig:u,show:s}=toRefs(t);return onMounted(()=>{nextTick(()=>{t.show=!0})}),(h,p)=>{const d=y("el-radio-button"),_=y("el-radio-group"),l=y("DigitalTransform");return o(),c("div",Ve,[e("div",Le,[(o(!0),c(m,null,$(g(u),(r,a)=>(o(),b(_,{key:a,modelValue:r.current,"onUpdate:modelValue":n=>r.current=n},{default:v(()=>[(o(!0),c(m,null,$(r.children,n=>(o(),b(d,{label:n.label,key:n.label},{default:v(()=>[T(f(n.title),1)]),_:2},1032,["label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),g(s)?(o(),c("div",Ye,[Ie,(o(!0),c(m,null,$(g(i),(r,a)=>(o(),c("div",Re,[e("div",Pe,[e("span",qe,f(r.name),1),e("span",Ue,f(r.subTitle),1),e("span",We,f(r.desc),1)]),e("div",Me,[(o(!0),c(m,null,$(r.children,n=>(o(),c("div",ze,[e("div",Ne,[(o(),b(w(n.decoFrame),{class:C(n.class),config:n.config},{default:v(()=>[n.icon?(o(),c("i",{key:0,class:C(n.icon)},null,2)):B("",!0),n.counter?(o(),b(l,{key:1,class:"numbers",value:n.counter,useGrouping:!0,interval:3e3},null,8,["value"])):B("",!0)]),_:2},1032,["class","config"]))]),g(u).config.current=="cfgOn"?(o(),c("div",Ee,f(n),1)):B("",!0)]))),256))])]))),256))])):B("",!0)])}}};const Ze={class:"adaptivePanel-en deco-demo"},Ge={class:"deco-wrap"},Xe=e("div",{class:"deco-intro"},[e("div",{class:"intro"},"簡介："),e("div",{class:"content"},[e("p",null,"全屏自適應組件 [adaptivePanel] 是為了讓內容快速實現等比例縮放功能一款組件"),e("p",null,[T("在TechUI lite版中的 [adaptivePanel] 僅提供了等比縮放功能，在高級版中，額外有3種縮放模式，可以做到桌面端和移動端的完美適配。請移步至 ["),e("a",{target:"_blank",href:"https://doc.ayin86.com/component/a01-screen-adaptive"},"doc.ayin86.com"),T("] 查看。 ")]),e("p",null,"lite版本種提供的自適應組件，雖然只提供了等比縮放，但已經完全滿足了常規項目的使用需求，事實上市面上絕大多數的數據可視化的適應方式均為等比縮放。 "),e("p",null,"通過自定義width,height參數，甚至能滿足企業拼接屏這樣的使用需求。 "),e("p",null,"本頁面使用了全屏自適應組件，可以通過拖動瀏覽器窗口尺寸來體驗。 ")])],-1),je={class:"code-wrap"},Qe={class:"code-item"},Ke={class:"title"},Je={class:"desc"},et={class:"code-wrap"},tt={__name:"adaptivePanel",setup(A){const t=reactive({}),i=[{title:"正常使用",code:`const state=reactive({
  APConfig:{
    width:1920,
    height:930,
    userSelect:true,//光標是否可以選擇
    chartCount:9//當前圖表總數量，控制loading
  }
})

<adaptivePanel :config="state.APConfig">
  <component></component>
</adaptivePanel>`},{title:"寬高參數默認",desc:"如果不指定width、height，默認情況下wdith=1920,height=1080",code:`const state=reactive({
  APConfig:{
    chartCount:9
  }
})
<adaptivePanel :config="state.APConfig">
  <component></component>
</adaptivePanel>`},{title:"帶魚屏分辨率",desc:"帶魚屏可以看作是兩塊1080p屏幕橫向排列的情況",code:`const state=reactive({
  APConfig:{
    width:3840,
    height:1080,
    loading:false//默認關閉loading
  }
})
<adaptivePanel :config="state.APConfig">
  <component></component>
</adaptivePanel>`},{title:"企業拼接屏4*2",desc:"此分辨率，相當於1080p分辨率橫向4塊，縱向2塊拼接而成。",code:`const state=reactive({
  APConfig:{
    width:7860,
    height:2160,
  }
})
<adaptivePanel :config="state.APConfig">
  <component></component>
</adaptivePanel>`},{title:"其他模式",desc:"lite版本中的 [adaptivePanel] 組件，僅提供了 [proportional] 模式，完整版中額外提供了另外3種縮放模式。通過 [adaptiveType] 參數進行切換",code:`adaptiveType: proportional | advance | scroll | stretch 
proportional模式：等比模式，默認或者設定的視圖尺寸根據瀏覽器窗口進行等比縮放。
advance模式：在適配桌面端屏幕時，在特定的視圖比例範圍內會進行高度的自適應，以達到視圖充滿整個瀏覽器窗口的目的，如全屏模式和最大化窗口模式均能完美適配。
scroll模式：在指定寬度後，其高度會自適應，以適配任意比例的視圖，使用此模式，可以完美適配任意的移動端設備、PC端任意視圖。
stretch模式：拉伸模式，無視原始視圖比例，根據瀏覽器窗口對原始進行拉伸或壓縮，一般用於修正老舊大屏設備視圖拉伸的一種特殊模式，詳情請查閱文檔。
`}];return onMounted(()=>{nextTick(()=>{t.show=!0})}),(u,s)=>(o(),c("div",Ze,[e("div",Ge,[Xe,e("div",je,[(o(),c(m,null,$(i,(h,p)=>e("div",Qe,[e("div",Ke,f(h.title),1),e("div",Je,f(h.desc),1),e("div",et,[e("code",null,f(h.code),1)])])),64))])])]))}},ot={__name:"echart-bar",setup(A){const t=reactive({lineColor:$c.bll7,fontColor:$c.bll3,chartData:{legend:["本地視頻會議","異地視頻會議"],xAxis:["十二月","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月"],colors:[$c.bll4,$c.aql4,$c.ipl3,$c.cbl3],data:[[235,210,187,212,278,220,320,302,301,334,390,330],[68,121,34,56,23,120,132,101,134,90,230,210]]},chartOption:{}}),{lineColor:i,fontColor:u}=toRefs(t),s=()=>{let p=t.chartData.legend,d=t.chartData.colors,_=t.chartData.xAxis,l=t.chartData.data,r=[];p.forEach((a,n)=>{r.push({name:p[n],type:"bar",barWidth:15,label:{show:!1,position:"insideRight"},itemStyle:{color:d[n],borderRadius:5},data:l[n]})}),t.chartOption.series=r,t.chartOption.xAxis.data=_},h=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:[],top:"5",right:60,label:{color:u}},toolbox:{feature:{magicType:{type:["line","bar"]}}},grid:{left:"5%",right:"5%",bottom:"5%",top:"15%",containLabel:!0},yAxis:{type:"value",axisLine:{lineStyle:{color:i}},splitLine:{lineStyle:{color:i}},axisLabel:{color:u,align:"right"}},xAxis:{type:"category",data:[],axisLine:{lineStyle:{color:i}},splitLine:{lineStyle:{color:i}},axisLabel:{color:u,align:"center"}},series:[]},s()};return onMounted(()=>{h()}),(p,d)=>{const _=y("echartsInit");return o(),b(_,{chartOption:g(t).chartOption},null,8,["chartOption"])}}},ct={__name:"echart-barHoriz",setup(A){const t=reactive({lineSPColor:$c.bll8,lineAXColor:$c.bll7,fontColor:$c.bll3,chartData:{legend:["收入","支出"],yAxis:["業務1","業務2","業務3","業務4","業務5","業務6"],colors:[$c.cbl5,$c.orl4],data:[[320,302,341,374,390,450],[-120,-132,-101,-134,-190,-230]]},chartOption:{}}),{lineSPColor:i,lineAXColor:u,fontColor:s}=toRefs(t),h=()=>{let{legend:d,colors:_,yAxis:l,data:r}=t.chartData,a=[];d.forEach((n,x)=>{a.push({name:d[x],type:"bar",barWidth:10,stack:"Total",label:{color:"#fff",show:!0},emphasis:{focus:"series"},itemStyle:{color:$c.fade(_[x],.9),borderRadius:3},data:r[x]})}),t.chartOption.legend.data=d,t.chartOption.series=a,t.chartOption.yAxis.data=l},p=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{right:"10",top:"10",textStyle:{color:s}},grid:{left:"5%",right:"10%",bottom:"8%",top:"25%",containLabel:!0},xAxis:{type:"value",axisLine:{lineStyle:{color:u}},splitLine:{lineStyle:{color:i}},axisLabel:{color:s,align:"center",interval:0}},yAxis:{type:"category",axisTick:{show:!1},data:[],axisLine:{show:!0,lineStyle:{color:i}},splitLine:{show:!1,lineStyle:{color:i}},axisLabel:{formatter:"{value}",color:s,align:"right"}}},h()};return onMounted(()=>{p()}),(d,_)=>{const l=y("echartsInit");return o(),b(l,{chartOption:g(t).chartOption},null,8,["chartOption"])}}},at="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==",nt={__name:"echart-barHorizScroll",setup(A){const t=reactive({lineColor:$c.bll7,fontColor:$c.bll3,chartData:{yAxis:["任務A","任務B","任務C","任務較長名稱D","任務E","任務F","任務G","任務H","任務I"],color:[$c.cyl4,$c.orl5,$c.rel5],data:[69,96,35,26,96,32,52,22,72]},chartOption:{}}),{lineColor:i,fontColor:u}=toRefs(t),s=computed(()=>new Array(t.chartData.data.length).fill(100)),h=r=>{let a=[];for(var n=0;n<r.length;n++)a.push({value:r[n],symbolPosition:"end"});return a},p=()=>{t.chartData.legend,t.chartData.colors,t.chartData.yAxis,t.chartData.data,t.chartOption.yAxis.data=t.chartData.yAxis,t.chartOption.series[0].data=t.chartData.data,t.chartOption.series[1].data=s,t.chartOption.series[2].data=h(t.chartData.data),l()},d=()=>{t.chartOption={update:!1,title:{show:!1,textStyle:{color:$c.cbl5,fontSize:16,fontWeight:"normal"}},grid:{top:"15%",left:"18%",right:"12%",bottom:"5%"},tooltip:{show:!1},xAxis:{type:"value",min:0,max:100,axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},dataZoom:{yAxisIndex:0,show:!1,type:"slider",startValue:0,endValue:5},yAxis:{type:"category",inverse:!0,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,interval:0,margin:10,color:u,fontSize:12,width:50,lineHeight:14,overflow:"breakAll",fontWeight:"normal"},axisTick:{show:!1},data:[]},series:[{type:"bar",barWidth:"40%",animationDuration:2e3,itemStyle:{borderWidth:0,borderRadius:10,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:$c.cyl8},{offset:1,color:$c.cyl4}]}},label:{show:!1},data:[],z:0},{type:"bar",barWidth:"40%",barGap:"-100%",animation:!1,itemStyle:{borderWidth:0,borderRadius:5,color:"rgba(0,202,255,0.2)"},label:{color:u,show:!0,position:["101%","20%"],fontSize:14,fontWeight:"normal",formatter:r=>" "+t.chartData.data[r.dataIndex]+"%"},data:[],z:0},{type:"pictorialBar",animation:!0,animationDuration:3e3,symbol:at,symbolSize:[50,50],symbolOffset:[20,0],z:12,itemStyle:{color:"#fff"},data:[]}]},p()},{proxy:_}=getCtx(),l=()=>{_.$timer("dataScrollBarHorizTest",()=>{let{data:r}=t.chartData,{dataZoom:a}=t.chartOption;a.endValue==r.length?(a.endValue=5,a.startValue=0):(a.endValue++,a.startValue++),t.chartOption.update=!0,l()},5e3)};return onMounted(()=>{d()}),onBeforeMount(()=>{_.$timer("dataScrollBarHorizTest")}),(r,a)=>{const n=y("echartsInit");return o(),b(n,{chartOption:g(t).chartOption},null,8,["chartOption"])}}},rt={__name:"echart-line",setup(A){const t=reactive({lineColor:$c.bll7,fontColor:$c.bll3,chartData:{legend:["本地","異地"],xAxis:["十二月","一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月"],colors:[$c.bll4,$c.aql4,$c.ipl3,$c.cbl3],data:[[235,210,187,212,278,220,320,302,301,334,390,330],[68,121,34,56,23,120,132,101,134,90,230,210]]},chartOption:{}}),{lineColor:i,fontColor:u}=toRefs(t),s=()=>{let p=t.chartData.legend,d=t.chartData.colors,_=t.chartData.xAxis,l=t.chartData.data,r=[];p.forEach((a,n)=>{r.push({name:p[n],type:"line",barWidth:15,label:{show:!1,position:"insideRight"},itemStyle:{color:d[n],borderRadius:5},smooth:!0,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:$c.fade(d[n],.9)},{offset:.8,color:$c.fade(d[n],.1)}],!1),shadowcolor:$c.fade(d[n],.3),shadowBlur:10},data:l[n]})}),t.chartOption.series=r,t.chartOption.xAxis.data=_,t.chartOption.legend.data=p},h=()=>{t.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0,data:[],top:"5",right:10,textStyle:{color:u}},grid:{left:"5%",right:"5%",bottom:"5%",top:"15%",containLabel:!0},yAxis:{type:"value",axisLine:{lineStyle:{color:i}},splitLine:{lineStyle:{color:i}},axisLabel:{color:u,align:"right"}},xAxis:{type:"category",boundaryGap:!1,data:[],axisLine:{lineStyle:{color:i}},splitLine:{lineStyle:{color:i}},axisLabel:{interval:0,color:u,align:"center"}},series:[]},s()};return onMounted(()=>{h()}),(p,d)=>{const _=y("echartsInit");return o(),b(_,{chartOption:g(t).chartOption},null,8,["chartOption"])}}};const lt={class:"echart-wrap"},it={class:"total-digital"},st={class:"desc"},dt={__name:"echart-pie",setup(A){const t=reactive({lineColor:$c.bll7,fontColor:$c.bll3,chartData:{legend:["直接材料費","內部結算成本","其他直接費用","人工成本","折舊及攤銷費","間接費用分攤數"],colors:[$c.bll5,$c.inl3,$c.aql3,$c.yel3,$c.orl3,$c.rel3],data:[325,252,323,183,120,43]},counter:{title:"費用總量",num:1723},chartOption:{}});toRefs(t);const i=()=>{let{legend:s,colors:h,data:p}=t.chartData,d=[];s.forEach((_,l)=>{d.push({value:p[l],name:s[l],itemStyle:{color:h[l]}})}),t.chartOption.series[0].data=d,t.chartOption.legend.data=s},u=()=>{t.chartOption={update:!1,title:{show:!1,text:"",x:"center",top:"32%",textStyle:{color:$c.bll5,fontSize:24,fontWeight:"bold",lineHeight:30}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",show:!0,right:"20",top:"22%",data:[],formatter:s=>{let h;for(let p=0;p<t.chartData.data.length;p++)t.chartData.legend[p]==s&&(h=t.chartData.data[p]);return"{a|"+s+"} {b|"+h+"}"},textStyle:{rich:{a:{fontSize:14,color:$c.bll5,padding:10},b:{fontSize:16,color:$c.cyl5}}}},series:[{name:"数据类别",type:"pie",radius:["40%","65%"],center:["30%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"outside"},itemStyle:{borderRadius:10,borderColor:$c.bll9,borderWidth:5},emphasis:{label:{show:!1,fontSize:"20",color:$c.gyd5}},labelLine:{show:!1},data:[]}]},i()};return onMounted(()=>{u()}),(s,h)=>{const p=y("DigitalTransform"),d=y("echartsInit");return o(),c("div",lt,[e("div",it,[e("span",st,f(g(t).counter.title),1),F(p,{class:"counter",value:g(t).counter.num,interval:1e3,dislocation:!1},null,8,["value"])]),F(d,{chartOption:g(t).chartOption},null,8,["chartOption"])])}}},ut={__name:"echarts-gaugeTriple",setup(A){const t=reactive({chartData:{lineColor:$c.bll7,fontColor:$c.bll3,title:"任務完成情況",legend:["開發任務1","採購任務2","銷售任務3"],colors:[$c.aql4,$c.cyl4,$c.rel4],colorsD:[$c.aql8,$c.cyl8,$c.rer9],data:[72,14,36],radius:["45%","60%","45%"],position:[["17%","55%"],["50%","55%"],["83%","55%"]]},chartOption:{}});toRefs(t);const i=()=>{const{legend:s,colors:h,colorsD:p,data:d,radius:_,position:l}=t.chartData;let r=[];s.forEach((a,n)=>{r.push({type:"gauge",startAngle:90,endAngle:-270,center:l[n],radius:_[n],pointer:{show:!1},title:{fontSize:14},itemStyle:{color:h[n],shadowColor:h[n]},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1,itemStyle:{}},detail:{width:50,height:14,borderColor:"inherit",borderRadius:20,borderWidth:0,formatter:function(x){return"{value|"+x.toFixed(0)+"}{unit|%}"},rich:{value:{fontSize:24,color:h[n],fontWeight:"bolder"},unit:{fontSize:12,color:$c.darken(h[n],1)}}},axisLine:{lineStyle:{color:[[1,$c.darken(h[n],4)]],width:15}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:[{value:d[n],name:s[n],title:{color:$c.lighten(h[n],1),offsetCenter:["0%","30%"]},detail:{valueAnimation:!0,offsetCenter:["0","-30%"]}}]})}),t.chartOption.series=r},u=()=>{t.chartOption={update:!1,series:[]},i()};return onMounted(()=>{u()}),(s,h)=>{const p=y("echartsInit");return o(),b(p,{chartOption:g(t).chartOption},null,8,["chartOption"])}}};const ht={class:"echartsInit-en deco-demo"},gt={key:0,class:"deco-wrap"},pt=e("div",{class:"deco-intro"},[e("div",{class:"intro"},"簡介："),e("div",{class:"content"},[e("p",null,"圖表組件，是基於echarts封裝而來，目的是為了降低其使用難度，添加一些額外功能，如便於統計圖表全局加載數量控制loading效果。 "),e("p",null,"另外，在所有的圖表demo中的數據和配置項均做了分離，方便數據賦值展示。 "),e("p",null,"完全版的圖表組件，提供了智能配色工具，其配色方案集成在了全局主題中。一勞永逸的免去了圖表配色的心智負擔。 ")])],-1),ft={class:"deco-group"},_t={class:"group-content"},bt={class:C("echartsInit-item ")},mt={__name:"echartsInit",setup(A){const t={echartBar:ot,echartBarHoriz:ct,echartBarHorizScroll:nt,echartLine:rt,echartPie:dt,echartsGaugeTriple:ut},i=reactive({show:!0,echartsInit:[{name:"echartsInit",desc:"",children:[{border:"aYinTechBorderB4",chart:"echartBar"},{border:"aYinTechBorderB4",chart:"echartLine"},{border:"aYinTechBorderB4",chart:"echartPie"},{border:"aYinTechBorderB4",chart:"echartBarHoriz"},{border:"aYinTechBorderB4",chart:"echartBarHorizScroll"},{border:"aYinTechBorderB4",chart:"echartsGaugeTriple"}]}]}),{echartsInit:u,pageConfig:s,show:h}=toRefs(i);return onMounted(()=>{nextTick(()=>{i.show=!0})}),(p,d)=>{const _=y("panelTitleA1");return o(),c("div",ht,[g(h)?(o(),c("div",gt,[pt,(o(!0),c(m,null,$(g(u),(l,r)=>(o(),c("div",ft,[e("div",_t,[(o(!0),c(m,null,$(l.children,a=>(o(),c("div",bt,[(o(),b(w(a.border),null,{default:v(()=>[F(_,null,{default:v(()=>[T("圖表標題")]),_:1}),(o(),b(w(t[a.chart])))]),_:2},1024))]))),256))])]))),256))])):B("",!0)])}}};const $t={class:"loading-en deco-demo"},yt={class:"deco-wrap"},vt=e("div",{class:"deco-intro"},[e("div",{class:"intro"},"簡介："),e("div",{class:"content"},[e("p",null,"Loading組件，是一個全屏的組件，用於加載圖表和數據時，提升用戶體驗。 "),e("p",null,"正常情況下，loading組件是不需要單獨調用的，已經內置在adaptivePanel自適應組件中。 "),e("p",null,"兩個參數，show:必填，desc:選填（默認值:Loading）"),e("p",null,"特殊情況下，如需單獨調用，請參考下方的案例。 ")])],-1),At=e("div",{class:"title"},"使用方式",-1),xt=e("div",{class:"desc"},"通過修改show參數來顯示或隱藏Loading",-1),Bt='<loading :show="state.loadingShow"  :desc="state.desc"></loading>',Tt={__name:"loading",setup(A){const t=reactive({loadingShow:!1,desc:"加載中，請稍候"}),{proxy:i}=getCtx(),u=()=>{t.loadingShow=!0,i.$timer("loadingTest",()=>{t.loadingShow=!1},2e3)};return onMounted(()=>{}),onBeforeMount(()=>{i.$timer("loadingTest")}),(s,h)=>{const p=y("techButtonA2"),d=y("loading",!0);return o(),c("div",$t,[e("div",yt,[vt,e("div",{class:"code-wrap"},[e("div",{class:"code-item"},[At,xt,e("div",{class:"code-wrap"},[e("code",null,f(Bt))])])]),F(p,{onClick:u},{default:v(()=>[T("Show Loading")]),_:1})]),F(d,{show:g(t).loadingShow,desc:g(t).desc},null,8,["show","desc"])])}}};const Ct={class:"decorComp-wrap-hk"},wt={class:"sider-nav"},Ft=["onClick","index"],Ot={class:"desc"},kt={class:"decor-content"},St={__name:"layout",setup(A){getCtx();const t=useRouter(),i={techBorder:z,systemTitle:$e,techButton:re,panelTitle:De,decoFrame:He,adaptivePanel:tt,echartsInit:mt,loading:Tt},u=reactive({curentView:"techBorder",decorView:[{label:"科技邊框",comp:"techBorder",icon:"i carbon:bring-to-front"},{label:"系統標題",comp:"systemTitle",icon:"i carbon:circuit-composer"},{label:"科技按鈕",comp:"techButton",icon:"i carbon:blog"},{label:"塊標題",comp:"panelTitle",icon:"i carbon:account"},{label:"裝飾框",comp:"decoFrame",icon:"i carbon:assembly"},{label:"全屏自適應",comp:"adaptivePanel",icon:"i carbon:center-to-fit"},{label:"eCharts",comp:"echartsInit",icon:"i carbon:chart-line"},{label:"Loading",comp:"loading",icon:"i carbon:recording"},{label:"Dashboard",comp:"dashboard",icon:"i carbon:navaid-dme"}]}),s=(d,_)=>{d.comp=="dashboard"?t.push("/dashboardA-hk"):u.curentView=d.comp},{curentView:h,decorView:p}=toRefs(u);return onMounted(()=>{}),(d,_)=>(o(),c("div",Ct,[F(S),F(D),e("div",wt,[(o(!0),c(m,null,$(g(p),(l,r)=>(o(),c("div",{onClick:a=>s(l),class:C(`item ${g(h)==l.comp&&"active"}`),index:r},[e("i",{class:C(l.icon)},null,2),e("span",Ot,f(l.label),1)],10,Ft))),256))]),e("div",kt,[(o(),b(w(i[g(h)])))])]))}},Lt={__name:"components-index",setup(A){const t=reactive({APConfig:{height:1080,backgroundName:"A1",loading:!0}}),{proxy:i}=getCtx(),u=()=>{i.$timer("hideLoading",()=>{t.APConfig.loading=!1},1e3)};return onMounted(()=>{u()}),onBeforeMount(()=>{i.$timer("hideLoading")}),(s,h)=>{const p=y("adaptivePanel");return o(),b(p,{config:g(t).APConfig},{default:v(()=>[F(St)]),_:1},8,["config"])}}};export{Lt as default};