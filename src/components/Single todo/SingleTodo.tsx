import React from 'react'
import './single-todo-styles.scss'
import { Todo } from '../../model';

interface Props {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
	return (
		<div>

		</div>
	)
}

export default SingleTodo
