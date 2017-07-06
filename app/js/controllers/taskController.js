angular
	.module("todoList")
	.controller("taskCtrl", function($scope, $http) {
        var url = server + 'tasks';

        $http.get(url).
            then(function(response) {
                $scope.tasks = response.data.tasks;
            });

        $scope.activeTask = {};
        $scope.setActiveTask = setActiveTask;

        $scope.updateActiveTask = updateActiveTask;

        function setActiveTask(task) {
            console.log(task.title);
            $scope.activeTask = task;
        }

        function updateActiveTask(title, description, task_id) {
            var url = server + 'task/' + task_id
            var data = {"title": title,
                        "description": description}

            $http.put(url, data)
                .success(function (data, status, headers, config) {
                    for (i = 0; i < $scope.tasks.length; i++) {
                        if ($scope.tasks[i].id == task.id) {
                            $scope.tasks[i] = task;
                        }
                    }
            })
                .error(function (data, status, header, config) {
                    console.log(status);
            });

            

        }

	});


var server = 'http://127.0.0.1:5000/';