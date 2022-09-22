import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();  
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password,setPassword] = useState("")

    return (
        <div className='login-page'>
            {/* <!-- As a heading --> */}
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand text-white">CRM Application</a>
                    <form class="d-flex" role="search">
                        <button onClick={()=>navigate("/login")} class="btn btn-light" type="submit">Login</button>&nbsp;
                        <button onClick={()=>navigate("/signup")} class="btn btn-light" type="submit">Signup</button>
                    </form>
                </div>
            </nav>

            <div className="login">
                <h4>Welcome to CRM</h4>
                <TextField required className="login-text-email" onChange={(event) => setUsername(event.target.value)}
                    label="Email" value={username} variant="standard" />
                <TextField required className="login-text-first-name" onChange={(event) => setFirstName(event.target.value)}
                    label="First name" value={firstName} variant="standard" />
                <TextField required onChange={(event) => setLastName(event.target.value)}
                    label="Last name" value={lastName} className="login-text-password" variant="standard" />                
                <TextField  required type="password" onChange={(event) => setPassword(event.target.value)}
                    label="password" value={password} className="login-text-password" variant="standard" />
                <Button className="login-button" 
                    variant="contained" onClick={() => {
                        const newEmployee = {                         
                          username: username,
                          firstName: firstName,
                          lastName:lastName,
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
                        if(data.message === "Username already taken"){
                            window.alert("Username already taken")
                        }
                        if(data.message === "Password pattern does not match"){
                            window.alert("Password pattern does not match. Password should contain atleast one uppercase, lowercase, symbol and number")
                        }
                        if(data.acknowledged === true ){
                            window.alert("Account created Successfully!!!")
                            navigate("/login")         
                        }                                       
                    })                                                                            
                      }} >Create an account</Button>
                <p className='sign-up-text'>Already have an account ? <a style={{textDecoration:"underline",color:"blue"}} onClick={()=>{navigate("/")}}>Sign In</a></p>

            </div>
        </div>
    )
}

export default Signup;
