import FiltersInputLabelContainer from "./components/Filters/FiltersInputLabelContainer/FiltersInputLabelContainer";
import Header from "./components/Header/Header";
import NewTask from "./components/Tasks/NewTask/NewTask";
import TasksContainer from "./components/Tasks/TasksContainer/TasksContainer";
import styles from "./App.module.scss"
import TasksProvider from "./Store/TasksProvider";
import { useContext } from "react/cjs/react.development";
import ThemeContext from "./Store/theme-context";



function App() {

  const themeContext = useContext(ThemeContext);
  const themeClass = ` ${!themeContext.isLightTheme && styles["dark"]} `
  return (
    <TasksProvider>
      <div className={`${styles["App"]} ${themeClass}`}>
        <Header />
        <NewTask />
        <TasksContainer />
        <div className={styles["small-screen__filter"]}>
          <FiltersInputLabelContainer />
        </div>
        <p>Drag and drop to reorder list.
          <br />
          <span>
          Developed by Mariam Ibrahim.
          </span>
        </p>
        <p></p>
      </div>
    </TasksProvider>
  );
}

export default App;
