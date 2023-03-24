import React from 'react';
import "./DeviceDetails.css"

const DeviceDetails = (props) => {
    console.log(props);
    return (
        <div>
            <p>Device Price is: {props.price}</p>
        </div>
    );
};

export default DeviceDetails;