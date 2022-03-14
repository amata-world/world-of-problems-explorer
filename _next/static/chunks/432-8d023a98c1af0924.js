"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{5432:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(4051),a=n.n(r),o=n(5893),s=n(7536),i=n(1163),c=n(2486),l=n(4297),u=n(7640),m=n(7294),d=n(8909);function p(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){p(o,r,a,s,i,"next",e)}function i(e){p(o,r,a,s,i,"throw",e)}s(void 0)}))}}var h="Client-ID ".concat("62136372e23f4e7");function x(e){return y.apply(this,arguments)}function y(){return(y=f(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t),e.next=4,fetch("https://api.imgur.com/3/upload",{method:"POST",headers:{Authorization:h,Accept:"application/json"},body:n});case 4:return r=e.sent,e.next=7,r.json();case 7:if((o=e.sent).data.error){e.next=11;break}throw console.error("response dump: ",o.data.error),new Error("Failed to upload image");case 11:return e.abrupt("return",o.data.link);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(0,m.useMemo)((function(){return{uploadFile:x}}),[])}var g=n(4988);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,a)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}function N(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=d.iF.map((function(e){return{id:e,text:e}})),A=function(e){var t=e.project,n=(0,i.useRouter)(),r=(0,s.cI)({defaultValues:k({},t,{imageUrl:null===t||void 0===t?void 0:t.imageUrls[0]})}),l=r.register,d=r.handleSubmit,p=(0,m.useState)(t?t.tags.map((function(e){return{id:e,text:e}})):[]),f=p[0],h=p[1],x=(0,g.aC)().user,y=(0,u.wc)(),j=y.createProject,w=y.editProject,A=(b().uploadFile,(0,m.useState)([])),U=A[0],O=(A[1],(0,m.useState)(t?t.imageUrls:[])),S=O[0],F=O[1],I=(0,m.useRef)();(0,m.useEffect)((function(){U.length<1||F(U.map((function(e){return URL.createObjectURL(e)})))}),[U]);return(0,o.jsxs)("section",{className:"w-full max-w-xl m-auto mt-24",children:[(0,o.jsx)("h1",{className:"text-3xl mb-4",children:"Project details"}),(0,o.jsx)("hr",{className:"my-4"}),(0,o.jsxs)("form",{onKeyDown:function(e){return e.stopPropagation()},onSubmit:d(function(){var e,r=(e=a().mark((function e(r){var o,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("DO SOMETHING HERE",r),o=new Date,s={name:r.name||"Untitled",tags:f.map((function(e){return e.id})),status:r.status||"unknown",contents:r.contents,createdDate:o,lastUpdated:o,callToActionUrl:r.callToActionUrl,projectLeadId:x.uid,imageUrls:S},i=s,!n.pathname.includes("edit")){e.next=10;break}return e.next=7,w(k({},t,s));case 7:i=e.sent,e.next=19;break;case 10:if(!n.pathname.includes("fork")){e.next=16;break}return e.next=13,j(k({},s,{forkedFromProjectId:t.id}));case 13:i=e.sent,e.next=19;break;case 16:return e.next=18,j(s);case 18:i=e.sent;case 19:n.push({pathname:"/projects/[projectId]",query:{projectId:i.id}});case 20:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){v(o,r,a,s,i,"next",e)}function i(e){v(o,r,a,s,i,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}()),children:[(0,o.jsx)("label",{htmlFor:"name",className:"uppercase font-mono text-xs text-slate-200 mt-4",children:"Project name:"}),(0,o.jsx)("input",k({id:"name",type:"text"},l("name"),{className:"w-full mb-4 py-2 px-1 text-slate-900",placeholder:"The name of your project"})),(0,o.jsx)("label",{htmlFor:"tags",className:"uppercase font-mono text-xs text-slate-200 mt-4",children:"Problem category:"}),(0,o.jsx)(c.V,{id:"tags",tags:f,placeholder:"charity, humanitarian, etc.",suggestions:P,handleAddition:function(e){h(N(f).concat([e]))},handleDelete:function(e){h(f.filter((function(t,n){return n!==e})))},autocomplete:!0}),(0,o.jsx)("label",{htmlFor:"status",className:"uppercase font-mono text-xs text-slate-200 mt-4",children:"Project status:"}),(0,o.jsxs)("select",k({id:"status"},l("status"),{className:"w-full max-w-sm block p-2 text-slate-900",children:[(0,o.jsx)("option",{value:"unknown",children:"Unknown"}),(0,o.jsx)("option",{value:"open-to-ideas",children:"Open to ideas"}),(0,o.jsx)("option",{value:"looking-for-collaborators",children:"Looking for collaboration"}),(0,o.jsx)("option",{value:"looking-for-volunteers",children:"Looking for volunteers"}),(0,o.jsx)("option",{value:"fundraising",children:"Fundraising"}),(0,o.jsx)("option",{value:"research-and-development",children:"Research & development"}),(0,o.jsx)("option",{value:"active-development",children:"Active development"}),(0,o.jsx)("option",{value:"mass-market",children:"Mass market"}),(0,o.jsx)("option",{value:"abandoned",children:"Abandoned"})]})),(0,o.jsx)("hr",{className:"my-4"}),S.map((function(e){return(0,o.jsx)("img",{src:e,alt:"something",className:"m-auto"},e)})),(0,o.jsx)("label",{htmlFor:"imageUrl",className:"uppercase font-mono text-xs text-slate-200 mt-4",children:"Image URLs:"}),(0,o.jsx)("input",k({id:"name",type:"text"},l("imageUrl"),{className:"w-full mb-4 py-2 px-1 text-slate-900",placeholder:"Link to a self-hosted image",onChange:function(e){I.current&&clearTimeout(I.current),I.current=setTimeout((function(){F([e.target.value])}),500)}})),(0,o.jsx)("hr",{className:"my-4"}),(0,o.jsx)("label",{htmlFor:"contents",className:"uppercase font-mono text-xs text-slate-200 mt-4",children:"Page contents:"}),(0,o.jsx)("textarea",k({id:"contents"},l("contents"),{rows:10,className:"w-full p-2 text-slate-900",placeholder:"The contents of the page"})),(0,o.jsx)("small",{className:"text-slate-400 text-xs block",children:"Markdown format is supported"}),(0,o.jsx)("label",{htmlFor:"contents",className:"uppercase font-mono text-xs text-slate-200 mt-4",children:"Call to action (optional):"}),(0,o.jsx)("input",k({type:"text"},l("callToActionUrl"),{className:"w-full mb-2 py-2 px-1 text-slate-900",placeholder:"https://mycharity.com/fundraiseme"})),(0,o.jsx)("small",{className:"text-slate-400 text-xs block mb-4",children:"A link to a call to action for those who would like to know more"}),(0,o.jsxs)("div",{className:"flex flex-row justify-end",children:[(0,o.jsx)("button",{type:"button",className:"py-2 px-4",onClick:function(){return t?n.push({pathname:"/projects/[projectId]",query:{projectId:t.id}}):n.push("/")},children:"Cancel"}),(0,o.jsx)("button",{type:"submit",className:"py-2 px-4 rounded-lg border-2 border-cyan-600 shadow-sm shadow-cyan-600",children:"Submit"})]}),(0,o.jsx)("hr",{className:"my-4"})]})]})},U=function(){var e=(0,i.useRouter)().query.projectId,t=(0,u.n5)(e),n=t.data,r=t.loading;return(0,o.jsx)("div",{className:"bg-slate-800 text-slate-300 overflow-y-auto h-screen",children:r?(0,o.jsx)(l.Z,{className:"block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}):(0,o.jsx)(A,{project:null===n||void 0===n?void 0:n.project})})}},8909:function(e,t,n){n.d(t,{iF:function(){return r},Ep:function(){return o},JC:function(){return s},pQ:function(){return i}});var r=["technology","artificial intelligence","augmented reality","health","medicine","well-being","spirituality","exercise","environment","pollution","water-pollution","air-pollution","deforestation","endangered-species","society","culture","history","poverty","obesity","humanitarian","charity","disaster-relief","humanitarian-aid"];function a(e){switch(e){case"technology":case"artificial intelligence":case"augmented reality":return"technology";case"health":case"medicine":case"well-being":case"spirituality":case"exercise":return"health";case"environment":case"pollution":case"water-pollution":case"air-pollution":case"deforestation":case"endangered-species":return"environment";case"society":case"culture":case"history":case"poverty":case"obesity":return"society";case"charity":case"humanitarian":case"disaster-relief":case"humanitarian-aid":return"humanitarian"}}function o(e){switch(a(e)){case"environment":return"bg-green-500";case"health":return"bg-pink-500";case"humanitarian":return"bg-red-500";case"society":return"bg-teal-500";case"technology":return"bg-sky-500";default:return"bg-slate-500"}}function s(e){switch(a(e)){case"environment":return"text-green-500";case"health":return"text-pink-500";case"humanitarian":return"text-red-500";case"society":return"text-teal-500";case"technology":return"text-sky-500";default:return"text-slate-500"}}function i(e){var t=2.1;switch(e.impactRange){case"location":t=15;break;case"neighbourhood":t=12;break;case"state":t=9.8;break;case"country":t=7;break;case"continent":t=4}return{lat:e.latitude,lng:e.longitude,zoom:t}}}}]);