// Pref : Disabling performance addon url [FF64+]
lockPref("devtools.performance.recording.ui-base-url", "");
// Default Value : https://perf-html.io

// Pref : The default set of protocol handlers for irc [FF64+]
lockPref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
// Default Value : https://www.mibbit.com/?url=%s

// Pref :
lockPref("gecko.handlerService.schemes.ircs.0.uriTemplate", ""); // Deprecated Active
// Default Value
// https://www.mibbit.com/?url=%s

// Pref : "coverage" ping [FF64+]
// This ping is not enabled by default. When enabled, a ping is generated a total of once
//per profile, as a diagnostic tool to determine whether Telemetry is working for users.
lockPref("toolkit.coverage.enabled", false); //default false

// Pref : Allow extensions access to list of sites
// https://github.com/mozilla/gecko/blob/central/toolkit/mozapps/extensions/AddonManagerWebAPI.cpp
lockPref("extensions.webapi.testing", false); // hidden prefs // default false

// Pref : Disable recommended extensions [FF64+]
lockPref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false); // disable CFR

// Disable recommended extensions on the add-ons page.
lockPref("extensions.htmlaboutaddons.recommendations.enabled", false);

// [SETTING] General>Browsing>Recommend extensions as you browse
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations

// Pref : [FF64+]
lockPref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
lockPref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "");
// Default Value :
// {\"id\":\"cfr\",\"enabled\":false,\"type\":\"local\",\"localProvider\":\
// "CFRMessageProvider\",\"frequency\":{\"custom\":[{\"period\":\"daily\",\"cap\":1}]}}

// Pref : [FF64+]
lockPref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "");
// Default Value :
// {\"id\":\"onboarding\",\"type\":\"local\",\"localProvider\":\"OnboardingMessageProvider\",\"enabled\":true}

// Pref : [FF64+]
lockPref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
// Default Value :
// {\"id\":\"snippets\",\"enabled\":false,\"type\":\"remote\",\"url\":\"https://snippets.cdn.mozilla.net/
// %STARTPAGE_VERSION%/%NAME%/%VERSION%/%APPBUILDID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%
// /%DISTRIBUTION%/%DISTRIBUTION_VERSION%/\",\"updateCycleInMs\":14400000}

// Pref :
lockPref("browser.onboarding.notification.tour-ids-queue", "");

