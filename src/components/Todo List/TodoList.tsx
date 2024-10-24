import React from 'react'
import './todo-list.scss'
import { Todo } from '../../model'
import SingleTodo from '../Single todo/SingleTodo'

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
	return (
		<div className='todo-list'>
			{todos.map(todo => (
				<SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
			))}
		</div>
	)
}

export default TodoList
