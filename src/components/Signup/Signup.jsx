import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div class="login-form-container">
            <Link to = '/'><label htmlFor="" class="fas fa-times" id="form-close" ></label> </Link>
            <form action="" className="login-form">
                <h2 id="title">SIGNUP</h2>
                <input type="text" placeholder="Enter your name" className="box" id="nameField" />
                <input type="email" placeholder="Enter your email" className="box" />
                <input type="password" placeholder="Enter your password" className="box" />
                <input type="submit" className="btn" value="Submit" />
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
                <p>Forget password? <a>click here</a></p>
                <p>Already have an account? <a id="signin">Sign in</a></p>
            </form>
        </div>
    );
}

export default Signup;
