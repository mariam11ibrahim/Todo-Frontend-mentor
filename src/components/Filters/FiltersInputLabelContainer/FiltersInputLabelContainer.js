import { useState } from "react";
import Card from "../../Card/Card";
import FiltersInputLabel from "../FiltersInputLabel/FiltersInputLabel";
import styles from './FiltersInputLabelContainer.module.scss'
const FiltersInputLabelContainer = ({ filterValue }) => {

    const [filter, setFilter] = useState("all")
    const handleFilterLabel = (filter) => {
        setFilter(filter)
    }


    return (
        <Card className={styles["filter__label-container"]}>

            <FiltersInputLabel
               
                value="all"
                filterTitle={"All"}
                onClickFilter={handleFilterLabel}
                isActive={filter === "all"} />

            <FiltersInputLabel
                value="true"
                filterTitle={"Active"}
                onClickFilter={handleFilterLabel}
                isActive={filter === "true"} />

            <FiltersInputLabel
                value="false"
                filterTitle={"Compeleted"}
                onClickFilter={handleFilterLabel}
                isActive={filter === "false"} />
        </Card>
    )
}
export default FiltersInputLabelContainer;