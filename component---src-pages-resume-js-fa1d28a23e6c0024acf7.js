webpackJsonp([0x8eb291567e75],{21:function(e,t,a){e.exports={default:a(26),__esModule:!0}},22:function(e,t,a){e.exports={default:a(27),__esModule:!0}},24:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(21),r=n(l);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}},25:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}},26:function(e,t,a){a(30),e.exports=a(7).Object.assign},27:function(e,t,a){a(31),e.exports=a(7).Object.keys},28:function(e,t,a){"use strict";var n=a(13),l=a(42),r=a(38),o=a(16),s=a(46),c=Object.assign;e.exports=!c||a(11)(function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach(function(e){t[e]=e}),7!=c({},e)[a]||Object.keys(c({},t)).join("")!=n})?function(e,t){for(var a=o(e),c=arguments.length,u=1,i=l.f,d=r.f;c>u;)for(var f,m=s(arguments[u++]),p=i?n(m).concat(i(m)):n(m),v=p.length,h=0;v>h;)d.call(m,f=p[h++])&&(a[f]=m[f]);return a}:c},29:function(e,t,a){var n=a(10),l=a(7),r=a(11);e.exports=function(e,t){var a=(l.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*r(function(){a(1)}),"Object",o)}},30:function(e,t,a){var n=a(10);n(n.S+n.F,"Object",{assign:a(28)})},31:function(e,t,a){var n=a(16),l=a(13);a(29)("keys",function(){return function(e){return l(n(e))}})},32:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return r(w+e)}function r(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var o=a(24),s=n(o),c=a(22),u=n(c),i=a(25),d=n(i),f=a(23),m=n(f),p=a(36),v=n(p),h=a(35),b=n(h);t.withPrefix=l;var E=a(2),y=n(E),N=a(40),g=a(6),_=n(g),w="/",j={activeClassName:_.default.string,activeStyle:_.default.object,exact:_.default.bool,strict:_.default.bool,isActive:_.default.func,location:_.default.object},k=function(e,t){var a=new window.IntersectionObserver(function(n){n.forEach(function(n){e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(a.unobserve(e),a.disconnect(),t())})});a.observe(e)},O=function(e){function t(a){(0,m.default)(this,t);var n=(0,v.default)(this,e.call(this)),r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={to:l(a.to),IOSupported:r},n.handleRef=n.handleRef.bind(n),n}return(0,b.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:l(e.to)}),this.state.IOSupported||___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to)},t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&k(e,function(){___loader.enqueue(t.state.to)})},t.prototype.render=function(){var e=this,t=this.props,a=t.onClick,n=(0,d.default)(t,["onClick"]),l=void 0;return l=(0,u.default)(j).some(function(t){return e.props[t]})?N.NavLink:N.Link,y.default.createElement(l,(0,s.default)({onClick:function(t){if(a&&a(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var n=e.state.to;if(n.split("#").length>1&&(n=n.split("#").slice(0,-1).join("")),n===window.location.pathname){var l=e.state.to.split("#").slice(1).join("#"),r=document.getElementById(l);if(null!==r)return r.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},n,{to:this.state.to,innerRef:this.handleRef}))},t}(y.default.Component);O.propTypes=(0,s.default)({},j,{to:_.default.string.isRequired,onClick:_.default.func}),O.contextTypes={router:_.default.object},t.default=O;t.navigateTo=function(e){window.___navigateTo(l(e))}},196:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=a(32),s=n(o),c=function(){return r.default.createElement("div",{id:"resume"},r.default.createElement("h1",null,r.default.createElement(s.default,{to:"/"},"Dustin Smith")),r.default.createElement("div",{className:"contact"},r.default.createElement("div",{className:"email"},r.default.createElement("a",{href:"mailto:thedustinsmith@gmail.com"},"thedustinsmith@gmail.com")),r.default.createElement("div",{className:"phone"},r.default.createElement("a",{href:"tel:5732272202"},"573.227.2202"))),r.default.createElement("section",{className:"employment"},r.default.createElement("h2",{className:"gray-header"},"Employment"),r.default.createElement("div",{className:"entry"},r.default.createElement("h3",null,"Foliotek Inc ",r.default.createElement("span",{className:"dates"},"2009 - ",r.default.createElement("em",null,"[Present]"))),r.default.createElement("span",{className:"sub-header"},"Project Lead"),r.default.createElement("p",{className:"description"},"Lead several different projects.  Specialized in front end development using Javascript, jQuery, and Backbone.  Developed on the full stack: C# ASP.NET Webforms & MVC, PHP, NodeJS, and MSSQL.  Also did a considerable amount of server management."))),r.default.createElement("section",{className:"education"},r.default.createElement("h2",{className:"gray-header"},"Education"),r.default.createElement("div",{className:"entry"},r.default.createElement("h3",null,"University of Missouri - Columbia ",r.default.createElement("span",{className:"dates"},"2006 - 2010")),r.default.createElement("span",{className:"sub-header"},"Bachelor of Science in Information Technology"))),r.default.createElement("section",{className:"experience"},r.default.createElement("h2",{className:"gray-header"},"Experience"),r.default.createElement("div",{className:"skill"},r.default.createElement("label",null,"Javascript"),r.default.createElement("div",{className:"bar bar-5 b1"},"5+ years")),r.default.createElement("div",{className:"skill"},r.default.createElement("label",null,"C# MVC/WebForms"),r.default.createElement("div",{className:"bar bar-5 b2"},"5+ years")),r.default.createElement("div",{className:"skill"},r.default.createElement("label",null,"NodeJS"),r.default.createElement("div",{className:"bar bar-2 b3"},"2+ years")),r.default.createElement("div",{className:"skill"},r.default.createElement("label",null,"Html/CSS"),r.default.createElement("div",{className:"bar bar-10 b4"},"10+ years"))),r.default.createElement("section",{className:"awards"},r.default.createElement("h2",{className:"gray-header"},"Awards"),r.default.createElement("div",{className:"entry"},r.default.createElement("h3",null,"NodeKnockout 2014 ",r.default.createElement("span",{className:"dates"},"November 2014")),r.default.createElement("span",{className:"sub-header"},"Top 20"),r.default.createElement("p",{className:"description"},"My team built a mosaic generator using bleeding edge HTML5 features of javascript, and used Node as our backend to share mosaics, and use other people's images to help create your mosaic.  It's not in current development anymore, but you can find it at ",r.default.createElement("a",{href:"http://www.imgzaic.com",target:"_blank"},"www.imgzaic.com"),"."))))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-resume-js-fa1d28a23e6c0024acf7.js.map