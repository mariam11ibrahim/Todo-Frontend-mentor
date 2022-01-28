import { useContext } from "react";
import ThemeContext from "../../Store/theme-context";
import styles from "./Header.module.scss";
import ThemeIcon from "./ThemeIcon";
const Header = () => {

    const themeContext = useContext(ThemeContext);

    const handleClick = () => {
        themeContext.toggleTheme();
    }
    return (
        <div className={`${styles.header}
        ${!themeContext.isLightTheme && styles["dark"]}`}
        >
            <h1 className={styles["header__heading"]}>TODO</h1>

            <ThemeIcon
                onClickIcon={handleClick}
                isLightTheme={themeContext.isLightTheme} />
        </div>
    )
}
export default Header;