parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||t(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,r){if(e){if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,r):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var c,i=document.querySelector(".start"),s=document.querySelector(".message-start"),d=document.querySelector(".message-lose"),u=document.querySelector(".message-win"),f=!1,l=0,m=4,v=4,h="ArrowLeft",g="ArrowRight",y="ArrowUp",L="ArrowDown";function w(){c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var e=0;e<m;e++)for(var r=0;r<v;r++){var t=document.createElement("div");t.classList.add("field-cell"),t.id="".concat(e,"-").concat(r),b(t,c[e][r]),document.querySelector(".game-field").append(t)}f=!1}function b(e,r){e.innerText="",e.classList.value="",e.classList.add("field-cell"),r>0&&(e.innerText=r,e.classList.add("field-cell--".concat(r)))}function S(){l=0,document.querySelector(".game-score").innerText=l,u.classList.add("hidden"),d.classList.add("hidden"),s.classList.remove("hidden"),c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(var e=0;e<m;e++)for(var r=0;r<v;r++){b(document.getElementById("".concat(e,"-").concat(r)),0)}}function p(){for(var e=0;e<m;e++)for(var r=0;r<v;r++)if(0===c[e][r])return!0;return!1}function A(){if(p)for(;;){var e=Math.floor(Math.random()*m),r=Math.floor(Math.random()*v);if(0===c[e][r]){var t=document.getElementById(e.toString()+"-"+r.toString()),n=Math.random()>=.1?2:4;c[e][r]=n,t.innerText=n,t.classList.add("field-cell--".concat(n));break}}}function E(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}function T(e){return e.filter(Boolean)}function k(e){for(var r=T(e),t=0;t<r.length-1;t++)r[t]===r[t+1]&&(r[t]*=2,r[t+1]=0,l+=r[t]);for(r=T(r);r.length<v;)r.push(0);return r}function q(){B("left")}function I(){B("right")}function M(){j("up")}function x(){j("down")}function B(r){for(var t=!1,n=0;n<m;n++){var o=c[n],a=e(o);"right"===r&&o.reverse(),o=k(o),"right"===r&&o.reverse(),c[n]=o,E(a,o)||(t=!0);for(var i=0;i<v;i++){b(document.getElementById("".concat(n,"-").concat(i)),c[n][i])}}t&&A()}function j(r){for(var t=!1,n=0;n<v;n++){var o=[c[0][n],c[1][n],c[2][n],c[3][n]],a=e(o);"down"===r&&o.reverse(),o=k(o),"down"===r&&o.reverse(),E(a,o)||(t=!0);for(var i=0;i<v;i++){c[i][n]=o[i],b(document.getElementById("".concat(i,"-").concat(n)),c[i][n])}}t&&A()}function O(){for(var e=!p(),r=!0,t=0;t<m;t++)for(var n=0;n<v;n++){if(n>0&&c[t][n]===c[t][n-1]){r=!1;break}if(n<v-1&&c[t][n]===c[t][n+1]){r=!1;break}if(t<m-1&&c[t][n]===c[t+1][n]){r=!1;break}if(t>0&&c[t][n]===c[t-1][n]){r=!1;break}}return r&&e}function R(){for(var e=0;e<m;e++)for(var r=0;r<v;r++)if(2048===c[e][r])return!0;return!1}window.onload=function(){w()},document.addEventListener("keydown",function(e){if(f){switch(e.code){case h:return q();case g:return I();case y:return M();case L:return x()}document.querySelector(".game-score").innerText=l,O()&&d.classList.remove("hidden"),R()&&u.classList.remove("hidden")}}),i.addEventListener("click",function(){i.classList.contains("start")?(i.classList.remove("start"),i.classList.add("restart"),i.innerHTML="Restart",s.classList.add("hidden"),f=!0,A(),A()):(i.classList.remove("restart"),i.classList.add("start"),i.innerText="Start",f=!1,S())});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.75695142.js.map