webpackJsonp([9],{"5jEA":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("P4ji"),l={data:function(){return{handleFlag:"",importanceLoading:!0,addVisible:!1,editVisible:!1,delVisible:!1,importanceData:[],del_id:"",form:{param_id:"",param_value:""},idx:-1}},created:function(){this.getImportanceData()},methods:{getFilters:function(t){for(var a=[],e=0;e<t.length;e++){var i={};i.text=t[e].param_value,i.value=t[e].param_id,a.push(i)}return a},getImportanceData:function(){var t=this;this.importanceLoading=!0,this.$axios.get(i.a.importanceApi,{}).then(function(a){t.importanceData=a.data.data,t.importanceLoading=!1,t.$store.commit("changImportanceData",t.getFilters(a.data.data))})},resetForm:function(){this.form={param_id:"",param_value:""}},importanceAdd:function(){this.resetForm(),this.addVisible=!0,this.handleFlag="importanceAdd"},saveAdd:function(){var t=this;this.$axios.post(i.a.saveAddPI,{param_value:this.form.param_value}).then(function(a){t.importanceData.unshift(t.form),t.addVisible=!1,t.$message.success("添加成功"),t.getImportanceData()})},importanceEdit:function(t,a){this.idx=t;var e=this.importanceData[t];this.form={param_value:e.param_value,param_id:e.param_id},this.editVisible=!0,this.handleFlag="importanceEdit"},saveEdit:function(){var t=this;this.$axios.post(i.a.saveEditPI,{param_id:this.form.param_id,param_value:this.form.param_value}).then(function(a){t.importanceData.unshift(t.form),t.editVisible=!1,t.$message.success("编辑成功"),t.getImportanceData()})},importanceDel:function(t,a){this.idx=t,this.delVisible=!0,this.del_id=a.param_id,this.handleFlag="importanceDel"},deleteRow:function(){var t=this;this.$axios.delete(i.a.deletePI+this.del_id,{}).then(function(a){t.importanceData.unshift(t.form),t.delVisible=!1,t.$message.success("删除成功"),t.getImportanceData()})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table"},[e("el-row",[e("el-col",{attrs:{span:24}},[e("div",{staticClass:"container"},[e("div",{staticClass:"my-title"},[t._v("重要性\n                    "),e("el-button",{staticClass:"add-btn-ps",attrs:{size:"small",type:"primary"},on:{click:t.importanceAdd}},[t._v("添加")])],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.importanceLoading,expression:"importanceLoading"}],staticStyle:{width:"100%"},attrs:{data:t.importanceData,border:"",stripe:""}},[e("el-table-column",{attrs:{align:"center",label:"序号",width:"100",prop:"param_id"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"名称",prop:"param_value"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"small"},on:{click:function(e){t.importanceEdit(a.$index,a.row)}}},[t._v("编辑")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){t.importanceDel(a.$index,a.row)}}},[t._v("\n                                删除\n                            ")])]}}])})],1)],1)])],1),t._v(" "),e("el-dialog",{attrs:{title:"添加",visible:t.addVisible,width:"30%",center:""},on:{"update:visible":function(a){t.addVisible=a}}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"90px",size:"mini"}},[e("el-form-item",{attrs:{label:"添加值"}},[e("el-input",{model:{value:t.form.param_value,callback:function(a){t.$set(t.form,"param_value",a)},expression:"form.param_value"}})],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.addVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.saveAdd}},[t._v("确 定")])],1)],1),t._v(" "),e("el-dialog",{attrs:{title:"编辑",visible:t.editVisible,width:"30%",center:""},on:{"update:visible":function(a){t.editVisible=a}}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"170px",size:"mini"}},[e("el-form-item",{attrs:{label:"编辑值"}},[e("el-input",{model:{value:t.form.param_value,callback:function(a){t.$set(t.form,"param_value",a)},expression:"form.param_value"}})],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),t._v(" "),e("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(a){t.delVisible=a}}},[e("div",{staticClass:"del-dialog-cnt"},[t._v("删除不可恢复，是否确定删除？")]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(a){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var n=e("C7Lr")(l,o,!1,function(t){e("EEuB")},"data-v-2215d574",null);a.default=n.exports},EEuB:function(t,a){}});