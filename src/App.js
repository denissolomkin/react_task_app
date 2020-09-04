import React from 'react';
import { TaskManager } from './bus/taskManager'
import {initializeIcons} from '@fluentui/react'

initializeIcons();
export const App = () => (
  <>
    <TaskManager />
  </>
);
