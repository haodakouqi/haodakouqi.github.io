(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56433d94"],{3358:function(t,e,r){},f152:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project"},[r("div",{staticClass:"button-group"},[r("span",{staticClass:"route-name"},[t._v(t._s(t.$route.meta.title))]),r("el-button",{attrs:{type:"warning",size:"small",icon:"el-icon-plus"},on:{click:function(e){return t.handleAdd("add")}}},[t._v("添加")])],1),r("div",{staticClass:"projectTable"},[r("el-table",{attrs:{data:t.projectList,size:"mini",stripe:""}},[r("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":"",width:"150",align:"center",formatter:t.nameTranslate}}),r("el-table-column",{attrs:{prop:"url",label:"地址",width:"180","show-overflow-tooltip":"",align:"center"}}),r("el-table-column",{attrs:{prop:"admins",label:"管理员","show-overflow-tooltip":"",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[t._v("\n            "+t._s(r.admins.join(", "))+"\n          ")]}}])}),r("el-table-column",{attrs:{prop:"icon",label:"图标","show-overflow-tooltip":"",width:"130",align:"center"}}),r("el-table-column",{attrs:{prop:"desc",label:"备注","min-width":"150",align:"center"}}),r("el-table-column",{attrs:{width:"120",align:"center",label:"操作",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-dropdown",{attrs:{trigger:"click"}},[r("el-button",{attrs:{type:"text",size:"mini"}},[t._v("\n                操作"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[r("el-button",{attrs:{type:"text",size:"mini",icon:"el-icon-edit"},on:{click:function(r){return t.handleAdd("edit",e.row)}}},[t._v("编辑")])],1),r("el-dropdown-item",{attrs:{divided:""}},[r("el-button",{staticClass:"btn-text-red",attrs:{type:"text",size:"mini",icon:"el-icon-delete"},on:{click:function(r){return t.handleDelete(e.row)}}},[t._v("删除")])],1)],1)],1)]}}])})],1),r("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:t.listTitle,visible:t.listVisible,width:"30%",center:""},on:{"update:visible":function(e){t.listVisible=e}}},[r("el-form",{ref:"listForm",attrs:{model:t.listForm,rules:t.inputRules,"status-icon":"","label-width":"90px",size:"small"}},[r("el-form-item",{attrs:{label:"名称：",prop:"name"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择名称"},model:{value:t.listForm.name,callback:function(e){t.$set(t.listForm,"name",e)},expression:"listForm.name"}},t._l(t.nameOptions,(function(t,e,i){return r("el-option",{key:i,attrs:{label:e+"("+t+")",value:e}})})),1)],1)],1)],1),r("el-form-item",{attrs:{label:"地址：",prop:"url"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-input",{attrs:{type:"text"},model:{value:t.listForm.url,callback:function(e){t.$set(t.listForm,"url",e)},expression:"listForm.url"}})],1)],1)],1),r("el-form-item",{attrs:{label:"管理员：",prop:"admins"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",clearable:"",placeholder:"请选择管理员"},model:{value:t.listForm.admins,callback:function(e){t.$set(t.listForm,"admins",e)},expression:"listForm.admins"}},t._l(t.userDataList,(function(t){return r("el-option",{key:t.username,attrs:{label:t.username,value:t.username}})})),1)],1)],1)],1),r("el-form-item",{attrs:{label:"Logo：",prop:"icon"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择Logo"},model:{value:t.listForm.icon,callback:function(e){t.$set(t.listForm,"icon",e)},expression:"listForm.icon"}},t._l(t.logoOptions,(function(t,e){return r("el-option",{key:e,attrs:{label:t,value:t}})})),1)],1)],1)],1),r("el-form-item",{attrs:{label:"排序：",prop:"orderNum"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-input",{attrs:{type:"text"},model:{value:t.listForm.orderNum,callback:function(e){t.$set(t.listForm,"orderNum",e)},expression:"listForm.orderNum"}})],1)],1)],1),r("el-form-item",{attrs:{label:"描述：",prop:"desc"}},[r("el-row",[r("el-col",{attrs:{span:24}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.listForm.desc,callback:function(e){t.$set(t.listForm,"desc",e)},expression:"listForm.desc"}})],1)],1)],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small",type:"warning"},on:{click:t.handleConfirm}},[t._v("确 定")]),r("el-button",{attrs:{size:"small"},on:{click:function(e){t.listVisible=!1}}},[t._v("取 消")])],1)],1)],1)},n=[],l=(r("5ab2"),r("6d57"),r("e10e"),r("cc57"),r("289c")),a=r("5880");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(l["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={data:function(){return{tableHight:0,listForm:{name:"",logo:""},listVisible:!1,listTitle:"",currentPage:1,totalNum:10,pageSize:10,inputRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],url:[{required:!0,message:"请输入地址",trigger:"blur"},{pattern:/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,message:"格式不正确"}],admins:[{type:"array",required:!0,message:"请选择租户管理员",trigger:"change"}],icon:[{required:!0,message:"请选择Logo",trigger:"change"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]},nameOptions:{},projectList:[],logoOptions:{},oldObject:{}}},computed:s({},Object(a["mapState"])({userDataList:function(t){return t.authority.userDataList}})),created:function(){delete this.nameOptions["auth"],this.oldObject=Object.assign({},this.nameOptions),this.tableHight=document.documentElement.clientHeight-200+"px",this.getData(),this.getUserList(this)},methods:s({},Object(a["mapActions"])("authority",["getUserList"]),{getProjectList:function(){var t=this,e={page:t.currentPage,per_page:t.pageSize};t.$axios({method:"get",url:"/oms/uaa/sso/getAll",params:e}).then((function(e){Array.isArray(e.data)?(t.projectList=e.data,t.currentPage=e.currentPage,t.totalNum=e.totalCount):t.projectList=[]})).catch((function(t){return t}))},handleAdd:function(t,e){var r=this;this.nameOptions=Object.assign({},this.oldObject);var i=this.projectList.map((function(t){return t.name}));for(var n in this.nameOptions)i.indexOf(n)>-1&&delete this.nameOptions[n];"edit"===t?(this.listTitle="编辑导航",this.listForm=s({},e)):(this.listTitle="添加导航",this.listForm={admins:[]}),this.listVisible=!0,this.$nextTick((function(){r.$refs.listForm.clearValidate()}))},handleConfirm:function(){var t=this;t.$refs.listForm.validate((function(e){e&&t.listTitle}))},handleDelete:function(t){var e=this,r=this;r.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},getData:function(){this.getProjectList()},handleSizeChange:function(t){this.pageSize=t,this.getData()},handleCurrentChange:function(t){this.currentPage=t,this.getData()},nameTranslate:function(t){return"".concat(t.name,"(").concat(this.oldObject[t.name],")")}})},u=c,p=(r("f257"),r("5511")),m=Object(p["a"])(u,i,n,!1,null,"72717932",null);e["default"]=m.exports},f257:function(t,e,r){"use strict";var i=r("3358"),n=r.n(i);n.a}}]);