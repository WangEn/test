(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0741f390"],{b84a:function(t,o,e){"use strict";var s=e("f837"),a=e.n(s);a.a},cb05:function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-arrow icon-arrow-l"})]),e("div",{staticClass:"title"},[t._v("书籍目录")]),e("div",{staticClass:"sort",on:{click:function(o){return t.changeOrder()}}},[t._v(t._s(t.orderBy?"倒序":"正序"))])]),e("cube-scroll",{ref:"scroll",staticClass:"list-wrap",attrs:{data:t.chapters,options:t.options},on:{"pulling-up":t.onPullingUp}},[e("ul",t._l(t.chapters,function(o){return e("li",{key:o._id},[1==o.chapter_level?e("a",{staticClass:"bar",attrs:{href:"javascript:;"}},[e("span",[t._v(t._s(o.chapter_name))])]):e("a",{staticClass:"idx",attrs:{href:"javascript:;"},on:{click:function(e){return t.goRead(t.bookId,o._id)}}},[e("span",[t._v(t._s(o.chapter_name))]),e("i",{staticClass:"icon-arrow"})])])}),0)])],1)])},a=[],r={data:function(){return{chapters:[],orderBy:1,pageIndex:1,bookId:1,isShowMore:!1,pullUpLoad:!0,pullUpLoadThreshold:0,pullUpLoadMoreTxt:"加载中...",pullUpLoadNoMoreTxt:"没有更多数据啦"}},computed:{options:function(){return{pullUpLoad:this.pullUpLoadObj}},pullUpLoadObj:function(){return!!this.pullUpLoad&&{threshold:parseInt(this.pullUpLoadThreshold),txt:{more:this.pullUpLoadMoreTxt,noMore:this.pullUpLoadNoMoreTxt}}}},created:function(){this.bookId=this.$route.params.id,console.log(this.bookId),this.getBookChapter()},mounted:function(){var t=this;this.$nextTick(function(){t.$refs.scroll.refresh()})},methods:{back:function(){this.$router.back()},changeOrder:function(){this.orderBy=!this.orderBy,this.pageIndex=1,this.chapters=[],this.getBookChapter()},getBookChapter:function(){var t=this,o={nid:this.bookId,pn:this.pageIndex,num:20,order:this.orderBy?1:0};this.$post("/chapter/pages",o).then(function(o){if(1e4===o.code){var e=o.result;if(t.chapters=t.chapters.concat(e),t.isShowMore=e&&e.length,t.isShowMore)setTimeout(function(){t.$refs.scroll.refresh()},500);else{var s=t.$createToast({txt:"暂无更多目录信息",type:"txt",mask:!0,time:2e3});s.show(),t.pullUpLoad=!1,t.$refs.scroll.forceUpdate()}}})},onPullingUp:function(){var t=this;setTimeout(function(){t.pageIndex+=1,t.getBookChapter()},1e3)},goRead:function(t,o){this.$router.push({path:"/read/".concat(t,"/").concat(o)})}}},i=r,n=(e("b84a"),e("2877")),c=Object(n["a"])(i,s,a,!1,null,"42031fa3",null);o["default"]=c.exports},f837:function(t,o,e){}}]);
//# sourceMappingURL=chunk-0741f390.2d89e772.js.map