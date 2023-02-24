import React from 'react';
import PropTypes from 'prop-types';


function FleetList(props){
 


    return (
        <div>
            Name of Requester: {props.nameOfRequester}
            Position: {props.position}
            Plate Number: {props.plateNumber}
            Vehicle Type: {props.vehicleType}
            Date of Request: {props.dateOfRequest}
        </div>
    );
}

FleetList.propTypes={
    nameOfRequester: PropTypes.string,
    position: PropTypes.string,
    plateNumber: PropTypes.string,
    vehicleType: PropTypes.string,
    dateOfRequest: PropTypes.string
}
const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

FleetList.defaultProps={
        nameOfRequester:"Name of Requester",
        position: "Position",
        plateNumber: "Plate Number",
        vehicleType: "Vehicle Type",
        dateofRequest:formattedDate
}

export default FleetList;