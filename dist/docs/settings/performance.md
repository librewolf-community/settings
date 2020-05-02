---
title: Performance
---


## `layout.frame_rate.precise`

Status: **unlocked**

Value: `true`

*Increases animation speed*


## `webgl.force-enabled`

Status: **unlocked**

Value: `true`

*Enable Hardware Acceleration and Off Main Thread Compositing (OMTC)*


## `layers.acceleration.force-enabled`

Status: **unlocked**

Value: `true`

*Enable Hardware Acceleration and Off Main Thread Compositing (OMTC)*


## `gfx.direct2d.disabled`

Status: **unlocked**

Value: `false`

*Disable hardware acceleration to reduce graphics fingerprinting*



### References

[https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration](https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration)


## `layers.acceleration.disabled`

Status: **unlocked**

Value: `false`

*Disable hardware acceleration to reduce graphics fingerprinting*



### References

[https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration](https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration)


## `html5.offmainthread`

Status: **unlocked**

Value: `true`


## `layers.offmainthreadcomposition.enabled`

Status: **unlocked**

Value: `true`


## `layers.offmainthreadcomposition.async-animations`

Status: **unlocked**

Value: `true`


## `layers.async-video.enabled`

Status: **unlocked**

Value: `true`


## `browser.tabs.animate`

Status: **unlocked**

Value: `false`


## `browser.download.animateNotifications`

**Unused Setting**

Status: **unlocked**

Value: `false`


## `dom.maxHardwareConcurrency`

**Unused Setting**

Status: **unlocked**

Value: `8`

*Spoof CPU Core Def 16*


## `javascript.options.mem.high_water_mark`

**Unused Setting**

Status: **locked**

Value: `96`

*Tell garbage collector to start running when javascript is using xx MB of memory.*


## `javascript.options.wasm`

**Unused Setting**

Status: **locked**

Value: `false`

*Disable WebAssembly*



### References

[https://webassembly.org/](https://webassembly.org/)

[https://en.wikipedia.org/wiki/WebAssembly](https://en.wikipedia.org/wiki/WebAssembly)

[https://trac.torproject.org/projects/tor/ticket/21549](https://trac.torproject.org/projects/tor/ticket/21549)


## `browser.display.use_document_fonts`

**Unused Setting**

Status: **locked**

Value: `0`

*Prevent font fingerprinting*



### References

[https://browserleaks.com/fonts](https://browserleaks.com/fonts)

[https://github.com/pyllyukko/user.js/issues/120](https://github.com/pyllyukko/user.js/issues/120)


## `webgl.disabled`

Status: **unlocked**

Value: `false`


## `webgl.enable-webgl2`

Status: **locked**

Value: `false`

*This prevents WebGL data leaks*


## `webgl.min_capability_mode`

Status: **locked**

Value: `true`

*This prevents WebGL data leaks*


## `pdfjs.enableWebGL`

Status: **locked**

Value: `false`


## `webgl.disable-extensions`

Status: **locked**

Value: `true`


## `webgl.disable-fail-if-major-performance-caveat`

Status: **locked**

Value: `true`


## `webgl.enable-debug-renderer-info`

Status: **locked**

Value: `false`


## `javascript.options.asmjs`

**Unused Setting**

Status: **locked**

Value: `false`

*Disable asm.js*



### References

[http://asmjs.org/](http://asmjs.org/)

[https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/](https://www.mozilla.org/en-US/security/advisories/mfsa2015-29/)

[https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/](https://www.mozilla.org/en-US/security/advisories/mfsa2015-50/)

[https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2015-2712)


## `javascript.options.shared_memory`

Status: **locked**

Value: `false`

*JS Shared Memory*



### References

[https://github.com/MrAlex94/Waterfox/issues/356](https://github.com/MrAlex94/Waterfox/issues/356)


## `dom.serviceWorkers.enabled`

Status: **locked**

Value: `false`

*Disable service workers*


