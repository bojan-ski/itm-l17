import { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { tasksState } from '../states/tasksState';

const AddTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const listOfTasks = useSetRecoilState(tasksState)

    const addNewTaskToListOfTasks = () => {
        listOfTasks(currListOfTasks => [...currListOfTasks, taskTitle.trim()]);        
    };

    const handleSubmit = e => {
        e.preventDefault()
 
        if(!taskTitle) return

        addNewTaskToListOfTasks()
        setTaskTitle('')
    }

    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <input type="text" value={taskTitle} placeholder="Enter Task (Task Title)" onInput={e => setTaskTitle(e.target.value)} />

            <button type="submit">
                Add Task
            </button>
        </form>
    )
}

export default AddTask