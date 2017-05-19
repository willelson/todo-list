describe("Tesk angular todo list application", function(){ 

	beforeEach(module("todoList"));

	describe("Test taskCtrl controller", function() {
		var ctrl;
		var scope = {};

		beforeEach(inject(function($controller) {
			ctrl = $controller('taskCtrl', {$scope:scope});
			})
		);

		it('should initialise a tasks variable', function() {
			expect(scope.tasks).toBeDefined();
		});

	});

})