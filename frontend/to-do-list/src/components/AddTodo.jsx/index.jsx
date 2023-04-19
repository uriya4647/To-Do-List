import React, { useState } from 'react';
import './style.module.css';

function AddTodo() {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
  <div>
    <label htmlFor="description">Description:</label>
    <input
      type="text"
      id="description"
      value={description}
      onChange={handleDescriptionChange}
      className="input-field"
    />
  </div>
  <div>
    <label htmlFor="priority">Priority:</label>
    <select id="priority" value={priority} onChange={handlePriorityChange} className="select-field">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </div>
  <button type="submit" className="submit-button">+</button>
</form>

  );
}

export default AddTodo;
