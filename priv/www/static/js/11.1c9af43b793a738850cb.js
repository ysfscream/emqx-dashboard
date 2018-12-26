webpackJsonp([11],{QSR2:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=r("Dd8w"),a=r.n(t),o=r("zL8q"),n=r("NYxO"),i={name:"users-view",components:{"el-dialog":o.Dialog,"el-input":o.Input,"el-button":o.Button,"el-table":o.Table,"el-table-column":o.TableColumn,"el-popover":o.Popover,"el-form":o.Form,"el-form-item":o.FormItem,"el-row":o.Row,"el-col":o.Col},data:function(){var e=this;return{changePassword:!1,popoverVisible:!1,dialogVisible:!1,oper:"new",users:[],record:{username:"",password:"",newPassword:"",repeatPassword:"",tags:""},rules:{username:[{required:!0,message:this.$t("users.usernameRequired")},{min:2,max:32,message:this.$t("users.usernameIllegal"),trigger:"change"}],tags:[{required:!0,message:this.$t("users.remarkRequired")}],password:[{required:!0,message:this.$t("users.passwordRequired")},{min:3,max:255,message:this.$t("users.passwordIllegal"),trigger:"change"}],newPassword:[{required:!0,message:this.$t("users.passwordRequired")},{min:3,max:255,message:this.$t("users.passwordIllegal"),trigger:"change"}],repeatPassword:[{required:!0,message:this.$t("users.passwordRequired")},{validator:function(s,r,t){r!==e.record.newPassword?t(new Error(e.$t("users.passwordInconsistent"))):t()},trigger:"change"}]}}},methods:a()({},Object(n.b)(["USER_LOGIN"]),{hidePopover:function(){var e=this;this.popoverVisible=!0,setTimeout(function(){e.popoverVisible=!1},0)},handleOperation:function(){var e=this,s=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=arguments[1];this.changePassword=!1,this.dialogVisible=!0,setTimeout(function(){s?(e.oper="new",e.record={username:"",password:"",newPassword:"",repeatPassword:"",tags:"viewer"}):(e.oper="edit",e.record=a()({},r),e.record.password=""),e.$refs.record.resetFields()},10)},loadData:function(){var e=this;this.$httpGet("/users").then(function(s){e.users=s.data}).catch(function(s){e.$message.error(s||e.$t("error.networkError"))})},createUser:function(){var e=this;"edit"!==this.oper?this.$refs.record.validate(function(s){s&&e.$httpPost("/users",e.record).then(function(){e.$message.success(""+e.$t("users.createUser")),e.loadData(),e.dialogVisible=!1}).catch(function(s){e.$message.error(s||e.$t("error.networkError"))})}):this.updateUser()},updateUser:function(){var e=this;this.$refs.record.validate(function(s){if(s)if(e.changePassword){var r={old_pwd:e.record.password,new_pwd:e.record.newPassword};e.$httpPut("/users/"+e.record.username,e.record).then(function(){e.$httpPut("/change_pwd/"+e.record.username,r).then(function(){e.$store.state.user.username===e.record.username&&e.record.password!==e.record.newPassword?(e.$message.error(e.$t("users.authenticate")),e.USER_LOGIN({isLogOut:!0}),e.$router.push("/login")):(e.$message.success(""+e.$t("oper.edit")+e.$t("alert.success")),e.dialogVisible=!1,e.loadData())}).catch(function(s){e.$message.error(s||e.$t("error.networkError"))})})}else e.$httpPut("/users/"+e.record.username,e.record).then(function(){e.$message.success(""+e.$t("oper.edit")+e.$t("alert.success")),e.dialogVisible=!1,e.loadData()}).catch(function(s){e.$message.error(s||e.$t("error.networkError"))})})},deleteUser:function(e){var s=this;this.$httpDelete("/users/"+e.username).then(function(){s.$message.success(""+s.$t("oper.delete")+s.$t("alert.success")),s.loadData(),s.hidePopover()}).catch(function(e){s.$message.error(e||s.$t("error.networkError"))})}}),created:function(){this.loadData()}},l={render:function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"users-view"},[r("div",{staticClass:"page-title"},[e._v("\n    "+e._s(e.$t("leftbar.users"))+"\n    "),r("el-button",{staticClass:"confirm-btn",staticStyle:{float:"right"},attrs:{round:"",plain:"",type:"success",icon:"el-icon-plus",size:"medium",disabled:e.$store.state.loading},on:{click:function(s){e.handleOperation(!0)}}},[e._v("\n      "+e._s(e.$t("users.newUser"))+"\n    ")])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.$store.state.loading,expression:"$store.state.loading"}],attrs:{border:"",data:e.users}},[r("el-table-column",{attrs:{prop:"username",label:e.$t("users.username")}}),e._v(" "),r("el-table-column",{attrs:{prop:"tags",label:e.$t("users.remark")}}),e._v(" "),r("el-table-column",{attrs:{width:"140",label:e.$t("oper.oper")},scopedSlots:e._u([{key:"default",fn:function(s){return[r("el-button",{attrs:{size:"mini",type:"warning",plain:""},on:{click:function(r){e.handleOperation(!1,s.row)}}},[e._v("\n          "+e._s(e.$t("oper.edit"))+"\n        ")]),e._v(" "),r("el-popover",{attrs:{placement:"right",trigger:"click",value:e.popoverVisible}},[r("p",[e._v(e._s(e.$t("oper.confirmDelete")))]),e._v(" "),r("div",{staticStyle:{"text-align":"right"}},[r("el-button",{staticClass:"cache-btn",attrs:{size:"mini",type:"text"},on:{click:e.hidePopover}},[e._v("\n              "+e._s(e.$t("oper.cancel"))+"\n            ")]),e._v(" "),r("el-button",{attrs:{size:"mini",type:"success",loading:e.$store.state.loading},on:{click:function(r){e.deleteUser(s.row)}}},[e._v("\n              "+e._s(e.$t("oper.confirm"))+"\n            ")])],1),e._v(" "),"admin"!==s.row.username&&e.$store.state.user.username!==s.row.username?r("el-button",{attrs:{slot:"reference",size:"mini",plain:"",type:"danger"},slot:"reference"},[e._v("\n            "+e._s(e.$t("oper.delete"))+"\n          ")]):e._e()],1)]}}])})],1),e._v(" "),r("el-dialog",{attrs:{width:"500px",visible:e.dialogVisible,title:"new"===e.oper?e.$t("users.newUser"):e.$t("users.editUser")},on:{"update:visible":function(s){e.dialogVisible=s}},nativeOn:{keyup:function(s){return"button"in s||!e._k(s.keyCode,"enter",13,s.key,"Enter")?e.createUser(s):null}}},[r("el-form",{ref:"record",staticClass:"el-form--public",attrs:{"label-position":"top",size:"medium",model:e.record,rules:e.rules}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"username",label:e.$t("users.username")}},[r("el-input",{attrs:{disabled:"edit"===e.oper},model:{value:e.record.username,callback:function(s){e.$set(e.record,"username",s)},expression:"record.username"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"tags",label:e.$t("users.remark")}},[r("el-input",{model:{value:e.record.tags,callback:function(s){e.$set(e.record,"tags",s)},expression:"record.tags"}})],1)],1),e._v(" "),"new"===e.oper?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"password",label:e.$t("users.password")}},[r("el-input",{attrs:{type:"password"},model:{value:e.record.password,callback:function(s){e.$set(e.record,"password",s)},expression:"record.password"}})],1)],1):e._e(),e._v(" "),e.changePassword&&"edit"===e.oper?r("div",[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"password",label:e.$t("users.oldPassword")}},[r("el-input",{attrs:{type:"password"},model:{value:e.record.password,callback:function(s){e.$set(e.record,"password",s)},expression:"record.password"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"newPassword",label:e.$t("users.newPassword")}},[r("el-input",{attrs:{type:"password"},model:{value:e.record.newPassword,callback:function(s){e.$set(e.record,"newPassword",s)},expression:"record.newPassword"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{prop:"repeatPassword",label:e.$t("users.confirmNewPassword")}},[r("el-input",{attrs:{type:"password"},model:{value:e.record.repeatPassword,callback:function(s){e.$set(e.record,"repeatPassword",s)},expression:"record.repeatPassword"}})],1)],1)],1):e._e(),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",["edit"===e.oper?r("el-button",{staticClass:"cache-btn change-password",attrs:{type:"text"},on:{click:function(s){e.changePassword=!e.changePassword}}},[e._v("\n              "+e._s(e.changePassword?e.$t("users.dontChangePassword"):e.$t("users.changePassword"))+"\n            ")]):e._e()],1)],1)],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(s){e.dialogVisible=!1}}},[e._v("\n        "+e._s(e.$t("oper.cancel"))+"\n      ")]),e._v(" "),r("el-button",{staticClass:"confirm-btn",attrs:{type:"success",loading:e.$store.state.loading},on:{click:e.createUser}},[e._v("\n        "+e._s(e.$t("oper.save"))+"\n      ")])],1)],1)],1)},staticRenderFns:[]};var c=r("VU/8")(i,l,!1,function(e){r("wJ6l")},null,null);s.default=c.exports},wJ6l:function(e,s){}});