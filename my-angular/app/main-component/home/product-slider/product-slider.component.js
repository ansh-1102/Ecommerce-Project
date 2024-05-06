// MY-ANGULAR/app/components/product-slider/product-slider.component.js
angular.module('myApp').component('productSlider', {
    templateUrl: 'app/main-component/home/product-slider/product-slider.component.html',
    bindings: {
        title: '@',
        products: '<'
    },
    controller: ProductSliderController
});

function ProductSliderController() {
    var vm = this;
}

