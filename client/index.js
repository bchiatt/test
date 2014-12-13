(function(){
  'use strict';

  angular.module('hapiest', ['ui.router', 'angularFileUpload'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',     {url:'/',         templateUrl:'/views/home/home.html'})
    .state('register', {url:'/register', templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
    .state('login',    {url:'/login',    templateUrl:'/views/users/users.html', controller:'UsersCtrl'})
    .state('logout',   {url:'/logout',   template:'',                           controller:'UsersCtrl'});
  }])
  .run(['$rootScope', '$http', function($rootScope, $http){
    $http.get('/status').then(function(response){
      $rootScope.rootuser = response.data;
      $rootScope.$broadcast('auth', response.data);
    }, function(){
      $rootScope.rootuser = null;
    });
  }]);
})();
