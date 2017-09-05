var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.checkStringArgs=function(a,b,d){if(null==a)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return a+""};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,d,c){if(b){d=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var g=a[c];g in d||(d[g]={});d=d[g]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("String.prototype.startsWith",function(a){return a?a:function(a,d){var b=$jscomp.checkStringArgs(this,a,"startsWith");a+="";var g=b.length,e=a.length;d=Math.max(0,Math.min(d|0,b.length));for(var f=0;f<e&&d<g;)if(b[d++]!=a[f++])return!1;return f>=e}},"es6","es3");
(function(a,b){var d=function(a,b,e){var c;return function(){var g=this,d=arguments;c?clearTimeout(c):e&&a.apply(g,d);c=setTimeout(function(){e||a.apply(g,d);c=null},b||100)}};jQuery.fn[b]=function(a){return a?this.bind("resize",d(a)):this.trigger(b)}})(jQuery,"smartresize");$(function(){"function"==typeof resize&&($(window).smartresize(function(){resize()}),$(window).load(function(){resize()}))});
function getWindowSize(){var a=0,b=0;if(window.innerHeight)a=window.innerHeight,b=window.innerWidth;else{var d=window.document.body;d.parentNode.clientHeight?(a=d.parentNode.clientHeight,b=d.parentNode.clientWidth):d&&d.clientHeight&&(a=d.clientHeight,b=d.clientWidth)}return{h:a,w:b}}function resizeElementHeight(a,b){a.style.height=getWindowSize().h-b+"px"}function resizeElementWidth(a,b){a.style.width=getWindowSize().w-b+"px"}function gotoIndex(){top.location.pathname="/"}
function getAppRootPath(){var a=top.location;return a.protocol+"//"+a.host+"/"}function getLocationParamByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");a=(new RegExp("[\\?&]"+a+"=([^&#]*)")).exec(location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))}
function getBrowserName(){var a=!!document.documentMode;return a?"ie":(a="undefined"!==typeof window.InstallTrigger)?"firefox":(a=!!window.chrome&&!!window.chrome.webstore)?"chrome":(a=!!window.StyleMedia)?"edge":(a=!!window.opr&&!!window.opr.addons||!!window.opera||0<=navigator.userAgent.indexOf(" OPR/"))?"opera":(a=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||window.safari.pushNotification).toString())?"sofari":"Unknow browser"}
function myuploadfile(a,b,d,c){myajax(a,b,c,{cache:!1,contentType:!1,processData:!1,progressHandler:d})}var myajax_default_config={type:"POST",dataType:"json",timeout:3E4,contentType:"application/x-www-form-urlencoded;charset=UTF-8",async:!0,befohttp_statusend:null,global:!0,cache:!1,processData:!0,errorHandler:showError,respHandler:respHandler};
function myajax(a,b,d,c){c=$.extend(myajax_default_config,c||{});$.ajax({url:a,type:c.type,data:b,cache:c.cache,dataType:c.dataType,timeout:c.timeout,contentType:c.contentType,async:c.async,befohttp_statusend:c.befohttp_statusend,global:c.global,processData:c.processData,xhr:function(){var a=$.ajaxSettings.xhr();a.upload&&"function"===typeof c.progressHandler&&a.upload.addEventListener("progress",c.progressHandler,!1);return a},complete:function(b,e){(e=getReqBadStatus(b,e))?(e.url=a,e.level="fatal",
c.errorHandler(e),b=null):b=c.respHandler(b.responseText,c.errorHandler);d&&("function"===typeof d?d(b):d.success&&null!==b&&d.success(b))}})}function showError(a){window.top.showTopDialog?(a.level||(a.level="error"),a.title="<span title='"+a.url+"'>"+a.title+"</span>",window.top.showTopDialog(a)):alert("url="+a.url+", title="+a.title+"\nmessage="+a.message)}
var http_status={100:"\u5ba2\u6237\u5fc5\u987b\u7ee7\u7eed\u53d1\u51fa\u8bf7\u6c42",101:"\u5ba2\u6237\u8981\u6c42\u670d\u52a1\u5668\u6839\u636e\u8bf7\u6c42\u8f6c\u6362HTTP\u534f\u8bae\u7248\u672c",200:"\u4ea4\u6613\u6210\u529f",201:"\u63d0\u793a\u77e5\u9053\u65b0\u6587\u4ef6\u7684URL",202:"\u63a5\u53d7\u548c\u5904\u7406\u3001\u4f46\u5904\u7406\u672a\u5b8c\u6210",203:"\u8fd4\u56de\u4fe1\u606f\u4e0d\u786e\u5b9a\u6216\u4e0d\u5b8c\u6574",204:"\u8bf7\u6c42\u6536\u5230\uff0c\u4f46\u8fd4\u56de\u4fe1\u606f\u4e3a\u7a7a",
205:"\u670d\u52a1\u5668\u5b8c\u6210\u4e86\u8bf7\u6c42\uff0c\u7528\u6237\u4ee3\u7406\u5fc5\u987b\u590d\u4f4d\u5f53\u524d\u5df2\u7ecf\u6d4f\u89c8\u8fc7\u7684\u6587\u4ef6",206:"\u670d\u52a1\u5668\u5df2\u7ecf\u5b8c\u6210\u4e86\u90e8\u5206\u7528\u6237\u7684GET\u8bf7\u6c42",300:"\u8bf7\u6c42\u7684\u8d44\u6e90\u53ef\u5728\u591a\u5904\u5f97\u5230",301:"\u5220\u9664\u8bf7\u6c42\u6570\u636e",302:"\u5728\u5176\u4ed6\u5730\u5740\u53d1\u73b0\u4e86\u8bf7\u6c42\u6570\u636e",303:"\u5efa\u8bae\u5ba2\u6237\u8bbf\u95ee\u5176\u4ed6URL\u6216\u8bbf\u95ee\u65b9\u5f0f",
304:"\u5ba2\u6237\u7aef\u5df2\u7ecf\u6267\u884c\u4e86GET\uff0c\u4f46\u6587\u4ef6\u672a\u53d8\u5316",305:"\u8bf7\u6c42\u7684\u8d44\u6e90\u5fc5\u987b\u4ece\u670d\u52a1\u5668\u6307\u5b9a\u7684\u5730\u5740\u5f97\u5230",306:"\u524d\u4e00\u7248\u672cHTTP\u4e2d\u4f7f\u7528\u7684\u4ee3\u7801\uff0c\u73b0\u884c\u7248\u672c\u4e2d\u4e0d\u518d\u4f7f\u7528",307:"\u7533\u660e\u8bf7\u6c42\u7684\u8d44\u6e90\u4e34\u65f6\u6027\u5220\u9664",400:"\u9519\u8bef\u8bf7\u6c42\uff0c\u5982\u8bed\u6cd5\u9519\u8bef",401:"\u8bf7\u6c42\u6388\u6743\u5931\u8d25",
402:"\u4fdd\u7559\u6709\u6548ChargeTo\u5934\u54cd\u5e94",403:"\u8bf7\u6c42\u4e0d\u5141\u8bb8",404:"\u6ca1\u6709\u53d1\u73b0\u6587\u4ef6\u3001\u67e5\u8be2\u6216URL",405:"\u7528\u6237\u5728Request-Line\u5b57\u6bb5\u5b9a\u4e49\u7684\u65b9\u6cd5\u4e0d\u5141\u8bb8",406:"\u6839\u636e\u7528\u6237\u53d1\u9001\u7684Accept\u62d6\uff0c\u8bf7\u6c42\u8d44\u6e90\u4e0d\u53ef\u8bbf\u95ee",407:"\u7c7b\u4f3c401\uff0c\u7528\u6237\u5fc5\u987b\u9996\u5148\u5728\u4ee3\u7406\u670d\u52a1\u5668\u4e0a\u5f97\u5230\u6388\u6743",
408:"\u5ba2\u6237\u7aef\u6ca1\u6709\u5728\u7528\u6237\u6307\u5b9a\u7684\u997f\u65f6\u95f4\u5185\u5b8c\u6210\u8bf7\u6c42",409:"\u5bf9\u5f53\u524d\u8d44\u6e90\u72b6\u6001\uff0c\u8bf7\u6c42\u4e0d\u80fd\u5b8c\u6210",410:"\u670d\u52a1\u5668\u4e0a\u4e0d\u518d\u6709\u6b64\u8d44\u6e90\u4e14\u65e0\u8fdb\u4e00\u6b65\u7684\u53c2\u8003\u5730\u5740",411:"\u670d\u52a1\u5668\u62d2\u7edd\u7528\u6237\u5b9a\u4e49\u7684Content-Length\u5c5e\u6027\u8bf7\u6c42",412:"\u4e00\u4e2a\u6216\u591a\u4e2a\u8bf7\u6c42\u5934\u5b57\u6bb5\u5728\u5f53\u524d\u8bf7\u6c42\u4e2d\u9519\u8bef",
413:"\u8bf7\u6c42\u7684\u8d44\u6e90\u5927\u4e8e\u670d\u52a1\u5668\u5141\u8bb8\u7684\u5927\u5c0f",414:"\u8bf7\u6c42\u7684\u8d44\u6e90URL\u957f\u4e8e\u670d\u52a1\u5668\u5141\u8bb8\u7684\u957f\u5ea6",415:"\u8bf7\u6c42\u8d44\u6e90\u4e0d\u652f\u6301\u8bf7\u6c42\u9879\u76ee\u683c\u5f0f",416:"\u8bf7\u6c42\u4e2d\u5305\u542bRange\u8bf7\u6c42\u5934\u5b57\u6bb5\uff0c\u5728\u5f53\u524d\u8bf7\u6c42\u8d44\u6e90\u8303\u56f4\u5185\u6ca1\u6709range\u6307\u793a\u503c\uff0c\u8bf7\u6c42\u4e5f\u4e0d\u5305\u542bIf-Range\u8bf7\u6c42\u5934\u5b57\u6bb5",
417:"\u670d\u52a1\u5668\u4e0d\u6ee1\u8db3\u8bf7\u6c42Expect\u5934\u5b57\u6bb5\u6307\u5b9a\u7684\u671f\u671b\u503c\uff0c\u5982\u679c\u662f\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u53ef\u80fd\u662f\u4e0b\u4e00\u7ea7\u670d\u52a1\u5668\u4e0d\u80fd\u6ee1\u8db3\u8bf7\u6c42",500:"\u670d\u52a1\u5668\u4ea7\u751f\u5185\u90e8\u9519\u8bef",501:"\u670d\u52a1\u5668\u4e0d\u652f\u6301\u8bf7\u6c42\u7684\u51fd\u6570",502:"\u670d\u52a1\u5668\u6682\u65f6\u4e0d\u53ef\u7528\uff0c\u6709\u65f6\u662f\u4e3a\u4e86\u9632\u6b62\u53d1\u751f\u7cfb\u7edf\u8fc7\u8f7d",
503:"\u670d\u52a1\u5668\u8fc7\u8f7d\u6216\u6682\u505c\u7ef4\u4fee",504:"\u5173\u53e3\u8fc7\u8f7d\uff0c\u670d\u52a1\u5668\u4f7f\u7528\u53e6\u4e00\u4e2a\u5173\u53e3\u6216\u670d\u52a1\u6765\u54cd\u5e94\u7528\u6237\uff0c\u7b49\u5f85\u65f6\u95f4\u8bbe\u5b9a\u503c\u8f83\u957f",505:"\u670d\u52a1\u5668\u4e0d\u652f\u6301\u6216\u62d2\u7edd\u652f\u8bf7\u6c42\u5934\u4e2d\u6307\u5b9a\u7684HTTP\u7248\u672c"};
function getReqBadStatus(a,b){if(4===a.readyState)return 200===a.status?null:401===a.status?(gotoIndex(),null):403===a.status?{title:"\u8bf7\u6c42\u88ab\u62d2\u7edd",message:"\u6743\u9650\u4e0d\u8db3\uff0c\u8bf7\u6c42\u88ab\u62d2\u7edd"}:{title:"http\u72b6\u6001\u9519\u8bef",message:"Error:\n\tcode="+a.status+"\n\tmessage="+http_status[a.status]+" - "+b};switch(a.readyState){case 0:if("timeout"===b)return{title:"\u8bf7\u6c42\u8d85\u65f6",message:"\u7b49\u5f85\u670d\u52a1\u5668\u5904\u7406\u8d85\u65f6\uff08\u670d\u52a1\u5668\u5904\u7406\u65f6\u95f4\u8fc7\u957f\uff09\u3002"};
break;case 1:return{title:"\u72b6\u6001\u9519\u8bef",message:"Error:\n\tcode="+a.readyState+"\n\tmessage=\u7b49\u5f85\u670d\u52a1\u5668\u54cd\u5e94\u5931\u8d25\u3002\u53ef\u80fd\u670d\u52a1\u5668\u5173\u95ed\u6216\u7f51\u7edc\u4e0d\u7a33\u5b9a\u3002"};case 2:return{title:"\u72b6\u6001\u9519\u8bef",message:"Error:\n\tcode="+a.readyState+"\n\tmessage=\u63a5\u6536\u5230\u670d\u52a1\u5668\u6570\u636e\u540e\u53d1\u751f\u9519\u8bef\u3002"};case 3:return{title:"\u72b6\u6001\u9519\u8bef",message:"Error:\n\tcode="+
a.readyState+"\n\tmessage=\u89e3\u6790\u670d\u52a1\u5668\u6570\u636e\u65f6\u53d1\u751f\u9519\u8bef\u3002"}}return{title:"\u72b6\u6001\u9519\u8bef",message:"Error:\n\tcode="+a.readyState+"\n\tmessage="+a.statusText}}
function respHandler(a,b){if("string"===typeof a)try{a=JSON.parse(a)}catch(d){return b({title:"\u8fd4\u56de\u503c\u975ejson\u683c\u5f0f",message:"Text="+a}),null}if(!a)return null;if(0===a.RC)return null==a.ctx?"":a.ctx;switch(a.RC){case 2:(a=parseFormValidError(a.ctx))&&b({title:"\u8868\u5355\u6570\u636e\u6821\u9a8c\u9519\u8bef",message:a});break;default:b({title:"\u9519\u8bef",message:j2s(a.ctx)})}return null}
function parseFormValidError(a){if(!a||"object"!==typeof a)return" \u63d0\u793a"+(a?","+a:"<null>");var b="",d=!1;for(c in a){var c=a[c];var g=$("#"+c.field+"_err");g.length&&(g.html($.trim(c.error).length?c.error:"<img src='../images/plaint.png'>"),d=!0);b+=c.field+":"+c.error+"<br />"}return d?null:b}function isEmpty(a){if(null==a)return!0;if(0<a.length)return!1;if(0===a.length)return!0;for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0}
function j2s(a){return isEmpty(a)?"":"object"===typeof a?JSON.stringify(a):a}function s2j(a){return a?"string"===typeof a?JSON.parse(a):a:null}function safe_j2s(a){if(isEmpty(a))return"";if("object"===typeof a){var b=[];return JSON.stringify(a,function(a,c){if("object"===typeof c&&null!==c){if(-1!==b.indexOf(c))return;b.push(c)}return c})}return a}var str2json=s2j,json2str=j2s;String.prototype.startsWith=function(a){return this.slice(0,a.length)===a};
String.prototype.endsWith=function(a){return""===a||this.slice(-a.length)===a};String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")};String.prototype.ltrim=function(){return this.replace(/(^\s*)/g,"")};String.prototype.rtrim=function(){return this.replace(/(\s*$)/g,"")};String.prototype.replaceAll=function(a,b,d){a=a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1");return this.replace(new RegExp(a,d?"gi":"g"),b)};
function gen_uuid(a){var b=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return(a?a+"-":"")+b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b()}var app={};
$(function(){function a(a,b){var e=new ol.source.Vector({loader:function(b){myajax("../wfs?Request=GetFeature",{typeNames:a,bbox:b.join(",")},function(a){a&&$.each(a,function(){var a=(new ol.format.WKT).readFeature(this.geometry_wkt);a.setId(this.id);a.setProperties(this.properties);e.addFeature(a)})})},format:new ol.format.GeoJSON,strategy:ol.loadingstrategy.bbox});return new ol.layer.Vector({source:e,style:d,name:"\u6d77\u56fe"+b,id:b,visible:!1,opacity:.15})}var b=function(a,b,e){return new ol.style.Text({text:a.get("chartNumber"),
fill:null,stroke:new ol.style.Stroke({color:"white",width:1}),font:"normal normal 12px Courier New"})},d=function(a){return a.get("selected")?new ol.style.Style({stroke:new ol.style.Stroke({color:"#f55c51",width:2}),fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.1)"}),text:b(a),zIndex:1}):new ol.style.Style({stroke:new ol.style.Stroke({color:"#ccc",width:1}),fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0)"}),text:b(a),zIndex:0})};myajax("../wfs?Request=getTypeNames",null,function(b){b&&
$.each(b,function(){var b=a(this,this);map.addLayer(b)})})});
(function(){function a(a,b){a.get("type");var e=[new ol.style.Style({stroke:new ol.style.Stroke({color:b.color,width:b.width,lineCap:"butt"}),fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.5)"})})];a=a.getGeometry();a instanceof ol.geom.LineString&&a.forEachSegment(function(a,c){a=Math.atan2(c[1]-a[1],c[0]-a[0]);e.push(new ol.style.Style({geometry:new ol.geom.Point(c),image:new ol.style.Icon({src:b.image,anchor:[.65,.5],rotateWithView:!0,rotation:-a})}))});return e}function b(a,b,d){a.set("tooltip",
b);b=$(b.getElement());var e=$("#mea",b);a.getGeometry().on("change",function(a){a=a.target;if(a instanceof ol.geom.Polygon){var b=map.getView().getProjection();b=a.clone().transform(b,"EPSG:4326").getLinearRing(0).getCoordinates();b=Math.abs(c.geodesicArea(b));b=1E4<b?Math.round(b/1E6*100)/100+" km<sup>2</sup>":Math.round(100*b)/100+" m<sup>2</sup>";var d=a.getInteriorPoint().getCoordinates()}else if(a instanceof ol.geom.LineString){d=a.getCoordinates();b=0;for(var f=map.getView().getProjection(),
g=0,k=d.length-1;g<k;++g){var h=ol.proj.transform(d[g],f,"EPSG:4326"),l=ol.proj.transform(d[g+1],f,"EPSG:4326");b+=c.haversineDistance(h,l)}b=100<b?Math.round(b/1E3*100)/100+" km":Math.round(100*b)/100+" m";d=a.getLastCoordinate()}a=this.get("tooltip");e.text(b);a.setPosition(d)},a);d&&(a=$("#title",b),a.length||(b.prepend("<span id='title'></span><br/>"),a=$("#title",b)),a.text(d))}function d(a){var b=new ol.format.WKT;myajax("../wfs?Request=routpathCoverage",{routepath:b.writeFeature(a)},function(b){if(b){var d=
[];$.each(b,function(a,b){if(a=map.getLayer(a)){var c=a.getSource();$.each(b,function(){var a=c.getFeatureById(this.id);a||(a=(new ol.format.WKT).readFeature(this.geometry_wkt),a.setId(this.id),a.setProperties(this.properties));a.setProperties({type:this.type});c.addFeature(a);d.push({chartType:a.get("type"),chartNumber:a.get("chartNumber"),chartTitle:a.get("chartTitle"),chartScale:a.get("chartScale")})})}});var c=map.getView().getProjection(),e=[];$.each(a.getGeometry().getCoordinates(),function(a,
b){e.push(ol.proj.transform(b,c,"EPSG:4326"))});"function"===typeof window.onSelectSeachart&&((b=map.getLayer("_highlight_"))&&b.getSource().clear(),window.onSelectSeachart({id:a.getId(),coords:e},d))}})}var c=new ol.Sphere(6378137);app.MapDraw=function(c){this.tooltipOverlays=[];this.features=new ol.Collection;this.source=new ol.source.Vector({features:this.features,wrapX:!1});this.vectorlayer=new ol.layer.Vector({source:this.source,style:function(b){return a(b,{color:"#ffcc33",width:4,image:"images/arrow-y.png"})}});
var e,f,g;this.mapPointerMoveHandler=function(a){if(!a.dragging){var b="Ctrl+\u5355\u51fb\u5f00\u59cb";if(e){var c=e.getGeometry();c instanceof ol.geom.Polygon?b="\u5355\u51fb\u7ee7\u7eed\uff0c\u53cc\u51fb\u7ed3\u675f\uff0cEsc\u53d6\u6d88":c instanceof ol.geom.LineString&&(b="\u5355\u51fb\u7ee7\u7eed\uff0c\u53cc\u51fb\u7ed3\u675f\uff0cEsc\u53d6\u6d88")}f.innerHTML=b;g.setPosition(a.coordinate);f.classList.remove("hidden")}};this.mapViewportMouseout=function(){f.classList.add("hidden")};this.typeSelect=
null;this.drawInteractionStartFun=function(c){e=c.feature;b(e,h.newMeasureTooltip());e.setId(gen_uuid("rou"));e.setStyle(function(){return a(this,{color:"#ffe8a5",width:2,image:"images/arrow-y.png"})})};this.drawInteractionEndFun=function(a){var b=a.feature;if(a=b.get("tooltip")){var c=a.getElement();c.className="tooltip tooltip-static";
c.innerHTML+='&nbsp;&nbsp;<a class="btn btn-info btn-xs">\u9009\u56fe</a>&nbsp;<a id="closeBtn" class="btn btn-info btn-xs">\u5173\u95ED</a>';
$("a",$(c)).click(function(){
	if($(this).attr('id') == 'closeBtn'){
		toOpenDialog = false;
	}else{
		toOpenDialog = true;
	}
	d(b);
	});
a.setOffset([0,-15]);b.setStyle(null);e=null}};this.drawInteractionCondition=
function(a){return e||a.originalEvent.ctrlKey};var h=this;this.newMeasureTooltip=function(a){var b=document.createElement("div");b.className=a?"tooltip tooltip-static":"tooltip tooltip-measure";b.innerHTML='<span id="mea"></span>';a=new ol.Overlay({element:b,offset:[0,-18],positioning:"bottom-center"});map.addOverlay(a);h.tooltipOverlays.push(a);return a};this.createTooltip=function(){f&&f.parentNode&&f.parentNode.removeChild(f);f=document.createElement("div");f.className="tooltip hidden";g=new ol.Overlay({element:f,
offset:[15,0],positioning:"center-left"});map.addOverlay(g);h.tooltipOverlays.push(g)};var m=function(a){if(27==a.keyCode&&e){a=e.getGeometry();if(a instanceof ol.geom.Polygon){var b=a.getCoordinates()[0].length;var c=3}else a instanceof ol.geom.LineString&&(b=a.getCoordinates().length,c=2);b>c-1&&(h.drawInteraction.removeLastPoint(),b===c&&(b=feature.get("tooltip").getElement(),$(b).hide(),feature.unset("tooltip"),h.drawInteraction.abortDrawing_?h.drawInteraction.abortDrawing_():(b=h.drawInteraction,
b.l=null,b.j&&(b.j=null,b.B=null,b.C=null,b.pa.ha().clear(!0))),h.drawInteraction.dispatchEvent("drawend"),f.innerHTML="\u70b9\u51fb\u5f00\u59cb"))}};this.bindEvent=function(){$("div").delegate(".tooltip-static","mouseenter",function(){$(f).hide()});$("div").delegate(".tooltip-static","mouseleave",function(){$(f).show()});$("#map").bind("keydown",m)};this.unbindEvent=function(){$("div").undelegate(".tooltip-static","mouseenter");$("div").undelegate(".tooltip-static","mouseleave");$("#map").unbind("keydown",
m)};this.map=null;c.map&&this.setMap(c.map)};app.MapDraw.prototype.clear=function(){this.source.clear();for(var a=0;a<this.tooltipOverlays.length;++a){var b=this.tooltipOverlays[a];this.map.removeOverlay(b);b=b.getElement();b.parentNode.removeChild(b)}this.tooltipOverlays=[]};app.MapDraw.prototype.linestring=function(a){this.clear();a?(this.setActive(!1),this.typeSelect=null):"line"!==this.typeSelect&&(this.setActive(!1),this.typeSelect="line",this.setActive(!0))};app.MapDraw.prototype.polygon=function(a){this.clear();
a?(this.setActive(!1),this.typeSelect=null):"area"!==this.typeSelect&&(this.setActive(!1),this.typeSelect="area",this.setActive(!0))};app.MapDraw.prototype.removeFeature=function(a){var b=this.vectorlayer.getSource(),c=this.map;if(null==a)$.each(b.getFeatures(),function(a,b){a=b.get("tooltip");c.removeOverlay(a);a=a.getElement();a.parentNode.removeChild(a)}),b.clear();else if(a=b.getFeatureById(a)){var d=a.get("tooltip");c.removeOverlay(d);d=d.getElement();d.parentNode.removeChild(d);b.removeFeature(a)}};
app.MapDraw.prototype.displayFeature=function(a,c,f){var e=this.source.getFeatureById(a);if(!e){this.active||this.linestring();var g=[];$.each(c,function(a,b){g.push(ol.proj.transform(b,"EPSG:4326","EPSG:3857"))});e=new ol.Feature({geometry:new ol.geom.LineString(g)});c=this.newMeasureTooltip(!0);
	var m=c.getElement();
	m.innerHTML+='&nbsp;&nbsp;<a class="btn btn-info btn-xs csm">\u9009\u56fe</a>&nbsp;<a class="btn btn-info btn-xs" id="closeBtn" onclick="closeLine(this)">\u5173\u95ED</a>';
	$("a",$(m)).click(function(){ 
		if($(this).attr('id') == 'closeBtn'){
			toOpenDialog = false;
		}else{
			toOpenDialog = true;
		}
		validateLine($(this).siblings().eq(0).html());
		d(e)
		}
	);
	b(e,c,f);e.getGeometry().changed();e.setId(a);this.source.addFeature(e)}map.getView().setCenter(ol.extent.getCenter(e.getGeometry().getExtent()))};
app.MapDraw.prototype.isActive=function(){return this.active};app.MapDraw.prototype.setActive=function(a){if(a!==this.active){var b=this.map;a?(b&&(b.on("pointermove",this.mapPointerMoveHandler),b.getViewport().addEventListener("mouseout",this.mapViewportMouseout),this.drawInteraction=new ol.interaction.Draw({source:this.source,type:"area"===this.typeSelect?"Polygon":"LineString",style:new ol.style.Style({fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"}),stroke:new ol.style.Stroke({color:"rgba(0, 0, 0, 0.5)",
lineDash:[10,10],width:2}),image:new ol.style.Circle({radius:5,stroke:new ol.style.Stroke({color:"rgba(0, 0, 0, 0.7)"}),fill:new ol.style.Fill({color:"rgba(255, 255, 255, 0.2)"})})}),condition:this.drawInteractionCondition}),this.drawInteraction.on("drawstart",this.drawInteractionStartFun,this),this.drawInteraction.on("drawend",this.drawInteractionEndFun,this),this.bindEvent(),b.addInteraction(this.drawInteraction),b.addLayer(this.vectorlayer),this.createTooltip()),this.active=!0):(b&&(b.removeLayer(this.vectorlayer),
b.removeInteraction(this.drawInteraction),this.unbindEvent(),b.getViewport().removeEventListener("mouseout",this.mapViewportMouseout),b.un("pointermove",this.mapPointerMoveHandler),this.clear()),this.active=!1)}};app.MapDraw.prototype.setMap=function(a){this.map!==a&&(this.setActive(!1),this.clear(),this.map=a)}})();app.MapLoadProgress=function(a){a=a||{};var b=a.target;"string"===typeof b&&(b=document.getElementById(b));this.element=b;this.error=this.loaded=this.loading=0;a.map&&this.setMap(a.map)};
app.MapLoadProgress.prototype.addLoading=function(){0===this.loading&&this.show();++this.loading;this.update()};app.MapLoadProgress.prototype.addLoaded=function(a){var b=this;setTimeout(function(){++b.loaded;a&&++b.error;b.update()},100)};app.MapLoadProgress.prototype.update=function(){var a=(this.loaded/this.loading*100).toFixed(1)+"%";this.element.style.width=a;if(this.loading===this.loaded){this.loaded=this.loading=0;var b=this;setTimeout(function(){b.hide()},500)}};
app.MapLoadProgress.prototype.show=function(){this.element.style.visibility="visible";this.error=0;this.element.style.backgroundColor=""};app.MapLoadProgress.prototype.hide=function(){this.loading===this.loaded&&(0===this.error?(this.element.style.visibility="hidden",this.element.style.width=0):this.element.style.backgroundColor="rgba(239, 27, 27, 0.6)")};
app.MapLoadProgress.prototype.setMap=function(a){var b=this;a.getLayers().forEach(function(a){a.getSource().on("tileloadstart",function(){b.addLoading()});a.getSource().on("tileloadend",function(){b.addLoaded()});a.getSource().on("tileloaderror",function(a){b.addLoaded(!0);console.error(a)})})};$(function(){new app.MapLoadProgress({target:document.getElementById("progress"),map:map})});app.control=app.control||{};
app.control.OverviewMap=function(a){ol.control.OverviewMap.call(this,a);this.dragging=null;$(document.body).on("mousemove",this.onDrag.bind(this));$(document.body).on("mouseup",this.onEndDrag.bind(this));var b=this;this.getOverviewMap().on("click",function(a){b.getMap().getView().setCenter(a.coordinate)})};ol.inherits(app.control.OverviewMap,ol.control.OverviewMap);ol.control.OverviewMap.prototype.onStartDrag=function(a){var b=$(a.target);this.dragging={el:b,evPos:{top:a.pageY,left:a.pageX},elPos:b.offset()}};
ol.control.OverviewMap.prototype.onDrag=function(a){if(this.dragging){var b=this.dragging.el.offset();b={top:b.top+(a.pageY-this.dragging.evPos.top),left:b.left+(a.pageX-this.dragging.evPos.left)};this.dragging.evPos={top:a.pageY,left:a.pageX};this.dragging.el.offset(b)}};
ol.control.OverviewMap.prototype.onEndDrag=function(a){if(this.dragging){a=this.getMap();var b=this.dragging.el.position(),d=[this.dragging.el.width(),this.dragging.el.height()],c=a.getSize(),g=a.getView().getResolution(),e=b.left*Math.abs(c[0]/d[0]);d=b.top*Math.abs(c[1]/d[1]);b=[c[0]+e,0+d];c=a.getCoordinateFromPixel([0+e,c[1]+d]);e=a.getCoordinateFromPixel(b);c=[c[0],c[1],e[0],e[1]];a.getView().fit(c,a.getSize());a.getView().setResolution(g);this.dragging.el.offset(this.dragging.elPos);this.dragging=
null}};app.control=app.control||{};app.View=function(a){!a.extent||a.center&&ol.extent.containsCoordinate(a.extent,a.center)||(a.center=ol.extent.getCenter(a.extent));ol.View.call(this,a)};ol.inherits(app.View,ol.View);
(function(){function a(a){if(1===a.buttonstate){$(a.button).css("background-color","burlywood");var b=q[a.group];b&&$.each(b,function(){this!==a&&(this.buttonstate=0,$(this.button).css("background-color",""))})}else 0===a.buttonstate&&$(a.button).css("background-color","")}function b(b,c,d,e){var n=function(e){e=e||{};var n=document.createElement("button");$(n).attr("title",b);n.innerHTML=c;var f=this;f.button=n;e.group&&(f.buttonstate=0,f.group=e.group);q[e.group]||(q[e.group]=[]);q[e.group].push(f);
var l=function(){f.group&&(f.buttonstate=0===f.buttonstate?1:0,a(f));d.call(f)};n.addEventListener("click",l,!1);n.addEventListener("touchstart",l,!1);l=$(".maptoolbar")[0];l.appendChild(n);ol.control.Control.call(f,{element:l,target:e.target})};ol.inherits(n,ol.control.Control);e=new n(e);f.addControl(e);return e}function d(a,b,c){var d=function(a){var b={height:400,width:600,resizable:!0,scrollbars:"yes",title:null,dismove:!1,notitle:!1,closeOnEscape:!1,modal:!1};if(a)if("string"===typeof a){var c=
function(a){a=a.toUpperCase();return"Y"===a||"YES"===a||"T"===a||"TRUE"===a||"1"===a};$.each(a.split(/[,;]/),function(a,d){a=d.indexOf("=");if(-1!==a){var e=d.substring(0,a);d=d.substring(a+1);switch(e){case "dialogWidth":case "width":b.width=parseInt(d);break;case "dialogHeight":case "height":b.height=parseInt(d);break;case "scrollbars":b.scrollbars=d;break;case "resizable":b.resizable=c(d);break;case "title":b.title=d;break;case "dismove":b.dismove=c(d);break;case "notitle":b.notitle=c(d);break;
case "closeOnEscape":b.closeOnEscape=c(d);break;case "id":b.id=d;break;case "modal":b.modal=c(d)}}})}else"object"===typeof a&&(b=$.extend({},b,a));return b}(b),e;if(!d.modal&&d.id&&(e=t[d.id])){e.html($(a));return}e||(e=$('<div style="display:none;margin:16px 4px 0 4px;padding:0px;overflow:hidden"></div>'),!d.modal&&d.id&&(t[d.id]=e));e.html($(a));$("body").append(e);var f,l={"\u5173\u95ed":function(){f.dialog("close")}};c&&$.each(c,function(a,b){"function"===typeof b&&(l[a]=function(){b()&&f.dialog("close")})});
e.dialog({autoOpen:!0,resizable:d.resizable,height:"auto",width:d.width+4,modal:d.modal,closeOnEscape:d.closeOnEscape,closeText:null,open:function(){d.notitle?$(".ui-dialog-titlebar",$(this).parent()).hide():($(".ui-dialog-titlebar",$(this).parent()).show(),d.title&&$(this).dialog("option","title",d.title));$(this).dialog("option","position","center");f=$(this)},close:function(){$(this).dialog("destroy").remove();!d.modal&&d.id&&delete t[d.id]},buttons:l});e.dialog({draggable:!d.dismove})}var c=ol.proj.get("EPSG:3857"),
g=c.getExtent(),e=function(a){a=ol.extent.getWidth(g)/a;for(var b=[],d=[],c=2;24>c;++c)b[c]=a/Math.pow(2,c),d[c]="kk:"+c;return[b,d]}(256);c=new ol.source.WMTS({url:"../wmts",layer:"gmap",matrixSet:"EPSG:3857",format:"image/png",projection:c,tileGrid:new ol.tilegrid.WMTS({origin:ol.extent.getTopLeft(g),resolutions:e[0],matrixIds:e[1]}),style:"default",requestEncoding:"KVP"});e=new ol.layer.Tile({opacity:.7,source:c,name:"\u536b\u661f\u5730\u56fe"});var f=new ol.Map({layers:[e],target:"map",controls:ol.control.defaults({attributionOptions:{collapsible:!1}}).extend([new app.control.OverviewMap({className:"ol-overviewmap ol-custom-overviewmap",
layers:[new ol.layer.Tile({source:c})],collapseLabel:"\u00bb",label:"\u00ab",collapsed:!1,interactive:!0,view:new ol.View})]),view:new app.View({zoom:6,minZoom:4,maxZoom:10,center:ol.proj.transform([120.059,17.246],"EPSG:4326","EPSG:3857"),extent:ol.proj.transformExtent([-360,85,360,-85],"EPSG:4326","EPSG:3857")}),logo:null});window.map=f;f.addControl(new ol.control.ScaleLine);f.addControl(new ol.control.ZoomSlider);var k=new ol.control.MousePosition({coordinateFormat:ol.coordinate.createStringXY(6),
projection:"EPSG:4326",undefinedHTML:"&nbsp;"});f.addControl(k);$(".ol-mouse-position").click(function(a){a.ctrlKey&&(1===k.proj?(k.proj=0,k.setProjection(ol.proj.get("EPSG:3857")),k.setCoordinateFormat(ol.coordinate.createStringXY(2))):(k.proj=1,k.setProjection(ol.proj.get("EPSG:4326")),k.setCoordinateFormat(ol.coordinate.createStringXY(6))))});var h=new ol.Overlay({element:document.getElementById("popupInfo")});f.addOverlay(h);f.on("pointermove",function(a){p.isActive()||(f.getTargetElement().style.cursor=
f.hasFeatureAtPixel(a.pixel,{layerFilter:function(a){a=a.get("name");return!a||!a.startsWith("\u6d77\u56fe")}})?"pointer":"")});var m=$(".ol-zoomslider-thumb"),r=f.getView();m.attr("title","zoom="+r.getZoom());r.on("change:resolution",function(a){m.attr("title","zoom="+r.getZoom())});var p=new app.MapDraw({map:f});f.addInteraction(new ol.interaction.Modify({features:p.features}));void 0===ol.Map.prototype.getLayer&&(ol.Map.prototype.getLayer=function(a){var b;this.getLayers().forEach(function(c){a==
c.get("id")&&(b=c)});return b});var q={};
window.addToolbarButton=b;
b("\u56fe\u5c42\u7ba1\u7406","<img src='images/layers.png'>",function(i){
	function a(a,b){
		var d=a.get("name");
	 
		d&&(
				b=$('<li><div style="font:normal 15px heit;color:green;">'
				+d+'</div><div style="float:left;padding-left:40px;height:40px;display:inline-flex;"><label style="margin:auto;" for="'
				+b+'"><input id="'
				+b+'" class="visible" type="checkbox"/>&nbsp;\u663e\u793a</label></div><div style="display:inline-flex;height:40px;padding-left:20px;"><label style="margin:auto;padding-right:10px;">\u900f\u660e</label><input class="opacity" style="width:120px;" type="range" min="0" max="1" step="0.01"/></div></li>'),
				
				d=$("input.visible",b),
				d.on("change",function(){a.setVisible(this.checked)}),
				d.prop("checked",a.getVisible()),
				d=$("input.opacity",b),
				d.on("input change",function(){
					a.setOpacity(parseFloat(this.value))}
				),
				d.val(String(a.getOpacity())),c.append(b))
}
	var b=$("<div></div"),
	c=$("<ul></ul>").appendTo(b);
	f.getLayers().forEach(function(b,d){
		a(b,"l"+d);
		b instanceof ol.layer.Group&&b.getLayers().forEach(function(b,c){
			a(b,"l"+d+"_"+c)
			}
		)
		}
	);
	d(b,{title:"\u56fe\u5c42\u7ba1\u7406",resizable:!1,width:408,id:"layermgr"})});
	var u=b("\u5236\u5b9a\u822a\u7ebf","R",function(){
		$(h.getElement()).popover("destroy");
		p.linestring(0===this.buttonstate)
		}
	,
	{group:"M"}),
	t={};
	window.showDialog=d;
	 
	
	window.highlightChart=function(a,b,d){
		var c=f.getLayer(a);
		c&&(a=c.getSource().getFeatureById(a+"_"+b))&&(b=f.getLayer("_highlight_"),
				b||(b=new ol.layer.Vector({
					id:"_highlight_",
					source:new ol.source.Vector,
					style:function(a){
						return new ol.style.Style({
							stroke:new ol.style.Stroke({
								color:"#f55c51",width:2
								}
							),
							fill:new ol.style.Fill({
								color:"rgba(255, 255, 255, 0.1)"
									}
							),
							text:new ol.style.Text({
								text:a.get("chartNumber"),
								fill:null,
								stroke:new ol.style.Stroke({
									color:"red",width:1
									}
								),
								font:"normal normal 14px Courier New"
									}
							),
							zIndex:1
							}
						)
						}
				}
				),
				f.addLayer(b)),
				d?(b.getSource().addFeature(a),
						f.getView().setCenter(ol.extent.getCenter(a.getGeometry().getExtent()))):b.getSource().removeFeature(a)
						)
						};
window.displayRoute=function(b,d,c){  
	p.displayFeature(b,d,c);
	u.buttonstate=1;
	a(u)
};window.removeRoute=function(a){p.removeFeature(a)};window.displayShip=function(a,b,d){var c=f.getLayer("_ship_");
if(!c){c=new ol.layer.Vector({id:"_ship_",source:new ol.source.Vector,style:function(a){return[new ol.style.Style({image:new ol.style.Icon({anchor:[.5,52],anchorXUnits:"fraction",anchorYUnits:"pixels",src:"images/place-ship.png"}),text:new ol.style.Text({text:a.get("title"),fill:null,stroke:new ol.style.Stroke({color:"white",width:1}),offsetY:18,font:"normal normal 14px SimSun"})})]}});new ol.interaction.Select;var e=new ol.interaction.Select({condition:ol.events.condition.click,layers:[c],style:c.getStyle()});
e.on("select",function(a){if("function"===typeof window.onSelectShip&&(a=this.getFeatures(),a.getLength())){var b=a.item(0);a.clear();window.onSelectShip(b.getId())}},e);f.addLayer(c);f.addInteraction(e)}e=c.getSource().getFeatureById(a);var g=[];$.each(b,function(a,b){g.push(ol.proj.transform(b,"EPSG:4326","EPSG:3857"))});e||(e=new ol.Feature,e.setId(a));e.set("title",d);e.setGeometry(new ol.geom.Point(g));c.getSource().addFeature(e);f.getView().setCenter(ol.extent.getCenter(e.getGeometry().getExtent()))};
window.removeShip=function(a){var b=f.getLayer("_ship_");b&&(null==a?b.getSource().clear():(a=b.getSource().getFeatureById(a))&&b.getSource().removeFeature(a))}})();
