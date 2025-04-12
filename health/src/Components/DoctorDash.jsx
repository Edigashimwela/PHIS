import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const mockUsers = [
                { id: 1, name: "John Doe", role: "Doctor", department: "Cardiology", status: "Active" },
                { id: 2, name: "Jane Smith", role: "Nurse", department: "Pediatrics", status: "Active" },
                { id: 3, name: "Michael Johnson", role: "Lab Technician", department: "Pathology", status: "Inactive" },
                { id: 4, name: "Sarah Williams", role: "Pharmacist", department: "Pharmacy", status: "Active" },
                { id: 5, name: "David Brown", role: "Administrator", department: "Management", status: "Active" },
            ];
            setUsers(mockUsers);
        };

        fetchUsers();
    }, []);

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>PHIS</h2>
                    <h2>(ADMINISTRATOR)</h2>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/admin-dashboard" className="active">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/user-management">User Management</Link>
                    </li>
                    <li>
                        <Link to="/system-config">System Configuration</Link>
                    </li>
                    <li>
                        <Link to="/audit-logs">Audit Logs</Link>
                    </li>
                    <li>
                        <Link to="/admin-reports">Reports</Link>
                    </li>
                    <li>
                        <Link to="/admin-settings">Settings</Link>
                    </li>
                </ul>
            </div>

            <div className="main-content">
                <div className="content-header">
                    <h1>USER MANAGEMENT</h1>
                </div>
                
                <div className="user-table-container">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td>{user.department}</td>
                                    <td>
                                        <span className={`status-badge ${user.status.toLowerCase()}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="action-buttons">
                                        <button className="edit-btn">Edit</button>
                                        <button className="deactivate-btn">
                                            {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                                        </button>
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

export default AdminDashboard;