; (function () {
    var app = angular.module("myApp", []);

    app.controller("MyController", function ($scope) {
        $scope.msg = "JavaScript";
        $scope.users = users;
        $scope.moreInfo = function(user) {
            alert(user.firstName + " is working with " + user.company + "!");
        }
    });

    app.controller("CommentController", function($scope){
        $scope.comment = {};
        $scope.onAddComment = function(user){
            console.log($scope.comment);
            user.comments.push($scope.comment);
            $scope.comment = {};
        }
    });

    var users = [{
        firstName : "Bill",
        lastName : "Gates",
        dob : new Date("Dec 21, 1965"),
        company : "Microsoft",
        income : 50000,
        isWorking : true,
        image : "assets/images/bill.jpg",
        vote : 120,
        comments : [{
            stars : 4,
            body : "Great Work, Mr. Bill!",
            author : "abc@abc.com"
        },{
            stars : 4,
            body : "Great Work, Mr. Bill!",
            author : "abc@abc.com"
        }]
    }, {
        firstName : "Steve",
        lastName : "Jobs",
        dob : new Date("Jan 2, 1965"),
        company : "Apple",
        income : 0,
        isWorking : false,
        image : "assets/images/steve.png",
        vote : 180,
        comments : [{
            stars : 4,
            body : "Great Work, Mr. Steve!",
            author : "abc@abc.com"
        },{
            stars : 4,
            body : "Great Work, Mr. Steve!",
            author : "abc@abc.com"
        }]
    },{
        firstName : "Tim B.",
        lastName : "Lee",
        dob : new Date("Aug 1, 1965"),
        company : "World Wide Web",
        income : 40000,
        isWorking : true,
        image : "assets/images/tim.jpg",
        vote : 150,
        comments : [{
            stars : 4,
            body : "Great Work, Mr. Lee!",
            author : "abc@abc.com"
        },{
            stars : 4,
            body : "Great Work, Mr. Lee!",
            author : "abc@abc.com"
        }]
    }]

})();