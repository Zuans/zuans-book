(function(e){function n(n){for(var r,a,c=n[0],i=n[1],s=n[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var c=t[a];0!==o[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0c308024":"7f87ea83","chunk-2b469bfa":"91959b1c","chunk-498519d4":"e96c697c","chunk-7e1be2b3":"1ce8cec5","chunk-432efc76":"c2d0a80c","chunk-43498454":"65489084","chunk-43dfbc91":"85538e4f","chunk-5377f474":"a4e032fc","chunk-622d6bac":"ccd83464","chunk-6a026dd1":"ea980b75","chunk-b9ce5f4e":"3ed79a53","chunk-d34b5f22":"25247bac","chunk-11e096ae":"e2a96ad7","chunk-508b4a5e":"a3251d5a"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0c308024":1,"chunk-498519d4":1,"chunk-7e1be2b3":1,"chunk-432efc76":1,"chunk-43498454":1,"chunk-43dfbc91":1,"chunk-5377f474":1,"chunk-622d6bac":1,"chunk-6a026dd1":1,"chunk-b9ce5f4e":1,"chunk-d34b5f22":1,"chunk-11e096ae":1,"chunk-508b4a5e":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c308024":"b9cebb74","chunk-2b469bfa":"31d6cfe0","chunk-498519d4":"4af64ed5","chunk-7e1be2b3":"ba5462eb","chunk-432efc76":"b0316269","chunk-43498454":"48e0a12a","chunk-43dfbc91":"ae5682bb","chunk-5377f474":"72ecbb91","chunk-622d6bac":"0311b470","chunk-6a026dd1":"3afd3eb3","chunk-b9ce5f4e":"f5eff81f","chunk-d34b5f22":"d36114ac","chunk-11e096ae":"748c5569","chunk-508b4a5e":"15657c72"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],d.parentNode.removeChild(d),t(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("85ec"),a=t.n(r);a.a},3689:function(e,n,t){},"3c30":function(e,n,t){"use strict";var r=t("d295"),a=t.n(r);a.a},"4c25":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],u=t("5530"),c=(t("96cf"),t("1da1")),i=t("94ea"),s={name:"App",components:{},data:function(){return{token:localStorage.getItem("apollo-token")}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.token){n.next=10;break}return n.prev=1,n.next=4,e.userQuery();case 4:n.next=10;break;case 6:n.prev=6,n.t0=n["catch"](1),e.userLogout(),e.$router.push({name:"error",params:{msg:"error-token"}});case 10:case"end":return n.stop()}}),n,null,[[1,6]])})))()},methods:Object(u["a"])({},Object(i["b"])(["userLogout","userQuery"]))},l=s,f=(t("034f"),t("2877")),d=Object(f["a"])(l,a,o,!1,null,null,null),h=d.exports,m=t("522d"),b=t("7e05"),p=t("8c4f"),g=(t("5b3d"),t("7db1"),t("ecee")),v=t("c074"),k=t("f2d1"),_=t("ad3d"),O=(t("45fc"),t("d3b7"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("MyHeader"),t("div",{staticClass:"content"},[t("TheHero"),t("HomeContent"),t("TheFramework")],1),t("MyFooter")],1)}),w=[],y={name:"homePage",components:{MyHeader:function(){return Promise.resolve().then(t.bind(null,"9839"))},TheHero:function(){return t.e("chunk-6a026dd1").then(t.bind(null,"f341"))},HomeContent:function(){return t.e("chunk-d34b5f22").then(t.bind(null,"42b8"))},TheFramework:function(){return t.e("chunk-43dfbc91").then(t.bind(null,"83c9"))},MyFooter:function(){return Promise.resolve().then(t.bind(null,"a3d9"))}},data:function(){return{token:localStorage.getItem("apollo-token")}},methods:Object(u["a"])({},Object(i["d"])({setUser:"SET_USER"})),computed:{testState:function(){return this.$store.state.auth.userId}}},j=y,S=(t("f26d"),Object(f["a"])(j,O,w,!1,null,"108574fa",null)),$=S.exports,P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"auth"},[t("div",{staticClass:"row no-gutters"},[t("div",{staticClass:"col-lg-4"},[t("div",{staticClass:"form-card mx-auto py-4"},[t("transition",{attrs:{name:"form"}},[t("router-view")],1)],1)]),e._m(0)])])},E=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"col-lg-8 side-right"},[t("div",{staticClass:"wallpaper-wrapper"},[t("h1",[e._v("Zuans Book")])])])}],x={name:"authPage"},C=x,I=(t("eada"),Object(f["a"])(C,P,E,!1,null,"35f77474",null)),T=I.exports,B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"feature"}},[t("header",[t("MyHeader")],1),t("div",{staticClass:"feature-content"},[t("router-view")],1),t("MyFooter")],1)},A=[],U=t("9839"),L=t("a3d9"),R={name:"featurePage",components:{MyHeader:U["default"],MyFooter:L["default"]}},q=R,F=(t("694b"),Object(f["a"])(q,B,A,!1,null,"e5c9face",null)),H=F.exports,M=new p["a"]({mode:"history",routes:[{path:"/",name:"home",component:$},{path:"/auth",name:"auth",component:T,children:[{path:"login/:error",name:"loginError",component:function(){return t.e("chunk-622d6bac").then(t.bind(null,"c8c3"))},meta:{hasAuth:"false"}},{path:"login",name:"login",component:function(){return t.e("chunk-622d6bac").then(t.bind(null,"c8c3"))},meta:{hasAuth:"false"}},{path:"register",name:"register",component:function(){return Promise.all([t.e("chunk-2b469bfa"),t.e("chunk-498519d4")]).then(t.bind(null,"597e"))},meta:{hasAuth:"false"}}]},{path:"/feature",name:"feature",component:H,children:[{path:"book-search",name:"book-search",component:function(){return t.e("chunk-43498454").then(t.bind(null,"c8bc"))}},{path:"book-add/:success",name:"book-add-success",component:function(){return Promise.all([t.e("chunk-2b469bfa"),t.e("chunk-7e1be2b3")]).then(t.bind(null,"b1bf"))}},{path:"book-add",name:"book-add",component:function(){return Promise.all([t.e("chunk-2b469bfa"),t.e("chunk-7e1be2b3")]).then(t.bind(null,"b1bf"))},meta:{hasAuth:!0}},{path:"book-all",name:"book-all",component:function(){return t.e("chunk-432efc76").then(t.bind(null,"9c24"))}},{path:"book-detail/:bookId",name:"book-detail",component:function(){return t.e("chunk-b9ce5f4e").then(t.bind(null,"b9cf"))}},{path:"book-like",name:"book-like",component:function(){return t.e("chunk-5377f474").then(t.bind(null,"fe8b"))}}]},{path:"/error/:msg",name:"error",component:function(){return t.e("chunk-0c308024").then(t.bind(null,"a54b"))}}]});M.beforeEach((function(e,n,t){var r=localStorage.getItem("logIn"),a=localStorage.getItem("apollo-token");return e.matched.some((function(e){return"false"==e.meta.hasAuth}))?r&&a?t({name:"home"}):t():e.matched.some((function(e){return e.meta.hasAuth}))?r||a?t():t({name:"login",params:{error:"Please Login or register to get more feature"}}):t()})),M.beforeEach((function(e,n,t){e.matched.length?t():t("/error/not-found")}));var N=M,Q={auth:{userId:"",logIn:!1,accessToken:"",tokenExpiration:0},error:[],user:{avatar:{filename:""},email:"",likedBook:[],username:""},isPanelOpen:!1},Z={SET_AUTH:function(e,n){e.auth=Object(u["a"])({},n),e.auth.logIn=!0,localStorage.setItem("apollo-token",n.accessToken),localStorage.setItem("logIn",!0)},SET_USER:function(e,n){e.user=Object(u["a"])({},n)},SET_ERROR:function(e,n){e.error=n},LOGOUT_USER:function(e){e.auth={},localStorage.removeItem("apollo-token"),localStorage.removeItem("logIn"),e.user=!1},togglePanel:function(e,n){return e.isPanelOpen=n}},D=(t("99af"),t("74ca")),G=t("2bf2"),J=t("0014"),W=t.n(J),z=t("d634"),K=new z["a"]((function(e,n){return e.setContext({headers:{authorization:localStorage.getItem("apollo-token")?"Bearer ".concat(localStorage.getItem("apollo-token")):null}}),n(e)})),V=W()({uri:"/graphql"}),X=K.concat(V),Y=new D["a"]({link:X,cache:new G["a"]}),ee=new m["a"]({defaultClient:Y}),ne=t("5df0"),te=t("63fb"),re={userQuery:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(n){var t,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.commit,r=n.state,e.prev=1,e.next=4,Y.query({query:ne["h"]});case 4:return a=e.sent,o=a.data.user,e.next=8,t("SET_USER",o);case 8:return e.abrupt("return",r.user);case 11:throw e.prev=11,e.t0=e["catch"](1),new Error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));function n(n){return e.apply(this,arguments)}return n}(),userAuth:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.commit,a=n.dispatch,e.prev=1,e.next=4,Y.query({query:ne["a"],variables:t});case 4:return o=e.sent,u=o.data.authUser,e.next=8,r("SET_AUTH",u);case 8:return e.next=10,a("userQuery");case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e["catch"](1),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));function n(n,t){return e.apply(this,arguments)}return n}(),userRegister:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(n,t){var r,a,o,u,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.dispatch,a=t.username,o=t.email,u=t.password,c=t.avatar,i={email:o,password:u},e.prev=3,e.next=6,Y.mutate({mutation:te["c"],variables:{username:a,email:o,password:u,avatar:c}});case 6:return e.next=8,r("userAuth",i);case 8:e.next=13;break;case 10:throw e.prev=10,e.t0=e["catch"](3),new Error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));function n(n,t){return e.apply(this,arguments)}return n}(),userLogout:function(e){var n=e.commit;n("LOGOUT_USER")}},ae={getLikedBook:function(e){return e.user.likedBook}};r["default"].use(i["a"]),r["default"].config.devtools=!0;var oe=new i["a"].Store({state:Q,mutations:Z,actions:re,getters:ae});g["c"].add(v["j"],v["i"],v["a"],v["g"],v["h"],v["c"],v["f"],v["e"],v["d"],v["b"],k["b"],k["a"],k["c"]),r["default"].component("font-awesome",_["a"]),r["default"].use(m["a"]),r["default"].use(p["a"]),r["default"].use(b["a"]),r["default"].config.productionTip=!1,new r["default"]({router:N,store:oe,apolloProvider:ee,render:function(e){return e(h)}}).$mount("#app")},"5df0":function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return p})),t.d(n,"h",(function(){return g})),t.d(n,"b",(function(){return v})),t.d(n,"g",(function(){return k})),t.d(n,"c",(function(){return _})),t.d(n,"f",(function(){return O}));var r=t("8785"),a=t("9530"),o=t.n(a);function u(){var e=Object(r["a"])(["\n  query( $key: String!) {\n    txtBook( key: $key) {\n      _id\n      name\n      genre\n      date\n      description\n      author {\n        name\n      }\n      photo {\n        filename\n      }\n    }\n  }\n"]);return u=function(){return e},e}function c(){var e=Object(r["a"])(["\n  query($id : String!) {\n    author(id: $id) {\n      name\n      books {\n        _id\n        name\n        genre\n        date\n        description\n        photo {\n          filename\n        }\n      }\n    }\n  }\n"]);return c=function(){return e},e}function i(){var e=Object(r["a"])(["\n  query {\n    genres {\n      name\n    }\n  }\n"]);return i=function(){return e},e}function s(){var e=Object(r["a"])(["\n  query {\n    authors {\n      _id\n      name\n    } \n  }\n"]);return s=function(){return e},e}function l(){var e=Object(r["a"])(["\n  query {\n    user {\n      username\n      email\n      avatar {\n        filename\n      }\n      likedBook {\n        _id\n        name\n        genre\n        date\n        description\n        author {\n          name\n        }\n        photo {\n          filename\n        }\n      }\n    }\n  }\n"]);return l=function(){return e},e}function f(){var e=Object(r["a"])(["\nquery  { \n    books {\n        _id\n        name\n        genre\n        date\n        description\n        user_add\n        author {\n          name\n        }\n        photo {\n          filename\n        }\n    }\n}\n"]);return f=function(){return e},e}function d(){var e=Object(r["a"])(["\n  query( $id: String!) {\n    book( id: $id) {\n      _id\n      name\n      genre\n      date\n      description\n      user_add\n      author {\n        name\n      }\n      photo {\n        filename\n      }\n    }\n  }\n"]);return d=function(){return e},e}function h(){var e=Object(r["a"])(["\nquery($email: String!, $password: String!) {\n    authUser(email: $email, password: $password) {\n      userId\n      accessToken\n      tokenExpire\n    }\n  }\n"]);return h=function(){return e},e}var m=o()(h()),b=o()(d()),p=o()(f()),g=o()(l()),v=o()(s()),k=o()(i()),_=o()(c()),O=o()(u())},"63fb":function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return h}));var r=t("8785"),a=t("9530"),o=t.n(a);function u(){var e=Object(r["a"])(["\n  mutation($bookId : String!) {\n    unlikedBook( bookId: $bookId) {\n      success\n      error\n    }\n  }\n"]);return u=function(){return e},e}function c(){var e=Object(r["a"])(["\n   mutation($bookId : String!) {\n    likedBook( bookId: $bookId) {\n      success\n      error\n    }\n  }\n"]);return c=function(){return e},e}function i(){var e=Object(r["a"])(["\n   mutation($name: String!, $genre: String!, $description: String $photo: Upload, $user_add: String,  $author_id: String!) {\n     addBook( name: $name, genre: $genre, description: $description, photo: $photo, user_add: $user_add, author_id: $author_id ) {\n        name\n        genre\n     }\n   }\n"]);return i=function(){return e},e}function s(){var e=Object(r["a"])(["\n            mutation($username: String!, $email: String!, $avatar: Upload, $password: String!) {\n              addUser(username: $username, email: $email, avatar:$avatar, password: $password) {\n                email\n              }\n            }\n          "]);return s=function(){return e},e}var l=o()(s()),f=o()(i()),d=o()(c()),h=o()(u())},"694b":function(e,n,t){"use strict";var r=t("90f0"),a=t.n(r);a.a},"804f":function(e,n,t){"use strict";var r=t("3689"),a=t.n(r);a.a},"85ec":function(e,n,t){},"90f0":function(e,n,t){},9839:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"header"},[t("nav",{staticClass:"navigation"},[t("h1",{staticClass:"title-lg"},[e._v("Zuans")]),t("BurgerItem")],1),t("SideBarItem",[t("h2",{staticClass:"sidebar-title"},[e._v("Zuans Book")]),e.user?t("div",{staticClass:"user-profile"},[t("img",{class:{"img-avatar":e.user.avatar},attrs:{src:e.user.avatar,id:"avatar",alt:""}}),t("h3",[e._v("Hello "+e._s(e.user.username))])]):e._e(),t("ul",{staticClass:"sidebar-list"},[t("li",[t("a",{attrs:{href:"/"},on:{click:function(n){return e.togglePanel(!1)}}},[e._v("Home")])]),t("li",[t("a",{attrs:{href:"#"},on:{click:e.toggleFeature}},[e._v(" Book "),t("font-awesome",{staticClass:"ml-1",attrs:{icon:["fas","caret-down"]}})],1),t("transition",{attrs:{name:"showFeature"}},[e.showFeature?t("div",{staticClass:"pt-3"},[t("li",[t("a",{attrs:{href:"/feature/book-add"},on:{click:function(n){return e.togglePanel(!1)}}},[e._v("Add")])]),t("li",[t("a",{attrs:{href:"/feature/book-search"},on:{click:function(n){return e.togglePanel(!1)}}},[e._v("Search")])]),t("li",[t("a",{attrs:{href:"/feature/book-all"},on:{click:function(n){return e.togglePanel(!1)}}},[e._v("List Book")])])]):e._e()])],1),t("li",[t("a",{attrs:{href:"/#about"},on:{click:function(n){return e.togglePanel(!1)}}},[e._v("About")])]),e.user?t("li",[t("a",{attrs:{href:"/feature/book-like"},on:{click:function(n){return e.togglePanel(!1)}}},[e._v("Wishlist")])]):e._e(),t("li",[e.user?t("button",{staticClass:"btn btn-outline-light px-4 py-2",on:{click:function(n){return e.goTo("logout")}}},[e._v("Logout")]):t("button",{staticClass:"btn btn-success px-4 py-2",on:{click:function(n){return e.goTo("login")}}},[e._v("Login")])])])])],1)},a=[],o=t("5530"),u=t("94ea"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{class:{active:e.isBurgerOpen},attrs:{id:"burger"},on:{click:function(n){return n.preventDefault(),e.toggle(n)}}},[e._t("default",[e._m(0)])],2)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{staticClass:"button-burger"},[t("div")])}],s={name:"burgerItem",data:function(){return{isBurgerActive:!1}},methods:Object(o["a"])(Object(o["a"])({},Object(u["d"])(["togglePanel"])),{},{toggle:function(){return this.isBurgerActive=!this.isBurgerActive,this.togglePanel(this.isBurgerActive)}}),computed:Object(o["a"])({},Object(u["e"])({isBurgerOpen:"isPanelOpen"}))},l=s,f=(t("804f"),t("2877")),d=Object(f["a"])(l,c,i,!1,null,"74decc2a",null),h=d.exports,m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"sidebar"},[e.isPanelOpen?t("div",{staticClass:"sidebar-backdroop",on:{click:e.closeSidePanel}}):e._e(),t("transition",{attrs:{name:"slide"}},[e.isPanelOpen?t("div",{staticClass:"sidebar-panel"},[e._t("default")],2):e._e()])],1)},b=[],p={name:"menuSide",data:function(){return{}},methods:Object(o["a"])(Object(o["a"])({},Object(u["d"])(["togglePanel"])),{},{closeSidePanel:function(){this.togglePanel(!1)}}),computed:Object(o["a"])({},Object(u["e"])(["isPanelOpen"]))},g=p,v=(t("b092"),Object(f["a"])(g,m,b,!1,null,"60a93320",null)),k=v.exports,_={name:"myHeader",data:function(){return{dataUser:"",showFeature:!0}},components:{BurgerItem:h,SideBarItem:k},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(u["b"])(["userLogout"])),Object(u["d"])(["togglePanel"])),{},{goTo:function(e){if("logout"==e)return this.userLogout(),this.dataUser=!1,this.$router.go();this.togglePanel(!1),this.$router.push({name:"".concat(e)})},toggleFeature:function(){this.showFeature=!this.showFeature}}),computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(u["e"])(["auth"])),Object(u["e"])({getUser:"user"})),{},{user:function(){if(localStorage.getItem("logIn")){var e=this.getUser,n=e.avatar.filename,t=e.username;return{avatar:"/img-avatar/".concat(n),username:t}}return null}})},O=_,w=(t("fdad"),Object(f["a"])(O,r,a,!1,null,"9cdf4062",null));n["default"]=w.exports},a3d9:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"footer"}},[t("div",{staticClass:"footer-wrapper"},[t("div",{staticClass:"date"},[t("h1",[e._v(" 2020 "),t("font-awesome",{attrs:{icon:["fas","copyright"]}})],1)]),t("div",{staticClass:"name"},[t("p",[e._v(" Made With "),t("font-awesome",{staticClass:"heart-icon",attrs:{icon:"heart"}}),e._v("By Zuans ")],1),e._m(0)])])])},a=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v(" Illustrations from "),t("a",{attrs:{href:"https://www.freepik.com/",target:"_blank"}},[e._v("Freepik.com")])])}],o={},u=o,c=(t("3c30"),t("2877")),i=Object(c["a"])(u,r,a,!1,null,"4759e598",null);n["default"]=i.exports},a749:function(e,n,t){},af7e:function(e,n,t){},b092:function(e,n,t){"use strict";var r=t("4c25"),a=t.n(r);a.a},cbff:function(e,n,t){},d295:function(e,n,t){},eada:function(e,n,t){"use strict";var r=t("af7e"),a=t.n(r);a.a},f26d:function(e,n,t){"use strict";var r=t("cbff"),a=t.n(r);a.a},fdad:function(e,n,t){"use strict";var r=t("a749"),a=t.n(r);a.a}});
//# sourceMappingURL=app.b0d977f3.js.map