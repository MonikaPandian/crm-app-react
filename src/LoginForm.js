import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            {/* <!-- As a heading --> */}
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white">CRM Application</a>
                    <form className="d-flex" role="search">
                        <button onClick={() => navigate("/login")} className="btn btn-light" type="submit">Login</button>&nbsp;
                        <button onClick={() => navigate("/signup")} className="btn btn-light" type="submit">Signup</button>
                    </form>
                </div>
            </nav>

            <div className="login">
                <h4 className='heading-text'>Please sign in to continue</h4>
                <TextField required className="login-text-email" onChange={(event) => setUsername(event.target.value)}
                    label="Email" value={username} variant="standard" />
                <TextField required className="login-text-fname" onChange={(event) => setFirstName(event.target.value)}
                    label="First name" value={firstName} variant="standard" />
                <TextField required onChange={(event) => setLastName(event.target.value)}
                    label="Last name" value={lastName} className="login-text-lname" variant="standard" />
                <TextField required type="password" onChange={(event) => setPassword(event.target.value)}
                    label="password" value={password} className="login-text-password" variant="standard" />
                <p className='forgot-password-text'><a style={{ textDecoration: "underline", color: "blue" }} onClick={() => { navigate("/password-reset") }}>Forgot Password ?</a></p>

                <Button className="login-button"
                    variant="contained" onClick={() => {
                        const employeeFromDB = {
                            username: username,
                            firstName: firstName,
                            lastName: lastName,
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
