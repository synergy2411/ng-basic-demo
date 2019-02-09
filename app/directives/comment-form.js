(
    function () {
        var app = angular.module("myApp");
        app.directive("commentForm", function () {
            return {
                restrict: 'ACE',
                templateUrl: "view/comment-form.directive.html",
                controller: function ($scope) {
                    $scope.comment = {};
                    $scope.onAddComment = function (user) {
                        console.log($scope.comment);
                        user.comments.push($scope.comment);
                        $scope.comment = {};
                    }
                },
                link: function (scope, element, attrs) {
                    console.log(scope);
                    console.log(element);
                    console.log(attrs);
                    element.on("click", function () {
                        alert("Hey, Who's this?");
                    });
                }
                // compile : function(){
                //     console.log("Compile");
                //     return {
                //         pre : function(){
                //             console.log("Pre");
                //         },
                //         post : function(){
                //             console.log("Post");
                //         }
                //     }
                // }

            }
        })
    }
)();