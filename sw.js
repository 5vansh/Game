self.addEventListener('install', (e) => {
  console.log('App Installed');
});

self.addEventListener('fetch', (e) => {
  // Required to pass PWA installation checks
});
