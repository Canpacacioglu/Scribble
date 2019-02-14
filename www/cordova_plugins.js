cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "nl-afas-cordova-plugin-securelocalstorage.SecureLocalStorage",
        "file": "plugins/nl-afas-cordova-plugin-securelocalstorage/www/plugins.SecureLocalStorage.js",
        "pluginId": "nl-afas-cordova-plugin-securelocalstorage",
        "clobbers": [
            "cordova.plugins.SecureLocalStorage"
        ]
    },
    {
        "id": "cordova-plugin-admobpro.AdMob",
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "id": "cordova-plugin-ga.UniversalAnalytics",
        "file": "plugins/cordova-plugin-ga/www/analytics.js",
        "pluginId": "cordova-plugin-ga",
        "clobbers": [
            "GA"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "org.devgeeks.Canvas2ImagePlugin.Canvas2ImagePlugin",
        "file": "plugins/org.devgeeks.Canvas2ImagePlugin/www/Canvas2ImagePlugin.js",
        "pluginId": "org.devgeeks.Canvas2ImagePlugin",
        "clobbers": [
            "window.canvas2ImagePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "es6-promise-plugin": "3.0.2",
    "nl-afas-cordova-plugin-securelocalstorage": "0.1.14",
    "cordova-plugin-extension": "1.5.1",
    "cordova-plugin-admobpro": "2.19.1",
    "cordova-plugin-ga": "1.3.0",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "org.devgeeks.Canvas2ImagePlugin": "0.6.0"
};
// BOTTOM OF METADATA
});