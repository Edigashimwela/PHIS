import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pharmacist.css";

const Pharmacist = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        // For now, we'll just navigate to lab dashboard
        navigate("/pharmacy-dashboard", { replace: true });
    };

    return (
        <div className="labtech-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h3>Pharmacy Portal</h3>

                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email" 
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

export default Pharmacist;