# angular-bind-compiled
AngularJS directive that allows you to dynamically bind and compile html that contains angular directives. This directive also contains callback option that allows you to to run additional scripts against loaded html

##How To Use


###Javascript

      var myApp = angular.module('myApp', ['bindCompiled']);
      
      
      angular.module('myApp').controller('myController', ['$scope', function ($scope){
      
      $scope.Html = 'some html with angular directives';
      
      $scope.callSomeJSCode = function(){
      
        // Some code...
      }
      
      }]);
      
      
###HTML

    <div data-compile="Html" data-compile-callback="callSomeJSCode"></div>


      
