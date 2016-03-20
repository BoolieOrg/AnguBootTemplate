// App intialisieren
var app = angular.module('Taskmanager', ['ngRoute', 'ui.bootstrap']);

// App Routes
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
      // Startseite routen
      .when('/',
          {
              controller: 'Tasklist',
              templateUrl: 'app/template/Tasklist'
          })
      // Tagesauswahl routen
      .when('/day/:day',
          {
              controller: 'Tasklist',
              templateUrl: 'app/template/Tasklist'
          })
      // sonstige auf Startseite routen
      .otherwise({ redirectTo: '/' });
});