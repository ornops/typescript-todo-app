import React from 'react'
import './input-field-styles.scss'

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<Props> = ({ todo, setTodo }) => {
	return (
		<form className='input-field'>
			<input type="input"
				placeholder='Enter a Task'
				className='input__box'
				value={todo}
				onChange={(e) => setTodo(e.target.value)} />
			<button className='input_submit' type='submit'>Go</button>
		</form>
	)
}

export default InputField
