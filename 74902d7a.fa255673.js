(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(9),a=(n(0),n(171)),i={id:"ui-components",title:"UI Components"},c={id:"ui-components",title:"UI Components",description:"TODO:",source:"@site/docs/ui-components.md",permalink:"/react-native-share/docs/ui-components",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/ui-components.md",sidebar:"someSidebar",previous:{title:"Share.isPackageInstalled (Android only)",permalink:"/react-native-share/docs/share-is-package-installed"},next:{title:"Language Support (iOS only)",permalink:"/react-native-share/docs/language-support"}},p=[{value:"How it looks",id:"how-it-looks",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]}],l={rightToc:p};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"TODO:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Write docs about the ",Object(a.b)("inlineCode",{parentName:"li"},"components")," exported ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/react-native-community/react-native-share/tree/5299d95aab25bfba6815e0f5455876897ed8ddc6/components"}),"here")," and ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/react-native-community/react-native-share/blob/5299d95aab25bfba6815e0f5455876897ed8ddc6/index.js#L50-L82"}),"here")),Object(a.b)("li",{parentName:"ul"},"Refactor the ",Object(a.b)("inlineCode",{parentName:"li"},"UI Components")," to use function components.")),Object(a.b)("h2",{id:"how-it-looks"},"How it looks"),Object(a.b)("h3",{id:"android"},"Android"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"assets/android-component-250x.gif",alt:"Demo Android UI Component"}))),Object(a.b)("h3",{id:"ios"},"iOS"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"assets/ios-component-250x.gif",alt:"Demo iOS UI Component"}))))}s.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);