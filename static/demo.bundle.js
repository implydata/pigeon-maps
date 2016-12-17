webpackJsonp([0],{0:function(e,t,o){e.exports=o(1)},1:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=o(2),i=n(r),a=o(166),l=n(a),u=o(167),s=n(u);o(175),i.default.render(l.default.createElement(s.default,null),document.getElementById("root"))},167:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(166),s=n(u),c=o(168),d=n(c),h=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.zoomIn=function(){o.setState({zoom:Math.min(o.state.zoom+1,18)})},o.zoomOut=function(){o.setState({zoom:Math.max(o.state.zoom-1,1)})},o.handleBoundsChange=function(e){var t=e.center,n=e.zoom;o.setState({center:t,zoom:n})},o.state={center:[50.879,4.6997],zoom:12},o}return a(t,e),l(t,[{key:"render",value:function(){var e=this.state,t=e.center,o=e.zoom;return s.default.createElement("div",null,s.default.createElement(d.default,{center:t,zoom:o,onBoundsChanged:this.handleBoundsChange,width:600,height:400},s.default.createElement(c.Overlay,{position:[50.879,4.6997],offset:[15,31]},s.default.createElement("img",{src:"https://www.apprentus.com/images/map/pin-green-large@2x.png",width:29,height:34,alt:""})),s.default.createElement(c.Overlay,{position:[50.874,4.6947],offset:[15,31]},s.default.createElement("img",{src:"https://www.apprentus.com/images/map/pin-green-large@2x.png",width:29,height:34,alt:""}))),s.default.createElement("div",null,s.default.createElement("button",{onClick:this.zoomOut},"Zoom Out"),s.default.createElement("button",{onClick:this.zoomIn},"Zoom In")," ",o))}}]),t}(u.Component);t.default=h},168:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var r=o(169),i=n(r),a=o(174),l=n(a);t.Overlay=l.default,t.default=i.default},169:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,o){var n="undefined"!=typeof window&&window.devicePixelRatio>=2;return"https://maps.wikimedia.org/osm-intl/"+o+"/"+e+"/"+t+(n?"@2x":"")+".png"}function u(e,t){return e/Math.pow(2,t)*360-180}function s(e,t){var o=Math.PI-2*Math.PI*e/Math.pow(2,t);return 180/Math.PI*Math.atan(.5*(Math.exp(o)-Math.exp(-o)))}function c(e,t){var o=(0,v.default)(e);return[t.clientX-o.x,t.clientY-o.y]}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),h=o(166),f=n(h),p=o(170),m=o(173),v=n(m),w=function(e,t){return(e+180)/360*Math.pow(2,t)},y=function(e,t){return(1-Math.log(Math.tan(e*Math.PI/180)+1/Math.cos(e*Math.PI/180))/Math.PI)/2*Math.pow(2,t)},g=function(e){function t(e){r(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.imageLoaded=function(e){o._loadTracker&&e in o._loadTracker&&(o._loadTracker[e]=!0,0===Object.keys(o._loadTracker).filter(function(e){return!o._loadTracker[e]}).length&&o.setState({oldTiles:[]}))},o.handleTouchStart=function(e){var t=o.props,n=t.width,r=t.height;if(1===e.touches.length){var i=e.touches[0],a=c(o._containerRef,i);a[0]>=0&&a[1]>=0&&a[0]<n&&a[1]<r&&(o._touchStartCoords=[[i.clientX,i.clientY]],e.preventDefault())}else if(2===e.touches.length&&o._touchStartCoords){e.preventDefault(),(o.state.dragDelta||o.state.zoomDelta)&&o.sendDeltaChange();var l=e.touches[0],u=e.touches[1];o._touchStartCoords=[[l.clientX,l.clientY],[u.clientX,u.clientY]],o._touchStartMidPoint=[(l.clientX+u.clientX)/2,(l.clientY+u.clientY)/2],o._touchStartDistance=Math.sqrt(Math.pow(l.clientX-u.clientX,2)+Math.pow(l.clientY-u.clientY,2))}},o.handleTouchMove=function(e){if(1===e.touches.length&&o._touchStartCoords){e.preventDefault();var t=e.touches[0];o.setState({dragDelta:[t.clientX-o._touchStartCoords[0][0],t.clientY-o._touchStartCoords[0][1]]})}else if(2===e.touches.length&&o._touchStartCoords){var n=o.props,r=n.width,i=n.height,a=n.zoom;e.preventDefault();var l=e.touches[0],u=e.touches[1],s=(0,v.default)(o._containerRef),c=[(l.clientX+u.clientX)/2,(l.clientY+u.clientY)/2],d=[c[0]-o._touchStartMidPoint[0],c[1]-o._touchStartMidPoint[1]],h=Math.sqrt(Math.pow(l.clientX-u.clientX,2)+Math.pow(l.clientY-u.clientY,2)),f=Math.min(18,a+Math.log2(h/o._touchStartDistance))-a,p=Math.pow(2,f),m=[(s.x+r/2-c[0])*(p-1),(s.y+i/2-c[1])*(p-1)];o.setState({zoomDelta:f,dragDelta:[m[0]+d[0]*p,m[1]+d[1]*p]})}},o.handleTouchEnd=function(e){if(o._touchStartCoords)if(e.preventDefault(),o.sendDeltaChange(),0===e.touches.length)o._touchStartCoords=null;else if(1===e.touches.length){var t=e.touches[0];o._touchStartCoords=[[t.clientX,t.clientY]]}},o.handleMouseDown=function(e){var t=o.props,n=t.width,r=t.height,i=c(o._containerRef,e);i[0]>=0&&i[1]>=0&&i[0]<n&&i[1]<r&&(o._mouseDown=!0,o._dragStart=i,e.preventDefault())},o.handleMouseMove=function(e){o._mousePosition=c(o._containerRef,e),o._mouseDown&&o._dragStart&&o.setState({dragDelta:[o._mousePosition[0]-o._dragStart[0],o._mousePosition[1]-o._dragStart[1]]})},o.handleMouseUp=function(e){o._mouseDown&&(o.sendDeltaChange(),o._mouseDown=!1)},o.sendDeltaChange=function(){var e=o.props,t=e.center,n=e.zoom,r=e.onBoundsChanged,i=o.state,a=i.dragDelta,l=i.zoomDelta;if(r&&(a||0!==l)){var c=u(w(t[1],n+l)-(a?a[0]/256:0),n+l),d=s(y(t[0],n+l)-(a?a[1]/256:0),n+l);r({center:[d,c],zoom:n+l})}o.setState({dragDelta:null,zoomDelta:0})},o.handleWheel=function(e){e.preventDefault(),o.handleWheelThrottled(e)},o.handleWheelThrottled=(0,p.throttle)(20,!0,function(e){e.deltaY<0?o.zoomAroundMouse(.2):e.deltaY>0&&o.zoomAroundMouse(-.2)}),o.pixelToLatLng=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.props.zoom,r=o.props,i=r.center,a=r.width,l=r.height,c=[(e-a/2)/256,(t-l/2)/256],d=w(i[1],n)+c[0],h=y(i[0],n)+c[1];return[s(h,n),u(d,n)]},o.latLngToPixel=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.props.zoom,r=o.props,i=r.center,a=r.width,l=r.height,u=w(i[1],n),s=y(i[0],n),c=w(t,n),d=y(e,n);return[256*(c-u)+a/2,256*(d-s)+l/2]},o.zoomAroundMouse=function(e){var t=o.props,n=t.center,r=t.zoom,i=t.onBoundsChanged;if(!(!o._mousePosition||r+e<1||r+e>18)){var a=o.pixelToLatLng(o._mousePosition[0],o._mousePosition[1],r),l=o.pixelToLatLng(o._mousePosition[0],o._mousePosition[1],r+e),u=l[0]-a[0],s=l[1]-a[1];i({center:[n[0]-u,n[1]-s],zoom:r+e})}},o.setRef=function(e){o._containerRef=e},o._mousePosition=null,o._dragStart=null,o._mouseDown=!1,o._touchStartCoords=null,o.state={dragDelta:null,zoomDelta:0,oldTiles:[]},o}return a(t,e),d(t,[{key:"componentDidMount",value:function(){window.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("touchstart",this.handleTouchStart),window.addEventListener("touchmove",this.handleTouchMove),window.addEventListener("touchend",this.handleTouchEnd)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd)}},{key:"componentWillReceiveProps",value:function(e,t){var o=this;Math.round(this.props.zoom)!==Math.round(e.zoom)&&!function(){var n=o.tileValues(o.props,o.state),r=o.tileValues(e,t),i=o.state.oldTiles;o.setState({oldTiles:i.filter(function(e){return e.roundedZoom!==n.roundedZoom}).concat(n)});for(var a={},l=r.tileMinX;l<=r.tileMaxX;l++)for(var u=r.tileMinY;u<=r.tileMaxY;u++){var s=l+"-"+u+"-"+r.roundedZoom;a[s]=!1}o._loadTracker=a}()}},{key:"tileValues",value:function(e,t){var o=e.center,n=e.zoom,r=e.width,i=e.height,a=t.dragDelta,l=t.zoomDelta,u=Math.round(n+l),s=n+l-u,c=Math.pow(2,s),d=r/c,h=i/c,f=w(o[1],u)-(a?a[0]/256/c:0),p=y(o[0],u)-(a?a[1]/256/c:0),m=d/2/256,v=h/2/256,g=Math.floor(f-m),_=Math.floor(f+m),M=Math.floor(p-v),b=Math.floor(p+v);return{tileMinX:g,tileMaxX:_,tileMinY:M,tileMaxY:b,tileCenterX:f,tileCenterY:p,roundedZoom:u,zoomDelta:l,scaleWidth:d,scaleHeight:h,scale:c}}},{key:"renderTiles",value:function(){for(var e=this,t=this.state.oldTiles,o=this.props.provider||l,n=this.tileValues(this.props,this.state),r=n.tileMinX,i=n.tileMaxX,a=n.tileMinY,u=n.tileMaxY,s=n.tileCenterX,c=n.tileCenterY,d=n.roundedZoom,h=n.scaleWidth,p=n.scaleHeight,m=n.scale,v=[],w=0;w<t.length;w++){var y=t[w],g=y.roundedZoom-d;if(!(Math.abs(g)>4||0===g))for(var _=1/Math.pow(2,g),M=256*-(r-y.tileMinX*_),b=256*-(a-y.tileMinY*_),T=y.tileMinX;T<=y.tileMaxX;T++)for(var P=y.tileMinY;P<=y.tileMaxY;P++)v.push({key:T+"-"+P+"-"+y.roundedZoom,url:o(T,P,y.roundedZoom),left:M+256*(T-y.tileMinX)*_,top:b+256*(P-y.tileMinY)*_,width:256*_,height:256*_,active:!1})}for(var E=r;E<=i;E++)for(var D=a;D<=u;D++)v.push({key:E+"-"+D+"-"+d,url:o(E,D,d),left:256*(E-r),top:256*(D-a),width:256,height:256,active:!0});var O={width:h,height:p,position:"absolute",top:0,left:0,overflow:"hidden",transform:"scale("+m+", "+m+")",transformOrigin:"top left"},z=-(256*(s-r)-h/2),S=-(256*(c-a)-p/2),C={position:"absolute",width:256*(i-r+1),height:256*(u-a+1),left:z,top:S};return f.default.createElement("div",{style:O},f.default.createElement("div",{style:C},v.map(function(t){return f.default.createElement("img",{key:t.key,src:t.url,width:t.width,height:t.height,onLoad:function(){return e.imageLoaded(t.key)},style:{position:"absolute",left:t.left,top:t.top,transform:t.transform,transformOrigin:"top left",opacity:1}})})))}},{key:"renderOverlays",value:function(){var e=this,t=this.props,o=t.zoom,n=t.width,r=t.height,i=this.state,a=i.dragDelta,l=i.zoomDelta,u=f.default.Children.map(this.props.children,function(t){var n=t.props,r=n.position,i=n.offset;if(r){var u=e.latLngToPixel(r[0],r[1],o+l);return f.default.cloneElement(t,{left:u[0]-(i?i[0]:0)+(a?a[0]:0),top:u[1]-(i?i[1]:0)+(a?a[1]:0)})}}),s={position:"absolute",width:n,height:r,top:0,left:0};return f.default.createElement("div",{style:s},u)}},{key:"render",value:function(){var e=this.props,t=e.width,o=e.height,n={width:t,height:o,position:"relative",display:"inline-block",overflow:"hidden",background:"#dddddd"};return f.default.createElement("div",{style:n,ref:this.setRef,onWheel:this.handleWheel},this.renderTiles(),this.renderOverlays())}}]),t}(h.Component);g.propTypes={center:f.default.PropTypes.array,zoom:f.default.PropTypes.number,width:f.default.PropTypes.number,height:f.default.PropTypes.number,provider:f.default.PropTypes.func,children:f.default.PropTypes.node,onBoundsChanged:f.default.PropTypes.func,onZoomChanged:f.default.PropTypes.func},t.default=g},170:function(e,t,o){var n=o(171),r=o(172);e.exports={throttle:n,debounce:r}},171:function(e,t){e.exports=function(e,t,o,n){function r(){function r(){a=Number(new Date),o.apply(u,c)}function l(){i=void 0}var u=this,s=Number(new Date)-a,c=arguments;n&&!i&&r(),i&&clearTimeout(i),void 0===n&&s>e?r():t!==!0&&(i=setTimeout(n?l:r,void 0===n?e-s:e))}var i,a=0;return"boolean"!=typeof t&&(n=o,o=t,t=void 0),r}},172:function(e,t,o){var n=o(171);e.exports=function(e,t,o){return void 0===o?n(e,t,!1):n(e,o,t!==!1)}},173:function(e,t){"use strict";function o(e){for(var t=0,o=0,n=!0;e;)t+=e.offsetLeft-(n?0:e.scrollLeft)+e.clientLeft,o+=e.offsetTop-(n?0:e.scrollTop)+e.clientTop,e=e.offsetParent,n=!1;return{x:t,y:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},174:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),u=o(166),s=n(u),c=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.left,o=e.top;return s.default.createElement("div",{style:{position:"absolute",left:t,top:o}},this.props.children)}}]),t}(u.Component);c.propTypes={position:s.default.PropTypes.array,offset:s.default.PropTypes.array,left:s.default.PropTypes.number,top:s.default.PropTypes.number,children:s.default.PropTypes.node},t.default=c},175:function(e,t,o){e.exports=o.p+"index.html"}});