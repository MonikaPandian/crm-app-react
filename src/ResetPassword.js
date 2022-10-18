import React,{ useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    
    const { id, token } = useParams();   
    const navigate = useNavigate();    
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
 
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

            <div className="reset-password">
                <h4 className='heading-text'>Reset your password</h4>
                <TextField required type="password" className="login-text-email" onChange={(event) => setNewPassword(event.target.value)}
                    label="New Password" value={newPassword} variant="standard" />
                <TextField required type="password" className="login-text-fname" onChange={(event) => setConfirmPassword(event.target.value)}
                    label="Confirm Password " value={confirmPassword} variant="standard" />               

                <Button className="login-button"
                    variant="contained" onClick={() => {
                        if(newPassword !== confirmPassword){
                            window.alert("Passwords does not match")
                        } 
                        else{
                        const updatedPassword = {
                            id : id,
                            token : token,
                            password: newPassword
                        };
                        fetch("https://customer-relation-manage-app.herokuapp.com/employees/reset-password", {
                            method: "POST",
                            body: JSON.stringify(updatedPassword),
                            headers: {
                                "Content-Type": "application/json",
                            }
                        })
                            .then((data) => data.json())
                            .then((data) => {
                                if(data.message == "Password successfully reset"){
                                    window.alert("Password successfully reset")
                                    navigate('/login')
                                }
                                else if(data.message == "Token expired"){
                                    window.alert("Token expired")
                                }
                                else{
                                    window.alert("Some unexpected error occured.Please try after sometime")
                                }
                            })

                    }}}>Update Password</Button>

            </div>
        </div>
    )}

export default ResetPassword;
