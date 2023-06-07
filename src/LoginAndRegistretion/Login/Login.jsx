import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>HI this login</h2>
            <Link to='/register'>register</Link>
        </div>
    );
};

export default Login;