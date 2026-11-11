// Service Worker ساده: فقط فایل‌های ثابت اپ را کش می‌کند.
// درخواست‌های API (Apps Script) هرگز کش نمی‌شوند تا داده‌های دانش‌آموز جایی ذخیره نشود.
var CACHE = 'parent-panel-v1';
var ASSETS = ['./', './index.html', './config.js', './api-shim.js', './manifest.json',
              './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; })
      .map(function (k) { return caches.delete(k); }));
  }));
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // فقط فایل‌های همین دامنه؛ فونت/بوت‌استرپ/API مستقیم از شبکه
  if (url.origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () { return caches.match(req).then(function (r) { return r || caches.match('./index.html'); }); })
  );
});
