webpackJsonp([14],{IvP6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"rules-view",components:{RuleActions:i("eDC2").a},props:{},data:function(){return{ruleDialogLoading:!1,timer:0,rule:{for:[],metrics:{}},dialogVisible:!1,tableData:[]}},methods:{viewRule:function(t){var e=this;this.rule=t,this.dialogVisible=!0,clearInterval(this.timer),this.timer=setInterval(function(){e.loadDetails(t.id)},1e4)},loadDetails:function(t){var e=this;this.ruleDialogLoading=!0,this.$httpGet("/rules/"+t).then(function(t){var i=t.data;e.rule=i,setTimeout(function(){e.ruleDialogLoading=!1},500)}).catch(function(){e.ruleDialogLoading=!1})},closeDialog:function(){clearInterval(this.timer),this.loadData()},handleDelete:function(t){var e=this;this.$confirm(this.$t("rule.confirm_stop_delete"),"Notice",{confirmButtonClass:"confirm-btn",confirmButtonText:this.$t("oper.confirm"),cancelButtonClass:"cache-btn el-button--text",cancelButtonText:this.$t("oper.cancel"),type:"warning"}).then(function(){e.$httpDelete("/rules/"+t.id).then(function(){e.$message.success(e.$t("rule.delete_success")),e.loadData()})}).catch()},handleOperation:function(){this.$router.push("/rules/0?oper=create")},loadData:function(){var t=this;this.$httpGet("/rules").then(function(e){t.tableData=e.data;var i=t.tableData.find(function(e){return e.id===t.rule.id});i&&(t.rule=i)})}},filters:{actionsFilter:function(t){return t.map(function(t){return t.name}).join(",  ")}},created:function(){this.loadData(),clearInterval(this.timer)},beforeRouteLeave:function(t,e,i){clearInterval(this.timer),i()}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rules-view"},[i("div",{staticClass:"page-title"},[t._v("\n    "+t._s(t.$t("rule.message_rule"))+"\n    "),i("el-button",{staticClass:"confirm-btn",staticStyle:{float:"right"},attrs:{round:"",plain:"",type:"success",icon:"el-icon-plus",size:"medium",disable:t.$store.state.loading},on:{click:t.handleOperation}},[t._v("\n      "+t._s(t.$t("rule.create"))+"\n    ")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.loading,expression:"$store.state.loading"}],attrs:{border:"",data:t.tableData}},[i("el-table-column",{attrs:{prop:"id",label:t.$t("rule.id")},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[i("span",{staticClass:"btn",on:{click:function(e){return t.viewRule(s)}}},[t._v("\n          "+t._s(s.id)+"\n        ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"for",label:t.$t("rule.trigger_events")}}),t._v(" "),i("el-table-column",{attrs:{prop:"rawsql","min-width":"150px",label:"SQL"}}),t._v(" "),i("el-table-column",{attrs:{prop:"actions",label:t.$t("rule.actions")},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return t._l(s.actions,function(e,s){return i("div",{key:s,staticClass:"action-item"},[t._v("\n          "+t._s(e.name)+"\n        ")])})}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"metrics","min-width":"120px",label:t.$t("rule.speed")}},[i("el-table-column",{attrs:{"min-width":"150",prop:"process",label:t.$t("rule.speed_line")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._v("\n          "+t._s(i.metrics.speed)+" / "+t._s(i.metrics.speed_max)+" / "+t._s(i.metrics.speed_last5m)+"\n        ")]}}])})],1),t._v(" "),i("el-table-column",{attrs:{prop:"metrics","min-width":"120px",label:t.$t("rule.metrics")}},[i("el-table-column",{attrs:{"min-width":"150",prop:"process",label:t.$t("rule.matched_line")},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[t._v("\n          "+t._s(i.metrics.matched)+" / "+t._s(i.metrics.nomatch)+"\n        ")]}}])})],1),t._v(" "),i("el-table-column",{attrs:{label:t.$t("rule.oper"),"min-width":"120px"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[i("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:function(e){return t.viewRule(s)}}},[t._v("\n          "+t._s(t.$t("rule.view"))+"\n        ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(e){return t.handleDelete(s)}}},[t._v("\n          "+t._s(t.$t("rule.delete"))+"\n        ")])]}}])})],1),t._v(" "),i("el-dialog",{attrs:{title:t.$t("rule.rule_details"),visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e},close:t.closeDialog}},[i("div",{staticClass:"dialog-preview"},[i("div",{staticClass:"option-item"},[i("div",{staticClass:"option-title"},[t._v(t._s(t.$t("rule.id")))]),t._v(" "),i("div",{staticClass:"option-value"},[t._v(t._s(t.rule.id))])]),t._v(" "),i("div",{staticClass:"option-item"},[i("div",{staticClass:"option-title"},[t._v(t._s(t.$t("rule.trigger_events")))]),t._v(" "),i("div",{staticClass:"option-value"},[t._v(t._s((t.rule.for||[]).join(",")))])]),t._v(" "),i("div",{staticClass:"option-item"},[i("div",{staticClass:"option-title"},[t._v(t._s(t.$t("rule.rule_desc")))]),t._v(" "),i("div",{staticClass:"option-value"},[t._v(t._s(t.rule.description))])]),t._v(" "),i("div",{staticClass:"option-item"},[i("div",{staticClass:"option-title"},[t._v("SQL")]),t._v(" "),i("div",{staticClass:"option-all"},[i("code",[t._v("\n            "+t._s(t.rule.rawsql)+"\n          ")])])]),t._v(" "),i("div",{staticClass:"option-item"},[i("div",{staticClass:"option-title"},[t._v("\n          "+t._s(t.$t("rule.metrics"))+"\n          "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.ruleDialogLoading,expression:"ruleDialogLoading"}],staticClass:"el-icon-loading"})]),t._v(" "),i("div",{staticClass:"option-all"},[i("span",{attrs:{size:"mini",type:"info"}},[t._v("\n            "+t._s(t.$t("rule.speed_current"))+": "),i("span",[t._v(t._s(t.rule.metrics.speed)+"/s")])]),t._v(" "),i("span",{attrs:{size:"mini",type:"info"}},[t._v("\n            "+t._s(t.$t("rule.speed_max_1"))+": "),i("span",[t._v(t._s(t.rule.metrics.speed_max)+"/s")])]),t._v(" "),i("span",{attrs:{size:"mini",type:"info"}},[t._v("\n            "+t._s(t.$t("rule.speed_last5m_1"))+": "),i("span",[t._v(t._s(t.rule.metrics.speed_last5m)+"/s")])]),t._v(" "),i("div",[i("span",{attrs:{size:"mini",type:"info"}},[t._v("\n              "+t._s(t.$t("rule.rule_matched_1"))+": "),i("span",[t._v(t._s(t.rule.metrics.matched))])]),t._v(" "),i("span",{attrs:{size:"mini",type:"info"}},[t._v("\n              "+t._s(t.$t("rule.rule_nomatch_1"))+": "),i("span",[t._v(t._s(t.rule.metrics.nomatch))])])])])]),t._v(" "),i("el-table-column",{attrs:{prop:"description",label:t.$t("rule.description")}}),t._v(" "),i("div",{staticClass:"option-item"},[i("div",{staticClass:"option-title"},[t._v("\n          "+t._s(t.$t("rule.actions"))+"\n          "),i("i",{directives:[{name:"show",rawName:"v-show",value:t.ruleDialogLoading,expression:"ruleDialogLoading"}],staticClass:"el-icon-loading"})]),t._v(" "),i("div",{staticClass:"option-all"},[i("rule-actions",{attrs:{"in-dialog":"",record:t.rule,operations:[]}})],1)])],1),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticClass:"confirm-btn",attrs:{type:"success"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("\n        "+t._s(t.$t("rule.confirm"))+"\n      ")])],1)])],1)},staticRenderFns:[]};var l=i("VU/8")(s,a,!1,function(t){i("Uxlh")},null,null);e.default=l.exports},Uxlh:function(t,e){}});