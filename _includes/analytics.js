{% if page.url == '/404/' %}

//* Matomo *//

  var _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['setDocumentTitle',  '404/URL = ' +  encodeURIComponent(document.location.pathname+document.location.search) + '/From = ' + encodeURIComponent(document.referrer)]);
  _paq.push(['disableCookies']);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="https://terminalnetwork.matomo.cloud/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '{{ site.matomo_site_id }}']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src='//cdn.matomo.cloud/terminalnetwork.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
  })();

//* End Matomo *//



{% else %}
//* Matomo Tag Manager *//

  var _mtm = _mtm || [];
  _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
  g.type='text/javascript'; g.async=true; g.defer=true; g.src='https://cdn.matomo.cloud/terminalnetwork.matomo.cloud/container_{{ site.matomo_container }}.js'; s.parentNode.insertBefore(g,s);

//* End Matomo Tag Manager *//
{% endif %}

