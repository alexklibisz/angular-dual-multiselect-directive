/*

	Created by Alex Klibisz, aklibisz@utk.edu
	February 2015

*/

var a;
a = angular.module("dualmultiselect", []), a.directive("dualmultiselect", [function() {
	return {
		restrict: 'E',
		scope: {
			options: '='
		},
		controller: function($scope) {
			$scope.transfer = function(from, to, index) {
				if (index >= 0) {
					to.push(from[index]);
					from.splice(index, 1);
				} else {
					for (var i = 0; i < from.length; i++) {
						to.push(from[i]);
					}
					from.length = 0;
				}
			};
		},
		templateUrl: 'assets/template.html'
	};
}]);