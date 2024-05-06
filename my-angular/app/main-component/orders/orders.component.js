angular.module('myApp').component('orders', {
    templateUrl: 'app/main-component/orders/orders.component.html',
    controller: OrderController
});
ProductDetailController.$inject = ['$location'];
function OrderController($location) {
     var vm = this;
     vm.orders = [[1,1],[1,1,1]];
     vm.orderFilter = [
        {value:"on_the_way",label:"On The Way"},
        {value:"delivered",label:"Delivered"},
        {value:"cancelled",label:"Cancelled"},
        {value:"returned",label:"Returned"}
     ];

     vm.navigateToOrderDetail = function(id) {
        $location.path(`/order/${id}`);
    };

}