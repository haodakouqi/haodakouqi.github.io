(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ce812"],{6079:function(e,n,t){"use strict";t.r(n);var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-row",[t("el-col",[t("el-button",{on:{click:function(n){return e.excelDownload()}}},[e._v("下载")])],1)],1)],1)},o=[],a={name:"excel",data:function(){return{tableData:[{sequence_id:"1",progress:"1",importance:"1",success:"2"}]}},computed:{},mounted:function(){},methods:{excelDownload:function(){var e=this;try{t.e("chunk-8b84bdbe").then(t.bind(null,"acd6")).then((function(n){var t=["序号","状态","重要性","成功概率"],c=["sequence_id","progress","importance","success"],o=e.formatJson(c,e.tableData);console.log(o),n.export_json_to_excel({header:t,data:o,filename:"my_poc"})}))}catch(n){}},formatJson:function(e,n){return n.map((function(n){return e.map((function(e){return n[e]}))}))}}},r=a,u=t("5511"),s=Object(u["a"])(r,c,o,!1,null,"39ca6c92",null);n["default"]=s.exports}}]);