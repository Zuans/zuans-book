(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5f7bea6"],{"0797":function(e,t,n){},"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},3384:function(e,t,n){"use strict";var r=n("0797"),a=n.n(r);a.a},"841c":function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),o=n("1d80"),s=n("129f"),u=n("14c3");r("search",1,(function(e,t,n){return[function(t){var n=o(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var o=a(e),c=String(this),i=o.lastIndex;s(i,0)||(o.lastIndex=0);var l=u(o,c);return s(o.lastIndex,i)||(o.lastIndex=i),null===l?-1:l.index}]}))},cffc:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list-book"},[n("h1",[e._v("Book List")]),n("div",{staticClass:"line-dark"}),n("div",{staticClass:"filter-book"},[n("MyInput",{staticClass:"mt-5",attrs:{id:"searchBook",align:"left",bdrColor:"blue",label:"Search Book",size:"lg"},on:{onInput:function(t){return e.searchBook(t)}}}),n("MyOptions",{attrs:{id:"genre-list",data:e.genres,defOption:"Select Genre"},on:{optionsChange:function(t){return e.findByGenre(t)}}}),n("MyOptions",{attrs:{id:"author-list",data:e.authors,defOption:"Select Author"},on:{optionsChange:function(t){return e.findByAuthor(t)}}})],1),0==e.bookData.length?n("div",{staticClass:"empty-data"},[n("h2",[e._v("No result found")])]):e._e(),e.status?n("div",{staticClass:"alert-wrapper",on:{click:function(t){e.status=null}}},[n("MyAlert",{attrs:{status:e.status,msg:e.msg}})],1):e._e(),n("div",{staticClass:"table-wrapper"},[n("div",{staticClass:"book-table"},[e.loaded&&e.bookData.length>0?n("MyTable",{attrs:{headerBg:"success",headerTxt:"white"},scopedSlots:e._u([{key:"head",fn:function(){return[n("tr",[n("td",[e._v("Name")]),n("td",[e._v("Author")]),n("td",[e._v("User")]),n("td",[e._v("Genre")]),n("td",[e._v("Date")]),n("td",[e._v("Action")])])]},proxy:!0},{key:"data",fn:function(){return e._l(e.bookData,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t.name))]),n("td",[e._v(e._s(t.author?t.author.name:"Unknown"))]),n("td",[e._v(e._s(t.user_add))]),n("td",[e._v(e._s(t.genre))]),n("td",[e._v(e._s(e.setDate(t.date)))]),n("td",{staticClass:"d-flex justify-content-between"},[n("button",{staticClass:"btn btn-primary",on:{click:function(n){return e.editBook(t._id)}}},[n("font-awesome",{attrs:{icon:["fas","edit"]}})],1),n("button",{staticClass:"btn btn-danger",on:{click:function(n){return e.deleteBook(t._id)}}},[n("font-awesome",{attrs:{icon:["fas","trash-alt"]}})],1)])])}))},proxy:!0}],null,!1,3476716416)}):e._e(),n("BtnPaginate",{attrs:{currentPage:e.currentPage,nextPage:e.nextPage,lastPage:0==e.bookData.length},on:{gotoPage:function(t){return e.getDataPage(t)}}})],1),n("div",{staticClass:"table-genre"},[n("MyTable",{attrs:{headerBg:"black",headerTxt:"white"},scopedSlots:e._u([{key:"head",fn:function(){return[n("tr",[n("td",{staticClass:"text-center"},[e._v("Genre")])])]},proxy:!0},{key:"data",fn:function(){return[e._l(e.genres,(function(t,r){return n("tr",{key:r},[n("td",[n("p",[e._v(e._s(t.name))]),n("font-awesome",{staticClass:"trash-icon",attrs:{icon:["fas","trash-alt"]},on:{click:function(n){return e.deleteGenre(t._id)}}})],1)])})),n("tr",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputGenre,expression:"inputGenre"}],staticClass:"addGenre",attrs:{type:"text",placeholder:"add genre",name:"addGenre",id:"addGenre"},domProps:{value:e.inputGenre},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addGenre(t)},input:function(t){t.target.composing||(e.inputGenre=t.target.value)}}})])]},proxy:!0}])})],1)])])},a=[],o=(n("4de4"),n("d3b7"),n("ac1f"),n("841c"),n("96cf"),n("1da1")),s=n("ed08"),u={name:"listBook",components:{MyTable:function(){return n.e("chunk-4628f2ec").then(n.bind(null,"387b"))},MyInput:function(){return n.e("chunk-9ca0ed12").then(n.bind(null,"b480"))},MyAlert:function(){return n.e("chunk-64bef144").then(n.bind(null,"62f4"))},MyOptions:function(){return n.e("chunk-4396cc4e").then(n.bind(null,"6301"))},BtnPaginate:function(){return n.e("chunk-b6581a82").then(n.bind(null,"2c3d"))}},data:function(){return{loaded:!1,bookData:[],genres:[],authors:[],status:!1,msg:"",inputGenre:"",currentPage:parseInt(this.$route.query.page)||1,nextPage:!0,limit:5,search:{result:!0,key:"",genre:"",author:""}}},inject:["loading"],mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading.value=!0,t.next=4,Object(s["p"])(e.limit,e.currentPage,e.search);case 4:return n=t.sent,r=n.books,e.bookData=r,t.next=9,Object(s["j"])();case 9:return e.genres=t.sent,t.next=12,Object(s["h"])();case 12:e.authors=t.sent,e.loaded=!0,setTimeout((function(){return e.loading.value=!1}),1e3),e.status=e.$route.params.status,"success"==e.status?e.msg="Update Book Success":e.msg="Error please refresh page",t.next=23;break;case 19:t.prev=19,t.t0=t["catch"](0),e.loading.value=!1,console.log(t.t0);case 23:case"end":return t.stop()}}),t,null,[[0,19]])})))()},methods:{setDate:function(e){return Object(s["q"])(e)},editBook:function(e){console.log("Masuk dengan id buku ".concat(e)),this.$router.push({name:"admin-book-edit",params:{bookId:e,page:this.currentPage},query:{key:this.search.key,author:this.search.author,genre:this.search.genre}})},searchBook:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,t.search.key=e,t.filterBook(),1!=t.$route.query.page){n.next=5;break}return n.abrupt("return");case 5:t.$router.push({name:"admin-book",query:{page:1}}),n.next=13;break;case 8:n.prev=8,n.t0=n["catch"](0),console.log(n.t0),t.search.result=!1,t.search.key="";case 13:case"end":return n.stop()}}),n,null,[[0,8]])})))()},filterBook:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["p"])(e.limit,1,e.search);case 2:n=t.sent,r=n.books,e.bookData=r;case 5:case"end":return t.stop()}}),t)})))()},findByGenre:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.search.genre=e,n.next=4,t.filterBook();case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},findByAuthor:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.search.author=e,n.next=4,t.filterBook();case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},deleteBook:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(s["f"])(e,t.currentPage,t.limit);case 3:return t.status="success",t.msg="Delete Book success",n.next=6,t.removeBook(e);case 6:t.bookData=n.sent,n.next=13;break;case 9:n.prev=9,n.t0=n["catch"](0),t.status=!0,t.msg=n.t0;case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))()},deleteGenre:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,Object(s["e"])(e);case 4:n=t.sent,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},addGenre:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.inputGenre,t.prev=1,t.next=4,Object(s["b"])(n);case 4:return r=t.sent,e.inputGenre="",t.abrupt("return",r);case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},getDataPage:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.currentPage=e,n.next=4,Object(s["p"])(5,e,t.search);case 4:if(r=n.sent,a=r.books,o=r.pageInfo,0!=a.length||t.search.result){n.next=9;break}return n.abrupt("return",t.resetSearch());case 9:t.bookData=a,t.nextPage=o.hasNextPage,t.$router.push({name:"admin-book",query:{page:e}}),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},resetSearch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["p"])(5,1,"");case 2:n=t.sent,r=n.books,a=n.pageInfo,e.bookData=r,e.pageInfo=a.hasNextPage,e.currentPage=1,e.$router.push({name:"admin-book",query:{page:1}});case 8:case"end":return t.stop()}}),t)})))()},removeBook:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.bookData.filter((function(t){return t._id!==e})),n.abrupt("return",r);case 2:case"end":return n.stop()}}),n)})))()}}},c=u,i=(n("3384"),n("2877")),l=Object(i["a"])(c,r,a,!1,null,"c5270164",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-a5f7bea6.0bbd864a.js.map