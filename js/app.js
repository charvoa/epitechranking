/* global angular:true */
var app = angular.module('myApp', []);

app.controller('RankCtrl', function($scope, $http) {
	$scope.users = [];
	$http.get('students.json').success(function(response) {
        $scope.users = response.users;
    });
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});