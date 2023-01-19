import * as React from 'react';


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
  ];


function TodoList() {
    return (

      <ul>
      {todoList.map(function(item){
        return <li key={item.id}>{item.title}</li>
      })
      }</ul>

    )

}

export default TodoList;