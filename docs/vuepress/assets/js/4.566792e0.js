(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{385:function(t,i,a){},419:function(t,i,a){"use strict";var s=a(385);a.n(s).a},424:function(t,i,a){"use strict";a.r(i);a(79);var s={data:function(){return{dialogX:null,quanyi:[{cover:"http://ued.rr.tv/icon_qiandao_s.png",title:"超值优惠",desc:"续费61折"},{cover:"http://ued.rr.tv/icon_qiandao_s.png",title:"省心省力",desc:"自由续费可取消"},{cover:"http://ued.rr.tv/icon_qiandao_s.png",title:"高速升级",desc:"赠小蜜蜂勋章"}]}},methods:{createDialog:function(){this.dialogX=new window.VueDialogX(window.Vue)},customDialog:function(){var t=this;this.dialogX||this.createDialog();var i=this.$createElement("div",{class:"quanyi-dialog-message"},this.quanyi.map((function(i){return t.$createElement("div",{class:"quanyi-dialog-message-item"},[t.$createElement("img",{attrs:{src:i.cover,style:"width: 33px;margin-bottom: 0.1rem"},class:"quanyi-dialog-message-item-cover"}),t.$createElement("div",{class:"quanyi-dialog-message-item-title"},i.title),t.$createElement("div",{class:"quanyi-dialog-message-item-desc"},i.desc)])})));this.dialogX.confirm({title:"取消自动续费",vnode:i})},dialogXFn:function(t){this.dialogX||this.createDialog(),"dialog"===t?this.dialogX[t]({html:'<img src="//pt-starimg.didistatic.com/static/starimg/img/XEowm9ygfF1544626192687.png" />'}):"actions"===t?this.dialogX[t]({actions:[{okText:"王者荣耀"},{okText:"DotA 2"},{okText:"Bilibili"},{okText:"爱奇艺"}]}):this.dialogX[t]({message:"hello，DialogX"})}},mounted:function(){(adsbygoogle=window.adsbygoogle||[]).push({google_ad_client:"ca-pub-6177820902567416",enable_page_level_ads:!0}),this.dialogX=new window.VueDialogX(window.Vue)}},o=(a(419),a(51)),e=Object(o.a)(s,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("a",{attrs:{href:"https://travis-ci.org/a62527776a/vue-dialog-x"}},[a("img",{attrs:{src:"https://travis-ci.org/a62527776a/vue-dialog-x.svg?branch=master"}})]),t._v(" "),a("a",{attrs:{href:"https://coveralls.io/github/a62527776a/vue-dialog-x?branch=master"}},[a("img",{attrs:{src:"https://coveralls.io/repos/github/a62527776a/vue-dialog-x/badge.svg?branch=master",alt:"Coverage Status"}})]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-dialog-x"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/vue-dialog-x.svg"}})]),t._v(" "),a("br"),t._v(" "),a("img",{attrs:{alt:"npm type definitions",src:"https://img.shields.io/npm/types/vue-dialog-x"}}),t._v(" "),a("img",{attrs:{alt:"npm",src:"https://img.shields.io/npm/v/vue-dialog-x"}}),t._v(" "),a("p",[a("strong",[t._v("VueDialogX")]),t._v("的孵化是由于作者在工作性质决定的。\n作者在日常的工作中，经常接到各种各样简单的H5页面需求，活动页需求")]),t._v(" "),a("p",[t._v("这些需求有着共同的一点，就是业务不算复杂，对于组件库中大量的组件无需用到")]),t._v(" "),a("p",[t._v("仅对Dialog、Toast有着高频需求。所以在开发时，pass掉组件库。希望有一个好用，美观，且满足需求的弹窗库。"),a("strong",[t._v("VueDialogX")]),t._v("便孵化出来了。")]),t._v(" "),[a("button",{staticClass:"button",on:{click:function(i){return t.dialogXFn("alert")}}},[t._v("点我试试 Alert")]),t._v(" "),a("button",{staticClass:"button",on:{click:function(i){return t.dialogXFn("confirm")}}},[t._v("点我试试 Confirm")]),t._v(" "),a("button",{staticClass:"button",on:{click:function(i){return t.dialogXFn("prompt")}}},[t._v("点我试试 Prompt")]),a("br"),t._v(" "),a("button",{staticClass:"button",on:{click:function(i){return t.dialogXFn("actions")}}},[t._v("点我试试 actions")]),t._v(" "),a("button",{staticClass:"button",on:{click:function(i){return t.dialogXFn("dialog")}}},[t._v("点我试试 Dialog")]),t._v(" "),a("button",{staticClass:"button",on:{click:t.customDialog}},[t._v("点我试试 自定义布局")])],t._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2020/04/29/vEIHMmgAk6T2KlP.gif",alt:"自定义布局"}}),t._v(" "),a("img",{attrs:{src:"https://img.rr.tv/fe/2019715/alert.gif",alt:"8.gif"}}),t._v(" "),a("img",{attrs:{src:"http://ued.rr.tv/0.3367761200861381%E5%BC%82%E6%AD%A5%E5%85%B3%E9%97%AD.gif",alt:"8.gif"}}),t._v(" "),a("img",{attrs:{src:"https://img.rr.tv/fe/2019715/prompt.gif",alt:"8.gif"}}),t._v(" "),a("img",{attrs:{src:"http://ued.rr.tv/0.25007438216585354actionswait.gif",alt:"8.gif"}}),t._v(" "),a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5738345-0b61e6d1d6a27605.gif?imageMogr2/auto-orient/strip",alt:"弹窗图示"}})]),t._v(" "),a("h2",{attrs:{id:"它能做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#它能做什么"}},[t._v("#")]),t._v(" 它能做什么")]),t._v(" "),a("p",[t._v("除了基本的alert、comfirm、prompt以外 我们还横向扩展了选项组的actions，以及自定义填充图片或者内容的dialog。")]),t._v(" "),a("p",[t._v("满足了基本需求外，我们还纵向扩展了点击弹窗时的异步载入能力，使其满足需要点击后加载数据，加载完成才能关闭弹窗的场景。")]),t._v(" "),a("p",[t._v("对于prompt，我们还提供了轻量可扩展的文本域校验以及错误提示。")]),t._v(" "),a("p",[t._v("由于该组件面向小型项目以及非工程化的项目，我们提供了umd打包的版本以及window打包的版本，以满足所有零碎项目的需求。")]),t._v(" "),a("p",[t._v("面向开发者，我们提供了完善的类型推导文件(d.ts)。使其在开发过程中拥有能够更好的体验。由于是基于Typescript开发的，我们的组件对Typescript项目拥有完全的亲和力。")]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("p",[a("strong",[t._v("丰富的弹窗类型")])]),t._v(" "),a("p",[a("strong",[t._v("完善的类型推导")])]),t._v(" "),a("p",[a("strong",[t._v("基于Promise")])]),t._v(" "),a("p",[a("strong",[t._v("优雅的异步关闭")])]),t._v(" "),a("p",[a("strong",[t._v("经典的iOS设计风格")])]),t._v(" "),a("p",[a("strong",[t._v("支持渲染html")])]),t._v(" "),a("p",[a("strong",[t._v("支持script标签引入")])])],2)}),[],!1,null,null,null);i.default=e.exports}}]);