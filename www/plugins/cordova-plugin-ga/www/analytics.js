cordova.define("cordova-plugin-ga.UniversalAnalytics", function(require, exports, module) {
function UniversalAnalyticsPlugin() {}

UniversalAnalyticsPlugin.prototype.startTrackerWithId = function(id, success, error) {
  cordova.exec(success, error, 'UniversalAnalytics', 'startTrackerWithId', [id]);
};

UniversalAnalyticsPlugin.prototype.setUserId = function(id, success, error) {
  cordova.exec(success, error, 'UniversalAnalytics', 'setUserId', [id]);
};

UniversalAnalyticsPlugin.prototype.trackView = function(screen, success, error) {
  cordova.exec(success, error, 'UniversalAnalytics', 'trackView', [screen]);
};

UniversalAnalyticsPlugin.prototype.addCustomDimension = function(key, value, success, error) {
  cordova.exec(success, error, 'UniversalAnalytics', 'addCustomDimension', [key, value]);
};

UniversalAnalyticsPlugin.prototype.trackEvent = function(category, action, label, value, success, error) {
  if (typeof label === 'undefined' || label === null) {
    label = '';
  }
  if (typeof value === 'undefined' || value === null) {
    value = 0;
  }

  cordova.exec(success, error, 'UniversalAnalytics', 'trackEvent', [category, action, label, value]);
};

/**
 * https://developers.google.com/analytics/devguides/collection/android/v3/exceptions
 */
UniversalAnalyticsPlugin.prototype.trackException = function(description, fatal, success, error) {
  cordova.exec(success, error, 'UniversalAnalytics', 'trackException', [description, fatal]);
};

UniversalAnalyticsPlugin.prototype.trackTiming = function(category, intervalInMilliseconds, name, label, success, error) {
  if (typeof intervalInMilliseconds === 'undefined' || intervalInMilliseconds === null) {
    intervalInMilliseconds = 0;
  }
  if (typeof name === 'undefined' || name === null) {
    name = '';
  }
  if (typeof label === 'undefined' || label === null) {
    label = '';
  }

  cordova.exec(success, error, 'UniversalAnalytics', 'trackTiming', [category, intervalInMilliseconds, name, label]);
};

/* automatic uncaught exception tracking */
UniversalAnalyticsPlugin.prototype.enableUncaughtExceptionReporting = function (enable, success, error) {
  cordova.exec(success, error, 'UniversalAnalytics', 'enableUncaughtExceptionReporting', [enable]);
};

module.exports = new UniversalAnalyticsPlugin();

});
