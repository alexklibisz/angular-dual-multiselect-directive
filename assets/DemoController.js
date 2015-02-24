demo.controller('DemoController',  function($scope, $location) {

	$scope.demoOptions = {
		title: 'Demo: Recent World Cup Winners',
		filterPlaceHolder: 'Start typing to filter the lists below.',
		labelAll: 'All Items',
		labelSelected: 'Selected Items',
		helpMessage: ' Click items to transfer them between fields.',
		orderProperty: 'name',
		items: [{'id': '50', 'name': 'Germany'}, {'id': '45', 'name': 'Spain'}, {'id': '66', 'name': 'Italy'}, {'id': '30', 'name' : 'Brazil' }, {'id': '41', 'name': 'France' }, {'id': '34', 'name': 'Argentina'}],
		selectedItems: [] 
	};

});
