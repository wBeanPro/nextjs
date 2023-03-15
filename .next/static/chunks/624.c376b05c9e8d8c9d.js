(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[624],{22624:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return _}});var r=n(98404),s=n.n(r),i=n(17187),o=n(56186);class c extends o.IJsonRpcProvider{constructor(t){super(t),this.events=new i.EventEmitter,this.hasRegisteredEventListeners=!1,this.connection=this.setConnection(t),this.connection.connected&&this.registerEventListeners()}async connect(t=this.connection){await this.open(t)}async disconnect(){await this.close()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async request(t,e){return this.requestStrict((0,o.formatJsonRpcRequest)(t.method,t.params||[]),e)}async requestStrict(t,e){return new Promise((async(n,r)=>{if(!this.connection.connected)try{await this.open()}catch(s){r(s)}this.events.on(`${t.id}`,(t=>{(0,o.isJsonRpcError)(t)?r(t.error):n(t.result)}));try{await this.connection.send(t,e)}catch(s){r(s)}}))}setConnection(t=this.connection){return t}onPayload(t){this.events.emit("payload",t),(0,o.isJsonRpcResponse)(t)?this.events.emit(`${t.id}`,t):this.events.emit("message",{type:t.method,data:t.params})}async open(t=this.connection){this.connection===t&&this.connection.connected||(this.connection.connected&&this.close(),"string"===typeof t&&(await this.connection.open(t),t=this.connection),this.connection=this.setConnection(t),await this.connection.open(),this.registerEventListeners(),this.events.emit("connect"))}async close(){await this.connection.close()}registerEventListeners(){this.hasRegisteredEventListeners||(this.connection.on("payload",(t=>this.onPayload(t))),this.connection.on("close",(()=>this.events.emit("disconnect"))),this.connection.on("error",(t=>this.events.emit("error",t))),this.hasRegisteredEventListeners=!0)}}var a=n(80699),h=n.n(a),u=n(85094);const d={headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST"};class f{constructor(t){if(this.url=t,this.events=new i.EventEmitter,this.isAvailable=!1,this.registering=!1,!(0,o.isHttpUrl)(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);this.url=t}get connected(){return this.isAvailable}get connecting(){return this.registering}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t=this.url){await this.register(t)}async close(){if(!this.isAvailable)throw new Error("Connection already closed");this.onClose()}async send(t,e){this.isAvailable||await this.register();try{const e=(0,u.u)(t),n=await h()(this.url,Object.assign(Object.assign({},d),{body:e})),r=await n.json();this.onPayload({data:r})}catch(n){this.onError(t.id,n)}}async register(t=this.url){if(!(0,o.isHttpUrl)(t))throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);if(this.registering)return new Promise(((t,e)=>{this.events.once("register_error",(t=>{e(t)})),this.events.once("open",(()=>{if("undefined"===typeof this.isAvailable)return e(new Error("HTTP connection is missing or invalid"));t()}))}));this.url=t,this.registering=!0;try{const e=(0,u.u)({id:1,jsonrpc:"2.0",method:"test",params:[]});await h()(t,Object.assign(Object.assign({},d),{body:e})),this.onOpen()}catch(e){const t=this.parseError(e);throw this.events.emit("register_error",t),this.onClose(),t}}onOpen(){this.isAvailable=!0,this.registering=!1,this.events.emit("open")}onClose(){this.isAvailable=!1,this.registering=!1,this.events.emit("close")}onPayload(t){if("undefined"===typeof t.data)return;const e="string"===typeof t.data?(0,u.D)(t.data):t.data;this.events.emit("payload",e)}onError(t,e){const n=this.parseError(e),r=n.message||n.toString(),s=(0,o.formatJsonRpcError)(t,r);this.events.emit("payload",s)}parseError(t,e=this.url){return(0,o.parseConnectionError)(t,e,"HTTP")}}var l=n(81382),p=n(58178),v=n.n(p),y=n(71516),w=n(4337),g=n.n(w),m=n(73416);class b extends m.XR{constructor(t){super(),this.events=new(v()),this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=t,this.chainId=(null===t||void 0===t?void 0:t.chainId)||this.chainId,this.wc=this.register(t)}get connected(){return"undefined"!==typeof this.wc&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}off(t,e){this.events.off(t,e)}removeListener(t,e){this.events.removeListener(t,e)}async open(t){if(!this.connected)return new Promise(((e,n)=>{this.on("error",(t=>{n(t)})),this.on("open",(()=>{e()})),this.create(t)}));this.onOpen()}async close(){"undefined"!==typeof this.wc&&(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(t){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(t).then((t=>this.events.emit("payload",t))).catch((e=>this.events.emit("payload",(0,o.formatJsonRpcError)(t.id,e.message))))}register(t){if(this.wc)return this.wc;this.opts=t||this.opts,this.bridge=(null===t||void 0===t?void 0:t.connector)?t.connector.bridge:(null===t||void 0===t?void 0:t.bridge)||"https://bridge.walletconnect.org",this.qrcode="undefined"===typeof(null===t||void 0===t?void 0:t.qrcode)||!1!==t.qrcode,this.chainId="undefined"!==typeof(null===t||void 0===t?void 0:t.chainId)?t.chainId:this.chainId,this.qrcodeModalOptions=null===t||void 0===t?void 0:t.qrcodeModalOptions;const e={bridge:this.bridge,qrcodeModal:this.qrcode?g():void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:null===t||void 0===t?void 0:t.storageId,signingMethods:null===t||void 0===t?void 0:t.signingMethods,clientMeta:null===t||void 0===t?void 0:t.clientMeta};if(this.wc="undefined"!==typeof(null===t||void 0===t?void 0:t.connector)?t.connector:new y.Z(e),"undefined"===typeof this.wc)throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(t){this.pending=!1,t&&(this.wc=t),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(t,e="Failed or Rejected Request",n=-32e3){const r={id:t.id,jsonrpc:t.jsonrpc,error:{code:n,message:e}};return this.events.emit("payload",r),r}create(t){this.wc=this.register(this.opts),this.chainId=t||this.chainId,this.connected||this.pending||(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then((()=>this.events.emit("created"))).catch((t=>this.events.emit("error",t))))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",(t=>{var e,n;t?this.events.emit("error",t):(this.accounts=(null===(e=this.wc)||void 0===e?void 0:e.accounts)||[],this.chainId=(null===(n=this.wc)||void 0===n?void 0:n.chainId)||this.chainId,this.onOpen())})),this.wc.on("disconnect",(t=>{t?this.events.emit("error",t):this.onClose()})),this.wc.on("modal_closed",(()=>{this.events.emit("error",new Error("User closed modal"))})),this.wc.on("session_update",((t,e)=>{const{accounts:n,chainId:r}=e.params[0];(!this.accounts||n&&this.accounts!==n)&&(this.accounts=n,this.events.emit("accountsChanged",n)),(!this.chainId||r&&this.chainId!==r)&&(this.chainId=r,this.events.emit("chainChanged",r))}))}async sendPayload(t){this.wc=this.register(this.opts);try{const e=await this.wc.unsafeSend(t);return this.sanitizeResponse(e)}catch(e){return this.onError(t,e.message)}}sanitizeResponse(t){return"undefined"!==typeof t.error&&"undefined"===typeof t.error.code?(0,o.formatJsonRpcError)(t.id,t.error.message):t}}var _=class{constructor(t){this.events=new(s()),this.rpc={infuraId:null===t||void 0===t?void 0:t.infuraId,custom:null===t||void 0===t?void 0:t.rpc},this.signer=new c(new b(t));const e=this.signer.connection.chainId||(null===t||void 0===t?void 0:t.chainId)||1;this.http=this.setHttpProvider(e),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var t;return(null===(t=this.http)||void 0===t?void 0:t.connection).url||""}async request(t){switch(t.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(l.V7.includes(t.method))return this.signer.request(t);if("undefined"===typeof this.http)throw new Error(`Cannot request JSON-RPC method (${t.method}) without provided rpc url`);return this.http.request(t)}sendAsync(t,e){this.request(t).then((t=>e(null,t))).catch((t=>e(t,void 0)))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(t,e){this.events.on(t,e)}once(t,e){this.events.once(t,e)}removeListener(t,e){this.events.removeListener(t,e)}off(t,e){this.events.off(t,e)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",(t=>{this.events.emit("accountsChanged",t)})),this.signer.connection.on("chainChanged",(t=>{this.http=this.setHttpProvider(t),this.events.emit("chainChanged",t)})),this.signer.on("disconnect",(()=>{this.events.emit("disconnect")}))}setHttpProvider(t){const e=(0,l.RM)(t,this.rpc);if("undefined"===typeof e)return;return new c(new f(e))}}},98404:function(t){"use strict";var e=Object.prototype.hasOwnProperty,n="~";function r(){}function s(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function i(t,e,r,i,o){if("function"!==typeof r)throw new TypeError("The listener must be a function");var c=new s(r,i||t,o),a=n?n+e:e;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],c]:t._events[a].push(c):(t._events[a]=c,t._eventsCount++),t}function o(t,e){0===--t._eventsCount?t._events=new r:delete t._events[e]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),c.prototype.eventNames=function(){var t,r,s=[];if(0===this._eventsCount)return s;for(r in t=this._events)e.call(t,r)&&s.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(t)):s},c.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var s=0,i=r.length,o=new Array(i);s<i;s++)o[s]=r[s].fn;return o},c.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},c.prototype.emit=function(t,e,r,s,i,o){var c=n?n+t:t;if(!this._events[c])return!1;var a,h,u=this._events[c],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,s),!0;case 5:return u.fn.call(u.context,e,r,s,i),!0;case 6:return u.fn.call(u.context,e,r,s,i,o),!0}for(h=1,a=new Array(d-1);h<d;h++)a[h-1]=arguments[h];u.fn.apply(u.context,a)}else{var f,l=u.length;for(h=0;h<l;h++)switch(u[h].once&&this.removeListener(t,u[h].fn,void 0,!0),d){case 1:u[h].fn.call(u[h].context);break;case 2:u[h].fn.call(u[h].context,e);break;case 3:u[h].fn.call(u[h].context,e,r);break;case 4:u[h].fn.call(u[h].context,e,r,s);break;default:if(!a)for(f=1,a=new Array(d-1);f<d;f++)a[f-1]=arguments[f];u[h].fn.apply(u[h].context,a)}}return!0},c.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},c.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},c.prototype.removeListener=function(t,e,r,s){var i=n?n+t:t;if(!this._events[i])return this;if(!e)return o(this,i),this;var c=this._events[i];if(c.fn)c.fn!==e||s&&!c.once||r&&c.context!==r||o(this,i);else{for(var a=0,h=[],u=c.length;a<u;a++)(c[a].fn!==e||s&&!c[a].once||r&&c[a].context!==r)&&h.push(c[a]);h.length?this._events[i]=1===h.length?h[0]:h:o(this,i)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&o(this,e)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,t.exports=c},80699:function(t,e){var n="undefined"!==typeof self?self:this,r=function(){function t(){this.fetch=!1,this.DOMException=n.DOMException}return t.prototype=n,new t}();!function(t){!function(e){var n="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,s="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in t,o="ArrayBuffer"in t;if(o)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&c.indexOf(Object.prototype.toString.call(t))>-1};function h(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function u(t){return"string"!==typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return r&&(e[Symbol.iterator]=function(){return e}),e}function f(t){this.map={},t instanceof f?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(t){return new Promise((function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function v(t){var e=new FileReader,n=p(e);return e.readAsArrayBuffer(t),n}function y(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():o&&s&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=y(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=y(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(v)}),this.text=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=p(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(t,e){t=h(t),e=u(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},f.prototype.delete=function(t){delete this.map[h(t)]},f.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},f.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},f.prototype.set=function(t,e){this.map[h(t)]=u(e)},f.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},f.prototype.keys=function(){var t=[];return this.forEach((function(e,n){t.push(n)})),d(t)},f.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},f.prototype.entries=function(){var t=[];return this.forEach((function(e,n){t.push([n,e])})),d(t)},r&&(f.prototype[Symbol.iterator]=f.prototype.entries);var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var n=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new f(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new f(e.headers)),this.method=function(t){var e=t.toUpperCase();return g.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function b(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),s=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(s))}})),e}function _(t){var e=new f;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var n=t.split(":"),r=n.shift().trim();if(r){var s=n.join(":").trim();e.append(r,s)}})),e}function E(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new f(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},w.call(m.prototype),w.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},E.error=function(){var t=new E(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];E.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new E(null,{status:e,headers:{location:t}})},e.DOMException=t.DOMException;try{new e.DOMException}catch(A){e.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},e.DOMException.prototype=Object.create(Error.prototype),e.DOMException.prototype.constructor=e.DOMException}function O(t,n){return new Promise((function(r,i){var o=new m(t,n);if(o.signal&&o.signal.aborted)return i(new e.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function a(){c.abort()}c.onload=function(){var t={status:c.status,statusText:c.statusText,headers:_(c.getAllResponseHeaders()||"")};t.url="responseURL"in c?c.responseURL:t.headers.get("X-Request-URL");var e="response"in c?c.response:c.responseText;r(new E(e,t))},c.onerror=function(){i(new TypeError("Network request failed"))},c.ontimeout=function(){i(new TypeError("Network request failed"))},c.onabort=function(){i(new e.DOMException("Aborted","AbortError"))},c.open(o.method,o.url,!0),"include"===o.credentials?c.withCredentials=!0:"omit"===o.credentials&&(c.withCredentials=!1),"responseType"in c&&s&&(c.responseType="blob"),o.headers.forEach((function(t,e){c.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",a),c.onreadystatechange=function(){4===c.readyState&&o.signal.removeEventListener("abort",a)}),c.send("undefined"===typeof o._bodyInit?null:o._bodyInit)}))}O.polyfill=!0,t.fetch||(t.fetch=O,t.Headers=f,t.Request=m,t.Response=E),e.Headers=f,e.Request=m,e.Response=E,e.fetch=O,Object.defineProperty(e,"__esModule",{value:!0})}({})}(r),r.fetch.ponyfill=!0,delete r.fetch.polyfill;var s=r;(e=s.fetch).default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e},58178:function(t){"use strict";var e=Object.prototype.hasOwnProperty,n="~";function r(){}function s(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function i(t,e,r,i,o){if("function"!==typeof r)throw new TypeError("The listener must be a function");var c=new s(r,i||t,o),a=n?n+e:e;return t._events[a]?t._events[a].fn?t._events[a]=[t._events[a],c]:t._events[a].push(c):(t._events[a]=c,t._eventsCount++),t}function o(t,e){0===--t._eventsCount?t._events=new r:delete t._events[e]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),c.prototype.eventNames=function(){var t,r,s=[];if(0===this._eventsCount)return s;for(r in t=this._events)e.call(t,r)&&s.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?s.concat(Object.getOwnPropertySymbols(t)):s},c.prototype.listeners=function(t){var e=n?n+t:t,r=this._events[e];if(!r)return[];if(r.fn)return[r.fn];for(var s=0,i=r.length,o=new Array(i);s<i;s++)o[s]=r[s].fn;return o},c.prototype.listenerCount=function(t){var e=n?n+t:t,r=this._events[e];return r?r.fn?1:r.length:0},c.prototype.emit=function(t,e,r,s,i,o){var c=n?n+t:t;if(!this._events[c])return!1;var a,h,u=this._events[c],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(t,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,e),!0;case 3:return u.fn.call(u.context,e,r),!0;case 4:return u.fn.call(u.context,e,r,s),!0;case 5:return u.fn.call(u.context,e,r,s,i),!0;case 6:return u.fn.call(u.context,e,r,s,i,o),!0}for(h=1,a=new Array(d-1);h<d;h++)a[h-1]=arguments[h];u.fn.apply(u.context,a)}else{var f,l=u.length;for(h=0;h<l;h++)switch(u[h].once&&this.removeListener(t,u[h].fn,void 0,!0),d){case 1:u[h].fn.call(u[h].context);break;case 2:u[h].fn.call(u[h].context,e);break;case 3:u[h].fn.call(u[h].context,e,r);break;case 4:u[h].fn.call(u[h].context,e,r,s);break;default:if(!a)for(f=1,a=new Array(d-1);f<d;f++)a[f-1]=arguments[f];u[h].fn.apply(u[h].context,a)}}return!0},c.prototype.on=function(t,e,n){return i(this,t,e,n,!1)},c.prototype.once=function(t,e,n){return i(this,t,e,n,!0)},c.prototype.removeListener=function(t,e,r,s){var i=n?n+t:t;if(!this._events[i])return this;if(!e)return o(this,i),this;var c=this._events[i];if(c.fn)c.fn!==e||s&&!c.once||r&&c.context!==r||o(this,i);else{for(var a=0,h=[],u=c.length;a<u;a++)(c[a].fn!==e||s&&!c[a].once||r&&c[a].context!==r)&&h.push(c[a]);h.length?this._events[i]=1===h.length?h[0]:h:o(this,i)}return this},c.prototype.removeAllListeners=function(t){var e;return t?(e=n?n+t:t,this._events[e]&&o(this,e)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,t.exports=c}}]);