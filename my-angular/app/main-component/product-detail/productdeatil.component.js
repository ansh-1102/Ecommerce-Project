// angular.module('myApp').component('productDetail', {
//     templateUrl: 'app/main-component/product-detail/productdetail.component.html',
//     controller: ProductDetailController
// });
// //  ProductDetailController.$inject = ['$location'];
// function ProductDetailController(productDetailService) {
//      var vm = this;
//      vm.selectedSize = null;
//     //    vm.productDetails = JSON.parse($location.search().product);
//      vm.reviews = [1,2,3];
//       vm.relatedProducts = productDetailService.lehangaCholi;
//      vm.handleAddToCart = function(){
//         console.log(this.selectedSize);
//         $location.path(`/cart`);
//      }


     
// }
angular.module('myApp').component('productDetail', {
    templateUrl: 'app/main-component/product-detail/productdetail.component.html',
    controller: ProductDetailController
});

ProductDetailController.$inject = [ '$location'];

function ProductDetailController($location,productDetailService) {
    var vm = this;
    vm.selectedSize = null;
    
    // Check if the product parameter exists in the URL query parameters
    // var productParam = $location.search().product;
    // if (productParam) {
        // Try parsing the product parameter as JSON
        // try {
            // vm.productDetails = JSON.parse(productParam);
        // } catch (error) {
            // console.error('Error parsing product parameter:', error);
            // Handle the error gracefully, maybe set default values or show an error message
        // }
    // } else {
        // console.error('Product parameter not found in URL');
        // Handle the case where the product parameter is missing from the URL
    // }
    
    vm.reviews = [1, 2, 3];
    vm.relatedProducts = null;
    // vm.mensPant = productCardService.menPantsData;
    vm.$onInit = function() {
       
        
        vm.relatedProducts = productDetailService.lehangaCholi;
    };
   

    vm.handleAddToCart = function() {
        console.log(vm.selectedSize);
        $location.path(`/cart`);
    };
}
