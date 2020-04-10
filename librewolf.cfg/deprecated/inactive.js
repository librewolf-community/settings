// - Disabled - Deprecated Main -------------------------------------------------------------------

// Pref : Other old safebrowsing not used
//lockPref("browser.safebrowsing.appRepURL", "");
//lockPref("browser.safebrowsing.enabled", false);
//lockPref("browser.safebrowsing.gethashURL", "");
//lockPref("browser.safebrowsing.malware.reportURL", "");
//lockPref("browser.safebrowsing.provider.google.appRepURL", "");
//lockPref("browser.safebrowsing.reportErrorURL", "");
//lockPref("browser.safebrowsing.reportGenericURL", "");
//lockPref("browser.safebrowsing.reportMalwareErrorURL", "");
//lockPref("browser.safebrowsing.reportMalwareMistakeURL", "");
//lockPref("browser.safebrowsing.reportMalwareURL", "");
//lockPref("browser.safebrowsing.reportPhishMistakeURL", "");
//lockPref("browser.safebrowsing.reportURL", "");
//lockPref("browser.safebrowsing.updateURL", "");

// Pref : 1031: disable favicons in tabs and new bookmarks - merged with browser.chrome.site_icons
// [-] https://bugzilla.mozilla.org/1453751
// lockPref("browser.chrome.favicons", false);

// Pref : Don't use OS values to determine locale, force using Firefox locale setting
// http://kb.mozillazine.org/Intl.locale.matchOS
// Disabled to make resistFingerprinting efficient
//lockPref("intl.locale.matchOS", false);

// Pref : 1601: disable referer from SSL Websites
// [-] https://bugzilla.mozilla.org/1308725
//lockPref("network.http.sendSecureXSiteReferrer", false);

// Pref : 2030: disable auto-play of HTML5 media - replaced by media.autoplay.default
// [WARNING] This may break video playback on various sites
// [-] https://bugzilla.mozilla.org/1470082
// Still active for ESR60.x but not important
//lockPref("media.autoplay.enabled", false);

// Pref : 1007: disable randomized FF HTTP cache decay experiments
// [1] https://trac.torproject.org/projects/tor/ticket/13575
// [-] https://bugzilla.mozilla.org/1430197
//lockPref("browser.cache.frecency_experiment", -1);

// Pref : 1606: set the default Referrer Policy - replaced by network.http.referer.defaultPolicy
// [-] https://bugzilla.mozilla.org/587523
//lockPref("network.http.referer.userControlPolicy", 3); // (FF53-FF58) default: 3

// Pref : 2704: set cookie lifetime in days (see 2703)
// [-] https://bugzilla.mozilla.org/1457170
// lockPref("network.cookie.lifetime.days", 90); // default: 90

// Pref : 2604: (25+) disable page thumbnails - replaced by browser.pagethumbnails.capturing_disabled
// [-] https://bugzilla.mozilla.org/897811
//lockPref("pageThumbs.enabled", false);

// - Disabled - Default is same -------------------------------------------------------------------
// This is generally a bad idea: if FF disables something due to a security concern, the
// end user who doesn't keep up to date with changes (IF they do update) would be screwed over
// Thanks to @Thorin-Oakenpants

// Pref : Display a notification bar when websites offer data for offline use
// http://kb.mozillazine.org/Browser.offline-apps.notify
//lockPref("browser.offline-apps.notify", true); //Default true

// Pref : Enable Subresource Integrity
// https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
// https://wiki.mozilla.org/Security/Subresource_Integrity
//lockPref("security.sri.enable", true); //Default true

// Pref : Enable GCM ciphers (TLSv1.2 only)
// https://en.wikipedia.org/wiki/Galois/Counter_Mode
//lockPref("security.ssl3.ecdhe_ecdsa_aes_128_gcm_sha256", true); // Pref : 0xc02b //Default true

// Pref : Enable ciphers with ECDHE and key size > 128bits
//lockPref("security.ssl3.ecdhe_ecdsa_aes_256_sha", true); // Pref : 0xc00a //Default true

// Pref : Enable ChaCha20 and Poly1305 (Firefox >= 47)
// https://www.mozilla.org/en-US/firefox/47.0/releasenotes/
// https://tools.ietf.org/html/rfc7905
// https://bugzilla.mozilla.org/show_bug.cgi?id=917571
// https://bugzilla.mozilla.org/show_bug.cgi?id=1247860
// https://cr.yp.to/chacha.html
//lockPref("security.ssl3.ecdhe_ecdsa_chacha20_poly1305_sha256", true); //Default true
//lockPref("security.ssl3.ecdhe_rsa_chacha20_poly1305_sha256", true); //Default true

// Pref : Enable GCM ciphers (TLSv1.2 only)
// https://en.wikipedia.org/wiki/Galois/Counter_Mode
//lockPref("security.ssl3.ecdhe_rsa_aes_128_gcm_sha256", true); // Pref : 0xc02f //Default true

// Pref : Enable ciphers with ECDHE and key size > 128bits
//lockPref("security.ssl3.ecdhe_rsa_aes_256_sha", true); // Pref : 0xc014 //Default true

// - Disabled - Dumped Deprecated From (gHacks, Check user.js for description) --------------------

