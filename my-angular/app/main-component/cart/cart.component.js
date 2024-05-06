angular.module('myApp').component('cart', {
    templateUrl: 'app/main-component/cart/cart.component.html',
    controller: CartController
});
ProductDetailController.$inject = ['$location'];
function CartController($location) {
    var vm = this;
    vm.cart = [1,1,1];
    vm.navigateToCheckout = function(){
        // console.log(vm.selectedSize);
        $location.path(`/checkout`);
    }
}
