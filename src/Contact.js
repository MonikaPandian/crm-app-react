import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    function getContacts() {
        fetch("https://customer-relation-manage-app.herokuapp.com/contacts", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setContacts(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getContacts(), []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>                       
                        <th scope="col">Full Name</th>
                        <th scope="col">Title</th>                       
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Tag List</th>                    
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => {
                        return (
                            <tr>                            
                                <td>{contact.name}</td>
                                <td>{contact.title}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>{contact.tag_list}</td>                               
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

export default Contact;
