(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17770087"],{"68a0":function(e,t,n){"use strict";var r=n("b0b0"),i=n.n(r);i.a},b0b0:function(e,t,n){},de6b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"friends"}},e._l(e.friends,(function(t,r){return n("div",{key:r,staticClass:"type-wrap"},[n("p",[e._v(e._s(t.name))]),n("div",{staticClass:"friends-wrap"},e._l(t.list,(function(t,r){return n("a",{key:r,attrs:{href:t.url,target:"_blank"}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0)])})),0)},i=[],a=(n("5ab2"),n("6d57"),n("e10e"),n("289c")),s=n("5880");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"friends",components:{},data:function(){return{friends:[],loading:!1}},created:function(){this.friends=this.getFriends()},methods:o({},Object(s["mapGetters"])("app",["getFriends"]))},f=u,p=(n("68a0"),n("5511")),d=Object(p["a"])(f,r,i,!1,null,"f105beca",null);t["default"]=d.exports}}]);