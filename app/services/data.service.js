(
    function () {
        var app = angular.module("myApp");
        app.service("DataService", function ($http) {
            this.getData = function () {
                return $http({
                    method: "GET",
                    url: "assets/model/user-data.json",
                    cache: true
                });
            }
            this.postData = function () {
                return $http({ method: "POST", url: " ", data: { name: ["", ""] } })
            }
        });
        app.factory("DataFactory", function ($http) {
            function getData() {
                // var data = [];
                // $http({
                //     method: "GET",
                //     url: "assets/model/user-data.json"
                // }).then(function (response) {
                //     console.log(response);
                //     data = response.data;
                // }).catch(function (err) {
                //     console.log(err);
                // })
                // return data;
                return $http({
                    method: "GET",
                    url: "assets/model/user-data.json",
                    transformRequest : function(data){
                        console.log("[TRANSFORM REQUEST]", data)
                    },
                    transformResponse : function(data){
                        console.log("[TRANSFORM RESPOSNE]", data)
                    }
                })
            }
            function getRestApi() {
                $http.get("http://date.jsontest.com")
                    .then(function (res) { console.log(res.data) });
            }

            return {
                getData: getData,
                getRestApi: getRestApi
            }
        })
    }
)();