import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { Task } from '../types';
import { RootState } from '../redux/store';

let nextId = 11;
const AddTask: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(title.trim()) {
            const newTask: Task = {id: nextId++, title, completed: false};
            dispatch(addTask(newTask));
            setTitle('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTask;