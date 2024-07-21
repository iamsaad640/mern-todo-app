import React, { useState } from 'react';

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [newText, setNewText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {isEditing ? <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
        : <div
          style={{
            textDecoration: todo.completed ? 'line-through' : '',
          }}
          onClick={() => toggleComplete(todo._id)}
        >
          {todo.text}
        </div>}
<div>
      <button onClick={() => deleteTodo(todo._id)}>Delete</button>
      {isEditing ? <button onClick={() => {editTodo(todo._id,newText);
        setIsEditing(false);}}>Save</button> : <button onClick={() => setIsEditing(true)}>Edit</button>}
        </div>

    </div>
  );
};

export default Todo;
