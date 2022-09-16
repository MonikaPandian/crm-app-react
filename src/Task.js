import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Task = () => {

    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    function getTasks() {
        fetch("https://customer-relation-manage-app.herokuapp.com/tasks", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setTasks(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getTasks(), []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>                       
                        <th scope="col">Task Name</th>
                        <th scope="col">Percent Completed</th>
                        <th scope="col">Responsible User</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Task Owner</th> 
                        <th scope="col">Task Status</th>                                             
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => {
                        return (
                            <tr>                               
                                <td>{task.name}</td>
                                <td>{task.percent_complete}</td>
                                <td>{task.responsible_user}</td>                             
                                <td>{task.due_date}</td>
                                <td>{task.task_owner}</td>
                                <td>{task.status}</td>
                                <td><IconButton onClick="" color="secondary">
                                    <EditIcon />
                                </IconButton>
                                    <IconButton onClick="" color="error">
                                        <DeleteIcon />
                                    </IconButton></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Task;
