import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", password: "••••••••", role: "Doctor", department: "Cardiology" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", password: "••••••••", role: "Nurse", department: "Pediatrics" },
        { id: 3, name: "Michael Johnson", email: "michael@example.com", password: "••••••••", role: "Lab Technician", department: "Pathology" },
        { id: 4, name: "Sarah Williams", email: "sarah@example.com", password: "••••••••", role: "Pharmacist", department: "Pharmacy" },
        { id: 5, name: "David Brown", email: "david@example.com", password: "••••••••", role: "Admin", department: "Management" },
        { id: 6, name: "Emily Davis", email: "emily@example.com", password: "••••••••", role: "Doctor", department: "Neurology" },
        { id: 7, name: "Robert Wilson", email: "robert@example.com", password: "••••••••", role: "Nurse", department: "ER" },
        { id: 8, name: "Jennifer Lee", email: "jennifer@example.com", password: "••••••••", role: "Receptionist", department: "Front Desk" },
        { id: 9, name: "Thomas Moore", email: "thomas@example.com", password: "••••••••", role: "Doctor", department: "Orthopedics" },
        { id: 10, name: "Lisa Taylor", email: "lisa@example.com", password: "••••••••", role: "Nurse", department: "ICU" },
        { id: 11, name: "James Anderson", email: "james@example.com", password: "••••••••", role: "Radiologist", department: "Imaging" },
        { id: 12, name: "Emma Martinez", email: "emma@example.com", password: "••••••••", role: "Doctor", department: "Pediatrics" }
    ]);

    const [showAddModal, setShowAddModal] = useState(false);
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Doctor',
        department: 'Cardiology'
    });

    const handleAddEmployee = () => setShowAddModal(true);
    const handleCloseModal = () => setShowAddModal(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: users.length + 1,
            name: newUser.name,
            email: newUser.email,
            password: "••••••••",
            role: newUser.role,
            department: newUser.department
        };
        setUsers([...users, newEmployee]);
        setShowAddModal(false);
        setNewUser({
            name: '',
            email: '',
            password: '',
            role: 'Doctor',
            department: 'Cardiology'
        });
    };

    return (
        <div className="admin-dashboard">
            {/* SIDEBAR */}
            <div className="sidebar">
                <div className="sidebar-header">
                    <h2>PHIS</h2>
                    <h2>(ADMIN)</h2>
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="/admin-dashboard">Home</Link></li>
                    <li><Link to="/user-management">User Management</Link></li>
                    <li><Link to="/system-config">System Config</Link></li>
                    <li><Link to="/audit-logs">Audit Logs</Link></li>
                    <li><Link to="/reports">Reports</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </div>

            {/* MAIN CONTENT */}
            <div className="main-content">
                <div className="content-header">
                </div>
                <h1 style={{ color: '#2c3e50', margin: '0 0 20px 0' }}>USER MANAGEMENT</h1>

                <div className="user-table-container">
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Department</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                    <td>{user.department}</td>
                                    <td className="action-buttons">
                                        <button className="edit-btn">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* FLOATING ADD BUTTON */}
                <button className="floating-add-btn" onClick={handleAddEmployee}>
                    <span>+</span> Add Employee
                </button>
            </div>

            {/* ADD EMPLOYEE MODAL */}
            {showAddModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Add New Employee</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={newUser.name}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={newUser.email}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={newUser.password}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <select 
                                    name="role" 
                                    value={newUser.role}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="Doctor">Doctor</option>
                                    <option value="Nurse">Nurse</option>
                                    <option value="Lab Technician">Lab Technician</option>
                                    <option value="Pharmacist">Pharmacist</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Department</label>
                                <select 
                                    name="department" 
                                    value={newUser.department}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Pediatrics">Pediatrics</option>
                                    <option value="Pathology">Pathology</option>
                                    <option value="Pharmacy">Pharmacy</option>
                                    <option value="Management">Management</option>
                                </select>
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="cancel-btn" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                                <button type="submit" className="submit-btn">
                                    Add Employee
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;