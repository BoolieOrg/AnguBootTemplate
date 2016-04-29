var app = angular.module('Taskmanager', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
      .when('/',
          {
              controller: 'Tasklist',
              templateUrl: '/app/template/Tasklist.html'
          })
      .when('/day/:day',
          {
              controller: 'Tasklist',
              templateUrl: '/app/template/Tasklist.html'
          })
      .otherwise({ redirectTo: '/' });
});