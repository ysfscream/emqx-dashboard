webpackJsonp([10],{"4JYe":function(t,e){},"qB/b":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("fZjL"),n=s.n(a),r=s("mvHQ"),o=s.n(r),i=s("zL8q"),l={name:"http-api",components:{"el-button":i.Button,"el-table":i.Table,"el-table-column":i.TableColumn,"el-card":i.Card},data:function(){return{popoverVisible:!1,nodeName:"emq@127.0.0.1",tableData:[],nodes:[],responseDate:null,scrollTop:0,uri:""}},computed:{jsonFormatter:function(){var t=o()(this.responseDate,null,"\t");return t=(t=t.replace(/\n/g,"<br />")).replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;")}},watch:{nodeInfo:"setApiData"},methods:{isLink:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.target&&-1===t.target.indexOf(":")},init:function(){var t=this,e=this.$store.state.nodeName;this.$httpGet("/nodes").then(function(s){t.nodeName=e||s.data[0].name,t.nodes=s.data,t.setApiData()}).catch(function(e){t.$message.error(e||t.$t("error.networkError"))})},loadResponse:function(t){if(!(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]))return this.responseDate=null,void(document.documentElement.scrollTop=this.scrollTop);if(this.isLink(t))switch(this.uri="/api/v3"+t.target,this.scrollTop=document.documentElement.scrollTop,document.documentElement.scrollTop=0,t.method){case"GET":this.$httpGet(t.target).then(this.handleSuccess).catch(this.handleError);break;case"POST":this.$httpPost(t.target).then(this.handleSuccess).catch(this.handleError);break;case"PUT":this.$httpPut(t.target).then(this.handleSuccess).catch(this.handleError);break;default:this.responseDate=null}},handleSuccess:function(t){this.responseDate=t.data},handleError:function(t){this.$message.error(t||this.$t("error.networkError"))},setApiData:function(){var t=this;this.$httpGet("/").then(function(e){t.tableData=[];var s=o()(e.data);s=s.replace(/:node/g,t.nodeName),s=JSON.parse(s),n()(s).forEach(function(e){t.tableData.push({method:s[e].method,path:"/api/v3"+(s[e].path.startsWith("/")?s[e].path:"/"+s[e].path),target:s[e].path,description:s[e].descr})})})}},created:function(){this.init()}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"http-api"},[s("div",{staticClass:"page-title"},[t._v("\n    "+t._s(t.$t("leftbar.api"))+"\n  ")]),t._v(" "),s("el-card",{staticClass:"el-card--self"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",[t._v(t._s(t.$t("httpApi.introduction")))])]),t._v(" "),s("div",{staticClass:"desc--text",domProps:{innerHTML:t._s(t.$t("httpApi.desc"))}})]),t._v(" "),s("el-card",{staticClass:"el-card--self"},[s("div",{attrs:{slot:"header"},slot:"header"},[t.responseDate?t._e():s("span",[t._v(t._s(t.$t("httpApi.reference")))]),t._v(" "),t.responseDate?s("el-button",{staticClass:"refresh-btn",attrs:{type:"text"},on:{click:function(e){t.loadResponse(null,!1)}}},[s("i",{staticClass:"el-icon-arrow-left"}),t._v("\n        "+t._s(t.$t("httpApi.back"))+"\n      ")]):t._e()],1),t._v(" "),t.responseDate?t._e():s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.loading,expression:"$store.state.loading"}],attrs:{border:"",data:t.tableData}},[s("el-table-column",{attrs:{prop:"method",width:"120",label:t.$t("httpApi.method")}}),t._v(" "),s("el-table-column",{attrs:{"min-width":"160",label:t.$t("httpApi.path")},scopedSlots:t._u([{key:"default",fn:function(e){return[s("a",{class:["link",t.isLink(e.row)?"":"link-disabled"],attrs:{href:"javascript:;"},on:{click:function(s){t.loadResponse(e.row)}}},[t._v("\n            "+t._s(e.row.path)+"\n          ")])]}}])}),t._v(" "),s("el-table-column",{attrs:{"min-width":"240",label:t.$t("httpApi.description")},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{domProps:{innerHTML:t._s(e.row.description)}})]}}])})],1),t._v(" "),t.responseDate?s("div",{staticClass:"response-container"},[s("div",{staticClass:"response-header"},[s("h3",[t._v(t._s(t.$t("httpApi.linkAddress"))+" :\n          "),s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.uri))])]),t._v(" "),s("h3",[t._v(t._s(t.$t("httpApi.data"))+" :")])]),t._v(" "),s("div",{staticClass:"response.body",domProps:{innerHTML:t._s(t.jsonFormatter)}})]):t._e()],1)],1)},staticRenderFns:[]};var d=s("VU/8")(l,c,!1,function(t){s("4JYe")},null,null);e.default=d.exports}});