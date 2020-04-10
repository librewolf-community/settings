// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : General Settings 1/3
// Bench Diff : +100/5000
// >>>>>>>>>>>>>>>>>>>>>>

// Pref : Onboarding tour disabled because of included telemetry
// This extension has already been removed. This setting is here to disable it just in case it
// comes back or for users using the script outside the bundle.
lockPref("browser.onboarding.notification.finished", true);
lockPref("browser.onboarding.tour.onboarding-tour-customize.completed", true);
lockPref("browser.onboarding.tour.onboarding-tour-performance.completed", true);

// Pref :
lockPref("devtools.onboarding.telemetry.logged", false);

// Pref :
lockPref("services.sync.engine.addresses.available", false);

// Pref :
lockPref("browser.bookmarks.restore_default_bookmarks", false);

// Pref :
lockPref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);

// Pref : Caching for integrated PDF
lockPref("pdfjs.enabledCache.state", false);

// Pref :
lockPref("pref.general.disable_button.default_browser", false);
lockPref("pref.privacy.disable_button.view_passwords", false);

// Pref :
lockPref("identity.mobilepromo.android", "");

// Pref :
lockPref("extensions.systemAddon.update.url", "");

// Pref :
lockPref("datareporting.healthreport.infoURL", "");

// Pref :
lockPref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 0);
lockPref("browser.urlbar.searchSuggestionsChoice", false);
lockPref("browser.urlbar.timesBeforeHidingSuggestionsHint", 0);

// Pref :
lockPref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);

// Pref :
lockPref("app.feedback.baseURL", "");

// Pref :
lockPref("app.normandy.enabled", false);
lockPref("app.normandy.api_url", "");
lockPref("app.normandy.first_run", false);
lockPref("app.normandy.user_id", "");

// Pref :
lockPref("app.releaseNotesURL", "");

// Pref :
lockPref("app.update.auto", false);
defaultPref("extensions.update.autoUpdateDefault", false);
lockPref("app.update.staging.enabled", false);
lockPref("app.update.silent", false);
lockPref("app.update.lastUpdateTime.telemetry_modules_ping", 0);
lockPref("app.update.url.details", "");
lockPref("app.update.url.manual", "");

// Pref :
lockPref("app.vendorURL", "");

// Pref :
lockPref("breakpad.reportURL", "");

// Pref :
lockPref("browser.chrome.errorReporter.submitUrl", "");
lockPref("browser.chrome.errorReporter.enabled", false);

// Pref :
lockPref("browser.ping-centre.staging.endpoint", "");
lockPref("browser.ping-centre.telemetry", false);

// Pref : Google Safe Browsing (Blocks dangerous and deceptive contents)

//    browser.safebrowsing.downloads.enabled                            true
  //  browser.safebrowsing.downloads.remote.block_potentially_unwanted  true
 //   browser.safebrowsing.downloads.remote.block_uncommon              true
 //   browser.safebrowsing.malware.enabled                              true
 //   browser.safebrowsing.phishing.enabled                             true

