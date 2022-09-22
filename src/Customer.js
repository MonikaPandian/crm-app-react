import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Customer = () => {

    const [customers, setCustomers] = useState([]);
    const navigate = useNavigate();

    function getCustomers() {
        fetch("https://customer-relation-manage-app.herokuapp.com/customers", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setCustomers(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getCustomers(), []);
    
  return (
    <div>
            <table className="table table-striped">
                <thead>
                    <tr>                       
                        <th scope="col">Customer Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Type</th>
                        <th scope="col">Joined</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((cust) => {
                        return (
                            <tr>                               
                                <td>{cust.name}</td>
                                <td>{cust.mobile}</td>
                                <td>{cust.email}</td>
                                <td>{cust.address}</td>
                                <td>{cust.type}</td>
                                <td>{cust.joined}</td>
                                <td>{cust.status}</td>
                                <td><IconButton onClick={()=>{navigate(`/edit-customer/${cust.id}`)}} color="secondary">
                                    <EditIcon />
                                </IconButton>
                                    <IconButton onClick={()=>{navigate(`/delete-customer/${cust.id}`)}} color="error">
                                        <DeleteIcon />
                                    </IconButton></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
  )
}

export default Customer;
