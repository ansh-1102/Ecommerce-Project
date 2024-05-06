// auth.service.js

angular.module('myApp').service('navService', function() {
    var userLoggedIn = false;

    return {
      isUserLoggedIn: function() {
        return userLoggedIn;
      },
      ChangeUserLoggedInStatus: function() {
        userLoggedIn = !userLoggedIn;
      }
    };
  });
  