lockPref("browser.safebrowsing.id", "");
lockPref("browser.safebrowsing.provider.google4.pver", "");
lockPref("browser.safebrowsing.provider.mozilla.pver", "");
lockPref("browser.safebrowsing.allowOverride", false);
lockPref("browser.safebrowsing.blockedURIs.enabled", false);
lockPref("browser.safebrowsing.downloads.enabled", false);
lockPref("browser.safebrowsing.downloads.remote.block_dangerous", false);
lockPref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
lockPref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
lockPref("browser.safebrowsing.downloads.remote.block_uncommon", false);
lockPref("browser.safebrowsing.downloads.remote.enabled", false);
lockPref("browser.safebrowsing.downloads.remote.url", "");
lockPref("browser.safebrowsing.malware.enabled", false);
lockPref("browser.safebrowsing.passwords.enabled", false);
lockPref("browser.safebrowsing.phishing.enabled", false);
lockPref("browser.safebrowsing.provider.google4.advisoryURL", "");
lockPref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
lockPref("browser.safebrowsing.provider.google4.dataSharingURL", "");
lockPref("browser.safebrowsing.provider.google4.gethashURL", "");
lockPref("browser.safebrowsing.provider.google4.lists", "");
lockPref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
lockPref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
lockPref("browser.safebrowsing.provider.google4.reportURL", "");
lockPref("browser.safebrowsing.provider.google4.updateURL", "");
lockPref("browser.safebrowsing.provider.google4.lastupdatetime", "");
lockPref("browser.safebrowsing.provider.google4.nextupdatetime", "");
lockPref("browser.safebrowsing.provider.google.advisoryURL", "");
lockPref("browser.safebrowsing.provider.google.gethashURL", "");
lockPref("browser.safebrowsing.provider.google.lastupdatetime", "");
lockPref("browser.safebrowsing.provider.google.lists", "");
lockPref("browser.safebrowsing.provider.google.nextupdatetime", "");
lockPref("browser.safebrowsing.provider.google.pver", "");
lockPref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
lockPref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
lockPref("browser.safebrowsing.provider.google.reportURL", "");
lockPref("browser.safebrowsing.provider.google.updateURL", "");
lockPref("browser.safebrowsing.provider.mozilla.gethashURL", "");
lockPref("browser.safebrowsing.provider.mozilla.lastupdatetime", "");
lockPref("browser.safebrowsing.provider.mozilla.nextupdatetime", "");
lockPref("browser.safebrowsing.provider.mozilla.updateURL", "");
lockPref("browser.safebrowsing.reportPhishURL", "");

// Pref :
lockPref("browser.search.suggest.enabled", false);

// Pref :
lockPref("captivedetect.canonicalURL", "");

// Pref :
lockPref("datareporting.policy.firstRunURL", "");

// Pref :
lockPref("devtools.devedition.promo.url", "");
lockPref("devtools.devices.url", "");
lockPref("devtools.gcli.imgurUploadURL", "");
lockPref("devtools.gcli.jquerySrc", "");
lockPref("devtools.gcli.underscoreSrc", "");
lockPref("devtools.telemetry.supported_performance_marks", "");
// Fix ESR Devtools
//lockPref("devtools.telemetry.tools.opened.version", "");
// Default {"DEVTOOLS_SCREEN_RESOLUTION_ENUMERATED_PER_USER":"60.4.0"}

// Pref :
lockPref("dom.battery.enabled", false);

// Pref :
lockPref("dom.permissions.enabled", false);

// Pref : Maximum popups that may be launched at the same time
lockPref("dom.popup_maximum", 4);

// Pref :
lockPref("dom.registerProtocolHandler.insecure.enabled", true);

// Pref :
lockPref("extensions.blocklist.detailsURL", "");
lockPref("extensions.blocklist.itemURL", "");

// Pref : Block list url disabled
// gHacks tunes this to minimize privacy issues. its complitely disabled here
// Disabled complitely
lockPref("extensions.blocklist.url", "");

// Pref :
defaultPref("extensions.update.background.url", "");

// Pref :
defaultPref("extensions.getAddons.showPane", false);

// Pref :
lockPref("extensions.webservice.discoverURL", "");

// Pref :
lockPref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
lockPref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
lockPref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");

// Pref :
lockPref("geo.enabled", false);
lockPref("geo.wifi.uri", "");

// Pref :
lockPref("identity.fxaccounts.auth.uri", "");
lockPref("identity.fxaccounts.remote.oauth.uri", "");
lockPref("identity.fxaccounts.remote.profile.uri", "");
lockPref("identity.mobilepromo.ios", "");

// Pref :
lockPref("layout.css.visited_links_enabled", false);

// Pref :
lockPref("lpbmode.enabled", true);

// Pref :
lockPref("mailnews.messageid_browser.url", "");
lockPref("mailnews.mx_service_url", "");

// Pref : 0608 : disable predictor / prefetching (FF48+)
// Network predictor load pages before they are opened
// with mouse hover for example
lockPref("network.predictor.enabled", false);
lockPref("network.predictor.cleaned-up", true);
lockPref("network.predictor.enable-prefetch", false);

// Pref :
lockPref("plugins.crash.supportUrl", "");

