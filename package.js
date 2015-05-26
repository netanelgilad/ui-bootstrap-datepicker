Package.describe({
  name: 'netanelgilad:ui-bootstrap-datepicker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'UI bootstrap datepicker fork with custom data',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('angular:angular@1.3.15_1', 'client');

  api.addFiles('ui-bootstrap-0.13.1-SNAPSHOT.js', 'client');
  api.addFiles('ui-bootstrap-tpls-0.13.1-SNAPSHOT.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:ui-bootstrap-datepicker');
  api.addFiles('ui-bootstrap-datepicker-tests.js');
});
