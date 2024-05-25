import styles from './Task.module.css'
import { Circle, Trash } from 'phosphor-react';

interface Tasks {
    content: string
}

export function Task({ content }: Tasks) {
    return (
        <div className={styles.task}>
            <Circle size={24}/>
            <p>{content}</p>
            <Trash className={styles.trash} size={20}/>
        </div>
    );
}