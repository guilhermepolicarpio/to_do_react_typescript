import React from 'react'

interface Props {
    btnText: string
}

const TaskForm = ({ btnText }: Props) => {
    return (
        <form>
            <div>
                <label htmlFor="title"> Title: </label>
                <input type="text" name="title" placeholder="Task Tittle" />
            </div>

            <div>
                <label htmlFor="difficulty">Difficulty: </label>
                <input type="text" name="title" placeholder="Task difficulty" />
            </div>
            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm;