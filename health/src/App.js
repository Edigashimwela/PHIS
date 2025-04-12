/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import Administrator from './Components/Administrator';
import Doctor from './Components/Doctor';
import DoctorDash from './Components/DoctorDash';
import LabDash from './Components/LabDash';
import LabTech from './Components/LabTech';
import Pharmacist from './Components/Pharmacist';
import PharmDash from './Components/PharmDash';
import Staff from './Components/Staff';
import StaffDash from './Components/StaffDash';
import Homepage from './Home/Homepage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/lab" element={<LabTech />} />
                <Route path="/administrator" element={<Administrator />} />
                <Route path="/pharmacist" element={<Pharmacist />} />
                <Route path="/doctor" element={<Doctor />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/staff-dashboard" element={<StaffDash />} />
                <Route path="/doctor-dashboard" element={<DoctorDash />} />
                <Route path="/lab-dashboard" element={<LabDash />} />
                <Route path="/pharmacy-dashboard" element={<PharmDash />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />






            
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </Router>
    );
};

export default App;