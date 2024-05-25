import { PlusCircle } from 'phosphor-react';
import styles from './TaskArea.module.css';
import clipboard from '../assets/clipboard.svg';
import { Task } from './Task';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export function TaskArea() {

    const [tasks, setTasks] = useState(
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit doloremque obcaecati error']
    );

    const [newTasks, setNewTasks] = useState('');

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        setTasks([...tasks, newTasks])
        setNewTasks('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewTasks(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    return (
        <div className={styles.taskArea}>
            <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <input 
                    value={newTasks}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                />
                <button type="submit">Criar<PlusCircle size={20}/></button>
            </form>
            <div className={styles.taskCreated}>
                <div className={styles.taskStatus}>
                    <div className={styles.statusCreated}>
                        <h4>Tarefas criadas</h4>
                        <span>{tasks.length}</span>
                    </div>
                    
                    <div className={styles.statusConcluded}>
                        <h4>Concluídas</h4>
                        <span>0</span>
                    </div>
                    
                </div>


                <div className={styles.taskList}>
                   
                   {(tasks.length != 0) ? (
                        tasks.map(content => {
                        return (
                            <Task content={content}/>
                        ) 
                        })
                   ) : (
                    <div className={styles.noTaskList}>
                        <img src={clipboard} alt="" />
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                    </div>
                   )} 

                </div>
                

                
            </div>

        </div>
    );
}