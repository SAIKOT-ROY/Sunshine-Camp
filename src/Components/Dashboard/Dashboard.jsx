import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h3>This is Dash</h3>
            <Link to="/dashboard/select-class">Selected Class</Link>
        </div>
    );
};

export default Dashboard;