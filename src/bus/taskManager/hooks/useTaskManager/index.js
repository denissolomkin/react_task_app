import { useEffect, useState } from 'react'
import { api } from '../../api'

export const useTaskManager = () => {

    const [tasks, setTasks] = useState([])

    useEffect(
        () => {

            (async () => {

                const tasks = api.tasks.getAll()
                setTasks(tasks)
            })()

        }, []
    )

    return {
        tasks,
    }

}