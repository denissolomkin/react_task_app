import React from 'react';
import { Text } from '@fluentui/react'
import { List } from './components/List'
import { useTaskManager } from './hooks/useTaskManager'


export const TaskManager = () => {

    const { tasks } = useTaskManager()
    return (
        <>
            <Text variant="mega">
                Task Manager
        </Text>
            <List items={tasks} />
        </>
    )
}
