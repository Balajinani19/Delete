/* eslint-disable react/prop-types */
import { TextInput, Button } from '@mantine/core';

const Task = ({ task, onEditTask, onDeleteTask }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextInput
        style={{ flex: 1, marginRight: '1rem' }}
        maw={150}
        value={task.name}
        onChange={(e) => onEditTask(task.id, e.currentTarget.value)}
      />
      
      
      <Button onClick={() => onDeleteTask(task.id)} variant="light">
        Delete
      </Button>
    </div>
  );
};

export default Task;
