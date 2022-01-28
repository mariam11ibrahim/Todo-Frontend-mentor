import { useEffect } from "react";
import { useReducer } from "react/cjs/react.development";
import TasksContext from "./tasks-context";


let dummyTasks = [
    { task: "Compelet online JavaScript course", id: "0task", done: true },
    { task: "Jog around the park 3x", id: "1task", done: false },
    { task: "10 minutes meditation", id: "2task", done: false },
    { task: "Read for 1 hour", id: "3task", done: false },
    { task: "Pick up groceries", id: "4task", done: false },
    { task: "Compelete Todo App on Frontend Mentor", id: "5task", done: false },
];

let storedTasks = JSON.parse(localStorage.getItem("tasks"));
storedTasks=storedTasks||dummyTasks
const activeTasksNumber = storedTasks.reduce((total, task) => !task.done ? total += 1 : total, 0);

const defualtTaskState = {
    tasks: storedTasks,
    activeTasksNumber
}

const tasksReducer = (state, action) => {
    if (action.type === "ADD") {
        let tasks = [action.task, ...state.tasks];
        let activeTasksNumber = state.activeTasksNumber + 1;
        return {
            tasks,
            activeTasksNumber
        }
    }
    else if (action.type === "REMOVE") {
        let tasks = state.tasks.filter(task => task.id !== action.id);
        let activeTasksNumber = tasks.filter(task => !task.done).length;
        return {
            tasks,
            activeTasksNumber
        }
    }
    else if (action.type === "COMPLETE") {
        let tasks = state.tasks.map(task => task.id === action.id ? { ...task, done: !task.done } : task);

        let taskIndex = tasks.findIndex(task => task.id === action.id);

        let activeTasksNumber = tasks[taskIndex].done ?
            state.activeTasksNumber - 1 :
            state.activeTasksNumber + 1;

        return {
            tasks,
            activeTasksNumber
        }
    }

    else if (action.type === "CLEAR_ALL") {
        const tasks = state.tasks.filter(task => !task.done);
        return {
            tasks,
            activeTasksNumber: state.activeTasksNumber
        }
    }
    else if (action.type === "REORDER") {
        const tasks = action.reOrderedTasks;
        return {
            tasks,
            activeTasksNumber: state.activeTasksNumber
        }
    }
    return defualtTaskState;
}
const TasksProvider = ({ children }) => {

    //managing tasks
    const [taskState, dispatchTaskAction] = useReducer(tasksReducer, defualtTaskState)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskState.tasks));

    }, [taskState.tasks]);

    const addTask = (task) => {
        dispatchTaskAction({ type: "ADD", task })
    }

    const removeTask = (id) => {
        dispatchTaskAction({ type: "REMOVE", id })
    }

    const completeTask = (id) => {
        dispatchTaskAction({ type: "COMPLETE", id })
    }

    const clearAllTasks = () => {
        dispatchTaskAction({ type: "CLEAR_ALL" })
    }

    const reOrderTasks = (reOrderedTasks) => {
        dispatchTaskAction({ type: "REORDER", reOrderedTasks })

    }


    const sharedTasksContext = {
        tasks: taskState.tasks,
        activeTasksNumber: taskState.activeTasksNumber,
        addTask,
        removeTask,
        completeTask,
        clearAllTasks,
        reOrderTasks

    }
    return (
        <TasksContext.Provider value={sharedTasksContext}>
            {children}
        </TasksContext.Provider>
    )
}
export default TasksProvider;