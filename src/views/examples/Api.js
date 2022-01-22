import React, { useEffect, useState } from 'react';
import Tables from './Tables';

const Api = () => {
    const [clients, setClients] = useState({});
    useEffect(() => {
        fetch('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div>
            {
                clients.map(client => <Tables
                    key={client.id}
                    client={client}
                ></Tables>)
            }
        </div>
    );
};

export default Api;