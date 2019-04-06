
window['ly_cid'] = "c71db31893a13b8dbeacfde75fb20cf5";

// set the stream and fire the first event once jstag has loaded
var __jstag_onload = function(){  
  // make sure we have the stream set globally if its in the config 
  if(typeof window.jstag !== 'undefined' && typeof window.jstag._c !== 'undefined' && typeof window.jstag._c.stream !== 'undefined' && window.jstag._c.stream !== ''){
    window.jstag.config.stream = window.jstag._c.stream;
  }

  // make sure that if the liosetup stream is set then we override everything else with it
  if(typeof window.liosetup !== 'undefined' && window.liosetup.stream !== undefined){
      window.jstag.config.stream = window.liosetup.stream;
  }

  // send first event
  if (window.analytics && window.analytics.Integrations && typeof window.analytics.Integrations.Lytics !== 'undefined') {
    // in the case of segment we rely on them to fire the first event so skip that
  } else {
    window.jstag.send();
  }
  
  var called = false;
  function continuation(getIdResponse) {
    if (!called) {
      
      // render outlio
      

(function(d, w, getIdResponse) {
  // only allow outlio to be loaded once
  if(w.lio != null){
    return;
  }

  window['ly_cid'] = "c71db31893a13b8dbeacfde75fb20cf5";

  if(w.liosetup && w.liosetup.dimension){
    w.liosetup.gaDimension = w.liosetup.dimension;
  }
  if(w.liosetup && w.liosetup.gaDimension){
    w.liosetup.gaSegmentDimension = w.liosetup.gaDimension;
  }

  w.lio = {
    account: {
      id: "c71db31893a13b8dbeacfde75fb20cf5"
    },
    loaded: false,
    pathforaLoaded: false,
    personalizeVer: 1,
    apiroot: "https://api.lytics.io" || "https://api.lytics.io",
    cdnroot: "https://c.lytics.io" || "https://c.lytics.io",
    cookie: d.cookie,
    hasEntity: false,
    variationPreviewKey: 'lytics_variation_preview_id',
    experiencePreviewKey: 'lytics_preview_id',
    sync: !!w.liosetup && w.liosetup.sync || false,
    fields: !!w.liosetup && w.liosetup.fields || "" || "",
    stream: (w.liosetup && w.liosetup.stream) || (w.jstag && w.jstag.config && w.jstag.config.stream) || "default",
    data: {},
    personalize: {},
    blacklist:[],
    isBlacklisted: function(suspect){
      return w.lio.blacklist.indexOf(suspect) !== -1;
    },
    segmentsCookie: {},
    segmentsHash: {},
    segmentsString: "",
    segmentsArray: [],
    integrations: { // monitor the status of integration responses [ 200:success, 201:validated (if necessary) 0:na, 500:failed, 400:missing]
      addthis: 0,
      adroll: 0,
      cookieData: 0,
      customDataLayer: 0,
      facebookAds: 0,
      googleAdsIntegration: 0,
      googleAnalyticsDimension: 0,
      googleAnalyticsUserDimension: 0,
      googleAnalyticsUserid: 0,
      googleDFP: 0,
      gtmPull: 0,
      gtmPush: 0,
      krux: 0,
      lotame: 0,
      orchestrate: 0,
      optimizely: 0,
      pathfora: 0,
      qubit: 0,
      tealium: 0
    },
    integrationsConfig:{
      orchestrateUrlWhitelist: [],
      allowKrux: false,
      allowLotame: false,
      allowPathfora: true,
      customCookieKeys: [],
      customDataKeys: [],
      globalPathforaStylesheet: "https://storage.googleapis.com/lioservices/2273-outreach/lytics_overrides.css",
      googleAdsIntegration: [{"web_property":"","segments_dimension":"","user_id_dimension":""},{"web_property":"UA-293620-15","segments_dimension":"dimension2","user_id_dimension":"dimension1"},{"web_property":"","segments_dimension":"","user_id_dimension":""},{"web_property":"UA-293620-62","segments_dimension":"dimension2","user_id_dimension":"dimension1"},{"web_property":"UA-293620-9","segments_dimension":"dimension2","user_id_dimension":"dimension1"},{"web_property":"UA-75701108-1","segments_dimension":"dimension2","user_id_dimension":"dimension1"},{"web_property":"","segments_dimension":"","user_id_dimension":""},{"web_property":"","segments_dimension":"","user_id_dimension":""},{"web_property":"UA-293620-9","segments_dimension":"dimension2","user_id_dimension":"dimension1"}],
      hasActiveCampaign: true
    },
    integrationTicker: null,       // becomes the loop ticker
    integrationTickerPace: 100,    // try every 100ms
    integrationCounter: 0,         // counts loop iterations
    integrationCounterMax: 600,    // retry every 100 ms for 30 seconds
    debug: !!w.liosetup && w.liosetup.debug,
    debugMsgs: [],
    DOMLoaded: false,
    onDOMready: function(fns) {
      var listener,
          handler,
          doc = d,
          hack = doc.documentElement.doScroll,
          domContentLoaded = 'DOMContentLoaded',
          loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

      if (!loaded) {
        doc.addEventListener(domContentLoaded, handler = function () {
          doc.removeEventListener(domContentLoaded, handler);
          w.lio.DOMLoaded = true;
          while (listener = fns.shift()) {
            listener(w.lio.data);
          }
        })
      } else {
        w.lio.DOMLoaded = true;
        while (listener = fns.shift()) {
          setTimeout(listener, 0, w.lio.data);
        }
      }
    },
    addDebugMessage: function(m) {
      w.lio.debugMsgs.push(m);
    },
    checkPullIntegrations: function(callback) {
      // tealium data layer
      if(w.lio.integrations.tealium === 0 && w.jstag && w.utag_data && !w.lio.isBlacklisted("tealium")){
        w.jstag.send(w.lio.stream, w.utag_data);
        w.lio.integrations.tealium = 200;
      }

      // gtm data layer
      if(w.lio.integrations.gtmPull === 0 && w.jstag && (w.dataLayer || w.__dataLayer) && !w.lio.isBlacklisted("gtm")){
        if(w.dataLayer != null){
          if(typeof w.dataLayer.push === 'function'){
            // for gtm we need to check the length of the object in the array. in all my testing it looks like the
            // default events are all less than 3 keys, in some cases good data is being passed as a single key so
            // we can't just kill anything less than 3. need to do a check for event, if its longer than 2 or does
            // not include an event key we include it. that should catch custom events as well as custom data.
            for(var dk = 0; dk < w.dataLayer.length; dk++) {
                if(Object.keys(w.dataLayer[dk]).length > 2 || !("event" in w.dataLayer[dk])){
                  w.jstag.send(w.lio.stream, w.dataLayer[dk]);
                }
            }
            w.lio.integrations.gtmPull = 200;
          }
        }

        if(typeof w.__dataLayer !== 'undefined'){
          // same as above just old naming
          if(typeof w.__dataLayer.push === 'function'){
            for(var dk = 0; dk < w.__dataLayer.length; dk++) {
                if(Object.keys(w.__dataLayer[dk]).length > 2 || !("event" in w.__dataLayer[dk])){
                  w.jstag.send(w.lio.stream, w.__dataLayer[dk]);
                  w.lio.integrations.gtmPull = 200;
                }
            }
          }
        }
      }

      // qubit data layer
      if(w.lio.integrations.qubit === 0 && w.jstag && w.universal_variable && !w.lio.isBlacklisted("qubit")){
        w.jstag.send(w.lio.stream, w.universal_variable);
        w.lio.integrations.qubit = 200;
      }

      // has cookie whitelist
      if(w.lio.integrations.cookieData === 0 && w.lio.integrationsConfig.customCookieKeys){
        var val, payload = {};

        // iterate over keys and get cookie value
        for (var i = 0, n = w.lio.integrationsConfig.customCookieKeys; i < n.length; i++) {
          val = w.lio.getCookie(n[i]);
          if(val){
            payload[n[i]] = val;
          }
        }

        // if the object is empty pass the 201 response to signify no results
        if(Object.keys(payload).length !== 0){
          w.jstag.send(w.lio.stream, payload);
          w.lio.integrations.cookieData = 200;
        }else{
          w.lio.integrations.cookieData = 201;
        }
      }

      // lytics custom data query
      if(w.lio.integrations.customDataLayer === 0 && typeof w.lio.integrationsConfig.customDataKeys !== 'undefined' && w.lio.integrationsConfig.customDataKeys !== null){
        var customKeys = w.lio.integrationsConfig.customDataKeys;

        var outboundPayload = {
          lyticsDataLayer: {}
        };

        // handle legacy data
        var legacy = false;
        if(typeof customKeys === 'string'){
          legacy = true;
          customKeys = [customKeys];
        }

        // process custom vars
        for (var i = 0; i < customKeys.length; i++) {
          var exists = true;
          var key;
          var value = w;
          var parts = customKeys[i].split("."); // parse dot notation

          for (var p = 0; p < parts.length; p++) {
            key = parts[p];
            value = value[key];

            if(typeof value === 'undefined'){
              exists = false;
              break;
            }
          }

          if(exists){
            // for legacy accounts we allowed for a single string rather than array, in this case we do not want
            // to remap anything, rather just pass the full object in a jstag.send event as to not mess up mapping
            // for all new implementations we remap the data to a safe lytics data layer and send once
            if(legacy){
              w.jstag.send(w.lio.stream, value);
              w.lio.integrations.customDataLayer = 200;
            } else {
              outboundPayload.lyticsDataLayer[key] = value;
            }
          }
        }

        if(Object.getOwnPropertyNames(outboundPayload["lyticsDataLayer"]).length){
          w.jstag.send(w.lio.stream, outboundPayload);
          w.lio.integrations.customDataLayer = 200;
        }
      }

      if(typeof callback === 'function'){
        callback();
      }
    },
    checkPushIntegrations: function() {
      w.lio.integrationCounter++;

      // pathfora: if loaded before we need to add all the callbacks
      if (w.lio.integrations.pathfora === 0 && !w.lio.isBlacklisted('pathfora')) {
        if (w.pathfora) {
          if (w.pathfora.callbacks && w.pathfora.callbacks.length) {
            for (var i = w.pathfora.callbacks.length-1; i >= 0; i--) {
              w.pathfora.callbacks[i](w.lio.data);
              w.pathfora.callbacks.pop();
            }

            if (w.pathfora.callbacks.length) {
              w.lio.addDebugMessage('Unable to load pathfora callbacks.');
              w.lio.integrations.pathfora = 500;
            } else {
              w.lio.integrations.pathfora = 200;
            }
          } else {
            w.lio.integrations.pathfora = 201;
          }
        }
      }

      // optimizely: customTags must be pushed in prior to loading the optimizely tag, if tag already exists fail forever
      if(w.lio.integrations.optimizely === 0 && !w.lio.isBlacklisted('optimizely')){
        if(w.optimizely){
          w.lio.addDebugMessage("Optimizely loaded before Lytics. Unable to push segments.");
          w.lio.integrations.optimizely = 501;
        }else{
          w.optimizely = w.optimizely || [];
          w.optimizely.push(["customTag", w.lio.segmentsHash]);
          w.optimizely.push(["activate"]);
          w.lio.integrations.optimizely = 201;
        }
      }

      // optimizely is unique in that we have to push our audiences before their tag loads, the following will validate that they
      // have in fact received the audiences passed above for fail
      if(w.lio.integrations.optimizely === 201){
        if(w.optimizely && w.optimizely.data && w.optimizely.data.customTags){
          w.lio.integrations.optimizely = 200;
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          w.lio.addDebugMessage("Lytics segments failed to load in Optimizely.");
          w.lio.integrations.optimizely = 500;
        }
      }

      // facebook ads: the facebook ads tag must be initialized before our tag, try until it exists or we hit max fail count
      if(w.lio.integrations.facebookAds === 0 && w.lio.segmentsHash && !w.lio.isBlacklisted('facebook_ads')){
        if(w._fbq){
          w._fbq = w._fbq || [];
          var lh = {};

          // facebook only accepts strings as the value so we must use string of true here
          for (var p in w.lio.segmentsHash) { if(p !== "" && p !== "not_found"){lh[p] = "true";}}

          // only make the call if we have segments
          if(Object.keys(lh).length){
            w._fbq.push(["track", "Lytics Audiences", lh]);
          }

          w.lio.integrations.facebookAds = 200;
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          w.lio.addDebugMessage("Unable to add Facebook audience.");
          w.lio.integrations.facebookAds = 500;
        }
      }

      // krux user match: passes the lytics _uid to krux via usermatch.gif along with fixed partner id of "lytics"
      if(w.lio.integrations.krux === 0 && w.lio.integrationsConfig.allowKrux && !w.lio.isBlacklisted('krux')){
        var kruxBaseUrl = 'https://beacon.krxd.net/1x1_usermatch.gif?';
        var lyticsKruxPartnerId = 'lytics';
        var src = kruxBaseUrl + 'partner=' + lyticsKruxPartnerId + '&partner_uid=' + w.lio._uid;
        var img = document.createElement("img");
        img.src = src;
        document.body.appendChild(img);

        w.lio.integrations.krux = 200;
      }

      // lotame user match: passes the lytics _uid to lotame via sync pixel along with fixed client id and client_id_space
      if(w.lio.integrations.lotame === 0 && w.lio.integrationsConfig.allowLotame && !w.lio.isBlacklisted('lotame')){
        var lotameBaseUrl = 'https://sync.crwdcntrl.net';
        var lotameClientId = '13197';
        var lotameClientIdSapce = 'LYTC';
        var src = lotameBaseUrl + '/map/c=' + lotameClientId + '/tp=' + lotameClientIdSapce + '/tpid=' + w.lio._uid;
        var img = document.createElement("img");
        img.src = src;
        document.body.appendChild(img);

        w.lio.integrations.lotame = 200;
      }

      // google analytics: the google analtyics tag must be initialized before our tag, try until it exists or we hit max fail count
      if(w.lio.integrations.googleAnalyticsDimension === 0 && !w.lio.isBlacklisted('google_analytics_dimensions')){
        if(w.ga && w.liosetup && w.liosetup.gaSegmentDimension){
          w.ga('set', w.liosetup.gaSegmentDimension, w.lio.segmentsString);
          w.lio.integrations.googleAnalyticsDimension = 200;
          w.ga('send', 'event', 'lytics', 'segments', {'nonInteraction': 1});
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          if(w.liosetup && w.liosetup.gaSegmentDimension){
            w.lio.addDebugMessage("Unable to process google analytics custom dimension.");
            w.lio.integrations.googleAnalyticsDimension = 500;
          }
        }
      }

      if(w.lio.integrations.googleAnalyticsUserDimension === 0 && !w.lio.isBlacklisted('google_analytics_dimensions')){
        if(w.ga && w.liosetup && w.liosetup.gaUserDimension){
          w.ga('set', w.liosetup.gaUserDimension, w.lio._uid);
          w.lio.integrations.googleAnalyticsUserDimension = 200;
          w.ga('send', 'event', 'lytics', 'user_dimension', {'nonInteraction': 1});
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          if(w.liosetup && w.liosetup.gaUserDimension){
            w.lio.addDebugMessage("Unable to process google analytics custom user dimension.");
            w.lio.integrations.googleAnalyticsUserDimension = 500;
          }
        }
      }

      if(w.lio.integrations.googleAnalyticsUserid === 0 && !w.lio.isBlacklisted('google_analytics_dimensions')){
        if(w.ga && w.liosetup && w.liosetup.gaUserId){
          w.ga('set', '&uid', w.lio.getCookie("seerid"));
          w.lio.integrations.googleAnalyticsUserid = 200;
          w.ga('send', 'event', 'lytics', 'user_id', {'nonInteraction': 1});
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          if(w.liosetup && w.liosetup.gaUserId){
            w.lio.addDebugMessage("Unable to process google analytics user id.");
            w.lio.integrations.googleAnalyticsUserid = 500;
          }
        }
      }

      // google adwords integration handler
      if(w.lio.integrations.googleAdsIntegration === 0 && !w.lio.isBlacklisted('google_analytics_dimensions')){
        if(w.ga && w.lio.integrationsConfig && w.lio.integrationsConfig.googleAdsIntegration){
          // get the google web property
          ga(function() {
            var trackers = ga.getAll(),
                trackingIds = [];

            for (var i = 0, len = trackers.length; i < len; i++) {
              var id = trackers[i].get('trackingId'),
                  name = trackers[i].get('name');

              id && trackingIds.push({"name":name, "id":id});
            }

            for (i = 0; i < w.lio.integrationsConfig.googleAdsIntegration.length; i++) {
              var integrationsConfig = w.lio.integrationsConfig.googleAdsIntegration[i];

              for (var j = 0; j < trackingIds.length; j++) {
                if(integrationsConfig.web_property === trackingIds[j].id){
                  var name = trackingIds[j].name;
                  w.ga(name + '.require', 'displayfeatures');
                  w.ga(name + '.set', integrationsConfig.segments_dimension, w.lio.segmentsString);
                  w.ga(name + '.set', integrationsConfig.user_id_dimension, w.lio._uid);
                  w.ga(name + '.send', 'event', 'lytics', 'lytics_google_integration', {'nonInteraction': 1});
                }
              }
            }
          });
          w.lio.integrations.googleAdsIntegration = 200;
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          if(w.lio.integrationsConfig && w.lio.integrationsConfig.googleAdsIntegration){
            w.lio.addDebugMessage("Unable to process google ads integration.");
            w.lio.integrations.googleAdsIntegration = 500;
          }
        }
      }

      // google dfp integration handler: the lio.js script must be loaded in the <head></head> AFTER
      // the google dfp tags, so basically at the end of the document head
      if(w.lio.integrations.googleDFP === 0 && !w.lio.isBlacklisted('google_dfp')){
        if(w.googletag){
          w.googletag.cmd.push(function() {
            w.googletag.pubads().setTargeting("LyticsSegments", w.lio.segmentsArray);
          });

          if(!w.lio.sync){
            w.lio.addDebugMessage("Using Lytics async tag to integrate with DFP. No audiences passed.");
            w.lio.integrations.googleDFP = 201;
          }else{
            w.lio.integrations.googleDFP = 200;
          }
        }else{
          w.lio.addDebugMessage("GoogleDFP tags not loaded before Lytics. Unable to push segments.");
          w.lio.integrations.googleDFP = 501;
        }
      }

      // addthis: the addthis tag must be initialized before our tag, try until it exists or we hit max fail count
      if(w.lio.integrations.addthis === 0 && w.lio.segmentsHash && !w.lio.isBlacklisted('add_this')){
        if(w.addthis){
          var ckParts,
              ckNew = [];

          if(w.lio.getCookie('__attag')){
            ckParts = w.lio.getCookie('__attag').split(',');

            // remove the old segments from the cookie
            for (var i = 0; i < ckParts.length; i++) {
                if( ckParts[i].indexOf("lio:") > -1 ){
                  // do nothing, we are removing all of the lytics segment slugs
                }else{
                  ckNew.push(ckParts[i]);
                }
            }

            // add the current segments to the cookie in order to keep our tags updated without
            // disturbing other params passed outside of lytics we append lio: to each segment slug
            for (var lioKey in w.lio.segmentsHash) {
              ckNew.push('lio:'+lioKey);
            }
            w.lio.setCookie('__attag', ckNew.join(), '43829'); // 4829 = one month
          }

          for (var s in w.lio.segmentsHash) {
            if(s !== "" && s !== "not_found"){
              w.addthis.user.tag('lio:' + s);
            }
          }
          w.lio.integrations.addthis = 200;
        }else if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
          w.lio.addDebugMessage("Unable to add addthis segments.");
          w.lio.integrations.addthis = 500;
        }
      }

      // tealium data layer
      if(w.lio.integrations.tealium === 0 && w.jstag && w.utag_data && !w.lio.isBlacklisted("tealium")){
        w.jstag.send(w.lio.stream, w.utag_data);
        w.lio.integrations.tealium = 200;
      }

      // gtm data layer
      if(w.lio.integrations.gtmPush === 0 && w.jstag && (w.dataLayer || w.__dataLayer) && !w.lio.isBlacklisted("gtm")){
        if(typeof w.dataLayer !== 'undefined'){
          if(typeof w.dataLayer.push === 'function'){
            w.dataLayer.push({'lytics_segments': w.lio.segmentsHash});
            w.lio.integrations.gtmPush = 200;
          }
        }

        if(typeof w.__dataLayer !== 'undefined'){
          if(typeof w.__dataLayer.push === 'function'){
            w.__dataLayer.push({'lytics_segments': w.lio.segmentsHash});
            w.lio.integrations.gtmPush = 200;
          }
        }
      }

      // adroll event integration
      if(w.lio.integrations.adroll === 0 && w.jstag && w.__adroll && !w.lio.isBlacklisted("adroll")){
        w.lio.integrations.adroll = 200;
        for (var lioKey in w.lio.segmentsHash) {
          if (!w.lio.segmentsHash.hasOwnProperty(lioKey)){
            w.lio.integrations.adroll = 500;
            continue;
          }

          var segfmt = "lytics_" + lioKey;
          w.__adroll.record_user({"adroll_segments": segfmt});
        }
      }

      // hidden by default but handy to make sure we aren't checking too often
      if(w.lio.debug && !(w.lio.integrationCounter % 10)){
        console.log("tick...");
      }

      // if debug is on then output each of the error messages
      if(w.lio.integrationCounter >= w.lio.integrationCounterMax){
        clearInterval(w.lio.integrationTicker);
        if(w.lio.debug){
          if(!w.lio.debugMsgs.length){
            console.log("lytics integration completed without errors.");
          }else{
            for(var i = 0; i < w.lio.debugMsgs.length; i++){
              console.log(w.lio.debugMsgs[i]);
            }
          }
        }
      }
    },
    setCookie: function(name, value, minutes) {
      var date = new Date();
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      var expires = "expires=" + date.toUTCString();
      var path = "path=/";
      d.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + "; " + path + "; " + expires;
    },
    getCookie: function(name){
      var decodeSafe = function(val) {
        try {
          return decodeURIComponent(val);
        } catch (e) {
          return val;
        }
      };

      var parsedCookie = w.lio.cookie.split(';');

      for (var i = 0; i < parsedCookie.length; i++) {
        var cookiePair = parsedCookie[i];
        var index = cookiePair.indexOf('=');
        var compName = decodeSafe(cookiePair.substr(0, index).trim());
        var value = decodeSafe(cookiePair.substr(index+1).trim());

        if (compName === name) {
          return value
        }
      }

      return null;
    },
    getQueryParam: function(name){
      var url = window.location.search,
          regex = new RegExp("[?;&]" + name + "(=?)(.*?)([;&]|$)"),
          results = regex.exec(url);

      if (!results) return null;
      if (!results[1]) return true;

      return decodeURIComponent(results[2].replace(/\+/g, " "));
    },
    _uid: getIdResponse,
    // helper method to determine if user is member of segment
    inSegment: function(seg){
      return !!window.lio.segmentsHash[seg];
    },
    addPathfora: function(){
      if(w.lio.integrationsConfig){
        // dont load pathfora if its already been loaded
        if(typeof w.pathfora === 'undefined'){
          var pfScript = d.createElement('script');
            pfScript.async = 1;
            pfScript.type = 'text/javascript';
            pfScript.src = '//c.lytics.io/static/pathfora.min.js';
            pfScript.onload = w.lio.initPathfora;
          d.getElementsByTagName('head')[0].appendChild(pfScript);
        }else{
          w.lio.initPathfora();
        }
        w.lio.pathforaLoaded = true;
      }
    },
    useOrchestrate: function(){
      // if we are already on version > 1 this check has ran and doesnt need to run again
      if(w.lio.personalizeVer === 2) {
        return true;
      }

      // for beta we only activate orchestrate based on a substring match between a list of
      // strings and the current url
      var url = w.location.href;
      var whitelist = w.lio.integrationsConfig.orchestrateUrlWhitelist || [];

      for(var i = 0; i < whitelist.length; i++) {
        if(url.indexOf(whitelist[i]) !== -1) {
          w.lio.personalizeVer = 2;
          return true;
        }
      }

      return false
    },
    isVariationPreview: function() {
      return !!(w.lio.getQueryParam(w.lio.variationPreviewKey));
    },
    isExperiencePreview: function() {
      return !!(w.lio.getQueryParam(w.lio.experiencePreviewKey));
    },
    isPathforaPreview: function() {
      return w.lio.isVariationPreview() || w.lio.isExperiencePreview();
    },
    buildPreviewURL: function() {
      var previewId;
      var previewURL;

      if(w.lio.isExperiencePreview()) {
        previewId = w.lio.getQueryParam(w.lio.experiencePreviewKey);
        previewURL = w.lio.apiroot + '/api/experience/preview/' + w.ly_cid + '/' + previewId + '/config.js';
      } else {
        previewId = w.lio.getQueryParam(w.lio.variationPreviewKey);
        previewURL = w.lio.apiroot + '/api/program/campaign/variation/preview/' + w.ly_cid + '/' + previewId + '/config.js';
      }

      return previewURL;
    },
    registerExperiences: function() {
      var widgets = [];
      var experiences = (w.lio.personalize && w.lio.personalize.experiences) || [];
      
      // if we don't have any candidates there is nothing more to do
      if(typeof w._pfacfg === 'undefined' || typeof w._pfacfg.candidates === 'undefined') {
        return;
      }

      // if we do have candidates we need to cross reference those against the personalize
      // response to determine what is sent to pathfora
      for (var i = 0; i < experiences.length; i++) {
        var candidate = w._pfacfg.candidates[experiences[i].experience_id];

        if(typeof candidate !== 'undefined' && w.lio.segmentsHash.hasOwnProperty(candidate.segment)) {
          w.lio.integrations.orchestrate = 200; // store 200 code for debugging when we push a candidate
          widgets.push(candidate.widget);
        }
      }

      if(typeof w._pfacfg.variations !== 'undefined' && Object.keys(w._pfacfg.variations).length > 0) {
        // add legacy variations
        for (var id in w._pfacfg.variations) {
          if (typeof w._pfacfg.variations[id] !== 'undefined' && w.lio.segmentsHash.hasOwnProperty(w._pfacfg.variations[id].segment)) {
            widgets.push(w._pfacfg.variations[id].widget);
          }
        }

        // add legacy a/b tests
        if(typeof w._pfacfg.abTestConfigs !== 'undefined' && w._pfacfg.abTestConfigs.length > 0){
          w.pathfora.initializeABTesting(w._pfacfg.abTestConfigs);
        }
      }

      if(widgets.length > 0){
        w.lio.integrations.orchestrate = 201; // store 201 code for debugging when we init widgets
        w.pathfora.initializeWidgets(widgets, _pfacfg.acctcfg, {'priority': 'ordered'});
      }

      return;
    },
    initPathfora: function(){
      // if we have global styles load them first, then load the config
      if(w.lio.integrationsConfig.globalPathforaStylesheet !== ''){
        var link  = d.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = w.lio.integrationsConfig.globalPathforaStylesheet;
        d.getElementsByTagName('head')[0].appendChild(link);
      }

      if(w.lio.isPathforaPreview()){
        // build the preview url
        var previewURL = w.lio.buildPreviewURL();

        // if there is a preview id override all other pathfora configs
        var pfConfig = d.createElement('script');
          pfConfig.async = 1;
          pfConfig.type = 'text/javascript';
          pfConfig.src = previewURL;
        d.getElementsByTagName('body')[0].appendChild(pfConfig);
      }else{
        // determine if we are using orchestrate or not, if we are, load the candidates and register the proper ones
        if(w.lio.useOrchestrate()) {
          var pfConfig = d.createElement('script');
            pfConfig.async = 1;
            pfConfig.type = 'text/javascript';
            pfConfig.onload = w.lio.registerExperiences; // once candidates are loaded initialize based on personalize response
            pfConfig.src = w.lio.cdnroot + '/api/experience/candidate/'+w.ly_cid+'/config.js';
          d.getElementsByTagName('body')[0].appendChild(pfConfig);
        } else {
          // else fallback to legacy campaign config
          var pfConfig = d.createElement('script');
            pfConfig.async = 1;
            pfConfig.type = 'text/javascript';
            pfConfig.src = w.lio.cdnroot + '/api/program/campaign/config/'+w.ly_cid+'/config.js';
          d.getElementsByTagName('body')[0].appendChild(pfConfig);
        }
      }
    },
    keysForObject: Object.keys || function(obj) {
      var keys = [];

      for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
          keys.push(i);
        }
      }

      return keys;
    },
    flushCallbacks: function() {
      var fns = [];
      if(w.liosetup && w.liosetup.callback){
        // callbacks can either be an array of functions or a single function
        switch (typeof w.liosetup.callback) {
          case 'function':
            fns.push(w.liosetup.callback);
            break;
          case 'object':
            if (w.liosetup.callback.length) {
              fns = w.liosetup.callback;
            }
            break;
        }
      }

      w.lio.onDOMready(fns);
    },
    segmentscb: function(json) {
      // immediately unblock the jstag from sending events if the function doesnt
      // exist it either hasnt loaded or is legacy, set blockload to false on both
      // async config and main config to be safe
      if (w.jstag) {
        if (typeof  w.jstag.unblock == 'function') {
           w.jstag.unblock();
        }else{
          if(w.jstag.config){
            w.jstag.config.blockload = false;
          }
          if(w.jstag._c){
            w.jstag._c.blockload = false;
          }
        }
      }

      // make sure we didnt get an empty response
      if(json.data){
        // determine which response we are working with and maintain backwards compatability
        if(w.lio.useOrchestrate()) {
          w.lio.data = json.data.user; // set legacy lio.data to the user
          w.lio.personalize = json.data; // set the new personalize object
        } else {
          w.lio.data = json.data;
        }
      }

      if (w.lio.data && w.lio.data.segments) {
        var segList = w.lio.data.segments;
        for (var i = segList.length - 1; i >= 0; i--) {
          w.lio.segmentsHash[segList[i]] = segList[i];
          w.lio.segmentsArray.push(segList[i]);
        }
        w.lio.segmentsCookie = w.lio.segmentsHash;
        w.lio.segmentsString = w.lio.keysForObject(w.lio.segmentsHash).toString().replace(/,+/g, ',');

        // set the segments cookie if not blacklisted
        if(!w.lio.isBlacklisted("segments_cookie")){
          w.lio.setCookie("ly_segs", w.lio.segmentsHash, 15);
        }

        // handle callbacks if we have any
        w.lio.flushCallbacks();
      }

      w.lio.loaded = true;

      // start integration check, check immediately then every 100ms thereafter
      w.lio.checkPushIntegrations();
      w.lio.integrationTicker = setInterval(w.lio.checkPushIntegrations, w.lio.integrationTickerPace);

      // load pathfora if account allows for it
      // if we have already loaded pathfora do not load again (prevents multi cid duplicate loads)
      if(!w.lio.pathforaLoaded){
        if(w.lio.integrationsConfig && w.lio.integrationsConfig.allowPathfora && (w.lio.integrationsConfig.hasActiveCampaign || w.lio.isPathforaPreview())){
          w.lio.addPathfora();
        }
      }
    },
    getEntity: function(payload){
      var apiurl, requirepost = false;

      // just a note but in a future version it would be awesome to be able to pull in the datalayer variables be it
      // custom, tealium, gtm, etc so that the entity is as accurate as possible but that requires making some big
      // changes to our existing integrations and will be handled in separate pr

      // we only want to get the entity once so just return if we already have one
      if(w.lio.hasEntity){
        return;
      }

      // get the api url
      apiurl = w.lio.buildEntityURL('GET', payload);

      // thanks to browsers we have to check the url length and make sure its acceptable
      // if not we default to an iframe workaround
      if(apiurl.length > 2000){
        requirepost = true;
        apiurl = w.lio.buildEntityURL('POST', payload);
      }

      if(requirepost){
        w.lio.xssframe.post({
          url: apiurl,
          data: payload,
          timeout: 3000
        }, function(data) {
          if(data != null){
            var dataJSON = {};

            try {
              dataJSON = JSON.parse(data);
            }
            catch (e) {
              console.log('unable to parse entity response');
            }

            w.lio.segmentscb({data: dataJSON});
          } else {
            // return default entity
            w.lio.segmentscb({data: {
              segments: [
                'all',
                'not_found'
              ]
            }});
          }
        });

        w.lio.hasEntity = true;
      } else {
        var outlioScript = d.createElement('script');
        var head = d.getElementsByTagName('head')[0];
        outlioScript.async = 1;
        outlioScript.type = 'text/javascript';
        outlioScript.src = apiurl;
        outlioScript.onload = outlioScript.onerror = function() {
          head.removeChild(outlioScript);
        };
        head.appendChild(outlioScript);
        w.lio.hasEntity = true;
      }
    },
    xssframe: {
      post: function(req, callback) {
        callback = once(callback);
        var hostElement = document.body || document.head;
        var iframe = document.createElement('iframe');
        var reqOrigin = getOrigin(req.url);
        var timeout;
        iframe.style.display = 'none';
        iframe.src = req.url;
        iframe.onload = function() {
          iframe.onload = undefined;
          window.addEventListener('message', {
            handleEvent: function(event) {
              if (event.origin === reqOrigin) {
                window.removeEventListener('message', this);
                clearTimeout(timeout);
                hostElement.removeChild(iframe);
                callback(event.data);
              }
            }
          });
          var payload = (function(data) {
            try {
              return JSON.stringify(data);
            }
            catch (e) {}
          })(req.data);
          iframe.contentWindow.postMessage({ payload: payload }, reqOrigin);
        };
        hostElement.appendChild(iframe);
        timeout = setTimeout(function() {
          hostElement.removeChild(iframe);
          callback(null);
        }, req.timeout || 500);
        function getOrigin(url) {
          var parser = document.createElement('a');
          parser.href = url;
          return [parser.protocol, parser.host].join('//');
        }
        function once(callback) {
          var called = false;
          return function wrapper() {
            if (!called) {
              called = true;
              return callback.apply(null, [].slice.call(arguments));
            }
          }
        }
      }
    },
    buildEntityURL: function(method, payload){
      var urlparts = [];
      var queryparts = [];
      var endpoint;
      var field = '_uid';
      var value; 
      var encodedpayload; 
      var hasstate = false;

      // ensure method is either POST or GET
      if(method !== 'GET' && method !== 'POST'){
        throw new Error('buildEntityURL method unsupported');
      }

      // legacy implementations let us set a field and value client side so we need to check for and handle that
      if(w.liosetup && w.liosetup.field && w.liosetup.value){
        field = w.liosetup.field;
        value = w.liosetup.value;
      }

      // if the field is _uid and the value has not been set we use the current seerid cookie
      if(field === '_uid' && !value){
        value = w.lio._uid;
      }

      // encode the payload if there is one
      if(payload != null){
        try {
            hasstate = true;
            encodedpayload = encodeURIComponent(JSON.stringify(payload));
        }
        catch (e) {
            hasstate = false;
        }
      }


      // we now have two entity endpoints. if we are allowing orchestrate we need to use the latest personalize
      // api which is /api/personalize, otherwise we default to /me
      if(w.lio.useOrchestrate()){
        // set the endpoint based on method
        //    GET needs to include the jsonp callback
        //         /api/personalize/:accountid/:table/:fieldName/:fieldVal
        //    POST does not include the jsonp but it hits the /iframe endpoint
        //         /api/personalize/:accountid/:table/:fieldName/:fieldVal/iframe
        endpoint = 'api/personalize';

        urlparts = [
          w.lio.apiroot,
          endpoint,
          w.ly_cid,
          'user',
          field,
          value
        ];

        // if we are posting we need to use the xss frame work around
        if(method === 'POST'){
          urlparts.push('iframe');
        }

      } else {
        // set the endpoint based on method
        //    GET needs to include the jsonp callback
        //        /api/me/:accountid/:fieldName/:fieldVal
        //    POST does not include the jsonp but it hits the /me/iframe endpoint
        //        /api/me/iframe/:accountid/:fieldName/:fieldVal
        if(method === 'GET'){
          endpoint = 'api/me';
        } else {
          endpoint = 'api/me/iframe';
        }

        urlparts = [
          w.lio.apiroot,
          endpoint,
          w.ly_cid,
          field,
          value
        ];
      }

      // add fields if there is a whitelist
      if(w.lio.fields){
        queryparts.push('fields=' + w.lio.fields);
      }

      // we always want segments so add that to query
      queryparts.push('segments=true');

      // if we are passin a state we want to ensure we merge with existing entities
      if(hasstate){
        queryparts.push('mergestate=true');
      }

      // if we are using the GET method we need the jsonp callback and state as a query param
      if(method === 'GET'){
        queryparts.push('callback=window.lio.segmentscb');

        if(hasstate){
          queryparts.push('state=' + encodedpayload);
        }
      }

      // add a timestamp for cachebusting
      queryparts.push('ts=' + new Date().getTime());

      return urlparts.join('/').replace(/\/$/, '') + '?' + queryparts.join('&');
    }
  };

  // if we do not have a _uid at this point we aren't going to get one so mock one for personalize/me request(s)
  if(w.lio._uid == null || w.lio._uid === ''){
    w.lio._uid = ((1+Math.random())*0x10000).toString();
  }

  if (w.lio.getCookie("ly_segs")) {
    try {
      w.lio.segmentsCookie = JSON.parse(w.lio.getCookie("ly_segs"));
    }
    catch (e) {
      console.log('unable to parse segment cookie');
    }
  }

  // handle all pull related integrations so that they may be a part of the entity fetch state
  w.lio.checkPullIntegrations(function(){
    // accounts using personalize will have a temporary block on their send events
    // we need to get the full payload to send along with the /me call in order to
    // handle the first page view usecase / speed up processing
    if(w.jstag && w.jstag.mock){
      if( !!(w.jstag.config && w.jstag.config.blockload) || !!(w.jstag._c && w.jstag._c.blockload) ){
        w.jstag.mock(function(q){
          w.lio.getEntity(q.data);
        })
      }else{
        w.lio.getEntity();
      }
    }else{
      w.lio.getEntity();
    }
  });

}(document, window, "undefined" !== typeof getIdResponse ? getIdResponse : undefined));

      
      called = true;
    }
  }

  // ensure we have a _uid and then load outlio if allowed
  window.jstag.getid(continuation);

  // if the getid request hasn't resolved by 3 seconds time, give up
  setTimeout(continuation, 3000);
}

