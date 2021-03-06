(function() {

  angular
    .module('aural.home')
    .directive('audioControl', Directive);
    function Directive() {
      function Controller() {
        var vm = this;
        vm.savedVolume = 0;

        vm.toggleMute = function() {
          if (vm.control.volume > 0) {
            vm.savedVolume = vm.control.volume;
            vm.control.volume = 0;
          }
          else {
            vm.control.volume = vm.savedVolume > 0 ? vm.savedVolume : 1;
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
          control: '='
        },
        link: function(scope, element, attributes) {
          scope.vm.control.icon = scope.vm.control.icon || ('images/' + scope.vm.control.name.toLowerCase() + '.svg');
          scope.vm.pathOgg = scope.vm.control.path || ('audio/' + scope.vm.control.name.toLowerCase() + '.ogg');
          scope.vm.pathMp3 = scope.vm.control.path || ('audio/' + scope.vm.control.name.toLowerCase() + '.mp3');

          var sound = null;
          scope.vm.control.volume = scope.vm.control.volume || 0;
          scope.$watch('vm.control.volume', function(newVolume, oldVolume) {
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
                  autoplay: true,
                  onload: function() {
                    scope.$apply(function() {
                      scope.vm.loading = false;
                    });
                  }
                });
                scope.vm.loading = true;
              }
            }
            if (sound) {
              sound.volume(volumeToSet);
            }
          });
        }
      };
    }
})();
