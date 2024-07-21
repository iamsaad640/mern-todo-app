import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/todos').then((response) => {
      setTodos(response.data);
    });
  }, []);

  const addTodo = () => {
    axios.post('http://localhost:5000/todos', { text }).then((response) => {
      setTodos([...todos, response.data]);
      setText('');
    });
  };

  const toggleComplete = (id) => {
    axios.put(`http://localhost:5000/todos/${id}`).then((response) => {
      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    });
  };

  const editTodo = (id, newText) => {
    axios.put(`http://localhost:5000/todos/${id}/edit`, {text:newText}).then((response) => {
      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, text: newText } : todo
        )
      );
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
