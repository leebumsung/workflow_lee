

function TodoItems({ todos, setTodos }) {

    const removeTodo = (id) => {
        const removeList = todos.filter(todo => todo.id !== id);

        setTodos(removeList);
    }

    const onChangeHandler = (e) => {
        const changeIsDoneList = todos.map(
            (todo) => {
                if(todo.id === parseInt(e.target.id)) {
                    todo.isDone = e.target.checked;
                }
                return todo;
            }
        );

        setTodos(changeIsDoneList);
    }

    return (
        <>
            {
                todos.map(
                    todo =>
                        <p key={ todo.id }>
                           <input
                            type="checkBox"
                            id={ todo.id }
                            onChange={ onChangeHandler }
                           />
                           <label 
                                htmlFor={ todo.id }
                                style={ {TextDecoration: todo.isDone? 'line-through': 'none'} }
                           >
                                { todo.description }
                           </label>
                           <button onClick={ () => removeTodo(todo.id)}>x</button>
                        </p>
                )
            }
        </>
    );
}

export default TodoItems;