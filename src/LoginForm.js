import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginForm = () => {
    return (
        <div className='login-page'>
            {/* <!-- As a heading --> */}
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">CRM Application</span>
                </div>
            </nav>

            <div className="login">
                <h4>Please sign in to continue</h4>
                <TextField className="login-text-first-name" onChange=""
                    label="First name" variant="standard" />
                <TextField onChange=""
                    label="Last name" className="login-text-password" variant="standard" />
                <TextField className="login-text-email" onChange=""
                    label="Email" variant="standard" />
                <TextField onChange=""
                    label="password" className="login-text-password" variant="standard" />
                <Button className="login-button" onClick=""
                    variant="contained">Login</Button>
                <p className='sign-up-text'>Don't have an account ? <a href="">Sign Up</a></p>

            </div>
        </div>
    )
}

export default LoginForm;
