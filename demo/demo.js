const NanoSpeedCache = require('nano-speed-cache');

const cache = new NanoSpeedCache({
  defaultTTL: 60_000,
  maxSize: 5000,
  staleWhileRevalidate: 30_000,
  useClone: true
});
g(cache.get('user:123'));
