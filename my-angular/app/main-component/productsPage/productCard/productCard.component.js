angular.module('myApp').component('productCard', {
    templateUrl: 'app/main-component/productsPage/productCard/productcard.component.html',
    bindings: {
        product: '<'
    },
    controller: ProductsCardController
});

ProductsCardController.$inject = ['$location'];

function ProductsCardController($location) {
    var vm = this;

    vm.navigate = function() {
        $location.path(`/product-detail/${vm.product.id}`).search({ product: JSON.stringify(vm.product) });
    };
}
