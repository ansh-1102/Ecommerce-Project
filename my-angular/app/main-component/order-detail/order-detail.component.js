angular.module('myApp').component('orderDetail', {
    templateUrl: 'app/main-component/order-detail/order-detail.component.html',
    controller: OrderDetailController
});

function OrderDetailController() {
     var vm = this;

     vm.Orders = [1,1,1];
     vm.steps = [
        {id:0,title:"PLACED", isCompleted:true},
        {id:1,title:"CONFIRMED", isCompleted:true},
        {id:2,title:"SHIPPED", isCompleted:false},
        {id:3,title:"DELIVERED", isCompleted:false}


     ];
}