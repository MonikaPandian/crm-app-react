import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddLead = () => {

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [created, setCreated] = useState("");
    const [owner, setOwner] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <div className="add-user">
                <TextField onChange={(event) => setName(event.target.value)}
                    label="Name" variant="standard" />

                <TextField onChange={(event) => setTitle(event.target.value)}
                    label="Title" variant="standard" />

                <TextField onChange={(event) => setCompany(event.target.value)}
                    label="Company" variant="standard" />

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone Number" variant="standard" />

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" variant="standard" />

                <TextField onChange={(event) => setStatus(event.target.value)}
                    label="Status" variant="standard" />
                
                <TextField onChange={(event) => setCreated(event.target.value)}
                    label="Created Date" variant="standard" />
                
                <TextField onChange={(event) => setOwner(event.target.value)}
                    label="Owner" variant="standard" />
            </div>
             
        <Button className="add-button" onClick={() => {
          const newLead = {
            fullname: name,
            title: title,
            company: company,
            phone:phone,
            email:email,
            status:status,
            created:created,
            owner:owner
          };
        
          fetch("https://customer-relation-manage-app.herokuapp.com/leads",{
            method: "POST",
            body: JSON.stringify(newLead),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())         
          .then(() => navigate("/leads"));                  
        }} 
          variant="contained">Add Lead</Button>
        </div>
    )
}

export default AddLead;
