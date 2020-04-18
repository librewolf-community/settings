
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
