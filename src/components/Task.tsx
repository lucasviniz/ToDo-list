import { useState } from 'react';
import styles from './Task.module.css'
import { Circle, Trash, CheckCircle } from 'phosphor-react';

interface Tasks {
    content: string,
    onDeleteTask: (task: string) => void
    onTaskConcluded: (taskCount: boolean) => void
}



export function Task({ content, onDeleteTask, onTaskConcluded }: Tasks) {
    
    const [mark, setMark] = useState(false);
    function handleMarkedTask(){
        const isMarked = mark ? false : true;
        setMark(isMarked);
        onTaskConcluded(isMarked);
    }

    function deleteTask(){
        onDeleteTask(content);
    }

    return (
        <div className={styles.task}>
            <header onClick={handleMarkedTask}>
                <div className={styles.taskContent} >
                    <button title="Marcar tarefa">
                        {mark ? (
                            <CheckCircle weight="fill" color="#5E60CE" className={styles.checkTask} size={24}/>
                        ) : (
                            <Circle size={24}/>
                        )}
                        
                    </button>
                    <p className={ mark ? styles.taskTextMark : styles.taskTextNoMark } >{content}</p>
                </div>
            </header>
            <button type="button" onClick={deleteTask} title="Deletar comentário">
                <Trash size={15} className={styles.trash} />
            </button>
        </div>
    );
}