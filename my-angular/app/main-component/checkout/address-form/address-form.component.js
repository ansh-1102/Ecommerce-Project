angular.module('myApp').component('addressForm', {
    templateUrl: 'app/main-component/checkout/address-form/address-form.component.html',
    
    controller: AddressController
});
function AddressController() {
    var vm = this;
    vm.adresses = [1,2,3]; 
    vm.myForm = {
        firstName: '',
        lastName: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        mobile: ''
      };
    vm.handleCreateOrder = function(reqData){

    }
    vm.handleSubmit = function() {
        var reqData = angular.copy(vm.myForm);
        console.log("my data",reqData )
        vm.handleCreateOrder(reqData);
      };


}
