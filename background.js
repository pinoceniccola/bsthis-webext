
/**
 *  Web Extension API, state of the art.
 *  
 *  We're going to use the "chrome" APIs based on callbacks
 *  until this mess is cleared:
 *  https://github.com/mozilla/webextension-polyfill/issues/3
 *  https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9421085/
 *
 *  Long story short: Microsoft did it wrong again using the new 
 *  standard "browser" namespace but based on the old "chrome" APIs
 *  (using callbacks instead of promises).
 *
 *  Temporary fix: Firefox supports both "browser" (promise based) and
 *  "chrome" (callback based), Edge supports only "browser" but callback
 *  based. So, for maximum cross-browser compatibilty we use "chrome" where 
 *  available (Firefox and Chrome) and create a "chrome" alias in MS Edge. 
 */

// Call things with its own name in Edge:
if (typeof chrome === "undefined") window.chrome = window.browser;


// Here's where the magic happens:
chrome.browserAction.onClicked.addListener(() => {

  chrome.tabs.insertCSS({file: "bs.css"});

});