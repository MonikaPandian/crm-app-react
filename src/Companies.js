import React from 'react';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const Companies = () => {

    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();

    function getCompanies() {
        fetch("https://customer-relation-manage-app.herokuapp.com/companies", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setCompanies(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getCompanies(), []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Company</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Billing Street</th>
                        <th scope="col">Billing City</th>
                        <th scope="col">Billing State</th>
                        <th scope="col">Billing Country</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => {
                        return (
                            <tr>
                                <th scope="row">{company.id}</th>
                                <td>{company.company}</td>
                                <td>{company.phone}</td>                            
                                <td>{company.billing_street}</td>
                                <td>{company.billing_city}</td>
                                <td>{company.billing_state}</td>
                                <td>{company.billing_country}</td>                               
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

export default Companies;
