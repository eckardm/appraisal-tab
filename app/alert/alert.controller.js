'use strict';

(function() {
  angular.module('alertController', ['alertService']).

  controller('AlertController', ['Alert', function(Alert) {
    var vm = this;

    vm.alert = Alert;
    vm.remove = function(index) {
      Alert.alerts.splice(index, 1);
    };
  }]);
})();
