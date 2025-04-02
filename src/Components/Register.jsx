import React, { useState } from 'react';
import '../styles/Login.css';
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";
import { useNavigate, Link } from 'react-router-dom';

// Create a custom Axios instance
const api = axios.create({
  baseURL: 'https://easyrentbackend-7.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

const Register = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm();
  
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      console.log("Sending signup request with data:", JSON.stringify(data, null, 2));
      
      const response = await api.post('/register', {
        userName: data.userName,
        userEmail: data.userEmail,
        userPassword: data.userPassword,
        userPhone: data.userPhone,
        role: "user"
      });

      console.log("Register response:", response.data);
      
      // Store user information
      localStorage.setItem('userEmail', data.userEmail);
      localStorage.setItem('userName', data.userName);
      
      Notify.success("Registration Successful");
      
      // Navigate to home or login page
      navigate("/Dashboard");
    } catch (error) {
      console.error("Registration error:", error);
      
      // Detailed error handling
      if (error.response) {
        // Server responded with an error
        const errorMsg = error.response.data.message || "Registration failed";
        setErrorMessage(errorMsg);
        Notify.failure(errorMsg);
      } else if (error.request) {
        // Request made but no response received
        setErrorMessage("No response from server. Please check your network connection.");
        Notify.failure("Network Error");
      } else {
        // Something happened in setting up the request
        setErrorMessage("An unexpected error occurred");
        Notify.failure("Unexpected Error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            type="text" 
            placeholder="Full Name" 
            {...register("userName", { 
              required: "Full Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters"
              }
            })}
          />
          {errors.userName && <p className="error">{errors.userName.message}</p>}

          <input 
            type="email" 
            placeholder="Email" 
            {...register("userEmail", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.userEmail && <p className="error">{errors.userEmail.message}</p>}

          <input 
            type="password" 
            placeholder="Password" 
            {...register("userPassword", { 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })}
          />
          {errors.userPassword && <p className="error">{errors.userPassword.message}</p>}

          <input 
            type="tel" 
            placeholder="Phone Number" 
            {...register("userPhone", { 
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits"
              }
            })}
          />
          {errors.userPhone && <p className="error">{errors.userPhone.message}</p>}

          {errorMessage && <p className="error">{errorMessage}</p>}

          <button 
            type="submit" 
            className="register-button"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;