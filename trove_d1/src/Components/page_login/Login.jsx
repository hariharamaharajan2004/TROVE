import React from 'react';
import './Login.css';


class Login extends React.Component{
    render(){
        return(
            <div class='well' id="login_box">
                <div id="welcome">
                    <br></br>
                    <h1 id="welcome_txt">Welcome back to</h1><h1 id="title">TROVE</h1><br></br>
                </div>
                <div>
                    <h3 id="email_text">
                        Email
                    </h3>
                    <input type="email" placeholder="Email" id="text">
                    </input><br></br><br></br>
                    <h3 id="password_text">
                        Password
                    </h3>
                    <input type="password" placeholder="Password" id="text">
                    </input><br></br><br></br>
                    <h4 id="forgot_pass">Forgot your password?</h4><br></br>
                    <button id="login_button">Log in</button><br></br><br></br><br></br>
                    <hr></hr>
                    <h3 id="sign_msg">New to Trove?, Try Signing in </h3><br></br>
                    <button id="login_button">Sign up</button>
                </div>
            </div>
        );
    }
}
export default Login;