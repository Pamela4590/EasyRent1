import React, { useState } from "react";
import "../styles/Login.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Notify } from "notiflix";
import { Link, useNavigate } from "react-router-dom";

// Create a custom Axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5001', // Your backend server URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage('');
    
    try {
      console.log("Attempting login with:", data.userEmail);
      
      const response = await api.post('/login', {
        userEmail: data.userEmail,
        userPassword: data.userPassword
      });
      
      console.log("Login response:", response.data);
      
      const userToken = response.data;
      
      // Store user data and token
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', data.userEmail);
      
      // If the backend returns a token, store it
      if (userToken.tokens) {
        localStorage.setItem('token', userToken.tokens);
      }
      
      // If the backend returns user data, store relevant info
      if (userToken.user) {
        localStorage.setItem('userId', userToken.user.id || userToken.user._id);
        localStorage.setItem('userName', userToken.user.userName);
        localStorage.setItem('role', userToken.user.userRole);
      }
      
      Notify.success('Login Successful');
      
      // Routing based on user role
      const userRole = userToken.user?.userRole;
      if (userRole === 'Admin') {
        navigate('/Post');
      } else {
        navigate('/Dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      
      
      if (error.response) {
        
    
        const errorMsg = error.response.data.message || 'Login failed';
        setErrorMessage(errorMsg);
        Notify.failure(errorMsg);
      } else if (error.request) {
        
        setErrorMessage('No response from server. Please check your network connection.');
        Notify.failure('Network error');
      } else {
        
        setErrorMessage('An unexpected error occurred');
        Notify.failure('Unexpected error');
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            type="email" 
            {...register("userEmail", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} 
            placeholder="Email" 
          />
          {errors.userEmail && <p className="error">{errors.userEmail.message}</p>}

          <input 
            type="password" 
            {...register("userPassword", { 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters"
              }
            })} 
            placeholder="Password" 
          />
          {errors.userPassword && <p className="error">{errors.userPassword.message}</p>}

          {errorMessage && <p className="error">{errorMessage}</p>}

          <button 
            type="submit" 
            className="login-button" 
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;