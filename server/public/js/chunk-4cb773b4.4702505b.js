(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cb773b4"],{"7db0":function(t,e,o){"use strict";var n=o("23e7"),r=o("b727").find,a=o("44d2"),i=o("ae40"),c="find",s=!0,u=i(c);c in[]&&Array(1)[c]((function(){s=!1})),n({target:"Array",proto:!0,forced:s||!u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},a2ce:function(t,e,o){t.exports=o.p+"img/card-1.e7842bf2.jpg"},b0c0:function(t,e,o){var n=o("83ab"),r=o("9bf2").f,a=Function.prototype,i=a.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in a)&&r(a,s,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b9cf:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book-detail"},[o("img",{staticClass:"img-overlay",attrs:{src:t.bookImg,alt:""}}),o("div",{staticClass:"book-detail-body"},[o("h3",[t._v(t._s(t.titleBook))]),o("hr"),o("div",{staticClass:"book-content"},[o("font-awesome",{staticClass:"icon",class:{pink:t.isLiked},attrs:{icon:"heart"},on:{click:function(e){return t.toggle("isLiked",t.book._id)}}}),t.book?o("div",[o("p",[t._v("Author : "+t._s(t.book.author?" "+t.book.author.name:null))]),o("p",[t._v("Genre : "+t._s(t.book.genre?" "+t.book.genre:null))]),o("p",[t._v("Release Date : "+t._s(t.setDate))]),o("p",[t._v("Added By: "+t._s(t.book.user_add?t.book.user_add:"Anonymous"))]),o("p",[t._v("Description :"+t._s(t.book.description?" "+t.book.description:" This book doens't have description "))])]):t._e()],1)])])},r=[],a=(o("99af"),o("7db0"),o("b0c0"),o("5530")),i=(o("96cf"),o("1da1")),c=o("5df0"),s=o("63fb"),u=o("94ea"),l={name:"bookDetail",data:function(){return{book:"",month:["January","February","March","April","May","June","July","August","September","October","November","Desember"],imgDefault:o("a2ce"),isLiked:!1,likedBook:[]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.$route.params.bookId,e.prev=1,e.next=4,t.$apollo.query({query:c["QUERY_BOOK"],variables:{id:o}});case 4:n=e.sent,r=n.data.book,t.book=r,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:a=t.user.likedBook,t.setLiked(a);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})))()},methods:{toggle:function(t,e){var o=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o[t]=!o[t],n.prev=1,!o.isLiked){n.next=10;break}return console.log("tambah"),n.next=6,o.$apollo.mutate({mutation:s["LIKED_BOOK"],variables:{bookId:e}});case 6:return r=n.sent,n.abrupt("return",r);case 10:return console.log("hapus"),n.next=13,o.$apollo.mutate({mutation:s["UNLIKED_BOOK"],variables:{bookId:e}});case 13:return a=n.sent,o.$router.go(-1),n.abrupt("return",a);case 16:n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](1),console.log(n.t0);case 21:case"end":return n.stop()}}),n,null,[[1,18]])})))()},setLiked:function(t){var e=this.$route.params.bookId,o=t.find((function(t){if(t)return t._id==e}));return this.isLiked=!!o}},watch:{},computed:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(u["e"])(["user"])),Object(u["c"])(["getLikedBook"])),{},{bookImg:function(){if(this.book){var t=this.book.photo.filename;return t?"http://localhost:5000/img-card/".concat(t):this.imgDefault}return null},titleBook:function(){return this.book?this.book.name.toUpperCase():null},setDate:function(){if(this.book){var t=new Date(this.book.date),e=t.getDate(),o=t.getMonth(),n=t.getFullYear();return"".concat(e,"-").concat(this.month[o],"-").concat(n)}return null}})},b=l,d=(o("d43c"),o("2877")),k=Object(d["a"])(b,n,r,!1,null,"73692277",null);e["default"]=k.exports},d43c:function(t,e,o){"use strict";var n=o("d77a"),r=o.n(n);r.a},d77a:function(t,e,o){}}]);
//# sourceMappingURL=chunk-4cb773b4.4702505b.js.map