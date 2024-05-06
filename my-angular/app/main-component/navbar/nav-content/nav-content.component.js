
angular.module('myApp').component('navContent', {
    templateUrl: 'app/main-component/navbar/nav-content/nav-content.component.html',
    bindings: {
        selectedSection: '<'
    },
    controller: NavbarContentController
});

function NavbarContentController(navigationService) {
    var vm = this;
    vm.category = null;
    vm.selectedSection = null;
    vm.$onInit = function() {
        vm.category = navigationService.navigationData;
        //  console.log("catgry", vm.category);
        //  console.log("selectedSection:", vm.selectedSection); 
         
    };
}