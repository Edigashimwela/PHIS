import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './StaffDash.css';

const StaffDash = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const mockPatients = [
                { id: 1, name: "John Doe", age: 32, gender: "Male", condition: "Stable" },
                { id: 2, name: "Jane Smith", age: 28, gender: "Female", condition: "Critical" },
                { id: 3, name: "Michael Johnson", age: 45, gender: "Male", condition: "Recovering" },
                { id: 4, name: "Sarah Williams", age: 29, gender: "Female", condition: "Stable" },
                { id: 5, name: "David Brown", age: 52, gender: "Male", condition: "Critical" },
            ];
            setPatients(mockPatients);
        };

        fetchPatients();
    }, []);

    return (
        <div className="staff-dashboard">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>PHIS</h2>
                    <h2>(DATA CLERK)</h2>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/staff-dash" className="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/reports">Reports</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                </ul>
            </div>

            <div className="main-content">
                <div className="content-header">
                    <h1>Patient Records</h1>
                </div>
                
                <div className="patient-table-container">
                    <table className="patient-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Condition</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.gender}</td>
                                    <td>
                                        <span className={`condition-badge ${patient.condition.toLowerCase()}`}>
                                            {patient.condition}
                                        </span>
                                    </td>
                                    <td className="action-buttons">
                                        <button className="edit-btn">Edit</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Floating Action Button (like WhatsApp) */}
                <button className="floating-add-btn">
                    <span>+</span> Add Patient
                </button>
            </div>
        </div>
    );
};

export default StaffDash;