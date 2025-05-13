addEventListener('fetch', event => {
  event.respondWith(
    new Response('Hello from Cloudflare Workers!', {
      headers: { 'content-type': 'text/plain' },
    })
  );
});
