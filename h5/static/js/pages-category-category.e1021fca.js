(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-category"],{"1cc9":function(e,t,a){"use strict";var i=a("b0ed"),n=a.n(i);n.a},"71ab":function(e,t,a){"use strict";a.r(t);var i=a("7655"),n=a("790e");for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);a("1cc9");var d,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"74897de1",null,!1,i["a"],d);t["default"]=l.exports},7655:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[a("v-uni-scroll-view",{staticClass:"left-aside",attrs:{"scroll-y":!0}},e._l(e.flist,(function(t){return a("v-uni-view",{key:t.id,staticClass:"f-item b-b",class:{active:t.id===e.currentId},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.tabtap(t)}}},[e._v(e._s(t.name))])})),1),a("v-uni-scroll-view",{staticClass:"right-aside",attrs:{"scroll-with-animation":!0,"scroll-y":!0,"scroll-top":e.tabScrollTop},on:{scroll:function(t){arguments[0]=t=e.$handleEvent(t),e.asideScroll.apply(void 0,arguments)}}},e._l(e.slist,(function(t){return a("v-uni-view",{key:t.id,staticClass:"s-list",attrs:{id:"main-"+t.id}},[a("v-uni-text",{staticClass:"s-item"},[e._v(e._s(t.name))]),a("v-uni-view",{staticClass:"t-list"},e._l(e.tlist,(function(i){return i.pid===t.id?a("v-uni-view",{key:i.id,staticClass:"t-item",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navToList(t.id,i.id)}}},[a("v-uni-image",{attrs:{src:i.picture}}),a("v-uni-text",[e._v(e._s(i.name))])],1):e._e()})),1)],1)})),1)],1)},r=[]},"790e":function(e,t,a){"use strict";a.r(t);var i=a("aaa1"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);t["default"]=n.a},aaa1:function(e,t,a){"use strict";var i=a("4ea4");a("99af"),a("4de4"),a("c740"),a("4160"),a("26e9"),a("ac1f"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var n=i(a("1da1")),r={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:1,flist:[],slist:[],tlist:[]}},onLoad:function(){this.loadData()},methods:{loadData:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.json("cateList");case 2:a=t.sent,a.forEach((function(t){t.pid?t.picture?e.tlist.push(t):e.slist.push(t):e.flist.push(t)}));case 4:case"end":return t.stop()}}),t)})))()},tabtap:function(e){this.sizeCalcState||this.calcSize(),this.currentId=e.id;var t=this.slist.findIndex((function(t){return t.pid===e.id}));this.tabScrollTop=this.slist[t].top},asideScroll:function(e){this.sizeCalcState||this.calcSize();var t=e.detail.scrollTop,a=this.slist.filter((function(e){return e.top<=t})).reverse();a.length>0&&(this.currentId=a[0].pid)},calcSize:function(){var e=0;this.slist.forEach((function(t){var a=uni.createSelectorQuery().select("#main-"+t.id);a.fields({size:!0},(function(a){t.top=e,e+=a.height,t.bottom=e})).exec()})),this.sizeCalcState=!0},navToList:function(e,t){uni.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(e,"&tid=").concat(t)})}}};t.default=r},b0ed:function(e,t,a){var i=a("e8d6");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("efcc0abe",i,!0,{sourceMap:!1,shadowMode:!1})},e8d6:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.u-line-1[data-v-74897de1]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.u-line-2[data-v-74897de1]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3[data-v-74897de1]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4[data-v-74897de1]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5[data-v-74897de1]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border[data-v-74897de1]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top[data-v-74897de1]{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left[data-v-74897de1]{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right[data-v-74897de1]{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom[data-v-74897de1]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom[data-v-74897de1]{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button[data-v-74897de1]{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button[data-v-74897de1]::after{border:none}.u-hover-class[data-v-74897de1]{opacity:.7}.u-flex[data-v-74897de1],\n.u-flex-row[data-v-74897de1],\n.u-flex-x[data-v-74897de1]{display:flex;flex-direction:row}.u-flex-y[data-v-74897de1],\n.u-flex-column[data-v-74897de1]{display:flex;flex-direction:"column"}.u-flex-x-center[data-v-74897de1]{display:flex;flex-direction:row;justify-content:center}.u-flex-xy-center[data-v-74897de1]{display:flex;flex-direction:row;justify-content:center;align-items:center}.u-flex-y-center[data-v-74897de1]{display:flex;flex-direction:row;align-items:center}.u-flex-x-left[data-v-74897de1]{display:flex;flex-direction:row}.u-flex-x-reverse[data-v-74897de1],\n.u-flex-row-reverse[data-v-74897de1]{flex-direction:row-reverse}.u-flex-y-reverse[data-v-74897de1],\n.u-flex-column-reverse[data-v-74897de1]{flex-direction:column-reverse}.u-flex.u-flex-reverse[data-v-74897de1],\n.u-flex-row.u-flex-reverse[data-v-74897de1],\n.u-flex-x.u-flex-reverse[data-v-74897de1]{flex-direction:row-reverse}.u-flex-column.u-flex-reverse[data-v-74897de1],\n.u-flex-y.u-flex-reverse[data-v-74897de1]{flex-direction:column-reverse}.u-flex-fill[data-v-74897de1]{flex:1 1 auto}.u-margin-top-auto[data-v-74897de1],\n.u-m-t-auto[data-v-74897de1]{margin-top:auto!important}.u-margin-right-auto[data-v-74897de1],\n.u-m-r-auto[data-v-74897de1]{margin-right:auto!important}.u-margin-bottom-auto[data-v-74897de1],\n.u-m-b-auto[data-v-74897de1]{margin-bottom:auto!important}.u-margin-left-auto[data-v-74897de1],\n.u-m-l-auto[data-v-74897de1]{margin-left:auto!important}.u-margin-center-auto[data-v-74897de1],\n.u-m-c-auto[data-v-74897de1]{margin-left:auto!important;margin-right:auto!important}.u-margin-middle-auto[data-v-74897de1],\n.u-m-m-auto[data-v-74897de1]{margin-top:auto!important;margin-bottom:auto!important}.u-flex-wrap[data-v-74897de1]{flex-wrap:wrap}.u-flex-wrap-reverse[data-v-74897de1]{flex-wrap:wrap-reverse}.u-flex-start[data-v-74897de1]{justify-content:flex-start}.u-flex-center[data-v-74897de1]{justify-content:center}.u-flex-end[data-v-74897de1]{justify-content:flex-end}.u-flex-between[data-v-74897de1]{justify-content:space-between}.u-flex-around[data-v-74897de1]{justify-content:space-around}.u-flex-items-start[data-v-74897de1]{align-items:flex-start}.u-flex-items-center[data-v-74897de1]{align-items:center}.u-flex-items-end[data-v-74897de1]{align-items:flex-end}.u-flex-items-baseline[data-v-74897de1]{align-items:baseline}.u-flex-items-stretch[data-v-74897de1]{align-items:stretch}.u-flex-self-start[data-v-74897de1]{align-self:flex-start}.u-flex-self-center[data-v-74897de1]{align-self:center}.u-flex-self-end[data-v-74897de1]{align-self:flex-end}.u-flex-self-baseline[data-v-74897de1]{align-self:baseline}.u-flex-self-stretch[data-v-74897de1]{align-self:stretch}.u-flex-content-start[data-v-74897de1]{align-content:flex-start}.u-flex-content-center[data-v-74897de1]{align-content:center}.u-flex-content-end[data-v-74897de1]{align-content:flex-end}.u-flex-content-between[data-v-74897de1]{align-content:space-between}.u-flex-content-around[data-v-74897de1]{align-content:space-around}.u-flex-middle[data-v-74897de1]{justify-content:center;align-items:center;align-self:center;align-content:center}.u-flex-grow[data-v-74897de1]{flex-grow:1}.u-flex-shrink[data-v-74897de1]{flex-shrink:1}uni-page-body[data-v-74897de1],\n.content[data-v-74897de1]{height:100%;background-color:#f8f8f8}.content[data-v-74897de1]{display:flex}.left-aside[data-v-74897de1]{flex-shrink:0;width:%?200?%;height:100%;background-color:#fff}.f-item[data-v-74897de1]{display:flex;align-items:center;justify-content:center;width:100%;height:%?100?%;font-size:%?28?%;color:#606266;position:relative}.f-item.active[data-v-74897de1]{color:#fa436a;background:#f8f8f8}.f-item.active[data-v-74897de1]:before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);height:%?36?%;width:%?8?%;background-color:#fa436a;border-radius:0 4px 4px 0;opacity:.8}.right-aside[data-v-74897de1]{flex:1;overflow:hidden;padding-left:%?20?%}.s-item[data-v-74897de1]{display:flex;align-items:center;height:%?70?%;padding-top:%?8?%;font-size:%?28?%;color:#303133}.t-list[data-v-74897de1]{display:flex;flex-wrap:wrap;width:100%;background:#fff;padding-top:%?12?%}.t-list[data-v-74897de1]:after{content:"";flex:99;height:0}.t-item[data-v-74897de1]{flex-shrink:0;display:flex;justify-content:center;align-items:center;flex-direction:column;width:%?176?%;font-size:%?26?%;color:#666;padding-bottom:%?20?%}.t-item uni-image[data-v-74897de1]{width:%?140?%;height:%?140?%}body.?%PAGE?%[data-v-74897de1]{background-color:#f8f8f8}',""]),e.exports=t}}]);