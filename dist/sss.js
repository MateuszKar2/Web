// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"sss.js":[function(require,module,exports) {
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//Mediana do pierwszej niedzieli miesiąca włącznie
//Rozwiązanie w dwóch funkcjach
//1)rozwiązanie nieoptymalizowane-solution1
//2)rozwiązanie optymalizowane-solution2
//solution2 - należy wybrać metodę, uzasadnić jej plusy i minusy

function firstSundayOfMonth(year, month) {
  var firstDay = new Date(year, month - 1, 1);
  var dayOfWeek = firstDay.getDay();
  var daysUntilSunday = (7 - dayOfWeek) % 7;
  firstDay.setDate(firstDay.getDate() + daysUntilSunday);
  return firstDay;
}

// Funkcja pomocnicza - zbieranie wydatków do pierwszej niedzieli miesiąca
function collectExpensesToFirstSunday(expenses, year, month, firstSunday) {
  var allExpenses = [];
  for (var day in expenses[month]) {
    var dayDate = new Date(year, month - 1, Number(day));
    if (dayDate <= firstSunday) {
      for (var category in expenses[month][day]) {
        allExpenses.push.apply(allExpenses, _toConsumableArray(expenses[month][day][category]));
      }
    }
  }
  return allExpenses;
}

// Funkcja rozwiązania nieoptymalizowanego
function solution1(expenses) {
  var result = {};
  for (var month in expenses) {
    var _month$split$map = month.split('-').map(Number),
      _month$split$map2 = _slicedToArray(_month$split$map, 2),
      year = _month$split$map2[0],
      monthNum = _month$split$map2[1];
    var firstSunday = firstSundayOfMonth(year, monthNum);
    var allExpenses = collectExpensesToFirstSunday(expenses, year, month, firstSunday);
    allExpenses.sort(function (a, b) {
      return a - b;
    });
    var n = allExpenses.length;
    result[month] = n === 0 ? null : n % 2 === 1 ? allExpenses[Math.floor(n / 2)] : (allExpenses[n / 2 - 1] + allExpenses[n / 2]) / 2;
  }
  return result;
}

// Funkcja rozwiązania zoptymalizowanego
function solution2(expenses) {
  var result = {};
  for (var month in expenses) {
    var _month$split$map3 = month.split('-').map(Number),
      _month$split$map4 = _slicedToArray(_month$split$map3, 2),
      year = _month$split$map4[0],
      monthNum = _month$split$map4[1];
    var firstSunday = firstSundayOfMonth(year, monthNum);
    var allExpenses = collectExpensesToFirstSunday(expenses, year, month, firstSunday);
    var n = allExpenses.length;
    if (n === 0) {
      result[month] = null;
    } else if (n % 2 === 1) {
      result[month] = quickSelect(allExpenses, Math.floor(n / 2));
    } else {
      var median1 = quickSelect(allExpenses, Math.floor(n / 2) - 1);
      var median2 = quickSelect(allExpenses, Math.floor(n / 2));
      result[month] = (median1 + median2) / 2;
    }
  }
  return result;
}

// Test funkcji
console.log(solution1(expenses)); // Wersja nieoptymalizowana
console.log(solution2(expenses)); // Wersja zoptymalizowana

// Quick Select to algorytm służący do szybkiego znajdowania k-tego elementu w posortowanej tablicy. 
// Zamiast pełnego sortowania tablicy,
// Quick Select tylko częściowo porządkuje elementy, aż znajdzie żądany element. 
// Najczęściej używa się go do znajdowania median (czyli k-tego elementu w posortowanej liście, 
// gdzie k = n/2 w przypadku mediany) bez konieczności pełnego sortowania.

//Zalet:
//Szybkość: Quick Select jest znacznie szybszy niż sortowanie, ponieważ jego średnia złożoność czasowa to O(n), podczas gdy pełne sortowanie ma złożoność O(n log n). Dla dużych zbiorów danych Quick Select będzie zdecydowanie wydajniejszy. 
//Mniejsze zużycie pamięci: Quick Select działa w miejscu (w tablicy), więc nie wymaga dodatkowej pamięci do tworzenia nowych tablic, jak ma to miejsce w przypadku sortowania.

//Wady:
//Wydajność w najgorszym przypadku: W najgorszym przypadku Quick Select ma złożoność 0(n), gdy wybór pivota jest bardzo niekorzystny (np. zawsze wybiera najmniejszy lub największy element). Można temu zapobiec poprzez bardziej zaawansowane techniki wyboru pivota, ale to komplikuje algorytm.
//Losowy wybór pivota: Standardowy Quick Select losowo wybiera pivot, co może prowadzić do zmienności wyników w zależności od uruchomienia, chociaż średnia wydajność pozostaje bardzo dobra.

// Przykładowe dane
var expenses = {
  "2023-01": {
    "01": {
      "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      "fuel": [210.22]
    },
    "09": {
      "food": [11.9],
      "fuel": [190.22]
    }
  },
  "2023-03": {
    "07": {
      "food": [20, 11.9, 30.20, 11.9]
    },
    "04": {
      "food": [10.20, 11.50, 2.5],
      "fuel": []
    }
  },
  "2023-04": {}
};

// Test funkcji
console.log(solution1(expenses)); // Wersja nieoptymalizowana
console.log(solution2(expenses)); // Wersja zoptymalizowana

console.log(medianOfExpenses(expenses)); // 11.9
//11.9 — mediana wszystkich wydatków do pierwszej niedzieli każdego miesiąca.

console.log('jestem');
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54179" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","sss.js"], null)
//# sourceMappingURL=/sss.js.map