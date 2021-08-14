import './TodoList.css'
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
    const todos = useSelector(state => state.todo.todos)

    return (
        <ul>
            {todos.map(todo => {
                return (<TodoListItem index={todos.indexOf(todo)} task={todo.task} timestamp={todo.timestampAdded} />)
            })}
        </ul>
    );
  }
  
  export default TodoList;