(function () {
'use strict';

angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.messageStyle = {display : 'none'};

  $scope.checkIfTooMuch = function () {
    let count = 0;

    if (!$scope.lunchItems) { // handle undefined
      $scope.message = 'Please enter data first';
      setMessageColor('red')
      return;
    }
    
    let lunchItemsArray = $scope.lunchItems.split(',').map(x => x.trim());

    for (var i in lunchItemsArray) {
      if (lunchItemsArray[i]) { // check if item is empty.
        count++;
      }
    }

    if (count === 0) {
      $scope.message = 'Please enter data first';
      setMessageColor('red')
    } else if (count > 3) {
      $scope.message = 'Too much!';
      setMessageColor('green')
    } else {
      $scope.message = 'Enjoy!'
      setMessageColor('green')
    }
  };

  function setMessageColor(color) {
    $scope.messageStyle = {color: color};
    $scope.textBoxStyle = {'border-color': color};
  }
}



})();
