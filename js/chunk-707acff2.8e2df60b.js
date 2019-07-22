(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-707acff2"],{"2e35":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading-container"},[o("loading")],1),o("div",{staticClass:"container"},[o("div",{ref:"wrapper",staticClass:"book",style:{color:t.fontColor,background:t.background},on:{click:function(e){return t.setRead(e)}}},[0===t.pagingPattern?o("cube-scroll",{ref:"scroll",staticClass:"books-con",attrs:{data:t.pattern}},[o("div",{ref:"content",staticClass:"book-content"},[o("h1",{staticClass:"book-title",style:{fontSize:1.2*t.fontSize+"px"}},[t._v(t._s(t.bookContent.title))]),o("div",{staticClass:"book-inner",style:{fontSize:t.fontSize+"px"},domProps:{innerHTML:t._s(t.currentArticle)}}),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isMoreLoading,expression:"isMoreLoading"}],staticClass:"load-next",on:{click:function(e){return e.stopPropagation(),t.nextChapter(e)}}},[t._v("加载下一章")])])]):t._e(),1===t.pagingPattern?o("div",{staticClass:"read-content"},[o("p",{staticClass:"book-title",staticStyle:{padding:"10px"}},[t._v(t._s(t.bookContent.title))]),o("div",{staticClass:"read-article"},[o("section",{staticClass:"read-section",style:t.styleObject},[o("div",{ref:"bookInner",staticClass:"read-section-inner",style:{columns:t.clWidth-20+"px",columnGap:"10px"},attrs:{id:"bookInner"}},[o("h1",{staticClass:"book-title",style:{fontSize:1.2*t.fontSize+"px"}},[t._v(t._s(t.bookContent.title))]),o("div",{staticClass:"book-inner",style:{fontSize:t.fontSize+"px"},domProps:{innerHTML:t._s(t.currentArticle)}})])])]),o("p",{staticClass:"article-page"},[t._v(t._s(t.currentPaging+"/"+t.resultPaging))])]):t._e()],1),o("div",{staticClass:"page-read-option",class:{"show-panel":t.option},on:{click:function(e){return t.setReadShow()}}},[o("div",{staticClass:"top-controll-bar"},[o("div",{staticClass:"header"},[o("div",{staticClass:"back",on:{click:function(e){return t.$router.back(-1)}}},[o("i",{staticClass:"icon-arrow icon-arrow-l"})]),o("div",{staticClass:"title"},[t._v("书籍目录")]),o("div",{staticClass:"sort"})])]),o("div",{staticClass:"addReader"},[o("p",[t._v(t._s(t.flag?"撤出书架":"加入书架"))])]),o("div",{staticClass:"bottom-controll-bar"},[o("div",{staticClass:"readSet"},[o("div",{staticClass:"readSet-item"},[o("span",{on:{click:function(e){return e.stopPropagation(),t.fontSet("reduce",e)}}},[t._v("Aa-")]),o("span",{on:{click:function(e){return e.stopPropagation(),t.fontSet("add",e)}}},[t._v("Aa+")])]),o("div",{staticClass:"readSet-item pattern"},t._l(t.pattern,function(e,i){return o("span",{key:i,class:{active:t.readePattern===i},on:{click:function(o){return o.stopPropagation(),t.setPattern(e,i)}}},[t._v(t._s(e.item))])}),0),o("div",{staticClass:"readSet-item"},[o("span",{class:{active:0===t.pagingPattern},on:{click:function(e){return e.stopPropagation(),t.setPaging(0)}}},[t._v("上下滑动")]),o("span",{class:{active:1===t.pagingPattern},on:{click:function(e){return e.stopPropagation(),t.setPaging(1)}}},[t._v("左右滑动")])])]),o("cube-button",{staticStyle:{"box-shadow":"none"},attrs:{type:"default"},on:{click:t.prevChapter}},[t._v("上一章")]),o("cube-button",{staticStyle:{"box-shadow":"none"},attrs:{type:"primary"},on:{click:function(e){return e.stopPropagation(),t.setList(e)}}},[t._v("目录")]),o("cube-button",{staticStyle:{"box-shadow":"none"},attrs:{type:"default"},on:{click:t.nextChapter}},[t._v("下一章")])],1)]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.listOption,expression:"listOption"}],staticClass:"chapter-list",on:{click:function(e){return e.stopPropagation(),t.setList(e)}}},[o("div",{staticClass:"chapter-main",style:{transform:"translate3d("+t.chapterWidth+", 0px, 0px)"}},[o("div",{staticClass:"chapter-header"},[o("div",{staticClass:"title"},[t._v("书籍目录")]),o("div",{staticClass:"sort",on:{click:function(e){return e.stopPropagation(),t.changeOrder()}}},[t._v(t._s(t.orderBy?"倒序":"正序"))])]),o("cube-scroll",{ref:"chapters",staticClass:"list-wrap",attrs:{data:t.chapters,options:t.options},on:{"pulling-up":t.onPullingUp}},[o("ul",t._l(t.chapters,function(e){return o("li",{key:e._id},[1==e.chapter_level?o("a",{staticClass:"bar",attrs:{href:"javascript:;"}},[o("span",[t._v(t._s(e.chapter_name))])]):o("a",{staticClass:"idx",attrs:{href:"javascript:;"},on:{click:function(o){return t.getChapter(e._id)}}},[o("span",[t._v(t._s(e.chapter_name))]),o("i",{staticClass:"icon-arrow"})])])}),0)])],1)])])])},n=[],s=(o("a481"),o("7f7f"),o("96cf"),o("3b8d")),a=o("54a1c"),r={name:"Read",data:function(){return{bookId:1,chapterId:1,bookContent:{title:"",content:"内容加载中...",preId:0,nextId:0,level:2,chapterId:1},nextContent:{title:"",content:"内容加载中...",preId:0,nextId:0,level:2,chapterId:1},prevContent:{title:"",content:"内容加载中...",preId:0,nextId:0,level:2,chapterId:1},bookCurrentPage:0,currentArticle:"",bookInfo:{},chapters:[],pattern:[{item:"默认",color:"#5c5d58",background:"#eee6dd"},{item:"夜间",color:"#666",background:"#000"},{item:"护眼",color:"#5c5d58",background:"#c8e8c8"}],offsetX:0,margin:10,currentPaging:1,resultPaging:1,prevResultPaging:1,styleObject:"",isClickPage:!1,fontSize:18,fontColor:"#5c5d58",background:"#eee6dd",chapterWidth:0,readePattern:0,pagingPattern:0,bootPage:0,clWidth:document.documentElement.clientWidth||document.body.clientWidth,option:!1,listOption:!1,flag:!1,loading:!1,isMoreLoading:!1,orderBy:1,pageIndex:1,isShowMore:!1,pullUpLoad:!0,pullUpLoadThreshold:0,pullUpLoadMoreTxt:"加载中...",pullUpLoadNoMoreTxt:"没有更多数据啦"}},created:function(){console.log("pagingPattern:"+this.pagingPattern),this.bookId=this.$route.params.id,this.chapterId=this.$route.params.chapter,this.bookContent.chapterId=this.chapterId,this.getNewUser(),this.getBookDetail(),this.getBookChapter()},mounted:function(){var t=this;this.getUserLocalStorage();var e=this;window.onresize=function(){return function(){e.clWidth=document.body.clientWidth,e.$router.go(0)}()},this.$nextTick(function(){t.$refs.chapters.refresh()})},computed:{options:function(){return{pullUpLoad:this.pullUpLoadObj}},pullUpLoadObj:function(){return!!this.pullUpLoad&&{threshold:parseInt(this.pullUpLoadThreshold),txt:{more:this.pullUpLoadMoreTxt,noMore:this.pullUpLoadNoMoreTxt}}}},methods:{getNewUser:function(){var t=JSON.parse(localStorage.getItem("bootPage"))?JSON.parse(localStorage.getItem("bootPage")):{};t.bootPage?this.bootPage=t.bootPage:this.bootPage=0},setBootPage:function(){var t=JSON.parse(localStorage.getItem("bootPage"))?JSON.parse(localStorage.getItem("bootPage")):{};t={bootPage:1},this.bootPage=1,localStorage.setItem("bootPage",JSON.stringify(t))},getUserLocalStorage:function(){var t=JSON.parse(localStorage.getItem("userSet"))?JSON.parse(localStorage.getItem("userSet")):{};this.fontSize=t.fontSize?t.fontSize:this.fontSize,this.background=t.background?t.background:this.background,this.fontColor=t.color?t.color:this.fontColor,this.readePattern=t.readePattern?t.readePattern:this.readePattern,this.pagingPattern=t.pagingPattern?t.pagingPattern:this.pagingPattern},setUserLocalStorage:function(){var t=JSON.parse(localStorage.getItem("userSet"))?JSON.parse(localStorage.getItem("userSet")):{};t={fontSize:this.fontSize,background:this.background,color:this.fontColor,readePattern:this.readePattern,pagingPattern:this.pagingPattern},localStorage.setItem("userSet",JSON.stringify(t))},getBookDetail:function(){var t=this,e={nid:this.bookId};this.$post("/novel/detail",e).then(function(e){if(1e4===e.code){var o=e.result;t.bookInfo={book_cover:o.book_cover,book_name:o.book_name,author_name:o.author_name,category_name:o.category_name,book_id:o.book_id,book_from_id:o.book_from_id,chapter_list:o.chapter_list},console.log(t.bookInfo),console.log(t.chapterId),t.getChapter(t.chapterId)}})},getContent:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){var o,i,n=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.chapterId),console.log(this.bookContent.chapterId),o=e||this.bookContent.chapterId,i={book_from_id:this.bookInfo.book_from_id,book_id:this.bookId,chapter_id:o},t.abrupt("return",new Promise(function(t,e){n.$post("/chapter/content",i).then(function(e){if(1e4===e.code){var i=e.result,n={title:i.name,content:i.content,preId:i.pre_id,nextId:i.next_id,level:i.level,chapterId:o};t(n)}}).catch(function(t){e(t)})}));case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getChapter:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getContent(e);case 2:this.bookContent=t.sent,console.log(this.bookContent),this.downContent(this.bookContent.content),this.addReadHistory();case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getPrevChapter:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getContent(this.bookContent.preId);case 2:this.prevContent=t.sent,e&&(this.bookContent=this.prevContent,this.downContent(this.bookContent.content),this.addReadHistory());case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),getNextChapter:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getContent(this.bookContent.nextId);case 2:this.nextContent=t.sent,e&&(this.bookContent=this.nextContent,this.downContent(this.bookContent.content),this.addReadHistory());case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),nextChapter:function(){0!==this.bookContent.nextId?(0===this.pagingPattern&&(this.isMoreLoading=!1),this.loading=!0,this.getNextChapter("click"),this.currentPaging=1,this.offsetX=0,this.styleObject="",this.bookCurrentPage++,this.getBookLocalStorage()[this.$route.params.id]&&this.setBookLocalStorage()):this.$createToast({time:2e3,txt:"已经是最后一章了！",type:"text",mask:!0}).show()},prevChapter:function(){0!==this.bookContent.preId?(0===this.pagingPattern&&(this.isMoreLoading=!1),this.getPrevChapter("click"),this.currentPaging=1,this.offsetX=0,this.styleObject="",this.bookCurrentPage--,this.getBookLocalStorage()[this.$route.params.id]&&this.setBookLocalStorage()):this.$createToast({time:2e3,txt:"已经是第一章了！",type:"text",mask:!0}).show()},downContent:function(t){var e,o=this;return this.$fetch(t).then(function(t){o.currentArticle=o.bookChaptersBody(t),console.log(o.currentArticle)}),e},bookChaptersBody:function(t){var e=this,o=/[\u4E00-\u9FA5\uF900-\uFA2D]/g,i=JSON.stringify(t).replace(/^"|"$/g,"");return this.loading=!1,o.test(i)?(i=i.replace(/\s*/g,"").replace(/([\\r\\n]+)/g,"\n").replace(/\\n+/g,"\n").replace(/\n/g,"</p><p>"),i="<p>"+i+"</p>",this.loading=!1,0===this.pagingPattern&&(this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,0,0),setTimeout(function(){e.isMoreLoading=!0},500)),i):(this.loading=!1,"vip章节，请购买或者换源阅读！")},setList:function(){var t=this;this.listOption=!this.listOption,this.option&&(this.listOption&&(this.chapterWidth="-300px",setTimeout(function(){t.$refs.chapters.refresh()},300)),this.option=!this.option)},setPattern:function(t,e){this.option=!0,this.readePattern=e,this.fontColor=t.color,this.background=t.background,this.setUserLocalStorage()},fontSet:function(t,e){if(this.option=!0,"reduce"===t){if(14===this.fontSize)return;this.fontSize-=.8,this.setUserLocalStorage()}if("add"===t){if(22===this.fontSize)return;this.fontSize+=.8,this.setUserLocalStorage()}},setPaging:function(t){this.option=!this.option,this.pagingPattern=t,this.setUserLocalStorage(),1===t?this.$nextTick(function(){var t=this.$refs.bookInner.scrollWidth,e=this.$refs.bookInner.clientWidth;this.resultPaging=Math.floor(t/e)}):(this.$refs.scroll.refresh(),this.$refs.scroll.scrollTo(0,0,0))},setReadShow:function(){this.option=!this.option},setRead:function(t){if(0!==this.pagingPattern){var e=document.documentElement.clientWidth||document.body.clientWidth,o=t.pageX,i=e/3;if(o<=i){if(1===this.currentPaging&&0===this.bookContent.preId)return void this.$createToast({time:2e3,txt:"已经是第一章了！",type:"text",mask:!0}).show();1===this.currentPaging?(this.isClickPage=!0,this.getPrevChapter("click")):(this.currentPaging--,this.offsetX+=e-this.margin,this.styleObject={transform:"translateX("+this.offsetX+"px)",transitionDuration:"0.5s"},this.getBookLocalStorage()[this.$route.params.id]&&this.setBookLocalStorage())}else if(i<=o&&o<=2*i)this.option=!this.option;else if(o>=2*i&&o<=e){if(this.isClickPage=!1,console.log(this.currentPaging,this.resultPaging),this.currentPaging===this.resultPaging&&0===this.bookContent.nextId)return void this.$createToast({time:2e3,txt:"已经是最后一章了！",type:"text",mask:!0}).show();this.currentPaging++,this.resultPaging-this.currentPaging===2&&this.getNextChapter(),this.currentPaging===this.resultPaging+1?(this.styleObject="",this.offsetX=0,this.getNextChapter("click"),this.bookCurrentPage++,this.currentPaging=1,this.getBookLocalStorage()[this.$route.params.id]&&this.setBookLocalStorage()):(this.offsetX-=e-this.margin,this.styleObject={transform:"translateX("+this.offsetX+"px)",transitionDuration:"0.5s"},this.getBookLocalStorage()[this.$route.params.id]&&this.setBookLocalStorage())}}else this.option=!this.option},getBookLocalStorage:function(){var t=JSON.parse(window.localStorage.getItem("book"))?JSON.parse(window.localStorage.getItem("book")):{};return t[this.$route.params.id]&&(this.flag=!0),t},setBookLocalStorage:function(){var t=JSON.parse(window.localStorage.getItem("book"))?JSON.parse(window.localStorage.getItem("book")):{};t[this.$route.params.id].chapterIndexCache=this.bookCurrentPage,t[this.$route.params.id].bookSource=this.BookSourcesId,t[this.$route.params.id].pageIndexCache=this.currentPaging,window.localStorage.setItem("book",JSON.stringify(t))},addReadHistory:function(){var t={book_id:this.bookId,last_chapter:this.bookContent.chapterId};this.$post("/user/add_last_chapter",t).then(function(t){1e4===t.code&&console.log("添加记录成功")})},changeOrder:function(){this.orderBy=!this.orderBy,this.pageIndex=1,this.chapters=[],this.getBookChapter()},getBookChapter:function(){var t=this,e={nid:this.bookId,pn:this.pageIndex,num:30,order:this.orderBy?1:0};this.$post("/chapter/pages",e).then(function(e){if(1e4===e.code){var o=e.result;if(t.chapters=t.chapters.concat(o),t.isShowMore=o&&o.length,t.isShowMore)setTimeout(function(){t.$refs.chapters.refresh()},500);else{var i=t.$createToast({txt:"暂无更多目录信息",type:"txt",mask:!0,time:2e3});i.show(),t.pullUpLoad=!1,t.$refs.chapters.forceUpdate()}}})},onPullingUp:function(){var t=this;setTimeout(function(){t.pageIndex+=1,t.getBookChapter()},1e3)}},components:{Loading:a["a"]},watch:{currentArticle:function(t,e){this.$refs.wrapper.scrollTop=0,1===this.pagingPattern&&this.$nextTick(function(){var t=this.$refs.bookInner.scrollWidth,e=this.$refs.bookInner.clientWidth;this.resultPaging=Math.floor(t/e),this.isClickPage&&(this.currentPaging=this.resultPaging,this.offsetX=-(this.currentPaging-1)*(this.clWidth-this.margin),this.styleObject={transform:"translateX("+this.offsetX+"px)",transitionDuration:"0s"},this.getBookLocalStorage()[this.$route.params.id]&&this.setBookLocalStorage())})},$route:function(t,e){t.params.id!=e.params.id&&(this.bookId=t.params.id,this.getNovelDetail(),this.chapterId=t.params.chapter,this.bookContent.chapterId=this.chapterId,this.getBookDetail())}}},c=r,h=(o("6b0e"),o("2877")),l=Object(h["a"])(c,i,n,!1,null,"538342dd",null);e["default"]=l.exports},"6b0e":function(t,e,o){"use strict";var i=o("bd30"),n=o.n(i);n.a},bd30:function(t,e,o){}}]);
//# sourceMappingURL=chunk-707acff2.8e2df60b.js.map