define([], function(){
    var myController = function($scope, $log){
        $scope.message = "Angular!";
    }
    
    myController.$inject = ["$scope", "$log"];

    return myController;
})