if(typeof window.jstag !== 'object'){
    // if jstag object doesnt exist we are loading sync
    // set master variable so we can block the outlio load
    window.liosetup = window.liosetup || {};
    window.liosetup.sync = true;

    // continue loading the main collection tag
    window.jstag = function() {
      var t = {
              _q: [],
              _c: {},
              ts: (new Date()).getTime(),
              ver: "2.0.0"
          },
          w = window,
          d = document,
          l = false,
          async = true,
          as = Array.prototype.slice;
      t.init = function(c) {
          t._c = c;

          // begin load of core tag
          // in > 2.0.0 this tag will handle loading io based on account
          // and no longer require changes to async tag
          if(!c.synchronous){
            t.loadtagmgr(c);
          }

          return this;
      };
      t.loadtagmgr = function(c){
        var newtag = document.createElement("script");
        newtag.type = "text/javascript", newtag.async = !0, newtag.src = c.url + "/api/tag/" + c.cid + "/lio.js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(newtag, i)
      };

      function chainable(fn) {
        return function() {
          fn.apply(this, arguments);
          return this;
        };
      }

      function queueStub() {
        var args = [ "ready" ].concat(as.call(arguments));
        return chainable(function() {
          args.push(as.call(arguments));
          this._q.push(args);
        });
      }

      t.ready = queueStub();
      t.send = queueStub("send");
      t.mock = queueStub("mock");
      t.identify = queueStub("identify");
      t.pageView = queueStub("pageView");
      t.bind = chainable(function() { t._q.push([e, as.call(arguments, 1)]); });
      t.block = chainable(function() { t._c.blockload = true; });
      t.unblock = chainable(function() { t._c.blockload = false; });

      return t;
    }();

    var initObj = window.liosetup.config || {};
    initObj.cid = "c71db31893a13b8dbeacfde75fb20cf5";
    initObj.url = "https://api.lytics.io" || "https://c.lytics.io";
    initObj.synchronous = true;
    initObj.min = false;

    // check for the cross domain cookie setting param
    if(typeof window.liosetup !== 'undefined' && window.liosetup.loadid !== undefined){
        initObj.loadid = window.liosetup.loadid;
    }

    // validate that we have url and cid or fail
    if( initObj.cid == "" || initObj.url == "" ){
        console.log("lytics javascript tag configured incorrectly, missing required url or cid")
    }else{
        window.jstag.init(initObj);
    }
}

