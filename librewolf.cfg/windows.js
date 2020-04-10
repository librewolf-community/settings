// Pref : Other webGl [WINDOWS]
lockPref("webgl.dxgl.enabled", false);

// Pref : disable scanning for plugins [WINDOWS]
lockPref("plugin.scan.plid.all", false);

// Pref : disable Windows jumplist [WINDOWS]
lockPref("browser.taskbar.lists.enabled", false);
lockPref("browser.taskbar.lists.frequent.enabled", false);
lockPref("browser.taskbar.lists.recent.enabled", false);
lockPref("browser.taskbar.lists.tasks.enabled", false);

// Pref : disable Windows taskbar preview [WINDOWS]
lockPref("browser.taskbar.previews.enable", false);

// Pref : disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS]
// [1] https://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/
lockPref("network.protocol-handler.external.ms-windows-store", false);

// Pref : disable background update service [WINDOWS]
// [SETTING] General>Firefox Updates>Use a background service to install updates
lockPref("app.update.service.enabled", false);

// Pref : disable automatic Firefox start and session restore after reboot [WINDOWS] (FF62+)
// [1] https://bugzilla.mozilla.org/603903
lockPref("toolkit.winRegisterApplicationRestart", false);

// Pref : 1220: disable Windows 8.1's Microsoft Family Safety cert [WINDOWS] (FF50+)
// 0=disable detecting Family Safety mode and importing the root
// 1=only attempt to detect Family Safety mode (don't import the root)
// 2=detect Family Safety mode and import the root
// [1] https://trac.torproject.org/projects/tor/ticket/21686
lockPref("security.family_safety.mode", 0);
