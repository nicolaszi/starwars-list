import{o,c,a as i,b as u,u as C,R as S,F as g,d as w,t as m,r as f,e as b,n as k,f as p,g as P,w as L,v as $,h as A,i as I,l as v,j as N,k as F,m as H,p as V,q as O,s as D}from"./vendor.fb91ab9d.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};E();var j="/starwars-list/assets/starship.63a5dff0.svg";var _=(a,e)=>{const n=a.__vccOpts||a;for(const[l,t]of e)n[l]=t;return n};const B={methods:{goHome(){this.$router.push("/")}}},q={class:"top-bar"};function M(a,e,n,l,t,s){return o(),c("div",q,[i("p",{onClick:e[0]||(e[0]=(...r)=>s.goHome&&s.goHome(...r)),class:"title"},"les vaisseaux star wars")])}var R=_(B,[["render",M],["__scopeId","data-v-552f2a46"]]);const J=i("div",{class:"stars"},null,-1),T=i("div",{class:"twinkl"},null,-1),z=i("div",{class:"animate-starship"},[i("div",{id:"starship-container"},[i("div",{class:"flame"}),i("img",{id:"starship",src:j})])],-1),K={setup(a){return(e,n)=>(o(),c(g,null,[J,T,u(R),u(C(S)),z],64))}};class U{constructor(){}getStarships(e){return fetch(e)}}const W={props:["name","created"],computed:{formatted_date(){const a=new Date(this.created);return w(a,"dd/mm/yyyy HH:MM:ss")}}},G={class:"starship-card"},Q={class:"starship-name"};function X(a,e,n,l,t,s){return o(),c("div",G,[i("div",Q,m(n.name),1),i("div",null,"Cr\xE9\xE9 le: "+m(s.formatted_date),1)])}var Y=_(W,[["render",X],["__scopeId","data-v-377eb488"]]);const Z={props:{totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{pages(){const a=[];for(let e=1;e<=this.totalPages;e++)a.push({name:e,isDisabled:e===this.currentPage});return a},isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(a){this.$emit("pagechanged",a)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(a){return this.currentPage===a}}},ee={class:"pagination"},te={class:"pagination-item"},se=["disabled"],ae={class:"pagination-item"},ie=["disabled"],re=["onClick","disabled"],ne={class:"pagination-item"},oe=["disabled"],ce={class:"pagination-item"},de=["disabled"];function le(a,e,n,l,t,s){const r=f("font-awesome-icon");return o(),c("div",ee,[i("div",te,[i("button",{onClick:e[0]||(e[0]=(...d)=>s.onClickFirstPage&&s.onClickFirstPage(...d)),disabled:s.isInFirstPage,type:"button"},[u(r,{icon:"angles-left",title:"premiere page"})],8,se)]),i("div",ae,[i("button",{onClick:e[1]||(e[1]=(...d)=>s.onClickPreviousPage&&s.onClickPreviousPage(...d)),disabled:s.isInFirstPage,type:"button"},[u(r,{icon:"angle-left",title:"page pr\xE9c\xE9dente"})],8,ie)]),(o(!0),c(g,null,b(s.pages,d=>(o(),c("div",{key:d.name,class:"pagination-item"},[i("button",{type:"button",onClick:h=>s.onClickPage(d.name),disabled:d.isDisabled,class:k({active:s.isPageActive(d.name)})},m(d.name),11,re)]))),128)),i("div",ne,[i("button",{onClick:e[2]||(e[2]=(...d)=>s.onClickNextPage&&s.onClickNextPage(...d)),disabled:s.isInLastPage,type:"button"},[u(r,{icon:"angle-right",title:"page suivante"})],8,oe)]),i("div",ce,[i("button",{onClick:e[3]||(e[3]=(...d)=>s.onClickLastPage&&s.onClickLastPage(...d)),disabled:s.isInLastPage,type:"button"},[u(r,{icon:"angles-right",title:"derni\xE8re page"})],8,de)])])}var ue=_(Z,[["render",le],["__scopeId","data-v-ba576a0e"]]);const y=new U,_e={components:{StarshipItem:Y,PaginationList:ue},data(){return{starships:JSON.parse(localStorage.getItem("starships")||"[]"),starships_paginated:[],currentPage:1,itemPerPage:12,pageCount:0,isLoading:!0}},async created(){await this.fetchData(),this.pageCount=Math.ceil(this.starships.length/10),this.pageChangeHandle(this.currentPage),this.isLoading=!1},methods:{async fetchData(){const a=await(await y.getStarships("https://swapi.dev/api/starships/")).json();let e=a.results,n=a.next;for(;n;){const l=await(await y.getStarships(n)).json();e=e.concat(l.results),n=l.next}localStorage.starships?this.starships.forEach(t=>{e.find(r=>r.name===t.name)||this.starships.concat(t)}):(localStorage.starships=JSON.stringify(e),this.starships=e)},async pageChangeHandle(a){switch(a){case"next":this.currentPage+=1;break;case"previous":this.currentPage-=1;break;default:this.currentPage=a}const e=this.currentPage===1?0:(this.currentPage-1)*10,n=e+this.itemPerPage;this.starships_paginated=this.starships.slice(e,n)}}},pe={key:0,class:"spinner"},he={key:1,class:"header-list"},ge={class:"starship-count"},me={key:2,class:"starships-grid"};function fe(a,e,n,l,t,s){const r=f("starship-item"),d=f("pagination-list");return o(),c(g,null,[t.isLoading?(o(),c("div",pe)):p("",!0),t.isLoading?p("",!0):(o(),c("div",he,[i("div",ge,m(t.starships.length)+" Vaisseaux",1),i("div",{class:"button",onClick:e[0]||(e[0]=h=>this.$router.push("/add"))},"Ajouter un Vaisseau")])),t.isLoading?p("",!0):(o(),c("div",me,[(o(!0),c(g,null,b(t.starships_paginated,h=>(o(),P(r,{key:h.id,name:h.name,created:h.created,class:k("starship-item")},null,8,["name","created"]))),128))])),t.isLoading?p("",!0):(o(),P(d,{key:3,totalPages:t.pageCount,perPage:t.itemPerPage,currentPage:t.currentPage,onPagechanged:s.pageChangeHandle},null,8,["totalPages","perPage","currentPage","onPagechanged"]))],64)}var ve=_(_e,[["render",fe]]);const Pe={setup(a){return(e,n)=>(o(),c("main",null,[u(ve)]))}};var ye=_(Pe,[["__scopeId","data-v-9c35a7ac"]]);const be={data(){return{name:"",created:"",toast:!1,error:""}},methods:{submit:function(){if(this.checkErrors(),!this.error){this.created=new Date;let a=JSON.parse(localStorage.getItem("starships")||"[]");a=a.concat({name:this.name,created:this.created}),localStorage.starships=JSON.stringify(a),this.toast=!0,this.name="",this.created="",setTimeout(()=>{this.toast=!1},5e3)}},checkErrors:function(){return this.name=this.name.trim(),this.name?this.name.length<3||this.name.length>50?(this.error="Le vaisseau doit faire au minimum 3 caract\xE8res et au maximum 50 caract\xE8res",!1):(this.error="",!0):(this.error="Le nom de vaisseau ne peut \xEAtre vide",!1)}}},ke={key:0,class:"toast-message"},xe={class:"starship-form"},Ce={key:0,class:"error"};function Se(a,e,n,l,t,s){return o(),c(g,null,[t.toast?(o(),c("div",ke,"Le vaisseau a bien \xE9t\xE9 ajout\xE9")):p("",!0),i("div",xe,[i("div",null,[L(i("input",{placeholder:"nom du vaisseau",type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>t.name=r)},null,512),[[$,t.name]]),t.error?(o(),c("div",Ce,m(t.error),1)):p("",!0)]),i("div",null,[i("input",{type:"submit",value:"Ajouter",onClick:e[1]||(e[1]=(...r)=>s.submit&&s.submit(...r))})])])],64)}var we=_(be,[["render",Se],["__scopeId","data-v-50fdf4a1"]]);const Le={components:{AddStarshipForm:we}};function $e(a,e,n,l,t,s){const r=f("AddStarshipForm");return o(),c("main",null,[u(r)])}var Ae=_(Le,[["render",$e],["__scopeId","data-v-720a4af2"]]);const Ie=A({history:I("/starwars-list/"),routes:[{path:"/",name:"home",component:ye},{path:"/add",name:"add-starship",component:Ae}]});v.add(N);v.add(F);v.add(H);v.add(V);const x=O(K);x.use(Ie);x.component("font-awesome-icon",D).mount("#app");
