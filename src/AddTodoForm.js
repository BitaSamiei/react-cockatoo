import * as React from 'react';


function AddTodoForm() {
    return (
        <form>
            <label htmlFor="todoTitle">Title: </label>
            <input id="todoTitle"></input>
            <button type='but'>Add</button>
        </form>
    )

}

export default AddTodoForm;