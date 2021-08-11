var app = angular.module('myApp',[]);

app.controller('appCntrl',function($scope){
	$scope.counter = -1;
	$scope.$watch('myText',function(newValue,oldValue){
		// $scope.counter++;
		// console.log("oldValue "+oldValue);
		console.log("newValue "+newValue);
	});
});