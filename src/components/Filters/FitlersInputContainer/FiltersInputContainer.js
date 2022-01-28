import FiltersInput from "../FiltersInput/FiltersInput";
import styles from "./FiltersInputContainer.module.scss";
const FiltersInputContainer = ({ onChangeTaskFilterValue }) => {
    
    const handleFilterValue = (filterValue) => {
        onChangeTaskFilterValue(filterValue)
    }
    
    return (
        <div className={styles["filter__inputContainer"]}>
            {["all", "true", "false"]
                .map((value, idx) => <FiltersInput
                    value={value}
                    key={idx}
                    onChangeFilterValue={handleFilterValue} />)}

        </div>
    )
}
export default FiltersInputContainer;