angular
	.module("todoList")
	.controller("taskCtrl", function($scope, $http, $uibModal) {
        var url = server + 'tasks';
        $scope.tasks;
        $http.get(url).
            then(function(response) {
                $scope.tasks = response.data.tasks;
            });

        $scope.activeTask = {};
        $scope.editTask = {};
        $scope.setActiveTask = setActiveTask;
        

        $scope.updateActiveTask = function(title, description, task_id) {
            console.log("Updating active task...");
            var url = server + 'task/' + task_id
            var data = {"title": title,
                        "description": description}

            $http.put(url, data)
                .then(function (response) {
                    for (i = 0; i < $scope.tasks.length; i++) {
                        if ($scope.tasks[i].id == task_id) {
                            $scope.tasks[i] = response.data;
                        }
                    }
                })
                .catch(function (data) {
                    console.log(data);
                });
        };


        $scope.modalPopup = function() {
            modal = $uibModal.open({
                templateUrl: 'taskModal.html',
                scope: $scope
            });

            $scope.modalInstance = modal;
            return modal.result
        };

        $scope.dismiss = function() {
            $scope.modalInstance.dismiss();
        }


        function setActiveTask(task) {
            $scope.activeTask = task;
            $scope.editTask = angular.copy($scope.activeTask);
        }


	});


var server = 'http://127.0.0.1:5000/';