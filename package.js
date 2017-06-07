Package.describe({
  summary: 'Fork of original w/ timezone support. Define and run scheduled jobs across multiple servers.',
  version: '1.5.0',
  name: 'jamesgibson14:timezoned-synced-cron',
  git: 'https://github.com/jamesgibson14/meteor-synced-cron.git'
});

Npm.depends({later: '1.1.6', timezone:'0.0.41'});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.addFiles(['synced-cron-server.js'], 'server');
  api.export(['SyncedCron'], 'server');
});


Package.onTest(function (api) {
  api.use(['jamesgibson14:synced-cron', 'tinytest', 'underscore', 'logging']);
  api.add_files('synced-cron-tests.js', ['server']);
});
