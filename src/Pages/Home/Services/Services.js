import React, { useEffect, useState } from 'react';
import List from '../List/List';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='container'>
            <div className="row">
            <h1 className='services-title'>Our Services</h1>
            <div className="services-container">
                {
                    services.map(service => <List
                        key={service._id}
                        service={service}
                    >
                    </List>)
                }
            </div>
            </div>

        </div>
    );
};

export default Services;




