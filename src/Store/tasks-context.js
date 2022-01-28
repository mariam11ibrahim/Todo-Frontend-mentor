import React from "react";
const TasksContext = React.createContext({
    tasks: [],
    activeTasks: 0,
    addTask: () => { },
    removeTask: () => { },
    completeTask: () => { },
    clearAllTasks: () => { },
    reOrderTasks: () => { },

})
export default TasksContext;