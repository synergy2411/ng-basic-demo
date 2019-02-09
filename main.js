require.config({
    paths: {
        angular: 'bower_components/angular/angular'
    },
    shim: {
        "angular": {
            exports: "angular"
        }
    }
});

require(["angular", "src/module"], function () {
    angular.bootstrap(document, ["app"]);
})




// npm init -y
// npm i angular --save
// npm i requirejs --save