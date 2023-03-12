import TodoItems from './TodoItems';
import { useState } from 'react';

function TodoLists() {

    const [todos, setTodos] = useState([
        {id: 1, description: '오늘 해야할 일 추가', isDone: false}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(2);

    const onChangeHandler = (e) => {
        setInputText(e.target.value);
    }

    const onClickHandler = () => {
        const changeTodos = todos.concat({
            id: nextId,
            description: inputText,
            isDone: false
        });

        console.log(changeTodos);
        setInputText('');
        setNextId(nextId + 1);
        setTodos(changeTodos);
    } 

    return (
        <>
            <h3>Toto-List</h3>
            <div className="todo-list">
                <TodoItems
                    todos={ todos }
                    setTodos={ setTodos }
                />
            </div>
            <div className="append-list">
                <input
                    type="text"
                    value={ inputText }
                    onChange={ onChangeHandler }
                />
                <button onClick={ onClickHandler }>추가하기</button>
            </div>
        </>
    );
}

export default TodoLists;