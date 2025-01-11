(function(){var e={5127:function(e,t,o){"use strict";var i=o(6848),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-aside",{attrs:{width:"200px"}},[t("Aside")],1),t("el-container",[t("el-header",[t("Header")],1),t("el-main",[t("router-view")],1)],1)],1)],1)},l=[],r=function(){var e=this,t=e._self._c;return t("div",[t("Main_ICONVue"),t("Nav_menuVue")],1)},s=[],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-size"},[t("el-image",{staticStyle:{width:"100px",height:"70px"},attrs:{src:o(6993)}})],1)},d=[],u={name:"Main_Icon.vue"},c=u,m=o(1656),p=(0,m.A)(c,n,d,!1,null,"3b04744b",null),f=p.exports,h=function(){var e=this,t=e._self._c;return t("div",[t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"}},[t("el-menu-item",{attrs:{index:"1"},on:{click:function(t){return e.returnHome()}}},[t("i",{staticClass:"el-icon-s-home"}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])])],1)],1)},v=[],b=(o(4114),{methods:{returnHome(){this.$router.push({name:"home"}).catch((e=>{}))}}}),g=b,_=(0,m.A)(g,h,v,!1,null,null,null),I=_.exports,y={name:"Aside.vue",components:{Main_ICONVue:f,Nav_menuVue:I}},V=y,w=(0,m.A)(V,r,s,!1,null,null,null),C=w.exports,x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"top-head"},[t("Search_bar"),""==e.username||null==e.username?t("Login_Btn"):t("Username_link",{attrs:{username:e.username}})],1)},k=[],S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-bar"},[t("el-input",{staticClass:"search-input",attrs:{placeholder:"请输入要搜索的内容, 宁可少字也不要错字~~"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.toSearch.apply(null,arguments)}},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),t("el-button",{staticClass:"search-but",attrs:{plain:""},on:{click:e.toSearch}},[t("i",{staticClass:"el-icon-search"}),e._v("搜索 ")])],1)},T=[],$={name:"Search_bar.vue",data(){return{input:""}},methods:{toSearch(){}}},U=$,N=(0,m.A)(U,S,T,!1,null,null,null),L=N.exports,E=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-btn"},[t("el-button",{attrs:{type:"info",round:""},on:{click:function(t){e.dialogVisible=!0}}},[e._v("登录账户")]),t("el-dialog",{attrs:{title:"账户登录",visible:e.dialogVisible,width:"27em"},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("Login_form")],1)],1)},A=[],D=function(){var e=this,t=e._self._c;return t("div",[t("el-form",{attrs:{"label-position":"left","label-width":"100px",model:e.fromInfo}},[t("el-form-item",{attrs:{label:"用户名/邮箱"}},[t("el-input",{model:{value:e.fromInfo.key,callback:function(t){e.$set(e.fromInfo,"key",t)},expression:"fromInfo.key"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{"show-password":""},model:{value:e.fromInfo.password,callback:function(t){e.$set(e.fromInfo,"password",t)},expression:"fromInfo.password"}}),t("el-link",{staticStyle:{float:"right"},attrs:{underline:!1},on:{click:function(t){e.registerVisible=!0}}},[e._v("注册账号")]),t("i",{staticStyle:{float:"right","margin-left":"5px","margin-right":"5px"}},[e._v("|")]),t("el-link",{staticStyle:{float:"right"},attrs:{underline:!1},on:{click:function(t){e.refindVisible=!0}}},[e._v("找回密码")])],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("登录")])],1)],1),t("el-dialog",{attrs:{title:"找回密码",visible:e.refindVisible,width:"31em","append-to-body":""},on:{"update:visible":function(t){e.refindVisible=t}}},[t("Refind_form")],1),t("el-dialog",{attrs:{title:"注册账户",visible:e.registerVisible,width:"31em","append-to-body":""},on:{"update:visible":function(t){e.registerVisible=t}}},[t("Register_form")],1)],1)},O=[],P=function(){var e=this,t=e._self._c;return t("div")},z=[],R={},j=R,F=(0,m.A)(j,P,z,!1,null,null,null),G=F.exports,J=function(){var e=this,t=e._self._c;return t("div")},B=[],M={},q=M,H=(0,m.A)(q,J,B,!1,null,null,null),K=H.exports,Q={name:"Login_form.vue",components:{Refind_form:G,Register_form:K},data(){return{fromInfo:{key:"",password:""},refindVisible:!1,registerVisible:!1}},methods:{submitForm(){this.$api.user.Login(this,this.fromInfo)}}},W=Q,X=(0,m.A)(W,D,O,!1,null,null,null),Y=X.exports,Z={name:"Login_btn.vue",components:{Login_form:Y},data(){return{dialogVisible:!1}}},ee=Z,te=(0,m.A)(ee,E,A,!1,null,null,null),oe=te.exports,ie=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{float:"right"}},[t("el-dropdown",{on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.username)),t("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t("el-dropdown-menu",[0==e.root?t("el-dropdown-item",{attrs:{command:"admin"}},[e._v("控制台")]):e._e(),t("el-dropdown-item",{attrs:{command:"changepwd"}},[e._v("修改密码")]),t("el-dropdown-item",{attrs:{command:"exit"}},[e._v("退出登录")])],1)],1),t("el-dialog",{attrs:{title:"修改密码",visible:e.changepwd,width:"31em"},on:{"update:visible":function(t){e.changepwd=t}}},[t("ChangePwd_form")],1)],1)},ae=[],le=function(){var e=this,t=e._self._c;return t("div")},re=[],se={},ne=se,de=(0,m.A)(ne,le,re,!1,null,null,null),ue=de.exports,ce={name:"Username_link.veu",components:{ChangePwd_form:ue},data(){return{username:localStorage.getItem("username"),root:localStorage.getItem("type"),changepwd:!1}},methods:{handleCommand(e){switch(e){case"exit":this.exitLog();break;case"changepwd":this.changepwd=!0;break;case"admin":this.jumpToAdmin();break}},jumpToAdmin(){this.$router.push({name:"root"}).catch((e=>{}))},exitLog(){localStorage.setItem("username",""),localStorage.setItem("token",""),localStorage.setItem("type",-1),setTimeout((function(){top.document.location.reload()}),700)}}},me=ce,pe=(0,m.A)(me,ie,ae,!1,null,null,null),fe=pe.exports,he={name:"Header.vue",components:{Search_bar:L,Login_Btn:oe,Username_link:fe},data(){return{username:localStorage.getItem("username")}}},ve=he,be=(0,m.A)(ve,x,k,!1,null,null,null),ge=be.exports,_e={name:"App.vue",components:{Aside:C,Header:ge}},Ie=_e,ye=(0,m.A)(Ie,a,l,!1,null,null,null),Ve=ye.exports,we=o(6178),Ce=function(){var e=this,t=e._self._c;return t("div",[t("Carousel_view",{attrs:{carouselList:e.carouselList}}),t("Title_sub",{attrs:{msg:"全部影视目录"}}),t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.typeInfo,(function(o,i){return t("el-tab-pane",{key:o+"type"+i,staticClass:"tab",attrs:{label:o.Name,name:o.Name}},[null!=e.typeInfo&&null!=e.allVedioInfos?t("Vedio_menu",{attrs:{menuInfo:e.allVedioInfos[o.TypeId],vedioType:e.allVedioInfos[o.TypeId][0].TypeId}}):e._e()],1)})),1)],1)},xe=[],ke=function(){var e=this,t=e._self._c;return t("el-carousel",{attrs:{height:"24em"}},[t("div",e._l(e.carouselList,(function(o,i){return t("el-carousel-item",{key:o+i},[null!=o?t("Carousel_item",{attrs:{CarouselInfo:o,ifShowVedio:o.IfShowVedio}}):e._e()],1)})),1)])},Se=[],Te=function(){var e=this,t=e._self._c;return t("div",[e.ifShowVedio?t("Vedio_item",{ref:"vedio_item",staticClass:"carousel-video-item",attrs:{VedioInfo:e.CarouselInfo.Vedio,TypeId:e.CarouselInfo.Vedio.TypeId,ifShowName:!1}}):e._e(),t("img",{staticClass:"carousel-img-item",staticStyle:{"object-fit":"scale-down"},attrs:{src:e.absUrl},on:{click:function(t){return e.jumpTo()}}})],1)},$e=[],Ue=function(){var e=this,t=e._self._c;return t("div",{class:e.choiceClass},[t("img",{staticClass:"imgItem",attrs:{src:e.absUrl},on:{click:function(t){return e.jumpTo()}}}),e.ifShowName?t("div",{staticClass:"name",on:{click:function(t){return e.jumpTo()}}},[e._v(e._s(e.show_name))]):e._e()])},Ne=[],Le={props:{VedioInfo:Object,clickable:{type:Boolean,default:!0},ifShowName:{type:Boolean,default:!0},TypeId:Number},data(){return{show_name:"",absUrl:"",choiceClass:""}},methods:{jumpTo(){this.$router.push({name:"vedio",query:{VedioInfo:this.VedioInfo}})},initInfo(){this.VedioInfo.VedioName.length>10?(this.show_name=this.VedioInfo.VedioName.substring(0,15),this.show_name+="..."):this.show_name=this.VedioInfo.VedioName,this.absUrl=this.$baseURL+"image/"+this.VedioInfo.VedioCover,1==this.TypeId?this.choiceClass="video-item":2==this.TypeId&&(this.choiceClass="class_vedio")}},watch:{VedioInfo(){this.initInfo()}},mounted(){this.initInfo()}},Ee=Le,Ae=(0,m.A)(Ee,Ue,Ne,!1,null,"00c4bccc",null),De=Ae.exports,Oe={name:"Carousel_item.vue",props:["CarouselInfo","ifShowVedio"],components:{Vedio_item:De},data(){return{absUrl:""}},mounted(){console.log(this.CarouselInfo),this.absUrl=this.$baseURL+"/image/"+this.CarouselInfo.Cover,console.log(this.absUrl)},methods:{jumpTo(){this.$refs.vedio_item.jumpTo()}}},Pe=Oe,ze=(0,m.A)(Pe,Te,$e,!1,null,null,null),Re=ze.exports,je={name:"Carousel_view.vue",props:["carouselList"],components:{Carousel_item:Re},data(){return{}}},Fe=je,Ge=(0,m.A)(Fe,ke,Se,!1,null,"eb1b1c84",null),Je=Ge.exports,Be=function(){var e=this,t=e._self._c;return t("div",{staticClass:"title_sub"},[e._v(" "+e._s(e.msg)+" ")])},Me=[],qe={props:["msg"]},He=qe,Ke=(0,m.A)(He,Be,Me,!1,null,null,null),Qe=Ke.exports,We=function(){var e=this,t=e._self._c;return t("div",{staticClass:"total-menu"},[null==e.menuInfo||0==e.menuInfo.length?t("el-empty",{staticStyle:{width:"100%"},attrs:{description:"这里空空如也哦"}}):e._e(),e._l(e.menuInfo,(function(e,o){return t("Vedio_item",{key:o+"vedioItem112233",ref:"video_item",refInFor:!0,staticClass:"videoItem",attrs:{TypeId:e.TypeId,VedioInfo:e}})})),e._l(6,(function(o){return t("i",{key:o+"<i>",class:e.emptyClass})}))],2)},Xe=[],Ye={props:["menuInfo","vedioType"],components:{Vedio_item:De},data(){return{emptyClass:""}},created(){0==this.vedioType?this.emptyClass="vedioEmpty":this.emptyClass="classEmpty"}},Ze=Ye,et=(0,m.A)(Ze,We,Xe,!1,null,null,null),tt=et.exports,ot={name:"Main_view.vue",components:{Carousel_view:Je,Title_sub:Qe,Vedio_menu:tt},data(){return{typeInfo:null,allVedioInfos:null,carouselList:null,activeName:""}},beforeCreate(){this.$api.pub.VedioType(this).then((e=>{this.typeInfo=e.TypeInfos,this.activeName=this.typeInfo[0].Name})),this.$api.pub.ShowIndex(this).then((e=>{this.allVedioInfos=e})),this.$api.pub.ShowCarousel(this).then((e=>{this.carouselList=e}))}},it=ot,at=(0,m.A)(it,Ce,xe,!1,null,null,null),lt=at.exports,rt=function(){var e=this,t=e._self._c;return t("div",[t("Title_sub",{attrs:{msg:"欢迎来到管理员控制面板 :)"}}),t("Dashboard")],1)},st=[],nt=function(){var e=this,t=e._self._c;return t("div",[t("el-tabs",{staticStyle:{"margin-top":"8px"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"影视管理",name:"first"}},[t("VideoAdder"),t("VideoContro")],1),t("el-tab-pane",{attrs:{label:"用户管理",name:"second"}}),t("el-tab-pane",{attrs:{label:"轮播图管理",name:"third"}},[t("Carousel_contro")],1)],1)],1)},dt=[],ut=function(){var e=this,t=e._self._c;return t("div",[t("el-button",{staticStyle:{"margin-bottom":"8px"},attrs:{type:"primary",icon:"el-icon-edit",size:"medium"},on:{click:function(t){e.dialogVisible=!0}}},[e._v(" 添加影视")]),t("el-dialog",{attrs:{title:"添加影视",visible:e.dialogVisible,width:"44%","append-to-body":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{attrs:{"label-position":"left","label-width":"100px",model:e.createVedio}},[t("el-form-item",{attrs:{label:"影视名称"}},[t("el-input",{model:{value:e.createVedio.VedioName,callback:function(t){e.$set(e.createVedio,"VedioName",t)},expression:"createVedio.VedioName"}})],1),t("el-form-item",{attrs:{label:"上传封面"}},[t("Image_uploader",{ref:"createImgUpload"})],1),t("el-form-item",{attrs:{label:"影视类别"}},[t("el-select",{attrs:{placeholder:"请选择类别"},model:{value:e.createVedio.TypeId,callback:function(t){e.$set(e.createVedio,"TypeId",t)},expression:"createVedio.TypeId"}},e._l(e.TypeList,(function(e){return t("el-option",{key:e.TypeId+"type",attrs:{label:e.Name,value:e.TypeId}})})),1)],1),t("el-form-item",{attrs:{label:"影视描述"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:e.createVedio.Description,callback:function(t){e.$set(e.createVedio,"Description",t)},expression:"createVedio.Description"}})],1),t("el-form-item",{attrs:{label:"前台可见性"}},[t("el-switch",{attrs:{"active-text":"可见","inactive-text":"不可见"},model:{value:e.createVedio.Visable,callback:function(t){e.$set(e.createVedio,"Visable",t)},expression:"createVedio.Visable"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("创建影视")])],1)],1)],1)],1)},ct=[],mt=function(){var e=this,t=e._self._c;return t("div",[t("el-upload",{attrs:{action:e.uploadUrl,headers:e.header,limit:1,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList,"list-type":"picture"}},[t("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)},pt=[],ft={name:"image_uploader.vue",data(){return{header:{Authorization:localStorage.getItem("token")},fileName:"",uploadUrl:"",fileList:[],tempUrl:""}},methods:{handleRemove(e,t){console.log(e,t)},handleSuccess(e,t,o){this.fileName=t.name,this.tempUrl=t.url},getFileName(){return this.fileName},getTempUrl(){return this.tempUrl}},created(){this.uploadUrl=this.$baseURL+"/root/uploadImg"}},ht=ft,vt=(0,m.A)(ht,mt,pt,!1,null,null,null),bt=vt.exports,gt={components:{Image_uploader:bt},data(){return{dialogVisible:!1,createVedio:{VedioName:"",VedioCover:"",Description:"",TypeId:null,Visable:!1},TypeList:[]}},methods:{submitForm(){this.createVedio.VedioCover=this.$refs.createImgUpload.getFileName(),this.$api.admin.createVedio(this,this.createVedio)}},beforeCreate(){this.uploadUrl=this.$baseURL+"/root/upload",this.$api.admin.VedioType(this).then((e=>{this.TypeList=e,console.log(this.TypeList)}))}},_t=gt,It=(0,m.A)(_t,ut,ct,!1,null,null,null),yt=It.exports,Vt=function(){var e=this,t=e._self._c;return t("div",[t("el-table",{staticStyle:{width:"100%","max-width":"1200px"},attrs:{data:e.tableData}},[t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t("el-form-item",{attrs:{label:"影视封面:"}},[t("span",[e._v(e._s(o.row.VedioCover))])]),t("el-form-item",{attrs:{label:"影视简介:"}},[t("div",{staticClass:"discrip"},[e._v(" "+e._s(o.row.Description)+" ")])]),t("el-form-item",{attrs:{label:"每集信息"}},[t("el-collapse",{staticStyle:{width:"60vw"}},[t("el-collapse-item",{attrs:{name:"1"}},e._l(o.row.EpisodeInfos,(function(o,i){return t("div",{key:o+i+"index",staticStyle:{"margin-top":"4px"}},[t("el-col",{attrs:{span:4}},[e._v(" 第 "+e._s(o.Num)+" 集 : ")]),t("el-col",{attrs:{span:20}},[t("el-link",{attrs:{target:"_blank"},on:{click:function(t){return e.jumpToVideo()}}},[e._v(e._s(o.Name))])],1)],1)})),0)],1)],1)],1)]}}])}),t("el-table-column",{attrs:{label:"影视 ID",prop:"VedioId",width:"80"}}),t("el-table-column",{attrs:{label:"影视名称",prop:"VedioName",width:"200"}}),t("el-table-column",{attrs:{label:"影视类别",prop:"TypeId"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-tag",[e._v(e._s(e.TypeList[o.row.TypeId-1]["Name"]))])]}}])}),t("el-table-column",{attrs:{label:"前台可见性",prop:"Visable"},scopedSlots:e._u([{key:"default",fn:function(o){return[o.row.Visable?t("el-tag",[e._v("可见")]):t("el-tag",[e._v("不可见")])]}}])}),t("el-table-column",{attrs:{label:"总共集数",prop:"Episode",width:"100"}}),t("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(o){return[t("el-input",{attrs:{size:"mini",placeholder:"输入关键字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(o){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(o.$index,o.row)}}},[e._v("Edit")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(o.$index,o.row)}}},[e._v("Delete")])]}}])})],1),t("Vedio_editDrawer",{ref:"drawer"})],1)},wt=[],Ct=function(){var e=this,t=e._self._c;return t("div",[t("el-drawer",{attrs:{title:e.title,visible:e.drawer,size:"56%",direction:"rtl","before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[t("el-form",{staticClass:"editFrom",attrs:{"label-position":"right","label-width":"16%",model:e.form}},[t("el-form-item",{attrs:{label:"影视名称"}},[t("el-input",{model:{value:e.form.VedioName,callback:function(t){e.$set(e.form,"VedioName",t)},expression:"form.VedioName"}})],1),t("el-form-item",{attrs:{label:"影视封面"}},[t("img",{staticClass:"imgSize",attrs:{src:e.imgUrl},on:{click:function(t){return e.uploadImg()}}}),t("el-dialog",{attrs:{title:"上传封面图片",visible:e.uploadImgVis,width:"40%","append-to-body":""},on:{"update:visible":function(t){e.uploadImgVis=t}}},[t("Image_uploader",{ref:"editImageUpload"}),t("el-button",{staticStyle:{"margin-top":"15px"},attrs:{type:"primary",size:"medium"},on:{click:e.saveUploadImg}},[e._v("保存更改")])],1)],1),t("el-form-item",{attrs:{label:"影视类别"}},[t("el-select",{attrs:{placeholder:"请选择类别"},model:{value:e.form.TypeId,callback:function(t){e.$set(e.form,"TypeId",t)},expression:"form.TypeId"}},e._l(e.TypeList,(function(e){return t("el-option",{key:e.TypeId+"type2",attrs:{label:e.Name,value:e.TypeId}})})),1)],1),t("el-form-item",{attrs:{label:"影视可见性"}},[t("el-switch",{attrs:{"active-text":"可见","inactive-text":"不可见"},model:{value:e.form.Visable,callback:function(t){e.$set(e.form,"Visable",t)},expression:"form.Visable"}})],1),t("el-form-item",{attrs:{label:"影视简介"}},[t("el-input",{staticClass:"Editdiscrip",attrs:{type:"textarea",autosize:""},model:{value:e.form.Description,callback:function(t){e.$set(e.form,"Description",t)},expression:"form.Description"}})],1),t("el-form-item",{attrs:{label:"每集信息管理"}},[t("EposodeAdder",{key:e.resetCount_,attrs:{VedioName:e.form.VedioName,EposodeNum:e.form.EpisodeInfos.length+1,VedioId:e.form.VedioId}}),e._l(e.form.EpisodeInfos,(function(o,i){return t("Episode_edit",{key:"editEpisode"+o+i+e.editCount2_,attrs:{EpicInfo:o}})}))],2),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存更改")])],1)],1)],1),t("el-dialog",{attrs:{visible:e.waitDialog,title:"请等待....","append-to-body":""},on:{"update:visible":function(t){e.waitDialog=t}}},[t("el-progress",{staticClass:"wait",attrs:{type:"circle",percentage:e.videoUploadPercent}})],1)],1)},xt=[],kt=function(){var e=this,t=e._self._c;return t("div",[t("el-row",[t("el-col",{attrs:{span:4}},[e._v("第 "+e._s(e.EpicInfo.Num)+" 集:")]),t("el-col",{attrs:{span:16}},[t("el-link",{attrs:{target:"_blank"},on:{click:function(t){return e.jumpToVideo()}}},[e._v(e._s(e.EpicInfo.Name))])],1),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{size:"mini"},on:{click:function(t){e.editVis=!0}}},[e._v("Edit")])],1)],1),t("el-dialog",{attrs:{title:"更改第"+e.EpicInfo.Num+"集信息",visible:e.editVis,width:"44%","append-to-body":""},on:{"update:visible":function(t){e.editVis=t}}},[t("el-form",{staticClass:"editFrom",attrs:{"label-position":"right","label-width":"16%",model:e.temEpicInfo}},[t("el-form-item",{attrs:{label:"本集名称"}},[t("el-input",{model:{value:e.temEpicInfo.Name,callback:function(t){e.$set(e.temEpicInfo,"Name",t)},expression:"temEpicInfo.Name"}})],1),t("el-form-item",{attrs:{label:"本集片源"}},[t("span",[e._v(e._s(e.temEpicInfo.Url))]),t("Vedio_uploader",{ref:"editEpiso"})],1),t("el-form-item",[t("el-button",{on:{click:e.onSubmit}},[e._v("保存更改")])],1)],1)],1)],1)},St=[];const Tt=new i["default"];var $t=function(){var e=this,t=e._self._c;return t("div",[t("el-upload",{staticStyle:{"margin-top":"16px"},attrs:{drag:"",headers:e.header,action:e.actionUrl,"show-file-list":!0,limit:1,disabled:e.finished,"on-success":e.handleVideoSuccess,"before-upload":e.beforeUploadVideo,"file-list":e.fileList,"on-progress":e.uploadVideoProcess}},[e.finished?e._e():t("i",{staticClass:"el-icon-upload"}),e.finished?e._e():t("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),t("em",[e._v("点击上传")])]),e.finished?t("el-result",{staticStyle:{"margin-top":"20px"},attrs:{icon:"success"}}):e._e()],1)],1)},Ut=[],Nt={data(){return{videoUploadPercent:0,fileList:[],actionUrl:"",header:{Authorization:localStorage.getItem("token")},finished:!1,fileName:""}},methods:{beforeUploadVideo(e){return-1!==["video/mp4","video/ogg","video/flv","video/avi","video/wmv","video/rmvb"].indexOf(e.type)||(this.$message.error("请上传正确的视频格式"),!1)},uploadVideoProcess(e,t,o){this.videoUploadPercent=Number(t.percentage)},handleVideoSuccess(e,t){this.finished=!0,this.fileName=t.name},getFileName(){return this.fileName}},created(){this.actionUrl=this.$baseURL+"root/uploadVedio"}},Lt=Nt,Et=(0,m.A)(Lt,$t,Ut,!1,null,null,null),At=Et.exports,Dt={props:["EpicInfo"],components:{Vedio_uploader:At},data(){return{editVis:!1,temEpicInfo:{}}},methods:{jumpToVideo(){},onSubmit(){this.temEpicInfo.Url=this.$refs.editEpiso.getFileName(),Tt.$emit("UploadEpiso",this.temEpicInfo),this.$message.success("保存成功"),setTimeout((()=>{this.editVis=!1}),500)}},created(){this.temEpicInfo=JSON.parse(JSON.stringify(this.EpicInfo))}},Ot=Dt,Pt=(0,m.A)(Ot,kt,St,!1,null,null,null),zt=Pt.exports,Rt=function(){var e=this,t=e._self._c;return t("div",[t("el-button",{attrs:{size:"mini"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("增加集数")]),t("el-dialog",{attrs:{visible:e.dialogVisible,title:"添加 "+e.VedioName+" 集数（第"+e.EposodeNum+"集）",width:"44%","append-to-body":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{attrs:{"label-position":"right","label-width":"20%"},model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[t("el-form-item",{attrs:{label:"导入方式"}},[t("el-switch",{attrs:{"active-text":"本地导入","inactive-text":"url导入"},model:{value:e.form.localImport,callback:function(t){e.$set(e.form,"localImport",t)},expression:"form.localImport"}})],1),t("el-form-item",{attrs:{label:"名称"}},[t("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.form.localImport,expression:"form.localImport"}],attrs:{label:"本地导入"}},[t("Vedio_uploader",{ref:"AddVedioUpload"})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.form.localImport,expression:"!form.localImport"}],attrs:{label:"url导入"}},[t("el-input",{attrs:{placeholder:"请输入绝对路径"},model:{value:e.form.internetUrl,callback:function(t){e.$set(e.form,"internetUrl",t)},expression:"form.internetUrl"}})],1),t("el-form-item",[t("el-button",{attrs:{size:"medium"},on:{click:e.submitUpload}},[e._v("确认添加")])],1)],1)],1)],1)},jt=[],Ft={props:["VedioName","EposodeNum","VedioId"],components:{Vedio_uploader:At},data(){return{dialogVisible:!1,form:{localImport:!0,internetUrl:""},name:""}},methods:{submitUpload(){let e={VedioId:this.VedioId,Num:this.EposodeNum,Name:this.name,Type:0,Url:""};this.form.localImport?e.Url=this.$refs.AddVedioUpload.getFileName():(e.Type=1,e.Url=this.form.internetUrl),Tt.$emit("UploadVedio",e),this.$message.success("成功添加"),setTimeout((()=>{this.dialogVisible=!1}),200)}},created(){},watch:{dialogVisible(){this.timmer=(new Date).getTime()}}},Gt=Ft,Jt=(0,m.A)(Gt,Rt,jt,!1,null,null,null),Bt=Jt.exports,Mt={components:{EposodeAdder:Bt,Episode_edit:zt,Image_uploader:bt},data(){return{ori_info:{},form:{EpisodeInfos:[]},drawer:!1,title:"",uploadImgVis:!1,imgUrl:"",uploadVedioVis:!1,resetCount_:1,waitDialog:!1,videoUploadPercent:0,editCount2_:1,TypeList:[]}},methods:{handleOpen(e){this.form=JSON.parse(JSON.stringify(e)),console.log(this.form),this.title=this.form.VedioName,this.imgUrl=this.$baseURL+"/image/"+this.form.VedioCover,this.drawer=!0},handleClose(e){this.$confirm("请确保你的更改已保存?").then((t=>{e()})).catch((e=>{}))},uploadImg(){this.uploadImgVis=!0},saveUploadImg(){this.form.VedioCover=this.$refs.editImageUpload.getFileName(),this.imgUrl=this.$refs.editImageUpload.getTempUrl(),this.uploadImgVis=!1},onSubmit(){console.log(this.form),this.waitDialog=!0;let e=setInterval((()=>{99!=this.videoUploadPercent&&100!=this.videoUploadPercent?this.videoUploadPercent+=1:100==this.videoUploadPercent&&(this.waitDialog=!1)}),2e3);this.$api.admin.editVedio(this,this.form).then((t=>{this.videoUploadPercent=100,clearInterval(e),setTimeout((function(){top.document.location.reload()}),1e3)}))}},created(){Tt.$on("UploadVedio",(e=>{this.form.EpisodeInfos.push(e),this.resetCount_+=1})),Tt.$on("UploadEpiso",(e=>{console.log(e),this.form.EpisodeInfos[e.Num-1]=e,this.editCount2_+=1}))},destroyed(){Tt.$off("UploadVedio"),Tt.$off("UploadEpiso")},beforeCreate(){this.$api.admin.VedioType(this).then((e=>{this.TypeList=e,console.log(this.TypeList)}))}},qt=Mt,Ht=(0,m.A)(qt,Ct,xt,!1,null,null,null),Kt=Ht.exports,Qt={components:{Vedio_editDrawer:Kt},data(){return{search:"",tableData:[],TypeList:[]}},methods:{handleEdit(e,t){this.$refs.drawer.handleOpen(JSON.parse(JSON.stringify(t)))},handleDelete(e,t){this.$confirm("此操作将永久删除该影视（所有视频）, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.$message({type:"success",message:"删除成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},jumpToVideo(){}},beforeCreate(){this.$api.admin.VedioType(this).then((e=>{this.TypeList=e})),this.$api.admin.showVedio(this).then((e=>{this.tableData=e}))}},Wt=Qt,Xt=(0,m.A)(Wt,Vt,wt,!1,null,null,null),Yt=Xt.exports,Zt=function(){var e=this,t=e._self._c;return t("div",[t("Carousel_view",{attrs:{carouselList:e.carouselList}}),t("el-divider"),t("el-button",{staticStyle:{"margin-bottom":"8px"},attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("增加轮播图")]),t("el-dialog",{attrs:{title:"添加轮播图",visible:e.dialogVisible,width:"44%","append-to-body":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{attrs:{"label-position":"left","label-width":"100px",model:e.createInfo}},[t("el-form-item",{attrs:{label:"上传图片"}},[t("Image_uploader",{ref:"createCarouselImgUpload"})],1),t("el-form-item",{attrs:{label:"是否展示视频"}},[t("el-switch",{attrs:{"active-text":"可见","inactive-text":"不可见"},model:{value:e.createInfo.IfShowVedio,callback:function(t){e.$set(e.createInfo,"IfShowVedio",t)},expression:"createInfo.IfShowVedio"}})],1),e.createInfo.IfShowVedio?t("el-form-item",{attrs:{label:"视频 ID"}},[t("el-input",{attrs:{placeholder:"请输入视频 ID"},model:{value:e.createInfo.VedioId,callback:function(t){e.$set(e.createInfo,"VedioId",t)},expression:"createInfo.VedioId"}})],1):e._e(),t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.createCarousel}},[e._v("确认添加")])],1)],1),t("el-table",{staticStyle:{width:"100%","max-width":"1200px"},attrs:{data:e.carouselList}},[t("el-table-column",{attrs:{prop:"CarouselId",label:"轮播图 ID"}}),t("el-table-column",{attrs:{prop:"Cover",label:"轮播图封面"}}),t("el-table-column",{attrs:{prop:"IfShowVedio",label:"是否展示视频"},scopedSlots:e._u([{key:"default",fn:function(o){return[o.row.IfShowVedio?t("el-tag",[e._v("展示")]):t("el-tag",[e._v("不展示")])]}}])}),t("el-table-column",{attrs:{prop:"Vedio.VedioId",label:"视频ID"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(o){return[t("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleEdit(o.$index,o.row)}}},[e._v("编辑")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(o.$index,o.row)}}},[e._v("删除")])]}}])})],1)],1)},eo=[],to={components:{Carousel_view:Je,Image_uploader:bt},data(){return{carouselList:null,dialogVisible:!1,createInfo:{Cover:"",IfShowVedio:!1,VedioId:null}}},methods:{createCarousel(){this.createInfo.Cover=this.$refs.createCarouselImgUpload.getFileName(),console.log(this.createInfo),this.createInfo.VedioId=parseInt(this.createInfo.VedioId),this.$api.admin.CreateCarousel(this,this.createInfo)}},beforeCreate(){this.$api.pub.ShowCarousel(this).then((e=>{this.carouselList=e}))}},oo=to,io=(0,m.A)(oo,Zt,eo,!1,null,null,null),ao=io.exports,lo={components:{VideoContro:Yt,VideoAdder:yt,Carousel_contro:ao},data(){return{activeName:"first"}}},ro=lo,so=(0,m.A)(ro,nt,dt,!1,null,null,null),no=so.exports,uo={name:"Root_view.vue",components:{Title_sub:Qe,Dashboard:no}},co=uo,mo=(0,m.A)(co,rt,st,!1,null,null,null),po=mo.exports,fo=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{width:"100px",height:"40px"}}),t("Title_sub",{attrs:{msg:e.VedioInfo.VedioName}}),t("div",{staticStyle:{width:"100px",height:"20px"}}),t("Vedio_play",{ref:"videoInfo",attrs:{source:e.sourceUrl}}),t("Title_sub",{attrs:{msg:"集数选择"}}),t("el-scrollbar",{staticStyle:{height:"240px","margin-top":"10px"}},e._l(e.playInfoList,(function(o){return t("div",{key:o.Name+"playinfo",staticClass:"eachEp",on:{click:function(t){return e.choiceEpisode(o.Num)}}},[e._v(e._s(o.Name))])})),0),t("Title_sub",{attrs:{msg:"简介"}}),""==e.VedioInfo.Description?t("div",{staticClass:"top"},[e._v("占时木有简介哦")]):t("div",{staticClass:"top"},[e._v(e._s(e.VedioInfo.Description))])],1)},ho=[],vo=function(){var e=this,t=e._self._c;return t("div",[t("div",[t("video-player",{ref:"vedioPlayer",staticClass:"video-player vjs-custom-skin",attrs:{options:e.playerOptions,headers:e.headers}})],1)])},bo=[],go={props:["source"],data(){return{playerOptions:{autoplay:!1,hls:!0,aspectRatio:"16:9",fluid:!1,sources:[{src:"",type:"application/x-mpegURL"}],controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!1,fullscreenToggle:!0},playbackRates:[.7,1,1.25,1.5,2,2.5]},headers:{Authorization:localStorage.getItem("token")},timer:null,playRateTem:1}},mounted(){this.playerOptions["sources"][0]["src"]=this.source,this.$el.addEventListener("touchstart",this.$emit("touchstart")),this.$el.addEventListener("touchend",this.$emit("touchend"))},methods:{changeSource(e){this.playerOptions["sources"][0]["src"]=e},startIncreaseSpeed(){this.timer=setTimeout((()=>{this.playRateTem=this.$refs.vedioPlayer.player.playbackRate(),this.$refs.vedioPlayer.player.playbackRate(3),console.log(this.$refs.vedioPlayer.player)}),1e3)},stopIncreaseSpeed(){this.$refs.vedioPlayer.player.playbackRate(this.playRateTem),clearTimeout(this.timer)}}},_o=go,Io=(0,m.A)(_o,vo,bo,!1,null,null,null),yo=Io.exports,Vo={components:{Title_sub:Qe,Vedio_play:yo},data(){return{VedioInfo:{},sourceUrl:"",playInfoList:[]}},beforeCreate(){this.VedioInfo=this.$route.query.VedioInfo},mounted(){this.VedioInfo=this.$route.query.VedioInfo,console.log(this.$route.query.VedioInfo),null!=this.$route.query.VedioInfo.VedioId?localStorage.setItem("VedioviewInfo",JSON.stringify(this.VedioInfo)):this.VedioInfo=JSON.parse(localStorage.getItem("VedioviewInfo")),this.$api.user.GetPlayList(this,{VedioId:this.VedioInfo.VedioId}).then((e=>{this.playInfoList=e,this.choiceEpisode(1)}))},methods:{getUrl(e,t,o){let i=this.$baseURL+"vedio/"+String(e)+"/";return i+=String(t)+"/"+o,i},choiceEpisode(e){0!=this.playInfoList.length&&(this.sourceUrl=this.getUrl(this.VedioInfo.VedioId,e,this.playInfoList[e-1].Url),this.$refs.videoInfo.changeSource(this.sourceUrl))}}},wo=Vo,Co=(0,m.A)(wo,fo,ho,!1,null,null,null),xo=Co.exports;i["default"].use(we.Ay);const ko=[{path:"/",name:"home",component:lt},{path:"/root",name:"root",component:po},{path:"/vedio",name:"vedio",component:xo}],So=new we.Ay({routes:ko});var To=So,$o=o(9143),Uo=o.n($o),No=o(7155),Lo=o.n(No),Eo=o(7314),Ao=o.n(Eo),Do=o(7908),Oo=o.n(Do),Po=o(4373);const zo=Po.A.create({baseURL:"http://wxns9k.natappfree.cc",withCredentials:!0});var Ro=zo,jo={Login:Fo,GetPlayList:Go};function Fo(e){return Ro({method:"POST",url:"/login",data:e})}function Go(e){return Ro({method:"POST",headers:{Authorization:localStorage.getItem("token")},url:"/user/getPlayList",data:e})}var Jo={Login:Bo,GetPlayList:Mo};function Bo(e,t){jo.Login(t).then((t=>{t=t.data,0!=t.Code?(e.$message.success("登录成功 :)"),t=t.Data,localStorage.setItem("token",t.token),localStorage.setItem("username",t.username),localStorage.setItem("type",t.type),setTimeout((function(){top.document.location.reload()}),700)):e.$message.error("账号或密码错误...")})).catch((t=>{e.$message.error("账号或密码错误...")}))}function Mo(e,t){return jo.GetPlayList(t).then((t=>{if(t=t.data,0!=t.Code)return t.Data;e.$message.error("播放列表获取失败...")})).catch((t=>{e.$message.error("播放列表获取失败...")}))}var qo={createVedio:Ho,showVedio:Ko,editVedio:Qo,VedioType:Wo,CreateCarousel:Xo};function Ho(e){return Ro({method:"POST",url:"/root/createVedio",data:e,headers:{Authorization:localStorage.getItem("token")}})}function Ko(){return Ro({method:"GET",url:"/root/showVedio",headers:{Authorization:localStorage.getItem("token")}})}function Qo(e){return Ro({method:"POST",url:"/root/editVedio",data:e,headers:{Authorization:localStorage.getItem("token")}})}function Wo(){return Ro({method:"GET",url:"/root/vedioType",headers:{Authorization:localStorage.getItem("token")}})}function Xo(e){return Ro({method:"POST",url:"/root/createCarousel",data:e,headers:{Authorization:localStorage.getItem("token")}})}var Yo={createVedio:Zo,showVedio:ei,editVedio:ti,VedioType:oi,CreateCarousel:ii};function Zo(e,t){qo.createVedio(t).then((t=>{t=t.data,0!=t.Code?(e.$message.success("创建成功 :)"),setTimeout((function(){top.document.location.reload()}),700)):e.$message.error("创建失败...")})).catch((t=>{e.$message.error("创建失败...")}))}function ei(e){return qo.showVedio().then((t=>(t=t.data,0==t.Code?(e.$message.error("获取失败..."),null):t.Data))).catch((t=>(e.$message.error("获取失败..."),null)))}function ti(e,t){return qo.editVedio(t).then((t=>(t=t.data,0==t.Code?(e.$message.error("更新失败..."),null):(e.$message.success("更新成功..."),null)))).catch((t=>(e.$message.error("更新失败..."),null)))}function oi(e){return qo.VedioType().then((e=>(e=e.data,0==e.Code?null:e.Data.TypeInfos))).catch((e=>null))}function ii(e,t){qo.CreateCarousel(t).then((t=>{t=t.data,0!=t.Code?e.$message.success("创建成功 :)"):e.$message.error("创建失败...")})).catch((t=>{e.$message.error("创建失败...")}))}var ai={ShowIndex:li,VedioType:ri,ShowCarousel:si};function li(){return Ro({method:"GET",url:"/showIndex"})}function ri(){return Ro({method:"GET",url:"/vedioType"})}function si(){return Ro({method:"GET",url:"/showCarousel"})}var ni={ShowIndex:di,VedioType:ui,ShowCarousel:ci};function di(e){return ai.ShowIndex().then((t=>(t=t.data,0==t.Code?(e.$message.error("获取失败..."),null):t.Data))).catch((t=>(e.$message.error("获取失败..."),null)))}function ui(e){return ai.VedioType().then((t=>(t=t.data,0==t.Code?(e.$message.error("获取失败..."),null):t.Data))).catch((t=>(e.$message.error("获取失败..."),null)))}function ci(e){return ai.ShowCarousel().then((t=>(t=t.data,0==t.Code?(e.$message.error("获取失败..."),null):t.Data))).catch((t=>(e.$message.error("获取失败..."),null)))}var mi={user:Jo,admin:Yo,pub:ni};o(8506),o(5080),i["default"].use(Oo()),i["default"].config.productionTip=!1,i["default"].use(Uo()),i["default"].use(Lo()),i["default"].use(Ao()),i["default"].prototype.$api=mi,i["default"].prototype.$baseURL="http://wxns9k.natappfree.cc/",new i["default"]({router:To,render:e=>e(Ve)}).$mount("#app")},6993:function(e,t,o){"use strict";e.exports=o.p+"img/img1.894477ad.gif"},542:function(){}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var l=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}o.m=e,function(){o.amdO={}}(),function(){var e=[];o.O=function(t,i,a,l){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],l=e[u][2];for(var s=!0,n=0;n<i.length;n++)(!1&l||r>=l)&&Object.keys(o.O).every((function(e){return o.O[e](i[n])}))?i.splice(n--,1):(s=!1,l<r&&(r=l));if(s){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[i,a,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){o.p="/"}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,l,r=i[0],s=i[1],n=i[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(n)var u=n(o)}for(t&&t(i);d<r.length;d++)l=r[d],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},i=self["webpackChunkfront"]=self["webpackChunkfront"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[504],(function(){return o(5127)}));i=o.O(i)})();
//# sourceMappingURL=app.9ecb1d05.js.map