import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditCustomer(){

    const { id } = useParams();

    const [customer, setCustomer] = useState("")

    useEffect(() => {
      fetch(`https://customer-relation-manage-app.herokuapp.com/customers/${id}`, {
        method: "GET"
      })
      .then((data) => data.json())
      .then((data) => setCustomer(data))         
      .catch((e) => console.log(e))
    }, []);
    
    return (

      <div>                 
              {customer ? <EditCustomerForm customer={customer} /> : "Loading..."}        
      </div>
  
    )
  }


function EditCustomerForm({ customer }) {

    const [name, setName] = useState(customer.name);
    const [mobile, setMobile] = useState(customer.mobile);
    const [email, setEmail] = useState(customer.email);
    const [address, setAddress] = useState(customer.address);
    const [type, setType] = useState(customer.type);
    const [joined, setJoined] = useState(customer.joined);
    const [status, setStatus] = useState(customer.status);

    const navigate = useNavigate();

    return (
        <div>
            <div className="add-user">
                <TextField onChange={(event) => setName(event.target.value)}
                    label="Name" value={name} variant="standard" />

                <TextField onChange={(event) => setMobile(event.target.value)}
                    label="Mobile" value={mobile} variant="standard" />

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" value={email} variant="standard" />

                <TextField onChange={(event) => setAddress(event.target.value)}
                    label="Address" value={address} variant="standard" />

                <TextField onChange={(event) => setType(event.target.value)}
                    label="Type" value={type} variant="standard" />

                <TextField onChange={(event) => setJoined(event.target.value)}
                    label="Joined Date" value={joined} variant="standard" />
                
                <TextField onChange={(event) => setStatus(event.target.value)}
                    label="Status" value={status} variant="standard" />
            </div>
             
        <Button className="add-button" onClick={() => {
          const UpdatedCustomer = {
            name: name,
            mobile: mobile,
            email: email,
            address:address,
            type:type,
            joined:joined,
            status:status
          };
        
          fetch(`https://customer-relation-manage-app.herokuapp.com/customers/${customer.id}`,{
            method: "PUT",
            body: JSON.stringify(UpdatedCustomer),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())         
          .then(() => navigate("/customers"));                  
        }} 
          variant="contained">Update</Button>
        </div>
    )
}

