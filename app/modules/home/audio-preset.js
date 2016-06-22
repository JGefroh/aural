(function() {

  angular
    .module('aural.home')
    .directive('audioPreset', Directive);
    function Directive() {
      function Controller() {
        var vm = this;
        vm.activate = function() {
          angular.forEach(vm.controls, function(control) {
            var match = null;
            angular.forEach(vm.preset.controls, function(presetControl) {
              if (control.name === presetControl.name) {
                match = presetControl;
              }
            });
            if (match) {
              control.volume = match.volume;
            }
            else {
              control.volume = 0;
            }
          });
        };
      }

      return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'audio-preset.html',
        controller: Controller,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          controls: '=',
          preset: '='
        },
        link: function(scope, element, attributes) {
          scope.vm.preset.icon = scope.vm.preset.icon || ('images/' + scope.vm.preset.name.toLowerCase() + '.svg');
        }
      };
    }
})();
