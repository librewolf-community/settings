// ----------------------------------------------------------------------------------
// Extensions Firewalling - Blocking Domains :
// -------------------------------------------

// !!!!!!!!!!!!!!!!!!! Important !!!!!!!!!!!!!!!!!!!
// Please check readme section "Extensions Firewall"

// Pref : Restricted Domains I/II
// This will allow extensions to work everywhere
defaultPref("extensions.webextensions.restrictedDomains", "");
// Default Value : available in "debug-notes.log"

// Pref : Restricted Domains II/II
// Old restrictedDomains implementation
// Redirect basedomain used by identity api
lockPref("extensions.webextensions.identity.redirectDomain", "");
// Default Value : "extensions.allizom.org"

// ----------------------------------------------------------------------------------
// Extensions Firewalling - Blocking The Network :
// -----------------------------------------------

// !!!!!!!!!!!!!!!!!!! Important !!!!!!!!!!!!!!!!!!!
// Please check readme section "Extensions Firewall"

// Pref : CSP Settings For Extensions I/II : Extension Firewall Feature
// Uncomment to disable network for the extensions
// Enable-Firewall-Feature-In-The-Next-Line extensions-firewall >>>>>>
defaultPref("extensions.webextensions.base-content-security-policy", "script-src 'self' https://* moz-extension: blob: filesystem: 'unsafe-eval' 'unsafe-inline'; object-src 'self' https://* moz-extension: blob: filesystem:;");

// Pref : CSP Settings For Extensions II/II : Extension Firewall Feature
// This value is applied after the first one (just ignore this)
//defaultPref("extensions.webextensions.default-content-security-policy", "script-src 'self'; object-src 'self';");
// Default Value : "script-src 'self'; object-src 'self';"

// ----------------------------------------------------------------------------------
// Extensions Firewalling - CSP Main Settings  :
// ---------------------------------------------

// !!!!!!!!!!!!!!!!!!! Important !!!!!!!!!!!!!!!!!!!
// Please check readme section "Extensions Firewall"

// Pref : CSP Main Settings I/II :
// Those are default values for CSP
// Those are not meant to to be uncommented
//defaultPref("security.csp.enable", true);                                                     //This is its default value
//defaultPref("security.csp.enableStrictDynamic", true);                                        //This is its default value
//defaultPref("security.csp.enable_violation_events", true);                                    //This is its default value
//defaultPref("security.csp.experimentalEnabled", false);                                       //This is its default value
//defaultPref("security.csp.reporting.script-sample.max-length", 40);                           //This is its default value
// Default Content Security Policy to apply to signed contents.
//defaultPref("security.signed_content.CSP.default", "script-src 'self'; style-src 'self'");    //This is its default value

// Pref : Enable Content Security Policy (CSP)
// https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
lockPref("security.csp.enable", true);

// Pref : Enable CSP 1.1 script-nonce directive support
// https://bugzilla.mozilla.org/show_bug.cgi?id=855326
lockPref("security.csp.experimentalEnabled", true);

// Pref : CSP Main Settings II/II : Pref : 2681 : Disable CSP Violation Events [FF59+]
// [1] https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent
// [-] https://bugzilla.mozilla.org/1488165
// Setting removed in firefox v64
lockPref("security.csp.enable_violation_events", false); //Deprecated Active

// ----------------------------------------------------------------------------------
// Extensions Security :
// ---------------------

// Pref : Enable tab-hiding API by default.
defaultPref("extensions.webextensions.tabhide.enabled", false); //Default true

// ----------------------------------------------------------------------------------
// Extensions IJWY :
// -----------------

// Pref : Report Site Issue button
lockPref("extensions.webcompat-reporter.newIssueEndpoint", "");
// Default Value
// https://webcompat.com/issues/new

// Pref : 0518 : disable Web Compatibility Reporter (FF56+)
// Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla
// Report Site Issue button
// Note that on enabling the button in other release channels, make sure to
// disable it in problematic tests, see disableNonReleaseActions() inside
// browser/modules/test/browser/head.js
lockPref("extensions.webcompat-reporter.enabled", false); // Default true

// ----------------------------------------------------------------------------------
// Extensions Performance :
// ------------------------

// Pref : Delaying extensions background script startup
defaultPref("extensions.webextensions.background-delayed-startup", true); //default true

// Pref :Whether or not the installed extensions should be migrated to the
// storage.local IndexedDB backend.
//defaultPref("extensions.webextensions.ExtensionStorageIDB.enabled", false); //default false

// Pref : if enabled, store execution times for API calls
//defaultPref("extensions.webextensions.enablePerformanceCounters", false); //default false

// Pref : Maximum age in milliseconds of performance counters in children
// When reached, the counters are sent to the main process and
// reset, so we reduce memory footprint.
//defaultPref("extensions.webextensions.performanceCountersMaxAge", 1000); //Hidden prefs
