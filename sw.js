'use strict';

// Bump this version when changing files cached below. Updates activate after
// existing app windows close, so a running game is never forcibly reloaded.
const CACHE_PREFIX = 'snake-pwa-';
const CACHE_NAME = `${CACHE_PREFIX}v2`;
const ROOT = new URL('./', self.location.href).href;
const ASSETS = [
  'manifest.webmanifest',
  'pwa.js',
  'assets/bytesized-regular.ttf',
  'assets/favicon.svg',
  'assets/favicon-48.png',
  'assets/apple-touch-icon.png',
  'assets/icon-192.png',
  'assets/icon-512.png'
].map(path => new URL(path, ROOT).href);

async function cacheResponse(cache, key, response) {
  if (response.ok) {
    try { await cache.put(key, response.clone()); }
    catch { /* Keep online play working if the device has no cache space. */ }
  }
  return response;
}

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll([ROOT, ...ASSETS])));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names
        .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
        .map(name => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  if (request.mode === 'navigate' && url.pathname === new URL(ROOT).pathname) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response.status >= 500) return (await cache.match(ROOT)) || response;
        return await cacheResponse(cache, ROOT, response);
      } catch {
        return (await cache.match(ROOT)) || Response.error();
      }
    })());
  } else if (ASSETS.includes(url.href)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      return cacheResponse(cache, request, response);
    })());
  }
});
