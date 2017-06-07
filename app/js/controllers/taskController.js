angular
	.module("todoList")
	.controller("taskCtrl", function($scope, $http) {
        var url = 'http://127.0.0.1:5000/tasks';

        $http.get(url).
            then(function(response) {
                $scope.tasks = response.data.tasks;
            });

        $scope.activeTask = {};
        $scope.setActiveTask = setActiveTask;

        function setActiveTask(task) {
            console.log(task.title);
            $scope.activeTask = task;
        }
	});
