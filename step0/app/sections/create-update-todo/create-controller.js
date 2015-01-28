angular.module('ToDoApp', []).controller('CreateToDoCtrl', ['$window', function (win) {
    this.todo = {completed: false};
    this.msg = "";
    this.addToList = function () {
        console.log("this todo", this.todo);
        this.msg = "Form submitted by " + this.todo.author;
        win.alert(this.msg);
    }
}]);
