Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),n=this,a=function(){},o=function(){return n.apply(this instanceof a?this:t,e.concat(Array.prototype.slice.call(arguments)))};return a.prototype=this.prototype,o.prototype=new a,o}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var n,a;if(null==this)throw new TypeError(" this is null or not defined");var o=Object(this),r=o.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(n=e),a=0;r>a;){var i;a in o&&(i=o[a],t.call(n,i,a,o)),a++}}),Array.prototype.map||(Array.prototype.map=function(t,e){var n,a,o;if(null==this)throw new TypeError(" this is null or not defined");var r=Object(this),i=r.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(n=e),a=new Array(i),o=0;i>o;){var c,u;o in r&&(c=r[o],u=t.call(n,c,o,r),a[o]=u),o++}return a});var ztag;!function(t){function e(t){t=encodeURIComponent(t);for(var e="",r=0;r<t.length;r++)e+=(o+t.charCodeAt(r).toString(4)).slice(-a);e+="000".slice(e.length%3||3);for(var i="",r=0;r<e.length;r+=3)i+=n.charAt(parseInt(e.slice(r,r+3),4));return i}var n="Rlv7p5BjhW0CzSHr6g4DInAEFLO8mKXUaZGq3QeT-u_NkdY2xiftwobVMs91Jcy=P",a=4,o="000";t.encode=e}(ztag||(ztag={}));var ztag;!function(t){!function(t){t[t.ImpressionTagVersion=0]="ImpressionTagVersion",t[t.ImpressionID=1]="ImpressionID",t[t.ImpressionCustomerID=2]="ImpressionCustomerID",t[t.ImpressionCampaignID=3]="ImpressionCampaignID",t[t.ImpressionCreativeID=4]="ImpressionCreativeID",t[t.NavigatorAppName=5]="NavigatorAppName",t[t.NavigatorAppCodeName=6]="NavigatorAppCodeName",t[t.NavigatorAppVersion=7]="NavigatorAppVersion",t[t.NavigatorCookieEnabled=8]="NavigatorCookieEnabled",t[t.NavigatorDoNotTrack=9]="NavigatorDoNotTrack",t[t.NavigatorJavaEnabled=10]="NavigatorJavaEnabled",t[t.NavigatorLanguage=11]="NavigatorLanguage",t[t.NavigatorMimeTypesLength=12]="NavigatorMimeTypesLength",t[t.NavigatorPlatform=13]="NavigatorPlatform",t[t.NavigatorPluginsLength=14]="NavigatorPluginsLength",t[t.NavigatorProduct=15]="NavigatorProduct",t[t.NavigatorProductSub=16]="NavigatorProductSub",t[t.NavigatorVendor=17]="NavigatorVendor",t[t.NavigatorVendorSub=18]="NavigatorVendorSub",t[t.WindowName=19]="WindowName",t[t.WindowInnerWidth=20]="WindowInnerWidth",t[t.WindowInnerHeight=21]="WindowInnerHeight",t[t.WindowOuterWidth=22]="WindowOuterWidth",t[t.WindowOuterHeight=23]="WindowOuterHeight",t[t.WindowScreenX=24]="WindowScreenX",t[t.WindowScreenY=25]="WindowScreenY",t[t.WindowTopIsSelf=26]="WindowTopIsSelf",t[t.WindowParentLocationHostName=27]="WindowParentLocationHostName",t[t.WindowParentLocationHash=28]="WindowParentLocationHash",t[t.WindowParentLocationPathName=29]="WindowParentLocationPathName",t[t.WindowParentLocationPort=30]="WindowParentLocationPort",t[t.WindowParentLocationProtocol=31]="WindowParentLocationProtocol",t[t.WindowParentLocationSearch=32]="WindowParentLocationSearch",t[t.ScreenWidth=33]="ScreenWidth",t[t.ScreenHeight=34]="ScreenHeight",t[t.ScreenColorDepth=35]="ScreenColorDepth",t[t.ScreenAvailHeight=36]="ScreenAvailHeight",t[t.ScreenAvailWidth=37]="ScreenAvailWidth",t[t.LocationHostName=38]="LocationHostName",t[t.LocationHash=39]="LocationHash",t[t.LocationPathName=40]="LocationPathName",t[t.LocationPort=41]="LocationPort",t[t.LocationProtocol=42]="LocationProtocol",t[t.LocationSearch=43]="LocationSearch",t[t.DocumentHidden=44]="DocumentHidden",t[t.DocumentReferrer=45]="DocumentReferrer",t[t.EventMouseMove=46]="EventMouseMove",t[t.EventMouseUp=47]="EventMouseUp",t[t.EventMouseDown=48]="EventMouseDown",t[t.EventClick=49]="EventClick",t[t.EventPaste=50]="EventPaste",t[t.EventKeyUp=51]="EventKeyUp",t[t.EventKeyDown=52]="EventKeyDown",t[t.EventKeyPress=53]="EventKeyPress",t[t.EventTouchMove=54]="EventTouchMove",t[t.EventTouchStart=55]="EventTouchStart",t[t.EventTouchEnd=56]="EventTouchEnd",t[t.EventTouchCancel=57]="EventTouchCancel",t[t.EventDeviceLight=58]="EventDeviceLight",t[t.EventDeviceMotion=59]="EventDeviceMotion",t[t.EventDeviceOrientation=60]="EventDeviceOrientation",t[t.MiscHistoryLength=61]="MiscHistoryLength",t[t.MiscBrowserFingerPrint=62]="MiscBrowserFingerPrint",t[t.MiscTimeZoneOffset=63]="MiscTimeZoneOffset",t[t.MiscFrameRate=64]="MiscFrameRate",t[t.DocumentLocation=65]="DocumentLocation",t[t.ImpressionSequence=66]="ImpressionSequence"}(t.Key||(t.Key={}));t.Key}(ztag||(ztag={}));var ztag;!function(t){var e=function(){function t(t){this.name="ZTagError",this.message=t}return t.prototype.toString=function(){return this.message},t}();t.ZTagError=e}(ztag||(ztag={}));var ztag;!function(t){function e(e){switch(e){case"ImageBaseURL":return r.b;case"ImpressionID":return r.i;case"CustomerID":return r.u;case"CampaignID":return r.a;case"CreativeID":return r.r}throw new t.ZTagError("invalid loader key")}var n={a:"",b:"",i:"",r:"",u:""},a="zveloZTagObject",o=function(){if(!(a in window))return"";var t=window[a];return"string"!=typeof t?"":t}(),r=function(){if(!(o in window))return n;var t=window[o];return"undefined"==typeof t?n:t}();t.LoaderValue=e}(ztag||(ztag={}));var __extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},ztag;!function(t){var e="/p.gif",n=500,a=function(){var t=document.createElement("img");return t.style.position="absolute",t.style.top="-1px",t.setAttribute("data-ztag","true"),t.onload=t.onerror=function(){document.body.removeChild(t),t=void 0},t},o=function(){function e(){this._data={}}return e.prototype.set=function(e,n){if("undefined"==typeof e)throw new t.ZTagError("undefined key");if("undefined"==typeof n||"undefined"===n)throw new t.ZTagError("undefined value for key: "+t.Key[e]);this._data[e]=n},e.prototype.hasKey=function(e){if("undefined"==typeof e)throw new t.ZTagError("undefined key");return"undefined"==typeof this._data[e]?!1:!0},e.prototype.get=function(e){if("undefined"==typeof e)throw new t.ZTagError("undefined key");return this._data[e]},e.prototype.del=function(e){if("undefined"==typeof e)throw new t.ZTagError("undefined key");return delete this._data[e]},e.prototype.keys=function(){var t=[];for(var e in this._data)this._data.hasOwnProperty(e)&&t.push(parseInt(e,10));return t.sort()},e.prototype.values=function(e){for(var n=[],a=0,o=0,r=t.Key[o];"undefined"!=typeof r;r=t.Key[++o]){var i=this._data[o],c="undefined"!=typeof i;c&&(a=o),e&&c&&(i=e(i)),n.push(i)}return 0===a?[]:n=n.slice(0,a+1)},e.prototype.length=function(){return this.keys().length},e}(),r=function(o){function r(){o.apply(this,arguments),this._sequence=0}return __extends(r,o),r.prototype.encode=function(){return this.set(t.Key.ImpressionSequence,""+this._sequence),this.values(t.encode).join(";")},r.prototype.send=function(){return"undefined"==typeof this._gif&&(this._gif=a()),0===this._sequence?this._send():("undefined"!=typeof this._timeoutID&&clearTimeout(this._timeoutID),this._timeoutID=setTimeout(this._send.bind(this),n),this._gif)},r.prototype._send=function(){"undefined"!=typeof this._timeoutID&&(clearTimeout(this._timeoutID),this._timeoutID=void 0);var n=this._gif;this._gif=void 0;var a=this.encode();return n.src=t.LoaderValue("ImageBaseURL")+a+e,document.body.appendChild(n),this._sequence++,n},r}(o);t.Impression=r}(ztag||(ztag={}));var ztag;!function(t){function e(t){return new n(t)}var n=function(){function t(t){this.fn=t}return t.prototype.exec=function(t){return this.fn(t)},t}();t.ClientFunc=e}(ztag||(ztag={}));var ztag;!function(t){function e(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];try{return t.call(this,e)}catch(a){}return void 0}function n(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var a=t,o=0;o<e.length;o++){var r=e[o];try{a=r(a)}catch(i){}}return a}t.tryDecorate=e,t.decorate=n}(ztag||(ztag={}));var ztag;!function(t){function e(t,e){void 0===e&&(e=0);for(var n=3&t.length,a=t.length-n,o=e,r=0,i=3432918353,c=461845907,u=0,s=0;a>u;)s=255&t.charCodeAt(u)|(255&t.charCodeAt(++u))<<8|(255&t.charCodeAt(++u))<<16|(255&t.charCodeAt(++u))<<24,++u,s=(65535&s)*i+(((s>>>16)*i&65535)<<16)&4294967295,s=s<<15|s>>>17,s=(65535&s)*c+(((s>>>16)*c&65535)<<16)&4294967295,o^=s,o=o<<13|o>>>19,r=5*(65535&o)+((5*(o>>>16)&65535)<<16)&4294967295,o=(65535&r)+27492+(((r>>>16)+58964&65535)<<16);switch(s=0,n){case 3:s^=(255&t.charCodeAt(u+2))<<16;case 2:s^=(255&t.charCodeAt(u+1))<<8;case 1:s^=255&t.charCodeAt(u),s=(65535&s)*i+(((s>>>16)*i&65535)<<16)&4294967295,s=s<<15|s>>>17,s=(65535&s)*c+(((s>>>16)*c&65535)<<16)&4294967295,o^=s}return o^=t.length,o^=o>>>16,o=2246822507*(65535&o)+((2246822507*(o>>>16)&65535)<<16)&4294967295,o^=o>>>13,o=3266489909*(65535&o)+((3266489909*(o>>>16)&65535)<<16)&4294967295,o^=o>>>16,o>>>0}t.murmur=e}(ztag||(ztag={}));var ztag;!function(t){function e(e){var n=d().join("###");return e?e(n,31):t.murmur(n,31)}var n=function(){try{return!!window.localStorage}catch(t){return!0}},a=function(){try{return!!window.sessionStorage}catch(t){return!0}},o=function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},r=function(){return"Microsoft Internet Explorer"===navigator.appName?!0:"Netscape"===navigator.appName&&/Trident/.test(navigator.userAgent)?!0:!1},i=function(){return Array.prototype.slice.call(navigator.plugins).map(function(t){return[t.name,t.description,Array.prototype.slice.call(t).map(function(t){return[t.type,t.suffixes].join("~")}).join(",")].join("::")}).join(";")},c=function(){if(!("ActiveXObject"in window))return"";var t=["ShockwaveFlash.ShockwaveFlash","AcroPDF.PDF","PDF.PdfCtrl","QuickTime.QuickTime","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","RealPlayer","SWCtl.SWCtl","WMPlayer.OCX","AgControl.AgControl","Skype.Detection"];return t.map(function(t){try{new ActiveXObject(t);return t}catch(e){return null}}).join(";")},u=function(){return r()?c():i()},s=function(){return[screen.height,screen.width]},g=function(){if(!o())return void 0;var t=document.createElement("canvas"),e=t.getContext("2d"),n="http://valve.github.io";return e.textBaseline="top",e.font='14px "Arial"',e.textBaseline="alphabetic",e.fillStyle="#f60",e.fillRect(125,1,62,20),e.fillStyle="#069",e.fillText(n,2,15),e.fillStyle="rgba(102, 204, 0, 0.7)",e.fillText(n,4,17),t.toDataURL()},d=function(){var t=[];return t.push(navigator.userAgent),t.push(navigator.language),t.push(""+screen.colorDepth),t.push(s().join("x")),t.push(""+(new Date).getTimezoneOffset()),t.push(""+a()),t.push(""+n()),t.push(""+!!window.indexedDB),t.push(navigator.cpuClass),t.push(navigator.platform),t.push(navigator.doNotTrack),t.push(u()),o()&&t.push(g()),t};t.fingerprint=e}(ztag||(ztag={}));var ztag;!function(t){t.version="0.5.0"}(ztag||(ztag={}));var ztagData;!function(t){function e(){return function(t){return ztag.ClientFunc(function(e){return e.set(ztag.Key.ImpressionTagVersion,ztag.version),e.set(ztag.Key.ImpressionID,ztag.LoaderValue("ImpressionID")),e.set(ztag.Key.ImpressionCustomerID,ztag.LoaderValue("CustomerID")),e.set(ztag.Key.ImpressionCampaignID,ztag.LoaderValue("CampaignID")),e.set(ztag.Key.ImpressionCreativeID,ztag.LoaderValue("CreativeID")),t.exec(e)})}}t.getImpressionData=e}(ztagData||(ztagData={}));var ztagData;!function(t){function e(){return function(t){return ztag.ClientFunc(function(e){return e.set(ztag.Key.NavigatorAppName,navigator.appName),e.set(ztag.Key.NavigatorAppCodeName,navigator.appCodeName),e.set(ztag.Key.NavigatorAppVersion,navigator.appVersion),e.set(ztag.Key.NavigatorCookieEnabled,navigator.cookieEnabled?"1":"0"),"doNotTrack"in navigator&&e.set(ztag.Key.NavigatorDoNotTrack,""+navigator.doNotTrack),"language"in navigator&&e.set(ztag.Key.NavigatorLanguage,navigator.language),e.set(ztag.Key.NavigatorPlatform,navigator.platform),"product"in navigator&&e.set(ztag.Key.NavigatorProduct,navigator.product),"productSub"in navigator&&e.set(ztag.Key.NavigatorProductSub,navigator.productSub),e.set(ztag.Key.NavigatorMimeTypesLength,""+navigator.mimeTypes.length),"vendor"in navigator&&e.set(ztag.Key.NavigatorVendor,navigator.vendor),"vendorSub"in navigator&&e.set(ztag.Key.NavigatorVendorSub,navigator.vendorSub),"javaEnabled"in navigator&&e.set(ztag.Key.NavigatorJavaEnabled,navigator.javaEnabled()?"1":"0"),e.set(ztag.Key.NavigatorPluginsLength,""+navigator.plugins.length),t.exec(e)})}}t.getNavigatorData=e}(ztagData||(ztagData={}));var ztagData;!function(t){function e(){return function(t){return ztag.ClientFunc(function(e){e.set(ztag.Key.WindowName,window.name),"innerWidth"in window?e.set(ztag.Key.WindowInnerWidth,""+window.innerWidth):document.documentElement&&"clientWidth"in document.documentElement&&e.set(ztag.Key.WindowInnerWidth,""+document.documentElement.clientWidth),"innerHeight"in window?e.set(ztag.Key.WindowInnerHeight,""+window.innerHeight):document.documentElement&&"clientHeight"in document.documentElement&&e.set(ztag.Key.WindowInnerHeight,""+document.documentElement.clientHeight),"outerWidth"in window&&e.set(ztag.Key.WindowOuterWidth,""+window.outerWidth),"outerHeight"in window&&e.set(ztag.Key.WindowOuterHeight,""+window.outerHeight),"screenX"in window?e.set(ztag.Key.WindowScreenX,""+window.screenX):"screenLeft"in window&&e.set(ztag.Key.WindowScreenX,""+window.screenLeft),"screenY"in window?e.set(ztag.Key.WindowScreenY,""+window.screenY):"screenTop"in window&&e.set(ztag.Key.WindowScreenY,""+window.screenTop),e.set(ztag.Key.WindowTopIsSelf,window.top===window.self?"1":"0");try{e.set(ztag.Key.WindowParentLocationHostName,window.parent.location.hostname)}catch(n){}try{e.set(ztag.Key.WindowParentLocationHash,window.parent.location.hash)}catch(n){}try{e.set(ztag.Key.WindowParentLocationPathName,window.parent.location.pathname)}catch(n){}try{e.set(ztag.Key.WindowParentLocationPort,window.parent.location.port)}catch(n){}try{e.set(ztag.Key.WindowParentLocationProtocol,window.parent.location.protocol)}catch(n){}try{e.set(ztag.Key.WindowParentLocationSearch,window.parent.location.search)}catch(n){}return t.exec(e)})}}t.getWindowData=e}(ztagData||(ztagData={}));var ztagData;!function(t){function e(){return function(t){return ztag.ClientFunc(function(e){return e.set(ztag.Key.ScreenWidth,""+screen.width),e.set(ztag.Key.ScreenHeight,""+screen.height),e.set(ztag.Key.ScreenColorDepth,""+screen.colorDepth),e.set(ztag.Key.ScreenAvailHeight,""+screen.availHeight),e.set(ztag.Key.ScreenAvailWidth,""+screen.availWidth),t.exec(e)})}}t.getScreenData=e}(ztagData||(ztagData={}));var ztagData;!function(t){function e(){return function(t){return ztag.ClientFunc(function(e){return e.set(ztag.Key.LocationHostName,location.hostname),e.set(ztag.Key.LocationHash,location.hash),e.set(ztag.Key.LocationPathName,location.pathname),e.set(ztag.Key.LocationPort,location.port),e.set(ztag.Key.LocationProtocol,location.protocol),e.set(ztag.Key.LocationSearch,location.search),t.exec(e)})}}t.getLocationData=e}(ztagData||(ztagData={}));var ztagData;!function(t){function e(){return function(t){return ztag.ClientFunc(function(e){return"0"!==e.get(ztag.Key.DocumentHidden)&&e.set(ztag.Key.DocumentHidden,document.hidden?"1":"0"),window.location!==window.parent.location?(e.set(ztag.Key.DocumentLocation,document.referrer),e.set(ztag.Key.DocumentReferrer,"")):(e.set(ztag.Key.DocumentLocation,document.location.href),e.set(ztag.Key.DocumentReferrer,document.referrer)),t.exec(e)})}}t.getDocumentData=e}(ztagData||(ztagData={}));var ztagData;!function(t){function e(){return function(t){return ztag.ClientFunc(function(e){return e.set(ztag.Key.MiscHistoryLength,""+history.length),e.set(ztag.Key.MiscBrowserFingerPrint,""+ztag.fingerprint()),e.set(ztag.Key.MiscTimeZoneOffset,""+(new Date).getTimezoneOffset()),a(e,t),t.exec(e)})}}var n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,a=function(t,e){if(n&&!t.hasKey(ztag.Key.MiscFrameRate)){var a=1,o=new Date;o.setMilliseconds(o.getMilliseconds()+500);var r=function(){n(function(){return new Date>=o?(t.set(ztag.Key.MiscFrameRate,""+2*a),e.exec(t)):(a++,void r())})};r()}};t.getMiscData=e}(ztagData||(ztagData={}));var ztagData;!function(t){function e(){return function(t){return ztag.ClientFunc(function(e){return a.forEach(function(n){return n(t,e)}),t.exec(e)})}}var n=function(t,e,n){return function(a,o){var r=function(i){switch("removeEventListener"in t?t.removeEventListener(e,r):"detachEvent"in t&&t.detachEvent("on"+e,r),e){case"devicemotion":var c=i;if(null===c.acceleration.x&&null===c.acceleration.y&&null===c.acceleration.z&&null===c.accelerationIncludingGravity.x&&null===c.accelerationIncludingGravity.y&&null===c.accelerationIncludingGravity.z)return;break;case"deviceorientation":var u=i;if(null===u.absolute&&null===u.alpha&&null===u.beta&&null===u.gamma)return}o.set(n,"1"),a.exec(o)};"addEventListener"in t?t.addEventListener(e,r):"attachEvent"in t&&t.attachEvent("on"+e,r)}},a=[n(document,"mousemove",ztag.Key.EventMouseMove),n(document,"mouseup",ztag.Key.EventMouseUp),n(document,"mousedown",ztag.Key.EventMouseDown),n(document,"click",ztag.Key.EventClick),n(document,"paste",ztag.Key.EventPaste),n(document,"keyup",ztag.Key.EventKeyUp),n(document,"keydown",ztag.Key.EventKeyDown),n(document,"keypress",ztag.Key.EventKeyPress),n(document,"touchmove",ztag.Key.EventTouchMove),n(document,"touchstart",ztag.Key.EventTouchStart),n(document,"touchend",ztag.Key.EventTouchEnd),n(document,"touchcancel",ztag.Key.EventTouchCancel),n(window,"devicelight",ztag.Key.EventDeviceLight),n(window,"devicemotion",ztag.Key.EventDeviceMotion),n(window,"deviceorientation",ztag.Key.EventDeviceOrientation)];t.getEventData=e}(ztagData||(ztagData={}));var ztag;!function(t){function e(e){return void 0===e&&(e=new t.Impression),t.decorate(new n,t.tryDecorate(ztagData.getImpressionData),t.tryDecorate(ztagData.getNavigatorData),t.tryDecorate(ztagData.getWindowData),t.tryDecorate(ztagData.getScreenData),t.tryDecorate(ztagData.getLocationData),t.tryDecorate(ztagData.getDocumentData),t.tryDecorate(ztagData.getMiscData),t.tryDecorate(ztagData.getEventData)).exec(e),e}var n=function(){function t(){}return t.prototype.exec=function(t){return t.send()},t}();t.init=e}(ztag||(ztag={}));try{ztag.init()}catch(err){}