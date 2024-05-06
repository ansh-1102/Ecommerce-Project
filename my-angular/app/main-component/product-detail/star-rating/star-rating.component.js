angular.module('myApp').component('star', {
    templateUrl: 'app/main-component/product-detail/star-rating/star-rating.component.html',
    controller: StarController
});

function StarController() {
    var vm = this;
    vm.maxRating = 5;
    vm.initialRating = 3;

    vm.stars = null;
    vm.currentRating = 0;

    vm.$onInit = function() {
        vm.stars = new Array(vm.maxRating).fill(0).map((_, i) => i + 1);
        vm.currentRating = vm.initialRating;
    };

    vm.rate = function(star) {
        if (vm.currentRating === star) {
            // If the clicked star is already selected, deselect it
            vm.currentRating = 0;
        } else {
            // Otherwise, select the clicked star
            vm.currentRating = star;
        }
    };
}
