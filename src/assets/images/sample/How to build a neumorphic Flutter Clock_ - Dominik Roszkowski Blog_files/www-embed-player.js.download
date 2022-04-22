(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function n(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ia});
var ja="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype}
function ra(){this.C=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function sa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
ra.prototype.u=function(a){this.i=a};
function va(a,b){a.j={ub:b,yb:!0};a.h=a.m||a.o}
ra.prototype.return=function(a){this.j={return:a};this.h=this.o};
function t(a,b,c){a.h=c;return{value:b}}
ra.prototype.s=function(a){this.h=a};
function wa(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function xa(a,b){a.h=b;a.m=0}
function ya(a){a.m=0;var b=a.j.ub;a.j=null;return b}
function za(a){a.A=[a.j];a.m=0;a.o=0}
function Aa(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.yb?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function Da(a){this.h=new ra;this.i=a}
function Ea(a,b){sa(a.h);var c=a.h.l;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.C=!1,e;var f=e.value}catch(g){return a.h.l=null,va(a.h,g),Ga(a)}a.h.l=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.C=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.C=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.yb)throw b.ub;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){sa(a.h);a.h.l?b=Fa(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Ga(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Fa(a,a.h.l["throw"],b,a.h.u):(va(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return la});
n("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.C=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.T),reject:g(this.o)}};
b.prototype.T=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.m(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.na(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.A()};
b.prototype.Y=function(){var g=this;e(function(){if(g.L()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.C)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.fa=function(g){var h=this.l();g.Ia(h.resolve,h.reject)};
b.prototype.na=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(C,v){return"function"==typeof C?function(E){try{m(C(E))}catch(F){q(F)}}:v}
var m,q,u=new b(function(C,v){m=C;q=v});
this.Ia(k(g,m),k(h,q));return u};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ia=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ia(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function u(E){return function(F){C[E]=F;v--;0==v&&m(C)}}
var C=[],v=0;do C.push(void 0),v++,d(k.value).Ia(u(C.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(u){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.h)?delete k[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return ea(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ha(h.data_,m))for(h=0;h<q.length;h++){var u=q[h];if(k!==k&&u.key!==u.key||k===u.key)return{id:m,list:q,index:h,entry:u}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Object.setPrototypeOf",function(a){return a||qa});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function z(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(){}
function Na(a){a.cb=void 0;a.getInstance=function(){return a.cb?a.cb:a.cb=new a}}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Va:Xa=Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){y(a,b,void 0)}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ho=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Pb=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function tb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ub(){var a=A("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function vb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function wb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function xb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=xb(a[c]);return b}
var yb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<yb.length;f++)c=yb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ab;function Bb(){if(void 0===Ab){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){x.console&&x.console.error(c.message)}Ab=a}else Ab=a}return Ab}
;function Cb(a,b){this.j=a===Db&&b||""}
Cb.prototype.i=!0;Cb.prototype.h=function(){return this.j};
function Eb(a){return new Cb(Db,a)}
var Db={};Eb("");var Fb={};function Gb(a){this.j=Fb===Fb?a:"";this.i=!0}
Gb.prototype.h=function(){return this.j.toString()};
Gb.prototype.toString=function(){return this.j.toString()};function Hb(a,b){this.j=b===Ib?a:""}
Hb.prototype.i=!0;Hb.prototype.h=function(){return this.j.toString()};
Hb.prototype.toString=function(){return this.j+""};
function Jb(a){if(a instanceof Hb&&a.constructor===Hb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Ib={};function Kb(a){var b=Bb();a=b?b.createScriptURL(a):a;return new Hb(a,Ib)}
;var Lb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Mb(a,b){this.j=b===Pb?a:""}
Mb.prototype.i=!0;Mb.prototype.h=function(){return this.j.toString()};
Mb.prototype.toString=function(){return this.j.toString()};
function Qb(a){if(a instanceof Mb&&a.constructor===Mb)return a.j;Pa(a);return"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={};function Sb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function B(a){return-1!=Sb().indexOf(a)}
;function Tb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")||B("Silk")}
;var Ub={};function Vb(a){this.j=Ub===Ub?a:"";this.i=!0}
Vb.prototype.h=function(){return this.j.toString()};
Vb.prototype.toString=function(){return this.j.toString()};function Wb(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.i?b.h():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Pb));a.href=Qb(b)}
function Xb(a,b){a.rel="stylesheet";a.href=Jb(b).toString();(b=Yb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Zb(){return Yb("script[nonce]",void 0)}
var $b=/^[\w+/_-]+[=]{0,2}$/;function Yb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&$b.test(a)?a:"":""}
;function ac(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var bc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cc(a){return a?decodeURI(a):a}
function dc(a,b){return b.match(bc)[a]||null}
function ec(a){return cc(dc(3,a))}
function fc(a){var b=a.match(bc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function gc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)gc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function hc(a){var b=[],c;for(c in a)gc(c,a[c],b);return b.join("&")}
function ic(a,b){b=hc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function jc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var kc=/#|$/,lc=/[?&]($|#)/;function mc(a){for(var b=a.search(kc),c=0,d,e=[];0<=(d=jc(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.substr(c));return e.join("").replace(lc,"$1")}
;function qc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function rc(a){rc[" "](a);return a}
rc[" "]=Ma;var sc=B("Opera"),tc=B("Trident")||B("MSIE"),uc=B("Edge"),vc=B("Gecko")&&!(-1!=Sb().toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),wc=-1!=Sb().toLowerCase().indexOf("webkit")&&!B("Edge"),xc=B("Android");function yc(){var a=x.document;return a?a.documentMode:void 0}
var zc;a:{var Ac="",Bc=function(){var a=Sb();if(vc)return/rv:([^\);]+)(\)|;)/.exec(a);if(uc)return/Edge\/([\d\.]+)/.exec(a);if(tc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(wc)return/WebKit\/(\S+)/.exec(a);if(sc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Bc&&(Ac=Bc?Bc[1]:"");if(tc){var Cc=yc();if(null!=Cc&&Cc>parseFloat(Ac)){zc=String(Cc);break a}}zc=Ac}var Dc=zc,Ec;if(x.document&&tc){var Fc=yc();Ec=Fc?Fc:parseInt(Dc,10)||void 0}else Ec=void 0;var Gc=Ec;var Hc=qc()||B("iPod"),Ic=B("iPad");!B("Android")||Tb();Tb();var Jc=B("Safari")&&!(Tb()||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||B("Firefox")||B("FxiOS")||B("Silk")||B("Android"))&&!(qc()||B("iPad")||B("iPod"));var Kc={},Lc=null;
function Mc(a,b){Qa(a);void 0===b&&(b=0);if(!Lc){Lc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Kc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Lc[h]&&(Lc[h]=g)}}}b=Kc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Nc="undefined"!==typeof Uint8Array;var Oc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Pc(a,b){Object.isFrozen(a)||(Oc?a[Oc]|=b:void 0!==a.Ma?a.Ma|=b:Object.defineProperties(a,{Ma:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Qc(a){var b;Oc?b=a[Oc]:b=a.Ma;return null==b?0:b}
function Rc(a){Pc(a,1);return a}
function Sc(a){return Array.isArray(a)?!!(Qc(a)&2):!1}
function Tc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Pc(a,2)}
;function Uc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Vc,Wc=Object.freeze(Rc([]));function Xc(a){if(Sc(a.G))throw Error("Cannot mutate an immutable Message");}
var Yc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Zc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function $c(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Nc&&null!=a&&a instanceof Uint8Array)return Mc(a)}return a}
;function ad(a,b){b=void 0===b?bd:b;return fd(a,b)}
function gd(a,b){if(null!=a){if(Array.isArray(a))a=fd(a,b);else if(Uc(a)){var c={},d;for(d in a)c[d]=gd(a[d],b);a=c}else a=b(a);return a}}
function fd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=gd(c[d],b);Array.isArray(a)&&Qc(a)&1&&Rc(c);return c}
function hd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=$c(a);return Array.isArray(a)?ad(a,hd):a}
function bd(a){return Nc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function id(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.G[b+a.j]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Xc(a);b<a.l&&!d?a.G[b+a.j]=c:(a.i||(a.i=a.G[a.l+a.j]={}))[b]=c;return a}
function jd(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=id(a,b,d);null==e&&(e=Wc);if(Sc(a.G))c&&(Tc(e),Object.freeze(e));else if(e===Wc||Sc(e))e=Rc(e.slice()),D(a,b,e,d);return e}
function kd(a,b,c,d){Xc(a);(c=ld(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),D(a,c,void 0));return D(a,b,d)}
function ld(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=id(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function md(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=id(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Sc(a.G)&&Tc(b.G);return a.h[c]=b}
function nd(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=Sc(a.G),f=a.h[c];if(!f){d=jd(a,c,!0,d);f=[];e=e||Sc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Tc(f[g].G);e&&(Tc(f),Object.freeze(f));a.h[c]=f}return f}
function I(a,b,c,d){d=void 0===d?!1:d;Xc(a);a.h||(a.h={});var e=c?c.G:c;a.h[b]=c;return D(a,b,e,d)}
function od(a,b,c,d){Xc(a);a.h||(a.h={});var e=d?d.G:d;a.h[b]=d;kd(a,b,c,e)}
function pd(a,b,c,d){var e=void 0===e?!1:e;Xc(a);e=nd(a,c,b,e);c=d?d:new c;a=jd(a,b);e.push(c);a.push(c.G)}
function qd(a,b){a=id(a,b);return null==a?"":a}
;function rd(a,b,c){a||(a=sd);sd=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.G=a;a:{d=this.G.length;a=d-1;if(d&&(d=this.G[a],Uc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.G[a])?Array.isArray(d)&&Rc(d):this.G[a]=Wc;else{d=this.i||(this.i=this.G[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Rc(e):d[a]=Wc}}
rd.prototype.toJSON=function(){var a=this.G;return Vc?a:ad(a,hd)};
function td(a){Vc=!0;try{return JSON.stringify(a.toJSON(),ud)}finally{Vc=!1}}
rd.prototype.clone=function(){var a=ad(this.G);sd=a;a=new this.constructor(a);sd=null;vd(a,this);return a};
rd.prototype.toString=function(){return this.G.toString()};
function ud(a,b){return $c(b)}
function vd(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=nd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)vd(f[g],e[g])}else(f=md(a,e.constructor,g,void 0,f))&&vd(f,e)}}}}
var sd;function wd(){rd.apply(this,arguments)}
r(wd,rd);if(Yc){var xd={};Object.defineProperties(wd,(xd[Symbol.hasInstance]=Zc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),xd))};function yd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;Xc(a);if(b){var e=Rc([]);for(var f=0;f<b.length;f++)e[f]=b[f].G;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Wc;a=D(a,c,e,d)}else a=I(a,c,b,!0);return a}
;function J(){wd.apply(this,arguments)}
r(J,wd);if(Yc){var zd={};Object.defineProperties(J,(zd[Symbol.hasInstance]=Zc(Object[Symbol.hasInstance]),zd))};function Ad(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Bd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new Ad;this.j=c.promise;this.l=p((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Ob:d,xc:e})})},!0)).next().value;
this.wc=c.promise.then(function(){})}
Bd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Ob;return new Promise(function(d){c(function(e){d(e)},[a.pb,
a.yc])})})};
Bd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.xc)&&a()})};
Bd.prototype.h=function(){return this.i};var Cd=window;Eb("csi.gstatic.com");Eb("googleads.g.doubleclick.net");Eb("partner.googleadservices.com");Eb("pubads.g.doubleclick.net");Eb("securepubads.g.doubleclick.net");Eb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Dd={};function Ed(){}
function Fd(a){this.h=a}
r(Fd,Ed);Fd.prototype.toString=function(){return this.h};
var Gd=new Fd("about:invalid#zTSz",Dd);function Hd(a){if(a instanceof Ed)if(a instanceof Fd)a=a.h;else throw Error("");else a=Qb(a);return a}
;function Id(a,b){a.src=Jb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Jd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Jd.prototype;l.clone=function(){return new Jd(this.x,this.y)};
l.equals=function(a){return a instanceof Jd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Kd(a,b){this.width=a;this.height=b}
l=Kd.prototype;l.clone=function(){return new Kd(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Ld(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Md(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Nd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Od(a){var b=Pd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Qd(){var a=[];Od(function(b){a.push(b)});
return a}
var Pd={Pc:"allow-forms",Qc:"allow-modals",Rc:"allow-orientation-lock",Sc:"allow-pointer-lock",Tc:"allow-popups",Uc:"allow-popups-to-escape-sandbox",Vc:"allow-presentation",Wc:"allow-same-origin",Xc:"allow-scripts",Yc:"allow-top-navigation",Zc:"allow-top-navigation-by-user-activation"},Rd=eb(function(){return Qd()});
function Sd(){var a=Td(),b={};gb(Rd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Td(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ud(a){this.isValid=a}
function Vd(a){return new Ud(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Wd=[Vd("data"),Vd("http"),Vd("https"),Vd("mailto"),Vd("ftp"),new Ud(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Xd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Yd=(new Date).getTime();function Zd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function $d(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(u){for(var C=g,v=0;64>v;v+=4)C[v/4]=u[v]<<24|u[v+1]<<16|u[v+2]<<8|u[v+3];for(v=16;80>v;v++)u=C[v-3]^C[v-8]^C[v-14]^C[v-16],C[v]=(u<<1|u>>>31)&4294967295;u=e[0];var E=e[1],F=e[2],H=e[3],R=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var O=H^E&(F^H);var S=1518500249}else O=E^F^H,S=1859775393;else 60>v?(O=E&F|H&(E|F),S=2400959708):(O=E^F^H,S=3395469782);O=((u<<5|u>>>27)&4294967295)+O+R+S+C[v]&4294967295;R=H;H=F;F=(E<<30|E>>>2)&4294967295;E=u;u=O}e[0]=e[0]+u&4294967295;e[1]=e[1]+E&4294967295;e[2]=
e[2]+F&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+R&4294967295}
function c(u,C){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var v=[],E=0,F=u.length;E<F;++E)v.push(u.charCodeAt(E));u=v}C||(C=u.length);v=0;if(0==m)for(;v+64<C;)b(u.slice(v,v+64)),v+=64,q+=64;for(;v<C;)if(f[m++]=u[v++],q++,64==m)for(m=0,b(f);v+64<C;)b(u.slice(v,v+64)),v+=64,q+=64}
function d(){var u=[],C=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=C&255,C>>>=8;b(f);for(v=C=0;5>v;v++)for(var E=24;0<=E;E-=8)u[C++]=e[v]>>E&255;return u}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Sb:function(){for(var u=d(),C="",v=0;v<u.length;v++)C+="0123456789ABCDEF".charAt(Math.floor(u[v]/16))+"0123456789ABCDEF".charAt(u[v]%16);return C}}}
;function de(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,ee(Zd(d),a,c||null)].join(" "):null}
function ee(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),fe(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=fe(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function fe(a){var b=$d();b.update(a);return b.Sb().toLowerCase()}
;var ge={};function he(a){this.h=a||{cookie:""}}
l=he.prototype;l.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Oa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.To;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Oa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Lb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Oa:0,path:b,domain:c});return d};
l.Ya=function(){return ie(this).keys};
l.isEmpty=function(){return!this.h.cookie};
l.clear=function(){for(var a=ie(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function ie(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Lb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var je=new he("undefined"==typeof document?null:document);function ke(a){return!!ge.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function le(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;ke(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new he(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");ke(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function me(a,b,c,d){(a=x[a])||(a=(new he(document)).get(b));return a?de(a,c,d):null}
function ne(a){var b=void 0===b?!1:b;var c=Zd(String(x.location.href)),d=[];if(le(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new he(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?de(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&ke(b)&&((b=me("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=me("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function oe(a){if(Yc){var b={};Object.defineProperties(a,(b[Symbol.hasInstance]=Zc(Object[Symbol.hasInstance]),b))}}
;function pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?qe.apply(null,d):pe(d)}}
;function K(){this.C=this.C;this.o=this.o}
K.prototype.C=!1;K.prototype.h=function(){return this.C};
K.prototype.dispose=function(){this.C||(this.C=!0,this.I())};
function re(a,b){a.C?b():(a.o||(a.o=[]),a.o.push(b))}
K.prototype.I=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function se(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
se.prototype.stopPropagation=function(){this.j=!0};
se.prototype.preventDefault=function(){this.defaultPrevented=!0};function te(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ue(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ve[c])c=ve[c];else{c=String(c);if(!ve[c]){var f=/function\s+([^\(]+)/m.exec(c);ve[c]=f?f[1]:"[Anonymous]"}c=ve[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ue(a,b){b||(b={});b[we(a)]=!0;var c=a.stack||"";(a=a.Pb)&&!b[we(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ue(a,b));return c}
function we(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ve={};var xe=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",Ma,b),x.removeEventListener("test",Ma,b)}catch(c){}return a}();function ye(a,b){se.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(ye,se);var ze={2:"touch",3:"pen",4:"mouse"};
ye.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(vc){a:{try{rc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ze[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ye.aa.preventDefault.call(this)};
ye.prototype.stopPropagation=function(){ye.aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ye.prototype.preventDefault=function(){ye.aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ae="closure_listenable_"+(1E6*Math.random()|0);var Be=0;function Ce(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.La=e;this.key=++Be;this.ya=this.Ha=!1}
function De(a){a.ya=!0;a.listener=null;a.proxy=null;a.src=null;a.La=null}
;function Ee(a){this.src=a;this.listeners={};this.h=0}
Ee.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Fe(a,b,d,e);-1<g?(b=a[g],c||(b.Ha=!1)):(b=new Ce(b,this.src,f,!!d,e),b.Ha=c,a.push(b));return b};
Ee.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Fe(e,b,c,d);return-1<b?(De(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ge(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(De(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Fe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ya&&f.listener==b&&f.capture==!!c&&f.La==d)return e}return-1}
;var He="closure_lm_"+(1E6*Math.random()|0),Ie={},Je=0;function Ke(a,b,c,d,e){if(d&&d.once)Le(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Me(c),a&&a[Ae]?a.W(b,c,Ra(d)?!!d.capture:!!d,e):Ne(a,b,c,!1,d,e)}
function Ne(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=Oe(a);h||(a[He]=h=new Ee(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Pe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)xe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Qe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Je++}}
function Pe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Re;return a}
function Le(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Le(a,b[f],c,d,e);else c=Me(c),a&&a[Ae]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):Ne(a,b,c,!0,d,e)}
function Se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Se(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=Me(c),a&&a[Ae])?a.l.remove(String(b),c,d,e):a&&(a=Oe(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Fe(b,c,d,e)),(c=-1<a?b[a]:null)&&Te(c))}
function Te(a){if("number"!==typeof a&&a&&!a.ya){var b=a.src;if(b&&b[Ae])Ge(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Qe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Je--;(c=Oe(b))?(Ge(c,a),0==c.h&&(c.src=null,b[He]=null)):De(a)}}}
function Qe(a){return a in Ie?Ie[a]:Ie[a]="on"+a}
function Re(a,b){if(a.ya)a=!0;else{b=new ye(b,this);var c=a.listener,d=a.La||a.src;a.Ha&&Te(a);a=c.call(d,b)}return a}
function Oe(a){a=a[He];return a instanceof Ee?a:null}
var Ue="__closure_events_fn_"+(1E9*Math.random()>>>0);function Me(a){if("function"===typeof a)return a;a[Ue]||(a[Ue]=function(b){return a.handleEvent(b)});
return a[Ue]}
;function Ve(){K.call(this);this.l=new Ee(this);this.Y=this;this.L=null}
$a(Ve,K);Ve.prototype[Ae]=!0;Ve.prototype.addEventListener=function(a,b,c,d){Ke(this,a,b,c,d)};
Ve.prototype.removeEventListener=function(a,b,c,d){Se(this,a,b,c,d)};
function We(a,b){var c=a.L;if(c){var d=[];for(var e=1;c;c=c.L)d.push(c),++e}a=a.Y;c=b.type||b;"string"===typeof b?b=new se(b,a):b instanceof se?b.target=b.target||a:(e=b,b=new se(c,a),zb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Xe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Xe(g,c,!0,b)&&e,b.j||(e=Xe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Xe(g,c,!1,b)&&e}
Ve.prototype.I=function(){Ve.aa.I.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,De(d[e]);delete a.listeners[c];a.h--}}this.L=null};
Ve.prototype.W=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function Xe(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ya&&g.capture==c){var h=g.listener,k=g.La||g.src;g.Ha&&Ge(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ye(a){Ve.call(this);var b=this;this.A=this.j=0;this.V=null!=a?a:{N:function(e,f){return setTimeout(e,f)},
U:clearTimeout};var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return t(e,Ze(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||$e(this)}
r(Ye,Ve);function af(){var a=bf;Ye.h||(Ye.h=new Ye(a));return Ye.h}
Ye.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.V.U(this.A);delete Ye.h};
Ye.prototype.H=function(){return this.i};
function $e(a){a.A=a.V.N(function(){var b;return w(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.s(3):t(c,Ze(a),3):t(c,Ze(a),3);$e(a);c.h=0})},3E4)}
function Ze(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.V.N(function(){d.abort()},b||2E4)),t(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.u=void 0;a.j&&(a.V.U(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?We(a,"networkstatus-online"):We(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:ya(h),g=!1,h.s(3)}})})}
;var cf={ro:"WEB_DISPLAY_MODE_UNKNOWN",no:"WEB_DISPLAY_MODE_BROWSER",po:"WEB_DISPLAY_MODE_MINIMAL_UI",qo:"WEB_DISPLAY_MODE_STANDALONE",oo:"WEB_DISPLAY_MODE_FULLSCREEN"};function df(){this.data_=[];this.h=-1}
df.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
df.prototype.get=function(a){return!!this.data_[a]};
function ef(a){-1==a.h&&(a.h=jb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function ff(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
ff.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function gf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var hf;function jf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=Md("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.nb;c.nb=null;e()}};
return function(e){d.next={nb:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function kf(a){x.setTimeout(function(){throw a;},0)}
;function lf(){this.i=this.h=null}
lf.prototype.add=function(a,b){var c=mf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
lf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var mf=new ff(function(){return new nf},function(a){return a.reset()});
function nf(){this.next=this.scope=this.h=null}
nf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
nf.prototype.reset=function(){this.next=this.scope=this.h=null};function of(a,b){pf||qf();rf||(pf(),rf=!0);sf.add(a,b)}
var pf;function qf(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);pf=function(){a.then(tf)}}else pf=function(){var b=tf;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!B("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(hf||(hf=jf()),hf(b)):x.setImmediate(b)}}
var rf=!1,sf=new lf;function tf(){for(var a;a=sf.remove();){try{a.h.call(a.scope)}catch(b){kf(b)}gf(mf,a)}rf=!1}
;function uf(a,b){this.h=a[x.Symbol.iterator]();this.i=b}
uf.prototype[Symbol.iterator]=function(){return this};
uf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function vf(a,b){return new uf(a,b)}
;function wf(){this.blockSize=-1}
;function xf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(xf,wf);xf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function yf(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
xf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)yf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){yf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){yf(this,e);f=0;break}}this.i=f;this.l+=b}};
xf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;yf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function zf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Af(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Bf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:zf(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function Cf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Bf(a,"inverted-hdpi")&&Af(a,Array.prototype.filter.call(a.classList?a.classList:zf(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Df="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function Ef(){}
Ef.prototype.h=function(){throw Df;};
Ef.prototype.next=function(){return Ff};
var Ff={done:!0,value:void 0};function Gf(a){return{value:a,done:!1}}
function Hf(a){if(a.done)throw Df;return a.value}
Ef.prototype.Z=function(){return this};function If(a){if(a instanceof Jf||a instanceof Kf||a instanceof Lf)return a;if("function"==typeof a.next)return new Jf(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Jf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Z)return new Jf(function(){return a.Z()});
throw Error("Not an iterator or iterable.");}
function Jf(a){this.h=a}
Jf.prototype.Z=function(){return new Kf(this.h())};
Jf.prototype[Symbol.iterator]=function(){return new Lf(this.h())};
Jf.prototype.j=function(){return new Lf(this.h())};
function Kf(a){this.i=a}
r(Kf,Ef);Kf.prototype.h=function(){var a=this.i.next();if(a.done)throw Df;return a.value};
Kf.prototype.next=function(){return this.i.next()};
Kf.prototype[Symbol.iterator]=function(){return new Lf(this.i)};
Kf.prototype.j=function(){return new Lf(this.i)};
function Lf(a){Jf.call(this,function(){return a});
this.i=a}
r(Lf,Jf);Lf.prototype.next=function(){return this.i.next()};function Mf(a,b){this.i={};this.h=[];this.ia=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Mf)for(c=a.Ya(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Mf.prototype;l.Ya=function(){Nf(this);return this.h.concat()};
l.has=function(a){return Of(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Pf;Nf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Pf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.i={};this.ia=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Of(this.i,a)?(delete this.i[a],--this.size,this.ia++,this.h.length>2*this.size&&Nf(this),!0):!1};
function Nf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Of(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Of(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Of(this.i,a)?this.i[a]:b};
l.set=function(a,b){Of(this.i,a)||(this.size+=1,this.h.push(a),this.ia++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.Ya(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Mf(this)};
l.keys=function(){return If(this.Z(!0)).j()};
l.values=function(){return If(this.Z(!1)).j()};
l.entries=function(){var a=this;return vf(this.keys(),function(b){return[b,a.get(b)]})};
l.Z=function(a){Nf(this);var b=0,c=this.ia,d=this,e=new Ef;e.next=function(){if(c!=d.ia)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ff;var g=d.h[b++];return Gf(a?g:d.i[g])};
var f=e.next;e.h=function(){return Hf(f.call(e))};
return e};
function Of(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Qf(a){Rf();return Kb(a)}
var Rf=Ma;function Uf(a){var b=[];Vf(new Wf,a,b);return b.join("")}
function Wf(){}
function Vf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Vf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Xf(d,c),c.push(":"),Vf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Xf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Yf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Zf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Xf(a,b){b.push('"',a.replace(Zf,function(c){var d=Yf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Yf[c]=d);return d}),'"')}
;function $f(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function ag(a){this.h=0;this.C=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ma)try{var b=this;a.call(void 0,function(c){bg(b,2,c)},function(c){bg(b,3,c)})}catch(c){bg(this,3,c)}}
function cg(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
cg.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var dg=new ff(function(){return new cg},function(a){a.reset()});
function eg(a,b,c){var d=dg.get();d.i=a;d.onRejected=b;d.context=c;return d}
function fg(a){return new ag(function(b,c){c(a)})}
ag.prototype.then=function(a,b,c){return gg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
ag.prototype.$goog_Thenable=!0;function hg(a,b){return gg(a,null,b,void 0)}
ag.prototype.cancel=function(a){if(0==this.h){var b=new ig(a);of(function(){jg(this,b)},this)}};
function jg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?jg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):kg(c),lg(c,e,3,b)))}a.j=null}else bg(a,3,b)}
function mg(a,b){a.i||2!=a.h&&3!=a.h||ng(a);a.l?a.l.next=b:a.i=b;a.l=b}
function gg(a,b,c,d){var e=eg(null,null,null);e.h=new ag(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ig?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;mg(a,e);return e.h}
ag.prototype.A=function(a){this.h=0;bg(this,2,a)};
ag.prototype.L=function(a){this.h=0;bg(this,3,a)};
function bg(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.L;if(d instanceof ag){mg(d,eg(e||Ma,f||null,a));var g=!0}else if($f(d))d.then(e,f,a),g=!0;else{if(Ra(d))try{var h=d.then;if("function"===typeof h){og(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.C=c,a.h=b,a.j=null,ng(a),3!=b||c instanceof ig||pg(a,c))}}
function og(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ng(a){a.m||(a.m=!0,of(a.u,a))}
function kg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
ag.prototype.u=function(){for(var a;a=kg(this);)lg(this,a,this.h,this.C);this.m=!1};
function lg(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,qg(b,c,d);else try{b.j?b.i.call(b.context):qg(b,c,d)}catch(e){rg.call(null,e)}gf(dg,b)}
function qg(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function pg(a,b){a.o=!0;of(function(){a.o&&rg.call(null,b)})}
var rg=kf;function ig(a){bb.call(this,a)}
$a(ig,bb);ig.prototype.name="cancel";function L(a){K.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
$a(L,K);l=L.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function sg(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.ta(b)}}
l.ta=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ma):(c&&lb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.ja=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];tg(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.ta(c)}}return 0!=e}return!1};
function tg(a,b,c){of(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.ta,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.I=function(){L.aa.I.call(this);this.clear();this.l.length=0};function ug(a){this.h=a}
ug.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Uf(b))};
ug.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ug.prototype.remove=function(a){this.h.remove(a)};function vg(a){this.h=a}
$a(vg,ug);function wg(a){this.data=a}
function xg(a){return void 0===a||a instanceof wg?a:new wg(a)}
vg.prototype.set=function(a,b){vg.aa.set.call(this,a,xg(b))};
vg.prototype.i=function(a){a=vg.aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
vg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function yg(a){this.h=a}
$a(yg,vg);yg.prototype.set=function(a,b,c){if(b=xg(b)){if(c){if(c<Date.now()){yg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}yg.aa.set.call(this,a,b)};
yg.prototype.i=function(a){var b=yg.aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())yg.prototype.remove.call(this,a);else return b}};function zg(){}
;function Ag(){}
$a(Ag,zg);Ag.prototype[Symbol.iterator]=function(){return If(this.Z(!0)).j()};
Ag.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Bg(a){this.h=a}
$a(Bg,Ag);l=Bg.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Z=function(a){var b=0,c=this.h,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var f=c.key(b++);if(a)return Gf(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Gf(f)};
var e=d.next;d.h=function(){return Hf(e.call(d))};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function Cg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
$a(Cg,Bg);function Dg(a,b){this.i=a;this.h=null;var c;if(c=tc)c=!(9<=Number(Gc));if(c){Eg||(Eg=new Mf);this.h=Eg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Eg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(Dg,Ag);var Fg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Eg=null;function Gg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Fg[b]})}
l=Dg.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(Gg(a),b);Hg(this)};
l.get=function(a){a=this.h.getAttribute(Gg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(Gg(a));Hg(this)};
l.Z=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ef;d.next=function(){if(b>=c.length)return Ff;var f=c[b++];if(a)return Gf(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return Gf(f)};
var e=d.next;d.h=function(){return Hf(e.call(d))};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Hg(this)};
function Hg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ig(a,b){this.i=a;this.h=b+"::"}
$a(Ig,Ag);Ig.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ig.prototype.get=function(a){return this.i.get(this.h+a)};
Ig.prototype.remove=function(a){this.i.remove(this.h+a)};
Ig.prototype.Z=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ef;d.next=function(){var f=b.next();if(f.done)return f;for(f=f.value;f.substr(0,c.h.length)!=c.h;){f=b.next();if(f.done)return f;f=f.value}return Gf(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.h=function(){return Hf(e.call(d))};
return d};function Jg(a){J.call(this,a)}
r(Jg,J);Jg.prototype.getKey=function(){return id(this,1)};
Jg.prototype.getValue=function(){return id(this,2===ld(this,Kg)?2:-1)};
Jg.prototype.setValue=function(a){return kd(this,2,Kg,a)};
var Kg=[2,3,4,5,6];function Lg(a){J.call(this,a)}
r(Lg,J);function Mg(a){J.call(this,a)}
r(Mg,J);function Ng(a){J.call(this,a)}
r(Ng,J);function Og(a){J.call(this,a,-1,Pg)}
r(Og,J);Og.prototype.getPlayerType=function(){return id(this,36)};
Og.prototype.setHomeGroupInfo=function(a){return I(this,81,a)};
var Pg=[9,66,24,32,86,100,101];function Qg(a){J.call(this,a,-1,Rg)}
r(Qg,J);var Rg=[15,26,28];function Sg(a){J.call(this,a)}
r(Sg,J);Sg.prototype.setToken=function(a){return D(this,2,a)};function Tg(a){J.call(this,a,-1,Ug)}
r(Tg,J);Tg.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Ug=[12];function Vg(a){J.call(this,a,-1,Wg)}
r(Vg,J);var Wg=[12];function Xg(a){J.call(this,a,-1,Yg)}
r(Xg,J);function Zg(a){J.call(this,a)}
r(Zg,J);Zg.prototype.getKey=function(){return qd(this,1)};
Zg.prototype.getValue=function(){return qd(this,2)};
Zg.prototype.setValue=function(a){return D(this,2,a)};
var Yg=[4,5];function $g(a){J.call(this,a)}
r($g,J);function ah(a){J.call(this,a)}
r(ah,J);var bh=[2,3];function ch(a){J.call(this,a)}
r(ch,J);ch.prototype.getMessage=function(){return qd(this,1)};function dh(a){J.call(this,a)}
r(dh,J);function eh(a){J.call(this,a)}
r(eh,J);function fh(a){J.call(this,a,-1,gh)}
r(fh,J);var gh=[10,17];function hh(a){J.call(this,a)}
r(hh,J);function ih(a){J.call(this,a)}
r(ih,J);ih.prototype.S=function(a){D(this,1,a)};function jh(a){J.call(this,a)}
r(jh,J);function kh(a){J.call(this,a)}
r(kh,J);function lh(a){J.call(this,a)}
r(lh,J);function mh(a,b){I(a,1,b)}
lh.prototype.S=function(a){D(this,2,a)};
function nh(a){J.call(this,a)}
r(nh,J);function oh(a,b){I(a,1,b)}
;function ph(a){J.call(this,a,-1,qh)}
r(ph,J);ph.prototype.S=function(a){D(this,1,a)};
function rh(a,b){I(a,2,b)}
var qh=[3];function sh(a){J.call(this,a)}
r(sh,J);sh.prototype.S=function(a){D(this,1,a)};function th(a){J.call(this,a)}
r(th,J);th.prototype.S=function(a){D(this,1,a)};function uh(a){J.call(this,a)}
r(uh,J);uh.prototype.S=function(a){D(this,1,a)};function vh(a){J.call(this,a)}
r(vh,J);function wh(a){J.call(this,a)}
r(wh,J);function xh(a){J.call(this,a,-1,yh)}
r(xh,J);xh.prototype.getPlayerType=function(){var a=id(this,7);return null==a?0:a};
xh.prototype.setVideoId=function(a){return D(this,19,a)};
function zh(a,b){pd(a,68,Ah,b)}
function Ah(a){J.call(this,a)}
r(Ah,J);Ah.prototype.getId=function(){return qd(this,2)};
var yh=[83,68];function Bh(a){J.call(this,a)}
r(Bh,J);function Ch(a){J.call(this,a)}
r(Ch,J);function Dh(a){J.call(this,a)}
r(Dh,J);function Eh(a){J.call(this,a,428)}
r(Eh,J);
var Fh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,423,424,425,426,427,117];var Gh={Bh:0,mh:1,sh:2,th:4,yh:8,uh:16,vh:32,Ah:64,zh:128,oh:256,qh:512,xh:1024,ph:2048,rh:4096,nh:8192,wh:16384};function Hh(a){J.call(this,a)}
r(Hh,J);function Ih(a){J.call(this,a)}
r(Ih,J);Ih.prototype.setVideoId=function(a){return kd(this,1,Jh,a)};
Ih.prototype.getPlaylistId=function(){return id(this,2===ld(this,Jh)?2:-1)};
var Jh=[1,2];function Kh(a){J.call(this,a,-1,Lh)}
r(Kh,J);var Lh=[3];function Mh(a){J.call(this,a,1)}
r(Mh,J);function Nh(a){J.call(this,a)}
r(Nh,J);var Oh;Oh=new function(a,b){this.h=a;this.fieldName=b;this.isRepeated=0;this.i=yd}(406606992,{Lo:0},Nh);function Ph(){Nh.apply(this,arguments)}
r(Ph,Nh);oe(Ph);function Qh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Rh=x.window,Sh,Th,Uh=(null==Rh?void 0:null==(Sh=Rh.yt)?void 0:Sh.config_)||(null==Rh?void 0:null==(Th=Rh.ytcfg)?void 0:Th.data_)||{},Vh,Wh=(null==Rh?void 0:null==(Vh=Rh.ytcfg)?void 0:Vh.obfuscatedData_)||[];function Xh(){Mh.apply(this,arguments)}
r(Xh,Mh);oe(Xh);var Yh=new Xh(Wh),Zh=Uh.EXPERIMENT_FLAGS;if(!Zh||!Zh.jspb_i18n_extension){var $h=new Ph;Oh.i(Yh,$h)}y("yt.config_",Uh,void 0);y("yt.configJspb_",Wh,void 0);function ai(){Qh(Uh,arguments)}
function A(a,b){return a in Uh?Uh[a]:b}
function bi(a){return A(a,void 0)}
function ci(){var a=Uh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=di(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ei(a,b){a=di(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function fi(){return A("EXPERIMENTS_TOKEN","")}
function di(a){var b=A("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:A("EXPERIMENT_FLAGS",{})[a]}
function gi(){var a=[],b=A("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=A("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var hi=[];function ii(a){hi.forEach(function(b){return b(a)})}
function ji(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ki(b)}}:a}
function ki(a,b,c,d){var e=z("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=A("ERRORS",[]),e.push([a,"ERROR",b,c,d]),ai("ERRORS",e));ii(a)}
function li(a,b,c,d){var e=z("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=A("ERRORS",[]),e.push([a,"WARNING",b,c,d]),ai("ERRORS",e))}
;function mi(){var a=ni;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function oi(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;var pi=/^[\w.]*$/,qi={q:!0,search_query:!0};function ri(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=si(f[0]||""),h=si(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(u){var k=u,m=f[0],q=String(ri);k.args=[{key:m,value:f[1],query:a,method:ti==q?"unchanged":q}];qi.hasOwnProperty(m)||li(k)}}return c}
var ti=String(ri);function ui(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function vi(a){"?"==a.charAt(0)&&(a=a.substr(1));return ri(a,"&")}
function wi(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),vi(1<a.length?a[1]:a[0])):{}}
function xi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=vi(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ic(a,e)+d}
function yi(a){if(!b)var b=window.location.href;var c=dc(1,a),d=ec(a);c&&d?(a=a.match(bc),b=b.match(bc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ec(b)==d&&(Number(dc(4,b))||null)==(Number(dc(4,a))||null):!0;return a}
function si(a){return a&&a.match(pi)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function zi(a){var b=Ai;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Yd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ta){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Cd:g;try{var h=g.history.length}catch(ta){h=0}e.u_his=h;var k;e.u_h=null==(k=Cd.screen)?void 0:k.height;var m;e.u_w=null==(m=Cd.screen)?void 0:m.width;var q;e.u_ah=null==(q=Cd.screen)?void 0:q.availHeight;var u;e.u_aw=
null==(u=Cd.screen)?void 0:u.availWidth;var C;e.u_cd=null==(C=Cd.screen)?void 0:C.colorDepth}catch(ta){}h=b.h;try{var v=h.screenX;var E=h.screenY}catch(ta){}try{var F=h.outerWidth;var H=h.outerHeight}catch(ta){}try{var R=h.innerWidth;var O=h.innerHeight}catch(ta){}try{var S=h.screenLeft;var ka=h.screenTop}catch(ta){}try{R=h.innerWidth,O=h.innerHeight}catch(ta){}try{var N=h.screen.availWidth;var Ba=h.screen.availTop}catch(ta){}v=[S,ka,v,E,N,Ba,F,H,R,O];try{var Oa=(b.h.top||window).document,ua="CSS1Compat"==
Oa.compatMode?Oa.documentElement:Oa.body;var G=(new Kd(ua.clientWidth,ua.clientHeight)).round()}catch(ta){G=new Kd(-12245933,-12245933)}Oa=G;G={};var Ca=void 0===Ca?x:Ca;ua=new df;Ca.SVGElement&&Ca.document.createElementNS&&ua.set(0);E=Sd();E["allow-top-navigation-by-user-activation"]&&ua.set(1);E["allow-popups-to-escape-sandbox"]&&ua.set(2);Ca.crypto&&Ca.crypto.subtle&&ua.set(3);Ca.TextDecoder&&Ca.TextEncoder&&ua.set(4);Ca=ef(ua);G.bc=Ca;G.bih=Oa.height;G.biw=Oa.width;G.brdim=v.join();b=b.i;b=(G.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,G.wgl=!!Cd.WebGLRenderingContext,G);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Ai=new function(){var a=window.document;this.h=window;this.i=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ui(zi(a))},void 0);Date.now();var Bi="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function Ci(){if(!Bi)return null;var a=Bi();return"open"in a?a:null}
function Di(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ei(a,b){"function"===typeof a&&(a=ji(a));return window.setTimeout(a,b)}
function Fi(a){window.clearTimeout(a)}
;var aj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},bj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" "))),cj=
!1;
function dj(a,b){b=void 0===b?{}:b;var c=yi(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in aj){var f=A(aj[e]);!f||!c&&ec(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ec(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ec(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!ec(a))b["X-YouTube-Ad-Signals"]=ui(zi(void 0));return b}
function ej(a){var b=window.location.search,c=ec(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!yi(a)||(c=document.location.hostname);var d=cc(dc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=vi(b),f={};gb(bj,function(g){e[g]&&(f[g]=e[g])});
return xi(a,f||{},!1)}
function fj(a,b){var c=b.format||"JSON";a=gj(a,b);var d=hj(a,b),e=!1,f=ij(a,function(k){if(!e){e=!0;h&&Fi(h);var m=Di(k),q=null,u=400<=k.status&&500>k.status,C=500<=k.status&&600>k.status;if(m||u||C)q=jj(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};u=b.context||x;m?b.onSuccess&&b.onSuccess.call(u,k,q):b.onError&&b.onError.call(u,k,q);b.onFinish&&b.onFinish.call(u,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Ei(function(){e||(e=!0,f.abort(),Fi(h),g.call(b.context||x,f))},b.timeout)}return f}
function gj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=A("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=xi(a,b||{},!0);return a}
function hj(a,b){var c=A("XSRF_FIELD_NAME",void 0),d=A("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=bi("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ec(a)&&!b.withCredentials&&ec(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=vi(e),zb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):hc(e));f=e||f&&!qb(f);!cj&&f&&"POST"!=
b.method&&(cj=!0,ki(Error("AJAX request with postData should use POST")));return e}
function jj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,li(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?kj(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=lj(g)})}d&&mj(e);
return e}
function mj(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Eb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Bb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else mj(a[b])}}
function kj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function lj(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ij(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ji(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Ci();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=ej(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=dj(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function nj(a){var b=this;this.h=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.h=c})}
function oj(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function pj(){var a=oj();a=Object.keys(cf).indexOf(a);return-1===a?null:a}
;function qj(a,b,c,d,e){je.set(""+a,b,{Oa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function rj(a){return je.get(""+a,void 0)}
function sj(){if(!je.isEnabled())return!1;if(!je.isEmpty())return!0;je.set("TESTCOOKIESENABLED","1",{Oa:60});if("1"!==je.get("TESTCOOKIESENABLED"))return!1;je.remove("TESTCOOKIESENABLED");return!0}
;var tj=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",tj,void 0);function uj(){this.h=A("ALT_PREF_COOKIE_NAME","PREF");this.i=A("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=rj(this.h);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(tj[d]=c.toString())}}}
uj.prototype.get=function(a,b){vj(a);wj(a);a=void 0!==tj[a]?tj[a].toString():null;return null!=a?a:b?b:""};
uj.prototype.set=function(a,b){vj(a);wj(a);if(null==b)throw Error("ExpectedNotNull");tj[a]=b.toString()};
function xj(a){return!!((yj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
uj.prototype.remove=function(a){vj(a);wj(a);delete tj[a]};
uj.prototype.clear=function(){for(var a in tj)delete tj[a]};
function wj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function vj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function yj(a){a=void 0!==tj[a]?tj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(uj);var zj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Aj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Bj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Cj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Dj(){var a=x.navigator;return a?a.connection:void 0}
function Ej(){var a=Dj();if(a){var b=zj[a.type||"unknown"]||"CONN_UNKNOWN";a=zj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Fj(){var a=Dj();if(null!=a&&a.effectiveType)return Cj.hasOwnProperty(a.effectiveType)?Cj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Gj(){return"INNERTUBE_API_KEY"in Uh&&"INNERTUBE_API_VERSION"in Uh}
function Hj(){return{innertubeApiKey:A("INNERTUBE_API_KEY",void 0),innertubeApiVersion:A("INNERTUBE_API_VERSION",void 0),ab:A("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),bb:A("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wb:A("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:A("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),xb:A("INNERTUBE_CONTEXT_HL",void 0),wb:A("INNERTUBE_CONTEXT_GL",void 0),Xb:A("INNERTUBE_HOST_OVERRIDE",void 0)||"",Zb:!!A("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Yb:!!A("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:A("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Ij(a){var b={client:{hl:a.xb,gl:a.wb,clientName:a.bb,clientVersion:a.innertubeContextClientVersion,configInfo:a.ab}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=fi();""!==c&&(b.client.experimentsToken=c);c=gi();0<c.length&&(b.request={internalExperimentFlags:c});Jj(a,void 0,b);Kj(a,void 0,b);Lj(void 0,b);Mj(a,void 0,b);Nj(void 0,b);A("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:A("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(vi(A("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Oj(a){var b=new Vg,c=new Og;D(c,1,a.xb);D(c,2,a.wb);D(c,16,a.Wb);D(c,17,a.innertubeContextClientVersion);if(a.ab){var d=a.ab,e=new Lg;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);I(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&D(c,65,d);d=fi();""!==d&&D(c,54,d);d=gi();if(0<d.length){e=new Qg;for(var f=0;f<d.length;f++){var g=new Jg;D(g,1,d[f].key);g.setValue(d[f].value);pd(e,15,Jg,g)}I(b,
5,e)}Jj(a,c);Kj(a,c);Lj(c);Mj(a,c);Nj(c);A("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Tg,D(a,3,A("DELEGATED_SESSION_ID")));a=p(Object.entries(vi(A("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);I(b,1,c);return b}
function Jj(a,b,c){a=a.bb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=md(b,Mg,96)||new Mg;var d=pj();null!==d&&D(c,3,d);I(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=oj())}
function Kj(a,b,c){a=a.bb;if(("WEB_REMIX"===a||76===a)&&!M("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=md(b,Ng,70))?d:new Ng;d=pj();null!==d&&D(c,10,d);I(b,70,c)}else if(c){var e;c.client.Ab=null!=(e=c.client.Ab)?e:{};c.client.Ab.webDisplayMode=oj()}}
function Lj(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Mj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=md(b,Lg,62))?d:new Lg;D(c,6,a.appInstallData);I(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Nj(a,b){var c=Ej();c&&(a?D(a,61,Aj[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Fj())&&(a?D(a,94,Bj[c]):b&&(b.client.effectiveConnectionType=c))}
function Pj(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&A("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":A("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||A("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Go||A("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().Fo:b=ne([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=A("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=A("DELEGATED_SESSION_ID")));return d}
;function Qj(a){a=Object.assign({},a);delete a.Authorization;var b=ne();if(b){var c=new xf;c.update(A("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Mc(c.digest(),3)}return a}
;function Rj(a){var b=new Cg;(b=b.isAvailable()?a?new Ig(b,a):b:null)||(a=new Dg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new yg(a):null;this.i=document.domain||window.location.hostname}
Rj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Uf(b))}catch(f){return}else e=escape(b);qj(a,e,c,this.i)};
Rj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=rj(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Rj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;je.remove(""+a,"/",void 0===b?"youtube.com":b)};var Sj=window,P=Sj.ytcsi&&Sj.ytcsi.now?Sj.ytcsi.now:Sj.performance&&Sj.performance.timing&&Sj.performance.now&&Sj.performance.timing.navigationStart?function(){return Sj.performance.timing.navigationStart+Sj.performance.now()}:function(){return(new Date).getTime()};var Tj;function Uj(){Tj||(Tj=new Rj("yt.innertube"));return Tj}
function Vj(a,b,c,d){if(d)return null;d=Uj().get("nextId",!0)||1;var e=Uj().get("requests",!0)||{};e[d]={method:a,request:b,authState:Qj(c),requestTime:Math.round(P())};Uj().set("nextId",d+1,86400,!0);Uj().set("requests",e,86400,!0);return d}
function Wj(a){var b=Uj().get("requests",!0)||{};delete b[a];Uj().set("requests",b,86400,!0)}
function Xj(a){var b=Uj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Qj(Pj(!1));vb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Yj(a,d.method,e,{}));delete b[c]}}Uj().set("requests",b,86400,!0)}}
;function Zj(){}
function ak(a,b){return bk(a,0,b)}
Zj.prototype.N=function(a,b){return bk(a,1,b)};
function ck(a,b){bk(a,2,b)}
function dk(a){var b=z("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function ek(){Zj.apply(this,arguments)}
r(ek,Zj);function fk(){ek.h||(ek.h=new ek);return ek.h}
function bk(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ei(a,c||0)}
ek.prototype.U=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=z("yt.scheduler.instance.cancelJob");b?b(a):Fi(a)}};
ek.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
ek.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};var bf=fk();var gk=Hc||Ic;function hk(a){var b=Sb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var ik=function(){var a;return function(){a||(a=new Rj("ytidb"));return a}}();
function jk(){var a;return null==(a=ik())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var kk=[],lk,mk=!1;function nk(){var a={};for(lk=new ok(void 0===a.handleError?pk:a.handleError,void 0===a.logEvent?qk:a.logEvent);0<kk.length;)switch(a=kk.shift(),a.type){case "ERROR":lk.handleError(a.payload);break;case "EVENT":lk.logEvent(a.eventType,a.payload)}}
function rk(a){mk||(lk?lk.handleError(a):(kk.push({type:"ERROR",payload:a}),10<kk.length&&kk.shift()))}
function sk(a,b){mk||(lk?lk.logEvent(a,b):(kk.push({type:"EVENT",eventType:a,payload:b}),10<kk.length&&kk.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(Q,Error);function tk(){try{return uk(),!0}catch(a){return!1}}
function uk(a){if(void 0!==A("DATASYNC_ID",void 0))return A("DATASYNC_ID",void 0);throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function vk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function wk(a){return a.substr(0,a.indexOf(":"))||a}
;var xk={},yk=(xk.AUTH_INVALID="No user identifier specified.",xk.EXPLICIT_ABORT="Transaction was explicitly aborted.",xk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",xk.MISSING_INDEX="Index not created.",xk.MISSING_OBJECT_STORES="Object stores not created.",xk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",xk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",xk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
xk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",xk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",xk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",xk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",xk),zk={},Ak=(zk.AUTH_INVALID="ERROR",zk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",zk.EXPLICIT_ABORT="IGNORED",zk.IDB_NOT_SUPPORTED="ERROR",zk.MISSING_INDEX=
"WARNING",zk.MISSING_OBJECT_STORES="ERROR",zk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",zk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",zk.QUOTA_EXCEEDED="WARNING",zk.QUOTA_MAYBE_EXCEEDED="WARNING",zk.UNKNOWN_ABORT="WARNING",zk.INCOMPATIBLE_DB_VERSION="WARNING",zk),Bk={},Ck=(Bk.AUTH_INVALID=!1,Bk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Bk.EXPLICIT_ABORT=!1,Bk.IDB_NOT_SUPPORTED=!1,Bk.MISSING_INDEX=!1,Bk.MISSING_OBJECT_STORES=!1,Bk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Bk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Bk.QUOTA_EXCEEDED=!1,Bk.QUOTA_MAYBE_EXCEEDED=!0,Bk.UNKNOWN_ABORT=!0,Bk.INCOMPATIBLE_DB_VERSION=!1,Bk);function Dk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?yk[a]:c;d=void 0===d?Ak[a]:d;e=void 0===e?Ck[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Dk.prototype)}
r(Dk,Q);function Ek(a,b){Dk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},yk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ek.prototype)}
r(Ek,Dk);function Fk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Fk.prototype)}
r(Fk,Error);var Gk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Hk(a,b,c,d){b=wk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Dk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Dk("QUOTA_EXCEEDED",a);if(Jc&&"UnknownError"===e.name)return new Dk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Fk)return new Dk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Gk.some(function(f){return e.message.includes(f)}))return new Dk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Dk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cb:e.name})];e.level="WARNING";return e}
function Ik(a,b,c){var d=jk();return new Dk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Jk(a){if(!a)throw Error();throw a;}
function Kk(a){return a}
function Lk(a){this.h=a}
function Mk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Mk.all=function(a){return new Mk(new Lk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ma:0};f.ma<a.length;f={ma:f.ma},++f.ma)Nk(Mk.resolve(a[f.ma]).then(function(g){return function(h){d[g.ma]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Mk.resolve=function(a){return new Mk(new Lk(function(b,c){a instanceof Mk?a.then(b,c):b(a)}))};
Mk.reject=function(a){return new Mk(new Lk(function(b,c){c(a)}))};
Mk.prototype.then=function(a,b){var c=this,d=null!=a?a:Kk,e=null!=b?b:Jk;return new Mk(new Lk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Ok(c,c,d,f,g)}),c.onRejected.push(function(){Pk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Ok(c,c,d,f,g):"REJECTED"===c.state.status&&Pk(c,c,e,f,g)}))};
function Nk(a,b){a.then(void 0,b)}
function Ok(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Mk?Qk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Pk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Mk?Qk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Qk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Mk?Qk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Rk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Sk(a){return new Promise(function(b,c){Rk(a,b,c)})}
function Tk(a){return new Mk(new Lk(function(b,c){Rk(a,b,c)}))}
;function Uk(a,b){return new Mk(new Lk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Vk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(P());this.i=!1}
l=Vk.prototype;l.add=function(a,b,c){return Wk(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Wk(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Wk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function Xk(a,b,c){a=a.h.createObjectStore(b,c);return new Yk(a)}
l.delete=function(a,b){return Wk(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Wk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function Zk(a,b){return Wk(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return Tk(c.h.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Wk(a,b,c,d){var e,f,g,h,k,m,q,u,C,v,E,F;return w(function(H){switch(H.h){case 1:var R={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?R.mode=c:Object.assign(R,c);e=R;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){H.s(3);break}g++;k=Math.round(P());wa(H,4);m=a.h.transaction(b,e.mode);R=new $k(m);R=al(R,d);return t(H,R,6);case 6:return q=H.i,u=Math.round(P()),bl(a,k,u,g,void 0,b.join(),e),H.return(q);case 4:C=ya(H);v=Math.round(P());E=Hk(C,a.h.name,b.join(),a.h.version);
if((F=E instanceof Dk&&!E.h)||g>=f)bl(a,k,v,g,E,b.join(),e),h=E;H.s(2);break;case 3:return H.return(Promise.reject(h))}})}
function bl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Dk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&sk("QUOTA_EXCEEDED",{dbName:wk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Dk&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),sk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),cl(a,!1,d,f,b,g.tag),rk(e)):cl(a,!0,d,f,b,g.tag)}
function cl(a,b,c,d,e,f){sk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function Yk(a){this.h=a}
l=Yk.prototype;l.add=function(a,b){return Tk(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return Tk(this.h.clear()).then(function(){})};
l.count=function(a){return Tk(this.h.count(a))};
function dl(a,b){return el(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?dl(this,a):Tk(this.h.delete(a))};
l.get=function(a){return Tk(this.h.get(a))};
l.index=function(a){try{return new fl(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Fk(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function el(a,b,c){a=a.h.openCursor(b.query,b.direction);return gl(a).then(function(d){return Uk(d,c)})}
function $k(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Dk;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function al(a,b){var c=new Promise(function(d,e){try{Nk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
$k.prototype.abort=function(){this.h.abort();this.i=!0;throw new Dk("EXPLICIT_ABORT");};
$k.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Yk(a),this.j.set(a,b));return b};
function fl(a){this.h=a}
l=fl.prototype;l.count=function(a){return Tk(this.h.count(a))};
l.delete=function(a){return hl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Tk(this.h.get(a))};
l.getKey=function(a){return Tk(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function hl(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return gl(a).then(function(d){return Uk(d,c)})}
function il(a,b){this.request=a;this.cursor=b}
function gl(a){return Tk(a).then(function(b){return b?new il(a,b):null})}
l=il.prototype;l.advance=function(a){this.cursor.advance(a);return gl(this.request)};
l.continue=function(a){this.cursor.continue(a);return gl(this.request)};
l.delete=function(){return Tk(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Tk(this.cursor.update(a))};function jl(a,b,c){return new Promise(function(d,e){function f(){C||(C=new Vk(g.result,{closed:u}));return C}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.Ac,q=c.upgrade,u=c.closed,C;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&sk("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:wk(a)});var E=f(),F=new $k(g.transaction);
q&&q(E,function(H){return v.oldVersion<H&&v.newVersion>=H},F);
F.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){sk("IDB_UNEXPECTEDLY_CLOSED",{dbName:wk(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function kl(a,b,c){c=void 0===c?{}:c;return jl(a,b,c)}
function ll(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),t(g,Sk(c),4);
if(2!=g.h)return xa(g,0);f=ya(g);throw Hk(f,a,"",-1);})}
;function ml(a){return new Promise(function(b){ck(function(){b()},a)})}
function nl(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
nl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return kl(a,b,c)};
nl.prototype.delete=function(a){a=void 0===a?{}:a;return ll(this.name,a)};
function ol(a,b){return new Dk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function pl(a,b){if(!b)throw Ik("openWithToken",wk(a.name));return a.open()}
nl.prototype.open=function(){function a(){var f,g,h,k,m,q,u,C,v,E;return w(function(F){switch(F.h){case 1:return g=null!=(f=Error().stack)?f:"",wa(F,2),t(F,c.j(c.name,c.options.version,e),4);case 4:h=F.i;for(var H=c.options,R=[],O=p(Object.keys(H.xa)),S=O.next();!S.done;S=O.next()){S=S.value;var ka=H.xa[S],N=void 0===ka.jc?Number.MAX_VALUE:ka.jc;!(h.h.version>=ka.Va)||h.h.version>=N||h.h.objectStoreNames.contains(S)||R.push(S)}k=R;if(0===k.length){F.s(5);break}m=Object.keys(c.options.xa);q=h.objectStoreNames();
if(c.m<ei("ytidb_reopen_db_retries",0))return c.m++,h.close(),rk(new Dk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),F.return(a());if(!(c.o<ei("ytidb_remake_db_retries",1))){F.s(6);break}c.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){F.s(7);break}return t(F,ml(c.i),8);case 8:c.i*=2;case 7:return t(F,c.delete(),9);case 9:return rk(new Dk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:q})),F.return(a());
case 6:throw new Ek(q,m);case 5:return F.return(h);case 2:u=ya(F);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){F.s(10);break}return t(F,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:C=F.i;v=C.h.version;if(void 0!==c.options.version&&v>c.options.version+1)throw C.close(),
c.l=!1,ol(c,v);return F.return(C);case 10:throw b(),u instanceof Error&&!M("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+g.substring(g.indexOf("\n")+1)),Hk(u,c.name,"",null!=(E=c.options.version)?E:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw ol(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ac:b,upgrade:this.options.upgrade};return this.h=d=a()};var ql=new nl("YtIdbMeta",{xa:{databases:{Va:1}},upgrade:function(a,b){b(1)&&Xk(a,"databases",{keyPath:"actualName"})}});
function rl(a,b){var c;return w(function(d){if(1==d.h)return t(d,pl(ql,b),2);c=d.i;return d.return(Wk(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Tk(f.h.put(a,void 0)).then(function(){})})}))})}
function sl(a,b){var c;return w(function(d){if(1==d.h)return a?t(d,pl(ql,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function tl(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],t(e,pl(ql,b),2)):3!=e.h?(d=e.i,t(e,Wk(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return el(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function ul(a){return tl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function vl(a,b,c){return tl(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function wl(a){var b,c;return w(function(d){if(1==d.h)return b=uk("YtIdbMeta hasAnyMeta other"),t(d,tl(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var xl,yl=new function(){}(new function(){});
function zl(){var a,b,c,d;return w(function(e){switch(e.h){case 1:a=jk();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=gk)f=/WebKit\/([0-9]+)/.exec(Sb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Sb()),f=!(f&&602<=parseInt(f[1],10)));if(f||uc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return t(e,rl(d,yl),4);case 4:return t(e,sl("yt-idb-test-do-not-use",yl),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function Al(){if(void 0!==xl)return xl;mk=!0;return xl=zl().then(function(a){mk=!1;var b;if(null!=(b=ik())&&b.h){var c;b={hasSucceededOnce:(null==(c=jk())?void 0:c.hasSucceededOnce)||a};var d;null==(d=ik())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Bl(){return z("ytglobal.idbToken_")||void 0}
function Cl(){var a=Bl();return a?Promise.resolve(a):Al().then(function(b){(b=b?yl:void 0)&&y("ytglobal.idbToken_",b,void 0);return b})}
;var Dl=0;function El(a,b){Dl||(Dl=bf.N(function(){var c,d,e,f,g;return w(function(h){switch(h.h){case 1:return t(h,Cl(),2);case 2:c=h.i;if(!c)return h.return();d=!0;wa(h,3);return t(h,vl(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.s(6);break}f=e[0];return t(h,ll(f.actualName),7);case 7:return t(h,sl(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),rk(g),d=!1;case 4:bf.U(Dl),Dl=0,d&&El(a,b),h.h=0}})}))}
function Fl(){var a;return w(function(b){return 1==b.h?t(b,Cl(),2):(a=b.i)?b.return(wl(a)):b.return(!1)})}
new Ad;function Gl(a){if(!tk())throw a=new Dk("AUTH_INVALID",{dbName:a}),rk(a),a;var b=uk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Hl(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.h){case 1:return f=null!=(e=Error().stack)?e:"",t(q,Cl(),2);case 2:g=q.i;if(!g)throw h=Ik("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),rk(h),h;vk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Gl(a);wa(q,3);return t(q,rl(k,g),5);case 5:return t(q,kl(k.actualName,b,d),6);case 6:return q.return(q.i);case 3:return m=ya(q),wa(q,7),t(q,sl(k.actualName,g),9);case 9:xa(q,
8);break;case 7:ya(q);case 8:throw m;}})}
function Il(a,b,c){c=void 0===c?{}:c;return Hl(a,b,!1,c)}
function Jl(a,b,c){c=void 0===c?{}:c;return Hl(a,b,!0,c)}
function Kl(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return t(e,Cl(),2);if(3!=e.h){c=e.i;if(!c)return e.return();vk(a);d=Gl(a);return t(e,ll(d.actualName,b),3)}return t(e,sl(d.actualName,c),0)})}
function Ll(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?t(e,ll(d.actualName,b),2):t(e,sl(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Ml(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return t(d,Cl(),2);if(3!=d.h){b=d.i;if(!b)return d.return();vk("LogsDatabaseV2");return t(d,ul(b),3)}c=d.i;return t(d,Ll(c,a,b),0)})}
function Nl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return t(d,Cl(),2);if(3!=d.h){c=d.i;if(!c)return d.return();vk(a);return t(d,ll(a,b),3)}return t(d,sl(a,c),0)})}
;function Ol(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.qa=function(){};
this.now=Date.now;this.wa=!1;var b;this.Jb=null!=(b=a.Jb)?b:100;var c;this.Hb=null!=(c=a.Hb)?c:1;var d;this.Fb=null!=(d=a.Fb)?d:2592E6;var e;this.Db=null!=(e=a.Db)?e:12E4;var f;this.Gb=null!=(f=a.Gb)?f:5E3;var g;this.v=null!=(g=a.v)?g:void 0;this.Ka=!!a.Ka;var h;this.Ja=null!=(h=a.Ja)?h:.1;var k;this.Qa=null!=(k=a.Qa)?k:10;a.handleError&&(this.handleError=a.handleError);a.qa&&(this.qa=a.qa);a.wa&&(this.wa=a.wa);this.D=a.D;this.V=a.V;this.K=a.K;this.J=a.J;this.da=a.da;this.hb=a.hb;this.gb=a.gb;this.v&&
(!this.D||this.D("networkless_logging"))&&Pl(this)}
function Pl(a){a.v&&!a.wa&&(a.h=!0,a.Ka&&Math.random()<=a.Ja&&a.K.Qb(a.v),Ql(a),a.J.H()&&a.Aa(),a.J.W(a.hb,a.Aa.bind(a)),a.J.W(a.gb,a.mb.bind(a)))}
l=Ol.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K.set(d,this.v).then(function(e){d.id=e;c.J.H()&&Rl(c,d)}).catch(function(e){Rl(c,d);
Sl(c,e)})}else this.da(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.H()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.h)return t(k,d.K.set(e,d.v).catch(function(m){Sl(d,m)}),2);
f(g,h);k.h=0})}}this.da(a,b,e.skipRetry)}else this.K.set(e,this.v).catch(function(g){d.da(a,b,e.skipRetry);
Sl(d,g)})}else this.da(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.K.oa(d.id,c.v):e=!0;c.J.ca&&c.D&&c.D("vss_network_hint")&&c.J.ca(!0);f(g,h)};
this.da(d.url,d.options);this.K.set(d,this.v).then(function(g){d.id=g;e&&c.K.oa(d.id,c.v)}).catch(function(g){Sl(c,g)})}else this.da(a,b)};
l.Aa=function(){var a=this;if(!this.v)throw Ik("throttleSend");this.i||(this.i=this.V.N(function(){var b;return w(function(c){if(1==c.h)return t(c,a.K.vb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?t(c,Rl(a,b),3):(a.mb(),c.return());a.i&&(a.i=0,a.Aa());c.h=0})},this.Jb))};
l.mb=function(){this.V.U(this.i);this.i=0};
function Rl(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!a.v)throw c=Ik("immediateSend"),c;if(void 0===b.id){e.s(2);break}return t(e,a.K.ac(b.id,a.v),3);case 3:(d=e.i)?b=d:a.qa(Error("The request cannot be found in the database."));case 2:if(Tl(a,b,a.Fb)){e.s(4);break}a.qa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return t(e,a.K.oa(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=Ul(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return t(e,a.K.oa(b.id,a.v),8);case 8:a.da(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Ul(a,b){if(!a.v)throw Ik("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:g=Vl(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Qa)){m.s(2);break}if(!a.J.ea){m.s(3);break}return t(m,a.J.ea(),3);case 3:if(a.J.H()){m.s(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.s(6);break}return t(m,a.K.ib(b.id,a.v,!1),6);case 6:return m.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Qa)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.s(8);break}return b.sendCount<a.Hb?t(m,a.K.ib(b.id,a.v),12):t(m,a.K.oa(b.id,a.v),8);case 12:a.V.N(function(){a.J.H()&&a.Aa()},a.Gb);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):t(h,a.K.oa(b.id,a.v),2);a.J.ca&&a.D&&a.D("vss_network_hint")&&a.J.ca(!0);d(e,f);h.h=0})};
return b}
function Tl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ql(a){if(!a.v)throw Ik("retryQueuedRequests");a.K.vb("QUEUED",a.v).then(function(b){b&&!Tl(a,b,a.Db)?a.V.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,a.K.ib(b.id,a.v),2);Ql(a);c.h=0})}):a.J.H()&&a.Aa()})}
function Sl(a,b){a.Lb&&!a.J.H()?a.Lb(b):a.handleError(b)}
function Vl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Wl(a,b){this.version=a;this.args=b}
;function Xl(a,b){this.topic=a;this.h=b}
Xl.prototype.toString=function(){return this.topic};var Yl=z("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ta;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;y("ytPubsub2Pubsub2Instance",Yl,void 0);var Zl=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Zl,void 0);var $l=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",$l,void 0);var am=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",am,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function bm(a,b){var c=cm();c&&c.publish.call(c,a.toString(),a,b)}
function dm(a){var b=em,c=cm();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Zl[d])try{if(f&&b instanceof Xl&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ia){var m=new h;h.ia=m.version}var q=h.ia}catch(H){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var u=q.construct;
var C=k.args,v=C.length;if(0<v){var E=Array(v);for(k=0;k<v;k++)E[k]=C[k];var F=E}else F=[];f=u.call(q,h,F)}catch(H){throw H.message="yt.pubsub2.Data.deserialize(): "+H.message,H;}}catch(H){throw H.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+H.message,H;}a.call(window,f)}catch(H){ki(H)}},am[b.toString()]?z("yt.scheduler.instance")?bf.N(g):Ei(g,0):g())});
Zl[d]=!0;$l[b.toString()]||($l[b.toString()]=[]);$l[b.toString()].push(d);return d}
function fm(){var a=gm,b=dm(function(c){a.apply(void 0,arguments);hm(b)});
return b}
function hm(a){var b=cm();b&&("number"===typeof a&&(a=[a]),gb(a,function(c){b.unsubscribeByKey(c);delete Zl[c]}))}
function cm(){return z("ytPubsub2Pubsub2Instance")}
;function im(a,b){nl.call(this,a,b);this.options=b;vk(a)}
r(im,nl);function jm(a,b){var c;return function(){c||(c=new im(a,b));return c}}
im.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.jb?Jl:Il)(a,b,Object.assign({},c))};
im.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.jb?Nl:Kl)(this.name,a)};
function km(a,b){return jm(a,b)}
;var lm;
function mm(){if(lm)return lm();var a={};lm=km("LogsDatabaseV2",{xa:(a.LogsRequestsStore={Va:2},a),jb:!1,upgrade:function(b,c,d){c(2)&&Xk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return lm()}
;function nm(a){return pl(mm(),a)}
function om(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},t(g,nm(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:A("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),t(g,Zk(d,e),3);f=g.i;c.Bc=P();pm(c);return g.return(f)})}
function qm(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.h)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},t(m,nm(b),2);if(3!=m.h)return d=m.i,e=A("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,t(m,Wk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(q){return hl(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(u){u.getValue()&&(k=u.getValue(),"NEW"===a&&(k.status="QUEUED",
u.update(k)))})}),3);
c.Bc=P();pm(c);return m.return(k)})}
function rm(a,b){var c;return w(function(d){if(1==d.h)return t(d,nm(b),2);c=d.i;return d.return(Wk(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Tk(f.h.put(g,void 0)).then(function(){return g})})}))})}
function sm(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.h)return t(e,nm(b),2);d=e.i;return e.return(Wk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Tk(g.h.put(h,void 0)).then(function(){return h})):Mk.resolve(void 0)})}))})}
function tm(a,b){var c;return w(function(d){if(1==d.h)return t(d,nm(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function um(a){var b,c;return w(function(d){if(1==d.h)return t(d,nm(a),2);b=d.i;c=P()-2592E6;return t(d,Wk(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return el(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function vm(){return w(function(a){return t(a,Ml(),0)})}
function pm(a){M("nwl_csi_killswitch")||.01>=Math.random()&&bm("nwl_transaction_latency_payload",a)}
;var wm={},xm=km("ServiceWorkerLogsDatabase",{xa:(wm.SWHealthLog={Va:1},wm),jb:!0,upgrade:function(a,b){b(1)&&Xk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function ym(a){return pl(xm(),a)}
function zm(a){var b,c;return w(function(d){if(1==d.h)return t(d,ym(a),2);b=d.i;c=P()-2592E6;return t(d,Wk(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return el(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Am(a){var b;return w(function(c){if(1==c.h)return t(c,ym(a),2);b=c.i;return t(c,b.clear("SWHealthLog"),0)})}
;var Bm={},Cm=0;
function Dm(a){var b=void 0===b?"":b;if(a)if(b)ij(a,void 0,"POST",b,void 0);else if(A("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))ij(a,void 0,"GET","",void 0);else{b:{try{var c=new cb({url:a});if(c.j&&c.i||c.l){var d=cc(dc(5,a)),e;if(!(e=!d||!d.endsWith("/aclk"))){var f=a.search(kc),g=jc(a,0,"ri",f);if(0>g)var h=null;else{var k=a.indexOf("&",g);if(0>k||k>f)k=f;g+=3;h=decodeURIComponent(a.substr(g,k-g).replace(/\+/g," "))}e="1"!==h}var m=!e;break b}}catch(u){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&
window.navigator.sendBeacon(a,"")){var q=!0;break b}}catch(u){}q=!1}b=q?!0:!1}else b=!1;b||Em(a)}}
function Em(a){var b=new Image,c=""+Cm++;Bm[c]=b;b.onload=b.onerror=function(){delete Bm[c]};
b.src=a}
;function Fm(){this.h=new Map;this.i=!1}
function Gm(){if(!Fm.h){var a=z("yt.networkRequestMonitor.instance")||new Fm;y("yt.networkRequestMonitor.instance",a,void 0);Fm.h=a}return Fm.h}
Fm.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Fm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Fm.prototype.removeParams=function(a){return a.split("?")[0]};
Fm.prototype.removeParams=Fm.prototype.removeParams;Fm.prototype.isEndpointCFR=Fm.prototype.isEndpointCFR;Fm.prototype.requestComplete=Fm.prototype.requestComplete;Fm.getInstance=Gm;var Hm;function Im(){Hm||(Hm=new Rj("yt.offline"));return Hm}
function Jm(a){if(M("offline_error_handling")){var b=Im().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Im().set("errors",b,2592E3,!0)}}
function Km(){if(M("offline_error_handling")){var a=Im().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Q(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;ki(c)}Im().set("errors",{},2592E3,!0)}}}
;var Lm=ei("network_polling_interval",3E4);function Mm(){Ve.call(this);var a=this;this.T=0;this.A=this.m=!1;this.j=this.Za();M("use_shared_nsm")?(this.i=af(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.W("networkstatus-online",function(){a.j=!0;a.A&&Km()}),this.i.W("networkstatus-offline",function(){a.j=!1}))):(Nm(this),Om(this))}
r(Mm,Ve);function Pm(){if(!Mm.h){var a=z("yt.networkStatusManager.instance")||new Mm;y("yt.networkStatusManager.instance",a,void 0);Mm.h=a}return Mm.h}
l=Mm.prototype;l.H=function(){if(M("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.H()}return this.j};
l.ca=function(a){if(M("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.j&&(this.j=a)};
l.cc=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.T||Qm(this))};
l.Za=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Tb=function(){this.A=!0};
l.W=function(a,b){return M("use_shared_nsm")&&this.i?this.i.W(a,b):Ve.prototype.W.call(this,a,b)};
function Om(a){window.addEventListener("online",function(){return w(function(b){if(1==b.h)return t(b,a.ea(),2);a.A&&Km();b.h=0})})}
function Nm(a){window.addEventListener("offline",function(){return w(function(b){return t(b,a.ea(),0)})})}
function Qm(a){a.T=ak(function(){return w(function(b){if(1==b.h)return a.j?a.Za()||!a.m?b.s(3):t(b,a.ea(),3):t(b,a.ea(),3);Qm(a);b.h=0})},Lm)}
l.ea=function(a){var b=this;if(M("use_shared_nsm")&&this.i){var c=Ze(this.i,a);c.then(function(d){M("use_cfr_monitor")&&Gm().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,wa(k,2,3),e&&(b.M=bf.N(function(){e.abort()},a||2E4)),t(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:za(k);M("use_cfr_monitor")&&Gm().requestComplete("generate_204",h);b.u=void 0;b.M&&bf.U(b.M);h!==b.j&&(b.j=h,b.j&&b.m?We(b,"ytnetworkstatus-online"):b.m&&We(b,"ytnetworkstatus-offline"));d(h);Aa(k);break;case 2:ya(k),h=!1,k.s(3)}})})};
Mm.prototype.sendNetworkCheckRequest=Mm.prototype.ea;Mm.prototype.listen=Mm.prototype.W;Mm.prototype.enableErrorFlushing=Mm.prototype.Tb;Mm.prototype.getWindowStatus=Mm.prototype.Za;Mm.prototype.monitorNetworkStatusChange=Mm.prototype.cc;Mm.prototype.networkStatusHint=Mm.prototype.ca;Mm.prototype.isNetworkAvailable=Mm.prototype.H;Mm.getInstance=Pm;function Rm(a){a=void 0===a?{}:a;Ve.call(this);var b=this;this.j=this.M=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=Pm();var c=z("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.sb);a.zb&&(c=z("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=z("yt.networkStatusManager.instance.listen").bind(this.i))a.Sa?(this.Sa=a.Sa,c(this.u,
function(){Sm(b,"publicytnetworkstatus-online")}),c(this.m,function(){Sm(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){We(b,"publicytnetworkstatus-online")}),c(this.m,function(){We(b,"publicytnetworkstatus-offline")}))}
r(Rm,Ve);Rm.prototype.H=function(){var a=z("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Rm.prototype.ca=function(a){var b=z("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Rm.prototype.ea=function(a){var b=this,c;return w(function(d){c=z("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return M("skip_network_check_if_cfr")&&Gm().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ca((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.H())})):c?d.return(c(a)):d.return(!0)})};
function Sm(a,b){a.Sa?a.j?(bf.U(a.M),a.M=bf.N(function(){a.A!==b&&(We(a,b),a.A=b,a.j=P())},a.Sa-(P()-a.j))):(We(a,b),a.A=b,a.j=P()):We(a,b)}
;var Tm;function Um(){Ol.call(this,{K:{Qb:um,oa:tm,vb:qm,ac:rm,ib:sm,set:om},J:Vm(),handleError:ki,qa:li,da:Wm,now:P,Lb:Jm,V:fk(),hb:"publicytnetworkstatus-online",gb:"publicytnetworkstatus-offline",Ka:!0,Ja:.1,Qa:ei("potential_esf_error_limit",10),D:M,wa:!(tk()&&Xm())});this.j=new Ad;M("networkless_immediately_drop_all_requests")&&vm();Nl("LogsDatabaseV2")}
r(Um,Ol);function Ym(){var a=z("yt.networklessRequestController.instance");a||(a=new Um,y("yt.networklessRequestController.instance",a,void 0),M("networkless_logging")&&Cl().then(function(b){a.v=b;Pl(a);a.j.resolve();a.Ka&&Math.random()<=a.Ja&&a.v&&zm(a.v);M("networkless_immediately_drop_sw_health_store")&&Zm(a)}));
return a}
Um.prototype.writeThenSend=function(a,b){b||(b={});tk()||(this.h=!1);Ol.prototype.writeThenSend.call(this,a,b)};
Um.prototype.sendThenWrite=function(a,b,c){b||(b={});tk()||(this.h=!1);Ol.prototype.sendThenWrite.call(this,a,b,c)};
Um.prototype.sendAndWrite=function(a,b){b||(b={});tk()||(this.h=!1);Ol.prototype.sendAndWrite.call(this,a,b)};
Um.prototype.awaitInitialization=function(){return this.j.promise};
function Zm(a){var b;w(function(c){if(!a.v)throw b=Ik("clearSWHealthLogsDb"),b;return c.return(Am(a.v).catch(function(d){a.handleError(d)}))})}
function Wm(a,b,c){M("use_cfr_monitor")&&$m(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?Dm(a):fj(a,b)}
function Vm(){Tm||(Tm=new Rm({zb:!0,sb:!0}));return Tm}
function $m(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Gm().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Gm().requestComplete(a,!0);d(e,f)}}
function Xm(){return M("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==ec(document.location.toString()):!0}
;var an=!1,bn=0,cn=0,dn,en=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:an,potentialEsfErrorCounter:cn};y("ytNetworklessLoggingInitializationOptions",en,void 0);
function fn(){var a;w(function(b){switch(b.h){case 1:return t(b,Cl(),2);case 2:a=b.i;if(!a||!tk()&&!M("nwl_init_require_datasync_id_killswitch")||!Xm()){b.s(0);break}an=!0;en.isNwlInitialized=an;if(!M("use_new_nwl_initialization")){b.s(4);break}return t(b,Ym().awaitInitialization(),5);case 5:return b.return();case 4:return t(b,Nl("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.s(7);break}return t(b,um(a),8);case 8:return t(b,zm(a),7);case 7:gn();hn().H()&&jn();hn().W("publicytnetworkstatus-online",
jn);hn().W("publicytnetworkstatus-offline",kn);if(!M("networkless_immediately_drop_sw_health_store")){b.s(10);break}return t(b,ln(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return t(b,vm(),0);b.s(0)}})}
function mn(a,b){function c(d){var e=hn().H();if(!nn()||!d||e&&M("vss_networkless_bypass_write"))on(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};om(f,d).then(function(g){f.id=g;hn().H()&&pn(f)}).catch(function(g){pn(f);
hn().H()?ki(g):Jm(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Cl().then(function(d){c(d)}):c(Bl())}
function qn(a,b){function c(d){if(nn()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&Gm().requestComplete(e.url,!0);void 0!==e.id?tm(e.id,d):f=!0;M("vss_network_hint")&&hn().ca(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Gm().requestComplete(e.url,!1);h(k,m)}}on(e.url,e.options);
om(e,d).then(function(k){e.id=k;f&&tm(e.id,d)}).catch(function(k){hn().H()?ki(k):Jm(k)})}else on(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Cl().then(function(d){c(d)}):c(Bl())}
function jn(){var a=Bl();if(!a)throw Ik("throttleSend");bn||(bn=bf.N(function(){var b;return w(function(c){if(1==c.h)return t(c,qm("NEW",a),2);if(3!=c.h)return b=c.i,b?t(c,pn(b),3):(kn(),c.return());bn&&(bn=0,jn());c.h=0})},100))}
function kn(){bf.U(bn);bn=0}
function pn(a){var b,c,d;return w(function(e){switch(e.h){case 1:b=Bl();if(!b)throw c=Ik("immediateSend"),c;if(void 0===a.id){e.s(2);break}return t(e,rm(a.id,b),3);case 3:(d=e.i)?a=d:li(Error("The request cannot be found in the database."));case 2:if(rn(a,2592E6)){e.s(4);break}li(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return t(e,tm(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=sn(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return t(e,tm(a.id,b),8);case 8:on(a.url,a.options,!!a.skipRetry),e.h=0}})}
function sn(a){var b=Bl();if(!b)throw Ik("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.h){case 1:M("use_cfr_monitor")&&Gm().requestComplete(a.url,!1);g=Vl(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&tn()<=ei("potential_esf_error_limit",10))){m.s(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||Gm().isEndpointCFR(a.url))){m.s(3);break}return t(m,hn().ea(),3);case 3:if(hn().H()){m.s(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.s(6);break}return t(m,sm(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&tn()>ei("potential_esf_error_limit",10))return m.return();z("ytNetworklessLoggingInitializationOptions")&&en.potentialEsfErrorCounter++;cn++;if(void 0===(null==(k=a)?void 0:k.id)){m.s(8);break}return 1>a.sendCount?t(m,sm(a.id,b),12):t(m,tm(a.id,b),8);case 12:bf.N(function(){hn().H()&&jn()},5E3);
case 8:c(e,f),m.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return M("use_cfr_monitor")&&Gm().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):t(h,tm(a.id,b),2);M("vss_network_hint")&&hn().ca(!0);d(e,f);h.h=0})};
return a}
function rn(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function gn(){var a=Bl();if(!a)throw Ik("retryQueuedRequests");qm("QUEUED",a).then(function(b){b&&!rn(b,12E4)?bf.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):t(c,sm(b.id,a),2);gn();c.h=0})}):hn().H()&&jn()})}
function ln(){var a,b;return w(function(c){a=Bl();if(!a)throw b=Ik("clearSWHealthLogsDb"),b;return c.return(Am(a).catch(function(d){ki(d)}))})}
function hn(){if(M("use_new_nwl"))return Vm();dn||(dn=new Rm({zb:!0,sb:!0}));return dn}
function on(a,b,c){c&&0===Object.keys(b).length?Dm(a):fj(a,b)}
function nn(){return z("ytNetworklessLoggingInitializationOptions")?en.isNwlInitialized:an}
function tn(){return z("ytNetworklessLoggingInitializationOptions")?en.potentialEsfErrorCounter:cn}
;function un(a){var b=this;this.config_=null;a?this.config_=a:Gj()&&(this.config_=Hj());ak(function(){Xj(b)},5E3)}
un.prototype.isReady=function(){!this.config_&&Gj()&&(this.config_=Hj());return!!this.config_};
function Yj(a,b,c,d){function e(E){E=void 0===E?!1:E;var F;if(d.retry&&"www.youtube-nocookie.com"!=h&&(E||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(F=Vj(b,c,m,k)),F)){var H=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(O,S){Wj(F);H(O,S)};
c.onFetchSuccess=function(O,S){Wj(F);R(O,S)}}try{E&&d.retry&&!d.Bb.bypassNetworkless?(g.method="POST",d.Bb.writeThenSend?M("use_new_nwl_wts")?Ym().writeThenSend(v,g):mn(v,g):M("use_new_nwl_saw")?Ym().sendAndWrite(v,g):qn(v,g)):(g.method="POST",g.postParams||(g.postParams={}),fj(v,g))}catch(O){if("InvalidAccessError"==O.name)F&&(Wj(F),F=0),li(Error("An extension is blocking network request."));
else throw O;}F&&ak(function(){Xj(a)},5E3)}
!A("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&li(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);ki(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(E,F){if(d.onSuccess)d.onSuccess(F)},
onFetchSuccess:function(E){if(d.onSuccess)d.onSuccess(E)},
onError:function(E,F){if(d.onError)d.onError(F)},
onFetchError:function(E){if(d.onError)d.onError(E)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Xb)&&(h=f);var k=a.config_.Zb||!1,m=Pj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,u={alt:"json"},C=a.config_.Yb&&f;C=C&&f.startsWith("Bearer");C||(u.key=a.config_.innertubeApiKey);var v=xi(""+h+q,u||{},!0);M("use_new_nwl")&&Ym().h||!M("use_new_nwl")&&
nn()?Al().then(function(E){e(E)}):e(!1)}
;var vn={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},wn={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var xn=0,yn=wc?"webkit":vc?"moz":tc?"ms":sc?"o":"";y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++xn},void 0);var zn={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function An(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in zn||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Bn(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
An.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
An.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
An.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",pb,void 0);var Cn=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",Cn,void 0);
function Dn(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&vb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var En=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Fn(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Dn(a,b,c,d);if(e)return e;e=++Cn.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new An(h);if(!Nd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new An(h);
h.currentTarget=a;return c.call(a,h)};
g=ji(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),En()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function Gn(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?En()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;var Hn=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function In(a){this.L=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.T=Fn(window,"mousemove",Xa(this.Y,this));a=Xa(this.M,this);"function"===typeof a&&(a=ji(a));this.fa=window.setInterval(a,25)}
$a(In,K);In.prototype.Y=function(a){void 0===a.h&&Bn(a);var b=a.h;void 0===a.i&&Bn(a);this.i=new Jd(b,a.i)};
In.prototype.M=function(){if(this.i){var a=Hn();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
In.prototype.I=function(){window.clearInterval(this.fa);Gn(this.T)};var Jn={};
function Kn(a){var b=void 0===a?{}:a;a=void 0===b.fc?!1:b.fc;b=void 0===b.Ub?!0:b.Ub;if(null==z("_lact",window)){var c=parseInt(A("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&Ln();Fn(document,"keydown",Ln);Fn(document,"keyup",Ln);Fn(document,"mousedown",Ln);Fn(document,"mouseup",Ln);a?Fn(window,"touchmove",function(){Mn("touchmove",200)},{passive:!0}):(Fn(window,"resize",function(){Mn("resize",200)}),b&&Fn(window,"scroll",function(){Mn("scroll",200)}));
new In(function(){Mn("mouse",100)});
Fn(document,"touchstart",Ln,{passive:!0});Fn(document,"touchend",Ln,{passive:!0})}}
function Mn(a,b){Jn[a]||(Jn[a]=!0,bf.N(function(){Ln();Jn[a]=!1},b))}
function Ln(){null==z("_lact",window)&&Kn();var a=Date.now();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function Nn(){var a=z("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var On=x.ytPubsubPubsubInstance||new L,Pn=x.ytPubsubPubsubSubscribedKeys||{},Qn=x.ytPubsubPubsubTopicToKeys||{},Rn=x.ytPubsubPubsubIsSynchronous||{};function Sn(a,b){var c=Tn();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Pn[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Rn[a]?f():Ei(f,0)}catch(g){ki(g)}},void 0);
Pn[d]=!0;Qn[a]||(Qn[a]=[]);Qn[a].push(d);return d}return 0}
function Un(a){var b=Tn();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete Pn[c]}))}
function Vn(a,b){var c=Tn();c&&c.publish.apply(c,arguments)}
function Wn(a){var b=Tn();if(b)if(b.clear(a),a)no(a);else for(var c in Qn)no(c)}
function Tn(){return x.ytPubsubPubsubInstance}
function no(a){Qn[a]&&(a=Qn[a],gb(a,function(b){Pn[b]&&delete Pn[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.ta;L.prototype.publish=L.prototype.ja;L.prototype.clear=L.prototype.clear;y("ytPubsubPubsubInstance",On,void 0);y("ytPubsubPubsubTopicToKeys",Qn,void 0);y("ytPubsubPubsubIsSynchronous",Rn,void 0);y("ytPubsubPubsubSubscribedKeys",Pn,void 0);var Mo=ei("initial_gel_batch_timeout",2E3),No=Math.pow(2,16)-1,Oo=void 0;function Po(){this.j=this.h=this.i=0}
var Qo=new Po,Ro=new Po,So=!0,To=x.ytLoggingTransportGELQueue_||new Map;y("ytLoggingTransportGELQueue_",To,void 0);var Uo=x.ytLoggingTransportGELProtoQueue_||new Map;y("ytLoggingTransportGELProtoQueue_",Uo,void 0);var Vo=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",Vo,void 0);var Wo=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",Wo,void 0);
function Xo(a,b){if("log_event"===a.endpoint){var c=Yo(a),d=To.get(c)||[];To.set(c,d);d.push(a.payload);Zo(b,d,c)}}
function $o(a,b){if("log_event"===a.endpoint){var c=Yo(a,!0),d=Uo.get(c)||[];Uo.set(c,d);a=td(a.payload);d.push(a);Zo(b,d,c,!0)}}
function Zo(a,b,c,d){d=void 0===d?!1:d;a&&(Oo=new a);a=ei("tvhtml5_logging_max_batch")||ei("web_logging_max_batch")||100;var e=P(),f=d?Ro.j:Qo.j;b.length>=a?ap({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(bp(d),d?Ro.j=e:Qo.j=e)}
function cp(a,b){if("log_event"===a.endpoint){var c=Yo(a),d=new Map;d.set(c,[a.payload]);b&&(Oo=new b);return new ag(function(e){Oo&&Oo.isReady()?dp(d,e,{bypassNetworkless:!0},!0):e()})}}
function ep(a,b){if("log_event"===a.endpoint){var c=Yo(a,!0),d=new Map;d.set(c,[td(a.payload)]);b&&(Oo=new b);return new ag(function(e){Oo&&Oo.isReady()?fp(d,e,{bypassNetworkless:!0},!0):e()})}}
function Yo(a,b){var c="";if(a.va)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ih;c.videoId?d.setVideoId(c.videoId):c.playlistId&&kd(d,2,Jh,c.playlistId);Wo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Vo[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function ap(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new ag(function(d){c?(Fi(Ro.i),Fi(Ro.h),Ro.h=0):(Fi(Qo.i),Fi(Qo.h),Qo.h=0);if(Oo&&Oo.isReady())if(void 0!==b)if(c){var e=new Map,f=Uo.get(b)||[];e.set(b,f);fp(e,d,a);Uo.delete(b)}else e=new Map,f=To.get(b)||[],e.set(b,f),dp(e,d,a),To.delete(b);else c?(fp(Uo,d,a),Uo.clear()):(dp(To,d,a),To.clear());else bp(c),d()})}
function bp(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Qo.h||a&&!Ro.h)){var b=Ei(function(){ap({writeThenSend:!0},void 0,a)},6E4);
a?Ro.h=b:Qo.h=b}Fi(a?Ro.i:Qo.i);b=A("LOGGING_BATCH_TIMEOUT",ei("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&So&&(b=Mo);b=Ei(function(){ap({writeThenSend:!0},void 0,a)},b);
a?Ro.i=b:Qo.i=b}
function dp(a,b,c,d){var e=Oo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=xb({context:Ij(e.config_||Hj())});k.events=m;(m=Vo[h])&&gp(k,h,m);delete Vo[h];h="visitorOnlyApprovedKey"===h;hp(k,f,h);ip(c);Yj(e,"log_event",k,jp(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
So=!1}}
function fp(a,b,c,d){var e=Oo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=new Kh;var q=Oj(e.config_||Hj());I(k,1,q);m=kp(m);for(q=0;q<m.length;q++)pd(k,3,Eh,m[q]);(m=Wo[h])&&lp(k,h,m);delete Wo[h];h="visitorOnlyApprovedKey"===h;mp(k,f,h);ip(c);k=td(k);h=jp(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Yj(e,"log_event","",h);So=!1}}
function ip(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function jp(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Bb:a,va:b,Io:!!e,headers:{},postBodyFormat:"",postBody:""}}
function hp(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=A("EVENT_ID",void 0))&&(c=np(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function mp(a,b,c){D(a,2,b);if(!c&&(b=A("EVENT_ID",void 0))){c=np();var d=new Hh;D(d,1,b);D(d,2,c);I(a,5,d)}}
function np(){var a=A("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*No/2));a++;a>No&&(a=1);ai("BATCH_CLIENT_COUNTER",a);return a}
function gp(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function lp(a,b,c){if(id(c,1===ld(c,Jh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;I(a,4,c);a=md(a,Vg,1)||new Vg;c=md(a,Tg,3)||new Tg;var e=new Sg;e.setToken(b);D(e,1,d);pd(c,12,Sg,e);I(a,3,c)}
function kp(a){for(var b=[],c=0;c<a.length;c++)try{var d=b,e=d.push;var f=String(a[c]),g=Eh;if(null==f||""==f)var h=new g;else{var k=JSON.parse(f);if(!Array.isArray(k))throw Error("Expected to deserialize an Array but got "+Pa(k)+": "+k);sd=k;var m=new g(k);sd=null;h=m}e.call(d,h)}catch(q){ki(new Q("Transport failed to deserialize "+String(a[c])))}return b}
;var op=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",op,void 0);
function pp(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(wn[a]||vn[a])return}else if(M("lr_drop_other_payloads")&&wn[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Nn();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.X&&(a=e.context,b=d.X,b={index:qp(b),groupKey:b},a.sequence=b,d.tb&&delete op[d.X]);(d.oc?cp:Xo)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
va:d.va},c)}
function qp(a){op[a]=a in op?op[a]+1:0;return op[a]}
;function qk(a,b,c){c=void 0===c?{}:c;var d=un;A("ytLoggingEventsDefaultDisabled",!1)&&un==un&&(d=null);pp(a,b,d,c)}
;var rp=[{fb:function(a){return"Cannot read property '"+a.key+"'"},
Pa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{fb:function(a){return"Cannot call '"+a.key+"'"},
Pa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{fb:function(a){return a.key+" is not defined"},
Pa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var tp={ha:[],ga:[{ka:sp,weight:500}]};function sp(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function up(){this.ga=[];this.ha=[]}
var vp;function wp(){if(!vp){var a=vp=new up;a.ha.length=0;a.ga.length=0;tp.ha&&a.ha.push.apply(a.ha,tp.ha);tp.ga&&a.ga.push.apply(a.ga,tp.ga)}return vp}
;var xp=new L;function yp(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=zp(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=zp(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=zp(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function zp(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ap(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Bp(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=yp(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Bp(e+".ve",f,g,h):0;d+=g;d+=Bp(e,a[e],b,c);if(500<d)break}}else c[b]=Cp(a),d+=c[b].length;else c[b]=Cp(a),d+=c[b].length;return d}
function Bp(a,b,c,d){c+="."+a;a=Cp(b);d[c]=a;return c.length+a.length}
function Cp(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Dp=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",Dp,void 0);function Ep(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Nn();d=new Dh;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.X){e=c.X;var f=qp(e),g=new Ch;D(g,2,f);D(g,1,e);I(d,3,g);c.tb&&delete Dp[c.X]}I(a,33,d);(c.oc?ep:$o)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,va:c.va},b)}
;function Fp(a,b){b=void 0===b?{}:b;var c=!1;A("ytLoggingEventsDefaultDisabled",!1)&&un===un&&(c=!0);Ep(a,c?null:un,b)}
;function Gp(a,b,c){var d=new Eh;od(d,72,Fh,a);c?Ep(d,c,b):Fp(d,b)}
function Hp(a,b,c){var d=new Eh;od(d,73,Fh,a);c?Ep(d,c,b):Fp(d,b)}
function Ip(a,b,c){var d=new Eh;od(d,78,Fh,a);c?Ep(d,c,b):Fp(d,b)}
function Jp(a,b,c){var d=new Eh;od(d,208,Fh,a);c?Ep(d,c,b):Fp(d,b)}
function Kp(a,b,c){var d=new Eh;od(d,156,Fh,a);c?Ep(d,c,b):Fp(d,b)}
function Lp(a,b,c){var d=new Eh;od(d,215,Fh,a);c?Ep(d,c,b):Fp(d,b)}
function Mp(a,b,c){var d=new Eh;od(d,111,Fh,a);c?Ep(d,c,b):Fp(d,b)}
;var Np=new Set,Op=0,Pp=0,Qp=0,Rp=[],Sp=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function pk(a){Tp(a)}
function Up(a){Tp(a,"WARNING")}
function Tp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||A("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||A("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Op)){var m=Rp,q=te(a),u=q.message||"Unknown Error",C=q.name||"UnknownError",v=q.stack||a.i||"Not available";if(v.startsWith(C+": "+u)){var E=v.split("\n");E.shift();v=E.join("\n")}var F=q.lineNumber||"Not available",H=q.fileName||"Not available",R=v,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var S=0;S<a.args.length&&!(O=Ap(a.args[S],"params."+S,g,O),500<=O);S++);else if(a.hasOwnProperty("params")&&
a.params){var ka=a.params;if("object"===typeof a.params)for(var N in ka){if(ka[N]){var Ba="params."+N,Oa=Cp(ka[N]);g[Ba]=Oa;O+=Ba.length+Oa.length;if(500<O)break}}else g.params=Cp(ka)}if(m.length)for(var ua=0;ua<m.length&&!(O=Ap(m[ua],"params.context."+ua,g,O),500<=O);ua++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var G={message:u,name:C,lineNumber:F,fileName:H,stack:R,params:g,sampleWeight:1},Ca=Number(a.columnNumber);isNaN(Ca)||(G.lineNumber=G.lineNumber+
":"+Ca);if("IGNORED"===a.level)var ta=0;else a:{for(var Xn=wp(),Yn=p(Xn.ha),Gi=Yn.next();!Gi.done;Gi=Yn.next()){var Zn=Gi.value;if(G.message&&G.message.match(Zn.No)){ta=Zn.weight;break a}}for(var $n=p(Xn.ga),Hi=$n.next();!Hi.done;Hi=$n.next()){var ao=Hi.value;if(ao.ka(G)){ta=ao.weight;break a}}ta=1}G.sampleWeight=ta;for(var bo=p(rp),Ii=bo.next();!Ii.done;Ii=bo.next()){var Ji=Ii.value;if(Ji.Pa[G.name])for(var co=p(Ji.Pa[G.name]),Ki=co.next();!Ki.done;Ki=co.next()){var eo=Ki.value,Sf=G.message.match(eo.regexp);
if(Sf){G.params["params.error.original"]=Sf[0];for(var Li=eo.groups,fo={},cd=0;cd<Li.length;cd++)fo[Li[cd]]=Sf[cd+1],G.params["params.error."+Li[cd]]=Sf[cd+1];G.message=Ji.fb(fo);break}}}G.params||(G.params={});var go=wp();G.params["params.errorServiceSignature"]="msg="+go.ha.length+"&cb="+go.ga.length;G.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(G.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Eb("sample").constructor!==
Cb&&(G.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(G);if(0!==G.sampleWeight&&!Np.has(G.message)){if("ERROR"===h){xp.ja("handleError",G);if(M("record_app_crashed_web")&&0===Qp&&1===G.sampleWeight)if(Qp++,M("errors_via_jspb")){var Mi=new hh;D(Mi,1,1);if(!M("report_client_error_with_app_crash_ks")){var ho=new ch;D(ho,1,G.message);var io=new dh;I(io,3,ho);var jo=new eh;I(jo,5,io);var ko=new fh;I(ko,9,jo);I(Mi,4,ko)}var lo=new Eh;od(lo,20,Fh,Mi);Fp(lo,void 0)}else{var mo=
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(mo.systemHealth={crashData:{clientError:{logMessage:{message:G.message}}}});qk("appCrashed",mo)}Pp++}else"WARNING"===h&&xp.ja("handleWarning",G);if(M("kevlar_gel_error_routing"))a:{var ae=h;if(M("errors_via_jspb")){if(Vp())var oo=void 0;else{var dd=new $g;D(dd,1,G.stack);G.fileName&&D(dd,4,G.fileName);var rb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==rb.length&&(1!==rb.length||isNaN(Number(rb[0]))?
2!==rb.length||isNaN(Number(rb[0]))||isNaN(Number(rb[1]))||(D(dd,2,Number(rb[0])),D(dd,3,Number(rb[1]))):D(dd,2,Number(rb[0])));var nc=new ch;D(nc,1,G.message);D(nc,3,G.name);D(nc,6,G.sampleWeight);"ERROR"===ae?D(nc,2,2):"WARNING"===ae?D(nc,2,1):D(nc,2,0);var Ni=new ah;D(Ni,1,!0);od(Ni,3,bh,dd);var Nb=new Xg;D(Nb,3,window.location.href);for(var po=A("FEXP_EXPERIMENTS",[]),Oi=0;Oi<po.length;Oi++){var Ht=po[Oi];Xc(Nb);jd(Nb,5).push(Ht)}var Pi=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if(!ci()&&
Pi)for(var qo=p(Object.keys(Pi)),oc=qo.next();!oc.done;oc=qo.next()){var ro=oc.value,Qi=new Zg;D(Qi,1,ro);Qi.setValue(String(Pi[ro]));pd(Nb,4,Zg,Qi)}var Ri=G.params;if(Ri){var so=p(Object.keys(Ri));for(oc=so.next();!oc.done;oc=so.next()){var to=oc.value,Si=new Zg;D(Si,1,"client."+to);Si.setValue(String(Ri[to]));pd(Nb,4,Zg,Si)}}var uo=bi("SERVER_NAME"),vo=bi("SERVER_VERSION");if(uo&&vo){var Ti=new Zg;D(Ti,1,"server.name");Ti.setValue(uo);pd(Nb,4,Zg,Ti);var Ui=new Zg;D(Ui,1,"server.version");Ui.setValue(vo);
pd(Nb,4,Zg,Ui)}var Tf=new dh;I(Tf,1,Nb);I(Tf,2,Ni);I(Tf,3,nc);oo=Tf}var wo=oo;if(!wo)break a;var xo=new Eh;od(xo,163,Fh,wo);Fp(xo,void 0)}else{if(Vp())var yo=void 0;else{var be={stackTrace:G.stack};G.fileName&&(be.filename=G.fileName);var sb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==sb.length&&(1!==sb.length||isNaN(Number(sb[0]))?2!==sb.length||isNaN(Number(sb[0]))||isNaN(Number(sb[1]))||(be.lineNumber=Number(sb[0]),be.columnNumber=Number(sb[1])):be.lineNumber=Number(sb[0]));
var Vi={level:"ERROR_LEVEL_UNKNOWN",message:G.message,errorClassName:G.name,sampleWeight:G.sampleWeight};"ERROR"===ae?Vi.level="ERROR_LEVEL_ERROR":"WARNING"===ae&&(Vi.level="ERROR_LEVEL_WARNNING");var It={isObfuscated:!0,browserStackInfo:be},ed={pageUrl:window.location.href,kvPairs:[]};A("FEXP_EXPERIMENTS")&&(ed.experimentIds=A("FEXP_EXPERIMENTS"));var Wi=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if(!ci()&&Wi)for(var zo=p(Object.keys(Wi)),pc=zo.next();!pc.done;pc=zo.next()){var Ao=pc.value;
ed.kvPairs.push({key:Ao,value:String(Wi[Ao])})}var Xi=G.params;if(Xi){var Bo=p(Object.keys(Xi));for(pc=Bo.next();!pc.done;pc=Bo.next()){var Co=pc.value;ed.kvPairs.push({key:"client."+Co,value:String(Xi[Co])})}}var Do=bi("SERVER_NAME"),Eo=bi("SERVER_VERSION");Do&&Eo&&(ed.kvPairs.push({key:"server.name",value:Do}),ed.kvPairs.push({key:"server.version",value:Eo}));yo={errorMetadata:ed,stackTrace:It,logMessage:Vi}}var Fo=yo;if(!Fo)break a;qk("clientError",Fo)}("ERROR"===ae||M("errors_flush_gel_always_killswitch"))&&
ap()}if(!M("suppress_error_204_logging")){var ce=G.params||{},Ob={urlParams:{a:"logerror",t:"jserror",type:G.name,msg:G.message.substr(0,250),line:G.lineNumber,level:h,"client.name":ce.name},postParams:{url:A("PAGE_NAME",window.location.href),file:G.fileName},method:"POST"};ce.version&&(Ob["client.version"]=ce.version);if(Ob.postParams){G.stack&&(Ob.postParams.stack=G.stack);for(var Go=p(Object.keys(ce)),Yi=Go.next();!Yi.done;Yi=Go.next()){var Ho=Yi.value;Ob.postParams["client."+Ho]=ce[Ho]}var Zi=
A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);if(Zi)for(var Io=p(Object.keys(Zi)),$i=Io.next();!$i.done;$i=Io.next()){var Jo=$i.value;Ob.postParams[Jo]=Zi[Jo]}var Ko=A("SERVER_NAME",void 0),Lo=A("SERVER_VERSION",void 0);Ko&&Lo&&(Ob.postParams["server.name"]=Ko,Ob.postParams["server.version"]=Lo)}fj(A("ECATCHER_REPORT_HOST","")+"/error_204",Ob)}try{Np.add(G.message)}catch(gv){}Op++}}}}
function Vp(){for(var a=p(Sp),b=a.next();!b.done;b=a.next())if(hk(b.value.toLowerCase()))return!0;return!1}
function Wp(a){var b=Ja.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,fa(b))}
;function Xp(){this.register=new Map}
function Yp(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Qo("ABORTED")}
Xp.prototype.clear=function(){Yp(this);this.register.clear()};
var Zp=new Xp;var $p=Date.now().toString();
function aq(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if($p)for(a=1,b=0;b<$p.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^$p.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var bq=x.ytLoggingDocDocumentNonce_;bq||(bq=aq(),Za("ytLoggingDocDocumentNonce_",bq));var cq=bq;var dq={xg:0,rd:1,zd:2,ak:3,zg:4,co:5,Qk:6,rm:7,Tl:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function eq(a){this.h=a}
function fq(a){return new eq({trackingParams:a})}
eq.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
eq.prototype.getAsJspb=function(){var a=new jh;void 0!==this.h.trackingParams?D(a,1,this.h.trackingParams):(void 0!==this.h.veType&&D(a,2,this.h.veType),void 0!==this.h.veCounter&&D(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&D(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();I(a,7,b)}void 0!==this.h.youtubeData&&I(a,8,this.h.jspbYoutubeData);return a};
eq.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
eq.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function gq(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function hq(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function iq(a){return A(hq(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",iq,void 0);function jq(a){return(a=iq(void 0===a?0:a))?new eq({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function kq(){var a=A("csn-to-ctt-auth-info");a||(a={},ai("csn-to-ctt-auth-info",a));return a}
function lq(a){a=A(gq(void 0===a?0:a));if(!a&&!A("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
y("yt_logging_screen.getCurrentCsn",lq,void 0);function mq(a,b,c){var d=kq();(c=lq(c))&&delete d[c];b&&(d[a]=b)}
function nq(a){return kq()[a]}
y("yt_logging_screen.getCttAuthInfo",nq,void 0);
function oq(a,b,c,d){c=void 0===c?0:c;if(a!==A(gq(c))||b!==A(hq(c)))mq(a,d,c),ai(gq(c),a),ai(hq(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new kh;D(e,1,cq);D(e,2,a);M("use_default_heartbeat_client")?Mp(e):Mp(e,void 0,un)}else e={clientDocumentNonce:cq,clientScreenNonce:a},M("use_default_heartbeat_client")?qk("foregroundHeartbeatScreenAssociated",e):pp("foregroundHeartbeatScreenAssociated",e,un)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
y("yt_logging_screen.setCurrentScreen",oq,void 0);var pq=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",pq,void 0);function qq(a){Qh(pq,arguments)}
;var rq={qd:3611,Ec:27686,Fc:85013,Gc:23462,Ic:42016,Jc:62407,Kc:26926,Hc:43781,Lc:51236,Mc:79148,Nc:50160,Oc:77504,bd:87907,cd:18630,dd:54445,ed:80935,fd:105675,gd:37521,hd:147285,jd:47786,kd:98349,ld:123695,md:6827,nd:29434,od:7282,pd:124448,td:32276,sd:76278,ud:93911,vd:106531,wd:27259,xd:27262,yd:27263,Ad:21759,Bd:27107,Cd:62936,Dd:49568,Ed:38408,Fd:80637,Gd:68727,Hd:68728,Id:80353,Jd:80356,Kd:74610,Ld:45707,Md:83962,Nd:83970,Od:46713,Pd:89711,Qd:74612,Rd:93265,Sd:74611,Td:131380,Vd:128979,Wd:139311,
Xd:128978,Ud:131391,Yd:105350,ae:139312,be:134800,Zd:131392,de:113533,ee:93252,ge:99357,ie:94521,je:114252,ke:113532,le:94522,he:94583,me:88E3,ne:139580,oe:93253,pe:93254,qe:94387,re:94388,se:93255,te:97424,ce:72502,ue:110111,we:76019,ye:117092,ze:117093,xe:89431,Ae:110466,Be:77240,Ce:60508,De:137401,Ee:137402,Fe:137046,Ge:73393,He:113534,Ie:92098,Je:131381,Ke:84517,Le:83759,Me:80357,Ne:86113,Oe:72598,Pe:72733,Qe:107349,Re:124275,Se:118203,Te:133275,Ue:133274,Ve:133272,We:133273,Xe:133276,Ye:144507,
Ze:143247,af:143248,bf:143249,cf:143250,df:143251,ef:144401,gf:117431,ff:133797,hf:128572,jf:133405,kf:117429,lf:117430,mf:117432,nf:120080,pf:117259,qf:121692,rf:145656,sf:145655,tf:145653,uf:145654,vf:145657,wf:132972,xf:133051,yf:133658,zf:132971,Af:97615,Cf:143359,Bf:143356,Ef:143361,Df:143358,Gf:143360,Ff:143357,Hf:142303,If:143353,Jf:143354,Kf:144479,Lf:143355,Mf:31402,Of:133624,Pf:146477,Qf:133623,Rf:133622,Nf:133621,Sf:84774,Tf:95117,Uf:98930,Vf:98931,Wf:98932,Xf:43347,Yf:129889,Zf:45474,
ag:100352,cg:84758,dg:98443,eg:117985,fg:74613,gg:74614,hg:64502,ig:136032,jg:74615,kg:74616,lg:122224,mg:74617,ng:77820,og:74618,pg:93278,qg:93274,rg:93275,sg:93276,tg:22110,ug:29433,vg:133798,wg:132295,yg:120541,Ag:82047,Bg:113550,Cg:75836,Dg:75837,Eg:42352,Fg:84512,Gg:76065,Hg:75989,Ig:16623,Jg:32594,Kg:27240,Lg:32633,Mg:74858,Og:3945,Ng:16989,Pg:45520,Qg:25488,Rg:25492,Sg:25494,Tg:55760,Ug:14057,Vg:18451,Wg:57204,Xg:57203,Yg:17897,Zg:57205,ah:18198,bh:17898,dh:17909,eh:43980,fh:46220,gh:11721,
hh:49954,ih:96369,jh:3854,kh:56251,lh:25624,Ch:16906,Dh:99999,Eh:68172,Fh:27068,Gh:47973,Hh:72773,Ih:26970,Jh:26971,Kh:96805,Lh:17752,Mh:73233,Nh:109512,Oh:22256,Ph:14115,Qh:22696,Rh:89278,Sh:89277,Th:109513,Uh:43278,Vh:43459,Wh:43464,Xh:89279,Yh:43717,Zh:55764,ai:22255,bi:147912,ci:89281,di:40963,fi:43277,gi:43442,hi:91824,ii:120137,ji:96367,ki:36850,li:72694,mi:37414,ni:36851,ri:124863,oi:121343,si:73491,ti:54473,vi:43375,wi:46674,xi:143815,yi:139095,zi:144402,Ai:32473,Bi:72901,Ci:72906,Di:50947,
Ei:50612,Fi:50613,Gi:50942,Hi:84938,Ii:84943,Ji:84939,Ki:84941,Li:84944,Mi:84940,Ni:84942,Oi:35585,Pi:51926,Qi:79983,Ri:63238,Si:18921,Ti:63241,Ui:57893,Vi:41182,Wi:135732,Xi:33424,Yi:22207,Zi:42993,aj:36229,bj:22206,cj:22205,dj:18993,ej:19001,fj:18990,gj:18991,hj:18997,ij:18725,jj:19003,kj:36874,lj:44763,mj:33427,nj:67793,oj:22182,pj:37091,qj:34650,rj:50617,sj:47261,tj:22287,uj:25144,vj:97917,wj:62397,xj:125598,yj:137935,zj:36961,Aj:108035,Bj:27426,Cj:27857,Dj:27846,Ej:27854,Fj:69692,Gj:61411,Hj:39299,
Ij:38696,Jj:62520,Kj:36382,Lj:108701,Mj:50663,Nj:36387,Oj:14908,Pj:37533,Qj:105443,Rj:61635,Sj:62274,Tj:133818,Uj:65702,Vj:65703,Wj:65701,Xj:76256,Yj:37671,Zj:49953,bk:36216,ck:28237,dk:39553,ek:29222,fk:26107,gk:38050,hk:26108,jk:120745,ik:26109,kk:26110,lk:66881,mk:28236,nk:14586,pk:57929,qk:74723,rk:44098,sk:44099,vk:23528,wk:61699,tk:134104,uk:134103,xk:59149,yk:101951,zk:97346,Ak:118051,Bk:95102,Ck:64882,Dk:119505,Ek:63595,Fk:63349,Gk:95101,Hk:75240,Ik:27039,Jk:68823,Kk:21537,Lk:83464,Mk:75707,
Nk:83113,Ok:101952,Pk:101953,Rk:79610,Sk:125755,Tk:24402,Uk:24400,Vk:32925,Wk:57173,Xk:122502,Yk:145268,Zk:138480,al:64423,bl:64424,dl:33986,fl:100828,il:129089,jl:21409,nl:135155,ol:135156,pl:135157,ql:135158,rl:135159,sl:135160,ul:135161,vl:135162,wl:135163,xl:135164,yl:135165,zl:135166,kl:11070,ll:11074,ml:17880,Al:14001,Cl:30709,Dl:30707,El:30711,Fl:30710,Gl:30708,Bl:26984,Hl:146143,Il:63648,Jl:63649,Kl:51879,Ll:111059,Ml:5754,Nl:20445,Pl:130975,Ol:130976,Ql:110386,Rl:113746,Sl:66557,Ul:17310,
Vl:28631,Wl:21589,Xl:68012,Yl:60480,Zl:138664,am:141121,bm:31571,cm:141978,dm:76980,em:41577,fm:45469,gm:38669,hm:13768,im:13777,jm:141842,km:62985,lm:4724,mm:59369,nm:43927,om:43928,pm:12924,qm:100355,tm:56219,um:27669,vm:10337,sm:47896,wm:122629,ym:139723,xm:139722,zm:121258,Am:107598,Bm:127991,Cm:96639,Dm:107536,Em:130169,Fm:96661,Gm:145188,Hm:96658,Im:116646,Jm:121122,Km:96660,Lm:127738,Mm:127083,Nm:147842,Om:104443,Pm:96659,Qm:147595,Rm:106442,Sm:134840,Tm:63667,Um:63668,Vm:63669,Wm:130686,Xm:147036,
Ym:78314,Zm:55761,an:127098,bn:134841,cn:96368,dn:67374,en:48992,fn:146176,gn:49956,hn:31961,jn:26388,kn:23811,ln:5E4,mn:126250,nn:96370,pn:47355,qn:47356,rn:37935,sn:45521,tn:21760,un:83769,vn:49977,wn:49974,xn:93497,yn:93498,zn:34325,An:140759,Bn:115803,Cn:123707,Dn:100081,En:35309,Fn:68314,Gn:25602,Hn:100339,In:143516,Jn:59018,Kn:18248,Ln:50625,Mn:9729,Nn:37168,On:37169,Pn:21667,Qn:16749,Rn:18635,Sn:39305,Tn:18046,Un:53969,Vn:8213,Wn:93926,Xn:102852,Yn:110099,Zn:22678,ao:69076,bo:137575,eo:139224,
fo:100856,ho:17736,jo:3832,ko:147111,lo:55759,mo:64031,so:93044,to:93045,uo:34388,vo:17657,wo:17655,xo:39579,yo:39578,zo:77448,Ao:8196,Bo:11357,Co:69877,Do:8197,Eo:82039};function sq(){var a=wb(tq),b;return hg(new ag(function(c,d){a.onSuccess=function(e){Di(e)?c(new uq(e)):d(new vq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new vq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new vq("Request timed out","net.timeout",e))};
b=fj("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ig&&b.abort();
return fg(c)})}
function vq(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(vq,bb);function uq(a){this.xhr=a}
;function wq(){this.i=0;this.h=null}
wq.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),$f(a)?a:xq(a)):2===this.i&&b?(a=b.call(c,this.h),$f(a)?a:yq(a)):this};
wq.prototype.getValue=function(){return this.h};
wq.prototype.$goog_Thenable=!0;function yq(a){var b=new wq;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function xq(a){var b=new wq;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function zq(){if(le()||gk&&hk("applewebkit")&&!hk("version")&&(!hk("safari")||hk("gsa/"))||xc&&hk("version/"))return!0;if(M("enable_web_eom_visitor_data"))return A("EOM_VISITOR_DATA",void 0)?!1:!0;var a=A("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=rj("CONSENT"))?a.startsWith("YES+"):!0}
;function Aq(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Bq;this.isTimeout=a instanceof vq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ig}
r(Aq,bb);Aq.prototype.name="BiscottiError";function Bq(){bb.call(this,"Biscotti ID is missing from server")}
r(Bq,bb);Bq.prototype.name="BiscottiMissingError";var tq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Cq=null;function ni(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return fg(Error("Biscotti id fetching has been disabled entirely."));if(!zq())return fg(Error("User has not consented - not fetching biscotti id."));if("1"==ub())return fg(Error("Biscotti ID is not available in private embed mode"));Cq||(Cq=hg(sq().then(Dq),function(a){return Eq(2,a)}));
return Cq}
function Dq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Bq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Bq;a=a.id;oi(a);Cq=xq(a);Fq(18E5,2);return a}
function Eq(a,b){b=new Aq(b);oi("");Cq=yq(b);0<a&&Fq(12E4,a-1);throw b;}
function Fq(a,b){Ei(function(){hg(sq().then(Dq,function(c){return Eq(b,c)}),db)},a)}
function Gq(){try{var a=z("yt.ads.biscotti.getId_");return a?a():ni()}catch(b){return fg(b)}}
;function Hq(a){if("1"!=ub()){a&&mi();try{Gq().then(function(){},function(){}),Ei(Hq,18E5)}catch(b){ki(b)}}}
;function Iq(){this.zc=!0}
function Jq(a){var b={},c=ne([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(A("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Uh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Uh&&(b["X-Goog-PageId"]=A("DELEGATED_SESSION_ID")));return b}
;var Kq=Symbol("injectionDeps");function Lq(a){this.name=a}
Lq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Mq(){this.key=Nq}
function Oq(){this.providers=new Map;this.h=new Map}
Oq.prototype.resolve=function(a){return a instanceof Mq?Pq(this,a.key,[],!0):Pq(this,a,[])};
function Pq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Dc)var e=d.Dc;else if(d.Cc)e=d[Kq]?Qq(a,d[Kq],c):[],e=d.Cc.apply(d,fa(e));else if(d.Kb){e=d.Kb;var f=e[Kq]?Qq(a,e[Kq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(fa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Uo||a.h.set(b,e);
return e}
function Qq(a,b,c){return b?b.map(function(d){return d instanceof Mq?Pq(a,d.key,c,!0):Pq(a,d,c)}):[]}
;var Rq;var Sq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Tq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Uq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;cc(dc(5,a));try{var b=wi(a).theme;return Tq.get(b)||null}catch(c){}return null}
;function Vq(){this.h={};if(this.i=sj()){var a=rj("CONSISTENCY");a&&Wq(this,{encryptedTokenJarContents:a})}}
Vq.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.ba.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar)&&this.replace(b,a)};
Vq.prototype.replace=function(a,b){a=p(a);for(var c=a.next();!c.done;c=a.next())delete this.h[c.value.encryptedTokenJarContents];Wq(this,b)};
function Wq(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&qj("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Xq=window.location.hostname.split(".").slice(-2).join(".");function Yq(){var a=A("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===A("INNERTUBE_CLIENT_NAME")&&(this.h=Zq(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var $q;Yq.getInstance=function(){$q=z("yt.clientLocationService.instance");$q||($q=new Yq,y("yt.clientLocationService.instance",$q,void 0));return $q};
Yq.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=1E7*this.i.coords.latitude,a.client.locationInfo.longitudeE7=1E7*this.i.coords.longitude,a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Yq.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===A("INNERTUBE_CLIENT_NAME")?(this.h=Zq(this))&&this.h.set("yt-location-playability-token",a,15552E3):qj("YT_CL",JSON.stringify({loctok:a}),15552E3,Xq,!0))};
function Zq(a){return void 0===a.h?new Rj("yt-client-location"):a.h}
Yq.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Yq.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function ar(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.za&&(c=b.za[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Rb&&(d=b.Rb[a.continuationCommand.request]))return d();for(var e in a)if(b.ob[e]&&(a=b.ob[e]))return a()}
;function br(a){return function(){return new a}}
;var cr={},dr=(cr.WEB_UNPLUGGED="^unplugged/",cr.WEB_UNPLUGGED_ONBOARDING="^unplugged/",cr.WEB_UNPLUGGED_OPS="^unplugged/",cr.WEB_UNPLUGGED_PUBLIC="^unplugged/",cr.WEB_CREATOR="^creator/",cr.WEB_KIDS="^kids/",cr.WEB_EXPERIMENTS="^experiments/",cr.WEB_MUSIC="^music/",cr.WEB_REMIX="^music/",cr.WEB_MUSIC_EMBEDDED_PLAYER="^music/",cr.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",cr);
function er(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=dr[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(dr).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function fr(a,b){return{method:void 0===b?"POST":b,mode:yi(a)?"same-origin":"cors",credentials:yi(a)?"same-origin":"include"}}
;function gr(){}
gr.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Sq:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=A("INNERTUBE_CONTEXT");if(g){g=xb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=A("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;uj.getInstance();var m="USER_INTERFACE_THEME_LIGHT";xj(165)?m="USER_INTERFACE_THEME_DARK":xj(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Uq()||m;h.userInterfaceTheme=k;if(!f){if(k=
Ej())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Fj())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=x.navigator)?0:q.deviceMemory)){var u;q=null==(u=x.navigator)?void 0:u.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}u=wi(x.location.href);!M("web_populate_internal_geo_killswitch")&&u.internalcountrycode&&(h.internalGeo=u.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},M("kevlar_woffle")&&
nj.h&&(h.mainAppWebInfo.pwaInstallabilityStatus=nj.h.h?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=oj(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(u=A("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:u})),u=A("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:u}));
if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var C=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Oa){}C=void 0}C&&(h.timeZone=C)}(C=fi())?h.experimentsToken=C:delete h.experimentsToken;C=gi();Vq.h||(Vq.h=new Vq);h=Vq.h.h;u=[];q=0;for(var v in h)u[q++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:C,consistencyTokenJars:u});!M("web_prequest_context_killswitch")&&(v=A("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);C=uj.getInstance();v=xj(58);C=C.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);C&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=lq())&&(g.clientScreenNonce=f):!f&&(f=lq())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=z("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Yq.getInstance().setLocationOnInnerTubeContext(g);try{var E=zi(void 0),F=E.bid;delete E.bid;g.adSignalsInfo={params:[],
bid:F};var H=p(Object.entries(E));for(var R=H.next();!R.done;R=H.next()){var O=p(R.value),S=O.next().value,ka=O.next().value;E=S;F=ka;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:E,value:""+F})}}catch(Oa){Tp(Oa)}H=g}else Tp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),H={};H={context:H};if(R=this.h(a)){this.i(H,R,b);var N;b="/youtubei/v1/"+er(this.j());var Ba;(a=null==(N=a.commandMetadata)?void 0:null==(Ba=N.webCommandMetadata)?void 0:Ba.apiUrl)&&(b=a);N=b;(Ba=A("INNERTUBE_HOST_OVERRIDE"))&&
(N=String(Ba)+String(fc(N)));Ba={};Ba.key=A("INNERTUBE_API_KEY");M("json_condensed_response")&&(Ba.prettyPrint="false");N=xi(N,Ba||{},!1);N={input:N,ra:fr(N),ba:H,config:Object.assign({},void 0)};N.config.Ga?N.config.Ga.identity=c:N.config.Ga={identity:c};return N}Tp(new Q("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(gr.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function hr(){}
r(hr,gr);hr.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ra:fr("/getDatasyncIdsEndpoint","GET"),ba:{}}};
hr.prototype.j=function(){return[]};
hr.prototype.h=function(){};
hr.prototype.i=function(){};var ir={},jr=(ir.GET_DATASYNC_IDS=br(hr),ir);function kr(a){var b=Ja.apply(1,arguments);if(!lr(a)||b.some(function(e){return!lr(e)}))throw Error("Only objects may be merged.");
var c=a;b=p(b);for(var d=b.next();!d.done;d=b.next())mr(c,d.value);return c}
function mr(a,b){for(var c in b)if(lr(b[c])){if(c in a&&!lr(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});mr(a[c],b[c])}else if(nr(b[c])){if(c in a&&!nr(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);or(a[c],b[c])}else a[c]=b[c];return a}
function or(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,lr(c)?a.push(mr({},c)):nr(c)?a.push(or([],c)):a.push(c);return a}
function lr(a){return"object"===typeof a&&!Array.isArray(a)}
function nr(a){return"object"===typeof a&&Array.isArray(a)}
;function pr(a,b){Wl.call(this,1,arguments);this.timer=b}
r(pr,Wl);var qr=new Xl("aft-recorded",pr);var rr=window;function sr(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var T=rr.performance||rr.mozPerformance||rr.msPerformance||rr.webkitPerformance||new sr;var tr=!1,ur={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(T.clearResourceTimings||T.webkitClearResourceTimings||T.mozClearResourceTimings||T.msClearResourceTimings||T.oClearResourceTimings||db,T);function vr(a){var b=wr(a);if(b.aft)return b.aft;a=A((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function xr(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null==T?void 0:null==(a=T.getEntriesByType)?void 0:null==(b=a.call(T,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=yr(e.requestStart),e.responseEnd=yr(e.responseEnd),e.redirectStart=yr(e.redirectStart),e.redirectEnd=yr(e.redirectEnd),e.domainLookupEnd=yr(e.domainLookupEnd),e.connectStart=yr(e.connectStart),e.connectEnd=yr(e.connectEnd),e.responseStart=yr(e.responseStart),
e.secureConnectionStart=yr(e.secureConnectionStart),e.domainLookupStart=yr(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=T.timing}else a=T.timing;return a}
function zr(){return M("csi_use_time_origin")&&T.timeOrigin?Math.floor(T.timeOrigin):T.timing.navigationStart}
function yr(a){return Math.round(zr()+a)}
function Ar(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Za("ytcsi."+(a||"")+"data_",b));return b}
function Br(a){a=Ar(a);a.info||(a.info={});return a.info}
function wr(a){a=Ar(a);a.tick||(a.tick={});return a.tick}
function Cr(a){a=Ar(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Dr(a){a=Cr(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Er(a){var b=Ar(a).nonce;b||(b=aq(),Ar(a).nonce=b);return b}
function Fr(a){var b=wr(a||""),c=vr(a);c&&!tr&&(bm(qr,new pr(Math.round(c-b._start),a)),tr=!0)}
function Gr(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Gr(a[d],b[d]))return!1;return!0}
;function Hr(){if(T.getEntriesByType){var a=T.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return yr(a.startTime)}a=T.timing;
return a.dc?Math.max(0,a.dc):0}
;function Ir(){var a=z("ytcsi.debug");a||(a=[],y("ytcsi.debug",a,void 0),y("ytcsi.reference",{},void 0));return a}
function Jr(a){a=a||"";var b=z("ytcsi.reference");b||(Ir(),b=z("ytcsi.reference"));if(b[a])return b[a];var c=Ir(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},Kr=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",
U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
U.embed="LATENCY_ACTION_EMBED",U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",U.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",U.results="LATENCY_ACTION_RESULTS",
U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U),V={},Lr=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",
V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",
V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",
V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm=
"shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",
V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),Mr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Nr={},Or=(Nr.ccs="CANARY_STATE_",Nr.mver="MEASUREMENT_VERSION_",Nr.pis="PLAYER_INITIALIZED_STATE_",Nr.yt_pt="LATENCY_PLAYER_",Nr.pa="LATENCY_ACTION_",Nr.ctop="TOP_ENTITY_TYPE_",Nr.yt_vst="VIDEO_STREAM_TYPE_",Nr),Pr="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Qr(a){return Kr[a]||"LATENCY_ACTION_UNKNOWN"}
function Rr(a,b,c){c=Cr(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Lr){c=Lr[a];0<=fb(Mr,c)&&(b=!!b);a in Or&&"string"===typeof b&&(b=Or[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return kr({},d)}0<=fb(Pr,a)||Up(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,
LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,
LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,
LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,
LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,
LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,
LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,
LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,
LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";
W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";
W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";
W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";
W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";
W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";
W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";
W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";
W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";
W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";
W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";
W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";
W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";
W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Sr={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Sr[Sr.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";
Sr[Sr.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Sr[Sr.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";
X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Tr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Tr[Tr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Tr[Tr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Tr[Tr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Tr[Tr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Tr[Tr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Tr[Tr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Tr[Tr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Tr[Tr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Ur={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Ur[Ur.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Ur[Ur.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Ur[Ur.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Ur[Ur.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Vr={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Vr[Vr.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Vr[Vr.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Wr={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Wr[Wr.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Wr[Wr.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Wr[Wr.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Wr[Wr.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Wr[Wr.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Wr[Wr.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Xr={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Xr[Xr.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Xr[Xr.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Xr[Xr.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Xr[Xr.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Yr={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Yr[Yr.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Yr[Yr.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Yr[Yr.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Zr={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Zr[Zr.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Zr[Zr.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Zr[Zr.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var $r="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var as=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",as,void 0);function bs(){this.h=0}
function cs(){bs.h||(bs.h=new bs);return bs.h}
bs.prototype.tick=function(a,b,c,d){ds(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Bh,D(d,1,a),D(d,2,b),a=new Eh,od(a,5,Fh,d),Fp(a,c)):qk("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
bs.prototype.info=function(a,b,c){var d=Object.keys(a).join("");ds(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,qk("latencyActionInfo",a,{cttAuthInfo:c}))};
bs.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));ds(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new Eh,od(c,7,Fh,a),Fp(c,b))};
bs.prototype.span=function(a,b,c){var d=Object.keys(a).join("");ds(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,qk("latencyActionSpan",a,{cttAuthInfo:c}))};
function ds(a,b){as[b]=as[b]||{count:0};var c=as[b];c.count++;c.time=P();a.h||(a.h=ak(function(){var d=P(),e;for(e in as)as[e]&&6E4<d-as[e].time&&delete as[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Up(c)),!0):!1}
;function es(){var a=["ol"];Jr("").info.actionType="embed";a&&ai("TIMING_AFT_KEYS",a);ai("TIMING_ACTION","embed");fs();a=Br();var b=Dr();if("cold"===a.yt_lt||"cold"===b.loadType){var c=wr(),d=Cr();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=p(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=Rr(f,a[f]))&&!Gr(Dr(void 0),f)&&(kr(b,f),kr(e,f),c=!0);c&&gs(e)}Za("ytglobal.timingready_",!0);a=bi("TIMING_ACTION");z("ytglobal.timingready_")&&a&&"_start"in
wr(void 0)&&vr()&&Fr()}
function hs(a,b,c,d){null!==b&&(Br(c)[a]=b,(a=Rr(a,b,c))&&gs(a,c,d))}
function gs(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Jr(b||""),kr(c.info,a),kr(Dr(b),a),c=Er(b),b=Ar(b).cttAuthInfo,cs().info(a,c,b);else{c=new xh;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,W[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,
5,Sr[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,Tr[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);
break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,W[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,Ur[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,
84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;
case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,Vr[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,47,a[e]);break;case "liveStreamMode":D(c,91,Wr[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,
a[e]);break;case "videoStreamType":D(c,53,Xr[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,Yr[a[e]]);break;case "playerRotationType":D(c,101,Zr[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,
a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:$r.includes(f)&&ki(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){ki(Error("Codegen laipb translator failed to set "+f))}}is(c,b)}}
function is(a,b){var c=Cr(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);Jr(b||"").jspbInfo.push(a);c=Er(b);b=Ar(b).cttAuthInfo;cs().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;T.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),T.mark(d))}Jr(c||"").tick[a]=b||P();d=Cr(c);d.gelTicks&&(d.gelTicks[a]=!0);d=wr(c);var e=b||P();d[a]=e;e=Er(c);var f=Ar(c).cttAuthInfo;if("_start"===a){var g=cs();ds(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new vh,D(f,1,e),e=new Eh,od(e,6,Fh,f),Fp(e,b)):qk("latencyActionBaselined",{clientActionNonce:e},b))}else cs().tick(a,e,b,f);Fr(c);return d[a]}
function js(){var a=Er(void 0);requestAnimationFrame(function(){setTimeout(function(){a===Er(void 0)&&Z("ol",void 0,void 0)},0)})}
function ks(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=yn+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function fs(){function a(f){var g=xr(),h=zr();h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=Hr();0<f&&Z("fpt",f);f=xr();f.isPerformanceNavigationTiming&&gs({performanceNavigationTiming:!0},void 0);Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",
f.domainLookupEnd,void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=zr()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));T&&"getEntriesByType"in T&&ls()}
var b=A("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=ms(b);is(b);b=new xh;D(b,25,!0);D(b,1,W[Qr(A("TIMING_ACTION",void 0))]);var c=A("PREVIOUS_ACTION",void 0);c&&D(b,13,W[Qr(c)]);(c=A("CLIENT_PROTOCOL"))&&D(b,33,c);(c=A("CLIENT_TRANSPORT"))&&D(b,34,c);(c=lq())&&"UNDEFINED_CSN"!==c&&D(b,4,c);c=ks();1!==c&&-1!==c||D(b,6,!0);c=Br();D(b,3,"cold");a(c);c=ns();if(0<c.length){c=p(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new wh;D(e,1,d);pd(b,83,wh,e)}}is(b)}else{for(c in b)b.hasOwnProperty(c)&&
hs(c,b[c]);b={isNavigation:!0,actionType:Qr(A("TIMING_ACTION",void 0))};if(c=A("PREVIOUS_ACTION",void 0))b.previousAction=Qr(c);if(c=A("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=A("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=lq())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=ks();if(1===c||-1===c)b.isVisible=!0;c=Br();b.loadType="cold";a(c);c=ns();if(0<c.length)for(b.resourceInfo=[],c=p(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});gs(b)}}
function ms(a){var b=new xh;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetGuide_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetHome_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetPlayer_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetSearch_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;
case "GetSettings_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetTrending_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "GetWatchNext_rid":e=new Ah;D(e,1,c);D(e,2,String(d));zh(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}return b}
function os(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Zb()&&a.setAttribute("nonce",Zb());return c?(a=T.getEntriesByName(c))&&a[0]&&(a=a[0],c=zr(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function ns(){var a=[];if(document.querySelector&&T&&T.getEntriesByName)for(var b in ur)if(ur.hasOwnProperty(b)){var c=ur[b];os(b,c)&&a.push(c)}return a}
function ls(){var a=window.location.protocol,b=T.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",yr(b.startTime)),Z("wffe",yr(b.responseEnd)))}
var ps=window;ps.ytcsi&&(ps.ytcsi.info=hs,ps.ytcsi.tick=Z);var qs=["consistency","mss","client_location","entities","store"];function rs(a,b,c,d){this.o=a;this.J=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.za||(a.za={});a.za=Object.assign({},jr,a.za)}
function ss(a,b,c,d){if(void 0!==rs.h){if(d=rs.h,a=[a!==d.o,b!==d.J,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else rs.h=new rs(a,b,c,d)}
function ts(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Sq:c;var d=ar(b,a.o);if(!d)return fg(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new ag(function(f){var g,h,k;return w(function(m){if(1==m.h){h="cors"===(null==(g=e.ra)?void 0:g.mode)?"cors":void 0;if(a.l.zc){var q=e.config,u;q=null==q?void 0:null==(u=q.Ga)?void 0:u.sessionIndex;u=Jq({sessionIndex:q});k=Object.assign({},us(h),u);return m.s(2)}return t(m,vs(e.config,
h),3)}2!=m.h&&(k=m.i);f(ws(a,e,k));m.h=0})}):fg(new Q("Error: Failed to build request for command.",b))}
function ws(a,b,c){var d,e,f,g,h,k,m,q,u,C,v,E,F,H,R,O,S,ka;return w(function(N){switch(N.h){case 1:N.s(2);break;case 3:if((d=N.i)&&!d.isExpired())return N.return(Promise.resolve(d.h()));case 2:if((f=null==(e=b.config)?void 0:e.Ro)&&a.h.has(f)&&M("web_memoize_inflight_requests"))return N.return(a.h.get(f));if(null==(g=b)?0:null==(h=g.ba)?0:h.context)for(k=p([]),m=k.next();!m.done;m=k.next())q=m.value,q.Po(b.ba.context);if(null==(u=a.i)?0:u.l(b.input,b.ba))return N.return(a.i.j(b.input,b.ba));C=JSON.stringify(b.ba);
b.ra=Object.assign({},b.ra,{headers:c});v=Object.assign({},b.ra);"POST"===b.ra.method&&(v=Object.assign({},v,{body:C}));(null==(E=b.config)?0:E.kc)&&Z(b.config.kc);F=a.J.fetch(b.input,v,b.config);f&&a.h.set(f,F);return t(N,F,4);case 4:H=N.i;f&&a.h.has(f)&&a.h.delete(f);(null==(R=b.config)?0:R.lc)&&Z(b.config.lc);if(H||null==(O=a.i)||!O.h(b.input,b.ba)){N.s(5);break}return t(N,a.i.i(b.input,b.ba),6);case 6:H=N.i;case 5:if(H&&a.j)for(S=p(qs),m=S.next();!m.done;m=S.next())ka=m.value,a.j[ka]&&a.j[ka].handleResponse(H,
b);return N.return(H)}})}
function vs(a,b){var c,d,e,f;return w(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ga)?void 0:d.sessionIndex;var h=Jq({sessionIndex:e});if(!(h instanceof ag)){var k=new ag(Ma);bg(k,2,h);h=k}return t(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},us(b),f)))})}
function us(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&A("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=A("EOM_VISITOR_DATA"):A("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=A("VISITOR_DATA"));"cors"!==a&&((a=A("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=A("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=A("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=
A("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var xs=["share/get_web_player_share_panel"],ys=["feedback"],zs=["notification/modify_channel_preference"],As=["browse/edit_playlist"],Bs=["subscription/subscribe"],Cs=["subscription/unsubscribe"];function Ds(){}
r(Ds,gr);Ds.prototype.j=function(){return Bs};
Ds.prototype.h=function(a){return a.subscribeEndpoint};
Ds.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Ds.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Es(){}
r(Es,gr);Es.prototype.j=function(){return Cs};
Es.prototype.h=function(a){return a.unsubscribeEndpoint};
Es.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Es.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Fs(){}
r(Fs,gr);Fs.prototype.j=function(){return ys};
Fs.prototype.h=function(a){return a.feedbackEndpoint};
Fs.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Fs.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Gs(){}
r(Gs,gr);Gs.prototype.j=function(){return zs};
Gs.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
Gs.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Hs(){}
r(Hs,gr);Hs.prototype.j=function(){return As};
Hs.prototype.h=function(a){return a.playlistEditEndpoint};
Hs.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Is(){}
r(Is,gr);Is.prototype.j=function(){return xs};
Is.prototype.h=function(a){return a.webPlayerShareEntityServiceEndpoint};
Is.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Nq=new Lq("NETWORK_SLI_TOKEN");function Js(a){this.h=a}
Js.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.h&&(d=cc(dc(5,mc(a)))||"/UNKNOWN_PATH",c.h.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Up(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Up(g)}))})};
Js.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.failure(),b=b.then(function(c){Up(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Js[Kq]=[new Mq];var Ks=new Lq("NETWORK_MANAGER_TOKEN");var Ls;function Ms(a){Wl.call(this,1,arguments);this.csn=a}
r(Ms,Wl);var em=new Xl("screen-created",Ms),Ns=[],Ps=Os,Qs=0;function Rs(a,b,c,d,e,f,g){function h(){Up(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=Ps();f=new eq({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,X:k};if(M("il_via_jspb")){var m=new lh;m.S(k);mh(m,f.getAsJspb());c&&c.visualElement?(f=new nh,c.clientScreenNonce&&D(f,2,c.clientScreenNonce),oh(f,c.visualElement.getAsJspb()),g&&D(f,4,Gh[g]),I(m,5,f)):c&&h();d&&D(m,3,d);Kp(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?pp("screenCreated",f,a,e):qk("screenCreated",f,e);bm(em,new Ms(k));return k}
function Ss(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:nq(b),
X:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&Up(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new ph;h.S(b);rh(h,c.getAsJspb());ib(e,function(k){k=k.getAsJspb();pd(h,3,jh,k)});
"UNDEFINED_CSN"==b?Ts("visualElementAttached",h,f):Lp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:ib(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Ts("visualElementAttached",c,f):a?pp("visualElementAttached",c,a,f):qk("visualElementAttached",c,f)}
function Os(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Mc(b,3)}
function Ts(a,b,c){Ns.push({payloadName:a,payload:b,options:c});Qs||(Qs=fm())}
function gm(a){if(Ns){for(var b=p(Ns),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.payload.S(a.csn),c.payloadName){case "screenCreated":Kp(c.payload,c.options);break;case "visualElementAttached":Lp(c.payload,c.options);break;case "visualElementShown":Gp(c.payload,c.options);break;case "visualElementHidden":Hp(c.payload,c.options);break;case "visualElementGestured":Ip(c.payload,c.options);break;case "visualElementStateChanged":Jp(c.payload,c.options);break;default:Up(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,pp(c.payloadName,c.payload,null,c.options);Ns.length=0}Qs=0}
;function Us(){this.i=new Set;this.h=new Set;this.j=new Map}
Us.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Na(Us);function Vs(){this.o=[];this.C=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Ws(a,b,c){c=void 0===c?0:c;b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=lq(c),f=jq(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Ss(a.client,e,f,[fq(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Ss(a.client,e,f,[fq(d.playerResponse.trackingParams)])}})}
function Xs(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=lq(d);c=c||jq(d);e&&c&&Ss(a.client,e,c,[b])}}
Vs.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=lq(void 0===c?0:c)){a=this.client;var e=fq(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:nq(c),X:c};if(M("il_via_jspb")){var g=new sh;g.S(c);e=e.getAsJspb();I(g,2,e);D(g,4,Gh[f]);b&&I(g,3,void 0);"UNDEFINED_CSN"==c?Ts("visualElementGestured",g,d):Ip(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Ts("visualElementGestured",f,d):a?pp("visualElementGestured",
f,a,d):qk("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Ys(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Zs(a,b,c);var f=jq(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,Xs(a,h[0],h[1]||f,c.layer);f=p(a.C);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=lq(g);var m=k[0]||jq(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:nq(h),X:h};M("il_via_jspb")?(q=new uh,q.S(h),m=m.getAsJspb(),I(q,2,m),"UNDEFINED_CSN"==h?Ts("visualElementStateChanged",q,k):Jp(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?Ts("visualElementStateChanged",m,k):g?pp("visualElementStateChanged",m,g,k):qk("visualElementStateChanged",m,k))}}}};
lq(c.layer)||a.j();if(c.rb)for(var d=p(c.rb),e=d.next();!e.done;e=d.next())Ws(a,e.value,c.layer);else Tp(Error("Delayed screen needs a data promise."))}
function Zs(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.ec?c.ec:c.layer;var e=lq(d);d=jq(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=A("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Rs(a.client,b,f,c.qb,c.cttAuthInfo,g,c.Mo)}catch(m){Wp(m,{So:b,rootVe:d,parentVisualElement:void 0,Jo:e,Oo:f,qb:c.qb});Tp(m);return}oq(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(dq));for(f=b.next();!f.done;f=b.next())if(lq(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:nq(e),X:e,tb:g},M("il_via_jspb")?(h=new th,h.S(e),d=d.getAsJspb(),I(h,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"==e?Ts("visualElementHidden",h,f):Hp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Ts("visualElementHidden",d,f):b?pp("visualElementHidden",d,b,f):qk("visualElementHidden",
d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");gs({clientScreenNonce:k});Us.getInstance().clear();d=jq(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:nq(e),X:e},M("il_via_jspb")?(b=new th,b.S(e),f=d.getAsJspb(),I(b,2,f),D(b,4,1),"UNDEFINED_CSN"==e?Ts("visualElementShown",b,k):Gp(b,k,void 0)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==e?Ts("visualElementShown",b,k):qk("visualElementShown",
b,k)));a.i.delete(c.layer||0);a.j=void 0;e=p(a.u);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Xs(a,k,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(m){Tp(m)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Tp(m)}}}
;function $s(){var a,b;return w(function(c){if(1==c.h)return a=rs.h,a?t(c,ts(a),2):(Up(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.i)return b.errorMetadata?(Tp(Error("Datasync IDs fetch responded with "+b.errorMetadata.code+": "+b.error)),c.return(void 0)):c.return(b.Ko);Up(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var at=x.caches,bt;function ct(a){var b=a.indexOf(":");return-1===b?{Cb:a}:{Cb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function dt(){return w(function(a){if(void 0!==bt)return a.return(bt);bt=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return wa(d,2),t(d,at.open("test-only"),4);case 4:return t(d,at.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(bt)})}
function et(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.h)return t(k,dt(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return t(k,at.keys(),3)}c=k.i;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ct(f),h=g.datasyncId,!h||a.includes(h)||b.push(at.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function ft(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.h)return t(h,dt(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=uk("cache contains other");return t(h,at.keys(),3)}b=h.i;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ct(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function gt(){try{return!!self.localStorage}catch(a){return!1}}
;function ht(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function jt(a){if(gt()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=ht(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function kt(){if(!gt())return!1;var a=uk(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=ht(c.value),void 0!==c&&c!==a)return!0;return!1}
;function lt(){$s().then(function(a){a&&(El(a),et(a),jt(a))})}
function mt(){var a=new Rm;bf.N(function(){var b,c,d,e;return w(function(f){switch(f.h){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.s(2);break}b=uk("clear");if(b.startsWith("V")){var g=[b];El(g);et(g);jt(g);return f.return()}c=kt();return t(f,ft(),3);case 3:return d=f.i,t(f,Fl(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.H()?lt():a.l.add("publicytnetworkstatus-online",lt,!0,void 0,void 0),f.h=0}})})}
;function nt(a){a&&(a.dataset?a.dataset[ot("loaded")]="true":a.setAttribute("data-loaded","true"))}
function pt(a,b){return a?a.dataset?a.dataset[ot(b)]:a.getAttribute("data-"+b):null}
var qt={};function ot(a){return qt[a]||(qt[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var rt=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,st=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function tt(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(rt,""),c=c.replace(st,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ut(a,b,c)}
function ut(a,b,c){c=void 0===c?null:c;var d=vt(a),e=document.getElementById(d),f=e&&pt(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Sn(d,b),b=""+Sa(b),wt[b]=f),g||(e=xt(a,d,function(){pt(e,"loaded")||(nt(e),Vn(d),Ei(Ya(Wn,d),0))},c)))}
function xt(a,b,c,d){d=void 0===d?null:d;var e=Md("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Id(e,Qf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function zt(a){a=vt(a);var b=document.getElementById(a);b&&(Wn(a),b.parentNode.removeChild(b))}
function At(a,b){a&&b&&(a=""+Sa(b),(a=wt[a])&&Un(a))}
function vt(a){var b=document.createElement("a");Wb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ac(a)}
var wt={};var Bt=[],Ct=!1;function Dt(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&zq()&&"1"!=ub()){var a=function(){Ct=!0;"google_ad_status"in window?ai("DCLKSTAT",1):ai("DCLKSTAT",2)};
try{tt("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Bt.push(bf.N(function(){if(!(Ct||"google_ad_status"in window)){try{At("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Ct=!0;ai("DCLKSTAT",3)}},5E3))}}
function Et(){var a=Number(A("DCLKSTAT",0));return isNaN(a)?0:a}
;function Ft(){this.state=1;this.h=null}
l=Ft.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Eb("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=Bb())?f.createScript(e):e,e=(new Gb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Eb("From proto message. b/166824318"),d=Kb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Gt(this,e,
d,a.program,b,c)}else Up(Error("Cannot initialize botguard without program"))};
function Gt(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,tt(c,function(){window[g]?Jt(a,d,g,e):(a.state=3,zt(c),Up(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=Md("SCRIPT"),f.textContent=b,f.nonce=Zb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Jt(a,d,g,e):(a.state=4,Up(new Q("Unable to load Botguard from JS")))):Up(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.h};
l.getState=function(){return this.state};
function Jt(a,b,c,d){a.state=5;try{var e=new Bd({program:b,globalName:c});e.wc.then(function(){a.state=6;d&&d(b)});
Kt(a,e)}catch(f){a.state=7,f instanceof Error&&Up(f)}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.h){var b=this.h;a={pb:a};if(b.i)throw Error("Already disposed");b=b.l([a.pb,a.yc])}else b=null;return b};
l.dispose=function(){Kt(this,null);this.state=8};
function Kt(a,b){pe(a.h);a.h=b}
;var Lt=new Ft;function Mt(){return Lt.isInitialized()}
function Nt(a){a=void 0===a?{}:a;return Lt.invoke(a)}
;function Ot(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?fk():d;this.l=c;this.j=d;this.i=new Ad;this.h=a;a={};c=p(this.h.entries());for(d=c.next();!d.done;a={sa:a.sa,Ba:a.Ba},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Ba=d;a.sa=e;d=function(f){return function(){f.sa.eb();b.h[f.Ba].Ra=!0;b.h.every(function(g){return!0===g.Ra})&&b.i.resolve()}}(a);
e=bk(d,Pt(this,a.sa));this.h[a.Ba]=Object.assign({},a.sa,{eb:d,Na:e})}}
function Qt(a){var b=Array.from(a.h.keys()).sort(function(d,e){return Pt(a,a.h[e])-Pt(a,a.h[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Na||c.Ra||(a.j.U(c.Na),bk(c.eb,10))}
Ot.prototype.cancel=function(){for(var a=p(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Na||b.Ra||this.j.U(b.Na),b.Ra=!0;this.i.resolve()};
function Pt(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Rt(a){this.state=a;this.plugins=[];this.m=void 0}
Rt.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ja.apply(0,arguments)))};
Rt.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.B===a});
if(d){this.j&&(Qt(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(St(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function St(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
fk();var g={};e=p(e);for(var h=e.next();!h.done;g={Ca:g.Ca},h=e.next())g.Ca=h.value,dk(function(k){return function(){k.Ca.ka.apply(k.Ca,fa(d))}}(g));
f=f.map(function(k){var m;return{eb:function(){k.ka.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.j=new Ot(f))}}
da.Object.defineProperties(Rt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Tt(a){Rt.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.C=[{from:"document_active",B:"document_disposed_preventable",action:this.u},{from:"document_active",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"document_disposed",action:this.l},{from:"document_disposed_preventable",B:"flush_logs",action:this.o},{from:"document_disposed_preventable",B:"document_active",action:this.i},{from:"document_disposed",B:"flush_logs",action:this.o},
{from:"document_disposed",B:"document_active",action:this.i},{from:"document_disposed",B:"document_disposed",action:function(){}},
{from:"flush_logs",B:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(Tt,Rt);Tt.prototype.u=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Tt.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Tt.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Tt.prototype.i=function(){this.h=new Map};function Ut(a){Rt.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",B:"document_visible",action:this.i},{from:"document_visibility_unknown",B:"document_hidden",action:this.h},{from:"document_visibility_unknown",B:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",B:"document_backgrounded",action:this.l},{from:"document_visible",B:"document_hidden",action:this.h},{from:"document_visible",B:"document_foregrounded",action:this.o},
{from:"document_visible",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_visible",action:this.i},{from:"document_foregrounded",B:"document_hidden",action:this.h},{from:"document_foregrounded",B:"document_foregrounded",action:this.o},{from:"document_hidden",B:"document_visible",action:this.i},{from:"document_hidden",B:"document_backgrounded",action:this.l},{from:"document_hidden",B:"document_hidden",action:this.h},{from:"document_backgrounded",B:"document_hidden",action:this.h},
{from:"document_backgrounded",B:"document_backgrounded",action:this.l},{from:"document_backgrounded",B:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(Ut,Rt);Ut.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ut.prototype.h=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ut.prototype.l=function(a,b){a(null==b?void 0:b.event)};
Ut.prototype.o=function(a,b){a(null==b?void 0:b.event)};function Vt(){this.h=new Tt;this.i=new Ut}
Vt.prototype.install=function(){var a=Ja.apply(0,arguments);this.h.install.apply(this.h,fa(a));this.i.install.apply(this.i,fa(a))};function Wt(){Vt.call(this);var a={};this.install((a.document_disposed={ka:this.j},a));a={};this.install((a.flush_logs={ka:this.l},a))}
var Xt;r(Wt,Vt);Wt.prototype.l=function(){if(M("web_fp_via_jspb")){var a=new ih,b=lq();b&&a.S(b);b=new Eh;od(b,380,Fh,a);Fp(b,void 0);M("web_fp_via_jspb_and_json")&&qk("finalPayload",{csn:lq()})}else qk("finalPayload",{csn:lq()})};
Wt.prototype.j=function(){Yp(Zp)};function Yt(){}
Yt.getInstance=function(){var a=z("ytglobal.storage_");a||(a=new Yt,y("ytglobal.storage_",a,void 0));return a};
Yt.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Zt()):d.return()})};
function Zt(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",Yt,void 0);function ok(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=ei("ytidb_transaction_ended_event_rate_limit",.02)}
ok.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":$t(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function $t(a,b){Yt.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:au(null==c?void 0:c.usage),deviceStorageQuotaMbytes:au(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function au(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var bu=window;
function cu(){var a=bu.uaChPolyfill.state;if(0===a.type)qk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Tp(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);qk("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),qk("clientHintsPolyfillDiagnostics",
b))}}
var du=!1;function eu(){var a;1===(null==(a=bu.uaChPolyfill)?void 0:a.state.type)?du||(bu.uaChPolyfill.onReady=eu,du=!0):bu.uaChPolyfill&&cu()}
;function fu(a,b,c){K.call(this);var d=this;c=c||A("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.L="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.L=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=fb(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
r(fu,K);fu.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.L)}catch(d){li(d)}}};
fu.prototype.I=function(){window.removeEventListener("message",this.A);K.prototype.I.call(this)};function gu(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new fu(!!A("WIDGET_ID_ENFORCE")),b=this.ic.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=A("WIDGET_ID"))this.h.sessionId=a}
l=gu.prototype;l.ic=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,hu(this,a)),this.j[a]=!0)):this.kb(a,b,c)};
l.kb=function(){};
function hu(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Vb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Xa());this.sendMessage("onReady");gb(this.i,this.Ib,this);this.i=[]};
l.Xa=function(){return null};
function iu(a,b){a.sendMessage("infoDelivery",b)}
l.Ib=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Ib({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};function ju(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function ku(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function lu(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function mu(a){gu.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.tc.bind(this));this.addEventListener("onVolumeChange",this.uc.bind(this));this.addEventListener("onApiChange",this.mc.bind(this));this.addEventListener("onPlaybackQualityChange",this.pc.bind(this));this.addEventListener("onPlaybackRateChange",this.qc.bind(this));this.addEventListener("onStateChange",this.sc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.vc.bind(this))}
r(mu,gu);l=mu.prototype;
l.kb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&ju(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=ku(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=ku(e);break;case "loadPlaylist":case "cuePlaylist":e=lu(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);ju(a)&&iu(this,this.Xa())}};
l.onReady=function(){var a=this.Vb.bind(this);this.h.i=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Xa=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.sc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());iu(this,a)};
l.pc=function(a){iu(this,{playbackQuality:a})};
l.qc=function(a){iu(this,{playbackRate:a})};
l.mc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.uc=function(){iu(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.tc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());iu(this,a)};
l.vc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};iu(this,a)};
l.dispose=function(){gu.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function nu(a){K.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Eb,this)}
r(nu,K);l=nu.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.la("RECEIVING"))};
l.la=function(a,b){this.started&&!this.h()&&this.connection.la(a,b)};
l.Eb=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=ou(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=pu(a,c))&&this.la(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.nc.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.nc=function(a,b){this.started&&!this.h()&&this.connection.la(a,this.Wa(a,b))};
l.Wa=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.I=function(){var a=this.connection;a.h()||sg(a.i,"command",this.Eb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);K.prototype.I.call(this)};function qu(a,b){nu.call(this,b);this.api=a;this.start()}
r(qu,nu);qu.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
qu.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function ou(a,b){switch(a){case "loadVideoById":return a=ku(b),[a];case "cueVideoById":return a=ku(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=lu(b),[a];case "cuePlaylist":return a=lu(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function pu(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
qu.prototype.Wa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return nu.prototype.Wa.call(this,a,b)};
qu.prototype.I=function(){nu.prototype.I.call(this);delete this.api};function ru(a){a=void 0===a?!1:a;K.call(this);this.i=new L(a);re(this,Ya(pe,this.i))}
$a(ru,K);ru.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
ru.prototype.l=function(a,b){this.h()||this.i.ja.apply(this.i,arguments)};function su(a,b,c){ru.call(this);this.j=a;this.destination=b;this.id=c}
r(su,ru);su.prototype.la=function(a,b){this.h()||this.j.la(this.destination,this.id,a,b)};
su.prototype.I=function(){this.destination=this.j=null;ru.prototype.I.call(this)};function tu(a,b,c){K.call(this);this.destination=a;this.origin=c;this.i=Fn(window,"message",this.j.bind(this));this.connection=new su(this,a,b);re(this,Ya(pe,this.connection))}
r(tu,K);tu.prototype.la=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Uf(a),this.origin))};
tu.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
tu.prototype.I=function(){Gn(this.i);this.destination=null;K.prototype.I.call(this)};function uu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||wb(b);this.assets=a.assets||{};this.attrs=a.attrs||wb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
uu.prototype.clone=function(){var a=new uu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=wb(c):a[b]=c}return a};var vu=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function wu(a){a=a||"";if(window.spf){var b=a.match(vu);spf.style.load(a,b?b[1]:"",void 0)}else xu(a)}
function xu(a){var b=yu(a),c=document.getElementById(b),d=c&&pt(c,"loaded");d||c&&!d||(c=zu(a,b,function(){pt(c,"loaded")||(nt(c),Vn(b),Ei(Ya(Wn,b),0))}))}
function zu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qf(a);Xb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function yu(a){var b=Md("A");Eb("This URL is never added to the DOM");Wb(b,new Mb(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ac(a)}
;function Au(){K.call(this);this.i=[]}
r(Au,K);Au.prototype.I=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.ka,void 0)}K.prototype.I.call(this)};function Bu(){Au.apply(this,arguments)}
r(Bu,Au);function Cu(a,b,c,d){K.call(this);var e=this;this.M=b;this.webPlayerContextConfig=d;this.Ta=!1;this.api={};this.Da=this.u=null;this.T=new L;this.i={};this.fa=this.Ea=this.elementId=this.Ua=this.config=null;this.Y=!1;this.l=this.A=null;this.Fa={};this.Mb=["onReady"];this.lastError=null;this.lb=NaN;this.L={};this.Nb=new Bu(this);this.na=0;this.j=this.m=a;re(this,Ya(pe,this.T));Du(this);Eu(this);re(this,Ya(pe,this.Nb));c?this.na=Ei(function(){e.loadNewVideoConfig(c)},0):d&&(Fu(this),Gu(this))}
r(Cu,K);l=Cu.prototype;l.getId=function(){return this.M};
l.loadNewVideoConfig=function(a){if(!this.h()){this.na&&(Fi(this.na),this.na=0);var b=a||{};b instanceof uu||(b=new uu(b));this.config=b;this.setConfig(a);Gu(this);this.isReady()&&Hu(this)}};
function Fu(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.M,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.M:a.config.attrs.id=a.M);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Ua=a;this.config=Iu(a);Fu(this);if(!this.Ea){var b;this.Ea=Ju(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Xd(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Xd(Number(a)||a))};
function Hu(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Ku(a){var b=!0,c=Lu(a);c&&a.config&&(a=Mu(a),b=pt(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function Gu(a){if(!a.h()&&!a.Y){var b=Ku(a);if(b&&"html5"===(Lu(a)?"html5":null))a.fa="html5",a.isReady()||Nu(a);else if(Ou(a),a.fa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Nu(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Pu(a,"player_bootstrap_method")?z("yt.player.Application.createAlternate")||z("yt.player.Application.create"):z("yt.player.Application.create");var e=a.config?Iu(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Nu(a)};
a.Y=!0;b?a.A():(tt(Mu(a),a.A),(b=Qu(a))&&wu(b),Ru(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function Lu(a){var b=Ld(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Nu(a){if(!a.h()){var b=Lu(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Pu(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Su(a)}else a.lb=Ei(function(){Nu(a)},50)}}
function Su(a){Du(a);a.Ta=!0;var b=Lu(a);if(b){a.u=Tu(a,b,"addEventListener");a.Da=Tu(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Tu(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);Hu(a);a.Ea&&a.Ea(a.api);a.T.ja("onReady",a.api)}
function Tu(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Up(f))}}}
function Du(a){a.Ta=!1;if(a.Da)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Da(b,a.i[b]);for(var c in a.L)a.L.hasOwnProperty(c)&&Fi(Number(c));a.L={};a.u=null;a.Da=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ua};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Ta};
function Eu(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Vn("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Vn("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Vn("a11y-announce",b)})}
l.addEventListener=function(a,b){var c=this,d=Ju(this,b);d&&(0<=fb(this.Mb,a)||this.i[a]||(b=Uu(this,a),this.u&&this.u(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&Ei(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=Ju(this,b))&&sg(this.T,a,b)};
function Ju(a,b){var c=b;if("string"===typeof b){if(a.Fa[b])return a.Fa[b];c=function(){var d=Ja.apply(0,arguments),e=z(b);if(e)try{e.apply(x,d)}catch(f){Tp(f)}};
a.Fa[b]=c}return c?c:null}
function Uu(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;x[c]=function(d){var e=Ei(function(){if(!a.h()){a.T.ja(b,null!=d?d:void 0);var f=a.L,g=String(e);g in f&&delete f[g]}},0);
tb(a.L,String(e))};
return c}
l.getPlayerType=function(){return this.fa||(Lu(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Ou(a){a.cancel();Du(a);a.fa=null;a.config&&(a.config.loaded=!1);var b=Lu(a);b&&(Ku(a)||!Ru(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.A&&At(Mu(this),this.A);Fi(this.lb);this.Y=!1};
l.I=function(){Ou(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Tp(b)}this.Fa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.Ua=this.config=this.api=null;delete this.m;delete this.j;K.prototype.I.call(this)};
function Ru(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Mu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Qu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Pu(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===ri(c||"","&")[b]}
function Iu(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?wb(e):e}return b}
;var Vu={},Wu="player_uid_"+(1E9*Math.random()>>>0);function Xu(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Ld(d):d;var e=Wu+"_"+Sa(d),f=Vu[e];if(f&&c)return Yu(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Cu(d,e,a,b);Vu[e]=f;Vn("player-added",f.api);re(f,function(){delete Vu[f.getId()]});
return f.api}
function Yu(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Zu=null,$u=null,av=null;function bv(){var a=Zu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function cv(a,b,c){a="ST-"+ac(a).toString(36);b=b?hc(b):"";c=c||5;zq()&&qj(a,b,c)}
;function dv(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=A("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=A("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=ec(window.location.href);g&&f.push(g);g=ec(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Wb(f,d),d=f.href),d&&(d=fc(d),f=d.indexOf("#"),d=0>f?d:d.substr(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:lq()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
cv(d,b,h)}else cv(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=ic(a,k)+m;var u=void 0===u?Wd:u;a:{u=void 0===u?Wd:u;for(k=0;k<u.length;++k)if(m=u[k],m instanceof Ud&&m.isValid(a)){u=new Fd(a,Dd);break a}u=void 0}c.href=Hd(u||Gd)}return!0}
;y("yt.setConfig",ai,void 0);y("yt.config.set",ai,void 0);y("yt.setMsg",qq,void 0);y("yt.msgs.set",qq,void 0);y("yt.logging.errors.log",Tp,void 0);
y("writeEmbed",function(){var a=A("PLAYER_CONFIG",void 0);if(!a){var b=A("PLAYER_VARS",void 0);b&&(a={args:b})}Hq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=A("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=wi(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));es();
if((c=A("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=wi(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Zu=Xu(a,c,!1)}else Zu=Xu(a);Zu.addEventListener("onVideoDataChange",bv);a=A("POST_MESSAGE_ID","player");A("ENABLE_JS_API")?av=new mu(Zu):A("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&($u=new tu(window.parent,
a,b),av=new qu(Zu,$u.connection));Dt();M("ytidb_create_logger_embed_killswitch")||nk();M("flush_gel_on_teardown")&&(a={},Xt||(Xt=new Wt),Xt.install((a.flush_logs={ka:function(){ap()}},a)));
M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?Ym():fn());M("embeds_enable_ua_ch_polyfill")&&eu();M("ytidb_clear_embedded_player")&&bf.N(function(){if(!Ls){Rq||(Rq=new Oq);var e=Rq;if(M("web_inject_fetch_manager")){var f={hc:Ks,Kb:Js};e.providers.set(f.hc,f)}f={ob:{feedbackEndpoint:br(Fs),modifyChannelNotificationPreferenceEndpoint:br(Gs),playlistEditEndpoint:br(Hs),subscribeEndpoint:br(Ds),unsubscribeEndpoint:br(Es),webPlayerShareEntityServiceEndpoint:br(Is)}};var g=M("web_enable_client_location_service")?
Yq.getInstance():void 0,h={};g&&(h.client_location=g);if(void 0===k){Iq.h||(Iq.h=new Iq);var k=Iq.h}if(void 0===m)if(M("web_inject_fetch_manager"))var m=e.resolve(Ks);else Js.h||(Js.h=new Js),m=Js.h;ss(f,m,k,h);Ls=rs.h}mt()})},void 0);
var ev=ji(function(){js();var a=uj.getInstance(),b=xj(119),c=1<window.devicePixelRatio;if(document.body&&Bf(document.body,"exp-invert-logo"))if(c&&!Bf(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Bf(d,"inverted-hdpi")){var e=zf(d);Af(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Bf(document.body,"inverted-hdpi")&&Cf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=yj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete tj[b]:(c=d.toString(16),
tj[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in tj)d.push(f+"="+encodeURIComponent(String(tj[f])));qj(b,d.join("&"),63072E3,a.i,c)}Vs.h||(Vs.h=new Vs);a=Vs.h;f=16623;var g=void 0===g?{}:g;Object.values(rq).includes(f)||(Up(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.C=[];g.rb?Ys(a,f,g):Zs(a,f,g)}),fv=ji(function(){Zu&&Zu.sendAbandonmentPing&&Zu.sendAbandonmentPing();
A("PL_ATT")&&Lt.dispose();for(var a=bf,b=0,c=Bt.length;b<c;b++)a.U(Bt[b]);Bt.length=0;zt("//static.doubleclick.net/instream/ad_status.js");Ct=!1;ai("DCLKSTAT",0);qe(av,$u);Zu&&(Zu.removeEventListener("onVideoDataChange",bv),Zu.destroy())});
window.addEventListener?(window.addEventListener("load",ev),M("embeds_web_enable_replace_unload_w_pagehide")?window.addEventListener("pagehide",fv):window.addEventListener("unload",fv)):window.attachEvent&&(window.attachEvent("onload",ev),window.attachEvent("onunload",fv));Za("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Mt);Za("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||Nt);
Za("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||Et);Za("yt.player.exports.navigate",z("yt.player.exports.navigate")||dv);Za("yt.util.activity.init",z("yt.util.activity.init")||Kn);Za("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||Nn);Za("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||Ln);}).call(this);
