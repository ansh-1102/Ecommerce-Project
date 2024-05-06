angular.module('myApp').component('orderTracker', {
    templateUrl: 'app/main-component/order-detail/order-tracker/order-tracker.component.html',
    bindings: {
        acsteps: '@',
       steps : '<'
    },
    controller: OrderTrackerController
});

function OrderTrackerController() {
     var vm = this;


    vm.$onInit = function() {
        console.log("activeStep:", vm.acsteps);
        console.log("steps:", vm.steps);
        console.log(vm.steps[1].id)
    };
}