import { useState } from "react";
import styles from "./FiltersInputLabel.module.scss"
const FiltersInputLabel = ({ value, filterTitle, onClickFilter, isActive }) => {
    const handleClickFilterLabel = () => {
        onClickFilter(value)
    }

    return (<label
    onClick={handleClickFilterLabel}
        className={`${styles["label"]} ${isActive && styles["active"]}`}
        htmlFor={value} >
        {filterTitle}
    </label>)
}
export default FiltersInputLabel;