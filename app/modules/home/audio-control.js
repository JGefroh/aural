(function() {

  angular
    .module('aural.home')
    .directive('audioControl', Directive);
    function Directive() {
      function Controller() {
        var vm = this;
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
          scope.vm.icon = scope.vm.icon || ('images/' + scope.vm.name.toLowerCase() + '.svg');
          scope.vm.pathOgg = scope.vm.path || ('audio/' + scope.vm.name.toLowerCase() + '.ogg');
          scope.vm.pathMp3 = scope.vm.path || ('audio/' + scope.vm.name.toLowerCase() + '.mp3');

          var sound = null;
          scope.vm.volume = scope.vm.volume || 0;
          scope.$watch('vm.volume', function(newVolume, oldVolume) {
            var volumeToSet;
            if (!newVolume || newVolume < 0) {
              volumeToSet = 0;
            }
            else if (volumeToSet > 1) {
              volumeToSet = 1;
            }
            else {
              volumeToSet = newVolume;
              if (!sound) {
                sound = new Howl({
                  urls: [scope.vm.pathOgg],
                  loop: true,
                  autoplay: true
                });
              }
            }
            sound.volume(volumeToSet);
          });
        }
      };
    }
})();
