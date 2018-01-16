/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2017/hash/index.html","6c25e2a632427f3939c2c86340cefd65"],["/2017/list/index.html","45dca9610957a7f2c4b3a3fd68efe3ba"],["/2017/priority-queue/index.html","b9e1d2f83855834a98cc555afa4fd8b8"],["/2017/tree/index.html","b5169318f7ddfffe12baea83c85b3b3a"],["/2018/fate/index.html","18d7c673e620cc4567e5702ff2a4fc44"],["/about/index.html","54b296ebc6ee37c41b570d48b6d1f113"],["/archives/2017/12/index.html","cdd62b547fdaf6c712d74a4f5876f935"],["/archives/2017/index.html","cdd62b547fdaf6c712d74a4f5876f935"],["/archives/2018/01/index.html","185c85c4541f49cc68f651ca8ba780b2"],["/archives/2018/index.html","185c85c4541f49cc68f651ca8ba780b2"],["/archives/index.html","bb81e20138715200cbf743ed51c1a116"],["/categories/index.html","c7c17041dc7370129edfbafb2edbbebd"],["/categories/java/index.html","6fb366025dfc361fcaad843fbb4ec372"],["/categories/音乐/index.html","6b7b23735c4009f041234f545b9a82f2"],["/css/main.css","7a4d336b2b48d0061eac7ade1c4016a7"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","4cc950af6ea42869ec8446e7b79c71c5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/index.html","17823dc386d5425d4af138c69ade5eae"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/bootstrap.js","604848a56de6069f394f9dac2ad4f9c8"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","457dcf12ea34a9c1456c0df433895a06"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/motion.js","505210246d92fe61de255e0cfc9ad4e3"],["/js/src/post-details.js","9dbb3a79fbb1c05f5d86642f8a4585c5"],["/js/src/schemes/pisces.js","e6fe53144184d9d027c5fcb7133c8202"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/utils.js","dd177c049d5ed6bce3fd05c6f06cc273"],["/lib/fancybox/README.html","9c9a8688492403ebe56c0c4ba1fe03ac"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","d76602e24075b992d8a7f29bacf547c5"],["/lib/fancybox/source/jquery.fancybox.pack.js","b18acc634abd8fd52c77fe9eb120cfac"],["/lib/fastclick/README.html","e816b5373f541b073afee40b6b0b36d9"],["/lib/fastclick/lib/fastclick.js","095a85e3018b320a8706436e47ff0cdf"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","58ef2a29ebb2dc67d85c349e0ee27fd9"],["/lib/jquery_lazyload/README.html","81604588dac1cc1930a9d1da664c5d13"],["/lib/jquery_lazyload/jquery.lazyload.js","d30d94cfbdea4c03dc49bcd699cfdadc"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","8617158a93df21886d7338eda0adfccc"],["/lib/velocity/velocity.js","dddc3c3aabcc589479fa255e3ba6c717"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","1a6c668b1e2dca7d4ede0579e7142557"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/service-worker.js","06a942eb9aeccf08da08823c9460e46f"],["/sw-register.js","a070d3ae03641779f2ef833354fc7f29"],["/tags/index.html","940c56821456d00599605829b34b0db8"],["/tags/动漫/index.html","33c6848aab92c0968e9739b286dbb815"],["/tags/数据结构/index.html","587b3938394deddfcd307305df5d7395"],["/uploads/image/fate-1.jpg","fad16ecb51bd5f7be9c1ac0025e469bb"],["/uploads/image/hash-1.png","de69c01502aca1c51f6e2c3cc0f0edf6"],["/uploads/image/hash-2.png","aa739be91e04da77036b06dde122ab0c"],["/uploads/image/logo16.png","188aea7beb5b57b1ab0c0eb6c9ae8cc3"],["/uploads/image/logo180.png","0e71c68e0eaa7bafe83e1378d832f7cf"],["/uploads/image/logo300.png","40a15d64726f74ac334595b2582e39d1"],["/uploads/image/logo300.svg","31d7d04fc2fb443b4aea11ac20133887"],["/uploads/image/logo32.png","5ae6ee65e76a844da7ff67595a8ff08f"],["/uploads/image/pq-1.png","36ea63e2fdae39d1636e199d15a8b86b"],["/uploads/image/pq-2.png","fd4da4744f87a88bd21d8e4e30fb5e7a"],["/uploads/image/pq-3.png","c3a86c5fd5e6a8e0a5fe94d54857c911"],["/uploads/image/pq-4.png","640e0d22e7e3a175e82eaf58336bdcb6"],["/uploads/image/pq-5.png","dd998f329f002707a08a36e23f115192"],["/uploads/image/pq-6.png","5de7e0124c0b9edf7ced8a2fb89ab510"],["/uploads/image/pq-7.png","12121e8ef81e0f388bc7fe60994a5f44"],["/uploads/image/tree-1.png","c07e16d1736d62443df4dbad0c85a8c1"],["/uploads/image/tree-10.png","df1aa9c6a8b7c6338ce4a21a8a9319ce"],["/uploads/image/tree-11.png","1ccf5410e9f20a5fcd5df82ee077f596"],["/uploads/image/tree-12.png","6549af7bbaa9a87977ad0df2c60f8ec8"],["/uploads/image/tree-2.png","3fa38962dc11f281eba33d7ed992e1cf"],["/uploads/image/tree-3.png","ee8c533dd789d331fe15e212e1d034d6"],["/uploads/image/tree-4.png","b3430ace115037c025113dead248bc4f"],["/uploads/image/tree-5.png","b696f7b626859d855234a50a84cb2527"],["/uploads/image/tree-6.png","1d8dc75678fb26e4b407b32e79c7e57f"],["/uploads/image/tree-7.png","7a4fe865c6d9baf97fb2b027300d31ce"],["/uploads/image/tree-8.png","d44b8c0002486d8968ddbef19123bd3a"],["/uploads/image/tree-9.png","ea4a1ba00502a3cbe8feb3258397ef13"],["/uploads/image/upyun_logo.png","e7ede1290158f0ecbc43dcc857541c17"],["/uploads/m.jpg","b37f8f295d507e6c2ce35f3a538d5863"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
