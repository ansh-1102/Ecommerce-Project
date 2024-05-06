
angular.module('myApp').component('navBar', {
    templateUrl: 'app/main-component/navbar/navbar.component.html',
    controller: NavbarController
});
NavbarController.$inject = ['$location','$mdDialog','navService'];

function NavbarController($location,$mdDialog,navService) {
    var vm = this;
   
    vm.isNavbarContentOpen = false;
    vm.currentSection = null;
     vm.userloginstatus = navService.userLoggedIn;

    vm.openNavbarContent = function(section) {
        
        this.isNavbarContentOpen = true;
        this.currentSection = section;
        // console.log("navbaStatus", this.isNavbarContentOpen);
       
    };
    vm.closeNavbarContent = function() {
        this.isNavbarContentOpen = false;
    };
    
    vm.navigateToCheckout = function(){
      // console.log(vm.selectedSize);
      $location.path(`account/orders`);
    }
    vm.handleOpenLoginModal = function(event) {
      $mdDialog.show({
        controller: SigninController,
        controllerAs: '$ctrl',
        templateUrl: 'app/main-component/navbar/signin/signin.component.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true
      });
    };
    vm.onDocumentClick = function(event) {
        //console.log("navbaStatus", vm.isNavbarContentOpen);
        // var thisintg = 1;
        const modalContainer = document.querySelector('.modal-container');
        const openButtons = document.querySelectorAll('.open-button');
        let clickInsideButton = false;
        // console.log("Insidebutton status",clickInsideButton);
        // Check if click occurred inside one of the open buttons
        for (const button of openButtons) {
          // console.log("integr:", thisintg);
          // thisintg++;
          if (button.contains(event.target)) {
            console.log("found it");
            clickInsideButton = true;
            break; // Stop iterating if found inside a button
          }
        }
        // openButtons.each(function(index, button) {
        //   if (angular.element(button).contains(event.target)) {
        //     clickedInsideButton = true;
        //   }
        // });
       // console.log("csec", vm.currentSection );
        // console.log("Insidebutton status",clickInsideButton);
        // Close navbar content if clicked outside and not on a button
        if (modalContainer && !clickInsideButton && vm.isNavbarContentOpen) {
          vm.closeNavbarContent();
        }
       // console.log("navbaStatus", vm.isNavbarContentOpen);

      };
    
      // Add event listener for document clicks
      document.addEventListener('click', vm.onDocumentClick);
 
}

// angular.module('myApp').component('signin', {
//   templateUrl: 'app/auth/signin/signin.component.html',
//   controller: SigninController
// });
// SigninController.$inject = ['$mdDialog'];
// function SigninController($mdDialog) {
//   var vm = this;

//     vm.username = '';
//     vm.password = '';
  
//     vm.openSignupDialog = function(event) {
//       $mdDialog.show({
//         controller: SignupController,
//         controllerAs: '$ctrl',
//         templateUrl: 'app/main-component/navbar/signup/signup.component.html',
//         parent: angular.element(document.body),
//         targetEvent: event,
//         clickOutsideToClose: true
//       });
//     };
  
//     vm.cancel = function() {
//       $mdDialog.cancel();
//     };
  
//     vm.submit = function() {
//       // Handle form submission here
//       console.log('Username:', vm.username);
//       console.log('Password:', vm.password);
//       $mdDialog.hide();
//     };
// }


// angular.module('myApp').component('signup', {
//   templateUrl: 'app/main-component/navbar/signup/signup.component.html',
//   controller: SignupController
// });
// SignupController.$inject = ['$mdDialog'];
// function SignupController($mdDialog) {

//   var vm = this;
//   vm.firstname1 = '';
//   vm.lastname1 = '';
//   vm.email1 = '';
//   vm.password1 = '';


//   vm.cancel = function() {
//     $mdDialog.cancel();
//   };

//   vm.submit = function() {
//     // Handle form submission here
//     console.log('Username:', vm.firstname1);
//     console.log('Username:', vm.lastname1);
//     console.log('Username:', vm.email1);
//     console.log('Username:', vm.password1);
//     $mdDialog.hide();
//   };
// }

// angular
//    .module('demoApp', ['ngMaterial'])
//    .controller('AppCtrl', SigninController);

//    function SigninController($mdDialog) {


//    }