import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState } from '../states/userState'
import { tasksState } from '../states/tasksState'
import AddTask from './AddTask'

const TasksList = () => {
    const userData = useRecoilValue(userState)
    const tasksList = useRecoilValue(tasksState)

    const listOfTasks = useSetRecoilState(tasksState)

    const handleDeleteTask = (taskTitle) => {
        const newTasksList = tasksList.filter(task => task !== taskTitle)
        listOfTasks(newTasksList)
    }

    return (
        userData.loggedIn && (
            <div className='tasks'>
                <AddTask />
                <div className='tasks-list'>
                    {tasksList.map((task, idx) => {
                        return <div key={idx} className='task'>
                            <p>
                                {task}
                            </p>

                            <button type='button' onClick={() => handleDeleteTask(task)}>
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