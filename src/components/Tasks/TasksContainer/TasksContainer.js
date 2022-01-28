import { useContext, useState } from "react";
import TasksContext from "../../../Store/tasks-context";
import Card from "../../Card/Card";
import ControlTasks from "../ControlTasks/ControlTasks";
import TaskItem from "../TaskItem/TaskItem";
import styles from "./TasksContainer.module.scss"

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TasksContainer = () => {
    //
    const [filter, setFitler] = useState('all');

    const tasksContext = useContext(TasksContext);

    const handleTaskFilter = (filter) => {
        setFitler(filter)
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(tasksContext.tasks);

        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        tasksContext.reOrderTasks(items);
    }

    const filteredTasks =
        tasksContext.tasks
            .filter(task => `${task.done}` !== filter);



    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>

            <Card className={styles["tasks-container"]}>

                <Droppable droppableId="tasks">

                    {(provided) =>
                    (
                        <ul  {...provided.droppableProps} ref={provided.innerRef}>
                            {
                                // tasksContext.tasks
                                filteredTasks.length > 0 ?
                                    filteredTasks
                                        // .filter(task => `${task.done}` !== filter)
                                        .map((task, index) => {
                                            return (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >{(provided) => (
                                                    <TaskItem
                                                        provided={provided}
                                                        index={index}
                                                        task={task.task}
                                                        id={task.id}
                                                        isDone={task.done} />)}

                                                </Draggable>)
                                        })
                                         :<TaskItem task={"There is no tasks"}/>

                            }
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable >
                <ControlTasks
                    onHandleTaskFilter={handleTaskFilter}
                />
            </Card>
        </DragDropContext>

    )
}
export default TasksContainer;