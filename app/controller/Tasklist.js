app.controller('Tasklist', function ($scope, $routeParams, Task) {
	var days = ["Montag","Dienstag","Mitwoch","Donnerstag","Freitag","Sammstag","Sonntag"];
	var currentDay = $routeParams.day || 0;
	$scope.day = days[currentDay];

	// Tasks des aktuellen Tag laden
	Task.loadTasks(currentDay, function(tasks){
		$scope.tasks = tasks || [];
	});

	// Tasks erstellen
	$scope.addTask = function(){
		// in die Liste eintragen
		$scope.tasks.push({"name": $scope.taskName, "text": $scope.taskText, "status": false});		

		// Liste an den Service weitergeben
		Task.createTask(currentDay, $scope.tasks, function(tasks){
			$scope.tasks = tasks;
			$scope.taskName = "";
			$scope.taskText = "";
		});
	};

	// Tasks löschen
	$scope.deleteTask = function(index){
		$scope.tasks.splice(index, 1);
		Task.updateTasks(currentDay, $scope.tasks);
	};

	// Tasksstaus toggeln
	$scope.changeStatusTask = function(index){
		$scope.tasks[index].status = !$scope.tasks[index].status;
		Task.updateTasks(currentDay, $scope.tasks);
	};
});