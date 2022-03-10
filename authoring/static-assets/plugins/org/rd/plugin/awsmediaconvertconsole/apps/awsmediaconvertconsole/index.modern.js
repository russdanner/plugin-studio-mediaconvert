var { forwardRef, useContext, createContext, createElement, Fragment: Fragment$1, isValidElement, useLayoutEffect, useEffect, useRef, useCallback, useMemo, Children, cloneElement, useState, useImperativeHandle, Suspense: Suspense$1 } = craftercms.libs.React;
var React = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
var _utils = craftercms.libs.MaterialUI && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI, 'default') ? craftercms.libs.MaterialUI['default'] : craftercms.libs.MaterialUI;
var { createIntl, createIntlCache, useIntl } = craftercms.libs.ReactIntl;
var { Skeleton, Tooltip, Switch, Dialog, DialogTitle, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, FormControlLabel } = craftercms.libs.MaterialUI;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var i="@import";var p="@keyframes";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return (((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return (e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E>0?z(G,--E):0;if(B--,F===10)B=1,q--;return F}function L(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function N(){return z(G,E)}function P(){return E}function Q(e,r){return C(G,e,r)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return q=B=1,D=A(G=e),E=0,[]}function U(e){return G="",e}function V(e){return g(Q(E-1,_(e===91?e+2:e===40?e+1:e)))}function X(e){while(F=N())if(F<33)L();else break;return R(e)>2||R(F)>3?"":" "}function Z(e,r){while(--r&&L())if(F<48||F>102||F>57&&F<65||F>70&&F<97)break;return Q(e,P()+(r<6&&N()==32&&L()==32))}function _(e){while(L())switch(F){case e:return E;case 34:case 39:return _(e===34||e===39?e:F);case 40:if(e===41)_(e);break;case 92:L();break}return E}function ee(e,r){while(L())if(e+F===47+10)break;else if(e+F===42+42&&N()===47)break;return "/*"+Q(r,E-1)+"*"+d(e===47?e:L())}function re(e){while(!R(N()))L();return Q(e,E)}function ae(e){return U(ce("",null,null,null,[""],e=T(e),0,[0],e))}function ce(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(w)switch(p=k,k=L()){case 34:case 39:case 91:case 40:z+=V(k);break;case 9:case 10:case 13:case 32:z+=X(p);break;case 92:z+=Z(P()-1,7);continue;case 47:switch(N()){case 42:case 47:O(te(ee(L(),P()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=A(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&A(z)-l)O(h>32?se(z+";",c,a,l-1):se(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ne(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)ce(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:ce(e,j,j,c&&O(ne(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:ce(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,b=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&K()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(N()===45)z+=V(L());v=N(),o=A(m=z+=re(P())),k++;break;case 45:if(p===45&&A(z)==2)b=0;}}return t}function ne(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,m=C(e,v+1,v=k(w=u[b])),x=e;d<p;++d)if(x=g(w>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function te(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function se(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function ue(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~j(c,"stretch")?ue(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:return y(c,":",":"+a)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function ie(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function fe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case n:e.value=e.props.join(",");}return A(a=ie(e.children,s))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function ve(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=ue(c.value,c.length);break;case p:return ie([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ie([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return ie([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return ""}))}}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = N(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (R(character)) {
      break;
    }

    L();
  }

  return Q(begin, E);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (R(character)) {
      case 0:
        // &\f
        if (character === 38 && N() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(E - 1, points, index);
        break;

      case 2:
        parsed[index] += V(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = N() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d(character);
    }
  } while (character = L());

  return parsed;
};

var getRules = function getRules(value, points) {
  return U(toRules(T(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var isBrowser = typeof document !== 'undefined';
var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [ve];

var createCache = function createCache(options) {
  var key = options.key;

  if (isBrowser && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (isBrowser) {
    var currentSheet;
    var finalizingPlugins = [fe,  le(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return ie(ae(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [fe];

    var _serializer = oe(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return ie(ae(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d$1=b?Symbol.for("react.portal"):60106,e$1=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g$1=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k$1=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n$1=b?Symbol.for("react.forward_ref"):60112,p$1=b?Symbol.for("react.suspense"):60113,q$1=b?
Symbol.for("react.suspense_list"):60120,r$1=b?Symbol.for("react.memo"):60115,t$1=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x$1=b?Symbol.for("react.responder"):60118,y$1=b?Symbol.for("react.scope"):60119;
function z$1(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m$1:case e$1:case g$1:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$1:case n$1:case t$1:case r$1:case h:return a;default:return u}}case d$1:return u}}}function A$1(a){return z$1(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k$1;var ContextProvider=h;var Element=c$1;var ForwardRef=n$1;var Fragment=e$1;var Lazy=t$1;var Memo=r$1;var Portal=d$1;
var Profiler=g$1;var StrictMode=f;var Suspense=p$1;var isAsyncMode=function(a){return A$1(a)||z$1(a)===l};var isConcurrentMode=A$1;var isContextConsumer=function(a){return z$1(a)===k$1};var isContextProvider=function(a){return z$1(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef=function(a){return z$1(a)===n$1};var isFragment=function(a){return z$1(a)===e$1};var isLazy=function(a){return z$1(a)===t$1};
var isMemo=function(a){return z$1(a)===r$1};var isPortal=function(a){return z$1(a)===d$1};var isProfiler=function(a){return z$1(a)===g$1};var isStrictMode=function(a){return z$1(a)===f};var isSuspense=function(a){return z$1(a)===p$1};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k$1||a.$$typeof===n$1||a.$$typeof===w||a.$$typeof===x$1||a.$$typeof===y$1||a.$$typeof===v)};var typeOf=z$1;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$1 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$1 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser$2 = typeof document !== 'undefined';

var EmotionCacheContext = /* #__PURE__ */createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$2) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */createContext({});

var _extends_1$1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};
var isBrowser$3 = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/createElement(finalTag, newProps);

      if (!isBrowser$3 && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/createElement(Fragment$1, null, /*#__PURE__*/createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
      }

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends$1({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

/** @license MUI v5.0.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled(tag, options) {
  const stylesFactory = newStyled(tag, options);

  return stylesFactory;
}

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$2.apply(this, arguments);
}

function isPlainObject(item) {
  return item !== null && typeof item === 'object' && // TS thinks `item is possibly null` even though this was our first guard.
  // @ts-expect-error
  item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends$2({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;

  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( formatMuiErrorMessage(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui-org/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

const useEnhancedEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */

function useEventCallback(fn) {
  const ref = useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return useCallback((...args) => // @ts-expect-error hide `this`
  // tslint:disable-next-line:ban-comma-operator
  (0, ref.current)(...args), []);
}

function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout = null;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */

function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  const {
    target
  } = event;

  try {
    return target.matches(':focus-visible');
  } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  } // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}

function useIsFocusVisible() {
  const ref = useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = useRef(false);
  /**
   * Should be called if a blur event is fired
   */

  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }

    return false;
  }
  /**
   * Should be called if a blur event is fired
   */


  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }

    return false;
  }

  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

function _extends$3() {
  _extends$3 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$3.apply(this, arguments);
}

function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

// For instance with the first breakpoint xs: [xs, sm[.

const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablets
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screens

};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }

      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);
  return output;
}

function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;

  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = Object.keys(breakpointOutput).length === 0;

    if (isBreakpointUnused) {
      delete acc[key];
    }

    return acc;
  }, style);
}

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

function getValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;

  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }

  if (transform) {
    value = transform(value);
  }

  return value;
}

function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  const fn = props => {
    if (props[prop] == null) {
      return null;
    }

    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};

    const styleFromPropValue = propValueFinal => {
      let value = getValue(themeMapping, transform, propValueFinal);

      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }

      if (cssProperty === false) {
        return value;
      }

      return {
        [cssProperty]: value
      };
    };

    return handleBreakpoints(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  {};
  fn.filterProps = [prop];
  return fn;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }

      return acc;
    }, {});
  };

  fn.propTypes =  {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function memoize$1(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

const getCssProperties = memoize$1(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey) || defaultValue;

  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8);
}
function getValue$1(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue$1(transformer, propValue);
    return acc;
  }, {});
}

function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }

  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}

function style$1(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}

function spacing(props) {
  return style$1(props, spacingKeys);
}

spacing.propTypes =  {};
spacing.filterProps = spacingKeys;

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
const borderTop = style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
const borderRight = style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
const borderBottom = style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
const borderLeft = style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
const borderColor = style({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderTopColor = style({
  prop: 'borderTopColor',
  themeKey: 'palette'
});
const borderRightColor = style({
  prop: 'borderRightColor',
  themeKey: 'palette'
});
const borderBottomColor = style({
  prop: 'borderBottomColor',
  themeKey: 'palette'
});
const borderLeftColor = style({
  prop: 'borderLeftColor',
  themeKey: 'palette'
});
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

    const styleFromPropValue = propValue => ({
      borderRadius: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }

  return null;
};
borderRadius.propTypes =  {};
borderRadius.filterProps = ['borderRadius'];
const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);

const displayPrint = style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = style({
  prop: 'display'
});
const overflow = style({
  prop: 'overflow'
});
const textOverflow = style({
  prop: 'textOverflow'
});
const visibility = style({
  prop: 'visibility'
});
const whiteSpace = style({
  prop: 'whiteSpace'
});
var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

const flexBasis = style({
  prop: 'flexBasis'
});
const flexDirection = style({
  prop: 'flexDirection'
});
const flexWrap = style({
  prop: 'flexWrap'
});
const justifyContent = style({
  prop: 'justifyContent'
});
const alignItems = style({
  prop: 'alignItems'
});
const alignContent = style({
  prop: 'alignContent'
});
const order = style({
  prop: 'order'
});
const flex = style({
  prop: 'flex'
});
const flexGrow = style({
  prop: 'flexGrow'
});
const flexShrink = style({
  prop: 'flexShrink'
});
const alignSelf = style({
  prop: 'alignSelf'
});
const justifyItems = style({
  prop: 'justifyItems'
});
const justifySelf = style({
  prop: 'justifySelf'
});
const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);

const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      gap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }

  return null;
};
gap.propTypes =  {};
gap.filterProps = ['gap'];
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      columnGap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }

  return null;
};
columnGap.propTypes =  {};
columnGap.filterProps = ['columnGap'];
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      rowGap: getValue$1(transformer, propValue)
    });

    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }

  return null;
};
rowGap.propTypes =  {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style({
  prop: 'gridColumn'
});
const gridRow = style({
  prop: 'gridRow'
});
const gridAutoFlow = style({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style({
  prop: 'gridTemplateAreas'
});
const gridArea = style({
  prop: 'gridArea'
});
const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

const color = style({
  prop: 'color',
  themeKey: 'palette'
});
const bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
const backgroundColor = style({
  prop: 'backgroundColor',
  themeKey: 'palette'
});
const palette = compose(color, bgcolor, backgroundColor);

const position = style({
  prop: 'position'
});
const zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const top = style({
  prop: 'top'
});
const right = style({
  prop: 'right'
});
const bottom = style({
  prop: 'bottom'
});
const left = style({
  prop: 'left'
});
var positions = compose(position, zIndex, top, right, bottom, left);

const boxShadow = style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});

function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}

const width = style({
  prop: 'width',
  transform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };

    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }

  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style({
  prop: 'minWidth',
  transform
});
const height = style({
  prop: 'height',
  transform
});
const maxHeight = style({
  prop: 'maxHeight',
  transform
});
const minHeight = style({
  prop: 'minHeight',
  transform
});
const sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform
});
const sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform
});
const boxSizing = style({
  prop: 'boxSizing'
});
const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = style({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = style({
  prop: 'letterSpacing'
});
const lineHeight = style({
  prop: 'lineHeight'
});
const textAlign = style({
  prop: 'textAlign'
});
const typographyVariant = style({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography'
});
const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);

const filterPropsMapping = {
  borders: borders.filterProps,
  display: display.filterProps,
  flexbox: flexbox.filterProps,
  grid: grid.filterProps,
  positions: positions.filterProps,
  palette: palette.filterProps,
  shadows: boxShadow.filterProps,
  sizing: sizing.filterProps,
  spacing: spacing.filterProps,
  typography: typography.filterProps
};
const styleFunctionMapping = {
  borders,
  display,
  flexbox,
  grid,
  positions,
  palette,
  shadows: boxShadow,
  sizing,
  spacing,
  typography
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach(propName => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction ? styleFunction(inputProps) : {
    [prop]: value
  };
}

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

function styleFunctionSx(props) {
  const {
    sx: styles,
    theme = {}
  } = props || {};

  if (!styles) {
    return null;
  }

  let stylesObject = styles;

  if (typeof styles === 'function') {
    stylesObject = styles(theme);
  } else if (typeof styles !== 'object') {
    // value
    return styles;
  }

  const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
  const breakpointsKeys = Object.keys(emptyBreakpoints);
  let css = emptyBreakpoints;
  Object.keys(stylesObject).forEach(styleKey => {
    const value = callIfFn(stylesObject[styleKey], theme);

    if (typeof value === 'object') {
      if (propToStyleFunction[styleKey]) {
        css = merge(css, getThemeValue(styleKey, value, theme));
      } else {
        const breakpointsValues = handleBreakpoints({
          theme
        }, value, x => ({
          [styleKey]: x
        }));

        if (objectsHaveSameKeys(breakpointsValues, value)) {
          css[styleKey] = styleFunctionSx({
            sx: value,
            theme
          });
        } else {
          css = merge(css, breakpointsValues);
        }
      }
    } else {
      css = merge(css, getThemeValue(styleKey, value, theme));
    }
  });
  return removeUnusedBreakpoints(breakpointsKeys, css);
}

styleFunctionSx.filterProps = ['sx'];

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["sx"];

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = _objectWithoutPropertiesLoose$1(props, _excluded);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  return _extends$3({}, otherProps, {
    sx: _extends$3({}, systemProps, inSx)
  });
}

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

const _excluded$1 = ["values", "unit", "step"];

function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablets
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screens

    },
    unit = 'px',
    step = 5
  } = breakpoints,
        other = _objectWithoutPropertiesLoose$1(breakpoints, _excluded$1);

  const keys = Object.keys(values);

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }

  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  return _extends$3({
    keys,
    values,
    up,
    down,
    between,
    only,
    unit
  }, other);
}

const shape = {
  borderRadius: 4
};

/* tslint:enable:unified-signatures */
function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  const transform = createUnarySpacing({
    spacing: spacingInput
  });

  const spacing = (...argsInput) => {

    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };

  spacing.mui = true;
  return spacing;
}

const _excluded$2 = ["breakpoints", "palette", "spacing", "shape"];

function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options,
        other = _objectWithoutPropertiesLoose$1(options, _excluded$2);

  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _extends$3({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: _extends$3({}, shape, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}

const ThemeContext$1 = /*#__PURE__*/createContext(null);

function useTheme() {
  const theme = useContext(ThemeContext$1);

  return theme;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function useTheme$1(defaultTheme = null) {
  const contextTheme = useTheme();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme = createTheme();

function useTheme$2(defaultTheme = systemDefaultTheme) {
  return useTheme$1(defaultTheme);
}

const _excluded$3 = ["variant"];

function isEmpty(string) {
  return string.length === 0;
}
/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created.
 */


function propsToClassKey(props) {
  const {
    variant
  } = props,
        other = _objectWithoutPropertiesLoose$1(props, _excluded$3);

  let classKey = variant || '';
  Object.keys(other).sort().forEach(key => {
    if (key === 'color') {
      classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

const _excluded$4 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
      _excluded2 = ["theme"],
      _excluded3 = ["theme"];

function isEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}

const getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }

  return null;
};

const getVariantStyles = (name, theme) => {
  let variants = [];

  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }

  const variantsStyles = {};
  variants.forEach(definition => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};

const variantsResolver = (props, styles, theme, name) => {
  var _theme$components, _theme$components$nam;

  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

  if (themeVariants) {
    themeVariants.forEach(themeVariant => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach(key => {
        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });

      if (isMatch) {
        variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
      }
    });
  }

  return variantsStyles;
};

function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme$1 = createTheme();

function createStyled$1(input = {}) {
  const {
    defaultTheme = systemDefaultTheme$1,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  return (tag, inputOptions = {}) => {
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions,
          options = _objectWithoutPropertiesLoose$1(inputOptions, _excluded$4); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
    const skipSx = inputSkipSx || false;
    let label;

    let shouldForwardPropOption = shouldForwardProp;

    if (componentSlot === 'Root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    }

    const defaultStyledResolver = styled(tag, _extends$3({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));

    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
        // On the server emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        // eslint-disable-next-line no-underscore-dangle
        return typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg ? _ref => {
          let {
            theme: themeInput
          } = _ref,
              other = _objectWithoutPropertiesLoose$1(_ref, _excluded2);

          return stylesArg(_extends$3({
            theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;

      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);

          if (styleOverrides) {
            return overridesResolver(props, styleOverrides);
          }

          return null;
        });
      }

      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }

      if (!skipSx) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          return styleFunctionSx(_extends$3({}, props, {
            theme
          }));
        });
      }

      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === 'function') {
        // If the type is function, we need to define the default theme.
        transformedStyleArg = _ref2 => {
          let {
            theme: themeInput
          } = _ref2,
              other = _objectWithoutPropertiesLoose$1(_ref2, _excluded3);

          return styleArg(_extends$3({
            theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
          }, other));
        };
      }

      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

      return Component;
    };

    return muiStyledResolver;
  };
}

/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }

  const output = _extends$3({}, props); // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.components[name].defaultProps;
  let propName;

  for (propName in defaultProps) {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}

function useThemeProps({
  props,
  name,
  defaultTheme
}) {
  const theme = useTheme$2(defaultTheme);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min = 0, max = 1) {

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error( formatMuiErrorMessage(9, color));
  }

  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;

  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();

    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].substr(1);
    }

    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error( formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }

  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }

  return `${type}(${values})`;
}
/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }

  return recomposeColor(color);
}
/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }

        acc.push(getUtilityClass(key));
      }

      return acc;
    }, []).join(' ');
  });
  return output;
}

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

const defaultGenerator = componentName => componentName;

const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },

    generate(componentName) {
      return generate(componentName);
    },

    reset() {
      generate = defaultGenerator;
    }

  };
};

const ClassNameGenerator = createClassNameGenerator();

const globalStateClassesMapping = {
  active: 'Mui-active',
  checked: 'Mui-checked',
  completed: 'Mui-completed',
  disabled: 'Mui-disabled',
  error: 'Mui-error',
  expanded: 'Mui-expanded',
  focused: 'Mui-focused',
  focusVisible: 'Mui-focusVisible',
  required: 'Mui-required',
  selected: 'Mui-selected'
};
function generateUtilityClass(componentName, slot) {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || `${ClassNameGenerator.generate(componentName)}-${slot}`;
}

function generateUtilityClasses(componentName, slots) {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot);
  });
  return result;
}

function createMixins(breakpoints, spacing, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}

const common = {
  black: '#000',
  white: '#fff'
};

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};

const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};

const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};

const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};

const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};

const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};

const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};

const _excluded$5 = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: common.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212'
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}

function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400]
    };
  }

  return {
    main: blue[700],
    light: blue[400],
    dark: blue[800]
  };
}

function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400]
    };
  }

  return {
    main: purple[500],
    light: purple[300],
    dark: purple[700]
  };
}

function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red[500],
      light: red[300],
      dark: red[700]
    };
  }

  return {
    main: red[700],
    light: red[400],
    dark: red[800]
  };
}

function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue[400],
      light: lightBlue[300],
      dark: lightBlue[700]
    };
  }

  return {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900]
  };
}

function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green[400],
      light: green[300],
      dark: green[700]
    };
  }

  return {
    main: green[800],
    light: green[500],
    dark: green[900]
  };
}

function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange[400],
      light: orange[300],
      dark: orange[700]
    };
  }

  return {
    main: '#ED6C02',
    // closest to orange[800] that pass 3:1.
    light: orange[500],
    dark: orange[900]
  };
}

function createPalette(palette) {
  const {
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette,
        other = _objectWithoutPropertiesLoose(palette, _excluded$5);

  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    return contrastText;
  }

  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = _extends({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.hasOwnProperty('main')) {
      throw new Error( formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
    }

    if (typeof color.main !== 'string') {
      throw new Error( formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  const modes = {
    dark,
    light
  };

  const paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common,
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}

const _excluded$6 = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
        {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref,
        other = _objectWithoutPropertiesLoose(_ref, _excluded$6);

  const coef = fontSize / 14;

  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);

  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

const _excluded$7 = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}

function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }

  const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);

  const mergedDuration = _extends({}, duration, inputTransitions.duration);

  const create = (props = ['all'], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options,
          other = _objectWithoutPropertiesLoose(options, _excluded$7);

    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };

  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex$1 = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

const _excluded$8 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function createTheme$1(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options,
        other = _objectWithoutPropertiesLoose(options, _excluded$8);

  const palette = createPalette(paletteInput);
  const systemTheme = createTheme(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex$1)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);

  return muiTheme;
}

const defaultTheme = createTheme$1();

function useThemeProps$1({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme
  });
}

const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
const styled$1 = createStyled$1({
  defaultTheme,
  rootShouldForwardProp
});

function _extends$4() {
  _extends$4 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$4.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var TransitionGroupContext = React.createContext(null);

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values$1 = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends$4({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose$2(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values$1(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/React.createElement(Component, props, children));
  };

  return TransitionGroup;
}(React.Component);

TransitionGroup.propTypes =  {};
TransitionGroup.defaultProps = defaultProps;

function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);

  if (!inProp && !leaving) {
    setLeaving(true);
  }

  useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/jsxRuntime.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/jsxRuntime.jsx("span", {
      className: childClassName
    })
  });
}

const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

const _excluded$9 = ["center", "classes", "className"];

let _$1 = t => t,
    _t,
    _t2,
    _t3,
    _t4;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t || (_t = _$1`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2 || (_t2 = _$1`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3 || (_t3 = _$1`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled$1('span', {
  name: 'MuiTouchRipple',
  slot: 'Root',
  skipSx: true
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
}); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.

const TouchRippleRipple = styled$1(Ripple, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})(_t4 || (_t4 = _$1`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

const TouchRipple = /*#__PURE__*/forwardRef(function TouchRipple(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiTouchRipple'
  });

  const {
    center: centerProp = false,
    classes = {},
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$9);

  const [ripples, setRipples] = useState([]);
  const nextKey = useRef(0);
  const rippleCallback = useRef(null);
  useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  const ignoringMouseDown = useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  const startTimer = useRef(null); // This is the hook called once the previous timeout is ready.

  const startTimerCommit = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntime.jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = useCallback((event = {}, options = {}, cb) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes

    } = options;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    let rippleX;
    let rippleY;
    let rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size is even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = useCallback((event, cb) => {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/jsxRuntime.jsx(TouchRippleRoot, _extends({
    className: clsx(classes.root, touchRippleClasses.root, className),
    ref: container
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(TransitionGroup, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});

function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

const _excluded$a = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"];

const useUtilityClasses = ownerState => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }

  return composedClasses;
};

const ButtonBaseRoot = styled$1('button', {
  name: 'MuiButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.

  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

const ButtonBase = /*#__PURE__*/forwardRef(function ButtonBase(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiButtonBase'
  });

  const {
    action,
    centerRipple = false,
    children,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = 'a',
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    type
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$a);

  const buttonRef = useRef(null);
  const rippleRef = useRef(null);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback(event => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  const keydownRef = useRef(false);
  const handleKeyDown = useEventCallback(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;

  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }

  const buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef);
  const [mountedState, setMountedState] = useState(false);
  useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });

  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState: ownerState,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ?
    /*#__PURE__*/

    /* TouchRipple is only needed client-side, x2 boost on the server. */
    jsxRuntime.jsx(TouchRipple, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});

/**
 * @ignore - internal component.
 */

const ListContext = /*#__PURE__*/createContext({});

function getListItemUtilityClass(slot) {
  return generateUtilityClass('MuiListItem', slot);
}
const listItemClasses = generateUtilityClasses('MuiListItem', ['root', 'container', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'padding', 'button', 'secondaryAction', 'selected']);

const listItemButtonClasses = generateUtilityClasses('MuiListItemButton', ['root', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'selected']);

function getListItemSecondaryActionClassesUtilityClass(slot) {
  return generateUtilityClass('MuiListItemSecondaryAction', slot);
}
const listItemSecondaryActionClasses = generateUtilityClasses('MuiListItemSecondaryAction', ['root', 'disableGutters']);

const _excluded$b = ["className"];

const useUtilityClasses$1 = ownerState => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disableGutters && 'disableGutters']
  };
  return composeClasses(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};

const ListItemSecondaryActionRoot = styled$1('div', {
  name: 'MuiListItemSecondaryAction',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  }
})(({
  ownerState
}) => _extends({
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)'
}, ownerState.disableGutters && {
  right: 0
}));
/**
 * Must be used as the last child of ListItem to function properly.
 */

const ListItemSecondaryAction = /*#__PURE__*/forwardRef(function ListItemSecondaryAction(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiListItemSecondaryAction'
  });

  const {
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$b);

  const context = useContext(ListContext);

  const ownerState = _extends({}, props, {
    disableGutters: context.disableGutters
  });

  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(ListItemSecondaryActionRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';

const _excluded$c = ["className"],
      _excluded2$1 = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected"];
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters, !ownerState.disablePadding && styles.padding, ownerState.button && styles.button, ownerState.hasSecondaryAction && styles.secondaryAction];
};

const useUtilityClasses$2 = ownerState => {
  const {
    alignItems,
    button,
    classes,
    dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', !disableGutters && 'gutters', !disablePadding && 'padding', divider && 'divider', disabled && 'disabled', button && 'button', alignItems === 'flex-start' && 'alignItemsFlexStart', hasSecondaryAction && 'secondaryAction', selected && 'selected'],
    container: ['container']
  };
  return composeClasses(slots, getListItemUtilityClass, classes);
};

const ListItemRoot = styled$1('div', {
  name: 'MuiListItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'left'
}, !ownerState.disablePadding && _extends({
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!ownerState.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!ownerState.secondaryAction && {
  [`& > .${listItemButtonClasses.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${listItemClasses.focusVisible}`]: {
    backgroundColor: theme.palette.action.focus
  },
  [`&.${listItemClasses.selected}`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${listItemClasses.focusVisible}`]: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${listItemClasses.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity
  }
}, ownerState.alignItems === 'flex-start' && {
  alignItems: 'flex-start'
}, ownerState.divider && {
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundClip: 'padding-box'
}, ownerState.button && {
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: theme.palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${listItemClasses.selected}:hover`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  }
}, ownerState.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}));
const ListItemContainer = styled$1('li', {
  name: 'MuiListItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})({
  position: 'relative'
});
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

const ListItem = /*#__PURE__*/forwardRef(function ListItem(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiListItem'
  });

  const {
    alignItems = 'center',
    autoFocus = false,
    button = false,
    children: childrenProp,
    className,
    component: componentProp,
    components = {},
    componentsProps = {},
    ContainerComponent = 'li',
    ContainerProps: {
      className: ContainerClassName
    } = {},
    dense = false,
    disabled = false,
    disableGutters = false,
    disablePadding = false,
    divider = false,
    focusVisibleClassName,
    secondaryAction,
    selected = false
  } = props,
        ContainerProps = _objectWithoutPropertiesLoose(props.ContainerProps, _excluded$c),
        other = _objectWithoutPropertiesLoose(props, _excluded2$1);

  const context = useContext(ListContext);
  const childContext = {
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  };
  const listItemRef = useRef(null);
  useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      }
    }
  }, [autoFocus]);
  const children = Children.toArray(childrenProp); // v4 implementation, deprecated in v5, will be removed in v6

  const hasSecondaryAction = children.length && isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);

  const ownerState = _extends({}, props, {
    alignItems,
    autoFocus,
    button,
    dense: childContext.dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  });

  const classes = useUtilityClasses$2(ownerState);
  const handleRef = useForkRef(listItemRef, ref);
  const Root = components.Root || ListItemRoot;
  const rootProps = componentsProps.root || {};

  const componentProps = _extends({
    className: clsx(classes.root, rootProps.className, className),
    disabled
  }, other);

  let Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = clsx(listItemClasses.focusVisible, focusVisibleClassName);
    Component = ButtonBase;
  } // v4 implementation, deprecated in v5, will be removed in v6


  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/jsxRuntime.jsx(ListContext.Provider, {
      value: childContext,
      children: /*#__PURE__*/jsxRuntime.jsxs(ListItemContainer, _extends({
        as: ContainerComponent,
        className: clsx(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState: ownerState
      }, ContainerProps, {
        children: [/*#__PURE__*/jsxRuntime.jsx(Root, _extends({}, rootProps, !isHostComponent(Root) && {
          as: Component,
          ownerState: _extends({}, ownerState, rootProps.ownerState)
        }, componentProps, {
          children: children
        })), children.pop()]
      }))
    });
  }

  return /*#__PURE__*/jsxRuntime.jsx(ListContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/jsxRuntime.jsxs(Root, _extends({}, rootProps, {
      as: Component,
      ref: handleRef,
      ownerState: ownerState
    }, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && /*#__PURE__*/jsxRuntime.jsx(ListItemSecondaryAction, {
        children: secondaryAction
      })]
    }))
  });
});

function getListItemIconUtilityClass(slot) {
  return generateUtilityClass('MuiListItemIcon', slot);
}
const listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);

const _excluded$d = ["className"];

const useUtilityClasses$3 = ownerState => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ['root', alignItems === 'flex-start' && 'alignItemsFlexStart']
  };
  return composeClasses(slots, getListItemIconUtilityClass, classes);
};

const ListItemIconRoot = styled$1('div', {
  name: 'MuiListItemIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart];
  }
})(({
  theme,
  ownerState
}) => _extends({
  minWidth: 56,
  color: theme.palette.action.active,
  flexShrink: 0,
  display: 'inline-flex'
}, ownerState.alignItems === 'flex-start' && {
  marginTop: 8
}));
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

const ListItemIcon = /*#__PURE__*/forwardRef(function ListItemIcon(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiListItemIcon'
  });

  const {
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$d);

  const context = useContext(ListContext);

  const ownerState = _extends({}, props, {
    alignItems: context.alignItems
  });

  const classes = useUtilityClasses$3(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(ListItemIconRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});

function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
const typographyClasses = generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

const _excluded$e = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];

const useUtilityClasses$4 = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};

const TypographyRoot = styled$1('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const Typography = /*#__PURE__*/forwardRef(function Typography(inProps, ref) {
  const themeProps = useThemeProps$1({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$e);

  const ownerState = _extends({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses$4(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(TypographyRoot, _extends({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: clsx(classes.root, className)
  }, other));
});

function getListItemTextUtilityClass(slot) {
  return generateUtilityClass('MuiListItemText', slot);
}
const listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);

const _excluded$f = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"];

const useUtilityClasses$5 = ownerState => {
  const {
    classes,
    inset,
    primary,
    secondary,
    dense
  } = ownerState;
  const slots = {
    root: ['root', inset && 'inset', dense && 'dense', primary && secondary && 'multiline'],
    primary: ['primary'],
    secondary: ['secondary']
  };
  return composeClasses(slots, getListItemTextUtilityClass, classes);
};

const ListItemTextRoot = styled$1('div', {
  name: 'MuiListItemText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${listItemTextClasses.primary}`]: styles.primary
    }, {
      [`& .${listItemTextClasses.secondary}`]: styles.secondary
    }, styles.root, ownerState.inset && styles.inset, ownerState.primary && ownerState.secondary && styles.multiline, ownerState.dense && styles.dense];
  }
})(({
  ownerState
}) => _extends({
  flex: '1 1 auto',
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, ownerState.primary && ownerState.secondary && {
  marginTop: 6,
  marginBottom: 6
}, ownerState.inset && {
  paddingLeft: 56
}));
const ListItemText = /*#__PURE__*/forwardRef(function ListItemText(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiListItemText'
  });

  const {
    children,
    className,
    disableTypography = false,
    inset = false,
    primary: primaryProp,
    primaryTypographyProps,
    secondary: secondaryProp,
    secondaryTypographyProps
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$f);

  const {
    dense
  } = useContext(ListContext);
  let primary = primaryProp != null ? primaryProp : children;
  let secondary = secondaryProp;

  const ownerState = _extends({}, props, {
    disableTypography,
    inset,
    primary: !!primary,
    secondary: !!secondary,
    dense
  });

  const classes = useUtilityClasses$5(ownerState);

  if (primary != null && primary.type !== Typography && !disableTypography) {
    primary = /*#__PURE__*/jsxRuntime.jsx(Typography, _extends({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps, {
      children: primary
    }));
  }

  if (secondary != null && secondary.type !== Typography && !disableTypography) {
    secondary = /*#__PURE__*/jsxRuntime.jsx(Typography, _extends({
      variant: "body2",
      className: classes.secondary,
      color: "text.secondary",
      display: "block"
    }, secondaryTypographyProps, {
      children: secondary
    }));
  }

  return /*#__PURE__*/jsxRuntime.jsxs(ListItemTextRoot, _extends({
    className: clsx(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [primary, secondary]
  }));
});

function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);

const _excluded$g = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];

const useUtilityClasses$6 = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};

const IconButtonRoot = styled$1(ButtonBase, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  overflow: 'visible',
  // Explicitly set the default value to solve a bug on IE11.
  color: theme.palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}), ({
  theme,
  ownerState
}) => _extends({}, ownerState.color === 'inherit' && {
  color: 'inherit'
}, ownerState.color !== 'inherit' && ownerState.color !== 'default' && {
  color: theme.palette[ownerState.color].main,
  '&:hover': {
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.size === 'small' && {
  padding: 5,
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === 'large' && {
  padding: 12,
  fontSize: theme.typography.pxToRem(28)
}, {
  [`&.${iconButtonClasses.disabled}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.action.disabled
  }
}));
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

const IconButton = /*#__PURE__*/forwardRef(function IconButton(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiIconButton'
  });

  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$g);

  const ownerState = _extends({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });

  const classes = useUtilityClasses$6(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(IconButtonRoot, _extends({
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: children
  }));
});

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var createSvgIcon = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _utils.createSvgIcon;
  }
});
});

var ChevronRightRounded = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(createSvgIcon);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
}), 'ChevronRightRounded');

exports.default = _default;
});

var ChevronRounded = /*@__PURE__*/getDefaultExportFromCjs(ChevronRightRounded);

function getIconUtilityClass(slot) {
  return generateUtilityClass('MuiIcon', slot);
}
const iconClasses = generateUtilityClasses('MuiIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

const _excluded$h = ["baseClassName", "className", "color", "component", "fontSize"];

const useUtilityClasses$7 = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getIconUtilityClass, classes);
};

const IconRoot = styled$1('span', {
  name: 'MuiIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => ({
  userSelect: 'none',
  width: '1em',
  height: '1em',
  // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
  // To remove at some point.
  overflow: 'hidden',
  display: 'inline-block',
  // allow overflow hidden to take action
  textAlign: 'center',
  // support non-square icon
  flexShrink: 0,
  fontSize: {
    inherit: 'inherit',
    small: theme.typography.pxToRem(20),
    medium: theme.typography.pxToRem(24),
    large: theme.typography.pxToRem(36)
  }[ownerState.fontSize],
  // TODO v5 deprecate, v6 remove for sx
  color: {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    warning: theme.palette.warning.main,
    action: theme.palette.action.active,
    error: theme.palette.error.main,
    disabled: theme.palette.action.disabled,
    inherit: undefined
  }[ownerState.color]
}));
const Icon = /*#__PURE__*/forwardRef(function Icon(inProps, ref) {
  const props = useThemeProps$1({
    props: inProps,
    name: 'MuiIcon'
  });

  const {
    baseClassName = 'material-icons',
    className,
    color = 'inherit',
    component: Component = 'span',
    fontSize = 'medium'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$h);

  const ownerState = _extends({}, props, {
    baseClassName,
    color,
    component: Component,
    fontSize
  });

  const classes = useUtilityClasses$7(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(IconRoot, _extends({
    as: Component,
    className: clsx(baseClassName, // Prevent the translation of the text content.
    // The font relies on the exact text content to render the icon.
    'notranslate', classes.root, className),
    ownerState: ownerState,
    "aria-hidden": true,
    ref: ref
  }, other));
});
Icon.muiName = 'Icon';

var ErrorRounded = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(createSvgIcon);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"
}), 'ErrorRounded');

exports.default = _default;
});

var ErrorRounded$1 = /*@__PURE__*/getDefaultExportFromCjs(ErrorRounded);

var guestDetectionMessage = "Communication with the preview application was interrupted. Studio will continue to retry the connection.";
var words = "Save";
var en = {
	"CreateUserDialog.title": "Create User",
	"GlobalMenu.AboutUs": "About",
	"GlobalMenu.Audit": "Audit",
	"GlobalMenu.AuditEntryLabel": "Audit",
	"GlobalMenu.ClusterEntryLabel": "Cluster",
	"GlobalMenu.GroupsEntryLabel": "Groups",
	"GlobalMenu.Sites": "Sites",
	"GlobalMenu.SitesEntryLabel": "Sites",
	"GlobalMenu.UsersEntryLabel": "Users",
	"InstallPluginDialog.empty": "No plugins found.",
	"InstallPluginDialog.title": "Search & install plugin",
	"PluginManagement.pluginInstalled": "Plugin installed successfully",
	"about.buildDate": "Build Date",
	"about.buildNumber": "Build Number",
	"about.studioVersionNumber": "Studio Version Number",
	"aboutView.attribution": "Crafter CMS is made possible by these other <a>open source software projects</a>.",
	"accountManagement.changeHelperText": "Once your password has been successfully updated, you'll be required to login again.",
	"accountManagement.changeLanguage": "Change Language",
	"accountManagement.changePassword": "Change Password",
	"accountManagement.confirmPassword": "Confirm Password",
	"accountManagement.currentPassword": "Current Password",
	"accountManagement.languageUpdated": "Language preference changed",
	"accountManagement.newPassword": "New Password",
	"accountManagement.passwordChanged": "Password changed successfully",
	"accountManagement.passwordInvalid": "Password is invalid.",
	"accountManagement.passwordMatch": "Must match the previous password.",
	"adminConfigurations.allEncrypted": "All marked items are already encrypted. The `encrypted` attribute should have a blank value to be marked for encryption (e.g. `encrypted=\"\"`)",
	"adminConfigurations.configSaved": "Configuration saved successfully.",
	"adminConfigurations.documentError": "The document contains errors. Check for error markers on side of the editor.",
	"adminConfigurations.encryptHinPt1": "To encrypt the content of a tag, (1) mark the desired tags for encryption, then (2) click on the \"Encrypt Marked\" button.",
	"adminConfigurations.encryptHinPt2": "(1) Mark your tags for encryption by adding the attribute <bold>`encrypted=\"\"`</bold>. ",
	"adminConfigurations.encryptHinPt3": "Example: {lt}accessKey encrypted=\"\"{gt}AKIAIOSFODNN7EXAMPLE{lt}/accessKey{gt}",
	"adminConfigurations.encryptHinPt4": "(2) Click on the <bold>`Encrypt Marked`</bold> button. Once the process completes, your tag should now look like:",
	"adminConfigurations.encryptHinPt5": "{lt}accessKey encrypted=\"true\"{gt}${lc}enc:xeJW23SomeEncryptedValuesListedHere{rc}{lt}/accessKey{gt}",
	"adminConfigurations.encryptHinPt6": "Remember:",
	"adminConfigurations.encryptHinPt7": "Use the `encrypted=””` attribute only on tags which directly hold the value to be encrypted (text).",
	"adminConfigurations.encryptHinPt8": "Don’t add the attribute on tags that contain other tags - unless you actually want to encrypt a chunk of XML.",
	"adminConfigurations.encryptHinPt9": "Do not manipulate encryption results manually.",
	"adminConfigurations.encryptMarked": "Encrypt Marked",
	"adminConfigurations.encryptionSingleDetail": "{br}\"{name}\" with value \"{value}\"",
	"adminConfigurations.noEncryptItems": "No items to encrypt were found in XML markup. Add attribute `encrypted=\"\"` to mark for encryption.",
	"adminConfigurations.pendingEncryption": "{itemCount, plural, one {Tag Name {tags} is marked for encryption but hasn't}other {Tag names: {tags} {br} are marked for encryption but haven't}} been encrypted, please trigger encryption or remove the tag flagging.",
	"adminConfigurations.xmlContainsErrors": "The XML document contains errors: {errors}",
	"approveDialog.subtitle": "Selected files will go live upon submission. Hard dependencies are automatically submitted with the main items. You may choose whether to submit or not soft dependencies",
	"approveDialog.title": "Approve for Publish",
	"asyncVideoPlayer.videoBeingProcessed": "Video is being processed, preview will be available when processing is complete",
	"audiencesPanel.apply": "Apply",
	"audiencesPanel.defaults": "Defaults",
	"audiencesPanelControl.optionSelectorNoOptionSelected": "Select Option",
	"auditGrid.allOrigins": "All Origins",
	"auditGrid.allSites": "All Sites",
	"auditGrid.allUsers": "All Users",
	"auditGrid.clearFilters": "Clear filters",
	"auditGrid.clusterNode": "Cluster Node",
	"auditGrid.emptyStateMessage": "No Logs Found",
	"auditGrid.name": "Name",
	"auditGrid.noParameters": "No parameters",
	"auditGrid.operation": "Operation",
	"auditGrid.origin": "Origin",
	"auditGrid.parameters": "Parameters",
	"auditGrid.showParameters": "Show parameters",
	"auditGrid.siteName": "Site",
	"auditGrid.targetType": "Target Type",
	"auditGrid.targetValue": "Target Value",
	"auditGrid.timestamp": "Timestamp",
	"auditGrid.timezone": "Timezone",
	"auditGrid.username": "Username",
	"auditGridFilterPopover.allOperations": "All Operations",
	"auditGridFilterPopover.filterByCluster": "Filter by Cluster Node",
	"auditGridFilterPopover.filterByOperations": "Filter by Operations",
	"auditGridFilterPopover.filterByOrigin": "Filter by Origin",
	"auditGridFilterPopover.filterBySite": "Filter by Site",
	"auditGridFilterPopover.filterByTarget": "Filter by Target Value",
	"auditGridFilterPopover.filterByUser": "Filter by User",
	"authMonitor.dialogTitleText": "Session Expired",
	"authMonitor.incorrectPasswordMessage": "Incorrect password. Please try again.",
	"authMonitor.logOutButtonLabel": "Log Out",
	"authMonitor.openSSOLoginButtonLabel": "Open Login Form",
	"authMonitor.passwordTextFieldLabel": "Password",
	"authMonitor.postSSOLoginMismatchMessage": "Looks like you've logged in with a user different from the owner of this session. For security reasons, your screen will now be refreshed.",
	"authMonitor.sessionExpiredMessage": "Your session has expired. Please log back in.",
	"authMonitor.ssoOpenPopupMessage": "Make sure pop ups are not blocked. Once you log in, come back to this window and click on `Resume` button below.",
	"authMonitor.usernameTextFieldLabel": "Username",
	"authMonitor.validateSessionButtonLabel": "Resume",
	"blueprint.by": "By",
	"blueprint.crafterCMS": "Crafter CMS",
	"blueprint.license": "License",
	"blueprint.licenseTooltip": "{license} license",
	"blueprint.more": "More...",
	"blueprint.noDev": "No developer specified.",
	"blueprint.use": "Use",
	"blueprint.version": "Version",
	"browseCMIS.cloningCMIS": "Cloning CMIS Asset",
	"browseCMIS.cmis": "CMIS",
	"browseSearchMessages.lookUpChildError": "Unable to lookup child form callback for search: {searchId}",
	"browseSearchMessages.lookUpParentError": "Unable to lookup parent context for search: {searchId}",
	"bulkUpload.cancelAll": "Cancel all",
	"bulkUpload.dropHere": "Drop files here or <span>browse</span>",
	"bulkUpload.filesProgression": "{start}/{end}",
	"bulkUpload.subtitle": "Drop the desired files from your desktop into the space below.",
	"bulkUpload.title": "Bulk Upload",
	"bulkUpload.uploadInProgress": "Uploads are still in progress. Leaving this page would stop the pending uploads. Are you sure you wish to leave?",
	"bulkUploadConfirmDialogMessages.description": "There is still a bulk upload in progress. Only one bulk upload can be executed at the same time.",
	"bulkUploadConfirmDialogMessages.title": "Upload in progress",
	"changeContentTypeDialog.emptyStateMessage": "No Content Types Found",
	"changeContentTypeDialog.subtitle": "The following starter templates are available for use within this section.",
	"changeContentTypeDialog.title": "Choose Content Type",
	"checkboxGroupControl.datasource": "Data Source",
	"checkboxGroupControl.horizontal": "Horizonal",
	"checkboxGroupControl.listDirection": "List Direction",
	"checkboxGroupControl.readonly": "Read Only",
	"checkboxGroupControl.showSelectAll": "Show \"Select All\"",
	"checkboxGroupControl.vertical": "Vertical",
	"childContentDS.childContent": "Child Content (Deprecated)",
	"clusterAdmin.clusterDeleted": "{cluster} deleted.",
	"clusterGrid.authType": "Auth Type",
	"clusterGrid.confirmDeleteCluster": "Delete this cluster?",
	"clusterGrid.deleteCluster": "Delete cluster",
	"clusterGrid.emptyStateMessage": "No Clusters Found",
	"clusterGrid.localAddress": "Local Address",
	"clusterGrid.remoteName": "Remote Name",
	"clusterManagement.clusterDeleted": "Cluster deleted successfully",
	"codeEditor.confirm": "Confirm Close",
	"codeEditor.inProgressConfirmation": "Another editor is currently open & minimized. Please close the current editor before opening another",
	"codeEditor.insertCode": "Insert Code",
	"codeEditor.localesConfirmBody": "The template for the locale you selected does not exist. Do you want to create it now?",
	"codeEditor.localesConfirmTitle": "Create Template",
	"codeEditor.localesHelperText": "Select the locale for which to create/edit a template. Locales, like 'en' will cover sub-locales like 'en_us' or 'en_uk'.",
	"codeEditor.localesSnackBarTitle": "Template Created. Do you want to copy the base template?",
	"codeEditor.saveAndClose": "Save & Close",
	"codeEditor.saveAndMinimize": "Save & Minimize",
	"codeEditor.saved": "Save successful",
	"codeEditor.stay": "No, stay",
	"common.authentication": "Authentication",
	"common.back": "Back",
	"common.craftercms": "Crafter CMS",
	"common.developer": "Developer",
	"common.license": "License",
	"common.marketplace": "Marketplace",
	"common.moreInfo": "More info",
	"common.password": "Password",
	"common.privateKey": "Private Key",
	"common.remoteName": "Git Remote Name",
	"common.searchEngine": "Search Engine",
	"common.selectAll": "Select All",
	"common.toggleSidebarTooltip": "Toggle sidebar",
	"common.token": "Token",
	"common.use": "Use",
	"common.userName": "Username",
	"common.usernameAndPassword": "Username & Password",
	"common.version": "Version",
	"common.website": "Website",
	"compareVersionsDialog.back.selectRevision": "Back to select revision",
	"compareVersionsDialog.headerSubtitleCompare": "Select a revision to compare",
	"compareVersionsDialog.headerSubtitleCompareTo": "Select a revision to compare to “{selectedA}”",
	"compareVersionsDialog.headerTitle": "Compare item versions",
	"compareVersionsDialog.pleaseContentItem": "Please content item",
	"componentsPanel.emptyStateMessage": "No components found",
	"componentsPanel.emptyStateMessageSubtitle": "Communicate with your developers to create the required components in the system.",
	"componentsPanel.suspenseStateMessage": "Retrieving Page Model",
	"configurationSamplePreviewDialog.appendContent": "Append after current content",
	"configurationSamplePreviewDialog.replaceContent": "Replace current content",
	"configurationSamplePreviewDialog.title": "Sample File",
	"configurationSamplePreviewDialog.useSampleContent": "Use Sample Content",
	"contentLocalization.mark": "Mark for Translation",
	"contentLocalization.title": "Content Localization",
	"contentType.RTEConfiguration": "RTE Configuration",
	"contentType.autoGrow": "Auto Grow",
	"contentType.contenTypeWarningMessage": "Please note Child Content datasource is being phased out of Crafter CMS. For components that need to be shared across pages or components, please use Shared Content instead. For components that belong exclusively to this content object, please use Embedded Content.",
	"contentType.continueEditing": "Continue Editing",
	"contentType.dependsOn": "This property depends on \"{dependency}\"",
	"contentType.enableSpellCheck": "Enable Spell Check",
	"contentType.fileManager": "File Manager",
	"contentType.fileNameErrorMessage": "Content types require a file name. Please add either a \"File Name\" or \"Auto Filename\" control to this content type definition.",
	"contentType.flatTitleError": "Please fill every title for fields and datasources.",
	"contentType.forceBRNewLines": "Force br New Lines",
	"contentType.forcePNewLines": "Force p tags New Lines",
	"contentType.forceRootBlockP": "Force Root Block p Tag",
	"contentType.height": "Height",
	"contentType.idError": "Please fill variable name for: ",
	"contentType.imageManager": "Image Manager",
	"contentType.internalNameErrorMessage": "This content type requires an Internal Name.",
	"contentType.noTemplateAssoc": "There is no template associated with this content type. Click Save to proceed with save operation or Continue to update the content type (under Basic Content Type Properties) with a template.",
	"contentType.notice": "Notice",
	"contentType.saveFailed": "Save Failed",
	"contentType.supportedChannels": "Supported Channels",
	"contentType.useChildContent": "Use Deprecated Control Anyway",
	"contentType.useEmbeddedContent": "Use Embedded Content",
	"contentType.useSharedContent": "Use Shared Content",
	"contentType.videoManager": "Video Manager",
	"contentType.width": "Width",
	"contextMenu.emptyOptionsMessage": "No options available to display.",
	"controlsCommonMessages.escapeContent": "Escape Content",
	"copyItems.cancel": "Cancel",
	"copyItems.copy": "Copy",
	"copyItems.deselectAll": "Deselect All",
	"copyItems.selectAll": "Select All",
	"copyTokenDialog.helperText": "Token created successfully. Please copy the token and store it securely as you won’t be able to see it’s value again.",
	"copyTokenDialog.title": "Access Token Created",
	"craftercms.codeEditor.loadingForm": "Loading...",
	"craftercms.codeEditor.title": "Code Editor",
	"craftercms.ice.audiences.loading": "Retrieving targeting options",
	"craftercms.ice.audiences.title": "Audience Targeting",
	"craftercms.ice.browseComponents.chooseContentType": "Please choose a content type.",
	"craftercms.ice.browseComponents.loading": "Loading",
	"craftercms.ice.browseComponents.nextPage": "next page",
	"craftercms.ice.browseComponents.noResults": " No results found.",
	"craftercms.ice.browseComponents.previousPage": "previous page",
	"craftercms.ice.browseComponents.selectContentType": "Select content type",
	"craftercms.ice.browseComponents.title": "Browse components",
	"craftercms.pages.option.noLocales": "The site has no locales declared.",
	"craftercms.pages.option.terminateSelection": "Terminate Selection",
	"craftercms.pages.widget.itemsSelected": "{count, plural, one {{count} Item selected} other {{count} Items selected}}",
	"createFileDialog.controller": "New Controller",
	"createFileDialog.createPolicy": "The supplied name goes against site policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFileDialog.fileName": "File Name",
	"createFileDialog.fileNameRequired": "File name is required.",
	"createFileDialog.helperText": "Consisting of letters, numbers, dot (.), dash (-) and underscore (_).",
	"createFileDialog.openOnSuccess": "Open file",
	"createFileDialog.openOnSuccessTip": "Open for edit after creation",
	"createFileDialog.placeholder": "Please type a name",
	"createFileDialog.policyError": "The supplied name goes against site policies.",
	"createFileDialog.template": "New Template",
	"createFolder.createPolicy": "The supplied name goes against site policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFolder.placeholder": "Please type a folder name",
	"createFolder.policyError": "The supplied name goes against site policies.",
	"createSiteDialog.additionalOptions": "Additional Options",
	"createSiteDialog.authentication": "Authentication",
	"createSiteDialog.authenticationNoRequired": "Authentication not required (public URL)",
	"createSiteDialog.blueprintParameters": "Blueprint Parameters",
	"createSiteDialog.blueprintStrategy": "Create from blueprint",
	"createSiteDialog.branch": "Git Branch",
	"createSiteDialog.cantStart": "Site names may not start with zeros, dashes (-) or underscores (_).",
	"createSiteDialog.changeQuery": "Try changing your query or browse the full catalog.",
	"createSiteDialog.chooseCreationStrategy": "Choose creation strategy: start from an existing Git repo or create based on a blueprint that suits you best.",
	"createSiteDialog.clone_remoteBranch_label": "The site will get created cloning that branch of the repo. You may switch between branches later too.",
	"createSiteDialog.clone_remoteName_label": "Name the remote that will refer to the source repo to pull from. Typically named “upstream” or “origin”.",
	"createSiteDialog.clone_url_label": "The git repository URL to clone from.",
	"createSiteDialog.createAsOrphan": "Create the site from a remote repository as orphan (no git history)",
	"createSiteDialog.createAsOrphanHelpText": "Creating the site as an orphan will dissociate the site from the source git repository and remove all history.",
	"createSiteDialog.createInBackground": "Create in Background",
	"createSiteDialog.createSite": "Create Site",
	"createSiteDialog.creatingSite": "Creating Site",
	"createSiteDialog.creationStrategy": "Creation Strategy",
	"createSiteDialog.description": "Description",
	"createSiteDialog.descriptionMaxLength": "Max length: {maxLength} characters.",
	"createSiteDialog.dialogCloseMessage": "Data entered in the form would be lost upon closing.",
	"createSiteDialog.dialogCloseTitle": "Confirm Close",
	"createSiteDialog.finish": "Finish",
	"createSiteDialog.gitBlueprintDescription": "Create a new site based on a Crafter CMS project in an existing, remote git repository.",
	"createSiteDialog.gitBlueprintName": "Remote Git Repository",
	"createSiteDialog.gitStrategy": "Existing remote git repo clone",
	"createSiteDialog.idExist": "The ID already exists.",
	"createSiteDialog.nameAndDescription": "Name and describe your site",
	"createSiteDialog.nameExist": "The name already exist.",
	"createSiteDialog.noBlueprints": "No blueprints were found",
	"createSiteDialog.noDescription": "No description supplied",
	"createSiteDialog.pleaseWait": "Please wait while your site is being created.",
	"createSiteDialog.plugin": "Blueprint",
	"createSiteDialog.privateBlueprints": "Private Blueprints",
	"createSiteDialog.privateKey": "Private Key",
	"createSiteDialog.publicMarketplace": "Public Marketplace",
	"createSiteDialog.remoteBranch": "Git Branch",
	"createSiteDialog.remoteName": "Git Remote Name",
	"createSiteDialog.remoteURL": "Git Repo URL",
	"createSiteDialog.repoUrl": "Git Repo URL",
	"createSiteDialog.required": "{name} is required.",
	"createSiteDialog.review": "Review",
	"createSiteDialog.reviewSite": "Review set up summary and create your site",
	"createSiteDialog.sandboxBranch": "Sandbox Branch",
	"createSiteDialog.showIncompatible": "Show Incompatible Plugins",
	"createSiteDialog.siteFormat": "Max length: 50 characters, consisting of: lowercase letters, numbers & dash (-).",
	"createSiteDialog.siteId": "Site ID",
	"createSiteDialog.siteInfo": "Site Info",
	"createSiteDialog.siteName": "Site Name",
	"createSiteDialog.token": "Token",
	"createSiteDialog.useDefaultValue": "use default value",
	"createSiteDialog.userNameAndPassword": "Username & Password",
	"createTokenDialog.expiresHelperNeverText": "Switch off to never expire.",
	"createTokenDialog.expiresHelperText": "Switch on to set an expiration.",
	"createTokenDialog.expiresLabel": "Expire Token",
	"createTokenDialog.helperText": "Type a name for the new token. The token will be created by the server and shown to you after. Store it securely as you won’t be able to see it’s value again.",
	"createTokenDialog.title": "Create Access Token",
	"createUserDialog.emailRequired": "Email is required.",
	"createUserDialog.firstName": "First Name",
	"createUserDialog.firstNameRequired": "First Name is required.",
	"createUserDialog.invalidEmail": "Email is invalid.",
	"createUserDialog.lastName": "Last Name",
	"createUserDialog.lastNameRequired": "Last Name is required.",
	"createUserDialog.passwordInvalid": "Password is invalid.",
	"createUserDialog.passwordMatch": "Must match the previous password.",
	"createUserDialog.passwordRequired": "Password is required.",
	"createUserDialog.passwordVerification": "Password Verification",
	"createUserDialog.usernameRequired": "Username is required.",
	"dashboardWidgetsMessages.publishingTarget": "Publishing Target",
	"dateTime.ordinals": "{day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
	"datetimepicker.dateInvalidMessage": "Invalid Date.",
	"datetimepicker.datePlaceholder": "Date",
	"datetimepicker.timeInvalidMessage": "Invalid Time.",
	"datetimepicker.timePlaceholder": "Time",
	"deleteContentTypeDialog.contentTypeDeleteFailedMessage": "Error deleting content type",
	"deleteContentTypeDialog.contentTypeDeletedMessage": "Content type deleted successfully",
	"deleteContentTypeDialog.headerSubtitle": "Please confirm the deletion of \"{name}\"",
	"deleteContentTypeDialog.headerTitle": "Delete Content Type",
	"deleteContentTypeDialog.reviewDependenciesMessage": "Please review and confirm all of content type dependencies that will be deleted.",
	"deleteContentTypeDialog.submitButton": "Delete",
	"deleteContentTypeDialog.typeConfirmPassword": "Type the word \"<b>{password}</b>\" to confirm the deletion of \"{name}\" and all it's dependencies.",
	"deleteDialog.brokenItems": " Will have broken references",
	"deleteDialog.cancel": "Cancel",
	"deleteDialog.childItemsText": "Child Items",
	"deleteDialog.deleteItems": "Delete Items",
	"deleteDialog.dependentItems": "Dependent Items",
	"deleteDialog.headerSubTitle": "Selected items will be deleted along with their child items. Please review dependent items before deleting as these will end-up with broken link references.",
	"deleteDialog.headerTitle": "Delete",
	"deleteDialog.maxCharacters": "Max {maxLength} characters",
	"deleteDialog.submissionCommentFieldError": "Please write submission comment.",
	"deleteDialog.submissionCommentLabel": "Submission Comment",
	"deleteDialog.submit": "Delete",
	"deleteDialog.updatingDependents": "Updating dependents, please wait...",
	"deleteDialog.willGetDeleted": " Will get deleted",
	"dependenciesDialog.allDeps": "Show all dependencies",
	"dependenciesDialog.assets": "Assets only",
	"dependenciesDialog.code": "Code only",
	"dependenciesDialog.contentItems": "Content items only",
	"dependenciesDialog.dependencies": "Dependencies",
	"dependenciesDialog.dependsOn": "Items that depend on selected item",
	"dependenciesDialog.dependsOnMe": "Dependencies of selected item",
	"dependenciesDialog.edit": "Edit",
	"dependenciesDialog.emptyDependantsMessage": "{itemName} has no dependencies",
	"dependenciesDialog.emptyDependenciesMessage": "Nothing depends on {itemName}",
	"dependenciesDialog.headerTitle": "Content Item Dependencies",
	"dependenciesDialog.history": "History",
	"dragAndDropMessages.componentNotWelcomeWithinDropZone": "The drop zone does not support this type of component. Check your content model.",
	"dragAndDropMessages.contentTypeNotFound": "The content type id was not found in your template. Drag and drop will be impaired. More info at docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.embeddedComponentsDeleteChildNotSupported": "Deleting components from an embedded drop zone component is not supported yet. Please use the forms to edit content.",
	"dragAndDropMessages.embeddedComponentsDndNotSupported": "Drag and drop on embedded components it's not supported yet. Please use the forms to edit content.",
	"dragAndDropMessages.embeddedComponentsDragWithinParentOnly": "On this release, embedded components may only be dragged within their current parent. Please use the forms to edit content.",
	"dragAndDropMessages.moveOutEmbeddedComponentsNotSupported": "Moving components out of an embedded drop zone component is not supported yet. Please use the forms to edit content.",
	"dragAndDropMessages.objectIdNotFound": "Object id is missing. Drag and drop will be impaired. More info at docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.pathNotFound": "Path is missing. Drag and drop will be impaired. More info at docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dropTargetsMessages.allowEmbedded": "Allow Embedded",
	"dropTargetsMessages.allowShared": "Allow Shared",
	"dropTargetsMessages.baseBrowsePath": "Base Browse Path",
	"dropTargetsMessages.baseRepositoryPath": "Base Repository Path",
	"dropTargetsMessages.browseExisting": "Browse existing",
	"dropTargetsMessages.contentTypes": "Content Types",
	"dropTargetsMessages.createNewEmbedded": "Create new embedded",
	"dropTargetsMessages.createNewShared": "Create new shared",
	"dropTargetsMessages.dropTargets": "Drop Targets",
	"dropTargetsMessages.enableBrowse": "Enable Browse",
	"dropTargetsMessages.enableSearch": "Enable Search",
	"dropTargetsMessages.searchExisting": "Search existing components",
	"dropTargetsMessages.tags": "Tags",
	"editGroupDialog.close": "Close",
	"editGroupDialog.deleteGroup": "Delete group",
	"editGroupDialog.editGroupMembers": "Edit Group Members",
	"editGroupDialog.groupDetails": "Group Details",
	"editGroupDialog.groupMemberHelperText": "Group members are editable after creation",
	"editGroupDialog.helperText": "Delete \"{name}\" group?",
	"editSiteDialog.cancel": "Cancel",
	"editSiteDialog.notEditable": "The site id is not editable",
	"editSiteDialog.siteDescription": "Site Description",
	"editSiteDialog.siteId": "Site ID",
	"editSiteDialog.siteName": "Site Name",
	"editSiteDialog.siteNameRequired": "Site Name is required.",
	"editSiteDialog.sitenameExists": "The name already exist.",
	"editSiteDialog.title": "Edit Site",
	"embeddedContentDS.embeddedContent": "Embedded Content",
	"embeddedLegacyFormMessages.openContentFormFailedError": "An error occurred opening the content form. Please try again momentarily. Contact the administrator if the error persists.",
	"emptyUiConfigMessageTitle.subtitle": "Nothing is set to be shown here.",
	"emptyUiConfigMessageTitle.title": "Configuration is empty",
	"encryptTool.buttonText": "Encrypt Text",
	"encryptTool.clearResultButtonText": "Clear",
	"encryptTool.errorMessage": "Text encryption failed. Please try again momentarily.",
	"encryptTool.inputLabel": "Raw Text",
	"encryptTool.pageTitle": "Encryption Tool",
	"encryptTool.successMessage": "Encrypted text copied to clipboard.",
	"fileNameControl.urlChangeWarning": "Changing this value may result in broken references and links.",
	"fileNameControl.viewReferences": "To view the content that references this content, click ",
	"fileUpload.chooseFile": "Choose File",
	"fileUpload.createPolicy": "The upload file name goes against site policies. Suggested modified file name is: \"{name}\". Would you like to use the suggested name?",
	"fileUpload.policyError": "The upload file name goes against site policies.",
	"fileUpload.selectFileMessage": "Please select a file to upload",
	"fileUpload.uploadedFile": "Uploaded File",
	"fileUpload.uploadingFile": "Uploading File",
	"fileUpload.validatingFile": "Validating File",
	"filter.more": "{count, plural, one {...{count} more item} other {...{count} more items}}",
	"filter.noResults": "No results match your query",
	"folder.created": "Folder created successfully",
	"folderBrowserTreeView.invalidPath": "The entered path doesn’t exist.",
	"formEngine.createPolicy": "The {originalPath} path goes against site policies. Suggested modified path is: \"{path}\". Would you like to use the suggested path?",
	"formEngine.inProgressConfirmation": "Another form is currently open & minimized. Please close the current form before opening another",
	"formEngine.policyError": "The {path} path goes against site policies.",
	"formEngine.save": "Save as Draft",
	"formEngine.saveAndClose": "Save & Close",
	"formEngine.saveAndMinimize": "Save & Minimize",
	"formEngine.saveAndPreview": "Save & Preview",
	"formEngine.saveDraftCompleted": "Draft Save Completed",
	"global.about": "About",
	"globalAppToolbar.toggleSidebar": "Toggle Sidebar",
	"globalConfig.configSaved": "Configuration saved successfully.",
	"globalConfig.confirmHelper": "Discard unsaved changes?",
	"globalConfig.documentError": "The document contains errors. Check for error markers on side of the editor.",
	"globalConfig.unsavedConfirmation": "You have unsaved changes, do you want to leave?",
	"globalConfig.unsavedConfirmationTitle": "Unsaved changes",
	"globalConfig.viewSample": "View Sample",
	"globalDialogManager.loadingDialogs": "Loading dialogs...",
	"globalMenu.closeMenu": "Close menu",
	"globalMenu.docs": "Documentation",
	"globalMenu.encryptionTool": "Encryption Tool",
	"globalMenu.globalConfigEntryLabel": "Global Config",
	"globalMenu.logConsoleEntryLabel": "Log Console",
	"globalMenu.loggingLevelsEntryLabel": "Logging Levels",
	"globalMenu.mySites": "My Sites",
	"globalMenu.noSitesMessage": "No sites to display.",
	"globalMenu.pluginManagementEntryLabel": "Plugin Management",
	"globalMenu.preview1": "Preview 1.0",
	"globalMenu.preview2": "Preview 2.0",
	"globalMenu.recover": "Password Recovery",
	"globalMenu.removeSite": "Remove site",
	"globalMenu.removeSiteConfirm": "Do you want to remove {site}?",
	"globalMenu.settings": "Account",
	"globalMenu.siteConfig": "Site Config",
	"globalMenu.tokenManagement": "Token Management",
	"groupEditDialog.createGroup": "Create Group",
	"groupEditDialog.editGroup": "Edit Group",
	"groupEditDialog.groupCreated": "Group created successfully",
	"groupEditDialog.groupDeleted": "Group deleted successfully",
	"groupEditDialog.groupEdited": "Group edited successfully",
	"groupEditDialog.membersAdded": "{count, plural, one {User added successfully} other {Users added successfully}}",
	"groupEditDialog.membersRemoved": "{count, plural, one {User removed successfully} other {Users removed successfully}}",
	"groupsAdmin.displayName": "Display Name",
	"groupsAdmin.groupCreated": "{group} created.",
	"groupsAdmin.groupDeleted": "{group} deleted.",
	"groupsAdmin.groupEdited": "{group} edited.",
	"groupsAdmin.maxLengthError": "{field} can't be longer than {size} characters",
	"groupsAdmin.usereRemoved": "{username} successfully removed from {group}",
	"groupsAdmin.usersAdded": "User(s) successfully added.",
	"groupsGrid.emptyStateMessage": "No Groups Found",
	guestDetectionMessage: guestDetectionMessage,
	"historyDialog.back.selectRevision": "Back to history list",
	"historyDialog.confirmRevertBody": "Are you sure you want to revert to {versionTitle}?",
	"historyDialog.confirmRevertTitle": "Revert confirmation",
	"historyDialog.current": "current",
	"historyDialog.headerTitle": "Item History",
	"historyDialog.options.compareTo": "Compare to...",
	"historyDialog.options.compareToCurrent": "Compare to current",
	"historyDialog.options.compareToPrevious": "Compare to previous",
	"historyDialog.options.revertToPrevious": "Revert to <b>previous</b>",
	"historyDialog.options.revertToThisVersion": "Revert to <b>this version</b>",
	"inPageInstances.noResults": "No results found.",
	"inPageInstances.title": "In this Page",
	"internalNameControl.displaySize": "Display Size",
	"internalNameControl.label": "Internal Name",
	"internalNameControl.maxLength": "Max Length",
	"item.contentTypeChanged": "Item type changed successfully",
	"item.copied": "{count, plural, one {Item copied to clipboard} other {Items copied to clipboard}}",
	"item.created": "Item created successfully",
	"item.cut": "Item cut successfully",
	"item.delete": "{count, plural, one {The selected item is being deleted and will be removed shortly} other {The selected items are being deleted and will be removed shortly}}",
	"item.duplicated": "Item duplicated successfully",
	"item.edited": "Item updated successfully",
	"item.itemPasteToChildNotAllowed": "Pasting to a child item is not allowed for cut",
	"item.pasted": "Item pasted successfully",
	"item.pasting": "Pasting...",
	"item.publishedNow": "{count, plural, one {The selected item has been pushed to {environment}. It will be visible shortly} other {The selected items has been pushed to {environment}. Them will be visible shortly}}",
	"item.rejected": "{count, plural, one {Item rejected successfully} other {Items rejected successfully}}",
	"item.requestedToPublishNow": "{count, plural, one {The selected item has been requested to be pushed to {environment}} other {The selected items has been requested to be pushed to {environment}}}",
	"item.requestedToSchedulePublish": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.reverted": "Item reverted successfully",
	"item.savedAsDraft": "Item draft saved",
	"item.schedulePublished": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.unlocked": "Item unlocked successfully",
	"itemActions.changeContentType": "Change Type",
	"itemActions.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemActions.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemActions.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemActions.copyDialogTitle": "Copy",
	"itemActions.createController": "New Controller",
	"itemActions.createFolder": "New Folder",
	"itemActions.createTemplate": "New Template",
	"itemActions.deleteController": "Delete Controller",
	"itemActions.deleteTemplate": "Delete Template",
	"itemActions.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemActions.editController": "Edit Controller",
	"itemActions.editTemplate": "Edit Template",
	"itemActions.newContent": "New Content",
	"itemActions.requestPublish": "Request Publish",
	"itemActions.viewForm": "View Form",
	"itemMegaMenu.editedBy": "{edited} {date} {byLabel} {by}",
	"itemMenu.changeContentType": "Change Type",
	"itemMenu.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemMenu.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemMenu.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemMenu.copyDialogTitle": "Copy",
	"itemMenu.createContent": "Create Content",
	"itemMenu.createController": "Create Controller",
	"itemMenu.createFolder": "Create Folder",
	"itemMenu.createTemplate": "Create Template",
	"itemMenu.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemMenu.editController": "Edit Controller",
	"itemMenu.editTemplate": "Edit Template",
	"itemMenu.noPermissions": "No actions available for this item.",
	"itemMenu.renameFolder": "Rename Folder",
	"itemPublishingTarget.live": "Live",
	"itemPublishingTarget.staged": "Staged",
	"itemPublishingTarget.unpublished": "Unpublished",
	"itemState.deleted": "Deleted",
	"itemState.locked": "Locked",
	"itemState.modified": "Modified",
	"itemState.new": "New",
	"itemState.scheduled": "Scheduled",
	"itemState.submitted": "Submitted",
	"itemState.systemProcessing": "System Processing",
	"languages.Maldivian": "Divehi",
	"languages.aa": "Afar",
	"languages.ab": "Abkhazian",
	"languages.ae": "Avestan",
	"languages.af": "Afrikaans",
	"languages.ak": "Akan",
	"languages.am": "Amharic",
	"languages.an": "Aragonese",
	"languages.ar": "Arabic",
	"languages.ar_ae": "Arabic - United Arab Emirates",
	"languages.ar_bh": "Arabic - Bahrain",
	"languages.ar_dz": "Arabic - Algeria",
	"languages.ar_eg": "Arabic - Egypt",
	"languages.ar_iq": "Arabic - Iraq",
	"languages.ar_jo": "Arabic - Jordan",
	"languages.ar_kw": "Arabic - Kuwait",
	"languages.ar_lb": "Arabic - Lebanon",
	"languages.ar_ly": "Arabic - Libya",
	"languages.ar_ma": "Arabic - Morocco",
	"languages.ar_om": "Arabic - Oman",
	"languages.ar_qa": "Arabic - Qatar",
	"languages.ar_sa": "Arabic - Saudi Arabia",
	"languages.ar_sy": "Arabic - Syria",
	"languages.ar_tn": "Arabic - Tunisia",
	"languages.ar_ye": "Arabic - Yemen",
	"languages.as": "Assamese",
	"languages.av": "Avaric",
	"languages.ay": "Aymara",
	"languages.az": "Azerbaijani",
	"languages.az_az": "Azeri - Cyrillic",
	"languages.ba": "Bashkir",
	"languages.be": "Belarusian",
	"languages.bg": "Bulgarian",
	"languages.bh": "Bihari languages",
	"languages.bi": "Bislama",
	"languages.bm": "Bambara",
	"languages.bn": "Bengali - Bangladesh",
	"languages.bo": "Tibetan",
	"languages.br": "Breton",
	"languages.bs": "Bosnian",
	"languages.ca": "Catalan",
	"languages.ce": "Chechen",
	"languages.ch": "Chamorro",
	"languages.co": "Corsican",
	"languages.cr": "Cree",
	"languages.cs": "Czech",
	"languages.cu": "Church Slavic; Slavonic; Old Bulgarian",
	"languages.cv": "Chuvash",
	"languages.cy": "Welsh",
	"languages.da": "Danish",
	"languages.de": "German",
	"languages.de_at": "German - Austria",
	"languages.de_ch": "German - Switzerland",
	"languages.de_de": "German - Germany",
	"languages.de_li": "German - Liechtenstein",
	"languages.de_lu": "German - Luxembourg",
	"languages.dv": "Divehi; Dhivehi; Maldivian",
	"languages.dz": "Dzongkha",
	"languages.ee": "Ewe",
	"languages.el": "Greek",
	"languages.en": "English",
	"languages.en_au": "English - Australia",
	"languages.en_bz": "English - Belize",
	"languages.en_ca": "English - Canada",
	"languages.en_cb": "English - Caribbean",
	"languages.en_gb": "English - Great Britain",
	"languages.en_ie": "English - Ireland",
	"languages.en_in": "English - India",
	"languages.en_jm": "English - Jamaica",
	"languages.en_nz": "English - New Zealand",
	"languages.en_ph": "English - Philippines",
	"languages.en_tt": "English - Trinidad",
	"languages.en_us": "English - United States",
	"languages.en_za": "English - Southern Africa",
	"languages.eo": "Esperanto",
	"languages.es": "Spanish; Castilian",
	"languages.es_ar": "Spanish - Argentina",
	"languages.es_bo": "Spanish - Bolivia",
	"languages.es_cl": "Spanish - Chile",
	"languages.es_co": "Spanish - Colombia",
	"languages.es_cr": "Spanish - Costa Rica",
	"languages.es_do": "Spanish - Dominican Republic",
	"languages.es_ec": "Spanish - Ecuador",
	"languages.es_es": "Spanish - Spain (Traditional)",
	"languages.es_gt": "Spanish - Guatemala",
	"languages.es_hn": "Spanish - Honduras",
	"languages.es_mx": "Spanish - Mexico",
	"languages.es_ni": "Spanish - Nicaragua",
	"languages.es_pa": "Spanish - Panama",
	"languages.es_pe": "Spanish - Peru",
	"languages.es_pr": "Spanish - Puerto Rico",
	"languages.es_py": "Spanish - Paraguay",
	"languages.es_sv": "Spanish - El Salvador",
	"languages.es_uy": "Spanish - Uruguay",
	"languages.es_ve": "Spanish - Venezuela",
	"languages.et": "Estonian",
	"languages.eu": "Basque",
	"languages.fa": "Farsi - Persian",
	"languages.ff": "Fulah",
	"languages.fi": "Finnish",
	"languages.fj": "Fijian",
	"languages.fo": "Faroese",
	"languages.fr": "French",
	"languages.fr_be": "French - Belgium",
	"languages.fr_ca": "French - Canada",
	"languages.fr_ch": "French - Switzerland",
	"languages.fr_fr": "French - France",
	"languages.fr_lu": "French - Luxembourg",
	"languages.fy": "Western Frisian",
	"languages.ga": "Irish",
	"languages.gd": "Gaelic - Scotland",
	"languages.gd_ie": "Gaelic - Ireland",
	"languages.gl": "Galician",
	"languages.gn": "Guarani - Paraguay",
	"languages.gu": "Gujarati",
	"languages.gv": "Manx",
	"languages.ha": "Hausa",
	"languages.he": "Hebrew",
	"languages.hi": "Hindi",
	"languages.ho": "Hiri Motu",
	"languages.hr": "Croatian",
	"languages.ht": "Haitian; Haitian Creole",
	"languages.hu": "Hungarian",
	"languages.hy": "Armenian",
	"languages.hz": "Herero",
	"languages.ia": "Interlingua",
	"languages.id": "Indonesian",
	"languages.ie": "Interlingue; Occidental",
	"languages.ig": "Igbo",
	"languages.ii": "Sichuan Yi; Nuosu",
	"languages.ik": "Inupiaq",
	"languages.io": "Ido",
	"languages.is": "Icelandic",
	"languages.it": "Italian",
	"languages.it_ch": "Italian - Switzerland",
	"languages.it_it": "Italian - Italy",
	"languages.iu": "Inuktitut",
	"languages.ja": "Japanese",
	"languages.jv": "Javanese",
	"languages.ka": "Georgian",
	"languages.kg": "Kongo",
	"languages.ki": "Kikuyu; Gikuyu",
	"languages.kj": "Kuanyama; Kwanyama",
	"languages.kk": "Kazakh",
	"languages.kl": "Kalaallisut; Greenlandic",
	"languages.km": "Khmer",
	"languages.kn": "Kannada",
	"languages.ko": "Korean",
	"languages.kr": "Kanuri",
	"languages.ks": "Kashmiri",
	"languages.ku": "Kurdish",
	"languages.kv": "Komi",
	"languages.kw": "Cornish",
	"languages.ky": "Kirghiz; Kyrgyz",
	"languages.la": "Latin",
	"languages.lb": "Luxembourgish; Letzeburgesch",
	"languages.lg": "Ganda",
	"languages.li": "Limburgan; Limburger; Limburgish",
	"languages.ln": "Lingala",
	"languages.lo": "Lao",
	"languages.lt": "Lithuanian",
	"languages.lu": "Luba-Katanga",
	"languages.lv": "Latvian",
	"languages.mg": "Malagasy",
	"languages.mh": "Marshallese",
	"languages.mi": "Maori",
	"languages.mk": "FYRO Macedonia",
	"languages.ml": "Malayalam",
	"languages.mn": "Mongolian",
	"languages.mr": "Marathi",
	"languages.ms": "Malay",
	"languages.ms_bn": "Malay - Brunei",
	"languages.ms_my": "Malay - Malaysia",
	"languages.mt": "Maltese",
	"languages.my": "Burmese",
	"languages.na": "Nauru",
	"languages.nb": "Bokmål, Norwegian; Norwegian Bokmål",
	"languages.nd": "Ndebele, North; North Ndebele",
	"languages.ne": "Nepali",
	"languages.ng": "Ndonga",
	"languages.nl": "Dutch; Flemish",
	"languages.nl_be": "Dutch - Belgium",
	"languages.nl_nl": "Dutch - Netherlands",
	"languages.nn": "Norwegian Nynorsk; Nynorsk, Norwegian",
	"languages.no": "Norwegian",
	"languages.no_no": "Norwegian - Bokml",
	"languages.nr": "Ndebele, South; South Ndebele",
	"languages.nv": "Navajo; Navaho",
	"languages.ny": "Chichewa; Chewa; Nyanja",
	"languages.oc": "Occitan (post 1500)",
	"languages.oj": "Ojibwa",
	"languages.om": "Oromo",
	"languages.or": "Oriya",
	"languages.os": "Ossetian; Ossetic",
	"languages.pa": "Punjabi",
	"languages.pi": "Pali",
	"languages.pl": "Polish",
	"languages.ps": "Pushto; Pashto",
	"languages.pt": "Portuguese",
	"languages.pt_br": "Portuguese - Brazil",
	"languages.pt_pt": "Portuguese - Portugal",
	"languages.qu": "Quechua",
	"languages.rm": "Raeto-Romance",
	"languages.rn": "Rundi",
	"languages.ro": "Romanian - Romania",
	"languages.ro_mo": "Romanian - Moldova",
	"languages.ru": "Russian",
	"languages.ru_mo": "Russian - Moldova",
	"languages.rw": "Kinyarwanda",
	"languages.sa": "Sanskrit",
	"languages.sb": "Sorbian",
	"languages.sc": "Sardinian",
	"languages.sd": "Sindhi",
	"languages.se": "Northern Sami",
	"languages.sg": "Sango",
	"languages.si": "Sinhala",
	"languages.sk": "Slovak",
	"languages.sl": "Slovenian",
	"languages.sm": "Samoan",
	"languages.sn": "Shona",
	"languages.so": "Somali",
	"languages.sq": "Albanian",
	"languages.sr": "Serbian",
	"languages.sr_sp": "Serbian - Cyrillic",
	"languages.ss": "Swati",
	"languages.st": "Sotho, Southern",
	"languages.su": "Sundanese",
	"languages.sv": "Swedish",
	"languages.sv_fi": "Swedish - Finland",
	"languages.sv_se": "Swedish - Sweden",
	"languages.sw": "Swahili",
	"languages.ta": "Tamil",
	"languages.te": "Telugu",
	"languages.tg": "Tajik",
	"languages.th": "Thai",
	"languages.ti": "Tigrinya",
	"languages.tk": "Turkmen",
	"languages.tl": "Tagalog",
	"languages.tn": "Setsuana",
	"languages.to": "Tonga (Tonga Islands)",
	"languages.tr": "Turkish",
	"languages.ts": "Tsonga",
	"languages.tt": "Tatar",
	"languages.tw": "Twi",
	"languages.ty": "Tahitian",
	"languages.ug": "Uighur; Uyghur",
	"languages.uk": "Ukrainian",
	"languages.ur": "Urdu",
	"languages.uz": "Uzbek",
	"languages.uz_uz": "Uzbek - Cyrillic",
	"languages.ve": "Venda",
	"languages.vi": "Vietnamese",
	"languages.vo": "Volapük",
	"languages.wa": "Walloon",
	"languages.wo": "Wolof",
	"languages.xh": "Xhosa",
	"languages.yi": "Yiddish",
	"languages.yo": "Yoruba",
	"languages.za": "Zhuang; Chuang",
	"languages.zh": "Chinese",
	"languages.zh_cn": "Chinese - China",
	"languages.zh_hk": "Chinese - Hong Kong SAR",
	"languages.zh_mo": "Chinese - Macau SAR",
	"languages.zh_sg": "Chinese - Singapore",
	"languages.zh_tw": "Chinese - Taiwan",
	"languages.zu": "Zulu",
	"launcher.siteSectionTitle": "Site <muted>• {siteName}</muted>",
	"launcherOpenerButton.menuTooltip": "Navigation Menu",
	"launcherOpenerButton.openMenuButtonText": "Open Menu",
	"launcherOpenerButton.signOut": "Sign Out",
	"legacyFormDialog.errorLoadingForm": "An error occurred trying to load the form",
	"legacyFormDialog.loadingForm": "Loading...",
	"legacyFormDialog.title": "Content Form",
	"localeSelectorControl.label": "Locale Selector",
	"localeSelectorControl.requiredError": "Field is Required",
	"logConsoleDetailsDialog.title": "Log Details",
	"logConsoleManagement.noLogs": "No logs found",
	"loggingLevels.changeLevelTo": "Current Level",
	"loggingLevels.currentLevel": "Current Level",
	"loggingLevelsManagement.levelChangedSuccessMessage": "Logging level changed successfully",
	"loginView.dialogTitleText": "Login to Crafter CMS",
	"loginView.forgotPasswordButtonLabel": "Forgot your password?",
	"loginView.incorrectCredentialsMessage": "Incorrect username or password. Please try again.",
	"loginView.loginButtonLabel": "Log In",
	"loginView.recoverYourPasswordBackButtonLabel": "Back",
	"loginView.recoverYourPasswordIntroText": "If your username exists, an email will be sent to you with a reset link.",
	"loginView.recoverYourPasswordSuccessMessage": "If \"{username}\" exists, a recovery email has been sent",
	"loginView.resetYourPasswordIntroText": "Please enter your new password",
	"loginView.usernameTextFieldLabel": "Username",
	"media.card.itemLastEdition": "Edited {time}",
	"media.card.title": "options",
	"navigator.noChildren": "Item has no children",
	"newContentDialog.contentTypeAllLabel": "Show all types",
	"newContentDialog.contentTypeComponentLabel": "Components only",
	"newContentDialog.contentTypePageLabel": "Pages only",
	"newContentDialog.emptyStateMessage": "No Content Types Found",
	"newContentDialog.subtitle": "Choose a content type template for your new content item.",
	"newContentDialog.title": "Create Content",
	"newFolder.folderName": "Folder Name",
	"newFolder.helperText": "Consisting of: letters, numbers, dash (-) and underscore (_).",
	"newFolder.rename": "Provide a new folder name",
	"newFolder.required": "Folder name is required.",
	"newFolder.title": "Create a New Folder",
	"newFolder.title.rename": "Rename Folder",
	"noUiConfigMessageTitle.subtitle": "Add & configure `ui.xml` on your site to show content here.",
	"noUiConfigMessageTitle.title": "Configuration file missing",
	"numericInputControl.childContent": "Minimum",
	"numericInputControl.maximun": "Maximum",
	"numericInputControl.noDecimalsErrMessage": "Decimals aren't allowed on this input.",
	"openToolsPanel.label": "Open tools panel",
	"operations.Add_members": "Add Members",
	"operations.Add_remote": "Add Remote",
	"operations.Approve": "Approve",
	"operations.Approve_scheduled": "Approve Scheduled",
	"operations.Cancel_publishing_package": "Cancel Publishing Package",
	"operations.Create": "Create",
	"operations.Delete": "Delete",
	"operations.Disable": "Disable",
	"operations.Enable": "Enable",
	"operations.Login": "Login",
	"operations.Login_failed": "Login Failed",
	"operations.Logout": "Logout",
	"operations.Move": "Move",
	"operations.Published": "Published",
	"operations.Pull_from_remote": "Pull From Remote",
	"operations.Push_to_remote": "Push To Remote",
	"operations.Reject": "Reject",
	"operations.Remove_cluster_node": "Remove Cluster Dode",
	"operations.Remove_members": "Remove Members",
	"operations.Remove_remote": "Remove Remote",
	"operations.Request_publish": "Request Publish",
	"operations.Revert": "Revert",
	"operations.Start_publisher": "Start Publisher",
	"operations.Stop_publisher": "Stop Publisher",
	"operations.Update": "Update",
	"operations.assetUploadFailed": "Asset Upload failed.",
	"operations.assetUploadStarted": "Asset upload started.",
	"operations.deleteOperationComplete": "Delete operation completed.",
	"operations.deleteOperationFailed": "Delete operation failed.",
	"operations.insertItemOperation": "Insert item operation not implemented.",
	"operations.insertOperationComplete": "Insert component operation completed.",
	"operations.insertOperationFailed": "Insert component operation failed.",
	"operations.moveOperationComplete": "Move operation completed",
	"operations.moveOperationFailed": "Move operation failed.",
	"operations.sortOperationComplete": "Sort operation completed.",
	"operations.sortOperationFailed": "Sort operation failed.",
	"operations.updateOperationComplete": "Update operation completed.",
	"operations.updateOperationFailed": "Update operation failed.",
	"pageBuilder.title": "Page Building",
	"pageExplorerPanel.currentContentItems": "Current Content Items",
	"pageExplorerPanel.loading": "Loading",
	"pageExplorerPanel.rootItemLabel": "Current Content Items",
	"pageExplorerPanel.title": "Page Explorer",
	"pagination.PreviousPage": "Previous page",
	"pagination.nextPage": "Next page",
	"pagination.previousPage": "Previous page",
	"passwordRequirement.fulfillAllReqErrorMessage": "Please fulfill all password requirements.",
	"passwordRequirement.hasLowercase": "Must contain at least one lowercase letter",
	"passwordRequirement.hasNumbers": "Must contain at least one number",
	"passwordRequirement.hasSpecialChars": "Must contain at least one special character {chars}",
	"passwordRequirement.hasUppercase": "Must contain at least one uppercase letter",
	"passwordRequirement.invalidPassword": "Requirements are not met",
	"passwordRequirement.maxLength": "Length must not exceed {max} characters",
	"passwordRequirement.minLength": "Length must be at least {min} characters",
	"passwordRequirement.minMaxLength": "Length must be between {minLength} and {maxLength} characters",
	"passwordRequirement.noBlank": "Must not be blank",
	"passwordRequirement.noSpaces": "Must not contain whitespaces",
	"passwordRequirement.passwordConfirmationMismatch": "Passwords don't match",
	"passwordRequirement.passwordValidation": "Password Validation",
	"passwordRequirement.unnamedGroup": "Condition not described",
	"passwordRequirement.validPassword": "Requirements met",
	"passwordRequirement.validationPassing": "Validation passing",
	"passwordTextField.toggleVisibilityButtonText": "toggle password visibility",
	"pastePolicy.confirm": "The selected {action} target goes against site policies for the destination directory. • Original path: \"{path}\", • Suggested path is: \"{modifiedPath}\". Would you like to use the suggested path?",
	"pastePolicy.error": "The selected {action} target goes against site policies for the destination directory.",
	"pathNavigator.noChildren": "Item has no children",
	"pathNavigator.noItemsAtLocation": "No items at this location",
	"pathNavigator.pathFilterInputPlaceholder": "Filter children of {name}...",
	"pathNavigator.viewChildren": "View children",
	"pathNavigatorTreeItemFilter.placeholder": "Filter children...",
	"pathSelectionDialog.createFolderButtonLabel": "Create Folder",
	"pathSelectionDialog.title": "Select Path",
	"plugin.by": "By",
	"plugin.crafterCMS": "Crafter CMS",
	"plugin.license": "License",
	"plugin.licenseTooltip": "{license} license",
	"plugin.more": "More...",
	"plugin.noDev": "No developer specified.",
	"plugin.use": "Use",
	"plugin.version": "Version",
	"pluginDetails.notCompatible": "This blueprint is not compatible with your current version of Crafter CMS.",
	"pluginManagement.emptyList": "There are no plugins installed",
	"pluginManagement.installationDate": "Installation Date",
	"pluginManagement.listPluginPermission": "You don't have enough permissions to see the list of plugins",
	"pluginManagement.searchPlugin": "Search & install",
	"preview.previewIFrameTitle": "Preview Frame",
	"previewAddressBar.reloadButtonLabel": "Reload this page",
	"previewAssetsPanel.itemsPerPage": "Items per page:",
	"previewAssetsPanel.noResults": " No results found.",
	"previewAssetsPanel.retrieveAssets": "Retrieving Site Assets",
	"previewAssetsPanel.title": "Assets",
	"previewAudiencesPanel.loading": "Retrieving targeting options",
	"previewAudiencesPanel.title": "Audience Targeting",
	"previewBrowseComponentsPanel.chooseContentType": "Please choose a content type.",
	"previewBrowseComponentsPanel.nextPage": "next page",
	"previewBrowseComponentsPanel.noResults": " No results found.",
	"previewBrowseComponentsPanel.previousPage": "previous page",
	"previewBrowseComponentsPanel.selectContentType": "Select content type",
	"previewBrowseComponentsPanel.title": "Browse Components",
	"previewCompatDialog.legacyCompatMessage": "This page is compatible with the previous editing experience. Would you like to go there now?",
	"previewCompatDialog.nextCompatMessage": "This page is compatible with the new editing experience. Would you like to go there now?",
	"previewCompatDialog.rememberChoice": "Remember choice",
	"previewCompatDialog.title": "Preview Compatibility Notice",
	"previewComponentsPanel.browse": "Browse existing",
	"previewComponentsPanel.listDropTargets": "List drop targets",
	"previewComponentsPanel.listInPageInstances": "List in-page instances",
	"previewComponentsPanel.listReceptacles": "List receptacles",
	"previewComponentsPanel.title": "Components",
	"previewContentTypeReceptaclesTool.selectContentType": "Select content type",
	"previewContentTypeReceptaclesTool.title": "{name} Receptacles",
	"previewDropTargetsPanel.chooseContentType": "Please choose a content type.",
	"previewDropTargetsPanel.noResults": "No results found.",
	"previewDropTargetsPanel.selectContentType": "Select content type",
	"previewDropTargetsPanel.title": "Component Drop Targets",
	"previewEditFormTool.editController": "Edit Controller",
	"previewEditFormTool.editTemplate": "Edit Template",
	"previewEditFormTool.openComponentForm": "Edit",
	"previewInPageInstancesPanel.chooseContentType": "Please choose a content type.",
	"previewInPageInstancesPanel.noResults": "No results found.",
	"previewInPageInstancesPanel.selectContentType": "Select content type",
	"previewInPageInstancesPanel.title": "In this Page",
	"previewPageExplorerPanel.loading": "Loading",
	"previewPageExplorerPanel.rootItemLabel": "Current Content Items",
	"previewPageExplorerPanel.title": "Page Explorer",
	"previewReceptaclesPanel.chooseContentType": "Please choose a content type.",
	"previewReceptaclesPanel.noResults": "No results found.",
	"previewReceptaclesPanel.selectContentType": "Select content type",
	"previewReceptaclesPanel.title": "Component Receptacles",
	"previewRubbishBin.dropToTrash": "Drop Here To Trash",
	"previewRubbishBin.itemTrashed": "Trashed!",
	"previewSearchPanel.title": "Search",
	"previewSimulatorPanel.previewWindowSize": "Preview Window Size",
	"previewSimulatorPanel.title": "Device Simulator",
	"previewSimulatorTool.previewWindowSize": "Preview Window Size",
	"previewSimulatorTool.title": "Device Simulator",
	"previewSiteExplorerPanel.title": "Site Explorer",
	"previewToolbar.itemMenu": "Item menu",
	"previewToolbar.quickCreateMenuTooltip": "Quick create menu",
	"previewToolbar.toggleEditMode": "Toggle edit mode",
	"previewTools.choseSiteMessage": "Please choose site",
	"previewTools.noWidgetsMessage": "No tools have been configured",
	"profileSettings.currentPassword": "Current password",
	"profileSettings.isRequired": "is required",
	"profileSettings.languageUpdateFailedWarning": "Language update has failed. Please retry momentarily.",
	"profileSettings.languageUpdatedSuccessfully": "Language Updated Successfully.",
	"profileSettings.mustMatchPreviousEntry": "Must match the previous entry",
	"profileSettings.password": "Password",
	"profileSettings.unsavedConfirmation": "You have unsaved changes. Discard changes?",
	"profileSettings.unsavedConfirmationTitle": "Unsaved Changes",
	"publishDialog.approveForPublish": "Approve for Publish",
	"publishDialog.changesInSelection": "Changes in the selection of items to publish will require \"all dependencies\" to be recalculated.",
	"publishDialog.differentPublishDateWarning": "<strong>Warning</strong> The items you have selected for approval were submitted with different requested publish dates/times.",
	"publishDialog.hardDependencies": "Hard Dependencies",
	"publishDialog.introductoryText": "Selected files will be published. Hard dependencies are automatically included. Soft dependencies are optional and you may choose which to include.",
	"publishDialog.itemsToPublish": "Items To Publish",
	"publishDialog.loadingDependencies": "Loading Dependencies, please wait{ellipsis}",
	"publishDialog.noItemsSelected": "No items have been selected",
	"publishDialog.publishingScheduleTitle": "Selected Item Scheduling",
	"publishDialog.showAllDependencies": "Show All Dependencies",
	"publishDialog.softDependencies": "Soft Dependencies",
	"publishDialog.submissionCommentFieldError": "Please write submission comment.",
	"publishDialog.submissionMandatory": "Submission Mandatory",
	"publishDialog.submissionOptional": "Submission Optional",
	"publishForm.emailLabel": "Email me the reviewer's feedback",
	"publishForm.environmentError": "Publishing targets load failed.",
	"publishForm.environmentLoading": "Loading...",
	"publishForm.environmentRetry": "retry",
	"publishForm.environmentSuccess": "Success",
	"publishForm.publishingTargetDropdownLabel": "Publishing Target",
	"publishForm.scheduling": "Scheduling",
	"publishForm.schedulingLater": "Later",
	"publishForm.schedulingNow": "Now",
	"publishForm.submissionComment": "Submission Comment",
	"publishOnDemand.formPathExample": "e.g. /site/website/about/index.xml",
	"publishOnDemand.formPathExamplePreview": "You may enter multiple separate by comma",
	"publishOnDemand.formPathLabel": "Path to Publish",
	"publishOnDemand.formPathLabelPreview": "Commit or tag IDs",
	"publishOnDemand.pathModeDescription": "Publish changes made in Studio via the UI",
	"publishOnDemand.publishingTarget": "Publishing Target",
	"publishOnDemand.submissionComment": "Submission Comment",
	"publishOnDemand.tagsModeDescription": "Publish changes made via direct git actions against the repository or pulled from a remote repository",
	"publishOnDemand.title": "Publish on Demand",
	"publishing.bulkPublishNote": "Bulk publish should be used to publish changes made in Studio via the UI. For changes made via direct git actions, use the \"Publish by...\" feature.",
	"publishing.busy": "Busy",
	"publishing.idle": "Idle",
	"publishing.publishByNote": "\"Publish by...\" feature must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use \"Bulk Publish\".",
	"publishing.queued": "Queued",
	"publishing.ready": "Ready",
	"publishing.started": "Started",
	"publishing.stopped": "Stopped",
	"publishingDashboard.BLOCKED": "Blocked",
	"publishingDashboard.CANCELLED": "Cancelled",
	"publishingDashboard.COMPLETED": "Completed",
	"publishingDashboard.PROCESSING": "Processing",
	"publishingDashboard.READY_FOR_LIVE": "Ready for Live",
	"publishingDashboard.all": "All",
	"publishingDashboard.bulkPublishStarted": "Bulk Publish process has been started.",
	"publishingDashboard.cancelItemButtonText": "Cancel",
	"publishingDashboard.cancelSelected": "Cancel Selected",
	"publishingDashboard.comment": "Comment",
	"publishingDashboard.commentNotProvided": "(submission comment not provided)",
	"publishingDashboard.confirmAllHelper": "Set the state for all selected items to \"Cancelled\"?",
	"publishingDashboard.confirmHelperText": "Set item state to \"Cancelled\"?",
	"publishingDashboard.fetchPackagesFiles": "Fetch Packages Files",
	"publishingDashboard.filesList": "files list",
	"publishingDashboard.filteredBy": "Showing: {state, select, all {} other {Status: {state}.}} {environment, select, all {} other {{environment} target.}} {path, select, none {} other {Filtered by {path}}}",
	"publishingDashboard.filters": "Filters",
	"publishingDashboard.gitNote": "Publishing by commit or tag must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use please <a>publish by path</a>.",
	"publishingDashboard.next": "Next page",
	"publishingDashboard.no": "No",
	"publishingDashboard.noPackagesSubtitle": "Try changing your query",
	"publishingDashboard.noPackagesTitle": "No packages were found",
	"publishingDashboard.packagesSelected": "{count, plural, one {{count} Package selected} other {{count} Packages selected}}",
	"publishingDashboard.pathExpression": "Path Expression",
	"publishingDashboard.previous": "Previous page",
	"publishingDashboard.publishSuccess": "Published successfully.",
	"publishingDashboard.scheduled": "Scheduled for <b>{schedule, date, medium} {schedule, time, short}</b> by <b>{approver}</b>",
	"publishingDashboard.selectAll": "Select all on this page",
	"publishingDashboard.state": "State",
	"publishingDashboard.status": "Status is {state} for {environment} publishing target",
	"publishingDashboard.studioNote": "Publishing by path should be used to publish changes made in Studio via the UI. For changes made via direct git actions, please <a>publish by commit or tag</a>.",
	"publishingDashboard.warning": "This will force publish all items that match the pattern requested including their dependencies, and it may take a long time depending on the number of items. Please make sure that all modified items (including potentially someone's work in progress) are ready to be published before continuing.",
	"publishingDashboard.yes": "Yes",
	"publishingQueue.title": "Publishing Queue",
	"publishingStatusTile.isDisabledMessage": "The publisher is disabled.",
	"publishingStatusTile.lockOwnerDisplayMessage": "Locked by {lockOwner}",
	"publishingStatusTile.lockTTLMessage": "TTL {lockTTL}",
	"publishingStatusTile.publishingStatus": "Publishing Status",
	"quickCreateBtnLabel.label": "Open quick create menu",
	"quickCreateMenu.learnMore": "Learn More",
	"quickCreateMenu.learnMoreError": "Quick create has not been configured. Please contact your system administrator.",
	"quickCreateMenu.sectionTitle": "Quick Create",
	"quickCreateMenu.title": "New Content",
	"register.dropTargetsNotFound": "There are no drop targets for {contentType} components",
	"register.notFound": "{name} is not visible or was not registered by developers",
	"rejectDialog.brokenLinks": "Broken Links",
	"rejectDialog.cancel": "Cancel",
	"rejectDialog.continue": "Reject",
	"rejectDialog.incorrectBranding": "Incorrect Branding",
	"rejectDialog.notApproved": "Not Approved",
	"rejectDialog.nsoa": "Needs Section Owner's Approval",
	"rejectDialog.rejectCommentLabel": "Rejection Comment",
	"rejectDialog.rejectionReason": "Rejection Reason",
	"rejectDialog.submittedBy": "Submitted By",
	"rejectDialog.typos": "Typos",
	"remoteRepositories.title": "Remote Repositories",
	"reposAdmin.pendingCommit": "Repo contains files pending commit. See Repository status below for details.",
	"reposAdmin.repositoriesNote": "Do not use Studio as a git merge and conflict resolution platform. All merge conflicts should be resolved upstream before getting pulled into Studio.",
	"reposAdmin.unreachableRemote": "Remote \"{name}\" is currently unreachable.",
	"reposAdmin.unstagedFilesMessage": "There are unstaged files in your repository.",
	"requestPublishDialog.cancel": "Cancel",
	"requestPublishDialog.submit": "Submit",
	"requestPublishDialog.title": "Request Publish",
	"resetPasswordDialog.helperText": "Set a new password for \"{user}\" user",
	"resetPasswordDialog.passwordUpdated": "Password updated successfully",
	"resetPasswordDialog.title": "Reset Password",
	"resetView.resetPasswordConfirmFieldPlaceholderLabel": "Confirm Password",
	"resetView.resetPasswordError": "Error resetting password. Token may be invalid or expired.",
	"resetView.resetPasswordFieldPlaceholderLabel": "New Password",
	"resetView.resetPasswordInvalidToken": "Invalid or expired token.",
	"resetView.resetPasswordSuccess": "Password successfully reset. Please login with your new password.",
	"rteControlMessages.chooseSource": "Choose a Source",
	"rteControlMessages.dropImageUploaded": "{title} was successfully uploaded.",
	"rteControlMessages.escapeScripts": "Escape Scripts",
	"rteControlMessages.incompatibleDatasource": "The data source configured for browse is not compatible with the Rich Text Editor. Please contact your administrator.",
	"rteControlMessages.noDatasourcesConfigured": "No sources configured for this editor.",
	"rteControlMessages.requiredField": "Field is Required",
	"search.acceptSelection": "Accept Selection",
	"search.changeQuery": "Try changing your query.",
	"search.filtersActive": " • <span>Filters Active</span>",
	"search.goToPreview": "Go to page",
	"search.itemsPerPage": "Items per page:",
	"search.noPermissions": "No permissions available.",
	"search.noResults": "No Results Were Found.",
	"search.resultsCaption": "{from}-{to} of {count} results {keywordLength, plural, =0 {}other{ for <b>“{keyword}”</b>}} ",
	"search.resultsSelected": "{count, plural, one {{count} item selected} other {{count} items selected}}",
	"search.selectAll": "Select all on this page",
	"search.selectionCount": "{count} selected",
	"search.videoProcessed": "Video is being processed, preview will be available when processing is complete",
	"searchAhead.noResults": "No Results.",
	"searchBar.placeholder": "Search...",
	"searchFilter.above": "Above {value}{unit}",
	"searchFilter.asc": "Ascending",
	"searchFilter.byRelevanceAscMessage": "Less relevant first",
	"searchFilter.byRelevanceDescMessage": "Most relevant first",
	"searchFilter.clearFilters": "Clear Filters",
	"searchFilter.contentType": "Content Type",
	"searchFilter.desc": "Descending",
	"searchFilter.internalName": "Name",
	"searchFilter.lastEditDate": "Last Edit Date",
	"searchFilter.mimeType": "MIME Type",
	"searchFilter.searchIn": "Search in:",
	"searchFilter.size": "Content Size",
	"searchFilter.sortBy": "Sort By",
	"searchFilter.under": "Under {value}{unit}",
	"searchToolBar.changeViewButtonTooltip": "Change view",
	"searchToolBar.showHideFilters": "Show/hide filters",
	"settingsPanel.editMode": "Edit Mode",
	"settingsPanel.editModeHelperText": "Enable In-context editing, highlighting editable zones as you hover on them.",
	"settingsPanel.highlightAllZones": "Highlight All Zones",
	"settingsPanel.highlightMode": "Highlight Mode",
	"settingsPanel.highlightModeHelperText": "When \"highlight movable\" is active, only content items you can move around drop targets highlight.",
	"settingsPanel.highlightMovable": "Highlight Movable",
	"sharedContentDS.sharedContent": "Shared Content",
	"site.deleted": "Site deleted successfully",
	"siteCard.helperText": "Delete \"{site}\" site?",
	"siteComponentDS.componentPath": "Component Path",
	"siteComponentDS.dataType": "Data Type",
	"siteComponentDS.date": "Date",
	"siteComponentDS.float": "Float",
	"siteComponentDS.html": "Data Type",
	"siteComponentDS.integer": "Integer",
	"siteComponentDS.label": "Taxonomy Selector",
	"siteComponentDS.required": "Required",
	"siteComponentDS.siteComponent": "Site Component",
	"siteComponentDS.string": "String",
	"siteComponentDS.unableLoad": "The system was unable to load {file}.",
	"siteConfig.controlNotAvailable": "Control not available",
	"siteConfig.insertExpressionMessage": "Insert Expression",
	"siteConfig.invalidNumber": "\"{value}\" is not a valid number.",
	"siteConfig.landingMessage": "Please choose a tool from the left.",
	"siteConfig.loadModuleError": "Unable to load \"{tool}\". Check Site tools configuration.",
	"siteConfig.postfixes": "Postfixes",
	"siteConfig.switchToMessage": "Switch to {type}",
	"siteConfig.toolNotFound": "\"{tool}\" tool not found.",
	"siteConfigurationManagement.activeEnvironment": "{environment} Environment",
	"siteConfigurationManagement.confTabAWSProfiles": "AWS Profiles",
	"siteConfigurationManagement.confTabAWSProfilesDesc": "AWS profiles configuration file.",
	"siteConfigurationManagement.confTabAssetProcessing": "Asset Processing",
	"siteConfigurationManagement.confTabAssetProcessingDesc": "Asset processing configuration file.",
	"siteConfigurationManagement.confTabBlobStores": "Blob Stores",
	"siteConfigurationManagement.confTabBlobStoresDesc": "Blob stores configuration file.",
	"siteConfigurationManagement.confTabBoxProfiles": "Box Profiles",
	"siteConfigurationManagement.confTabBoxProfilesDesc": "Box profiles configuration file.",
	"siteConfigurationManagement.confTabCMISConfiguration": "CMIS Configuration",
	"siteConfigurationManagement.confTabCMISConfigurationDesc": "This files configures 0 or more CMIS-capable repositories as data-sources for content authors to pick from",
	"siteConfigurationManagement.confTabCodeEditorConf": "Code Editor Configuration",
	"siteConfigurationManagement.confTabCodeEditorConfDesc": "Defines Code Editor configurations",
	"siteConfigurationManagement.confTabConfDesc": "Defines this list of configurations",
	"siteConfigurationManagement.confTabConfigurations": "Configurations",
	"siteConfigurationManagement.confTabContextualNavigationConf": "Contextual Navigation Configuration",
	"siteConfigurationManagement.confTabContextualNavigationConfDesc": "Defines modules on the site contextual navigation bar",
	"siteConfigurationManagement.confTabDependencyResolverConf": "Dependency Resolver Configuration",
	"siteConfigurationManagement.confTabDependencyResolverConfDesc": "This file configures what file paths Crafter considers a dependency and how they should be extracted.",
	"siteConfigurationManagement.confTabDevEnvironmentConf": "Dev Environment Configuration",
	"siteConfigurationManagement.confTabDevEnvironmentConfDesc": "Defines a dev environment configuration",
	"siteConfigurationManagement.confTabEndpointsConf": "Endpoints Configuration",
	"siteConfigurationManagement.confTabEndpointsConfDesc": "Defines a list of end points available",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfiguration": "Engine Site Application Context",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationDesc": "Site application context used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationLive": "Engine Site Application Context - Live",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationPreview": "Engine Site Application Context - Preview",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationStaging": "Engine Site Application Context - Staging",
	"siteConfigurationManagement.confTabEngineSiteConfiguration": "Engine Site Configuration",
	"siteConfigurationManagement.confTabEngineSiteConfigurationDesc": "Site configuration used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteConfigurationLive": "Engine Site Configuration - Live",
	"siteConfigurationManagement.confTabEngineSiteConfigurationPreview": "Engine Site Configuration - Preview",
	"siteConfigurationManagement.confTabEngineSiteConfigurationStaging": "Engine Site Configuration - Staging",
	"siteConfigurationManagement.confTabEngineUrlRewriteConf": "Engine URL Rewrite Configuration (XML Style)",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfDesc": "This file configures site properties used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfLive": "Engine URL Rewrite Configuration (XML Style) - Live",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfPreview": "Engine URL Rewrite Configuration (XML Style) - Preview",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfStaging": "Engine URL Rewrite Configuration (XML Style) - Staging",
	"siteConfigurationManagement.confTabEnvironmentConfiguration": "Environment Configuration",
	"siteConfigurationManagement.confTabEnvironmentConfigurationDesc": "This file configures the environments Crafter Studio can publish to",
	"siteConfigurationManagement.confTabMimeTypes": "Mime Types",
	"siteConfigurationManagement.confTabMimeTypesDesc": "This file configures the mime types icons overrides for this site/blueprint.",
	"siteConfigurationManagement.confTabNotificationConf": "Notification Configuration",
	"siteConfigurationManagement.confTabNotificationConfDesc": "Defines a list of UI messages",
	"siteConfigurationManagement.confTabPermissionsMappings": "Permissions Mapping",
	"siteConfigurationManagement.confTabPermissionsMappingsDesc": "Defines a map of permissions and paths",
	"siteConfigurationManagement.confTabPersonasConf": "Personas Configuration",
	"siteConfigurationManagement.confTabPersonasConfDesc": "Defines a list of personas available to assume in preview",
	"siteConfigurationManagement.confTabPreviewAssetConf": "Preview Asset Configuration",
	"siteConfigurationManagement.confTabPreviewAssetConfDesc": "Defines a list of editable assets associated with XML contents",
	"siteConfigurationManagement.confTabPreviewComponentsConf": "Preview Components Configuration",
	"siteConfigurationManagement.confTabPreviewComponentsConfDesc": "Defines a list of components that can be created dynamically in preview",
	"siteConfigurationManagement.confTabPreviewPanelConf": "Preview Panel Configuration",
	"siteConfigurationManagement.confTabProxyConfig": "Proxy Config",
	"siteConfigurationManagement.confTabProxyConfigDesc": "This file configures the proxy servers for preview.",
	"siteConfigurationManagement.confTabRTEConf": "RTE (TinyMCE 2) Configuration",
	"siteConfigurationManagement.confTabRTEConfDesc": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.confTabRTEtMCE5Conf": "RTE (TinyMCE 5) Configuration",
	"siteConfigurationManagement.confTabRTEtMCE5ConfDesc": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.confTabRoleMappings": "Role Mappings",
	"siteConfigurationManagement.confTabRoleMappingsDesc": "Defines a list of roles available in site",
	"siteConfigurationManagement.confTabSidebarConf": "Sidebar Configuration",
	"siteConfigurationManagement.confTabSidebarConfDesc": "Defines modules on the sidebar",
	"siteConfigurationManagement.confTabSiteConf": "Site Config Tools",
	"siteConfigurationManagement.confTabSiteConfDesc": "Defines the list of admin tools available",
	"siteConfigurationManagement.confTabSiteConfiguration": "Site Configuration",
	"siteConfigurationManagement.confTabSiteConfigurationDesc": "Defines the general site configuration",
	"siteConfigurationManagement.confTabSitePolicyConf": "Site Policy Configuration",
	"siteConfigurationManagement.confTabSitePolicyConfDesc": "Defines policies to validate content operations",
	"siteConfigurationManagement.confTabTargetingConfiguration": "Targeting Configuration",
	"siteConfigurationManagement.confTabTargetingConfigurationDesc": "This file configures the targeting system of Crafter Studio to help provide Crafter Engine with fake user properties that help drive the targeting system",
	"siteConfigurationManagement.confTabTargetsConf": "Targets Configuration",
	"siteConfigurationManagement.confTabTargetsConfDesc": "Defines a list of targets used for form datasource",
	"siteConfigurationManagement.confTabTranslationConf": "Translation Configuration",
	"siteConfigurationManagement.confTabTranslationConfDesc": "Defines supported languages and how to resolve them",
	"siteConfigurationManagement.confTabUiConf": "User Interface Configuration",
	"siteConfigurationManagement.confTabUiConfDesc": "Defines the widgets shown in the user interface",
	"siteConfigurationManagement.confTabWebDAVProfiles": "WebDAV Profiles",
	"siteConfigurationManagement.confTabWebDAVProfilesDesc": "WebDAV profiles configuration file.",
	"siteConfigurationManagement.confTabWorkflowConf": "Workflow Configuration",
	"siteConfigurationManagement.confTabWorkflowConfDesc": "Defines workflows available in the system",
	"siteConfigurationManagement.confTabconfTabPreviewPanelConfDesc": "Defines a list of tools available in preview",
	"siteConfigurationManagement.environment": "Active Environment: {environment}",
	"siteConfigurationManagement.hideSample": "Hide Sample",
	"siteConfigurationManagement.history": "History",
	"siteConfigurationManagement.selectConfigFile": "Please choose a config file from the left.",
	"siteConfigurationManagement.unsavedChangesSubtitle": "You have unsaved changes, do you want to leave?",
	"siteConfigurationManagement.unsavedChangesTitle": "Unsaved changes",
	"siteConfigurationManagement.viewSample": "View Sample",
	"siteExplorerPanel.emptyMessage": "No widgets are configured to show on the site explorer.",
	"siteExplorerPanel.siteConfig": "Site Config",
	"siteExplorerPanel.title": "Site Explorer",
	"siteExplorerPanel.unsupportedItemsPreset": "Some items in the site explorer config are not supported and won't show.",
	"siteSearch.noOptionsAvailable": "No options available",
	"siteSearch.unknownErrorSearching": "An error occurred with the search service.",
	"siteSwitcherSelected.siteSelectorNoSiteSelected": "Choose site",
	"siteTools.title": "Site Tools",
	"sites.ChangeView": "Change view",
	"sites.createGroup": "Create Group",
	"sites.createSite": "Create Site",
	"sitesAdmin.siteUpdated": "Site Updated.",
	"sitesGrid.emptyStateMessage": "No Sites Found",
	"sitesGrid.siteDeleted": "Site deleted successfully",
	"targetingDialog.setNow": "Set Now",
	"tokenManagement.clearSelected": "Clear Selected ({count})",
	"tokenManagement.copied": "Token copied to clipboard",
	"tokenManagement.createToken": "Create Token",
	"tokenManagement.created": "Token created and copied to clipboard",
	"tokenManagement.deleted": "{count, plural, one {Token deleted} other {The selected tokens were deleted}}",
	"tokenManagement.deletedSelected": "Delete Selected",
	"tokenManagement.emptyTokens": "There are no tokens, click on Create Token to add a new one",
	"tokenManagement.helperText": "Delete \"{label}\" token?",
	"tokenManagement.updated": "Token updated",
	"toolbarGlobalNav.openMenuButtonText": "Open Menu",
	"toolbarGlobalNav.signOut": "Sign Out",
	"transcodedVideoPickerControl.label": "Transcoded Video",
	"transferList.addDisabledTooltip": "Select items to add from the left",
	"transferList.addToTarget": "Add selected",
	"transferList.emptyListMessage": "All users are members of this group",
	"transferList.removeDisabledTooltip": "Select items to remove from the right",
	"transferList.removeFromTarget": "Remove selected",
	"transferList.targetEmptyStateMessage": "No members on this group",
	"transferListColumn.noResults": "No results, try to change the query",
	"unlockPublisherDialog.dialogCopy": "Please confirm the release of the publisher lock",
	"unlockPublisherDialog.dialogTitle": "Confirm Publisher Unlock",
	"unlockPublisherDialog.typeConfirmPassword": "Type the word \"<b>{password}</b>\" to confirm you understand the implications and wish to proceed.",
	"unlockPublisherDialog.unlockCompleteMessage": "Publisher lock released successfully.",
	"unlockPublisherDialog.unlockFailedMessage": "Error releasing publisher lock.",
	"uploadDialog.title": "Upload",
	"uploadDialog.uploadInProgress": "Uploads are still in progress. Leaving this page would stop the pending uploads. Are you sure you wish to leave?",
	"uploadDialog.uploadInProgressConfirmation": "Uploads are still in progress. Closing this modal would stop the pending uploads. Are you sure you wish to close it?",
	"uppyCore.noDuplicates": "Cannot add the duplicate file “%'{fileName}'”, it already exists",
	"uppyDashboard.acceptAll": "Accept all changes",
	"uppyDashboard.addMore": "Add more",
	"uppyDashboard.addingMoreFiles": "Adding more files",
	"uppyDashboard.cancelPending": "Cancel pending",
	"uppyDashboard.clearCompleted": "Clear completed",
	"uppyDashboard.rejectAll": "Reject all changes",
	"uppyDashboard.removeFile": "Remove file",
	"uppyDashboard.renamingFromTo": "Renaming from %'{from}' to %'{to}'",
	"uppyDashboard.validateAndRetry": "Accept changes and upload",
	"userGroupMembershipEditor.addOrRemoveError": "Error modifying user group(s). Please try again momentarily.",
	"userGroupMembershipEditor.addToGroupsSuccess": "\"{user}\" added to {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userGroupMembershipEditor.removeFromGroupsSuccess": "\"{user}\" removed from {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userInfoDialog.close": "Close",
	"userInfoDialog.deleteUser": "Delete user",
	"userInfoDialog.externallyManaged": "Managed externally",
	"userInfoDialog.helperText": "Delete \"{username}\" user?",
	"userInfoDialog.noRoles": "No roles",
	"userInfoDialog.resetPassword": "Reset password",
	"userInfoDialog.siteName": "Site name",
	"userInfoDialog.siteRoles": "Roles per site",
	"userInfoDialog.userDeleted": "User deleted successfully",
	"userInfoDialog.userDetails": "User Details",
	"userInfoDialog.userDisabled": "User disabled successfully",
	"userInfoDialog.userEnabled": "User enabled successfully",
	"userInfoDialog.userUpdated": "User updated successfully",
	"usersAdmin.firstName": "First Name",
	"usersAdmin.lastName": "Last Name",
	"usersAdmin.maxLengthError": "{field} can't be longer than {size} characters",
	"usersAdmin.passwordChangeSuccessMessage": "Password changed successfully",
	"usersAdmin.userCreated": "{username} created.",
	"usersAdmin.userDeleted": "{username} deleted.",
	"usersAdmin.userEdited": "{username} edited.",
	"usersAdmin.userName": "User Name",
	"usersGrid.createUser": "Create User",
	"usersGrid.emptyStateMessage": "No Users Found",
	"validations.maxCount": "The max number of items is {maxCount}",
	"validations.maxLength": "The max length ({maxLength}) reached",
	"validations.minCount": "The min number of items is {minCount}",
	"validations.required": "{field} is required",
	"viewVersionDialog.headerTitle": "Viewing item version",
	"wcmRootFolder.pathNotFound": "Folder {path} not found.",
	"widgetComponent.componentNotFoundSubtitle": "Check ui config & make sure you've installed the plugins that contain the desired components.",
	"widgetComponent.componentNotFoundTitle": "Component {id} not found.",
	"widgetComponent.pluginLoadFailedMessageBody": "With {info} & component id \"{id}\".",
	"widgetComponent.pluginLoadFailedMessageTitle": "Plugin load failed",
	"withEmptyState.defaultEmptyStateMessage": "No results found",
	words: words,
	"words.about": "About",
	"words.accept": "Accept",
	"words.account": "Account",
	"words.apply": "Apply",
	"words.approve": "Approve",
	"words.asset": "Asset",
	"words.audit": "Audit",
	"words.back": "Back",
	"words.base": "Base",
	"words.browse": "Browse",
	"words.by": "By",
	"words.cancel": "Cancel",
	"words.clear": "Clear",
	"words.close": "Close",
	"words.cluster": "Cluster",
	"words.compact": "Compact",
	"words.component": "Component",
	"words.configuration": "Configuration",
	"words.confirm": "Confirm",
	"words.content": "Content",
	"words.continue": "Continue",
	"words.copy": "Copy",
	"words.create": "Create",
	"words.created": "Created",
	"words.custom": "Custom",
	"words.cut": "Cut",
	"words.dashboard": "Dashboard",
	"words.defaults": "Defaults",
	"words.delete": "Delete",
	"words.dependencies": "Dependencies",
	"words.description": "Description",
	"words.desktop": "Desktop",
	"words.details": "Details",
	"words.disabled": "Disabled",
	"words.dismiss": "Dismiss",
	"words.documentation": "Documentation",
	"words.done": "Done",
	"words.duplicate": "Duplicate",
	"words.edit": "Edit",
	"words.edited": "Edited",
	"words.email": "E-mail",
	"words.enabled": "Enabled",
	"words.error": "Error",
	"words.expiration": "Expiration",
	"words.expired": "Expired",
	"words.files": "Files",
	"words.filter": "Filter",
	"words.firstName": "First name",
	"words.from": "From",
	"words.global": "Global",
	"words.go": "Go",
	"words.groups": "Groups",
	"words.height": "Height",
	"words.history": "History",
	"words.id": "Id",
	"words.install": "Install",
	"words.installed": "Installed",
	"words.item": "Item",
	"words.label": "Label",
	"words.language": "Language",
	"words.lastName": "Last name",
	"words.level": "Level",
	"words.loading": "Loading",
	"words.locales": "Locales",
	"words.logger": "Logger",
	"words.login": "Login",
	"words.logout": "Logout",
	"words.max": "Max",
	"words.members": "Members",
	"words.menu": "Menu",
	"words.message": "Message",
	"words.min": "Min",
	"words.minimize": "Minimize",
	"words.name": "Name",
	"words.never": "Never",
	"words.no": "No",
	"words.notification": "Notification",
	"words.ok": "Ok",
	"words.options": "Options",
	"words.page": "Page",
	"words.parameters": "Parameters",
	"words.password": "Password",
	"words.paste": "Paste",
	"words.path": "Path",
	"words.pause": "Pause",
	"words.phone": "Phone",
	"words.presets": "Presets",
	"words.preview": "Preview",
	"words.publish": "Publish",
	"words.publishing": "Publishing",
	"words.queued": "Queued",
	"words.ready": "Ready",
	"words.reason": "Reason",
	"words.refresh": "Refresh",
	"words.reject": "Reject",
	"words.relevance": "Relevance",
	"words.reload": "Reload",
	"words.remove": "Remove",
	"words.rename": "Rename",
	"words.reset": "Reset",
	"words.revert": "Revert",
	"words.review": "Review",
	"words.roles": "Roles",
	"words.save": "Save",
	"words.schedule": "Schedule",
	"words.script": "Script",
	"words.scripts": "Scripts",
	"words.search": "Search",
	"words.select": "Select",
	"words.selected": "Selected",
	"words.settings": "Settings",
	"words.site": "Site",
	"words.sites": "Sites",
	"words.start": "Start",
	"words.state": "State",
	"words.status": "Status",
	"words.stay": "Stay",
	"words.stop": "Stop",
	"words.stopped": "Stopped",
	"words.submit": "Submit",
	"words.system": "System",
	"words.tablet": "Tablet",
	"words.template": "Template",
	"words.templates": "Templates",
	"words.thread": "Thread",
	"words.timestamp": "Timestamp",
	"words.to": "To",
	"words.translation": "Translation",
	"words.type": "Type",
	"words.unknown": "Unknown",
	"words.unlock": "Unlock",
	"words.update": "Update",
	"words.upload": "Upload",
	"words.url": "Url",
	"words.username": "Username",
	"words.users": "Users",
	"words.validating": "Validating",
	"words.value": "Value",
	"words.version": "Version",
	"words.view": "View",
	"words.warning": "Warning",
	"words.width": "Width",
	"words.yes": "Yes",
	"workflowCancellation.cancel": "Cancel",
	"workflowCancellation.continue": "Continue",
	"workflowCancellation.subtitle": "Edit will cancel all items that are in the scheduled deployment batch. Please review the list of files below and chose “Continue” to cancel workflow and edit or “Cancel” to remain in your dashboard.",
	"workflowCancellation.title": "Warning: Workflow Cancellation",
	"workflowStates.title": "Workflow States"
};

var guestDetectionMessage$1 = "La comunicación con la aplicación de vista previa fue interrumpida. Studio continuará reintentando la conexión.";
var words$1 = "Save";
var es = {
	"CreateUserDialog.title": "Create User",
	"GlobalMenu.AboutUs": "Acerca de",
	"GlobalMenu.Audit": "Audit",
	"GlobalMenu.AuditEntryLabel": "Auditoría",
	"GlobalMenu.ClusterEntryLabel": "Clúster",
	"GlobalMenu.GroupsEntryLabel": "Grupos",
	"GlobalMenu.Sites": "Sites",
	"GlobalMenu.SitesEntryLabel": "Sitios",
	"GlobalMenu.UsersEntryLabel": "Usuarios",
	"InstallPluginDialog.empty": "No plugins found.",
	"InstallPluginDialog.title": "Search & install plugin",
	"PluginManagement.pluginInstalled": "Plugin installed successfully",
	"about.buildDate": "Build Date",
	"about.buildNumber": "Build Number",
	"about.studioVersionNumber": "Studio Version Number",
	"aboutView.attribution": "Crafter CMS es posible gracias a otros <a>proyectos de software de código abierto</a>.",
	"accountManagement.changeHelperText": "Once your password has been successfully updated, you'll be required to login again.",
	"accountManagement.changeLanguage": "Change Language",
	"accountManagement.changePassword": "Change Password",
	"accountManagement.confirmPassword": "Confirm Password",
	"accountManagement.currentPassword": "Current Password",
	"accountManagement.languageUpdated": "Language preference changed",
	"accountManagement.newPassword": "New Password",
	"accountManagement.passwordChanged": "Password changed successfully",
	"accountManagement.passwordInvalid": "Password is invalid.",
	"accountManagement.passwordMatch": "Must match the previous password.",
	"adminConfigurations.allEncrypted": "No hay elementos pendientes de ser cifrados. Para marcar para el cifrado, el attributo `encrypted` debe tener un valor en blanco (por ejemplo, `encrypted=\"\"`)",
	"adminConfigurations.configSaved": "Configuration saved successfully.",
	"adminConfigurations.documentError": "The document contains errors. Check for error markers on side of the editor.",
	"adminConfigurations.encryptHinPt1": "Para cifrar el contenido de una etiqueta, (1) marque las etiquetas deseadas para el cifrado, luego (2) haga clic en el botón \"Cifrar marcado\".",
	"adminConfigurations.encryptHinPt2": "(1) Marque sus etiquetas para el cifrado agregando el atributo <bold>`encrypted =\" \"`</bold>.",
	"adminConfigurations.encryptHinPt3": "Ejemplo: {lt}accessKey encrypted = \"\"{gt}AKIAIOSFODNN7EXAMPLE{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt4": "(2) Haga clic en el botón <bold>`Cifrar marcado '</bold>. Trás completar la petición, su etiqueta ahora debería verse así:",
	"adminConfigurations.encryptHinPt5": "{lt}accessKey encrypted = \"true\"{gt}${lc}enc: xeJW23SomeEncryptedValuesListedHere{rc}{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt6": "Recuerde:",
	"adminConfigurations.encryptHinPt7": "Utilice el atributo `encrypted =” ”` solo en etiquetas que contengan directamente el valor a cifrar (texto).",
	"adminConfigurations.encryptHinPt8": "No agregue el atributo en etiquetas que contengan otras etiquetas, a menos que quiera cifrar una cadena de XML.",
	"adminConfigurations.encryptHinPt9": "No manipule los resultados de cifrado manualmente.",
	"adminConfigurations.encryptMarked": "Cifrar marcados",
	"adminConfigurations.encryptionSingleDetail": "{br}\"{name}\" with value \"{value}\"",
	"adminConfigurations.noEncryptItems": "No se encontraron elementos para cifrar en el XML. Agregue el atributo `encrypted=\"\"` para marcar para el cifrado.",
	"adminConfigurations.pendingEncryption": "{itemCount, plural, one {Tag Name {tags} is marked for encryption but hasn't}other {Tag names: {tags} {br} are marked for encryption but haven't}} been encrypted, please trigger encryption or remove the tag flagging.",
	"adminConfigurations.xmlContainsErrors": "El documento XML contiene errores: {errors}",
	"approveDialog.subtitle": "Selected files will go live upon submission. Hard dependencies are automatically submitted with the main items. You may choose whether to submit or not soft dependencies",
	"approveDialog.title": "Approve for Publish",
	"asyncVideoPlayer.videoBeingProcessed": "Video is being processed, preview will be available when processing is complete",
	"audiencesPanel.apply": "Apply",
	"audiencesPanel.defaults": "Defaults",
	"audiencesPanelControl.optionSelectorNoOptionSelected": "Select Option",
	"auditGrid.allOrigins": "All Origins",
	"auditGrid.allSites": "All Sites",
	"auditGrid.allUsers": "All Users",
	"auditGrid.clearFilters": "Clear filters",
	"auditGrid.clusterNode": "Cluster Node",
	"auditGrid.emptyStateMessage": "No Logs Found",
	"auditGrid.name": "Name",
	"auditGrid.noParameters": "No parameters",
	"auditGrid.operation": "Operation",
	"auditGrid.origin": "Origin",
	"auditGrid.parameters": "Parameters",
	"auditGrid.showParameters": "Show parameters",
	"auditGrid.siteName": "Site",
	"auditGrid.targetType": "Target Type",
	"auditGrid.targetValue": "Target Value",
	"auditGrid.timestamp": "Timestamp",
	"auditGrid.timezone": "Timezone",
	"auditGrid.username": "Username",
	"auditGridFilterPopover.allOperations": "All Operations",
	"auditGridFilterPopover.filterByCluster": "Filter by Cluster Node",
	"auditGridFilterPopover.filterByOperations": "Filter by Operations",
	"auditGridFilterPopover.filterByOrigin": "Filter by Origin",
	"auditGridFilterPopover.filterBySite": "Filter by Site",
	"auditGridFilterPopover.filterByTarget": "Filter by Target Value",
	"auditGridFilterPopover.filterByUser": "Filter by User",
	"authMonitor.dialogTitleText": "Sesión expirada",
	"authMonitor.incorrectPasswordMessage": "Contraseña incorrecta. Inténtalo de nuevo.",
	"authMonitor.logOutButtonLabel": "Cerrar sesión",
	"authMonitor.openSSOLoginButtonLabel": "Abrir formulario de inicio de sesión",
	"authMonitor.passwordTextFieldLabel": "Contraseña",
	"authMonitor.postSSOLoginMismatchMessage": "Parece que has iniciado sesión con un usuario diferente al propietario de esta sesión. Por razones de seguridad, su pantalla ahora se actualizará.",
	"authMonitor.sessionExpiredMessage": "Su sesión ha caducado. Por favor, vuelva a iniciar sesión.",
	"authMonitor.ssoOpenPopupMessage": "Asegúrese de que las ventanas emergentes no estén bloqueadas. Una vez que inicie sesión, regrese a esta ventana y haga clic en el botón \"Reanudar\" a continuación.",
	"authMonitor.usernameTextFieldLabel": "Nombre de usuario",
	"authMonitor.validateSessionButtonLabel": "Continuar",
	"blueprint.by": "Por",
	"blueprint.crafterCMS": "Crafter CMS",
	"blueprint.license": "Licencia",
	"blueprint.licenseTooltip": "{license} licencia",
	"blueprint.more": "Más...",
	"blueprint.noDev": "Ningún desarrollador especificado.",
	"blueprint.use": "Utilizar",
	"blueprint.version": "Versión",
	"browseCMIS.cloningCMIS": "Clonación de activos CMIS",
	"browseCMIS.cmis": "CMIS",
	"browseSearchMessages.lookUpChildError": "Unable to lookup child form callback for search: {searchId}",
	"browseSearchMessages.lookUpParentError": "Unable to lookup parent context for search: {searchId}",
	"bulkUpload.cancelAll": "Cancelar todos",
	"bulkUpload.dropHere": "Arrastre archivos aquí o <span>seleccione</span>",
	"bulkUpload.filesProgression": "{start}/{end}",
	"bulkUpload.subtitle": "Arrastre los archivos deseados desde su escritorio hasta el espacio a continuación.",
	"bulkUpload.title": "Subida de Archivos",
	"bulkUpload.uploadInProgress": "Aún hay archivos subiendo. Navegar cancelaría la carga de archivos pendientes. Está seguro que desea partir?",
	"bulkUploadConfirmDialogMessages.description": "Hay un dialogo de subida de archivos",
	"bulkUploadConfirmDialogMessages.title": "Subida en progreso",
	"changeContentTypeDialog.emptyStateMessage": "No Content Types Found",
	"changeContentTypeDialog.subtitle": "The following starter templates are available for use within this section.",
	"changeContentTypeDialog.title": "Choose Content Type",
	"checkboxGroupControl.datasource": "Fuente de datos",
	"checkboxGroupControl.horizontal": "Horizontal",
	"checkboxGroupControl.listDirection": "Dirección de lista",
	"checkboxGroupControl.readonly": "Solo lectura",
	"checkboxGroupControl.showSelectAll": "Mostrar \"Seleccionar todo\"",
	"checkboxGroupControl.vertical": "Vertical",
	"childContentDS.childContent": "Contenido secundario (en desuso)",
	"clusterAdmin.clusterDeleted": "{cluster} deleted.",
	"clusterGrid.authType": "Auth Type",
	"clusterGrid.confirmDeleteCluster": "Delete this cluster?",
	"clusterGrid.deleteCluster": "Delete cluster",
	"clusterGrid.emptyStateMessage": "No Clusters Found",
	"clusterGrid.localAddress": "Local Address",
	"clusterGrid.remoteName": "Remote Name",
	"clusterManagement.clusterDeleted": "Cluster deleted successfully",
	"codeEditor.confirm": "Confirmar Cerrar",
	"codeEditor.inProgressConfirmation": "Another editor is currently open & minimized. Please close the current editor before opening another",
	"codeEditor.insertCode": "Insert Code",
	"codeEditor.localesConfirmBody": "The template for the locale you selected does not exist. Do you want to create it now?",
	"codeEditor.localesConfirmTitle": "Create Template",
	"codeEditor.localesHelperText": "Select the locale for which to create/edit a template. Locales, like 'en' will cover sub-locales like 'en_us' or 'en_uk'.",
	"codeEditor.localesSnackBarTitle": "Template Created. Do you want to copy the base template?",
	"codeEditor.saveAndClose": "Save & Close",
	"codeEditor.saveAndMinimize": "Save & Minimize",
	"codeEditor.saved": "Save successful",
	"codeEditor.stay": "No, quedarse",
	"common.authentication": "Autenticación",
	"common.back": "atrás",
	"common.craftercms": "Crafter CMS",
	"common.developer": "Desarrollador",
	"common.license": "Licencia",
	"common.marketplace": "Mercado",
	"common.moreInfo": "Más información",
	"common.password": "Contraseña",
	"common.privateKey": "Llave privada",
	"common.remoteName": "Nombre remoto de Git",
	"common.searchEngine": "Buscador",
	"common.selectAll": "Seleccionar todo",
	"common.toggleSidebarTooltip": "Toggle sidebar",
	"common.token": "Simbólico",
	"common.use": "Utilizar",
	"common.userName": "Nombre de usuario",
	"common.usernameAndPassword": "Usuario Contraseña",
	"common.version": "Versión",
	"common.website": "sitio web",
	"compareVersionsDialog.back.selectRevision": "Back to select revision",
	"compareVersionsDialog.headerSubtitleCompare": "Select a revision to compare",
	"compareVersionsDialog.headerSubtitleCompareTo": "Select a revision to compare to “{selectedA}”",
	"compareVersionsDialog.headerTitle": "Compare item versions",
	"compareVersionsDialog.pleaseContentItem": "Please content item",
	"componentsPanel.emptyStateMessage": "No components found",
	"componentsPanel.emptyStateMessageSubtitle": "Communicate with your developers to create the required components in the system.",
	"componentsPanel.suspenseStateMessage": "Retrieving Page Model",
	"configurationSamplePreviewDialog.appendContent": "Append after current content",
	"configurationSamplePreviewDialog.replaceContent": "Replace current content",
	"configurationSamplePreviewDialog.title": "Sample File",
	"configurationSamplePreviewDialog.useSampleContent": "Use Sample Content",
	"contentLocalization.mark": "Mark for Translation",
	"contentLocalization.title": "Content Localization",
	"contentType.RTEConfiguration": "Configuración RTE",
	"contentType.autoGrow": "Agrandar automáticamente",
	"contentType.contenTypeWarningMessage": "Tenga en cuenta que la fuente de datos de contenido secundario se está eliminando gradualmente de Crafter CMS. Para los componentes que deben compartirse entre páginas o componentes, utilice Contenido compartido en su lugar. Para los componentes que pertenecen exclusivamente a este objeto de contenido, utilice Contenido incorporado.",
	"contentType.continueEditing": "Continua editando",
	"contentType.dependsOn": "This property depends on \"{dependency}\"",
	"contentType.enableSpellCheck": "Habilitar revisión ortográfica",
	"contentType.fileManager": "Administrador de archivos",
	"contentType.fileNameErrorMessage": "Los tipos de contenido requieren un nombre de archivo. Agregue un control \"Nombre de archivo\" o \"Nombre de archivo automático\" a esta definición de tipo de contenido.",
	"contentType.flatTitleError": "Complete todos los títulos de los campos y fuentes de datos.",
	"contentType.forceBRNewLines": "Forzar nuevas líneas",
	"contentType.forcePNewLines": "Forzar etiquetas p Nuevas líneas",
	"contentType.forceRootBlockP": "Forzar etiqueta \"p\"",
	"contentType.height": "Altura",
	"contentType.idError": "Por favor complete el nombre de la variable para:",
	"contentType.imageManager": "Administrador de imagen",
	"contentType.internalNameErrorMessage": "Este tipo de contenido requiere un nombre interno. Agregue un control \"Nombre interno\" a esta definición de tipo de contenido.",
	"contentType.noTemplateAssoc": "No hay una plantilla asociada con este tipo de contenido. Haga clic en Guardar para continuar con la operación de guardar o Continuar para actualizar el tipo de contenido (en Propiedades del tipo de contenido básico) con una plantilla.",
	"contentType.notice": "darse cuenta",
	"contentType.saveFailed": "Error al guardar",
	"contentType.supportedChannels": "Canales soportados",
	"contentType.useChildContent": "Utilice el control obsoleto de todos modos",
	"contentType.useEmbeddedContent": "Usar contenido incrustado",
	"contentType.useSharedContent": "Usar contenido compartido",
	"contentType.videoManager": "Gestor De Vídeo",
	"contentType.width": "anchura",
	"contextMenu.emptyOptionsMessage": "No options available to display.",
	"controlsCommonMessages.escapeContent": "Escape Content",
	"copyItems.cancel": "Cancel",
	"copyItems.copy": "Copy",
	"copyItems.deselectAll": "Deselect All",
	"copyItems.selectAll": "Select All",
	"copyTokenDialog.helperText": "Token created successfully. Please copy the token and store it securely as you won’t be able to see it’s value again.",
	"copyTokenDialog.title": "Access Token Created",
	"craftercms.codeEditor.loadingForm": "Loading...",
	"craftercms.codeEditor.title": "Code Editor",
	"craftercms.ice.audiences.loading": "Retrieving targeting options",
	"craftercms.ice.audiences.title": "Segmentación de audiencia",
	"craftercms.ice.browseComponents.chooseContentType": "Please choose a content type.",
	"craftercms.ice.browseComponents.loading": "Loading",
	"craftercms.ice.browseComponents.nextPage": "next page",
	"craftercms.ice.browseComponents.noResults": " No results found.",
	"craftercms.ice.browseComponents.previousPage": "previous page",
	"craftercms.ice.browseComponents.selectContentType": "Select content type",
	"craftercms.ice.browseComponents.title": "Browse components",
	"craftercms.pages.option.noLocales": "The site has no locales declared.",
	"craftercms.pages.option.terminateSelection": "Terminate Selection",
	"craftercms.pages.widget.itemsSelected": "{count, plural, one {{count} Item selected} other {{count} Items selected}}",
	"createFileDialog.controller": "New Controller",
	"createFileDialog.createPolicy": "The supplied name goes against site policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFileDialog.fileName": "File Name",
	"createFileDialog.fileNameRequired": "File name is required.",
	"createFileDialog.helperText": "Consisting of letters, numbers, dot (.), dash (-) and underscore (_).",
	"createFileDialog.openOnSuccess": "Open file",
	"createFileDialog.openOnSuccessTip": "Open for edit after creation",
	"createFileDialog.placeholder": "Please type a name",
	"createFileDialog.policyError": "The supplied name goes against site policies.",
	"createFileDialog.template": "New Template",
	"createFolder.createPolicy": "The supplied name goes against site policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFolder.placeholder": "Please type a folder name",
	"createFolder.policyError": "The supplied name goes against site policies.",
	"createSiteDialog.additionalOptions": "Opciones adicionales",
	"createSiteDialog.authentication": "Autenticación",
	"createSiteDialog.authenticationNoRequired": "No se requiere autenticación (URL pública)",
	"createSiteDialog.blueprintParameters": "Parámetros de planos",
	"createSiteDialog.blueprintStrategy": "Crear a partir de planos",
	"createSiteDialog.branch": "Rama Git",
	"createSiteDialog.cantStart": "Los nombres de los sitios pueden no comenzar con ceros, guiones (-) o guiones bajos (_).",
	"createSiteDialog.changeQuery": "Intente cambiar su consulta o explore el catálogo completo.",
	"createSiteDialog.chooseCreationStrategy": "Elija la estrategia de creación: comience desde un repositorio Git existente o cree en base a un plan que más le convenga.",
	"createSiteDialog.clone_remoteBranch_label": "El sitio se creará clonando esa rama del repositorio. Puede cambiar entre ramas más tarde también.",
	"createSiteDialog.clone_remoteName_label": "Nombre el control remoto que se referirá al repositorio de origen para extraer. Típicamente llamado \"upstream\" u \"origen\".",
	"createSiteDialog.clone_url_label": "La URL del repositorio de git para clonar.",
	"createSiteDialog.createAsOrphan": "Cree el sitio desde un repositorio remoto como huérfano (sin historial de git)",
	"createSiteDialog.createAsOrphanHelpText": "Crear el sitio como un huérfano lo disociará del repositorio git de origen y eliminará todo el historial.",
	"createSiteDialog.createInBackground": "Crear en segundo plano",
	"createSiteDialog.createSite": "Crear sitio",
	"createSiteDialog.creatingSite": "Creando sitio",
	"createSiteDialog.creationStrategy": "Estrategia de creación",
	"createSiteDialog.description": "Descripción",
	"createSiteDialog.descriptionMaxLength": "Longitud máxima: {maxLength} caracteres.",
	"createSiteDialog.dialogCloseMessage": "Los datos ingresados en el formulario se perderán al cerrar.",
	"createSiteDialog.dialogCloseTitle": "Confirmar Cerrar",
	"createSiteDialog.finish": "Terminar",
	"createSiteDialog.gitBlueprintDescription": "Cree un nuevo sitio basado en un proyecto Crafter CMS en un repositorio de git remoto existente.",
	"createSiteDialog.gitBlueprintName": "Repositorio Git Remoto",
	"createSiteDialog.gitStrategy": "Clon de repositorio git remoto existente",
	"createSiteDialog.idExist": "The ID already exists.",
	"createSiteDialog.nameAndDescription": "Nombra y describe tu sitio",
	"createSiteDialog.nameExist": "El nombre ya existe.",
	"createSiteDialog.noBlueprints": "No hay planos donde se encuentran",
	"createSiteDialog.noDescription": "No se ha proporcionado ninguna descripción.",
	"createSiteDialog.pleaseWait": "Espere mientras se crea su sitio.",
	"createSiteDialog.plugin": "Blueprint",
	"createSiteDialog.privateBlueprints": "Planos privados",
	"createSiteDialog.privateKey": "Llave privada",
	"createSiteDialog.publicMarketplace": "Mercado Público",
	"createSiteDialog.remoteBranch": "Rama Git",
	"createSiteDialog.remoteName": "Nombre remoto de Git",
	"createSiteDialog.remoteURL": "URL de repositorio de Git",
	"createSiteDialog.repoUrl": "URL de repositorio de Git",
	"createSiteDialog.required": " Se requiere{name} .",
	"createSiteDialog.review": "revisión",
	"createSiteDialog.reviewSite": "Revise el resumen de configuración y cree su sitio",
	"createSiteDialog.sandboxBranch": "Rama Sandbox",
	"createSiteDialog.showIncompatible": "Mostrar complementos incompatibles",
	"createSiteDialog.siteFormat": "Longitud máxima: 50 caracteres, que consta de: letras minúsculas, números y guión (-).",
	"createSiteDialog.siteId": "Identificación del sitio",
	"createSiteDialog.siteInfo": "Información del sitio",
	"createSiteDialog.siteName": "Site Name",
	"createSiteDialog.token": "Simbólico",
	"createSiteDialog.useDefaultValue": "usar valor predeterminado",
	"createSiteDialog.userNameAndPassword": "Usuario Contraseña",
	"createTokenDialog.expiresHelperNeverText": "Switch off to never expire.",
	"createTokenDialog.expiresHelperText": "Switch on to set an expiration.",
	"createTokenDialog.expiresLabel": "Expire Token",
	"createTokenDialog.helperText": "Type a name for the new token. The token will be created by the server and shown to you after. Store it securely as you won’t be able to see it’s value again.",
	"createTokenDialog.title": "Create Access Token",
	"createUserDialog.emailRequired": "Email is required.",
	"createUserDialog.firstName": "First Name",
	"createUserDialog.firstNameRequired": "First Name is required.",
	"createUserDialog.invalidEmail": "Email is invalid.",
	"createUserDialog.lastName": "Last Name",
	"createUserDialog.lastNameRequired": "Last Name is required.",
	"createUserDialog.passwordInvalid": "Password is invalid.",
	"createUserDialog.passwordMatch": "Must match the previous password.",
	"createUserDialog.passwordRequired": "Password is required.",
	"createUserDialog.passwordVerification": "Password Verification",
	"createUserDialog.usernameRequired": "Username is required.",
	"dashboardWidgetsMessages.publishingTarget": "Objetivo de publicación",
	"dateTime.ordinals": "{day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
	"datetimepicker.dateInvalidMessage": "Invalid Date.",
	"datetimepicker.datePlaceholder": "Date",
	"datetimepicker.timeInvalidMessage": "Invalid Time.",
	"datetimepicker.timePlaceholder": "Time",
	"deleteContentTypeDialog.contentTypeDeleteFailedMessage": "Error deleting content type",
	"deleteContentTypeDialog.contentTypeDeletedMessage": "Content type deleted successfully",
	"deleteContentTypeDialog.headerSubtitle": "Please confirm the deletion of \"{name}\"",
	"deleteContentTypeDialog.headerTitle": "Delete Content Type",
	"deleteContentTypeDialog.reviewDependenciesMessage": "Please review and confirm all of content type dependencies that will be deleted.",
	"deleteContentTypeDialog.submitButton": "Delete",
	"deleteContentTypeDialog.typeConfirmPassword": "Type the word \"<b>{password}</b>\" to confirm the deletion of \"{name}\" and all it's dependencies.",
	"deleteDialog.brokenItems": " Habrá referencias rotas",
	"deleteDialog.cancel": "Cancel",
	"deleteDialog.childItemsText": "Artículos infantiles",
	"deleteDialog.deleteItems": "Eliminar ítems",
	"deleteDialog.dependentItems": "Artículos dependientes",
	"deleteDialog.headerSubTitle": "Selected items will be deleted along with their child items. Please review dependent items before deleting as these will end-up with broken link references.",
	"deleteDialog.headerTitle": "Delete",
	"deleteDialog.maxCharacters": "Max {maxLength} characters",
	"deleteDialog.submissionCommentFieldError": "Por favor escriba el comentario de envío.",
	"deleteDialog.submissionCommentLabel": "Submission Comment",
	"deleteDialog.submit": "Delete",
	"deleteDialog.updatingDependents": "Updating dependents, please wait...",
	"deleteDialog.willGetDeleted": " Será eliminado",
	"dependenciesDialog.allDeps": "Show all dependencies",
	"dependenciesDialog.assets": "Assets only",
	"dependenciesDialog.code": "Code only",
	"dependenciesDialog.contentItems": "Content items only",
	"dependenciesDialog.dependencies": "Dependencies",
	"dependenciesDialog.dependsOn": "Items that depend on selected item",
	"dependenciesDialog.dependsOnMe": "Dependencies of selected item",
	"dependenciesDialog.edit": "Edit",
	"dependenciesDialog.emptyDependantsMessage": "{itemName} has no dependencies",
	"dependenciesDialog.emptyDependenciesMessage": "Nothing depends on {itemName}",
	"dependenciesDialog.headerTitle": "Content Item Dependencies",
	"dependenciesDialog.history": "History",
	"dragAndDropMessages.componentNotWelcomeWithinDropZone": "La zona de colocación no admite este tipo de componente. Verifica tu modelo de contenido.",
	"dragAndDropMessages.contentTypeNotFound": "La identificación del tipo de contenido no se encontró en su plantilla. Arrastrar y soltar se verá afectado. Más información en docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.embeddedComponentsDeleteChildNotSupported": "Aún no se admite la eliminación de componentes de un componente de zona de colocación incrustado. Utilice los formularios para editar contenido.",
	"dragAndDropMessages.embeddedComponentsDndNotSupported": "Arrastrar y soltar en los componentes integrados aún no es compatible. Utilice los formularios para editar contenido.",
	"dragAndDropMessages.embeddedComponentsDragWithinParentOnly": "En esta versión, los componentes integrados solo se pueden arrastrar dentro de su padre actual. Utilice los formularios para editar contenido.",
	"dragAndDropMessages.moveOutEmbeddedComponentsNotSupported": "Mover componentes fuera de un componente de zona de colocación incrustado aún no es compatible. Utilice los formularios para editar contenido.",
	"dragAndDropMessages.objectIdNotFound": "Falta la identificación del objeto. Arrastrar y soltar se verá afectado. Más información en docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.pathNotFound": "Falta la ruta. Arrastrar y soltar se verá afectado. Más información en docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dropTargetsMessages.allowEmbedded": "Allow Embedded",
	"dropTargetsMessages.allowShared": "Allow Shared",
	"dropTargetsMessages.baseBrowsePath": "Base Browse Path",
	"dropTargetsMessages.baseRepositoryPath": "Base Repository Path",
	"dropTargetsMessages.browseExisting": "Browse existing",
	"dropTargetsMessages.contentTypes": "Content Types",
	"dropTargetsMessages.createNewEmbedded": "Create new embedded",
	"dropTargetsMessages.createNewShared": "Create new shared",
	"dropTargetsMessages.dropTargets": "Drop Targets",
	"dropTargetsMessages.enableBrowse": "Enable Browse",
	"dropTargetsMessages.enableSearch": "Enable Search",
	"dropTargetsMessages.searchExisting": "Search existing components",
	"dropTargetsMessages.tags": "Tags",
	"editGroupDialog.close": "Close",
	"editGroupDialog.deleteGroup": "Delete group",
	"editGroupDialog.editGroupMembers": "Edit Group Members",
	"editGroupDialog.groupDetails": "Group Details",
	"editGroupDialog.groupMemberHelperText": "Group members are editable after creation",
	"editGroupDialog.helperText": "Delete \"{name}\" group?",
	"editSiteDialog.cancel": "Cancel",
	"editSiteDialog.notEditable": "The site id is not editable",
	"editSiteDialog.siteDescription": "Site Description",
	"editSiteDialog.siteId": "Site ID",
	"editSiteDialog.siteName": "Site Name",
	"editSiteDialog.siteNameRequired": "Site Name is required.",
	"editSiteDialog.sitenameExists": "The name already exist.",
	"editSiteDialog.title": "Edit Site",
	"embeddedContentDS.embeddedContent": "Contenido incrustado",
	"embeddedLegacyFormMessages.openContentFormFailedError": "An error occurred opening the content form. Please try again momentarily. Contact the administrator if the error persists.",
	"emptyUiConfigMessageTitle.subtitle": "Nothing is set to be shown here.",
	"emptyUiConfigMessageTitle.title": "Configuration is empty",
	"encryptTool.buttonText": "Cifrar texto",
	"encryptTool.clearResultButtonText": "Limpiar",
	"encryptTool.errorMessage": "El cifrado de texto falló. Por favor intente nuevamente momentáneamente.",
	"encryptTool.inputLabel": "Texto sin procesar",
	"encryptTool.pageTitle": "Herramienta de cifrado",
	"encryptTool.successMessage": "Texto cifrado copiado al portapapeles.",
	"fileNameControl.urlChangeWarning": "Cambiar este valor puede provocar referencias y enlaces rotos.",
	"fileNameControl.viewReferences": "Para ver el contenido que hace referencia a este contenido, haga clic en",
	"fileUpload.chooseFile": "Elija el archivo",
	"fileUpload.createPolicy": "The upload file name goes against site policies. Suggested modified file name is: \"{name}\". Would you like to use the suggested name?",
	"fileUpload.policyError": "The upload file name goes against site policies.",
	"fileUpload.selectFileMessage": "Por favor seleccione un archivo para cargar",
	"fileUpload.uploadedFile": "Archivo subido",
	"fileUpload.uploadingFile": "Subiendo archivo",
	"fileUpload.validatingFile": "Validating File",
	"filter.more": "{count, plural, one {...{count} more item} other {...{count} more items}}",
	"filter.noResults": "No results match your query",
	"folder.created": "Folder created successfully",
	"folderBrowserTreeView.invalidPath": "The entered path doesn’t exist.",
	"formEngine.createPolicy": "The {originalPath} path goes against site policies. Suggested modified path is: \"{path}\". Would you like to use the suggested path?",
	"formEngine.inProgressConfirmation": "Another form is currently open & minimized. Please close the current form before opening another",
	"formEngine.policyError": "The {path} path goes against site policies.",
	"formEngine.save": "Save as Draft",
	"formEngine.saveAndClose": "Save & Close",
	"formEngine.saveAndMinimize": "Save & Minimize",
	"formEngine.saveAndPreview": "Save & Preview",
	"formEngine.saveDraftCompleted": "Borrador de guardado completado",
	"global.about": "About",
	"globalAppToolbar.toggleSidebar": "Toggle Sidebar",
	"globalConfig.configSaved": "Configuration saved successfully.",
	"globalConfig.confirmHelper": "Discard unsaved changes?",
	"globalConfig.documentError": "El documento contiene errores. Busque marcadores de error en el lateral del editor.",
	"globalConfig.unsavedConfirmation": "Tienes cambios sin guardar, ¿quieres irte?",
	"globalConfig.unsavedConfirmationTitle": "Cambios sin guardar",
	"globalConfig.viewSample": "Ver muestra",
	"globalDialogManager.loadingDialogs": "Loading dialogs...",
	"globalMenu.closeMenu": "Close menu",
	"globalMenu.docs": "Documentation",
	"globalMenu.encryptionTool": "Herramienta de cifrado",
	"globalMenu.globalConfigEntryLabel": "Configuración Global",
	"globalMenu.logConsoleEntryLabel": "Consola de registro",
	"globalMenu.loggingLevelsEntryLabel": "Niveles de registro",
	"globalMenu.mySites": "My Sites",
	"globalMenu.noSitesMessage": "No sites to display.",
	"globalMenu.pluginManagementEntryLabel": "Plugin Management",
	"globalMenu.preview1": "Preview 1.0",
	"globalMenu.preview2": "Preview 2.0",
	"globalMenu.recover": "Recuperación de contraseña",
	"globalMenu.removeSite": "Remove site",
	"globalMenu.removeSiteConfirm": "Do you want to remove {site}?",
	"globalMenu.settings": "Administración de cuentas",
	"globalMenu.siteConfig": "Site Config",
	"globalMenu.tokenManagement": "Token Management",
	"groupEditDialog.createGroup": "Create Group",
	"groupEditDialog.editGroup": "Edit Group",
	"groupEditDialog.groupCreated": "Group created successfully",
	"groupEditDialog.groupDeleted": "Group deleted successfully",
	"groupEditDialog.groupEdited": "Group edited successfully",
	"groupEditDialog.membersAdded": "{count, plural, one {User added successfully} other {Users added successfully}}",
	"groupEditDialog.membersRemoved": "{count, plural, one {User removed successfully} other {Users removed successfully}}",
	"groupsAdmin.displayName": "Nombre para mostrar",
	"groupsAdmin.groupCreated": "{group} created.",
	"groupsAdmin.groupDeleted": "{group} deleted.",
	"groupsAdmin.groupEdited": "{group} edited.",
	"groupsAdmin.maxLengthError": "{field} no puede tener más de {size} caracteres",
	"groupsAdmin.usereRemoved": "{username} successfully removed from {group}",
	"groupsAdmin.usersAdded": "User(s) successfully added.",
	"groupsGrid.emptyStateMessage": "No Groups Found",
	guestDetectionMessage: guestDetectionMessage$1,
	"historyDialog.back.selectRevision": "Back to history list",
	"historyDialog.confirmRevertBody": "Are you sure you want to revert to {versionTitle}?",
	"historyDialog.confirmRevertTitle": "Revert confirmation",
	"historyDialog.current": "current",
	"historyDialog.headerTitle": "Item History",
	"historyDialog.options.compareTo": "Compare to...",
	"historyDialog.options.compareToCurrent": "Compare to current",
	"historyDialog.options.compareToPrevious": "Compare to previous",
	"historyDialog.options.revertToPrevious": "Revert to <b>previous</b>",
	"historyDialog.options.revertToThisVersion": "Revert to <b>this version</b>",
	"inPageInstances.noResults": "No results found.",
	"inPageInstances.title": "In this Page",
	"internalNameControl.displaySize": "Tamaño de la pantalla",
	"internalNameControl.label": "Nombre interno",
	"internalNameControl.maxLength": "Longitud máxima",
	"item.contentTypeChanged": "Item type changed successfully",
	"item.copied": "{count, plural, one {Item copied to clipboard} other {Items copied to clipboard}}",
	"item.created": "Item created successfully",
	"item.cut": "Item cut successfully",
	"item.delete": "{count, plural, one {The selected item is being deleted and will be removed shortly} other {The selected items are being deleted and will be removed shortly}}",
	"item.duplicated": "Item duplicated successfully",
	"item.edited": "Item updated successfully",
	"item.itemPasteToChildNotAllowed": "Pasting to a child item is not allowed for cut",
	"item.pasted": "Item pasted successfully",
	"item.pasting": "Pasting...",
	"item.publishedNow": "{count, plural, one {The selected item has been pushed to {environment}. It will be visible shortly} other {The selected items has been pushed to {environment}. Them will be visible shortly}}",
	"item.rejected": "{count, plural, one {Item rejected successfully} other {Items rejected successfully}}",
	"item.requestedToPublishNow": "{count, plural, one {The selected item has been requested to be pushed to {environment}} other {The selected items has been requested to be pushed to {environment}}}",
	"item.requestedToSchedulePublish": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.reverted": "Item reverted successfully",
	"item.savedAsDraft": "Item draft saved",
	"item.schedulePublished": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.unlocked": "Item unlocked successfully",
	"itemActions.changeContentType": "Change Type",
	"itemActions.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemActions.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemActions.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemActions.copyDialogTitle": "Copy",
	"itemActions.createController": "New Controller",
	"itemActions.createFolder": "New Folder",
	"itemActions.createTemplate": "New Template",
	"itemActions.deleteController": "Delete Controller",
	"itemActions.deleteTemplate": "Delete Template",
	"itemActions.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemActions.editController": "Edit Controller",
	"itemActions.editTemplate": "Edit Template",
	"itemActions.newContent": "New Content",
	"itemActions.requestPublish": "Request Publish",
	"itemActions.viewForm": "View Form",
	"itemMegaMenu.editedBy": "{edited} {date} {byLabel} {by}",
	"itemMenu.changeContentType": "Change Type",
	"itemMenu.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemMenu.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemMenu.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemMenu.copyDialogTitle": "Copy",
	"itemMenu.createContent": "Create Content",
	"itemMenu.createController": "Create Controller",
	"itemMenu.createFolder": "Create Folder",
	"itemMenu.createTemplate": "Create Template",
	"itemMenu.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemMenu.editController": "Edit Controller",
	"itemMenu.editTemplate": "Edit Template",
	"itemMenu.noPermissions": "No actions available for this item.",
	"itemMenu.renameFolder": "Rename Folder",
	"itemPublishingTarget.live": "Live",
	"itemPublishingTarget.staged": "Staged",
	"itemPublishingTarget.unpublished": "Unpublished",
	"itemState.deleted": "Deleted",
	"itemState.locked": "Locked",
	"itemState.modified": "Modified",
	"itemState.new": "New",
	"itemState.scheduled": "Scheduled",
	"itemState.submitted": "Submitted",
	"itemState.systemProcessing": "System Processing",
	"languages.Maldivian": "Divehi",
	"languages.aa": "Afar",
	"languages.ab": "Abkhazian",
	"languages.ae": "Avestan",
	"languages.af": "Afrikaans",
	"languages.ak": "Akan",
	"languages.am": "Amharic",
	"languages.an": "Aragonese",
	"languages.ar": "Arabic",
	"languages.ar_ae": "Arabic - United Arab Emirates",
	"languages.ar_bh": "Arabic - Bahrain",
	"languages.ar_dz": "Arabic - Algeria",
	"languages.ar_eg": "Arabic - Egypt",
	"languages.ar_iq": "Arabic - Iraq",
	"languages.ar_jo": "Arabic - Jordan",
	"languages.ar_kw": "Arabic - Kuwait",
	"languages.ar_lb": "Arabic - Lebanon",
	"languages.ar_ly": "Arabic - Libya",
	"languages.ar_ma": "Arabic - Morocco",
	"languages.ar_om": "Arabic - Oman",
	"languages.ar_qa": "Arabic - Qatar",
	"languages.ar_sa": "Arabic - Saudi Arabia",
	"languages.ar_sy": "Arabic - Syria",
	"languages.ar_tn": "Arabic - Tunisia",
	"languages.ar_ye": "Arabic - Yemen",
	"languages.as": "Assamese",
	"languages.av": "Avaric",
	"languages.ay": "Aymara",
	"languages.az": "Azerbaijani",
	"languages.az_az": "Azeri - Cyrillic",
	"languages.ba": "Bashkir",
	"languages.be": "Belarusian",
	"languages.bg": "Bulgarian",
	"languages.bh": "Bihari languages",
	"languages.bi": "Bislama",
	"languages.bm": "Bambara",
	"languages.bn": "Bengali - Bangladesh",
	"languages.bo": "Tibetan",
	"languages.br": "Breton",
	"languages.bs": "Bosnian",
	"languages.ca": "Catalan",
	"languages.ce": "Chechen",
	"languages.ch": "Chamorro",
	"languages.co": "Corsican",
	"languages.cr": "Cree",
	"languages.cs": "Czech",
	"languages.cu": "Church Slavic; Slavonic; Old Bulgarian",
	"languages.cv": "Chuvash",
	"languages.cy": "Welsh",
	"languages.da": "Danish",
	"languages.de": "German",
	"languages.de_at": "German - Austria",
	"languages.de_ch": "German - Switzerland",
	"languages.de_de": "German - Germany",
	"languages.de_li": "German - Liechtenstein",
	"languages.de_lu": "German - Luxembourg",
	"languages.dv": "Divehi; Dhivehi; Maldivian",
	"languages.dz": "Dzongkha",
	"languages.ee": "Ewe",
	"languages.el": "Greek",
	"languages.en": "English",
	"languages.en_au": "English - Australia",
	"languages.en_bz": "English - Belize",
	"languages.en_ca": "English - Canada",
	"languages.en_cb": "English - Caribbean",
	"languages.en_gb": "English - Great Britain",
	"languages.en_ie": "English - Ireland",
	"languages.en_in": "English - India",
	"languages.en_jm": "English - Jamaica",
	"languages.en_nz": "English - New Zealand",
	"languages.en_ph": "English - Philippines",
	"languages.en_tt": "English - Trinidad",
	"languages.en_us": "English - United States",
	"languages.en_za": "English - Southern Africa",
	"languages.eo": "Esperanto",
	"languages.es": "Spanish; Castilian",
	"languages.es_ar": "Spanish - Argentina",
	"languages.es_bo": "Spanish - Bolivia",
	"languages.es_cl": "Spanish - Chile",
	"languages.es_co": "Spanish - Colombia",
	"languages.es_cr": "Spanish - Costa Rica",
	"languages.es_do": "Spanish - Dominican Republic",
	"languages.es_ec": "Spanish - Ecuador",
	"languages.es_es": "Spanish - Spain (Traditional)",
	"languages.es_gt": "Spanish - Guatemala",
	"languages.es_hn": "Spanish - Honduras",
	"languages.es_mx": "Spanish - Mexico",
	"languages.es_ni": "Spanish - Nicaragua",
	"languages.es_pa": "Spanish - Panama",
	"languages.es_pe": "Spanish - Peru",
	"languages.es_pr": "Spanish - Puerto Rico",
	"languages.es_py": "Spanish - Paraguay",
	"languages.es_sv": "Spanish - El Salvador",
	"languages.es_uy": "Spanish - Uruguay",
	"languages.es_ve": "Spanish - Venezuela",
	"languages.et": "Estonian",
	"languages.eu": "Basque",
	"languages.fa": "Farsi - Persian",
	"languages.ff": "Fulah",
	"languages.fi": "Finnish",
	"languages.fj": "Fijian",
	"languages.fo": "Faroese",
	"languages.fr": "French",
	"languages.fr_be": "French - Belgium",
	"languages.fr_ca": "French - Canada",
	"languages.fr_ch": "French - Switzerland",
	"languages.fr_fr": "French - France",
	"languages.fr_lu": "French - Luxembourg",
	"languages.fy": "Western Frisian",
	"languages.ga": "Irish",
	"languages.gd": "Gaelic - Scotland",
	"languages.gd_ie": "Gaelic - Ireland",
	"languages.gl": "Galician",
	"languages.gn": "Guarani - Paraguay",
	"languages.gu": "Gujarati",
	"languages.gv": "Manx",
	"languages.ha": "Hausa",
	"languages.he": "Hebrew",
	"languages.hi": "Hindi",
	"languages.ho": "Hiri Motu",
	"languages.hr": "Croatian",
	"languages.ht": "Haitian; Haitian Creole",
	"languages.hu": "Hungarian",
	"languages.hy": "Armenian",
	"languages.hz": "Herero",
	"languages.ia": "Interlingua",
	"languages.id": "Indonesian",
	"languages.ie": "Interlingue; Occidental",
	"languages.ig": "Igbo",
	"languages.ii": "Sichuan Yi; Nuosu",
	"languages.ik": "Inupiaq",
	"languages.io": "Ido",
	"languages.is": "Icelandic",
	"languages.it": "Italian",
	"languages.it_ch": "Italian - Switzerland",
	"languages.it_it": "Italian - Italy",
	"languages.iu": "Inuktitut",
	"languages.ja": "Japanese",
	"languages.jv": "Javanese",
	"languages.ka": "Georgian",
	"languages.kg": "Kongo",
	"languages.ki": "Kikuyu; Gikuyu",
	"languages.kj": "Kuanyama; Kwanyama",
	"languages.kk": "Kazakh",
	"languages.kl": "Kalaallisut; Greenlandic",
	"languages.km": "Khmer",
	"languages.kn": "Kannada",
	"languages.ko": "Korean",
	"languages.kr": "Kanuri",
	"languages.ks": "Kashmiri",
	"languages.ku": "Kurdish",
	"languages.kv": "Komi",
	"languages.kw": "Cornish",
	"languages.ky": "Kirghiz; Kyrgyz",
	"languages.la": "Latin",
	"languages.lb": "Luxembourgish; Letzeburgesch",
	"languages.lg": "Ganda",
	"languages.li": "Limburgan; Limburger; Limburgish",
	"languages.ln": "Lingala",
	"languages.lo": "Lao",
	"languages.lt": "Lithuanian",
	"languages.lu": "Luba-Katanga",
	"languages.lv": "Latvian",
	"languages.mg": "Malagasy",
	"languages.mh": "Marshallese",
	"languages.mi": "Maori",
	"languages.mk": "FYRO Macedonia",
	"languages.ml": "Malayalam",
	"languages.mn": "Mongolian",
	"languages.mr": "Marathi",
	"languages.ms": "Malay",
	"languages.ms_bn": "Malay - Brunei",
	"languages.ms_my": "Malay - Malaysia",
	"languages.mt": "Maltese",
	"languages.my": "Burmese",
	"languages.na": "Nauru",
	"languages.nb": "Bokmål, Norwegian; Norwegian Bokmål",
	"languages.nd": "Ndebele, North; North Ndebele",
	"languages.ne": "Nepali",
	"languages.ng": "Ndonga",
	"languages.nl": "Dutch; Flemish",
	"languages.nl_be": "Dutch - Belgium",
	"languages.nl_nl": "Dutch - Netherlands",
	"languages.nn": "Norwegian Nynorsk; Nynorsk, Norwegian",
	"languages.no": "Norwegian",
	"languages.no_no": "Norwegian - Bokml",
	"languages.nr": "Ndebele, South; South Ndebele",
	"languages.nv": "Navajo; Navaho",
	"languages.ny": "Chichewa; Chewa; Nyanja",
	"languages.oc": "Occitan (post 1500)",
	"languages.oj": "Ojibwa",
	"languages.om": "Oromo",
	"languages.or": "Oriya",
	"languages.os": "Ossetian; Ossetic",
	"languages.pa": "Punjabi",
	"languages.pi": "Pali",
	"languages.pl": "Polish",
	"languages.ps": "Pushto; Pashto",
	"languages.pt": "Portuguese",
	"languages.pt_br": "Portuguese - Brazil",
	"languages.pt_pt": "Portuguese - Portugal",
	"languages.qu": "Quechua",
	"languages.rm": "Raeto-Romance",
	"languages.rn": "Rundi",
	"languages.ro": "Romanian - Romania",
	"languages.ro_mo": "Romanian - Moldova",
	"languages.ru": "Russian",
	"languages.ru_mo": "Russian - Moldova",
	"languages.rw": "Kinyarwanda",
	"languages.sa": "Sanskrit",
	"languages.sb": "Sorbian",
	"languages.sc": "Sardinian",
	"languages.sd": "Sindhi",
	"languages.se": "Northern Sami",
	"languages.sg": "Sango",
	"languages.si": "Sinhala",
	"languages.sk": "Slovak",
	"languages.sl": "Slovenian",
	"languages.sm": "Samoan",
	"languages.sn": "Shona",
	"languages.so": "Somali",
	"languages.sq": "Albanian",
	"languages.sr": "Serbian",
	"languages.sr_sp": "Serbian - Cyrillic",
	"languages.ss": "Swati",
	"languages.st": "Sotho, Southern",
	"languages.su": "Sundanese",
	"languages.sv": "Swedish",
	"languages.sv_fi": "Swedish - Finland",
	"languages.sv_se": "Swedish - Sweden",
	"languages.sw": "Swahili",
	"languages.ta": "Tamil",
	"languages.te": "Telugu",
	"languages.tg": "Tajik",
	"languages.th": "Thai",
	"languages.ti": "Tigrinya",
	"languages.tk": "Turkmen",
	"languages.tl": "Tagalog",
	"languages.tn": "Setsuana",
	"languages.to": "Tonga (Tonga Islands)",
	"languages.tr": "Turkish",
	"languages.ts": "Tsonga",
	"languages.tt": "Tatar",
	"languages.tw": "Twi",
	"languages.ty": "Tahitian",
	"languages.ug": "Uighur; Uyghur",
	"languages.uk": "Ukrainian",
	"languages.ur": "Urdu",
	"languages.uz": "Uzbek",
	"languages.uz_uz": "Uzbek - Cyrillic",
	"languages.ve": "Venda",
	"languages.vi": "Vietnamese",
	"languages.vo": "Volapük",
	"languages.wa": "Walloon",
	"languages.wo": "Wolof",
	"languages.xh": "Xhosa",
	"languages.yi": "Yiddish",
	"languages.yo": "Yoruba",
	"languages.za": "Zhuang; Chuang",
	"languages.zh": "Chinese",
	"languages.zh_cn": "Chinese - China",
	"languages.zh_hk": "Chinese - Hong Kong SAR",
	"languages.zh_mo": "Chinese - Macau SAR",
	"languages.zh_sg": "Chinese - Singapore",
	"languages.zh_tw": "Chinese - Taiwan",
	"languages.zu": "Zulu",
	"launcher.siteSectionTitle": "Site <muted>• {siteName}</muted>",
	"launcherOpenerButton.menuTooltip": "Navigation Menu",
	"launcherOpenerButton.openMenuButtonText": "Open Menu",
	"launcherOpenerButton.signOut": "Sign Out",
	"legacyFormDialog.errorLoadingForm": "An error occurred trying to load the form",
	"legacyFormDialog.loadingForm": "Loading...",
	"legacyFormDialog.title": "Content Form",
	"localeSelectorControl.label": "Locale Selector",
	"localeSelectorControl.requiredError": "Field is Required",
	"logConsoleDetailsDialog.title": "Log Details",
	"logConsoleManagement.noLogs": "No logs found",
	"loggingLevels.changeLevelTo": "Current Level",
	"loggingLevels.currentLevel": "Current Level",
	"loggingLevelsManagement.levelChangedSuccessMessage": "Logging level changed successfully",
	"loginView.dialogTitleText": "Inicie sesión en Crafter CMS",
	"loginView.forgotPasswordButtonLabel": "¿Olvidaste tu contraseña?",
	"loginView.incorrectCredentialsMessage": "Nombre de usuario o contraseña incorrecta. Inténtalo de nuevo.",
	"loginView.loginButtonLabel": "Iniciar sesión",
	"loginView.recoverYourPasswordBackButtonLabel": "atrás",
	"loginView.recoverYourPasswordIntroText": "Si su correo usuario existe, se le enviará un correo electrónico con un enlace de para restaurar su contraseña.",
	"loginView.recoverYourPasswordSuccessMessage": "Si \"{username}\" existe, un email de recuperación ha sido enviado",
	"loginView.resetYourPasswordIntroText": "Por favor ingrese su nueva contraseña",
	"loginView.usernameTextFieldLabel": "Nombre de usuario",
	"media.card.itemLastEdition": "Edited {time}",
	"media.card.title": "options",
	"navigator.noChildren": "Item has no children",
	"newContentDialog.contentTypeAllLabel": "Show all types",
	"newContentDialog.contentTypeComponentLabel": "Components only",
	"newContentDialog.contentTypePageLabel": "Pages only",
	"newContentDialog.emptyStateMessage": "No Content Types Found",
	"newContentDialog.subtitle": "Choose a content type template for your new content item.",
	"newContentDialog.title": "Create Content",
	"newFolder.folderName": "Folder Name",
	"newFolder.helperText": "Consisting of: letters, numbers, dash (-) and underscore (_).",
	"newFolder.rename": "Provide a new folder name",
	"newFolder.required": "Folder name is required.",
	"newFolder.title": "Create a New Folder",
	"newFolder.title.rename": "Rename Folder",
	"noUiConfigMessageTitle.subtitle": "Add & configure `ui.xml` on your site to show content here.",
	"noUiConfigMessageTitle.title": "Configuration file missing",
	"numericInputControl.childContent": "Mínimo",
	"numericInputControl.maximun": "Máximo",
	"numericInputControl.noDecimalsErrMessage": "Decimales no permitidos en esta entrada.",
	"openToolsPanel.label": "Open tools panel",
	"operations.Add_members": "Add Members",
	"operations.Add_remote": "Add Remote",
	"operations.Approve": "Approve",
	"operations.Approve_scheduled": "Approve Scheduled",
	"operations.Cancel_publishing_package": "Cancel Publishing Package",
	"operations.Create": "Create",
	"operations.Delete": "Delete",
	"operations.Disable": "Disable",
	"operations.Enable": "Enable",
	"operations.Login": "Login",
	"operations.Login_failed": "Login Failed",
	"operations.Logout": "Logout",
	"operations.Move": "Move",
	"operations.Published": "Published",
	"operations.Pull_from_remote": "Pull From Remote",
	"operations.Push_to_remote": "Push To Remote",
	"operations.Reject": "Reject",
	"operations.Remove_cluster_node": "Remove Cluster Dode",
	"operations.Remove_members": "Remove Members",
	"operations.Remove_remote": "Remove Remote",
	"operations.Request_publish": "Request Publish",
	"operations.Revert": "Revert",
	"operations.Start_publisher": "Start Publisher",
	"operations.Stop_publisher": "Stop Publisher",
	"operations.Update": "Update",
	"operations.assetUploadFailed": "Asset Upload failed.",
	"operations.assetUploadStarted": "Asset upload started.",
	"operations.deleteOperationComplete": "Delete operation completed.",
	"operations.deleteOperationFailed": "Delete operation failed.",
	"operations.insertItemOperation": "Insert item operation not implemented.",
	"operations.insertOperationComplete": "Insert component operation completed.",
	"operations.insertOperationFailed": "Insert component operation failed.",
	"operations.moveOperationComplete": "Move operation completed",
	"operations.moveOperationFailed": "Move operation failed.",
	"operations.sortOperationComplete": "Sort operation completed.",
	"operations.sortOperationFailed": "Sort operation failed.",
	"operations.updateOperationComplete": "Update operation completed.",
	"operations.updateOperationFailed": "Update operation failed.",
	"pageBuilder.title": "Page Building",
	"pageExplorerPanel.currentContentItems": "Current Content Items",
	"pageExplorerPanel.loading": "Loading",
	"pageExplorerPanel.rootItemLabel": "Current Content Items",
	"pageExplorerPanel.title": "Page Explorer",
	"pagination.PreviousPage": "Previous page",
	"pagination.nextPage": "Next page",
	"pagination.previousPage": "Previous page",
	"passwordRequirement.fulfillAllReqErrorMessage": "Por favor, cumpla con todos los requisitos de contraseña.",
	"passwordRequirement.hasLowercase": "Debe contener al menos una letra minúscula",
	"passwordRequirement.hasNumbers": "Debe contener al menos un número",
	"passwordRequirement.hasSpecialChars": "Debe contener al menos un carácter especial {chars}",
	"passwordRequirement.hasUppercase": "Debe contener al menos una letra mayúscula",
	"passwordRequirement.invalidPassword": "No se cumplen los requisitos.",
	"passwordRequirement.maxLength": "La longitud no debe exceder {max} caracteres",
	"passwordRequirement.minLength": "La longitud debe tener al menos {min} caracteres",
	"passwordRequirement.minMaxLength": "La longitud debe estar entre {minLength} y {maxLength} caracteres",
	"passwordRequirement.noBlank": "No debe estar en blanco",
	"passwordRequirement.noSpaces": "No debe contener espacios en blanco",
	"passwordRequirement.passwordConfirmationMismatch": "Las contraseñas no coinciden",
	"passwordRequirement.passwordValidation": "Validación de contraseña",
	"passwordRequirement.unnamedGroup": "Condición no descrita",
	"passwordRequirement.validPassword": "Requisitos cumplidos",
	"passwordRequirement.validationPassing": "Validación aprobada",
	"passwordTextField.toggleVisibilityButtonText": "alternar la visibilidad de la contraseña",
	"pastePolicy.confirm": "The selected {action} target goes against site policies for the destination directory. • Original path: \"{path}\", • Suggested path is: \"{modifiedPath}\". Would you like to use the suggested path?",
	"pastePolicy.error": "The selected {action} target goes against site policies for the destination directory.",
	"pathNavigator.noChildren": "Item has no children",
	"pathNavigator.noItemsAtLocation": "No items at this location",
	"pathNavigator.pathFilterInputPlaceholder": "Filter children of {name}...",
	"pathNavigator.viewChildren": "View children",
	"pathNavigatorTreeItemFilter.placeholder": "Filter children...",
	"pathSelectionDialog.createFolderButtonLabel": "Create Folder",
	"pathSelectionDialog.title": "Select Path",
	"plugin.by": "By",
	"plugin.crafterCMS": "Crafter CMS",
	"plugin.license": "License",
	"plugin.licenseTooltip": "{license} license",
	"plugin.more": "More...",
	"plugin.noDev": "No developer specified.",
	"plugin.use": "Use",
	"plugin.version": "Version",
	"pluginDetails.notCompatible": "Este plano no es compatible con su versión actual de Crafter CMS.",
	"pluginManagement.emptyList": "There are no plugins installed",
	"pluginManagement.installationDate": "Installation Date",
	"pluginManagement.listPluginPermission": "You don't have enough permissions to see the list of plugins",
	"pluginManagement.searchPlugin": "Search & install",
	"preview.previewIFrameTitle": "Marco de vista previa",
	"previewAddressBar.reloadButtonLabel": "Reload this page",
	"previewAssetsPanel.itemsPerPage": "Items per page:",
	"previewAssetsPanel.noResults": " No results found.",
	"previewAssetsPanel.retrieveAssets": "Retrieving Site Assets",
	"previewAssetsPanel.title": "Assets",
	"previewAudiencesPanel.loading": "Retrieving targeting options",
	"previewAudiencesPanel.title": "Audience Targeting",
	"previewBrowseComponentsPanel.chooseContentType": "Please choose a content type.",
	"previewBrowseComponentsPanel.nextPage": "next page",
	"previewBrowseComponentsPanel.noResults": " No results found.",
	"previewBrowseComponentsPanel.previousPage": "previous page",
	"previewBrowseComponentsPanel.selectContentType": "Select content type",
	"previewBrowseComponentsPanel.title": "Browse Components",
	"previewCompatDialog.legacyCompatMessage": "This page is compatible with the previous editing experience. Would you like to go there now?",
	"previewCompatDialog.nextCompatMessage": "This page is compatible with the new editing experience. Would you like to go there now?",
	"previewCompatDialog.rememberChoice": "Remember choice",
	"previewCompatDialog.title": "Preview Compatibility Notice",
	"previewComponentsPanel.browse": "Browse existing",
	"previewComponentsPanel.listDropTargets": "List drop targets",
	"previewComponentsPanel.listInPageInstances": "List in-page instances",
	"previewComponentsPanel.listReceptacles": "List receptacles",
	"previewComponentsPanel.title": "Components",
	"previewContentTypeReceptaclesTool.selectContentType": "Select content type",
	"previewContentTypeReceptaclesTool.title": "{name} Receptacles",
	"previewDropTargetsPanel.chooseContentType": "Please choose a content type.",
	"previewDropTargetsPanel.noResults": "No results found.",
	"previewDropTargetsPanel.selectContentType": "Select content type",
	"previewDropTargetsPanel.title": "Component Drop Targets",
	"previewEditFormTool.editController": "Edit Controller",
	"previewEditFormTool.editTemplate": "Edit Template",
	"previewEditFormTool.openComponentForm": "Edit",
	"previewInPageInstancesPanel.chooseContentType": "Please choose a content type.",
	"previewInPageInstancesPanel.noResults": "No results found.",
	"previewInPageInstancesPanel.selectContentType": "Select content type",
	"previewInPageInstancesPanel.title": "In this Page",
	"previewPageExplorerPanel.loading": "Loading",
	"previewPageExplorerPanel.rootItemLabel": "Current Content Items",
	"previewPageExplorerPanel.title": "Page Explorer",
	"previewReceptaclesPanel.chooseContentType": "Please choose a content type.",
	"previewReceptaclesPanel.noResults": "No results found.",
	"previewReceptaclesPanel.selectContentType": "Select content type",
	"previewReceptaclesPanel.title": "Component Receptacles",
	"previewRubbishBin.dropToTrash": "Drop Here To Trash",
	"previewRubbishBin.itemTrashed": "Trashed!",
	"previewSearchPanel.title": "Search",
	"previewSimulatorPanel.previewWindowSize": "Preview Window Size",
	"previewSimulatorPanel.title": "Device Simulator",
	"previewSimulatorTool.previewWindowSize": "Preview Window Size",
	"previewSimulatorTool.title": "Device Simulator",
	"previewSiteExplorerPanel.title": "Site Explorer",
	"previewToolbar.itemMenu": "Item menu",
	"previewToolbar.quickCreateMenuTooltip": "Quick create menu",
	"previewToolbar.toggleEditMode": "Toggle edit mode",
	"previewTools.choseSiteMessage": "Please choose site",
	"previewTools.noWidgetsMessage": "No tools have been configured",
	"profileSettings.currentPassword": "Contraseña actual",
	"profileSettings.isRequired": "es requerido",
	"profileSettings.languageUpdateFailedWarning": "La actualización del idioma ha fallado. Vuelva a intentarlo momentáneamente.",
	"profileSettings.languageUpdatedSuccessfully": "Idioma actualizado con éxito.",
	"profileSettings.mustMatchPreviousEntry": "Debe coincidir con la entrada anterior",
	"profileSettings.password": "Contraseña",
	"profileSettings.unsavedConfirmation": "Tiene cambios sin guardar. ¿Descartar los cambios?",
	"profileSettings.unsavedConfirmationTitle": "Cambios sin guardar",
	"publishDialog.approveForPublish": "Aprobar para publicación",
	"publishDialog.changesInSelection": "Los cambios en la selección de elementos para publicar requerirán que se recalculen \"todas las dependencias\".",
	"publishDialog.differentPublishDateWarning": "<strong>Advertencia</strong> Los elementos que ha seleccionado para aprobación se enviaron con diferentes fechas / horas de publicación solicitadas.",
	"publishDialog.hardDependencies": "Dependencias difíciles",
	"publishDialog.introductoryText": "Los archivos seleccionados serán publicados. Las dependencias duras se incluyen automáticamente. Las dependencias suaves son opcionales y puede elegir cuál incluir.",
	"publishDialog.itemsToPublish": "Artículos para publicar",
	"publishDialog.loadingDependencies": "Cargando dependencias, espere{ellipsis}",
	"publishDialog.noItemsSelected": "No items have been selected",
	"publishDialog.publishingScheduleTitle": "Programación de elementos seleccionados",
	"publishDialog.showAllDependencies": "Mostrar todas las dependencias",
	"publishDialog.softDependencies": "Dependencias suaves",
	"publishDialog.submissionCommentFieldError": "Por favor escriba el comentario de envío.",
	"publishDialog.submissionMandatory": "Presentación obligatoria",
	"publishDialog.submissionOptional": "Presentación opcional",
	"publishForm.emailLabel": "Email me the reviewer's feedback",
	"publishForm.environmentError": "Publishing targets load failed.",
	"publishForm.environmentLoading": "Loading...",
	"publishForm.environmentRetry": "retry",
	"publishForm.environmentSuccess": "Success",
	"publishForm.publishingTargetDropdownLabel": "Publishing Target",
	"publishForm.scheduling": "Scheduling",
	"publishForm.schedulingLater": "Later",
	"publishForm.schedulingNow": "Now",
	"publishForm.submissionComment": "Submission Comment",
	"publishOnDemand.formPathExample": "e.g. /site/website/about/index.xml",
	"publishOnDemand.formPathExamplePreview": "You may enter multiple separate by comma",
	"publishOnDemand.formPathLabel": "Path to Publish",
	"publishOnDemand.formPathLabelPreview": "Commit or tag IDs",
	"publishOnDemand.pathModeDescription": "Publish changes made in Studio via the UI",
	"publishOnDemand.publishingTarget": "Publishing Target",
	"publishOnDemand.submissionComment": "Submission Comment",
	"publishOnDemand.tagsModeDescription": "Publish changes made via direct git actions against the repository or pulled from a remote repository",
	"publishOnDemand.title": "Publish on Demand",
	"publishing.bulkPublishNote": "Bulk publish should be used to publish changes made in Studio via the UI. For changes made via direct git actions, use the \"Publish by...\" feature.",
	"publishing.busy": "Ocupado",
	"publishing.idle": "Ocioso",
	"publishing.publishByNote": "\"Publish by...\" feature must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use \"Bulk Publish\".",
	"publishing.queued": "En cola",
	"publishing.ready": "Listo",
	"publishing.started": "Empezado",
	"publishing.stopped": "Detenido",
	"publishingDashboard.BLOCKED": "Obstruido",
	"publishingDashboard.CANCELLED": "Cancelado",
	"publishingDashboard.COMPLETED": "Completado",
	"publishingDashboard.PROCESSING": "Procesando",
	"publishingDashboard.READY_FOR_LIVE": "Listo Para Publicar",
	"publishingDashboard.all": "TODOS",
	"publishingDashboard.bulkPublishStarted": "Bulk Publish process has been started.",
	"publishingDashboard.cancelItemButtonText": "Cancelar",
	"publishingDashboard.cancelSelected": "Cancelar Seleccionados",
	"publishingDashboard.comment": "Comentario",
	"publishingDashboard.commentNotProvided": "(comentario de envío no proporcionado)",
	"publishingDashboard.confirmAllHelper": "¿Establecer el estado de todos los elementos seleccionados en \"Cancelado\"?",
	"publishingDashboard.confirmHelperText": "¿Establecer el estado del elemento en \"Cancelado\"?",
	"publishingDashboard.fetchPackagesFiles": "Obtener archivos de paquetes",
	"publishingDashboard.filesList": "Lista de archivos",
	"publishingDashboard.filteredBy": "Mostrando: {state, select, all {} other {estado: {state}.}} {environment, select, all {} other {{environment} objetivo.}} {path, select, none {} other {Filtrado por {path}}}",
	"publishingDashboard.filters": "Filtros",
	"publishingDashboard.gitNote": "Publishing by commit or tag must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use please <a>publish by path</a>.",
	"publishingDashboard.next": "Siguiente página",
	"publishingDashboard.no": "No",
	"publishingDashboard.noPackagesSubtitle": "Intenta cambiar tu consulta",
	"publishingDashboard.noPackagesTitle": "No hay paquetes donde se encuentran",
	"publishingDashboard.packagesSelected": "{count, plural, one {{count} Paquete seleccionado} other {{count} Paquetes seleccionados}}",
	"publishingDashboard.pathExpression": "Expresión de ruta",
	"publishingDashboard.previous": "Página anterior",
	"publishingDashboard.publishSuccess": "Published successfully.",
	"publishingDashboard.scheduled": "Programado para <b>{schedule, date, medium} {schedule, time, short}</b> por <b>{approver}</b>",
	"publishingDashboard.selectAll": "Seleccionar todo en esta página",
	"publishingDashboard.state": "Estado",
	"publishingDashboard.status": "El estado es {state} para el ojetivo de publicación {environment}",
	"publishingDashboard.studioNote": "Publishing by path should be used to publish changes made in Studio via the UI. For changes made via direct git actions, please <a>publish by commit or tag</a>.",
	"publishingDashboard.warning": "This will force publish all items that match the pattern requested including their dependencies, and it may take a long time depending on the number of items. Please make sure that all modified items (including potentially someone's work in progress) are ready to be published before continuing.",
	"publishingDashboard.yes": "Sí",
	"publishingQueue.title": "Publishing Queue",
	"publishingStatusTile.isDisabledMessage": "The publisher is disabled.",
	"publishingStatusTile.lockOwnerDisplayMessage": "Locked by {lockOwner}",
	"publishingStatusTile.lockTTLMessage": "TTL {lockTTL}",
	"publishingStatusTile.publishingStatus": "Publishing Status",
	"quickCreateBtnLabel.label": "Open quick create menu",
	"quickCreateMenu.learnMore": "Learn More",
	"quickCreateMenu.learnMoreError": "Quick create has not been configured. Please contact your system administrator.",
	"quickCreateMenu.sectionTitle": "Quick Create",
	"quickCreateMenu.title": "New Content",
	"register.dropTargetsNotFound": "There are no drop targets for {contentType} components",
	"register.notFound": "{name} is not visible or was not registered by developers",
	"rejectDialog.brokenLinks": "Broken Links",
	"rejectDialog.cancel": "Cancel",
	"rejectDialog.continue": "Reject",
	"rejectDialog.incorrectBranding": "Incorrect Branding",
	"rejectDialog.notApproved": "Not Approved",
	"rejectDialog.nsoa": "Needs Section Owner's Approval",
	"rejectDialog.rejectCommentLabel": "Rejection Comment",
	"rejectDialog.rejectionReason": "Rejection Reason",
	"rejectDialog.submittedBy": "Submitted By",
	"rejectDialog.typos": "Typos",
	"remoteRepositories.title": "Remote Repositories",
	"reposAdmin.pendingCommit": "El repositorio contiene archivos pendientes de confirmación. Consulte el estado del repositorio a continuación para obtener más detalles.",
	"reposAdmin.repositoriesNote": "Do not use Studio as a git merge and conflict resolution platform. All merge conflicts should be resolved upstream before getting pulled into Studio.",
	"reposAdmin.unreachableRemote": "El repositorio \"{name}\" no está disponible actualmente.",
	"reposAdmin.unstagedFilesMessage": "Hay archivos sin clasificar en su repositorio.",
	"requestPublishDialog.cancel": "Cancel",
	"requestPublishDialog.submit": "Submit",
	"requestPublishDialog.title": "Request Publish",
	"resetPasswordDialog.helperText": "Set a new password for \"{user}\" user",
	"resetPasswordDialog.passwordUpdated": "Password updated successfully",
	"resetPasswordDialog.title": "Reset Password",
	"resetView.resetPasswordConfirmFieldPlaceholderLabel": "Confirmar contraseña",
	"resetView.resetPasswordError": "Error al restablecer la contraseña. El token puede ser inválido o caducado.",
	"resetView.resetPasswordFieldPlaceholderLabel": "Nueva contraseña",
	"resetView.resetPasswordInvalidToken": "Token inválido o caducado.",
	"resetView.resetPasswordSuccess": "La contraseña se restableció correctamente. Inicia sesión con tu nueva contraseña.",
	"rteControlMessages.chooseSource": "Choose a Source",
	"rteControlMessages.dropImageUploaded": "{title} was successfully uploaded.",
	"rteControlMessages.escapeScripts": "Escapar Scripts",
	"rteControlMessages.incompatibleDatasource": "La fuente de datos configurada para navegar no es compatible con el editor de texto enriquecido. Por favor contacte a su administrador.",
	"rteControlMessages.noDatasourcesConfigured": "No sources configured for this editor.",
	"rteControlMessages.requiredField": "Campo requerido",
	"search.acceptSelection": "Accept Selection",
	"search.changeQuery": "Try changing your query.",
	"search.filtersActive": " • <span>Filters Active</span>",
	"search.goToPreview": "Go to page",
	"search.itemsPerPage": "Items per page:",
	"search.noPermissions": "No permissions available.",
	"search.noResults": "No Results Were Found.",
	"search.resultsCaption": "{from}-{to} of {count} results {keywordLength, plural, =0 {}other{ for <b>“{keyword}”</b>}} ",
	"search.resultsSelected": "{count, plural, one {{count} item selected} other {{count} items selected}}",
	"search.selectAll": "Select all on this page",
	"search.selectionCount": "{count} selected",
	"search.videoProcessed": "Video is being processed, preview will be available when processing is complete",
	"searchAhead.noResults": "No Results.",
	"searchBar.placeholder": "Search...",
	"searchFilter.above": "Above {value}{unit}",
	"searchFilter.asc": "Ascending",
	"searchFilter.byRelevanceAscMessage": "Less relevant first",
	"searchFilter.byRelevanceDescMessage": "Most relevant first",
	"searchFilter.clearFilters": "Clear Filters",
	"searchFilter.contentType": "Content Type",
	"searchFilter.desc": "Descending",
	"searchFilter.internalName": "Name",
	"searchFilter.lastEditDate": "Last Edit Date",
	"searchFilter.mimeType": "MIME Type",
	"searchFilter.searchIn": "Search in:",
	"searchFilter.size": "Content Size",
	"searchFilter.sortBy": "Sort By",
	"searchFilter.under": "Under {value}{unit}",
	"searchToolBar.changeViewButtonTooltip": "Change view",
	"searchToolBar.showHideFilters": "Show/hide filters",
	"settingsPanel.editMode": "Edit Mode",
	"settingsPanel.editModeHelperText": "Enable In-context editing, highlighting editable zones as you hover on them.",
	"settingsPanel.highlightAllZones": "Highlight All Zones",
	"settingsPanel.highlightMode": "Highlight Mode",
	"settingsPanel.highlightModeHelperText": "When \"highlight movable\" is active, only content items you can move around drop targets highlight.",
	"settingsPanel.highlightMovable": "Highlight Movable",
	"sharedContentDS.sharedContent": "Contenido compartido",
	"site.deleted": "Site deleted successfully",
	"siteCard.helperText": "Delete \"{site}\" site?",
	"siteComponentDS.componentPath": "Ruta de componente",
	"siteComponentDS.dataType": "Tipo de datos",
	"siteComponentDS.date": "Fecha",
	"siteComponentDS.float": "Punto flotante",
	"siteComponentDS.html": "Tipo de datos",
	"siteComponentDS.integer": "Entero",
	"siteComponentDS.label": "Selector de taxonomía",
	"siteComponentDS.required": "Necesario",
	"siteComponentDS.siteComponent": "Componente del sitio",
	"siteComponentDS.string": "Cuerda",
	"siteComponentDS.unableLoad": "El sistema no pudo cargar {file}.",
	"siteConfig.controlNotAvailable": "Control no disponible",
	"siteConfig.insertExpressionMessage": "Insertar expresión",
	"siteConfig.invalidNumber": "\"{value}\" no es un número válido.",
	"siteConfig.landingMessage": "Por favor, elija una herramienta de la izquierda.",
	"siteConfig.loadModuleError": "Unable to load \"{tool}\". Check Site tools configuration.",
	"siteConfig.postfixes": "Sufijos",
	"siteConfig.switchToMessage": "Cambiar a {type}",
	"siteConfig.toolNotFound": "\"{tool}\" tool not found.",
	"siteConfigurationManagement.activeEnvironment": "{environment} Environment",
	"siteConfigurationManagement.confTabAWSProfiles": "AWS Profiles",
	"siteConfigurationManagement.confTabAWSProfilesDesc": "AWS profiles configuration file.",
	"siteConfigurationManagement.confTabAssetProcessing": "Asset Processing",
	"siteConfigurationManagement.confTabAssetProcessingDesc": "Asset processing configuration file.",
	"siteConfigurationManagement.confTabBlobStores": "Blob Stores",
	"siteConfigurationManagement.confTabBlobStoresDesc": "Blob stores configuration file.",
	"siteConfigurationManagement.confTabBoxProfiles": "Box Profiles",
	"siteConfigurationManagement.confTabBoxProfilesDesc": "Box profiles configuration file.",
	"siteConfigurationManagement.confTabCMISConfiguration": "CMIS Configuration",
	"siteConfigurationManagement.confTabCMISConfigurationDesc": "This files configures 0 or more CMIS-capable repositories as data-sources for content authors to pick from",
	"siteConfigurationManagement.confTabCodeEditorConf": "Code Editor Configuration",
	"siteConfigurationManagement.confTabCodeEditorConfDesc": "Defines Code Editor configurations",
	"siteConfigurationManagement.confTabConfDesc": "Defines this list of configurations",
	"siteConfigurationManagement.confTabConfigurations": "Configurations",
	"siteConfigurationManagement.confTabContextualNavigationConf": "Contextual Navigation Configuration",
	"siteConfigurationManagement.confTabContextualNavigationConfDesc": "Defines modules on the site contextual navigation bar",
	"siteConfigurationManagement.confTabDependencyResolverConf": "Dependency Resolver Configuration",
	"siteConfigurationManagement.confTabDependencyResolverConfDesc": "This file configures what file paths Crafter considers a dependency and how they should be extracted.",
	"siteConfigurationManagement.confTabDevEnvironmentConf": "Dev Environment Configuration",
	"siteConfigurationManagement.confTabDevEnvironmentConfDesc": "Defines a dev environment configuration",
	"siteConfigurationManagement.confTabEndpointsConf": "Endpoints Configuration",
	"siteConfigurationManagement.confTabEndpointsConfDesc": "Defines a list of end points available",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfiguration": "Engine Site Application Context",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationDesc": "Site application context used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationLive": "Engine Site Application Context - Live",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationPreview": "Engine Site Application Context - Preview",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationStaging": "Engine Site Application Context - Staging",
	"siteConfigurationManagement.confTabEngineSiteConfiguration": "Engine Site Configuration",
	"siteConfigurationManagement.confTabEngineSiteConfigurationDesc": "Site configuration used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteConfigurationLive": "Engine Site Configuration - Live",
	"siteConfigurationManagement.confTabEngineSiteConfigurationPreview": "Engine Site Configuration - Preview",
	"siteConfigurationManagement.confTabEngineSiteConfigurationStaging": "Engine Site Configuration - Staging",
	"siteConfigurationManagement.confTabEngineUrlRewriteConf": "Engine URL Rewrite Configuration (XML Style)",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfDesc": "This file configures site properties used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfLive": "Engine URL Rewrite Configuration (XML Style) - Live",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfPreview": "Engine URL Rewrite Configuration (XML Style) - Preview",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfStaging": "Engine URL Rewrite Configuration (XML Style) - Staging",
	"siteConfigurationManagement.confTabEnvironmentConfiguration": "Environment Configuration",
	"siteConfigurationManagement.confTabEnvironmentConfigurationDesc": "This file configures the environments Crafter Studio can publish to",
	"siteConfigurationManagement.confTabMimeTypes": "Mime Types",
	"siteConfigurationManagement.confTabMimeTypesDesc": "This file configures the mime types icons overrides for this site/blueprint.",
	"siteConfigurationManagement.confTabNotificationConf": "Notification Configuration",
	"siteConfigurationManagement.confTabNotificationConfDesc": "Defines a list of UI messages",
	"siteConfigurationManagement.confTabPermissionsMappings": "Permissions Mapping",
	"siteConfigurationManagement.confTabPermissionsMappingsDesc": "Defines a map of permissions and paths",
	"siteConfigurationManagement.confTabPersonasConf": "Personas Configuration",
	"siteConfigurationManagement.confTabPersonasConfDesc": "Defines a list of personas available to assume in preview",
	"siteConfigurationManagement.confTabPreviewAssetConf": "Preview Asset Configuration",
	"siteConfigurationManagement.confTabPreviewAssetConfDesc": "Defines a list of editable assets associated with XML contents",
	"siteConfigurationManagement.confTabPreviewComponentsConf": "Preview Components Configuration",
	"siteConfigurationManagement.confTabPreviewComponentsConfDesc": "Defines a list of components that can be created dynamically in preview",
	"siteConfigurationManagement.confTabPreviewPanelConf": "Preview Panel Configuration",
	"siteConfigurationManagement.confTabProxyConfig": "Proxy Config",
	"siteConfigurationManagement.confTabProxyConfigDesc": "This file configures the proxy servers for preview.",
	"siteConfigurationManagement.confTabRTEConf": "RTE (TinyMCE 2) Configuration",
	"siteConfigurationManagement.confTabRTEConfDesc": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.confTabRTEtMCE5Conf": "RTE (TinyMCE 5) Configuration",
	"siteConfigurationManagement.confTabRTEtMCE5ConfDesc": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.confTabRoleMappings": "Role Mappings",
	"siteConfigurationManagement.confTabRoleMappingsDesc": "Defines a list of roles available in site",
	"siteConfigurationManagement.confTabSidebarConf": "Sidebar Configuration",
	"siteConfigurationManagement.confTabSidebarConfDesc": "Defines modules on the sidebar",
	"siteConfigurationManagement.confTabSiteConf": "Site Config Tools",
	"siteConfigurationManagement.confTabSiteConfDesc": "Defines the list of admin tools available",
	"siteConfigurationManagement.confTabSiteConfiguration": "Site Configuration",
	"siteConfigurationManagement.confTabSiteConfigurationDesc": "Defines the general site configuration",
	"siteConfigurationManagement.confTabSitePolicyConf": "Site Policy Configuration",
	"siteConfigurationManagement.confTabSitePolicyConfDesc": "Defines policies to validate content operations",
	"siteConfigurationManagement.confTabTargetingConfiguration": "Targeting Configuration",
	"siteConfigurationManagement.confTabTargetingConfigurationDesc": "This file configures the targeting system of Crafter Studio to help provide Crafter Engine with fake user properties that help drive the targeting system",
	"siteConfigurationManagement.confTabTargetsConf": "Targets Configuration",
	"siteConfigurationManagement.confTabTargetsConfDesc": "Defines a list of targets used for form datasource",
	"siteConfigurationManagement.confTabTranslationConf": "Translation Configuration",
	"siteConfigurationManagement.confTabTranslationConfDesc": "Defines supported languages and how to resolve them",
	"siteConfigurationManagement.confTabUiConf": "User Interface Configuration",
	"siteConfigurationManagement.confTabUiConfDesc": "Defines the widgets shown in the user interface",
	"siteConfigurationManagement.confTabWebDAVProfiles": "WebDAV Profiles",
	"siteConfigurationManagement.confTabWebDAVProfilesDesc": "WebDAV profiles configuration file.",
	"siteConfigurationManagement.confTabWorkflowConf": "Workflow Configuration",
	"siteConfigurationManagement.confTabWorkflowConfDesc": "Defines workflows available in the system",
	"siteConfigurationManagement.confTabconfTabPreviewPanelConfDesc": "Defines a list of tools available in preview",
	"siteConfigurationManagement.environment": "Active Environment: {environment}",
	"siteConfigurationManagement.hideSample": "Hide Sample",
	"siteConfigurationManagement.history": "History",
	"siteConfigurationManagement.selectConfigFile": "Please choose a config file from the left.",
	"siteConfigurationManagement.unsavedChangesSubtitle": "You have unsaved changes, do you want to leave?",
	"siteConfigurationManagement.unsavedChangesTitle": "Unsaved changes",
	"siteConfigurationManagement.viewSample": "View Sample",
	"siteExplorerPanel.emptyMessage": "No widgets are configured to show on the site explorer.",
	"siteExplorerPanel.siteConfig": "Site Config",
	"siteExplorerPanel.title": "Site Explorer",
	"siteExplorerPanel.unsupportedItemsPreset": "Some items in the site explorer config are not supported and won't show.",
	"siteSearch.noOptionsAvailable": "No options available",
	"siteSearch.unknownErrorSearching": "An error occurred with the search service.",
	"siteSwitcherSelected.siteSelectorNoSiteSelected": "Choose site",
	"siteTools.title": "Site Tools",
	"sites.ChangeView": "Change view",
	"sites.createGroup": "Create Group",
	"sites.createSite": "Create Site",
	"sitesAdmin.siteUpdated": "Site Updated.",
	"sitesGrid.emptyStateMessage": "No Sites Found",
	"sitesGrid.siteDeleted": "Site deleted successfully",
	"targetingDialog.setNow": "Establecer ahora",
	"tokenManagement.clearSelected": "Clear Selected ({count})",
	"tokenManagement.copied": "Token copied to clipboard",
	"tokenManagement.createToken": "Create Token",
	"tokenManagement.created": "Token created and copied to clipboard",
	"tokenManagement.deleted": "{count, plural, one {Token deleted} other {The selected tokens were deleted}}",
	"tokenManagement.deletedSelected": "Delete Selected",
	"tokenManagement.emptyTokens": "There are no tokens, click on Create Token to add a new one",
	"tokenManagement.helperText": "Delete \"{label}\" token?",
	"tokenManagement.updated": "Token updated",
	"toolbarGlobalNav.openMenuButtonText": "Open Menu",
	"toolbarGlobalNav.signOut": "Sign Out",
	"transcodedVideoPickerControl.label": "Video transcodificado",
	"transferList.addDisabledTooltip": "Select items to add from the left",
	"transferList.addToTarget": "Add selected",
	"transferList.emptyListMessage": "All users are members of this group",
	"transferList.removeDisabledTooltip": "Select items to remove from the right",
	"transferList.removeFromTarget": "Remove selected",
	"transferList.targetEmptyStateMessage": "No members on this group",
	"transferListColumn.noResults": "No results, try to change the query",
	"unlockPublisherDialog.dialogCopy": "Confirme la liberación del bloqueo del editor.",
	"unlockPublisherDialog.dialogTitle": "Confirmar el desbloqueo del editor",
	"unlockPublisherDialog.typeConfirmPassword": "Escriba la palabra \"<b>{password}</b>\" para confirmar que comprende las implicaciones y desea continuar.",
	"unlockPublisherDialog.unlockCompleteMessage": "El bloqueo del editor se liberó correctamente.",
	"unlockPublisherDialog.unlockFailedMessage": "Error al liberar el bloqueo del editor.",
	"uploadDialog.title": "Upload",
	"uploadDialog.uploadInProgress": "Uploads are still in progress. Leaving this page would stop the pending uploads. Are you sure you wish to leave?",
	"uploadDialog.uploadInProgressConfirmation": "Uploads are still in progress. Closing this modal would stop the pending uploads. Are you sure you wish to close it?",
	"uppyCore.noDuplicates": "Cannot add the duplicate file “%'{fileName}'”, it already exists",
	"uppyDashboard.acceptAll": "Accept all changes",
	"uppyDashboard.addMore": "Add more",
	"uppyDashboard.addingMoreFiles": "Adding more files",
	"uppyDashboard.cancelPending": "Cancel pending",
	"uppyDashboard.clearCompleted": "Clear completed",
	"uppyDashboard.rejectAll": "Reject all changes",
	"uppyDashboard.removeFile": "Remove file",
	"uppyDashboard.renamingFromTo": "Renaming from %'{from}' to %'{to}'",
	"uppyDashboard.validateAndRetry": "Accept changes and upload",
	"userGroupMembershipEditor.addOrRemoveError": "Error modifying user group(s). Please try again momentarily.",
	"userGroupMembershipEditor.addToGroupsSuccess": "\"{user}\" added to {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userGroupMembershipEditor.removeFromGroupsSuccess": "\"{user}\" removed from {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userInfoDialog.close": "Close",
	"userInfoDialog.deleteUser": "Delete user",
	"userInfoDialog.externallyManaged": "Managed externally",
	"userInfoDialog.helperText": "Delete \"{username}\" user?",
	"userInfoDialog.noRoles": "No roles",
	"userInfoDialog.resetPassword": "Reset password",
	"userInfoDialog.siteName": "Site name",
	"userInfoDialog.siteRoles": "Roles per site",
	"userInfoDialog.userDeleted": "User deleted successfully",
	"userInfoDialog.userDetails": "User Details",
	"userInfoDialog.userDisabled": "User disabled successfully",
	"userInfoDialog.userEnabled": "User enabled successfully",
	"userInfoDialog.userUpdated": "User updated successfully",
	"usersAdmin.firstName": "Nombre de pila",
	"usersAdmin.lastName": "Apellido",
	"usersAdmin.maxLengthError": "{field} no puede tener más de {size} caracteres",
	"usersAdmin.passwordChangeSuccessMessage": "Password changed successfully",
	"usersAdmin.userCreated": "{username} created.",
	"usersAdmin.userDeleted": "{username} deleted.",
	"usersAdmin.userEdited": "{username} edited.",
	"usersAdmin.userName": "Nombre de usuario",
	"usersGrid.createUser": "Create User",
	"usersGrid.emptyStateMessage": "No Users Found",
	"validations.maxCount": "The max number of items is {maxCount}",
	"validations.maxLength": "The max length ({maxLength}) reached",
	"validations.minCount": "The min number of items is {minCount}",
	"validations.required": "{field} is required",
	"viewVersionDialog.headerTitle": "Viewing item version",
	"wcmRootFolder.pathNotFound": "Carpeta {path} no encontrada.",
	"widgetComponent.componentNotFoundSubtitle": "Check ui config & make sure you've installed the plugins that contain the desired components.",
	"widgetComponent.componentNotFoundTitle": "Component {id} not found.",
	"widgetComponent.pluginLoadFailedMessageBody": "With {info} & component id \"{id}\".",
	"widgetComponent.pluginLoadFailedMessageTitle": "Plugin load failed",
	"withEmptyState.defaultEmptyStateMessage": "No results found",
	words: words$1,
	"words.about": "About",
	"words.accept": "Accept",
	"words.account": "Account",
	"words.apply": "Apply",
	"words.approve": "Approve",
	"words.asset": "Asset",
	"words.audit": "Audit",
	"words.back": "Back",
	"words.base": "Base",
	"words.browse": "Explorar",
	"words.by": "By",
	"words.cancel": "Cancelar",
	"words.clear": "Limpiar",
	"words.close": "Cerrar",
	"words.cluster": "Cluster",
	"words.compact": "Compact",
	"words.component": "Component",
	"words.configuration": "Configuration",
	"words.confirm": "Confirmar",
	"words.content": "Content",
	"words.continue": "Continue",
	"words.copy": "Copy",
	"words.create": "Create",
	"words.created": "Created",
	"words.custom": "Personalizado",
	"words.cut": "Cut",
	"words.dashboard": "Dashboard",
	"words.defaults": "Valores predeterminados",
	"words.delete": "Delete",
	"words.dependencies": "Dependencies",
	"words.description": "Description",
	"words.desktop": "Desktop",
	"words.details": "Details",
	"words.disabled": "Disabled",
	"words.dismiss": "Dismiss",
	"words.documentation": "Documentation",
	"words.done": "Terminado",
	"words.duplicate": "Duplicate",
	"words.edit": "Edit",
	"words.edited": "Edited",
	"words.email": "E-mail",
	"words.enabled": "Enabled",
	"words.error": "Error",
	"words.expiration": "Expiration",
	"words.expired": "Expired",
	"words.files": "Files",
	"words.filter": "Filter",
	"words.firstName": "First name",
	"words.from": "From",
	"words.global": "Global",
	"words.go": "Go",
	"words.groups": "Groups",
	"words.height": "Height",
	"words.history": "History",
	"words.id": "Id",
	"words.install": "Install",
	"words.installed": "Installed",
	"words.item": "Item",
	"words.label": "Label",
	"words.language": "Idioma",
	"words.lastName": "Last name",
	"words.level": "Level",
	"words.loading": "Loading",
	"words.locales": "Locales",
	"words.logger": "Logger",
	"words.login": "Login",
	"words.logout": "Logout",
	"words.max": "Max",
	"words.members": "Members",
	"words.menu": "Menu",
	"words.message": "Message",
	"words.min": "Min",
	"words.minimize": "Minimize",
	"words.name": "Name",
	"words.never": "Never",
	"words.no": "No",
	"words.notification": "Notificación",
	"words.ok": "Ok",
	"words.options": "Options",
	"words.page": "Page",
	"words.parameters": "Parameters",
	"words.password": "Password",
	"words.paste": "Paste",
	"words.path": "Path",
	"words.pause": "Pause",
	"words.phone": "Phone",
	"words.presets": "Preajustes",
	"words.preview": "Preview",
	"words.publish": "Publish",
	"words.publishing": "Publishing",
	"words.queued": "Queued",
	"words.ready": "Ready",
	"words.reason": "Razón",
	"words.refresh": "Refresh",
	"words.reject": "Reject",
	"words.relevance": "Relevance",
	"words.reload": "Reload",
	"words.remove": "Remove",
	"words.rename": "Rename",
	"words.reset": "Reiniciar",
	"words.revert": "Revert",
	"words.review": "Review",
	"words.roles": "Roles",
	"words.save": "Guardar",
	"words.schedule": "Schedule",
	"words.script": "Script",
	"words.scripts": "Scripts",
	"words.search": "Search",
	"words.select": "Select",
	"words.selected": "Selected",
	"words.settings": "Settings",
	"words.site": "Site",
	"words.sites": "Sites",
	"words.start": "Start",
	"words.state": "State",
	"words.status": "Status",
	"words.stay": "Stay",
	"words.stop": "Stop",
	"words.stopped": "Stopped",
	"words.submit": "Enviar",
	"words.system": "System",
	"words.tablet": "Tablet",
	"words.template": "Template",
	"words.templates": "Templates",
	"words.thread": "Thread",
	"words.timestamp": "Timestamp",
	"words.to": "To",
	"words.translation": "Translation",
	"words.type": "Type",
	"words.unknown": "Unknown",
	"words.unlock": "Unlock",
	"words.update": "Actualizar",
	"words.upload": "Subir",
	"words.url": "Url",
	"words.username": "Username",
	"words.users": "Users",
	"words.validating": "Validating",
	"words.value": "Value",
	"words.version": "Version",
	"words.view": "View",
	"words.warning": "Warning",
	"words.width": "Width",
	"words.yes": "Si",
	"workflowCancellation.cancel": "Cancel",
	"workflowCancellation.continue": "Continue",
	"workflowCancellation.subtitle": "Edit will cancel all items that are in the scheduled deployment batch. Please review the list of files below and chose “Continue” to cancel workflow and edit or “Cancel” to remain in your dashboard.",
	"workflowCancellation.title": "Warning: Workflow Cancellation",
	"workflowStates.title": "Workflow States"
};

var guestDetectionMessage$2 = "Die Kommunikation mit der Vorschauanwendung wurde unterbrochen. Studio wird die Verbindung weiterhin versuchen.";
var words$2 = "Save";
var de = {
	"CreateUserDialog.title": "Create User",
	"GlobalMenu.AboutUs": "Über",
	"GlobalMenu.Audit": "Audit",
	"GlobalMenu.AuditEntryLabel": "PRÜFUNG",
	"GlobalMenu.ClusterEntryLabel": "Cluster",
	"GlobalMenu.GroupsEntryLabel": "Gruppen",
	"GlobalMenu.Sites": "Sites",
	"GlobalMenu.SitesEntryLabel": "Websites",
	"GlobalMenu.UsersEntryLabel": "Benutzer",
	"InstallPluginDialog.empty": "No plugins found.",
	"InstallPluginDialog.title": "Search & install plugin",
	"PluginManagement.pluginInstalled": "Plugin installed successfully",
	"about.buildDate": "Build Date",
	"about.buildNumber": "Build Number",
	"about.studioVersionNumber": "Studio Version Number",
	"aboutView.attribution": "Crafter CMS wird durch diese anderen <a>Quelloffene Software projekte</a> ermöglicht.",
	"accountManagement.changeHelperText": "Once your password has been successfully updated, you'll be required to login again.",
	"accountManagement.changeLanguage": "Change Language",
	"accountManagement.changePassword": "Change Password",
	"accountManagement.confirmPassword": "Confirm Password",
	"accountManagement.currentPassword": "Current Password",
	"accountManagement.languageUpdated": "Language preference changed",
	"accountManagement.newPassword": "New Password",
	"accountManagement.passwordChanged": "Password changed successfully",
	"accountManagement.passwordInvalid": "Password is invalid.",
	"accountManagement.passwordMatch": "Must match the previous password.",
	"adminConfigurations.allEncrypted": "Alle markierten Elemente sind bereits verschlüsselt. Das Attribut \"encrypted\" sollte einen leeren Wert haben, der für die Verschlüsselung markiert werden soll (z.B. `encrypted=\"\"`).",
	"adminConfigurations.configSaved": "Configuration saved successfully.",
	"adminConfigurations.documentError": "The document contains errors. Check for error markers on side of the editor.",
	"adminConfigurations.encryptHinPt1": "Um den Inhalt eines Tags zu verschlüsseln, (1) markieren Sie die gewünschten Tags für die Verschlüsselung und (2) klicken Sie auf die Schaltfläche \"Markiert verschlüsseln\".",
	"adminConfigurations.encryptHinPt2": "(1) Markieren Sie Ihre Tags für die Verschlüsselung, indem Sie das Attribut <bold>`encrypted =\" \"`</bold>hinzufügen.",
	"adminConfigurations.encryptHinPt3": "Beispiel: {lt}accessKey encrypted = \"\"{gt}AKIAIOSFODNN7EXAMPLE{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt4": "(2) Klicken Sie auf die Schaltfläche <bold>`Verschlüsselt markiert`</bold> , und Ihr Tag sollte nun wie folgt aussehen:",
	"adminConfigurations.encryptHinPt5": "{lt}accessKey encrypted = \"true\"{gt}${lc}enc: xeJW23SomeEncryptedValuesListedHere{rc}{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt6": "Merken:",
	"adminConfigurations.encryptHinPt7": "Verwenden Sie das Attribut `encrypted =” ”` nur für Tags, die den zu verschlüsselnden Wert (Text) direkt enthalten.",
	"adminConfigurations.encryptHinPt8": "Fügen Sie das Attribut nicht zu Tags hinzu, die andere Tags enthalten - es sei denn, Sie möchten tatsächlich einen Teil von XML verschlüsseln.",
	"adminConfigurations.encryptHinPt9": "Manipulieren Sie die Verschlüsselungsergebnisse nicht manuell.",
	"adminConfigurations.encryptMarked": "Markierte verschlüsseln",
	"adminConfigurations.encryptionSingleDetail": "{br}\"{name}\" with value \"{value}\"",
	"adminConfigurations.noEncryptItems": "Im XML-Markup wurden keine zu verschlüsselnden Elemente gefunden. Fügen Sie das Attribut `encrypted=\"\"` hinzu, um es für die Verschlüsselung zu markieren.",
	"adminConfigurations.pendingEncryption": "{itemCount, plural, one {Tag Name {tags} is marked for encryption but hasn't}other {Tag names: {tags} {br} are marked for encryption but haven't}} been encrypted, please trigger encryption or remove the tag flagging.",
	"adminConfigurations.xmlContainsErrors": "Das XML-Dokument enthält Fehler: {errors}",
	"approveDialog.subtitle": "Selected files will go live upon submission. Hard dependencies are automatically submitted with the main items. You may choose whether to submit or not soft dependencies",
	"approveDialog.title": "Approve for Publish",
	"asyncVideoPlayer.videoBeingProcessed": "Video is being processed, preview will be available when processing is complete",
	"audiencesPanel.apply": "Apply",
	"audiencesPanel.defaults": "Defaults",
	"audiencesPanelControl.optionSelectorNoOptionSelected": "Select Option",
	"auditGrid.allOrigins": "All Origins",
	"auditGrid.allSites": "All Sites",
	"auditGrid.allUsers": "All Users",
	"auditGrid.clearFilters": "Clear filters",
	"auditGrid.clusterNode": "Cluster Node",
	"auditGrid.emptyStateMessage": "No Logs Found",
	"auditGrid.name": "Name",
	"auditGrid.noParameters": "No parameters",
	"auditGrid.operation": "Operation",
	"auditGrid.origin": "Origin",
	"auditGrid.parameters": "Parameters",
	"auditGrid.showParameters": "Show parameters",
	"auditGrid.siteName": "Site",
	"auditGrid.targetType": "Target Type",
	"auditGrid.targetValue": "Target Value",
	"auditGrid.timestamp": "Timestamp",
	"auditGrid.timezone": "Timezone",
	"auditGrid.username": "Username",
	"auditGridFilterPopover.allOperations": "All Operations",
	"auditGridFilterPopover.filterByCluster": "Filter by Cluster Node",
	"auditGridFilterPopover.filterByOperations": "Filter by Operations",
	"auditGridFilterPopover.filterByOrigin": "Filter by Origin",
	"auditGridFilterPopover.filterBySite": "Filter by Site",
	"auditGridFilterPopover.filterByTarget": "Filter by Target Value",
	"auditGridFilterPopover.filterByUser": "Filter by User",
	"authMonitor.dialogTitleText": "Sitzung abgelaufen",
	"authMonitor.incorrectPasswordMessage": "Falsches Passwort. Bitte versuche es erneut.",
	"authMonitor.logOutButtonLabel": "Ausloggen",
	"authMonitor.openSSOLoginButtonLabel": "Öffnen Sie das Anmeldeformular",
	"authMonitor.passwordTextFieldLabel": "Passwort",
	"authMonitor.postSSOLoginMismatchMessage": "Sie haben sich anscheinend mit einem anderen Benutzer als dem Eigentümer dieser Sitzung angemeldet. Aus Sicherheitsgründen wird Ihr Bildschirm jetzt aktualisiert.",
	"authMonitor.sessionExpiredMessage": "Deine Sitzung ist abgelaufen. Bitte melden Sie sich wieder an.",
	"authMonitor.ssoOpenPopupMessage": "Stellen Sie sicher, dass Popups nicht blockiert sind. Wenn Sie sich angemeldet haben, kehren Sie zu diesem Fenster zurück und klicken Sie unten auf die Schaltfläche \"Fortsetzen\".",
	"authMonitor.usernameTextFieldLabel": "Nutzername",
	"authMonitor.validateSessionButtonLabel": "Fortsetzen",
	"blueprint.by": "Durch",
	"blueprint.crafterCMS": "Crafter CMS",
	"blueprint.license": "Lizenz",
	"blueprint.licenseTooltip": "{license} Lizenz",
	"blueprint.more": "Mehr...",
	"blueprint.noDev": "Kein Entwickler angegeben.",
	"blueprint.use": "Benutzen",
	"blueprint.version": "Ausführung",
	"browseCMIS.cloningCMIS": "CMIS-Asset klonen",
	"browseCMIS.cmis": "CMIS",
	"browseSearchMessages.lookUpChildError": "Unable to lookup child form callback for search: {searchId}",
	"browseSearchMessages.lookUpParentError": "Unable to lookup parent context for search: {searchId}",
	"bulkUpload.cancelAll": "Alle Absagen",
	"bulkUpload.dropHere": "Legen Sie Dateien hier ab oder <span>durchsuchen Sie</span>",
	"bulkUpload.filesProgression": "{start}/{end}",
	"bulkUpload.subtitle": "Legen Sie die gewünschten Dateien von Ihrem Desktop in den darunter liegenden Bereich ab",
	"bulkUpload.title": "Massen-Upload",
	"bulkUpload.uploadInProgress": "Uploads sind noch im Gange. Wenn Sie diese Seite verlassen, werden die ausstehenden Uploads gestoppt. Bist du sicher, dass du gehen willst?",
	"bulkUploadConfirmDialogMessages.description": "Es wird noch ein Massen-Upload durchgeführt. Es kann immer nur ein Massen-Upload gleichzeitig ausgeführt werden.",
	"bulkUploadConfirmDialogMessages.title": "Upload läuft",
	"changeContentTypeDialog.emptyStateMessage": "No Content Types Found",
	"changeContentTypeDialog.subtitle": "The following starter templates are available for use within this section.",
	"changeContentTypeDialog.title": "Choose Content Type",
	"checkboxGroupControl.datasource": "Datenquelle",
	"checkboxGroupControl.horizontal": "Horizontal",
	"checkboxGroupControl.listDirection": "Listenrichtung",
	"checkboxGroupControl.readonly": "Schreibgeschützt",
	"checkboxGroupControl.showSelectAll": "Zeige \"Alles auswählen\"",
	"checkboxGroupControl.vertical": "Vertikale",
	"childContentDS.childContent": "Untergeordneter Inhalt (veraltet)",
	"clusterAdmin.clusterDeleted": "{cluster} deleted.",
	"clusterGrid.authType": "Auth Type",
	"clusterGrid.confirmDeleteCluster": "Delete this cluster?",
	"clusterGrid.deleteCluster": "Delete cluster",
	"clusterGrid.emptyStateMessage": "No Clusters Found",
	"clusterGrid.localAddress": "Local Address",
	"clusterGrid.remoteName": "Remote Name",
	"clusterManagement.clusterDeleted": "Cluster deleted successfully",
	"codeEditor.confirm": "Bestätigen Sie Schließen",
	"codeEditor.inProgressConfirmation": "Another editor is currently open & minimized. Please close the current editor before opening another",
	"codeEditor.insertCode": "Insert Code",
	"codeEditor.localesConfirmBody": "The template for the locale you selected does not exist. Do you want to create it now?",
	"codeEditor.localesConfirmTitle": "Create Template",
	"codeEditor.localesHelperText": "Select the locale for which to create/edit a template. Locales, like 'en' will cover sub-locales like 'en_us' or 'en_uk'.",
	"codeEditor.localesSnackBarTitle": "Template Created. Do you want to copy the base template?",
	"codeEditor.saveAndClose": "Save & Close",
	"codeEditor.saveAndMinimize": "Save & Minimize",
	"codeEditor.saved": "Save successful",
	"codeEditor.stay": "Nein, bleib",
	"common.authentication": "Authentifizierung",
	"common.back": "Zurück",
	"common.craftercms": "Crafter CMS",
	"common.developer": "Entwickler",
	"common.license": "Lizenz",
	"common.marketplace": "Marktplatz",
	"common.moreInfo": "Mehr Info",
	"common.password": "Passwort",
	"common.privateKey": "Privat Schlüssel",
	"common.remoteName": "Git Remote Name",
	"common.searchEngine": "Suchmaschine",
	"common.selectAll": "Wählen Sie Alle",
	"common.toggleSidebarTooltip": "Toggle sidebar",
	"common.token": "Zeichen",
	"common.use": "Benutzen",
	"common.userName": "Nutzername",
	"common.usernameAndPassword": "Benutzername Passwort",
	"common.version": "Ausführung",
	"common.website": "webseite",
	"compareVersionsDialog.back.selectRevision": "Back to select revision",
	"compareVersionsDialog.headerSubtitleCompare": "Select a revision to compare",
	"compareVersionsDialog.headerSubtitleCompareTo": "Select a revision to compare to “{selectedA}”",
	"compareVersionsDialog.headerTitle": "Compare item versions",
	"compareVersionsDialog.pleaseContentItem": "Please content item",
	"componentsPanel.emptyStateMessage": "No components found",
	"componentsPanel.emptyStateMessageSubtitle": "Communicate with your developers to create the required components in the system.",
	"componentsPanel.suspenseStateMessage": "Retrieving Page Model",
	"configurationSamplePreviewDialog.appendContent": "Append after current content",
	"configurationSamplePreviewDialog.replaceContent": "Replace current content",
	"configurationSamplePreviewDialog.title": "Sample File",
	"configurationSamplePreviewDialog.useSampleContent": "Use Sample Content",
	"contentLocalization.mark": "Mark for Translation",
	"contentLocalization.title": "Content Localization",
	"contentType.RTEConfiguration": "RTE-Konfiguration",
	"contentType.autoGrow": "Automatisch wachsen",
	"contentType.contenTypeWarningMessage": "Bitte beachten Sie, dass die Datenquelle für untergeordnete Inhalte aus Crafter CMS ausläuft. Verwenden Sie für Komponenten, die seiten- oder komponentenübergreifend freigegeben werden müssen, stattdessen Shared Content. Verwenden Sie für Komponenten, die ausschließlich zu diesem Inhaltsobjekt gehören, Embedded Content.",
	"contentType.continueEditing": "Weiter bearbeiten",
	"contentType.dependsOn": "This property depends on \"{dependency}\"",
	"contentType.enableSpellCheck": "Rechtschreibprüfung aktivieren",
	"contentType.fileManager": "Dateimanager",
	"contentType.fileNameErrorMessage": "Inhaltstypen erfordern einen Dateinamen. Fügen Sie dieser Inhaltstypdefinition entweder ein Steuerelement \"Dateiname\" oder \"Auto-Dateiname\" hinzu.",
	"contentType.flatTitleError": "Bitte füllen Sie jeden Titel für Felder und Datenquellen aus.",
	"contentType.forceBRNewLines": "Neue Zeilen erzwingen",
	"contentType.forcePNewLines": "P-Tags erzwingen Neue Zeilen",
	"contentType.forceRootBlockP": "Root Block p Tag erzwingen",
	"contentType.height": "Höhe",
	"contentType.idError": "Bitte geben Sie den Variablennamen ein für:",
	"contentType.imageManager": "image Manager",
	"contentType.internalNameErrorMessage": "Dieser Inhaltstyp erfordert einen internen Namen. Fügen Sie dieser Inhaltstypdefinition ein Steuerelement \"Interner Name\" hinzu.",
	"contentType.noTemplateAssoc": "Mit diesem Inhaltstyp ist keine Vorlage verknüpft. Klicken Sie auf Speichern, um mit dem Speichervorgang fortzufahren, oder klicken Sie auf Weiter, um den Inhaltstyp (unter Grundlegende Eigenschaften des Inhaltstyps) mit einer Vorlage zu aktualisieren.",
	"contentType.notice": "Beachten",
	"contentType.saveFailed": "Speichern fehlgeschlagen",
	"contentType.supportedChannels": "Unterstützte Kanäle",
	"contentType.useChildContent": "Trotzdem veraltete Steuerung verwenden",
	"contentType.useEmbeddedContent": "Verwenden Sie eingebetteten Inhalt",
	"contentType.useSharedContent": "Verwenden Sie gemeinsam genutzten Inhalt",
	"contentType.videoManager": "Videomanager",
	"contentType.width": "Breite",
	"contextMenu.emptyOptionsMessage": "No options available to display.",
	"controlsCommonMessages.escapeContent": "Escape Content",
	"copyItems.cancel": "Cancel",
	"copyItems.copy": "Copy",
	"copyItems.deselectAll": "Deselect All",
	"copyItems.selectAll": "Select All",
	"copyTokenDialog.helperText": "Token created successfully. Please copy the token and store it securely as you won’t be able to see it’s value again.",
	"copyTokenDialog.title": "Access Token Created",
	"craftercms.codeEditor.loadingForm": "Loading...",
	"craftercms.codeEditor.title": "Code Editor",
	"craftercms.ice.audiences.loading": "Retrieving targeting options",
	"craftercms.ice.audiences.title": "Zielgruppenausrichtung",
	"craftercms.ice.browseComponents.chooseContentType": "Please choose a content type.",
	"craftercms.ice.browseComponents.loading": "Loading",
	"craftercms.ice.browseComponents.nextPage": "next page",
	"craftercms.ice.browseComponents.noResults": " No results found.",
	"craftercms.ice.browseComponents.previousPage": "previous page",
	"craftercms.ice.browseComponents.selectContentType": "Select content type",
	"craftercms.ice.browseComponents.title": "Browse components",
	"craftercms.pages.option.noLocales": "The site has no locales declared.",
	"craftercms.pages.option.terminateSelection": "Terminate Selection",
	"craftercms.pages.widget.itemsSelected": "{count, plural, one {{count} Item selected} other {{count} Items selected}}",
	"createFileDialog.controller": "New Controller",
	"createFileDialog.createPolicy": "The supplied name goes against site policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFileDialog.fileName": "File Name",
	"createFileDialog.fileNameRequired": "File name is required.",
	"createFileDialog.helperText": "Consisting of letters, numbers, dot (.), dash (-) and underscore (_).",
	"createFileDialog.openOnSuccess": "Open file",
	"createFileDialog.openOnSuccessTip": "Open for edit after creation",
	"createFileDialog.placeholder": "Please type a name",
	"createFileDialog.policyError": "The supplied name goes against site policies.",
	"createFileDialog.template": "New Template",
	"createFolder.createPolicy": "The supplied name goes against site policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFolder.placeholder": "Please type a folder name",
	"createFolder.policyError": "The supplied name goes against site policies.",
	"createSiteDialog.additionalOptions": "Zusätzliche Optionen",
	"createSiteDialog.authentication": "Authentifizierung",
	"createSiteDialog.authenticationNoRequired": "Authentifizierung nicht erforderlich (öffentliche URL)",
	"createSiteDialog.blueprintParameters": "Blueprint-Parameter",
	"createSiteDialog.blueprintStrategy": "Erstellen Sie aus Blaupause",
	"createSiteDialog.branch": "Git Branch",
	"createSiteDialog.cantStart": "Site-Namen dürfen nicht mit Nullen, Bindestrichen (-) oder Unterstrichen (_) beginnen.",
	"createSiteDialog.changeQuery": "Versuchen Sie, Ihre Abfrage zu ändern, oder durchsuchen Sie den gesamten Katalog.",
	"createSiteDialog.chooseCreationStrategy": "Wählen Sie die Erstellungsstrategie: Beginnen Sie mit einem vorhandenen Git-Repo oder erstellen Sie anhand einer Blaupause, die am besten zu Ihnen passt.",
	"createSiteDialog.clone_remoteBranch_label": "Die Site wird erstellt, indem dieser Zweig des Repos geklont wird. Sie können später auch zwischen den Zweigen wechseln.",
	"createSiteDialog.clone_remoteName_label": "Nennen Sie die Fernbedienung, die sich auf das Quellrepo bezieht, von dem abgerufen werden soll. In der Regel als \"Upstream\" oder \"Herkunft\" bezeichnet.",
	"createSiteDialog.clone_url_label": "Die Git-Repository-URL, von der geklont werden soll.",
	"createSiteDialog.createAsOrphan": "Erstellen Sie die Site aus einem Remote-Repository als verwaist (kein Git-Verlauf).",
	"createSiteDialog.createAsOrphanHelpText": "Durch das Erstellen der Site als verwaiste Site wird die Site vom Quell-Git-Repository getrennt und der gesamte Verlauf entfernt.",
	"createSiteDialog.createInBackground": "Im Hintergrund erstellen",
	"createSiteDialog.createSite": "Site erstellen",
	"createSiteDialog.creatingSite": "Site erstellen",
	"createSiteDialog.creationStrategy": "Schöpfungsstrategie",
	"createSiteDialog.description": "Beschreibung",
	"createSiteDialog.descriptionMaxLength": "Maximale Länge: {maxLength} Zeichen.",
	"createSiteDialog.dialogCloseMessage": "In das Formular eingegebene Daten gehen beim Schließen verloren.",
	"createSiteDialog.dialogCloseTitle": "Bestätigen Sie Schließen",
	"createSiteDialog.finish": "Fertig",
	"createSiteDialog.gitBlueprintDescription": "Erstellen Sie eine neue Site basierend auf einem Crafter-CMS-Projekt in einem vorhandenen entfernten Git-Repository.",
	"createSiteDialog.gitBlueprintName": "Remote Git Repository",
	"createSiteDialog.gitStrategy": "Bestehender Remote Git Repo Klon",
	"createSiteDialog.idExist": "The ID already exists.",
	"createSiteDialog.nameAndDescription": "Nennen und beschreiben Sie Ihre Site",
	"createSiteDialog.nameExist": "Der Name existiert bereits.",
	"createSiteDialog.noBlueprints": "Keine Blaupausen gefunden",
	"createSiteDialog.noDescription": "Keine Beschreibung angegeben",
	"createSiteDialog.pleaseWait": "Bitte warten Sie, während Ihre Website erstellt wird.",
	"createSiteDialog.plugin": "Blueprint",
	"createSiteDialog.privateBlueprints": "Private Baupläne",
	"createSiteDialog.privateKey": "Privat Schlüssel",
	"createSiteDialog.publicMarketplace": "Öffentlicher Marktplatz",
	"createSiteDialog.remoteBranch": "Git Branch",
	"createSiteDialog.remoteName": "Git Remote Name",
	"createSiteDialog.remoteURL": "Git Repo URL",
	"createSiteDialog.repoUrl": "Git Repo URL",
	"createSiteDialog.required": "{name} ist erforderlich.",
	"createSiteDialog.review": "Rezension",
	"createSiteDialog.reviewSite": "Überprüfen Sie die Zusammenfassung der Einrichtung und erstellen Sie Ihre Website",
	"createSiteDialog.sandboxBranch": "Sandbox Branch",
	"createSiteDialog.showIncompatible": "Inkompatible Plugins anzeigen",
	"createSiteDialog.siteFormat": "Maximale Länge: 50 Zeichen, bestehend aus: Kleinbuchstaben, Zahlen und Bindestrich (-).",
	"createSiteDialog.siteId": "Webseitenadresse",
	"createSiteDialog.siteInfo": "Site Info",
	"createSiteDialog.siteName": "Site Name",
	"createSiteDialog.token": "Zeichen",
	"createSiteDialog.useDefaultValue": "Standardwert verwenden",
	"createSiteDialog.userNameAndPassword": "Benutzername Passwort",
	"createTokenDialog.expiresHelperNeverText": "Switch off to never expire.",
	"createTokenDialog.expiresHelperText": "Switch on to set an expiration.",
	"createTokenDialog.expiresLabel": "Expire Token",
	"createTokenDialog.helperText": "Type a name for the new token. The token will be created by the server and shown to you after. Store it securely as you won’t be able to see it’s value again.",
	"createTokenDialog.title": "Create Access Token",
	"createUserDialog.emailRequired": "Email is required.",
	"createUserDialog.firstName": "First Name",
	"createUserDialog.firstNameRequired": "First Name is required.",
	"createUserDialog.invalidEmail": "Email is invalid.",
	"createUserDialog.lastName": "Last Name",
	"createUserDialog.lastNameRequired": "Last Name is required.",
	"createUserDialog.passwordInvalid": "Password is invalid.",
	"createUserDialog.passwordMatch": "Must match the previous password.",
	"createUserDialog.passwordRequired": "Password is required.",
	"createUserDialog.passwordVerification": "Password Verification",
	"createUserDialog.usernameRequired": "Username is required.",
	"dashboardWidgetsMessages.publishingTarget": "Veröffentlichungsziel",
	"dateTime.ordinals": "{day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
	"datetimepicker.dateInvalidMessage": "Invalid Date.",
	"datetimepicker.datePlaceholder": "Date",
	"datetimepicker.timeInvalidMessage": "Invalid Time.",
	"datetimepicker.timePlaceholder": "Time",
	"deleteContentTypeDialog.contentTypeDeleteFailedMessage": "Error deleting content type",
	"deleteContentTypeDialog.contentTypeDeletedMessage": "Content type deleted successfully",
	"deleteContentTypeDialog.headerSubtitle": "Please confirm the deletion of \"{name}\"",
	"deleteContentTypeDialog.headerTitle": "Delete Content Type",
	"deleteContentTypeDialog.reviewDependenciesMessage": "Please review and confirm all of content type dependencies that will be deleted.",
	"deleteContentTypeDialog.submitButton": "Delete",
	"deleteContentTypeDialog.typeConfirmPassword": "Type the word \"<b>{password}</b>\" to confirm the deletion of \"{name}\" and all it's dependencies.",
	"deleteDialog.brokenItems": " Wird gebrochene Referenzen haben",
	"deleteDialog.cancel": "Cancel",
	"deleteDialog.childItemsText": "Untergeordnete Elemente",
	"deleteDialog.deleteItems": "Elemente löschen",
	"deleteDialog.dependentItems": "Abhängige Gegenstände",
	"deleteDialog.headerSubTitle": "Selected items will be deleted along with their child items. Please review dependent items before deleting as these will end-up with broken link references.",
	"deleteDialog.headerTitle": "Delete",
	"deleteDialog.maxCharacters": "Max {maxLength} characters",
	"deleteDialog.submissionCommentFieldError": "Bitte schreibe einen Kommentar.",
	"deleteDialog.submissionCommentLabel": "Submission Comment",
	"deleteDialog.submit": "Delete",
	"deleteDialog.updatingDependents": "Updating dependents, please wait...",
	"deleteDialog.willGetDeleted": " Wird gelöscht",
	"dependenciesDialog.allDeps": "Show all dependencies",
	"dependenciesDialog.assets": "Assets only",
	"dependenciesDialog.code": "Code only",
	"dependenciesDialog.contentItems": "Content items only",
	"dependenciesDialog.dependencies": "Dependencies",
	"dependenciesDialog.dependsOn": "Items that depend on selected item",
	"dependenciesDialog.dependsOnMe": "Dependencies of selected item",
	"dependenciesDialog.edit": "Edit",
	"dependenciesDialog.emptyDependantsMessage": "{itemName} has no dependencies",
	"dependenciesDialog.emptyDependenciesMessage": "Nothing depends on {itemName}",
	"dependenciesDialog.headerTitle": "Content Item Dependencies",
	"dependenciesDialog.history": "History",
	"dragAndDropMessages.componentNotWelcomeWithinDropZone": "Die Drop-Zone unterstützt diesen Komponententyp nicht. Überprüfen Sie Ihr Inhaltsmodell.",
	"dragAndDropMessages.contentTypeNotFound": "Die ID des Inhaltstyps wurde in Ihrer Vorlage nicht gefunden. Drag and Drop wird beeinträchtigt. Weitere Informationen finden Sie unter docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.embeddedComponentsDeleteChildNotSupported": "Das Löschen von Komponenten aus einer eingebetteten Drop-Zone-Komponente wird noch nicht unterstützt. Bitte benutzen Sie die Formulare, um Inhalte zu bearbeiten.",
	"dragAndDropMessages.embeddedComponentsDndNotSupported": "Ziehen und Ablegen von eingebetteten Komponenten wird noch nicht unterstützt. Bitte benutzen Sie die Formulare, um Inhalte zu bearbeiten.",
	"dragAndDropMessages.embeddedComponentsDragWithinParentOnly": "In dieser Version können eingebettete Komponenten nur innerhalb ihres aktuellen übergeordneten Elements gezogen werden. Bitte benutzen Sie die Formulare, um Inhalte zu bearbeiten.",
	"dragAndDropMessages.moveOutEmbeddedComponentsNotSupported": "Das Verschieben von Komponenten aus einer eingebetteten Drop-Zone-Komponente wird noch nicht unterstützt. Bitte benutzen Sie die Formulare, um Inhalte zu bearbeiten.",
	"dragAndDropMessages.objectIdNotFound": "Objekt-ID fehlt. Drag and Drop wird beeinträchtigt. Weitere Informationen finden Sie unter docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dragAndDropMessages.pathNotFound": "Pfad fehlt. Drag and Drop wird beeinträchtigt. Weitere Informationen finden Sie unter docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html.",
	"dropTargetsMessages.allowEmbedded": "Allow Embedded",
	"dropTargetsMessages.allowShared": "Allow Shared",
	"dropTargetsMessages.baseBrowsePath": "Base Browse Path",
	"dropTargetsMessages.baseRepositoryPath": "Base Repository Path",
	"dropTargetsMessages.browseExisting": "Browse existing",
	"dropTargetsMessages.contentTypes": "Content Types",
	"dropTargetsMessages.createNewEmbedded": "Create new embedded",
	"dropTargetsMessages.createNewShared": "Create new shared",
	"dropTargetsMessages.dropTargets": "Drop Targets",
	"dropTargetsMessages.enableBrowse": "Enable Browse",
	"dropTargetsMessages.enableSearch": "Enable Search",
	"dropTargetsMessages.searchExisting": "Search existing components",
	"dropTargetsMessages.tags": "Tags",
	"editGroupDialog.close": "Close",
	"editGroupDialog.deleteGroup": "Delete group",
	"editGroupDialog.editGroupMembers": "Edit Group Members",
	"editGroupDialog.groupDetails": "Group Details",
	"editGroupDialog.groupMemberHelperText": "Group members are editable after creation",
	"editGroupDialog.helperText": "Delete \"{name}\" group?",
	"editSiteDialog.cancel": "Cancel",
	"editSiteDialog.notEditable": "The site id is not editable",
	"editSiteDialog.siteDescription": "Site Description",
	"editSiteDialog.siteId": "Site ID",
	"editSiteDialog.siteName": "Site Name",
	"editSiteDialog.siteNameRequired": "Site Name is required.",
	"editSiteDialog.sitenameExists": "The name already exist.",
	"editSiteDialog.title": "Edit Site",
	"embeddedContentDS.embeddedContent": "Eingebetteter Inhalt",
	"embeddedLegacyFormMessages.openContentFormFailedError": "An error occurred opening the content form. Please try again momentarily. Contact the administrator if the error persists.",
	"emptyUiConfigMessageTitle.subtitle": "Nothing is set to be shown here.",
	"emptyUiConfigMessageTitle.title": "Configuration is empty",
	"encryptTool.buttonText": "Text verschlüsseln",
	"encryptTool.clearResultButtonText": "klar",
	"encryptTool.errorMessage": "Textverschlüsselung fehlgeschlagen. Bitte versuchen Sie es kurz erneut.",
	"encryptTool.inputLabel": "Roher Text",
	"encryptTool.pageTitle": "Verschlüsselungs-Tool",
	"encryptTool.successMessage": "In die Zwischenablage kopierter verschlüsselter Text.",
	"fileNameControl.urlChangeWarning": "Das Ändern dieses Werts kann zu fehlerhaften Verweisen und Links führen.",
	"fileNameControl.viewReferences": "Klicken Sie auf, um den Inhalt anzuzeigen, der auf diesen Inhalt verweist",
	"fileUpload.chooseFile": "Datei wählen",
	"fileUpload.createPolicy": "The upload file name goes against site policies. Suggested modified file name is: \"{name}\". Would you like to use the suggested name?",
	"fileUpload.policyError": "The upload file name goes against site policies.",
	"fileUpload.selectFileMessage": "Bitte wählen Sie eine Datei zum Hochladen aus",
	"fileUpload.uploadedFile": "Hochgeladene Datei",
	"fileUpload.uploadingFile": "Datei wird hochgeladen",
	"fileUpload.validatingFile": "Validating File",
	"filter.more": "{count, plural, one {...{count} more item} other {...{count} more items}}",
	"filter.noResults": "No results match your query",
	"folder.created": "Folder created successfully",
	"folderBrowserTreeView.invalidPath": "The entered path doesn’t exist.",
	"formEngine.createPolicy": "The {originalPath} path goes against site policies. Suggested modified path is: \"{path}\". Would you like to use the suggested path?",
	"formEngine.inProgressConfirmation": "Another form is currently open & minimized. Please close the current form before opening another",
	"formEngine.policyError": "The {path} path goes against site policies.",
	"formEngine.save": "Save as Draft",
	"formEngine.saveAndClose": "Save & Close",
	"formEngine.saveAndMinimize": "Save & Minimize",
	"formEngine.saveAndPreview": "Save & Preview",
	"formEngine.saveDraftCompleted": "Entwurfsspeicherung abgeschlossen",
	"global.about": "About",
	"globalAppToolbar.toggleSidebar": "Toggle Sidebar",
	"globalConfig.configSaved": "Configuration saved successfully.",
	"globalConfig.confirmHelper": "Discard unsaved changes?",
	"globalConfig.documentError": "Das Dokument enthält Fehler. Suchen Sie auf der Seite des Editors nach Fehlermarkierungen.",
	"globalConfig.unsavedConfirmation": "Sie haben nicht gespeicherte Änderungen, möchten Sie verlassen?",
	"globalConfig.unsavedConfirmationTitle": "Nicht gespeicherte Änderungen",
	"globalConfig.viewSample": "Beispiel anzeigen",
	"globalDialogManager.loadingDialogs": "Loading dialogs...",
	"globalMenu.closeMenu": "Close menu",
	"globalMenu.docs": "Documentation",
	"globalMenu.encryptionTool": "Verschlüsselungs-Tool",
	"globalMenu.globalConfigEntryLabel": "Globale Konfiguration",
	"globalMenu.logConsoleEntryLabel": "Protokollkonsole",
	"globalMenu.loggingLevelsEntryLabel": "Protokollierungsstufen",
	"globalMenu.mySites": "My Sites",
	"globalMenu.noSitesMessage": "No sites to display.",
	"globalMenu.pluginManagementEntryLabel": "Plugin Management",
	"globalMenu.preview1": "Preview 1.0",
	"globalMenu.preview2": "Preview 2.0",
	"globalMenu.recover": "Passwort-Wiederherstellung",
	"globalMenu.removeSite": "Remove site",
	"globalMenu.removeSiteConfirm": "Do you want to remove {site}?",
	"globalMenu.settings": "Kontoverwaltung",
	"globalMenu.siteConfig": "Site Config",
	"globalMenu.tokenManagement": "Token Management",
	"groupEditDialog.createGroup": "Create Group",
	"groupEditDialog.editGroup": "Edit Group",
	"groupEditDialog.groupCreated": "Group created successfully",
	"groupEditDialog.groupDeleted": "Group deleted successfully",
	"groupEditDialog.groupEdited": "Group edited successfully",
	"groupEditDialog.membersAdded": "{count, plural, one {User added successfully} other {Users added successfully}}",
	"groupEditDialog.membersRemoved": "{count, plural, one {User removed successfully} other {Users removed successfully}}",
	"groupsAdmin.displayName": "Anzeigename",
	"groupsAdmin.groupCreated": "{group} created.",
	"groupsAdmin.groupDeleted": "{group} deleted.",
	"groupsAdmin.groupEdited": "{group} edited.",
	"groupsAdmin.maxLengthError": "{field} darf nicht länger als {size} Zeichen sein",
	"groupsAdmin.usereRemoved": "{username} successfully removed from {group}",
	"groupsAdmin.usersAdded": "User(s) successfully added.",
	"groupsGrid.emptyStateMessage": "No Groups Found",
	guestDetectionMessage: guestDetectionMessage$2,
	"historyDialog.back.selectRevision": "Back to history list",
	"historyDialog.confirmRevertBody": "Are you sure you want to revert to {versionTitle}?",
	"historyDialog.confirmRevertTitle": "Revert confirmation",
	"historyDialog.current": "current",
	"historyDialog.headerTitle": "Item History",
	"historyDialog.options.compareTo": "Compare to...",
	"historyDialog.options.compareToCurrent": "Compare to current",
	"historyDialog.options.compareToPrevious": "Compare to previous",
	"historyDialog.options.revertToPrevious": "Revert to <b>previous</b>",
	"historyDialog.options.revertToThisVersion": "Revert to <b>this version</b>",
	"inPageInstances.noResults": "No results found.",
	"inPageInstances.title": "In this Page",
	"internalNameControl.displaySize": "Bildschirmgröße",
	"internalNameControl.label": "Interner Name",
	"internalNameControl.maxLength": "Maximale Länge",
	"item.contentTypeChanged": "Item type changed successfully",
	"item.copied": "{count, plural, one {Item copied to clipboard} other {Items copied to clipboard}}",
	"item.created": "Item created successfully",
	"item.cut": "Item cut successfully",
	"item.delete": "{count, plural, one {The selected item is being deleted and will be removed shortly} other {The selected items are being deleted and will be removed shortly}}",
	"item.duplicated": "Item duplicated successfully",
	"item.edited": "Item updated successfully",
	"item.itemPasteToChildNotAllowed": "Pasting to a child item is not allowed for cut",
	"item.pasted": "Item pasted successfully",
	"item.pasting": "Pasting...",
	"item.publishedNow": "{count, plural, one {The selected item has been pushed to {environment}. It will be visible shortly} other {The selected items has been pushed to {environment}. Them will be visible shortly}}",
	"item.rejected": "{count, plural, one {Item rejected successfully} other {Items rejected successfully}}",
	"item.requestedToPublishNow": "{count, plural, one {The selected item has been requested to be pushed to {environment}} other {The selected items has been requested to be pushed to {environment}}}",
	"item.requestedToSchedulePublish": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.reverted": "Item reverted successfully",
	"item.savedAsDraft": "Item draft saved",
	"item.schedulePublished": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.unlocked": "Item unlocked successfully",
	"itemActions.changeContentType": "Change Type",
	"itemActions.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemActions.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemActions.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemActions.copyDialogTitle": "Copy",
	"itemActions.createController": "New Controller",
	"itemActions.createFolder": "New Folder",
	"itemActions.createTemplate": "New Template",
	"itemActions.deleteController": "Delete Controller",
	"itemActions.deleteTemplate": "Delete Template",
	"itemActions.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemActions.editController": "Edit Controller",
	"itemActions.editTemplate": "Edit Template",
	"itemActions.newContent": "New Content",
	"itemActions.requestPublish": "Request Publish",
	"itemActions.viewForm": "View Form",
	"itemMegaMenu.editedBy": "{edited} {date} {byLabel} {by}",
	"itemMenu.changeContentType": "Change Type",
	"itemMenu.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemMenu.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemMenu.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemMenu.copyDialogTitle": "Copy",
	"itemMenu.createContent": "Create Content",
	"itemMenu.createController": "Create Controller",
	"itemMenu.createFolder": "Create Folder",
	"itemMenu.createTemplate": "Create Template",
	"itemMenu.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemMenu.editController": "Edit Controller",
	"itemMenu.editTemplate": "Edit Template",
	"itemMenu.noPermissions": "No actions available for this item.",
	"itemMenu.renameFolder": "Rename Folder",
	"itemPublishingTarget.live": "Live",
	"itemPublishingTarget.staged": "Staged",
	"itemPublishingTarget.unpublished": "Unpublished",
	"itemState.deleted": "Deleted",
	"itemState.locked": "Locked",
	"itemState.modified": "Modified",
	"itemState.new": "New",
	"itemState.scheduled": "Scheduled",
	"itemState.submitted": "Submitted",
	"itemState.systemProcessing": "System Processing",
	"languages.Maldivian": "Divehi",
	"languages.aa": "Afar",
	"languages.ab": "Abkhazian",
	"languages.ae": "Avestan",
	"languages.af": "Afrikaans",
	"languages.ak": "Akan",
	"languages.am": "Amharic",
	"languages.an": "Aragonese",
	"languages.ar": "Arabic",
	"languages.ar_ae": "Arabic - United Arab Emirates",
	"languages.ar_bh": "Arabic - Bahrain",
	"languages.ar_dz": "Arabic - Algeria",
	"languages.ar_eg": "Arabic - Egypt",
	"languages.ar_iq": "Arabic - Iraq",
	"languages.ar_jo": "Arabic - Jordan",
	"languages.ar_kw": "Arabic - Kuwait",
	"languages.ar_lb": "Arabic - Lebanon",
	"languages.ar_ly": "Arabic - Libya",
	"languages.ar_ma": "Arabic - Morocco",
	"languages.ar_om": "Arabic - Oman",
	"languages.ar_qa": "Arabic - Qatar",
	"languages.ar_sa": "Arabic - Saudi Arabia",
	"languages.ar_sy": "Arabic - Syria",
	"languages.ar_tn": "Arabic - Tunisia",
	"languages.ar_ye": "Arabic - Yemen",
	"languages.as": "Assamese",
	"languages.av": "Avaric",
	"languages.ay": "Aymara",
	"languages.az": "Azerbaijani",
	"languages.az_az": "Azeri - Cyrillic",
	"languages.ba": "Bashkir",
	"languages.be": "Belarusian",
	"languages.bg": "Bulgarian",
	"languages.bh": "Bihari languages",
	"languages.bi": "Bislama",
	"languages.bm": "Bambara",
	"languages.bn": "Bengali - Bangladesh",
	"languages.bo": "Tibetan",
	"languages.br": "Breton",
	"languages.bs": "Bosnian",
	"languages.ca": "Catalan",
	"languages.ce": "Chechen",
	"languages.ch": "Chamorro",
	"languages.co": "Corsican",
	"languages.cr": "Cree",
	"languages.cs": "Czech",
	"languages.cu": "Church Slavic; Slavonic; Old Bulgarian",
	"languages.cv": "Chuvash",
	"languages.cy": "Welsh",
	"languages.da": "Danish",
	"languages.de": "German",
	"languages.de_at": "German - Austria",
	"languages.de_ch": "German - Switzerland",
	"languages.de_de": "German - Germany",
	"languages.de_li": "German - Liechtenstein",
	"languages.de_lu": "German - Luxembourg",
	"languages.dv": "Divehi; Dhivehi; Maldivian",
	"languages.dz": "Dzongkha",
	"languages.ee": "Ewe",
	"languages.el": "Greek",
	"languages.en": "English",
	"languages.en_au": "English - Australia",
	"languages.en_bz": "English - Belize",
	"languages.en_ca": "English - Canada",
	"languages.en_cb": "English - Caribbean",
	"languages.en_gb": "English - Great Britain",
	"languages.en_ie": "English - Ireland",
	"languages.en_in": "English - India",
	"languages.en_jm": "English - Jamaica",
	"languages.en_nz": "English - New Zealand",
	"languages.en_ph": "English - Philippines",
	"languages.en_tt": "English - Trinidad",
	"languages.en_us": "English - United States",
	"languages.en_za": "English - Southern Africa",
	"languages.eo": "Esperanto",
	"languages.es": "Spanish; Castilian",
	"languages.es_ar": "Spanish - Argentina",
	"languages.es_bo": "Spanish - Bolivia",
	"languages.es_cl": "Spanish - Chile",
	"languages.es_co": "Spanish - Colombia",
	"languages.es_cr": "Spanish - Costa Rica",
	"languages.es_do": "Spanish - Dominican Republic",
	"languages.es_ec": "Spanish - Ecuador",
	"languages.es_es": "Spanish - Spain (Traditional)",
	"languages.es_gt": "Spanish - Guatemala",
	"languages.es_hn": "Spanish - Honduras",
	"languages.es_mx": "Spanish - Mexico",
	"languages.es_ni": "Spanish - Nicaragua",
	"languages.es_pa": "Spanish - Panama",
	"languages.es_pe": "Spanish - Peru",
	"languages.es_pr": "Spanish - Puerto Rico",
	"languages.es_py": "Spanish - Paraguay",
	"languages.es_sv": "Spanish - El Salvador",
	"languages.es_uy": "Spanish - Uruguay",
	"languages.es_ve": "Spanish - Venezuela",
	"languages.et": "Estonian",
	"languages.eu": "Basque",
	"languages.fa": "Farsi - Persian",
	"languages.ff": "Fulah",
	"languages.fi": "Finnish",
	"languages.fj": "Fijian",
	"languages.fo": "Faroese",
	"languages.fr": "French",
	"languages.fr_be": "French - Belgium",
	"languages.fr_ca": "French - Canada",
	"languages.fr_ch": "French - Switzerland",
	"languages.fr_fr": "French - France",
	"languages.fr_lu": "French - Luxembourg",
	"languages.fy": "Western Frisian",
	"languages.ga": "Irish",
	"languages.gd": "Gaelic - Scotland",
	"languages.gd_ie": "Gaelic - Ireland",
	"languages.gl": "Galician",
	"languages.gn": "Guarani - Paraguay",
	"languages.gu": "Gujarati",
	"languages.gv": "Manx",
	"languages.ha": "Hausa",
	"languages.he": "Hebrew",
	"languages.hi": "Hindi",
	"languages.ho": "Hiri Motu",
	"languages.hr": "Croatian",
	"languages.ht": "Haitian; Haitian Creole",
	"languages.hu": "Hungarian",
	"languages.hy": "Armenian",
	"languages.hz": "Herero",
	"languages.ia": "Interlingua",
	"languages.id": "Indonesian",
	"languages.ie": "Interlingue; Occidental",
	"languages.ig": "Igbo",
	"languages.ii": "Sichuan Yi; Nuosu",
	"languages.ik": "Inupiaq",
	"languages.io": "Ido",
	"languages.is": "Icelandic",
	"languages.it": "Italian",
	"languages.it_ch": "Italian - Switzerland",
	"languages.it_it": "Italian - Italy",
	"languages.iu": "Inuktitut",
	"languages.ja": "Japanese",
	"languages.jv": "Javanese",
	"languages.ka": "Georgian",
	"languages.kg": "Kongo",
	"languages.ki": "Kikuyu; Gikuyu",
	"languages.kj": "Kuanyama; Kwanyama",
	"languages.kk": "Kazakh",
	"languages.kl": "Kalaallisut; Greenlandic",
	"languages.km": "Khmer",
	"languages.kn": "Kannada",
	"languages.ko": "Korean",
	"languages.kr": "Kanuri",
	"languages.ks": "Kashmiri",
	"languages.ku": "Kurdish",
	"languages.kv": "Komi",
	"languages.kw": "Cornish",
	"languages.ky": "Kirghiz; Kyrgyz",
	"languages.la": "Latin",
	"languages.lb": "Luxembourgish; Letzeburgesch",
	"languages.lg": "Ganda",
	"languages.li": "Limburgan; Limburger; Limburgish",
	"languages.ln": "Lingala",
	"languages.lo": "Lao",
	"languages.lt": "Lithuanian",
	"languages.lu": "Luba-Katanga",
	"languages.lv": "Latvian",
	"languages.mg": "Malagasy",
	"languages.mh": "Marshallese",
	"languages.mi": "Maori",
	"languages.mk": "FYRO Macedonia",
	"languages.ml": "Malayalam",
	"languages.mn": "Mongolian",
	"languages.mr": "Marathi",
	"languages.ms": "Malay",
	"languages.ms_bn": "Malay - Brunei",
	"languages.ms_my": "Malay - Malaysia",
	"languages.mt": "Maltese",
	"languages.my": "Burmese",
	"languages.na": "Nauru",
	"languages.nb": "Bokmål, Norwegian; Norwegian Bokmål",
	"languages.nd": "Ndebele, North; North Ndebele",
	"languages.ne": "Nepali",
	"languages.ng": "Ndonga",
	"languages.nl": "Dutch; Flemish",
	"languages.nl_be": "Dutch - Belgium",
	"languages.nl_nl": "Dutch - Netherlands",
	"languages.nn": "Norwegian Nynorsk; Nynorsk, Norwegian",
	"languages.no": "Norwegian",
	"languages.no_no": "Norwegian - Bokml",
	"languages.nr": "Ndebele, South; South Ndebele",
	"languages.nv": "Navajo; Navaho",
	"languages.ny": "Chichewa; Chewa; Nyanja",
	"languages.oc": "Occitan (post 1500)",
	"languages.oj": "Ojibwa",
	"languages.om": "Oromo",
	"languages.or": "Oriya",
	"languages.os": "Ossetian; Ossetic",
	"languages.pa": "Punjabi",
	"languages.pi": "Pali",
	"languages.pl": "Polish",
	"languages.ps": "Pushto; Pashto",
	"languages.pt": "Portuguese",
	"languages.pt_br": "Portuguese - Brazil",
	"languages.pt_pt": "Portuguese - Portugal",
	"languages.qu": "Quechua",
	"languages.rm": "Raeto-Romance",
	"languages.rn": "Rundi",
	"languages.ro": "Romanian - Romania",
	"languages.ro_mo": "Romanian - Moldova",
	"languages.ru": "Russian",
	"languages.ru_mo": "Russian - Moldova",
	"languages.rw": "Kinyarwanda",
	"languages.sa": "Sanskrit",
	"languages.sb": "Sorbian",
	"languages.sc": "Sardinian",
	"languages.sd": "Sindhi",
	"languages.se": "Northern Sami",
	"languages.sg": "Sango",
	"languages.si": "Sinhala",
	"languages.sk": "Slovak",
	"languages.sl": "Slovenian",
	"languages.sm": "Samoan",
	"languages.sn": "Shona",
	"languages.so": "Somali",
	"languages.sq": "Albanian",
	"languages.sr": "Serbian",
	"languages.sr_sp": "Serbian - Cyrillic",
	"languages.ss": "Swati",
	"languages.st": "Sotho, Southern",
	"languages.su": "Sundanese",
	"languages.sv": "Swedish",
	"languages.sv_fi": "Swedish - Finland",
	"languages.sv_se": "Swedish - Sweden",
	"languages.sw": "Swahili",
	"languages.ta": "Tamil",
	"languages.te": "Telugu",
	"languages.tg": "Tajik",
	"languages.th": "Thai",
	"languages.ti": "Tigrinya",
	"languages.tk": "Turkmen",
	"languages.tl": "Tagalog",
	"languages.tn": "Setsuana",
	"languages.to": "Tonga (Tonga Islands)",
	"languages.tr": "Turkish",
	"languages.ts": "Tsonga",
	"languages.tt": "Tatar",
	"languages.tw": "Twi",
	"languages.ty": "Tahitian",
	"languages.ug": "Uighur; Uyghur",
	"languages.uk": "Ukrainian",
	"languages.ur": "Urdu",
	"languages.uz": "Uzbek",
	"languages.uz_uz": "Uzbek - Cyrillic",
	"languages.ve": "Venda",
	"languages.vi": "Vietnamese",
	"languages.vo": "Volapük",
	"languages.wa": "Walloon",
	"languages.wo": "Wolof",
	"languages.xh": "Xhosa",
	"languages.yi": "Yiddish",
	"languages.yo": "Yoruba",
	"languages.za": "Zhuang; Chuang",
	"languages.zh": "Chinese",
	"languages.zh_cn": "Chinese - China",
	"languages.zh_hk": "Chinese - Hong Kong SAR",
	"languages.zh_mo": "Chinese - Macau SAR",
	"languages.zh_sg": "Chinese - Singapore",
	"languages.zh_tw": "Chinese - Taiwan",
	"languages.zu": "Zulu",
	"launcher.siteSectionTitle": "Site <muted>• {siteName}</muted>",
	"launcherOpenerButton.menuTooltip": "Navigation Menu",
	"launcherOpenerButton.openMenuButtonText": "Open Menu",
	"launcherOpenerButton.signOut": "Sign Out",
	"legacyFormDialog.errorLoadingForm": "An error occurred trying to load the form",
	"legacyFormDialog.loadingForm": "Loading...",
	"legacyFormDialog.title": "Content Form",
	"localeSelectorControl.label": "Locale Selector",
	"localeSelectorControl.requiredError": "Field is Required",
	"logConsoleDetailsDialog.title": "Log Details",
	"logConsoleManagement.noLogs": "No logs found",
	"loggingLevels.changeLevelTo": "Current Level",
	"loggingLevels.currentLevel": "Current Level",
	"loggingLevelsManagement.levelChangedSuccessMessage": "Logging level changed successfully",
	"loginView.dialogTitleText": "Melden Sie sich bei Crafter CMS an",
	"loginView.forgotPasswordButtonLabel": "Haben Sie Ihr Passwort vergessen?",
	"loginView.incorrectCredentialsMessage": "Falscher Benutzername oder falsches Passwort. Bitte versuche es erneut.",
	"loginView.loginButtonLabel": "Einloggen",
	"loginView.recoverYourPasswordBackButtonLabel": "Zurück",
	"loginView.recoverYourPasswordIntroText": "Wenn Ihr Benutzername vorhanden ist, wird Ihnen eine E-Mail mit einem Reset-Link gesendet.",
	"loginView.recoverYourPasswordSuccessMessage": "Wenn \"{username}\" vorhanden ist, wurde eine Wiederherstellungs-E-Mail gesendet",
	"loginView.resetYourPasswordIntroText": "Bitte geben Sie Ihr neues Passwort ein",
	"loginView.usernameTextFieldLabel": "Benutzername",
	"media.card.itemLastEdition": "Edited {time}",
	"media.card.title": "options",
	"navigator.noChildren": "Item has no children",
	"newContentDialog.contentTypeAllLabel": "Show all types",
	"newContentDialog.contentTypeComponentLabel": "Components only",
	"newContentDialog.contentTypePageLabel": "Pages only",
	"newContentDialog.emptyStateMessage": "No Content Types Found",
	"newContentDialog.subtitle": "Choose a content type template for your new content item.",
	"newContentDialog.title": "Create Content",
	"newFolder.folderName": "Folder Name",
	"newFolder.helperText": "Consisting of: letters, numbers, dash (-) and underscore (_).",
	"newFolder.rename": "Provide a new folder name",
	"newFolder.required": "Folder name is required.",
	"newFolder.title": "Create a New Folder",
	"newFolder.title.rename": "Rename Folder",
	"noUiConfigMessageTitle.subtitle": "Add & configure `ui.xml` on your site to show content here.",
	"noUiConfigMessageTitle.title": "Configuration file missing",
	"numericInputControl.childContent": "Minimum",
	"numericInputControl.maximun": "Maximal",
	"numericInputControl.noDecimalsErrMessage": "Dezimalstellen sind für diese Eingabe nicht zulässig.",
	"openToolsPanel.label": "Open tools panel",
	"operations.Add_members": "Add Members",
	"operations.Add_remote": "Add Remote",
	"operations.Approve": "Approve",
	"operations.Approve_scheduled": "Approve Scheduled",
	"operations.Cancel_publishing_package": "Cancel Publishing Package",
	"operations.Create": "Create",
	"operations.Delete": "Delete",
	"operations.Disable": "Disable",
	"operations.Enable": "Enable",
	"operations.Login": "Login",
	"operations.Login_failed": "Login Failed",
	"operations.Logout": "Logout",
	"operations.Move": "Move",
	"operations.Published": "Published",
	"operations.Pull_from_remote": "Pull From Remote",
	"operations.Push_to_remote": "Push To Remote",
	"operations.Reject": "Reject",
	"operations.Remove_cluster_node": "Remove Cluster Dode",
	"operations.Remove_members": "Remove Members",
	"operations.Remove_remote": "Remove Remote",
	"operations.Request_publish": "Request Publish",
	"operations.Revert": "Revert",
	"operations.Start_publisher": "Start Publisher",
	"operations.Stop_publisher": "Stop Publisher",
	"operations.Update": "Update",
	"operations.assetUploadFailed": "Asset Upload failed.",
	"operations.assetUploadStarted": "Asset upload started.",
	"operations.deleteOperationComplete": "Delete operation completed.",
	"operations.deleteOperationFailed": "Delete operation failed.",
	"operations.insertItemOperation": "Insert item operation not implemented.",
	"operations.insertOperationComplete": "Insert component operation completed.",
	"operations.insertOperationFailed": "Insert component operation failed.",
	"operations.moveOperationComplete": "Move operation completed",
	"operations.moveOperationFailed": "Move operation failed.",
	"operations.sortOperationComplete": "Sort operation completed.",
	"operations.sortOperationFailed": "Sort operation failed.",
	"operations.updateOperationComplete": "Update operation completed.",
	"operations.updateOperationFailed": "Update operation failed.",
	"pageBuilder.title": "Page Building",
	"pageExplorerPanel.currentContentItems": "Current Content Items",
	"pageExplorerPanel.loading": "Loading",
	"pageExplorerPanel.rootItemLabel": "Current Content Items",
	"pageExplorerPanel.title": "Page Explorer",
	"pagination.PreviousPage": "Previous page",
	"pagination.nextPage": "Next page",
	"pagination.previousPage": "Previous page",
	"passwordRequirement.fulfillAllReqErrorMessage": "Bitte erfüllen Sie alle Passwortanforderungen.",
	"passwordRequirement.hasLowercase": "Muss mindestens einen Kleinbuchstaben enthalten",
	"passwordRequirement.hasNumbers": "Muss mindestens eine Zahl enthalten",
	"passwordRequirement.hasSpecialChars": "Muss mindestens ein Sonderzeichen {chars}enthalten",
	"passwordRequirement.hasUppercase": "Muss mindestens einen Großbuchstaben enthalten",
	"passwordRequirement.invalidPassword": "Voraussetzungen sind nicht erfüllt",
	"passwordRequirement.maxLength": "Die Länge darf {max} Zeichen nicht überschreiten",
	"passwordRequirement.minLength": "Die Länge muss mindestens {min} Zeichen betragen",
	"passwordRequirement.minMaxLength": "Die Länge muss zwischen {minLength} und {maxLength} Zeichen liegen",
	"passwordRequirement.noBlank": "darf nicht leer sein",
	"passwordRequirement.noSpaces": "Darf keine Leerzeichen enthalten",
	"passwordRequirement.passwordConfirmationMismatch": "Passwörter stimmen nicht überein",
	"passwordRequirement.passwordValidation": "Passwortüberprüfung",
	"passwordRequirement.unnamedGroup": "Zustand nicht beschrieben",
	"passwordRequirement.validPassword": "Voraussetzungen erfüllt",
	"passwordRequirement.validationPassing": "Validierung bestanden",
	"passwordTextField.toggleVisibilityButtonText": "Passwortsichtbarkeit umschalten",
	"pastePolicy.confirm": "The selected {action} target goes against site policies for the destination directory. • Original path: \"{path}\", • Suggested path is: \"{modifiedPath}\". Would you like to use the suggested path?",
	"pastePolicy.error": "The selected {action} target goes against site policies for the destination directory.",
	"pathNavigator.noChildren": "Item has no children",
	"pathNavigator.noItemsAtLocation": "No items at this location",
	"pathNavigator.pathFilterInputPlaceholder": "Filter children of {name}...",
	"pathNavigator.viewChildren": "View children",
	"pathNavigatorTreeItemFilter.placeholder": "Filter children...",
	"pathSelectionDialog.createFolderButtonLabel": "Create Folder",
	"pathSelectionDialog.title": "Select Path",
	"plugin.by": "By",
	"plugin.crafterCMS": "Crafter CMS",
	"plugin.license": "License",
	"plugin.licenseTooltip": "{license} license",
	"plugin.more": "More...",
	"plugin.noDev": "No developer specified.",
	"plugin.use": "Use",
	"plugin.version": "Version",
	"pluginDetails.notCompatible": "Diese Blaupause ist nicht mit Ihrer aktuellen Version von Crafter CMS kompatibel.",
	"pluginManagement.emptyList": "There are no plugins installed",
	"pluginManagement.installationDate": "Installation Date",
	"pluginManagement.listPluginPermission": "You don't have enough permissions to see the list of plugins",
	"pluginManagement.searchPlugin": "Search & install",
	"preview.previewIFrameTitle": "Frame-Vorschau",
	"previewAddressBar.reloadButtonLabel": "Reload this page",
	"previewAssetsPanel.itemsPerPage": "Items per page:",
	"previewAssetsPanel.noResults": " No results found.",
	"previewAssetsPanel.retrieveAssets": "Retrieving Site Assets",
	"previewAssetsPanel.title": "Assets",
	"previewAudiencesPanel.loading": "Retrieving targeting options",
	"previewAudiencesPanel.title": "Audience Targeting",
	"previewBrowseComponentsPanel.chooseContentType": "Please choose a content type.",
	"previewBrowseComponentsPanel.nextPage": "next page",
	"previewBrowseComponentsPanel.noResults": " No results found.",
	"previewBrowseComponentsPanel.previousPage": "previous page",
	"previewBrowseComponentsPanel.selectContentType": "Select content type",
	"previewBrowseComponentsPanel.title": "Browse Components",
	"previewCompatDialog.legacyCompatMessage": "This page is compatible with the previous editing experience. Would you like to go there now?",
	"previewCompatDialog.nextCompatMessage": "This page is compatible with the new editing experience. Would you like to go there now?",
	"previewCompatDialog.rememberChoice": "Remember choice",
	"previewCompatDialog.title": "Preview Compatibility Notice",
	"previewComponentsPanel.browse": "Browse existing",
	"previewComponentsPanel.listDropTargets": "List drop targets",
	"previewComponentsPanel.listInPageInstances": "List in-page instances",
	"previewComponentsPanel.listReceptacles": "List receptacles",
	"previewComponentsPanel.title": "Components",
	"previewContentTypeReceptaclesTool.selectContentType": "Select content type",
	"previewContentTypeReceptaclesTool.title": "{name} Receptacles",
	"previewDropTargetsPanel.chooseContentType": "Please choose a content type.",
	"previewDropTargetsPanel.noResults": "No results found.",
	"previewDropTargetsPanel.selectContentType": "Select content type",
	"previewDropTargetsPanel.title": "Component Drop Targets",
	"previewEditFormTool.editController": "Edit Controller",
	"previewEditFormTool.editTemplate": "Edit Template",
	"previewEditFormTool.openComponentForm": "Edit",
	"previewInPageInstancesPanel.chooseContentType": "Please choose a content type.",
	"previewInPageInstancesPanel.noResults": "No results found.",
	"previewInPageInstancesPanel.selectContentType": "Select content type",
	"previewInPageInstancesPanel.title": "In this Page",
	"previewPageExplorerPanel.loading": "Loading",
	"previewPageExplorerPanel.rootItemLabel": "Current Content Items",
	"previewPageExplorerPanel.title": "Page Explorer",
	"previewReceptaclesPanel.chooseContentType": "Please choose a content type.",
	"previewReceptaclesPanel.noResults": "No results found.",
	"previewReceptaclesPanel.selectContentType": "Select content type",
	"previewReceptaclesPanel.title": "Component Receptacles",
	"previewRubbishBin.dropToTrash": "Drop Here To Trash",
	"previewRubbishBin.itemTrashed": "Trashed!",
	"previewSearchPanel.title": "Search",
	"previewSimulatorPanel.previewWindowSize": "Preview Window Size",
	"previewSimulatorPanel.title": "Device Simulator",
	"previewSimulatorTool.previewWindowSize": "Preview Window Size",
	"previewSimulatorTool.title": "Device Simulator",
	"previewSiteExplorerPanel.title": "Site Explorer",
	"previewToolbar.itemMenu": "Item menu",
	"previewToolbar.quickCreateMenuTooltip": "Quick create menu",
	"previewToolbar.toggleEditMode": "Toggle edit mode",
	"previewTools.choseSiteMessage": "Please choose site",
	"previewTools.noWidgetsMessage": "No tools have been configured",
	"profileSettings.currentPassword": "derzeitiges Passwort",
	"profileSettings.isRequired": "Wird benötigt",
	"profileSettings.languageUpdateFailedWarning": "Sprachaktualisierung ist fehlgeschlagen. Bitte versuchen Sie es vorübergehend erneut.",
	"profileSettings.languageUpdatedSuccessfully": "Die Sprache wurde erfolgreich aktualisiert.",
	"profileSettings.mustMatchPreviousEntry": "Muss mit dem vorherigen Eintrag übereinstimmen",
	"profileSettings.password": "Passwort",
	"profileSettings.unsavedConfirmation": "Du hast nicht gespeicherte Änderungen. Änderungen verwerfen?",
	"profileSettings.unsavedConfirmationTitle": "Nicht gespeicherte Änderungen",
	"publishDialog.approveForPublish": "Zur Veröffentlichung genehmigen",
	"publishDialog.changesInSelection": "Änderungen bei der Auswahl der zu veröffentlichenden Elemente erfordern eine Neuberechnung aller Abhängigkeiten.",
	"publishDialog.differentPublishDateWarning": "<strong>Warnung</strong> Die Elemente, die Sie zur Genehmigung ausgewählt haben, wurden mit unterschiedlichen angeforderten Veröffentlichungsdaten / -zeiten gesendet.",
	"publishDialog.hardDependencies": "Harte Abhängigkeiten",
	"publishDialog.introductoryText": "Ausgewählte Dateien werden veröffentlicht. Harte Abhängigkeiten werden automatisch berücksichtigt. Weiche Abhängigkeiten sind optional und Sie können auswählen, welche einbezogen werden sollen.",
	"publishDialog.itemsToPublish": "Zu veröffentlichende Elemente",
	"publishDialog.loadingDependencies": "Abhängigkeiten werden geladen, bitte warten{ellipsis}",
	"publishDialog.noItemsSelected": "No items have been selected",
	"publishDialog.publishingScheduleTitle": "Ausgewählte Artikelplanung",
	"publishDialog.showAllDependencies": "Alle Abhängigkeiten anzeigen",
	"publishDialog.softDependencies": "Weiche Abhängigkeiten",
	"publishDialog.submissionCommentFieldError": "Bitte schreibe einen Kommentar.",
	"publishDialog.submissionMandatory": "Vorlage obligatorisch",
	"publishDialog.submissionOptional": "Einreichung Optional",
	"publishForm.emailLabel": "Email me the reviewer's feedback",
	"publishForm.environmentError": "Publishing targets load failed.",
	"publishForm.environmentLoading": "Loading...",
	"publishForm.environmentRetry": "retry",
	"publishForm.environmentSuccess": "Success",
	"publishForm.publishingTargetDropdownLabel": "Publishing Target",
	"publishForm.scheduling": "Scheduling",
	"publishForm.schedulingLater": "Later",
	"publishForm.schedulingNow": "Now",
	"publishForm.submissionComment": "Submission Comment",
	"publishOnDemand.formPathExample": "e.g. /site/website/about/index.xml",
	"publishOnDemand.formPathExamplePreview": "You may enter multiple separate by comma",
	"publishOnDemand.formPathLabel": "Path to Publish",
	"publishOnDemand.formPathLabelPreview": "Commit or tag IDs",
	"publishOnDemand.pathModeDescription": "Publish changes made in Studio via the UI",
	"publishOnDemand.publishingTarget": "Publishing Target",
	"publishOnDemand.submissionComment": "Submission Comment",
	"publishOnDemand.tagsModeDescription": "Publish changes made via direct git actions against the repository or pulled from a remote repository",
	"publishOnDemand.title": "Publish on Demand",
	"publishing.bulkPublishNote": "Bulk publish should be used to publish changes made in Studio via the UI. For changes made via direct git actions, use the \"Publish by...\" feature.",
	"publishing.busy": "Beschäftigt",
	"publishing.idle": "Im Leerlauf",
	"publishing.publishByNote": "\"Publish by...\" feature must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use \"Bulk Publish\".",
	"publishing.queued": "In Warteschlange",
	"publishing.ready": "Bereit",
	"publishing.started": "Gestartet",
	"publishing.stopped": "Gestoppt",
	"publishingDashboard.BLOCKED": "Verstopft",
	"publishingDashboard.CANCELLED": "Abgebrochen",
	"publishingDashboard.COMPLETED": "Abgeschlossen",
	"publishingDashboard.PROCESSING": "wird bearbeitet",
	"publishingDashboard.READY_FOR_LIVE": "Bereit fürs Leben",
	"publishingDashboard.all": "Alles",
	"publishingDashboard.bulkPublishStarted": "Bulk Publish process has been started.",
	"publishingDashboard.cancelItemButtonText": "Stornieren",
	"publishingDashboard.cancelSelected": "Auswahl abbrechen",
	"publishingDashboard.comment": "Kommentar",
	"publishingDashboard.commentNotProvided": "(Einreichungskommentar nicht bereitgestellt)",
	"publishingDashboard.confirmAllHelper": "Status für alle ausgewählten Elemente auf \"Abgebrochen\" setzen?",
	"publishingDashboard.confirmHelperText": "Artikelstatus auf \"Abgebrochen\" setzen?",
	"publishingDashboard.fetchPackagesFiles": "Paketdateien abrufen",
	"publishingDashboard.filesList": "Dateiliste",
	"publishingDashboard.filteredBy": "Angezeigt: {state, select, all {} other {: {state}.}} {environment, select, all {} other {{environment} veröffentlichungsziel.}} {path, select, none {} other {Gefiltert nach {path}}}",
	"publishingDashboard.filters": "Filter",
	"publishingDashboard.gitNote": "Publishing by commit or tag must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use please <a>publish by path</a>.",
	"publishingDashboard.next": "Nächste Seite",
	"publishingDashboard.no": "Nein",
	"publishingDashboard.noPackagesSubtitle": "Versuchen Sie, Ihre Abfrage zu ändern",
	"publishingDashboard.noPackagesTitle": "Keine Pakete gefunden",
	"publishingDashboard.packagesSelected": "{count, plural, one {{count} Paket ausgewählt} other {{count} Pakete ausgewählt}}",
	"publishingDashboard.pathExpression": "Pfadausdruck",
	"publishingDashboard.previous": "Vorherige Seite",
	"publishingDashboard.publishSuccess": "Published successfully.",
	"publishingDashboard.scheduled": "Geplant für <b>{schedule, date, medium} {schedule, time, short}</b> von <b>{approver}</b>",
	"publishingDashboard.selectAll": "Alles auf dieser Seite auswählen",
	"publishingDashboard.state": "Zustand",
	"publishingDashboard.status": "Der Status ist {environment} für {state} Veröffentlichungsziel",
	"publishingDashboard.studioNote": "Publishing by path should be used to publish changes made in Studio via the UI. For changes made via direct git actions, please <a>publish by commit or tag</a>.",
	"publishingDashboard.warning": "This will force publish all items that match the pattern requested including their dependencies, and it may take a long time depending on the number of items. Please make sure that all modified items (including potentially someone's work in progress) are ready to be published before continuing.",
	"publishingDashboard.yes": "Ja",
	"publishingQueue.title": "Publishing Queue",
	"publishingStatusTile.isDisabledMessage": "The publisher is disabled.",
	"publishingStatusTile.lockOwnerDisplayMessage": "Locked by {lockOwner}",
	"publishingStatusTile.lockTTLMessage": "TTL {lockTTL}",
	"publishingStatusTile.publishingStatus": "Publishing Status",
	"quickCreateBtnLabel.label": "Open quick create menu",
	"quickCreateMenu.learnMore": "Learn More",
	"quickCreateMenu.learnMoreError": "Quick create has not been configured. Please contact your system administrator.",
	"quickCreateMenu.sectionTitle": "Quick Create",
	"quickCreateMenu.title": "New Content",
	"register.dropTargetsNotFound": "There are no drop targets for {contentType} components",
	"register.notFound": "{name} is not visible or was not registered by developers",
	"rejectDialog.brokenLinks": "Broken Links",
	"rejectDialog.cancel": "Cancel",
	"rejectDialog.continue": "Reject",
	"rejectDialog.incorrectBranding": "Incorrect Branding",
	"rejectDialog.notApproved": "Not Approved",
	"rejectDialog.nsoa": "Needs Section Owner's Approval",
	"rejectDialog.rejectCommentLabel": "Rejection Comment",
	"rejectDialog.rejectionReason": "Rejection Reason",
	"rejectDialog.submittedBy": "Submitted By",
	"rejectDialog.typos": "Typos",
	"remoteRepositories.title": "Remote Repositories",
	"reposAdmin.pendingCommit": "Repo enthält Dateien, für die ein Commit aussteht. Weitere Informationen finden Sie unter Repository-Status.",
	"reposAdmin.repositoriesNote": "Do not use Studio as a git merge and conflict resolution platform. All merge conflicts should be resolved upstream before getting pulled into Studio.",
	"reposAdmin.unreachableRemote": "Remote \"{name}\" ist derzeit nicht erreichbar.",
	"reposAdmin.unstagedFilesMessage": "In Ihrem Repository befinden sich nicht bereitgestellte Dateien.",
	"requestPublishDialog.cancel": "Cancel",
	"requestPublishDialog.submit": "Submit",
	"requestPublishDialog.title": "Request Publish",
	"resetPasswordDialog.helperText": "Set a new password for \"{user}\" user",
	"resetPasswordDialog.passwordUpdated": "Password updated successfully",
	"resetPasswordDialog.title": "Reset Password",
	"resetView.resetPasswordConfirmFieldPlaceholderLabel": "Passwort bestätigen",
	"resetView.resetPasswordError": "Fehler beim Zurücksetzen des Passworts. Token ist möglicherweise ungültig oder abgelaufen.",
	"resetView.resetPasswordFieldPlaceholderLabel": "Neues Kennwort",
	"resetView.resetPasswordInvalidToken": "Ungültiges oder abgelaufenes Token.",
	"resetView.resetPasswordSuccess": "Passwort erfolgreich zurückgesetzt. Bitte melden Sie sich mit Ihrem neuen Passwort an.",
	"rteControlMessages.chooseSource": "Choose a Source",
	"rteControlMessages.dropImageUploaded": "{title} was successfully uploaded.",
	"rteControlMessages.escapeScripts": "Escape-Skripte",
	"rteControlMessages.incompatibleDatasource": "Die zum Durchsuchen konfigurierte Datenquelle ist nicht mit dem Rich-Text-Editor kompatibel. Bitte wenden Sie sich an Ihren Administrator.",
	"rteControlMessages.noDatasourcesConfigured": "No sources configured for this editor.",
	"rteControlMessages.requiredField": "Feld ist erforderlich",
	"search.acceptSelection": "Accept Selection",
	"search.changeQuery": "Try changing your query.",
	"search.filtersActive": " • <span>Filters Active</span>",
	"search.goToPreview": "Go to page",
	"search.itemsPerPage": "Items per page:",
	"search.noPermissions": "No permissions available.",
	"search.noResults": "No Results Were Found.",
	"search.resultsCaption": "{from}-{to} of {count} results {keywordLength, plural, =0 {}other{ for <b>“{keyword}”</b>}} ",
	"search.resultsSelected": "{count, plural, one {{count} item selected} other {{count} items selected}}",
	"search.selectAll": "Select all on this page",
	"search.selectionCount": "{count} selected",
	"search.videoProcessed": "Video is being processed, preview will be available when processing is complete",
	"searchAhead.noResults": "No Results.",
	"searchBar.placeholder": "Search...",
	"searchFilter.above": "Above {value}{unit}",
	"searchFilter.asc": "Ascending",
	"searchFilter.byRelevanceAscMessage": "Less relevant first",
	"searchFilter.byRelevanceDescMessage": "Most relevant first",
	"searchFilter.clearFilters": "Clear Filters",
	"searchFilter.contentType": "Content Type",
	"searchFilter.desc": "Descending",
	"searchFilter.internalName": "Name",
	"searchFilter.lastEditDate": "Last Edit Date",
	"searchFilter.mimeType": "MIME Type",
	"searchFilter.searchIn": "Search in:",
	"searchFilter.size": "Content Size",
	"searchFilter.sortBy": "Sort By",
	"searchFilter.under": "Under {value}{unit}",
	"searchToolBar.changeViewButtonTooltip": "Change view",
	"searchToolBar.showHideFilters": "Show/hide filters",
	"settingsPanel.editMode": "Edit Mode",
	"settingsPanel.editModeHelperText": "Enable In-context editing, highlighting editable zones as you hover on them.",
	"settingsPanel.highlightAllZones": "Highlight All Zones",
	"settingsPanel.highlightMode": "Highlight Mode",
	"settingsPanel.highlightModeHelperText": "When \"highlight movable\" is active, only content items you can move around drop targets highlight.",
	"settingsPanel.highlightMovable": "Highlight Movable",
	"sharedContentDS.sharedContent": "Geteilter Inhalt",
	"site.deleted": "Site deleted successfully",
	"siteCard.helperText": "Delete \"{site}\" site?",
	"siteComponentDS.componentPath": "Komponentenpfad",
	"siteComponentDS.dataType": "Datentyp",
	"siteComponentDS.date": "Datum",
	"siteComponentDS.float": "Gleitkommazahl",
	"siteComponentDS.html": "Datentyp",
	"siteComponentDS.integer": "Ganze Zahl",
	"siteComponentDS.label": "Taxonomie-Auswahl",
	"siteComponentDS.required": "Erforderlich",
	"siteComponentDS.siteComponent": "Site-Komponente",
	"siteComponentDS.string": "String",
	"siteComponentDS.unableLoad": "Das System konnte {file}nicht laden.",
	"siteConfig.controlNotAvailable": "Steuerung nicht verfügbar",
	"siteConfig.insertExpressionMessage": "Ausdruck einfügen",
	"siteConfig.invalidNumber": "\"{value}\" ist keine gültige Nummer.",
	"siteConfig.landingMessage": "Bitte wählen Sie links ein Werkzeug aus.",
	"siteConfig.loadModuleError": "Unable to load \"{tool}\". Check Site tools configuration.",
	"siteConfig.postfixes": "Suffixe",
	"siteConfig.switchToMessage": "Wechseln Sie zu {type}",
	"siteConfig.toolNotFound": "\"{tool}\" tool not found.",
	"siteConfigurationManagement.activeEnvironment": "{environment} Environment",
	"siteConfigurationManagement.confTabAWSProfiles": "AWS Profiles",
	"siteConfigurationManagement.confTabAWSProfilesDesc": "AWS profiles configuration file.",
	"siteConfigurationManagement.confTabAssetProcessing": "Asset Processing",
	"siteConfigurationManagement.confTabAssetProcessingDesc": "Asset processing configuration file.",
	"siteConfigurationManagement.confTabBlobStores": "Blob Stores",
	"siteConfigurationManagement.confTabBlobStoresDesc": "Blob stores configuration file.",
	"siteConfigurationManagement.confTabBoxProfiles": "Box Profiles",
	"siteConfigurationManagement.confTabBoxProfilesDesc": "Box profiles configuration file.",
	"siteConfigurationManagement.confTabCMISConfiguration": "CMIS Configuration",
	"siteConfigurationManagement.confTabCMISConfigurationDesc": "This files configures 0 or more CMIS-capable repositories as data-sources for content authors to pick from",
	"siteConfigurationManagement.confTabCodeEditorConf": "Code Editor Configuration",
	"siteConfigurationManagement.confTabCodeEditorConfDesc": "Defines Code Editor configurations",
	"siteConfigurationManagement.confTabConfDesc": "Defines this list of configurations",
	"siteConfigurationManagement.confTabConfigurations": "Configurations",
	"siteConfigurationManagement.confTabContextualNavigationConf": "Contextual Navigation Configuration",
	"siteConfigurationManagement.confTabContextualNavigationConfDesc": "Defines modules on the site contextual navigation bar",
	"siteConfigurationManagement.confTabDependencyResolverConf": "Dependency Resolver Configuration",
	"siteConfigurationManagement.confTabDependencyResolverConfDesc": "This file configures what file paths Crafter considers a dependency and how they should be extracted.",
	"siteConfigurationManagement.confTabDevEnvironmentConf": "Dev Environment Configuration",
	"siteConfigurationManagement.confTabDevEnvironmentConfDesc": "Defines a dev environment configuration",
	"siteConfigurationManagement.confTabEndpointsConf": "Endpoints Configuration",
	"siteConfigurationManagement.confTabEndpointsConfDesc": "Defines a list of end points available",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfiguration": "Engine Site Application Context",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationDesc": "Site application context used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationLive": "Engine Site Application Context - Live",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationPreview": "Engine Site Application Context - Preview",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationStaging": "Engine Site Application Context - Staging",
	"siteConfigurationManagement.confTabEngineSiteConfiguration": "Engine Site Configuration",
	"siteConfigurationManagement.confTabEngineSiteConfigurationDesc": "Site configuration used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteConfigurationLive": "Engine Site Configuration - Live",
	"siteConfigurationManagement.confTabEngineSiteConfigurationPreview": "Engine Site Configuration - Preview",
	"siteConfigurationManagement.confTabEngineSiteConfigurationStaging": "Engine Site Configuration - Staging",
	"siteConfigurationManagement.confTabEngineUrlRewriteConf": "Engine URL Rewrite Configuration (XML Style)",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfDesc": "This file configures site properties used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfLive": "Engine URL Rewrite Configuration (XML Style) - Live",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfPreview": "Engine URL Rewrite Configuration (XML Style) - Preview",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfStaging": "Engine URL Rewrite Configuration (XML Style) - Staging",
	"siteConfigurationManagement.confTabEnvironmentConfiguration": "Environment Configuration",
	"siteConfigurationManagement.confTabEnvironmentConfigurationDesc": "This file configures the environments Crafter Studio can publish to",
	"siteConfigurationManagement.confTabMimeTypes": "Mime Types",
	"siteConfigurationManagement.confTabMimeTypesDesc": "This file configures the mime types icons overrides for this site/blueprint.",
	"siteConfigurationManagement.confTabNotificationConf": "Notification Configuration",
	"siteConfigurationManagement.confTabNotificationConfDesc": "Defines a list of UI messages",
	"siteConfigurationManagement.confTabPermissionsMappings": "Permissions Mapping",
	"siteConfigurationManagement.confTabPermissionsMappingsDesc": "Defines a map of permissions and paths",
	"siteConfigurationManagement.confTabPersonasConf": "Personas Configuration",
	"siteConfigurationManagement.confTabPersonasConfDesc": "Defines a list of personas available to assume in preview",
	"siteConfigurationManagement.confTabPreviewAssetConf": "Preview Asset Configuration",
	"siteConfigurationManagement.confTabPreviewAssetConfDesc": "Defines a list of editable assets associated with XML contents",
	"siteConfigurationManagement.confTabPreviewComponentsConf": "Preview Components Configuration",
	"siteConfigurationManagement.confTabPreviewComponentsConfDesc": "Defines a list of components that can be created dynamically in preview",
	"siteConfigurationManagement.confTabPreviewPanelConf": "Preview Panel Configuration",
	"siteConfigurationManagement.confTabProxyConfig": "Proxy Config",
	"siteConfigurationManagement.confTabProxyConfigDesc": "This file configures the proxy servers for preview.",
	"siteConfigurationManagement.confTabRTEConf": "RTE (TinyMCE 2) Configuration",
	"siteConfigurationManagement.confTabRTEConfDesc": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.confTabRTEtMCE5Conf": "RTE (TinyMCE 5) Configuration",
	"siteConfigurationManagement.confTabRTEtMCE5ConfDesc": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.confTabRoleMappings": "Role Mappings",
	"siteConfigurationManagement.confTabRoleMappingsDesc": "Defines a list of roles available in site",
	"siteConfigurationManagement.confTabSidebarConf": "Sidebar Configuration",
	"siteConfigurationManagement.confTabSidebarConfDesc": "Defines modules on the sidebar",
	"siteConfigurationManagement.confTabSiteConf": "Site Config Tools",
	"siteConfigurationManagement.confTabSiteConfDesc": "Defines the list of admin tools available",
	"siteConfigurationManagement.confTabSiteConfiguration": "Site Configuration",
	"siteConfigurationManagement.confTabSiteConfigurationDesc": "Defines the general site configuration",
	"siteConfigurationManagement.confTabSitePolicyConf": "Site Policy Configuration",
	"siteConfigurationManagement.confTabSitePolicyConfDesc": "Defines policies to validate content operations",
	"siteConfigurationManagement.confTabTargetingConfiguration": "Targeting Configuration",
	"siteConfigurationManagement.confTabTargetingConfigurationDesc": "This file configures the targeting system of Crafter Studio to help provide Crafter Engine with fake user properties that help drive the targeting system",
	"siteConfigurationManagement.confTabTargetsConf": "Targets Configuration",
	"siteConfigurationManagement.confTabTargetsConfDesc": "Defines a list of targets used for form datasource",
	"siteConfigurationManagement.confTabTranslationConf": "Translation Configuration",
	"siteConfigurationManagement.confTabTranslationConfDesc": "Defines supported languages and how to resolve them",
	"siteConfigurationManagement.confTabUiConf": "User Interface Configuration",
	"siteConfigurationManagement.confTabUiConfDesc": "Defines the widgets shown in the user interface",
	"siteConfigurationManagement.confTabWebDAVProfiles": "WebDAV Profiles",
	"siteConfigurationManagement.confTabWebDAVProfilesDesc": "WebDAV profiles configuration file.",
	"siteConfigurationManagement.confTabWorkflowConf": "Workflow Configuration",
	"siteConfigurationManagement.confTabWorkflowConfDesc": "Defines workflows available in the system",
	"siteConfigurationManagement.confTabconfTabPreviewPanelConfDesc": "Defines a list of tools available in preview",
	"siteConfigurationManagement.environment": "Active Environment: {environment}",
	"siteConfigurationManagement.hideSample": "Hide Sample",
	"siteConfigurationManagement.history": "History",
	"siteConfigurationManagement.selectConfigFile": "Please choose a config file from the left.",
	"siteConfigurationManagement.unsavedChangesSubtitle": "You have unsaved changes, do you want to leave?",
	"siteConfigurationManagement.unsavedChangesTitle": "Unsaved changes",
	"siteConfigurationManagement.viewSample": "View Sample",
	"siteExplorerPanel.emptyMessage": "No widgets are configured to show on the site explorer.",
	"siteExplorerPanel.siteConfig": "Site Config",
	"siteExplorerPanel.title": "Site Explorer",
	"siteExplorerPanel.unsupportedItemsPreset": "Some items in the site explorer config are not supported and won't show.",
	"siteSearch.noOptionsAvailable": "No options available",
	"siteSearch.unknownErrorSearching": "An error occurred with the search service.",
	"siteSwitcherSelected.siteSelectorNoSiteSelected": "Choose site",
	"siteTools.title": "Site Tools",
	"sites.ChangeView": "Change view",
	"sites.createGroup": "Create Group",
	"sites.createSite": "Create Site",
	"sitesAdmin.siteUpdated": "Site Updated.",
	"sitesGrid.emptyStateMessage": "No Sites Found",
	"sitesGrid.siteDeleted": "Site deleted successfully",
	"targetingDialog.setNow": "jetzt einstellen",
	"tokenManagement.clearSelected": "Clear Selected ({count})",
	"tokenManagement.copied": "Token copied to clipboard",
	"tokenManagement.createToken": "Create Token",
	"tokenManagement.created": "Token created and copied to clipboard",
	"tokenManagement.deleted": "{count, plural, one {Token deleted} other {The selected tokens were deleted}}",
	"tokenManagement.deletedSelected": "Delete Selected",
	"tokenManagement.emptyTokens": "There are no tokens, click on Create Token to add a new one",
	"tokenManagement.helperText": "Delete \"{label}\" token?",
	"tokenManagement.updated": "Token updated",
	"toolbarGlobalNav.openMenuButtonText": "Open Menu",
	"toolbarGlobalNav.signOut": "Sign Out",
	"transcodedVideoPickerControl.label": "Transcodiertes Video",
	"transferList.addDisabledTooltip": "Select items to add from the left",
	"transferList.addToTarget": "Add selected",
	"transferList.emptyListMessage": "All users are members of this group",
	"transferList.removeDisabledTooltip": "Select items to remove from the right",
	"transferList.removeFromTarget": "Remove selected",
	"transferList.targetEmptyStateMessage": "No members on this group",
	"transferListColumn.noResults": "No results, try to change the query",
	"unlockPublisherDialog.dialogCopy": "Bitte bestätigen Sie die Freigabe der Herausgebersperre",
	"unlockPublisherDialog.dialogTitle": "Bestätigen Sie die Publisher-Entsperrung",
	"unlockPublisherDialog.typeConfirmPassword": "Geben Sie das Wort \"<b>{password}</b>\" ein, um zu bestätigen, dass Sie die Auswirkungen verstehen und fortfahren möchten.",
	"unlockPublisherDialog.unlockCompleteMessage": "Publisher-Sperre erfolgreich freigegeben.",
	"unlockPublisherDialog.unlockFailedMessage": "Fehler beim Aufheben der Herausgebersperre.",
	"uploadDialog.title": "Upload",
	"uploadDialog.uploadInProgress": "Uploads are still in progress. Leaving this page would stop the pending uploads. Are you sure you wish to leave?",
	"uploadDialog.uploadInProgressConfirmation": "Uploads are still in progress. Closing this modal would stop the pending uploads. Are you sure you wish to close it?",
	"uppyCore.noDuplicates": "Cannot add the duplicate file “%'{fileName}'”, it already exists",
	"uppyDashboard.acceptAll": "Accept all changes",
	"uppyDashboard.addMore": "Add more",
	"uppyDashboard.addingMoreFiles": "Adding more files",
	"uppyDashboard.cancelPending": "Cancel pending",
	"uppyDashboard.clearCompleted": "Clear completed",
	"uppyDashboard.rejectAll": "Reject all changes",
	"uppyDashboard.removeFile": "Remove file",
	"uppyDashboard.renamingFromTo": "Renaming from %'{from}' to %'{to}'",
	"uppyDashboard.validateAndRetry": "Accept changes and upload",
	"userGroupMembershipEditor.addOrRemoveError": "Error modifying user group(s). Please try again momentarily.",
	"userGroupMembershipEditor.addToGroupsSuccess": "\"{user}\" added to {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userGroupMembershipEditor.removeFromGroupsSuccess": "\"{user}\" removed from {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userInfoDialog.close": "Close",
	"userInfoDialog.deleteUser": "Delete user",
	"userInfoDialog.externallyManaged": "Managed externally",
	"userInfoDialog.helperText": "Delete \"{username}\" user?",
	"userInfoDialog.noRoles": "No roles",
	"userInfoDialog.resetPassword": "Reset password",
	"userInfoDialog.siteName": "Site name",
	"userInfoDialog.siteRoles": "Roles per site",
	"userInfoDialog.userDeleted": "User deleted successfully",
	"userInfoDialog.userDetails": "User Details",
	"userInfoDialog.userDisabled": "User disabled successfully",
	"userInfoDialog.userEnabled": "User enabled successfully",
	"userInfoDialog.userUpdated": "User updated successfully",
	"usersAdmin.firstName": "Vorname",
	"usersAdmin.lastName": "Nachname",
	"usersAdmin.maxLengthError": "{field} darf nicht länger als {size} Zeichen sein",
	"usersAdmin.passwordChangeSuccessMessage": "Password changed successfully",
	"usersAdmin.userCreated": "{username} created.",
	"usersAdmin.userDeleted": "{username} deleted.",
	"usersAdmin.userEdited": "{username} edited.",
	"usersAdmin.userName": "Nutzername",
	"usersGrid.createUser": "Create User",
	"usersGrid.emptyStateMessage": "No Users Found",
	"validations.maxCount": "The max number of items is {maxCount}",
	"validations.maxLength": "The max length ({maxLength}) reached",
	"validations.minCount": "The min number of items is {minCount}",
	"validations.required": "{field} is required",
	"viewVersionDialog.headerTitle": "Viewing item version",
	"wcmRootFolder.pathNotFound": "Ordner {path} nicht gefunden.",
	"widgetComponent.componentNotFoundSubtitle": "Check ui config & make sure you've installed the plugins that contain the desired components.",
	"widgetComponent.componentNotFoundTitle": "Component {id} not found.",
	"widgetComponent.pluginLoadFailedMessageBody": "With {info} & component id \"{id}\".",
	"widgetComponent.pluginLoadFailedMessageTitle": "Plugin load failed",
	"withEmptyState.defaultEmptyStateMessage": "No results found",
	words: words$2,
	"words.about": "About",
	"words.accept": "Accept",
	"words.account": "Account",
	"words.apply": "Apply",
	"words.approve": "Approve",
	"words.asset": "Asset",
	"words.audit": "Audit",
	"words.back": "Back",
	"words.base": "Base",
	"words.browse": "Durchsuche",
	"words.by": "By",
	"words.cancel": "Stornieren",
	"words.clear": "klar",
	"words.close": "Schließen",
	"words.cluster": "Cluster",
	"words.compact": "Compact",
	"words.component": "Component",
	"words.configuration": "Configuration",
	"words.confirm": "Bestätigen",
	"words.content": "Content",
	"words.continue": "Continue",
	"words.copy": "Copy",
	"words.create": "Create",
	"words.created": "Created",
	"words.custom": "Brauch",
	"words.cut": "Cut",
	"words.dashboard": "Dashboard",
	"words.defaults": "Standardeinstellungen",
	"words.delete": "Delete",
	"words.dependencies": "Dependencies",
	"words.description": "Description",
	"words.desktop": "Desktop",
	"words.details": "Details",
	"words.disabled": "Disabled",
	"words.dismiss": "Dismiss",
	"words.documentation": "Documentation",
	"words.done": "Erledigt",
	"words.duplicate": "Duplicate",
	"words.edit": "Edit",
	"words.edited": "Edited",
	"words.email": "E-mail",
	"words.enabled": "Enabled",
	"words.error": "Error",
	"words.expiration": "Expiration",
	"words.expired": "Expired",
	"words.files": "Files",
	"words.filter": "Filter",
	"words.firstName": "First name",
	"words.from": "From",
	"words.global": "Global",
	"words.go": "Go",
	"words.groups": "Groups",
	"words.height": "Height",
	"words.history": "History",
	"words.id": "Id",
	"words.install": "Install",
	"words.installed": "Installed",
	"words.item": "Item",
	"words.label": "Label",
	"words.language": "Sprache",
	"words.lastName": "Last name",
	"words.level": "Level",
	"words.loading": "Loading",
	"words.locales": "Locales",
	"words.logger": "Logger",
	"words.login": "Login",
	"words.logout": "Logout",
	"words.max": "Max",
	"words.members": "Members",
	"words.menu": "Menu",
	"words.message": "Message",
	"words.min": "Min",
	"words.minimize": "Minimize",
	"words.name": "Name",
	"words.never": "Never",
	"words.no": "Nein",
	"words.notification": "Benachrichtigung",
	"words.ok": "Ok",
	"words.options": "Options",
	"words.page": "Page",
	"words.parameters": "Parameters",
	"words.password": "Password",
	"words.paste": "Paste",
	"words.path": "Path",
	"words.pause": "Pause",
	"words.phone": "Phone",
	"words.presets": "Voreinstellungen",
	"words.preview": "Preview",
	"words.publish": "Publish",
	"words.publishing": "Publishing",
	"words.queued": "Queued",
	"words.ready": "Ready",
	"words.reason": "Grund",
	"words.refresh": "Refresh",
	"words.reject": "Reject",
	"words.relevance": "Relevance",
	"words.reload": "Reload",
	"words.remove": "Remove",
	"words.rename": "Rename",
	"words.reset": "Zurücksetzen",
	"words.revert": "Revert",
	"words.review": "Review",
	"words.roles": "Roles",
	"words.save": "sparen",
	"words.schedule": "Schedule",
	"words.script": "Script",
	"words.scripts": "Scripts",
	"words.search": "Search",
	"words.select": "Select",
	"words.selected": "Selected",
	"words.settings": "Settings",
	"words.site": "Site",
	"words.sites": "Sites",
	"words.start": "Start",
	"words.state": "State",
	"words.status": "Status",
	"words.stay": "Stay",
	"words.stop": "Stop",
	"words.stopped": "Stopped",
	"words.submit": "Einsenden",
	"words.system": "System",
	"words.tablet": "Tablet",
	"words.template": "Template",
	"words.templates": "Templates",
	"words.thread": "Thread",
	"words.timestamp": "Timestamp",
	"words.to": "To",
	"words.translation": "Translation",
	"words.type": "Type",
	"words.unknown": "Unknown",
	"words.unlock": "Unlock",
	"words.update": "Aktualisieren",
	"words.upload": "Hochladen",
	"words.url": "Url",
	"words.username": "Username",
	"words.users": "Users",
	"words.validating": "Validating",
	"words.value": "Value",
	"words.version": "Version",
	"words.view": "View",
	"words.warning": "Warning",
	"words.width": "Width",
	"words.yes": "Ja",
	"workflowCancellation.cancel": "Cancel",
	"workflowCancellation.continue": "Continue",
	"workflowCancellation.subtitle": "Edit will cancel all items that are in the scheduled deployment batch. Please review the list of files below and chose “Continue” to cancel workflow and edit or “Cancel” to remain in your dashboard.",
	"workflowCancellation.title": "Warning: Workflow Cancellation",
	"workflowStates.title": "Workflow States"
};

var guestDetectionMessage$3 = "미리보기 응용 프로그램과의 통신이 중단되었습니다. Studio는 계속해서 연결을 다시 시도합니다.";
var words$3 = "Save";
var ko = {
	"CreateUserDialog.title": "Create User",
	"GlobalMenu.AboutUs": "약",
	"GlobalMenu.Audit": "Audit",
	"GlobalMenu.AuditEntryLabel": "심사",
	"GlobalMenu.ClusterEntryLabel": "클러스터",
	"GlobalMenu.GroupsEntryLabel": "여러 떼",
	"GlobalMenu.Sites": "Sites",
	"GlobalMenu.SitesEntryLabel": "사이트",
	"GlobalMenu.UsersEntryLabel": "사용자",
	"InstallPluginDialog.empty": "No plugins found.",
	"InstallPluginDialog.title": "Search & install plugin",
	"PluginManagement.pluginInstalled": "Plugin installed successfully",
	"about.buildDate": "Build Date",
	"about.buildNumber": "Build Number",
	"about.studioVersionNumber": "Studio Version Number",
	"aboutView.attribution": "Crafter CMS는 여러가지 <a>Open Source Software Projects</a>와 연동하여 기능합니다",
	"accountManagement.changeHelperText": "Once your password has been successfully updated, you'll be required to login again.",
	"accountManagement.changeLanguage": "Change Language",
	"accountManagement.changePassword": "Change Password",
	"accountManagement.confirmPassword": "Confirm Password",
	"accountManagement.currentPassword": "Current Password",
	"accountManagement.languageUpdated": "Language preference changed",
	"accountManagement.newPassword": "New Password",
	"accountManagement.passwordChanged": "Password changed successfully",
	"accountManagement.passwordInvalid": "Password is invalid.",
	"accountManagement.passwordMatch": "Must match the previous password.",
	"adminConfigurations.allEncrypted": "표시된 모든 항목은 이미 암호화되어 있습니다. `encrypted` 속성은 암호화로 표시 될 빈 값을 가져야합니다 (예: `encrypted=\"\"`)",
	"adminConfigurations.configSaved": "Configuration saved successfully.",
	"adminConfigurations.documentError": "The document contains errors. Check for error markers on side of the editor.",
	"adminConfigurations.encryptHinPt1": "태그의 내용을 암호화하려면 (1) 원하는 태그를 암호화하도록 표시 한 다음 (2) \"표시된 암호화\"버튼을 클릭하십시오.",
	"adminConfigurations.encryptHinPt2": "(1) <bold>`encrypted = \"\"`</bold>속성을 추가하여 태그를 암호화하도록 표시하십시오.",
	"adminConfigurations.encryptHinPt3": "예 : {lt}accessKey encrypted = \"\"{gt}AKIAIOSFODNN7EXAMPLE{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt4": "(2) <bold>`표시된 암호화`</bold> 버튼을 클릭하면 태그는 다음과 같아야합니다.",
	"adminConfigurations.encryptHinPt5": "{lt}accessKey encrypted = \"true\"{gt}${lc}enc : xeJW23SomeEncryptedValuesListedHere{rc}{lt}/ accessKey{gt}",
	"adminConfigurations.encryptHinPt6": "생각해 내다:",
	"adminConfigurations.encryptHinPt7": "암호화 할 값 (텍스트)을 직접 보유하는 태그에만`encrypted =””속성을 사용하십시오.",
	"adminConfigurations.encryptHinPt8": "실제로 XML 청크를 암호화하지 않으려면 다른 태그가 포함 된 태그에 속성을 추가하지 마십시오.",
	"adminConfigurations.encryptHinPt9": "암호화 결과를 수동으로 조작하지 마십시오.",
	"adminConfigurations.encryptMarked": "표시된 암호화",
	"adminConfigurations.encryptionSingleDetail": "{br}\"{name}\" with value \"{value}\"",
	"adminConfigurations.noEncryptItems": "XML 마크 업에서 암호화 할 항목이 없습니다. 암호화를 표시하려면`encrypted = \"\"`속성을 추가하십시오.",
	"adminConfigurations.pendingEncryption": "{itemCount, plural, one {Tag Name {tags} is marked for encryption but hasn't}other {Tag names: {tags} {br} are marked for encryption but haven't}} been encrypted, please trigger encryption or remove the tag flagging.",
	"adminConfigurations.xmlContainsErrors": "XML 문서에 오류가 있습니다 : {errors}",
	"approveDialog.subtitle": "Selected files will go live upon submission. Hard dependencies are automatically submitted with the main items. You may choose whether to submit or not soft dependencies",
	"approveDialog.title": "Approve for Publish",
	"asyncVideoPlayer.videoBeingProcessed": "Video is being processed, preview will be available when processing is complete",
	"audiencesPanel.apply": "Apply",
	"audiencesPanel.defaults": "Defaults",
	"audiencesPanelControl.optionSelectorNoOptionSelected": "Select Option",
	"auditGrid.allOrigins": "All Origins",
	"auditGrid.allSites": "All Sites",
	"auditGrid.allUsers": "All Users",
	"auditGrid.clearFilters": "Clear filters",
	"auditGrid.clusterNode": "Cluster Node",
	"auditGrid.emptyStateMessage": "No Logs Found",
	"auditGrid.name": "Name",
	"auditGrid.noParameters": "No parameters",
	"auditGrid.operation": "Operation",
	"auditGrid.origin": "Origin",
	"auditGrid.parameters": "Parameters",
	"auditGrid.showParameters": "Show parameters",
	"auditGrid.siteName": "Site",
	"auditGrid.targetType": "Target Type",
	"auditGrid.targetValue": "Target Value",
	"auditGrid.timestamp": "Timestamp",
	"auditGrid.timezone": "Timezone",
	"auditGrid.username": "Username",
	"auditGridFilterPopover.allOperations": "All Operations",
	"auditGridFilterPopover.filterByCluster": "Filter by Cluster Node",
	"auditGridFilterPopover.filterByOperations": "Filter by Operations",
	"auditGridFilterPopover.filterByOrigin": "Filter by Origin",
	"auditGridFilterPopover.filterBySite": "Filter by Site",
	"auditGridFilterPopover.filterByTarget": "Filter by Target Value",
	"auditGridFilterPopover.filterByUser": "Filter by User",
	"authMonitor.dialogTitleText": "세션 만료",
	"authMonitor.incorrectPasswordMessage": "잘못된 비밀번호. 다시 시도하십시오.",
	"authMonitor.logOutButtonLabel": "로그 아웃",
	"authMonitor.openSSOLoginButtonLabel": "로그인 양식 열기",
	"authMonitor.passwordTextFieldLabel": "암호",
	"authMonitor.postSSOLoginMismatchMessage": "이 세션의 소유자와 다른 사용자로 로그인 한 것 같습니다. 보안상의 이유로 이제 화면이 새로 고쳐집니다.",
	"authMonitor.sessionExpiredMessage": "기간이 만료되었습니다. 다시 로그인하십시오.",
	"authMonitor.ssoOpenPopupMessage": "팝업이 차단되지 않았는지 확인하십시오. 로그인하면이 창으로 돌아와서 아래의 '재개'버튼을 클릭하십시오.",
	"authMonitor.usernameTextFieldLabel": "사용자 이름",
	"authMonitor.validateSessionButtonLabel": "다시 시작하다",
	"blueprint.by": "으로",
	"blueprint.crafterCMS": "Crafter CMS",
	"blueprint.license": "특허",
	"blueprint.licenseTooltip": "{license} 라이센스",
	"blueprint.more": "더...",
	"blueprint.noDev": "개발자를 지정하지 않았습니다.",
	"blueprint.use": "용도",
	"blueprint.version": "번역",
	"browseCMIS.cloningCMIS": "CMIS 자산 복제",
	"browseCMIS.cmis": "CMIS",
	"browseSearchMessages.lookUpChildError": "Unable to lookup child form callback for search: {searchId}",
	"browseSearchMessages.lookUpParentError": "Unable to lookup parent context for search: {searchId}",
	"bulkUpload.cancelAll": "모두 취소",
	"bulkUpload.dropHere": "여기에 파일을 놓거나 <span>찾아보기</span>",
	"bulkUpload.filesProgression": "{start}/{end}",
	"bulkUpload.subtitle": "바탕 화면에서 원하는 공간을 아래 공간에 놓습니다.",
	"bulkUpload.title": "일괄 업로드",
	"bulkUpload.uploadInProgress": "업로드가 아직 진행 중입니다. 이 페이지를 떠나면 보류중인 업로드가 중지됩니다. 떠나시겠습니까?",
	"bulkUploadConfirmDialogMessages.description": "여전히 대량 업로드가 진행 중입니다. 한 번에 하나의 일괄 업로드 만 실행할 수 있습니다.",
	"bulkUploadConfirmDialogMessages.title": "업로드 진행 중",
	"changeContentTypeDialog.emptyStateMessage": "No Content Types Found",
	"changeContentTypeDialog.subtitle": "The following starter templates are available for use within this section.",
	"changeContentTypeDialog.title": "Choose Content Type",
	"checkboxGroupControl.datasource": "데이터 소스",
	"checkboxGroupControl.horizontal": "호라이즌",
	"checkboxGroupControl.listDirection": "목록 방향",
	"checkboxGroupControl.readonly": "읽기 전용",
	"checkboxGroupControl.showSelectAll": "\"모두 선택\"표시",
	"checkboxGroupControl.vertical": "수직선",
	"childContentDS.childContent": "아동 콘텐츠 (더 이상 사용되지 않음)",
	"clusterAdmin.clusterDeleted": "{cluster} deleted.",
	"clusterGrid.authType": "Auth Type",
	"clusterGrid.confirmDeleteCluster": "Delete this cluster?",
	"clusterGrid.deleteCluster": "Delete cluster",
	"clusterGrid.emptyStateMessage": "No Clusters Found",
	"clusterGrid.localAddress": "Local Address",
	"clusterGrid.remoteName": "Remote Name",
	"clusterManagement.clusterDeleted": "Cluster deleted successfully",
	"codeEditor.confirm": "닫기 확인",
	"codeEditor.inProgressConfirmation": "Another editor is currently open & minimized. Please close the current editor before opening another",
	"codeEditor.insertCode": "Insert Code",
	"codeEditor.localesConfirmBody": "The template for the locale you selected does not exist. Do you want to create it now?",
	"codeEditor.localesConfirmTitle": "Create Template",
	"codeEditor.localesHelperText": "Select the locale for which to create/edit a template. Locales, like 'en' will cover sub-locales like 'en_us' or 'en_uk'.",
	"codeEditor.localesSnackBarTitle": "Template Created. Do you want to copy the base template?",
	"codeEditor.saveAndClose": "Save & Close",
	"codeEditor.saveAndMinimize": "Save & Minimize",
	"codeEditor.saved": "Save successful",
	"codeEditor.stay": "아니,있어",
	"common.authentication": "입증",
	"common.back": "뒤로",
	"common.craftercms": "Crafter CMS",
	"common.developer": "개발자",
	"common.license": "특허",
	"common.marketplace": "시장",
	"common.moreInfo": "더 많은 정보",
	"common.password": "암호",
	"common.privateKey": "개인 키",
	"common.remoteName": "힘내 원격 이름",
	"common.searchEngine": "검색 엔진",
	"common.selectAll": "모두 선택",
	"common.toggleSidebarTooltip": "Toggle sidebar",
	"common.token": "토큰",
	"common.use": "용도",
	"common.userName": "사용자 이름",
	"common.usernameAndPassword": "사용자 이름 및 비밀번호",
	"common.version": "번역",
	"common.website": "웹 사이트",
	"compareVersionsDialog.back.selectRevision": "Back to select revision",
	"compareVersionsDialog.headerSubtitleCompare": "Select a revision to compare",
	"compareVersionsDialog.headerSubtitleCompareTo": "Select a revision to compare to “{selectedA}”",
	"compareVersionsDialog.headerTitle": "Compare item versions",
	"compareVersionsDialog.pleaseContentItem": "Please content item",
	"componentsPanel.emptyStateMessage": "No components found",
	"componentsPanel.emptyStateMessageSubtitle": "Communicate with your developers to create the required components in the system.",
	"componentsPanel.suspenseStateMessage": "Retrieving Page Model",
	"configurationSamplePreviewDialog.appendContent": "Append after current content",
	"configurationSamplePreviewDialog.replaceContent": "Replace current content",
	"configurationSamplePreviewDialog.title": "Sample File",
	"configurationSamplePreviewDialog.useSampleContent": "Use Sample Content",
	"contentLocalization.mark": "Mark for Translation",
	"contentLocalization.title": "Content Localization",
	"contentType.RTEConfiguration": "RTE 구성",
	"contentType.autoGrow": "자동 성장",
	"contentType.contenTypeWarningMessage": "어린이 콘텐츠 데이터 소스는 Crafter CMS에서 단계적으로 중단되었습니다. 여러 페이지 나 구성 요소간에 공유해야하는 구성 요소의 경우 공유 컨텐트를 대신 사용하십시오. 이 컨텐츠 객체에만 속하는 구성 요소의 경우 내장 컨텐츠를 사용하십시오.",
	"contentType.continueEditing": "계속 편집",
	"contentType.dependsOn": "This property depends on \"{dependency}\"",
	"contentType.enableSpellCheck": "맞춤법 검사 사용",
	"contentType.fileManager": "파일 관리자",
	"contentType.fileNameErrorMessage": "컨텐츠 유형에는 파일 이름이 필요합니다. 이 컨텐츠 유형 정의에 \"파일 이름\"또는 \"자동 파일 이름\"제어를 추가하십시오.",
	"contentType.flatTitleError": "필드 및 데이터 소스의 모든 제목을 작성하십시오.",
	"contentType.forceBRNewLines": "br 새 줄 강제",
	"contentType.forcePNewLines": "강제 p 태그 줄 바꿈",
	"contentType.forceRootBlockP": "루트 블록 차단 p 태그",
	"contentType.height": "신장",
	"contentType.idError": "변수 이름을 입력하십시오 :",
	"contentType.imageManager": "이미지 관리자",
	"contentType.internalNameErrorMessage": "이 컨텐츠 유형에는 내부 이름이 필요합니다. 이 컨텐츠 유형 정의에 \"내부 이름\"컨트롤을 추가하십시오.",
	"contentType.noTemplateAssoc": "이 컨텐츠 유형과 연관된 템플리트가 없습니다. 저장을 클릭하여 저장 조작을 진행하거나 계속을 클릭하여 컨텐츠 유형 (기본 컨텐츠 유형 특성 아래)을 템플리트로 업데이트하십시오.",
	"contentType.notice": "주의",
	"contentType.saveFailed": "저장 실패",
	"contentType.supportedChannels": "지원되는 채널",
	"contentType.useChildContent": "더 이상 사용되지 않는 컨트롤 사용",
	"contentType.useEmbeddedContent": "임베디드 컨텐츠 사용",
	"contentType.useSharedContent": "공유 컨텐츠 사용",
	"contentType.videoManager": "비디오 매니저",
	"contentType.width": "폭",
	"contextMenu.emptyOptionsMessage": "No options available to display.",
	"controlsCommonMessages.escapeContent": "Escape Content",
	"copyItems.cancel": "Cancel",
	"copyItems.copy": "Copy",
	"copyItems.deselectAll": "Deselect All",
	"copyItems.selectAll": "Select All",
	"copyTokenDialog.helperText": "Token created successfully. Please copy the token and store it securely as you won’t be able to see it’s value again.",
	"copyTokenDialog.title": "Access Token Created",
	"craftercms.codeEditor.loadingForm": "Loading...",
	"craftercms.codeEditor.title": "Code Editor",
	"craftercms.ice.audiences.loading": "Retrieving targeting options",
	"craftercms.ice.audiences.title": "잠재 고객 타겟팅",
	"craftercms.ice.browseComponents.chooseContentType": "Please choose a content type.",
	"craftercms.ice.browseComponents.loading": "Loading",
	"craftercms.ice.browseComponents.nextPage": "next page",
	"craftercms.ice.browseComponents.noResults": " No results found.",
	"craftercms.ice.browseComponents.previousPage": "previous page",
	"craftercms.ice.browseComponents.selectContentType": "Select content type",
	"craftercms.ice.browseComponents.title": "Browse components",
	"craftercms.pages.option.noLocales": "The site has no locales declared.",
	"craftercms.pages.option.terminateSelection": "Terminate Selection",
	"craftercms.pages.widget.itemsSelected": "{count, plural, one {{count} Item selected} other {{count} Items selected}}",
	"createFileDialog.controller": "New Controller",
	"createFileDialog.createPolicy": "The supplied name goes against site policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFileDialog.fileName": "File Name",
	"createFileDialog.fileNameRequired": "File name is required.",
	"createFileDialog.helperText": "Consisting of letters, numbers, dot (.), dash (-) and underscore (_).",
	"createFileDialog.openOnSuccess": "Open file",
	"createFileDialog.openOnSuccessTip": "Open for edit after creation",
	"createFileDialog.placeholder": "Please type a name",
	"createFileDialog.policyError": "The supplied name goes against site policies.",
	"createFileDialog.template": "New Template",
	"createFolder.createPolicy": "The supplied name goes against site policies. Suggested modified name is: \"{name}\". Would you like to use the suggested name?",
	"createFolder.placeholder": "Please type a folder name",
	"createFolder.policyError": "The supplied name goes against site policies.",
	"createSiteDialog.additionalOptions": "추가 옵션",
	"createSiteDialog.authentication": "입증",
	"createSiteDialog.authenticationNoRequired": "인증 불필요 (공개 URL)",
	"createSiteDialog.blueprintParameters": "블루 프린트 파라미터",
	"createSiteDialog.blueprintStrategy": "청사진에서 작성",
	"createSiteDialog.branch": "힘내 지점",
	"createSiteDialog.cantStart": "사이트 이름은 0, 대시 (-) 또는 밑줄 (_)로 시작할 수 없습니다.",
	"createSiteDialog.changeQuery": "검색어를 변경하거나 전체 카탈로그를 찾아보십시오.",
	"createSiteDialog.chooseCreationStrategy": "제작 전략 선택 : 기존 Git 리포지토리에서 시작하거나 가장 적합한 청사진을 기반으로 생성하십시오.",
	"createSiteDialog.clone_remoteBranch_label": "사이트는 리포지토리의 해당 분기를 복제하여 생성됩니다. 나중에 분기간에 전환 할 수도 있습니다.",
	"createSiteDialog.clone_remoteName_label": "가져올 소스 저장소를 참조 할 리모콘의 이름을 지정하십시오. 일반적으로 \"업스트림\"또는 \"원산지\"라고합니다.",
	"createSiteDialog.clone_url_label": "복제 할 자식 저장소 URL입니다.",
	"createSiteDialog.createAsOrphan": "원격 저장소에서 사이트를 고아로 작성 (git history 없음)",
	"createSiteDialog.createAsOrphanHelpText": "고아로 사이트를 만들면 소스 자식 저장소에서 사이트를 분리하고 모든 기록을 제거합니다.",
	"createSiteDialog.createInBackground": "백그라운드에서 생성",
	"createSiteDialog.createSite": "사이트 만들기",
	"createSiteDialog.creatingSite": "사이트 만들기",
	"createSiteDialog.creationStrategy": "창조 전략",
	"createSiteDialog.description": "기술",
	"createSiteDialog.descriptionMaxLength": "최대 길이 : {maxLength} 자",
	"createSiteDialog.dialogCloseMessage": "양식에 입력 한 데이터는 닫을 때 손실됩니다.",
	"createSiteDialog.dialogCloseTitle": "닫기 확인",
	"createSiteDialog.finish": "끝",
	"createSiteDialog.gitBlueprintDescription": "기존의 원격 git 리포지토리에서 Crafter CMS 프로젝트를 기반으로 새 사이트를 만듭니다.",
	"createSiteDialog.gitBlueprintName": "원격 Git 리포지토리",
	"createSiteDialog.gitStrategy": "기존 원격 git repo clone",
	"createSiteDialog.idExist": "The ID already exists.",
	"createSiteDialog.nameAndDescription": "사이트 이름 및 설명",
	"createSiteDialog.nameExist": "이름이 이미 존재합니다.",
	"createSiteDialog.noBlueprints": "청사진이없는 곳",
	"createSiteDialog.noDescription": "설명이 제공되지 않았습니다",
	"createSiteDialog.pleaseWait": "사이트가 생성되는 동안 잠시 기다려주십시오.",
	"createSiteDialog.plugin": "Blueprint",
	"createSiteDialog.privateBlueprints": "개인 청사진",
	"createSiteDialog.privateKey": "개인 키",
	"createSiteDialog.publicMarketplace": "공공 시장",
	"createSiteDialog.remoteBranch": "힘내 지점",
	"createSiteDialog.remoteName": "힘내 원격 이름",
	"createSiteDialog.remoteURL": "힘내 레포 URL",
	"createSiteDialog.repoUrl": "힘내 레포 URL",
	"createSiteDialog.required": "{name} 이 필요합니다.",
	"createSiteDialog.review": "리뷰",
	"createSiteDialog.reviewSite": "설정 요약 검토 및 사이트 생성",
	"createSiteDialog.sandboxBranch": "샌드 박스 브랜치",
	"createSiteDialog.showIncompatible": "호환되지 않는 플러그인 표시",
	"createSiteDialog.siteFormat": "최대 길이 : 50 자, 구성 : 소문자, 숫자 및 대시 (-)",
	"createSiteDialog.siteId": "사이트 ID",
	"createSiteDialog.siteInfo": "사이트 정보",
	"createSiteDialog.siteName": "Site Name",
	"createSiteDialog.token": "토큰",
	"createSiteDialog.useDefaultValue": "기본값을 사용하십시오",
	"createSiteDialog.userNameAndPassword": "사용자 이름 및 비밀번호",
	"createTokenDialog.expiresHelperNeverText": "Switch off to never expire.",
	"createTokenDialog.expiresHelperText": "Switch on to set an expiration.",
	"createTokenDialog.expiresLabel": "Expire Token",
	"createTokenDialog.helperText": "Type a name for the new token. The token will be created by the server and shown to you after. Store it securely as you won’t be able to see it’s value again.",
	"createTokenDialog.title": "Create Access Token",
	"createUserDialog.emailRequired": "Email is required.",
	"createUserDialog.firstName": "First Name",
	"createUserDialog.firstNameRequired": "First Name is required.",
	"createUserDialog.invalidEmail": "Email is invalid.",
	"createUserDialog.lastName": "Last Name",
	"createUserDialog.lastNameRequired": "Last Name is required.",
	"createUserDialog.passwordInvalid": "Password is invalid.",
	"createUserDialog.passwordMatch": "Must match the previous password.",
	"createUserDialog.passwordRequired": "Password is required.",
	"createUserDialog.passwordVerification": "Password Verification",
	"createUserDialog.usernameRequired": "Username is required.",
	"dashboardWidgetsMessages.publishingTarget": "게시 대상",
	"dateTime.ordinals": "{day, selectordinal, one {#st} two {#nd} few {#rd} other {#th}}",
	"datetimepicker.dateInvalidMessage": "Invalid Date.",
	"datetimepicker.datePlaceholder": "Date",
	"datetimepicker.timeInvalidMessage": "Invalid Time.",
	"datetimepicker.timePlaceholder": "Time",
	"deleteContentTypeDialog.contentTypeDeleteFailedMessage": "Error deleting content type",
	"deleteContentTypeDialog.contentTypeDeletedMessage": "Content type deleted successfully",
	"deleteContentTypeDialog.headerSubtitle": "Please confirm the deletion of \"{name}\"",
	"deleteContentTypeDialog.headerTitle": "Delete Content Type",
	"deleteContentTypeDialog.reviewDependenciesMessage": "Please review and confirm all of content type dependencies that will be deleted.",
	"deleteContentTypeDialog.submitButton": "Delete",
	"deleteContentTypeDialog.typeConfirmPassword": "Type the word \"<b>{password}</b>\" to confirm the deletion of \"{name}\" and all it's dependencies.",
	"deleteDialog.brokenItems": " 참조가 깨질 것입니다",
	"deleteDialog.cancel": "Cancel",
	"deleteDialog.childItemsText": "아동 용품",
	"deleteDialog.deleteItems": "항목 삭제",
	"deleteDialog.dependentItems": "종속 품목",
	"deleteDialog.headerSubTitle": "Selected items will be deleted along with their child items. Please review dependent items before deleting as these will end-up with broken link references.",
	"deleteDialog.headerTitle": "Delete",
	"deleteDialog.maxCharacters": "Max {maxLength} characters",
	"deleteDialog.submissionCommentFieldError": "제출 의견을 작성하십시오.",
	"deleteDialog.submissionCommentLabel": "Submission Comment",
	"deleteDialog.submit": "Delete",
	"deleteDialog.updatingDependents": "Updating dependents, please wait...",
	"deleteDialog.willGetDeleted": " 삭제됩니다",
	"dependenciesDialog.allDeps": "Show all dependencies",
	"dependenciesDialog.assets": "Assets only",
	"dependenciesDialog.code": "Code only",
	"dependenciesDialog.contentItems": "Content items only",
	"dependenciesDialog.dependencies": "Dependencies",
	"dependenciesDialog.dependsOn": "Items that depend on selected item",
	"dependenciesDialog.dependsOnMe": "Dependencies of selected item",
	"dependenciesDialog.edit": "Edit",
	"dependenciesDialog.emptyDependantsMessage": "{itemName} has no dependencies",
	"dependenciesDialog.emptyDependenciesMessage": "Nothing depends on {itemName}",
	"dependenciesDialog.headerTitle": "Content Item Dependencies",
	"dependenciesDialog.history": "History",
	"dragAndDropMessages.componentNotWelcomeWithinDropZone": "드롭 존은이 유형의 구성 요소를 지원하지 않습니다. 콘텐츠 모델을 확인하십시오.",
	"dragAndDropMessages.contentTypeNotFound": "템플릿에서 콘텐츠 유형 ID를 찾을 수 없습니다. 드래그 앤 드롭이 손상됩니다. docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html에 자세한 정보가 있습니다.",
	"dragAndDropMessages.embeddedComponentsDeleteChildNotSupported": "포함 된 놓기 영역 구성 요소에서 구성 요소를 삭제하는 것은 아직 지원되지 않습니다. 양식을 사용하여 내용을 편집하십시오.",
	"dragAndDropMessages.embeddedComponentsDndNotSupported": "아직 지원되지 않는 내장 구성 요소를 끌어다 놓습니다. 양식을 사용하여 내용을 편집하십시오.",
	"dragAndDropMessages.embeddedComponentsDragWithinParentOnly": "이 릴리스에서는 포함 된 구성 요소를 현재 상위 내에서만 끌 수 있습니다. 양식을 사용하여 내용을 편집하십시오.",
	"dragAndDropMessages.moveOutEmbeddedComponentsNotSupported": "임베디드 드롭 존 구성 요소에서 구성 요소를 이동하는 것은 아직 지원되지 않습니다. 양식을 사용하여 내용을 편집하십시오.",
	"dragAndDropMessages.objectIdNotFound": "개체 ID가 없습니다. 드래그 앤 드롭이 손상됩니다. docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html에 자세한 정보가 있습니다.",
	"dragAndDropMessages.pathNotFound": "경로가 없습니다. 드래그 앤 드롭이 손상됩니다. docs.craftercms.org/en/3.1/system-administrators/upgrade/index.html에 자세한 정보가 있습니다.",
	"dropTargetsMessages.allowEmbedded": "Allow Embedded",
	"dropTargetsMessages.allowShared": "Allow Shared",
	"dropTargetsMessages.baseBrowsePath": "Base Browse Path",
	"dropTargetsMessages.baseRepositoryPath": "Base Repository Path",
	"dropTargetsMessages.browseExisting": "Browse existing",
	"dropTargetsMessages.contentTypes": "Content Types",
	"dropTargetsMessages.createNewEmbedded": "Create new embedded",
	"dropTargetsMessages.createNewShared": "Create new shared",
	"dropTargetsMessages.dropTargets": "Drop Targets",
	"dropTargetsMessages.enableBrowse": "Enable Browse",
	"dropTargetsMessages.enableSearch": "Enable Search",
	"dropTargetsMessages.searchExisting": "Search existing components",
	"dropTargetsMessages.tags": "Tags",
	"editGroupDialog.close": "Close",
	"editGroupDialog.deleteGroup": "Delete group",
	"editGroupDialog.editGroupMembers": "Edit Group Members",
	"editGroupDialog.groupDetails": "Group Details",
	"editGroupDialog.groupMemberHelperText": "Group members are editable after creation",
	"editGroupDialog.helperText": "Delete \"{name}\" group?",
	"editSiteDialog.cancel": "Cancel",
	"editSiteDialog.notEditable": "The site id is not editable",
	"editSiteDialog.siteDescription": "Site Description",
	"editSiteDialog.siteId": "Site ID",
	"editSiteDialog.siteName": "Site Name",
	"editSiteDialog.siteNameRequired": "Site Name is required.",
	"editSiteDialog.sitenameExists": "The name already exist.",
	"editSiteDialog.title": "Edit Site",
	"embeddedContentDS.embeddedContent": "임베디드 컨텐츠",
	"embeddedLegacyFormMessages.openContentFormFailedError": "An error occurred opening the content form. Please try again momentarily. Contact the administrator if the error persists.",
	"emptyUiConfigMessageTitle.subtitle": "Nothing is set to be shown here.",
	"emptyUiConfigMessageTitle.title": "Configuration is empty",
	"encryptTool.buttonText": "텍스트 암호화",
	"encryptTool.clearResultButtonText": "명확한",
	"encryptTool.errorMessage": "텍스트 암호화에 실패했습니다. 잠시 후 다시 시도하십시오.",
	"encryptTool.inputLabel": "원시 텍스트",
	"encryptTool.pageTitle": "암호화 도구",
	"encryptTool.successMessage": "암호화 된 텍스트가 클립 보드에 복사되었습니다.",
	"fileNameControl.urlChangeWarning": "이 값을 변경하면 참조 및 링크가 손상 될 수 있습니다.",
	"fileNameControl.viewReferences": "이 내용을 참조하는 내용을 보려면",
	"fileUpload.chooseFile": "파일을 선택",
	"fileUpload.createPolicy": "The upload file name goes against site policies. Suggested modified file name is: \"{name}\". Would you like to use the suggested name?",
	"fileUpload.policyError": "The upload file name goes against site policies.",
	"fileUpload.selectFileMessage": "업로드 할 파일을 선택하십시오",
	"fileUpload.uploadedFile": "업로드 된 파일",
	"fileUpload.uploadingFile": "파일 업로드",
	"fileUpload.validatingFile": "Validating File",
	"filter.more": "{count, plural, one {...{count} more item} other {...{count} more items}}",
	"filter.noResults": "No results match your query",
	"folder.created": "Folder created successfully",
	"folderBrowserTreeView.invalidPath": "The entered path doesn’t exist.",
	"formEngine.createPolicy": "The {originalPath} path goes against site policies. Suggested modified path is: \"{path}\". Would you like to use the suggested path?",
	"formEngine.inProgressConfirmation": "Another form is currently open & minimized. Please close the current form before opening another",
	"formEngine.policyError": "The {path} path goes against site policies.",
	"formEngine.save": "Save as Draft",
	"formEngine.saveAndClose": "Save & Close",
	"formEngine.saveAndMinimize": "Save & Minimize",
	"formEngine.saveAndPreview": "Save & Preview",
	"formEngine.saveDraftCompleted": "초안 저장 완료",
	"global.about": "About",
	"globalAppToolbar.toggleSidebar": "Toggle Sidebar",
	"globalConfig.configSaved": "Configuration saved successfully.",
	"globalConfig.confirmHelper": "Discard unsaved changes?",
	"globalConfig.documentError": "문서에 오류가 있습니다. 편집기 측면에서 오류 마커를 확인합니다.",
	"globalConfig.unsavedConfirmation": "저장하지 않은 변경 사항이 있습니다. 종료 하시겠습니까?",
	"globalConfig.unsavedConfirmationTitle": "저장되지 않은 변경 사항",
	"globalConfig.viewSample": "샘플보기",
	"globalDialogManager.loadingDialogs": "Loading dialogs...",
	"globalMenu.closeMenu": "Close menu",
	"globalMenu.docs": "Documentation",
	"globalMenu.encryptionTool": "암호화 도구",
	"globalMenu.globalConfigEntryLabel": "글로벌 구성",
	"globalMenu.logConsoleEntryLabel": "로그 콘솔",
	"globalMenu.loggingLevelsEntryLabel": "로깅 수준",
	"globalMenu.mySites": "My Sites",
	"globalMenu.noSitesMessage": "No sites to display.",
	"globalMenu.pluginManagementEntryLabel": "Plugin Management",
	"globalMenu.preview1": "Preview 1.0",
	"globalMenu.preview2": "Preview 2.0",
	"globalMenu.recover": "비밀번호 복구",
	"globalMenu.removeSite": "Remove site",
	"globalMenu.removeSiteConfirm": "Do you want to remove {site}?",
	"globalMenu.settings": "계정 관리",
	"globalMenu.siteConfig": "Site Config",
	"globalMenu.tokenManagement": "Token Management",
	"groupEditDialog.createGroup": "Create Group",
	"groupEditDialog.editGroup": "Edit Group",
	"groupEditDialog.groupCreated": "Group created successfully",
	"groupEditDialog.groupDeleted": "Group deleted successfully",
	"groupEditDialog.groupEdited": "Group edited successfully",
	"groupEditDialog.membersAdded": "{count, plural, one {User added successfully} other {Users added successfully}}",
	"groupEditDialog.membersRemoved": "{count, plural, one {User removed successfully} other {Users removed successfully}}",
	"groupsAdmin.displayName": "이름 표시하기",
	"groupsAdmin.groupCreated": "{group} created.",
	"groupsAdmin.groupDeleted": "{group} deleted.",
	"groupsAdmin.groupEdited": "{group} edited.",
	"groupsAdmin.maxLengthError": "{field} 은 {size} 자보다 길 수 없습니다",
	"groupsAdmin.usereRemoved": "{username} successfully removed from {group}",
	"groupsAdmin.usersAdded": "User(s) successfully added.",
	"groupsGrid.emptyStateMessage": "No Groups Found",
	guestDetectionMessage: guestDetectionMessage$3,
	"historyDialog.back.selectRevision": "Back to history list",
	"historyDialog.confirmRevertBody": "Are you sure you want to revert to {versionTitle}?",
	"historyDialog.confirmRevertTitle": "Revert confirmation",
	"historyDialog.current": "current",
	"historyDialog.headerTitle": "Item History",
	"historyDialog.options.compareTo": "Compare to...",
	"historyDialog.options.compareToCurrent": "Compare to current",
	"historyDialog.options.compareToPrevious": "Compare to previous",
	"historyDialog.options.revertToPrevious": "Revert to <b>previous</b>",
	"historyDialog.options.revertToThisVersion": "Revert to <b>this version</b>",
	"inPageInstances.noResults": "No results found.",
	"inPageInstances.title": "In this Page",
	"internalNameControl.displaySize": "디스플레이 크기",
	"internalNameControl.label": "내부 이름",
	"internalNameControl.maxLength": "최대 길이",
	"item.contentTypeChanged": "Item type changed successfully",
	"item.copied": "{count, plural, one {Item copied to clipboard} other {Items copied to clipboard}}",
	"item.created": "Item created successfully",
	"item.cut": "Item cut successfully",
	"item.delete": "{count, plural, one {The selected item is being deleted and will be removed shortly} other {The selected items are being deleted and will be removed shortly}}",
	"item.duplicated": "Item duplicated successfully",
	"item.edited": "Item updated successfully",
	"item.itemPasteToChildNotAllowed": "Pasting to a child item is not allowed for cut",
	"item.pasted": "Item pasted successfully",
	"item.pasting": "Pasting...",
	"item.publishedNow": "{count, plural, one {The selected item has been pushed to {environment}. It will be visible shortly} other {The selected items has been pushed to {environment}. Them will be visible shortly}}",
	"item.rejected": "{count, plural, one {Item rejected successfully} other {Items rejected successfully}}",
	"item.requestedToPublishNow": "{count, plural, one {The selected item has been requested to be pushed to {environment}} other {The selected items has been requested to be pushed to {environment}}}",
	"item.requestedToSchedulePublish": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.reverted": "Item reverted successfully",
	"item.savedAsDraft": "Item draft saved",
	"item.schedulePublished": "{count, plural, one {The selected item have been scheduled to go {environment}} other {The selected items have been scheduled to go {environment}}}",
	"item.unlocked": "Item unlocked successfully",
	"itemActions.changeContentType": "Change Type",
	"itemActions.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemActions.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemActions.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemActions.copyDialogTitle": "Copy",
	"itemActions.createController": "New Controller",
	"itemActions.createFolder": "New Folder",
	"itemActions.createTemplate": "New Template",
	"itemActions.deleteController": "Delete Controller",
	"itemActions.deleteTemplate": "Delete Template",
	"itemActions.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemActions.editController": "Edit Controller",
	"itemActions.editTemplate": "Edit Template",
	"itemActions.newContent": "New Content",
	"itemActions.requestPublish": "Request Publish",
	"itemActions.viewForm": "View Form",
	"itemMegaMenu.editedBy": "{edited} {date} {byLabel} {by}",
	"itemMenu.changeContentType": "Change Type",
	"itemMenu.contentTypeDialogBody": "The following operation may result in data loss. Would you like to proceed?",
	"itemMenu.contentTypeDialogTitle": "Warning: Change Content Type",
	"itemMenu.copyDialogSubtitle": "Please select any of the sub-pages you would like to batch copy. When pasting, any selected sub-pages and their positional hierarchy will be retained.",
	"itemMenu.copyDialogTitle": "Copy",
	"itemMenu.createContent": "Create Content",
	"itemMenu.createController": "Create Controller",
	"itemMenu.createFolder": "Create Folder",
	"itemMenu.createTemplate": "Create Template",
	"itemMenu.duplicateDialogBody": "A new copy of this item and all of it's item specific content will be created. Are you sure you wish to proceed?",
	"itemMenu.editController": "Edit Controller",
	"itemMenu.editTemplate": "Edit Template",
	"itemMenu.noPermissions": "No actions available for this item.",
	"itemMenu.renameFolder": "Rename Folder",
	"itemPublishingTarget.live": "Live",
	"itemPublishingTarget.staged": "Staged",
	"itemPublishingTarget.unpublished": "Unpublished",
	"itemState.deleted": "Deleted",
	"itemState.locked": "Locked",
	"itemState.modified": "Modified",
	"itemState.new": "New",
	"itemState.scheduled": "Scheduled",
	"itemState.submitted": "Submitted",
	"itemState.systemProcessing": "System Processing",
	"languages.Maldivian": "Divehi",
	"languages.aa": "Afar",
	"languages.ab": "Abkhazian",
	"languages.ae": "Avestan",
	"languages.af": "Afrikaans",
	"languages.ak": "Akan",
	"languages.am": "Amharic",
	"languages.an": "Aragonese",
	"languages.ar": "Arabic",
	"languages.ar_ae": "Arabic - United Arab Emirates",
	"languages.ar_bh": "Arabic - Bahrain",
	"languages.ar_dz": "Arabic - Algeria",
	"languages.ar_eg": "Arabic - Egypt",
	"languages.ar_iq": "Arabic - Iraq",
	"languages.ar_jo": "Arabic - Jordan",
	"languages.ar_kw": "Arabic - Kuwait",
	"languages.ar_lb": "Arabic - Lebanon",
	"languages.ar_ly": "Arabic - Libya",
	"languages.ar_ma": "Arabic - Morocco",
	"languages.ar_om": "Arabic - Oman",
	"languages.ar_qa": "Arabic - Qatar",
	"languages.ar_sa": "Arabic - Saudi Arabia",
	"languages.ar_sy": "Arabic - Syria",
	"languages.ar_tn": "Arabic - Tunisia",
	"languages.ar_ye": "Arabic - Yemen",
	"languages.as": "Assamese",
	"languages.av": "Avaric",
	"languages.ay": "Aymara",
	"languages.az": "Azerbaijani",
	"languages.az_az": "Azeri - Cyrillic",
	"languages.ba": "Bashkir",
	"languages.be": "Belarusian",
	"languages.bg": "Bulgarian",
	"languages.bh": "Bihari languages",
	"languages.bi": "Bislama",
	"languages.bm": "Bambara",
	"languages.bn": "Bengali - Bangladesh",
	"languages.bo": "Tibetan",
	"languages.br": "Breton",
	"languages.bs": "Bosnian",
	"languages.ca": "Catalan",
	"languages.ce": "Chechen",
	"languages.ch": "Chamorro",
	"languages.co": "Corsican",
	"languages.cr": "Cree",
	"languages.cs": "Czech",
	"languages.cu": "Church Slavic; Slavonic; Old Bulgarian",
	"languages.cv": "Chuvash",
	"languages.cy": "Welsh",
	"languages.da": "Danish",
	"languages.de": "German",
	"languages.de_at": "German - Austria",
	"languages.de_ch": "German - Switzerland",
	"languages.de_de": "German - Germany",
	"languages.de_li": "German - Liechtenstein",
	"languages.de_lu": "German - Luxembourg",
	"languages.dv": "Divehi; Dhivehi; Maldivian",
	"languages.dz": "Dzongkha",
	"languages.ee": "Ewe",
	"languages.el": "Greek",
	"languages.en": "English",
	"languages.en_au": "English - Australia",
	"languages.en_bz": "English - Belize",
	"languages.en_ca": "English - Canada",
	"languages.en_cb": "English - Caribbean",
	"languages.en_gb": "English - Great Britain",
	"languages.en_ie": "English - Ireland",
	"languages.en_in": "English - India",
	"languages.en_jm": "English - Jamaica",
	"languages.en_nz": "English - New Zealand",
	"languages.en_ph": "English - Philippines",
	"languages.en_tt": "English - Trinidad",
	"languages.en_us": "English - United States",
	"languages.en_za": "English - Southern Africa",
	"languages.eo": "Esperanto",
	"languages.es": "Spanish; Castilian",
	"languages.es_ar": "Spanish - Argentina",
	"languages.es_bo": "Spanish - Bolivia",
	"languages.es_cl": "Spanish - Chile",
	"languages.es_co": "Spanish - Colombia",
	"languages.es_cr": "Spanish - Costa Rica",
	"languages.es_do": "Spanish - Dominican Republic",
	"languages.es_ec": "Spanish - Ecuador",
	"languages.es_es": "Spanish - Spain (Traditional)",
	"languages.es_gt": "Spanish - Guatemala",
	"languages.es_hn": "Spanish - Honduras",
	"languages.es_mx": "Spanish - Mexico",
	"languages.es_ni": "Spanish - Nicaragua",
	"languages.es_pa": "Spanish - Panama",
	"languages.es_pe": "Spanish - Peru",
	"languages.es_pr": "Spanish - Puerto Rico",
	"languages.es_py": "Spanish - Paraguay",
	"languages.es_sv": "Spanish - El Salvador",
	"languages.es_uy": "Spanish - Uruguay",
	"languages.es_ve": "Spanish - Venezuela",
	"languages.et": "Estonian",
	"languages.eu": "Basque",
	"languages.fa": "Farsi - Persian",
	"languages.ff": "Fulah",
	"languages.fi": "Finnish",
	"languages.fj": "Fijian",
	"languages.fo": "Faroese",
	"languages.fr": "French",
	"languages.fr_be": "French - Belgium",
	"languages.fr_ca": "French - Canada",
	"languages.fr_ch": "French - Switzerland",
	"languages.fr_fr": "French - France",
	"languages.fr_lu": "French - Luxembourg",
	"languages.fy": "Western Frisian",
	"languages.ga": "Irish",
	"languages.gd": "Gaelic - Scotland",
	"languages.gd_ie": "Gaelic - Ireland",
	"languages.gl": "Galician",
	"languages.gn": "Guarani - Paraguay",
	"languages.gu": "Gujarati",
	"languages.gv": "Manx",
	"languages.ha": "Hausa",
	"languages.he": "Hebrew",
	"languages.hi": "Hindi",
	"languages.ho": "Hiri Motu",
	"languages.hr": "Croatian",
	"languages.ht": "Haitian; Haitian Creole",
	"languages.hu": "Hungarian",
	"languages.hy": "Armenian",
	"languages.hz": "Herero",
	"languages.ia": "Interlingua",
	"languages.id": "Indonesian",
	"languages.ie": "Interlingue; Occidental",
	"languages.ig": "Igbo",
	"languages.ii": "Sichuan Yi; Nuosu",
	"languages.ik": "Inupiaq",
	"languages.io": "Ido",
	"languages.is": "Icelandic",
	"languages.it": "Italian",
	"languages.it_ch": "Italian - Switzerland",
	"languages.it_it": "Italian - Italy",
	"languages.iu": "Inuktitut",
	"languages.ja": "Japanese",
	"languages.jv": "Javanese",
	"languages.ka": "Georgian",
	"languages.kg": "Kongo",
	"languages.ki": "Kikuyu; Gikuyu",
	"languages.kj": "Kuanyama; Kwanyama",
	"languages.kk": "Kazakh",
	"languages.kl": "Kalaallisut; Greenlandic",
	"languages.km": "Khmer",
	"languages.kn": "Kannada",
	"languages.ko": "Korean",
	"languages.kr": "Kanuri",
	"languages.ks": "Kashmiri",
	"languages.ku": "Kurdish",
	"languages.kv": "Komi",
	"languages.kw": "Cornish",
	"languages.ky": "Kirghiz; Kyrgyz",
	"languages.la": "Latin",
	"languages.lb": "Luxembourgish; Letzeburgesch",
	"languages.lg": "Ganda",
	"languages.li": "Limburgan; Limburger; Limburgish",
	"languages.ln": "Lingala",
	"languages.lo": "Lao",
	"languages.lt": "Lithuanian",
	"languages.lu": "Luba-Katanga",
	"languages.lv": "Latvian",
	"languages.mg": "Malagasy",
	"languages.mh": "Marshallese",
	"languages.mi": "Maori",
	"languages.mk": "FYRO Macedonia",
	"languages.ml": "Malayalam",
	"languages.mn": "Mongolian",
	"languages.mr": "Marathi",
	"languages.ms": "Malay",
	"languages.ms_bn": "Malay - Brunei",
	"languages.ms_my": "Malay - Malaysia",
	"languages.mt": "Maltese",
	"languages.my": "Burmese",
	"languages.na": "Nauru",
	"languages.nb": "Bokmål, Norwegian; Norwegian Bokmål",
	"languages.nd": "Ndebele, North; North Ndebele",
	"languages.ne": "Nepali",
	"languages.ng": "Ndonga",
	"languages.nl": "Dutch; Flemish",
	"languages.nl_be": "Dutch - Belgium",
	"languages.nl_nl": "Dutch - Netherlands",
	"languages.nn": "Norwegian Nynorsk; Nynorsk, Norwegian",
	"languages.no": "Norwegian",
	"languages.no_no": "Norwegian - Bokml",
	"languages.nr": "Ndebele, South; South Ndebele",
	"languages.nv": "Navajo; Navaho",
	"languages.ny": "Chichewa; Chewa; Nyanja",
	"languages.oc": "Occitan (post 1500)",
	"languages.oj": "Ojibwa",
	"languages.om": "Oromo",
	"languages.or": "Oriya",
	"languages.os": "Ossetian; Ossetic",
	"languages.pa": "Punjabi",
	"languages.pi": "Pali",
	"languages.pl": "Polish",
	"languages.ps": "Pushto; Pashto",
	"languages.pt": "Portuguese",
	"languages.pt_br": "Portuguese - Brazil",
	"languages.pt_pt": "Portuguese - Portugal",
	"languages.qu": "Quechua",
	"languages.rm": "Raeto-Romance",
	"languages.rn": "Rundi",
	"languages.ro": "Romanian - Romania",
	"languages.ro_mo": "Romanian - Moldova",
	"languages.ru": "Russian",
	"languages.ru_mo": "Russian - Moldova",
	"languages.rw": "Kinyarwanda",
	"languages.sa": "Sanskrit",
	"languages.sb": "Sorbian",
	"languages.sc": "Sardinian",
	"languages.sd": "Sindhi",
	"languages.se": "Northern Sami",
	"languages.sg": "Sango",
	"languages.si": "Sinhala",
	"languages.sk": "Slovak",
	"languages.sl": "Slovenian",
	"languages.sm": "Samoan",
	"languages.sn": "Shona",
	"languages.so": "Somali",
	"languages.sq": "Albanian",
	"languages.sr": "Serbian",
	"languages.sr_sp": "Serbian - Cyrillic",
	"languages.ss": "Swati",
	"languages.st": "Sotho, Southern",
	"languages.su": "Sundanese",
	"languages.sv": "Swedish",
	"languages.sv_fi": "Swedish - Finland",
	"languages.sv_se": "Swedish - Sweden",
	"languages.sw": "Swahili",
	"languages.ta": "Tamil",
	"languages.te": "Telugu",
	"languages.tg": "Tajik",
	"languages.th": "Thai",
	"languages.ti": "Tigrinya",
	"languages.tk": "Turkmen",
	"languages.tl": "Tagalog",
	"languages.tn": "Setsuana",
	"languages.to": "Tonga (Tonga Islands)",
	"languages.tr": "Turkish",
	"languages.ts": "Tsonga",
	"languages.tt": "Tatar",
	"languages.tw": "Twi",
	"languages.ty": "Tahitian",
	"languages.ug": "Uighur; Uyghur",
	"languages.uk": "Ukrainian",
	"languages.ur": "Urdu",
	"languages.uz": "Uzbek",
	"languages.uz_uz": "Uzbek - Cyrillic",
	"languages.ve": "Venda",
	"languages.vi": "Vietnamese",
	"languages.vo": "Volapük",
	"languages.wa": "Walloon",
	"languages.wo": "Wolof",
	"languages.xh": "Xhosa",
	"languages.yi": "Yiddish",
	"languages.yo": "Yoruba",
	"languages.za": "Zhuang; Chuang",
	"languages.zh": "Chinese",
	"languages.zh_cn": "Chinese - China",
	"languages.zh_hk": "Chinese - Hong Kong SAR",
	"languages.zh_mo": "Chinese - Macau SAR",
	"languages.zh_sg": "Chinese - Singapore",
	"languages.zh_tw": "Chinese - Taiwan",
	"languages.zu": "Zulu",
	"launcher.siteSectionTitle": "Site <muted>• {siteName}</muted>",
	"launcherOpenerButton.menuTooltip": "Navigation Menu",
	"launcherOpenerButton.openMenuButtonText": "Open Menu",
	"launcherOpenerButton.signOut": "Sign Out",
	"legacyFormDialog.errorLoadingForm": "An error occurred trying to load the form",
	"legacyFormDialog.loadingForm": "Loading...",
	"legacyFormDialog.title": "Content Form",
	"localeSelectorControl.label": "Locale Selector",
	"localeSelectorControl.requiredError": "Field is Required",
	"logConsoleDetailsDialog.title": "Log Details",
	"logConsoleManagement.noLogs": "No logs found",
	"loggingLevels.changeLevelTo": "Current Level",
	"loggingLevels.currentLevel": "Current Level",
	"loggingLevelsManagement.levelChangedSuccessMessage": "Logging level changed successfully",
	"loginView.dialogTitleText": "Crafter CMS에 로그인",
	"loginView.forgotPasswordButtonLabel": "비밀번호를 잊어 버렸습니까?",
	"loginView.incorrectCredentialsMessage": "사용자 이름 또는 비밀번호가 잘못되었습니다. 다시 시도하십시오.",
	"loginView.loginButtonLabel": "로그인",
	"loginView.recoverYourPasswordBackButtonLabel": "뒤로",
	"loginView.recoverYourPasswordIntroText": "사용자 이름이 존재하면 재설정 링크가 포함 된 이메일이 발송됩니다.",
	"loginView.recoverYourPasswordSuccessMessage": "\"{username}\"이 있으면 복구 이메일이 전송되었습니다.",
	"loginView.resetYourPasswordIntroText": "새 비밀번호를 입력하십시오",
	"loginView.usernameTextFieldLabel": "사용자 이름",
	"media.card.itemLastEdition": "Edited {time}",
	"media.card.title": "options",
	"navigator.noChildren": "Item has no children",
	"newContentDialog.contentTypeAllLabel": "Show all types",
	"newContentDialog.contentTypeComponentLabel": "Components only",
	"newContentDialog.contentTypePageLabel": "Pages only",
	"newContentDialog.emptyStateMessage": "No Content Types Found",
	"newContentDialog.subtitle": "Choose a content type template for your new content item.",
	"newContentDialog.title": "Create Content",
	"newFolder.folderName": "Folder Name",
	"newFolder.helperText": "Consisting of: letters, numbers, dash (-) and underscore (_).",
	"newFolder.rename": "Provide a new folder name",
	"newFolder.required": "Folder name is required.",
	"newFolder.title": "Create a New Folder",
	"newFolder.title.rename": "Rename Folder",
	"noUiConfigMessageTitle.subtitle": "Add & configure `ui.xml` on your site to show content here.",
	"noUiConfigMessageTitle.title": "Configuration file missing",
	"numericInputControl.childContent": "최저한의",
	"numericInputControl.maximun": "최고",
	"numericInputControl.noDecimalsErrMessage": "이 입력에는 소수를 사용할 수 없습니다.",
	"openToolsPanel.label": "Open tools panel",
	"operations.Add_members": "Add Members",
	"operations.Add_remote": "Add Remote",
	"operations.Approve": "Approve",
	"operations.Approve_scheduled": "Approve Scheduled",
	"operations.Cancel_publishing_package": "Cancel Publishing Package",
	"operations.Create": "Create",
	"operations.Delete": "Delete",
	"operations.Disable": "Disable",
	"operations.Enable": "Enable",
	"operations.Login": "Login",
	"operations.Login_failed": "Login Failed",
	"operations.Logout": "Logout",
	"operations.Move": "Move",
	"operations.Published": "Published",
	"operations.Pull_from_remote": "Pull From Remote",
	"operations.Push_to_remote": "Push To Remote",
	"operations.Reject": "Reject",
	"operations.Remove_cluster_node": "Remove Cluster Dode",
	"operations.Remove_members": "Remove Members",
	"operations.Remove_remote": "Remove Remote",
	"operations.Request_publish": "Request Publish",
	"operations.Revert": "Revert",
	"operations.Start_publisher": "Start Publisher",
	"operations.Stop_publisher": "Stop Publisher",
	"operations.Update": "Update",
	"operations.assetUploadFailed": "Asset Upload failed.",
	"operations.assetUploadStarted": "Asset upload started.",
	"operations.deleteOperationComplete": "Delete operation completed.",
	"operations.deleteOperationFailed": "Delete operation failed.",
	"operations.insertItemOperation": "Insert item operation not implemented.",
	"operations.insertOperationComplete": "Insert component operation completed.",
	"operations.insertOperationFailed": "Insert component operation failed.",
	"operations.moveOperationComplete": "Move operation completed",
	"operations.moveOperationFailed": "Move operation failed.",
	"operations.sortOperationComplete": "Sort operation completed.",
	"operations.sortOperationFailed": "Sort operation failed.",
	"operations.updateOperationComplete": "Update operation completed.",
	"operations.updateOperationFailed": "Update operation failed.",
	"pageBuilder.title": "Page Building",
	"pageExplorerPanel.currentContentItems": "Current Content Items",
	"pageExplorerPanel.loading": "Loading",
	"pageExplorerPanel.rootItemLabel": "Current Content Items",
	"pageExplorerPanel.title": "Page Explorer",
	"pagination.PreviousPage": "Previous page",
	"pagination.nextPage": "Next page",
	"pagination.previousPage": "Previous page",
	"passwordRequirement.fulfillAllReqErrorMessage": "모든 비밀번호 요구 사항을 충족하십시오.",
	"passwordRequirement.hasLowercase": "소문자를 하나 이상 포함해야합니다",
	"passwordRequirement.hasNumbers": "하나 이상의 숫자를 포함해야합니다",
	"passwordRequirement.hasSpecialChars": "하나 이상의 특수 문자 {chars}을 (를) 포함해야합니다.",
	"passwordRequirement.hasUppercase": "적어도 하나의 대문자를 포함해야합니다",
	"passwordRequirement.invalidPassword": "요구 사항이 충족되지 않습니다",
	"passwordRequirement.maxLength": "길이는 {max} 자를 초과하지 않아야합니다.",
	"passwordRequirement.minLength": "길이는 {min} 자 이상이어야합니다",
	"passwordRequirement.minMaxLength": "길이는 {minLength} ~ {maxLength} 자 사이 여야합니다",
	"passwordRequirement.noBlank": "비워 둘 수 없습니다",
	"passwordRequirement.noSpaces": "공백을 포함해서는 안됩니다",
	"passwordRequirement.passwordConfirmationMismatch": "비밀번호가 일치하지 않습니다",
	"passwordRequirement.passwordValidation": "비밀번호 검증",
	"passwordRequirement.unnamedGroup": "설명되지 않은 조건",
	"passwordRequirement.validPassword": "요구 사항 충족",
	"passwordRequirement.validationPassing": "검증 통과",
	"passwordTextField.toggleVisibilityButtonText": "비밀번호 표시 전환",
	"pastePolicy.confirm": "The selected {action} target goes against site policies for the destination directory. • Original path: \"{path}\", • Suggested path is: \"{modifiedPath}\". Would you like to use the suggested path?",
	"pastePolicy.error": "The selected {action} target goes against site policies for the destination directory.",
	"pathNavigator.noChildren": "Item has no children",
	"pathNavigator.noItemsAtLocation": "No items at this location",
	"pathNavigator.pathFilterInputPlaceholder": "Filter children of {name}...",
	"pathNavigator.viewChildren": "View children",
	"pathNavigatorTreeItemFilter.placeholder": "Filter children...",
	"pathSelectionDialog.createFolderButtonLabel": "Create Folder",
	"pathSelectionDialog.title": "Select Path",
	"plugin.by": "By",
	"plugin.crafterCMS": "Crafter CMS",
	"plugin.license": "License",
	"plugin.licenseTooltip": "{license} license",
	"plugin.more": "More...",
	"plugin.noDev": "No developer specified.",
	"plugin.use": "Use",
	"plugin.version": "Version",
	"pluginDetails.notCompatible": "이 청사진은 현재 버전의 Crafter CMS와 호환되지 않습니다.",
	"pluginManagement.emptyList": "There are no plugins installed",
	"pluginManagement.installationDate": "Installation Date",
	"pluginManagement.listPluginPermission": "You don't have enough permissions to see the list of plugins",
	"pluginManagement.searchPlugin": "Search & install",
	"preview.previewIFrameTitle": "미리보기 프레임",
	"previewAddressBar.reloadButtonLabel": "Reload this page",
	"previewAssetsPanel.itemsPerPage": "Items per page:",
	"previewAssetsPanel.noResults": " No results found.",
	"previewAssetsPanel.retrieveAssets": "Retrieving Site Assets",
	"previewAssetsPanel.title": "Assets",
	"previewAudiencesPanel.loading": "Retrieving targeting options",
	"previewAudiencesPanel.title": "Audience Targeting",
	"previewBrowseComponentsPanel.chooseContentType": "Please choose a content type.",
	"previewBrowseComponentsPanel.nextPage": "next page",
	"previewBrowseComponentsPanel.noResults": " No results found.",
	"previewBrowseComponentsPanel.previousPage": "previous page",
	"previewBrowseComponentsPanel.selectContentType": "Select content type",
	"previewBrowseComponentsPanel.title": "Browse Components",
	"previewCompatDialog.legacyCompatMessage": "This page is compatible with the previous editing experience. Would you like to go there now?",
	"previewCompatDialog.nextCompatMessage": "This page is compatible with the new editing experience. Would you like to go there now?",
	"previewCompatDialog.rememberChoice": "Remember choice",
	"previewCompatDialog.title": "Preview Compatibility Notice",
	"previewComponentsPanel.browse": "Browse existing",
	"previewComponentsPanel.listDropTargets": "List drop targets",
	"previewComponentsPanel.listInPageInstances": "List in-page instances",
	"previewComponentsPanel.listReceptacles": "List receptacles",
	"previewComponentsPanel.title": "Components",
	"previewContentTypeReceptaclesTool.selectContentType": "Select content type",
	"previewContentTypeReceptaclesTool.title": "{name} Receptacles",
	"previewDropTargetsPanel.chooseContentType": "Please choose a content type.",
	"previewDropTargetsPanel.noResults": "No results found.",
	"previewDropTargetsPanel.selectContentType": "Select content type",
	"previewDropTargetsPanel.title": "Component Drop Targets",
	"previewEditFormTool.editController": "Edit Controller",
	"previewEditFormTool.editTemplate": "Edit Template",
	"previewEditFormTool.openComponentForm": "Edit",
	"previewInPageInstancesPanel.chooseContentType": "Please choose a content type.",
	"previewInPageInstancesPanel.noResults": "No results found.",
	"previewInPageInstancesPanel.selectContentType": "Select content type",
	"previewInPageInstancesPanel.title": "In this Page",
	"previewPageExplorerPanel.loading": "Loading",
	"previewPageExplorerPanel.rootItemLabel": "Current Content Items",
	"previewPageExplorerPanel.title": "Page Explorer",
	"previewReceptaclesPanel.chooseContentType": "Please choose a content type.",
	"previewReceptaclesPanel.noResults": "No results found.",
	"previewReceptaclesPanel.selectContentType": "Select content type",
	"previewReceptaclesPanel.title": "Component Receptacles",
	"previewRubbishBin.dropToTrash": "Drop Here To Trash",
	"previewRubbishBin.itemTrashed": "Trashed!",
	"previewSearchPanel.title": "Search",
	"previewSimulatorPanel.previewWindowSize": "Preview Window Size",
	"previewSimulatorPanel.title": "Device Simulator",
	"previewSimulatorTool.previewWindowSize": "Preview Window Size",
	"previewSimulatorTool.title": "Device Simulator",
	"previewSiteExplorerPanel.title": "Site Explorer",
	"previewToolbar.itemMenu": "Item menu",
	"previewToolbar.quickCreateMenuTooltip": "Quick create menu",
	"previewToolbar.toggleEditMode": "Toggle edit mode",
	"previewTools.choseSiteMessage": "Please choose site",
	"previewTools.noWidgetsMessage": "No tools have been configured",
	"profileSettings.currentPassword": "현재 비밀번호",
	"profileSettings.isRequired": "필요하다",
	"profileSettings.languageUpdateFailedWarning": "언어 업데이트에 실패했습니다. 잠시 후 다시 시도하십시오.",
	"profileSettings.languageUpdatedSuccessfully": "언어가 성공적으로 업데이트되었습니다.",
	"profileSettings.mustMatchPreviousEntry": "이전 항목과 일치해야합니다",
	"profileSettings.password": "암호",
	"profileSettings.unsavedConfirmation": "저장되지 않은 변경 사항이 있습니다. 변경 사항을 취소?",
	"profileSettings.unsavedConfirmationTitle": "저장되지 않은 변경 사항",
	"publishDialog.approveForPublish": "게시 승인",
	"publishDialog.changesInSelection": "게시 할 항목 선택을 변경하면 \"모든 종속성\"을 다시 계산해야합니다.",
	"publishDialog.differentPublishDateWarning": "<strong>경고</strong> 승인을 위해 선택한 항목이 요청 된 다른 게시 날짜 / 시간으로 제출되었습니다.",
	"publishDialog.hardDependencies": "어려운 의존성",
	"publishDialog.introductoryText": "선택한 파일이 게시됩니다. 엄격한 종속성이 자동으로 포함됩니다. 소프트 종속성은 선택 사항이며 포함 할 항목을 선택할 수 있습니다.",
	"publishDialog.itemsToPublish": "게시 할 항목",
	"publishDialog.loadingDependencies": "종속성을로드 중입니다.{ellipsis}을 (를) 기다리십시오",
	"publishDialog.noItemsSelected": "No items have been selected",
	"publishDialog.publishingScheduleTitle": "선택된 품목 일정",
	"publishDialog.showAllDependencies": "모든 종속성 표시",
	"publishDialog.softDependencies": "소프트 종속성",
	"publishDialog.submissionCommentFieldError": "제출 의견을 작성하십시오.",
	"publishDialog.submissionMandatory": "제출 필수",
	"publishDialog.submissionOptional": "제출 옵션",
	"publishForm.emailLabel": "Email me the reviewer's feedback",
	"publishForm.environmentError": "Publishing targets load failed.",
	"publishForm.environmentLoading": "Loading...",
	"publishForm.environmentRetry": "retry",
	"publishForm.environmentSuccess": "Success",
	"publishForm.publishingTargetDropdownLabel": "Publishing Target",
	"publishForm.scheduling": "Scheduling",
	"publishForm.schedulingLater": "Later",
	"publishForm.schedulingNow": "Now",
	"publishForm.submissionComment": "Submission Comment",
	"publishOnDemand.formPathExample": "e.g. /site/website/about/index.xml",
	"publishOnDemand.formPathExamplePreview": "You may enter multiple separate by comma",
	"publishOnDemand.formPathLabel": "Path to Publish",
	"publishOnDemand.formPathLabelPreview": "Commit or tag IDs",
	"publishOnDemand.pathModeDescription": "Publish changes made in Studio via the UI",
	"publishOnDemand.publishingTarget": "Publishing Target",
	"publishOnDemand.submissionComment": "Submission Comment",
	"publishOnDemand.tagsModeDescription": "Publish changes made via direct git actions against the repository or pulled from a remote repository",
	"publishOnDemand.title": "Publish on Demand",
	"publishing.bulkPublishNote": "Bulk publish should be used to publish changes made in Studio via the UI. For changes made via direct git actions, use the \"Publish by...\" feature.",
	"publishing.busy": "바쁜",
	"publishing.idle": "게으른",
	"publishing.publishByNote": "\"Publish by...\" feature must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use \"Bulk Publish\".",
	"publishing.queued": "대기",
	"publishing.ready": "준비된",
	"publishing.started": "시작됨",
	"publishing.stopped": "중지",
	"publishingDashboard.BLOCKED": "막힌",
	"publishingDashboard.CANCELLED": "취소 된",
	"publishingDashboard.COMPLETED": "완료된",
	"publishingDashboard.PROCESSING": "가공",
	"publishingDashboard.READY_FOR_LIVE": "라이브 준비",
	"publishingDashboard.all": "모든",
	"publishingDashboard.bulkPublishStarted": "Bulk Publish process has been started.",
	"publishingDashboard.cancelItemButtonText": "취소",
	"publishingDashboard.cancelSelected": "선택된 취소",
	"publishingDashboard.comment": "논평",
	"publishingDashboard.commentNotProvided": "(제출 의견이 제공되지 않음)",
	"publishingDashboard.confirmAllHelper": "선택한 모든 항목의 상태를 \"취소\"로 설정 하시겠습니까?",
	"publishingDashboard.confirmHelperText": "항목 상태를 \"취소됨\"으로 설정 하시겠습니까?",
	"publishingDashboard.fetchPackagesFiles": "패키지 파일 가져 오기",
	"publishingDashboard.filesList": "파일 목록",
	"publishingDashboard.filteredBy": "표시 : {state, select, all {} other {상태: {state}.}} {environment, select, all {} other {{environment} 목표.}} {path, select, none {} other {에 의해 필터링 {path}}}",
	"publishingDashboard.filters": "필터",
	"publishingDashboard.gitNote": "Publishing by commit or tag must be used for changes made via direct git actions against the repository or pulled from a remote repository. For changes made via Studio on the UI, use please <a>publish by path</a>.",
	"publishingDashboard.next": "다음 페이지",
	"publishingDashboard.no": "아니",
	"publishingDashboard.noPackagesSubtitle": "검색어를 변경해보십시오",
	"publishingDashboard.noPackagesTitle": "패키지가없는 곳",
	"publishingDashboard.packagesSelected": "{count, plural, one {{count} 선택된 패키지} other {{count} 선택된 패키지}}",
	"publishingDashboard.pathExpression": "경로 표현",
	"publishingDashboard.previous": "이전 페이지",
	"publishingDashboard.publishSuccess": "Published successfully.",
	"publishingDashboard.scheduled": "<b>{approver}</b>에 의해 <b>{schedule, date, medium} {schedule, time, short}</b> 에 예약",
	"publishingDashboard.selectAll": "이 페이지에서 모두 선택",
	"publishingDashboard.state": "상태",
	"publishingDashboard.status": "{environment} 공개 대상의 상태는 {state}입니다.",
	"publishingDashboard.studioNote": "Publishing by path should be used to publish changes made in Studio via the UI. For changes made via direct git actions, please <a>publish by commit or tag</a>.",
	"publishingDashboard.warning": "This will force publish all items that match the pattern requested including their dependencies, and it may take a long time depending on the number of items. Please make sure that all modified items (including potentially someone's work in progress) are ready to be published before continuing.",
	"publishingDashboard.yes": "예",
	"publishingQueue.title": "Publishing Queue",
	"publishingStatusTile.isDisabledMessage": "The publisher is disabled.",
	"publishingStatusTile.lockOwnerDisplayMessage": "Locked by {lockOwner}",
	"publishingStatusTile.lockTTLMessage": "TTL {lockTTL}",
	"publishingStatusTile.publishingStatus": "Publishing Status",
	"quickCreateBtnLabel.label": "Open quick create menu",
	"quickCreateMenu.learnMore": "Learn More",
	"quickCreateMenu.learnMoreError": "Quick create has not been configured. Please contact your system administrator.",
	"quickCreateMenu.sectionTitle": "Quick Create",
	"quickCreateMenu.title": "New Content",
	"register.dropTargetsNotFound": "There are no drop targets for {contentType} components",
	"register.notFound": "{name} is not visible or was not registered by developers",
	"rejectDialog.brokenLinks": "Broken Links",
	"rejectDialog.cancel": "Cancel",
	"rejectDialog.continue": "Reject",
	"rejectDialog.incorrectBranding": "Incorrect Branding",
	"rejectDialog.notApproved": "Not Approved",
	"rejectDialog.nsoa": "Needs Section Owner's Approval",
	"rejectDialog.rejectCommentLabel": "Rejection Comment",
	"rejectDialog.rejectionReason": "Rejection Reason",
	"rejectDialog.submittedBy": "Submitted By",
	"rejectDialog.typos": "Typos",
	"remoteRepositories.title": "Remote Repositories",
	"reposAdmin.pendingCommit": "Repo는 커밋 보류중인 파일을 포함합니다. 자세한 내용은 아래 리포지토리 상태를 참조하십시오.",
	"reposAdmin.repositoriesNote": "Do not use Studio as a git merge and conflict resolution platform. All merge conflicts should be resolved upstream before getting pulled into Studio.",
	"reposAdmin.unreachableRemote": "원격 \"{name}\"에 도달 할 수 없습니다.",
	"reposAdmin.unstagedFilesMessage": "저장소에 스테이지되지 않은 파일이 있습니다.",
	"requestPublishDialog.cancel": "Cancel",
	"requestPublishDialog.submit": "Submit",
	"requestPublishDialog.title": "Request Publish",
	"resetPasswordDialog.helperText": "Set a new password for \"{user}\" user",
	"resetPasswordDialog.passwordUpdated": "Password updated successfully",
	"resetPasswordDialog.title": "Reset Password",
	"resetView.resetPasswordConfirmFieldPlaceholderLabel": "비밀번호 확인",
	"resetView.resetPasswordError": "비밀번호 재설정 중 오류가 발생했습니다. 토큰이 유효하지 않거나 만료되었을 수 있습니다.",
	"resetView.resetPasswordFieldPlaceholderLabel": "새 비밀번호",
	"resetView.resetPasswordInvalidToken": "유효하지 않거나 만료 된 토큰.",
	"resetView.resetPasswordSuccess": "비밀번호가 재설정되었습니다. 새 비밀번호로 로그인하십시오.",
	"rteControlMessages.chooseSource": "Choose a Source",
	"rteControlMessages.dropImageUploaded": "{title} was successfully uploaded.",
	"rteControlMessages.escapeScripts": "탈출 스크립트",
	"rteControlMessages.incompatibleDatasource": "찾아보기를 위해 구성된 데이터 소스가 리치 텍스트 편집기와 호환되지 않습니다. 관리자에게 문의하십시오.",
	"rteControlMessages.noDatasourcesConfigured": "No sources configured for this editor.",
	"rteControlMessages.requiredField": "필드는 필수입니다",
	"search.acceptSelection": "Accept Selection",
	"search.changeQuery": "Try changing your query.",
	"search.filtersActive": " • <span>Filters Active</span>",
	"search.goToPreview": "Go to page",
	"search.itemsPerPage": "Items per page:",
	"search.noPermissions": "No permissions available.",
	"search.noResults": "No Results Were Found.",
	"search.resultsCaption": "{from}-{to} of {count} results {keywordLength, plural, =0 {}other{ for <b>“{keyword}”</b>}} ",
	"search.resultsSelected": "{count, plural, one {{count} item selected} other {{count} items selected}}",
	"search.selectAll": "Select all on this page",
	"search.selectionCount": "{count} selected",
	"search.videoProcessed": "Video is being processed, preview will be available when processing is complete",
	"searchAhead.noResults": "No Results.",
	"searchBar.placeholder": "Search...",
	"searchFilter.above": "Above {value}{unit}",
	"searchFilter.asc": "Ascending",
	"searchFilter.byRelevanceAscMessage": "Less relevant first",
	"searchFilter.byRelevanceDescMessage": "Most relevant first",
	"searchFilter.clearFilters": "Clear Filters",
	"searchFilter.contentType": "Content Type",
	"searchFilter.desc": "Descending",
	"searchFilter.internalName": "Name",
	"searchFilter.lastEditDate": "Last Edit Date",
	"searchFilter.mimeType": "MIME Type",
	"searchFilter.searchIn": "Search in:",
	"searchFilter.size": "Content Size",
	"searchFilter.sortBy": "Sort By",
	"searchFilter.under": "Under {value}{unit}",
	"searchToolBar.changeViewButtonTooltip": "Change view",
	"searchToolBar.showHideFilters": "Show/hide filters",
	"settingsPanel.editMode": "Edit Mode",
	"settingsPanel.editModeHelperText": "Enable In-context editing, highlighting editable zones as you hover on them.",
	"settingsPanel.highlightAllZones": "Highlight All Zones",
	"settingsPanel.highlightMode": "Highlight Mode",
	"settingsPanel.highlightModeHelperText": "When \"highlight movable\" is active, only content items you can move around drop targets highlight.",
	"settingsPanel.highlightMovable": "Highlight Movable",
	"sharedContentDS.sharedContent": "공유 컨텐츠",
	"site.deleted": "Site deleted successfully",
	"siteCard.helperText": "Delete \"{site}\" site?",
	"siteComponentDS.componentPath": "구성 요소 경로",
	"siteComponentDS.dataType": "데이터 형식",
	"siteComponentDS.date": "날짜",
	"siteComponentDS.float": "부동 소수점",
	"siteComponentDS.html": "데이터 형식",
	"siteComponentDS.integer": "정수",
	"siteComponentDS.label": "분류법 선택기",
	"siteComponentDS.required": "필수",
	"siteComponentDS.siteComponent": "사이트 구성 요소",
	"siteComponentDS.string": "끈",
	"siteComponentDS.unableLoad": "시스템이 {file}을 (를)로드 할 수 없습니다.",
	"siteConfig.controlNotAvailable": "제어 할 수 없음",
	"siteConfig.insertExpressionMessage": "식 삽입",
	"siteConfig.invalidNumber": "\"{value}\"은 (는) 유효한 숫자가 아닙니다.",
	"siteConfig.landingMessage": "왼쪽에서 도구를 선택하십시오.",
	"siteConfig.loadModuleError": "Unable to load \"{tool}\". Check Site tools configuration.",
	"siteConfig.postfixes": "접미사",
	"siteConfig.switchToMessage": " {type}으로 전환",
	"siteConfig.toolNotFound": "\"{tool}\" tool not found.",
	"siteConfigurationManagement.activeEnvironment": "{environment} Environment",
	"siteConfigurationManagement.confTabAWSProfiles": "AWS Profiles",
	"siteConfigurationManagement.confTabAWSProfilesDesc": "AWS profiles configuration file.",
	"siteConfigurationManagement.confTabAssetProcessing": "Asset Processing",
	"siteConfigurationManagement.confTabAssetProcessingDesc": "Asset processing configuration file.",
	"siteConfigurationManagement.confTabBlobStores": "Blob Stores",
	"siteConfigurationManagement.confTabBlobStoresDesc": "Blob stores configuration file.",
	"siteConfigurationManagement.confTabBoxProfiles": "Box Profiles",
	"siteConfigurationManagement.confTabBoxProfilesDesc": "Box profiles configuration file.",
	"siteConfigurationManagement.confTabCMISConfiguration": "CMIS Configuration",
	"siteConfigurationManagement.confTabCMISConfigurationDesc": "This files configures 0 or more CMIS-capable repositories as data-sources for content authors to pick from",
	"siteConfigurationManagement.confTabCodeEditorConf": "Code Editor Configuration",
	"siteConfigurationManagement.confTabCodeEditorConfDesc": "Defines Code Editor configurations",
	"siteConfigurationManagement.confTabConfDesc": "Defines this list of configurations",
	"siteConfigurationManagement.confTabConfigurations": "Configurations",
	"siteConfigurationManagement.confTabContextualNavigationConf": "Contextual Navigation Configuration",
	"siteConfigurationManagement.confTabContextualNavigationConfDesc": "Defines modules on the site contextual navigation bar",
	"siteConfigurationManagement.confTabDependencyResolverConf": "Dependency Resolver Configuration",
	"siteConfigurationManagement.confTabDependencyResolverConfDesc": "This file configures what file paths Crafter considers a dependency and how they should be extracted.",
	"siteConfigurationManagement.confTabDevEnvironmentConf": "Dev Environment Configuration",
	"siteConfigurationManagement.confTabDevEnvironmentConfDesc": "Defines a dev environment configuration",
	"siteConfigurationManagement.confTabEndpointsConf": "Endpoints Configuration",
	"siteConfigurationManagement.confTabEndpointsConfDesc": "Defines a list of end points available",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfiguration": "Engine Site Application Context",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationDesc": "Site application context used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationLive": "Engine Site Application Context - Live",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationPreview": "Engine Site Application Context - Preview",
	"siteConfigurationManagement.confTabEngineSiteAppContextConfigurationStaging": "Engine Site Application Context - Staging",
	"siteConfigurationManagement.confTabEngineSiteConfiguration": "Engine Site Configuration",
	"siteConfigurationManagement.confTabEngineSiteConfigurationDesc": "Site configuration used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineSiteConfigurationLive": "Engine Site Configuration - Live",
	"siteConfigurationManagement.confTabEngineSiteConfigurationPreview": "Engine Site Configuration - Preview",
	"siteConfigurationManagement.confTabEngineSiteConfigurationStaging": "Engine Site Configuration - Staging",
	"siteConfigurationManagement.confTabEngineUrlRewriteConf": "Engine URL Rewrite Configuration (XML Style)",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfDesc": "This file configures site properties used by Crafter Engine",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfLive": "Engine URL Rewrite Configuration (XML Style) - Live",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfPreview": "Engine URL Rewrite Configuration (XML Style) - Preview",
	"siteConfigurationManagement.confTabEngineUrlRewriteConfStaging": "Engine URL Rewrite Configuration (XML Style) - Staging",
	"siteConfigurationManagement.confTabEnvironmentConfiguration": "Environment Configuration",
	"siteConfigurationManagement.confTabEnvironmentConfigurationDesc": "This file configures the environments Crafter Studio can publish to",
	"siteConfigurationManagement.confTabMimeTypes": "Mime Types",
	"siteConfigurationManagement.confTabMimeTypesDesc": "This file configures the mime types icons overrides for this site/blueprint.",
	"siteConfigurationManagement.confTabNotificationConf": "Notification Configuration",
	"siteConfigurationManagement.confTabNotificationConfDesc": "Defines a list of UI messages",
	"siteConfigurationManagement.confTabPermissionsMappings": "Permissions Mapping",
	"siteConfigurationManagement.confTabPermissionsMappingsDesc": "Defines a map of permissions and paths",
	"siteConfigurationManagement.confTabPersonasConf": "Personas Configuration",
	"siteConfigurationManagement.confTabPersonasConfDesc": "Defines a list of personas available to assume in preview",
	"siteConfigurationManagement.confTabPreviewAssetConf": "Preview Asset Configuration",
	"siteConfigurationManagement.confTabPreviewAssetConfDesc": "Defines a list of editable assets associated with XML contents",
	"siteConfigurationManagement.confTabPreviewComponentsConf": "Preview Components Configuration",
	"siteConfigurationManagement.confTabPreviewComponentsConfDesc": "Defines a list of components that can be created dynamically in preview",
	"siteConfigurationManagement.confTabPreviewPanelConf": "Preview Panel Configuration",
	"siteConfigurationManagement.confTabProxyConfig": "Proxy Config",
	"siteConfigurationManagement.confTabProxyConfigDesc": "This file configures the proxy servers for preview.",
	"siteConfigurationManagement.confTabRTEConf": "RTE (TinyMCE 2) Configuration",
	"siteConfigurationManagement.confTabRTEConfDesc": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.confTabRTEtMCE5Conf": "RTE (TinyMCE 5) Configuration",
	"siteConfigurationManagement.confTabRTEtMCE5ConfDesc": "Defines Rich Text Editors configurations in form",
	"siteConfigurationManagement.confTabRoleMappings": "Role Mappings",
	"siteConfigurationManagement.confTabRoleMappingsDesc": "Defines a list of roles available in site",
	"siteConfigurationManagement.confTabSidebarConf": "Sidebar Configuration",
	"siteConfigurationManagement.confTabSidebarConfDesc": "Defines modules on the sidebar",
	"siteConfigurationManagement.confTabSiteConf": "Site Config Tools",
	"siteConfigurationManagement.confTabSiteConfDesc": "Defines the list of admin tools available",
	"siteConfigurationManagement.confTabSiteConfiguration": "Site Configuration",
	"siteConfigurationManagement.confTabSiteConfigurationDesc": "Defines the general site configuration",
	"siteConfigurationManagement.confTabSitePolicyConf": "Site Policy Configuration",
	"siteConfigurationManagement.confTabSitePolicyConfDesc": "Defines policies to validate content operations",
	"siteConfigurationManagement.confTabTargetingConfiguration": "Targeting Configuration",
	"siteConfigurationManagement.confTabTargetingConfigurationDesc": "This file configures the targeting system of Crafter Studio to help provide Crafter Engine with fake user properties that help drive the targeting system",
	"siteConfigurationManagement.confTabTargetsConf": "Targets Configuration",
	"siteConfigurationManagement.confTabTargetsConfDesc": "Defines a list of targets used for form datasource",
	"siteConfigurationManagement.confTabTranslationConf": "Translation Configuration",
	"siteConfigurationManagement.confTabTranslationConfDesc": "Defines supported languages and how to resolve them",
	"siteConfigurationManagement.confTabUiConf": "User Interface Configuration",
	"siteConfigurationManagement.confTabUiConfDesc": "Defines the widgets shown in the user interface",
	"siteConfigurationManagement.confTabWebDAVProfiles": "WebDAV Profiles",
	"siteConfigurationManagement.confTabWebDAVProfilesDesc": "WebDAV profiles configuration file.",
	"siteConfigurationManagement.confTabWorkflowConf": "Workflow Configuration",
	"siteConfigurationManagement.confTabWorkflowConfDesc": "Defines workflows available in the system",
	"siteConfigurationManagement.confTabconfTabPreviewPanelConfDesc": "Defines a list of tools available in preview",
	"siteConfigurationManagement.environment": "Active Environment: {environment}",
	"siteConfigurationManagement.hideSample": "Hide Sample",
	"siteConfigurationManagement.history": "History",
	"siteConfigurationManagement.selectConfigFile": "Please choose a config file from the left.",
	"siteConfigurationManagement.unsavedChangesSubtitle": "You have unsaved changes, do you want to leave?",
	"siteConfigurationManagement.unsavedChangesTitle": "Unsaved changes",
	"siteConfigurationManagement.viewSample": "View Sample",
	"siteExplorerPanel.emptyMessage": "No widgets are configured to show on the site explorer.",
	"siteExplorerPanel.siteConfig": "Site Config",
	"siteExplorerPanel.title": "Site Explorer",
	"siteExplorerPanel.unsupportedItemsPreset": "Some items in the site explorer config are not supported and won't show.",
	"siteSearch.noOptionsAvailable": "No options available",
	"siteSearch.unknownErrorSearching": "An error occurred with the search service.",
	"siteSwitcherSelected.siteSelectorNoSiteSelected": "Choose site",
	"siteTools.title": "Site Tools",
	"sites.ChangeView": "Change view",
	"sites.createGroup": "Create Group",
	"sites.createSite": "Create Site",
	"sitesAdmin.siteUpdated": "Site Updated.",
	"sitesGrid.emptyStateMessage": "No Sites Found",
	"sitesGrid.siteDeleted": "Site deleted successfully",
	"targetingDialog.setNow": "지금 설정",
	"tokenManagement.clearSelected": "Clear Selected ({count})",
	"tokenManagement.copied": "Token copied to clipboard",
	"tokenManagement.createToken": "Create Token",
	"tokenManagement.created": "Token created and copied to clipboard",
	"tokenManagement.deleted": "{count, plural, one {Token deleted} other {The selected tokens were deleted}}",
	"tokenManagement.deletedSelected": "Delete Selected",
	"tokenManagement.emptyTokens": "There are no tokens, click on Create Token to add a new one",
	"tokenManagement.helperText": "Delete \"{label}\" token?",
	"tokenManagement.updated": "Token updated",
	"toolbarGlobalNav.openMenuButtonText": "Open Menu",
	"toolbarGlobalNav.signOut": "Sign Out",
	"transcodedVideoPickerControl.label": "트랜스 코딩 된 비디오",
	"transferList.addDisabledTooltip": "Select items to add from the left",
	"transferList.addToTarget": "Add selected",
	"transferList.emptyListMessage": "All users are members of this group",
	"transferList.removeDisabledTooltip": "Select items to remove from the right",
	"transferList.removeFromTarget": "Remove selected",
	"transferList.targetEmptyStateMessage": "No members on this group",
	"transferListColumn.noResults": "No results, try to change the query",
	"unlockPublisherDialog.dialogCopy": "게시자 잠금 해제를 확인하십시오",
	"unlockPublisherDialog.dialogTitle": "게시자 잠금 해제 확인",
	"unlockPublisherDialog.typeConfirmPassword": "의미를 이해하고 계속 진행하려면 \"<b>{password}</b>\"단어를 입력하십시오.",
	"unlockPublisherDialog.unlockCompleteMessage": "게시자 잠금이 성공적으로 해제되었습니다.",
	"unlockPublisherDialog.unlockFailedMessage": "게시자 잠금을 해제하는 동안 오류가 발생했습니다.",
	"uploadDialog.title": "Upload",
	"uploadDialog.uploadInProgress": "Uploads are still in progress. Leaving this page would stop the pending uploads. Are you sure you wish to leave?",
	"uploadDialog.uploadInProgressConfirmation": "Uploads are still in progress. Closing this modal would stop the pending uploads. Are you sure you wish to close it?",
	"uppyCore.noDuplicates": "Cannot add the duplicate file “%'{fileName}'”, it already exists",
	"uppyDashboard.acceptAll": "Accept all changes",
	"uppyDashboard.addMore": "Add more",
	"uppyDashboard.addingMoreFiles": "Adding more files",
	"uppyDashboard.cancelPending": "Cancel pending",
	"uppyDashboard.clearCompleted": "Clear completed",
	"uppyDashboard.rejectAll": "Reject all changes",
	"uppyDashboard.removeFile": "Remove file",
	"uppyDashboard.renamingFromTo": "Renaming from %'{from}' to %'{to}'",
	"uppyDashboard.validateAndRetry": "Accept changes and upload",
	"userGroupMembershipEditor.addOrRemoveError": "Error modifying user group(s). Please try again momentarily.",
	"userGroupMembershipEditor.addToGroupsSuccess": "\"{user}\" added to {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userGroupMembershipEditor.removeFromGroupsSuccess": "\"{user}\" removed from {numOfGroups, plural, one {the specified group} other {{numOfGroups} groups}}",
	"userInfoDialog.close": "Close",
	"userInfoDialog.deleteUser": "Delete user",
	"userInfoDialog.externallyManaged": "Managed externally",
	"userInfoDialog.helperText": "Delete \"{username}\" user?",
	"userInfoDialog.noRoles": "No roles",
	"userInfoDialog.resetPassword": "Reset password",
	"userInfoDialog.siteName": "Site name",
	"userInfoDialog.siteRoles": "Roles per site",
	"userInfoDialog.userDeleted": "User deleted successfully",
	"userInfoDialog.userDetails": "User Details",
	"userInfoDialog.userDisabled": "User disabled successfully",
	"userInfoDialog.userEnabled": "User enabled successfully",
	"userInfoDialog.userUpdated": "User updated successfully",
	"usersAdmin.firstName": "이름",
	"usersAdmin.lastName": "성",
	"usersAdmin.maxLengthError": "{field} 은 {size} 자보다 길 수 없습니다",
	"usersAdmin.passwordChangeSuccessMessage": "Password changed successfully",
	"usersAdmin.userCreated": "{username} created.",
	"usersAdmin.userDeleted": "{username} deleted.",
	"usersAdmin.userEdited": "{username} edited.",
	"usersAdmin.userName": "사용자 이름",
	"usersGrid.createUser": "Create User",
	"usersGrid.emptyStateMessage": "No Users Found",
	"validations.maxCount": "The max number of items is {maxCount}",
	"validations.maxLength": "The max length ({maxLength}) reached",
	"validations.minCount": "The min number of items is {minCount}",
	"validations.required": "{field} is required",
	"viewVersionDialog.headerTitle": "Viewing item version",
	"wcmRootFolder.pathNotFound": " {path} 폴더를 찾을 수 없습니다.",
	"widgetComponent.componentNotFoundSubtitle": "Check ui config & make sure you've installed the plugins that contain the desired components.",
	"widgetComponent.componentNotFoundTitle": "Component {id} not found.",
	"widgetComponent.pluginLoadFailedMessageBody": "With {info} & component id \"{id}\".",
	"widgetComponent.pluginLoadFailedMessageTitle": "Plugin load failed",
	"withEmptyState.defaultEmptyStateMessage": "No results found",
	words: words$3,
	"words.about": "About",
	"words.accept": "Accept",
	"words.account": "Account",
	"words.apply": "Apply",
	"words.approve": "Approve",
	"words.asset": "Asset",
	"words.audit": "Audit",
	"words.back": "Back",
	"words.base": "Base",
	"words.browse": "검색",
	"words.by": "By",
	"words.cancel": "취소",
	"words.clear": "명확한",
	"words.close": "닫기",
	"words.cluster": "Cluster",
	"words.compact": "Compact",
	"words.component": "Component",
	"words.configuration": "Configuration",
	"words.confirm": "확인",
	"words.content": "Content",
	"words.continue": "Continue",
	"words.copy": "Copy",
	"words.create": "Create",
	"words.created": "Created",
	"words.custom": "관습",
	"words.cut": "Cut",
	"words.dashboard": "Dashboard",
	"words.defaults": "기본값",
	"words.delete": "Delete",
	"words.dependencies": "Dependencies",
	"words.description": "Description",
	"words.desktop": "Desktop",
	"words.details": "Details",
	"words.disabled": "Disabled",
	"words.dismiss": "Dismiss",
	"words.documentation": "Documentation",
	"words.done": "끝난",
	"words.duplicate": "Duplicate",
	"words.edit": "Edit",
	"words.edited": "Edited",
	"words.email": "E-mail",
	"words.enabled": "Enabled",
	"words.error": "오류",
	"words.expiration": "Expiration",
	"words.expired": "Expired",
	"words.files": "Files",
	"words.filter": "Filter",
	"words.firstName": "First name",
	"words.from": "From",
	"words.global": "Global",
	"words.go": "Go",
	"words.groups": "Groups",
	"words.height": "Height",
	"words.history": "History",
	"words.id": "Id",
	"words.install": "Install",
	"words.installed": "Installed",
	"words.item": "Item",
	"words.label": "Label",
	"words.language": "언어",
	"words.lastName": "Last name",
	"words.level": "Level",
	"words.loading": "Loading",
	"words.locales": "Locales",
	"words.logger": "Logger",
	"words.login": "Login",
	"words.logout": "Logout",
	"words.max": "Max",
	"words.members": "Members",
	"words.menu": "Menu",
	"words.message": "Message",
	"words.min": "Min",
	"words.minimize": "Minimize",
	"words.name": "Name",
	"words.never": "Never",
	"words.no": "아니",
	"words.notification": "공고",
	"words.ok": "Ok",
	"words.options": "Options",
	"words.page": "Page",
	"words.parameters": "Parameters",
	"words.password": "Password",
	"words.paste": "Paste",
	"words.path": "Path",
	"words.pause": "Pause",
	"words.phone": "Phone",
	"words.presets": "프리셋",
	"words.preview": "Preview",
	"words.publish": "Publish",
	"words.publishing": "Publishing",
	"words.queued": "Queued",
	"words.ready": "Ready",
	"words.reason": "이유",
	"words.refresh": "Refresh",
	"words.reject": "Reject",
	"words.relevance": "Relevance",
	"words.reload": "Reload",
	"words.remove": "Remove",
	"words.rename": "Rename",
	"words.reset": "다시 놓기",
	"words.revert": "Revert",
	"words.review": "Review",
	"words.roles": "Roles",
	"words.save": "구하다",
	"words.schedule": "Schedule",
	"words.script": "Script",
	"words.scripts": "Scripts",
	"words.search": "Search",
	"words.select": "Select",
	"words.selected": "Selected",
	"words.settings": "Settings",
	"words.site": "Site",
	"words.sites": "Sites",
	"words.start": "Start",
	"words.state": "State",
	"words.status": "Status",
	"words.stay": "Stay",
	"words.stop": "Stop",
	"words.stopped": "Stopped",
	"words.submit": "제출하다",
	"words.system": "System",
	"words.tablet": "Tablet",
	"words.template": "Template",
	"words.templates": "Templates",
	"words.thread": "Thread",
	"words.timestamp": "Timestamp",
	"words.to": "To",
	"words.translation": "Translation",
	"words.type": "Type",
	"words.unknown": "Unknown",
	"words.unlock": "Unlock",
	"words.update": "최신 정보",
	"words.upload": "업로드",
	"words.url": "Url",
	"words.username": "Username",
	"words.users": "Users",
	"words.validating": "Validating",
	"words.value": "Value",
	"words.version": "Version",
	"words.view": "View",
	"words.warning": "Warning",
	"words.width": "Width",
	"words.yes": "예",
	"workflowCancellation.cancel": "Cancel",
	"workflowCancellation.continue": "Continue",
	"workflowCancellation.subtitle": "Edit will cancel all items that are in the scheduled deployment batch. Please review the list of files below and chose “Continue” to cancel workflow and edit or “Cancel” to remain in your dashboard.",
	"workflowCancellation.title": "Warning: Workflow Cancellation",
	"workflowStates.title": "Workflow States"
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
    return typeof x === 'function';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
    setTimeout(function () { throw err; }, 0);
}

/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */
var empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete: function () { }
};

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = /*@__PURE__*/ (function () { return Array.isArray || (function (x) { return x && typeof x.length === 'number'; }); })();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
    return x !== null && typeof x === 'object';
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var UnsubscriptionErrorImpl = /*@__PURE__*/ (function () {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
var UnsubscriptionError = UnsubscriptionErrorImpl;

/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */
var Subscription = /*@__PURE__*/ (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
                var parent_1 = _parentOrParents[index];
                parent_1.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) {
                this._unsubscribe = undefined;
            }
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (errors) {
            throw new UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError) ? err.errors : err); }, []);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = /*@__PURE__*/ (function () {
    return typeof Symbol === 'function'
        ? /*@__PURE__*/ Symbol('rxSubscriber')
        : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
})();

/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */
var Subscriber = /*@__PURE__*/ (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber;
}(Subscription));
var SafeSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}

/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber]) {
            return nextOrObserver[rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
    }
    return new Subscriber(nextOrObserver, error, complete);
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = /*@__PURE__*/ (function () { return typeof Symbol === 'function' && Symbol.observable || '@@observable'; })();

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
    return x;
}

/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}

/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */
var Observable = /*@__PURE__*/ (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor =  Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}

/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ (function () {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */
var SubjectSubscription = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription));

/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */
var SubjectSubscriber = /*@__PURE__*/ (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber));
var Subject = /*@__PURE__*/ (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable));
var AnonymousSubject = /*@__PURE__*/ (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));

/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var __assign$1 =
  (undefined && undefined.__assign) ||
  function () {
    __assign$1 =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign$1.apply(this, arguments);
  };
var __spreadArray =
  (undefined && undefined.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var UND;
function nou(object) {
  return object === null || object === UND;
}

/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var __assign$2 =
  (undefined && undefined.__assign) ||
  function () {
    __assign$2 =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign$2.apply(this, arguments);
  };
var bundledTranslations = {
  en: en,
  es: es,
  de: de,
  ko: ko,
  kr: ko
};
var intl$$ = new Subject();
var intl$ = intl$$.asObservable();
var currentTranslations = bundledTranslations;
var intl = createIntlInstance(getCurrentLocale());
function createIntlInstance(locale) {
  locale = locale.replace('kr', 'ko');
  return createIntl(
    {
      locale: locale,
      messages: currentTranslations[locale] || en
    },
    createIntlCache()
  );
}
function getPossibleTranslation(titleOrDescriptor, formatMessage, values) {
  if (nou(titleOrDescriptor)) {
    return null;
  }
  return typeof titleOrDescriptor === 'object' ? formatMessage(titleOrDescriptor, values) : titleOrDescriptor;
}
function getCurrentLocale() {
  return getStoredLanguage(localStorage.getItem('username')) || 'en';
}
function buildStoredLanguageKey(username) {
  return username + '_crafterStudioLanguage';
}
function getStoredLanguage(username) {
  var _a;
  return (_a = localStorage.getItem(buildStoredLanguageKey(username))) !== null && _a !== void 0
    ? _a
    : localStorage.getItem('crafterStudioLanguage');
}
document.addEventListener(
  'setlocale',
  function (e) {
    if (e.detail && e.detail !== intl.locale) {
      intl = createIntlInstance(e.detail);
      document.documentElement.setAttribute('lang', e.detail);
      intl$$.next(intl);
    }
  },
  false
);

/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var __assign$3 =
  (undefined && undefined.__assign) ||
  function () {
    __assign$3 =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign$3.apply(this, arguments);
  };
var components = new Map();

/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var __assign$4 =
  (undefined && undefined.__assign) ||
  function () {
    __assign$4 =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign$4.apply(this, arguments);
  };
function SystemIcon(props) {
  var _a, _b, _c;
  var icon = props.icon,
    className = props.className,
    style = props.style;
  if ('id' in icon) {
    var IconComponent = components.get(icon.id);
    var iconStyle = __assign$4(
      __assign$4(__assign$4({}, icon.style), style),
      (_a = props.svgIconProps) === null || _a === void 0 ? void 0 : _a.style
    );
    var iconClassName = clsx(
      icon.class,
      className,
      (_b = props.svgIconProps) === null || _b === void 0 ? void 0 : _b.className
    );
    return IconComponent
      ? React.createElement(
          Suspense$1,
          { fallback: React.createElement(Skeleton, { variant: 'rectangular', width: '20px' }) },
          React.createElement(
            IconComponent,
            __assign$4({}, props.svgIconProps, { style: iconStyle, className: iconClassName })
          )
        )
      : React.createElement(
          Tooltip,
          { title: 'Icon ' + icon.id + ' not found. Check config.' },
          React.createElement(ErrorRounded$1, null)
        );
  } else {
    return React.createElement(
      Icon,
      __assign$4({ className: icon.class, children: icon.content }, props.fontIconProps, {
        style: __assign$4(
          __assign$4(__assign$4({}, icon.style), style),
          (_c = props.fontIconProps) === null || _c === void 0 ? void 0 : _c.style
        )
      })
    );
  }
}

/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function usePossibleTranslation(titleOrDescriptor, values) {
  var formatMessage = useIntl().formatMessage;
  return getPossibleTranslation(titleOrDescriptor, formatMessage, values);
}

/*
 * Copyright (C) 2007-2020 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function ToolsPanelListItemButton(props) {
  var icon = props.icon,
    title = props.title,
    subtitle = props.subtitle,
    onClick = props.onClick,
    _a = props.displaySecondaryAction,
    displaySecondaryAction = _a === void 0 ? false : _a,
    _b = props.secondaryActionIcon,
    secondaryActionIcon = _b === void 0 ? React.createElement(ChevronRounded, null) : _b,
    onSecondaryActionClick = props.onSecondaryActionClick;
  return React.createElement(
    ListItem,
    { button: true, onClick: onClick, ContainerComponent: 'div' },
    React.createElement(
      ListItemIcon,
      null,
      React.createElement(SystemIcon, { icon: icon, fontIconProps: { fontSize: 'small' } })
    ),
    React.createElement(ListItemText, {
      primary: usePossibleTranslation(title),
      secondary: subtitle,
      primaryTypographyProps: { noWrap: true },
      secondaryTypographyProps: { noWrap: true }
    }),
    displaySecondaryAction
      ? React.createElement(
          ListItemSecondaryAction,
          { style: { right: '5px' } },
          React.createElement(
            IconButton,
            {
              size: 'small',
              onClick:
                onSecondaryActionClick !== null && onSecondaryActionClick !== void 0 ? onSecondaryActionClick : onClick
            },
            secondaryActionIcon
          )
        )
      : React.createElement(ChevronRounded, null)
  );
}

var IOSSwitch = styled$1(function (props) { return (createElement(Switch, __assign({ focusVisibleClassName: ".Mui-focusVisible", disableRipple: true }, props))); })(function (_a) {
    var theme = _a.theme;
    return ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color: theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            }
        }
    });
});
var ReactComponent = function (_a) {
    useEffect(function () {
        if (!document.getElementById("se1")) {
            // gross
            // @ts-ignore
            var siteId = craftercms.plugins.get("org.rd.plugin.awsmediaconvertconsole").source.site;
            // @ts-ignore
            var baseAddress = "/studio/1/plugin/file"
                + "?type=apps"
                + "&name=awsmediaconvertconsole"
                + "&pluginId=org.rd.plugin.awsmediaconvertconsole"
                + "&siteId=" + siteId;
            var se1 = document.createElement("script");
            se1.src = baseAddress + "&filename=video.js";
            se1.id = "se1";
            document.head.appendChild(se1);
            var se2 = document.createElement("script");
            se2.src = baseAddress + "&filename=videojs-dash.js";
            document.head.appendChild(se2);
        }
        dataLoadChannels();
        var intervalRef = setInterval(function () {
            dataLoadChannels();
        }, 10000);
        return function () {
            clearInterval(intervalRef);
        };
    }, []);
    var dataLoadChannels = function () {
        // @ts-ignore
        var siteId = craftercms.plugins.get("org.rd.plugin.awsmediaconvertconsole").source.site;
        // @ts-ignore
        var serviceUrl = '/studio/api/2/plugin/script/plugins/org/rd/plugin/awsmediaconvertconsole/mediaconvertconsole/list.json'
            + '?siteId=' + siteId;
        // @ts-ignore
        CrafterCMSNext.util.ajax.get(serviceUrl).subscribe(function (response) {
            setState(__assign(__assign({}, state), { channels: response.response.result }));
        });
    };
    var handleToggleOn = function (channelId) {
        // @ts-ignore
        var siteId = craftercms.plugins.get("org.rd.plugin.awsmediaconvertconsole").source.site;
        // @ts-ignore
        var serviceUrl = '/studio/api/2/plugin/script/plugins/org/rd/plugin/awsmediaconvertconsole/mediaconvertconsole/control.json'
            + '?siteId=' + siteId
            + '&action=start'
            + '&channelId=' + channelId;
        // @ts-ignore
        CrafterCMSNext.util.ajax.get(serviceUrl).subscribe(function (response) {
            dataLoadChannels();
        });
    };
    var handleToggleOff = function (channelId) {
        // @ts-ignore
        var siteId = craftercms.plugins.get("org.rd.plugin.awsmediaconvertconsole").source.site;
        // @ts-ignore
        var serviceUrl = '/studio/api/2/plugin/script/plugins/org/rd/plugin/awsmediaconvertconsole/mediaconvertconsole/control.json'
            + '?siteId=' + siteId
            + '&action=stop'
            + '&channelId=' + channelId;
        // @ts-ignore
        CrafterCMSNext.util.ajax.get(serviceUrl).subscribe(function (response) {
            dataLoadChannels();
        });
    };
    var handleToggleChannel = function (currentState, channelId) {
        if (!currentState || currentState == false) {
            handleToggleOn(channelId);
        }
        else {
            handleToggleOff(channelId);
        }
    };
    var closePreview = function () {
        // @ts-ignore
        var playerEl = document.getElementById('example-video');
        // @ts-ignore
        videojs(playerEl).dispose();
        // @ts-ignore
        window.awsMPVideoPlayer = null;
        setLightBoxOpen(false);
    };
    var previewDestination = function (videoSrcUrl) {
        setLightBoxOpen(open);
        window.setTimeout(function () {
            // @ts-ignore
            var player = window.awsMPVideoPlayer;
            if (!player) {
                // @ts-ignore
                var playerEl = document.getElementById('example-video');
                // @ts-ignore
                var player = videojs(playerEl);
                // @ts-ignore
                window.awsMPVideoPlayer = player;
            }
            // @ts-ignore
            var videoType = (videoSrcUrl.indexOf("m3u8") != -1) ? 'application/vnd.apple.mpegurl' : 'application/dash+xml';
            player.src({ src: videoSrcUrl, type: videoType });
            player.play();
        }, 1500);
    };
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var _c = useState(false), lightBoxOpen = _c[0], setLightBoxOpen = _c[1];
    var _d = useState({
        channels: {},
        hasMore: true,
        curPage: 0,
        itemsPerPage: 10,
        itemSize: 1
    }), state = _d[0], setState = _d[1];
    return (createElement(Fragment$1, null,
        createElement(ToolsPanelListItemButton, { icon: { id: "@mui/icons-material/VideocamOutlined" }, title: "AWS MediaConvert Jobs", onClick: function () { return setOpen(true); } }),
        createElement(Dialog, { fullWidth: false, maxWidth: 'lg', onClose: function () { return closePreview(); }, open: lightBoxOpen },
            createElement("video", { id: "example-video", style: { width: 600, height: 300 }, className: "video-js vjs-default-skin", controls: true }, " ")),
        createElement(Dialog, { fullWidth: true, maxWidth: 'xl', onClose: function () { return setOpen(false); }, "aria-labelledby": "simple-dialog-title", open: open },
            createElement(DialogTitle, { id: "max-width-dialog-title" }, "AWS MediaConvert Jobs"),
            createElement(TableContainer, { component: Paper },
                createElement(Table, { sx: { minWidth: 650 }, "aria-label": "simple table" },
                    createElement(TableHead, null,
                        createElement(TableRow, null,
                            createElement(TableCell, null, "Name"),
                            createElement(TableCell, { align: "right" }, "ID"),
                            createElement(TableCell, { align: "right" }, "State"),
                            createElement(TableCell, { align: "right" }, "Control"),
                            createElement(TableCell, { align: "right" }, "Preview"))),
                    createElement(TableBody, null, state.channels && Object.entries(state.channels).map(function (_a) {
                        var channelIdx = _a[0];
                        var channel = state.channels[channelIdx];
                        var channelSwitchOn = (channel.state == "STARTING" || channel.state == "RUNNING");
                        var d = Object.entries(channel.destinations).map(function (_a) {
                            var destIdx = _a[0];
                            var dest = channel.destinations[destIdx];
                            var epb = Object.entries(dest.endpoints).map(function (_a) {
                                var endpointsIdx = _a[0];
                                var endpoint = dest.endpoints[endpointsIdx];
                                var buttonLabel = (endpoint.description) ? endpoint.description : endpoint.description;
                                var button = (createElement("div", { style: { display: 'block' } },
                                    createElement(Button, { size: "small", color: "primary", onClick: function () { return previewDestination(endpoint.url); } }, buttonLabel)));
                                return button;
                            });
                            return (createElement("tr", null,
                                createElement("td", null,
                                    createElement("b", null, dest.mediaPackageChannelId)),
                                createElement("td", null, "\u00A0"),
                                createElement("td", null, "\u00A0"),
                                createElement("td", null, "\u00A0"),
                                createElement("td", null, epb)));
                        });
                        var channelPreviewButton = createElement("table", null, d);
                        // @ts-ignore
                        return (createElement(TableRow, { key: channel.id, sx: { '&:last-child td, &:last-child th': { border: 0 } } },
                            createElement(TableCell, { align: "left" },
                                createElement("b", null, channel.name)),
                            createElement(TableCell, { align: "right" }, channel.id),
                            createElement(TableCell, { align: "right" }, channel.state),
                            createElement(TableCell, { align: "right" },
                                createElement(FormControlLabel, { checked: channelSwitchOn, onChange: function () { return handleToggleChannel(channelSwitchOn, channel.id); }, control: createElement(IOSSwitch, null), label: "" })),
                            createElement(TableCell, { align: "right" }, channelPreviewButton)));
                    })))))));
};

var plugin /*: PluginDescriptor */ = {
    id: 'org.rd.plugin.awsmediaconvertconsole',
    name: 'Sample component library',
    description: 'An example plugin of a component library',
    author: 'Russ Danner',
    logo: null,
    locales: {},
    apps: [],
    widgets: {
        'org.rd.plugin.awsmediaconvertconsole.components.reactComponent': ReactComponent
    },
    scripts: [],
    stylesheets: [],
    themes: []
};

export default plugin;
