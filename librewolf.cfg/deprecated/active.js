// Pref : 0516 : disable Onboarding (FF55+)
// Onboarding is an interactive tour/setup for new installs/profiles and features. Every time
// about:home or about:newtab is opened, the onboarding overlay is injected into it
// [NOTE] Onboarding uses Google Analytics [2], and leaks resource://URIs [3]
// [1] https://wiki.mozilla.org/Firefox/Onboarding
// [2] https://github.com/mozilla/onboard/commit/db4d6c8726c89a5d6a241c1b1065827b525c5baf
// [3] https://bugzilla.mozilla.org/863246#c154
lockPref("browser.onboarding.enabled", false); // Removed in v64 //Deprecated Active

// Pref : Disable WebIDE Web Debug Extension
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
lockPref("devtools.webide.autoinstallADBHelper", false);
// Replaced by "devtools.webide.autoinstallADBExtension" in 64

// Pref : Disable raw TCP socket support (mozTCPSocket)
// https://trac.torproject.org/projects/tor/ticket/18863
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-97/
// https://developer.mozilla.org/docs/Mozilla/B2G_OS/API/TCPSocket
// is only exposed to chrome ( https://trac.torproject.org/projects/tor/ticket/27268#comment:2 )
// Not important
lockPref("dom.mozTCPSocket.enabled", false);

// Pref : Enforce checking for Firefox updates
lockPref("app.update.enabled", false);

// Pref : Disable bookmark backups (default: 15)
// http://kb.mozillazine.org/Browser.bookmarks.max_backups
lockPref("browser.bookmarks.max_backups", 2);

// Pref : Disable SSDP
// https://bugzilla.mozilla.org/show_bug.cgi?id=1111967
lockPref("browser.casting.enabled", false);

// Pref :
lockPref("browser.newtabpage.activity-stream.enabled", false);
lockPref("browser.newtabpage.directory.ping", "data:text/plain,");
lockPref("browser.newtabpage.directory.source", "data:text/plain,");
lockPref("browser.newtabpage.enhanced", false);

// Pref :
lockPref("browser.pocket.enabled", false);

// Pref : Disable Heartbeat  (Mozilla user rating telemetry)
// https://wiki.mozilla.org/Advocacy/heartbeat
// https://trac.torproject.org/projects/tor/ticket/19047
lockPref("browser.selfsupport.url", "");

// Pref : Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
// Already enforced with 'privacy.resistFingerprinting' ?
lockPref("browser.startup.homepage_override.mstone", "ignore");

// Pref : Disable face detection
lockPref("camera.control.face_detection.enabled", false);

// Pref :
lockPref("datareporting.healthreport.about.reportUrl", "data:,");
lockPref("datareporting.healthreport.service.enabled", false);

// Pref :
lockPref("device.sensors.enabled", false);

// Pref : Disable WebIDE Web Debug
// https://trac.torproject.org/projects/tor/ticket/16222
// https://developer.mozilla.org/docs/Tools/WebIDE
lockPref("devtools.webide.autoinstallFxdtAdapters", false);
lockPref("devtools.webide.adaptersAddonURL", "");

// Pref : Disable resource timing API
// https://www.w3.org/TR/resource-timing/#privacy-security
lockPref("dom.enable_resource_timing", false);

// Pref : Disable FlyWeb (discovery of LAN/proximity IoT devices that expose a Web interface)
// https://wiki.mozilla.org/FlyWeb
// https://wiki.mozilla.org/FlyWeb/Security_scenarios
// https://docs.google.com/document/d/1eqLb6cGjDL9XooSYEEo7mE-zKQ-o-AuDTcEyNhfBMBM/edit
// http://www.ghacks.net/2016/07/26/firefox-flyweb
lockPref("dom.flyweb.enabled", false);

// Pref :
lockPref("dom.gamepad.enabled", false);

// Pref : Disable leaking network/browser connection information via Javascript
// Network Information API provides general information about the system's connection type (WiFi, cellular, etc.)
// https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API
// https://wicg.github.io/netinfo/#privacy-considerations
// https://bugzilla.mozilla.org/show_bug.cgi?id=960426
lockPref("dom.netinfo.enabled", false);

// Pref : 2306: disable push notifications (FF44+)
// web apps can receive messages pushed to them from a server, whether or
// not the web app is in the foreground, or even currently loaded
// [1] https://developer.mozilla.org/docs/Web/API/Push_API
lockPref("dom.push.udp.wakeupEnabled", false); //UDP Wake-up

// Pref : Disable telephony API
// https://wiki.mozilla.org/WebAPI/Security/WebTelephony
lockPref("dom.telephony.enabled", false);

// Pref : Disable SHIELD
// https://support.mozilla.org/en-US/kb/shield
// https://bugzilla.mozilla.org/show_bug.cgi?id=1370801
lockPref("extensions.shield-recipe-client.enabled", false);

// Pref : Disable Firefox Hello metrics collection
// https://groups.google.com/d/topic/mozilla.dev.platform/nyVkCx-_sFw/discussion
lockPref("loop.logDomains", false);

// Pref : Disable video stats to reduce fingerprinting threat
// https://bugzilla.mozilla.org/show_bug.cgi?id=654550
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-100468785
// https://github.com/pyllyukko/user.js/issues/9#issuecomment-148922065
lockPref("media.video_stats.enabled", false);

// Pref : WebSockets is a technology that makes it possible to open an interactive communication
// session between the user's browser and a server. (May leak IP when using proxy/VPN)
lockPref("network.websocket.enabled", false);

// Pref : Disable Reader
// Not deprecated but useful to be located here
lockPref("reader.parse-on-load.enabled", false);

// CIS 2.7.4 Disable Scripting of Plugins by JavaScript
// http://forums.mozillazine.org/viewtopic.php?f=7&t=153889
lockPref("security.xpconnect.plugin.unrestricted", false);

// Pref :
lockPref("social.directories", "");

// Pref :
lockPref("social.remote-install.enabled", false);

// Pref :
lockPref("social.whitelist", "");

// Pref : Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
lockPref("security.ssl3.ecdhe_ecdsa_rc4_128_sha", false);
lockPref("security.ssl3.ecdhe_rsa_rc4_128_sha", false);
lockPref("security.ssl3.rsa_rc4_128_md5", false);
lockPref("security.ssl3.rsa_rc4_128_sha", false);
lockPref("security.tls.unrestricted_rc4_fallback", false);
