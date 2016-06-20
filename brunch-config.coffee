if process.env.production
  analytics_provider = 'GoogleUniversal'
else
  analytics_provider = 'Console'

exports.config =
  modules:
    definition: false
    wrapper: false
  plugins:
    assetsmanager:
      copyTo:
        '/': ['app/modules/**/*.html', 'app/**/*.json']
    replace:
      encoding: 'utf8'
      log: true
      mappings:
        'analytics_provider': analytics_provider
      paths: [
        'public/js/app.js'
      ]
      replacePrefix: '{!'
      replaceSuffix: '!}'
    sass:
      options:
        includePaths: [
          'bower_components/bourbon/app/assets/stylesheets',
          'bower_components/neat/app/assets/stylesheets'
        ]

  files:
    javascripts:
      joinTo:
        'js/app.js': /^bower_components|app/
      order:
        before: [
          /^bower_components(\/|\\)angular(\/|\\)angular.js$/,
          /^app(\/|\\)modules(\/|\\)(.+)(\/|\\)(.+)-module.js$/,
          /^app(\/|\\)modules(\/|\\)(.+)(\/|\\)(.+).js$/,
          'app/app.js'
        ]
    stylesheets:
      defaultExtension: 'scss'
      joinTo:
        'css/app.css': /^(app|vendor|bower_components)/
    templates:
      joinTo: 'js/app.js'
