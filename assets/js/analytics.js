(() => {
  if (location.hostname !== 'sijieji.github.io') return;

  const measurementId = 'G-HCFNLGKP7M';
  const preferenceKey = 'sijie-analytics-consent';
  let started = false;
  let choice;
  try { choice = localStorage.getItem(preferenceKey); } catch (_) {}

  function startAnalytics() {
    window['ga-disable-' + measurementId] = false;
    if (started) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: location.origin + location.pathname,
      page_referrer: document.referrer ? new URL(document.referrer).origin + '/' : ''
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.appendChild(script);
  }

  const style = document.createElement('style');
  style.textContent = `
    #site-analytics-notice,#site-analytics-settings{font:13px/1.5 system-ui,sans-serif;letter-spacing:0;color:#222;background:#fff;border:1px solid #ccc;box-sizing:border-box;z-index:10000}
    #site-analytics-notice{position:fixed;bottom:16px;right:16px;width:440px;max-width:calc(100% - 32px);padding:18px;border-radius:6px;box-shadow:0 4px 24px #0002}
    #site-analytics-notice p{margin:0 0 12px;font:inherit;color:inherit}
    #site-analytics-notice a{color:inherit;text-decoration:underline}
    #site-analytics-notice .analytics-actions{display:flex;gap:10px;flex-wrap:wrap}
    #site-analytics-notice button,#site-analytics-settings{cursor:pointer;font:inherit;letter-spacing:0;border:1px solid #888;border-radius:4px;padding:8px 12px;background:#fff;color:#222;min-height:40px}
    #site-analytics-settings{position:fixed;bottom:12px;left:12px;padding:5px 10px;font-size:11px;min-height:32px}
    #site-analytics-notice button:focus-visible,#site-analytics-settings:focus-visible{outline:2px solid #176b55;outline-offset:3px}
    #site-analytics-notice[hidden],#site-analytics-settings[hidden]{display:none!important}
    @media print{#site-analytics-notice,#site-analytics-settings{display:none!important}}
  `;
  document.head.appendChild(style);
  const notice = document.createElement('aside');
  notice.id = 'site-analytics-notice';
  notice.setAttribute('aria-label', 'Website analytics preferences');
  notice.innerHTML = '<p>This site uses optional Google Analytics cookies to understand page visits and approximate visitor cities. <a href="/privacy.html">Privacy notice</a></p><div class="analytics-actions"><button type="button" data-choice="accepted">Accept analytics</button><button type="button" data-choice="rejected">Reject analytics</button></div>';
  const settings = document.createElement('button');
  settings.id = 'site-analytics-settings';
  settings.type = 'button';
  settings.textContent = 'Analytics settings';
  settings.addEventListener('click', () => {
    notice.hidden = false;
    settings.hidden = true;
    notice.querySelector('button').focus();
  });

  function choose(value) {
    try { localStorage.setItem(preferenceKey, value); } catch (_) {}
    notice.hidden = true;
    settings.hidden = false;
    if (value === 'accepted') {
      startAnalytics();
    } else {
      window['ga-disable-' + measurementId] = true;
      document.cookie.split(';').forEach(cookie => {
        const name = cookie.trim().split('=')[0];
        if (name === '_ga' || name.startsWith('_ga_')) {
          ['', '; domain=sijieji.github.io', '; domain=.sijieji.github.io'].forEach(domain => {
            document.cookie = name + '=; max-age=0; path=/' + domain;
          });
        }
      });
    }
  }
  notice.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => choose(button.dataset.choice));
  });
  document.body.append(notice, settings);
  notice.hidden = choice === 'accepted' || choice === 'rejected';
  settings.hidden = !notice.hidden;
  if (choice === 'accepted') startAnalytics();
})();
