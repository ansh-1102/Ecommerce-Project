angular.module('myApp').component('signin', {
    templateUrl: 'app/main-component/navbar/signin/signin.component.html',
    controller: SigninController
});
SigninController.$inject = ['$mdDialog','$http','navService']; // Inject $http and $mdDialog
function SigninController($mdDialog,$http,navService) {
    var vm = this;

    vm.email = '';
    vm.password = '';
    //vm.userLoggedIn = true; 
    vm.userFirstName = '';
   
  
    vm.openSignupDialog = function(event) {
      $mdDialog.show({
        controller: SignupController,
        controllerAs: '$ctrl',
        templateUrl: 'app/main-component/navbar/signup/signup.component.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true
      });
    };
  
    vm.cancel = function() {
      $mdDialog.cancel();
    };
  
    vm.submit = function() {
      // Handle form submission here
      console.log('Email:', vm.email);
      console.log('Password:', vm.password);
      // $mdDialog.hide();
      // console.log('status', navService.isUserLoggedIn());
      // navService.ChangeUserLoggedInStatus();
      // console.log('status', navService.isUserLoggedIn());
      var user = {
       
        email: vm.email,
        password: vm.password
      };
  
      $http.post('http://localhost:5454/auth/signin', user)
          .then(function(response) {
       
            console.log('User logged successfully:', response.data);
             console.log('status', navService.isUserLoggedIn());
            navService.ChangeUserLoggedInStatus();
             console.log('status', navService.isUserLoggedIn());
            $mdDialog.cancel();
           
          }, function(error) {
            // Handle signup error (e.g., display error message) 
              console.error('User not exist:', error);
              $mdDialog.show(
                $mdDialog.alert()
                  .clickOutsideToClose(true)
                  .title('User Not Registered')
                  .textContent('The user is not registered. Please sign up.')
                  .ok('OK')
            );
          });

          $http.post('http://localhost:5454/auth/profile', user)
          .then(function(response) {
       
            // console.log("Name:", response.data);
            var data = response.data;
            vm.userFirstName = data;
            console.log("Name:", vm.userFirstName);
           
          }, function(error) {
            // Handle signup error (e.g., display error message) 
              console.error('User doesnt exist:', error);
            //   $mdDialog.show(
            //     $mdDialog.alert()
            //       .clickOutsideToClose(true)
            //       .title('User Not Registered')
            //       .textContent('The user is not registered. Please sign up.')
            //       .ok('OK')
            // );
          });

       
       

          
    };
}
