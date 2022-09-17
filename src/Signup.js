import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")


    return (
        <div className='login-page'>
            {/* <!-- As a heading --> */}
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">CRM Application</span>
                </div>
            </nav>

            <div className="login">
                <h4>Welcome to CRM</h4>
                <TextField className="login-text-first-name" onChange={(event) => setFirstName(event.target.value)}
                    label="First name" variant="standard" />
                <TextField onChange={(event) => setLastName(event.target.value)}
                    label="Last name" className="login-text-password" variant="standard" />
                <TextField className="login-text-email" onChange={(event) => setEmail(event.target.value)}
                    label="Email" variant="standard" />
                <TextField onChange={(event) => setPassword(event.target.value)}
                    label="password" className="login-text-password" variant="standard" />
                <Button className="login-button" 
                    variant="contained" onClick={() => {
                        const newEmployee = {
                          firstName: firstName,
                          lastName:lastName,
                          email: email,
                          password:password       
                        };
                      
                        fetch("https://customer-relation-manage-app.herokuapp.com/employees/signup",{
                          method: "POST",
                          body: JSON.stringify(newEmployee),
                          headers: {
                            "Content-Type": "application/json",
                          }
                        })
                        .then((data) => data.json())  
                        .then((data)=>{console.log(data);
                        if(data.message == "Username already taken"){
                            window.alert("Username already taken")
                        }
                        if(data.message == "Password pattern does not match"){
                            window.alert("Password pattern does not match. Password should contain atleast one uppercase, lowercase, symbol and number")
                        }
                        if(data.acknowledged == true )
                            window.alert("Account created Successfully!!!")
                            navigate("/login")                                                
                    })                                                                            
                      }} >Create an account</Button>
                <p className='sign-up-text'>Already have an account ? <a style={{textDecoration:"underline",color:"blue"}} onClick={()=>{navigate("/")}}>Sign In</a></p>

            </div>
        </div>
    )
}

export default Signup;
