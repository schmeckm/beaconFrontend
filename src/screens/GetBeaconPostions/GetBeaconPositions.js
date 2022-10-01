import React, { useState } from 'react';
import { useEffect } from 'react';
import { url } from 'src/helpers/helpers';

const GetBeaconPositions = () => {
    const [getRssi, setGetRssi] = useState([]);
    useEffect(()=>{
     fetch(url + 'beacon/getPosition', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "startTime": new Date().toISOString(),
                    "endTime": new Date().toISOString()
                })
            });
    },[])
    return (
        <div>
            <h1>We will implement map here</h1>
        </div>
    );
};

export default GetBeaconPositions;