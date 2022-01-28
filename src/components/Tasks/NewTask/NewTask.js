import { useContext, useState } from "react";
import {  generateID } from "../../../helpers/helpers";
import TasksContext from "../../../Store/tasks-context";
import Card from "../../Card/Card";
import styles from "./NewTask.module.scss";
const NewTask = ({onAddingNewTask}) => {
const [newTaskValue,setNewTaskValue]=useState("")
  const handleInputChange = (e) => {
    setNewTaskValue (e.target.value) ;
  }

  const handelTaskData = () => {
    let task = {}
    task["task"] = newTaskValue;
    task["done"] = false;
    task["id"] = generateID(newTaskValue);
    return task;
  }
  const tasksContext=useContext(TasksContext);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let task=handelTaskData(newTaskValue);
    tasksContext.addTask(task)

    setNewTaskValue("")


  }
  return (
    <Card className={styles["center"]}>
      <form className={styles["form"]} onSubmit={handleSubmit}>
      <div className={styles["form__circle-placeholder"]} ></div>
      <input
        className={styles["form__input"]}
        type="text"
        value={newTaskValue}
        placeholder="Create a new todo..."
        onChange={handleInputChange}
        />
    </form>
    </Card>
    
  )
}
export default NewTask;