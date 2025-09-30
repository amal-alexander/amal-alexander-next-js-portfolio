import React from 'react';
import Meta from '../components/Meta';

const HomePage: React.FC = () => {
    return (
        <div>
            <Meta 
                title="Home - Web Project App" 
                description="Welcome to the Web Project App homepage." 
            />
            <h1>Welcome to the Web Project App</h1>
            <p>This is the main entry point of the application.</p>
        </div>
    );
};

export default HomePage;