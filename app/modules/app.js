(function () {
  var analyticsProvider = '{!analytics_provider!}';

  angular
    .module('aural',
    [
        'ui.router',
        'aural.home'
    ])
    .constant('baseImagePath', '/images/')
    .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');
    }])
    .controller('ApplicationController', ['$rootScope', '$state', '$anchorScroll', ApplicationController]);

    function ApplicationController($rootScope, $state, $anchorScroll) {
      var vm = this;

      vm.audio = [
        {
          name: 'Birds',
          volume: 0
        },
        {
          name: 'Crickets',
          volume: 0
        },
        {
          name: 'Rain',
          volume: 0.5
        },
        {
          name: 'River',
          volume: 0
        },
        {
          name: 'Thunder',
          volume: 0.7
        },
        {
          name: 'Waves',
          volume: 0
        },
        {
          name: 'Fire',
          volume: 0
        },
        {
          name: 'People',
          volume: 0
        }
      ];
    }
})();
