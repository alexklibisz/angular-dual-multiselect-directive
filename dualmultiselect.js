/*
Created by Alex Klibisz, aklibisz@utk.edu
February 2015
*/

angular.module("dualmultiselect", [])

.directive("dualmultiselect", [function() {
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
		templateUrl: function(elem, attr) { return attr.hasOwnProperty('dmsMd') ? 'material' : 'bootstrap'; }
	};
}])

.run(['$templateCache', function($templateCache) {
  	'use strict';

	$templateCache.put('bootstrap',
		'<div class="dualmultiselect dualmultiselect-bootstrap"> <div class="row"> <div class="col-lg-12 col-md-12 col-sm-12"> <h4 ng-if="options.title">{{options.title}}<small>&nbsp;{{options.helpMessage}}</small> </h4> <input ng-if="options.minItemsForFilter == undefined || options.items.length >= options.minItemsForFilter" class="form-control" placeholder="{{options.filterPlaceHolder}}" ng-model="searchTerm"> </div></div><div class="row"> <div class="col-lg-6 col-md-6 col-sm-6"> <label>{{options.labelAll}}</label> <button type="button" class="btn btn-default btn-xs" ng-class="options.buttonClass" ng-if="!options.hideSelectAllButtons" ng-click="transfer(options.items, options.selectedItems, -1)"> Select All </button> <div class="pool" ng-class="options.listBoxClass""> <ul> <li ng-repeat="item in options.items | filter: searchTerm | orderBy: options.orderProperty"> <a href="" ng-click="transfer(options.items, options.selectedItems, options.items.indexOf(item))">{{item.name}}&nbsp;&rArr; </a> </li></ul> </div></div><div class="col-lg-6 col-md-6 col-sm-6"> <label>{{options.labelSelected}}</label> <button type="button" class="btn btn-default btn-xs" ng-class="options.buttonClass" ng-if="!options.hideSelectAllButtons" ng-click="transfer(options.selectedItems, options.items, -1)"> Deselect All </button> <div class="pool" ng-class="options.listBoxClass"> <ul> <li ng-repeat="item in options.selectedItems | orderBy: options.orderProperty"> <a href="" ng-click="transfer(options.selectedItems, options.items, options.selectedItems.indexOf(item))"> &lArr;&nbsp;{{item.name}}</a> </li></ul> </div></div></div></div>'
	);

	$templateCache.put('material',
    	'<div class="dualmultiselect dualmultiselect-md"> <div layout="row"> <div> <h4 ng-if="options.title">{{options.title}}<small>&nbsp;{{options.helpMessage}}</small> </h4> <input ng-if="(options.minItemsForFilter?options.minItemsForFilter:0) <= options.items.length" placeholder="{{options.filterPlaceHolder}}" ng-model="searchTerm"> </div></div><div layout="row" layout-xs="column"> <div flex layout="column" class="dms-itemslist" layout-padding> <div layout="row" layout-align="start center"> <label>{{options.labelAll}}</label> <md-button ng-class="options.buttonClass" ng-if="!options.hideSelectAllButtons" ng-click="transfer(options.items, options.selectedItems, -1)"> Select All </md-button> </div><div ng-class="options.listBoxClass" flex> <ul> <li ng-repeat="item in options.items | filter: searchTerm | orderBy: options.orderProperty"> <a href="" ng-click="transfer(options.items, options.selectedItems, options.items.indexOf(item))">{{item.name}}&nbsp;&rArr; </a> </li></ul> </div></div><div flex layout="column" class="dms-itemslist" layout-padding> <div layout="row" layout-align="start center"> <label>{{options.labelSelected}}</label> <md-button ng-class="options.buttonClass" ng-if="!options.hideSelectAllButtons" ng-click="transfer(options.selectedItems, options.items, -1)"> Deselect All </md-button> </div><div ng-class="options.listBoxClass" flex> <ul> <li ng-repeat="item in options.selectedItems | orderBy: options.orderProperty"> <a href="" ng-click="transfer(options.selectedItems, options.items, options.selectedItems.indexOf(item))"> &lArr;&nbsp;{{item.name}}</a> </li></ul> </div></div></div></div>'
	);
}]);
