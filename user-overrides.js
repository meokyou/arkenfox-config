/* User overrides */
// Disable Pocket extension
user_pref("extensions.pocket.enabled", false);
// Disable Mozilla account
user_pref("identity.fxaccounts.enabled", false);

// Set Quad9 as DoH resolver as TRR
user_pref("network.trr.mode", 2);
user_pref("network.trr.custom_uri", "Quad9");
user_pref("network.trr.uri", "https://dns11.quad9.net/dns-query");
user_pref("netowkr.trr.bootstrapAddress", "9.9.9.11");

// Disable Safe Browsing
user_pref("browser.safebrowsing.malware.enabled", false); 
user_pref("browser.safebrowsing.phishing.enabled", false); 
user_pref("browser.safebrowsing.downloads.enabled", false);

// Clear data on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.cookies", true);

// Enable keyword search
user_pref("keyword.enabled", true);

// Disable saving logons
user_pref("signon.rememberSignons", false);

// Remember more closed tabs for undo
user_pref("browser.sessionstore.max_tabs_undo", 25);

// Disable weak ciphers
user_pref("security.ssl3.rsa_des_ede3_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_aes_128_sha", false);
user_pref("security.ssl3.rsa_aes_256_sha", false);

// Disable letterboxing
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Always send CROSS ORIGIN referer
user_pref("network.http.referer.XOriginPolicy", 0);
