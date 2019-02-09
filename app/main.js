; (function () {
    var app = angular.module("myApp", []);

    // app.directive("commentForm", function () {
    //     return {
    //         restrict: 'ACE',
    //         templateUrl: "view/comment-form.directive.html",
    //         controller: function ($scope) {
    //             $scope.comment = {};
    //             $scope.onAddComment = function (user) {
    //                 console.log($scope.comment);
    //                 user.comments.push($scope.comment);
    //                 $scope.comment = {};
    //             }
    //         },
    //         link : function(scope, element, attrs){
    //             console.log(scope);
    //             console.log(element);
    //             console.log(attrs);
    //             element.on("click", function(){
    //                 alert("Hey, Who's this?");
    //             });
    //         }
    //         // compile : function(){
    //         //     console.log("Compile");
    //         //     return {
    //         //         pre : function(){
    //         //             console.log("Pre");
    //         //         },
    //         //         post : function(){
    //         //             console.log("Post");
    //         //         }
    //         //     }
    //         // }

    //     }
    // })
    app.directive("userImage", function () {
        return {
            restrict: 'ACE',   // ACEM
            // template : "<h2>Directive template Loaded!</h2>"
            templateUrl: "view/user-image.directive.html"
        }
    })

    app.controller("MyController", function ($scope, DataFactory, DataService, $cacheFactory, $http) {
        $scope.msg = "JavaScript";
       

        // console.log("[Data Factory]",DataFactory.getData());
        // $scope.users = DataFactory.getData();
        DataService.getData()
            .then(function(res){
                console.log("[Data Service]", res.data);

                var cache = $cacheFactory.get("$http");
                console.log("[Cache Data]", cache.get("assets/model/user-data.json"));
            })
       DataFactory.getRestApi();
        DataFactory.getData()
            .then(function (response) {
                $scope.users = response.data;
            }).catch(function(err){console.log(err)});
        $scope.moreInfo = function (user) {
            alert(user.firstName + " is working with " + user.company + "!");
        }
    });

    // app.controller("CommentController", function($scope){
    //     $scope.comment = {};
    //     $scope.onAddComment = function(user){
    //         console.log($scope.comment);
    //         user.comments.push($scope.comment);
    //         $scope.comment = {};
    //     }
    // });

    // var users = [{
    //     firstName: "Bill",
    //     lastName: "Gates",
    //     dob: new Date("Dec 21, 1965"),
    //     company: "Microsoft",
    //     income: 50000,
    //     isWorking: true,
    //     image: "assets/images/bill.jpg",
    //     vote: 120,
    //     comments: [{
    //         stars: 4,
    //         body: "Great Work, Mr. Bill!",
    //         author: "abc@abc.com"
    //     }, {
    //         stars: 4,
    //         body: "Great Work, Mr. Bill!",
    //         author: "abc@abc.com"
    //     }]
    // }, {
    //     firstName: "Steve",
    //     lastName: "Jobs",
    //     dob: new Date("Jan 2, 1965"),
    //     company: "Apple",
    //     income: 0,
    //     isWorking: false,
    //     image: "assets/images/steve.png",
    //     vote: 180,
    //     comments: [{
    //         stars: 4,
    //         body: "Great Work, Mr. Steve!",
    //         author: "abc@abc.com"
    //     }, {
    //         stars: 4,
    //         body: "Great Work, Mr. Steve!",
    //         author: "abc@abc.com"
    //     }]
    // }, {
    //     firstName: "Tim B.",
    //     lastName: "Lee",
    //     dob: new Date("Aug 1, 1965"),
    //     company: "World Wide Web",
    //     income: 40000,
    //     isWorking: true,
    //     image: "assets/images/tim.jpg",
    //     vote: 150,
    //     comments: [{
    //         stars: 4,
    //         body: "Great Work, Mr. Lee!",
    //         author: "abc@abc.com"
    //     }, {
    //         stars: 4,
    //         body: "Great Work, Mr. Lee!",
    //         author: "abc@abc.com"
    //     }]
    // }]

})();


// npm install serve -g