// Pref : Sync prefs
lockPref("services.sync.clients.lastSync", "0");
lockPref("services.sync.clients.lastSyncLocal", "0");
lockPref("services.sync.declinedEngines", "");
lockPref("services.sync.enabled", false);
lockPref("services.sync.globalScore", 0);
lockPref("services.sync.jpake.serverURL", "");
lockPref("services.sync.migrated", true);
lockPref("services.sync.nextSync", 0);
lockPref("services.sync.prefs.sync.browser.safebrowsing.downloads.enabled", false);
lockPref("services.sync.prefs.sync.browser.safebrowsing.malware.enabled", false);
lockPref("services.sync.prefs.sync.browser.safebrowsing.passwords.enabled", false);
lockPref("services.sync.prefs.sync.browser.safebrowsing.phishing.enabled", false);
lockPref("services.sync.serverURL", "");
lockPref("services.sync.tabs.lastSync", "0");
lockPref("services.sync.tabs.lastSyncLocal", "0");

// Pref :
lockPref("sync.enabled", false);

// Pref :
lockPref("sync.jpake.serverURL", "");

// Pref :
lockPref("sync.serverURL", "");

// Pref :
lockPref("toolkit.crashreporter.infoURL", "");

// Pref : Disable telemetry
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.updatePing.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.cachedClientID", "");
lockPref("toolkit.telemetry.enabled", false);
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
lockPref("toolkit.telemetry.hybridContent.enabled", false);
lockPref("toolkit.telemetry.infoURL", "");
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.previousBuildID", "");
lockPref("toolkit.telemetry.prompted", 2); //Setting seems to still exist
lockPref("toolkit.telemetry.rejected", true);
lockPref("toolkit.telemetry.reportingpolicy.firstRun", false);
lockPref("toolkit.telemetry.server", "data:,");
lockPref("toolkit.telemetry.server_owner", "");
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.coverage.opt-out", true);

// Pref :
lockPref("webextensions.storage.sync.serverURL", "");

// Pref :
lockPref("extensions.screenshots.upload-disabled", true);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : General Settings 2/3
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref : Referer: ALL: control the amount of information to send
// 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
lockPref("network.http.referer.trimmingPolicy", 0);

// Pref : Close tab
lockPref("browser.tabs.closeTabByDblclick", true);

// Pref : Disable collection/sending of the health report (healthreport.sqlite*)
// https://support.mozilla.org/en-US/kb/firefox-health-report-understand-your-browser-perf
// https://gecko.readthedocs.org/en/latest/toolkit/components/telemetry/telemetry/preferences.html
lockPref("datareporting.healthreport.uploadEnabled", false);
lockPref("datareporting.policy.dataSubmissionEnabled", false);

// Pref : Disable right-click menu manipulation via JavaScript (disabled)
lockPref("dom.event.contextmenu.enabled", false);

// Pref : Disable clipboard event detection (onCut/onCopy/onPaste) via Javascript
// Disabling clipboard events breaks Ctrl+C/X/V copy/cut/paste functionaility in
// JS-based web applications (Google Docs etc.)
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/dom.event.clipboardevents.enabled
lockPref("dom.event.clipboardevents.enabled", false);

// Pref : Force Punycode for Internationalized Domain Names
// http://kb.mozillazine.org/Network.IDN_show_punycode
// https://www.xudongz.com/blog/2017/idn-phishing/
// https://wiki.mozilla.org/IDN_Display_Algorithm
// https://en.wikipedia.org/wiki/IDN_homograph_attack
// https://www.mozilla.org/en-US/security/advisories/mfsa2017-02/
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.6
lockPref("network.IDN_show_punycode", true);

// Pref : Disable Pocket
// https://support.mozilla.org/en-US/kb/save-web-pages-later-pocket-firefox
// https://github.com/pyllyukko/user.js/issues/143
lockPref("extensions.pocket.enabled", false);
lockPref("extensions.pocket.site", "");
lockPref("extensions.pocket.oAuthConsumerKey", "");
lockPref("extensions.pocket.api", "");

// Pref : Disable downloading homepage snippets/messages from Mozilla
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_mozilla-content
// https://wiki.mozilla.org/Firefox/Projects/Firefox_Start/Snippet_Service
lockPref("browser.aboutHomeSnippets.updateUrl", "");

