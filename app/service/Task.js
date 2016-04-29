app.service('Task', function ($http) {
    return {
      loadTasks: function (day, callback) {
        callback(JSON.parse(localStorage.getItem(day)));
      },
      updateTasks: function (day, tasks, callback) {
        localStorage.setItem(day, JSON.stringify(tasks));
        callback(JSON.parse(localStorage.getItem(day)));
      }
    };
});