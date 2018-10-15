const cacheName = '10.15.18d';
const cacheFiles = [
    '../index.html',
    '../css/index.css',
    '../js/index.js',
    '../js/runtime.js',
    '../js/0.js',
    '../js/1.js',
    '../js/2.js',
];
var fetched = false;

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Installed');
    e.waitUntil(caches.open(cacheName).then((cache) => {
        console.log('[ServiceWorker] Caching cacheFiles');
        return cache.addAll(cacheFiles);
    }));
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activated');
    e.waitUntil(caches.keys().then((cacheNames) => {
        return Promise.all(cacheNames.map((thisCacheName) => {
            if (thisCacheName !== cacheName) {
                console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
                return caches.delete(thisCacheName);
            }
        }));
    }));
});

self.addEventListener('fetch', function (e) {
    if (!fetched) console.log('[ServiceWorker] fetch request');
    e.respondWith(caches.match(e.request).then((res) => {
        if (res) {
            if (!fetched) console.log('[ServiceWorker] fetch success');
            fetched = true;
            return res;
        }
        let requestClone = e.request.clone();
        fetch(requestClone).then((res) => {
            if (!res) {
                console.log('[ServiceWorker] No response from fetch')
                return res;
            }
            let resClone = res.clone();
            caches.open(cacheName).then((cache) => {
                cache.put(e.request, resClone);
                console.log('[ServiceWorker] New Data Cached', e.request.url);
                return res;
            });
        }).catch((err) => {
            console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
        });
    }));
});