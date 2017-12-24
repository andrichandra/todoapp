var todos = ['Kerjakan tugas Hactiv8'];

var input = prompt('What would you like to do?')

while(input !== 'quit'){
  if (input === 'list') {
    printList();
  } else if (input === 'new') {
    addTodo();
  } else if (input === 'delete'){
    deleteTodo();
  }
  input = prompt('What would you like to do?');
}
console.log('OK, YOU QUIT THE APP')

function printList (){
  todos.forEach(function(todo, index){
    console.log(index +': '+ todo);
  });
}

function addTodo(){
  var newTodo = prompt ('Enter new todo');
  todos.push(newTodo);
  console.log('added to the list');
}

function deleteTodo(){
  var index = prompt('Enter index todo to delete')
  todos.splice(index,1);
  console.log('Todo Removed');
}
