    import React from "react";
import { useNavigate } from "react-router-dom";
import "./Staff.css";

    const Staff = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your authentication logic here
        // For now, we'll just navigate to StaffDash
        navigate("/staff-dashboard");
    };

    return (
        <div className="staff-container">
        <form className="login-form" onSubmit={handleLogin}>
            <h3>Staff Portal</h3>

            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <button type="submit">Log In</button>
        </form>
        </div>
    );
    };

    export default Staff;