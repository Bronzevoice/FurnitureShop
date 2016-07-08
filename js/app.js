var app = angular.module('FurniShop', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {	//funciona sobre la url raíz
		templateUrl: 'views/homeView.html',
		controller: 'HomeViewController'
	})
	.when('/catalogue', {
		templateUrl: 'views/catalogue.html',
		controller: 'ProductsViewController'
	})
	.when('/catalogue/category/:category', {
		templateUrl: 'views/category.html',
		controller: 'ProductsViewController'
	})
	.when('/catalogue/category/product/:id', {
		templateUrl: 'views/product.html',
		controller: 'ProductsViewController'
	})
	.when('/contact', {
		templateUrl:'views/contact.html',
		controller: 'ContactViewController'
	})
	.otherwise({
		redirectTo: '/'
	})
}])

app.factory('Home', function() {
	return {
		slider: function() {
			$('.slider').slider({full_width: true});
		}
  	}
});

app.controller('HomeViewController', ['$scope', 'Home', function($scope, Home){
	Home.slider();
}]);

app.controller('ProductsViewController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$scope.category = $routeParams.category;
	$scope.id = $routeParams.id;

	$http.get("js/jsonFurniture.json").success(function(data){
		$scope.furniture = data;
	})
}]);

app.controller('ContactViewController', ['$scope', function($scope){

}]);

