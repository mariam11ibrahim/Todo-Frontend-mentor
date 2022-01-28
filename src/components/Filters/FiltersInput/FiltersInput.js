import styles from "./FiltersInput.module.scss"
const FiltersInput = ({ value, onChangeFilterValue }) => {

    const handleFilterClick = (e) => {
        onChangeFilterValue(e.target.value)
    }

    return (
        <input className={styles["filter-input"]}
            type="radio"
            name="filter"
            id={value}
            value={value}
            onChange={handleFilterClick} />
    )
}
export default FiltersInput;