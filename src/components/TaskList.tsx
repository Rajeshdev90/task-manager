import React, { useEffect } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchTasks } from '../redux/taskSlice';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
    filter: 'all' | 'completed' | 'pending';
}

const TaskList: React.FC<TaskListProps> = ({filter}) => {
    const dispatch: AppDispatch = useDispatch<AppDispatch>();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const status = useSelector((state: RootState) => state.tasks.status);

    useEffect(()=> {
        if(status === 'idle') {
            dispatch(fetchTasks())
        }
    },[dispatch, status]);

    const filteredTasks = tasks.filter((task: Task)=> {
        if(filter === 'all') return true;
        if(filter === 'completed') return task.completed;
        if(filter === 'pending') return !task.completed;
        return true;
    })

    return (
        <div>
            {
                status === 'loading' && <p>Loading...</p>
            }
            {
                filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <TaskItem key={task.id} task={task}/>
                    ))
                ) : (<p>No Tasks to display</p>)
            }
        </div>
    )
}

export default TaskList
