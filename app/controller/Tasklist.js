app.controller('Tasklist', function ($scope, $routeParams, Task) {
  var days = ["Montag","Dienstag","Mitwoch","Donnerstag","Freitag","Sammstag","Sonntag"];
  var currentDay = $routeParams.day || 0;
  $scope.day = days[currentDay];

  Task.loadTasks(currentDay, function(tasks){
    $scope.tasks = tasks || [];
  });

  $scope.addTask = function(){
    $scope.tasks.push({"name": $scope.taskName, "text": $scope.taskText, "status": false});   

    Task.updateTasks(currentDay, $scope.tasks, function(tasks){
      $scope.tasks = tasks;
      $scope.taskName = "";
      $scope.taskText = "";
    });
  };

  $scope.deleteTask = function(index){
    $scope.tasks.splice(index, 1);
    Task.updateTasks(currentDay, $scope.tasks, function(tasks){
      $scope.tasks = tasks;
    });
  };

  $scope.changeStatusTask = function(index){
    $scope.tasks[index].status = !$scope.tasks[index].status;
    Task.updateTasks(currentDay, $scope.tasks, function(tasks){
      $scope.tasks = tasks;
    });
  };
});