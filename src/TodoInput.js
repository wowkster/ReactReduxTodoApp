import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";
import "./TodoInput.css";

function TodoInput() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()

	const onTextInputChange = (e) => {
		setText(e.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		if (text === "") return

		dispatch(addTodo({
			task: text, // This needs to get the input value
			timestampAdded: new Date().valueOf()
		}))

		setText("")
	};

	return (
		<form action="">
			<input
				value={text}
				type="text"
				name="text-input"
				id="text-input"
				placeholder="Add your new todo"
				onChange={onTextInputChange}
			/>
			<button className="submit-button" onClick={handleSubmit} >+</button>
		</form>
	);
}

export default TodoInput;
