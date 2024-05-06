// MY-ANGULAR/app/components/main-carousel/main-carousel.component.js


angular.module('myApp').component('mainCarousel', {
    templateUrl: 'app/main-component/home/main-carousel/main-carousel.component.html',
    bindings: {
        images: '<'
    },
    import: './main-carousel.component.css',

    controller: MainCarouselController
});

function MainCarouselController($interval) {
    
    var vm = this;

    vm.images = [
        'app/data/img1.jpg',
        'app/data/img2.jpg',
        'app/data/img3.jpg',
        'app/data/img4.jpg'
    ];
    vm.currentIndex = 0;

    var intervalPromise;

    vm.$onInit = function() {
        startCarousel();
    };

    vm.$onDestroy = function() {
        stopCarousel();
    };

    vm.next = function() {
        vm.currentIndex = (vm.currentIndex + 1) % vm.images.length;
    };

    vm.prev = function() {
        vm.currentIndex = (vm.currentIndex - 1 + vm.images.length) % vm.images.length;
    };

    function startCarousel() {
        intervalPromise = $interval(function() {
            vm.next();
        }, 2000);  // Change image every 2 seconds
    }

    function stopCarousel() {
        if (intervalPromise) {
            $interval.cancel(intervalPromise);
        }
    }
}
MainCarouselController.$inject = ['$interval'];
