angular.module('myApp').component('homeProduct', {
    templateUrl: 'app/main-component/home/home-product-card/home-product-card.component.html',
    bindings: {
        product: '<'
    },
    controller: HomeProductController
});

function HomeProductController() {
    
}