// load the core collection library
// upon moving to >= 2.0.0 the jstag.load method was removed from the async tag
// so that the tag endpoint would control the loading, if that function exists we
// need to fallback to the legacy io.js
if(window.jstag && !window.jstag.isLoaded && window.jstag._c && typeof window.jstag.load !== 'function'){
    (function(d, w) {
        var filename,
            filepath,
            eventblock = false,
            majorversion = 1 || 1,
            minified = !!((w.jstag._c.min)),
            url = w.jstag._c.url || '//c.lytics.io';

        // determine filepath
        switch(majorversion){
          case 3:
            filepath = '/static/v3/latest/';
            break;
          case 2:
            filepath = '/static/v2/';
            break;
          default:
            filepath = '/static/';
        }

        // determine file output
        if(minified){
            filename = 'io.min.js';
        }else{
            filename = 'io.js';
        }

        // apply account level overrides
        if(eventblock){
            w.jstag._c.blockload = true;
        }

        var ioloader = d.createElement('script');
        ioloader.type = 'text/javascript';
        ioloader.src = url + filepath + filename;
        ioloader.onload = w.__jstag_onload;
        d.getElementsByTagName('head')[0].appendChild(ioloader);
    }(document, window));
} else {
  // we are on an ancient version of that tag that still loads io.js in the wrapper so we need to fallback
  // to the jstag.ready method
  if(window.jstag && window.jstag.ready){
    window.jstag.ready(window.__jstag_onload)
  }
}