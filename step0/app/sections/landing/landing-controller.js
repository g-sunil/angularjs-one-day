angular.module("ToDoApp").controller('LandingCtrl', [function () {
    this.toDoList = [
    {author: "Sunil", title: "First to task", dueOn: "27/01/2015", completed:true},
    {author: "Sunil G", title: "Second to task", dueOn: "27/03/2015", completed:false}];

    this.getStyle = function (todo) {
        return {completed: todo.completed}
    }
}]);
