// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performance 1/5
// Defaulting settings - HW Settings can be checked under about:support
// Bench Diff : +650/5000
// >>>>>>>>>>>>>>>>>>>>>>

// Bench Diff : +100/5000
// Pref : Increases animation speed. May mitigate choppy scrolling.
defaultPref("layout.frame_rate.precise", true);

// Bench Diff : +500/5000
// Pref : Enable Hardware Acceleration and Off Main Thread Compositing (OMTC).
// It's likely your browser is already set to use these features.
// May introduce instability on some hardware.
// Tor compatibility - have inverted values in tor.
defaultPref("webgl.force-enabled", true);
defaultPref("layers.acceleration.force-enabled", true);

// Pref : 2508: disable hardware acceleration to reduce graphics fingerprinting
// [SETTING] General>Performance>Custom>Use hardware acceleration when available
// [SETUP-PERF] Affects text rendering (fonts will look different) and impacts video performance.
// Parts of Quantum that utilize the GPU will also be affected as they are rolled out
// [1] https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration
// Resolved by extension
defaultPref("gfx.direct2d.disabled", false); // [WINDOWS]
defaultPref("layers.acceleration.disabled", false);

// Bench Diff : 0/5000
// Pref :
defaultPref("html5.offmainthread", true); //default true
defaultPref("layers.offmainthreadcomposition.enabled", true);
defaultPref("layers.offmainthreadcomposition.async-animations", true);
defaultPref("layers.async-video.enabled", true);

// Bench Diff : +50/5000
// Pref : Deprecated Active
defaultPref("browser.tabs.animate", false);

// Pref : The impact for this one is negligible
//defaultPref("browser.download.animateNotifications", false);

// Bench Diff : -80/5000
// Pref : Spoof CPU Core Def 16
// Default settings seems to be the best
//defaultPref("dom.maxHardwareConcurrency", 8);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performance 2/5
// Bench Diff : -800/5000
// >>>>>>>>>>>>>>>>>>>>>>

// Bench Diff : -500/5000
// Pref : Tell garbage collector to start running when javascript is using xx MB of memory.
// Garbage collection releases memory back to the system.
// Default settings seems to be the best
//lockPref("javascript.options.mem.high_water_mark", 96);

// Bench Diff : -200/5000
// Pref : Disable WebAssembly
// https://webassembly.org/
// https://en.wikipedia.org/wiki/WebAssembly
// https://trac.torproject.org/projects/tor/ticket/21549
// Solved by extension disabled here for performance
//lockPref("javascript.options.wasm", false);

// Bench Diff : -100/5000
// Pref : Prevent font fingerprinting
// https://browserleaks.com/fonts
// https://github.com/pyllyukko/user.js/issues/120
// Solved by extension disabled here for performance
//lockPref("browser.display.use_document_fonts", 0);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performance 3/5
// Bench Diff : -1720/5000
// >>>>>>>>>>>>>>>>>>>>>>>

// Bench Diff : -220/5000
// Pref : Disable webGL I/II
// WebGL introduces high fingerprinting (WebGL is a js API for directly accessing hardware)
defaultPref("webgl.disabled", false); // Tor have it false but the rest is the same (webgl)
// This does not leak
lockPref("webgl.enable-webgl2", false);
lockPref("webgl.min_capability_mode", true);

// Bench Diff : 0/5000
// Pref : Disable webGL II/II
// WebGL introduces high fingerprinting (WebGL is a js API for directly accessing hardware)
lockPref("pdfjs.enableWebGL", false);
lockPref("webgl.disable-extensions", true);
lockPref("webgl.disable-fail-if-major-performance-caveat", true);
lockPref("webgl.enable-debug-renderer-info", false); //Deprecated Active

// Bench Diff : -1500/5000
// Pref : Disable asm.js
// http://asmjs.org/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/
// https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/
// https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712
// Solved by extension disabled here for performance
// Tor enforce this
//lockPref("javascript.options.asmjs", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performance 4/5
// Bench Diff : -200/5000
// >>>>>>>>>>>>>>>>>>>>>>

// Bench Diff : -200/5000
// Pref : JS Shared Memory - Default false
// https://github.com/MrAlex94/Waterfox/issues/356
lockPref("javascript.options.shared_memory", false);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Section : Performance 5/5
// Bench Diff : -50/5000
// >>>>>>>>>>>>>>>>>>>>>

// Bench Diff : -50/5000
// Pref : 2302 : disable service workers
// Service workers essentially act as proxy servers that sit between web apps, and the browser
// and network. They are event-driven, and can control the web page/site it is associated with,
// intercepting and modifying navigation and resource requests, and caching resources.
// SW may decrease performance depending on the script that is running in background.
// So overall, disabling SW should enhance performance because it blocks SW Scripts.
// [NOTE] Service worker APIs are hidden (in Firefox) and cannot be used when in PB mode.
// [NOTE] Service workers only run over HTTPS. Service Workers have no DOM access.
lockPref("dom.serviceWorkers.enabled", false);