// Pref : Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
// Already enforced with 'privacy.resistFingerprinting' ?
lockPref("general.buildID.override", "20100101");
lockPref("browser.startup.homepage_override.buildID", "20100101");

// Pref : Disable pinging URIs specified in HTML <a> ping= attributes
// http://kb.mozillazine.org/Browser.send_pings
lockPref("browser.send_pings", false);

// Pref : When browser pings are enabled, only allow pinging the origin page's host
// http://kb.mozillazine.org/Browser.send_pings.require_same_host
lockPref("browser.send_pings.require_same_host", true);

// Pref : Do not download URLs for the offline cache
// http://kb.mozillazine.org/Browser.cache.offline.enable
lockPref("browser.cache.offline.enable", false);

// Pref : Disable prefetching of <link rel="next"> URLs
// http://kb.mozillazine.org/Network.prefetch-next
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Is_there_a_preference_to_disable_link_prefetching.3F
// Link prefetching is when a webpage hints to the browser that certain pages are likely to be visited,
// so the browser downloads them immediately so they can be displayed immediately when the user requests it.
lockPref("network.prefetch-next", false);

// Pref : Disable speculative pre-connections
// Disable prefetch link on hover.
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_speculative-pre-connections
// https://bugzilla.mozilla.org/show_bug.cgi?id=814169
lockPref("network.http.speculative-parallel-limit", 0);

