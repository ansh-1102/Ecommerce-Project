angular.module('myApp').component('cartItem', {
    templateUrl: 'app/main-component/cart/cart-item/cart-item.component.html',
    bindings: {
        showButtons: '<'
    },
    controller: CartItemController
});
function CartItemController() {
    var vm = this;

    vm.updateCartItem = function(number) {
        console.log(number);
    };

    vm.removeCartItem = function(){
        console.log("remove cart item");
    }
   
}
