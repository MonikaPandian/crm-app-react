import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const ServiceRequest = () => {

    const [serviceRequests, setServiceRequests] = useState([]);
    const navigate = useNavigate();

    function getTasks() {
        fetch("https://customer-relation-manage-app.herokuapp.com/service-requests", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setServiceRequests(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getTasks(), []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>                        
                        <th scope="col">Service Request Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">User Responsible</th>                       
                        <th scope="col">Sevice Category</th> 
                        <th scope="col">Service Request Created</th>                                             
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceRequests.map((service) => {
                        return (
                            <tr>                               
                                <td>{service.name}</td>
                                <td>{service.status}</td>
                                <td>{service.user_responsible}</td>                             
                                <td>{service.service_category}</td>
                                <td>{service.created}</td>                               
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

export default ServiceRequest;
