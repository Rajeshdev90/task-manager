export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export enum TaskActionTypes {
    ADD_TASK = 'ADD_TASK',
    DELETE_TASK = 'DELETE_TASK',
    TOGGLE_TASK = 'TOGGLE_TASK',
    FETCH_TASKS = 'FETCH_TASKS'
}