/* global angular:true */
var app = angular.module('myApp', []);

app.controller('RankCtrl', function($scope, $http) {
	$scope.users = [];
	$scope.cities = {"Nice" : "NCE", "Montpellier": "MPL", "Marseille": "MAR", "Strasbourg" : "STG", "Nancy" : "NCY", "Lille" : "LIL"}
	$scope.citySelect = "Nice"
	openCityJson($scope.citySelect, $http, $scope)
    $scope.$watch('citySelect',function(){
     	openCityJson($scope.citySelect, $http, $scope)
    });
});

function openCityJson($city, $http, $scope) {
	$filename = 'JSON/students_' + $scope.cities[$city] + '.json'
	$http.get($filename).success(function(response) {
        $scope.users = response.users;
    });
}