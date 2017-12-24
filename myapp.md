# Todo list - project - Hactiv8
### by Andri Chandra


 SIMPAN 'Kerjakan tugas Hactiv8' pada 'todos'
 SIMPAN dan TAMPILKAN 'What would you like to do?' pada'input'

 WHILE 'input' NOT EQUAL TO 'quit'
   IF 'input' EQUAL 'list'
     CALL 'printList'
   ELSE IF 'input' EQUAL 'new'
     CALL 'addTodo'
   ELSE IF 'input' EQUAL 'delete'
     CALL 'deleteTodo'
 ENDWHILE
 TULISKAN 'OK, YOU QUIT THE APP'

 FUNCTION 'printList'
   FOREACH FUNCTION 'todo, index' pada Todos
   TULISKAN 'index + ': ' + todo'
 ENDFUNCTION

 FUNCTION 'addTodo'
   SIMPAN dan TAMPILKAN 'Enter new todo'
   PUSH 'newTodo' pada 'todos'
   TULISKAN 'Added to the list'
 ENDFUNCTION

 FUNCTION 'deleteTodo'
   SIMPAN dan TAMPILKAN 'Enter index todo to delete'
   SPLICE 'index' sebanyak '1' pada 'todos'
   TULISKAN 'Todo Removed'
 ENDFUNCTION
