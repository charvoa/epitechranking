angular.module('myApp', []).controller('RankCtrl', function($scope, $http) {
	$scope.users = []
	var mainInfo = $http.get('students.json').success(function(response) {
        $scope.users = response["users"]
    });
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}
    ];
});