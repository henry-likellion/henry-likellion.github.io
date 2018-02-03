(function (w, d) {
  'use strict';
  var s1 = d.getElementsByTagName('script')[0],
      s = d.createElement('script'),
      onReady;
      s.src = '//tru.am/scripts/ta-pagesocial-sdk.js';
  onReady = function () {
    var l = document.location,
        h = l.hostname.toLowerCase(),
        cid;
    if (h.indexOf('bc.ctvnews.ca') > -1) {
            cid = '1184';
    } else if (h.indexOf('calgary.ctvnews.ca') > -1) {
                cid = '1185';
    } else if (h.indexOf('toronto.ctvnews.ca') > -1) {
                cid = '1269';
    } else if (h.indexOf('saskatoon.ctvnews.ca') > -1) {
                cid = '1270';
    } else if (h.indexOf('ctvnews.ca') > -1) {
                cid = '1070';
    }

    if (cid) {
      w.TRUE_ANTHEM.configure(cid);
    }
  };
  if (s.addEventListener) {
    s.addEventListener('load', onReady, false);
  } else {
    s.onreadystatechange = function () {
      if (s.readyState in {loaded: 1, complete: 1}) {
        s.onreadystatechange = null;
        onReady();
      }
    };
  }
  s1.parentNode.insertBefore(s, s1);
}(window, document));
