import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='login-page'>
            {/* <!-- As a heading --> */}
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">CRM Application</span>
                </div>
            </nav>

            <div className="login">
                <h4>Please sign in to continue</h4>
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
                        const employeeFromDB = {
                            firstName: firstName,
                            lastName: lastName,
                            email: email,
                            password: password
                        };
                        fetch("https://customer-relation-manage-app.herokuapp.com/employees/login", {
                            method: "POST",
                            body: JSON.stringify(employeeFromDB),
                            headers: {
                                "Content-Type": "application/json",
                            }
                        })
                            .then((data) => data.json())
                            .then((data) => {
                                if (data.message == "Successful login") {
                                    navigate("/dashboard")
                                }
                                else {
                                    window.alert("Please check your username and password. If new user please sign up to create an account")
                                }
                            })

                    }} >Login</Button>
                <p className='sign-up-text'>Don't have an account ? <a style={{ textDecoration: "underline", color: "blue" }} onClick={() => { navigate("/signup") }}>Sign Up</a></p>

            </div>
        </div>
    )
}

export default LoginForm;
