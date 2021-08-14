import './TodoFooter.css'
import { useDispatch, useSelector } from "react-redux"
import { clearAllTodos } from './features/todo/todoSlice'

function TodoFooter(props) {
    const dispatch = useDispatch()
    const taskNum = useSelector(state => state.todo.todos.length)

    const onClearClick = (e) => {
        dispatch(clearAllTodos())
    }

    return (
        <footer>
            <h2>You have {taskNum} pending tasks</h2>
            <button onClick={onClearClick}>Clear All</button>
        </footer>
    )
}

export default TodoFooter