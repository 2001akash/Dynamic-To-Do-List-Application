import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskSection from './components/TaskSection';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '' });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get('http://localhost:5000/tasks')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tasks!', error);
            });
    };

    const addTask = () => {
        axios.post('http://localhost:5000/tasks/add', newTask)
            .then((response) => {
                const newTaskWithDetails = {
                    ...response.data,
                    title: newTask.title,
                    description: newTask.description,
                    status: 'Pending',
                };
                setTasks((prevTasks) => [...prevTasks, newTaskWithDetails]);
                setNewTask({ title: '', description: '' });
            })
            .catch((error) => {
                console.error('There was an error adding the task!', error);
            });
    };

    const moveTask = (id, currentStatus) => {
        const newStatus = currentStatus === 'Pending' ? 'In Progress' : 'Completed';
        const updatedTimestamp = newStatus === 'Completed' ? new Date().getTime() : null;

        axios.post(`http://localhost:5000/tasks/update/${id}`, { status: newStatus })
            .then(() => {
                setTasks(tasks.map(task => {
                    if (task._id === id) {
                        return {
                            ...task,
                            status: newStatus,
                            timestamp: updatedTimestamp ? updatedTimestamp : task.timestamp
                        };
                    }
                    return task;
                }));
            })
            .catch(error => {
                console.error('There was an error updating the task!', error);
            });
    };

    return (
        <div className="App">
            <h1>Dynamic To-Do List</h1>
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Task Title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Task Description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="task-board">
                <TaskSection
                    title="Pending"
                    tasks={tasks.filter(task => task.status === 'Pending')}
                    onMoveTask={moveTask}
                />
                <TaskSection
                    title="In Progress"
                    tasks={tasks.filter(task => task.status === 'In Progress')}
                    onMoveTask={moveTask}
                />
                <TaskSection
                    title="Completed"
                    tasks={tasks.filter(task => task.status === 'Completed')}
                />
            </div>
        </div>
    );
};

export default App;
