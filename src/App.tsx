import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  return (
    <div className="container">
      <div className='filters'>
        <button className={filter === 'all' ? 'active' : ''} onClick={()=> setFilter('all')}>All</button>
        <button className={filter === 'completed' ? 'active' : ''} onClick={()=> setFilter('completed')}>completed</button>
        <button className={filter === 'pending' ? 'active' : ''} onClick={()=> setFilter('pending')}>pending</button>
      </div>
      <AddTask/>
      <TaskList filter={filter}/>
    </div>
  );
}

export default App;
