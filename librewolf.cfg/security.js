// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Security 1/3
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref : Enable insecure password warnings (login forms in non-HTTPS pages)
// https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1319119
// https://bugzilla.mozilla.org/show_bug.cgi?id=1217156
lockPref("security.insecure_password.ui.enabled", true);

// Pref : Show in-content login form warning UI for insecure login fields
// https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317
lockPref("security.insecure_field_warning.contextual.enabled", true);

// Pref : Disable HSTS preload list (pre-set HSTS sites list provided by Mozilla)
// https://blog.mozilla.org/security/2012/11/01/preloading-hsts/
// https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List
// https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security
lockPref("network.stricttransportsecurity.preloadlist",	false);

// Pref : Disable TLS Session Tickets
// https://www.blackhat.com/us-13/briefings.html#NextGen
// https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-Slides.pdf
// https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-WP.pdf
// https://bugzilla.mozilla.org/show_bug.cgi?id=917049
// https://bugzilla.mozilla.org/show_bug.cgi?id=967977
// SSL Session IDs speed up HTTPS connections (no need to renegotiate) and last for 48hrs.
// Since the ID is unique, web servers can (and do) use it for tracking. If set to true,
// this disables sending SSL Session IDs and TLS Session Tickets to prevent session tracking
lockPref("security.ssl.disable_session_identifiers", true);

// Pref : Blocking GD Parking Scam Site
// TODO: do we still need this? librefox.com isn't relevant anymore and this pretty much
// only tells LibreWolf to look for librefox.com locally
defaultPref("network.dns.localDomains", "librefox.com");

// Pref : Disable insecure TLS version fallback
// https://bugzilla.mozilla.org/show_bug.cgi?id=1084025
// https://github.com/pyllyukko/user.js/pull/206#issuecomment-280229645
lockPref("security.tls.version.fallback-limit", 3);

// Pref : Only allow TLS 1.[0-3]
// http://kb.mozillazine.org/Security.tls.version.*
lockPref("security.tls.version.min", 2);

// Pref : Enfore Public Key Pinning
// https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning
// https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning
// "2. Strict. Pinning is always enforced."
lockPref("security.cert_pinning.enforcement_level", 2);

// Pref : Disallow SHA-1
// https://bugzilla.mozilla.org/show_bug.cgi?id=1302140
// https://shattered.io/
lockPref("security.pki.sha1_enforcement_level", 1);

// Pref : Warn the user when server doesn't support RFC 5746 ("safe" renegotiation)
// https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-3555
lockPref("security.ssl.treat_unsafe_negotiation_as_broken",	true);

// Pref : Pre-populate the current URL but do not pre-fetch the certificate in the
// "Add Security Exception" dialog
// http://kb.mozillazine.org/Browser.ssl_override_behavior
// https://github.com/pyllyukko/user.js/issues/210
lockPref("browser.ssl_override_behavior", 1);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Security 2/3
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref :
lockPref("security.ssl.errorReporting.automatic", false);
lockPref("security.ssl.errorReporting.url", "");

// Pref : Check disabled section
// OCSP leaks the visited sites. Exactly same issue as with safebrowsing.
// Stapling forces the site to prove that its certificate is good
// through the CA, so apparently nothing is leaked in this case.
// [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
lockPref("security.OCSP.enabled", 0);
lockPref("security.OCSP.require", false);
lockPref("security.ssl.enable_ocsp_stapling", true);

// Pref :
lockPref("security.ssl.errorReporting.enabled", false);

// Pref : Manage certificates button
//lockPref("security.disable_button.openCertManager", false);
// Disabled because of a bug that disables the button regardless of its value

// Pref : Manage security devices button
//lockPref("security.disable_button.openDeviceManager", false);
// Disabled because of a bug that disables the button regardless of its value

// Pref :
lockPref("security.mixed_content.upgrade_display_content", true);
lockPref("security.mixed_content.block_object_subrequest", true);
lockPref("security.mixed_content.block_display_content", true);
lockPref("security.mixed_content.block_active_content", true);

// Pref :
lockPref("security.insecure_connection_icon.enabled", true);
lockPref("security.insecure_connection_icon.pbmode.enabled", true);
lockPref("security.insecure_connection_text.enabled", true);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Security 3/3 (Cipher)
// Bench Diff : +0/5000
// >>>>>>>>>>>>>>>>>>>>

// Pref :
lockPref("security.ssl3.rsa_des_ede3_sha", false);
lockPref("security.ssl3.rsa_aes_256_sha", false);
lockPref("security.ssl3.rsa_aes_128_sha", false);

// Pref : Disable RC4
// https://developer.mozilla.org/en-US/Firefox/Releases/38#Security
// https://bugzilla.mozilla.org/show_bug.cgi?id=1138882
// https://rc4.io/
// https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566
lockPref("security.ssl3.ecdh_ecdsa_rc4_128_sha", false);
lockPref("security.ssl3.ecdh_rsa_rc4_128_sha", false);

// Pref : Disable SEED cipher
// https://en.wikipedia.org/wiki/SEED
lockPref("security.ssl3.rsa_seed_sha", false);
