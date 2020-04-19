import{a,u as t,S as n,i as s,s as e,l as c,m as l,t as r,p as o,q as i,f as m,r as p,d,e as h,v as u,w as v,g as f,h as g,x as b,y as k,G as x,D as w,H as y,I as j,z as E,A as M,B as D,o as J,j as $,J as H,k as I,K as T,L as V}from"./client.931727c8.js";import{u as R,M as S,t as A,d as L}from"./markmap.00a5355c.js";var q=a((function(a,t){Object.defineProperty(t,"__esModule",{value:!0});const n=[{src:"https://cdn.jsdelivr.net/npm/d3@5"},{src:"https://cdn.jsdelivr.net/npm/markmap-lib@0.6.0/dist/view.min.js"}];function s(a){return`(${a.toString()})()`}t.fillTemplate=function(a,t){const e=[...n],c=[JSON.stringify(a)];(null==t?void 0:t.mathJax)&&(e.push(s(()=>{window.MathJax={options:{skipHtmlTags:{"[-]":["code","pre"]}}}}),{src:"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"}),c.push(s(()=>({processHtml:a=>{var t,n;null==(t=(n=window.MathJax).typeset)||t.call(n,a)}}))));const l=e.map(a=>R.wrapHtml("script","string"==typeof a?a:"","string"==typeof a?null:a)).join("");return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n\x3c!--JS--\x3e\n</head>\n<body>\n<svg id="mindmap"></svg>\n<script>markmap.markmap(\'svg#mindmap\',{/*extra*/}).fit()<\/script>\n</body>\n</html>\n'.replace("\x3c!--JS--\x3e",l).replace("{/*extra*/}",c.join(","))}}));t(q);var C=q.fillTemplate;const{document:G}=H;function U(a){let t,n,s,e,J,$,H,R,A,L,q,C,U,O,F,N,P,_,z,B,K,X,Y,Q;function W(t){a[8].call(null,t)}function Z(t){a[9].call(null,t)}let aa={content:a[2]};void 0!==a[1]&&(aa.el=a[1]),void 0!==a[3]&&(aa.onReset=a[3]);const ta=new S({props:aa});return I.push(()=>T(ta,"el",W)),I.push(()=>T(ta,"onReset",Z)),{c(){t=c(),n=l("h1"),s=r("Markmap"),e=c(),J=l("div"),$=l("div"),H=l("div"),R=c(),A=l("div"),L=l("div"),o(ta.$$.fragment),U=c(),O=l("div"),F=l("a"),N=r("Reset"),P=c(),_=l("a"),z=r("Download as SVG"),B=c(),K=l("a"),X=r("Download as interactive HTML"),this.h()},l(a){i('[data-svelte="svelte-r18bnt"]',G.head).forEach(m),t=p(a),n=d(a,"H1",{});var c=h(n);s=u(c,"Markmap"),c.forEach(m),e=p(a),J=d(a,"DIV",{class:!0});var l=h(J);$=d(l,"DIV",{class:!0});var r=h($);H=d(r,"DIV",{class:!0}),h(H).forEach(m),r.forEach(m),R=p(l),A=d(l,"DIV",{class:!0});var o=h(A);L=d(o,"DIV",{class:!0});var f=h(L);v(ta.$$.fragment,f),f.forEach(m),U=p(o),O=d(o,"DIV",{class:!0});var g=h(O);F=d(g,"A",{class:!0});var b=h(F);N=u(b,"Reset"),b.forEach(m),P=p(g),_=d(g,"A",{class:!0});var k=h(_);z=u(k,"Download as SVG"),k.forEach(m),B=p(g),K=d(g,"A",{class:!0});var x=h(K);X=u(x,"Download as interactive HTML"),x.forEach(m),g.forEach(m),o.forEach(m),l.forEach(m),this.h()},h(){G.title="Try Markmap",f(H,"class","editor svelte-1g1c72b"),f($,"class","flex-1 svelte-1g1c72b"),f(L,"class","flex-1 mindmap svelte-1g1c72b"),f(F,"class","svelte-1g1c72b"),f(_,"class","svelte-1g1c72b"),f(K,"class","svelte-1g1c72b"),f(O,"class","buttons svelte-1g1c72b"),f(A,"class","flex-1 d-flex flex-column svelte-1g1c72b"),f(J,"class","d-flex container svelte-1g1c72b")},m(c,l,r){g(c,t,l),g(c,n,l),b(n,s),g(c,e,l),g(c,J,l),b(J,$),b($,H),a[7](H),b(J,R),b(J,A),b(A,L),k(ta,L,null),b(A,U),b(A,O),b(O,F),b(F,N),b(O,P),b(O,_),b(_,z),b(O,B),b(O,K),b(K,X),Y=!0,r&&x(Q),Q=[w(F,"click",y((function(){j(a[3])&&a[3].apply(this,arguments)}))),w(_,"click",y(a[4])),w(K,"click",y(a[5]))]},p(t,[n]){a=t;const s={};4&n&&(s.content=a[2]),!q&&2&n&&(q=!0,s.el=a[1],V(()=>q=!1)),!C&&8&n&&(C=!0,s.onReset=a[3],V(()=>C=!1)),ta.$set(s)},i(a){Y||(E(ta.$$.fragment,a),Y=!0)},o(a){M(ta.$$.fragment,a),Y=!1},d(s){s&&m(t),s&&m(n),s&&m(e),s&&m(J),a[7](null),D(ta),x(Q)}}}function O(a,t){const n=document.createElement("a");n.download=a,n.href=t,n.click()}function F(a,t,n){let s,e,c,l,r;return J(async()=>{const{default:a}=await import("./codemirror.90491a06.js");function t(){n(2,l=c.getValue())}await import("./markdown.4eea71c1.js"),c=a(s,{lineNumbers:!0,mode:"markdown",value:"# markmap-lib\n\n## Links\n\n- <https://markmap.js.org/>\n- [GitHub](https://github.com/gera2ld/markmap-lib)\n\n## Related\n\n- [coc-markmap](https://github.com/gera2ld/coc-markmap)\n- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)\n\n## Features\n\n- links\n- **inline** *styles*\n- multiline\n  text\n- `inline code`\n- MathJax - `\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)`\n"}),c.on("change",L(t,500)),t()}),$(async()=>{c=null}),[s,e,l,r,function(){const a=e.outerHTML.replace(/<br>/g,"<br/>");O("markmap.svg","data:image/svg;utf8,"+encodeURIComponent(a))},function(){const a=A(l||""),t=C(a,{mathJax:!!e.querySelector(".MathJax")});O("markmap.html","data:text/html;utf8,"+encodeURIComponent(t))},c,function(a){I[a?"unshift":"push"](()=>{n(0,s=a)})},function(a){e=a,n(1,e)},function(a){r=a,n(3,r)}]}export default class extends n{constructor(a){super(),s(this,a,F,U,e,{})}}