(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1227:function(e,t,a){"use strict";var r=a(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var n=r(a(6)),o=r(a(0)),l=(r(a(2)),r(a(14))),s=r(a(70)),i={root:{lineHeight:1.5}};t.styles=i;var c=(0,l.default)(i,{name:"MuiDialogContentText"})(function(e){return o.default.createElement(s.default,(0,n.default)({component:"p",internalDeprecatedVariant:!0,variant:"subheading",color:"textSecondary"},e))});t.default=c},1463:function(e,t,a){"use strict";a.r(t);var r=a(13),n=a(8),o=a(9),l=a(11),s=a(10),i=a(12),c=a(25),m=a(0),d=a.n(m),u=a(48),p=a(1),h=a(24),b=a(21),f=a(51),v=a.n(f),g=a(171),E=a.n(g),w=a(269),y=a.n(w),k=a(270),x=a.n(k),C=a(271),O=a.n(C),N=a(522),S=a.n(N),j=a(272),P=a.n(j),M=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,photo_url:""},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleselectedFile=function(e){var t=e.target.files[0],r=new FormData,n=a.state.photo_url;r.append("file",t),console.log(t);return u.b.post("/upload",r,{headers:{"content-type":"multipart/form-data"}}).then(function(e){return a.setState({photo_url:e.data.file.path,prev_url:n})})},a.handleSave=function(){a.handleClose(),a.props.onSave(a.state.photo_url)},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(p.C,{style:{padding:"0px"}},d.a.createElement(p.B,{onClick:function(t){t.stopPropagation(),e.handleClickOpen()}},"camera")),d.a.createElement(y.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},d.a.createElement(P.a,{id:"form-dialog-title"},"Avatar"),d.a.createElement(O.a,null,d.a.createElement(S.a,null,"To edit this avatar, please enter upload here."),d.a.createElement("input",{type:"file",id:"photo_url",name:"photo_url",onChange:this.handleselectedFile})),d.a.createElement(x.a,null,d.a.createElement(E.a,{onClick:this.handleSave,color:"secondary"},"Save"),d.a.createElement(E.a,{onClick:this.handleClose,color:"secondary"},"Cancel"))))}}]),t}(d.a.Component),A=a(20),I=a(16),F={MuiInputBase:{root:{color:"black"}},MuiFormLabel:{root:{color:"black","&$focused":{color:"black"}}},MuiOutlinedInput:{notchedOutline:{borderColor:"black !important"}}},B=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.props.classes;return d.a.createElement(h.MuiThemeProvider,{theme:Object(r.a)({},this.props.theme,{overrides:F})},d.a.createElement(p.l,{open:!0,"aria-labelledby":"form-dialog-title"},d.a.createElement(p.o,{id:"form-dialog-title"},"ENTER CURRENT PASSWORD"),d.a.createElement(p.n,null,d.a.createElement(p.cb,{className:"mt-16",type:"password",name:"password",label:"Password",InputProps:{startAdornment:d.a.createElement(p.E,{position:"start"},d.a.createElement(p.B,{className:"text-20"},"vpn_key"))},variant:"outlined"})),d.a.createElement(p.m,null,d.a.createElement(p.c,{onClick:function(){},color:"primary"},"Forgot Password?"),d.a.createElement(p.c,{onClick:function(){},color:"primary"},"Confirm"))))}}]),t}(d.a.Component);Object(h.withStyles)(function(e){return{root:{background:"black"}}},{withTheme:!0})(Object(A.b)(function(e,t){return{}},function(e){return Object(I.c)({},e)})(B));var _=a(3),T=a.n(_),R=a(37),D=a(23),U=(a(15),{MuiInputBase:{root:{color:"white"}},MuiFormLabel:{root:{color:"white","&$focused":{color:"white"},"&$disabled":{color:"#ffffff59"}}},MuiCheckbox:{root:{color:"white"}},MuiFormControlLabel:{label:{color:"white"}},MuiOutlinedInput:{notchedOutline:{borderColor:"#bfbab28c !important"}}}),L={MuiInputBase:{root:{color:"black"}},MuiFormLabel:{root:{color:"black","&$focused":{color:"black"}}},MuiOutlinedInput:{notchedOutline:{borderColor:"black !important"}}},q=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={confirm:!1,changepass:!1},a.form=d.a.createRef(),a.onSubmit=function(e){var t=a.props.user.userId;if(e.password&&""!==e.password){var r=e.password;u.b.post("/auth/user/updatepwd",{userId:t,password:r}).then(function(e){})}a.props.updateUserShortcuts({userName:e.username,email:e.email}),a.form.reset({username:e.username,email:e.email}),a.setState({changepass:!1})},a.confirmPassword=function(){var e=a.props.user.userId,t=a.state,r=(t.model,t.password);u.b.post("/auth/user/checkpwd",{userId:e,password:r}).then(function(e){e.data.success?a.setState({confirm:!1,changepass:!0}):a.props.showMessage({message:e.data.message})})},a.handleChange=function(e){a.setState({password:e.target.value})},a.handleCheckbox=function(e){!a.state.changepass&&e.target.checked&&a.setState({confirm:!0}),e.target.checked||(a.form.reset({username:a.form.getModel().username,email:a.form.getModel().email}),a.setState({changepass:!1}))},a.handleSaveAvatar=function(e){var t=a.props.user.userId;a.props.updateUserShortcuts({userId:t,avatar:e})},a}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({confirm:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.user;return d.a.createElement(h.MuiThemeProvider,{theme:Object(r.a)({},this.props.theme,{overrides:U})},d.a.createElement(b.m,{classes:{content:a.root,toolbar:"px-16 sm:px-24"},content:d.a.createElement("div",{className:"p-16 sm:p-24"},d.a.createElement("div",{className:a.profileBg},d.a.createElement("br",null),d.a.createElement("div",{className:"form-row "},d.a.createElement("div",{className:"profile-image",style:{width:"110px",height:"110px",padding:"5px",borderRadius:"50%",display:"inline-block",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.1)",position:"relative"}},d.a.createElement(p.b,{className:"w-96 h-96",alt:"user photo",src:n.avatar&&""!==n.avatar?n.avatar:"assets/images/avatars/profile.jpg"}),d.a.createElement("div",{style:{position:"absolute",display:"block",width:"32px",height:"32px",borderRadius:"50%",boxShadow:"0px 0px 3px 0px rgba(0,0,0,0.2)",backgroundColor:"#fff",right:0,bottom:0,textAlign:"center",lineHeight:"32px"}},d.a.createElement(M,{type:"avatar",onSave:this.handleSaveAvatar})))),d.a.createElement("br",null),d.a.createElement("div",{className:"container",style:{padding:"10px"}},d.a.createElement("div",{className:"student-name",style:{background:"rgba(0,0,0,.2)",borderRadius:"10px",padding:"40px 15px 20px",textAlign:"center",position:"relative",marginBottom:"20px"}},d.a.createElement("h3",{style:{marginBottom:"10px",color:"#fff",fontSize:"20px"}},n.userName),d.a.createElement("p",{style:{color:"#e2e9ef"}},n.email)))),d.a.createElement("br",null),d.a.createElement("div",{className:"form-label-divider",style:{display:"block",width:"100%",clear:"both",height:"1px",backgroundColor:"#DDD",textAlign:"center",opacity:"0.5"}},d.a.createElement("span",{style:{position:"relative",top:"-8px",fontWeight:"700",display:"inline-block",backgroundColor:"#000",color:"#F5F6F8",padding:"0 10px"}},"ACCOUNT INFO")),d.a.createElement("br",null),d.a.createElement(v.a,{onValidSubmit:this.onSubmit,ref:function(t){return e.form=t},className:"flex flex-col justify-center w-full h-full",style:{color:"white"}},d.a.createElement(b.t,{className:T()(a.input,"mb-16"),type:"text",name:"username",label:"Username",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{startAdornment:d.a.createElement(p.E,{position:"start"},d.a.createElement(p.B,{className:"text-20"},"person"))},variant:"outlined",value:n.userName,required:!0}),d.a.createElement(b.t,{className:T()(a.input,"mb-16"),type:"email",name:"email",label:"Email Address",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{startAdornment:d.a.createElement(p.E,{position:"start"},d.a.createElement(p.B,{className:"text-20"},"mail"))},variant:"outlined",value:n.email,required:!0}),d.a.createElement(p.u,{control:d.a.createElement(p.h,{checked:this.state.changepass,onChange:this.handleCheckbox,name:"checkedB",color:"secondary"}),className:T()(a.checkbox,"mb-16"),label:"Change password"}),d.a.createElement(b.t,{className:T()(a.input,"mb-16"),type:"password",name:"password",label:"Password",validations:"equalsField:password-confirm",validationErrors:{equalsField:"Passwords do not match"},InputProps:{startAdornment:d.a.createElement(p.E,{position:"start"},d.a.createElement(p.B,{className:"text-20"},"vpn_key"))},disabled:!this.state.changepass,variant:"outlined"}),d.a.createElement(b.t,{className:T()(a.input,"mb-16"),type:"password",name:"password-confirm",label:"Confirm Password",validations:"equalsField:password",validationErrors:{equalsField:"Passwords do not match"},InputProps:{startAdornment:d.a.createElement(p.E,{position:"start"},d.a.createElement(p.B,{className:"text-20"},"vpn_key"))},disabled:!this.state.changepass,variant:"outlined"}),d.a.createElement(p.c,{type:"submit",variant:"contained",color:"primary",className:"w-full mx-auto mt-16 normal-case","aria-label":"UPDATE",value:"legacy"},"Update")))}),d.a.createElement(h.MuiThemeProvider,{theme:Object(r.a)({},this.props.theme,{overrides:L})},d.a.createElement(p.l,{open:this.state.confirm,"aria-labelledby":"form-dialog-title"},d.a.createElement(p.o,{id:"form-dialog-title"},"ENTER CURRENT PASSWORD"),d.a.createElement(p.n,null,d.a.createElement(p.cb,{className:"mt-16",type:"password",name:"password",label:"Current Password",InputProps:{startAdornment:d.a.createElement(p.E,{position:"start"},d.a.createElement(p.B,{className:"text-20"},"vpn_key"))},onChange:this.handleChange,variant:"outlined"})),d.a.createElement(p.m,null,d.a.createElement(p.c,{onClick:function(){return e.props.history.push({pathname:"/forgot-password"})},color:"primary"},"Forgot Password?"),d.a.createElement(p.c,{onClick:this.confirmPassword,color:"primary"},"Confirm")))))}}]),t}(m.Component);t.default=Object(h.withStyles)(function(e){return{root:{background:"black"},input:{},checkbox:{color:"white"},layoutHeader:Object(c.a)({height:320,minHeight:320},e.breakpoints.down("md"),{height:240,minHeight:240}),profileBg:{textAlign:"center",background:"linear-gradient(219deg, #867631 0%, #d8c884 73%, #d8c884d1 110%)"}}},{withTheme:!0})(Object(A.b)(function(e,t){return{user:e.auth.user}},function(e){return Object(I.c)({updateUserShortcuts:R.n,showMessage:D.j},e)})(q))},522:function(e,t,a){"use strict";var r=a(4);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var n=r(a(1227))}}]);