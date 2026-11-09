(() => {
  if (location.hostname !== 'sijieji.github.io') return;

  const tracker = document.createElement('script');
  tracker.defer = true;
  tracker.src = 'https://cloud.umami.is/script.js';
  tracker.dataset.websiteId = '51e55084-8892-4359-8f72-27a571b65484';
  tracker.dataset.domains = 'sijieji.github.io';
  tracker.dataset.excludeSearch = 'true';
  tracker.dataset.excludeHash = 'true';
  tracker.dataset.doNotTrack = 'true';
  document.head.appendChild(tracker);

  const footer = document.querySelector('footer');
  if (footer) {
    const notice = document.createElement('div');
    notice.style.cssText = 'width:100%;padding:12px 24px 0;box-sizing:border-box;text-align:center;font:12px/1.5 system-ui,sans-serif;letter-spacing:0';
    const link = document.createElement('a');
    link.href = '/privacy.html';
    link.textContent = 'Privacy';
    link.style.cssText = 'color:inherit;text-decoration:underline';
    notice.appendChild(link);
    footer.appendChild(notice);
  }
})();
