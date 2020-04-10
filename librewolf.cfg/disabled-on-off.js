// - Disabled - Section OFF -----------------------------------------------------------------

// Pref : Don't remember browsing history
// MIGRATED to defaulting section, this setting does not need to be enforced
//lockPref("places.history.enabled", false);

// Pref : Clear all history on shutdown
// MIGRATED to defaulting section, this setting does not need to be enforced
// This setting may be enforced here if preferred
//lockPref("privacy.sanitize.sanitizeOnShutdown", true);

// Pref : 2804: reset default history items to clear with Ctrl-Shift-Del (to match above)
// This dialog can also be accessed from the menu History>Clear Recent History
// Firefox remembers your last choices. This will reset them when you start Firefox.
// [NOTE] Regardless of what you set privacy.cpd.downloads to, as soon as the dialog
// for "Clear Recent History" is opened, it is synced with 'privacy.cpd.history'
//defaultPref("privacy.cpd.siteSettings", false); // Site Preferences
//defaultPref("privacy.cpd.downloads", true); // not used, see note above
//defaultPref("privacy.cpd.cache", true);
//defaultPref("privacy.cpd.cookies", true);
//defaultPref("privacy.cpd.formdata", true); // Form & Search History
//defaultPref("privacy.cpd.history", true); // Browsing & Download History
//defaultPref("privacy.cpd.offlineApps", true); // Offline Website Data
//defaultPref("privacy.cpd.passwords", false); // this is not listed
//defaultPref("privacy.cpd.sessions", true); // Active Logins
// Not needed // replaced by //defaultPref("privacy.sanitize.sanitizeOnShutdown", true);
// Also default value are already good

// Pref : 2803: set which history items are to be cleared on shutdown
// [SETTING] Privacy & Security>History>Custom Settings>Clear history when Firefox closes>Settings
// [NOTE] If 'history' is true, downloads will also be cleared regardless of the value
// but if 'history' is false, downloads can still be cleared independently
// However, this may not always be the case. The interface combines and syncs these
// prefs when set from there, and the sanitize code may change at any time
//defaultPref("privacy.clearOnShutdown.siteSettings", false); // Site Preferences
//defaultPref("privacy.clearOnShutdown.cache", true);
//defaultPref("privacy.clearOnShutdown.cookies", true);
//defaultPref("privacy.clearOnShutdown.downloads", true); // see note above
//defaultPref("privacy.clearOnShutdown.formdata", true); // Form & Search History
//defaultPref("privacy.clearOnShutdown.history", true); // Browsing & Download History
//defaultPref("privacy.clearOnShutdown.offlineApps", true); // Offline Website Data
//defaultPref("privacy.clearOnShutdown.sessions", true); // Active Logins
// Make panel locked (bug)
// replaced by //defaultPref("privacy.sanitize.sanitizeOnShutdown", true);

// Pref : 0801: disable location bar using search - PRIVACY
// don't leak typos to a search engine; give an error message instead
//lockPref("keyword.enabled", false);
// Beak search from url bar
// After other settings, this does not send any data to search.

// Pref : Disable Firefox Account
//lockPref("identity.fxaccounts.enabled", false); //Deprecated Active
// Already disabled in policies.json

// Pref : 2609: disable MathML (Mathematical Markup Language) (FF51+)
// [TEST] http://browserspy.dk/mathml.php
// [1] https://bugzilla.mozilla.org/1173199
//lockPref("mathml.disabled", true);
// This setting is a fingerprint in itself

// Pref : 2304: disable web notifications
// [1] https://developer.mozilla.org/docs/Web/API/Notifications_API
//lockPref("dom.webnotifications.enabled", false); // (FF22+)
//lockPref("dom.webnotifications.serviceworker.enabled", false); // (FF44+)
// After tuning, this is no longer a privacy issue but a feature

// Pref : History sessionhistory
//lockPref("browser.sessionhistory.max_total_viewers", 0);

// Pref : 0850f: disable location bar suggesting local search history (FF57+)
// [1] https://bugzilla.mozilla.org/1181644
//lockPref("browser.urlbar.maxHistoricalSearchSuggestions", 0); // max. number of search suggestions
// No privacy issue here

// Pref : 1020: disable the Session Restore service completely
// [SETUP-CHROME] This also disables the "Recently Closed Tabs" feature
// It does not affect "Recently Closed Windows" or any history.
//lockPref("browser.sessionstore.max_tabs_undo", 0);
//lockPref("browser.sessionstore.max_windows_undo", 0);
// Not really a privacy issue, but it's useful to have this feature

// Pref : Disable URL bar autocomplete and history/bookmark suggestion dropdown
//lockPref("browser.urlbar.autocomplete.enabled", false);
//lockPref("browser.urlbar.suggest.history", false);
//lockPref("browser.urlbar.suggest.bookmark", false);
//lockPref("browser.urlbar.suggest.openpage", false);
// This does not cause privacy/leaking issues

