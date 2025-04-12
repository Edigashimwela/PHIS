import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PharmDash.css';


const PharmDash = () => {
    const [prescriptions, setPrescriptions] = useState([]);


    useEffect(() => {
        const fetchPrescriptions = async () => {
            const mockPrescriptions = [
                { id: 1, name: "John Doe", age: 32, gender: "Male", medication: "Amoxicillin", status: "Pending", date: "2023-05-15" },
                { id: 2, name: "Jane Smith", age: 28, gender: "Female", medication: "Lisinopril", status: "Ready", date: "2023-05-14" },
                { id: 3, name: "Michael Johnson", age: 45, gender: "Male", medication: "Atorvastatin", status: "Dispensed", date: "2023-05-14" },
                { id: 4, name: "Sarah Williams", age: 29, gender: "Female", medication: "Metformin", status: "Pending", date: "2023-05-15" },
                { id: 5, name: "David Brown", age: 52, gender: "Male", medication: "Albuterol", status: "Ready", date: "2023-05-13" },
            ];
            setPrescriptions(mockPrescriptions);
        };

        fetchPrescriptions();
    }, []);

    return (
        <div className="pharm-dashboard">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>PHIS</h2>
                    <h2>(PHARMACIST)</h2>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/pharm-dashboard" className="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/prescriptions">Prescriptions</Link>
                    </li>
                    <li>
                        <Link to="/inventory">Inventory</Link>
                    </li>
                    <li>
                        <Link to="/drug-interactions">Drug Interactions</Link>
                    </li>
                    <li>
                        <Link to="/pharm-reports">Reports</Link>
                    </li>
                    <li>
                        <Link to="/pharm-settings">Settings</Link>
                    </li>
                </ul>
            </div>

            <div className="main-content">
                <div className="content-header">
                    <h1>PATIENT PRESCRIPTIONS</h1>
                </div>
                
                <div className="prescription-table-container">
                    <table className="prescription-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Medication</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prescriptions.map((prescription) => (
                                <tr key={prescription.id}>
                                    <td>{prescription.id}</td>
                                    <td>{prescription.name}</td>
                                    <td>{prescription.age}</td>
                                    <td>{prescription.gender}</td>
                                    <td>{prescription.medication}</td>
                                    <td>
                                        <span className={`status-badge ${prescription.status.toLowerCase().replace(' ', '-')}`}>
                                            {prescription.status}
                                        </span>
                                    </td>
                                    <td>{prescription.date}</td>
                                    <td className="action-buttons">
                                        <button className="dispense-btn">Dispense</button>
                                        <button className="view-btn">View</button>
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

export default PharmDash;