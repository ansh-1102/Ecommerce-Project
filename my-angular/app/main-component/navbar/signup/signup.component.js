
angular.module('myApp').component('signup', {
    templateUrl: 'app/main-component/navbar/signup/signup.component.html',
    controller: SignupController
});
SignupController.$inject = ['$mdDialog','$http']; // Inject $http and $mdDialog
  function SignupController($mdDialog,$http) {
  
    var vm = this;
    vm.firstname1 = '';
    vm.lastname1 = '';
    vm.email1 = '';
    vm.password1 = '';
  
  
    vm.cancel = function() {
      $mdDialog.cancel();
    };
  
    vm.submit = function(event) {
        // Handle form submission here
        console.log('Username:', vm.firstname1);
        console.log('Username:', vm.lastname1);
        console.log('Username:', vm.email1);
        console.log('Username:', vm.password1);
        var user = {
          firstName: vm.firstname1,
          lastName: vm.lastname1,
          email: vm.email1,
          password: vm.password1
        };
    
        $http.post('http://localhost:5454/auth/signup', user)
          .then(function(response) {
            
            console.log('User created successfully:', response.data);
            $mdDialog.show({
              controller: SigninController,
              controllerAs: '$ctrl',
              templateUrl: 'app/main-component/navbar/signin/signin.component.html',
              parent: angular.element(document.body),
              targetEvent: event,
              clickOutsideToClose: true
            });
          }, function(error) {
            // Handle signup error (e.g., display error message) 
              console.error('User already exist:', error);
              $mdDialog.show(
                $mdDialog.alert()
                  .clickOutsideToClose(true)
                  .title('User Already Registered')
                  .textContent('The user is already registered. Please log in.')
                  .ok('OK')
            );
          });
              
         
        
      };
}

// return $http({
//   method: 'GET',
//   url: `/api/ems/courseResult/${termCourseId}`,
//   params: params
// }).then(function (response) {
//   return {
//       response: response
//   };
// }, function (response) {
//   return response;
// });