// Pref : 2605: block web content in file processes (FF55+)
// [SETUP-WEB] You may want to disable this for corporate or developer environments
// [1] https://bugzilla.mozilla.org/1343184
//lockPref("browser.tabs.remote.allowLinkedWebInFileUriProcess", false);
// Not an issue

// DOWNLOADS
// Pref : 2650: discourage downloading to desktop (0=desktop 1=downloads 2=last used)
// [SETTING] To set your default "downloads", set General>Downloads>Save files to
//lockPref("browser.download.folderList", 2);
// Pref : 2651: enforce user interaction for security by always asking the user where to download
// [SETTING] General>Downloads>Always ask you where to save files
//lockPref("browser.download.useDownloadDir", false);
// Pref : 2654: disable "open with" in download dialog (FF50+)
// This is very useful to enable when the browser is sandboxed (e.g. via AppArmor)
// in such a way that it is forbidden to run external applications.
// [SETUP-CHROME] This may interfere with some users' workflow or methods
// [1] https://bugzilla.mozilla.org/1281959
//lockPref("browser.download.forbid_open_with", true);
// Not an issue

// OCSP (Online Certificate Status Protocol)
// OCSP leaks the visited sites. Exactly same issue as with safebrowsing.
// Stapling forces the site to prove that its certificate is good
// through the CA, so apparently nothing is leaked in this case.
// [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
// Pref : 1211: control when to use OCSP fetching (to confirm current validity of certificates)
// 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
// OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority)
// It's a trade-off between security (checking) and privacy (leaking info to the CA)
// [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
// [1] https://en.wikipedia.org/wiki/Ocsp
//lockPref("security.OCSP.enabled", 1);

// Pref : 1212: set OCSP fetch failures (non-stapled, see 1211) to hard-fail [SETUP-WEB]
// When a CA cannot be reached to validate a cert, Firefox just continues with the connection (=soft-fail)
// Setting this pref to true tells Firefox to terminate the connection instead (=hard-fail)
// It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm that the cert is still valid (it
// could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers)
// [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
// [2] https://www.imperialviolet.org/2014/04/19/revchecking.html
//lockPref("security.OCSP.require", true);

// Pref : 1022: disable resuming session from crash [SETUP-CHROME]
//lockPref("browser.sessionstore.resume_from_crash", false);
// Not really a privacy issue, but it's useful to have this feature

// Pref : 0103: set HOME+NEWWINDOW page
// about:home=Activity Stream (default, see 0105), custom URL, about:blank
// [SETTING] Home>New Windows and Tabs>Homepage and new windows
//lockPref("browser.startup.homepage", "about:blank");
// Let the user have the choice, and easily change it

// Pref : 2740: disable service workers cache and cache storage
// [1] https://w3c.github.io/ServiceWorker/#privacy
//lockPref("dom.caches.enabled", false);
// Not really a privacy issue, but it's useful to have this feature
// Other settings solve privacy issues related to this

// Pref : First-party isolation
// https://bugzilla.mozilla.org/show_bug.cgi?id=1299996
// https://bugzilla.mozilla.org/show_bug.cgi?id=1260931
// https://wiki.mozilla.org/Security/FirstPartyIsolation
// First-party isolation breaks Microsoft Teams
// First-party isolation causes HTTP basic auth to ask for credentials for every new tab (see #425)
// Solved by extension
// Pref : 4001: enable First Party Isolation (FF51+)
// [SETUP-WEB] May break cross-domain logins and site functionality until perfected
// [1] https://bugzilla.mozilla.org/1260931
// enabled via addons
//lockPref("privacy.firstparty.isolate", true);
// Pref : 4002: enforce FPI restriction for window.opener (FF54+)
// [NOTE] Setting this to false may reduce the breakage in 4001
// [FF65+] blocks postMessage with targetOrigin "*" if originAttributes don't match. But
// to reduce breakage it ignores the 1st-party domain (FPD) originAttribute. (see [2],[3])
// The 2nd pref removes that limitation and will only allow communication if FPDs also match.
// [1] https://bugzilla.mozilla.org/1319773#c22
// [2] https://bugzilla.mozilla.org/1492607
// [3] https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
//lockPref("privacy.firstparty.isolate.restrict_opener_access", true); // default: true
// lockPref("privacy.firstparty.isolate.block_post_message", true); // (hidden pref)
// Enforced with addon

// Pref : 0102: set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
// [SETTING] General>Startup>Restore previous session
//lockPref("browser.startup.page", 0);
// Let the user choose over settings page

// Pref : 1001: disable disk cache
//lockPref("browser.cache.disk.enable", false);
//lockPref("browser.cache.disk.capacity", 0);
//lockPref("browser.cache.disk.smart_size.enabled", false);
//lockPref("browser.cache.disk.smart_size.first_run", false);
// Pref : 1003: disable memory cache
// [NOTE] Not recommended due to performance issues
// lockPref("browser.cache.memory.enable", false);
// lockPref("browser.cache.memory.capacity", 0); // (hidden pref)
// This is overkill. Disabled for performance.
// Firefox should be run in a container: sandbox or otherwise

