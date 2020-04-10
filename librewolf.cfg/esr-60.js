// Pref : Geolocation
lockPref("browser.search.countryCode", "US");

// Pref : Disable Mozilla telemetry/experiments
// https://wiki.mozilla.org/Platform/Features/Telemetry
// https://wiki.mozilla.org/Privacy/Reviews/Telemetry
// https://wiki.mozilla.org/Telemetry
// https://www.mozilla.org/en-US/legal/privacy/firefox.html#telemetry
// https://support.mozilla.org/t5/Firefox-crashes/Mozilla-Crash-Reporter/ta-p/1715
// https://wiki.mozilla.org/Security/Reviews/Firefox6/ReviewNotes/telemetry
// https://gecko.readthedocs.io/en/latest/browser/experiments/experiments/manifest.html
// https://wiki.mozilla.org/Telemetry/Experiments
// https://support.mozilla.org/en-US/questions/1197144
lockPref("experiments.activeExperiment", false);
lockPref("experiments.enabled", false);
lockPref("experiments.manifest.uri", "");
lockPref("experiments.supported", false);

// Pref : 2612: disable remote JAR files being opened, regardless of content type (FF42+)
// [1] https://bugzilla.mozilla.org/1173171
// [2] https://www.fxsitecompat.com/en-CA/docs/2015/jar-protocol-support-has-been-disabled-by-default/
// [-] https://bugzilla.mozilla.org/1427726
lockPref("network.jar.block-remote-files", true);

// Pref : 2613: disable JAR from opening Unsafe File Types
// [-] https://bugzilla.mozilla.org/1427726
lockPref("network.jar.open-unsafe-types", false);

// Pref : Disable Java NPAPI plugin
lockPref("plugin.state.java", 0);

// Pref : 0402: enable Kinto blocklist updates (FF50+)
// What is Kinto?: https://wiki.mozilla.org/Firefox/Kinto#Specifications
// As Firefox transitions to Kinto, the blocklists have been broken down into entries for certs to be
// revoked, extensions and plugins to be disabled, and gfx environments that cause problems or crashes
// [-] https://bugzilla.mozilla.org/1458917
lockPref("services.blocklist.update_enabled", false);

// Pref : 0503: disable "Savant" Shield study (FF61+)
// [-] https://bugzilla.mozilla.org/1457226
lockPref("shield.savant.enabled", false);