// Pref : WebSockets is a technology that makes it possible to open an interactive communication
// session between the user's browser and a server. (May leak IP when using proxy/VPN)
lockPref("media.peerconnection.enabled", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : General Settings 3/3
// Bench Diff : -40/5000
// >>>>>>>>>>>>>>>>>>>>>

// Pref : Disable DOM timing API
// https://wiki.mozilla.org/Security/Reviews/Firefox/NavigationTimingAPI
// https://www.w3.org/TR/navigation-timing/#privacy
lockPref("dom.enable_performance", false); //Deprecated Active
lockPref("dom.enable_performance_navigation_timing", false);

// Pref : Make sure the User Timing API does not provide a new high resolution timestamp
// https://trac.torproject.org/projects/tor/ticket/16336
// https://www.w3.org/TR/2013/REC-user-timing-20131212/#privacy-security
lockPref("dom.enable_user_timing", false);

// Pref : Disable Web Audio API
// https://bugzilla.mozilla.org/show_bug.cgi?id=1288359
// Avoid fingerprinting
lockPref("dom.webaudio.enabled", false);

// Pref : When geolocation is enabled, don't log geolocation requests to the console
lockPref("geo.wifi.logging.enabled", true);

// Pref : Disable "beacon" asynchronous HTTP transfers (used for analytics)
// https://developer.mozilla.org/en-US/docs/Web/API/navigator.sendBeacon
lockPref("beacon.enabled", false);

// Pref : Disable speech recognition
// https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
// https://wiki.mozilla.org/HTML5_Speech_API
lockPref("media.webspeech.recognition.enable", false);

// Pref : Disable virtual reality devices APIs
// https://developer.mozilla.org/en-US/Firefox/Releases/36#Interfaces.2FAPIs.2FDOM
// https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API
lockPref("dom.vr.enabled", false);

// Pref : Disable vibrator API
lockPref("dom.vibrator.enabled", false);

// Pref : Disable GeoIP lookup on your address to set default search engine region
// https://trac.torproject.org/projects/tor/ticket/16254
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
lockPref("browser.search.region", "US");
lockPref("browser.search.geoip.url", "");
lockPref("browser.search.geoSpecificDefaults.url", "");

// Pref : Don't use Mozilla-provided location-specific search engines
lockPref("browser.search.geoSpecificDefaults", false);

// Pref : Don't trim HTTP from URLs in the address bar.
// https://bugzilla.mozilla.org/show_bug.cgi?id=665580
lockPref("browser.urlbar.trimURLs", false);

// Pref : Don't try to guess domain names when entering an invalid domain name in URL bar
// http://www-archive.mozilla.org/docs/end-user/domain-guessing.html
lockPref("browser.fixup.alternate.enabled", false);

// Pref : When browser.fixup.alternate.enabled is enabled, strip password from 'user:password@...' URLs
// https://github.com/pyllyukko/user.js/issues/290#issuecomment-303560851
lockPref("browser.fixup.hide_user_pass", true);

// Pref : Don't monitor OS online/offline connection state
// https://trac.torproject.org/projects/tor/ticket/18945
lockPref("network.manage-offline-status", false);

// Pref : Set File URI Origin Policy
// http://kb.mozillazine.org/Security.fileuri.strict_origin_policy
// CIS Mozilla Firefox 24 ESR v1.0.0 - 3.8
lockPref("security.fileuri.strict_origin_policy", true);

// Pref : Disable SVG in OpenType fonts
// https://wiki.mozilla.org/SVGOpenTypeFonts
// https://github.com/iSECPartners/publications/tree/master/reports/Tor%20Browser%20Bundle
lockPref("gfx.font_rendering.opentype_svg.enabled", false);

// Pref : Enable only whitelisted URL protocol handlers
// Disabling non-essential protocols breaks all interaction with custom protocols such
// as mailto:, irc:, magnet: ... and breaks opening third-party mail/messaging/torrent/...
// clients when clicking on links with these protocols
lockPref("network.protocol-handler.warn-external-default",true);
lockPref("network.protocol-handler.external.http",false);
lockPref("network.protocol-handler.external.https",false);
lockPref("network.protocol-handler.external.javascript",false);
lockPref("network.protocol-handler.external.moz-extension",false);
lockPref("network.protocol-handler.external.ftp",false);
lockPref("network.protocol-handler.external.file",false);
lockPref("network.protocol-handler.external.about",false);
lockPref("network.protocol-handler.external.chrome",false);
lockPref("network.protocol-handler.external.blob",false);
lockPref("network.protocol-handler.external.data",false);
lockPref("network.protocol-handler.expose-all",false);
lockPref("network.protocol-handler.expose.http",true);
lockPref("network.protocol-handler.expose.https",true);
lockPref("network.protocol-handler.expose.javascript",true);
lockPref("network.protocol-handler.expose.moz-extension",true);
lockPref("network.protocol-handler.expose.ftp",true);
lockPref("network.protocol-handler.expose.file",true);
lockPref("network.protocol-handler.expose.about",true);
lockPref("network.protocol-handler.expose.chrome",true);
lockPref("network.protocol-handler.expose.blob",true);
lockPref("network.protocol-handler.expose.data",true);

// Pref : Ensure there is a security delay when installing add-ons (milliseconds)
// http://kb.mozillazine.org/Disable_extension_install_delay_-_Firefox
// http://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
lockPref("security.dialog_enable_delay", 700);

// Pref : Opt-out of add-on metadata updates
// https://blog.mozilla.org/addons/how-to-opt-out-of-add-on-metadata-updates/
defaultPref("extensions.getAddons.cache.enabled", false);

// Pref : Opt-out of theme (Persona) updates
// https://support.mozilla.org/t5/Firefox/how-do-I-prevent-autoamtic-updates-in-a-50-user-environment/td-p/144287
lockPref("lightweightThemes.update.enabled", false);
lockPref("lightweightThemes.persisted.headerURL", false);
lockPref("lightweightThemes.persisted.footerURL", false);

// Pref : Disable Flash Player NPAPI plugin
// http://kb.mozillazine.org/Flash_plugin
lockPref("plugin.state.flash", 0);

// Pref : Disable sending Flash Player crash reports
lockPref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// Pref : When Flash Player crash reports are enabled, don't send the visited URL in the crash report
lockPref("dom.ipc.plugins.reportCrashURL", false);

// Pref : Disable Shumway (Mozilla Flash renderer)
// https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Shumway
lockPref("shumway.disabled", true);

// Pref : Disable Gnome Shell Integration NPAPI plugin
lockPref("plugin.state.libgnome-shell-browser-plugin", 0);

// Pref : Enable click-to-play plugin
// https://wiki.mozilla.org/Firefox/Click_To_Play
// https://blog.mozilla.org/security/2012/10/11/click-to-play-plugins-blocklist-style/
lockPref("plugins.click_to_play", true);
lockPref("plugin.sessionPermissionNow.intervalInMinutes", 0);

// Pref : Update addons automatically
// https://blog.mozilla.org/addons/how-to-turn-off-add-on-updates/
defaultPref("extensions.update.enabled", false);

// Pref : Enable add-on and certificate blocklists (OneCRL) from Mozilla
// Updated at interval defined in extensions.blocklist.interval (default: 86400)
lockPref("extensions.blocklist.enabled", false);

// Pref : Disable system add-on updates (hidden & always-enabled add-ons from Mozilla)
lockPref("extensions.systemAddon.update.enabled", false);

// Pref : Disable WebIDE Web Debug
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
lockPref("devtools.webide.enabled", false);
lockPref("devtools.webide.autoinstallADBExtension", false); // [FF64+]
lockPref("devtools.remote.adb.extensionURL", ""); // [FF64+]
lockPref("devtools.remote.adb.extensionID", ""); // default adb@mozilla.org [FF64+]

// Pref : Disable remote debugging
// https://developer.mozilla.org/en-US/docs/Tools/Remote_Debugging/Debugging_Firefox_Desktop
// https://developer.mozilla.org/en-US/docs/Tools/Tools_Toolbox#Advanced_settings
lockPref("devtools.debugger.force-local", true);

// Pref : Disallow Necko to do A/B testing
// https://trac.torproject.org/projects/tor/ticket/13170
lockPref("network.allow-experiments", false);

// Pref : Disable sending reports of tab crashes to Mozilla (about:tabcrashed), don't
// nag user about unsent crash reports
// https://hg.mozilla.org/mozilla-central/file/tip/browser/app/profile/firefox.js
lockPref("browser.tabs.crashReporting.sendReport", false);
lockPref("browser.crashReports.unsubmittedCheck.enabled", false);
lockPref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Pref : Disable SHIELD
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
lockPref("app.shield.optoutstudies.enabled", false);

// Pref : Disable new tab tile ads, preload, and Activity Stream
// http://www.thewindowsclub.com/disable-remove-ad-tiles-from-firefox
// http://forums.mozillazine.org/viewtopic.php?p=13876331#p13876331
// https://wiki.mozilla.org/Firefox/Activity_Stream
// https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories",	false);
lockPref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
lockPref("browser.newtabpage.activity-stream.showSponsored", false);
lockPref("browser.newtabpage.activity-stream.aboutHome.enabled", false);
lockPref("browser.newtabpage.activity-stream.asrouter.messageProviders", "");
lockPref("browser.newtabpage.activity-stream.asrouter.devtoolsEnableds", true);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.feeds.snippets", false);
lockPref("browser.newtabpage.activity-stream.disableSnippets", true);
lockPref("browser.newtabpage.activity-stream.default.sites", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.config", "");
lockPref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
lockPref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false);
lockPref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
lockPref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
lockPref("browser.newtabpage.activity-stream.feeds.places", false);
lockPref("browser.newtabpage.activity-stream.feeds.systemtick", false);
lockPref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
lockPref("browser.newtab.preload", false);

// Pref : Disable "Show search suggestions in location bar results"
lockPref("browser.urlbar.suggest.searches", false);
lockPref("browser.urlbar.userMadeSearchSuggestionsChoice", true);

// Pref : Never check for updates to search engines
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_auto-update-checking
lockPref("browser.search.update", false);

// Pref : Disable automatic captive portal detection (Firefox >= 52.0)
// https://support.mozilla.org/en-US/questions/1157121
lockPref("network.captive-portal-service.enabled", false);

// Pref : Disallow NTLMv1
// https://bugzilla.mozilla.org/show_bug.cgi?id=828183
lockPref("network.negotiate-auth.allow-insecure-ntlm-v1", false);
// it is still allowed through HTTPS.
lockPref("network.negotiate-auth.allow-insecure-ntlm-v1-https", false);

// Pref : Disable formless login capture
// https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
lockPref("signon.formlessCapture.enabled", false);

// Pref : Delete temporary files on exit
// https://bugzilla.mozilla.org/show_bug.cgi?id=238789
lockPref("browser.helperApps.deleteTempFileOnExit", true);

// Pref : Do not create screenshots of visited pages (relates to the "new tab page" feature)
// https://support.mozilla.org/en-US/questions/973320
// https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.pagethumbnails.capturing_disabled
lockPref("browser.pagethumbnails.capturing_disabled", true);
