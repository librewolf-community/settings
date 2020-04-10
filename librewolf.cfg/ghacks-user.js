lockPref("toolkit.coverage.endpoint.base", "");
lockPref("toolkit.coverage.opt-out", true); // [HIDDEN PREF]
lockPref("browser.download.manager.addToRecentDocs", false); //do not disable
lockPref("browser.download.hide_plugins_without_extensions", false); //do not disable
lockPref("webchannel.allowObject.urlWhitelist", "");
lockPref("browser.cache.offline.insecure.enable", false); // default: false in FF62+
lockPref("network.http.redirection-limit", 10);
lockPref("offline-apps.allow_by_default", false);
lockPref("extensions.enabledScopes", 5); // (hidden pref)
lockPref("extensions.autoDisableScopes", 11); //Tor value must be 0
lockPref("xpinstall.whitelist.required", true); // default: true
lockPref("dom.push.enabled", false);
lockPref("dom.push.connection.enabled", false);
lockPref("dom.push.serverURL", ""); //default "wss://push.services.mozilla.com/"
lockPref("dom.push.userAgentID", "");
lockPref("security.data_uri.block_toplevel_data_uri_navigations", true); // default: true in FF59+
lockPref("ui.use_standins_for_native_colors", true); // (hidden pref)
lockPref("services.blocklist.onecrl.collection", ""); // revoked certificates
lockPref("services.blocklist.addons.collection", "");
lockPref("services.blocklist.plugins.collection", "");
lockPref("services.blocklist.gfx.collection", "");
lockPref("browser.startup.blankWindow", false);
lockPref("dom.event.highrestimestamp.enabled", true); // default: true
lockPref("privacy.trackingprotection.introURL", "");
lockPref("network.http.altsvc.enabled", false);
lockPref("network.http.altsvc.oe", false);
lockPref("network.file.disable_unc_paths", true); // (hidden pref)
lockPref("network.gio.supported-protocols", ""); // (hidden pref)
lockPref("browser.urlbar.usepreloadedtopurls.enabled", false);
lockPref("browser.urlbar.speculativeConnect.enabled", false);
lockPref("browser.urlbar.oneOffSearches", false);
lockPref("network.auth.subresource-img-cross-origin-http-auth-allow", false); //Deprecated Active
lockPref("browser.shell.shortcutFavicons", false);
lockPref("alerts.showFavicons", false); // default: false
lockPref("security.ssl.require_safe_negotiation", true);
lockPref("security.tls.enable_0rtt_data", false); // (FF55+ default true)
lockPref("browser.xul.error_pages.expert_bad_cert", true);
lockPref("font.blacklist.underline_offset", "");
lockPref("gfx.font_rendering.graphite.enabled", false);
lockPref("network.http.referer.XOriginTrimmingPolicy", 0);
lockPref("network.http.referer.spoofSource", false);
lockPref("plugin.default.state", 1);
lockPref("plugin.defaultXpi.state", 1);
lockPref("canvas.capturestream.enabled", false);
lockPref("dom.imagecapture.enabled", false); // default: false
lockPref("gfx.offscreencanvas.enabled", false); // default: false
lockPref("dom.disable_window_open_feature.close", true);
lockPref("dom.disable_window_open_feature.location", true); // default: true
lockPref("dom.disable_window_open_feature.menubar", true);
lockPref("dom.disable_window_open_feature.minimizable", true);
lockPref("dom.disable_window_open_feature.personalbar", true); // bookmarks toolbar
lockPref("dom.disable_window_open_feature.resizable", true); // default: true
lockPref("dom.disable_window_open_feature.status", true); // status bar - default: true
lockPref("dom.disable_window_open_feature.titlebar", true);
lockPref("dom.disable_window_open_feature.toolbar", true);
lockPref("dom.disable_window_move_resize", true);
lockPref("dom.IntersectionObserver.enabled", false);
lockPref("accessibility.force_disabled", 1);
lockPref("browser.uitour.enabled", false);
lockPref("browser.uitour.url", "");
lockPref("middlemouse.contentLoadURL", false);
lockPref("permissions.manager.defaultsUrl", "");
