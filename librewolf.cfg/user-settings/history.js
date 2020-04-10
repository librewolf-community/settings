lockPref("browser.sessionhistory.max_entries", 20);
lockPref("browser.urlbar.filter.javascript", true);
defaultPref("browser.uiCustomization.state", '{"placements":{"widget-overflow-fixed-list":[],"nav-bar":["home-button","downloads-button","back-button","forward-button","stop-reload-button","urlbar-container","add-ons-button","preferences-button","fxa-toolbar-menu-button"],"toolbar-menubar":["menubar-items"],"TabsToolbar":["tabbrowser-tabs","new-tab-button","alltabs-button"],"PersonalToolbar":["personal-bookmarks"]},"seen":["developer-button"],"dirtyAreaCache":["nav-bar","toolbar-menubar","TabsToolbar","PersonalToolbar"],"currentVersion":16,"newElementCount":3}');
defaultPref("browser.uidensity", 2);
defaultPref("browser.tabs.drawInTitlebar", true);
pref("startup.homepage_override_url", "about:blank");
pref("startup.homepage_welcome_url", "about:blank");
pref("startup.homepage_welcome_url.additional", "");
defaultPref("privacy.clearOnShutdown.offlineApps", true);
defaultPref("privacy.cpd.offlineApps", true); // Offline Website Data
defaultPref("privacy.sanitize.timeSpan", 0);
defaultPref("browser.formfill.enable", false);
defaultPref("privacy.sanitize.sanitizeOnShutdown", true);
defaultPref("places.history.enabled", false);
// the following can be safely set here, as it should not have any effect,
// the above defaultPref("places.history.enabled", false); is set to true
defaultPref("places.history.expiration.max_pages", 2147483647);
defaultPref("privacy.history.custom", true);
//defaultPref("privacy.cpd.openWindows", true); // Clear session data
//defaultPref("privacy.clearOnShutdown.openWindows", true);
//defaultPref("privacy.sanitize.pending", '[{"id":"shutdown","itemsToClear":["cache","cookies","history","formdata","downloads"],"options":{}}]');
//lockPref("permissions.memory_only", true); // (hidden pref)
//lockPref("browser.formfill.expire_days", 0);
