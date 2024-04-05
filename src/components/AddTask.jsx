import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tasksState } from '../states/tasksState';
import { useForm } from "react-hook-form"

const AddTask = () => {
    const listOfTasks = useSetRecoilState(tasksState)
    const tasks = useRecoilValue(tasksState)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const formSubmit = (data) => { 
        let taskFound;

        tasks.forEach(taskTitle => {
            taskTitle === data.taskTitle ? taskFound = true : taskFound = false
        })

        if(!taskFound) listOfTasks(currListOfTasks => [...currListOfTasks, data.taskTitle.trim()]);        
    }

    return (
        <form className='task-form' onSubmit={handleSubmit(formSubmit)}>

            {errors.taskTitle && <p>{errors.taskTitle.message}</p>}
            <input {...register('taskTitle', {required: 'Task title is required' })} type="text" placeholder="Enter Task (Task Title)" />

            <button type="submit">
                Add Task
            </button>
        </form>
    )
}

export default AddTask