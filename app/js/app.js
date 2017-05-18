angular
	.module("todoList", [])
	.controller("taskCtrl", function($scope) {
		$scope.message = "Hello, World!";
		$scope.tasks = tasks;
		console.log($scope.tasks.length);
	});



var tasks = [
    {
        description: "Very bad! Pathetic!", 
        done: true, 
        id: 16, 
        title: "Fake news"
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