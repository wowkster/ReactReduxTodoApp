import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { removeTodo } from './features/todo/todoSlice'
import './TodoListItem.css'

function TodoListItem(props) {
    const dispatch = useDispatch()

    const onTrashClick = (e) => {
        dispatch(removeTodo({index: props.index}))
    }

    const formatTime = (millis) => {
        return moment(millis).format('h:mm a')
    }
    
    return (
        <li>
            {props.task}
            <span className="timestamp">{formatTime(props.timestamp)}</span>
            <FontAwesomeIcon icon={faTrash} className="trash" onClick={onTrashClick}/>
        </li>
    )
}

export default TodoListItem
