# angular-dual-multiselect-directive

###*Filter, select, go*

The Angular Dual Multiselect Directive makes it easy to quickly create a pair of searchable fields for selecting multiple options from a large set of values.  

###Dependencies
- AngularJS (angular.min.js) (tested with 1.4.0-beta.1)
- Bootstrap (at least the CSS)

###Demo
- http://alexklibisz.github.io/angular-dual-multiselect-directive/
- Source for this demo is in the gh-pages branch.

###Usage

####Include the CSS and JS files. Make sure Angular and your app.js files are included first.
```html
<link rel="stylesheet" href="assets/dualmultiselect.css">
<script src="assets/dualmultiselect.js"></script>
```

####Add the directive tag in your HTML.
```html
<dualmultiselect options="demoOptions"> </dualmultiselect>
```

####Add/customize this set of options as an object in your controller scope.
Note the comments for the last properties.
```js
$scope.demoOptions = {
	title: 'Demo: Recent World Cup Winners',
	filterPlaceHolder: 'Start typing to filter the lists below.',
	labelAll: 'All Items',
	labelSelected: 'Selected Items',
	helpMessage: ' Click items to transfer them between fields.',
	/* angular will use this to filter your lists */
	orderProperty: 'name',
	/* this contains the initial list of all items (i.e. the left side) */
	items: [{'id': '50', 'name': 'Germany'}, {'id': '45', 'name': 'Spain'}, {'id': '66', 'name': 'Italy'}, {'id': '30', 'name' : 'Brazil' }, {'id': '41', 'name': 'France' }, {'id': '34', 'name': 'Argentina'}],
	/* this list should be initialized as empty or with any pre-selected items */
	selectedItems: [] 
};	
```

####License
[WTFPL License](http://www.wtfpl.net/)
