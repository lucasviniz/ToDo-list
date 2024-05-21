import { Header } from "./components/Header";
import styles from './App.module.css';
import { PlusCircle } from 'phosphor-react';


export function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.newTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>Criar<PlusCircle size={20}/></button>
      </div>
    </div>
  );
}