import React from 'react';
import './app-header.css';

const AppHeader = ({ toDo, done }) => {

  const timeDay = new Date().getHours();
  if (timeDay < 10) {
    document.body.classList.add('morning');
  } else if (timeDay < 20) {
    document.body.classList.add('evening');
  } else {
    document.body.classList.add('night');
  }

  return (
    <div className="app-header d-flex">
      <h2>Todo List</h2>
      <h3>{toDo} more to do, {done} done </h3>
    </div>
  );
};

export default AppHeader;