let cacheName = 'pwa-cache-v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {

            return cache.addAll([
                '/',
                '/index.html',
                '/index.js',
                '/style.css',
                'download (1).png',
            ]);

        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});