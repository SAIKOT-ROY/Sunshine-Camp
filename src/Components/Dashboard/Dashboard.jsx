import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='font-bold flex flex-col gap-5 justify-center items-center my-auto'>
            <Link className='btn' to="/dashboard/select-class">Selected Class</Link>
            <p className='btn'>Enrolled Class</p>
            <p className='btn'>Payment History</p>
        </div>
    );
};

export default Dashboard;