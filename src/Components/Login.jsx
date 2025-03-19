import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";
import { Link, useNavigate } from "react-router-dom"; // Corrected import

function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate(); // Define useNavigate

    const onSubmit = async (data) => {
        try {
            const { userEmail, userPassword } = data;
            const formData = new FormData();
            formData.append("userEmail", userEmail);
            formData.append("userPassword", userPassword);

            const response = await axios.post("http://localhost:5001/login", formData);

            Notify.success("Login successful");
            reset();
            
            const userToken = response.data;
            localStorage.setItem("userToken", JSON.stringify(userToken));

            const Role = userToken?.User?.userRole;
            if (Role === "Admin") {
                navigate("/Post");
            } else {
                navigate("/Home");
            }
        } catch (error) {
            console.log(error);
            Notify.failure("Login failed. Check your credentials.");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="email" 
                        {...register("userEmail", { required: "Email is required" })} 
                        placeholder="Email" 
                    />
                    {errors.userEmail && <p className="error">{errors.userEmail.message}</p>}

                    <input 
                        type="password" 
                        {...register("userPassword", { required: "Password is required" })} 
                        placeholder="Password" 
                    />
                    {errors.userPassword && <p className="error">{errors.userPassword.message}</p>}

                    <button type="submit" className="login-button">Login</button>
                </form>

                <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
}

export default Login;
