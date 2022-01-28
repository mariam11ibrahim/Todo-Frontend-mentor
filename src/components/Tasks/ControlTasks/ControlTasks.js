import styles from "./Control.module.scss";
import FiltersInputContainer from "../../Filters/FitlersInputContainer/FiltersInputContainer";
import FiltersInputLabelContainer from "../../Filters/FiltersInputLabelContainer/FiltersInputLabelContainer";
import { useContext, useState } from "react";
import TasksContext from "../../../Store/tasks-context";
const ControlTasks = ({ onHandleTaskFilter }) => {

    const [filterValue, setFilterValue] = useState("all");
    const tasksContext = useContext(TasksContext);


    const handleTaskFilterValue = (filterValue) => {
        onHandleTaskFilter(filterValue)
        setFilterValue(filterValue)
    }

    const handleClickClearButton = () => {
        tasksContext.clearAllTasks()
    }

    return (
        <div className={styles["control"]}>

            <span className={styles["control__tasks-number"]}>
                {tasksContext.activeTasksNumber} tasks left</span>

            <FiltersInputContainer onChangeTaskFilterValue={handleTaskFilterValue} />

            <FiltersInputLabelContainer filterValue={filterValue} />

            <button className={`${styles["btn"]} ${styles["control__clear"]}`}
                type="button"
                value="clear"
                onClick={handleClickClearButton}> Clear Completed</button>

        </div>
    )
}
export default ControlTasks;