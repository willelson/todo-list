angular
	.module("todoList")
	.controller("taskCtrl", function($scope) {
		$scope.tasks = tasks;
        $scope.activeTask = {};
        $scope.setActiveTask = setActiveTask;


        function setActiveTask(task) {
            console.log(task.title);
            $scope.activeTask = task;
        }
	});

var tasks = [
    {
        description: "Very bad! Pathetic!", 
        done: true, 
        id: 16, 
        title: "Fake news!!!"
    }, 
    {
        description: "# your code here...", 
        done: false, 
        id: 22, 
        title: "Build a flask web app"
    }, 
    {
        description: "Testy McTestface", 
        done: false, 
        id: 24, 
        title: "Test"
    }
];