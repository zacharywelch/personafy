/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    'ssh-index': {
      remoteDir: process.env.SSH_REMOTE_DEST_DIR,
      username: process.env.SSH_USERNAME,
      host: process.env.SSH_HOST,
      privateKeyFile: process.env.SSH_KEY_FILE,
      allowOverwrite: true
    },
    rsync: {
      dest: process.env.SSH_REMOTE_DEST_DIR,
      username: process.env.SSH_USERNAME,
      host: process.env.SSH_USERNAME + '@' + process.env.SSH_HOST,
      privateKey: process.env.SSH_KEY_FILE,
      delete: false
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
