import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LabDash.css';

const LabDash = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchPatients = async () => {
            const mockPatients = [
                { id: 1, name: "John Doe", age: 32, gender: "Male", test: "Blood Work", status: "Pending" },
                { id: 2, name: "Jane Smith", age: 28, gender: "Female", test: "Urinalysis", status: "Completed" },
                { id: 3, name: "Michael Johnson", age: 45, gender: "Male", test: "CT Scan", status: "In Progress" },
                { id: 4, name: "Sarah Williams", age: 29, gender: "Female", test: "MRI", status: "Scheduled" },
                { id: 5, name: "David Brown", age: 52, gender: "Male", test: "Biopsy", status: "Pending" },
            ];
            setPatients(mockPatients);
        };

        fetchPatients();
    }, []);

    return (
        <div className="lab-dashboard">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>PHIS</h2>
                    <h2>(LAB TECHNICIAN)</h2>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/lab-dashboard" className="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/test-orders">Test Orders</Link>
                    </li>
                    <li>
                        <Link to="/lab-results">Lab Results</Link>
                    </li>
                    <li>
                        <Link to="/equipment">Equipment</Link>
                    </li>
                    <li>
                        <Link to="/reports">Reports</Link>
                    </li>
                    <li>
                        <Link to="/lab-settings">Settings</Link>
                    </li>
                </ul>
            </div>

            <div className="main-content">
                <div className="content-header">
                    <h1>PATIENT TEST ORDERS</h1>
                </div>
                
                <div className="patient-table-container">
                    <table className="patient-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Test</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient.id}>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.test}</td>
                                    <td>
                                        <span className={`status-badge ${patient.status.toLowerCase().replace(' ', '-')}`}>
                                            {patient.status}
                                        </span>
                                    </td>
                                    <td className="action-buttons">
                                        <button className="process-btn">Process</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LabDash;