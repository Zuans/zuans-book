(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1204608e"],{"34ee":function(e,t,r){},"9a0f":function(e,t,r){"use strict";var a=r("34ee"),o=r.n(a);o.a},b1bf:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"add"}},[r("h1",[e._v("Add Book")]),r("hr"),e.loading.value?r("h2",{staticClass:"mt-5 display-4 text-center"},[e._v("Please wait a seconds...")]):r("div",[r("h3",[e._v("You can add your book here!")]),r("form",{staticClass:"form-add",attrs:{action:"",enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.addBook(t)}}},[r("label",{attrs:{for:"name"}},[e._v("Book Title")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],attrs:{type:"text",name:"",id:"name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),r("label",{attrs:{for:"genre"}},[e._v("Genre")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.genre,expression:"form.genre"}],attrs:{name:"genre",id:"genre"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"genre",t.target.multiple?r:r[0])}}},e._l(e.genres,(function(t,a){return r("option",{key:a,domProps:{value:t.name}},[e._v(e._s(t.name)+" ")])})),0),r("label",{attrs:{for:"author"}},[e._v("Author")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.author_id,expression:"form.author_id"}],attrs:{id:"author"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"author_id",t.target.multiple?r:r[0])}}},e._l(e.authors,(function(t,a){return r("option",{key:a,attrs:{id:"author"},domProps:{value:t._id}},[e._v(e._s(t.name))])})),0),r("label",{attrs:{for:"image"}},[e._v("Book Image")]),r("input",{ref:"file",attrs:{type:"file",id:"image"},on:{change:e.handleUpload}}),r("img",{attrs:{id:"output-img"}}),e.form.photo?r("p",{staticClass:"btn btn-danger w-25",attrs:{id:"delete"},on:{click:e.deleteImg}},[e._v("Delete ")]):e._e(),r("label",{attrs:{for:"genre"}},[e._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.description,expression:"form.description"}],attrs:{cols:"20",rows:"3"},domProps:{value:e.form.description},on:{input:function(t){t.target.composing||e.$set(e.form,"description",t.target.value)}}}),e.success?r("h3",{staticClass:"text-success"},[e._v(e._s(e.success))]):e._e(),e.error?r("h4",{staticClass:"text-danger"},[e._v(e._s(e.error))]):e._e(),r("input",{staticClass:"btn-submit",attrs:{type:"submit",value:"Submit"}})])])])},o=[],n=(r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d"),r("5530")),s=(r("96cf"),r("1da1")),i=r("5df0"),u=r("ed08"),c=r("94ea"),l={name:"bookAdd",data:function(){return{authors:[],genres:[],success:!1,error:!1,form:{name:"",genre:"",description:"",author_id:"",photo:""},formError:{name:"",genre:""}}},inject:["loading"],mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading.value=!0,t.prev=1,t.next=4,e.$apollo.query({query:i["QUERY_AUTHORS"]});case 4:return r=t.sent,a=r.data.authors,e.authors=a,t.next=9,e.$apollo.query({query:i["QUERY_GENRES"]});case 9:return o=t.sent,n=o.data.genres,e.genres=n,t.abrupt("return",setTimeout((function(){e.loading.value=!1}),500));case 15:t.prev=15,t.t0=t["catch"](1),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[1,15]])})))()},methods:Object(n["a"])(Object(n["a"])({},Object(c["b"])(["setImgDefault"])),{},{addBook:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.validation(),a=r.error,!a){t.next=3;break}return t.abrupt("return",e.error=a);case 3:return console.log("Add book function trigger"),t.prev=4,e.loading.value=!0,t.next=8,Object(u["b"])(Object(n["a"])(Object(n["a"])({},e.form),{},{user_add:e.user.username}));case 8:o=t.sent,console.log(o),e.error=!1,setTimeout((function(){e.loading.value=!1,e.clearForm(),e.success="Your book successfully added"}),1e3),t.next=20;break;case 14:t.prev=14,t.t0=t["catch"](4),s=t.t0.message,e.error=s,e.success=!1,e.loading.value=!1;case 20:case"end":return t.stop()}}),t,null,[[4,14]])})))()},handleUpload:function(){var e=document.getElementById("output-img");e.src=URL.createObjectURL(this.$refs.file.files[0]),e.onload=function(){URL.revokeObjectURL(e.src)},this.form.photo=this.$refs.file.files[0]},deleteImg:function(){this.form.photo=!1;var e=document.getElementById("output-img");e.src=""},validation:function(){var e=this.form.name,t=this.form.genre;return e&&" "!=e?t&&" "!=t?{success:!0}:{error:"Genre required"}:{error:"Name required"}},clearForm:function(){this.form={name:"",genre:"",description:"",author_id:"",photo:""}}}),computed:Object(n["a"])({},Object(c["e"])(["user"]))},d=l,m=(r("9a0f"),r("2877")),f=Object(m["a"])(d,a,o,!1,null,"28e98caa",null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-1204608e.c0614166.js.map