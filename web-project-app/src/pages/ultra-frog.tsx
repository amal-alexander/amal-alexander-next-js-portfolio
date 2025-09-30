import React from 'react';
import Meta from '../components/Meta';

const UltraFrogPage = () => {
    return (
        <div>
            <Meta 
                title="Ultra Frog" 
                description="Explore the Ultra Frog content embedded on this page." 
            />
            <h1>Ultra Frog</h1>
            <iframe 
                src="https://ultra-frog.onrender.com/" 
                title="Ultra Frog Content" 
                style={{ width: '100%', height: '600px', border: 'none' }} 
                allowFullScreen
            />
        </div>
    );
};

export default UltraFrogPage;