(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"95eJ":function(e,t,n){},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},v8OG:function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),r=n("bIC1"),c=n.n(r);n("95eJ");function o(e,t){return E(e)||d(e,t)||i(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(m){o=!0,l=m}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=Object(a["useRef"])(),r=Object(a["useState"])(!1),m=o(r,2),i=m[0],u=m[1],d=Object(a["useState"])(!1),E=o(d,2),s=E[0],h=E[1];return Object(a["useEffect"])((function(){var e=n.current,t=c()((function(){u(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,t)))};t["a"]=s},wgHE:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),r=n("yM/Q"),c=n("1i7f"),o=n("PAHk"),m=n("v8OG"),i=l.a.memo((e=>{var t=e.demos,n=t["useinviewport-demo1"].component,a=t["useinviewport-demo2"].component,i=t["useinviewport-demo3"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"useinviewport"},l.a.createElement(r["AnchorLink"],{to:"#useinviewport","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useInViewport"),l.a.createElement("p",null,"\u89c2\u5bdf\u5143\u7d20\u662f\u5426\u5728\u53ef\u89c1\u533a\u57df\uff0c\u4ee5\u53ca\u5143\u7d20\u53ef\u89c1\u6bd4\u4f8b\u3002\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",l.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API"),"\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["useinviewport-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u76d1\u542c\u5143\u7d20\u53ef\u89c1\u533a\u57df\u6bd4\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u76d1\u542c\u5143\u7d20\u53ef\u89c1\u533a\u57df\u6bd4\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u76d1\u542c\u5143\u7d20\u53ef\u89c1\u533a\u57df\u6bd4\u4f8b")),l.a.createElement(c["default"],t["useinviewport-demo2"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u76d1\u542c\u5185\u5bb9\u6eda\u52a8\u9009\u4e2d\u83dc\u5355"},l.a.createElement(r["AnchorLink"],{to:"#\u76d1\u542c\u5185\u5bb9\u6eda\u52a8\u9009\u4e2d\u83dc\u5355","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u76d1\u542c\u5185\u5bb9\u6eda\u52a8\u9009\u4e2d\u83dc\u5355")),l.a.createElement(c["default"],t["useinviewport-demo3"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"type Target = Element | (() => Element) | React.MutableRefObject<Element>;\n\nconst [inViewport, ratio] = useInViewport(\n  target: Target | Target[],\n  options?: Options\n);",lang:"typescript"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"target"),l.a.createElement("td",null,"DOM \u8282\u70b9\u6216\u8005 Ref\uff0c\u652f\u6301\u6570\u7ec4"),l.a.createElement("td",null,l.a.createElement("code",null,"Target")," | ",l.a.createElement("code",null,"Target[]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u8bbe\u7f6e"),l.a.createElement("td",null,l.a.createElement("code",null,"Options")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"options"},l.a.createElement(r["AnchorLink"],{to:"#options","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Options"),l.a.createElement("p",null,"\u66f4\u591a\u4fe1\u606f\u53c2\u8003 ",l.a.createElement(r["Link"],{to:"https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API"},"Intersection Observer API")),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"threshold"),l.a.createElement("td",null,"\u53ef\u4ee5\u662f\u5355\u4e00\u7684 number \u4e5f\u53ef\u4ee5\u662f number \u6570\u7ec4\uff0ctarget \u5143\u7d20\u548c root \u5143\u7d20\u76f8\u4ea4\u7a0b\u5ea6\u8fbe\u5230\u8be5\u503c\u7684\u65f6\u5019 ratio \u4f1a\u88ab\u66f4\u65b0"),l.a.createElement("td",null,l.a.createElement("code",null,"number")," | ",l.a.createElement("code",null,"number[]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"rootMargin"),l.a.createElement("td",null,"\u6839(root)\u5143\u7d20\u7684\u5916\u8fb9\u8ddd"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"root"),l.a.createElement("td",null,"\u6307\u5b9a\u6839(root)\u5143\u7d20\uff0c\u7528\u4e8e\u68c0\u67e5\u76ee\u6807\u7684\u53ef\u89c1\u6027\u3002\u5fc5\u987b\u662f\u76ee\u6807\u5143\u7d20\u7684\u7236\u7ea7\u5143\u7d20\uff0c\u5982\u679c\u672a\u6307\u5b9a\u6216\u8005\u4e3a null\uff0c\u5219\u9ed8\u8ba4\u4e3a\u6d4f\u89c8\u5668\u89c6\u7a97\u3002"),l.a.createElement("td",null,l.a.createElement("code",null,"Element")," | ",l.a.createElement("code",null,"Document")," | ",l.a.createElement("code",null,"() => (Element/Document)")," | ",l.a.createElement("code",null,"MutableRefObject<Element>")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"callback"),l.a.createElement("td",null,l.a.createElement("code",null,"IntersectionObserver")," \u7684\u56de\u8c03\u88ab\u8c03\u7528\u65f6\u89e6\u53d1"),l.a.createElement("td",null,l.a.createElement("code",null,"(entry: IntersectionObserverEntry) => void")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(m["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"inViewport"),l.a.createElement("td",null,"\u662f\u5426\u53ef\u89c1"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")," | ",l.a.createElement("code",null,"undefined"))),l.a.createElement("tr",null,l.a.createElement("td",null,"ratio"),l.a.createElement("td",null,"\u5f53\u524d\u53ef\u89c1\u6bd4\u4f8b\uff0c\u5728\u6bcf\u6b21\u5230\u8fbe ",l.a.createElement("code",null,"options.threshold")," \u8bbe\u7f6e\u8282\u70b9\u65f6\u66f4\u65b0"),l.a.createElement("td",null,l.a.createElement("code",null,"number")," | ",l.a.createElement("code",null,"undefined"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:n})}}}]);