//lockPref("general.useragent.locale", "en-US");
//lockPref("browser.backspace_action", 2);
//lockPref("browser.bookmarks.showRecentlyBookmarked", false);
//lockPref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
//lockPref("browser.ctrlTab.previews", true);
//lockPref("browser.formautofill.enabled", false);
//lockPref("browser.formfill.saveHttpsForms", false);
//lockPref("browser.fullscreen.animate", false);
//lockPref("browser.history.allowPopState", false);
//lockPref("browser.history.allowPushState", false);
//lockPref("browser.history.allowReplaceState", false);
//lockPref("browser.newtabpage.introShown", true);
//lockPref("browser.pocket.api", "");
//lockPref("browser.pocket.oAuthConsumerKey", "");
//lockPref("browser.pocket.site", "");
//lockPref("browser.polaris.enabled", false);
//lockPref("browser.search.showOneOffButtons", false);
//lockPref("browser.selfsupport.enabled", false);
//lockPref("browser.sessionstore.privacy_level_deferred", 2);
//lockPref("browser.tabs.warnOnClose", false);
//lockPref("browser.tabs.warnOnCloseOtherTabs", false);
//lockPref("browser.tabs.warnOnOpen", false);
//lockPref("browser.trackingprotection.gethashURL", "");
//lockPref("browser.trackingprotection.updateURL", "");
//lockPref("browser.urlbar.decodeURLsOnCopy", true);
//lockPref("browser.urlbar.unifiedcomplete", false);
//lockPref("browser.usedOnWindows10.introURL", "");
//lockPref("browser.zoom.siteSpecific", false);
//lockPref("camera.control.autofocus_moving_callback.enabled", false);
//lockPref("datareporting.healthreport.about.reportUrlUnified", "data:text/plain,");
//lockPref("datareporting.healthreport.documentServerURI", "");
//lockPref("datareporting.policy.dataSubmissionEnabled.v2", false);
//lockPref("dom.archivereader.enabled", false);
//lockPref("dom.beforeAfterKeyboardEvent.enabled", false);
//lockPref("dom.disable_image_src_set", true);
//lockPref("dom.disable_window_open_feature.scrollbars", true);
//lockPref("dom.disable_window_status_change", true);
//lockPref("dom.idle-observers-api.enabled", false);
//lockPref("dom.keyboardevent.code.enabled", false);
//lockPref("dom.network.enabled", false);
//lockPref("dom.vr.oculus050.enabled", false);
//lockPref("dom.w3c_touch_events.enabled", 0);
//lockPref("dom.workers.enabled", false);
//lockPref("dom.workers.sharedWorkers.enabled", false);
//lockPref("extensions.formautofill.experimental", false);
//lockPref("extensions.screenshots.system-disabled", true);
//lockPref("extensions.shield-recipe-client.api_url", "");
//lockPref("full-screen-api.approval-required", false);
//lockPref("full-screen-api.warning.delay", 0);
//lockPref("full-screen-api.warning.timeout", 0);
//lockPref("general.warnOnAboutConfig", false);
//lockPref("geo.security.allowinsecure", false);
//lockPref("loop.enabled", false);
//lockPref("loop.facebook.appId", "");
//lockPref("loop.facebook.enabled", false);
//lockPref("loop.facebook.fallbackUrl", "");
//lockPref("loop.facebook.shareUrl", "");
//lockPref("loop.feedback.formURL", "");
//lockPref("loop.feedback.manualFormURL", "");
//lockPref("loop.server", "");
//lockPref("media.block-play-until-visible", true);
//lockPref("media.eme.apiVisible", false);
//lockPref("media.eme.chromium-api.enabled", false);
//lockPref("media.getusermedia.screensharing.allow_on_old_platforms", false);
//lockPref("media.getusermedia.screensharing.allowed_domains", "");
//lockPref("media.gmp-eme-adobe.autoupdate", false);
//lockPref("media.gmp-eme-adobe.visible", false);
//lockPref("media.ondevicechange.enabled", false);
//lockPref("media.webspeech.synth.enabled", false);
//lockPref("network.http.spdy.enabled.http2draft", false);
//lockPref("network.http.spdy.enabled.v3-1", false);
//lockPref("pfs.datasource.url", "");
//lockPref("plugin.scan.Acrobat", "99999");
//lockPref("plugin.scan.Quicktime", "99999");
//lockPref("plugin.scan.WindowsMediaPlayer", "99999");
//lockPref("plugins.enumerable_names", "");
//lockPref("plugins.update.notifyUser", false);
//lockPref("plugins.update.url", "");
//lockPref("privacy.clearOnShutdown.passwords", false);
//lockPref("security.mixed_content.send_hsts_priming", false);
//lockPref("security.mixed_content.use_hsts", true);
//lockPref("security.tls.insecure_fallback_hosts.use_static_list", false);
//lockPref("social.enabled", false);
//lockPref("social.share.activationPanelEnabled", false);
//lockPref("social.shareDirectory", "");
//lockPref("social.toast-notifications.enabled", false);
//lockPref("startup.homepage_override_url", "");
//lockPref("startup.homepage_welcome_url", "");
//lockPref("startup.homepage_welcome_url.additional", "");
//lockPref("toolkit.cosmeticAnimations.enabled", false);
//lockPref("toolkit.telemetry.unifiedIsOptIn", true);
//lockPref("ui.key.menuAccessKey", 0);
//lockPref("view_source.tab", false);

defaultPref("xpinstall.signatures.required", true);

// https://www.ghacks.net/2019/05/24/firefox-69-userchrome-css-and-usercontent-css-disabled-by-default/
// might increase startup time, so keep it disabled, but modifiable by default
defaultPref("toolkit.legacyUserProfileCustomizations.stylesheets", false);

// to be set for the console to work, see https://gitlab.com/librewolf-community/browser/linux/-/issues/80:
defaultPref("devtools.selfxss.count", 0);
