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
        },
        {
          name: 'Generator',
          volume: 0
        },
        {
          name: 'Gun',
          volume: 0
        },
        {
          name: 'Radio',
          volume: 0
        },
        {
          name: 'Helicopter',
          volume: 0
        },
        {
          name: 'Wind',
          volume: 0
        }
      ];

      vm.presets = [
        {
          name: 'Seattle Coffee Shop',
          icon: 'images/coffee.svg',
          controls: [
            {
              name: 'People',
              volume: 0.7
            },
            {
              name: 'Rain',
              volume: 0.1
            },
            {
              name: 'Thunder',
              volume: 1
            }
          ]
        },
        {
          name: 'Helicopter Assault',
          icon: 'images/assault.svg',
          controls: [
            {
              name: 'Radio',
              volume: 0.5
            },
            {
              name: 'Helicopter',
              volume: 1
            },
            {
              name: 'Wind',
              volume: 0.1
            }
          ]
        },
        {
          name: 'Forward Operating Base',
          icon: 'images/bunker.svg',
          controls: [
            {
              name: 'Gun',
              volume: 0.3
            },
            {
              name: 'Radio',
              volume: 0.5
            },
            {
              name: 'Generator',
              volume: 0.1
            },
            {
              name: 'Helicopter',
              volume: 0.1
            }
          ]
        },
        {
          name: 'Lounging at the Beach',
          icon: 'images/beach.svg',
          controls: [
            {
              name: 'Waves',
              volume: 1
            },
            {
              name: 'Wind',
              volume: 0.05
            },
            {
              name: 'Birds',
              volume: 0.05
            }
          ]
        },
        {
          name: 'Camping by the River',
          icon: 'images/camping.svg',
          controls: [
            {
              name: 'Crickets',
              volume: 0.3
            },
            {
              name: 'River',
              volume: 0.3
            },
            {
              name: 'Fire',
              volume: 1
            }
          ]
        },
        {
          name: 'A Dreary Day',
          icon: 'images/storm.svg',
          controls: [
            {
              name: 'Rain',
              volume: 1
            },
            {
              name: 'Thunder',
              volume: 1
            },
            {
              name: 'Wind',
              volume: 0.7
            }
          ]
        }
      ];
    }
})();
