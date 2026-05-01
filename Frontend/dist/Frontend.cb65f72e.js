// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"icAAj":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "cd1566bccb65f72e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"blcJa":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4931 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$4931.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$4931.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>App);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactQuery = require("@tanstack/react-query");
var _clientJs = require("./api/client.js");
var _dashboardJsx = require("./components/Dashboard.jsx");
var _dashboardJsxDefault = parcelHelpers.interopDefault(_dashboardJsx);
var _quotesPageJsx = require("./components/QuotesPage.jsx");
var _quotesPageJsxDefault = parcelHelpers.interopDefault(_quotesPageJsx);
var _jobsPageJsx = require("./components/JobsPage.jsx");
var _jobsPageJsxDefault = parcelHelpers.interopDefault(_jobsPageJsx);
var _technicianPageJsx = require("./components/TechnicianPage.jsx");
var _technicianPageJsxDefault = parcelHelpers.interopDefault(_technicianPageJsx);
var _notificationsPageJsx = require("./components/NotificationsPage.jsx");
var _notificationsPageJsxDefault = parcelHelpers.interopDefault(_notificationsPageJsx);
var _s = $RefreshSig$();
const qc = new (0, _reactQuery.QueryClient)({
    defaultOptions: {
        queries: {
            staleTime: 5000,
            retry: 1
        }
    }
});
function initials(name) {
    return name.split(' ').map((n)=>n[0]).join('').slice(0, 2).toUpperCase();
}
function AppInner() {
    _s();
    const [page, setPage] = (0, _react.useState)('dashboard');
    const [managerCtx] = (0, _react.useState)('m1');
    const [techCtx, setTechCtx] = (0, _react.useState)('t1');
    const { data: managers = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'managers'
        ],
        queryFn: (0, _clientJs.api).getManagers
    });
    const { data: technicians = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'technicians'
        ],
        queryFn: (0, _clientJs.api).getTechnicians
    });
    const { data: allNotifs = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'notifications',
            'all'
        ],
        queryFn: ()=>(0, _clientJs.api).getNotifications(),
        refetchInterval: 4000
    });
    const unreadCount = allNotifs.filter((n)=>!n.read).length;
    const manager = managers.find((m)=>m.id === managerCtx);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "app",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("aside", {
                className: "sidebar",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "sidebar-logo",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "logo-mark",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "logo-icon",
                                    children: "B"
                                }, void 0, false, {
                                    fileName: "App.js",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "logo-text",
                                    children: "Brix Field"
                                }, void 0, false, {
                                    fileName: "App.js",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "App.js",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "App.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "sidebar-section",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "sidebar-label",
                                children: "Manager View"
                            }, void 0, false, {
                                fileName: "App.js",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            [
                                {
                                    id: 'dashboard',
                                    icon: "\u25C8",
                                    label: 'Dashboard'
                                },
                                {
                                    id: 'quotes',
                                    icon: "\u25FB",
                                    label: 'Quotes'
                                },
                                {
                                    id: 'jobs',
                                    icon: "\u229E",
                                    label: 'All Jobs'
                                }
                            ].map((item)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: `nav-item ${page === item.id ? 'active' : ''}`,
                                    onClick: ()=>setPage(item.id),
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "icon",
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "App.js",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        item.label
                                    ]
                                }, item.id, true, {
                                    fileName: "App.js",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `nav-item ${page === 'notifications' ? 'active' : ''}`,
                                onClick: ()=>setPage('notifications'),
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "icon",
                                        children: "\uD83D\uDD14"
                                    }, void 0, false, {
                                        fileName: "App.js",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    " Notifications",
                                    unreadCount > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "badge",
                                        children: unreadCount
                                    }, void 0, false, {
                                        fileName: "App.js",
                                        lineNumber: 59,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "App.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "App.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "sidebar-section",
                        style: {
                            marginTop: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "sidebar-label",
                                children: "Technician View"
                            }, void 0, false, {
                                fileName: "App.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            technicians.map((t)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    className: `nav-item ${page === 'technician' && techCtx === t.id ? 'active' : ''}`,
                                    onClick: ()=>{
                                        setTechCtx(t.id);
                                        setPage('technician');
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            style: {
                                                width: 20,
                                                height: 20,
                                                fontSize: 9,
                                                background: 'var(--accent)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#fff',
                                                fontWeight: 700,
                                                flexShrink: 0
                                            },
                                            children: initials(t.name)
                                        }, void 0, false, {
                                            fileName: "App.js",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this),
                                        t.name.split(' ')[0]
                                    ]
                                }, t.id, true, {
                                    fileName: "App.js",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "App.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: {
                            marginTop: 'auto',
                            padding: '0 12px'
                        },
                        children: manager && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            style: {
                                padding: '12px 10px',
                                borderTop: '1px solid var(--border)',
                                marginTop: 8
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    style: {
                                        fontSize: 11,
                                        color: 'var(--text3)',
                                        marginBottom: 4
                                    },
                                    children: "Signed in as manager"
                                }, void 0, false, {
                                    fileName: "App.js",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "chip",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "chip-avatar",
                                            children: initials(manager.name)
                                        }, void 0, false, {
                                            fileName: "App.js",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        manager.name
                                    ]
                                }, void 0, true, {
                                    fileName: "App.js",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "App.js",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "App.js",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "App.js",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("main", {
                className: "main",
                children: [
                    page === 'dashboard' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _dashboardJsxDefault.default), {
                        managerId: managerCtx
                    }, void 0, false, {
                        fileName: "App.js",
                        lineNumber: 93,
                        columnNumber: 38
                    }, this),
                    page === 'quotes' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _quotesPageJsxDefault.default), {
                        managerId: managerCtx
                    }, void 0, false, {
                        fileName: "App.js",
                        lineNumber: 94,
                        columnNumber: 38
                    }, this),
                    page === 'jobs' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jobsPageJsxDefault.default), {
                        managerId: managerCtx
                    }, void 0, false, {
                        fileName: "App.js",
                        lineNumber: 95,
                        columnNumber: 38
                    }, this),
                    page === 'technician' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _technicianPageJsxDefault.default), {
                        technicianId: techCtx
                    }, void 0, false, {
                        fileName: "App.js",
                        lineNumber: 96,
                        columnNumber: 38
                    }, this),
                    page === 'notifications' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _notificationsPageJsxDefault.default), {}, void 0, false, {
                        fileName: "App.js",
                        lineNumber: 97,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "App.js",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "App.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(AppInner, "DSV84BDIXi2uMvEBBfXjEurdNxA=", false, function() {
    return [
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useQuery)
    ];
});
_c = AppInner;
function App() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactQuery.QueryClientProvider), {
        client: qc,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(AppInner, {}, void 0, false, {
            fileName: "App.js",
            lineNumber: 104,
            columnNumber: 43
        }, this)
    }, void 0, false, {
        fileName: "App.js",
        lineNumber: 104,
        columnNumber: 10
    }, this);
}
_c1 = App;
var _c, _c1;
$RefreshReg$(_c, "AppInner");
$RefreshReg$(_c1, "App");

  $parcel$ReactRefreshHelpers$4931.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi","@tanstack/react-query":"gRw9X","./api/client.js":"hjiNq","./components/Dashboard.jsx":"lp8LZ","./components/QuotesPage.jsx":"5U90s","./components/JobsPage.jsx":"5rV6N","./components/TechnicianPage.jsx":"fpkq6","./components/NotificationsPage.jsx":"3HQ5l"}],"dVPUn":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("ee51401569654d91");

},{"ee51401569654d91":"gnlQf"}],"gnlQf":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) {
            if (isStaticChildren) {
                if (isArrayImpl(children)) {
                    for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
                    Object.freeze && Object.freeze(children);
                } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            } else validateChildKeys(children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = require("58362d9d82be395f"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
})();

},{"58362d9d82be395f":"jMk1U"}],"jMk1U":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("a569817e6ea559f6");

},{"a569817e6ea559f6":"ghslp"}],"ghslp":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
        });
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
    }
    function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function noop() {}
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, oldElement.props, oldElement._owner, oldElement._debugStack, oldElement._debugTask);
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ioInfo = payload._ioInfo;
            null != ioInfo && (ioInfo.start = ioInfo.end = performance.now());
            ioInfo = payload._result;
            var thenable = ioInfo();
            thenable.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 1;
                    payload._result = moduleObject;
                    var _ioInfo = payload._ioInfo;
                    null != _ioInfo && (_ioInfo.end = performance.now());
                    void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
                }
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) {
                    payload._status = 2;
                    payload._result = error;
                    var _ioInfo2 = payload._ioInfo;
                    null != _ioInfo2 && (_ioInfo2.end = performance.now());
                    void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                }
            });
            ioInfo = payload._ioInfo;
            if (null != ioInfo) {
                ioInfo.value = thenable;
                var displayName = thenable.displayName;
                "string" === typeof displayName && (ioInfo.name = displayName);
            }
            -1 === payload._status && (payload._status = 0, payload._result = thenable);
        }
        if (1 === payload._status) return ioInfo = payload._result, void 0 === ioInfo && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ioInfo), "default" in ioInfo || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ioInfo), ioInfo.default;
        throw payload._result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function releaseAsyncTransition() {
        ReactSharedInternals.asyncTransitions--;
    }
    function enqueueTask(task) {
        if (null === enqueueTaskImpl) try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
            enqueueTaskImpl = function(callback) {
                !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
            };
        }
        return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue) {
            if (0 !== queue.length) try {
                flushActQueue(queue);
                enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
            } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
            }
            else ReactSharedInternals.actQueue = null;
        }
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
        if (!isFlushing) {
            isFlushing = !0;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do {
                        ReactSharedInternals.didUsePromise = !1;
                        var continuation = callback(!1);
                        if (null !== continuation) {
                            if (ReactSharedInternals.didUsePromise) {
                                queue[i] = callback;
                                queue.splice(0, i);
                                return;
                            }
                            callback = continuation;
                        } else break;
                    }while (1);
                }
                queue.length = 0;
            } catch (error) {
                queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally{
                isFlushing = !1;
            }
        }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
        }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    deprecatedAPIs = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
            });
            if (!window.dispatchEvent(event)) return;
        }
        console.error(error);
    }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
            return queueMicrotask(callback);
        });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
            return resolveDispatcher().useMemoCache(size);
        }
    });
    var fnName = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Activity = REACT_ACTIVITY_TYPE;
    exports.Children = fnName;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
        try {
            var result = callback();
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
                didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            });
            return {
                then: function(resolve, reject) {
                    didAwaitActCall = !0;
                    thenable.then(function(returnValue) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        if (0 === prevActScopeDepth) {
                            try {
                                flushActQueue(queue), enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } catch (error$0) {
                                ReactSharedInternals.thrownErrors.push(error$0);
                            }
                            if (0 < ReactSharedInternals.thrownErrors.length) {
                                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                ReactSharedInternals.thrownErrors.length = 0;
                                reject(_thrownError);
                            }
                        } else resolve(returnValue);
                    }, function(error) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                    });
                }
            };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
            then: function(resolve, reject) {
                didAwaitActCall = !0;
                0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                })) : resolve(returnValue$jscomp$0);
            }
        };
    };
    exports.cache = function(fn) {
        return function() {
            return fn.apply(null, arguments);
        };
    };
    exports.cacheSignal = function() {
        return null;
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, props, owner, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)validateChildKeys(arguments[key]);
        return props;
    };
    exports.createContext = function(defaultValue) {
        defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i]);
        i = {};
        var key = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        key && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(type, key, i, getOwner(), propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        ctor = {
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: ctor,
            _init: lazyInitializer
        }, ioInfo = {
            name: "lazy",
            start: -1,
            end: -1,
            value: null,
            owner: null,
            debugStack: Error("react-stack-top-frame"),
            debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        ctor._ioInfo = ioInfo;
        lazyType._debugInfo = [
            {
                awaited: ioInfo
            }
        ];
        return lazyType;
    };
    exports.memo = function(type, compare) {
        null == type && console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        currentTransition._updatedFibers = new Set();
        ReactSharedInternals.T = currentTransition;
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
        return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
        null == create && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useEffect(create, deps);
    };
    exports.useEffectEvent = function(callback) {
        return resolveDispatcher().useEffectEvent(callback);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
        return resolveDispatcher().useTransition();
    };
    exports.version = "19.2.5";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
})();

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"7h6Pi":[function(require,module,exports,__globalThis) {
"use strict";
var Refresh = require("7422ead32dcc1e6b");
function debounce(func, delay) {
    {
        let timeout = undefined;
        let lastTime = 0;
        return function(args) {
            // Call immediately if last call was more than the delay ago.
            // Otherwise, set a timeout. This means the first call is fast
            // (for the common case of a single update), and subsequent updates
            // are batched.
            let now = Date.now();
            if (now - lastTime > delay) {
                lastTime = now;
                func.call(null, args);
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = undefined;
                    lastTime = Date.now();
                    func.call(null, args);
                }, delay);
            }
        };
    }
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30);
module.exports.init = function() {
    if (!globalThis.$RefreshReg$) {
        Refresh.injectIntoGlobalHook(globalThis);
        globalThis.$RefreshReg$ = function() {};
        globalThis.$RefreshSig$ = function() {
            return function(type) {
                return type;
            };
        };
        if (typeof window !== 'undefined') {
            let ErrorOverlay = require("e4d875b7642f9496");
            ErrorOverlay.setEditorHandler(function(errorLocation) {
                let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
                fetch(module.bundle.devServer + `/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
            });
            ErrorOverlay.startReportingRuntimeErrors({
                onError: function() {}
            });
            window.addEventListener('parcelhmraccept', ()=>{
                ErrorOverlay.dismissRuntimeErrors();
            });
        }
    }
};
// Everything below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module1) {
    globalThis.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module1.id + ' ' + id);
    };
    globalThis.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module1) {
    if (typeof window === 'undefined') return;
    if (isReactRefreshBoundary(module1.exports)) {
        registerExportsForReactRefresh(module1);
        if (module1.hot) {
            module1.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module1.exports;
            });
            module1.hot.accept(function(getParents) {
                var prevExports = module1.hot.data.prevExports;
                var nextExports = module1.exports;
                // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports);
                // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
}
// When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module1) {
    var exports = module1.exports, id = module1.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        var typeID = id + ' %exports% ' + key;
        Refresh.register(exportValue, typeID);
    }
}

},{"7422ead32dcc1e6b":"hpiFP","e4d875b7642f9496":"gnoim"}],"hpiFP":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("96622d495519d4e");

},{"96622d495519d4e":"7AD9f"}],"7AD9f":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function computeFullKey(signature) {
        if (null !== signature.fullKey) return signature.fullKey;
        var fullKey = signature.ownKey;
        try {
            var hooks = signature.getCustomHooks();
        } catch (err) {
            return signature.forceReset = !0, signature.fullKey = fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if ("function" !== typeof hook) return signature.forceReset = !0, signature.fullKey = fullKey;
            hook = allSignaturesByType.get(hook);
            if (void 0 !== hook) {
                var nestedHookKey = computeFullKey(hook);
                hook.forceReset && (signature.forceReset = !0);
                fullKey += "\n---\n" + nestedHookKey;
            }
        }
        return signature.fullKey = fullKey;
    }
    function resolveFamily(type) {
        return updatedFamiliesByType.get(type);
    }
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function getProperty(object, property) {
        try {
            return object[property];
        } catch (err) {}
    }
    function register(type, id) {
        if (!(null === type || "function" !== typeof type && "object" !== typeof type || allFamiliesByType.has(type))) {
            var family = allFamiliesByID.get(id);
            void 0 === family ? (family = {
                current: type
            }, allFamiliesByID.set(id, family)) : pendingUpdates.push([
                family,
                type
            ]);
            allFamiliesByType.set(type, family);
            if ("object" === typeof type && null !== type) switch(getProperty(type, "$$typeof")){
                case REACT_FORWARD_REF_TYPE:
                    register(type.render, id + "$render");
                    break;
                case REACT_MEMO_TYPE:
                    register(type.type, id + "$type");
            }
        }
    }
    function setSignature(type, key) {
        var forceReset = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, getCustomHooks = 3 < arguments.length ? arguments[3] : void 0;
        allSignaturesByType.has(type) || allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
        if ("object" === typeof type && null !== type) switch(getProperty(type, "$$typeof")){
            case REACT_FORWARD_REF_TYPE:
                setSignature(type.render, key, forceReset, getCustomHooks);
                break;
            case REACT_MEMO_TYPE:
                setSignature(type.type, key, forceReset, getCustomHooks);
        }
    }
    function collectCustomHooksForSignature(type) {
        type = allSignaturesByType.get(type);
        void 0 !== type && computeFullKey(type);
    }
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_MEMO_TYPE = Symbol.for("react.memo"), PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, allFamiliesByID = new Map(), allFamiliesByType = new PossiblyWeakMap(), allSignaturesByType = new PossiblyWeakMap(), updatedFamiliesByType = new PossiblyWeakMap(), pendingUpdates = [], helpersByRendererID = new Map(), helpersByRoot = new Map(), mountedRoots = new Set(), failedRoots = new Set(), rootElements = "function" === typeof WeakMap ? new WeakMap() : null, isPerformingRefresh = !1;
    exports._getMountedRootCount = function() {
        return mountedRoots.size;
    };
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = function() {
        var savedType, hasCustomHooks, didCollectHooks = !1;
        return function(type, key, forceReset, getCustomHooks) {
            if ("string" === typeof key) return savedType || (savedType = type, hasCustomHooks = "function" === typeof getCustomHooks), null == type || "function" !== typeof type && "object" !== typeof type || setSignature(type, key, forceReset, getCustomHooks), type;
            !didCollectHooks && hasCustomHooks && (didCollectHooks = !0, collectCustomHooksForSignature(savedType));
        };
    };
    exports.getFamilyByID = function(id) {
        return allFamiliesByID.get(id);
    };
    exports.getFamilyByType = function(type) {
        return allFamiliesByType.get(type);
    };
    exports.hasUnrecoverableErrors = function() {
        return !1;
    };
    exports.injectIntoGlobalHook = function(globalObject) {
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (void 0 === hook) {
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: !0,
                inject: function() {
                    return nextID++;
                },
                onScheduleFiberRoot: function() {},
                onCommitFiberRoot: function() {},
                onCommitFiberUnmount: function() {}
            };
        }
        if (hook.isDisabled) console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
        else {
            var oldInject = hook.inject;
            hook.inject = function(injected) {
                var id = oldInject.apply(this, arguments);
                "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
                return id;
            };
            hook.renderers.forEach(function(injected, id) {
                "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
            });
            var oldOnCommitFiberRoot = hook.onCommitFiberRoot, oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
            hook.onScheduleFiberRoot = function(id, root, children) {
                isPerformingRefresh || (failedRoots.delete(root), null !== rootElements && rootElements.set(root, children));
                return oldOnScheduleFiberRoot.apply(this, arguments);
            };
            hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
                var helpers = helpersByRendererID.get(id);
                if (void 0 !== helpers) {
                    helpersByRoot.set(root, helpers);
                    helpers = root.current;
                    var alternate = helpers.alternate;
                    null !== alternate ? (alternate = null != alternate.memoizedState && null != alternate.memoizedState.element && mountedRoots.has(root), helpers = null != helpers.memoizedState && null != helpers.memoizedState.element, !alternate && helpers ? (mountedRoots.add(root), failedRoots.delete(root)) : alternate && helpers || (alternate && !helpers ? (mountedRoots.delete(root), didError ? failedRoots.add(root) : helpersByRoot.delete(root)) : alternate || helpers || didError && failedRoots.add(root))) : mountedRoots.add(root);
                }
                return oldOnCommitFiberRoot.apply(this, arguments);
            };
        }
    };
    exports.isLikelyComponentType = function(type) {
        switch(typeof type){
            case "function":
                if (null != type.prototype) {
                    if (type.prototype.isReactComponent) return !0;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (1 < ownNames.length || "constructor" !== ownNames[0] || type.prototype.__proto__ !== Object.prototype) return !1;
                }
                type = type.name || type.displayName;
                return "string" === typeof type && /^[A-Z]/.test(type);
            case "object":
                if (null != type) switch(getProperty(type, "$$typeof")){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        return !0;
                }
                return !1;
            default:
                return !1;
        }
    };
    exports.performReactRefresh = function() {
        if (0 === pendingUpdates.length || isPerformingRefresh) return null;
        isPerformingRefresh = !0;
        try {
            var staleFamilies = new Set(), updatedFamilies = new Set(), updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0];
                _ref = _ref[1];
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(_ref, family);
                family.current = _ref;
                prevType.prototype && prevType.prototype.isReactComponent || _ref.prototype && _ref.prototype.isReactComponent ? _ref = !1 : (prevType = allSignaturesByType.get(prevType), _ref = allSignaturesByType.get(_ref), _ref = void 0 === prevType && void 0 === _ref || void 0 !== prevType && void 0 !== _ref && computeFullKey(prevType) === computeFullKey(_ref) && !_ref.forceReset ? !0 : !1);
                _ref ? updatedFamilies.add(family) : staleFamilies.add(family);
            });
            var update = {
                updatedFamilies: updatedFamilies,
                staleFamilies: staleFamilies
            };
            helpersByRendererID.forEach(function(helpers) {
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = !1, firstError = null, failedRootsSnapshot = cloneSet(failedRoots), mountedRootsSnapshot = cloneSet(mountedRoots), helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
                failedRoots.has(root);
                if (null !== rootElements && rootElements.has(root)) {
                    var element = rootElements.get(root);
                    try {
                        helpers.scheduleRoot(root, element);
                    } catch (err) {
                        didError || (didError = !0, firstError = err);
                    }
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    didError || (didError = !0, firstError = err);
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = !1;
        }
    };
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"gnoim":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setEditorHandler", ()=>$da9882e673ac146b$export$25a22ac46f1bd016);
parcelHelpers.export(exports, "reportRuntimeError", ()=>$da9882e673ac146b$export$74e9101ce4078c0);
parcelHelpers.export(exports, "startReportingRuntimeErrors", ()=>$da9882e673ac146b$export$cda2c88a41631c16);
parcelHelpers.export(exports, "dismissRuntimeErrors", ()=>$da9882e673ac146b$export$1cfa6d161ca81bd9);
parcelHelpers.export(exports, "stopReportingRuntimeErrors", ()=>$da9882e673ac146b$export$25ba7d9a816639e7);
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ /* eslint-disable react/react-in-jsx-scope, no-console */ var $b6c7f0288a15c619$var$n, $b6c7f0288a15c619$export$41c562ebe57d11e2, $b6c7f0288a15c619$var$u, $b6c7f0288a15c619$export$a8257692ac88316c, $b6c7f0288a15c619$var$i, $b6c7f0288a15c619$var$r, $b6c7f0288a15c619$var$o, $b6c7f0288a15c619$var$e, $b6c7f0288a15c619$var$f, $b6c7f0288a15c619$var$c, $b6c7f0288a15c619$var$s, $b6c7f0288a15c619$var$a, $b6c7f0288a15c619$var$h, $b6c7f0288a15c619$var$p = {}, $b6c7f0288a15c619$var$y = [], $b6c7f0288a15c619$var$v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $b6c7f0288a15c619$var$w = Array.isArray;
function $b6c7f0288a15c619$var$d(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function $b6c7f0288a15c619$var$g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function $b6c7f0288a15c619$export$c8a8987d4410bf2d(l, u, t) {
    var i, r, o, e = {};
    for(o in u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? $b6c7f0288a15c619$var$n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)null == e[o] && (e[o] = l.defaultProps[o]);
    return $b6c7f0288a15c619$var$m(l, e, i, r, null);
}
function $b6c7f0288a15c619$var$m(n, t, i, r, o) {
    var e = {
        type: n,
        props: t,
        key: i,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == o ? ++$b6c7f0288a15c619$var$u : o,
        __i: -1,
        __u: 0
    };
    return null == o && null != $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(e), e;
}
function $b6c7f0288a15c619$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}
function $b6c7f0288a15c619$export$ffb0004e005737fa(n) {
    return n.children;
}
function $b6c7f0288a15c619$export$16fa2f45be04daa8(n, l) {
    this.props = n, this.context = l;
}
function $b6c7f0288a15c619$var$S(n, l) {
    if (null == l) return n.__ ? $b6c7f0288a15c619$var$S(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? $b6c7f0288a15c619$var$S(n) : null;
}
function $b6c7f0288a15c619$var$C(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return $b6c7f0288a15c619$var$C(n);
    }
}
function $b6c7f0288a15c619$var$M(n) {
    (!n.__d && (n.__d = !0) && $b6c7f0288a15c619$var$i.push(n) && !$b6c7f0288a15c619$var$$.__r++ || $b6c7f0288a15c619$var$r != $b6c7f0288a15c619$export$41c562ebe57d11e2.debounceRendering) && (($b6c7f0288a15c619$var$r = $b6c7f0288a15c619$export$41c562ebe57d11e2.debounceRendering) || $b6c7f0288a15c619$var$o)($b6c7f0288a15c619$var$$);
}
function $b6c7f0288a15c619$var$$() {
    for(var n, u, t, r, o, f, c, s = 1; $b6c7f0288a15c619$var$i.length;)$b6c7f0288a15c619$var$i.length > s && $b6c7f0288a15c619$var$i.sort($b6c7f0288a15c619$var$e), n = $b6c7f0288a15c619$var$i.shift(), s = $b6c7f0288a15c619$var$i.length, n.__d && (t = void 0, o = (r = (u = n).__v).__e, f = [], c = [], u.__P && ((t = $b6c7f0288a15c619$var$d({}, r)).__v = r.__v + 1, $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(t), $b6c7f0288a15c619$var$O(u.__P, t, r, u.__n, u.__P.namespaceURI, 32 & r.__u ? [
        o
    ] : null, f, null == o ? $b6c7f0288a15c619$var$S(r) : o, !!(32 & r.__u), c), t.__v = r.__v, t.__.__k[t.__i] = t, $b6c7f0288a15c619$var$z(f, t, c), t.__e != o && $b6c7f0288a15c619$var$C(t)));
    $b6c7f0288a15c619$var$$.__r = 0;
}
function $b6c7f0288a15c619$var$I(n, l, u, t, i, r, o, e, f, c, s) {
    var a, h, v, w, d, g, _ = t && t.__k || $b6c7f0288a15c619$var$y, m = l.length;
    for(f = $b6c7f0288a15c619$var$P(u, l, _, f, m), a = 0; a < m; a++)null != (v = u.__k[a]) && (h = -1 == v.__i ? $b6c7f0288a15c619$var$p : _[v.__i] || $b6c7f0288a15c619$var$p, v.__i = a, g = $b6c7f0288a15c619$var$O(n, v, h, i, r, o, e, f, c, s), w = v.__e, v.ref && h.ref != v.ref && (h.ref && $b6c7f0288a15c619$var$q(h.ref, null, v), s.push(v.ref, v.__c || w, v)), null == d && null != w && (d = w), 4 & v.__u || h.__k === v.__k ? f = $b6c7f0288a15c619$var$A(v, f, n) : "function" == typeof v.type && void 0 !== g ? f = g : w && (f = w.nextSibling), v.__u &= -7);
    return u.__e = d, f;
}
function $b6c7f0288a15c619$var$P(n, l, u, t, i) {
    var r, o, e, f, c, s = u.length, a = s, h = 0;
    for(n.__k = new Array(i), r = 0; r < i; r++)null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? (f = r + h, (o = n.__k[r] = "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? $b6c7f0288a15c619$var$m(null, o, null, null, null) : $b6c7f0288a15c619$var$w(o) ? $b6c7f0288a15c619$var$m($b6c7f0288a15c619$export$ffb0004e005737fa, {
        children: o
    }, null, null, null) : null == o.constructor && o.__b > 0 ? $b6c7f0288a15c619$var$m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = $b6c7f0288a15c619$var$L(o, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
    if (a) for(r = 0; r < s; r++)null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = $b6c7f0288a15c619$var$S(e)), $b6c7f0288a15c619$var$B(e, e));
    return t;
}
function $b6c7f0288a15c619$var$A(n, l, u) {
    var t, i;
    if ("function" == typeof n.type) {
        for(t = n.__k, i = 0; t && i < t.length; i++)t[i] && (t[i].__ = n, l = $b6c7f0288a15c619$var$A(t[i], l, u));
        return l;
    }
    n.__e != l && (l && n.type && !u.contains(l) && (l = $b6c7f0288a15c619$var$S(n)), u.insertBefore(n.__e, l || null), l = n.__e);
    do l = l && l.nextSibling;
    while (null != l && 8 == l.nodeType);
    return l;
}
function $b6c7f0288a15c619$export$47e4c5b300681277(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || ($b6c7f0288a15c619$var$w(n) ? n.some(function(n) {
        $b6c7f0288a15c619$export$47e4c5b300681277(n, l);
    }) : l.push(n)), l;
}
function $b6c7f0288a15c619$var$L(n, l, u, t) {
    var i, r, o = n.key, e = n.type, f = l[u];
    if (null === f && null == n.key || f && o == f.key && e == f.type && 0 == (2 & f.__u)) return u;
    if (t > (null != f && 0 == (2 & f.__u) ? 1 : 0)) for(i = u - 1, r = u + 1; i >= 0 || r < l.length;){
        if (i >= 0) {
            if ((f = l[i]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return i;
            i--;
        }
        if (r < l.length) {
            if ((f = l[r]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return r;
            r++;
        }
    }
    return -1;
}
function $b6c7f0288a15c619$var$T(n, l, u) {
    "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || $b6c7f0288a15c619$var$v.test(l) ? u : u + "px";
}
function $b6c7f0288a15c619$var$j(n, l, u, t, i) {
    var r;
    n: if ("style" == l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || $b6c7f0288a15c619$var$T(n.style, l, "");
            if (u) for(l in u)t && u[l] == t[l] || $b6c7f0288a15c619$var$T(n.style, l, u[l]);
        }
    } else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace($b6c7f0288a15c619$var$f, "$1")), l = l.toLowerCase() in n || "onFocusOut" == l || "onFocusIn" == l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u.u = t.u : (u.u = $b6c7f0288a15c619$var$c, n.addEventListener(l, r ? $b6c7f0288a15c619$var$a : $b6c7f0288a15c619$var$s, r)) : n.removeEventListener(l, r ? $b6c7f0288a15c619$var$a : $b6c7f0288a15c619$var$s, r);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
    }
}
function $b6c7f0288a15c619$var$F(n) {
    return function(u) {
        if (this.l) {
            var t = this.l[u.type + n];
            if (null == u.t) u.t = $b6c7f0288a15c619$var$c++;
            else if (u.t < t.u) return;
            return t($b6c7f0288a15c619$export$41c562ebe57d11e2.event ? $b6c7f0288a15c619$export$41c562ebe57d11e2.event(u) : u);
        }
    };
}
function $b6c7f0288a15c619$var$O(n, u, t, i, r, o, e, f, c, s) {
    var a, h, p, y, v, _, m, b, S, C, M, $, P, A, H, L, T, j = u.type;
    if (null != u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), o = [
        f = u.__e = t.__e
    ]), (a = $b6c7f0288a15c619$export$41c562ebe57d11e2.__b) && a(u);
    n: if ("function" == typeof j) try {
        if (b = u.props, S = "prototype" in j && j.prototype.render, C = (a = j.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, t.__c ? m = (h = u.__c = t.__c).__ = h.__E : (S ? u.__c = h = new j(b, M) : (u.__c = h = new $b6c7f0288a15c619$export$16fa2f45be04daa8(b, M), h.constructor = j, h.render = $b6c7f0288a15c619$var$D), C && C.sub(h), h.props = b, h.state || (h.state = {}), h.context = M, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = $b6c7f0288a15c619$var$d({}, h.__s)), $b6c7f0288a15c619$var$d(h.__s, j.getDerivedStateFromProps(b, h.__s))), y = h.props, v = h.state, h.__v = u, p) S && null == j.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (S && null == j.getDerivedStateFromProps && b !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(b, h.__s, M) || u.__v == t.__v) {
                for(u.__v != t.__v && (h.props = b, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                    n && (n.__ = u);
                }), $ = 0; $ < h._sb.length; $++)h.__h.push(h._sb[$]);
                h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M), S && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(y, v, _);
            });
        }
        if (h.context = M, h.props = b, h.__P = n, h.__e = !1, P = $b6c7f0288a15c619$export$41c562ebe57d11e2.__r, A = 0, S) {
            for(h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
            h._sb = [];
        } else do h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        while (h.__d && ++A < 25);
        h.state = h.__s, null != h.getChildContext && (i = $b6c7f0288a15c619$var$d($b6c7f0288a15c619$var$d({}, i), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(y, v)), L = a, null != a && a.type === $b6c7f0288a15c619$export$ffb0004e005737fa && null == a.key && (L = $b6c7f0288a15c619$var$N(a.props.children)), f = $b6c7f0288a15c619$var$I(n, $b6c7f0288a15c619$var$w(L) ? L : [
            L
        ], u, t, i, r, o, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), m && (h.__E = h.__ = null);
    } catch (n) {
        if (u.__v = null, c || null != o) {
            if (n.then) {
                for(u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
                o[o.indexOf(f)] = null, u.__e = f;
            } else for(T = o.length; T--;)$b6c7f0288a15c619$var$g(o[T]);
        } else u.__e = t.__e, u.__k = t.__k;
        $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u, t);
    }
    else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = $b6c7f0288a15c619$var$V(t.__e, u, t, i, r, o, e, c, s);
    return (a = $b6c7f0288a15c619$export$41c562ebe57d11e2.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function $b6c7f0288a15c619$var$z(n, u, t) {
    for(var i = 0; i < t.length; i++)$b6c7f0288a15c619$var$q(t[i], t[++i], t[++i]);
    $b6c7f0288a15c619$export$41c562ebe57d11e2.__c && $b6c7f0288a15c619$export$41c562ebe57d11e2.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u.__v);
        }
    });
}
function $b6c7f0288a15c619$var$N(n) {
    return "object" != typeof n || null == n || n.__b && n.__b > 0 ? n : $b6c7f0288a15c619$var$w(n) ? n.map($b6c7f0288a15c619$var$N) : $b6c7f0288a15c619$var$d({}, n);
}
function $b6c7f0288a15c619$var$V(u, t, i, r, o, e, f, c, s) {
    var a, h, y, v, d, _, m, b = i.props, k = t.props, x = t.type;
    if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
        for(a = 0; a < e.length; a++)if ((d = e[a]) && "setAttribute" in d == !!x && (x ? d.localName == x : 3 == d.nodeType)) {
            u = d, e[a] = null;
            break;
        }
    }
    if (null == u) {
        if (null == x) return document.createTextNode(k);
        u = document.createElementNS(o, x, k.is && k), c && ($b6c7f0288a15c619$export$41c562ebe57d11e2.__m && $b6c7f0288a15c619$export$41c562ebe57d11e2.__m(t, e), c = !1), e = null;
    }
    if (null == x) b === k || c && u.data == k || (u.data = k);
    else {
        if (e = e && $b6c7f0288a15c619$var$n.call(u.childNodes), b = i.props || $b6c7f0288a15c619$var$p, !c && null != e) for(b = {}, a = 0; a < u.attributes.length; a++)b[(d = u.attributes[a]).name] = d.value;
        for(a in b)if (d = b[a], "children" == a) ;
        else if ("dangerouslySetInnerHTML" == a) y = d;
        else if (!(a in k)) {
            if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
            $b6c7f0288a15c619$var$j(u, a, null, d, o);
        }
        for(a in k)d = k[a], "children" == a ? v = d : "dangerouslySetInnerHTML" == a ? h = d : "value" == a ? _ = d : "checked" == a ? m = d : c && "function" != typeof d || b[a] === d || $b6c7f0288a15c619$var$j(u, a, d, b[a], o);
        if (h) c || y && (h.__html == y.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
        else if (y && (u.innerHTML = ""), $b6c7f0288a15c619$var$I("template" == t.type ? u.content : u, $b6c7f0288a15c619$var$w(v) ? v : [
            v
        ], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $b6c7f0288a15c619$var$S(i, 0), c, s), null != e) for(a = e.length; a--;)$b6c7f0288a15c619$var$g(e[a]);
        c || (a = "value", "progress" == x && null == _ ? u.removeAttribute("value") : null != _ && (_ !== u[a] || "progress" == x && !_ || "option" == x && _ != b[a]) && $b6c7f0288a15c619$var$j(u, a, _, b[a], o), a = "checked", null != m && m != u[a] && $b6c7f0288a15c619$var$j(u, a, m, b[a], o));
    }
    return u;
}
function $b6c7f0288a15c619$var$q(n, u, t) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == u || (n.__u = n(u));
        } else n.current = u;
    } catch (n) {
        $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, t);
    }
}
function $b6c7f0288a15c619$var$B(n, u, t) {
    var i, r;
    if ($b6c7f0288a15c619$export$41c562ebe57d11e2.unmount && $b6c7f0288a15c619$export$41c562ebe57d11e2.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || $b6c7f0288a15c619$var$q(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(r = 0; r < i.length; r++)i[r] && $b6c7f0288a15c619$var$B(i[r], u, t || "function" != typeof n.type);
    t || $b6c7f0288a15c619$var$g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function $b6c7f0288a15c619$var$D(n, l, u) {
    return this.constructor(n, u);
}
function $b6c7f0288a15c619$export$b3890eb0ae9dca99(u, t, i) {
    var r, o, e, f;
    t == document && (t = document.documentElement), $b6c7f0288a15c619$export$41c562ebe57d11e2.__ && $b6c7f0288a15c619$export$41c562ebe57d11e2.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], $b6c7f0288a15c619$var$O(t, u = (!r && i || t).__k = $b6c7f0288a15c619$export$c8a8987d4410bf2d($b6c7f0288a15c619$export$ffb0004e005737fa, null, [
        u
    ]), o || $b6c7f0288a15c619$var$p, $b6c7f0288a15c619$var$p, t.namespaceURI, !r && i ? [
        i
    ] : o ? null : t.firstChild ? $b6c7f0288a15c619$var$n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), $b6c7f0288a15c619$var$z(e, u, f);
}
function $b6c7f0288a15c619$export$fa8d919ba61d84db(n, l) {
    $b6c7f0288a15c619$export$b3890eb0ae9dca99(n, l, $b6c7f0288a15c619$export$fa8d919ba61d84db);
}
function $b6c7f0288a15c619$export$e530037191fcd5d7(l, u, t) {
    var i, r, o, e, f = $b6c7f0288a15c619$var$d({}, l.props);
    for(o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = null == u[o] && null != e ? e[o] : u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? $b6c7f0288a15c619$var$n.call(arguments, 2) : t), $b6c7f0288a15c619$var$m(l.type, f, i || l.key, r || l.ref, null);
}
function $b6c7f0288a15c619$export$fd42f52fd3ae1109(n) {
    function l(n) {
        var u, t;
        return this.getChildContext || (u = new Set, (t = {})[l.__c] = this, this.getChildContext = function() {
            return t;
        }, this.componentWillUnmount = function() {
            u = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && u.forEach(function(n) {
                n.__e = !0, $b6c7f0288a15c619$var$M(n);
            });
        }, this.sub = function(n) {
            u.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                u && u.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + $b6c7f0288a15c619$var$h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}
$b6c7f0288a15c619$var$n = $b6c7f0288a15c619$var$y.slice, $b6c7f0288a15c619$export$41c562ebe57d11e2 = {
    __e: function(n, l, u, t) {
        for(var i, r, o; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, $b6c7f0288a15c619$var$u = 0, $b6c7f0288a15c619$export$a8257692ac88316c = function(n) {
    return null != n && null == n.constructor;
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s != this.state ? this.__s : this.__s = $b6c7f0288a15c619$var$d({}, this.state), "function" == typeof n && (n = n($b6c7f0288a15c619$var$d({}, u), this.props)), n && $b6c7f0288a15c619$var$d(u, n), null != n && this.__v && (l && this._sb.push(l), $b6c7f0288a15c619$var$M(this));
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $b6c7f0288a15c619$var$M(this));
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.render = $b6c7f0288a15c619$export$ffb0004e005737fa, $b6c7f0288a15c619$var$i = [], $b6c7f0288a15c619$var$o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $b6c7f0288a15c619$var$e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, $b6c7f0288a15c619$var$$.__r = 0, $b6c7f0288a15c619$var$f = /(PointerCapture)$|Capture$/i, $b6c7f0288a15c619$var$c = 0, $b6c7f0288a15c619$var$s = $b6c7f0288a15c619$var$F(!1), $b6c7f0288a15c619$var$a = $b6c7f0288a15c619$var$F(!0), $b6c7f0288a15c619$var$h = 0;
var $23b7c1cb98b19658$var$t = /["&<]/;
function $23b7c1cb98b19658$var$n(r) {
    if (0 === r.length || !1 === $23b7c1cb98b19658$var$t.test(r)) return r;
    for(var e = 0, n = 0, o = "", f = ""; n < r.length; n++){
        switch(r.charCodeAt(n)){
            case 34:
                f = "&quot;";
                break;
            case 38:
                f = "&amp;";
                break;
            case 60:
                f = "&lt;";
                break;
            default:
                continue;
        }
        n !== e && (o += r.slice(e, n)), o += f, e = n + 1;
    }
    return n !== e && (o += r.slice(e, n)), o;
}
var $23b7c1cb98b19658$var$o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $23b7c1cb98b19658$var$f = 0, $23b7c1cb98b19658$var$i = Array.isArray;
function $23b7c1cb98b19658$export$34b9dba7ce09269b(e, t, n, o, i, u) {
    t || (t = {});
    var a, c, p = t;
    if ("ref" in p) for(c in p = {}, t)"ref" == c ? a = t[c] : p[c] = t[c];
    var l = {
        type: e,
        props: p,
        key: n,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --$23b7c1cb98b19658$var$f,
        __i: -1,
        __u: 0,
        __source: i,
        __self: u
    };
    if ("function" == typeof e && (a = e.defaultProps)) for(c in a)void 0 === p[c] && (p[c] = a[c]);
    return $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(l), l;
}
function $23b7c1cb98b19658$export$45700d561b2268ac(r) {
    var t = $23b7c1cb98b19658$export$34b9dba7ce09269b($b6c7f0288a15c619$export$ffb0004e005737fa, {
        tpl: r,
        exprs: [].slice.call(arguments, 1)
    });
    return t.key = t.__v, t;
}
var $23b7c1cb98b19658$var$c = {}, $23b7c1cb98b19658$var$p = /[A-Z]/g;
function $23b7c1cb98b19658$export$991f6ffe102e5bac(e, t) {
    if ($b6c7f0288a15c619$export$41c562ebe57d11e2.attr) {
        var f = $b6c7f0288a15c619$export$41c562ebe57d11e2.attr(e, t);
        if ("string" == typeof f) return f;
    }
    if ("ref" === e || "key" === e) return "";
    if ("style" === e && "object" == typeof t) {
        var i = "";
        for(var u in t){
            var a = t[u];
            if (null != a && "" !== a) {
                var l = "-" == u[0] ? u : $23b7c1cb98b19658$var$c[u] || ($23b7c1cb98b19658$var$c[u] = u.replace($23b7c1cb98b19658$var$p, "-$&").toLowerCase()), s = ";";
                "number" != typeof a || l.startsWith("--") || $23b7c1cb98b19658$var$o.test(l) || (s = "px;"), i = i + l + ":" + a + s;
            }
        }
        return e + '="' + i + '"';
    }
    return null == t || !1 === t || "function" == typeof t || "object" == typeof t ? "" : !0 === t ? e : e + '="' + $23b7c1cb98b19658$var$n(t) + '"';
}
function $23b7c1cb98b19658$export$40e96e718441efeb(r) {
    if (null == r || "boolean" == typeof r || "function" == typeof r) return null;
    if ("object" == typeof r) {
        if (void 0 === r.constructor) return r;
        if ($23b7c1cb98b19658$var$i(r)) {
            for(var e = 0; e < r.length; e++)r[e] = $23b7c1cb98b19658$export$40e96e718441efeb(r[e]);
            return r;
        }
    }
    return $23b7c1cb98b19658$var$n("" + r);
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $883a43040cbd0629$var$boundErrorHandler = null;
function $883a43040cbd0629$var$errorHandler(callback, e) {
    // $FlowFixMe
    if (!e.error) return;
    // $FlowFixMe
    const { error: error } = e;
    if (error instanceof Error) callback(error);
    else // Look in your browser's devtools for more information
    callback(new Error(error));
}
function $883a43040cbd0629$export$6503ec6e8aabbaf(target, callback) {
    if ($883a43040cbd0629$var$boundErrorHandler !== null) return;
    $883a43040cbd0629$var$boundErrorHandler = $883a43040cbd0629$var$errorHandler.bind(undefined, callback);
    target.addEventListener('error', $883a43040cbd0629$var$boundErrorHandler);
}
function $883a43040cbd0629$export$d07f55d4c15c0440(target) {
    if ($883a43040cbd0629$var$boundErrorHandler === null) return;
    target.removeEventListener('error', $883a43040cbd0629$var$boundErrorHandler);
    $883a43040cbd0629$var$boundErrorHandler = null;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $900f8c32b7484e20$var$boundRejectionHandler = null;
function $900f8c32b7484e20$var$rejectionHandler(callback, e) {
    if (e == null || e.reason == null) return callback(new Error('Unknown'));
    let { reason: reason } = e;
    if (reason instanceof Error) return callback(reason);
    // A non-error was rejected, we don't have a trace :(
    // Look in your browser's devtools for more information
    return callback(new Error(reason));
}
function $900f8c32b7484e20$export$6503ec6e8aabbaf(target, callback) {
    if ($900f8c32b7484e20$var$boundRejectionHandler !== null) return;
    $900f8c32b7484e20$var$boundRejectionHandler = $900f8c32b7484e20$var$rejectionHandler.bind(undefined, callback);
    // $FlowFixMe
    target.addEventListener('unhandledrejection', $900f8c32b7484e20$var$boundRejectionHandler);
}
function $900f8c32b7484e20$export$d07f55d4c15c0440(target) {
    if ($900f8c32b7484e20$var$boundRejectionHandler === null) return;
    // $FlowFixMe
    target.removeEventListener('unhandledrejection', $900f8c32b7484e20$var$boundRejectionHandler);
    $900f8c32b7484e20$var$boundRejectionHandler = null;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $5f72ade198404e99$var$stackTraceRegistered = false;
// Default: https://docs.microsoft.com/en-us/scripting/javascript/reference/stacktracelimit-property-error-javascript
let $5f72ade198404e99$var$restoreStackTraceValue = 10;
const $5f72ade198404e99$var$MAX_STACK_LENGTH = 50;
function $5f72ade198404e99$export$6503ec6e8aabbaf(limit = $5f72ade198404e99$var$MAX_STACK_LENGTH) {
    if ($5f72ade198404e99$var$stackTraceRegistered) return;
    try {
        $5f72ade198404e99$var$restoreStackTraceValue = Error.stackTraceLimit;
        Error.stackTraceLimit = limit;
        $5f72ade198404e99$var$stackTraceRegistered = true;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}
function $5f72ade198404e99$export$d07f55d4c15c0440() {
    if (!$5f72ade198404e99$var$stackTraceRegistered) return;
    try {
        Error.stackTraceLimit = $5f72ade198404e99$var$restoreStackTraceValue;
        $5f72ade198404e99$var$stackTraceRegistered = false;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * A representation of a stack frame.
 */ class $d35756f426c25812$export$8949fddf10447898 {
    constructor(functionName = null, fileName = null, lineNumber = null, columnNumber = null, scriptCode = null, sourceFunctionName = null, sourceFileName = null, sourceLineNumber = null, sourceColumnNumber = null, sourceScriptCode = null){
        if (functionName && functionName.indexOf('Object.') === 0) functionName = functionName.slice(7);
        if (// https://github.com/facebook/create-react-app/issues/2097
        // Let's ignore a meaningless name we get for top-level modules.
        functionName === 'friendlySyntaxErrorLabel' || functionName === 'exports.__esModule' || functionName === '<anonymous>' || !functionName) functionName = null;
        this.functionName = functionName;
        this.fileName = fileName;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
        this._originalFunctionName = sourceFunctionName;
        this._originalFileName = sourceFileName;
        this._originalLineNumber = sourceLineNumber;
        this._originalColumnNumber = sourceColumnNumber;
        this._scriptCode = scriptCode;
        this._originalScriptCode = sourceScriptCode;
    }
    /**
   * Returns the name of this function.
   */ getFunctionName() {
        return this.functionName || '(anonymous function)';
    }
    /**
   * Returns the source of the frame.
   * This contains the file name, line number, and column number when available.
   */ getSource() {
        let str = '';
        if (this.fileName != null) str += this.fileName + ':';
        if (this.lineNumber != null) str += this.lineNumber + ':';
        if (this.columnNumber != null) str += this.columnNumber + ':';
        return str.slice(0, -1);
    }
    /**
   * Returns a pretty version of this stack frame.
   */ toString() {
        const functionName = this.getFunctionName();
        const source = this.getSource();
        return `${functionName}${source ? ` (${source})` : ``}`;
    }
}
var $d35756f426c25812$export$2e2bcd8739ae039 = $d35756f426c25812$export$8949fddf10447898;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $865b9ffc545cb441$var$regexExtractLocation = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
function $865b9ffc545cb441$var$extractLocation(token) {
    return $865b9ffc545cb441$var$regexExtractLocation.exec(token) // $FlowFixMe
    .slice(1).map((v)=>{
        const p = Number(v);
        if (!isNaN(p)) return p;
        return v;
    });
}
const $865b9ffc545cb441$var$regexValidFrame_Chrome = /^\s*(at|in)\s.+(:\d+)/;
const $865b9ffc545cb441$var$regexValidFrame_FireFox = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;
function $865b9ffc545cb441$var$parseStack(stack) {
    let frames = stack.filter((e)=>$865b9ffc545cb441$var$regexValidFrame_Chrome.test(e) || $865b9ffc545cb441$var$regexValidFrame_FireFox.test(e)).map((e)=>{
        if ($865b9ffc545cb441$var$regexValidFrame_FireFox.test(e)) {
            // Strip eval, we don't care about it
            let isEval = false;
            if (/ > (eval|Function)/.test(e)) {
                e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ':$1');
                isEval = true;
            }
            const data = e.split(/[@]/g);
            const last = data.pop();
            return new $d35756f426c25812$export$2e2bcd8739ae039(data.join('@') || (isEval ? 'eval' : null), ...$865b9ffc545cb441$var$extractLocation(last));
        } else {
            // Strip eval, we don't care about it
            if (e.indexOf('(eval ') !== -1) e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
            if (e.indexOf('(at ') !== -1) e = e.replace(/\(at /, '(');
            const data = e.trim().split(/\s+/g).slice(1);
            const last = data.pop();
            return new $d35756f426c25812$export$2e2bcd8739ae039(data.join(' ') || null, ...$865b9ffc545cb441$var$extractLocation(last));
        }
    });
    let index = frames.findIndex((frame)=>frame.getFunctionName().includes('react-stack-bottom-frame'));
    if (index >= 0) frames = frames.slice(0, index);
    return frames;
}
/**
 * Turns an <code>Error</code>, or similar object, into a set of <code>StackFrame</code>s.
 * @alias parse
 */ function $865b9ffc545cb441$export$98e6a39c04603d36(error) {
    if (error == null) throw new Error('You cannot pass a null object.');
    if (typeof error === 'string') return $865b9ffc545cb441$var$parseStack(error.split('\n'));
    if (Array.isArray(error)) return $865b9ffc545cb441$var$parseStack(error);
    if (typeof error.stack === 'string') return $865b9ffc545cb441$var$parseStack(error.stack.split('\n'));
    throw new Error('The error you provided does not contain a stack trace.');
}
var $865b9ffc545cb441$export$2e2bcd8739ae039 = $865b9ffc545cb441$export$98e6a39c04603d36;
/**
 * Enhances a set of <code>StackFrame</code>s with their original positions and code (when available).
 * @param {StackFrame[]} frames A set of <code>StackFrame</code>s which contain (generated) code positions.
 * @param {number} [contextLines=3] The number of lines to provide before and after the line specified in the <code>StackFrame</code>.
 */ async function $df495b51087c401c$export$35b6448019ed80b8(error, contextLines = 3) {
    const frames = $865b9ffc545cb441$export$98e6a39c04603d36(error);
    // $FlowFixMe
    let res = await fetch(module.bundle.devServer + '/__parcel_code_frame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contextLines: contextLines,
            frames: frames.map((f)=>({
                    fileName: f.fileName,
                    lineNumber: f.lineNumber,
                    columnNumber: f.columnNumber
                }))
        })
    });
    let json = await res.json();
    return json.map((f, i)=>new $d35756f426c25812$export$8949fddf10447898(frames[i].functionName, f.fileName, f.lineNumber, f.columnNumber, f.compiledLines, frames[i].functionName, f.sourceFileName, f.sourceLineNumber, f.sourceColumnNumber, f.sourceLines));
}
var $df495b51087c401c$export$2e2bcd8739ae039 = $df495b51087c401c$export$35b6448019ed80b8;
const $6d40ebe8356580e0$var$CONTEXT_SIZE = 3;
function $6d40ebe8356580e0$export$9123e6c9c0ac21ed(crash) {
    return (error, unhandledRejection = false)=>{
        $df495b51087c401c$export$2e2bcd8739ae039(error, $6d40ebe8356580e0$var$CONTEXT_SIZE).then((stackFrames)=>{
            if (stackFrames == null) return;
            crash({
                error: error,
                unhandledRejection: unhandledRejection,
                contextSize: $6d40ebe8356580e0$var$CONTEXT_SIZE,
                stackFrames: stackFrames
            });
        }).catch((e)=>{
            // eslint-disable-next-line no-console
            console.log('Could not get the stack frames of error:', e);
        });
    };
}
function $6d40ebe8356580e0$var$patchConsole(method, onError) {
    /* eslint-disable no-console */ let original = console[method];
    console[method] = (...args)=>{
        let error = null;
        if (typeof args[0] === 'string') {
            let format = args[0].match(/%[oOdisfc]/g);
            if (format) {
                let errorIndex = format.findIndex((match)=>match === '%o' || match === '%O');
                if (errorIndex < 0) errorIndex = format.findIndex((match)=>match === '%s');
                if (errorIndex >= 0) error = args[errorIndex + 1];
                else error = args[1];
                if (!(error instanceof Error)) {
                    let index = 1;
                    let message = args[0].replace(/%[oOdisfc]/g, (match)=>{
                        switch(match){
                            case '%s':
                                return String(args[index++]);
                            case '%f':
                                return parseFloat(args[index++]);
                            case '%d':
                            case '%i':
                                return parseInt(args[index++], 10);
                            case '%o':
                            case '%O':
                                if (args[index] instanceof Error) return String(args[index++]);
                                else return JSON.stringify(args[index++]);
                            case '%c':
                                index++;
                                return '';
                        }
                    });
                    error = new Error(message);
                }
            } else error = new Error(args[0]);
        } else error = args.find((arg)=>arg instanceof Error);
        if (error && !error.message.includes('[parcel]') && typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
            // Attempt to append the React component stack
            // TODO: use React.captureOwnerStack once stable.
            let hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (hook.renderers instanceof Map) {
                for (let renderer of hook.renderers.values())if (typeof renderer?.currentDispatcherRef?.getCurrentStack === 'function') {
                    let stack = renderer.currentDispatcherRef.getCurrentStack();
                    if (stack) {
                        error.stack += stack;
                        break;
                    }
                }
            }
            onError(error);
        }
        original.apply(console, args);
    };
/* eslint-enable no-console */ }
function $6d40ebe8356580e0$export$38ec23daa6e8dcdf(crash) {
    const crashWithFramesRunTime = $6d40ebe8356580e0$export$9123e6c9c0ac21ed(crash);
    $883a43040cbd0629$export$6503ec6e8aabbaf(window, (error)=>crashWithFramesRunTime(error, false));
    $900f8c32b7484e20$export$6503ec6e8aabbaf(window, (error)=>crashWithFramesRunTime(error, true));
    $5f72ade198404e99$export$6503ec6e8aabbaf();
    $6d40ebe8356580e0$var$patchConsole('error', (error)=>crashWithFramesRunTime(error, false));
    return function() {
        $5f72ade198404e99$export$d07f55d4c15c0440();
        $900f8c32b7484e20$export$d07f55d4c15c0440(window);
        $883a43040cbd0629$export$d07f55d4c15c0440(window);
    };
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ var $10ecac3e4062713a$var$t, $10ecac3e4062713a$var$r, $10ecac3e4062713a$var$u, $10ecac3e4062713a$var$i, $10ecac3e4062713a$var$o = 0, $10ecac3e4062713a$var$f = [], $10ecac3e4062713a$var$c = $b6c7f0288a15c619$export$41c562ebe57d11e2, $10ecac3e4062713a$var$e = $10ecac3e4062713a$var$c.__b, $10ecac3e4062713a$var$a = $10ecac3e4062713a$var$c.__r, $10ecac3e4062713a$var$v = $10ecac3e4062713a$var$c.diffed, $10ecac3e4062713a$var$l = $10ecac3e4062713a$var$c.__c, $10ecac3e4062713a$var$m = $10ecac3e4062713a$var$c.unmount, $10ecac3e4062713a$var$s = $10ecac3e4062713a$var$c.__;
function $10ecac3e4062713a$var$p(n, t) {
    $10ecac3e4062713a$var$c.__h && $10ecac3e4062713a$var$c.__h($10ecac3e4062713a$var$r, n, $10ecac3e4062713a$var$o || t), $10ecac3e4062713a$var$o = 0;
    var u = $10ecac3e4062713a$var$r.__H || ($10ecac3e4062713a$var$r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function $10ecac3e4062713a$export$60241385465d0a34(n) {
    return $10ecac3e4062713a$var$o = 1, $10ecac3e4062713a$export$13e3392192263954($10ecac3e4062713a$var$D, n);
}
function $10ecac3e4062713a$export$13e3392192263954(n, u, i) {
    var o = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : $10ecac3e4062713a$var$D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = $10ecac3e4062713a$var$r, !$10ecac3e4062713a$var$r.__f)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = o.__c.props !== n;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), c && c.call(this, n, t, r) || i;
        };
        $10ecac3e4062713a$var$r.__f = !0;
        var c = $10ecac3e4062713a$var$r.shouldComponentUpdate, e = $10ecac3e4062713a$var$r.componentWillUpdate;
        $10ecac3e4062713a$var$r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, $10ecac3e4062713a$var$r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function $10ecac3e4062713a$export$6d9c69b0de29b591(n, u) {
    var i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 3);
    !$10ecac3e4062713a$var$c.__s && $10ecac3e4062713a$var$C(i.__H, u) && (i.__ = n, i.u = u, $10ecac3e4062713a$var$r.__H.__h.push(i));
}
function $10ecac3e4062713a$export$e5c5a5f917a5871c(n, u) {
    var i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 4);
    !$10ecac3e4062713a$var$c.__s && $10ecac3e4062713a$var$C(i.__H, u) && (i.__ = n, i.u = u, $10ecac3e4062713a$var$r.__h.push(i));
}
function $10ecac3e4062713a$export$b8f5890fc79d6aca(n) {
    return $10ecac3e4062713a$var$o = 5, $10ecac3e4062713a$export$1538c33de8887b59(function() {
        return {
            current: n
        };
    }, []);
}
function $10ecac3e4062713a$export$d5a552a76deda3c2(n, t, r) {
    $10ecac3e4062713a$var$o = 6, $10ecac3e4062713a$export$e5c5a5f917a5871c(function() {
        if ("function" == typeof n) {
            var r = n(t());
            return function() {
                n(null), r && "function" == typeof r && r();
            };
        }
        if (n) return n.current = t(), function() {
            return n.current = null;
        };
    }, null == r ? r : r.concat(n));
}
function $10ecac3e4062713a$export$1538c33de8887b59(n, r) {
    var u = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 7);
    return $10ecac3e4062713a$var$C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function $10ecac3e4062713a$export$35808ee640e87ca7(n, t) {
    return $10ecac3e4062713a$var$o = 8, $10ecac3e4062713a$export$1538c33de8887b59(function() {
        return n;
    }, t);
}
function $10ecac3e4062713a$export$fae74005e78b1a27(n) {
    var u = $10ecac3e4062713a$var$r.context[n.__c], i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub($10ecac3e4062713a$var$r)), u.props.value) : n.__;
}
function $10ecac3e4062713a$export$dc8fbce3eb94dc1e(n, t) {
    $10ecac3e4062713a$var$c.useDebugValue && $10ecac3e4062713a$var$c.useDebugValue(t ? t(n) : n);
}
function $10ecac3e4062713a$export$c052f6604b7d51fe(n) {
    var u = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 10), i = $10ecac3e4062713a$export$60241385465d0a34();
    return u.__ = n, $10ecac3e4062713a$var$r.componentDidCatch || ($10ecac3e4062713a$var$r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function $10ecac3e4062713a$export$f680877a34711e37() {
    var n = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 11);
    if (!n.__) {
        for(var u = $10ecac3e4062713a$var$r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function $10ecac3e4062713a$var$j() {
    for(var n; n = $10ecac3e4062713a$var$f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach($10ecac3e4062713a$var$z), n.__H.__h.forEach($10ecac3e4062713a$var$B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], $10ecac3e4062713a$var$c.__e(t, n.__v);
    }
}
$10ecac3e4062713a$var$c.__b = function(n) {
    $10ecac3e4062713a$var$r = null, $10ecac3e4062713a$var$e && $10ecac3e4062713a$var$e(n);
}, $10ecac3e4062713a$var$c.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), $10ecac3e4062713a$var$s && $10ecac3e4062713a$var$s(n, t);
}, $10ecac3e4062713a$var$c.__r = function(n) {
    $10ecac3e4062713a$var$a && $10ecac3e4062713a$var$a(n), $10ecac3e4062713a$var$t = 0;
    var i = ($10ecac3e4062713a$var$r = n.__c).__H;
    i && ($10ecac3e4062713a$var$u === $10ecac3e4062713a$var$r ? (i.__h = [], $10ecac3e4062713a$var$r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (i.__h.forEach($10ecac3e4062713a$var$z), i.__h.forEach($10ecac3e4062713a$var$B), i.__h = [], $10ecac3e4062713a$var$t = 0)), $10ecac3e4062713a$var$u = $10ecac3e4062713a$var$r;
}, $10ecac3e4062713a$var$c.diffed = function(n) {
    $10ecac3e4062713a$var$v && $10ecac3e4062713a$var$v(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== $10ecac3e4062713a$var$f.push(t) && $10ecac3e4062713a$var$i === $10ecac3e4062713a$var$c.requestAnimationFrame || (($10ecac3e4062713a$var$i = $10ecac3e4062713a$var$c.requestAnimationFrame) || $10ecac3e4062713a$var$w)($10ecac3e4062713a$var$j)), t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.u = void 0;
    })), $10ecac3e4062713a$var$u = $10ecac3e4062713a$var$r = null;
}, $10ecac3e4062713a$var$c.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach($10ecac3e4062713a$var$z), n.__h = n.__h.filter(function(n) {
                return !n.__ || $10ecac3e4062713a$var$B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], $10ecac3e4062713a$var$c.__e(r, n.__v);
        }
    }), $10ecac3e4062713a$var$l && $10ecac3e4062713a$var$l(n, t);
}, $10ecac3e4062713a$var$c.unmount = function(n) {
    $10ecac3e4062713a$var$m && $10ecac3e4062713a$var$m(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            $10ecac3e4062713a$var$z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && $10ecac3e4062713a$var$c.__e(t, r.__v));
};
var $10ecac3e4062713a$var$k = "function" == typeof requestAnimationFrame;
function $10ecac3e4062713a$var$w(n) {
    var t, r = function() {
        clearTimeout(u), $10ecac3e4062713a$var$k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    $10ecac3e4062713a$var$k && (t = requestAnimationFrame(r));
}
function $10ecac3e4062713a$var$z(n) {
    var t = $10ecac3e4062713a$var$r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), $10ecac3e4062713a$var$r = t;
}
function $10ecac3e4062713a$var$B(n) {
    var t = $10ecac3e4062713a$var$r;
    n.__c = n.__(), $10ecac3e4062713a$var$r = t;
}
function $10ecac3e4062713a$var$C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function $10ecac3e4062713a$var$D(n, t) {
    return "function" == typeof t ? t(n) : t;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $74bb4be6e9b78681$export$f30cb9bc4f736419 = {
    // Colors for components styles
    background: 'white',
    color: 'black',
    headerColor: '#ce1126',
    primaryPreBackground: 'rgba(206, 17, 38, 0.05)',
    primaryPreColor: 'inherit',
    secondaryPreBackground: 'rgba(251, 245, 180, 0.3)',
    secondaryPreColor: 'inherit',
    footer: '#878e91',
    anchorColor: '#878e91',
    toggleBackground: 'transparent',
    toggleColor: '#878e91',
    closeColor: '#293238',
    navBackground: 'rgba(206, 17, 38, 0.05)',
    navArrow: '#ce1126',
    diffAdded: 'green',
    diffRemoved: '#ce1126',
    // Light color scheme inspired by https://chriskempson.github.io/base16/css/base16-github.css
    // base00: '#ffffff',
    base01: '#f5f5f5',
    // base02: '#c8c8fa',
    base03: '#6e6e6e',
    // base04: '#e8e8e8',
    base05: '#333333',
    // base06: '#ffffff',
    // base07: '#ffffff',
    base08: '#881280',
    // base09: '#0086b3',
    // base0A: '#795da3',
    base0B: '#1155cc',
    base0C: '#994500',
    // base0D: '#795da3',
    base0E: '#c80000'
};
const $74bb4be6e9b78681$export$3e936a8db52a10a0 = {
    // Colors for components styles
    background: '#353535',
    color: 'white',
    headerColor: '#e83b46',
    primaryPreBackground: 'rgba(206, 17, 38, 0.1)',
    primaryPreColor: '#fccfcf',
    secondaryPreBackground: 'rgba(251, 245, 180, 0.1)',
    secondaryPreColor: '#fbf5b4',
    footer: '#878e91',
    anchorColor: '#878e91',
    toggleBackground: 'transparent',
    toggleColor: '#878e91',
    closeColor: '#ffffff',
    navBackground: 'rgba(206, 17, 38, 0.2)',
    navArrow: '#ce1126',
    diffAdded: '#85e285',
    diffRemoved: '#ff5459',
    // Dark color scheme inspired by https://github.com/atom/base16-tomorrow-dark-theme/blob/master/styles/colors.less
    // base00: '#1d1f21',
    base01: '#282a2e',
    // base02: '#373b41',
    base03: '#969896',
    // base04: '#b4b7b4',
    base05: '#c5c8c6',
    // base06: '#e0e0e0',
    // base07: '#ffffff',
    base08: '#cc6666',
    // base09: '#de935f',
    // base0A: '#f0c674',
    base0B: '#b5bd68',
    base0C: '#8abeb7',
    // base0D: '#81a2be',
    base0E: '#b294bb'
};
const $74bb4be6e9b78681$export$bca14c5b3b88a9c9 = Object.fromEntries(Object.keys($74bb4be6e9b78681$export$f30cb9bc4f736419).map((key)=>[
        key,
        `light-dark(${$74bb4be6e9b78681$export$f30cb9bc4f736419[key]}, ${$74bb4be6e9b78681$export$3e936a8db52a10a0[key]})`
    ]));
const $74bb4be6e9b78681$export$7ef984671d1853d7 = {
    width: '100vw',
    height: '100vh',
    maxWidth: 'none',
    maxHeight: 'none',
    border: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    outline: 'none',
    colorScheme: 'light dark'
};
const $20d888b381d18c6c$var$overlayStyle = {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    height: '100%',
    width: '1024px',
    maxWidth: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '0.5rem',
    boxSizing: 'border-box',
    textAlign: 'left',
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '11px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    lineHeight: 1.5,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color
};
function $20d888b381d18c6c$var$ErrorOverlay(props) {
    const { shortcutHandler: shortcutHandler } = props;
    $10ecac3e4062713a$export$6d9c69b0de29b591(()=>{
        const onKeyDown = (e)=>{
            if (shortcutHandler) shortcutHandler(e.key);
        };
        window.addEventListener('keydown', onKeyDown);
        return ()=>{
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [
        shortcutHandler
    ]);
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $20d888b381d18c6c$var$overlayStyle,
        children: props.children
    });
}
var $20d888b381d18c6c$export$2e2bcd8739ae039 = $20d888b381d18c6c$var$ErrorOverlay;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $7aae0c9ea64fc08c$var$closeButtonStyle = {
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.closeColor,
    lineHeight: '1rem',
    fontSize: '1.5rem',
    padding: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: 0
};
function $7aae0c9ea64fc08c$var$CloseButton({ close: close }) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        title: "Click or press Escape to dismiss.",
        onClick: close,
        style: $7aae0c9ea64fc08c$var$closeButtonStyle,
        children: "\xd7"
    });
}
var $7aae0c9ea64fc08c$export$2e2bcd8739ae039 = $7aae0c9ea64fc08c$var$CloseButton;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $1adc179a826c5dd2$var$navigationBarStyle = {
    marginBottom: '0.5rem'
};
const $1adc179a826c5dd2$var$buttonContainerStyle = {
    marginRight: '1em'
};
const $1adc179a826c5dd2$var$_navButtonStyle = {
    border: 'none',
    borderRadius: '4px',
    padding: '3px 6px',
    cursor: 'pointer'
};
const $1adc179a826c5dd2$var$leftButtonStyle = {
    ...$1adc179a826c5dd2$var$_navButtonStyle,
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navArrow,
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    marginRight: '1px'
};
const $1adc179a826c5dd2$var$rightButtonStyle = {
    ...$1adc179a826c5dd2$var$_navButtonStyle,
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navArrow,
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px'
};
function $1adc179a826c5dd2$var$NavigationBar(props) {
    const { currentError: currentError, totalErrors: totalErrors, previous: previous, next: next } = props;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $1adc179a826c5dd2$var$navigationBarStyle,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                style: $1adc179a826c5dd2$var$buttonContainerStyle,
                children: [
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: previous,
                        style: $1adc179a826c5dd2$var$leftButtonStyle,
                        children: "\u2190"
                    }),
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: next,
                        style: $1adc179a826c5dd2$var$rightButtonStyle,
                        children: "\u2192"
                    })
                ]
            }),
            `${currentError} of ${totalErrors} errors on the page`
        ]
    });
}
var $1adc179a826c5dd2$export$2e2bcd8739ae039 = $1adc179a826c5dd2$var$NavigationBar;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $c306e3a42547c8c2$var$headerStyle = {
    fontSize: '2em',
    fontFamily: 'sans-serif',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.headerColor,
    whiteSpace: 'pre-wrap',
    // Top bottom margin spaces header
    // Right margin revents overlap with close button
    margin: '0 2rem 0.75rem 0',
    flex: '0 0 auto'
};
function $c306e3a42547c8c2$var$Header(props) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $c306e3a42547c8c2$var$headerStyle,
        children: props.headerText
    });
}
var $c306e3a42547c8c2$export$2e2bcd8739ae039 = $c306e3a42547c8c2$var$Header;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $97c30df7f5c364f7$var$_preStyle = {
    position: 'relative',
    display: 'block',
    padding: '0.5em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem'
};
const $97c30df7f5c364f7$var$codeStyle = {
    fontFamily: 'Consolas, Menlo, monospace'
};
function $97c30df7f5c364f7$var$CodeBlock({ main: main, codeHTML: codeHTML }) {
    const primaryPreStyle = {
        ...$97c30df7f5c364f7$var$_preStyle,
        backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreBackground,
        color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreColor
    };
    const secondaryPreStyle = {
        ...$97c30df7f5c364f7$var$_preStyle,
        backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.secondaryPreBackground,
        color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.secondaryPreColor
    };
    const preStyle = main ? primaryPreStyle : secondaryPreStyle;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
        style: preStyle,
        children: $23b7c1cb98b19658$export$34b9dba7ce09269b("code", {
            style: $97c30df7f5c364f7$var$codeStyle,
            dangerouslySetInnerHTML: {
                __html: codeHTML
            }
        })
    });
}
var $97c30df7f5c364f7$export$2e2bcd8739ae039 = $97c30df7f5c364f7$var$CodeBlock;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $f78f50d61026cdc5$export$44b1e5ee7f53eae1(sourceFileName, sourceLineNumber, sourceColumnNumber, fileName, lineNumber, columnNumber, compiled) {
    let prettyURL;
    if (!compiled && sourceFileName && typeof sourceLineNumber === 'number') {
        // Remove everything up to the first /src/ or /node_modules/
        const trimMatch = /^[/|\\].*?[/|\\]((src|node_modules)[/|\\].*)/.exec(sourceFileName);
        if (trimMatch && trimMatch[1]) prettyURL = trimMatch[1];
        else prettyURL = sourceFileName;
        prettyURL += ':' + sourceLineNumber;
        // Note: we intentionally skip 0's because they're produced by cheap webpack maps
        if (sourceColumnNumber) prettyURL += ':' + sourceColumnNumber;
    } else if (fileName && typeof lineNumber === 'number') {
        prettyURL = fileName + ':' + lineNumber;
        // Note: we intentionally skip 0's because they're produced by cheap webpack maps
        if (columnNumber) prettyURL += ':' + columnNumber;
    } else prettyURL = 'unknown';
    return prettyURL.replace('webpack://', '.');
}
var $f78f50d61026cdc5$export$2e2bcd8739ae039 = $f78f50d61026cdc5$export$44b1e5ee7f53eae1;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $cdea3ae92bef6910$exports = {};
'use strict';
$cdea3ae92bef6910$exports = $cdea3ae92bef6910$var$ansiHTML;
// Reference to https://github.com/sindresorhus/ansi-regex
var $cdea3ae92bef6910$var$_regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var $cdea3ae92bef6910$var$_defColors = {
    reset: [
        'fff',
        '000'
    ],
    black: '000',
    red: 'ff0000',
    green: '209805',
    yellow: 'e8bf03',
    blue: '0000ff',
    magenta: 'ff00ff',
    cyan: '00ffee',
    lightgrey: 'f0f0f0',
    darkgrey: '888'
};
var $cdea3ae92bef6910$var$_styles = {
    30: 'black',
    31: 'red',
    32: 'green',
    33: 'yellow',
    34: 'blue',
    35: 'magenta',
    36: 'cyan',
    37: 'lightgrey'
};
var $cdea3ae92bef6910$var$_openTags = {
    '1': 'font-weight:bold',
    '2': 'opacity:0.5',
    '3': '<i>',
    '4': '<u>',
    '8': 'display:none',
    '9': '<del>' // delete
};
var $cdea3ae92bef6910$var$_closeTags = {
    '23': '</i>',
    '24': '</u>',
    '29': '</del>' // reset delete
};
[
    0,
    21,
    22,
    27,
    28,
    39,
    49
].forEach(function(n) {
    $cdea3ae92bef6910$var$_closeTags[n] = '</span>';
});
/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */ function $cdea3ae92bef6910$var$ansiHTML(text) {
    // Returns the text if the string has no ANSI escape code.
    if (!$cdea3ae92bef6910$var$_regANSI.test(text)) return text;
    // Cache opened sequence.
    var ansiCodes = [];
    // Replace with markup.
    var ret = text.replace(/\033\[(\d+)m/g, function(match, seq) {
        var ot = $cdea3ae92bef6910$var$_openTags[seq];
        if (ot) {
            // If current sequence has been opened, close it.
            if (!!~ansiCodes.indexOf(seq)) {
                ansiCodes.pop();
                return '</span>';
            }
            // Open tag.
            ansiCodes.push(seq);
            return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
        }
        var ct = $cdea3ae92bef6910$var$_closeTags[seq];
        if (ct) {
            // Pop sequence
            ansiCodes.pop();
            return ct;
        }
        return '';
    });
    // Make sure tags are closed.
    var l = ansiCodes.length;
    l > 0 && (ret += Array(l + 1).join('</span>'));
    return ret;
}
/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */ $cdea3ae92bef6910$var$ansiHTML.setColors = function(colors) {
    if (typeof colors !== 'object') throw new Error('`colors` parameter must be an Object.');
    var _finalColors = {};
    for(var key in $cdea3ae92bef6910$var$_defColors){
        var hex = colors.hasOwnProperty(key) ? colors[key] : null;
        if (!hex) {
            _finalColors[key] = $cdea3ae92bef6910$var$_defColors[key];
            continue;
        }
        if ('reset' === key) {
            if (typeof hex === 'string') hex = [
                hex
            ];
            if (!Array.isArray(hex) || hex.length === 0 || hex.some(function(h) {
                return typeof h !== 'string';
            })) throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
            var defHexColor = $cdea3ae92bef6910$var$_defColors[key];
            if (!hex[0]) hex[0] = defHexColor[0];
            if (hex.length === 1 || !hex[1]) {
                hex = [
                    hex[0]
                ];
                hex.push(defHexColor[1]);
            }
            hex = hex.slice(0, 2);
        } else if (typeof hex !== 'string') throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
        _finalColors[key] = hex;
    }
    $cdea3ae92bef6910$var$_setTags(_finalColors);
};
/**
 * Reset colors.
 */ $cdea3ae92bef6910$var$ansiHTML.reset = function() {
    $cdea3ae92bef6910$var$_setTags($cdea3ae92bef6910$var$_defColors);
};
/**
 * Expose tags, including open and close.
 * @type {Object}
 */ $cdea3ae92bef6910$var$ansiHTML.tags = {};
if (Object.defineProperty) {
    Object.defineProperty($cdea3ae92bef6910$var$ansiHTML.tags, 'open', {
        get: function() {
            return $cdea3ae92bef6910$var$_openTags;
        }
    });
    Object.defineProperty($cdea3ae92bef6910$var$ansiHTML.tags, 'close', {
        get: function() {
            return $cdea3ae92bef6910$var$_closeTags;
        }
    });
} else {
    $cdea3ae92bef6910$var$ansiHTML.tags.open = $cdea3ae92bef6910$var$_openTags;
    $cdea3ae92bef6910$var$ansiHTML.tags.close = $cdea3ae92bef6910$var$_closeTags;
}
function $cdea3ae92bef6910$var$_setTags(colors) {
    // reset all
    $cdea3ae92bef6910$var$_openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];
    // inverse
    $cdea3ae92bef6910$var$_openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];
    // dark grey
    $cdea3ae92bef6910$var$_openTags['90'] = 'color:#' + colors.darkgrey;
    for(var code in $cdea3ae92bef6910$var$_styles){
        var color = $cdea3ae92bef6910$var$_styles[code];
        var oriColor = colors[color] || '000';
        $cdea3ae92bef6910$var$_openTags[code] = 'color:#' + oriColor;
        code = parseInt(code);
        $cdea3ae92bef6910$var$_openTags[(code + 10).toString()] = 'background:#' + oriColor;
    }
}
$cdea3ae92bef6910$var$ansiHTML.reset();
// Map ANSI colors from what babel-code-frame uses to base16-github
// See: https://github.com/babel/babel/blob/e86f62b304d280d0bab52c38d61842b853848ba6/packages/babel-code-frame/src/index.js#L9-L22
const $b67e2a05a9c13039$var$colors = {
    reset: [
        $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base05,
        'transparent'
    ],
    black: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base05,
    red: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base08 /* marker, bg-invalid */ ,
    green: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0B /* string */ ,
    yellow: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base08 /* capitalized, jsx_tag, punctuator */ ,
    blue: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0C,
    magenta: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0C /* regex */ ,
    cyan: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0E /* keyword */ ,
    gray: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base03 /* comment, gutter */ ,
    lightgrey: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base01,
    darkgrey: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base03
};
/*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).setColors($b67e2a05a9c13039$var$colors);
// $FlowFixMe
for(let tag in /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open)/*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open[tag] = /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open[tag].replace(/#light-dark/g, 'light-dark');
function $b67e2a05a9c13039$var$generateAnsiHTML(txt) {
    return /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports)(txt.replace(/[&<>"']/g, (c)=>{
        switch(c){
            case '&':
                return '&amp';
            case '<':
                return '&lt;';
            case '>':
                return '&gt';
            case '"':
                return '&quot;';
            case "'":
                return '&#39;';
            default:
                return c;
        }
    }));
}
var $b67e2a05a9c13039$export$2e2bcd8739ae039 = $b67e2a05a9c13039$var$generateAnsiHTML;
const $e0e0fa52b83f95a9$var$linkStyle = {
    fontSize: '0.9em',
    marginBottom: '0.9em'
};
const $e0e0fa52b83f95a9$var$anchorStyle = {
    textDecoration: 'none',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.anchorColor,
    cursor: 'pointer'
};
const $e0e0fa52b83f95a9$var$codeAnchorStyle = {
    cursor: 'pointer'
};
const $e0e0fa52b83f95a9$var$toggleStyle = {
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.toggleColor,
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.toggleBackground,
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '1em',
    padding: '0px',
    lineHeight: '1.5'
};
function $e0e0fa52b83f95a9$var$StackFrame(props) {
    const { frame: frame, critical: critical, showCode: showCode } = props;
    const { fileName: fileName, lineNumber: lineNumber, columnNumber: columnNumber, _scriptCode: scriptLines, _originalFileName: sourceFileName, _originalLineNumber: sourceLineNumber, _originalColumnNumber: sourceColumnNumber, _originalScriptCode: sourceLines } = frame;
    const functionName = frame.getFunctionName();
    const [compiled, setCompiled] = $10ecac3e4062713a$export$60241385465d0a34(!sourceLines);
    const getErrorLocation = ()=>{
        const { _originalFileName: fileName, _originalLineNumber: lineNumber } = props.frame;
        // Unknown file
        if (!fileName) return null;
        // e.g. "/path-to-my-app/webpack/bootstrap eaddeb46b67d75e4dfc1"
        const isInternalWebpackBootstrapCode = fileName.trim().indexOf(' ') !== -1;
        if (isInternalWebpackBootstrapCode) return null;
        // Code is in a real file
        return {
            fileName: fileName,
            lineNumber: lineNumber || 1
        };
    };
    const editorHandler = ()=>{
        const errorLoc = getErrorLocation();
        if (!errorLoc) return;
        props.editorHandler?.(errorLoc);
    };
    const url = $f78f50d61026cdc5$export$44b1e5ee7f53eae1(sourceFileName, sourceLineNumber, sourceColumnNumber, fileName, lineNumber, columnNumber, compiled);
    let codeBlockProps = null;
    if (showCode) {
        if (compiled && scriptLines && scriptLines.length !== 0 && lineNumber != null) codeBlockProps = {
            codeHTML: $b67e2a05a9c13039$export$2e2bcd8739ae039(scriptLines),
            main: critical
        };
        else if (!compiled && sourceLines && sourceLines.length !== 0 && sourceLineNumber != null) codeBlockProps = {
            codeHTML: $b67e2a05a9c13039$export$2e2bcd8739ae039(sourceLines),
            main: critical
        };
    }
    const canOpenInEditor = getErrorLocation() !== null && props.editorHandler !== null;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: functionName
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                style: $e0e0fa52b83f95a9$var$linkStyle,
                children: $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                    role: "link",
                    style: canOpenInEditor ? $e0e0fa52b83f95a9$var$anchorStyle : null,
                    onClick: canOpenInEditor ? editorHandler : null,
                    onKeyDown: canOpenInEditor ? (e)=>{
                        if (e.key === 'Enter') editorHandler();
                    } : null,
                    tabIndex: canOpenInEditor ? '0' : null,
                    children: url
                })
            }),
            codeBlockProps && $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                style: {
                    marginBottom: '1.5em'
                },
                children: [
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                        onClick: canOpenInEditor ? editorHandler : null,
                        style: canOpenInEditor ? $e0e0fa52b83f95a9$var$codeAnchorStyle : null,
                        children: $23b7c1cb98b19658$export$34b9dba7ce09269b($97c30df7f5c364f7$export$2e2bcd8739ae039, {
                            ...codeBlockProps
                        })
                    }),
                    scriptLines && sourceLines && $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        style: $e0e0fa52b83f95a9$var$toggleStyle,
                        onClick: ()=>{
                            setCompiled(!compiled);
                        },
                        children: 'View ' + (compiled ? 'source' : 'compiled')
                    })
                ]
            })
        ]
    });
}
var $e0e0fa52b83f95a9$export$2e2bcd8739ae039 = $e0e0fa52b83f95a9$var$StackFrame;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $9a1abb59f5d10ec8$var$_collapsibleStyle = {
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '1em',
    padding: '0px',
    lineHeight: '1.5'
};
const $9a1abb59f5d10ec8$var$collapsibleCollapsedStyle = {
    ...$9a1abb59f5d10ec8$var$_collapsibleStyle,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color,
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    marginBottom: '1.5em'
};
const $9a1abb59f5d10ec8$var$collapsibleExpandedStyle = {
    ...$9a1abb59f5d10ec8$var$_collapsibleStyle,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color,
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    marginBottom: '0.6em'
};
function $9a1abb59f5d10ec8$var$Collapsible(props) {
    const [collapsed, setCollapsed] = $10ecac3e4062713a$export$60241385465d0a34(true);
    const toggleCollapsed = ()=>{
        setCollapsed(!collapsed);
    };
    const count = props.children.length;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("details", {
        open: !collapsed,
        onToggle: toggleCollapsed,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("summary", {
                style: collapsed ? $9a1abb59f5d10ec8$var$collapsibleCollapsedStyle : $9a1abb59f5d10ec8$var$collapsibleExpandedStyle,
                children: (collapsed ? "\u25B6" : "\u25BC") + ` ${count} stack frames were ` + (collapsed ? 'collapsed.' : 'expanded.')
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: [
                    props.children,
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: toggleCollapsed,
                        style: $9a1abb59f5d10ec8$var$collapsibleExpandedStyle,
                        children: `\u{25B2} ${count} stack frames were expanded.`
                    })
                ]
            })
        ]
    });
}
var $9a1abb59f5d10ec8$export$2e2bcd8739ae039 = $9a1abb59f5d10ec8$var$Collapsible;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $e95d7084caaf4e6d$export$723fa77eef12dd9f(sourceFileName, fileName) {
    return sourceFileName == null || sourceFileName === '' || sourceFileName.indexOf('~/') !== -1 || sourceFileName.indexOf('node_modules/') !== -1 || sourceFileName.indexOf('error-overlay') !== -1 || sourceFileName.trim().indexOf(' ') !== -1 || fileName == null || fileName === '';
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $a5027556d7003a42$export$64794fcb05cf0bcf(errorName) {
    switch(errorName){
        case 'EvalError':
        case 'InternalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
            return true;
        default:
            return false;
    }
}
var $a5027556d7003a42$export$2e2bcd8739ae039 = $a5027556d7003a42$export$64794fcb05cf0bcf;
const $5ee7d2edb790dd06$var$traceStyle = {
    fontSize: '1em',
    flex: '0 1 auto',
    minHeight: '0px',
    overflow: 'auto'
};
function $5ee7d2edb790dd06$var$StackTrace(props) {
    const { stackFrames: stackFrames, errorName: errorName, contextSize: contextSize, editorHandler: editorHandler } = props;
    const renderedFrames = [];
    let hasReachedAppCode = false, currentBundle = [], bundleCount = 0;
    stackFrames.forEach((frame, index)=>{
        const { fileName: fileName, _originalFileName: sourceFileName } = frame;
        const isInternalUrl = $e95d7084caaf4e6d$export$723fa77eef12dd9f(sourceFileName, fileName);
        const isThrownIntentionally = !$a5027556d7003a42$export$64794fcb05cf0bcf(errorName);
        const shouldCollapse = isInternalUrl && (isThrownIntentionally || hasReachedAppCode);
        if (!isInternalUrl) hasReachedAppCode = true;
        const frameEle = $23b7c1cb98b19658$export$34b9dba7ce09269b($e0e0fa52b83f95a9$export$2e2bcd8739ae039, {
            frame: frame,
            contextSize: contextSize,
            critical: index === 0,
            showCode: !shouldCollapse,
            editorHandler: editorHandler
        }, 'frame-' + index);
        const lastElement = index === stackFrames.length - 1;
        if (shouldCollapse) currentBundle.push(frameEle);
        if (!shouldCollapse || lastElement) {
            if (currentBundle.length === 1) renderedFrames.push(currentBundle[0]);
            else if (currentBundle.length > 1) {
                bundleCount++;
                renderedFrames.push($23b7c1cb98b19658$export$34b9dba7ce09269b($9a1abb59f5d10ec8$export$2e2bcd8739ae039, {
                    children: currentBundle
                }, 'bundle-' + bundleCount));
            }
            currentBundle = [];
        }
        if (!shouldCollapse) renderedFrames.push(frameEle);
    });
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $5ee7d2edb790dd06$var$traceStyle,
        children: renderedFrames
    });
}
var $5ee7d2edb790dd06$export$2e2bcd8739ae039 = $5ee7d2edb790dd06$var$StackTrace;
const $2eeadf2892cff4e4$var$diffStyle = {
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreColor,
    padding: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem'
};
function $2eeadf2892cff4e4$export$2e2bcd8739ae039({ diff: diff }) {
    let lines = diff.split('\n').flatMap((line, i)=>[
            $2eeadf2892cff4e4$var$formatLine(line, i),
            '\n'
        ]).slice(0, -1);
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
        style: $2eeadf2892cff4e4$var$diffStyle,
        children: lines
    });
}
function $2eeadf2892cff4e4$var$formatLine(line, index) {
    if (line.startsWith('+')) return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        style: {
            color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.diffAdded,
            fontWeight: 'bold'
        },
        children: line
    }, index);
    else if (line.startsWith('-') || line.startsWith('>')) return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        style: {
            color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.diffRemoved,
            fontWeight: 'bold'
        },
        children: line
    }, index);
    else return line;
}
const $4baa71cb4cecc0ea$var$wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
};
function $4baa71cb4cecc0ea$var$RuntimeError({ errorRecord: errorRecord, editorHandler: editorHandler }) {
    const { error: error, unhandledRejection: unhandledRejection, contextSize: contextSize, stackFrames: stackFrames } = errorRecord;
    const errorName = unhandledRejection ? 'Unhandled Rejection (' + error.name + ')' : error.name;
    // Make header prettier
    const message = error.message;
    let headerText = message.match(/^\w*:/) || !errorName ? message : errorName + ': ' + message;
    headerText = headerText // TODO: maybe remove this prefix from fbjs?
    // It's just scaring people
    .replace(/^Invariant Violation:\s*/, '') // This is not helpful either:
    .replace(/^Warning:\s*/, '') // Break the actionable part to the next line.
    // AFAIK React 16+ should already do this.
    .replace(' Check the render method', '\n\nCheck the render method').replace(' Check your code at', '\n\nCheck your code at');
    let link, diff;
    if (headerText.includes('https://react.dev/link/hydration-mismatch')) {
        [headerText, diff] = headerText.split('https://react.dev/link/hydration-mismatch');
        link = 'https://react.dev/link/hydration-mismatch';
    } else if (headerText.includes('This will cause a hydration error.')) {
        [headerText, diff] = headerText.split('This will cause a hydration error.');
        headerText += 'This will cause a hydration error.';
    }
    let lines = headerText.split('\n');
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $4baa71cb4cecc0ea$var$wrapperStyle,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b($c306e3a42547c8c2$export$2e2bcd8739ae039, {
                headerText: lines[0]
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
                children: lines.slice(1).join('\n').trim()
            }),
            link && $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: $23b7c1cb98b19658$export$34b9dba7ce09269b("a", {
                    href: link,
                    target: "_blank",
                    rel: "noreferrer",
                    children: link
                })
            }),
            diff && $23b7c1cb98b19658$export$34b9dba7ce09269b($2eeadf2892cff4e4$export$2e2bcd8739ae039, {
                diff: diff.trim()
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($5ee7d2edb790dd06$export$2e2bcd8739ae039, {
                stackFrames: stackFrames,
                errorName: errorName,
                contextSize: contextSize,
                editorHandler: editorHandler
            })
        ]
    });
}
var $4baa71cb4cecc0ea$export$2e2bcd8739ae039 = $4baa71cb4cecc0ea$var$RuntimeError;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $7606db210182b733$var$footerStyle = {
    fontFamily: 'sans-serif',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.footer,
    marginTop: '0.5rem',
    flex: '0 0 auto'
};
function $7606db210182b733$var$Footer(props) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $7606db210182b733$var$footerStyle,
        children: [
            props.line1,
            $23b7c1cb98b19658$export$34b9dba7ce09269b("br", {}),
            props.line2
        ]
    });
}
var $7606db210182b733$export$2e2bcd8739ae039 = $7606db210182b733$var$Footer;
function $d0eac8b125ed15e2$var$RuntimeErrorContainer(props) {
    const { errorRecords: errorRecords, close: close } = props;
    const totalErrors = errorRecords.length;
    let [currentIndex, setCurrentIndex] = $10ecac3e4062713a$export$60241385465d0a34(0);
    let previous = ()=>{
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalErrors - 1);
    };
    let next = ()=>{
        setCurrentIndex(currentIndex < totalErrors - 1 ? currentIndex + 1 : 0);
    };
    return $23b7c1cb98b19658$export$34b9dba7ce09269b($20d888b381d18c6c$export$2e2bcd8739ae039, {
        shortcutHandler: (key)=>{
            if (key === 'Escape') props.close();
            else if (key === 'ArrowLeft') previous();
            else if (key === 'ArrowRight') next();
        },
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b($7aae0c9ea64fc08c$export$2e2bcd8739ae039, {
                close: close
            }),
            totalErrors > 1 && $23b7c1cb98b19658$export$34b9dba7ce09269b($1adc179a826c5dd2$export$2e2bcd8739ae039, {
                currentError: currentIndex + 1,
                totalErrors: totalErrors,
                previous: previous,
                next: next
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($4baa71cb4cecc0ea$export$2e2bcd8739ae039, {
                errorRecord: errorRecords[currentIndex],
                editorHandler: props.editorHandler
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($7606db210182b733$export$2e2bcd8739ae039, {
                line1: "This screen is visible only in development. It will not appear if the app crashes in production.",
                line2: "Open your browser\u2019s developer console to further inspect this error.  Click the 'X' or hit ESC to dismiss this message."
            })
        ]
    });
}
var $d0eac8b125ed15e2$export$2e2bcd8739ae039 = $d0eac8b125ed15e2$var$RuntimeErrorContainer;
let $da9882e673ac146b$var$iframe = null;
let $da9882e673ac146b$var$editorHandler = null;
let $da9882e673ac146b$var$currentRuntimeErrorRecords = [];
let $da9882e673ac146b$var$stopListeningToRuntimeErrors = null;
function $da9882e673ac146b$export$25a22ac46f1bd016(handler) {
    $da9882e673ac146b$var$editorHandler = handler;
    if ($da9882e673ac146b$var$iframe) $da9882e673ac146b$var$update();
}
function $da9882e673ac146b$export$74e9101ce4078c0(error, options) {
    $6d40ebe8356580e0$export$9123e6c9c0ac21ed($da9882e673ac146b$var$handleRuntimeError(options))(error, false);
}
function $da9882e673ac146b$export$cda2c88a41631c16(options) {
    if ($da9882e673ac146b$var$stopListeningToRuntimeErrors !== null) throw new Error('Already listening');
    $da9882e673ac146b$var$stopListeningToRuntimeErrors = $6d40ebe8356580e0$export$38ec23daa6e8dcdf($da9882e673ac146b$var$handleRuntimeError(options));
}
const $da9882e673ac146b$var$handleRuntimeError = (options)=>(errorRecord)=>{
        try {
            if (typeof options.onError === 'function') options.onError.call(null);
        } finally{
            if ($da9882e673ac146b$var$currentRuntimeErrorRecords.some(({ error: error })=>error === errorRecord.error)) // This fixes https://github.com/facebook/create-react-app/issues/3011.
            // eslint-disable-next-line no-unsafe-finally
            return;
            $da9882e673ac146b$var$currentRuntimeErrorRecords = $da9882e673ac146b$var$currentRuntimeErrorRecords.concat([
                errorRecord
            ]);
            $da9882e673ac146b$var$update();
        }
    };
function $da9882e673ac146b$export$1cfa6d161ca81bd9() {
    $da9882e673ac146b$var$currentRuntimeErrorRecords = [];
    $da9882e673ac146b$var$update();
}
function $da9882e673ac146b$export$25ba7d9a816639e7() {
    if ($da9882e673ac146b$var$stopListeningToRuntimeErrors === null) throw new Error('Not currently listening');
    try {
        $da9882e673ac146b$var$stopListeningToRuntimeErrors();
    } finally{
        $da9882e673ac146b$var$stopListeningToRuntimeErrors = null;
    }
}
let $da9882e673ac146b$var$rootNode, $da9882e673ac146b$var$shadow;
function $da9882e673ac146b$var$update() {
    if (!$da9882e673ac146b$var$rootNode) {
        $da9882e673ac146b$var$rootNode = document.createElement('parcel-error-overlay');
        $da9882e673ac146b$var$shadow = $da9882e673ac146b$var$rootNode.attachShadow({
            mode: 'open'
        });
        if ($da9882e673ac146b$var$rootNode) document.body?.appendChild($da9882e673ac146b$var$rootNode);
    }
    if ($da9882e673ac146b$var$currentRuntimeErrorRecords.length > 0 && $da9882e673ac146b$var$shadow) $b6c7f0288a15c619$export$b3890eb0ae9dca99($23b7c1cb98b19658$export$34b9dba7ce09269b("dialog", {
        ref: (d)=>d?.showModal(),
        style: $74bb4be6e9b78681$export$7ef984671d1853d7,
        onClose: $da9882e673ac146b$export$1cfa6d161ca81bd9,
        children: $23b7c1cb98b19658$export$34b9dba7ce09269b($da9882e673ac146b$var$ErrorOverlay, {})
    }), $da9882e673ac146b$var$shadow);
    else {
        $da9882e673ac146b$var$rootNode?.remove();
        $da9882e673ac146b$var$rootNode = null;
    }
}
function $da9882e673ac146b$var$ErrorOverlay() {
    if ($da9882e673ac146b$var$currentRuntimeErrorRecords.length > 0) return $23b7c1cb98b19658$export$34b9dba7ce09269b($d0eac8b125ed15e2$export$2e2bcd8739ae039, {
        errorRecords: $da9882e673ac146b$var$currentRuntimeErrorRecords,
        close: $da9882e673ac146b$export$1cfa6d161ca81bd9,
        editorHandler: $da9882e673ac146b$var$editorHandler
    });
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gRw9X":[function(require,module,exports,__globalThis) {
// src/index.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HydrationBoundary", ()=>(0, _hydrationBoundaryJs.HydrationBoundary));
parcelHelpers.export(exports, "IsRestoringProvider", ()=>(0, _isRestoringProviderJs.IsRestoringProvider));
parcelHelpers.export(exports, "QueryClientContext", ()=>(0, _queryClientProviderJs.QueryClientContext));
parcelHelpers.export(exports, "QueryClientProvider", ()=>(0, _queryClientProviderJs.QueryClientProvider));
parcelHelpers.export(exports, "QueryErrorResetBoundary", ()=>(0, _queryErrorResetBoundaryJs.QueryErrorResetBoundary));
parcelHelpers.export(exports, "infiniteQueryOptions", ()=>(0, _infiniteQueryOptionsJs.infiniteQueryOptions));
parcelHelpers.export(exports, "mutationOptions", ()=>(0, _mutationOptionsJs.mutationOptions));
parcelHelpers.export(exports, "queryOptions", ()=>(0, _queryOptionsJs.queryOptions));
parcelHelpers.export(exports, "useInfiniteQuery", ()=>(0, _useInfiniteQueryJs.useInfiniteQuery));
parcelHelpers.export(exports, "useIsFetching", ()=>(0, _useIsFetchingJs.useIsFetching));
parcelHelpers.export(exports, "useIsMutating", ()=>(0, _useMutationStateJs.useIsMutating));
parcelHelpers.export(exports, "useIsRestoring", ()=>(0, _isRestoringProviderJs.useIsRestoring));
parcelHelpers.export(exports, "useMutation", ()=>(0, _useMutationJs.useMutation));
parcelHelpers.export(exports, "useMutationState", ()=>(0, _useMutationStateJs.useMutationState));
parcelHelpers.export(exports, "usePrefetchInfiniteQuery", ()=>(0, _usePrefetchInfiniteQueryJs.usePrefetchInfiniteQuery));
parcelHelpers.export(exports, "usePrefetchQuery", ()=>(0, _usePrefetchQueryJs.usePrefetchQuery));
parcelHelpers.export(exports, "useQueries", ()=>(0, _useQueriesJs.useQueries));
parcelHelpers.export(exports, "useQuery", ()=>(0, _useQueryJs.useQuery));
parcelHelpers.export(exports, "useQueryClient", ()=>(0, _queryClientProviderJs.useQueryClient));
parcelHelpers.export(exports, "useQueryErrorResetBoundary", ()=>(0, _queryErrorResetBoundaryJs.useQueryErrorResetBoundary));
parcelHelpers.export(exports, "useSuspenseInfiniteQuery", ()=>(0, _useSuspenseInfiniteQueryJs.useSuspenseInfiniteQuery));
parcelHelpers.export(exports, "useSuspenseQueries", ()=>(0, _useSuspenseQueriesJs.useSuspenseQueries));
parcelHelpers.export(exports, "useSuspenseQuery", ()=>(0, _useSuspenseQueryJs.useSuspenseQuery));
var _queryCore = require("@tanstack/query-core");
parcelHelpers.exportAll(_queryCore, exports);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
var _useQueriesJs = require("./useQueries.js");
var _useQueryJs = require("./useQuery.js");
var _useSuspenseQueryJs = require("./useSuspenseQuery.js");
var _useSuspenseInfiniteQueryJs = require("./useSuspenseInfiniteQuery.js");
var _useSuspenseQueriesJs = require("./useSuspenseQueries.js");
var _usePrefetchQueryJs = require("./usePrefetchQuery.js");
var _usePrefetchInfiniteQueryJs = require("./usePrefetchInfiniteQuery.js");
var _queryOptionsJs = require("./queryOptions.js");
var _infiniteQueryOptionsJs = require("./infiniteQueryOptions.js");
var _queryClientProviderJs = require("./QueryClientProvider.js");
var _hydrationBoundaryJs = require("./HydrationBoundary.js");
var _queryErrorResetBoundaryJs = require("./QueryErrorResetBoundary.js");
var _useIsFetchingJs = require("./useIsFetching.js");
var _useMutationStateJs = require("./useMutationState.js");
var _useMutationJs = require("./useMutation.js");
var _mutationOptionsJs = require("./mutationOptions.js");
var _useInfiniteQueryJs = require("./useInfiniteQuery.js");
var _isRestoringProviderJs = require("./IsRestoringProvider.js");

},{"@tanstack/query-core":"hCIJP","./types.js":"4sVMa","./useQueries.js":false,"./useQuery.js":"koTaR","./useSuspenseQuery.js":false,"./useSuspenseInfiniteQuery.js":false,"./useSuspenseQueries.js":false,"./usePrefetchQuery.js":false,"./usePrefetchInfiniteQuery.js":false,"./queryOptions.js":false,"./infiniteQueryOptions.js":false,"./QueryClientProvider.js":"dA0Iw","./HydrationBoundary.js":false,"./QueryErrorResetBoundary.js":false,"./useIsFetching.js":false,"./useMutationState.js":false,"./useMutation.js":"5S5p5","./mutationOptions.js":false,"./useInfiniteQuery.js":false,"./IsRestoringProvider.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hCIJP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CancelledError", ()=>(0, _retryerJs.CancelledError));
parcelHelpers.export(exports, "InfiniteQueryObserver", ()=>(0, _infiniteQueryObserverJs.InfiniteQueryObserver));
parcelHelpers.export(exports, "Mutation", ()=>(0, _mutationJs.Mutation));
parcelHelpers.export(exports, "MutationCache", ()=>(0, _mutationCacheJs.MutationCache));
parcelHelpers.export(exports, "MutationObserver", ()=>(0, _mutationObserverJs.MutationObserver));
parcelHelpers.export(exports, "QueriesObserver", ()=>(0, _queriesObserverJs.QueriesObserver));
parcelHelpers.export(exports, "Query", ()=>(0, _queryJs.Query));
parcelHelpers.export(exports, "QueryCache", ()=>(0, _queryCacheJs.QueryCache));
parcelHelpers.export(exports, "QueryClient", ()=>(0, _queryClientJs.QueryClient));
parcelHelpers.export(exports, "QueryObserver", ()=>(0, _queryObserverJs.QueryObserver));
parcelHelpers.export(exports, "defaultScheduler", ()=>(0, _notifyManagerJs.defaultScheduler));
parcelHelpers.export(exports, "defaultShouldDehydrateMutation", ()=>(0, _hydrationJs.defaultShouldDehydrateMutation));
parcelHelpers.export(exports, "defaultShouldDehydrateQuery", ()=>(0, _hydrationJs.defaultShouldDehydrateQuery));
parcelHelpers.export(exports, "dehydrate", ()=>(0, _hydrationJs.dehydrate));
parcelHelpers.export(exports, "environmentManager", ()=>(0, _environmentManagerJs.environmentManager));
parcelHelpers.export(exports, "experimental_streamedQuery", ()=>(0, _streamedQueryJs.streamedQuery));
parcelHelpers.export(exports, "focusManager", ()=>(0, _focusManagerJs.focusManager));
parcelHelpers.export(exports, "hashKey", ()=>(0, _utilsJs.hashKey));
parcelHelpers.export(exports, "hydrate", ()=>(0, _hydrationJs.hydrate));
parcelHelpers.export(exports, "isCancelledError", ()=>(0, _retryerJs.isCancelledError));
parcelHelpers.export(exports, "isServer", ()=>(0, _utilsJs.isServer));
parcelHelpers.export(exports, "keepPreviousData", ()=>(0, _utilsJs.keepPreviousData));
parcelHelpers.export(exports, "matchMutation", ()=>(0, _utilsJs.matchMutation));
parcelHelpers.export(exports, "matchQuery", ()=>(0, _utilsJs.matchQuery));
parcelHelpers.export(exports, "noop", ()=>(0, _utilsJs.noop));
parcelHelpers.export(exports, "notifyManager", ()=>(0, _notifyManagerJs.notifyManager));
parcelHelpers.export(exports, "onlineManager", ()=>(0, _onlineManagerJs.onlineManager));
parcelHelpers.export(exports, "partialMatchKey", ()=>(0, _utilsJs.partialMatchKey));
parcelHelpers.export(exports, "replaceEqualDeep", ()=>(0, _utilsJs.replaceEqualDeep));
parcelHelpers.export(exports, "shouldThrowError", ()=>(0, _utilsJs.shouldThrowError));
parcelHelpers.export(exports, "skipToken", ()=>(0, _utilsJs.skipToken));
parcelHelpers.export(exports, "timeoutManager", ()=>(0, _timeoutManagerJs.timeoutManager));
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/index.ts
var _focusManagerJs = require("./focusManager.js");
var _environmentManagerJs = require("./environmentManager.js");
var _hydrationJs = require("./hydration.js");
var _infiniteQueryObserverJs = require("./infiniteQueryObserver.js");
var _mutationCacheJs = require("./mutationCache.js");
var _mutationObserverJs = require("./mutationObserver.js");
var _notifyManagerJs = require("./notifyManager.js");
var _onlineManagerJs = require("./onlineManager.js");
var _queriesObserverJs = require("./queriesObserver.js");
var _queryCacheJs = require("./queryCache.js");
var _queryClientJs = require("./queryClient.js");
var _queryObserverJs = require("./queryObserver.js");
var _retryerJs = require("./retryer.js");
var _timeoutManagerJs = require("./timeoutManager.js");
var _utilsJs = require("./utils.js");
var _streamedQueryJs = require("./streamedQuery.js");
var _mutationJs = require("./mutation.js");
var _queryJs = require("./query.js");
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);

},{"./chunk-PXG64RU4.js":"eWQTd","./focusManager.js":false,"./environmentManager.js":"3e76S","./hydration.js":false,"./infiniteQueryObserver.js":false,"./mutationCache.js":false,"./mutationObserver.js":"h9la7","./notifyManager.js":"4UPNp","./onlineManager.js":false,"./queriesObserver.js":false,"./queryCache.js":false,"./queryClient.js":"gnZ8l","./queryObserver.js":"1sOeI","./retryer.js":false,"./timeoutManager.js":false,"./utils.js":"f5Xxs","./streamedQuery.js":false,"./mutation.js":false,"./query.js":false,"./types.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eWQTd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__privateGet", ()=>__privateGet);
parcelHelpers.export(exports, "__privateAdd", ()=>__privateAdd);
parcelHelpers.export(exports, "__privateSet", ()=>__privateSet);
parcelHelpers.export(exports, "__privateMethod", ()=>__privateMethod);
parcelHelpers.export(exports, "__privateWrapper", ()=>__privateWrapper);
var __typeError = (msg)=>{
    throw TypeError(msg);
};
var __accessCheck = (obj, member, msg)=>member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter)=>(__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value1)=>member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value1);
var __privateSet = (obj, member, value1, setter)=>(__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value1) : member.set(obj, value1), value1);
var __privateMethod = (obj, member, method)=>(__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter)=>({
        set _ (value){
            __privateSet(obj, member, value, setter);
        },
        get _ () {
            return __privateGet(obj, member, getter);
        }
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lribG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FocusManager", ()=>FocusManager);
parcelHelpers.export(exports, "focusManager", ()=>focusManager);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/focusManager.ts
var _subscribableJs = require("./subscribable.js");
var _focused, _cleanup, _setup;
var FocusManager = class extends (0, _subscribableJs.Subscribable) {
    constructor(){
        super();
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _focused);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _cleanup);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _setup);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _setup, (onFocus)=>{
            if (typeof window !== "undefined" && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        });
    }
    onSubscribe() {
        if (!(0, _chunkPXG64RU4Js.__privateGet)(this, _cleanup)) this.setEventListener((0, _chunkPXG64RU4Js.__privateGet)(this, _setup));
    }
    onUnsubscribe() {
        var _a;
        if (!this.hasListeners()) {
            (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _cleanup)) == null || _a.call(this);
            (0, _chunkPXG64RU4Js.__privateSet)(this, _cleanup, void 0);
        }
    }
    setEventListener(setup) {
        var _a;
        (0, _chunkPXG64RU4Js.__privateSet)(this, _setup, setup);
        (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _cleanup)) == null || _a.call(this);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _cleanup, setup((focused)=>{
            if (typeof focused === "boolean") this.setFocused(focused);
            else this.onFocus();
        }));
    }
    setFocused(focused) {
        const changed = (0, _chunkPXG64RU4Js.__privateGet)(this, _focused) !== focused;
        if (changed) {
            (0, _chunkPXG64RU4Js.__privateSet)(this, _focused, focused);
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        var _a;
        if (typeof (0, _chunkPXG64RU4Js.__privateGet)(this, _focused) === "boolean") return (0, _chunkPXG64RU4Js.__privateGet)(this, _focused);
        return ((_a = globalThis.document) == null ? void 0 : _a.visibilityState) !== "hidden";
    }
};
_focused = new WeakMap();
_cleanup = new WeakMap();
_setup = new WeakMap();
var focusManager = new FocusManager();

},{"./chunk-PXG64RU4.js":"eWQTd","./subscribable.js":"7gKmK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7gKmK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscribable", ()=>Subscribable);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/subscribable.ts
var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};

},{"./chunk-PXG64RU4.js":"eWQTd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3e76S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "environmentManager", ()=>environmentManager);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/environmentManager.ts
var _utilsJs = require("./utils.js");
var environmentManager = /* @__PURE__ */ (()=>{
    let isServerFn = ()=>(0, _utilsJs.isServer);
    return {
        /**
     * Returns whether the current runtime should be treated as a server environment.
     */ isServer () {
            return isServerFn();
        },
        /**
     * Overrides the server check globally.
     */ setIsServer (isServerValue) {
            isServerFn = isServerValue;
        }
    };
})();

},{"./chunk-PXG64RU4.js":"eWQTd","./utils.js":"f5Xxs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f5Xxs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addConsumeAwareSignal", ()=>addConsumeAwareSignal);
parcelHelpers.export(exports, "addToEnd", ()=>addToEnd);
parcelHelpers.export(exports, "addToStart", ()=>addToStart);
parcelHelpers.export(exports, "ensureQueryFn", ()=>ensureQueryFn);
parcelHelpers.export(exports, "functionalUpdate", ()=>functionalUpdate);
parcelHelpers.export(exports, "hashKey", ()=>hashKey);
parcelHelpers.export(exports, "hashQueryKeyByOptions", ()=>hashQueryKeyByOptions);
parcelHelpers.export(exports, "isPlainArray", ()=>isPlainArray);
parcelHelpers.export(exports, "isPlainObject", ()=>isPlainObject);
parcelHelpers.export(exports, "isServer", ()=>isServer);
parcelHelpers.export(exports, "isValidTimeout", ()=>isValidTimeout);
parcelHelpers.export(exports, "keepPreviousData", ()=>keepPreviousData);
parcelHelpers.export(exports, "matchMutation", ()=>matchMutation);
parcelHelpers.export(exports, "matchQuery", ()=>matchQuery);
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "partialMatchKey", ()=>partialMatchKey);
parcelHelpers.export(exports, "replaceData", ()=>replaceData);
parcelHelpers.export(exports, "replaceEqualDeep", ()=>replaceEqualDeep);
parcelHelpers.export(exports, "resolveQueryBoolean", ()=>resolveQueryBoolean);
parcelHelpers.export(exports, "resolveStaleTime", ()=>resolveStaleTime);
parcelHelpers.export(exports, "shallowEqualObjects", ()=>shallowEqualObjects);
parcelHelpers.export(exports, "shouldThrowError", ()=>shouldThrowError);
parcelHelpers.export(exports, "skipToken", ()=>skipToken);
parcelHelpers.export(exports, "sleep", ()=>sleep);
parcelHelpers.export(exports, "timeUntilStale", ()=>timeUntilStale);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/utils.ts
var _timeoutManagerJs = require("./timeoutManager.js");
var isServer = typeof window === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveQueryBoolean(option, query) {
    return typeof option === "function" ? option(query) : option;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) return false;
        } else if (!partialMatchKey(query.queryKey, queryKey)) return false;
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) return false;
        if (type === "inactive" && isActive) return false;
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) return false;
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) return false;
    if (predicate && !predicate(query)) return false;
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) return false;
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) return false;
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) return false;
    }
    if (status && mutation.state.status !== status) return false;
    if (predicate && !predicate(mutation)) return false;
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = (options == null ? void 0 : options.queryKeyHashFn) || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (a && b && typeof a === "object" && typeof b === "object") return Object.keys(b).every((key)=>partialMatchKey(a[key], b[key]));
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty;
function replaceEqualDeep(a, b, depth = 0) {
    if (a === b) return a;
    if (depth > 500) return b;
    const array = isPlainArray(a) && isPlainArray(b);
    if (!array && !(isPlainObject(a) && isPlainObject(b))) return b;
    const aItems = array ? a : Object.keys(a);
    const aSize = aItems.length;
    const bItems = array ? b : Object.keys(b);
    const bSize = bItems.length;
    const copy = array ? new Array(bSize) : {};
    let equalItems = 0;
    for(let i = 0; i < bSize; i++){
        const key = array ? i : bItems[i];
        const aItem = a[key];
        const bItem = b[key];
        if (aItem === bItem) {
            copy[key] = aItem;
            if (array ? i < aSize : hasOwn.call(a, key)) equalItems++;
            continue;
        }
        if (aItem === null || bItem === null || typeof aItem !== "object" || typeof bItem !== "object") {
            copy[key] = bItem;
            continue;
        }
        const v = replaceEqualDeep(aItem, bItem, depth + 1);
        copy[key] = v;
        if (v === aItem) equalItems++;
    }
    return aSize === bSize && equalItems === aSize ? a : copy;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) return false;
    for(const key in a){
        if (a[key] !== b[key]) return false;
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) return false;
    const ctor = o.constructor;
    if (ctor === void 0) return true;
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) return false;
    if (!prot.hasOwnProperty("isPrototypeOf")) return false;
    if (Object.getPrototypeOf(o) !== Object.prototype) return false;
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        (0, _timeoutManagerJs.timeoutManager).setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") return options.structuralSharing(prevData, data);
    else if (options.structuralSharing !== false) {
        try {
            return replaceEqualDeep(prevData, data);
        } catch (error) {
            console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
            throw error;
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = /* @__PURE__ */ Symbol();
function ensureQueryFn(options, fetchOptions) {
    if (options.queryFn === skipToken) console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
    if (!options.queryFn && (fetchOptions == null ? void 0 : fetchOptions.initialPromise)) return ()=>fetchOptions.initialPromise;
    if (!options.queryFn || options.queryFn === skipToken) return ()=>Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    return options.queryFn;
}
function shouldThrowError(throwOnError, params) {
    if (typeof throwOnError === "function") return throwOnError(...params);
    return !!throwOnError;
}
function addConsumeAwareSignal(object, getSignal, onCancelled) {
    let consumed = false;
    let signal;
    Object.defineProperty(object, "signal", {
        enumerable: true,
        get: ()=>{
            signal ?? (signal = getSignal());
            if (consumed) return signal;
            consumed = true;
            if (signal.aborted) onCancelled();
            else signal.addEventListener("abort", onCancelled, {
                once: true
            });
            return signal;
        }
    });
    return object;
}

},{"./chunk-PXG64RU4.js":"eWQTd","./timeoutManager.js":"3odUV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3odUV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimeoutManager", ()=>TimeoutManager);
parcelHelpers.export(exports, "defaultTimeoutProvider", ()=>defaultTimeoutProvider);
parcelHelpers.export(exports, "systemSetTimeoutZero", ()=>systemSetTimeoutZero);
parcelHelpers.export(exports, "timeoutManager", ()=>timeoutManager);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/timeoutManager.ts
var defaultTimeoutProvider = {
    // We need the wrapper function syntax below instead of direct references to
    // global setTimeout etc.
    //
    // BAD: `setTimeout: setTimeout`
    // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
    //
    // If we use direct references here, then anything that wants to spy on or
    // replace the global setTimeout (like tests) won't work since we'll already
    // have a hard reference to the original implementation at the time when this
    // file was imported.
    setTimeout: (callback, delay)=>setTimeout(callback, delay),
    clearTimeout: (timeoutId)=>clearTimeout(timeoutId),
    setInterval: (callback, delay)=>setInterval(callback, delay),
    clearInterval: (intervalId)=>clearInterval(intervalId)
};
var _provider, _providerCalled;
var TimeoutManager = class {
    constructor(){
        // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
        // type at app boot; and if we leave that type, then any new timer provider
        // would need to support the default provider's concrete timer ID, which is
        // infeasible across environments.
        //
        // We settle for type safety for the TimeoutProvider type, and accept that
        // this class is unsafe internally to allow for extension.
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _provider, defaultTimeoutProvider);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _providerCalled, false);
    }
    setTimeoutProvider(provider) {
        if ((0, _chunkPXG64RU4Js.__privateGet)(this, _providerCalled) && provider !== (0, _chunkPXG64RU4Js.__privateGet)(this, _provider)) console.error(`[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.`, {
            previous: (0, _chunkPXG64RU4Js.__privateGet)(this, _provider),
            provider
        });
        (0, _chunkPXG64RU4Js.__privateSet)(this, _provider, provider);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _providerCalled, false);
    }
    setTimeout(callback, delay) {
        (0, _chunkPXG64RU4Js.__privateSet)(this, _providerCalled, true);
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _provider).setTimeout(callback, delay);
    }
    clearTimeout(timeoutId) {
        (0, _chunkPXG64RU4Js.__privateGet)(this, _provider).clearTimeout(timeoutId);
    }
    setInterval(callback, delay) {
        (0, _chunkPXG64RU4Js.__privateSet)(this, _providerCalled, true);
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _provider).setInterval(callback, delay);
    }
    clearInterval(intervalId) {
        (0, _chunkPXG64RU4Js.__privateGet)(this, _provider).clearInterval(intervalId);
    }
};
_provider = new WeakMap();
_providerCalled = new WeakMap();
var timeoutManager = new TimeoutManager();
function systemSetTimeoutZero(callback) {
    setTimeout(callback, 0);
}

},{"./chunk-PXG64RU4.js":"eWQTd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7bStC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MutationCache", ()=>MutationCache);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/mutationCache.ts
var _notifyManagerJs = require("./notifyManager.js");
var _mutationJs = require("./mutation.js");
var _utilsJs = require("./utils.js");
var _subscribableJs = require("./subscribable.js");
var _mutations, _scopes, _mutationId;
var MutationCache = class extends (0, _subscribableJs.Subscribable) {
    constructor(config = {}){
        super();
        this.config = config;
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _mutations);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _scopes);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _mutationId);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _mutations, /* @__PURE__ */ new Set());
        (0, _chunkPXG64RU4Js.__privateSet)(this, _scopes, /* @__PURE__ */ new Map());
        (0, _chunkPXG64RU4Js.__privateSet)(this, _mutationId, 0);
    }
    build(client, options, state) {
        const mutation = new (0, _mutationJs.Mutation)({
            client,
            mutationCache: this,
            mutationId: ++(0, _chunkPXG64RU4Js.__privateWrapper)(this, _mutationId)._,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    add(mutation) {
        (0, _chunkPXG64RU4Js.__privateGet)(this, _mutations).add(mutation);
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const scopedMutations = (0, _chunkPXG64RU4Js.__privateGet)(this, _scopes).get(scope);
            if (scopedMutations) scopedMutations.push(mutation);
            else (0, _chunkPXG64RU4Js.__privateGet)(this, _scopes).set(scope, [
                mutation
            ]);
        }
        this.notify({
            type: "added",
            mutation
        });
    }
    remove(mutation) {
        if ((0, _chunkPXG64RU4Js.__privateGet)(this, _mutations).delete(mutation)) {
            const scope = scopeFor(mutation);
            if (typeof scope === "string") {
                const scopedMutations = (0, _chunkPXG64RU4Js.__privateGet)(this, _scopes).get(scope);
                if (scopedMutations) {
                    if (scopedMutations.length > 1) {
                        const index = scopedMutations.indexOf(mutation);
                        if (index !== -1) scopedMutations.splice(index, 1);
                    } else if (scopedMutations[0] === mutation) (0, _chunkPXG64RU4Js.__privateGet)(this, _scopes).delete(scope);
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    canRun(mutation) {
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const mutationsWithSameScope = (0, _chunkPXG64RU4Js.__privateGet)(this, _scopes).get(scope);
            const firstPendingMutation = mutationsWithSameScope == null ? void 0 : mutationsWithSameScope.find((m)=>m.state.status === "pending");
            return !firstPendingMutation || firstPendingMutation === mutation;
        } else return true;
    }
    runNext(mutation) {
        var _a;
        const scope = scopeFor(mutation);
        if (typeof scope === "string") {
            const foundMutation = (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _scopes).get(scope)) == null ? void 0 : _a.find((m)=>m !== mutation && m.state.isPaused);
            return (foundMutation == null ? void 0 : foundMutation.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
    }
    clear() {
        (0, _notifyManagerJs.notifyManager).batch(()=>{
            (0, _chunkPXG64RU4Js.__privateGet)(this, _mutations).forEach((mutation)=>{
                this.notify({
                    type: "removed",
                    mutation
                });
            });
            (0, _chunkPXG64RU4Js.__privateGet)(this, _mutations).clear();
            (0, _chunkPXG64RU4Js.__privateGet)(this, _scopes).clear();
        });
    }
    getAll() {
        return Array.from((0, _chunkPXG64RU4Js.__privateGet)(this, _mutations));
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, _utilsJs.matchMutation)(defaultedFilters, mutation));
    }
    findAll(filters = {}) {
        return this.getAll().filter((mutation)=>(0, _utilsJs.matchMutation)(filters, mutation));
    }
    notify(event) {
        (0, _notifyManagerJs.notifyManager).batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return (0, _notifyManagerJs.notifyManager).batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch((0, _utilsJs.noop)))));
    }
};
_mutations = new WeakMap();
_scopes = new WeakMap();
_mutationId = new WeakMap();
function scopeFor(mutation) {
    var _a;
    return (_a = mutation.options.scope) == null ? void 0 : _a.id;
}

},{"./chunk-PXG64RU4.js":"eWQTd","./notifyManager.js":"4UPNp","./mutation.js":"fSRHf","./utils.js":"f5Xxs","./subscribable.js":"7gKmK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4UPNp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNotifyManager", ()=>createNotifyManager);
parcelHelpers.export(exports, "defaultScheduler", ()=>defaultScheduler);
parcelHelpers.export(exports, "notifyManager", ()=>notifyManager);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/notifyManager.ts
var _timeoutManagerJs = require("./timeoutManager.js");
var defaultScheduler = (0, _timeoutManagerJs.systemSetTimeoutZero);
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = defaultScheduler;
    const schedule = (callback)=>{
        if (transactions) queue.push(callback);
        else scheduleFn(()=>{
            notifyFn(callback);
        });
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) scheduleFn(()=>{
            batchNotifyFn(()=>{
                originalQueue.forEach((callback)=>{
                    notifyFn(callback);
                });
            });
        });
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) flush();
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();

},{"./chunk-PXG64RU4.js":"eWQTd","./timeoutManager.js":"3odUV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fSRHf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mutation", ()=>Mutation);
parcelHelpers.export(exports, "getDefaultState", ()=>getDefaultState);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/mutation.ts
var _notifyManagerJs = require("./notifyManager.js");
var _removableJs = require("./removable.js");
var _retryerJs = require("./retryer.js");
var _client, _observers, _mutationCache, _retryer, _Mutation_instances, dispatch_fn;
var Mutation = class extends (0, _removableJs.Removable) {
    constructor(config){
        super();
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _Mutation_instances);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _client);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _observers);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _mutationCache);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _retryer);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _client, config.client);
        this.mutationId = config.mutationId;
        (0, _chunkPXG64RU4Js.__privateSet)(this, _mutationCache, config.mutationCache);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _observers, []);
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!(0, _chunkPXG64RU4Js.__privateGet)(this, _observers).includes(observer)) {
            (0, _chunkPXG64RU4Js.__privateGet)(this, _observers).push(observer);
            this.clearGcTimeout();
            (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        (0, _chunkPXG64RU4Js.__privateSet)(this, _observers, (0, _chunkPXG64RU4Js.__privateGet)(this, _observers).filter((x)=>x !== observer));
        this.scheduleGc();
        (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!(0, _chunkPXG64RU4Js.__privateGet)(this, _observers).length) {
            if (this.state.status === "pending") this.scheduleGc();
            else (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).remove(this);
        }
    }
    continue() {
        var _a;
        return ((_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) == null ? void 0 : _a.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
        const onContinue = ()=>{
            (0, _chunkPXG64RU4Js.__privateMethod)(this, _Mutation_instances, dispatch_fn).call(this, {
                type: "continue"
            });
        };
        const mutationFnContext = {
            client: (0, _chunkPXG64RU4Js.__privateGet)(this, _client),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        (0, _chunkPXG64RU4Js.__privateSet)(this, _retryer, (0, _retryerJs.createRetryer)({
            fn: ()=>{
                if (!this.options.mutationFn) return Promise.reject(new Error("No mutationFn found"));
                return this.options.mutationFn(variables, mutationFnContext);
            },
            onFail: (failureCount, error)=>{
                (0, _chunkPXG64RU4Js.__privateMethod)(this, _Mutation_instances, dispatch_fn).call(this, {
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                (0, _chunkPXG64RU4Js.__privateMethod)(this, _Mutation_instances, dispatch_fn).call(this, {
                    type: "pause"
                });
            },
            onContinue,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>(0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).canRun(this)
        }));
        const restored = this.state.status === "pending";
        const isPaused = !(0, _chunkPXG64RU4Js.__privateGet)(this, _retryer).canStart();
        try {
            if (restored) onContinue();
            else {
                (0, _chunkPXG64RU4Js.__privateMethod)(this, _Mutation_instances, dispatch_fn).call(this, {
                    type: "pending",
                    variables,
                    isPaused
                });
                if ((0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).config.onMutate) await (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).config.onMutate(variables, this, mutationFnContext);
                const context = await ((_b = (_a = this.options).onMutate) == null ? void 0 : _b.call(_a, variables, mutationFnContext));
                if (context !== this.state.context) (0, _chunkPXG64RU4Js.__privateMethod)(this, _Mutation_instances, dispatch_fn).call(this, {
                    type: "pending",
                    context,
                    variables,
                    isPaused
                });
            }
            const data = await (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer).start();
            await ((_d = (_c = (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).config).onSuccess) == null ? void 0 : _d.call(_c, data, variables, this.state.context, this, mutationFnContext));
            await ((_f = (_e = this.options).onSuccess) == null ? void 0 : _f.call(_e, data, variables, this.state.context, mutationFnContext));
            await ((_h = (_g = (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).config).onSettled) == null ? void 0 : _h.call(_g, data, null, this.state.variables, this.state.context, this, mutationFnContext));
            await ((_j = (_i = this.options).onSettled) == null ? void 0 : _j.call(_i, data, null, variables, this.state.context, mutationFnContext));
            (0, _chunkPXG64RU4Js.__privateMethod)(this, _Mutation_instances, dispatch_fn).call(this, {
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await ((_l = (_k = (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).config).onError) == null ? void 0 : _l.call(_k, error, variables, this.state.context, this, mutationFnContext));
            } catch (e) {
                Promise.reject(e);
            }
            try {
                await ((_n = (_m = this.options).onError) == null ? void 0 : _n.call(_m, error, variables, this.state.context, mutationFnContext));
            } catch (e) {
                Promise.reject(e);
            }
            try {
                await ((_p = (_o = (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).config).onSettled) == null ? void 0 : _p.call(_o, void 0, error, this.state.variables, this.state.context, this, mutationFnContext));
            } catch (e) {
                Promise.reject(e);
            }
            try {
                await ((_r = (_q = this.options).onSettled) == null ? void 0 : _r.call(_q, void 0, error, variables, this.state.context, mutationFnContext));
            } catch (e) {
                Promise.reject(e);
            }
            (0, _chunkPXG64RU4Js.__privateMethod)(this, _Mutation_instances, dispatch_fn).call(this, {
                type: "error",
                error
            });
            throw error;
        } finally{
            (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).runNext(this);
        }
    }
};
_client = new WeakMap();
_observers = new WeakMap();
_mutationCache = new WeakMap();
_retryer = new WeakMap();
_Mutation_instances = new WeakSet();
dispatch_fn = function(action) {
    const reducer = (state)=>{
        switch(action.type){
            case "failed":
                return {
                    ...state,
                    failureCount: action.failureCount,
                    failureReason: action.error
                };
            case "pause":
                return {
                    ...state,
                    isPaused: true
                };
            case "continue":
                return {
                    ...state,
                    isPaused: false
                };
            case "pending":
                return {
                    ...state,
                    context: action.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: action.isPaused,
                    status: "pending",
                    variables: action.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...state,
                    data: action.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: false
                };
            case "error":
                return {
                    ...state,
                    data: void 0,
                    error: action.error,
                    failureCount: state.failureCount + 1,
                    failureReason: action.error,
                    isPaused: false,
                    status: "error"
                };
        }
    };
    this.state = reducer(this.state);
    (0, _notifyManagerJs.notifyManager).batch(()=>{
        (0, _chunkPXG64RU4Js.__privateGet)(this, _observers).forEach((observer)=>{
            observer.onMutationUpdate(action);
        });
        (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).notify({
            mutation: this,
            type: "updated",
            action
        });
    });
};
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}

},{"./chunk-PXG64RU4.js":"eWQTd","./notifyManager.js":"4UPNp","./removable.js":"hu2X7","./retryer.js":"1YeDR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hu2X7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Removable", ()=>Removable);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/removable.ts
var _timeoutManagerJs = require("./timeoutManager.js");
var _environmentManagerJs = require("./environmentManager.js");
var _utilsJs = require("./utils.js");
var _gcTimeout;
var Removable = class {
    constructor(){
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _gcTimeout);
    }
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, _utilsJs.isValidTimeout)(this.gcTime)) (0, _chunkPXG64RU4Js.__privateSet)(this, _gcTimeout, (0, _timeoutManagerJs.timeoutManager).setTimeout(()=>{
            this.optionalRemove();
        }, this.gcTime));
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? ((0, _environmentManagerJs.environmentManager).isServer() ? Infinity : 300000));
    }
    clearGcTimeout() {
        if ((0, _chunkPXG64RU4Js.__privateGet)(this, _gcTimeout) !== void 0) {
            (0, _timeoutManagerJs.timeoutManager).clearTimeout((0, _chunkPXG64RU4Js.__privateGet)(this, _gcTimeout));
            (0, _chunkPXG64RU4Js.__privateSet)(this, _gcTimeout, void 0);
        }
    }
};
_gcTimeout = new WeakMap();

},{"./chunk-PXG64RU4.js":"eWQTd","./timeoutManager.js":"3odUV","./environmentManager.js":"3e76S","./utils.js":"f5Xxs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1YeDR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CancelledError", ()=>CancelledError);
parcelHelpers.export(exports, "canFetch", ()=>canFetch);
parcelHelpers.export(exports, "createRetryer", ()=>createRetryer);
parcelHelpers.export(exports, "isCancelledError", ()=>isCancelledError);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/retryer.ts
var _focusManagerJs = require("./focusManager.js");
var _onlineManagerJs = require("./onlineManager.js");
var _thenableJs = require("./thenable.js");
var _environmentManagerJs = require("./environmentManager.js");
var _utilsJs = require("./utils.js");
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? (0, _onlineManagerJs.onlineManager).isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options == null ? void 0 : options.revert;
        this.silent = options == null ? void 0 : options.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let continueFn;
    const thenable = (0, _thenableJs.pendingThenable)();
    const isResolved = ()=>thenable.status !== "pending";
    const cancel = (cancelOptions)=>{
        var _a;
        if (!isResolved()) {
            const error = new CancelledError(cancelOptions);
            reject(error);
            (_a = config.onCancel) == null || _a.call(config, error);
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>(0, _focusManagerJs.focusManager).isFocused() && (config.networkMode === "always" || (0, _onlineManagerJs.onlineManager).isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved()) {
            continueFn == null || continueFn();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved()) {
            continueFn == null || continueFn();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            var _a;
            continueFn = (value)=>{
                if (isResolved() || canContinue()) continueResolve(value);
            };
            (_a = config.onPause) == null || _a.call(config);
        }).then(()=>{
            var _a;
            continueFn = void 0;
            if (!isResolved()) (_a = config.onContinue) == null || _a.call(config);
        });
    };
    const run = ()=>{
        if (isResolved()) return;
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            var _a;
            if (isResolved()) return;
            const retry = config.retry ?? ((0, _environmentManagerJs.environmentManager).isServer() ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            (_a = config.onFail) == null || _a.call(config, failureCount, error);
            (0, _utilsJs.sleep)(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) reject(error);
                else run();
            });
        });
    };
    return {
        promise: thenable,
        status: ()=>thenable.status,
        cancel,
        continue: ()=>{
            continueFn == null || continueFn();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) run();
            else pause().then(run);
            return thenable;
        }
    };
}

},{"./chunk-PXG64RU4.js":"eWQTd","./focusManager.js":"lribG","./onlineManager.js":"llEBI","./thenable.js":"kH2E3","./environmentManager.js":"3e76S","./utils.js":"f5Xxs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"llEBI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OnlineManager", ()=>OnlineManager);
parcelHelpers.export(exports, "onlineManager", ()=>onlineManager);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/onlineManager.ts
var _subscribableJs = require("./subscribable.js");
var _online, _cleanup, _setup;
var OnlineManager = class extends (0, _subscribableJs.Subscribable) {
    constructor(){
        super();
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _online, true);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _cleanup);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _setup);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _setup, (onOnline)=>{
            if (typeof window !== "undefined" && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        });
    }
    onSubscribe() {
        if (!(0, _chunkPXG64RU4Js.__privateGet)(this, _cleanup)) this.setEventListener((0, _chunkPXG64RU4Js.__privateGet)(this, _setup));
    }
    onUnsubscribe() {
        var _a;
        if (!this.hasListeners()) {
            (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _cleanup)) == null || _a.call(this);
            (0, _chunkPXG64RU4Js.__privateSet)(this, _cleanup, void 0);
        }
    }
    setEventListener(setup) {
        var _a;
        (0, _chunkPXG64RU4Js.__privateSet)(this, _setup, setup);
        (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _cleanup)) == null || _a.call(this);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _cleanup, setup(this.setOnline.bind(this)));
    }
    setOnline(online) {
        const changed = (0, _chunkPXG64RU4Js.__privateGet)(this, _online) !== online;
        if (changed) {
            (0, _chunkPXG64RU4Js.__privateSet)(this, _online, online);
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _online);
    }
};
_online = new WeakMap();
_cleanup = new WeakMap();
_setup = new WeakMap();
var onlineManager = new OnlineManager();

},{"./chunk-PXG64RU4.js":"eWQTd","./subscribable.js":"7gKmK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kH2E3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pendingThenable", ()=>pendingThenable);
parcelHelpers.export(exports, "tryResolveSync", ()=>tryResolveSync);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/thenable.ts
var _utilsJs = require("./utils.js");
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
function tryResolveSync(promise) {
    var _a;
    let data;
    (_a = promise.then((result)=>{
        data = result;
        return result;
    }, (0, _utilsJs.noop))) == null || _a.catch((0, _utilsJs.noop));
    if (data !== void 0) return {
        data
    };
    return void 0;
}

},{"./chunk-PXG64RU4.js":"eWQTd","./utils.js":"f5Xxs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"h9la7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MutationObserver", ()=>MutationObserver);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/mutationObserver.ts
var _mutationJs = require("./mutation.js");
var _notifyManagerJs = require("./notifyManager.js");
var _subscribableJs = require("./subscribable.js");
var _utilsJs = require("./utils.js");
var _client, _currentResult, _currentMutation, _mutateOptions, _MutationObserver_instances, updateResult_fn, notify_fn;
var MutationObserver = class extends (0, _subscribableJs.Subscribable) {
    constructor(client, options){
        super();
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _MutationObserver_instances);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _client);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentResult);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentMutation);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _mutateOptions);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _client, client);
        this.setOptions(options);
        this.bindMethods();
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _MutationObserver_instances, updateResult_fn).call(this);
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    setOptions(options) {
        var _a;
        const prevOptions = this.options;
        this.options = (0, _chunkPXG64RU4Js.__privateGet)(this, _client).defaultMutationOptions(options);
        if (!(0, _utilsJs.shallowEqualObjects)(this.options, prevOptions)) (0, _chunkPXG64RU4Js.__privateGet)(this, _client).getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation),
            observer: this
        });
        if ((prevOptions == null ? void 0 : prevOptions.mutationKey) && this.options.mutationKey && (0, _utilsJs.hashKey)(prevOptions.mutationKey) !== (0, _utilsJs.hashKey)(this.options.mutationKey)) this.reset();
        else if (((_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation)) == null ? void 0 : _a.state.status) === "pending") (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation).setOptions(this.options);
    }
    onUnsubscribe() {
        var _a;
        if (!this.hasListeners()) (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation)) == null || _a.removeObserver(this);
    }
    onMutationUpdate(action) {
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _MutationObserver_instances, updateResult_fn).call(this);
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _MutationObserver_instances, notify_fn).call(this, action);
    }
    getCurrentResult() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult);
    }
    reset() {
        var _a;
        (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation)) == null || _a.removeObserver(this);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _currentMutation, void 0);
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _MutationObserver_instances, updateResult_fn).call(this);
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _MutationObserver_instances, notify_fn).call(this);
    }
    mutate(variables, options) {
        var _a;
        (0, _chunkPXG64RU4Js.__privateSet)(this, _mutateOptions, options);
        (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation)) == null || _a.removeObserver(this);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _currentMutation, (0, _chunkPXG64RU4Js.__privateGet)(this, _client).getMutationCache().build((0, _chunkPXG64RU4Js.__privateGet)(this, _client), this.options));
        (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation).addObserver(this);
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation).execute(variables);
    }
};
_client = new WeakMap();
_currentResult = new WeakMap();
_currentMutation = new WeakMap();
_mutateOptions = new WeakMap();
_MutationObserver_instances = new WeakSet();
updateResult_fn = function() {
    var _a;
    const state = ((_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentMutation)) == null ? void 0 : _a.state) ?? (0, _mutationJs.getDefaultState)();
    (0, _chunkPXG64RU4Js.__privateSet)(this, _currentResult, {
        ...state,
        isPending: state.status === "pending",
        isSuccess: state.status === "success",
        isError: state.status === "error",
        isIdle: state.status === "idle",
        mutate: this.mutate,
        reset: this.reset
    });
};
notify_fn = function(action) {
    (0, _notifyManagerJs.notifyManager).batch(()=>{
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if ((0, _chunkPXG64RU4Js.__privateGet)(this, _mutateOptions) && this.hasListeners()) {
            const variables = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult).variables;
            const onMutateResult = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult).context;
            const context = {
                client: (0, _chunkPXG64RU4Js.__privateGet)(this, _client),
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
            if ((action == null ? void 0 : action.type) === "success") {
                try {
                    (_b = (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _mutateOptions)).onSuccess) == null || _b.call(_a, action.data, variables, onMutateResult, context);
                } catch (e) {
                    Promise.reject(e);
                }
                try {
                    (_d = (_c = (0, _chunkPXG64RU4Js.__privateGet)(this, _mutateOptions)).onSettled) == null || _d.call(_c, action.data, null, variables, onMutateResult, context);
                } catch (e) {
                    Promise.reject(e);
                }
            } else if ((action == null ? void 0 : action.type) === "error") {
                try {
                    (_f = (_e = (0, _chunkPXG64RU4Js.__privateGet)(this, _mutateOptions)).onError) == null || _f.call(_e, action.error, variables, onMutateResult, context);
                } catch (e) {
                    Promise.reject(e);
                }
                try {
                    (_h = (_g = (0, _chunkPXG64RU4Js.__privateGet)(this, _mutateOptions)).onSettled) == null || _h.call(_g, void 0, action.error, variables, onMutateResult, context);
                } catch (e) {
                    Promise.reject(e);
                }
            }
        }
        this.listeners.forEach((listener)=>{
            listener((0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult));
        });
    });
};

},{"./chunk-PXG64RU4.js":"eWQTd","./mutation.js":"fSRHf","./notifyManager.js":"4UPNp","./subscribable.js":"7gKmK","./utils.js":"f5Xxs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jCU9W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueryCache", ()=>QueryCache);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/queryCache.ts
var _utilsJs = require("./utils.js");
var _queryJs = require("./query.js");
var _notifyManagerJs = require("./notifyManager.js");
var _subscribableJs = require("./subscribable.js");
var _queries;
var QueryCache = class extends (0, _subscribableJs.Subscribable) {
    constructor(config = {}){
        super();
        this.config = config;
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _queries);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _queries, /* @__PURE__ */ new Map());
    }
    build(client, options, state) {
        const queryKey = options.queryKey;
        const queryHash = options.queryHash ?? (0, _utilsJs.hashQueryKeyByOptions)(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new (0, _queryJs.Query)({
                client,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    add(query) {
        if (!(0, _chunkPXG64RU4Js.__privateGet)(this, _queries).has(query.queryHash)) {
            (0, _chunkPXG64RU4Js.__privateGet)(this, _queries).set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    remove(query) {
        const queryInMap = (0, _chunkPXG64RU4Js.__privateGet)(this, _queries).get(query.queryHash);
        if (queryInMap) {
            query.destroy();
            if (queryInMap === query) (0, _chunkPXG64RU4Js.__privateGet)(this, _queries).delete(query.queryHash);
            this.notify({
                type: "removed",
                query
            });
        }
    }
    clear() {
        (0, _notifyManagerJs.notifyManager).batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    get(queryHash) {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _queries).get(queryHash);
    }
    getAll() {
        return [
            ...(0, _chunkPXG64RU4Js.__privateGet)(this, _queries).values()
        ];
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, _utilsJs.matchQuery)(defaultedFilters, query));
    }
    findAll(filters = {}) {
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, _utilsJs.matchQuery)(filters, query)) : queries;
    }
    notify(event) {
        (0, _notifyManagerJs.notifyManager).batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    onFocus() {
        (0, _notifyManagerJs.notifyManager).batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    onOnline() {
        (0, _notifyManagerJs.notifyManager).batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
};
_queries = new WeakMap();

},{"./chunk-PXG64RU4.js":"eWQTd","./utils.js":"f5Xxs","./query.js":"f6TSh","./notifyManager.js":"4UPNp","./subscribable.js":"7gKmK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"f6TSh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Query", ()=>Query);
parcelHelpers.export(exports, "fetchState", ()=>fetchState);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/query.ts
var _utilsJs = require("./utils.js");
var _notifyManagerJs = require("./notifyManager.js");
var _retryerJs = require("./retryer.js");
var _removableJs = require("./removable.js");
var _infiniteQueryBehaviorJs = require("./infiniteQueryBehavior.js");
var _queryType, _initialState, _revertState, _cache, _client, _retryer, _defaultOptions, _abortSignalConsumed, _Query_instances, isInitialPausedFetch_fn, dispatch_fn;
var Query = class extends (0, _removableJs.Removable) {
    constructor(config){
        super();
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _Query_instances);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _queryType);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _initialState);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _revertState);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _cache);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _client);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _retryer);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _defaultOptions);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _abortSignalConsumed);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _abortSignalConsumed, false);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _defaultOptions, config.defaultOptions);
        this.setOptions(config.options);
        this.observers = [];
        (0, _chunkPXG64RU4Js.__privateSet)(this, _client, config.client);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _cache, (0, _chunkPXG64RU4Js.__privateGet)(this, _client).getQueryCache());
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        (0, _chunkPXG64RU4Js.__privateSet)(this, _initialState, getDefaultState(this.options));
        this.state = config.state ?? (0, _chunkPXG64RU4Js.__privateGet)(this, _initialState);
        this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get queryType() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _queryType);
    }
    get promise() {
        var _a;
        return (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) == null ? void 0 : _a.promise;
    }
    setOptions(options) {
        this.options = {
            ...(0, _chunkPXG64RU4Js.__privateGet)(this, _defaultOptions),
            ...options
        };
        if (options == null ? void 0 : options._type) (0, _chunkPXG64RU4Js.__privateSet)(this, _queryType, options._type);
        this.updateGcTime(this.options.gcTime);
        if (this.state && this.state.data === void 0) {
            const defaultState = getDefaultState(this.options);
            if (defaultState.data !== void 0) {
                this.setState(successState(defaultState.data, defaultState.dataUpdatedAt));
                (0, _chunkPXG64RU4Js.__privateSet)(this, _initialState, defaultState);
            }
        }
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") (0, _chunkPXG64RU4Js.__privateGet)(this, _cache).remove(this);
    }
    setData(newData, options) {
        const data = (0, _utilsJs.replaceData)(this.state.data, newData, this.options);
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, dispatch_fn).call(this, {
            data,
            type: "success",
            dataUpdatedAt: options == null ? void 0 : options.updatedAt,
            manual: options == null ? void 0 : options.manual
        });
        return data;
    }
    setState(state) {
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, dispatch_fn).call(this, {
            type: "setState",
            state
        });
    }
    cancel(options) {
        var _a, _b;
        const promise = (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) == null ? void 0 : _a.promise;
        (_b = (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) == null || _b.cancel(options);
        return promise ? promise.then((0, _utilsJs.noop)).catch((0, _utilsJs.noop)) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    get resetState() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _initialState);
    }
    reset() {
        this.destroy();
        this.setState(this.resetState);
    }
    isActive() {
        return this.observers.some((observer)=>(0, _utilsJs.resolveQueryBoolean)(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) return !this.isActive();
        return this.options.queryFn === (0, _utilsJs.skipToken) || !this.isFetched();
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
    }
    isStatic() {
        if (this.getObserversCount() > 0) return this.observers.some((observer)=>(0, _utilsJs.resolveStaleTime)(observer.options.staleTime, this) === "static");
        return false;
    }
    isStale() {
        if (this.getObserversCount() > 0) return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        return this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(staleTime = 0) {
        if (this.state.data === void 0) return true;
        if (staleTime === "static") return false;
        if (this.state.isInvalidated) return true;
        return !(0, _utilsJs.timeUntilStale)(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        var _a;
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer == null || observer.refetch({
            cancelRefetch: false
        });
        (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) == null || _a.continue();
    }
    onOnline() {
        var _a;
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer == null || observer.refetch({
            cancelRefetch: false
        });
        (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) == null || _a.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            (0, _chunkPXG64RU4Js.__privateGet)(this, _cache).notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if ((0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) {
                    if ((0, _chunkPXG64RU4Js.__privateGet)(this, _abortSignalConsumed) || (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, isInitialPausedFetch_fn).call(this)) (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer).cancel({
                        revert: true
                    });
                    else (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer).cancelRetry();
                }
                this.scheduleGc();
            }
            (0, _chunkPXG64RU4Js.__privateGet)(this, _cache).notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, dispatch_fn).call(this, {
            type: "invalidate"
        });
    }
    async fetch(options, fetchOptions) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
        if (this.state.fetchStatus !== "idle" && // If the promise in the retryer is already rejected, we have to definitely
        // re-start the fetch; there is a chance that the query is still in a
        // pending state when that happens
        ((_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) == null ? void 0 : _a.status()) !== "rejected") {
            if (this.state.data !== void 0 && (fetchOptions == null ? void 0 : fetchOptions.cancelRefetch)) this.cancel({
                silent: true
            });
            else if ((0, _chunkPXG64RU4Js.__privateGet)(this, _retryer)) {
                (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer).continueRetry();
                return (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer).promise;
            }
        }
        if (options) this.setOptions(options);
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) this.setOptions(observer.options);
        }
        if (!Array.isArray(this.options.queryKey)) console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    (0, _chunkPXG64RU4Js.__privateSet)(this, _abortSignalConsumed, true);
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, _utilsJs.ensureQueryFn)(this.options, fetchOptions);
            const createQueryFnContext = ()=>{
                const queryFnContext2 = {
                    client: (0, _chunkPXG64RU4Js.__privateGet)(this, _client),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                addSignalProperty(queryFnContext2);
                return queryFnContext2;
            };
            const queryFnContext = createQueryFnContext();
            (0, _chunkPXG64RU4Js.__privateSet)(this, _abortSignalConsumed, false);
            if (this.options.persister) return this.options.persister(queryFn, queryFnContext, this);
            return queryFn(queryFnContext);
        };
        const createFetchContext = ()=>{
            const context2 = {
                fetchOptions,
                options: this.options,
                queryKey: this.queryKey,
                client: (0, _chunkPXG64RU4Js.__privateGet)(this, _client),
                state: this.state,
                fetchFn
            };
            addSignalProperty(context2);
            return context2;
        };
        const context = createFetchContext();
        const behavior = (0, _chunkPXG64RU4Js.__privateGet)(this, _queryType) === "infinite" ? (0, _infiniteQueryBehaviorJs.infiniteQueryBehavior)(this.options.pages) : this.options.behavior;
        behavior == null || behavior.onFetch(context, this);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _revertState, this.state);
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((_b = context.fetchOptions) == null ? void 0 : _b.meta)) (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, dispatch_fn).call(this, {
            type: "fetch",
            meta: (_c = context.fetchOptions) == null ? void 0 : _c.meta
        });
        (0, _chunkPXG64RU4Js.__privateSet)(this, _retryer, (0, _retryerJs.createRetryer)({
            initialPromise: fetchOptions == null ? void 0 : fetchOptions.initialPromise,
            fn: context.fetchFn,
            onCancel: (error)=>{
                if (error instanceof (0, _retryerJs.CancelledError) && error.revert) this.setState({
                    ...(0, _chunkPXG64RU4Js.__privateGet)(this, _revertState),
                    fetchStatus: "idle"
                });
                abortController.abort();
            },
            onFail: (failureCount, error)=>{
                (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, dispatch_fn).call(this, {
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, dispatch_fn).call(this, {
                    type: "pause"
                });
            },
            onContinue: ()=>{
                (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, dispatch_fn).call(this, {
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        }));
        try {
            const data = await (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer).start();
            if (data === void 0) {
                console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                throw new Error(`${this.queryHash} data is undefined`);
            }
            this.setData(data);
            (_e = (_d = (0, _chunkPXG64RU4Js.__privateGet)(this, _cache).config).onSuccess) == null || _e.call(_d, data, this);
            (_g = (_f = (0, _chunkPXG64RU4Js.__privateGet)(this, _cache).config).onSettled) == null || _g.call(_f, data, this.state.error, this);
            return data;
        } catch (error) {
            if (error instanceof (0, _retryerJs.CancelledError)) {
                if (error.silent) return (0, _chunkPXG64RU4Js.__privateGet)(this, _retryer).promise;
                else if (error.revert) {
                    if (this.state.data === void 0) throw error;
                    return this.state.data;
                }
            }
            (0, _chunkPXG64RU4Js.__privateMethod)(this, _Query_instances, dispatch_fn).call(this, {
                type: "error",
                error
            });
            (_i = (_h = (0, _chunkPXG64RU4Js.__privateGet)(this, _cache).config).onError) == null || _i.call(_h, error, this);
            (_k = (_j = (0, _chunkPXG64RU4Js.__privateGet)(this, _cache).config).onSettled) == null || _k.call(_j, this.state.data, error, this);
            throw error;
        } finally{
            this.scheduleGc();
        }
    }
};
_queryType = new WeakMap();
_initialState = new WeakMap();
_revertState = new WeakMap();
_cache = new WeakMap();
_client = new WeakMap();
_retryer = new WeakMap();
_defaultOptions = new WeakMap();
_abortSignalConsumed = new WeakMap();
_Query_instances = new WeakSet();
isInitialPausedFetch_fn = function() {
    return this.state.fetchStatus === "paused" && this.state.status === "pending";
};
dispatch_fn = function(action) {
    const reducer = (state)=>{
        switch(action.type){
            case "failed":
                return {
                    ...state,
                    fetchFailureCount: action.failureCount,
                    fetchFailureReason: action.error
                };
            case "pause":
                return {
                    ...state,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...state,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...state,
                    ...fetchState(state.data, this.options),
                    fetchMeta: action.meta ?? null
                };
            case "success":
                const newState = {
                    ...state,
                    ...successState(action.data, action.dataUpdatedAt),
                    dataUpdateCount: state.dataUpdateCount + 1,
                    ...!action.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                (0, _chunkPXG64RU4Js.__privateSet)(this, _revertState, action.manual ? newState : void 0);
                return newState;
            case "error":
                const error = action.error;
                return {
                    ...state,
                    error,
                    errorUpdateCount: state.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: state.fetchFailureCount + 1,
                    fetchFailureReason: error,
                    fetchStatus: "idle",
                    status: "error",
                    // flag existing data as invalidated if we get a background error
                    // note that "no data" always means stale so we can set unconditionally here
                    isInvalidated: true
                };
            case "invalidate":
                return {
                    ...state,
                    isInvalidated: true
                };
            case "setState":
                return {
                    ...state,
                    ...action.state
                };
        }
    };
    this.state = reducer(this.state);
    (0, _notifyManagerJs.notifyManager).batch(()=>{
        this.observers.forEach((observer)=>{
            observer.onQueryUpdate();
        });
        (0, _chunkPXG64RU4Js.__privateGet)(this, _cache).notify({
            query: this,
            type: "updated",
            action
        });
    });
};
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, _retryerJs.canFetch)(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function successState(data, dataUpdatedAt) {
    return {
        data,
        dataUpdatedAt: dataUpdatedAt ?? Date.now(),
        error: null,
        isInvalidated: false,
        status: "success"
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}

},{"./chunk-PXG64RU4.js":"eWQTd","./utils.js":"f5Xxs","./notifyManager.js":"4UPNp","./retryer.js":"1YeDR","./removable.js":"hu2X7","./infiniteQueryBehavior.js":"caf7Z","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"caf7Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasNextPage", ()=>hasNextPage);
parcelHelpers.export(exports, "hasPreviousPage", ()=>hasPreviousPage);
parcelHelpers.export(exports, "infiniteQueryBehavior", ()=>infiniteQueryBehavior);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/infiniteQueryBehavior.ts
var _utilsJs = require("./utils.js");
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            var _a, _b, _c, _d, _e;
            const options = context.options;
            const direction = (_c = (_b = (_a = context.fetchOptions) == null ? void 0 : _a.meta) == null ? void 0 : _b.fetchMore) == null ? void 0 : _c.direction;
            const oldPages = ((_d = context.state.data) == null ? void 0 : _d.pages) || [];
            const oldPageParams = ((_e = context.state.data) == null ? void 0 : _e.pageParams) || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    (0, _utilsJs.addConsumeAwareSignal)(object, ()=>context.signal, ()=>cancelled = true);
                };
                const queryFn = (0, _utilsJs.ensureQueryFn)(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) return Promise.reject(context.signal.reason);
                    if (param == null && data.pages.length) return Promise.resolve(data);
                    const createQueryFnContext = ()=>{
                        const queryFnContext2 = {
                            client: context.client,
                            queryKey: context.queryKey,
                            pageParam: param,
                            direction: previous ? "backward" : "forward",
                            meta: context.options.meta
                        };
                        addSignalProperty(queryFnContext2);
                        return queryFnContext2;
                    };
                    const queryFnContext = createQueryFnContext();
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? (0, _utilsJs.addToStart) : (0, _utilsJs.addToEnd);
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages ?? oldPages.length;
                    do {
                        const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) break;
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages);
                }
                return result;
            };
            if (context.options.persister) context.fetchFn = ()=>{
                var _a2, _b2;
                return (_b2 = (_a2 = context.options).persister) == null ? void 0 : _b2.call(_a2, fetchFn, {
                    client: context.client,
                    queryKey: context.queryKey,
                    meta: context.options.meta,
                    signal: context.signal
                }, query);
            };
            else context.fetchFn = fetchFn;
        }
    };
}
function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
    var _a;
    return pages.length > 0 ? (_a = options.getPreviousPageParam) == null ? void 0 : _a.call(options, pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}

},{"./chunk-PXG64RU4.js":"eWQTd","./utils.js":"f5Xxs","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gnZ8l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueryClient", ()=>QueryClient);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/queryClient.ts
var _utilsJs = require("./utils.js");
var _queryCacheJs = require("./queryCache.js");
var _mutationCacheJs = require("./mutationCache.js");
var _focusManagerJs = require("./focusManager.js");
var _onlineManagerJs = require("./onlineManager.js");
var _notifyManagerJs = require("./notifyManager.js");
var _queryCache, _mutationCache, _defaultOptions, _queryDefaults, _mutationDefaults, _mountCount, _unsubscribeFocus, _unsubscribeOnline;
var QueryClient = class {
    constructor(config = {}){
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _queryCache);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _mutationCache);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _defaultOptions);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _queryDefaults);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _mutationDefaults);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _mountCount);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _unsubscribeFocus);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _unsubscribeOnline);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _queryCache, config.queryCache || new (0, _queryCacheJs.QueryCache)());
        (0, _chunkPXG64RU4Js.__privateSet)(this, _mutationCache, config.mutationCache || new (0, _mutationCacheJs.MutationCache)());
        (0, _chunkPXG64RU4Js.__privateSet)(this, _defaultOptions, config.defaultOptions || {});
        (0, _chunkPXG64RU4Js.__privateSet)(this, _queryDefaults, /* @__PURE__ */ new Map());
        (0, _chunkPXG64RU4Js.__privateSet)(this, _mutationDefaults, /* @__PURE__ */ new Map());
        (0, _chunkPXG64RU4Js.__privateSet)(this, _mountCount, 0);
    }
    mount() {
        (0, _chunkPXG64RU4Js.__privateWrapper)(this, _mountCount)._++;
        if ((0, _chunkPXG64RU4Js.__privateGet)(this, _mountCount) !== 1) return;
        (0, _chunkPXG64RU4Js.__privateSet)(this, _unsubscribeFocus, (0, _focusManagerJs.focusManager).subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).onFocus();
            }
        }));
        (0, _chunkPXG64RU4Js.__privateSet)(this, _unsubscribeOnline, (0, _onlineManagerJs.onlineManager).subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).onOnline();
            }
        }));
    }
    unmount() {
        var _a, _b;
        (0, _chunkPXG64RU4Js.__privateWrapper)(this, _mountCount)._--;
        if ((0, _chunkPXG64RU4Js.__privateGet)(this, _mountCount) !== 0) return;
        (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _unsubscribeFocus)) == null || _a.call(this);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _unsubscribeFocus, void 0);
        (_b = (0, _chunkPXG64RU4Js.__privateGet)(this, _unsubscribeOnline)) == null || _b.call(this);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _unsubscribeOnline, void 0);
    }
    isFetching(filters) {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(filters) {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */ getQueryData(queryKey) {
        var _a;
        const options = this.defaultQueryOptions({
            queryKey
        });
        return (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).get(options.queryHash)) == null ? void 0 : _a.state.data;
    }
    ensureQueryData(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        const query = (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).build(this, defaultedOptions);
        const cachedData = query.state.data;
        if (cachedData === void 0) return this.fetchQuery(options);
        if (options.revalidateIfStale && query.isStaleByTime((0, _utilsJs.resolveStaleTime)(defaultedOptions.staleTime, query))) this.prefetchQuery(defaultedOptions);
        return Promise.resolve(cachedData);
    }
    getQueriesData(filters) {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).findAll(filters).map(({ queryKey, state })=>{
            const data = state.data;
            return [
                queryKey,
                data
            ];
        });
    }
    setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const query = (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).get(defaultedOptions.queryHash);
        const prevData = query == null ? void 0 : query.state.data;
        const data = (0, _utilsJs.functionalUpdate)(updater, prevData);
        if (data === void 0) return void 0;
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    setQueriesData(filters, updater, options) {
        return (0, _notifyManagerJs.notifyManager).batch(()=>(0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).findAll(filters).map(({ queryKey })=>[
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ]));
    }
    getQueryState(queryKey) {
        var _a;
        const options = this.defaultQueryOptions({
            queryKey
        });
        return (_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).get(options.queryHash)) == null ? void 0 : _a.state;
    }
    removeQueries(filters) {
        const queryCache = (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache);
        (0, _notifyManagerJs.notifyManager).batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    resetQueries(filters, options) {
        const queryCache = (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache);
        return (0, _notifyManagerJs.notifyManager).batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries({
                type: "active",
                ...filters
            }, options);
        });
    }
    cancelQueries(filters, cancelOptions = {}) {
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = (0, _notifyManagerJs.notifyManager).batch(()=>(0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then((0, _utilsJs.noop)).catch((0, _utilsJs.noop));
    }
    invalidateQueries(filters, options = {}) {
        return (0, _notifyManagerJs.notifyManager).batch(()=>{
            (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if ((filters == null ? void 0 : filters.refetchType) === "none") return Promise.resolve();
            return this.refetchQueries({
                ...filters,
                type: (filters == null ? void 0 : filters.refetchType) ?? (filters == null ? void 0 : filters.type) ?? "active"
            }, options);
        });
    }
    refetchQueries(filters, options = {}) {
        const fetchOptions = {
            ...options,
            cancelRefetch: options.cancelRefetch ?? true
        };
        const promises = (0, _notifyManagerJs.notifyManager).batch(()=>(0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).findAll(filters).filter((query)=>!query.isDisabled() && !query.isStatic()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) promise = promise.catch((0, _utilsJs.noop));
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then((0, _utilsJs.noop));
    }
    fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) defaultedOptions.retry = false;
        const query = (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).build(this, defaultedOptions);
        return query.isStaleByTime((0, _utilsJs.resolveStaleTime)(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    prefetchQuery(options) {
        return this.fetchQuery(options).then((0, _utilsJs.noop)).catch((0, _utilsJs.noop));
    }
    fetchInfiniteQuery(options) {
        options._type = "infinite";
        return this.fetchQuery(options);
    }
    prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then((0, _utilsJs.noop)).catch((0, _utilsJs.noop));
    }
    ensureInfiniteQueryData(options) {
        options._type = "infinite";
        return this.ensureQueryData(options);
    }
    resumePausedMutations() {
        if ((0, _onlineManagerJs.onlineManager).isOnline()) return (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).resumePausedMutations();
        return Promise.resolve();
    }
    getQueryCache() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache);
    }
    getMutationCache() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache);
    }
    getDefaultOptions() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _defaultOptions);
    }
    setDefaultOptions(options) {
        (0, _chunkPXG64RU4Js.__privateSet)(this, _defaultOptions, options);
    }
    setQueryDefaults(queryKey, options) {
        (0, _chunkPXG64RU4Js.__privateGet)(this, _queryDefaults).set((0, _utilsJs.hashKey)(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    getQueryDefaults(queryKey) {
        const defaults = [
            ...(0, _chunkPXG64RU4Js.__privateGet)(this, _queryDefaults).values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, _utilsJs.partialMatchKey)(queryKey, queryDefault.queryKey)) Object.assign(result, queryDefault.defaultOptions);
        });
        return result;
    }
    setMutationDefaults(mutationKey, options) {
        (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationDefaults).set((0, _utilsJs.hashKey)(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    getMutationDefaults(mutationKey) {
        const defaults = [
            ...(0, _chunkPXG64RU4Js.__privateGet)(this, _mutationDefaults).values()
        ];
        const result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, _utilsJs.partialMatchKey)(mutationKey, queryDefault.mutationKey)) Object.assign(result, queryDefault.defaultOptions);
        });
        return result;
    }
    defaultQueryOptions(options) {
        if (options._defaulted) return options;
        const defaultedOptions = {
            ...(0, _chunkPXG64RU4Js.__privateGet)(this, _defaultOptions).queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) defaultedOptions.queryHash = (0, _utilsJs.hashQueryKeyByOptions)(defaultedOptions.queryKey, defaultedOptions);
        if (defaultedOptions.refetchOnReconnect === void 0) defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        if (defaultedOptions.throwOnError === void 0) defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        if (!defaultedOptions.networkMode && defaultedOptions.persister) defaultedOptions.networkMode = "offlineFirst";
        if (defaultedOptions.queryFn === (0, _utilsJs.skipToken)) defaultedOptions.enabled = false;
        return defaultedOptions;
    }
    defaultMutationOptions(options) {
        if (options == null ? void 0 : options._defaulted) return options;
        return {
            ...(0, _chunkPXG64RU4Js.__privateGet)(this, _defaultOptions).mutations,
            ...(options == null ? void 0 : options.mutationKey) && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    clear() {
        (0, _chunkPXG64RU4Js.__privateGet)(this, _queryCache).clear();
        (0, _chunkPXG64RU4Js.__privateGet)(this, _mutationCache).clear();
    }
};
_queryCache = new WeakMap();
_mutationCache = new WeakMap();
_defaultOptions = new WeakMap();
_queryDefaults = new WeakMap();
_mutationDefaults = new WeakMap();
_mountCount = new WeakMap();
_unsubscribeFocus = new WeakMap();
_unsubscribeOnline = new WeakMap();

},{"./chunk-PXG64RU4.js":"eWQTd","./utils.js":"f5Xxs","./queryCache.js":"jCU9W","./mutationCache.js":"7bStC","./focusManager.js":"lribG","./onlineManager.js":"llEBI","./notifyManager.js":"4UPNp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1sOeI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueryObserver", ()=>QueryObserver);
var _chunkPXG64RU4Js = require("./chunk-PXG64RU4.js");
// src/queryObserver.ts
var _focusManagerJs = require("./focusManager.js");
var _environmentManagerJs = require("./environmentManager.js");
var _notifyManagerJs = require("./notifyManager.js");
var _queryJs = require("./query.js");
var _subscribableJs = require("./subscribable.js");
var _thenableJs = require("./thenable.js");
var _utilsJs = require("./utils.js");
var _timeoutManagerJs = require("./timeoutManager.js");
var _client, _currentQuery, _currentQueryInitialState, _currentResult, _currentResultState, _currentResultOptions, _currentThenable, _selectError, _selectFn, _selectResult, _lastQueryWithDefinedData, _staleTimeoutId, _refetchIntervalId, _currentRefetchInterval, _trackedProps, _QueryObserver_instances, executeFetch_fn, updateStaleTimeout_fn, computeRefetchInterval_fn, updateRefetchInterval_fn, updateTimers_fn, clearStaleTimeout_fn, clearRefetchInterval_fn, updateQuery_fn, notify_fn;
var QueryObserver = class extends (0, _subscribableJs.Subscribable) {
    constructor(client, options){
        super();
        this.options = options;
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _QueryObserver_instances);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _client);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentQuery);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentQueryInitialState);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentResult);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentResultState);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentResultOptions);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentThenable);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _selectError);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _selectFn);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _selectResult);
        // This property keeps track of the last query with defined data.
        // It will be used to pass the previous data and query to the placeholder function between renders.
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _lastQueryWithDefinedData);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _staleTimeoutId);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _refetchIntervalId);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _currentRefetchInterval);
        (0, _chunkPXG64RU4Js.__privateAdd)(this, _trackedProps, /* @__PURE__ */ new Set());
        (0, _chunkPXG64RU4Js.__privateSet)(this, _client, client);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _selectError, null);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _currentThenable, (0, _thenableJs.pendingThenable)());
        this.bindMethods();
        this.setOptions(options);
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this);
    }
    onSubscribe() {
        if (this.listeners.size === 1) {
            (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery).addObserver(this);
            if (shouldFetchOnMount((0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery), this.options)) (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, executeFetch_fn).call(this);
            else this.updateResult();
            (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, updateTimers_fn).call(this);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) this.destroy();
    }
    shouldFetchOnReconnect() {
        return shouldFetchOn((0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery), this.options, this.options.refetchOnReconnect);
    }
    shouldFetchOnWindowFocus() {
        return shouldFetchOn((0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery), this.options, this.options.refetchOnWindowFocus);
    }
    destroy() {
        this.listeners = /* @__PURE__ */ new Set();
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
        (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery).removeObserver(this);
    }
    setOptions(options) {
        const prevOptions = this.options;
        const prevQuery = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery);
        this.options = (0, _chunkPXG64RU4Js.__privateGet)(this, _client).defaultQueryOptions(options);
        if (this.options.enabled !== void 0 && typeof this.options.enabled !== "boolean" && typeof this.options.enabled !== "function" && typeof (0, _utilsJs.resolveQueryBoolean)(this.options.enabled, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) !== "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, updateQuery_fn).call(this);
        (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery).setOptions(this.options);
        if (prevOptions._defaulted && !(0, _utilsJs.shallowEqualObjects)(this.options, prevOptions)) (0, _chunkPXG64RU4Js.__privateGet)(this, _client).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery),
            observer: this
        });
        const mounted = this.hasListeners();
        if (mounted && shouldFetchOptionally((0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery), prevQuery, this.options, prevOptions)) (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, executeFetch_fn).call(this);
        this.updateResult();
        if (mounted && ((0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery) !== prevQuery || (0, _utilsJs.resolveQueryBoolean)(this.options.enabled, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) !== (0, _utilsJs.resolveQueryBoolean)(prevOptions.enabled, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) || (0, _utilsJs.resolveStaleTime)(this.options.staleTime, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) !== (0, _utilsJs.resolveStaleTime)(prevOptions.staleTime, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)))) (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
        const nextRefetchInterval = (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this);
        if (mounted && ((0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery) !== prevQuery || (0, _utilsJs.resolveQueryBoolean)(this.options.enabled, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) !== (0, _utilsJs.resolveQueryBoolean)(prevOptions.enabled, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) || nextRefetchInterval !== (0, _chunkPXG64RU4Js.__privateGet)(this, _currentRefetchInterval))) (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, nextRefetchInterval);
    }
    getOptimisticResult(options) {
        const query = (0, _chunkPXG64RU4Js.__privateGet)(this, _client).getQueryCache().build((0, _chunkPXG64RU4Js.__privateGet)(this, _client), options);
        const result = this.createResult(query, options);
        if (shouldAssignObserverCurrentProperties(this, result)) {
            (0, _chunkPXG64RU4Js.__privateSet)(this, _currentResult, result);
            (0, _chunkPXG64RU4Js.__privateSet)(this, _currentResultOptions, this.options);
            (0, _chunkPXG64RU4Js.__privateSet)(this, _currentResultState, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery).state);
        }
        return result;
    }
    getCurrentResult() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult);
    }
    trackResult(result, onPropTracked) {
        return new Proxy(result, {
            get: (target, key)=>{
                this.trackProp(key);
                onPropTracked == null || onPropTracked(key);
                if (key === "promise") {
                    this.trackProp("data");
                    if (!this.options.experimental_prefetchInRender && (0, _chunkPXG64RU4Js.__privateGet)(this, _currentThenable).status === "pending") (0, _chunkPXG64RU4Js.__privateGet)(this, _currentThenable).reject(new Error("experimental_prefetchInRender feature flag is not enabled"));
                }
                return Reflect.get(target, key);
            }
        });
    }
    trackProp(key) {
        (0, _chunkPXG64RU4Js.__privateGet)(this, _trackedProps).add(key);
    }
    getCurrentQuery() {
        return (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery);
    }
    refetch({ ...options } = {}) {
        return this.fetch({
            ...options
        });
    }
    fetchOptimistic(options) {
        const defaultedOptions = (0, _chunkPXG64RU4Js.__privateGet)(this, _client).defaultQueryOptions(options);
        const query = (0, _chunkPXG64RU4Js.__privateGet)(this, _client).getQueryCache().build((0, _chunkPXG64RU4Js.__privateGet)(this, _client), defaultedOptions);
        return query.fetch().then(()=>this.createResult(query, defaultedOptions));
    }
    fetch(fetchOptions) {
        return (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, executeFetch_fn).call(this, {
            ...fetchOptions,
            cancelRefetch: fetchOptions.cancelRefetch ?? true
        }).then(()=>{
            this.updateResult();
            return (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult);
        });
    }
    createResult(query, options) {
        var _a;
        const prevQuery = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery);
        const prevOptions = this.options;
        const prevResult = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult);
        const prevResultState = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResultState);
        const prevResultOptions = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResultOptions);
        const queryChange = query !== prevQuery;
        const queryInitialState = queryChange ? query.state : (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQueryInitialState);
        const { state } = query;
        let newState = {
            ...state
        };
        let isPlaceholderData = false;
        let data;
        if (options._optimisticResults) {
            const mounted = this.hasListeners();
            const fetchOnMount = !mounted && shouldFetchOnMount(query, options);
            const fetchOptionally = mounted && shouldFetchOptionally(query, prevQuery, options, prevOptions);
            if (fetchOnMount || fetchOptionally) newState = {
                ...newState,
                ...(0, _queryJs.fetchState)(state.data, query.options)
            };
            if (options._optimisticResults === "isRestoring") newState.fetchStatus = "idle";
        }
        let { error, errorUpdatedAt, status } = newState;
        data = newState.data;
        let skipSelect = false;
        if (options.placeholderData !== void 0 && data === void 0 && status === "pending") {
            let placeholderData;
            if ((prevResult == null ? void 0 : prevResult.isPlaceholderData) && options.placeholderData === (prevResultOptions == null ? void 0 : prevResultOptions.placeholderData)) {
                placeholderData = prevResult.data;
                skipSelect = true;
            } else placeholderData = typeof options.placeholderData === "function" ? options.placeholderData((_a = (0, _chunkPXG64RU4Js.__privateGet)(this, _lastQueryWithDefinedData)) == null ? void 0 : _a.state.data, (0, _chunkPXG64RU4Js.__privateGet)(this, _lastQueryWithDefinedData)) : options.placeholderData;
            if (placeholderData !== void 0) {
                status = "success";
                data = (0, _utilsJs.replaceData)(prevResult == null ? void 0 : prevResult.data, placeholderData, options);
                isPlaceholderData = true;
            }
        }
        if (options.select && data !== void 0 && !skipSelect) {
            if (prevResult && data === (prevResultState == null ? void 0 : prevResultState.data) && options.select === (0, _chunkPXG64RU4Js.__privateGet)(this, _selectFn)) data = (0, _chunkPXG64RU4Js.__privateGet)(this, _selectResult);
            else try {
                (0, _chunkPXG64RU4Js.__privateSet)(this, _selectFn, options.select);
                data = options.select(data);
                data = (0, _utilsJs.replaceData)(prevResult == null ? void 0 : prevResult.data, data, options);
                (0, _chunkPXG64RU4Js.__privateSet)(this, _selectResult, data);
                (0, _chunkPXG64RU4Js.__privateSet)(this, _selectError, null);
            } catch (selectError) {
                (0, _chunkPXG64RU4Js.__privateSet)(this, _selectError, selectError);
            }
        }
        if ((0, _chunkPXG64RU4Js.__privateGet)(this, _selectError)) {
            error = (0, _chunkPXG64RU4Js.__privateGet)(this, _selectError);
            data = (0, _chunkPXG64RU4Js.__privateGet)(this, _selectResult);
            errorUpdatedAt = Date.now();
            status = "error";
        }
        const isFetching = newState.fetchStatus === "fetching";
        const isPending = status === "pending";
        const isError = status === "error";
        const isLoading = isPending && isFetching;
        const hasData = data !== void 0;
        const result = {
            status,
            fetchStatus: newState.fetchStatus,
            isPending,
            isSuccess: status === "success",
            isError,
            isInitialLoading: isLoading,
            isLoading,
            data,
            dataUpdatedAt: newState.dataUpdatedAt,
            error,
            errorUpdatedAt,
            failureCount: newState.fetchFailureCount,
            failureReason: newState.fetchFailureReason,
            errorUpdateCount: newState.errorUpdateCount,
            isFetched: query.isFetched(),
            isFetchedAfterMount: newState.dataUpdateCount > queryInitialState.dataUpdateCount || newState.errorUpdateCount > queryInitialState.errorUpdateCount,
            isFetching,
            isRefetching: isFetching && !isPending,
            isLoadingError: isError && !hasData,
            isPaused: newState.fetchStatus === "paused",
            isPlaceholderData,
            isRefetchError: isError && hasData,
            isStale: isStale(query, options),
            refetch: this.refetch,
            promise: (0, _chunkPXG64RU4Js.__privateGet)(this, _currentThenable),
            isEnabled: (0, _utilsJs.resolveQueryBoolean)(options.enabled, query) !== false
        };
        const nextResult = result;
        if (this.options.experimental_prefetchInRender) {
            const hasResultData = nextResult.data !== void 0;
            const isErrorWithoutData = nextResult.status === "error" && !hasResultData;
            const finalizeThenableIfPossible = (thenable)=>{
                if (isErrorWithoutData) thenable.reject(nextResult.error);
                else if (hasResultData) thenable.resolve(nextResult.data);
            };
            const recreateThenable = ()=>{
                const pending = (0, _chunkPXG64RU4Js.__privateSet)(this, _currentThenable, nextResult.promise = (0, _thenableJs.pendingThenable)());
                finalizeThenableIfPossible(pending);
            };
            const prevThenable = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentThenable);
            switch(prevThenable.status){
                case "pending":
                    if (query.queryHash === prevQuery.queryHash) finalizeThenableIfPossible(prevThenable);
                    break;
                case "fulfilled":
                    if (isErrorWithoutData || nextResult.data !== prevThenable.value) recreateThenable();
                    break;
                case "rejected":
                    if (!isErrorWithoutData || nextResult.error !== prevThenable.reason) recreateThenable();
                    break;
            }
        }
        return nextResult;
    }
    updateResult() {
        const prevResult = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult);
        const nextResult = this.createResult((0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery), this.options);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _currentResultState, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery).state);
        (0, _chunkPXG64RU4Js.__privateSet)(this, _currentResultOptions, this.options);
        if ((0, _chunkPXG64RU4Js.__privateGet)(this, _currentResultState).data !== void 0) (0, _chunkPXG64RU4Js.__privateSet)(this, _lastQueryWithDefinedData, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery));
        if ((0, _utilsJs.shallowEqualObjects)(nextResult, prevResult)) return;
        (0, _chunkPXG64RU4Js.__privateSet)(this, _currentResult, nextResult);
        const shouldNotifyListeners = ()=>{
            if (!prevResult) return true;
            const { notifyOnChangeProps } = this.options;
            const notifyOnChangePropsValue = typeof notifyOnChangeProps === "function" ? notifyOnChangeProps() : notifyOnChangeProps;
            if (notifyOnChangePropsValue === "all" || !notifyOnChangePropsValue && !(0, _chunkPXG64RU4Js.__privateGet)(this, _trackedProps).size) return true;
            const includedProps = new Set(notifyOnChangePropsValue ?? (0, _chunkPXG64RU4Js.__privateGet)(this, _trackedProps));
            if (this.options.throwOnError) includedProps.add("error");
            return Object.keys((0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult)).some((key)=>{
                const typedKey = key;
                const changed = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult)[typedKey] !== prevResult[typedKey];
                return changed && includedProps.has(typedKey);
            });
        };
        (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, notify_fn).call(this, {
            listeners: shouldNotifyListeners()
        });
    }
    onQueryUpdate() {
        this.updateResult();
        if (this.hasListeners()) (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, updateTimers_fn).call(this);
    }
};
_client = new WeakMap();
_currentQuery = new WeakMap();
_currentQueryInitialState = new WeakMap();
_currentResult = new WeakMap();
_currentResultState = new WeakMap();
_currentResultOptions = new WeakMap();
_currentThenable = new WeakMap();
_selectError = new WeakMap();
_selectFn = new WeakMap();
_selectResult = new WeakMap();
_lastQueryWithDefinedData = new WeakMap();
_staleTimeoutId = new WeakMap();
_refetchIntervalId = new WeakMap();
_currentRefetchInterval = new WeakMap();
_trackedProps = new WeakMap();
_QueryObserver_instances = new WeakSet();
executeFetch_fn = function(fetchOptions) {
    (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, updateQuery_fn).call(this);
    let promise = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery).fetch(this.options, fetchOptions);
    if (!(fetchOptions == null ? void 0 : fetchOptions.throwOnError)) promise = promise.catch((0, _utilsJs.noop));
    return promise;
};
updateStaleTimeout_fn = function() {
    (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, clearStaleTimeout_fn).call(this);
    const staleTime = (0, _utilsJs.resolveStaleTime)(this.options.staleTime, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery));
    if ((0, _environmentManagerJs.environmentManager).isServer() || (0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult).isStale || !(0, _utilsJs.isValidTimeout)(staleTime)) return;
    const time = (0, _utilsJs.timeUntilStale)((0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult).dataUpdatedAt, staleTime);
    const timeout = time + 1;
    (0, _chunkPXG64RU4Js.__privateSet)(this, _staleTimeoutId, (0, _timeoutManagerJs.timeoutManager).setTimeout(()=>{
        if (!(0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult).isStale) this.updateResult();
    }, timeout));
};
computeRefetchInterval_fn = function() {
    return (typeof this.options.refetchInterval === "function" ? this.options.refetchInterval((0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) : this.options.refetchInterval) ?? false;
};
updateRefetchInterval_fn = function(nextInterval) {
    (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, clearRefetchInterval_fn).call(this);
    (0, _chunkPXG64RU4Js.__privateSet)(this, _currentRefetchInterval, nextInterval);
    if ((0, _environmentManagerJs.environmentManager).isServer() || (0, _utilsJs.resolveQueryBoolean)(this.options.enabled, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) === false || !(0, _utilsJs.isValidTimeout)((0, _chunkPXG64RU4Js.__privateGet)(this, _currentRefetchInterval)) || (0, _chunkPXG64RU4Js.__privateGet)(this, _currentRefetchInterval) === 0) return;
    (0, _chunkPXG64RU4Js.__privateSet)(this, _refetchIntervalId, (0, _timeoutManagerJs.timeoutManager).setInterval(()=>{
        if (this.options.refetchIntervalInBackground || (0, _focusManagerJs.focusManager).isFocused()) (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, executeFetch_fn).call(this);
    }, (0, _chunkPXG64RU4Js.__privateGet)(this, _currentRefetchInterval)));
};
updateTimers_fn = function() {
    (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, updateStaleTimeout_fn).call(this);
    (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, updateRefetchInterval_fn).call(this, (0, _chunkPXG64RU4Js.__privateMethod)(this, _QueryObserver_instances, computeRefetchInterval_fn).call(this));
};
clearStaleTimeout_fn = function() {
    if ((0, _chunkPXG64RU4Js.__privateGet)(this, _staleTimeoutId) !== void 0) {
        (0, _timeoutManagerJs.timeoutManager).clearTimeout((0, _chunkPXG64RU4Js.__privateGet)(this, _staleTimeoutId));
        (0, _chunkPXG64RU4Js.__privateSet)(this, _staleTimeoutId, void 0);
    }
};
clearRefetchInterval_fn = function() {
    if ((0, _chunkPXG64RU4Js.__privateGet)(this, _refetchIntervalId) !== void 0) {
        (0, _timeoutManagerJs.timeoutManager).clearInterval((0, _chunkPXG64RU4Js.__privateGet)(this, _refetchIntervalId));
        (0, _chunkPXG64RU4Js.__privateSet)(this, _refetchIntervalId, void 0);
    }
};
updateQuery_fn = function() {
    const query = (0, _chunkPXG64RU4Js.__privateGet)(this, _client).getQueryCache().build((0, _chunkPXG64RU4Js.__privateGet)(this, _client), this.options);
    if (query === (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery)) return;
    const prevQuery = (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery);
    (0, _chunkPXG64RU4Js.__privateSet)(this, _currentQuery, query);
    (0, _chunkPXG64RU4Js.__privateSet)(this, _currentQueryInitialState, query.state);
    if (this.hasListeners()) {
        prevQuery == null || prevQuery.removeObserver(this);
        query.addObserver(this);
    }
};
notify_fn = function(notifyOptions) {
    (0, _notifyManagerJs.notifyManager).batch(()=>{
        if (notifyOptions.listeners) this.listeners.forEach((listener)=>{
            listener((0, _chunkPXG64RU4Js.__privateGet)(this, _currentResult));
        });
        (0, _chunkPXG64RU4Js.__privateGet)(this, _client).getQueryCache().notify({
            query: (0, _chunkPXG64RU4Js.__privateGet)(this, _currentQuery),
            type: "observerResultsUpdated"
        });
    });
};
function shouldLoadOnMount(query, options) {
    return (0, _utilsJs.resolveQueryBoolean)(options.enabled, query) !== false && query.state.data === void 0 && !(query.state.status === "error" && (0, _utilsJs.resolveQueryBoolean)(options.retryOnMount, query) === false);
}
function shouldFetchOnMount(query, options) {
    return shouldLoadOnMount(query, options) || query.state.data !== void 0 && shouldFetchOn(query, options, options.refetchOnMount);
}
function shouldFetchOn(query, options, field) {
    if ((0, _utilsJs.resolveQueryBoolean)(options.enabled, query) !== false && (0, _utilsJs.resolveStaleTime)(options.staleTime, query) !== "static") {
        const value = typeof field === "function" ? field(query) : field;
        return value === "always" || value !== false && isStale(query, options);
    }
    return false;
}
function shouldFetchOptionally(query, prevQuery, options, prevOptions) {
    return (query !== prevQuery || (0, _utilsJs.resolveQueryBoolean)(prevOptions.enabled, query) === false) && (!options.suspense || query.state.status !== "error") && isStale(query, options);
}
function isStale(query, options) {
    return (0, _utilsJs.resolveQueryBoolean)(options.enabled, query) !== false && query.isStaleByTime((0, _utilsJs.resolveStaleTime)(options.staleTime, query));
}
function shouldAssignObserverCurrentProperties(observer, optimisticResult) {
    if (!(0, _utilsJs.shallowEqualObjects)(observer.getCurrentResult(), optimisticResult)) return true;
    return false;
}

},{"./chunk-PXG64RU4.js":"eWQTd","./focusManager.js":"lribG","./environmentManager.js":"3e76S","./notifyManager.js":"4UPNp","./query.js":"f6TSh","./subscribable.js":"7gKmK","./thenable.js":"kH2E3","./utils.js":"f5Xxs","./timeoutManager.js":"3odUV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4sVMa":[function(require,module,exports,__globalThis) {

},{}],"koTaR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useQuery", ()=>useQuery);
// src/useQuery.ts
var _queryCore = require("@tanstack/query-core");
var _useBaseQueryJs = require("./useBaseQuery.js");
"use client";
function useQuery(options, queryClient) {
    return (0, _useBaseQueryJs.useBaseQuery)(options, (0, _queryCore.QueryObserver), queryClient);
}

},{"@tanstack/query-core":"hCIJP","./useBaseQuery.js":"aqhNr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aqhNr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useBaseQuery", ()=>useBaseQuery);
// src/useBaseQuery.ts
var _react = require("react");
var _queryCore = require("@tanstack/query-core");
var _queryClientProviderJs = require("./QueryClientProvider.js");
var _queryErrorResetBoundaryJs = require("./QueryErrorResetBoundary.js");
var _errorBoundaryUtilsJs = require("./errorBoundaryUtils.js");
var _isRestoringProviderJs = require("./IsRestoringProvider.js");
var _suspenseJs = require("./suspense.js");
"use client";
function useBaseQuery(options, Observer, queryClient) {
    var _a, _b, _c, _d;
    if (typeof options !== "object" || Array.isArray(options)) throw new Error('Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object');
    const isRestoring = (0, _isRestoringProviderJs.useIsRestoring)();
    const errorResetBoundary = (0, _queryErrorResetBoundaryJs.useQueryErrorResetBoundary)();
    const client = (0, _queryClientProviderJs.useQueryClient)(queryClient);
    const defaultedOptions = client.defaultQueryOptions(options);
    (_b = (_a = client.getDefaultOptions().queries) == null ? void 0 : _a._experimental_beforeQuery) == null || _b.call(_a, defaultedOptions);
    const query = client.getQueryCache().get(defaultedOptions.queryHash);
    if (!defaultedOptions.queryFn) console.error(`[${defaultedOptions.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`);
    defaultedOptions._optimisticResults = isRestoring ? "isRestoring" : "optimistic";
    (0, _suspenseJs.ensureSuspenseTimers)(defaultedOptions);
    (0, _errorBoundaryUtilsJs.ensurePreventErrorBoundaryRetry)(defaultedOptions, errorResetBoundary, query);
    (0, _errorBoundaryUtilsJs.useClearResetErrorBoundary)(errorResetBoundary);
    const isNewCacheEntry = !client.getQueryCache().get(defaultedOptions.queryHash);
    const [observer] = _react.useState(()=>new Observer(client, defaultedOptions));
    const result = observer.getOptimisticResult(defaultedOptions);
    const shouldSubscribe = !isRestoring && options.subscribed !== false;
    _react.useSyncExternalStore(_react.useCallback((onStoreChange)=>{
        const unsubscribe = shouldSubscribe ? observer.subscribe((0, _queryCore.notifyManager).batchCalls(onStoreChange)) : (0, _queryCore.noop);
        observer.updateResult();
        return unsubscribe;
    }, [
        observer,
        shouldSubscribe
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    _react.useEffect(()=>{
        observer.setOptions(defaultedOptions);
    }, [
        defaultedOptions,
        observer
    ]);
    if ((0, _suspenseJs.shouldSuspend)(defaultedOptions, result)) throw (0, _suspenseJs.fetchOptimistic)(defaultedOptions, observer, errorResetBoundary);
    if ((0, _errorBoundaryUtilsJs.getHasError)({
        result,
        errorResetBoundary,
        throwOnError: defaultedOptions.throwOnError,
        query,
        suspense: defaultedOptions.suspense
    })) throw result.error;
    (_d = (_c = client.getDefaultOptions().queries) == null ? void 0 : _c._experimental_afterQuery) == null || _d.call(_c, defaultedOptions, result);
    if (defaultedOptions.experimental_prefetchInRender && !(0, _queryCore.environmentManager).isServer() && (0, _suspenseJs.willFetch)(result, isRestoring)) {
        const promise = isNewCacheEntry ? // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
        (0, _suspenseJs.fetchOptimistic)(defaultedOptions, observer, errorResetBoundary) : // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
        query == null ? void 0 : query.promise;
        promise == null || promise.catch((0, _queryCore.noop)).finally(()=>{
            observer.updateResult();
        });
    }
    return !defaultedOptions.notifyOnChangeProps ? observer.trackResult(result) : result;
}

},{"react":"jMk1U","@tanstack/query-core":"hCIJP","./QueryClientProvider.js":"dA0Iw","./QueryErrorResetBoundary.js":"h2sHG","./errorBoundaryUtils.js":"9Vs9t","./IsRestoringProvider.js":"7RWg9","./suspense.js":"2e16H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dA0Iw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueryClientContext", ()=>QueryClientContext);
parcelHelpers.export(exports, "QueryClientProvider", ()=>QueryClientProvider);
parcelHelpers.export(exports, "useQueryClient", ()=>useQueryClient);
// src/QueryClientProvider.tsx
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
var QueryClientContext = _react.createContext(void 0);
var useQueryClient = (queryClient)=>{
    const client = _react.useContext(QueryClientContext);
    if (queryClient) return queryClient;
    if (!client) throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return client;
};
var QueryClientProvider = ({ client, children })=>{
    _react.useEffect(()=>{
        client.mount();
        return ()=>{
            client.unmount();
        };
    }, [
        client
    ]);
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(QueryClientContext.Provider, {
        value: client,
        children
    });
};

},{"react":"jMk1U","react/jsx-runtime":"05iiF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"05iiF":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("c4c10cbba9862d5f");

},{"c4c10cbba9862d5f":"gKzlX"}],"gKzlX":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) {
            if (isStaticChildren) {
                if (isArrayImpl(children)) {
                    for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
                    Object.freeze && Object.freeze(children);
                } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            } else validateChildKeys(children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = require("593632ccebda0d3a"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !1, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.jsxs = function(type, config, maybeKey) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, !0, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
})();

},{"593632ccebda0d3a":"jMk1U"}],"h2sHG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueryErrorResetBoundary", ()=>QueryErrorResetBoundary);
parcelHelpers.export(exports, "useQueryErrorResetBoundary", ()=>useQueryErrorResetBoundary);
// src/QueryErrorResetBoundary.tsx
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
"use client";
function createValue() {
    let isReset = false;
    return {
        clearReset: ()=>{
            isReset = false;
        },
        reset: ()=>{
            isReset = true;
        },
        isReset: ()=>{
            return isReset;
        }
    };
}
var QueryErrorResetBoundaryContext = _react.createContext(createValue());
var useQueryErrorResetBoundary = ()=>_react.useContext(QueryErrorResetBoundaryContext);
var QueryErrorResetBoundary = ({ children })=>{
    const [value] = _react.useState(()=>createValue());
    return /* @__PURE__ */ (0, _jsxRuntime.jsx)(QueryErrorResetBoundaryContext.Provider, {
        value,
        children: typeof children === "function" ? children(value) : children
    });
};

},{"react":"jMk1U","react/jsx-runtime":"05iiF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9Vs9t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ensurePreventErrorBoundaryRetry", ()=>ensurePreventErrorBoundaryRetry);
parcelHelpers.export(exports, "getHasError", ()=>getHasError);
parcelHelpers.export(exports, "useClearResetErrorBoundary", ()=>useClearResetErrorBoundary);
// src/errorBoundaryUtils.ts
var _react = require("react");
var _queryCore = require("@tanstack/query-core");
"use client";
var ensurePreventErrorBoundaryRetry = (options, errorResetBoundary, query)=>{
    const throwOnError = (query == null ? void 0 : query.state.error) && typeof options.throwOnError === "function" ? (0, _queryCore.shouldThrowError)(options.throwOnError, [
        query.state.error,
        query
    ]) : options.throwOnError;
    if (options.suspense || options.experimental_prefetchInRender || throwOnError) {
        if (!errorResetBoundary.isReset()) options.retryOnMount = false;
    }
};
var useClearResetErrorBoundary = (errorResetBoundary)=>{
    _react.useEffect(()=>{
        errorResetBoundary.clearReset();
    }, [
        errorResetBoundary
    ]);
};
var getHasError = ({ result, errorResetBoundary, throwOnError, query, suspense })=>{
    return result.isError && !errorResetBoundary.isReset() && !result.isFetching && query && (suspense && result.data === void 0 || (0, _queryCore.shouldThrowError)(throwOnError, [
        result.error,
        query
    ]));
};

},{"react":"jMk1U","@tanstack/query-core":"hCIJP","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7RWg9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IsRestoringProvider", ()=>IsRestoringProvider);
parcelHelpers.export(exports, "useIsRestoring", ()=>useIsRestoring);
// src/IsRestoringProvider.ts
var _react = require("react");
"use client";
var IsRestoringContext = _react.createContext(false);
var useIsRestoring = ()=>_react.useContext(IsRestoringContext);
var IsRestoringProvider = IsRestoringContext.Provider;

},{"react":"jMk1U","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2e16H":[function(require,module,exports,__globalThis) {
// src/suspense.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultThrowOnError", ()=>defaultThrowOnError);
parcelHelpers.export(exports, "ensureSuspenseTimers", ()=>ensureSuspenseTimers);
parcelHelpers.export(exports, "fetchOptimistic", ()=>fetchOptimistic);
parcelHelpers.export(exports, "shouldSuspend", ()=>shouldSuspend);
parcelHelpers.export(exports, "willFetch", ()=>willFetch);
var defaultThrowOnError = (_error, query)=>query.state.data === void 0;
var ensureSuspenseTimers = (defaultedOptions)=>{
    if (defaultedOptions.suspense) {
        const MIN_SUSPENSE_TIME_MS = 1e3;
        const clamp = (value)=>value === "static" ? value : Math.max(value ?? MIN_SUSPENSE_TIME_MS, MIN_SUSPENSE_TIME_MS);
        const originalStaleTime = defaultedOptions.staleTime;
        defaultedOptions.staleTime = typeof originalStaleTime === "function" ? (...args)=>clamp(originalStaleTime(...args)) : clamp(originalStaleTime);
        if (typeof defaultedOptions.gcTime === "number") defaultedOptions.gcTime = Math.max(defaultedOptions.gcTime, MIN_SUSPENSE_TIME_MS);
    }
};
var willFetch = (result, isRestoring)=>result.isLoading && result.isFetching && !isRestoring;
var shouldSuspend = (defaultedOptions, result)=>(defaultedOptions == null ? void 0 : defaultedOptions.suspense) && result.isPending;
var fetchOptimistic = (defaultedOptions, observer, errorResetBoundary)=>observer.fetchOptimistic(defaultedOptions).catch(()=>{
        errorResetBoundary.clearReset();
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5S5p5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useMutation", ()=>useMutation);
// src/useMutation.ts
var _react = require("react");
var _queryCore = require("@tanstack/query-core");
var _queryClientProviderJs = require("./QueryClientProvider.js");
"use client";
function useMutation(options, queryClient) {
    const client = (0, _queryClientProviderJs.useQueryClient)(queryClient);
    const [observer] = _react.useState(()=>new (0, _queryCore.MutationObserver)(client, options));
    _react.useEffect(()=>{
        observer.setOptions(options);
    }, [
        observer,
        options
    ]);
    const result = _react.useSyncExternalStore(_react.useCallback((onStoreChange)=>observer.subscribe((0, _queryCore.notifyManager).batchCalls(onStoreChange)), [
        observer
    ]), ()=>observer.getCurrentResult(), ()=>observer.getCurrentResult());
    const mutate = _react.useCallback((variables, mutateOptions)=>{
        observer.mutate(variables, mutateOptions).catch((0, _queryCore.noop));
    }, [
        observer
    ]);
    if (result.error && (0, _queryCore.shouldThrowError)(observer.options.throwOnError, [
        result.error
    ])) throw result.error;
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}

},{"react":"jMk1U","@tanstack/query-core":"hCIJP","./QueryClientProvider.js":"dA0Iw","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hjiNq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "api", ()=>api);
const BASE = 'http://localhost:3001/api';
async function req(path, options = {}) {
    const res = await fetch(`${BASE}${path}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Request failed');
    return data;
}
const api = {
    getManagers: ()=>req('/managers'),
    getTechnicians: ()=>req('/technicians'),
    getTechnicianJobs: (id)=>req(`/technicians/${id}/jobs`),
    getQuotes: (status)=>req(`/quotes${status ? `?status=${status}` : ''}`),
    getJobs: (params = {})=>{
        const qs = new URLSearchParams(params).toString();
        return req(`/jobs${qs ? `?${qs}` : ''}`);
    },
    createJob: (body)=>req('/jobs', {
            method: 'POST',
            body: JSON.stringify(body)
        }),
    completeJob: (id)=>req(`/jobs/${id}/complete`, {
            method: 'PATCH'
        }),
    getNotifications: (params = {})=>{
        const qs = new URLSearchParams(params).toString();
        return req(`/notifications${qs ? `?${qs}` : ''}`);
    },
    markNotificationRead: (id)=>req(`/notifications/${id}/read`, {
            method: 'PATCH'
        })
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lp8LZ":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$db99 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$db99.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$db99.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Dashboard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactQuery = require("@tanstack/react-query");
var _clientJs = require("../api/client.js");
var _dateFns = require("date-fns");
var _s = $RefreshSig$();
function Dashboard({ managerId }) {
    _s();
    const { data: jobs = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'jobs'
        ],
        queryFn: ()=>(0, _clientJs.api).getJobs(),
        refetchInterval: 5000
    });
    const { data: quotes = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'quotes'
        ],
        queryFn: ()=>(0, _clientJs.api).getQuotes()
    });
    const { data: technicians = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'technicians'
        ],
        queryFn: (0, _clientJs.api).getTechnicians
    });
    const scheduled = jobs.filter((j)=>j.status === 'scheduled');
    const completed = jobs.filter((j)=>j.status === 'completed');
    const unscheduled = quotes.filter((q)=>q.status === 'unscheduled');
    // Recent 5 jobs
    const recent = [
        ...jobs
    ].sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-header",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "components/Dashboard.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            children: "Overview of scheduling activity"
                        }, void 0, false, {
                            fileName: "components/Dashboard.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "components/Dashboard.jsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "components/Dashboard.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-body",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "grid-3",
                        style: {
                            marginBottom: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "stat-card",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-label",
                                        children: "Unscheduled Quotes"
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-value",
                                        style: {
                                            color: 'var(--amber)'
                                        },
                                        children: unscheduled.length
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-sub",
                                        children: "Awaiting assignment"
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/Dashboard.jsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "stat-card",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-label",
                                        children: "Active Jobs"
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-value",
                                        style: {
                                            color: 'var(--accent)'
                                        },
                                        children: scheduled.length
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-sub",
                                        children: "Currently scheduled"
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/Dashboard.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "stat-card",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-label",
                                        children: "Completed"
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-value",
                                        style: {
                                            color: 'var(--green)'
                                        },
                                        children: completed.length
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "stat-sub",
                                        children: "All time"
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/Dashboard.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/Dashboard.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "grid-2",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "card-header",
                                        children: "Recent Job Activity"
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    recent.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "empty-state",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "icon",
                                                children: "\u229E"
                                            }, void 0, false, {
                                                fileName: "components/Dashboard.jsx",
                                                lineNumber: 48,
                                                columnNumber: 44
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                children: "No jobs yet"
                                            }, void 0, false, {
                                                fileName: "components/Dashboard.jsx",
                                                lineNumber: 48,
                                                columnNumber: 73
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "table-wrap",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("table", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("thead", {
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                                children: "Quote"
                                                            }, void 0, false, {
                                                                fileName: "components/Dashboard.jsx",
                                                                lineNumber: 52,
                                                                columnNumber: 30
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                                children: "Technician"
                                                            }, void 0, false, {
                                                                fileName: "components/Dashboard.jsx",
                                                                lineNumber: 52,
                                                                columnNumber: 44
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "components/Dashboard.jsx",
                                                                lineNumber: 52,
                                                                columnNumber: 63
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                                children: "Start"
                                                            }, void 0, false, {
                                                                fileName: "components/Dashboard.jsx",
                                                                lineNumber: 52,
                                                                columnNumber: 78
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "components/Dashboard.jsx",
                                                        lineNumber: 52,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "components/Dashboard.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tbody", {
                                                    children: recent.map((j)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                                    style: {
                                                                        maxWidth: 160,
                                                                        overflow: 'hidden',
                                                                        textOverflow: 'ellipsis',
                                                                        whiteSpace: 'nowrap'
                                                                    },
                                                                    children: j.quote?.title || "\u2014"
                                                                }, void 0, false, {
                                                                    fileName: "components/Dashboard.jsx",
                                                                    lineNumber: 56,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                                    children: j.technician?.name?.split(' ')[0] || "\u2014"
                                                                }, void 0, false, {
                                                                    fileName: "components/Dashboard.jsx",
                                                                    lineNumber: 59,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                        className: `status ${j.status}`,
                                                                        children: j.status
                                                                    }, void 0, false, {
                                                                        fileName: "components/Dashboard.jsx",
                                                                        lineNumber: 60,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "components/Dashboard.jsx",
                                                                    lineNumber: 60,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                                    style: {
                                                                        fontFamily: 'DM Mono',
                                                                        fontSize: 12
                                                                    },
                                                                    children: (0, _dateFns.format)(new Date(j.startTime), 'dd MMM HH:mm')
                                                                }, void 0, false, {
                                                                    fileName: "components/Dashboard.jsx",
                                                                    lineNumber: 61,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, j.id, true, {
                                                            fileName: "components/Dashboard.jsx",
                                                            lineNumber: 55,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "components/Dashboard.jsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "components/Dashboard.jsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/Dashboard.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "card",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "card-header",
                                        children: "Technician Workload"
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: {
                                            padding: '8px 0'
                                        },
                                        children: technicians.map((t)=>{
                                            const techJobs = jobs.filter((j)=>j.technicianId === t.id);
                                            const active = techJobs.filter((j)=>j.status === 'scheduled').length;
                                            const done = techJobs.filter((j)=>j.status === 'completed').length;
                                            return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: {
                                                    padding: '12px 20px',
                                                    borderBottom: '1px solid var(--border)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            background: 'var(--accent)',
                                                            borderRadius: '50%',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#fff',
                                                            fontWeight: 700,
                                                            fontSize: 12,
                                                            flexShrink: 0
                                                        },
                                                        children: t.name.split(' ').map((n)=>n[0]).join('')
                                                    }, void 0, false, {
                                                        fileName: "components/Dashboard.jsx",
                                                        lineNumber: 81,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                style: {
                                                                    fontWeight: 600,
                                                                    fontSize: 13.5
                                                                },
                                                                children: t.name
                                                            }, void 0, false, {
                                                                fileName: "components/Dashboard.jsx",
                                                                lineNumber: 85,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                style: {
                                                                    fontSize: 12,
                                                                    color: 'var(--text3)',
                                                                    marginTop: 2
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                        style: {
                                                                            color: 'var(--accent)'
                                                                        },
                                                                        children: [
                                                                            active,
                                                                            " scheduled"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "components/Dashboard.jsx",
                                                                        lineNumber: 87,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    done > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                        style: {
                                                                            marginLeft: 8
                                                                        },
                                                                        children: [
                                                                            "\xb7 ",
                                                                            done,
                                                                            " completed"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "components/Dashboard.jsx",
                                                                        lineNumber: 88,
                                                                        columnNumber: 38
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "components/Dashboard.jsx",
                                                                lineNumber: 86,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "components/Dashboard.jsx",
                                                        lineNumber: 84,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        style: {
                                                            textAlign: 'right'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                style: {
                                                                    fontFamily: 'DM Mono',
                                                                    fontSize: 18,
                                                                    fontWeight: 700
                                                                },
                                                                children: techJobs.length
                                                            }, void 0, false, {
                                                                fileName: "components/Dashboard.jsx",
                                                                lineNumber: 92,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                style: {
                                                                    fontSize: 11,
                                                                    color: 'var(--text3)'
                                                                },
                                                                children: "total jobs"
                                                            }, void 0, false, {
                                                                fileName: "components/Dashboard.jsx",
                                                                lineNumber: 93,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "components/Dashboard.jsx",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, t.id, true, {
                                                fileName: "components/Dashboard.jsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "components/Dashboard.jsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/Dashboard.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/Dashboard.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "components/Dashboard.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Dashboard, "tUjOhhh7VLVfhg0RuzHa/qIvA3I=", false, function() {
    return [
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useQuery)
    ];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");

  $parcel$ReactRefreshHelpers$db99.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","@tanstack/react-query":"gRw9X","../api/client.js":"hjiNq","date-fns":"apLUd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"apLUd":[function(require,module,exports,__globalThis) {
// This file is generated automatically by `scripts/build/indices.ts`. Please, don't change it.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addJs = require("./add.js");
parcelHelpers.exportAll(_addJs, exports);
var _addBusinessDaysJs = require("./addBusinessDays.js");
parcelHelpers.exportAll(_addBusinessDaysJs, exports);
var _addDaysJs = require("./addDays.js");
parcelHelpers.exportAll(_addDaysJs, exports);
var _addHoursJs = require("./addHours.js");
parcelHelpers.exportAll(_addHoursJs, exports);
var _addISOWeekYearsJs = require("./addISOWeekYears.js");
parcelHelpers.exportAll(_addISOWeekYearsJs, exports);
var _addMillisecondsJs = require("./addMilliseconds.js");
parcelHelpers.exportAll(_addMillisecondsJs, exports);
var _addMinutesJs = require("./addMinutes.js");
parcelHelpers.exportAll(_addMinutesJs, exports);
var _addMonthsJs = require("./addMonths.js");
parcelHelpers.exportAll(_addMonthsJs, exports);
var _addQuartersJs = require("./addQuarters.js");
parcelHelpers.exportAll(_addQuartersJs, exports);
var _addSecondsJs = require("./addSeconds.js");
parcelHelpers.exportAll(_addSecondsJs, exports);
var _addWeeksJs = require("./addWeeks.js");
parcelHelpers.exportAll(_addWeeksJs, exports);
var _addYearsJs = require("./addYears.js");
parcelHelpers.exportAll(_addYearsJs, exports);
var _areIntervalsOverlappingJs = require("./areIntervalsOverlapping.js");
parcelHelpers.exportAll(_areIntervalsOverlappingJs, exports);
var _clampJs = require("./clamp.js");
parcelHelpers.exportAll(_clampJs, exports);
var _closestIndexToJs = require("./closestIndexTo.js");
parcelHelpers.exportAll(_closestIndexToJs, exports);
var _closestToJs = require("./closestTo.js");
parcelHelpers.exportAll(_closestToJs, exports);
var _compareAscJs = require("./compareAsc.js");
parcelHelpers.exportAll(_compareAscJs, exports);
var _compareDescJs = require("./compareDesc.js");
parcelHelpers.exportAll(_compareDescJs, exports);
var _constructFromJs = require("./constructFrom.js");
parcelHelpers.exportAll(_constructFromJs, exports);
var _constructNowJs = require("./constructNow.js");
parcelHelpers.exportAll(_constructNowJs, exports);
var _daysToWeeksJs = require("./daysToWeeks.js");
parcelHelpers.exportAll(_daysToWeeksJs, exports);
var _differenceInBusinessDaysJs = require("./differenceInBusinessDays.js");
parcelHelpers.exportAll(_differenceInBusinessDaysJs, exports);
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
parcelHelpers.exportAll(_differenceInCalendarDaysJs, exports);
var _differenceInCalendarISOWeekYearsJs = require("./differenceInCalendarISOWeekYears.js");
parcelHelpers.exportAll(_differenceInCalendarISOWeekYearsJs, exports);
var _differenceInCalendarISOWeeksJs = require("./differenceInCalendarISOWeeks.js");
parcelHelpers.exportAll(_differenceInCalendarISOWeeksJs, exports);
var _differenceInCalendarMonthsJs = require("./differenceInCalendarMonths.js");
parcelHelpers.exportAll(_differenceInCalendarMonthsJs, exports);
var _differenceInCalendarQuartersJs = require("./differenceInCalendarQuarters.js");
parcelHelpers.exportAll(_differenceInCalendarQuartersJs, exports);
var _differenceInCalendarWeeksJs = require("./differenceInCalendarWeeks.js");
parcelHelpers.exportAll(_differenceInCalendarWeeksJs, exports);
var _differenceInCalendarYearsJs = require("./differenceInCalendarYears.js");
parcelHelpers.exportAll(_differenceInCalendarYearsJs, exports);
var _differenceInDaysJs = require("./differenceInDays.js");
parcelHelpers.exportAll(_differenceInDaysJs, exports);
var _differenceInHoursJs = require("./differenceInHours.js");
parcelHelpers.exportAll(_differenceInHoursJs, exports);
var _differenceInISOWeekYearsJs = require("./differenceInISOWeekYears.js");
parcelHelpers.exportAll(_differenceInISOWeekYearsJs, exports);
var _differenceInMillisecondsJs = require("./differenceInMilliseconds.js");
parcelHelpers.exportAll(_differenceInMillisecondsJs, exports);
var _differenceInMinutesJs = require("./differenceInMinutes.js");
parcelHelpers.exportAll(_differenceInMinutesJs, exports);
var _differenceInMonthsJs = require("./differenceInMonths.js");
parcelHelpers.exportAll(_differenceInMonthsJs, exports);
var _differenceInQuartersJs = require("./differenceInQuarters.js");
parcelHelpers.exportAll(_differenceInQuartersJs, exports);
var _differenceInSecondsJs = require("./differenceInSeconds.js");
parcelHelpers.exportAll(_differenceInSecondsJs, exports);
var _differenceInWeeksJs = require("./differenceInWeeks.js");
parcelHelpers.exportAll(_differenceInWeeksJs, exports);
var _differenceInYearsJs = require("./differenceInYears.js");
parcelHelpers.exportAll(_differenceInYearsJs, exports);
var _eachDayOfIntervalJs = require("./eachDayOfInterval.js");
parcelHelpers.exportAll(_eachDayOfIntervalJs, exports);
var _eachHourOfIntervalJs = require("./eachHourOfInterval.js");
parcelHelpers.exportAll(_eachHourOfIntervalJs, exports);
var _eachMinuteOfIntervalJs = require("./eachMinuteOfInterval.js");
parcelHelpers.exportAll(_eachMinuteOfIntervalJs, exports);
var _eachMonthOfIntervalJs = require("./eachMonthOfInterval.js");
parcelHelpers.exportAll(_eachMonthOfIntervalJs, exports);
var _eachQuarterOfIntervalJs = require("./eachQuarterOfInterval.js");
parcelHelpers.exportAll(_eachQuarterOfIntervalJs, exports);
var _eachWeekOfIntervalJs = require("./eachWeekOfInterval.js");
parcelHelpers.exportAll(_eachWeekOfIntervalJs, exports);
var _eachWeekendOfIntervalJs = require("./eachWeekendOfInterval.js");
parcelHelpers.exportAll(_eachWeekendOfIntervalJs, exports);
var _eachWeekendOfMonthJs = require("./eachWeekendOfMonth.js");
parcelHelpers.exportAll(_eachWeekendOfMonthJs, exports);
var _eachWeekendOfYearJs = require("./eachWeekendOfYear.js");
parcelHelpers.exportAll(_eachWeekendOfYearJs, exports);
var _eachYearOfIntervalJs = require("./eachYearOfInterval.js");
parcelHelpers.exportAll(_eachYearOfIntervalJs, exports);
var _endOfDayJs = require("./endOfDay.js");
parcelHelpers.exportAll(_endOfDayJs, exports);
var _endOfDecadeJs = require("./endOfDecade.js");
parcelHelpers.exportAll(_endOfDecadeJs, exports);
var _endOfHourJs = require("./endOfHour.js");
parcelHelpers.exportAll(_endOfHourJs, exports);
var _endOfISOWeekJs = require("./endOfISOWeek.js");
parcelHelpers.exportAll(_endOfISOWeekJs, exports);
var _endOfISOWeekYearJs = require("./endOfISOWeekYear.js");
parcelHelpers.exportAll(_endOfISOWeekYearJs, exports);
var _endOfMinuteJs = require("./endOfMinute.js");
parcelHelpers.exportAll(_endOfMinuteJs, exports);
var _endOfMonthJs = require("./endOfMonth.js");
parcelHelpers.exportAll(_endOfMonthJs, exports);
var _endOfQuarterJs = require("./endOfQuarter.js");
parcelHelpers.exportAll(_endOfQuarterJs, exports);
var _endOfSecondJs = require("./endOfSecond.js");
parcelHelpers.exportAll(_endOfSecondJs, exports);
var _endOfTodayJs = require("./endOfToday.js");
parcelHelpers.exportAll(_endOfTodayJs, exports);
var _endOfTomorrowJs = require("./endOfTomorrow.js");
parcelHelpers.exportAll(_endOfTomorrowJs, exports);
var _endOfWeekJs = require("./endOfWeek.js");
parcelHelpers.exportAll(_endOfWeekJs, exports);
var _endOfYearJs = require("./endOfYear.js");
parcelHelpers.exportAll(_endOfYearJs, exports);
var _endOfYesterdayJs = require("./endOfYesterday.js");
parcelHelpers.exportAll(_endOfYesterdayJs, exports);
var _formatJs = require("./format.js");
parcelHelpers.exportAll(_formatJs, exports);
var _formatDistanceJs = require("./formatDistance.js");
parcelHelpers.exportAll(_formatDistanceJs, exports);
var _formatDistanceStrictJs = require("./formatDistanceStrict.js");
parcelHelpers.exportAll(_formatDistanceStrictJs, exports);
var _formatDistanceToNowJs = require("./formatDistanceToNow.js");
parcelHelpers.exportAll(_formatDistanceToNowJs, exports);
var _formatDistanceToNowStrictJs = require("./formatDistanceToNowStrict.js");
parcelHelpers.exportAll(_formatDistanceToNowStrictJs, exports);
var _formatDurationJs = require("./formatDuration.js");
parcelHelpers.exportAll(_formatDurationJs, exports);
var _formatISOJs = require("./formatISO.js");
parcelHelpers.exportAll(_formatISOJs, exports);
var _formatISO9075Js = require("./formatISO9075.js");
parcelHelpers.exportAll(_formatISO9075Js, exports);
var _formatISODurationJs = require("./formatISODuration.js");
parcelHelpers.exportAll(_formatISODurationJs, exports);
var _formatRFC3339Js = require("./formatRFC3339.js");
parcelHelpers.exportAll(_formatRFC3339Js, exports);
var _formatRFC7231Js = require("./formatRFC7231.js");
parcelHelpers.exportAll(_formatRFC7231Js, exports);
var _formatRelativeJs = require("./formatRelative.js");
parcelHelpers.exportAll(_formatRelativeJs, exports);
var _fromUnixTimeJs = require("./fromUnixTime.js");
parcelHelpers.exportAll(_fromUnixTimeJs, exports);
var _getDateJs = require("./getDate.js");
parcelHelpers.exportAll(_getDateJs, exports);
var _getDayJs = require("./getDay.js");
parcelHelpers.exportAll(_getDayJs, exports);
var _getDayOfYearJs = require("./getDayOfYear.js");
parcelHelpers.exportAll(_getDayOfYearJs, exports);
var _getDaysInMonthJs = require("./getDaysInMonth.js");
parcelHelpers.exportAll(_getDaysInMonthJs, exports);
var _getDaysInYearJs = require("./getDaysInYear.js");
parcelHelpers.exportAll(_getDaysInYearJs, exports);
var _getDecadeJs = require("./getDecade.js");
parcelHelpers.exportAll(_getDecadeJs, exports);
var _getDefaultOptionsJs = require("./getDefaultOptions.js");
parcelHelpers.exportAll(_getDefaultOptionsJs, exports);
var _getHoursJs = require("./getHours.js");
parcelHelpers.exportAll(_getHoursJs, exports);
var _getISODayJs = require("./getISODay.js");
parcelHelpers.exportAll(_getISODayJs, exports);
var _getISOWeekJs = require("./getISOWeek.js");
parcelHelpers.exportAll(_getISOWeekJs, exports);
var _getISOWeekYearJs = require("./getISOWeekYear.js");
parcelHelpers.exportAll(_getISOWeekYearJs, exports);
var _getISOWeeksInYearJs = require("./getISOWeeksInYear.js");
parcelHelpers.exportAll(_getISOWeeksInYearJs, exports);
var _getMillisecondsJs = require("./getMilliseconds.js");
parcelHelpers.exportAll(_getMillisecondsJs, exports);
var _getMinutesJs = require("./getMinutes.js");
parcelHelpers.exportAll(_getMinutesJs, exports);
var _getMonthJs = require("./getMonth.js");
parcelHelpers.exportAll(_getMonthJs, exports);
var _getOverlappingDaysInIntervalsJs = require("./getOverlappingDaysInIntervals.js");
parcelHelpers.exportAll(_getOverlappingDaysInIntervalsJs, exports);
var _getQuarterJs = require("./getQuarter.js");
parcelHelpers.exportAll(_getQuarterJs, exports);
var _getSecondsJs = require("./getSeconds.js");
parcelHelpers.exportAll(_getSecondsJs, exports);
var _getTimeJs = require("./getTime.js");
parcelHelpers.exportAll(_getTimeJs, exports);
var _getUnixTimeJs = require("./getUnixTime.js");
parcelHelpers.exportAll(_getUnixTimeJs, exports);
var _getWeekJs = require("./getWeek.js");
parcelHelpers.exportAll(_getWeekJs, exports);
var _getWeekOfMonthJs = require("./getWeekOfMonth.js");
parcelHelpers.exportAll(_getWeekOfMonthJs, exports);
var _getWeekYearJs = require("./getWeekYear.js");
parcelHelpers.exportAll(_getWeekYearJs, exports);
var _getWeeksInMonthJs = require("./getWeeksInMonth.js");
parcelHelpers.exportAll(_getWeeksInMonthJs, exports);
var _getYearJs = require("./getYear.js");
parcelHelpers.exportAll(_getYearJs, exports);
var _hoursToMillisecondsJs = require("./hoursToMilliseconds.js");
parcelHelpers.exportAll(_hoursToMillisecondsJs, exports);
var _hoursToMinutesJs = require("./hoursToMinutes.js");
parcelHelpers.exportAll(_hoursToMinutesJs, exports);
var _hoursToSecondsJs = require("./hoursToSeconds.js");
parcelHelpers.exportAll(_hoursToSecondsJs, exports);
var _intervalJs = require("./interval.js");
parcelHelpers.exportAll(_intervalJs, exports);
var _intervalToDurationJs = require("./intervalToDuration.js");
parcelHelpers.exportAll(_intervalToDurationJs, exports);
var _intlFormatJs = require("./intlFormat.js");
parcelHelpers.exportAll(_intlFormatJs, exports);
var _intlFormatDistanceJs = require("./intlFormatDistance.js");
parcelHelpers.exportAll(_intlFormatDistanceJs, exports);
var _isAfterJs = require("./isAfter.js");
parcelHelpers.exportAll(_isAfterJs, exports);
var _isBeforeJs = require("./isBefore.js");
parcelHelpers.exportAll(_isBeforeJs, exports);
var _isDateJs = require("./isDate.js");
parcelHelpers.exportAll(_isDateJs, exports);
var _isEqualJs = require("./isEqual.js");
parcelHelpers.exportAll(_isEqualJs, exports);
var _isExistsJs = require("./isExists.js");
parcelHelpers.exportAll(_isExistsJs, exports);
var _isFirstDayOfMonthJs = require("./isFirstDayOfMonth.js");
parcelHelpers.exportAll(_isFirstDayOfMonthJs, exports);
var _isFridayJs = require("./isFriday.js");
parcelHelpers.exportAll(_isFridayJs, exports);
var _isFutureJs = require("./isFuture.js");
parcelHelpers.exportAll(_isFutureJs, exports);
var _isLastDayOfMonthJs = require("./isLastDayOfMonth.js");
parcelHelpers.exportAll(_isLastDayOfMonthJs, exports);
var _isLeapYearJs = require("./isLeapYear.js");
parcelHelpers.exportAll(_isLeapYearJs, exports);
var _isMatchJs = require("./isMatch.js");
parcelHelpers.exportAll(_isMatchJs, exports);
var _isMondayJs = require("./isMonday.js");
parcelHelpers.exportAll(_isMondayJs, exports);
var _isPastJs = require("./isPast.js");
parcelHelpers.exportAll(_isPastJs, exports);
var _isSameDayJs = require("./isSameDay.js");
parcelHelpers.exportAll(_isSameDayJs, exports);
var _isSameHourJs = require("./isSameHour.js");
parcelHelpers.exportAll(_isSameHourJs, exports);
var _isSameISOWeekJs = require("./isSameISOWeek.js");
parcelHelpers.exportAll(_isSameISOWeekJs, exports);
var _isSameISOWeekYearJs = require("./isSameISOWeekYear.js");
parcelHelpers.exportAll(_isSameISOWeekYearJs, exports);
var _isSameMinuteJs = require("./isSameMinute.js");
parcelHelpers.exportAll(_isSameMinuteJs, exports);
var _isSameMonthJs = require("./isSameMonth.js");
parcelHelpers.exportAll(_isSameMonthJs, exports);
var _isSameQuarterJs = require("./isSameQuarter.js");
parcelHelpers.exportAll(_isSameQuarterJs, exports);
var _isSameSecondJs = require("./isSameSecond.js");
parcelHelpers.exportAll(_isSameSecondJs, exports);
var _isSameWeekJs = require("./isSameWeek.js");
parcelHelpers.exportAll(_isSameWeekJs, exports);
var _isSameYearJs = require("./isSameYear.js");
parcelHelpers.exportAll(_isSameYearJs, exports);
var _isSaturdayJs = require("./isSaturday.js");
parcelHelpers.exportAll(_isSaturdayJs, exports);
var _isSundayJs = require("./isSunday.js");
parcelHelpers.exportAll(_isSundayJs, exports);
var _isThisHourJs = require("./isThisHour.js");
parcelHelpers.exportAll(_isThisHourJs, exports);
var _isThisISOWeekJs = require("./isThisISOWeek.js");
parcelHelpers.exportAll(_isThisISOWeekJs, exports);
var _isThisMinuteJs = require("./isThisMinute.js");
parcelHelpers.exportAll(_isThisMinuteJs, exports);
var _isThisMonthJs = require("./isThisMonth.js");
parcelHelpers.exportAll(_isThisMonthJs, exports);
var _isThisQuarterJs = require("./isThisQuarter.js");
parcelHelpers.exportAll(_isThisQuarterJs, exports);
var _isThisSecondJs = require("./isThisSecond.js");
parcelHelpers.exportAll(_isThisSecondJs, exports);
var _isThisWeekJs = require("./isThisWeek.js");
parcelHelpers.exportAll(_isThisWeekJs, exports);
var _isThisYearJs = require("./isThisYear.js");
parcelHelpers.exportAll(_isThisYearJs, exports);
var _isThursdayJs = require("./isThursday.js");
parcelHelpers.exportAll(_isThursdayJs, exports);
var _isTodayJs = require("./isToday.js");
parcelHelpers.exportAll(_isTodayJs, exports);
var _isTomorrowJs = require("./isTomorrow.js");
parcelHelpers.exportAll(_isTomorrowJs, exports);
var _isTuesdayJs = require("./isTuesday.js");
parcelHelpers.exportAll(_isTuesdayJs, exports);
var _isValidJs = require("./isValid.js");
parcelHelpers.exportAll(_isValidJs, exports);
var _isWednesdayJs = require("./isWednesday.js");
parcelHelpers.exportAll(_isWednesdayJs, exports);
var _isWeekendJs = require("./isWeekend.js");
parcelHelpers.exportAll(_isWeekendJs, exports);
var _isWithinIntervalJs = require("./isWithinInterval.js");
parcelHelpers.exportAll(_isWithinIntervalJs, exports);
var _isYesterdayJs = require("./isYesterday.js");
parcelHelpers.exportAll(_isYesterdayJs, exports);
var _lastDayOfDecadeJs = require("./lastDayOfDecade.js");
parcelHelpers.exportAll(_lastDayOfDecadeJs, exports);
var _lastDayOfISOWeekJs = require("./lastDayOfISOWeek.js");
parcelHelpers.exportAll(_lastDayOfISOWeekJs, exports);
var _lastDayOfISOWeekYearJs = require("./lastDayOfISOWeekYear.js");
parcelHelpers.exportAll(_lastDayOfISOWeekYearJs, exports);
var _lastDayOfMonthJs = require("./lastDayOfMonth.js");
parcelHelpers.exportAll(_lastDayOfMonthJs, exports);
var _lastDayOfQuarterJs = require("./lastDayOfQuarter.js");
parcelHelpers.exportAll(_lastDayOfQuarterJs, exports);
var _lastDayOfWeekJs = require("./lastDayOfWeek.js");
parcelHelpers.exportAll(_lastDayOfWeekJs, exports);
var _lastDayOfYearJs = require("./lastDayOfYear.js");
parcelHelpers.exportAll(_lastDayOfYearJs, exports);
var _lightFormatJs = require("./lightFormat.js");
parcelHelpers.exportAll(_lightFormatJs, exports);
var _maxJs = require("./max.js");
parcelHelpers.exportAll(_maxJs, exports);
var _millisecondsJs = require("./milliseconds.js");
parcelHelpers.exportAll(_millisecondsJs, exports);
var _millisecondsToHoursJs = require("./millisecondsToHours.js");
parcelHelpers.exportAll(_millisecondsToHoursJs, exports);
var _millisecondsToMinutesJs = require("./millisecondsToMinutes.js");
parcelHelpers.exportAll(_millisecondsToMinutesJs, exports);
var _millisecondsToSecondsJs = require("./millisecondsToSeconds.js");
parcelHelpers.exportAll(_millisecondsToSecondsJs, exports);
var _minJs = require("./min.js");
parcelHelpers.exportAll(_minJs, exports);
var _minutesToHoursJs = require("./minutesToHours.js");
parcelHelpers.exportAll(_minutesToHoursJs, exports);
var _minutesToMillisecondsJs = require("./minutesToMilliseconds.js");
parcelHelpers.exportAll(_minutesToMillisecondsJs, exports);
var _minutesToSecondsJs = require("./minutesToSeconds.js");
parcelHelpers.exportAll(_minutesToSecondsJs, exports);
var _monthsToQuartersJs = require("./monthsToQuarters.js");
parcelHelpers.exportAll(_monthsToQuartersJs, exports);
var _monthsToYearsJs = require("./monthsToYears.js");
parcelHelpers.exportAll(_monthsToYearsJs, exports);
var _nextDayJs = require("./nextDay.js");
parcelHelpers.exportAll(_nextDayJs, exports);
var _nextFridayJs = require("./nextFriday.js");
parcelHelpers.exportAll(_nextFridayJs, exports);
var _nextMondayJs = require("./nextMonday.js");
parcelHelpers.exportAll(_nextMondayJs, exports);
var _nextSaturdayJs = require("./nextSaturday.js");
parcelHelpers.exportAll(_nextSaturdayJs, exports);
var _nextSundayJs = require("./nextSunday.js");
parcelHelpers.exportAll(_nextSundayJs, exports);
var _nextThursdayJs = require("./nextThursday.js");
parcelHelpers.exportAll(_nextThursdayJs, exports);
var _nextTuesdayJs = require("./nextTuesday.js");
parcelHelpers.exportAll(_nextTuesdayJs, exports);
var _nextWednesdayJs = require("./nextWednesday.js");
parcelHelpers.exportAll(_nextWednesdayJs, exports);
var _parseJs = require("./parse.js");
parcelHelpers.exportAll(_parseJs, exports);
var _parseISOJs = require("./parseISO.js");
parcelHelpers.exportAll(_parseISOJs, exports);
var _parseJSONJs = require("./parseJSON.js");
parcelHelpers.exportAll(_parseJSONJs, exports);
var _previousDayJs = require("./previousDay.js");
parcelHelpers.exportAll(_previousDayJs, exports);
var _previousFridayJs = require("./previousFriday.js");
parcelHelpers.exportAll(_previousFridayJs, exports);
var _previousMondayJs = require("./previousMonday.js");
parcelHelpers.exportAll(_previousMondayJs, exports);
var _previousSaturdayJs = require("./previousSaturday.js");
parcelHelpers.exportAll(_previousSaturdayJs, exports);
var _previousSundayJs = require("./previousSunday.js");
parcelHelpers.exportAll(_previousSundayJs, exports);
var _previousThursdayJs = require("./previousThursday.js");
parcelHelpers.exportAll(_previousThursdayJs, exports);
var _previousTuesdayJs = require("./previousTuesday.js");
parcelHelpers.exportAll(_previousTuesdayJs, exports);
var _previousWednesdayJs = require("./previousWednesday.js");
parcelHelpers.exportAll(_previousWednesdayJs, exports);
var _quartersToMonthsJs = require("./quartersToMonths.js");
parcelHelpers.exportAll(_quartersToMonthsJs, exports);
var _quartersToYearsJs = require("./quartersToYears.js");
parcelHelpers.exportAll(_quartersToYearsJs, exports);
var _roundToNearestHoursJs = require("./roundToNearestHours.js");
parcelHelpers.exportAll(_roundToNearestHoursJs, exports);
var _roundToNearestMinutesJs = require("./roundToNearestMinutes.js");
parcelHelpers.exportAll(_roundToNearestMinutesJs, exports);
var _secondsToHoursJs = require("./secondsToHours.js");
parcelHelpers.exportAll(_secondsToHoursJs, exports);
var _secondsToMillisecondsJs = require("./secondsToMilliseconds.js");
parcelHelpers.exportAll(_secondsToMillisecondsJs, exports);
var _secondsToMinutesJs = require("./secondsToMinutes.js");
parcelHelpers.exportAll(_secondsToMinutesJs, exports);
var _setJs = require("./set.js");
parcelHelpers.exportAll(_setJs, exports);
var _setDateJs = require("./setDate.js");
parcelHelpers.exportAll(_setDateJs, exports);
var _setDayJs = require("./setDay.js");
parcelHelpers.exportAll(_setDayJs, exports);
var _setDayOfYearJs = require("./setDayOfYear.js");
parcelHelpers.exportAll(_setDayOfYearJs, exports);
var _setDefaultOptionsJs = require("./setDefaultOptions.js");
parcelHelpers.exportAll(_setDefaultOptionsJs, exports);
var _setHoursJs = require("./setHours.js");
parcelHelpers.exportAll(_setHoursJs, exports);
var _setISODayJs = require("./setISODay.js");
parcelHelpers.exportAll(_setISODayJs, exports);
var _setISOWeekJs = require("./setISOWeek.js");
parcelHelpers.exportAll(_setISOWeekJs, exports);
var _setISOWeekYearJs = require("./setISOWeekYear.js");
parcelHelpers.exportAll(_setISOWeekYearJs, exports);
var _setMillisecondsJs = require("./setMilliseconds.js");
parcelHelpers.exportAll(_setMillisecondsJs, exports);
var _setMinutesJs = require("./setMinutes.js");
parcelHelpers.exportAll(_setMinutesJs, exports);
var _setMonthJs = require("./setMonth.js");
parcelHelpers.exportAll(_setMonthJs, exports);
var _setQuarterJs = require("./setQuarter.js");
parcelHelpers.exportAll(_setQuarterJs, exports);
var _setSecondsJs = require("./setSeconds.js");
parcelHelpers.exportAll(_setSecondsJs, exports);
var _setWeekJs = require("./setWeek.js");
parcelHelpers.exportAll(_setWeekJs, exports);
var _setWeekYearJs = require("./setWeekYear.js");
parcelHelpers.exportAll(_setWeekYearJs, exports);
var _setYearJs = require("./setYear.js");
parcelHelpers.exportAll(_setYearJs, exports);
var _startOfDayJs = require("./startOfDay.js");
parcelHelpers.exportAll(_startOfDayJs, exports);
var _startOfDecadeJs = require("./startOfDecade.js");
parcelHelpers.exportAll(_startOfDecadeJs, exports);
var _startOfHourJs = require("./startOfHour.js");
parcelHelpers.exportAll(_startOfHourJs, exports);
var _startOfISOWeekJs = require("./startOfISOWeek.js");
parcelHelpers.exportAll(_startOfISOWeekJs, exports);
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
parcelHelpers.exportAll(_startOfISOWeekYearJs, exports);
var _startOfMinuteJs = require("./startOfMinute.js");
parcelHelpers.exportAll(_startOfMinuteJs, exports);
var _startOfMonthJs = require("./startOfMonth.js");
parcelHelpers.exportAll(_startOfMonthJs, exports);
var _startOfQuarterJs = require("./startOfQuarter.js");
parcelHelpers.exportAll(_startOfQuarterJs, exports);
var _startOfSecondJs = require("./startOfSecond.js");
parcelHelpers.exportAll(_startOfSecondJs, exports);
var _startOfTodayJs = require("./startOfToday.js");
parcelHelpers.exportAll(_startOfTodayJs, exports);
var _startOfTomorrowJs = require("./startOfTomorrow.js");
parcelHelpers.exportAll(_startOfTomorrowJs, exports);
var _startOfWeekJs = require("./startOfWeek.js");
parcelHelpers.exportAll(_startOfWeekJs, exports);
var _startOfWeekYearJs = require("./startOfWeekYear.js");
parcelHelpers.exportAll(_startOfWeekYearJs, exports);
var _startOfYearJs = require("./startOfYear.js");
parcelHelpers.exportAll(_startOfYearJs, exports);
var _startOfYesterdayJs = require("./startOfYesterday.js");
parcelHelpers.exportAll(_startOfYesterdayJs, exports);
var _subJs = require("./sub.js");
parcelHelpers.exportAll(_subJs, exports);
var _subBusinessDaysJs = require("./subBusinessDays.js");
parcelHelpers.exportAll(_subBusinessDaysJs, exports);
var _subDaysJs = require("./subDays.js");
parcelHelpers.exportAll(_subDaysJs, exports);
var _subHoursJs = require("./subHours.js");
parcelHelpers.exportAll(_subHoursJs, exports);
var _subISOWeekYearsJs = require("./subISOWeekYears.js");
parcelHelpers.exportAll(_subISOWeekYearsJs, exports);
var _subMillisecondsJs = require("./subMilliseconds.js");
parcelHelpers.exportAll(_subMillisecondsJs, exports);
var _subMinutesJs = require("./subMinutes.js");
parcelHelpers.exportAll(_subMinutesJs, exports);
var _subMonthsJs = require("./subMonths.js");
parcelHelpers.exportAll(_subMonthsJs, exports);
var _subQuartersJs = require("./subQuarters.js");
parcelHelpers.exportAll(_subQuartersJs, exports);
var _subSecondsJs = require("./subSeconds.js");
parcelHelpers.exportAll(_subSecondsJs, exports);
var _subWeeksJs = require("./subWeeks.js");
parcelHelpers.exportAll(_subWeeksJs, exports);
var _subYearsJs = require("./subYears.js");
parcelHelpers.exportAll(_subYearsJs, exports);
var _toDateJs = require("./toDate.js");
parcelHelpers.exportAll(_toDateJs, exports);
var _transposeJs = require("./transpose.js");
parcelHelpers.exportAll(_transposeJs, exports);
var _weeksToDaysJs = require("./weeksToDays.js");
parcelHelpers.exportAll(_weeksToDaysJs, exports);
var _yearsToDaysJs = require("./yearsToDays.js");
parcelHelpers.exportAll(_yearsToDaysJs, exports);
var _yearsToMonthsJs = require("./yearsToMonths.js");
parcelHelpers.exportAll(_yearsToMonthsJs, exports);
var _yearsToQuartersJs = require("./yearsToQuarters.js");
parcelHelpers.exportAll(_yearsToQuartersJs, exports);

},{"./add.js":false,"./addBusinessDays.js":false,"./addDays.js":"klfv9","./addHours.js":false,"./addISOWeekYears.js":false,"./addMilliseconds.js":false,"./addMinutes.js":false,"./addMonths.js":false,"./addQuarters.js":false,"./addSeconds.js":false,"./addWeeks.js":false,"./addYears.js":false,"./areIntervalsOverlapping.js":false,"./clamp.js":false,"./closestIndexTo.js":false,"./closestTo.js":false,"./compareAsc.js":false,"./compareDesc.js":false,"./constructFrom.js":false,"./constructNow.js":false,"./daysToWeeks.js":false,"./differenceInBusinessDays.js":false,"./differenceInCalendarDays.js":false,"./differenceInCalendarISOWeekYears.js":false,"./differenceInCalendarISOWeeks.js":false,"./differenceInCalendarMonths.js":false,"./differenceInCalendarQuarters.js":false,"./differenceInCalendarWeeks.js":false,"./differenceInCalendarYears.js":false,"./differenceInDays.js":false,"./differenceInHours.js":false,"./differenceInISOWeekYears.js":false,"./differenceInMilliseconds.js":false,"./differenceInMinutes.js":false,"./differenceInMonths.js":false,"./differenceInQuarters.js":false,"./differenceInSeconds.js":false,"./differenceInWeeks.js":false,"./differenceInYears.js":false,"./eachDayOfInterval.js":false,"./eachHourOfInterval.js":false,"./eachMinuteOfInterval.js":false,"./eachMonthOfInterval.js":false,"./eachQuarterOfInterval.js":false,"./eachWeekOfInterval.js":false,"./eachWeekendOfInterval.js":false,"./eachWeekendOfMonth.js":false,"./eachWeekendOfYear.js":false,"./eachYearOfInterval.js":false,"./endOfDay.js":false,"./endOfDecade.js":false,"./endOfHour.js":false,"./endOfISOWeek.js":false,"./endOfISOWeekYear.js":false,"./endOfMinute.js":false,"./endOfMonth.js":false,"./endOfQuarter.js":false,"./endOfSecond.js":false,"./endOfToday.js":false,"./endOfTomorrow.js":false,"./endOfWeek.js":false,"./endOfYear.js":false,"./endOfYesterday.js":false,"./format.js":"hQsFo","./formatDistance.js":false,"./formatDistanceStrict.js":false,"./formatDistanceToNow.js":"26R3c","./formatDistanceToNowStrict.js":false,"./formatDuration.js":false,"./formatISO.js":false,"./formatISO9075.js":false,"./formatISODuration.js":false,"./formatRFC3339.js":false,"./formatRFC7231.js":false,"./formatRelative.js":false,"./fromUnixTime.js":false,"./getDate.js":false,"./getDay.js":false,"./getDayOfYear.js":false,"./getDaysInMonth.js":false,"./getDaysInYear.js":false,"./getDecade.js":false,"./getDefaultOptions.js":false,"./getHours.js":false,"./getISODay.js":false,"./getISOWeek.js":false,"./getISOWeekYear.js":false,"./getISOWeeksInYear.js":false,"./getMilliseconds.js":false,"./getMinutes.js":false,"./getMonth.js":false,"./getOverlappingDaysInIntervals.js":false,"./getQuarter.js":false,"./getSeconds.js":false,"./getTime.js":false,"./getUnixTime.js":false,"./getWeek.js":false,"./getWeekOfMonth.js":false,"./getWeekYear.js":false,"./getWeeksInMonth.js":false,"./getYear.js":false,"./hoursToMilliseconds.js":false,"./hoursToMinutes.js":false,"./hoursToSeconds.js":false,"./interval.js":false,"./intervalToDuration.js":false,"./intlFormat.js":false,"./intlFormatDistance.js":false,"./isAfter.js":false,"./isBefore.js":false,"./isDate.js":false,"./isEqual.js":false,"./isExists.js":false,"./isFirstDayOfMonth.js":false,"./isFriday.js":false,"./isFuture.js":false,"./isLastDayOfMonth.js":false,"./isLeapYear.js":false,"./isMatch.js":false,"./isMonday.js":false,"./isPast.js":false,"./isSameDay.js":false,"./isSameHour.js":false,"./isSameISOWeek.js":false,"./isSameISOWeekYear.js":false,"./isSameMinute.js":false,"./isSameMonth.js":false,"./isSameQuarter.js":false,"./isSameSecond.js":false,"./isSameWeek.js":false,"./isSameYear.js":false,"./isSaturday.js":false,"./isSunday.js":false,"./isThisHour.js":false,"./isThisISOWeek.js":false,"./isThisMinute.js":false,"./isThisMonth.js":false,"./isThisQuarter.js":false,"./isThisSecond.js":false,"./isThisWeek.js":false,"./isThisYear.js":false,"./isThursday.js":false,"./isToday.js":false,"./isTomorrow.js":false,"./isTuesday.js":false,"./isValid.js":false,"./isWednesday.js":false,"./isWeekend.js":false,"./isWithinInterval.js":false,"./isYesterday.js":false,"./lastDayOfDecade.js":false,"./lastDayOfISOWeek.js":false,"./lastDayOfISOWeekYear.js":false,"./lastDayOfMonth.js":false,"./lastDayOfQuarter.js":false,"./lastDayOfWeek.js":false,"./lastDayOfYear.js":false,"./lightFormat.js":false,"./max.js":false,"./milliseconds.js":false,"./millisecondsToHours.js":false,"./millisecondsToMinutes.js":false,"./millisecondsToSeconds.js":false,"./min.js":false,"./minutesToHours.js":false,"./minutesToMilliseconds.js":false,"./minutesToSeconds.js":false,"./monthsToQuarters.js":false,"./monthsToYears.js":false,"./nextDay.js":false,"./nextFriday.js":false,"./nextMonday.js":false,"./nextSaturday.js":false,"./nextSunday.js":false,"./nextThursday.js":false,"./nextTuesday.js":false,"./nextWednesday.js":false,"./parse.js":false,"./parseISO.js":false,"./parseJSON.js":false,"./previousDay.js":false,"./previousFriday.js":false,"./previousMonday.js":false,"./previousSaturday.js":false,"./previousSunday.js":false,"./previousThursday.js":false,"./previousTuesday.js":false,"./previousWednesday.js":false,"./quartersToMonths.js":false,"./quartersToYears.js":false,"./roundToNearestHours.js":false,"./roundToNearestMinutes.js":false,"./secondsToHours.js":false,"./secondsToMilliseconds.js":false,"./secondsToMinutes.js":false,"./set.js":false,"./setDate.js":false,"./setDay.js":false,"./setDayOfYear.js":false,"./setDefaultOptions.js":false,"./setHours.js":false,"./setISODay.js":false,"./setISOWeek.js":false,"./setISOWeekYear.js":false,"./setMilliseconds.js":false,"./setMinutes.js":false,"./setMonth.js":false,"./setQuarter.js":false,"./setSeconds.js":false,"./setWeek.js":false,"./setWeekYear.js":false,"./setYear.js":false,"./startOfDay.js":false,"./startOfDecade.js":false,"./startOfHour.js":false,"./startOfISOWeek.js":false,"./startOfISOWeekYear.js":false,"./startOfMinute.js":false,"./startOfMonth.js":false,"./startOfQuarter.js":false,"./startOfSecond.js":false,"./startOfToday.js":false,"./startOfTomorrow.js":false,"./startOfWeek.js":false,"./startOfWeekYear.js":false,"./startOfYear.js":false,"./startOfYesterday.js":false,"./sub.js":false,"./subBusinessDays.js":false,"./subDays.js":false,"./subHours.js":false,"./subISOWeekYears.js":false,"./subMilliseconds.js":false,"./subMinutes.js":false,"./subMonths.js":false,"./subQuarters.js":false,"./subSeconds.js":false,"./subWeeks.js":false,"./subYears.js":false,"./toDate.js":false,"./transpose.js":false,"./weeksToDays.js":false,"./yearsToDays.js":false,"./yearsToMonths.js":false,"./yearsToQuarters.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"klfv9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link addDays} function options.
 */ /**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */ parcelHelpers.export(exports, "addDays", ()=>addDays);
var _constructFromJs = require("./constructFrom.js");
var _toDateJs = require("./toDate.js");
function addDays(date, amount, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    if (isNaN(amount)) return (0, _constructFromJs.constructFrom)(options?.in || date, NaN);
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    if (!amount) return _date;
    _date.setDate(_date.getDate() + amount);
    return _date;
}
// Fallback for modularized imports:
exports.default = addDays;

},{"./constructFrom.js":"la42H","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"la42H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from "./constructFrom/date-fns";
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date>(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use constructor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   );
 * }
 */ parcelHelpers.export(exports, "constructFrom", ()=>constructFrom);
var _constantsJs = require("./constants.js");
function constructFrom(date, value) {
    if (typeof date === "function") return date(value);
    if (date && typeof date === "object" && (0, _constantsJs.constructFromSymbol) in date) return date[0, _constantsJs.constructFromSymbol](value);
    if (date instanceof Date) return new date.constructor(value);
    return new Date(value);
}
// Fallback for modularized imports:
exports.default = constructFrom;

},{"./constants.js":"9oulg","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9oulg":[function(require,module,exports,__globalThis) {
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */ /**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "daysInWeek", ()=>daysInWeek);
parcelHelpers.export(exports, "daysInYear", ()=>daysInYear);
parcelHelpers.export(exports, "maxTime", ()=>maxTime);
parcelHelpers.export(exports, "minTime", ()=>minTime);
parcelHelpers.export(exports, "millisecondsInWeek", ()=>millisecondsInWeek);
parcelHelpers.export(exports, "millisecondsInDay", ()=>millisecondsInDay);
parcelHelpers.export(exports, "millisecondsInMinute", ()=>millisecondsInMinute);
parcelHelpers.export(exports, "millisecondsInHour", ()=>millisecondsInHour);
parcelHelpers.export(exports, "millisecondsInSecond", ()=>millisecondsInSecond);
parcelHelpers.export(exports, "minutesInYear", ()=>minutesInYear);
parcelHelpers.export(exports, "minutesInMonth", ()=>minutesInMonth);
parcelHelpers.export(exports, "minutesInDay", ()=>minutesInDay);
parcelHelpers.export(exports, "minutesInHour", ()=>minutesInHour);
parcelHelpers.export(exports, "monthsInQuarter", ()=>monthsInQuarter);
parcelHelpers.export(exports, "monthsInYear", ()=>monthsInYear);
parcelHelpers.export(exports, "quartersInYear", ()=>quartersInYear);
parcelHelpers.export(exports, "secondsInHour", ()=>secondsInHour);
parcelHelpers.export(exports, "secondsInMinute", ()=>secondsInMinute);
parcelHelpers.export(exports, "secondsInDay", ()=>secondsInDay);
parcelHelpers.export(exports, "secondsInWeek", ()=>secondsInWeek);
parcelHelpers.export(exports, "secondsInYear", ()=>secondsInYear);
parcelHelpers.export(exports, "secondsInMonth", ()=>secondsInMonth);
parcelHelpers.export(exports, "secondsInQuarter", ()=>secondsInQuarter);
parcelHelpers.export(exports, "constructFromSymbol", ()=>constructFromSymbol);
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 86400000;
const minTime = -maxTime;
const millisecondsInWeek = 604800000;
const millisecondsInDay = 86400000;
const millisecondsInMinute = 60000;
const millisecondsInHour = 3600000;
const millisecondsInSecond = 1000;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;
const constructFromSymbol = Symbol.for("constructDateFrom");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5dMgD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
 * enabling to transfer extra properties from the reference date to the new date.
 * It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
 * that accept a time zone as a constructor argument.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */ parcelHelpers.export(exports, "toDate", ()=>toDate);
var _constructFromJs = require("./constructFrom.js");
function toDate(argument, context) {
    // [TODO] Get rid of `toDate` or `constructFrom`?
    return (0, _constructFromJs.constructFrom)(context || argument, argument);
}
// Fallback for modularized imports:
exports.default = toDate;

},{"./constructFrom.js":"la42H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c2cgG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */ parcelHelpers.export(exports, "compareAsc", ()=>compareAsc);
var _toDateJs = require("./toDate.js");
function compareAsc(dateLeft, dateRight) {
    const diff = +(0, _toDateJs.toDate)(dateLeft) - +(0, _toDateJs.toDate)(dateRight);
    if (diff < 0) return -1;
    else if (diff > 0) return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
    return diff;
}
// Fallback for modularized imports:
exports.default = compareAsc;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4dBc3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */ parcelHelpers.export(exports, "constructNow", ()=>constructNow);
var _constructFromJs = require("./constructFrom.js");
function constructNow(date) {
    return (0, _constructFromJs.constructFrom)(date, Date.now());
}
// Fallback for modularized imports:
exports.default = constructNow;

},{"./constructFrom.js":"la42H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1F4zu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarDays} function options.
 */ /**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - The options object
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */ parcelHelpers.export(exports, "differenceInCalendarDays", ()=>differenceInCalendarDays);
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _constantsJs = require("./constants.js");
var _startOfDayJs = require("./startOfDay.js");
function differenceInCalendarDays(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const laterStartOfDay = (0, _startOfDayJs.startOfDay)(laterDate_);
    const earlierStartOfDay = (0, _startOfDayJs.startOfDay)(earlierDate_);
    const laterTimestamp = +laterStartOfDay - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(laterStartOfDay);
    const earlierTimestamp = +earlierStartOfDay - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(earlierStartOfDay);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a day is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((laterTimestamp - earlierTimestamp) / (0, _constantsJs.millisecondsInDay));
}
// Fallback for modularized imports:
exports.default = differenceInCalendarDays;

},{"./_lib/getTimezoneOffsetInMilliseconds.js":"iFmyK","./_lib/normalizeDates.js":"grsPk","./constants.js":"9oulg","./startOfDay.js":"5NUHL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iFmyK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */ parcelHelpers.export(exports, "getTimezoneOffsetInMilliseconds", ()=>getTimezoneOffsetInMilliseconds);
var _toDateJs = require("../toDate.js");
function getTimezoneOffsetInMilliseconds(date) {
    const _date = (0, _toDateJs.toDate)(date);
    const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
    utcDate.setUTCFullYear(_date.getFullYear());
    return +date - +utcDate;
}

},{"../toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"grsPk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeDates", ()=>normalizeDates);
var _constructFromJs = require("../constructFrom.js");
function normalizeDates(context, ...dates) {
    const normalize = (0, _constructFromJs.constructFrom).bind(null, context || dates.find((date)=>typeof date === "object"));
    return dates.map(normalize);
}

},{"../constructFrom.js":"la42H","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5NUHL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfDay} function options.
 */ /**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfDay", ()=>startOfDay);
var _toDateJs = require("./toDate.js");
function startOfDay(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfDay;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3Rsrh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInCalendarMonths} function options.
 */ /**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */ parcelHelpers.export(exports, "differenceInCalendarMonths", ()=>differenceInCalendarMonths);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
function differenceInCalendarMonths(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, earlierDate);
    const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
    const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
    return yearsDiff * 12 + monthsDiff;
}
// Fallback for modularized imports:
exports.default = differenceInCalendarMonths;

},{"./_lib/normalizeDates.js":"grsPk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9FE3J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 *
 * @returns The number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */ parcelHelpers.export(exports, "differenceInMilliseconds", ()=>differenceInMilliseconds);
var _toDateJs = require("./toDate.js");
function differenceInMilliseconds(laterDate, earlierDate) {
    return +(0, _toDateJs.toDate)(laterDate) - +(0, _toDateJs.toDate)(earlierDate);
}
// Fallback for modularized imports:
exports.default = differenceInMilliseconds;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"40yVE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInMonths} function options.
 */ /**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */ parcelHelpers.export(exports, "differenceInMonths", ()=>differenceInMonths);
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _differenceInCalendarMonthsJs = require("./differenceInCalendarMonths.js");
var _isLastDayOfMonthJs = require("./isLastDayOfMonth.js");
function differenceInMonths(laterDate, earlierDate, options) {
    const [laterDate_, workingLaterDate, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, laterDate, laterDate, earlierDate);
    const sign = (0, _compareAscJs.compareAsc)(workingLaterDate, earlierDate_);
    const difference = Math.abs((0, _differenceInCalendarMonthsJs.differenceInCalendarMonths)(workingLaterDate, earlierDate_));
    if (difference < 1) return 0;
    if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27) workingLaterDate.setDate(30);
    workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
    let isLastMonthNotFull = (0, _compareAscJs.compareAsc)(workingLaterDate, earlierDate_) === -sign;
    if ((0, _isLastDayOfMonthJs.isLastDayOfMonth)(laterDate_) && difference === 1 && (0, _compareAscJs.compareAsc)(laterDate_, earlierDate_) === 1) isLastMonthNotFull = false;
    const result = sign * (difference - +isLastMonthNotFull);
    return result === 0 ? 0 : result;
}
// Fallback for modularized imports:
exports.default = differenceInMonths;

},{"./_lib/normalizeDates.js":"grsPk","./compareAsc.js":"c2cgG","./differenceInCalendarMonths.js":"3Rsrh","./isLastDayOfMonth.js":"cbay7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cbay7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */ parcelHelpers.export(exports, "isLastDayOfMonth", ()=>isLastDayOfMonth);
var _endOfDayJs = require("./endOfDay.js");
var _endOfMonthJs = require("./endOfMonth.js");
var _toDateJs = require("./toDate.js");
function isLastDayOfMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    return +(0, _endOfDayJs.endOfDay)(_date, options) === +(0, _endOfMonthJs.endOfMonth)(_date, options);
}
// Fallback for modularized imports:
exports.default = isLastDayOfMonth;

},{"./endOfDay.js":"kmh1s","./endOfMonth.js":"b8ZeH","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kmh1s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfDay} function options.
 */ /**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfDay", ()=>endOfDay);
var _toDateJs = require("./toDate.js");
function endOfDay(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfDay;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b8ZeH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link endOfMonth} function options.
 */ /**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */ parcelHelpers.export(exports, "endOfMonth", ()=>endOfMonth);
var _toDateJs = require("./toDate.js");
function endOfMonth(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const month = _date.getMonth();
    _date.setFullYear(_date.getFullYear(), month + 1, 0);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
// Fallback for modularized imports:
exports.default = endOfMonth;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9KEmN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link differenceInSeconds} function options.
 */ /**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */ parcelHelpers.export(exports, "differenceInSeconds", ()=>differenceInSeconds);
var _getRoundingMethodJs = require("./_lib/getRoundingMethod.js");
var _differenceInMillisecondsJs = require("./differenceInMilliseconds.js");
function differenceInSeconds(laterDate, earlierDate, options) {
    const diff = (0, _differenceInMillisecondsJs.differenceInMilliseconds)(laterDate, earlierDate) / 1000;
    return (0, _getRoundingMethodJs.getRoundingMethod)(options?.roundingMethod)(diff);
}
// Fallback for modularized imports:
exports.default = differenceInSeconds;

},{"./_lib/getRoundingMethod.js":"adoW8","./differenceInMilliseconds.js":"9FE3J","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"adoW8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRoundingMethod", ()=>getRoundingMethod);
function getRoundingMethod(method) {
    return (number)=>{
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hQsFo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874
parcelHelpers.export(exports, "formatters", ()=>(0, _formattersJs.formatters));
parcelHelpers.export(exports, "longFormatters", ()=>(0, _longFormattersJs.longFormatters));
parcelHelpers.export(exports, "formatDate", ()=>format);
/**
 * The {@link format} function options.
 */ /**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */ parcelHelpers.export(exports, "format", ()=>format);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _formattersJs = require("./_lib/format/formatters.js");
var _longFormattersJs = require("./_lib/format/longFormatters.js");
var _protectedTokensJs = require("./_lib/protectedTokens.js");
var _isValidJs = require("./isValid.js");
var _toDateJs = require("./toDate.js");
// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const originalDate = (0, _toDateJs.toDate)(date, options?.in);
    if (!(0, _isValidJs.isValid)(originalDate)) throw new RangeError("Invalid time value");
    let parts = formatStr.match(longFormattingTokensRegExp).map((substring)=>{
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
            const longFormatter = (0, _longFormattersJs.longFormatters)[firstCharacter];
            return longFormatter(substring, locale.formatLong);
        }
        return substring;
    }).join("").match(formattingTokensRegExp).map((substring)=>{
        // Replace two single quote characters with one single quote character
        if (substring === "''") return {
            isToken: false,
            value: "'"
        };
        const firstCharacter = substring[0];
        if (firstCharacter === "'") return {
            isToken: false,
            value: cleanEscapedString(substring)
        };
        if ((0, _formattersJs.formatters)[firstCharacter]) return {
            isToken: true,
            value: substring
        };
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        return {
            isToken: false,
            value: substring
        };
    });
    // invoke localize preprocessor (only for french locales at the moment)
    if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
    const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
    };
    return parts.map((part)=>{
        if (!part.isToken) return part.value;
        const token = part.value;
        if (!options?.useAdditionalWeekYearTokens && (0, _protectedTokensJs.isProtectedWeekYearToken)(token) || !options?.useAdditionalDayOfYearTokens && (0, _protectedTokensJs.isProtectedDayOfYearToken)(token)) (0, _protectedTokensJs.warnOrThrowProtectedError)(token, formatStr, String(date));
        const formatter = (0, _formattersJs.formatters)[token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
    }).join("");
}
function cleanEscapedString(input) {
    const matched = input.match(escapedStringRegExp);
    if (!matched) return input;
    return matched[1].replace(doubleQuoteRegExp, "'");
}
// Fallback for modularized imports:
exports.default = format;

},{"./_lib/defaultLocale.js":"3pvnM","./_lib/defaultOptions.js":"5LfG2","./_lib/format/formatters.js":"i16RS","./_lib/format/longFormatters.js":"bx03M","./_lib/protectedTokens.js":"iJEis","./isValid.js":"gVxb0","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3pvnM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultLocale", ()=>(0, _enUSJs.enUS));
var _enUSJs = require("../locale/en-US.js");

},{"../locale/en-US.js":"ceIk5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ceIk5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "enUS", ()=>enUS);
var _formatDistanceJs = require("./en-US/_lib/formatDistance.js");
var _formatLongJs = require("./en-US/_lib/formatLong.js");
var _formatRelativeJs = require("./en-US/_lib/formatRelative.js");
var _localizeJs = require("./en-US/_lib/localize.js");
var _matchJs = require("./en-US/_lib/match.js");
const enUS = {
    code: "en-US",
    formatDistance: (0, _formatDistanceJs.formatDistance),
    formatLong: (0, _formatLongJs.formatLong),
    formatRelative: (0, _formatRelativeJs.formatRelative),
    localize: (0, _localizeJs.localize),
    match: (0, _matchJs.match),
    options: {
        weekStartsOn: 0 /* Sunday */ ,
        firstWeekContainsDate: 1
    }
};
// Fallback for modularized imports:
exports.default = enUS;

},{"./en-US/_lib/formatDistance.js":"9wcSK","./en-US/_lib/formatLong.js":"4750s","./en-US/_lib/formatRelative.js":"9hkS1","./en-US/_lib/localize.js":"fNMBt","./en-US/_lib/match.js":"glQGS","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9wcSK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDistance", ()=>formatDistance);
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4750s":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatLong", ()=>formatLong);
var _buildFormatLongFnJs = require("../../_lib/buildFormatLongFn.js");
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, _buildFormatLongFnJs.buildFormatLongFn)({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};

},{"../../_lib/buildFormatLongFn.js":"hG1eR","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hG1eR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildFormatLongFn", ()=>buildFormatLongFn);
function buildFormatLongFn(args) {
    return (options = {})=>{
        // TODO: Remove String()
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9hkS1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatRelative", ()=>formatRelative);
const formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fNMBt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "localize", ()=>localize);
var _buildLocalizeFnJs = require("../../_lib/buildLocalizeFn.js");
const eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
const dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.
    const rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
const localize = {
    ordinalNumber,
    era: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, _buildLocalizeFnJs.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};

},{"../../_lib/buildLocalizeFn.js":"9AV3v","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9AV3v":[function(require,module,exports,__globalThis) {
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */ /**
 * The map of localized values for each width.
 */ /**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */ /**
 * Converts the unit value to the tuple of values.
 */ /**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */ /**
 * The tuple of localized quarter values. The first element represents Q1.
 */ /**
 * The tuple of localized day values. The first element represents Sunday.
 */ /**
 * The tuple of localized month values. The first element represents January.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildLocalizeFn", ()=>buildLocalizeFn);
function buildLocalizeFn(args) {
    return (value, options)=>{
        const context = options?.context ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
            const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            const width = options?.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            const defaultWidth = args.defaultWidth;
            const width = options?.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
        return valuesArray[index];
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"glQGS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "match", ()=>match);
var _buildMatchFnJs = require("../../_lib/buildMatchFn.js");
var _buildMatchPatternFnJs = require("../../_lib/buildMatchPatternFn.js");
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
const match = {
    ordinalNumber: (0, _buildMatchPatternFnJs.buildMatchPatternFn)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, _buildMatchFnJs.buildMatchFn)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};

},{"../../_lib/buildMatchFn.js":"1TSj7","../../_lib/buildMatchPatternFn.js":"YWS9x","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1TSj7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildMatchFn", ()=>buildMatchFn);
function buildMatchFn(args) {
    return (string, options = {})=>{
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern)=>pattern.test(matchedString)) : findKey(parsePatterns, (pattern)=>pattern.test(matchedString));
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(const key in object){
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
    }
    return undefined;
}
function findIndex(array, predicate) {
    for(let key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"YWS9x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildMatchPatternFn", ()=>buildMatchPatternFn);
function buildMatchPatternFn(args) {
    return (string, options = {})=>{
        const matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        // [TODO] I challenge you to fix the type
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5LfG2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultOptions", ()=>getDefaultOptions);
parcelHelpers.export(exports, "setDefaultOptions", ()=>setDefaultOptions);
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"i16RS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatters", ()=>formatters);
var _getDayOfYearJs = require("../../getDayOfYear.js");
var _getISOWeekJs = require("../../getISOWeek.js");
var _getISOWeekYearJs = require("../../getISOWeekYear.js");
var _getWeekJs = require("../../getWeek.js");
var _getWeekYearJs = require("../../getWeekYear.js");
var _addLeadingZerosJs = require("../addLeadingZeros.js");
var _lightFormattersJs = require("./lightFormatters.js");
const dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
};
const formatters = {
    // Era
    G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch(token){
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return localize.era(era, {
                    width: "abbreviated"
                });
            // A, B
            case "GGGGG":
                return localize.era(era, {
                    width: "narrow"
                });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return localize.era(era, {
                    width: "wide"
                });
        }
    },
    // Year
    y: function(date, token, localize) {
        // Ordinal number
        if (token === "yo") {
            const signedYear = date.getFullYear();
            // Returns 1 for 1 BC (which is year 0 in JavaScript)
            const year = signedYear > 0 ? signedYear : 1 - signedYear;
            return localize.ordinalNumber(year, {
                unit: "year"
            });
        }
        return (0, _lightFormattersJs.lightFormatters).y(date, token);
    },
    // Local week-numbering year
    Y: function(date, token, localize, options) {
        const signedWeekYear = (0, _getWeekYearJs.getWeekYear)(date, options);
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        // Two digit year
        if (token === "YY") {
            const twoDigitYear = weekYear % 100;
            return (0, _addLeadingZerosJs.addLeadingZeros)(twoDigitYear, 2);
        }
        // Ordinal number
        if (token === "Yo") return localize.ordinalNumber(weekYear, {
            unit: "year"
        });
        // Padding
        return (0, _addLeadingZerosJs.addLeadingZeros)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function(date, token) {
        const isoWeekYear = (0, _getISOWeekYearJs.getISOWeekYear)(date);
        // Padding
        return (0, _addLeadingZerosJs.addLeadingZeros)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function(date, token) {
        const year = date.getFullYear();
        return (0, _addLeadingZerosJs.addLeadingZeros)(year, token.length);
    },
    // Quarter
    Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "Q":
                return String(quarter);
            // 01, 02, 03, 04
            case "QQ":
                return (0, _addLeadingZerosJs.addLeadingZeros)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "formatting"
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone quarter
    q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch(token){
            // 1, 2, 3, 4
            case "q":
                return String(quarter);
            // 01, 02, 03, 04
            case "qq":
                return (0, _addLeadingZerosJs.addLeadingZeros)(quarter, 2);
            // 1st, 2nd, 3rd, 4th
            case "qo":
                return localize.ordinalNumber(quarter, {
                    unit: "quarter"
                });
            // Q1, Q2, Q3, Q4
            case "qqq":
                return localize.quarter(quarter, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "qqqqq":
                return localize.quarter(quarter, {
                    width: "narrow",
                    context: "standalone"
                });
            // 1st quarter, 2nd quarter, ...
            case "qqqq":
            default:
                return localize.quarter(quarter, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Month
    M: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            case "M":
            case "MM":
                return (0, _lightFormattersJs.lightFormatters).M(date, token);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "MMM":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // J, F, ..., D
            case "MMMMM":
                return localize.month(month, {
                    width: "narrow",
                    context: "formatting"
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone month
    L: function(date, token, localize) {
        const month = date.getMonth();
        switch(token){
            // 1, 2, ..., 12
            case "L":
                return String(month + 1);
            // 01, 02, ..., 12
            case "LL":
                return (0, _addLeadingZerosJs.addLeadingZeros)(month + 1, 2);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return localize.ordinalNumber(month + 1, {
                    unit: "month"
                });
            // Jan, Feb, ..., Dec
            case "LLL":
                return localize.month(month, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // J, F, ..., D
            case "LLLLL":
                return localize.month(month, {
                    width: "narrow",
                    context: "standalone"
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return localize.month(month, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // Local week of year
    w: function(date, token, localize, options) {
        const week = (0, _getWeekJs.getWeek)(date, options);
        if (token === "wo") return localize.ordinalNumber(week, {
            unit: "week"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(week, token.length);
    },
    // ISO week of year
    I: function(date, token, localize) {
        const isoWeek = (0, _getISOWeekJs.getISOWeek)(date);
        if (token === "Io") return localize.ordinalNumber(isoWeek, {
            unit: "week"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(isoWeek, token.length);
    },
    // Day of the month
    d: function(date, token, localize) {
        if (token === "do") return localize.ordinalNumber(date.getDate(), {
            unit: "date"
        });
        return (0, _lightFormattersJs.lightFormatters).d(date, token);
    },
    // Day of year
    D: function(date, token, localize) {
        const dayOfYear = (0, _getDayOfYearJs.getDayOfYear)(date);
        if (token === "Do") return localize.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(dayOfYear, token.length);
    },
    // Day of week
    E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch(token){
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "EEEEE":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "EEEEEE":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "EEEE":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Local day of week
    e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (Nth day of week with current locale or weekStartsOn)
            case "e":
                return String(localDayOfWeek);
            // Padded numerical value
            case "ee":
                return (0, _addLeadingZerosJs.addLeadingZeros)(localDayOfWeek, 2);
            // 1st, 2nd, ..., 7th
            case "eo":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "eee":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "eeeee":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "eeeeee":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "eeee":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Stand-alone local day of week
    c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch(token){
            // Numerical value (same as in `e`)
            case "c":
                return String(localDayOfWeek);
            // Padded numerical value
            case "cc":
                return (0, _addLeadingZerosJs.addLeadingZeros)(localDayOfWeek, token.length);
            // 1st, 2nd, ..., 7th
            case "co":
                return localize.ordinalNumber(localDayOfWeek, {
                    unit: "day"
                });
            case "ccc":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "standalone"
                });
            // T
            case "ccccc":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "standalone"
                });
            // Tu
            case "cccccc":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "standalone"
                });
            // Tuesday
            case "cccc":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "standalone"
                });
        }
    },
    // ISO day of week
    i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch(token){
            // 2
            case "i":
                return String(isoDayOfWeek);
            // 02
            case "ii":
                return (0, _addLeadingZerosJs.addLeadingZeros)(isoDayOfWeek, token.length);
            // 2nd
            case "io":
                return localize.ordinalNumber(isoDayOfWeek, {
                    unit: "day"
                });
            // Tue
            case "iii":
                return localize.day(dayOfWeek, {
                    width: "abbreviated",
                    context: "formatting"
                });
            // T
            case "iiiii":
                return localize.day(dayOfWeek, {
                    width: "narrow",
                    context: "formatting"
                });
            // Tu
            case "iiiiii":
                return localize.day(dayOfWeek, {
                    width: "short",
                    context: "formatting"
                });
            // Tuesday
            case "iiii":
            default:
                return localize.day(dayOfWeek, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM or PM
    a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "aaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "aaaaa":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // AM, PM, midnight, noon
    b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
        else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
        else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "b":
            case "bb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "bbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                }).toLowerCase();
            case "bbbbb":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
        else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
        else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
        else dayPeriodEnumValue = dayPeriodEnum.night;
        switch(token){
            case "B":
            case "BB":
            case "BBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "abbreviated",
                    context: "formatting"
                });
            case "BBBBB":
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return localize.dayPeriod(dayPeriodEnumValue, {
                    width: "wide",
                    context: "formatting"
                });
        }
    },
    // Hour [1-12]
    h: function(date, token, localize) {
        if (token === "ho") {
            let hours = date.getHours() % 12;
            if (hours === 0) hours = 12;
            return localize.ordinalNumber(hours, {
                unit: "hour"
            });
        }
        return (0, _lightFormattersJs.lightFormatters).h(date, token);
    },
    // Hour [0-23]
    H: function(date, token, localize) {
        if (token === "Ho") return localize.ordinalNumber(date.getHours(), {
            unit: "hour"
        });
        return (0, _lightFormattersJs.lightFormatters).H(date, token);
    },
    // Hour [0-11]
    K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(hours, token.length);
    },
    // Hour [1-24]
    k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0) hours = 24;
        if (token === "ko") return localize.ordinalNumber(hours, {
            unit: "hour"
        });
        return (0, _addLeadingZerosJs.addLeadingZeros)(hours, token.length);
    },
    // Minute
    m: function(date, token, localize) {
        if (token === "mo") return localize.ordinalNumber(date.getMinutes(), {
            unit: "minute"
        });
        return (0, _lightFormattersJs.lightFormatters).m(date, token);
    },
    // Second
    s: function(date, token, localize) {
        if (token === "so") return localize.ordinalNumber(date.getSeconds(), {
            unit: "second"
        });
        return (0, _lightFormattersJs.lightFormatters).s(date, token);
    },
    // Fraction of second
    S: function(date, token) {
        return (0, _lightFormattersJs.lightFormatters).S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) return "Z";
        switch(token){
            // Hours and optional minutes
            case "X":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XX`
            case "XXXX":
            case "XX":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `XXX`
            case "XXXXX":
            case "XXX":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Hours and optional minutes
            case "x":
                return formatTimezoneWithOptionalMinutes(timezoneOffset);
            // Hours, minutes and optional seconds without `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xx`
            case "xxxx":
            case "xx":
                return formatTimezone(timezoneOffset);
            // Hours, minutes and optional seconds with `:` delimiter
            // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
            // so this token always has the same output as `xxx`
            case "xxxxx":
            case "xxx":
            default:
                return formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (GMT)
    O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "O":
            case "OO":
            case "OOO":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "OOOO":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Timezone (specific non-location)
    z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch(token){
            // Short
            case "z":
            case "zz":
            case "zzz":
                return "GMT" + formatTimezoneShort(timezoneOffset, ":");
            // Long
            case "zzzz":
            default:
                return "GMT" + formatTimezone(timezoneOffset, ":");
        }
    },
    // Seconds timestamp
    t: function(date, token, _localize) {
        const timestamp = Math.trunc(+date / 1000);
        return (0, _addLeadingZerosJs.addLeadingZeros)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function(date, token, _localize) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(+date, token.length);
    }
};
function formatTimezoneShort(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = Math.trunc(absOffset / 60);
    const minutes = absOffset % 60;
    if (minutes === 0) return sign + String(hours);
    return sign + String(hours) + delimiter + (0, _addLeadingZerosJs.addLeadingZeros)(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
    if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, _addLeadingZerosJs.addLeadingZeros)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
    const sign = offset > 0 ? "-" : "+";
    const absOffset = Math.abs(offset);
    const hours = (0, _addLeadingZerosJs.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
    const minutes = (0, _addLeadingZerosJs.addLeadingZeros)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
}

},{"../../getDayOfYear.js":"hfYVq","../../getISOWeek.js":"bFlS3","../../getISOWeekYear.js":"5sfyb","../../getWeek.js":"fqGGM","../../getWeekYear.js":"9lIvw","../addLeadingZeros.js":"iez8V","./lightFormatters.js":"cNKmc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hfYVq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getDayOfYear} function options.
 */ /**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */ parcelHelpers.export(exports, "getDayOfYear", ()=>getDayOfYear);
var _differenceInCalendarDaysJs = require("./differenceInCalendarDays.js");
var _startOfYearJs = require("./startOfYear.js");
var _toDateJs = require("./toDate.js");
function getDayOfYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = (0, _differenceInCalendarDaysJs.differenceInCalendarDays)(_date, (0, _startOfYearJs.startOfYear)(_date));
    const dayOfYear = diff + 1;
    return dayOfYear;
}
// Fallback for modularized imports:
exports.default = getDayOfYear;

},{"./differenceInCalendarDays.js":"1F4zu","./startOfYear.js":"kK73U","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kK73U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfYear} function options.
 */ /**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfYear", ()=>startOfYear);
var _toDateJs = require("./toDate.js");
function startOfYear(date, options) {
    const date_ = (0, _toDateJs.toDate)(date, options?.in);
    date_.setFullYear(date_.getFullYear(), 0, 1);
    date_.setHours(0, 0, 0, 0);
    return date_;
}
// Fallback for modularized imports:
exports.default = startOfYear;

},{"./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bFlS3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getISOWeek} function options.
 */ /**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 * @param options - The options
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */ parcelHelpers.export(exports, "getISOWeek", ()=>getISOWeek);
var _constantsJs = require("./constants.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
var _startOfISOWeekYearJs = require("./startOfISOWeekYear.js");
var _toDateJs = require("./toDate.js");
function getISOWeek(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = +(0, _startOfISOWeekJs.startOfISOWeek)(_date) - +(0, _startOfISOWeekYearJs.startOfISOWeekYear)(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / (0, _constantsJs.millisecondsInWeek)) + 1;
}
// Fallback for modularized imports:
exports.default = getISOWeek;

},{"./constants.js":"9oulg","./startOfISOWeek.js":"6BSx4","./startOfISOWeekYear.js":"2a4IK","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6BSx4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfISOWeek} function options.
 */ /**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfISOWeek", ()=>startOfISOWeek);
var _startOfWeekJs = require("./startOfWeek.js");
function startOfISOWeek(date, options) {
    return (0, _startOfWeekJs.startOfWeek)(date, {
        ...options,
        weekStartsOn: 1
    });
}
// Fallback for modularized imports:
exports.default = startOfISOWeek;

},{"./startOfWeek.js":"kSdOJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kSdOJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfWeek} function options.
 */ /**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */ parcelHelpers.export(exports, "startOfWeek", ()=>startOfWeek);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _toDateJs = require("./toDate.js");
function startOfWeek(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const day = _date.getDay();
    const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    _date.setDate(_date.getDate() - diff);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfWeek;

},{"./_lib/defaultOptions.js":"5LfG2","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2a4IK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfISOWeekYear} function options.
 */ /**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */ parcelHelpers.export(exports, "startOfISOWeekYear", ()=>startOfISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _getISOWeekYearJs = require("./getISOWeekYear.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
function startOfISOWeekYear(date, options) {
    const year = (0, _getISOWeekYearJs.getISOWeekYear)(date, options);
    const fourthOfJanuary = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    return (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuary);
}
// Fallback for modularized imports:
exports.default = startOfISOWeekYear;

},{"./constructFrom.js":"la42H","./getISOWeekYear.js":"5sfyb","./startOfISOWeek.js":"6BSx4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5sfyb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getISOWeekYear} function options.
 */ /**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */ parcelHelpers.export(exports, "getISOWeekYear", ()=>getISOWeekYear);
var _constructFromJs = require("./constructFrom.js");
var _startOfISOWeekJs = require("./startOfISOWeek.js");
var _toDateJs = require("./toDate.js");
function getISOWeekYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, _constructFromJs.constructFrom)(_date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, _constructFromJs.constructFrom)(_date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, _startOfISOWeekJs.startOfISOWeek)(fourthOfJanuaryOfThisYear);
    if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (_date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
// Fallback for modularized imports:
exports.default = getISOWeekYear;

},{"./constructFrom.js":"la42H","./startOfISOWeek.js":"6BSx4","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fqGGM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getWeek} function options.
 */ /**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */ parcelHelpers.export(exports, "getWeek", ()=>getWeek);
var _constantsJs = require("./constants.js");
var _startOfWeekJs = require("./startOfWeek.js");
var _startOfWeekYearJs = require("./startOfWeekYear.js");
var _toDateJs = require("./toDate.js");
function getWeek(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const diff = +(0, _startOfWeekJs.startOfWeek)(_date, options) - +(0, _startOfWeekYearJs.startOfWeekYear)(_date, options);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / (0, _constantsJs.millisecondsInWeek)) + 1;
}
// Fallback for modularized imports:
exports.default = getWeek;

},{"./constants.js":"9oulg","./startOfWeek.js":"kSdOJ","./startOfWeekYear.js":"aNqJN","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aNqJN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link startOfWeekYear} function options.
 */ /**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */ parcelHelpers.export(exports, "startOfWeekYear", ()=>startOfWeekYear);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _constructFromJs = require("./constructFrom.js");
var _getWeekYearJs = require("./getWeekYear.js");
var _startOfWeekJs = require("./startOfWeek.js");
function startOfWeekYear(date, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const year = (0, _getWeekYearJs.getWeekYear)(date, options);
    const firstWeek = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, _startOfWeekJs.startOfWeek)(firstWeek, options);
    return _date;
}
// Fallback for modularized imports:
exports.default = startOfWeekYear;

},{"./_lib/defaultOptions.js":"5LfG2","./constructFrom.js":"la42H","./getWeekYear.js":"9lIvw","./startOfWeek.js":"kSdOJ","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9lIvw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link getWeekYear} function options.
 */ /**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */ parcelHelpers.export(exports, "getWeekYear", ()=>getWeekYear);
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _constructFromJs = require("./constructFrom.js");
var _startOfWeekJs = require("./startOfWeek.js");
var _toDateJs = require("./toDate.js");
function getWeekYear(date, options) {
    const _date = (0, _toDateJs.toDate)(date, options?.in);
    const year = _date.getFullYear();
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
    const firstWeekOfNextYear = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, _startOfWeekJs.startOfWeek)(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, _constructFromJs.constructFrom)(options?.in || date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, _startOfWeekJs.startOfWeek)(firstWeekOfThisYear, options);
    if (+_date >= +startOfNextYear) return year + 1;
    else if (+_date >= +startOfThisYear) return year;
    else return year - 1;
}
// Fallback for modularized imports:
exports.default = getWeekYear;

},{"./_lib/defaultOptions.js":"5LfG2","./constructFrom.js":"la42H","./startOfWeek.js":"kSdOJ","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iez8V":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addLeadingZeros", ()=>addLeadingZeros);
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cNKmc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lightFormatters", ()=>lightFormatters);
var _addLeadingZerosJs = require("../addLeadingZeros.js");
const lightFormatters = {
    // Year
    y (date, token) {
        // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
        // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
        // |----------|-------|----|-------|-------|-------|
        // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
        // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
        // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
        // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
        // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
        const signedYear = date.getFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _addLeadingZerosJs.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M (date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, _addLeadingZerosJs.addLeadingZeros)(month + 1, 2);
    },
    // Day of the month
    d (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getDate(), token.length);
    },
    // AM or PM
    a (date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch(token){
            case "a":
            case "aa":
                return dayPeriodEnumValue.toUpperCase();
            case "aaa":
                return dayPeriodEnumValue;
            case "aaaaa":
                return dayPeriodEnumValue[0];
            case "aaaa":
            default:
                return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
    },
    // Hour [1-12]
    h (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getHours(), token.length);
    },
    // Minute
    m (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getMinutes(), token.length);
    },
    // Second
    s (date, token) {
        return (0, _addLeadingZerosJs.addLeadingZeros)(date.getSeconds(), token.length);
    },
    // Fraction of second
    S (date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _addLeadingZerosJs.addLeadingZeros)(fractionalSeconds, token.length);
    }
};

},{"../addLeadingZeros.js":"iez8V","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bx03M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "longFormatters", ()=>longFormatters);
const dateLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "P":
            return formatLong.date({
                width: "short"
            });
        case "PP":
            return formatLong.date({
                width: "medium"
            });
        case "PPP":
            return formatLong.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong.date({
                width: "full"
            });
    }
};
const timeLongFormatter = (pattern, formatLong)=>{
    switch(pattern){
        case "p":
            return formatLong.time({
                width: "short"
            });
        case "pp":
            return formatLong.time({
                width: "medium"
            });
        case "ppp":
            return formatLong.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong.time({
                width: "full"
            });
    }
};
const dateTimeLongFormatter = (pattern, formatLong)=>{
    const matchResult = pattern.match(/(P+)(p+)?/) || [];
    const datePattern = matchResult[1];
    const timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong);
    let dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iJEis":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isProtectedDayOfYearToken", ()=>isProtectedDayOfYearToken);
parcelHelpers.export(exports, "isProtectedWeekYearToken", ()=>isProtectedWeekYearToken);
parcelHelpers.export(exports, "warnOrThrowProtectedError", ()=>warnOrThrowProtectedError);
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = [
    "D",
    "DD",
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gVxb0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertible into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */ parcelHelpers.export(exports, "isValid", ()=>isValid);
var _isDateJs = require("./isDate.js");
var _toDateJs = require("./toDate.js");
function isValid(date) {
    return !(!(0, _isDateJs.isDate)(date) && typeof date !== "number" || isNaN(+(0, _toDateJs.toDate)(date)));
}
// Fallback for modularized imports:
exports.default = isValid;

},{"./isDate.js":"dFJ8E","./toDate.js":"5dMgD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dFJ8E":[function(require,module,exports,__globalThis) {
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDate", ()=>isDate);
function isDate(value) {
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
// Fallback for modularized imports:
exports.default = isDate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3SJtD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatDistance} function options.
 */ /**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param laterDate - The date
 * @param earlierDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */ parcelHelpers.export(exports, "formatDistance", ()=>formatDistance);
var _defaultLocaleJs = require("./_lib/defaultLocale.js");
var _defaultOptionsJs = require("./_lib/defaultOptions.js");
var _getTimezoneOffsetInMillisecondsJs = require("./_lib/getTimezoneOffsetInMilliseconds.js");
var _normalizeDatesJs = require("./_lib/normalizeDates.js");
var _compareAscJs = require("./compareAsc.js");
var _constantsJs = require("./constants.js");
var _differenceInMonthsJs = require("./differenceInMonths.js");
var _differenceInSecondsJs = require("./differenceInSeconds.js");
function formatDistance(laterDate, earlierDate, options) {
    const defaultOptions = (0, _defaultOptionsJs.getDefaultOptions)();
    const locale = options?.locale ?? defaultOptions.locale ?? (0, _defaultLocaleJs.defaultLocale);
    const minutesInAlmostTwoDays = 2520;
    const comparison = (0, _compareAscJs.compareAsc)(laterDate, earlierDate);
    if (isNaN(comparison)) throw new RangeError("Invalid time value");
    const localizeOptions = Object.assign({}, options, {
        addSuffix: options?.addSuffix,
        comparison: comparison
    });
    const [laterDate_, earlierDate_] = (0, _normalizeDatesJs.normalizeDates)(options?.in, ...comparison > 0 ? [
        earlierDate,
        laterDate
    ] : [
        laterDate,
        earlierDate
    ]);
    const seconds = (0, _differenceInSecondsJs.differenceInSeconds)(earlierDate_, laterDate_);
    const offsetInSeconds = ((0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(earlierDate_) - (0, _getTimezoneOffsetInMillisecondsJs.getTimezoneOffsetInMilliseconds)(laterDate_)) / 1000;
    const minutes = Math.round((seconds - offsetInSeconds) / 60);
    let months;
    // 0 up to 2 mins
    if (minutes < 2) {
        if (options?.includeSeconds) {
            if (seconds < 5) return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
            else if (seconds < 10) return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
            else if (seconds < 20) return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
            else if (seconds < 40) return locale.formatDistance("halfAMinute", 0, localizeOptions);
            else if (seconds < 60) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", 1, localizeOptions);
        } else {
            if (minutes === 0) return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
            else return locale.formatDistance("xMinutes", minutes, localizeOptions);
        }
    } else if (minutes < 45) return locale.formatDistance("xMinutes", minutes, localizeOptions);
    else if (minutes < 90) return locale.formatDistance("aboutXHours", 1, localizeOptions);
    else if (minutes < (0, _constantsJs.minutesInDay)) {
        const hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
    // 1 day up to 1.75 days
    } else if (minutes < minutesInAlmostTwoDays) return locale.formatDistance("xDays", 1, localizeOptions);
    else if (minutes < (0, _constantsJs.minutesInMonth)) {
        const days = Math.round(minutes / (0, _constantsJs.minutesInDay));
        return locale.formatDistance("xDays", days, localizeOptions);
    // 1 month up to 2 months
    } else if (minutes < (0, _constantsJs.minutesInMonth) * 2) {
        months = Math.round(minutes / (0, _constantsJs.minutesInMonth));
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
    }
    months = (0, _differenceInMonthsJs.differenceInMonths)(earlierDate_, laterDate_);
    // 2 months up to 12 months
    if (months < 12) {
        const nearestMonth = Math.round(minutes / (0, _constantsJs.minutesInMonth));
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
    // 1 year up to max Date
    } else {
        const monthsSinceStartOfYear = months % 12;
        const years = Math.trunc(months / 12);
        // N years up to 1 years 3 months
        if (monthsSinceStartOfYear < 3) return locale.formatDistance("aboutXYears", years, localizeOptions);
        else if (monthsSinceStartOfYear < 9) return locale.formatDistance("overXYears", years, localizeOptions);
        else return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
}
// Fallback for modularized imports:
exports.default = formatDistance;

},{"./_lib/defaultLocale.js":"3pvnM","./_lib/defaultOptions.js":"5LfG2","./_lib/getTimezoneOffsetInMilliseconds.js":"iFmyK","./_lib/normalizeDates.js":"grsPk","./compareAsc.js":"c2cgG","./constants.js":"9oulg","./differenceInMonths.js":"40yVE","./differenceInSeconds.js":"9KEmN","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"26R3c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The {@link formatDistanceToNow} function options.
 */ /**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param date - The given date
 * @param options - The object with options
 *
 * @returns The distance in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */ parcelHelpers.export(exports, "formatDistanceToNow", ()=>formatDistanceToNow);
var _constructNowJs = require("./constructNow.js");
var _formatDistanceJs = require("./formatDistance.js");
function formatDistanceToNow(date, options) {
    return (0, _formatDistanceJs.formatDistance)(date, (0, _constructNowJs.constructNow)(date), options);
}
// Fallback for modularized imports:
exports.default = formatDistanceToNow;

},{"./constructNow.js":"4dBc3","./formatDistance.js":"3SJtD","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5U90s":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$e842 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$e842.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$e842.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>QuotesPage);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactQuery = require("@tanstack/react-query");
var _clientJs = require("../api/client.js");
var _assignModalJsx = require("./AssignModal.jsx");
var _assignModalJsxDefault = parcelHelpers.interopDefault(_assignModalJsx);
var _s = $RefreshSig$();
function QuotesPage({ managerId }) {
    _s();
    const [filter, setFilter] = (0, _react.useState)('unscheduled');
    const [selected, setSelected] = (0, _react.useState)(null);
    const { data: quotes = [], isLoading } = (0, _reactQuery.useQuery)({
        queryKey: [
            'quotes',
            filter
        ],
        queryFn: ()=>(0, _clientJs.api).getQuotes(filter || undefined),
        refetchInterval: 5000
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-header",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            children: "Quotes"
                        }, void 0, false, {
                            fileName: "components/QuotesPage.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            children: "Assign unscheduled quotes to technicians"
                        }, void 0, false, {
                            fileName: "components/QuotesPage.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "components/QuotesPage.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "components/QuotesPage.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-body",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "tabs",
                        children: [
                            'unscheduled',
                            'scheduled',
                            ''
                        ].map((f, i)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `tab ${filter === f ? 'active' : ''}`,
                                onClick: ()=>setFilter(f),
                                children: f === '' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)
                            }, i, false, {
                                fileName: "components/QuotesPage.jsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "components/QuotesPage.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "card-header",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: [
                                            quotes.length,
                                            " quote",
                                            quotes.length !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "components/QuotesPage.jsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    filter === 'unscheduled' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        style: {
                                            fontSize: 12,
                                            color: 'var(--amber)',
                                            fontWeight: 500
                                        },
                                        children: "Click a row to assign \u2192"
                                    }, void 0, false, {
                                        fileName: "components/QuotesPage.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/QuotesPage.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            isLoading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "loading-page",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "spinner"
                                    }, void 0, false, {
                                        fileName: "components/QuotesPage.jsx",
                                        lineNumber: 43,
                                        columnNumber: 43
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Loading\u2026"
                                    }, void 0, false, {
                                        fileName: "components/QuotesPage.jsx",
                                        lineNumber: 43,
                                        columnNumber: 70
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/QuotesPage.jsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this) : quotes.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "empty-state",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "icon",
                                        children: "\u25FB"
                                    }, void 0, false, {
                                        fileName: "components/QuotesPage.jsx",
                                        lineNumber: 45,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        children: "No quotes found"
                                    }, void 0, false, {
                                        fileName: "components/QuotesPage.jsx",
                                        lineNumber: 45,
                                        columnNumber: 71
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/QuotesPage.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "table-wrap",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("table", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("thead", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Title"
                                                    }, void 0, false, {
                                                        fileName: "components/QuotesPage.jsx",
                                                        lineNumber: 51,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Address"
                                                    }, void 0, false, {
                                                        fileName: "components/QuotesPage.jsx",
                                                        lineNumber: 52,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "components/QuotesPage.jsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Created"
                                                    }, void 0, false, {
                                                        fileName: "components/QuotesPage.jsx",
                                                        lineNumber: 54,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {}, void 0, false, {
                                                        fileName: "components/QuotesPage.jsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "components/QuotesPage.jsx",
                                                lineNumber: 50,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "components/QuotesPage.jsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tbody", {
                                            children: quotes.map((q)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                                                    className: q.status === 'unscheduled' ? 'quote-row' : '',
                                                    onClick: ()=>q.status === 'unscheduled' && setSelected(q),
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            style: {
                                                                fontWeight: 500
                                                            },
                                                            children: q.title
                                                        }, void 0, false, {
                                                            fileName: "components/QuotesPage.jsx",
                                                            lineNumber: 65,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            style: {
                                                                color: 'var(--text2)',
                                                                fontSize: 12.5
                                                            },
                                                            children: q.address
                                                        }, void 0, false, {
                                                            fileName: "components/QuotesPage.jsx",
                                                            lineNumber: 66,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                className: `status ${q.status}`,
                                                                children: q.status
                                                            }, void 0, false, {
                                                                fileName: "components/QuotesPage.jsx",
                                                                lineNumber: 67,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "components/QuotesPage.jsx",
                                                            lineNumber: 67,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            style: {
                                                                fontFamily: 'DM Mono',
                                                                fontSize: 12,
                                                                color: 'var(--text3)'
                                                            },
                                                            children: new Date(q.createdAt).toLocaleDateString('en-AU', {
                                                                day: 'numeric',
                                                                month: 'short'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "components/QuotesPage.jsx",
                                                            lineNumber: 68,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            children: q.status === 'unscheduled' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                                className: "btn btn-primary btn-sm",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    setSelected(q);
                                                                },
                                                                children: "Assign"
                                                            }, void 0, false, {
                                                                fileName: "components/QuotesPage.jsx",
                                                                lineNumber: 73,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "components/QuotesPage.jsx",
                                                            lineNumber: 71,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, q.id, true, {
                                                    fileName: "components/QuotesPage.jsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "components/QuotesPage.jsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "components/QuotesPage.jsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "components/QuotesPage.jsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/QuotesPage.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "components/QuotesPage.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            selected && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _assignModalJsxDefault.default), {
                quote: selected,
                managerId: managerId,
                onClose: ()=>setSelected(null)
            }, void 0, false, {
                fileName: "components/QuotesPage.jsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(QuotesPage, "zHL1wuR/81H0yxeoJnT0mcJaxGs=", false, function() {
    return [
        (0, _reactQuery.useQuery)
    ];
});
_c = QuotesPage;
var _c;
$RefreshReg$(_c, "QuotesPage");

  $parcel$ReactRefreshHelpers$e842.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","@tanstack/react-query":"gRw9X","../api/client.js":"hjiNq","./AssignModal.jsx":"cMg7M","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"cMg7M":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$c688 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$c688.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$c688.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>AssignModal);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactQuery = require("@tanstack/react-query");
var _clientJs = require("../api/client.js");
var _dateFns = require("date-fns");
var _s = $RefreshSig$();
const HOURS = Array.from({
    length: 14
}, (_, i)=>{
    const h = i + 7; // 7am – 8pm
    return {
        value: h,
        label: `${h < 12 ? h : h === 12 ? 12 : h - 12}:00 ${h < 12 ? 'AM' : 'PM'}`
    };
});
const DAYS = Array.from({
    length: 7
}, (_, i)=>{
    const d = (0, _dateFns.addDays)(new Date(), i);
    return {
        value: (0, _dateFns.format)(d, 'yyyy-MM-dd'),
        label: (0, _dateFns.format)(d, 'EEE, d MMM')
    };
});
function AssignModal({ quote, managerId, onClose }) {
    _s();
    const qc = (0, _reactQuery.useQueryClient)();
    const { data: technicians = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'technicians'
        ],
        queryFn: (0, _clientJs.api).getTechnicians
    });
    const [techId, setTechId] = (0, _react.useState)('');
    const [day, setDay] = (0, _react.useState)(DAYS[0].value);
    const [hour, setHour] = (0, _react.useState)(9);
    const [error, setError] = (0, _react.useState)('');
    const mutation = (0, _reactQuery.useMutation)({
        mutationFn: (0, _clientJs.api).createJob,
        onSuccess: ()=>{
            qc.invalidateQueries({
                queryKey: [
                    'jobs'
                ]
            });
            qc.invalidateQueries({
                queryKey: [
                    'quotes'
                ]
            });
            qc.invalidateQueries({
                queryKey: [
                    'notifications'
                ]
            });
            onClose();
        },
        onError: (err)=>setError(err.message)
    });
    function handleSubmit() {
        if (!techId) return setError('Please select a technician.');
        setError('');
        const startTime = new Date(`${day}T${String(hour).padStart(2, '0')}:00:00`).toISOString();
        mutation.mutate({
            quoteId: quote.id,
            technicianId: techId,
            managerId,
            startTime
        });
    }
    const endHour = hour + 2;
    const endLabel = endHour < 12 ? `${endHour}:00 AM` : endHour === 12 ? '12:00 PM' : `${endHour - 12}:00 PM`;
    const selectedHourLabel = HOURS.find((h)=>h.value === hour)?.label;
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "modal-overlay",
        onClick: (e)=>e.target === e.currentTarget && onClose(),
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "modal",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            children: "Assign Quote"
                        }, void 0, false, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "modal-close",
                            onClick: onClose,
                            children: "\xd7"
                        }, void 0, false, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "components/AssignModal.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            style: {
                                padding: '12px 16px',
                                background: 'var(--surface2)',
                                borderRadius: 'var(--radius)',
                                border: '1px solid var(--border)'
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    style: {
                                        fontWeight: 600,
                                        fontSize: 13.5,
                                        marginBottom: 4
                                    },
                                    children: quote.title
                                }, void 0, false, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    style: {
                                        fontSize: 12,
                                        color: 'var(--text2)'
                                    },
                                    children: quote.address
                                }, void 0, false, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                    className: "form-label",
                                    children: "Technician"
                                }, void 0, false, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                    className: "form-control",
                                    value: techId,
                                    onChange: (e)=>{
                                        setTechId(e.target.value);
                                        setError('');
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                            value: "",
                                            children: "\u2014 Select technician \u2014"
                                        }, void 0, false, {
                                            fileName: "components/AssignModal.jsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        technicians.map((t)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                                value: t.id,
                                                children: t.name
                                            }, t.id, false, {
                                                fileName: "components/AssignModal.jsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                    className: "form-label",
                                    children: "Date"
                                }, void 0, false, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                    className: "form-control",
                                    value: day,
                                    onChange: (e)=>setDay(e.target.value),
                                    children: DAYS.map((d)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                            value: d.value,
                                            children: d.label
                                        }, d.value, false, {
                                            fileName: "components/AssignModal.jsx",
                                            lineNumber: 73,
                                            columnNumber: 30
                                        }, this))
                                }, void 0, false, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                    className: "form-label",
                                    children: "Start Time"
                                }, void 0, false, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                                    className: "form-control",
                                    value: hour,
                                    onChange: (e)=>setHour(+e.target.value),
                                    children: HOURS.map((h)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                            value: h.value,
                                            children: h.label
                                        }, h.value, false, {
                                            fileName: "components/AssignModal.jsx",
                                            lineNumber: 80,
                                            columnNumber: 31
                                        }, this))
                                }, void 0, false, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '10px 14px',
                                background: 'var(--blue-bg)',
                                borderRadius: 'var(--radius)',
                                border: '1px solid rgba(79,124,255,0.15)',
                                fontSize: 13
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "\uD83D\uDD50"
                                }, void 0, false, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: [
                                        "2-hour window: ",
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("strong", {
                                            children: selectedHourLabel
                                        }, void 0, false, {
                                            fileName: "components/AssignModal.jsx",
                                            lineNumber: 86,
                                            columnNumber: 34
                                        }, this),
                                        " \u2192 ",
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("strong", {
                                            children: endLabel
                                        }, void 0, false, {
                                            fileName: "components/AssignModal.jsx",
                                            lineNumber: 86,
                                            columnNumber: 73
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "components/AssignModal.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "alert alert-error",
                            children: error
                        }, void 0, false, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "components/AssignModal.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "modal-footer",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "btn btn-ghost",
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            className: "btn btn-primary",
                            onClick: handleSubmit,
                            disabled: mutation.isPending,
                            children: mutation.isPending ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "spinner",
                                        style: {
                                            width: 14,
                                            height: 14,
                                            borderWidth: 2
                                        }
                                    }, void 0, false, {
                                        fileName: "components/AssignModal.jsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this),
                                    " Assigning\u2026"
                                ]
                            }, void 0, true) : 'Assign Job'
                        }, void 0, false, {
                            fileName: "components/AssignModal.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "components/AssignModal.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "components/AssignModal.jsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "components/AssignModal.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(AssignModal, "2Mul3kNCUdE0iGf7mViyM4SKoHQ=", false, function() {
    return [
        (0, _reactQuery.useQueryClient),
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useMutation)
    ];
});
_c = AssignModal;
var _c;
$RefreshReg$(_c, "AssignModal");

  $parcel$ReactRefreshHelpers$c688.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","@tanstack/react-query":"gRw9X","../api/client.js":"hjiNq","date-fns":"apLUd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"5rV6N":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$684f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$684f.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$684f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>JobsPage);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactQuery = require("@tanstack/react-query");
var _clientJs = require("../api/client.js");
var _dateFns = require("date-fns");
var _s = $RefreshSig$();
function JobsPage({ managerId }) {
    _s();
    const [filter, setFilter] = (0, _react.useState)('');
    const qc = (0, _reactQuery.useQueryClient)();
    const { data: jobs = [], isLoading } = (0, _reactQuery.useQuery)({
        queryKey: [
            'jobs',
            filter
        ],
        queryFn: ()=>(0, _clientJs.api).getJobs(filter ? {
                status: filter
            } : {}),
        refetchInterval: 5000
    });
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-header",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            children: "All Jobs"
                        }, void 0, false, {
                            fileName: "components/JobsPage.jsx",
                            lineNumber: 19,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                            children: "Manage and monitor all scheduled jobs"
                        }, void 0, false, {
                            fileName: "components/JobsPage.jsx",
                            lineNumber: 19,
                            columnNumber: 31
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "components/JobsPage.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "components/JobsPage.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-body",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "tabs",
                        children: [
                            [
                                '',
                                'All'
                            ],
                            [
                                'scheduled',
                                'Scheduled'
                            ],
                            [
                                'completed',
                                'Completed'
                            ]
                        ].map(([f, label])=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: `tab ${filter === f ? 'active' : ''}`,
                                onClick: ()=>setFilter(f),
                                children: label
                            }, f, false, {
                                fileName: "components/JobsPage.jsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "components/JobsPage.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "card",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "card-header",
                                children: [
                                    jobs.length,
                                    " job",
                                    jobs.length !== 1 ? 's' : ''
                                ]
                            }, void 0, true, {
                                fileName: "components/JobsPage.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            isLoading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "loading-page",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "spinner"
                                    }, void 0, false, {
                                        fileName: "components/JobsPage.jsx",
                                        lineNumber: 33,
                                        columnNumber: 43
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Loading\u2026"
                                    }, void 0, false, {
                                        fileName: "components/JobsPage.jsx",
                                        lineNumber: 33,
                                        columnNumber: 70
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/JobsPage.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this) : jobs.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "empty-state",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "icon",
                                        children: "\u229E"
                                    }, void 0, false, {
                                        fileName: "components/JobsPage.jsx",
                                        lineNumber: 35,
                                        columnNumber: 42
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                        children: "No jobs found"
                                    }, void 0, false, {
                                        fileName: "components/JobsPage.jsx",
                                        lineNumber: 35,
                                        columnNumber: 71
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/JobsPage.jsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "table-wrap",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("table", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("thead", {
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Quote"
                                                    }, void 0, false, {
                                                        fileName: "components/JobsPage.jsx",
                                                        lineNumber: 41,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Technician"
                                                    }, void 0, false, {
                                                        fileName: "components/JobsPage.jsx",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Manager"
                                                    }, void 0, false, {
                                                        fileName: "components/JobsPage.jsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Window"
                                                    }, void 0, false, {
                                                        fileName: "components/JobsPage.jsx",
                                                        lineNumber: 44,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("th", {
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "components/JobsPage.jsx",
                                                        lineNumber: 45,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "components/JobsPage.jsx",
                                                lineNumber: 40,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "components/JobsPage.jsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tbody", {
                                            children: jobs.map((j)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    style: {
                                                                        fontWeight: 500
                                                                    },
                                                                    children: j.quote?.title || "\u2014"
                                                                }, void 0, false, {
                                                                    fileName: "components/JobsPage.jsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    style: {
                                                                        fontSize: 11.5,
                                                                        color: 'var(--text3)',
                                                                        marginTop: 2
                                                                    },
                                                                    children: j.quote?.address
                                                                }, void 0, false, {
                                                                    fileName: "components/JobsPage.jsx",
                                                                    lineNumber: 53,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "components/JobsPage.jsx",
                                                            lineNumber: 51,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                className: "chip",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        className: "chip-avatar",
                                                                        children: j.technician?.name.split(' ').map((n)=>n[0]).join('') || '?'
                                                                    }, void 0, false, {
                                                                        fileName: "components/JobsPage.jsx",
                                                                        lineNumber: 57,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    j.technician?.name || "\u2014"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "components/JobsPage.jsx",
                                                                lineNumber: 56,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "components/JobsPage.jsx",
                                                            lineNumber: 55,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            style: {
                                                                color: 'var(--text2)',
                                                                fontSize: 13
                                                            },
                                                            children: j.manager?.name || "\u2014"
                                                        }, void 0, false, {
                                                            fileName: "components/JobsPage.jsx",
                                                            lineNumber: 63,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            style: {
                                                                fontFamily: 'DM Mono',
                                                                fontSize: 11.5
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    children: (0, _dateFns.format)(new Date(j.startTime), 'dd MMM')
                                                                }, void 0, false, {
                                                                    fileName: "components/JobsPage.jsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    style: {
                                                                        color: 'var(--text3)'
                                                                    },
                                                                    children: [
                                                                        (0, _dateFns.format)(new Date(j.startTime), 'HH:mm'),
                                                                        "\u2013",
                                                                        (0, _dateFns.format)(new Date(j.endTime), 'HH:mm')
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "components/JobsPage.jsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "components/JobsPage.jsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("td", {
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                className: `status ${j.status}`,
                                                                children: j.status
                                                            }, void 0, false, {
                                                                fileName: "components/JobsPage.jsx",
                                                                lineNumber: 70,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "components/JobsPage.jsx",
                                                            lineNumber: 70,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, j.id, true, {
                                                    fileName: "components/JobsPage.jsx",
                                                    lineNumber: 50,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "components/JobsPage.jsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "components/JobsPage.jsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "components/JobsPage.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/JobsPage.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "components/JobsPage.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(JobsPage, "6EUc+UhAsMUssaJSJYWLkPMaNOQ=", false, function() {
    return [
        (0, _reactQuery.useQueryClient),
        (0, _reactQuery.useQuery)
    ];
});
_c = JobsPage;
var _c;
$RefreshReg$(_c, "JobsPage");

  $parcel$ReactRefreshHelpers$684f.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","@tanstack/react-query":"gRw9X","../api/client.js":"hjiNq","date-fns":"apLUd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"fpkq6":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$7045 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$7045.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$7045.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>TechnicianPage);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactQuery = require("@tanstack/react-query");
var _clientJs = require("../api/client.js");
var _dateFns = require("date-fns");
var _s = $RefreshSig$();
function TechnicianPage({ technicianId }) {
    _s();
    const qc = (0, _reactQuery.useQueryClient)();
    const { data: technicians = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'technicians'
        ],
        queryFn: (0, _clientJs.api).getTechnicians
    });
    const tech = technicians.find((t)=>t.id === technicianId);
    const { data: jobs = [], isLoading } = (0, _reactQuery.useQuery)({
        queryKey: [
            'techJobs',
            technicianId
        ],
        queryFn: ()=>(0, _clientJs.api).getTechnicianJobs(technicianId),
        refetchInterval: 5000
    });
    const { data: notifs = [] } = (0, _reactQuery.useQuery)({
        queryKey: [
            'notifications',
            'tech',
            technicianId
        ],
        queryFn: ()=>(0, _clientJs.api).getNotifications({
                recipientType: 'technician',
                recipientId: technicianId
            }),
        refetchInterval: 4000
    });
    const completeMutation = (0, _reactQuery.useMutation)({
        mutationFn: (0, _clientJs.api).completeJob,
        onSuccess: ()=>{
            qc.invalidateQueries({
                queryKey: [
                    'techJobs',
                    technicianId
                ]
            });
            qc.invalidateQueries({
                queryKey: [
                    'jobs'
                ]
            });
            qc.invalidateQueries({
                queryKey: [
                    'notifications'
                ]
            });
        }
    });
    const markRead = (0, _reactQuery.useMutation)({
        mutationFn: (0, _clientJs.api).markNotificationRead,
        onSuccess: ()=>qc.invalidateQueries({
                queryKey: [
                    'notifications'
                ]
            })
    });
    const scheduled = jobs.filter((j)=>j.status === 'scheduled');
    const completed = jobs.filter((j)=>j.status === 'completed');
    const unread = notifs.filter((n)=>!n.read);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-header",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    marginBottom: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: {
                                            width: 40,
                                            height: 40,
                                            background: 'var(--accent)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#fff',
                                            fontWeight: 700,
                                            fontSize: 15,
                                            flexShrink: 0
                                        },
                                        children: tech?.name.split(' ').map((n)=>n[0]).join('') || '?'
                                    }, void 0, false, {
                                        fileName: "components/TechnicianPage.jsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                        children: tech?.name || 'Technician'
                                    }, void 0, false, {
                                        fileName: "components/TechnicianPage.jsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/TechnicianPage.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                children: [
                                    tech?.email,
                                    " \xb7 ",
                                    tech?.phone
                                ]
                            }, void 0, true, {
                                fileName: "components/TechnicianPage.jsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/TechnicianPage.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            textAlign: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                style: {
                                    background: 'var(--surface2)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)',
                                    padding: '12px 20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: {
                                            fontFamily: 'DM Mono',
                                            fontSize: 24,
                                            fontWeight: 700,
                                            color: 'var(--accent)'
                                        },
                                        children: scheduled.length
                                    }, void 0, false, {
                                        fileName: "components/TechnicianPage.jsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: {
                                            fontSize: 11,
                                            color: 'var(--text3)',
                                            marginTop: 2
                                        },
                                        children: "Scheduled"
                                    }, void 0, false, {
                                        fileName: "components/TechnicianPage.jsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/TechnicianPage.jsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                style: {
                                    background: 'var(--surface2)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 'var(--radius)',
                                    padding: '12px 20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: {
                                            fontFamily: 'DM Mono',
                                            fontSize: 24,
                                            fontWeight: 700,
                                            color: 'var(--green)'
                                        },
                                        children: completed.length
                                    }, void 0, false, {
                                        fileName: "components/TechnicianPage.jsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: {
                                            fontSize: 11,
                                            color: 'var(--text3)',
                                            marginTop: 2
                                        },
                                        children: "Completed"
                                    }, void 0, false, {
                                        fileName: "components/TechnicianPage.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "components/TechnicianPage.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/TechnicianPage.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "components/TechnicianPage.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-body",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "grid-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "card-header",
                                    children: "My Schedule"
                                }, void 0, false, {
                                    fileName: "components/TechnicianPage.jsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                isLoading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "loading-page",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "spinner"
                                        }, void 0, false, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 72,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            children: "Loading\u2026"
                                        }, void 0, false, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 72,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "components/TechnicianPage.jsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this) : jobs.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "empty-state",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "icon",
                                            children: "\uD83D\uDCCB"
                                        }, void 0, false, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 74,
                                            columnNumber: 44
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                            children: "No jobs assigned yet"
                                        }, void 0, false, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 74,
                                            columnNumber: 74
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "components/TechnicianPage.jsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    children: jobs.map((j)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            style: {
                                                padding: '16px 20px',
                                                borderBottom: '1px solid var(--border)',
                                                display: 'flex',
                                                gap: 14
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    style: {
                                                        textAlign: 'center',
                                                        minWidth: 48,
                                                        flexShrink: 0
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            style: {
                                                                fontFamily: 'DM Mono',
                                                                fontSize: 20,
                                                                fontWeight: 700,
                                                                color: j.status === 'completed' ? 'var(--green)' : 'var(--accent)'
                                                            },
                                                            children: (0, _dateFns.format)(new Date(j.startTime), 'dd')
                                                        }, void 0, false, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 80,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            style: {
                                                                fontSize: 11,
                                                                color: 'var(--text3)',
                                                                textTransform: 'uppercase'
                                                            },
                                                            children: (0, _dateFns.format)(new Date(j.startTime), 'MMM')
                                                        }, void 0, false, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 83,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "components/TechnicianPage.jsx",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            style: {
                                                                fontWeight: 600,
                                                                fontSize: 13.5
                                                            },
                                                            children: j.quote?.title
                                                        }, void 0, false, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: 'var(--text2)',
                                                                marginTop: 2
                                                            },
                                                            children: j.quote?.address
                                                        }, void 0, false, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            style: {
                                                                fontSize: 12,
                                                                color: 'var(--text3)',
                                                                marginTop: 4,
                                                                fontFamily: 'DM Mono'
                                                            },
                                                            children: [
                                                                (0, _dateFns.format)(new Date(j.startTime), 'HH:mm'),
                                                                " \u2013 ",
                                                                (0, _dateFns.format)(new Date(j.endTime), 'HH:mm')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 90,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "components/TechnicianPage.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    style: {
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        justifyContent: 'center',
                                                        gap: 6,
                                                        alignItems: 'flex-end'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                            className: `status ${j.status}`,
                                                            children: j.status
                                                        }, void 0, false, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 95,
                                                            columnNumber: 23
                                                        }, this),
                                                        j.status === 'scheduled' && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                            className: "btn btn-success btn-sm",
                                                            onClick: ()=>completeMutation.mutate(j.id),
                                                            disabled: completeMutation.isPending && completeMutation.variables === j.id,
                                                            children: "\u2713 Complete"
                                                        }, void 0, false, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 97,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "components/TechnicianPage.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, j.id, true, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "components/TechnicianPage.jsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "components/TechnicianPage.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "card-header",
                                    children: [
                                        "Notifications",
                                        unread.length > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            className: "badge blue",
                                            children: unread.length
                                        }, void 0, false, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 116,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "components/TechnicianPage.jsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                notifs.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "empty-state",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "icon",
                                            children: "\uD83D\uDD14"
                                        }, void 0, false, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 119,
                                            columnNumber: 44
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                            children: "No notifications"
                                        }, void 0, false, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 119,
                                            columnNumber: 74
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "components/TechnicianPage.jsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    children: notifs.map((n)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: `notif-item ${!n.read ? 'unread' : ''}`,
                                            onClick: ()=>!n.read && markRead.mutate(n.id),
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: `notif-dot ${n.read ? 'read' : ''}`
                                                }, void 0, false, {
                                                    fileName: "components/TechnicianPage.jsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "notif-msg",
                                                            children: n.message
                                                        }, void 0, false, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 130,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "notif-time",
                                                            children: [
                                                                new Date(n.createdAt).toLocaleTimeString('en-AU', {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit',
                                                                    day: 'numeric',
                                                                    month: 'short'
                                                                }),
                                                                !n.read && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                    style: {
                                                                        marginLeft: 8,
                                                                        color: 'var(--accent)',
                                                                        fontSize: 10,
                                                                        fontWeight: 600
                                                                    },
                                                                    children: "TAP TO MARK READ"
                                                                }, void 0, false, {
                                                                    fileName: "components/TechnicianPage.jsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "components/TechnicianPage.jsx",
                                                            lineNumber: 131,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "components/TechnicianPage.jsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, n.id, true, {
                                            fileName: "components/TechnicianPage.jsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "components/TechnicianPage.jsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "components/TechnicianPage.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "components/TechnicianPage.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "components/TechnicianPage.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(TechnicianPage, "d7jaqg8LWuXPfWvk2JQEdYQ6hgg=", false, function() {
    return [
        (0, _reactQuery.useQueryClient),
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useMutation),
        (0, _reactQuery.useMutation)
    ];
});
_c = TechnicianPage;
var _c;
$RefreshReg$(_c, "TechnicianPage");

  $parcel$ReactRefreshHelpers$7045.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","@tanstack/react-query":"gRw9X","../api/client.js":"hjiNq","date-fns":"apLUd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"3HQ5l":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$673f = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$673f.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$673f.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>NotificationsPage);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactQuery = require("@tanstack/react-query");
var _clientJs = require("../api/client.js");
var _dateFns = require("date-fns");
var _s = $RefreshSig$();
const TYPE_ICON = {
    JOB_ASSIGNED: "\uD83D\uDCCC",
    JOB_COMPLETED: "\u2705"
};
function NotificationsPage() {
    _s();
    const qc = (0, _reactQuery.useQueryClient)();
    const { data: notifs = [], isLoading } = (0, _reactQuery.useQuery)({
        queryKey: [
            'notifications',
            'all'
        ],
        queryFn: ()=>(0, _clientJs.api).getNotifications(),
        refetchInterval: 4000
    });
    const markRead = (0, _reactQuery.useMutation)({
        mutationFn: (0, _clientJs.api).markNotificationRead,
        onSuccess: ()=>qc.invalidateQueries({
                queryKey: [
                    'notifications'
                ]
            })
    });
    const unread = notifs.filter((n)=>!n.read);
    function markAllRead() {
        unread.forEach((n)=>markRead.mutate(n.id));
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-header",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                children: "Notifications"
                            }, void 0, false, {
                                fileName: "components/NotificationsPage.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                children: "All system notifications across managers and technicians"
                            }, void 0, false, {
                                fileName: "components/NotificationsPage.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/NotificationsPage.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    unread.length > 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "btn btn-ghost",
                        onClick: markAllRead,
                        children: [
                            "Mark all read (",
                            unread.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "components/NotificationsPage.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "components/NotificationsPage.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "page-body",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "card",
                    children: isLoading ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "loading-page",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "spinner"
                            }, void 0, false, {
                                fileName: "components/NotificationsPage.jsx",
                                lineNumber: 43,
                                columnNumber: 43
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                children: "Loading\u2026"
                            }, void 0, false, {
                                fileName: "components/NotificationsPage.jsx",
                                lineNumber: 43,
                                columnNumber: 70
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/NotificationsPage.jsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, this) : notifs.length === 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "empty-state",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "icon",
                                children: "\uD83D\uDD14"
                            }, void 0, false, {
                                fileName: "components/NotificationsPage.jsx",
                                lineNumber: 45,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                children: "No notifications yet"
                            }, void 0, false, {
                                fileName: "components/NotificationsPage.jsx",
                                lineNumber: 45,
                                columnNumber: 72
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "components/NotificationsPage.jsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: notifs.map((n)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: `notif-item ${!n.read ? 'unread' : ''}`,
                                onClick: ()=>!n.read && markRead.mutate(n.id),
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: `notif-dot ${n.read ? 'read' : ''}`
                                    }, void 0, false, {
                                        fileName: "components/NotificationsPage.jsx",
                                        lineNumber: 54,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: {
                                            flex: 1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8,
                                                    marginBottom: 3
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        style: {
                                                            fontSize: 14
                                                        },
                                                        children: TYPE_ICON[n.type] || "\uD83D\uDD14"
                                                    }, void 0, false, {
                                                        fileName: "components/NotificationsPage.jsx",
                                                        lineNumber: 57,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        style: {
                                                            fontSize: 11,
                                                            fontWeight: 600,
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.5px',
                                                            color: 'var(--text3)'
                                                        },
                                                        children: n.recipientType === 'technician' ? 'Technician' : 'Manager'
                                                    }, void 0, false, {
                                                        fileName: "components/NotificationsPage.jsx",
                                                        lineNumber: 58,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "components/NotificationsPage.jsx",
                                                lineNumber: 56,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "notif-msg",
                                                children: n.message
                                            }, void 0, false, {
                                                fileName: "components/NotificationsPage.jsx",
                                                lineNumber: 62,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "notif-time",
                                                children: (0, _dateFns.formatDistanceToNow)(new Date(n.createdAt), {
                                                    addSuffix: true
                                                })
                                            }, void 0, false, {
                                                fileName: "components/NotificationsPage.jsx",
                                                lineNumber: 63,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "components/NotificationsPage.jsx",
                                        lineNumber: 55,
                                        columnNumber: 19
                                    }, this),
                                    !n.read && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        style: {
                                            fontSize: 11,
                                            color: 'var(--accent)',
                                            fontWeight: 600,
                                            flexShrink: 0,
                                            paddingTop: 2
                                        },
                                        children: "NEW"
                                    }, void 0, false, {
                                        fileName: "components/NotificationsPage.jsx",
                                        lineNumber: 68,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, n.id, true, {
                                fileName: "components/NotificationsPage.jsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "components/NotificationsPage.jsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "components/NotificationsPage.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "components/NotificationsPage.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(NotificationsPage, "+3xZbnv7ah2iALS1fYva5DgKUvg=", false, function() {
    return [
        (0, _reactQuery.useQueryClient),
        (0, _reactQuery.useQuery),
        (0, _reactQuery.useMutation)
    ];
});
_c = NotificationsPage;
var _c;
$RefreshReg$(_c, "NotificationsPage");

  $parcel$ReactRefreshHelpers$673f.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","@tanstack/react-query":"gRw9X","../api/client.js":"hjiNq","date-fns":"apLUd","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}]},["icAAj","blcJa"], "blcJa", "parcelRequire10c2", {}, null, null, "http://localhost:1234")

//# sourceMappingURL=Frontend.cb65f72e.js.map
