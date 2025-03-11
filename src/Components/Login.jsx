import React from "react";
import '../styles/Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="auth-container">
          

            {/* Login Form */}
            <div className="auth-box">
                <h2>Login</h2>
                <form>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>

                if do not have account <Link to="/signup"><span>Sign Up</span></Link>
            </div>
        </div>
    );
}

export default Login;
