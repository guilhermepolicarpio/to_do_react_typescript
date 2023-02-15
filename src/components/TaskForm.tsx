import React from 'react'
import styles from "./TaskForm.module.css"

interface Props {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {
    return (
        <form className = {styles.form}>
            <div className = {styles.input_container}>
                <label htmlFor="title"> Title: </label>
                <input type="text" name="title" placeholder="Task Tittle" />
            </div>

            <div className = {styles.input_container}>
                <label htmlFor="difficulty">Difficulty: </label>
                <input type="text" name="title" placeholder="Task difficulty" />
                <input type="submit" value={btnText} />
            </div>
            
        </form>
    )
}

export default TaskForm;