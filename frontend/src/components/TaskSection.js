import React from 'react';

const TaskSection = ({ title, tasks, onMoveTask }) => {
  return (
    <div className="task-section">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            {task.status !== 'Completed' && (
              <button onClick={() => onMoveTask(task._id, task.status)}>
                {task.status === 'Pending' ? 'Start' : 'Complete'}
              </button>
            )}
            {task.status === 'Completed' && task.timestamp && (
              <span>{new Date(task.timestamp).toLocaleString()}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSection;
