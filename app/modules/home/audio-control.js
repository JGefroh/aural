(function() {

  angular
    .module('aural.home')
    .directive('audioControl', Directive);
    function Directive() {
      function Controller() {
        var vm = this;
        vm.icon = vm.icon || ('images/' + vm.name.toLowerCase() + '.svg');
        vm.path = vm.path || ('audio/' + vm.name.toLowerCase() + '.mp3');
        vm.savedVolume = 0;

        vm.toggleMute = function() {
          if (vm.volume > 0) {
            vm.savedVolume = vm.volume;
            vm.volume = 0;
          }
          else {
            vm.volume = vm.savedVolume > 0 ? vm.savedVolume : 1;
          }
        };
      }

      return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'audio-control.html',
        controller: Controller,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          icon: '=?',
          name: '=',
          path: '=?',
          volume: '=?'
        },
        link: function(scope, element, attributes) {
          var audioElement = element[0].children[3];
          scope.vm.volume = scope.vm.volume || 0;
          scope.$watch('vm.volume', function(newVolume, oldVolume) {
            var volumeToSet = newVolume;
            if (!newVolume || newVolume < 0) {
              volumeToSet = 0;
            }
            else if (volumeToSet > 1) {
              volumeToSet = 1;
            }
            audioElement.volume = volumeToSet;
          });
        }
      };
    }
})();
