import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/taskSlice';
import { Task } from '../types';

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({task}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <input type='checkbox' checked= {task.completed} onChange={()=> dispatch(toggleTask(task.id))} />
            <span style={{ textDecoration : task.completed ? 'line-through' : 'none'}}>{task.title}</span>
            <button className='delete-btn' onClick={()=> dispatch(deleteTask(task.id))}>X</button>
        </div>
    )
}

export default TaskItem;