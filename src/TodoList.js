import * as React from 'react';
import * as TodoListItem from './TodoListItem';


const todoList = [
    {
      id: 0,
      title: 'Complete assignment',
    },
    {
      id: 1,
      title: 'Appointment',
    },
    {
      id: 2,
      title: 'Do workout',
    },
    {
      id: 3,
      title: 'Drink water',
    },
  ];


function TodoList() {
    return (
      <div> 
        <ul> 
            {todoList.map((todo) => {
              return (
                <TodoListItem key={todo.id} todo={todo} />
              )
            })}
        </ul>
      </div>
    )

}

export default TodoList;