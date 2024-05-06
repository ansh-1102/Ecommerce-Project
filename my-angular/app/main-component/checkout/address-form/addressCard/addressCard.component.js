angular.module('myApp').component('addressCard', {
    templateUrl: 'app/main-component/checkout/address-form/addressCard/addressCard.component.html',
    bindings: { 
        address: '<'
    },
    controller: AddressCardController
});
function AddressCardController() {
    var vm = this;
}
