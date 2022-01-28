import { useContext, useState } from "react";
import TasksContext from "../../../Store/tasks-context";
import styles from "./TaskItem.module.scss";


const TaskItem = ({ task, id, isDone, provided }) => {

    const [isDoneTask, setIsDoneTask] = useState(isDone);

    const tasksContext = useContext(TasksContext)

    const handleChange = () => {
        setIsDoneTask(prevTaskState => !prevTaskState);
        tasksContext.completeTask(id)
    }
    const handleClick = () => {
        tasksContext.removeTask(id)
    }

    if (!provided) {
        return <li className={styles.empty}>{`${task} 👾 `}</li>
    }

    return (
        <li className={styles.task}
            ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
        >

            <div className={styles["check-box"]}>

                <input
                    className={styles["check-box__input"]}
                    type="checkbox"
                    name="task"
                    id={id}
                    onChange={handleChange}
                    checked={isDoneTask} />

                <div className={styles["check-box__custom--not-checked"]}></div>
                <div className={styles["check-box__custom--checked"]}>
                    <svg className={styles["check-box__custom-icon"]} xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                        <path fill="none" stroke="#FFF" strokeWidth={"2"} d="M1 4.304L3.696 7l6-6" />
                    </svg>

                </div>
            </div>

            <label
                className={`${styles["check-box__label"]} ${isDoneTask && styles["done"]}`}
                htmlFor={id}>
                {task}

            </label>

            <svg className={styles["task__icon-cross"]}
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18">
                <path fill="#494C6B"
                    fillRule={"evenodd"}
                    d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
            </svg>
        </li>
    )
}
export default TaskItem;