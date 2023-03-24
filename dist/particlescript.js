// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8Q5np":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c60b59b65854f6cc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"koUSg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _particlesJs = require("particles.js");
var _particlesJsDefault = parcelHelpers.interopDefault(_particlesJs);
(0, _particlesJsDefault.default)("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: false
});

},{"particles.js":"ad480","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ad480":[function(require,module,exports) {
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */ var pJS = function(tag_id, params) {
    var canvas_el = document.querySelector("#" + tag_id + " > .particles-js-canvas-el");
    /* particles.js variables with default values */ this.pJS = {
        canvas: {
            el: canvas_el,
            w: canvas_el.offsetWidth,
            h: canvas_el.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: false,
                anim: {
                    enable: false,
                    speed: 2,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 20,
                random: false,
                anim: {
                    enable: false,
                    speed: 20,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: false,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var pJS = this.pJS;
    /* params settings */ if (params) Object.deepExtend(pJS, params);
    pJS.tmp.obj = {
        size_value: pJS.particles.size.value,
        size_anim_speed: pJS.particles.size.anim.speed,
        move_speed: pJS.particles.move.speed,
        line_linked_distance: pJS.particles.line_linked.distance,
        line_linked_width: pJS.particles.line_linked.width,
        mode_grab_distance: pJS.interactivity.modes.grab.distance,
        mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
        mode_bubble_size: pJS.interactivity.modes.bubble.size,
        mode_repulse_distance: pJS.interactivity.modes.repulse.distance
    };
    pJS.fn.retinaInit = function() {
        if (pJS.retina_detect && window.devicePixelRatio > 1) {
            pJS.canvas.pxratio = window.devicePixelRatio;
            pJS.tmp.retina = true;
        } else {
            pJS.canvas.pxratio = 1;
            pJS.tmp.retina = false;
        }
        pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
        pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;
        pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
        pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
        pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
        pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
        pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
        pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
        pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
    };
    /* ---------- pJS functions - canvas ------------ */ pJS.fn.canvasInit = function() {
        pJS.canvas.ctx = pJS.canvas.el.getContext("2d");
    };
    pJS.fn.canvasSize = function() {
        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;
        if (pJS && pJS.interactivity.events.resize) window.addEventListener("resize", function() {
            pJS.canvas.w = pJS.canvas.el.offsetWidth;
            pJS.canvas.h = pJS.canvas.el.offsetHeight;
            /* resize canvas */ if (pJS.tmp.retina) {
                pJS.canvas.w *= pJS.canvas.pxratio;
                pJS.canvas.h *= pJS.canvas.pxratio;
            }
            pJS.canvas.el.width = pJS.canvas.w;
            pJS.canvas.el.height = pJS.canvas.h;
            /* repaint canvas on anim disabled */ if (!pJS.particles.move.enable) {
                pJS.fn.particlesEmpty();
                pJS.fn.particlesCreate();
                pJS.fn.particlesDraw();
                pJS.fn.vendors.densityAutoParticles();
            }
            /* density particles enabled */ pJS.fn.vendors.densityAutoParticles();
        });
    };
    pJS.fn.canvasPaint = function() {
        pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };
    pJS.fn.canvasClear = function() {
        pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
    };
    /* --------- pJS functions - particles ----------- */ pJS.fn.particle = function(color, opacity, position) {
        /* size */ this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
        if (pJS.particles.size.anim.enable) {
            this.size_status = false;
            this.vs = pJS.particles.size.anim.speed / 100;
            if (!pJS.particles.size.anim.sync) this.vs = this.vs * Math.random();
        }
        /* position */ this.x = position ? position.x : Math.random() * pJS.canvas.w;
        this.y = position ? position.y : Math.random() * pJS.canvas.h;
        /* check position  - into the canvas */ if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;
        else if (this.x < this.radius * 2) this.x = this.x + this.radius;
        if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;
        else if (this.y < this.radius * 2) this.y = this.y + this.radius;
        /* check position - avoid overlap */ if (pJS.particles.move.bounce) pJS.fn.vendors.checkOverlap(this, position);
        /* color */ this.color = {};
        if (typeof color.value == "object") {
            if (color.value instanceof Array) {
                var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
                this.color.rgb = hexToRgb(color_selected);
            } else {
                if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) this.color.rgb = {
                    r: color.value.r,
                    g: color.value.g,
                    b: color.value.b
                };
                if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) this.color.hsl = {
                    h: color.value.h,
                    s: color.value.s,
                    l: color.value.l
                };
            }
        } else if (color.value == "random") this.color.rgb = {
            r: Math.floor(Math.random() * 256) + 0,
            g: Math.floor(Math.random() * 256) + 0,
            b: Math.floor(Math.random() * 256) + 0
        };
        else if (typeof color.value == "string") {
            this.color = color;
            this.color.rgb = hexToRgb(this.color.value);
        }
        /* opacity */ this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
        if (pJS.particles.opacity.anim.enable) {
            this.opacity_status = false;
            this.vo = pJS.particles.opacity.anim.speed / 100;
            if (!pJS.particles.opacity.anim.sync) this.vo = this.vo * Math.random();
        }
        /* animation - velocity for speed */ var velbase = {};
        switch(pJS.particles.move.direction){
            case "top":
                velbase = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                velbase = {
                    x: 0.5,
                    y: -0.5
                };
                break;
            case "right":
                velbase = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                velbase = {
                    x: 0.5,
                    y: 0.5
                };
                break;
            case "bottom":
                velbase = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                velbase = {
                    x: -0.5,
                    y: 1
                };
                break;
            case "left":
                velbase = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                velbase = {
                    x: -0.5,
                    y: -0.5
                };
                break;
            default:
                velbase = {
                    x: 0,
                    y: 0
                };
                break;
        }
        if (pJS.particles.move.straight) {
            this.vx = velbase.x;
            this.vy = velbase.y;
            if (pJS.particles.move.random) {
                this.vx = this.vx * Math.random();
                this.vy = this.vy * Math.random();
            }
        } else {
            this.vx = velbase.x + Math.random() - 0.5;
            this.vy = velbase.y + Math.random() - 0.5;
        }
        // var theta = 2.0 * Math.PI * Math.random();
        // this.vx = Math.cos(theta);
        // this.vy = Math.sin(theta);
        this.vx_i = this.vx;
        this.vy_i = this.vy;
        /* if shape is image */ var shape_type = pJS.particles.shape.type;
        if (typeof shape_type == "object") {
            if (shape_type instanceof Array) {
                var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                this.shape = shape_selected;
            }
        } else this.shape = shape_type;
        if (this.shape == "image") {
            var sh = pJS.particles.shape;
            this.img = {
                src: sh.image.src,
                ratio: sh.image.width / sh.image.height
            };
            if (!this.img.ratio) this.img.ratio = 1;
            if (pJS.tmp.img_type == "svg" && pJS.tmp.source_svg != undefined) {
                pJS.fn.vendors.createSvgImg(this);
                if (pJS.tmp.pushing) this.img.loaded = false;
            }
        }
    };
    pJS.fn.particle.prototype.draw = function() {
        var p = this;
        if (p.radius_bubble != undefined) var radius = p.radius_bubble;
        else var radius = p.radius;
        if (p.opacity_bubble != undefined) var opacity = p.opacity_bubble;
        else var opacity = p.opacity;
        if (p.color.rgb) var color_value = "rgba(" + p.color.rgb.r + "," + p.color.rgb.g + "," + p.color.rgb.b + "," + opacity + ")";
        else var color_value = "hsla(" + p.color.hsl.h + "," + p.color.hsl.s + "%," + p.color.hsl.l + "%," + opacity + ")";
        pJS.canvas.ctx.fillStyle = color_value;
        pJS.canvas.ctx.beginPath();
        switch(p.shape){
            case "circle":
                pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
                break;
            case "edge":
                pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
                break;
            case "triangle":
                pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
                break;
            case "polygon":
                pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), p.y - radius / 0.76, radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), pJS.particles.shape.polygon.nb_sides, 1 // sideCountDenominator
                );
                break;
            case "star":
                pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), p.y - radius / 1.52, radius * 5.32 / (pJS.particles.shape.polygon.nb_sides / 3), pJS.particles.shape.polygon.nb_sides, 2 // sideCountDenominator
                );
                break;
            case "image":
                function draw() {
                    pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
                }
                if (pJS.tmp.img_type == "svg") var img_obj = p.img.obj;
                else var img_obj = pJS.tmp.img_obj;
                if (img_obj) draw();
                break;
        }
        pJS.canvas.ctx.closePath();
        if (pJS.particles.shape.stroke.width > 0) {
            pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
            pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
            pJS.canvas.ctx.stroke();
        }
        pJS.canvas.ctx.fill();
    };
    pJS.fn.particlesCreate = function() {
        for(var i = 0; i < pJS.particles.number.value; i++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    };
    pJS.fn.particlesUpdate = function() {
        for(var i = 0; i < pJS.particles.array.length; i++){
            /* the particle */ var p = pJS.particles.array[i];
            // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
            // var f = -BANG_SIZE / d;
            // if ( d < BANG_SIZE ) {
            //     var t = Math.atan2( dy, dx );
            //     p.vx = f * Math.cos(t);
            //     p.vy = f * Math.sin(t);
            // }
            /* move the particle */ if (pJS.particles.move.enable) {
                var ms = pJS.particles.move.speed / 2;
                p.x += p.vx * ms;
                p.y += p.vy * ms;
            }
            /* change opacity status */ if (pJS.particles.opacity.anim.enable) {
                if (p.opacity_status == true) {
                    if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
                    p.opacity += p.vo;
                } else {
                    if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
                    p.opacity -= p.vo;
                }
                if (p.opacity < 0) p.opacity = 0;
            }
            /* change size */ if (pJS.particles.size.anim.enable) {
                if (p.size_status == true) {
                    if (p.radius >= pJS.particles.size.value) p.size_status = false;
                    p.radius += p.vs;
                } else {
                    if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
                    p.radius -= p.vs;
                }
                if (p.radius < 0) p.radius = 0;
            }
            /* change particle position if it is out of canvas */ if (pJS.particles.move.out_mode == "bounce") var new_pos = {
                x_left: p.radius,
                x_right: pJS.canvas.w,
                y_top: p.radius,
                y_bottom: pJS.canvas.h
            };
            else var new_pos = {
                x_left: -p.radius,
                x_right: pJS.canvas.w + p.radius,
                y_top: -p.radius,
                y_bottom: pJS.canvas.h + p.radius
            };
            if (p.x - p.radius > pJS.canvas.w) {
                p.x = new_pos.x_left;
                p.y = Math.random() * pJS.canvas.h;
            } else if (p.x + p.radius < 0) {
                p.x = new_pos.x_right;
                p.y = Math.random() * pJS.canvas.h;
            }
            if (p.y - p.radius > pJS.canvas.h) {
                p.y = new_pos.y_top;
                p.x = Math.random() * pJS.canvas.w;
            } else if (p.y + p.radius < 0) {
                p.y = new_pos.y_bottom;
                p.x = Math.random() * pJS.canvas.w;
            }
            /* out of canvas modes */ switch(pJS.particles.move.out_mode){
                case "bounce":
                    if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
                    else if (p.x - p.radius < 0) p.vx = -p.vx;
                    if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
                    else if (p.y - p.radius < 0) p.vy = -p.vy;
                    break;
            }
            /* events */ if (isInArray("grab", pJS.interactivity.events.onhover.mode)) pJS.fn.modes.grabParticle(p);
            if (isInArray("bubble", pJS.interactivity.events.onhover.mode) || isInArray("bubble", pJS.interactivity.events.onclick.mode)) pJS.fn.modes.bubbleParticle(p);
            if (isInArray("repulse", pJS.interactivity.events.onhover.mode) || isInArray("repulse", pJS.interactivity.events.onclick.mode)) pJS.fn.modes.repulseParticle(p);
            /* interaction auto between particles */ if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) for(var j = i + 1; j < pJS.particles.array.length; j++){
                var p2 = pJS.particles.array[j];
                /* link particles */ if (pJS.particles.line_linked.enable) pJS.fn.interact.linkParticles(p, p2);
                /* attract particles */ if (pJS.particles.move.attract.enable) pJS.fn.interact.attractParticles(p, p2);
                /* bounce particles */ if (pJS.particles.move.bounce) pJS.fn.interact.bounceParticles(p, p2);
            }
        }
    };
    pJS.fn.particlesDraw = function() {
        /* clear canvas */ pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
        /* update each particles param */ pJS.fn.particlesUpdate();
        /* draw each particle */ for(var i = 0; i < pJS.particles.array.length; i++){
            var p = pJS.particles.array[i];
            p.draw();
        }
    };
    pJS.fn.particlesEmpty = function() {
        pJS.particles.array = [];
    };
    pJS.fn.particlesRefresh = function() {
        /* init all */ cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
        cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
        pJS.tmp.source_svg = undefined;
        pJS.tmp.img_obj = undefined;
        pJS.tmp.count_svg = 0;
        pJS.fn.particlesEmpty();
        pJS.fn.canvasClear();
        /* restart */ pJS.fn.vendors.start();
    };
    /* ---------- pJS functions - particles interaction ------------ */ pJS.fn.interact.linkParticles = function(p1, p2) {
        var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
        /* draw a line between p1 and p2 if the distance between them is under the config distance */ if (dist <= pJS.particles.line_linked.distance) {
            var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;
            if (opacity_line > 0) {
                /* style */ var color_line = pJS.particles.line_linked.color_rgb_line;
                pJS.canvas.ctx.strokeStyle = "rgba(" + color_line.r + "," + color_line.g + "," + color_line.b + "," + opacity_line + ")";
                pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
                //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
                /* path */ pJS.canvas.ctx.beginPath();
                pJS.canvas.ctx.moveTo(p1.x, p1.y);
                pJS.canvas.ctx.lineTo(p2.x, p2.y);
                pJS.canvas.ctx.stroke();
                pJS.canvas.ctx.closePath();
            }
        }
    };
    pJS.fn.interact.attractParticles = function(p1, p2) {
        /* condensed particles */ var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= pJS.particles.line_linked.distance) {
            var ax = dx / (pJS.particles.move.attract.rotateX * 1000), ay = dy / (pJS.particles.move.attract.rotateY * 1000);
            p1.vx -= ax;
            p1.vy -= ay;
            p2.vx += ax;
            p2.vy += ay;
        }
    };
    pJS.fn.interact.bounceParticles = function(p1, p2) {
        var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy), dist_p = p1.radius + p2.radius;
        if (dist <= dist_p) {
            p1.vx = -p1.vx;
            p1.vy = -p1.vy;
            p2.vx = -p2.vx;
            p2.vy = -p2.vy;
        }
    };
    /* ---------- pJS functions - modes events ------------ */ pJS.fn.modes.pushParticles = function(nb, pos) {
        pJS.tmp.pushing = true;
        for(var i = 0; i < nb; i++){
            pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
                "x": pos ? pos.pos_x : Math.random() * pJS.canvas.w,
                "y": pos ? pos.pos_y : Math.random() * pJS.canvas.h
            }));
            if (i == nb - 1) {
                if (!pJS.particles.move.enable) pJS.fn.particlesDraw();
                pJS.tmp.pushing = false;
            }
        }
    };
    pJS.fn.modes.removeParticles = function(nb) {
        pJS.particles.array.splice(0, nb);
        if (!pJS.particles.move.enable) pJS.fn.particlesDraw();
    };
    pJS.fn.modes.bubbleParticle = function(p) {
        /* on hover event */ if (pJS.interactivity.events.onhover.enable && isInArray("bubble", pJS.interactivity.events.onhover.mode)) {
            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x, dy_mouse = p.y - pJS.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;
            function init() {
                p.opacity_bubble = p.opacity;
                p.radius_bubble = p.radius;
            }
            /* mousemove - check ratio */ if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                if (ratio >= 0 && pJS.interactivity.status == "mousemove") {
                    /* size */ if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {
                        if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
                            var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;
                            if (size >= 0) p.radius_bubble = size;
                        } else {
                            var dif = p.radius - pJS.interactivity.modes.bubble.size, size = p.radius - dif * ratio;
                            if (size > 0) p.radius_bubble = size;
                            else p.radius_bubble = 0;
                        }
                    }
                    /* opacity */ if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {
                        if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
                            var opacity = pJS.interactivity.modes.bubble.opacity * ratio;
                            if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) p.opacity_bubble = opacity;
                        } else {
                            var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;
                            if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) p.opacity_bubble = opacity;
                        }
                    }
                }
            } else init();
            /* mouseleave */ if (pJS.interactivity.status == "mouseleave") init();
        } else if (pJS.interactivity.events.onclick.enable && isInArray("bubble", pJS.interactivity.events.onclick.mode)) {
            if (pJS.tmp.bubble_clicking) {
                var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x, dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;
                if (time_spent > pJS.interactivity.modes.bubble.duration) pJS.tmp.bubble_duration_end = true;
                if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
                    pJS.tmp.bubble_clicking = false;
                    pJS.tmp.bubble_duration_end = false;
                }
            }
            function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
                if (bubble_param != particles_param) {
                    if (!pJS.tmp.bubble_duration_end) {
                        if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                            if (p_obj_bubble != undefined) var obj = p_obj_bubble;
                            else var obj = p_obj;
                            if (obj != bubble_param) {
                                var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                                if (id == "size") p.radius_bubble = value;
                                if (id == "opacity") p.opacity_bubble = value;
                            }
                        } else {
                            if (id == "size") p.radius_bubble = undefined;
                            if (id == "opacity") p.opacity_bubble = undefined;
                        }
                    } else if (p_obj_bubble != undefined) {
                        var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration, dif = bubble_param - value_tmp;
                        value = bubble_param + dif;
                        if (id == "size") p.radius_bubble = value;
                        if (id == "opacity") p.opacity_bubble = value;
                    }
                }
            }
            if (pJS.tmp.bubble_clicking) {
                /* size */ process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, "size");
                /* opacity */ process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, "opacity");
            }
        }
    };
    pJS.fn.modes.repulseParticle = function(p) {
        if (pJS.interactivity.events.onhover.enable && isInArray("repulse", pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == "mousemove") {
            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x, dy_mouse = p.y - pJS.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            var normVec = {
                x: dx_mouse / dist_mouse,
                y: dy_mouse / dist_mouse
            }, repulseRadius = pJS.interactivity.modes.repulse.distance, velocity = 100, repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
            var pos = {
                x: p.x + normVec.x * repulseFactor,
                y: p.y + normVec.y * repulseFactor
            };
            if (pJS.particles.move.out_mode == "bounce") {
                if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
                if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
            } else {
                p.x = pos.x;
                p.y = pos.y;
            }
        } else if (pJS.interactivity.events.onclick.enable && isInArray("repulse", pJS.interactivity.events.onclick.mode)) {
            if (!pJS.tmp.repulse_finish) {
                pJS.tmp.repulse_count++;
                if (pJS.tmp.repulse_count == pJS.particles.array.length) pJS.tmp.repulse_finish = true;
            }
            if (pJS.tmp.repulse_clicking) {
                var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);
                var dx = pJS.interactivity.mouse.click_pos_x - p.x, dy = pJS.interactivity.mouse.click_pos_y - p.y, d = dx * dx + dy * dy;
                var force = -repulseRadius / d * 1;
                function process() {
                    var f = Math.atan2(dy, dx);
                    p.vx = force * Math.cos(f);
                    p.vy = force * Math.sin(f);
                    if (pJS.particles.move.out_mode == "bounce") {
                        var pos = {
                            x: p.x + p.vx,
                            y: p.y + p.vy
                        };
                        if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
                        else if (pos.x - p.radius < 0) p.vx = -p.vx;
                        if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
                        else if (pos.y - p.radius < 0) p.vy = -p.vy;
                    }
                }
                // default
                if (d <= repulseRadius) process();
            // bang - slow motion mode
            // if(!pJS.tmp.repulse_finish){
            //   if(d <= repulseRadius){
            //     process();
            //   }
            // }else{
            //   process();
            // }
            } else if (pJS.tmp.repulse_clicking == false) {
                p.vx = p.vx_i;
                p.vy = p.vy_i;
            }
        }
    };
    pJS.fn.modes.grabParticle = function(p) {
        if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == "mousemove") {
            var dx_mouse = p.x - pJS.interactivity.mouse.pos_x, dy_mouse = p.y - pJS.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            /* draw a line between the cursor and the particle if the distance between them is under the config distance */ if (dist_mouse <= pJS.interactivity.modes.grab.distance) {
                var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;
                if (opacity_line > 0) {
                    /* style */ var color_line = pJS.particles.line_linked.color_rgb_line;
                    pJS.canvas.ctx.strokeStyle = "rgba(" + color_line.r + "," + color_line.g + "," + color_line.b + "," + opacity_line + ")";
                    pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
                    //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
                    /* path */ pJS.canvas.ctx.beginPath();
                    pJS.canvas.ctx.moveTo(p.x, p.y);
                    pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
                    pJS.canvas.ctx.stroke();
                    pJS.canvas.ctx.closePath();
                }
            }
        }
    };
    /* ---------- pJS functions - vendors ------------ */ pJS.fn.vendors.eventsListeners = function() {
        /* events target element */ if (pJS.interactivity.detect_on == "window") pJS.interactivity.el = window;
        else pJS.interactivity.el = pJS.canvas.el;
        /* detect mouse pos - on hover / click event */ if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {
            /* el on mousemove */ pJS.interactivity.el.addEventListener("mousemove", function(e) {
                if (pJS.interactivity.el == window) var pos_x = e.clientX, pos_y = e.clientY;
                else var pos_x = e.offsetX || e.clientX, pos_y = e.offsetY || e.clientY;
                pJS.interactivity.mouse.pos_x = pos_x;
                pJS.interactivity.mouse.pos_y = pos_y;
                if (pJS.tmp.retina) {
                    pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
                    pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
                }
                pJS.interactivity.status = "mousemove";
            });
            /* el on onmouseleave */ pJS.interactivity.el.addEventListener("mouseleave", function(e) {
                pJS.interactivity.mouse.pos_x = null;
                pJS.interactivity.mouse.pos_y = null;
                pJS.interactivity.status = "mouseleave";
            });
        }
        /* on click event */ if (pJS.interactivity.events.onclick.enable) pJS.interactivity.el.addEventListener("click", function() {
            pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
            pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
            pJS.interactivity.mouse.click_time = new Date().getTime();
            if (pJS.interactivity.events.onclick.enable) switch(pJS.interactivity.events.onclick.mode){
                case "push":
                    if (pJS.particles.move.enable) pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                    else {
                        if (pJS.interactivity.modes.push.particles_nb == 1) pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                        else if (pJS.interactivity.modes.push.particles_nb > 1) pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                    }
                    break;
                case "remove":
                    pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    pJS.tmp.bubble_clicking = true;
                    break;
                case "repulse":
                    pJS.tmp.repulse_clicking = true;
                    pJS.tmp.repulse_count = 0;
                    pJS.tmp.repulse_finish = false;
                    setTimeout(function() {
                        pJS.tmp.repulse_clicking = false;
                    }, pJS.interactivity.modes.repulse.duration * 1000);
                    break;
            }
        });
    };
    pJS.fn.vendors.densityAutoParticles = function() {
        if (pJS.particles.number.density.enable) {
            /* calc area */ var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
            if (pJS.tmp.retina) area = area / (pJS.canvas.pxratio * 2);
            /* calc number of particles based on density area */ var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;
            /* add or remove X particles */ var missing_particles = pJS.particles.array.length - nb_particles;
            if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
            else pJS.fn.modes.removeParticles(missing_particles);
        }
    };
    pJS.fn.vendors.checkOverlap = function(p1, position) {
        for(var i = 0; i < pJS.particles.array.length; i++){
            var p2 = pJS.particles.array[i];
            var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= p1.radius + p2.radius) {
                p1.x = position ? position.x : Math.random() * pJS.canvas.w;
                p1.y = position ? position.y : Math.random() * pJS.canvas.h;
                pJS.fn.vendors.checkOverlap(p1);
            }
        }
    };
    pJS.fn.vendors.createSvgImg = function(p) {
        /* set color to svg element */ var svgXml = pJS.tmp.source_svg, rgbHex = /#([0-9A-F]{3,6})/gi, coloredSvgXml = svgXml.replace(rgbHex, function(m, r, g, b) {
            if (p.color.rgb) var color_value = "rgba(" + p.color.rgb.r + "," + p.color.rgb.g + "," + p.color.rgb.b + "," + p.opacity + ")";
            else var color_value = "hsla(" + p.color.hsl.h + "," + p.color.hsl.s + "%," + p.color.hsl.l + "%," + p.opacity + ")";
            return color_value;
        });
        /* prepare to create img with colored svg */ var svg = new Blob([
            coloredSvgXml
        ], {
            type: "image/svg+xml;charset=utf-8"
        }), DOMURL = window.URL || window.webkitURL || window, url = DOMURL.createObjectURL(svg);
        /* create particle img obj */ var img = new Image();
        img.addEventListener("load", function() {
            p.img.obj = img;
            p.img.loaded = true;
            DOMURL.revokeObjectURL(url);
            pJS.tmp.count_svg++;
        });
        img.src = url;
    };
    pJS.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(pJS.fn.drawAnimFrame);
        canvas_el.remove();
        pJSDom = null;
    };
    pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
        // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
        var sideCount = sideCountNumerator * sideCountDenominator;
        var decimalSides = sideCountNumerator / sideCountDenominator;
        var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
        var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0, 0);
        for(var i = 0; i < sideCount; i++){
            c.lineTo(sideLength, 0);
            c.translate(sideLength, 0);
            c.rotate(interiorAngle);
        }
        //c.stroke();
        c.fill();
        c.restore();
    };
    pJS.fn.vendors.exportImg = function() {
        window.open(pJS.canvas.el.toDataURL("image/png"), "_blank");
    };
    pJS.fn.vendors.loadImg = function(type) {
        pJS.tmp.img_error = undefined;
        if (pJS.particles.shape.image.src != "") {
            if (type == "svg") {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", pJS.particles.shape.image.src);
                xhr.onreadystatechange = function(data) {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            pJS.tmp.source_svg = data.currentTarget.response;
                            pJS.fn.vendors.checkBeforeDraw();
                        } else {
                            console.log("Error pJS - Image not found");
                            pJS.tmp.img_error = true;
                        }
                    }
                };
                xhr.send();
            } else {
                var img = new Image();
                img.addEventListener("load", function() {
                    pJS.tmp.img_obj = img;
                    pJS.fn.vendors.checkBeforeDraw();
                });
                img.src = pJS.particles.shape.image.src;
            }
        } else {
            console.log("Error pJS - No image.src");
            pJS.tmp.img_error = true;
        }
    };
    pJS.fn.vendors.draw = function() {
        if (pJS.particles.shape.type == "image") {
            if (pJS.tmp.img_type == "svg") {
                if (pJS.tmp.count_svg >= pJS.particles.number.value) {
                    pJS.fn.particlesDraw();
                    if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
                    else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                } else //console.log('still loading...');
                if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            } else {
                if (pJS.tmp.img_obj != undefined) {
                    pJS.fn.particlesDraw();
                    if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
                    else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
                } else if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
            }
        } else {
            pJS.fn.particlesDraw();
            if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
            else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
    };
    pJS.fn.vendors.checkBeforeDraw = function() {
        // if shape is image
        if (pJS.particles.shape.type == "image") {
            if (pJS.tmp.img_type == "svg" && pJS.tmp.source_svg == undefined) pJS.tmp.checkAnimFrame = requestAnimFrame(check);
            else {
                //console.log('images loaded! cancel check');
                cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
                if (!pJS.tmp.img_error) {
                    pJS.fn.vendors.init();
                    pJS.fn.vendors.draw();
                }
            }
        } else {
            pJS.fn.vendors.init();
            pJS.fn.vendors.draw();
        }
    };
    pJS.fn.vendors.init = function() {
        /* init canvas + particles */ pJS.fn.retinaInit();
        pJS.fn.canvasInit();
        pJS.fn.canvasSize();
        pJS.fn.canvasPaint();
        pJS.fn.particlesCreate();
        pJS.fn.vendors.densityAutoParticles();
        /* particles.line_linked - convert hex colors to rgb */ pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
    };
    pJS.fn.vendors.start = function() {
        if (isInArray("image", pJS.particles.shape.type)) {
            pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
            pJS.fn.vendors.loadImg(pJS.tmp.img_type);
        } else pJS.fn.vendors.checkBeforeDraw();
    };
    /* ---------- pJS - start ------------ */ pJS.fn.vendors.eventsListeners();
    pJS.fn.vendors.start();
};
/* ---------- global functions - vendors ------------ */ Object.deepExtend = function(destination, source) {
    for(var property in source)if (source[property] && source[property].constructor && source[property].constructor === Object) {
        destination[property] = destination[property] || {};
        arguments.callee(destination[property], source[property]);
    } else destination[property] = source[property];
    return destination;
};
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();
window.cancelRequestAnimFrame = function() {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
function hexToRgb(hex) {
    // By Tim Down - http://stackoverflow.com/a/5624139/3493650
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function clamp(number, min, max) {
    return Math.min(Math.max(number, min), max);
}
function isInArray(value, array) {
    return array.indexOf(value) > -1;
}
/* ---------- particles.js functions - start ------------ */ window.pJSDom = [];
window.particlesJS = function(tag_id, params) {
    //console.log(params);
    /* no string id? so it's object params, and set the id with default id */ if (typeof tag_id != "string") {
        params = tag_id;
        tag_id = "particles-js";
    }
    /* no id? set the id to default id */ if (!tag_id) tag_id = "particles-js";
    /* pJS elements */ var pJS_tag = document.getElementById(tag_id), pJS_canvas_class = "particles-js-canvas-el", exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
    /* remove canvas if exists into the pJS target tag */ if (exist_canvas.length) while(exist_canvas.length > 0)pJS_tag.removeChild(exist_canvas[0]);
    /* create canvas element */ var canvas_el = document.createElement("canvas");
    canvas_el.className = pJS_canvas_class;
    /* set size canvas */ canvas_el.style.width = "100%";
    canvas_el.style.height = "100%";
    /* append canvas */ var canvas = document.getElementById(tag_id).appendChild(canvas_el);
    /* launch particle.js */ if (canvas != null) pJSDom.push(new pJS(tag_id, params));
};
window.particlesJS.load = function(tag_id, path_config_json, callback) {
    /* load json config */ var xhr = new XMLHttpRequest();
    xhr.open("GET", path_config_json);
    xhr.onreadystatechange = function(data) {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var params = JSON.parse(data.currentTarget.response);
                window.particlesJS(tag_id, params);
                if (callback) callback();
            } else {
                console.log("Error pJS - XMLHttpRequest status: " + xhr.status);
                console.log("Error pJS - File config not found");
            }
        }
    };
    xhr.send();
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8Q5np","koUSg"], "koUSg", "parcelRequire5e30")

//# sourceMappingURL=particlescript.js.map
