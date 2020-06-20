/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${i}`);class n{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],a=document.createTreeWalker(t.content,133,null,!1);let h=0,p=-1,c=0;const{strings:u,values:{length:m}}=e;for(;c<m;){const e=a.nextNode();if(null!==e){if(p++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)o(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=u[c],s=d.exec(t)[2],i=s.toLowerCase()+"$lit$",n=e.getAttribute(i);e.removeAttribute(i);const o=n.split(r);this.parts.push({type:"attribute",index:p,name:s,strings:o}),c+=o.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,n=t.split(r),a=n.length-1;for(let t=0;t<a;t++){let i,r=n[t];if(""===r)i=l();else{const e=d.exec(r);null!==e&&o(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(r)}s.insertBefore(i,e),this.parts.push({type:"node",index:++p})}""===n[a]?(s.insertBefore(l(),e),i.push(e)):e.data=n[a],c+=a}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&p!==h||(p++,t.insertBefore(l(),e)),h=p,this.parts.push({type:"node",index:p}),null===e.nextSibling?e.data="":(i.push(e),p--),c++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),c++}}else a.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const o=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},a=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:s},parts:i}=e,r=document.createTreeWalker(s,133,null,!1);let n=c(i),o=i[n],a=-1,l=0;const d=[];let h=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(d.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,n=c(i,n),o=i[n]}d.forEach(e=>e.parentNode.removeChild(e))}const p=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},c=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(a(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,m=e=>"function"==typeof e&&u.has(e),_={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let n,o=0,l=0,d=r.nextNode();for(;o<i.length;)if(n=i[o],a(n)){for(;l<n.index;)l++,"TEMPLATE"===d.nodeName&&(s.push(d),r.currentNode=d.content),null===(d=r.nextNode())&&(r.currentNode=s.pop(),d=r.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=` ${s} `;class v{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let n=0;n<e;n++){const e=this.strings[n],o=e.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===e.indexOf("--\x3e",o+1);const a=d.exec(e);t+=null===a?e+(r?f:i):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),w=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class b{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new x(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(S(e)||!w(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===_||S(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=_,e(this)}this.value!==_&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}const e=this.__pendingValue;e!==_&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):w(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof g&&this.value.template===t)this.value.update(e.values);else{const s=new g(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const r of e)s=t[i],void 0===s&&(s=new P(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(r),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class C{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue===_)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=_}}class N extends b{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends x{}let A=!1;(()=>{try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class ${constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue===_)return;const e=this.__pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=k(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=_}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const k=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function E(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const r=e.strings.join(s);return i=t.keyString.get(r),void 0===i&&(i=new n(e,e.getTemplateElement()),t.keyString.set(r,i)),t.stringsArray.set(e.strings,i),i}const V=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,s,i){const r=t[0];if("."===r){return new N(e,t.slice(1),s).parts}if("@"===r)return[new $(e,t.slice(1),i.eventContext)];if("?"===r)return[new C(e,t.slice(1),s)];return new b(e,t,s).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const O=(e,...t)=>new v(e,t,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,M=(e,t)=>`${e}--${t}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const q=e=>t=>{const i=M(t.type,e);let r=V.get(i);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},V.set(i,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(s);if(o=r.keyString.get(a),void 0===o){const s=t.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(s,e),o=new n(t,s),r.keyString.set(a,o)}return r.stringsArray.set(t.strings,o),o},F=["html","svg"],z=new Set,B=(e,t,s)=>{z.add(e);const i=s?s.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{F.forEach(t=>{const s=V.get(M(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),h(e,s)})})})(e);const a=i.content;s?function(e,t,s=null){const{element:{content:i},parts:r}=e;if(null==s)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let o=c(r),a=0,l=-1;for(;n.nextNode();){l++;for(n.currentNode===s&&(a=p(t),s.parentNode.insertBefore(t,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=c(r,o);return}o=c(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),h(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const L={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},j=(e,t)=>t!==e&&(t==t||e==e),I={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:j};class H extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=I){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this._requestUpdate(e,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||I}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=j){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||L,r="function"==typeof i?i:i.fromAttribute;return r?r(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||L.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=I){const i=this.constructor,r=i._attributeNameForProperty(e,s);if(void 0!==r){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,r=i.getPropertyOptions(e);i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}H.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const W="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class J{constructor(e,t){if(t!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(W?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const K=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof J)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new J(s,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const X={};class Q extends H{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,s)=>e.reduceRight((e,s)=>Array.isArray(s)?t(s,e):(e.add(s),e),s),s=t(e,new Set),i=[];s.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?W?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==X&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return X}}Q.finalized=!0,Q.render=(e,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const r=i.scopeName,n=R.has(s),o=D&&11===s.nodeType&&!!s.host,a=o&&!z.has(r),l=a?document.createDocumentFragment():s;if(((e,s,i)=>{let r=R.get(s);void 0===r&&(t(s,s.firstChild),R.set(s,r=new P(Object.assign({templateFactory:E},i))),r.appendInto(s)),r.setValue(e),r.commit()})(e,l,Object.assign({templateFactory:q(r)},i)),a){const e=R.get(l);R.delete(l);const i=e.value instanceof g?e.value.template:void 0;B(r,l,i),t(s,s.firstChild),s.appendChild(l),R.set(s,e)}!n&&o&&window.ShadyCSS.styleElement(s.host)};var Y=["Aspirin","Clopidogrel","Ramipril","Atorvastatin","Omeprazole","ACE Inhibitor","Diuretic","Orange juice"];const Z=[[{type:"textarea",name:"presentation",label:"history",placeholder:"Presentation... Anaesthetic history... Past medical history..."},{type:"textarea",name:"dh",label:"drug history",datalist:!0},{type:"textarea",name:"allergies"},{type:"group",name:"airway"},{type:"textarea",name:"discussions"}],[{type:"radio",name:"frailty",label:"frailty",options:["1 Very fit","2 well","3 Managing well","4 Vulnerable","5 Mildly Frail","6 Moderately frail","7 Severely frail","8 Very severely frail","9 Terminal illness","N/a"]},{type:"group",name:"observations"},{type:"group",name:"investigations"}],[{type:"checklists",name:"risks"}]],ee={airway:[{type:"radio",name:"mallampati",label:"Mallampati",options:["Class 1","Class 2","Class 3","Class 4"]},{type:"radio",name:"calder",label:"Calder",options:["A","B","C"]},{type:"radio",name:"tmd",label:"TMD",options:[">6cm","<6cm","n/a"]},{type:"check",name:"teeth",label:"Teeth",header:!0,options:["No issues","Caps/crowns","Dentures"]},{type:"textarea",name:"airway comments"}],observations:[{type:"text",name:"weight",placeholder:"Weigth in kg"},{type:"text",name:"height",placeholder:"Weigth in m"},{type:"text",name:"HR"},{type:"text",name:"BP"},{type:"text",name:"RR"},{type:"text",name:"SpO2"},{type:"text",name:"Temp"}],investigations:[{type:"date",name:"covid test date"},{type:"radio",name:"covid",options:["Positive","Negative","Pending","Not done"]},{type:"date",name:"blood result date"},{type:"text",name:"Hb"},{type:"text",name:"WBC"},{type:"text",name:"Plts"},{type:"text",name:"Na"},{type:"text",name:"K"},{type:"text",name:"Urea"},{type:"text",name:"Creat"},{type:"text",name:"PT"},{type:"text",name:"APTT"},{type:"text",name:"pH"},{type:"text",name:"BE"},{type:"text",name:"Lactate"},{type:"text",name:"ECG"},{type:"text",name:"ChestX"}],risks:[["Risks","Very common","Common","Uncommon","Rare","Very Rare","Extremely rare"],[["GA (select all)"],["Sore throat","Sickness","Shivering","Thirst","Temp memory loss"],["Pain injection site","Minor lip tongue injury"],["Minor nerve injury"],["P. nerve damage (perm.)","Corneal abrasion","Dental requiring treatment","Anaphylaxis"],["Anaesthetic awareness"],["Vision loss","Death as direct","result of anaesthesia"]],[["Regional (select all)"],["Low BP Sickness","Itching"],[],["Headache","Respiratory depression"],["High block","Temp nerve damage"],["LA toxicity Infection","Perm. nerve damage"],[]],[["Lines (select all)"],[],[],["Infection","Bleeding","Arrhythmia","Pneumothorax","thrombosis/embolu"],[],[],[]]]},te=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1);customElements.define("preop-view",class extends Q{static get styles(){return[K`
        :host {
        }
        form {
          display: flex;
          flex-wrap: wrap;
        }
        form .col {
          max-width: 300px;
          padding: 15px;
        }
        form div:last-child {
          max-width: 400px
        }
        h2,
        .frailty h3,
        .group:first-child {
          display: block;
          text-transform: capitalize;
          font-size: 1rem;
          font-weight: 500;
          line-height: 2rem;
        }
        h3 {
          text-transform: capitalize;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1rem;
          display: inline-block;
          padding: 0;
          margin: 0;
          min-width: 50px;
        }
        .grid div,
        .mallampati div,
        .teeth div,
        .tmd div,
        .covid div,
        .calder div {
          display: inline-block;
        }
        textarea {
          box-sizing: border-box;
          width: 100%;
        }
        .grid {
          display: grid;
          grid-template-rows: repeat(7, auto);
          grid-auto-flow: column;
          font-size: 0.8rem;
        }
        .grid div {
          border-top: 1px solid #000;
          border-right: 1px solid #000;
          box-sizing: border-box;
          padding: 5px;
        }
        button[name="clipboard"] {
          padding: 20px;
        }
      `]}constructor(){super()}firstUpdated(){this.drugsPicker=this.shadowRoot.querySelector('[name="picker"]'),this.drugsTextarea=this.shadowRoot.querySelector('[name="dh"]')}_onKeyUp(e){}_onChange(e){}_addDrugToList(e){this.drugsTextarea.value=this.drugsTextarea.value+e+"\n",this.drugsPicker.value=""}_onClickDatalist(e){const t=this.drugsPicker.value;Y.includes(t)&&this._addDrugToList(t)}_onClickDrugButton(e){this._addDrugToList(this.drugsPicker.value)}_parseFormResults(e){const t={};for(let[s,i]of e.entries()){["presentation","allergies","airway"].includes(s)&&(i=`${te(s)}: ${i}`);["mallampati","calder","tmd","teeth"].includes(s)&&(t.airwayGroup+=`${te(s)} ${i}; `),t[s]=i,console.log(s,i)}return t}async _copyToClipboard(e){const t=this.shadowRoot.querySelector("form"),s=new FormData(t),i=this._parseFormResults(s);let r=`\n____________\ncovid: test\n____________\n${i.presentation}\n____________\nDrugs:\n${i.dh}\n____________\n${i.allergies}\n____________\nAirway:\n${i.airwayGroup}\n${i["airway comments"]}\n____________\n`.trim();const n=await navigator.permissions.query({name:"clipboard-write"});if("granted"===n.state){const e=new ClipboardItem({"text/plain":new Blob([r],{type:"text/plain"})});await navigator.clipboard.write([e]).catch(e=>console.error(e)),alert("Copied to clipboard!")}else console.error("permission denied",n)}renderTextarea(e){const{name:t,label:s,placeholder:i,datalist:r}=e;return O`
      <div>
        <h2>${s||t}</h2>
        ${r?O`
            <label for="picker">Choose your browser from the list:</label>
            <input list="items" name="picker" @input="${this._onClickDatalist}">
            <button type="button" @click="${this._onClickDrugButton}">Add</button>
            <datalist id="items">${Y.map(e=>O`<option value="${e}">`)}</datalist>
          `:""}
        <textarea name="${t}" cols="50" rows="5" placeholder="${i||""}"></textarea>
      </div>`}renderText(e){const{name:t,label:s,placeholder:i}=e;return O`
      <div class="${t}">
        <h3>${s||t}</h3>
        <input type="text" name="${t}" cols="50" rows="5" placeholder="${i||""}">
      </div>`}renderRadio(e){const{name:t,label:s,options:i}=e;return O`
      <section class="${t}">
        <h3>${s||t}</h3>
        ${i.map(e=>O`
          <div>
            <input type="radio" id="${t}" name="${t}" value="${e}">
            <label>${e}</label>
          </div>
        `)}
      </section>`}renderCheck(e){const{name:t,label:s,header:i,options:r}=e;return O`
      <div class="${t}">
        ${i?O`<h3>${s||t||""}</h3>`:""}
        ${r.map(e=>O`
          <input type="checkbox" id="${t}" name="${t}" value="${e}">
          <label>${e}</label>
        `)}
      </div>`}renderDate(e){const{name:t,label:s}=e;return O`
      <div class="${t}">
        <label>${s||t}</label>
        <input type="date" name="${t}">
      </div>`}renderGroup(e){const{name:t,label:s}=e;return O`
      <div class="group">
        <h2>${s||t}</h2>
        ${ee[t].map(e=>O`${this.renderForm(e)}`)}
      </div>`}renderChecklists(e){const{name:t,label:s}=e;return O`
      <div>
        <h2>${s||t}</h2>
        <div class="grid">
          ${ee[t].map((e,t)=>{if(0==t)return O`${e.map(e=>O`<div>${e}</div>`)}`;const s=1==t?"GA":2==t?"RA":"Lines";return e.map(e=>this.renderForm({type:"check",name:s,header:null,options:e||[]}))})}
        </div>
      </div>`}renderForm(e){switch(e.type){case"textarea":return this.renderTextarea(e);case"text":return this.renderText(e);case"radio":return this.renderRadio(e);case"check":return this.renderCheck(e);case"date":return this.renderDate(e);case"group":return this.renderGroup(e);case"checklists":return this.renderChecklists(e)}}render(){return O`
      <form name="preop">
        ${Z.map(e=>O`<div class="col">${e.map(e=>this.renderForm(e))}</div>`)}
      </form>
      <button name="clipboard" type="button" @click="${this._copyToClipboard}">Copy text to clipboard you might have to use ctrl c</button>
    `}});
//# sourceMappingURL=main.464b31d8.js.map
