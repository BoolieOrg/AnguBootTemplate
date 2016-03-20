var app = angular.module('Taskmanager', ['ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
      .when('/',
          {
              controller: 'Tasklist',
              templateUrl: 'app/template/Tasklist'
          })
      .when('/day/:day',
          {
              controller: 'Tasklist',
              templateUrl: 'app/template/Tasklist'
          })
      .otherwise({ redirectTo: '/' });
});