// Pref :
lockPref("lightweightThemes.getMoreURL", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/themes

// Pref :
lockPref("devtools.gcli.lodashSrc", "");
// Default Value
// https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.6.1/lodash.min.js

// Pref :
lockPref("media.decoder-doctor.new-issue-endpoint", "");
// Default Value
// https://webcompat.com/issues/new

// Pref :
lockPref("identity.sync.tokenserver.uri", "");
// Default Value
// https://token.services.mozilla.com/1.0/sync/1.5

// Pref :
lockPref("devtools.webide.templatesURL", "");
// Default Value
// https://code.cdn.mozilla.net/templates/list.json

// Pref :
lockPref("browser.ping-centre.production.endpoint", "");
// Default Value
// https://tiles.services.mozilla.com/v3/links/ping-centre

// Pref :
lockPref("browser.translation.engine", "");
// Default Value
// Google

// Pref :
lockPref("network.trr.confirmationNS", "");
// Default Value
// example.com

// Pref :
lockPref("gecko.handlerService.schemes.mailto.1.name", "");
// Default Value
// Gmail

// Pref :
lockPref("gecko.handlerService.schemes.irc.0.name", "");
// Default Value
// Mibbit

// Pref :
lockPref("gecko.handlerService.schemes.ircs.0.name", "");
// Default Value
// Mibbit

// Pref :
lockPref("gecko.handlerService.schemes.mailto.0.name", "");
// Default Value
// Yahoo! Mail

// Pref :
lockPref("services.sync.lastversion", "");
// Default Value
// firstrun

// Pref :
lockPref("browser.safebrowsing.provider.mozilla.lists.base", "");
// Default Value
// moz-std

// Pref :
lockPref("browser.safebrowsing.provider.mozilla.lists.content", "");
// Default Value
// moz-full

// Pref :
lockPref("browser.safebrowsing.provider.google.advisoryName", "");
// Default Value
// Google Safe Browsing

// Pref :
lockPref("browser.safebrowsing.provider.google4.advisoryName", "");
// Default Value
// Google Safe Browsing

// Pref : Test To Make FFox Silent
lockPref("browser.safebrowsing.provider.mozilla.lists", "");
// Default Value
// base-track-digest256,mozstd-trackwhite-digest256,content-track-digest256,
// mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,
// except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,
// block-flashsubdoc-digest256,except-flashsubdoc-digest256,
// except-flashinfobar-digest256,ads-track-digest256,social-track-digest256,
// analytics-track-digest256,fastblock1-track-digest256,fastblock1-trackwhite-digest256,
// fastblock2-track-digest256,fastblock2-trackwhite-digest256,fastblock3-track-digest256

// Pref :
lockPref("identity.fxaccounts.remote.root", "");
// Default Value
// https://accounts.firefox.com/

// Pref :
lockPref("services.settings.server", "");
// Default Value
// https://firefox.settings.services.mozilla.com/v1

// Pref :
lockPref("services.sync.fxa.privacyURL", "");
// Default Value
// https://accounts.firefox.com/legal/privacy

// Pref :
lockPref("services.sync.fxa.termsURL", "");
// Default Value
// https://accounts.firefox.com/legal/terms

// Pref :
lockPref("services.blocklist.addons.signer", "");
// Default Value
// remote-settings.content-signature.mozilla.org

// Pref :
lockPref("services.blocklist.gfx.signer", "");
// Default Value
// remote-settings.content-signature.mozilla.org

// Pref :
lockPref("services.blocklist.onecrl.signer", "");
// Default Value
// onecrl.content-signature.mozilla.org

// Pref :
lockPref("services.blocklist.pinning.signer", "");
// Default Value
// pinning-preload.content-signature.mozilla.org

// Pref :
lockPref("services.blocklist.plugins.signer", "");
// Default Value
// remote-settings.content-signature.mozilla.org

// Pref :
lockPref("services.settings.default_signer", "");
// Default Value
// remote-settings.content-signature.mozilla.org

// Pref :
lockPref("accessibility.support.url", "");
// Default Value
// https://support.mozilla.org/%LOCALE%/kb/accessibility-services

// Pref :
lockPref("app.normandy.shieldLearnMoreUrl", "");
// Default Value
// https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/shield

// Pref :
lockPref("app.productInfo.baseURL", "");
// Default Value
// https://www.mozilla.org/firefox/features/

// Pref :
lockPref("app.support.baseURL", "");
// Default Value
// https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/

// Pref :
lockPref("browser.chrome.errorReporter.infoURL", "");
// Default Value
// https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/nightly-error-collection

// Pref :
lockPref("browser.dictionaries.download.url", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/dictionaries/

// Pref :
lockPref("browser.geolocation.warning.infoURL", "");
// Default Value
// https://www.mozilla.org/%LOCALE%/firefox/geolocation/

// Pref :
lockPref("browser.search.searchEnginesURL", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/search-engines/

// Pref :
lockPref("browser.uitour.themeOrigin", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/themes/

// Pref : Disable WebIDE ADB Dxtension Downloads
// Pref : 2608 : gHacks Deprecated Active
lockPref("devtools.webide.adbAddonURL", "");
// Default Value
// https://ftp.mozilla.org/pub/mozilla.org/labs/fxos-simulator/adb-helper/#OS#/adbhelper-#OS#-latest.xpi

// Pref :
lockPref("extensions.getAddons.compatOverides.url", "");
// Default Value
// https://services.addons.mozilla.org/api/v3/addons/compat-override/?guid=%IDS%&lang=%LOCALE%

// Pref :
defaultPref("extensions.getAddons.get.url", "");
// Default Value
// https://services.addons.mozilla.org/api/v3/addons/search/?guid=%IDS%&lang=%LOCALE%

// Pref :
defaultPref("extensions.getAddons.langpacks.url", "");
// Default Value
// https://services.addons.mozilla.org/api/v3/addons/language-tools/?app=firefox&type=language&appversion=%VERSION%

// Pref :
defaultPref("extensions.getAddons.link.url", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/

// Pref :
defaultPref("extensions.getAddons.search.browseURL", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/search?q=%TERMS%&platform=%OS%&appver=%VERSION%

// Pref :
lockPref("extensions.getAddons.themes.browseURL", "");
// Default Value
// https://addons.mozilla.org/%LOCALE%/firefox/themes/?src=firefox

// Pref :
lockPref("services.sync.addons.trustedSourceHostnames", "");
// Default Value
// addons.mozilla.org

// Pref :
lockPref("toolkit.datacollection.infoURL", "");
// Default Value
// https://www.mozilla.org/legal/privacy/firefox.html

// Pref :
lockPref("xpinstall.signatures.devInfoURL", "");
// Default Value
// https://wiki.mozilla.org/Addons/Extension_Signing

// Pref :
lockPref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
// Default Value
// google,amazon

// Pref :
lockPref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
// Default Value
// https://accounts.firefox.com/

// Pref :
defaultPref("extensions.update.url", "");
// Default Value
// https://versioncheck.addons.mozilla.org/update/VersionCheck.php?reqVersion=
// %REQ_VERSION%&id=%ITEM_ID%&version=%ITEM_VERSION%&maxAppVersion=
// %ITEM_MAXAPPVERSION%&status=%ITEM_STATUS%&appID=%APP_ID%&appVersion=%APP_VERSION%&appOS=
// %APP_OS%&appABI=%APP_ABI%&locale=%APP_LOCALE%&currentAppVersion=
// %CURRENT_APP_VERSION%&updateType=%UPDATE_TYPE%&compatMode=%COMPATIBILITY_MODE%

// Pref :
lockPref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
// Default Value
// {"api_key_pref":"extensions.pocket.oAuthConsumerKey","hidden":false,"provider_icon":
// "pocket","provider_name":"Pocket","read_more_endpoint":"https://getpocket.com/explore/
// trending?src=fx_new_tab","stories_endpoint":"https://getpocket.cdn.mozilla.net/v3/
// firefox/global-recs?version=3&consumer_key=$apiKey&locale_lang=en-US&feed_variant=
// default_spocs_on","stories_referrer":"https://getpocket.com/recommendations",
// "topics_endpoint":"https://getpocket.cdn.mozilla.net/v3/firefox/trending-topics?
// version=2&consumer_key=$apiKey&locale_lang=en-US","show_spocs":true,"personalized":true}

// Pref :
lockPref("lightweightThemes.recommendedThemes", "");
// Default Value
// [{"id":"recommended-1","homepageURL":"https://addons.mozilla.org/firefox/addon/a-web-browser-renaissance/",
// "headerURL":"resource:///chrome/browser/content/browser/defaultthemes/1.header.jpg",
// "textcolor":"#000000","accentcolor":"#834d29","iconURL":"resource:///chrome/browser/content/browser/
// defaultthemes/1.icon.jpg","previewURL":"resource:///chrome/browser/content/browser/defaultthemes/1.
// preview.jpg","author":"Sean.Martell","version":"0"},{"id":"recommended-2","homepageURL":
// "https://addons.mozilla.org/firefox/addon/space-fantasy/","headerURL":
// "resource:///chrome/browser/content/browser/defaultthemes/2.header.jpg",
// "textcolor":"#ffffff","accentcolor":"#d9d9d9","iconURL":"resource:///chrome/browser/content/browser/
// defaultthemes/2.icon.jpg","previewURL":"resource:///chrome/browser/content/browser/defaultthemes/
// 2.preview.jpg","author":"fx5800p","version":"1.0"},{"id":"recommended-4","homepageURL":
// "https://addons.mozilla.org/firefox/addon/pastel-gradient/","headerURL":
// "resource:///chrome/browser/content/browser/defaultthemes/4.header.png",
// "textcolor":"#000000","accentcolor":"#000000","iconURL":
// "resource:///chrome/browser/content/browser/defaultthemes/4.icon.png","previewURL":
// "resource:///chrome/browser/content/browser/defaultthemes/4.preview.png",
// "author":"darrinhenein","version":"1.0"}]

// Other Sync Settings - Disabling By Prevention ---------------------------------------------------------

lockPref("services.sync.maxResyncs", 0); //5
lockPref("services.sync.telemetry.maxPayloadCount", 0); //500
lockPref("services.sync.addons.ignoreUserEnabledChanges", true); //false
lockPref("services.sync.engine.addons", false); //true
lockPref("services.sync.engine.addresses", false); //false
lockPref("services.sync.engine.bookmarks", false); //true
lockPref("services.sync.engine.bookmarks.buffer", false); //false
lockPref("services.sync.engine.creditcards", false); //false
lockPref("services.sync.engine.creditcards.available", false); //false
lockPref("services.sync.engine.history", false); //true
lockPref("services.sync.engine.passwords", false); //true
lockPref("services.sync.engine.prefs", false); //true
lockPref("services.sync.engine.tabs", false); //true
lockPref("services.sync.log.appender.file.logOnError", false); //true
lockPref("services.sync.log.appender.file.logOnSuccess", false); //false
lockPref("services.sync.log.cryptoDebug", false); //false
lockPref("services.sync.sendVersionInfo", false); //true
lockPref("services.sync.syncedTabs.showRemoteIcons", true); //true
lockPref("services.sync.prefs.sync.accessibility.blockautorefresh", false); //true
lockPref("services.sync.prefs.sync.accessibility.browsewithcaret", false); //true
lockPref("services.sync.prefs.sync.accessibility.typeaheadfind", false); //true
lockPref("services.sync.prefs.sync.accessibility.typeaheadfind.linksonly", false); //true
lockPref("services.sync.prefs.sync.addons.ignoreUserEnabledChanges", true); //true
lockPref("services.sync.prefs.sync.browser.contentblocking.enabled", false); //true
lockPref("services.sync.prefs.sync.browser.ctrlTab.recentlyUsedOrder", false); //true
lockPref("services.sync.prefs.sync.browser.download.useDownloadDir", false); //true
lockPref("services.sync.prefs.sync.browser.formfill.enable", false); //true
lockPref("services.sync.prefs.sync.browser.link.open_newwindow", false); //true
lockPref("services.sync.prefs.sync.browser.newtabpage.enabled", false); //true
lockPref("services.sync.prefs.sync.browser.newtabpage.pinned", false); //true
lockPref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false); //true
lockPref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeVisited", false); //true
lockPref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); //true
lockPref("services.sync.prefs.sync.browser.offline-apps.notify", false); //true
lockPref("services.sync.prefs.sync.browser.search.update", false); //true
lockPref("services.sync.prefs.sync.browser.sessionstore.restore_on_demand", false); //true
lockPref("services.sync.prefs.sync.browser.startup.homepage", false); //true
lockPref("services.sync.prefs.sync.browser.startup.page", false); //true
lockPref("services.sync.prefs.sync.browser.tabs.loadInBackground", false); //true
lockPref("services.sync.prefs.sync.browser.tabs.warnOnClose", false); //true
lockPref("services.sync.prefs.sync.browser.tabs.warnOnOpen", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.autocomplete.enabled", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.matchBuckets", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.maxRichResults", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.bookmark", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.history", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.history.onlyTyped", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.openpage", false); //true
lockPref("services.sync.prefs.sync.browser.urlbar.suggest.searches", false); //true
lockPref("services.sync.prefs.sync.dom.disable_open_during_load", false); //true
lockPref("services.sync.prefs.sync.dom.disable_window_flip", false); //true
lockPref("services.sync.prefs.sync.dom.disable_window_move_resize", false); //true
lockPref("services.sync.prefs.sync.dom.event.contextmenu.enabled", false); //true
lockPref("services.sync.prefs.sync.extensions.personas.current", false); //true
lockPref("services.sync.prefs.sync.extensions.update.enabled", false); //true
lockPref("services.sync.prefs.sync.intl.accept_languages", false); //true
lockPref("services.sync.prefs.sync.layout.spellcheckDefault", false); //true
lockPref("services.sync.prefs.sync.lightweightThemes.selectedThemeID", false); //true
lockPref("services.sync.prefs.sync.lightweightThemes.usedThemes", false); //true
lockPref("services.sync.prefs.sync.network.cookie.cookieBehavior", false); //true
lockPref("services.sync.prefs.sync.network.cookie.lifetimePolicy", false); //true
lockPref("services.sync.prefs.sync.network.cookie.thirdparty.sessionOnly", false); //true
lockPref("services.sync.prefs.sync.permissions.default.image", false); //true
lockPref("services.sync.prefs.sync.pref.advanced.images.disable_button.view_image", false); //true
lockPref("services.sync.prefs.sync.pref.advanced.javascript.disable_button.advanced", false); //true
lockPref("services.sync.prefs.sync.pref.downloads.disable_button.edit_actions", false); //true
lockPref("services.sync.prefs.sync.pref.privacy.disable_button.cookie_exceptions", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.cache", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.cookies", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.downloads", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.formdata", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.history", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.offlineApps", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.sessions", false); //true
lockPref("services.sync.prefs.sync.privacy.clearOnShutdown.siteSettings", false); //true
lockPref("services.sync.prefs.sync.privacy.donottrackheader.enabled", false); //true
lockPref("services.sync.prefs.sync.privacy.reduceTimerPrecision", false); //true
lockPref("services.sync.prefs.sync.privacy.resistFingerprinting", false); //true
lockPref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.jitter", false); //true
lockPref("services.sync.prefs.sync.privacy.resistFingerprinting.reduceTimerPrecision.microseconds", false); //true
lockPref("services.sync.prefs.sync.privacy.sanitize.sanitizeOnShutdown", false); //true
lockPref("services.sync.prefs.sync.privacy.trackingprotection.enabled", false); //true
lockPref("services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled", false); //true
lockPref("services.sync.prefs.sync.security.OCSP.enabled", false); //true
lockPref("services.sync.prefs.sync.security.OCSP.require", false); //true
lockPref("services.sync.prefs.sync.security.default_personal_cert", false); //true
lockPref("services.sync.prefs.sync.security.tls.version.max", false); //true
lockPref("services.sync.prefs.sync.security.tls.version.min", false); //true
lockPref("services.sync.prefs.sync.services.sync.syncedTabs.showRemoteIcons", false); //true
lockPref("services.sync.prefs.sync.spellchecker.dictionary", false); //true
lockPref("services.sync.prefs.sync.xpinstall.whitelist.required", false); //true

// Testing -----------------------------------------------------------------------------------------------

// Pref : Test To Make FFox Silent
lockPref("browser.chrome.errorReporter.publicKey", "");
// Default Value
// c709cb7a2c0b4f0882fcc84a5af161ec

// Pref : Test To Make FFox Silent
lockPref("prio.publicKeyA", "");
// Default Value
// 35AC1C7576C7C6EDD7FED6BCFC337B34D48CB4EE45C86BEEFB40BD8875707733
lockPref("prio.publicKeyB", "");
// Default Value
// 26E6674E65425B823F1F1D5F96E3BB3EF9E406EC7FBA7DEF8B08A35DD135AF50

// Alpha Settings Not Needed At The Moment --------------------------------------------------------------

// Pref :
//lockPref("urlclassifier.phishTable", "");
// Default Value
// goog-phish-proto,test-phish-simple

// Pref :
//lockPref("urlclassifier.passwordAllowTable", "");
// Default Value
// goog-passwordwhite-proto

// Pref :
//lockPref("urlclassifier.downloadAllowTable", "");
// Default Value
// goog-downloadwhite-proto

// Pref :
//lockPref("urlclassifier.downloadBlockTable", "");
// Default Value
// goog-badbinurl-proto

// Pref : Test To Make FFox Silent
//lockPref("security.content.signature.root_hash", "");
// Default Value
// 97:E8:BA:9C:F1:2F:B3:DE:53:CC:42:A4:E6:57:7E:D6:4D:F4:93:C2:47:B4:14:FE:A0:36:81:8D:38:23:56:0E

// Pref : Test To Make FFox Silent
//lockPref("media.gmp-manager.certs.1.issuerName", "");
// Default Value
// CN=DigiCert SHA2 Secure Server CA,O=DigiCert Inc,C=US

// Pref : Test To Make FFox Silent
//lockPref("media.gmp-manager.certs.2.issuerName", "");
// Default Value
// CN=thawte SSL CA - G2,O="thawte, Inc.",C=US

// Disabled ----------------------------------------------------------------------------------------------

// Pref : New page default sites
//lockPref("browser.newtabpage.activity-stream.default.sites", "");
// Default Value
// https://www.youtube.com/,https://www.facebook.com/,https://www.amazon.com/,
// https://www.reddit.com/,https://www.wikipedia.org/,https://twitter.com/