// Pref : New tab page
//lockPref("browser.newtabpage.enabled", false);
// New page site shortcuts does not spy after tunning. May be enabled if preferred.

// Pref : Disable in-content SVG rendering (Firefox >= 53) (disabled)
// Disabling SVG support breaks many UI elements on many sites
// https://bugzilla.mozilla.org/show_bug.cgi?id=1216893
//lockPref("svg.disabled", true);
// Solved by extension

// Pref : Disable Caching of SSL Pages
// CIS Version 1.2.0 October 21st, 2011 2.5.8
// http://kb.mozillazine.org/Browser.cache.disk_cache_ssl
//lockPref("browser.cache.disk_cache_ssl", false);

// Pref : 2212 : limit events that can cause a popup
// default is "change click dblclick mouseup pointerup notificationclick reset submit touchend"
// [1] http://kb.mozillazine.org/Dom.popup_allowed_events
//lockPref("dom.popup_allowed_events", "click dblclick");
// This does not cause privacy/leaking issues
// Also already set in "dom.popup_maximum"

// Pref : 2031 : disable audio auto-play in non-active tabs (FF51+)
// [1] https://www.ghacks.net/2016/11/14/firefox-51-blocks-automatic-audio-playback-in-non-active-tabs/
//lockPref("media.block-autoplay-until-in-foreground", true);
// Not privacy/security related

// Pref : 2403 : disable clipboard commands (cut/copy) from "non-privileged" content (FF41+)
// this disables document.execCommand("cut"/"copy") to protect your clipboard
// [1] https://bugzilla.mozilla.org/1170911
//lockPref("dom.allow_cut_copy", false); // (hidden pref)
// Not an issue

// Pref : 1405 : disable WOFF2 (Web Open Font Format) (FF35+)
//lockPref("gfx.downloadable_fonts.woff2.enabled", false);
// Solved by extension

// Pref : 1406 : disable CSS Font Loading API
// Disabling fonts can uglify the web a fair bit.
//lockPref("layout.css.font-loading-api.enabled", false);
// Solved by extension

// - Disabled - Dumped Disabled From (gHacks, Check user.js for description) ----------------

//lockPref("browser.chrome.site_icons", false);
//lockPref("browser.library.activity-stream.enabled", false);
//lockPref("browser.privatebrowsing.autostart", true);
//lockPref("browser.urlbar.maxRichResults", 0);
//lockPref("dom.storage.enabled", false);
//lockPref("dom.storageManager.enabled", false);
//lockPref("extensions.screenshots.disabled", true);
//lockPref("extensions.webextensions.restrictedDomains", "");
//lockPref("font.name.monospace.x-unicode", "Lucida Console");
//lockPref("font.name.monospace.x-western", "Lucida Console");
//lockPref("font.name.sans-serif.x-unicode", "Arial");
//lockPref("font.name.sans-serif.x-western", "Arial");
//lockPref("font.name.serif.x-unicode", "Georgia");
//lockPref("font.name.serif.x-western", "Georgia");
//lockPref("font.system.whitelist", "");
//lockPref("full-screen-api.enabled", false);
//lockPref("gfx.downloadable_fonts.enabled", false);
//lockPref("gfx.downloadable_fonts.fallback_delay", -1);
//lockPref("javascript.options.baselinejit", false);
//lockPref("javascript.options.ion", false);
//lockPref("media.media-capabilities.enabled", false);
//lockPref("network.dnsCacheEntries", 400);
//lockPref("network.dnsCacheExpiration", 60);
//lockPref("network.ftp.enabled", false);
//lockPref("permissions.default.camera", 2);
//lockPref("permissions.default.desktop-notification", 2);
//lockPref("permissions.default.microphone", 2);
//lockPref("permissions.default.shortcuts", 2);
//lockPref("privacy.window.maxInnerHeight", 900);
//lockPref("privacy.window.maxInnerWidth", 1600);
//lockPref("security.insecure_connection_text.pbmode.enabled", true);
//lockPref("security.nocertdb", true);
//lockPref("security.ssl3.dhe_rsa_aes_128_sha", false);
//lockPref("security.ssl3.dhe_rsa_aes_256_sha", false);
//lockPref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
//lockPref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
//lockPref("urlclassifier.trackingTable", "test-track-simple,base-track-digest256");

// - Disabled - Section ON ------------------------------------------------------------------

// Pref : Tor settings
// This browser is not meant for tor
// Enabling those settings for user torifying their whole connection
lockPref("network.dns.blockDotOnion", true);
lockPref("network.http.referer.hideOnionSource", true);

// Pref : 1603 : CROSS ORIGIN: control when to send a referer
// 0=always (default), 1=only if base domains match, 2=only if hosts match
// Can break some important site... (payment... )
lockPref("network.http.referer.XOriginPolicy", 1);

// Pref : Only allow TLS 1.[0-3]
lockPref("security.tls.version.max", 4); // 4 = allow up to and including TLS 1.3
