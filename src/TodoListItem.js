import React from "react";

const TodoListItem = ({todo}) => {
    return (
        <div>
            <li>{todo.title}</li>
        </div>

    )

}

export default TodoListItem;