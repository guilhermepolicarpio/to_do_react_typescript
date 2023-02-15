import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from "./TaskForm.module.css"
import { ITask } from "../interfaces/Task"

interface Props {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {

    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [difficulty, setDifficulty] = useState<number>(0);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === "title"){
            setTitle(e.target.value)
        }
        else{
            setDifficulty(parseInt(e.target.value))
        }
    }

    return (
        <form className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title"> Title: </label>
                <input type="text" name="title" placeholder="Task Tittle" onChange ={handleChange}/>
            </div>

            <div className={styles.input_container}>
                <label htmlFor="difficulty">Difficulty: </label>
                <input type="text" name="title" placeholder="Task difficulty" onChange ={handleChange}/>
                <input type="submit" value={btnText} />
            </div>

        </form>
    )
}

export default TaskForm;