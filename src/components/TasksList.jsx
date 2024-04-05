import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState } from '../states/userState'
import { tasksState } from '../states/tasksState'
import AddTask from './AddTask'

const TasksList = () => {
    const userData = useRecoilValue(userState)
    const tasksList = useRecoilValue(tasksState)

    const listOfTasks = useSetRecoilState(tasksState)

    const handleDeleteTask = (id) => {
        const newTasksList = tasksList.filter(task => task.id !== id)
        listOfTasks(newTasksList)
    }

    return (
        userData.loggedIn && (
            <div className='tasks'>
                <AddTask />
                <div className='tasks-list'>
                    {tasksList.map(task => {
                        // console.log(task);
                        const {id, taskTitle, taskCategory} = task

                        return <div key={id} className='task'>
                            <p>
                                {taskTitle}
                            </p>
                            <p>
                                {taskCategory}
                            </p>

                            <button type='button' onClick={() => handleDeleteTask(id)}>
                                Delete Task
                            </button>
                        </div>
                    })}
                </div>
            </div>
        )

    )
}

export default TasksList