webpackJsonp([0],{0:function(e,t,o){e.exports=o(1)},1:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=o(2),i=n(r),a=o(166),u=n(a),l=o(167),s=n(l);o(175),i.default.render(u.default.createElement(s.default,null),document.getElementById("root"))},167:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(166),s=n(l),f=o(168),c=n(f),p=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.zoomIn=function(){o.setState({zoom:Math.min(o.state.zoom+.1,18)})},o.zoomOut=function(){o.setState({zoom:Math.max(o.state.zoom-.1,1)})},o.handleBoundsChange=function(e){var t=e.center,n=e.zoom;o.setState({center:t,zoom:n})},o.state={center:[50.879,4.6997],zoom:12},o}return a(t,e),u(t,[{key:"render",value:function(){var e=this.state,t=e.center,o=e.zoom;return s.default.createElement("div",null,s.default.createElement(c.default,{center:t,zoom:o,onBoundsChanged:this.handleBoundsChange,width:600,height:400},s.default.createElement(f.Overlay,{position:[50.879,4.6997],offset:[15,31]},s.default.createElement("img",{src:"https://www.apprentus.com/images/map/pin-green-large@2x.png",width:29,height:34,alt:""})),s.default.createElement(f.Overlay,{position:[50.874,4.6947],offset:[15,31]},s.default.createElement("img",{src:"https://www.apprentus.com/images/map/pin-green-large@2x.png",width:29,height:34,alt:""}))),s.default.createElement("div",null,s.default.createElement("button",{onClick:this.zoomOut},"Zoom Out"),s.default.createElement("button",{onClick:this.zoomIn},"Zoom In")," ",o))}}]),t}(l.Component);t.default=p},168:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var r=o(169),i=n(r),a=o(174),u=n(a);t.Overlay=u.default,t.default=i.default},169:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t,o){var n="undefined"!=typeof window&&window.devicePixelRatio>=2;return"https://maps.wikimedia.org/osm-intl/"+o+"/"+e+"/"+t+(n?"@2x":"")+".png"}function l(e,t){return e/Math.pow(2,t)*360-180}function s(e,t){var o=Math.PI-2*Math.PI*e/Math.pow(2,t);return 180/Math.PI*Math.atan(.5*(Math.exp(o)-Math.exp(-o)))}function f(e,t){var o=(0,v.default)(e);return[t.clientX-o.x,t.clientY-o.y]}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=o(166),d=n(p),h=o(170),m=o(173),v=n(m),y=function(e,t){return(e+180)/360*Math.pow(2,t)},w=function(e,t){return(1-Math.log(Math.tan(e*Math.PI/180)+1/Math.cos(e*Math.PI/180))/Math.PI)/2*Math.pow(2,t)},b=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleMouseDown=function(e){var t=o.props,n=t.width,r=t.height,i=f(o._containerRef,e);i[0]>=0&&i[1]>=0&&i[0]<n&&i[1]<r&&(o._mouseDown=!0,o._dragStart=i,e.preventDefault())},o.handleMouseUp=function(e){if(o._mouseDown){var t=o.props,n=t.center,r=t.zoom,i=t.onBoundsChanged,a=o.state.dragDelta;if(a&&i){var u=l(y(n[1],r)-(a?a[0]/256:0),r),f=s(w(n[0],r)-(a?a[1]/256:0),r);i({center:[f,u],zoom:r})}o._mouseDown=!1,o.setState({dragDelta:null})}},o.handleMouseMove=function(e){o._mousePosition=f(o._containerRef,e),o._mouseDown&&o._dragStart&&o.setState({dragDelta:[o._mousePosition[0]-o._dragStart[0],o._mousePosition[1]-o._dragStart[1]]})},o.handleWheel=function(e){e.preventDefault(),o.handleWheelThrottled(e)},o.handleWheelThrottled=(0,h.throttle)(20,!0,function(e){e.deltaY<0?o.zoomAroundMouse(.1):e.deltaY>0&&o.zoomAroundMouse(-.1)}),o.pixelToLatLng=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.props.zoom,r=o.props,i=r.center,a=r.width,u=r.height,f=[(e-a/2)/256,(t-u/2)/256],c=y(i[1],n)+f[0],p=w(i[0],n)+f[1];return[s(p,n),l(c,n)]},o.latLngToPixel=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.props.zoom,r=o.props,i=r.center,a=r.width,u=r.height,l=y(i[1],n),s=w(i[0],n),f=y(t,n),c=w(e,n);return[256*(f-l)+a/2,256*(c-s)+u/2]},o.zoomAroundMouse=function(e){var t=o.props,n=t.center,r=t.zoom,i=t.onBoundsChanged;if(!(r+e<1||r+e>18)){var a=o.pixelToLatLng(o._mousePosition[0],o._mousePosition[1],r),u=o.pixelToLatLng(o._mousePosition[0],o._mousePosition[1],r+e),l=u[0]-a[0],s=u[1]-a[1];i({center:[n[0]-l,n[1]-s],zoom:r+e})}},o.setRef=function(e){o._containerRef=e},o._mousePosition=null,o._dragStart=null,o._mouseDown=!1,o.state={dragDelta:null},o}return a(t,e),c(t,[{key:"componentDidMount",value:function(){window.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("mousemove",this.handleMouseMove)}},{key:"render",value:function(){for(var e=this,t=this.props,o=t.center,n=t.zoom,r=t.width,i=t.height,a=t.provider,l=this.state.dragDelta,s=Math.round(n),f=n-s,c=Math.pow(2,f),p=r/c,h=i/c,m=a||u,v=y(o[1],s)-(l?l[0]/256/c:0),b=w(o[0],s)-(l?l[1]/256/c:0),g=p/2/256,_=h/2/256,M=Math.floor(v-g),P=Math.floor(v+g),O=Math.floor(b-_),E=Math.floor(b+_),T=[],z=M;z<=P;z++)for(var j=O;j<=E;j++)T.push({key:z+"-"+j+"-"+s,url:m(z,j,s),left:256*(z-M),top:256*(j-O),width:256,height:256});var x={width:p,height:h,position:"absolute",top:0,left:0,overflow:"hidden",transform:"scale("+c+", "+c+")",transformOrigin:"top left"},D=-(256*(v-M)-p/2),L=-(256*(b-O)-h/2),k={position:"absolute",width:256*(P-M+1),height:256*(E-O+1),left:D,top:L},C=d.default.createElement("div",{style:x},d.default.createElement("div",{style:k},T.map(function(e){return d.default.createElement("img",{key:e.key,src:e.url,width:e.width,height:e.height,style:{position:"absolute",left:e.left,top:e.top,transform:e.transform,transformOrigin:"top left"}})}))),S=d.default.Children.map(this.props.children,function(t){var o=t.props,r=o.position,i=o.offset;if(r){var a=e.latLngToPixel(r[0],r[1],n);return d.default.cloneElement(t,{left:a[0]-(i?i[0]:0)+(l?l[0]:0),top:a[1]-(i?i[1]:0)+(l?l[1]:0)})}}),I={position:"absolute",width:r,height:i,top:0,left:0},R=d.default.createElement("div",{style:I},S),B={width:r,height:i,position:"relative",display:"inline-block",overflow:"hidden"};return d.default.createElement("div",{style:B,ref:this.setRef,onWheel:this.handleWheel},C,R)}}]),t}(p.Component);b.propTypes={center:d.default.PropTypes.array,zoom:d.default.PropTypes.number,width:d.default.PropTypes.number,height:d.default.PropTypes.number,provider:d.default.PropTypes.func,children:d.default.PropTypes.node,onBoundsChanged:d.default.PropTypes.func,onZoomChanged:d.default.PropTypes.func},t.default=b},170:function(e,t,o){var n=o(171),r=o(172);e.exports={throttle:n,debounce:r}},171:function(e,t){e.exports=function(e,t,o,n){function r(){function r(){a=Number(new Date),o.apply(l,f)}function u(){i=void 0}var l=this,s=Number(new Date)-a,f=arguments;n&&!i&&r(),i&&clearTimeout(i),void 0===n&&s>e?r():t!==!0&&(i=setTimeout(n?u:r,void 0===n?e-s:e))}var i,a=0;return"boolean"!=typeof t&&(n=o,o=t,t=void 0),r}},172:function(e,t,o){var n=o(171);e.exports=function(e,t,o){return void 0===o?n(e,t,!1):n(e,o,t!==!1)}},173:function(e,t){"use strict";function o(e){for(var t=0,o=0,n=!0;e;)t+=e.offsetLeft-(n?0:e.scrollLeft)+e.clientLeft,o+=e.offsetTop-(n?0:e.scrollTop)+e.clientTop,e=e.offsetParent,n=!1;return{x:t,y:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},174:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(166),s=n(l),f=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.left,o=e.top;return s.default.createElement("div",{style:{position:"absolute",left:t,top:o}},this.props.children)}}]),t}(l.Component);f.propTypes={position:s.default.PropTypes.array,offset:s.default.PropTypes.array,left:s.default.PropTypes.number,top:s.default.PropTypes.number,children:s.default.PropTypes.node},t.default=f},175:function(e,t,o){e.exports=o.p+"index.html"}});