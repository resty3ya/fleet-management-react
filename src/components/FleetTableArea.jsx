import React from 'react';
import FleetList from './FleetList';
import PropTypes from 'prop-types';



function FleetTableArea(props){
    const list = props.vehicleList.map((list, index)=>{
        return (<FleetList 
                nameOfRequester={list.nameOfRequester}
                position={list.position}
                plateNumber={list.plateNumber}
                vehicleType={list.vehicleType}
                dateOfRequest={list.dateOfRequest}
                id={index}
                key={index}
         />)
    });
    return (
        <div>
            {list}
        </div>
    );
}

FleetTableArea.propTypes={
    list: PropTypes.array
}

const date = new Date();
const formattedDate = date.toISOString().substr(0,10);

FleetTableArea.defaultProps={
    list:[{
        nameOfRequester:"Name of Requester",
        position: "Position",
        plateNumber: "Plate Number",
        vehicleType: "Vehicle Type",
        dateofRequest:formattedDate,
    }]
}


export default FleetTableArea;