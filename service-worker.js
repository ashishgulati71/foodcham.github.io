"use strict";var precacheConfig=[["/index.html","7b14aae649b3a990ca5ef997a4ecfb41"],["/static/css/main.81c4c05b.css","3da23153d9f3cfbc78f8bbcb0562c65f"],["/static/js/main.3b433819.js","6527e0d1f7c71ac61d1c8a9745aa8d66"],["/static/media/404.2872c57e.png","2872c57eec5a0d0563cdc0f95a27a3b7"],["/static/media/5reasons.34824f47.png","34824f4721297750ab6cf4694c987e35"],["/static/media/ElegantIcons.907b74de.svg","907b74de12b89805612e69cd9ece33f6"],["/static/media/ElegantIcons.d72ad3f7.eot","d72ad3f702b9f23540e8ed78b4b65749"],["/static/media/ElegantIcons.f9d179f5.ttf","f9d179f59b0878ffcd32a5b3c8ae9c62"],["/static/media/ElegantIcons.fdd9e757.woff","fdd9e757bf61675343dcf55100422b84"],["/static/media/ElegantIconsd41d.d72ad3f7.eot","d72ad3f702b9f23540e8ed78b4b65749"],["/static/media/Home-mockup.16969e4f.png","16969e4f4adeb4921772e7c7948d9b22"],["/static/media/a.8d568f6f.jpg","8d568f6fa29ab9526d250968c1ad4595"],["/static/media/b.99acbc43.jpg","99acbc43246c38f0cc6dfb21b7763c81"],["/static/media/blog_waiters.3078f353.jpg","3078f353e4f7046a92782f30e5f101e3"],["/static/media/c.9f8232d9.jpg","9f8232d9dff644d64c5c50986c072e43"],["/static/media/fc-about.615c07cd.png","615c07cda4a8798210749fe20ec1a18c"],["/static/media/fc-client-sb.de99be9e.png","de99be9ead2883caa7915592ce6d8920"],["/static/media/fc-client-thc.552b1722.jpg","552b1722f76e8a4c28a58e6d9b013133"],["/static/media/fc-client-wbc.f42b8a2f.png","f42b8a2faca600697313fcc98be73d87"],["/static/media/fctablet.800a7e93.jpg","800a7e931ac699b0d4f870f62fbd915c"],["/static/media/foodcham-tie-up-ambrane.12b80de5.jpg","12b80de5027031c09f83e4208f4652d5"],["/static/media/foodcham-tie-up-sparktech.7d4efce6.png","7d4efce6843fcfd67d9dd8835c2cce85"],["/static/media/foodcham_banner-01.b8a6ed34.png","b8a6ed34a2fb8a94eb933961894addaa"],["/static/media/foodcham_bg.5047e929.jpg","5047e9295a37eab54f550019ea1b1d0a"],["/static/media/foodchamteam.038ef990.jpg","038ef9907176e1732b640964d89cd4dc"],["/static/media/himanshu_khosla.ffb6176f.jpeg","ffb6176f30dc8f51bb0df4e1853f2eb5"],["/static/media/jasbir_singh.b5ce4f41.jpg","b5ce4f41ff96b5598ef27b1d00ad7655"],["/static/media/limetray-ace-img.2096742b.jpg","2096742b7d7154304c6e5700665516b3"],["/static/media/limetray-click-img.3588726a.jpg","3588726ac9a513b35e37ae5732798ce6"],["/static/media/limetray-pro-banner.6f0c5a2e.jpg","6f0c5a2e46aed46efe5972a927262f25"],["/static/media/limetray-pulse-bg.71b77d06.jpg","71b77d06bd08505b6995783aaf0e52c5"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/mohit_puri.570182ad.jpg","570182adb101e33d45f003251d39923e"],["/static/media/navdeep.0d78fdea.jpg","0d78fdea20c1d5cf1cd4143b137daa66"],["/static/media/restaurant_marketing.4add7124.png","4add7124524d2a003869a8010bdf78cc"],["/static/media/tastyigniter-admin-demo.6dd91184.jpg","6dd911843f27ebb576a66583afff5364"],["/static/media/tastyigniter-storefront-demo.691260ca.jpg","691260ca8c5a1163db1ead8fabbae891"],["/static/media/timeline-01.190f7c71.png","190f7c715313d8f73e2ffbaa4edbbe95"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});