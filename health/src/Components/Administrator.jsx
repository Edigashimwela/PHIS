import React from "react";
import { useNavigate } from "react-router-dom";
import "./Administrator.css";

const Administrator = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        // For now, we'll just navigate to admin dashboard
        navigate("/admin-dashboard", { replace: true });
    };

    return (
        <div className="admin-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h3>Administrator Portal</h3>

                <label htmlFor="username">Username</label>
                <input 
                    id="username"
                    type="text" 
                    placeholder="Enter your username" 
                    required 
                />

                <label htmlFor="password">Password</label>
                <input 
                    id="password"
                    type="password" 
                    placeholder="Enter your password" 
                    required 
                />

                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Administrator;