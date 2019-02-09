//Testing Suites
describe("Test Suite : ", function(){

    var controller = null;
    var $scope = {};
    beforeEach(module("newApp"));
   

    beforeEach(inject(function(_$controller_){
        controller = _$controller_("TestController", {$scope : $scope});
    }))

    it("Test Controller : 'changeMessage' Testing", function(){
        $scope.changeMessage("Hola JavaScript!");
        expect($scope.message).toContain("Hola JavaScript!");

    });

    it("TestController : Message Variable", function(){
        expect($scope.message).toContain("App");
    })


    // it () - creates test

    it("First Test", function(){
        expect(true).toBeTruthy();
    });

    it("Second Test", function(){
        expect("Hello Angular").toContain("Hello");
    });
});