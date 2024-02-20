import{_ as h,c as l,a as t,F as n,e as _,o as a,t as c,d as u,p,f as m}from"./index-BSW2IaRT.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"delifans",BASE_URL:"/hexschool_vue2024_vue_router/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:g,VITE_PATH:P}=f,$={data(){return{tempProducts:[]}},methods:{getProducts(){let s=this.$loading.show();this.$http.get(`${g}/api/${P}/products/all`).then(o=>{console.log(o.data.products),this.tempProducts=o.data.products,s.hide()}).catch(o=>{console.log(o.response.data.message)})},showProductDetails(s){this.$router.push(`/products/${s}`)}},mounted(){this.getProducts()}},i=s=>(p("data-v-06b2fc5f"),s=s(),m(),s),b=i(()=>t("small",null,"Products Page",-1)),w=i(()=>t("h2",{class:"text-center"},"產品列表",-1)),v={class:"table"},I=i(()=>t("thead",null,[t("tr",null,[t("th",{width:"150"}),t("th",{width:"250"},"產品名稱"),t("th",{width:"400"},"產品描述"),t("th",null,"產品價格"),t("th")])],-1)),x=["src","alt"],E={class:"pe-3"},V={class:""},k={class:"text-danger fw-bold"},y={key:1,class:"fw-bold"},S=["onClick"];function T(s,o,D,R,d,r){return a(),l(n,null,[b,w,t("table",v,[I,t("tbody",null,[(a(!0),l(n,null,_(d.tempProducts,e=>(a(),l("tr",{key:e.id},[t("th",null,[t("img",{src:e.imageUrl,alt:e.title,class:"listImg img-fluid"},null,8,x)]),t("td",null,c(e.title),1),t("td",E,[t("small",null,c(e.description),1)]),t("td",V,[e.origin_price?(a(),l(n,{key:0},[t("h5",null,[u(" 原價"),t("del",null,"$"+c(e.origin_price),1)]),t("h6",k,"$"+c(e.price),1)],64)):(a(),l("h6",y,"$"+c(e.price),1))]),t("td",null,[t("button",{type:"button",class:"btn btn-primary",onClick:B=>r.showProductDetails(e.id)}," 查看更多 ",8,S)])]))),128))])])],64)}const U=h($,[["render",T],["__scopeId","data-v-06b2fc5f"]]);export{U as default};
