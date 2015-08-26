/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('vendor/kabu/fonts/bitter/bitter-bold.eot', {
    destDir: 'fonts/bitter'
  });
  app.import('vendor/kabu/fonts/bitter/bitter-bold.svg', {
    destDir: 'fonts/bitter'
  });
  app.import('vendor/kabu/fonts/bitter/bitter-bold.ttf', {
    destDir: 'fonts/bitter'
  });
  app.import('vendor/kabu/fonts/bitter/bitter-bold.woff', {
    destDir: 'fonts/bitter'
  });

  app.import('vendor/kabu/fonts/glyphicons/glyphicons-halflings-regular.eot', {
    destDir: 'fonts/glyphicons'
  });
  app.import('vendor/kabu/fonts/glyphicons/glyphicons-halflings-regular.svg', {
    destDir: 'fonts/glyphicons'
  });
  app.import('vendor/kabu/fonts/glyphicons/glyphicons-halflings-regular.ttf', {
    destdir: 'fonts/glyphicons'
  });
  app.import('vendor/kabu/fonts/glyphicons/glyphicons-halflings-regular.woff', {
    destdir: 'fonts/glyphicons'
  });

  app.import('vendor/kabu/fonts/icons/icomoon.eot', {
    destDir: 'fonts/icons'
  });
  app.import('vendor/kabu/fonts/icons/icomoon.svg', {
    destDir: 'fonts/icons'
  });
  app.import('vendor/kabu/fonts/icons/icomoon.ttf', {
    destDir: 'fonts/icons'
  });
  app.import('vendor/kabu/fonts/icons/icomoon.woff', {
    destDir: 'fonts/icons'
  });

  app.import('vendor/kabu/fonts/lobster/lobster_1.3-webfont.eot', {
    destDir: 'fonts/lobster'
  });
  app.import('vendor/kabu/fonts/lobster/lobster_1.3-webfont.svg', {
    destDir: 'fonts/lobster'
  });
  app.import('vendor/kabu/fonts/lobster/lobster_1.3-webfont.ttf', {
    destDir: 'fonts/lobster'
  });
  app.import('vendor/kabu/fonts/lobster/lobster_1.3-webfont.woff', {
    destDir: 'fonts/lobster'
  });

  app.import('vendor/kabu/fonts/opensans/opensans-italic.eot', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-italic.woff', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-regular.eot', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-regular.svg', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-regular.ttf', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-regular.woff', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-semibold.eot', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-semibold.woff', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-semibolditalic.eot', {
    destDir: 'fonts/opensans'
  });
  app.import('vendor/kabu/fonts/opensans/opensans-semibolditalic.woff', {
    destDir: 'fonts/opensans'
  });

  app.import('vendor/kabu/images/credit-cards@2x.png', {
    destDir: 'images'
  });
  app.import('vendor/kabu/images/spinner.gif', {
    destDir: 'images'
  });
  app.import('vendor/kabu/images/spinner_dark.gif', {
    destDir: 'images'
  });

  app.import('vendor/kabu/javascripts/kabu.min.js');
  app.import('vendor/kabu/stylesheets/kabu.min.css');

  return app.toTree();
};
