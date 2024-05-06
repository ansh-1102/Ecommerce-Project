// MY-ANGULAR/app/app.module.js

angular.module('myApp' , ['ngRoute','ngMaterial','ngAnimate', 'ngAria','ngMessages']);

angular.module('myApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/main-component/home/home.component.html',
            controller: 'HomeController'
        })
        .when('/cart', {
            templateUrl: 'app/main-component/cart/cart.component.html',
            controller: 'CartComponentontroller'
        })
        .when('/product-detail/:id', {
            templateUrl: 'app/main-component/product-detail/productdetail.component.html',
            controller: 'ProductDetailController'
        })
        .when('/checkout', {
            templateUrl: 'app/main-component/checkout/checkout.component.html',
            controller: 'CheckOutComponentontroller'
        })
        .when('/checkout/payement/:id', {
            templateUrl: 'app/main-component/payement/payement.component.html',
            controller: 'PayementController'
        })
        .when('/:lavelOne/:lavelTwo/:lavelThree', {
            templateUrl: 'app/main-component/productsPage/products.component.html',
            controller: 'ProductsController'
        })
        .when('/payment-success', {
            templateUrl: 'app/main-component/payement-success/payment-success.component.html',
            controller: 'PaymentSuccessContrller'
        })
        .when('/account/orders', {
            templateUrl: 'app/main-component/orders/orders.component.html',
            controller: 'OrderController'
        })
        .when('/order/:id', {
            templateUrl: 'app/main-component/order-detail/order-detail.component.html',
            controller: 'OrderDetailController'
        })
        .when('/admin', {
            templateUrl: 'app/main-component/admin/admin.component.html',
            controller: 'AdminController'
        })



       
}]);


