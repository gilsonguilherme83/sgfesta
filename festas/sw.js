var cacheName = 'hello-world-page';
var filesToCache = [
  '/',
  '/index.html',
  '/todos.html',
  '/main.css',
  '/imagens/a.jpg',
  '/imagens/b.jpg',
  '/imagens/c.jpg',
  '/imagens/d.jpg',
  '/imagens/e.jpg',
  '/imagens/f.jpg',
  '/imagens/g.jpg',
  '/imagens/h.jpg',
  '/imagens/i.jpg',
  '/imagens/k.jpg',
  '/imagens/l.jpg',
  '/imagens/m.jpg',
  '/imagens/n.jpg',
  '/imagens/o.jpg',
  '/imagens/p.jpg',
  '/imagens/q.jpg',
  '/imagens/r.jpg',
  '/imagens/s.jpg',
  '/imagens/t.jpg',
  '/imagens/u.jpg',
  '/imagens/v.jpg',
  '/imagens/x.jpg'
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});