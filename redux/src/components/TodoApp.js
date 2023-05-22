import React from "react";
import { connect } from "react-redux";
import { addTodo, delTodo } from "../store/actions/todoAction";

// connect
const TodoApp = ({ todos, addTodo, delTodo }) => {
    const addNewTodo = () => {
        // hardcode
        const data = {
            id:3,
            title: "This is three",
            complete: false
        }
        addTodo(data)
    }
    
    return (
        <div>
            <h1>Todo App</h1>
            <button onClick={addNewTodo}>add</button>
            {todos.map(todo =>
                <div key={todo.id}>
                    <p>{todo.title}</p>
                    <button onClick={() => delTodo(todo.id)}>delete</button>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
})

export default connect(mapStateToProps, {addTodo, delTodo})(TodoApp);

// hooks
// const TodoApp = () => {
//     const todos = useSelector(state => state.todoReducer.todos);
//     const dispatch = useDispatch();
//     const addNewTodo = () => {
//         // hardcode
//         const data = {
//             id:3,
//             title: "This is three",
//             complete: false
//         }
//         dispatch(addTodo(data))
//     }

    
//     return (
//         <div>
//             <h1>Todo App</h1>
//             <button onClick={addNewTodo}>add</button>
//             {todos.map(todo =>
//                 <div key={todo.id}>
//                     <p>{todo.title}</p>
//                     <button onClick={() => delTodo(todo.id)}>delete</button>
//                 </div>
//             )}
//         </div>
//     )
// }
// export default TodoApp;