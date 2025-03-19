import '../styles/Login.css'
import axios from "axios";
// import { useState,useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { Notify } from "notiflix";


const Register=()=>
{
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const { userEmail, userPassword } = data;
            const formData = new FormData();
            formData.append("userEmail", userEmail);
            formData.append("userPassword", userPassword);

            const response = await axios.post(`http://localhost:5001/register`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

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
        }
    };
    return(
        <div>
              {/* Register Form */}
              <div className="auth-box">
                <h2>Register</h2>
                <form>
                    <input type="text" name="fullname" placeholder="Full Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="text" name="phone" placeholder="Phone Number" required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}
export default Register