import React,{ useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
      
    return (
        <div>
            {/* <!-- As a heading --> */}
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white">CRM Application</a>
                    <form className="d-flex" role="search">
                        <button onClick={()=>navigate("/login")} className="btn btn-light" type="submit">Login</button>&nbsp;
                        <button onClick={()=>navigate("/signup")} className="btn btn-light" type="submit">Signup</button>
                    </form>
                </div>
            </nav>           

            <div className="forgot-password">
                <h4 className='heading-text'>Reset your password</h4>
                <TextField required className="login-text-email" onChange={(event) => setUsername(event.target.value)}
                    label="Email" value={username} variant="standard" />                
                <Button className="login-button" 
                    variant="contained" onClick={() => {
                        const employeeFromDB = {
                            username: username,                           
                        };
                        fetch("https://customer-relation-manage-app.herokuapp.com/employees/send-email", {
                            method: "POST",
                            body: JSON.stringify(employeeFromDB),
                            headers: {
                                "Content-Type": "application/json",
                            }
                        })
                            .then((data) => data.json())
                            .then((data) => { 
                                if (data.message == "success") {
                                   window.alert("success!! Password reset link has been sent to your mail")                                
                                } 
                                else {
                                    window.alert("Please enter valid and registered email ID")
                                }
                            })

                    }}>Send password reset email</Button>                                                                                                              
            </div>
        </div>
    )
}

export default ForgotPassword;
