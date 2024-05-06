angular.module('myApp').component('payement', {
    templateUrl: 'app/main-component/payement/payement.component.html',
    controller: PayementController
});

function PayementController() {
     var vm = this;
     vm.products = [1,2,3];
}