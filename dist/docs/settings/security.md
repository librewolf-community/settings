---
title: Security
---


## `security.insecure_password.ui.enabled`

Status: **locked**

Value: `true`

*Enable insecure password warnings (login forms in non-HTTPS pages)*



### References

[https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/](https://blog.mozilla.org/tanvi/2016/01/28/no-more-passwords-over-http-please/)

[https://bugzilla.mozilla.org/show_bug.cgi?id=1319119](https://bugzilla.mozilla.org/show_bug.cgi?id=1319119)

[https://bugzilla.mozilla.org/show_bug.cgi?id=1217156](https://bugzilla.mozilla.org/show_bug.cgi?id=1217156)


## `security.insecure_field_warning.contextual.enabled`

Status: **locked**

Value: `true`

*Show in-content login form warning UI for insecure login fields*



### References

[https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317](https://hg.mozilla.org/integration/mozilla-inbound/rev/f0d146fe7317)


## `network.stricttransportsecurity.preloadlist`

Status: **locked**

Value: `false`

*Disable HSTS preload list (pre-set HSTS sites list provided by Mozilla)*



### References

[https://blog.mozilla.org/security/2012/11/01/preloading-hsts/](https://blog.mozilla.org/security/2012/11/01/preloading-hsts/)

[https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List](https://wiki.mozilla.org/Privacy/Features/HSTS_Preload_List)

[https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)


## `security.ssl.disable_session_identifiers`

Status: **locked**

Value: `true`

*Disable TLS Session Tickets*



### References

[https://www.blackhat.com/us-13/briefings.html#NextGen](https://www.blackhat.com/us-13/briefings.html#NextGen)

[https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-Slides.pdf](https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-Slides.pdf)

[https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-WP.pdf](https://media.blackhat.com/us-13/US-13-Daigniere-TLS-Secrets-WP.pdf)

[https://bugzilla.mozilla.org/show_bug.cgi?id=917049](https://bugzilla.mozilla.org/show_bug.cgi?id=917049)

[https://bugzilla.mozilla.org/show_bug.cgi?id=967977](https://bugzilla.mozilla.org/show_bug.cgi?id=967977)


## `network.dns.localDomains`

Status: **unlocked**

Value: `"librefox.com"`

*Blocking GD Parking Scam Site*


## `security.tls.version.fallback-limit`

Status: **locked**

Value: `3`

*Disable insecure TLS version fallback*



### References

[https://bugzilla.mozilla.org/show_bug.cgi?id=1084025](https://bugzilla.mozilla.org/show_bug.cgi?id=1084025)

[https://github.com/pyllyukko/user.js/pull/206#issuecomment-280229645](https://github.com/pyllyukko/user.js/pull/206#issuecomment-280229645)


## `security.tls.version.min`

Status: **locked**

Value: `2`

*Only allow TLS 1.[0-3]*



### References

[http://kb.mozillazine.org/Security.tls.version.*](http://kb.mozillazine.org/Security.tls.version.*)


## `security.cert_pinning.enforcement_level`

Status: **locked**

Value: `2`

*Enfore Public Key Pinning*



### References

[https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning](https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning)

[https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)


## `security.pki.sha1_enforcement_level`

Status: **locked**

Value: `1`

*Disallow SHA-1*



### References

[https://bugzilla.mozilla.org/show_bug.cgi?id=1302140](https://bugzilla.mozilla.org/show_bug.cgi?id=1302140)

[https://shattered.io/](https://shattered.io/)


## `security.ssl.treat_unsafe_negotiation_as_broken`

Status: **locked**

Value: `true`

*Warn the user when server doesn't support RFC 5746 ('safe' renegotiation)*



### References

[https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken](https://wiki.mozilla.org/Security:Renegotiation#security.ssl.treat_unsafe_negotiation_as_broken)

[https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-3555](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-3555)


## `browser.ssl_override_behavior`

Status: **locked**

Value: `1`

*Pre-populate the current URL but do not pre-fetch the certificate in the 'Add Security Exception' dialog*



### References

[http://kb.mozillazine.org/Browser.ssl_override_behavior](http://kb.mozillazine.org/Browser.ssl_override_behavior)

[https://github.com/pyllyukko/user.js/issues/210](https://github.com/pyllyukko/user.js/issues/210)


## `security.ssl.errorReporting.automatic`

Status: **locked**

Value: `false`


## `security.ssl.errorReporting.url`

Status: **locked**

Value: `""`


## `security.OCSP.enabled`

Status: **locked**

Value: `0`


## `security.OCSP.require`

Status: **locked**

Value: `false`


## `security.ssl.enable_ocsp_stapling`

Status: **locked**

Value: `true`



### References

[https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/](https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/)


## `security.ssl.errorReporting.enabled`

Status: **locked**

Value: `false`


## `security.disable_button.openCertManager`

**Unused Setting**

Status: **locked**

Value: `false`

*Manage certificates button*


## `security.disable_button.openDeviceManager`

**Unused Setting**

Status: **locked**

Value: `false`

*Manage security devices button*


## `security.mixed_content.upgrade_display_content`

Status: **locked**

Value: `true`


## `security.mixed_content.block_object_subrequest`

Status: **locked**

Value: `true`


## `security.mixed_content.block_display_content`

Status: **locked**

Value: `true`


## `security.mixed_content.block_active_content`

Status: **locked**

Value: `true`


## `security.insecure_connection_icon.enabled`

Status: **locked**

Value: `true`


## `security.insecure_connection_icon.pbmode.enabled`

Status: **locked**

Value: `true`


## `security.insecure_connection_text.enabled`

Status: **locked**

Value: `true`


## `security.ssl3.rsa_des_ede3_sha`

Status: **locked**

Value: `false`


## `security.ssl3.rsa_aes_256_sha`

Status: **locked**

Value: `false`


## `security.ssl3.rsa_aes_128_sha`

Status: **locked**

Value: `false`


## `security.ssl3.ecdh_ecdsa_rc4_128_sha`

Status: **locked**

Value: `false`

*Disable RC4*



### References

[https://developer.mozilla.org/en-US/Firefox/Releases/38#Security](https://developer.mozilla.org/en-US/Firefox/Releases/38#Security)

[https://bugzilla.mozilla.org/show_bug.cgi?id=1138882](https://bugzilla.mozilla.org/show_bug.cgi?id=1138882)

[https://rc4.io/](https://rc4.io/)

[https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566)


## `security.ssl3.ecdh_rsa_rc4_128_sha`

Status: **locked**

Value: `false`

*Disable RC4*



### References

[https://developer.mozilla.org/en-US/Firefox/Releases/38#Security](https://developer.mozilla.org/en-US/Firefox/Releases/38#Security)

[https://bugzilla.mozilla.org/show_bug.cgi?id=1138882](https://bugzilla.mozilla.org/show_bug.cgi?id=1138882)

[https://rc4.io/](https://rc4.io/)

[https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2566)


## `security.ssl3.rsa_seed_sha`

Status: **locked**

Value: `false`

*Disable SEED cipher*



### References

[https://en.wikipedia.org/wiki/SEED](https://en.wikipedia.org/wiki/SEED)


