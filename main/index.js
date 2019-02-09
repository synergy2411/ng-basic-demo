(function(){
    angular.module("newApp", [])
    .controller("TestController", function($scope){
        $scope.message = "Test App!";
        $scope.changeMessage = function(msg){
            $scope.message = msg;
        }
    })
})();