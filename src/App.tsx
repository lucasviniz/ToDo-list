import { Header } from "./components/Header";
import styles from './App.module.css';
import { TaskArea } from "./components/TaskArea";



export function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <TaskArea/>
    </div>
  );
}