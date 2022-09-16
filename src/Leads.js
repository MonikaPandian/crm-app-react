import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Leads = () => {

    const [leads, setLeads] = useState([]);
    const navigate = useNavigate();

    function getLeads() {
        fetch("https://customer-relation-manage-app.herokuapp.com/leads", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setLeads(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getLeads(), []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Lead Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Company</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Lead Status</th>
                        <th scope="col">Lead Created</th>
                        <th scope="col">Lead Owner</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((lead) => {
                        return (
                            <tr>
                                <th scope="row">{lead.id}</th>
                                <td>{lead.fullname}</td>
                                <td>{lead.title}</td>
                                <td>{lead.company}</td>
                                <td>{lead.phone}</td>
                                <td>{lead.email}</td>
                                <td>{lead.status}</td>
                                <td>{lead.created}</td>
                                <td>{lead.owner}</td>
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

export default Leads;
