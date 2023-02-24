import React, {useState} from 'react';
import PropTypes from 'prop-types';
// import InputArea from './InputArea';

function FleetInputArea(props){



    return (
        <>
            <form>
                <input type="text"
                name="nameOfRequester"
                placeholder="Name of Requester"
                value={props.inputText.nameOfRequester} />

                <input type="text"
                name="position"
                placeholder="Position"
                value={props.inputText.position} />

                <input type="text"
                name="plateNumber"
                placeholder="Plate Number"
                value={props.inputText.plateNumber} />

                <select id="vehicleType" value={props.inputText.vehicleType} name="vehicleType">
                    <option value="hondaCivic">Honda Civic</option>
                    <option value="toyotaPrado">Toyota Prado</option>
                    <option value="chevroletTrailblazer">Chevrolet Trailblazer</option>
                </select>

                <input type="date"
                name="dateOfRequest"
                placeholder="Date of Request"
                value={props.inputText.plateNumber} />
                
                <button>Submit</button>
                
            </form>
    </>);
}

FleetInputArea.propTypes={
    inputText: PropTypes.shape({
        nameOfRequester: PropTypes.string,
        position: PropTypes.string,
        plateNumber: PropTypes.string,
        vehicleType: PropTypes.string,
        dateOfRequest: PropTypes.string
    }),
    setInputText: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substr(0, 10);


FleetInputArea.defaultProps={
    inputText:{
        nameOfRequester:"",
        position:"",
        plateNumber:"",
        vehicleType:"",
        dateOfRequest: formattedDate
    }
}

    // return <div className="form">
    //     <InputArea type="text"
    //         name="nameOfRequester"
    //         placeholder="Name of Requester"
    //         value={inputText.nameOfRequester}
           
    //         onChange={handleChange}
    //     />
    //    <InputArea type="text"
    //         placeholder="Position"
    //         value={inputText.position}
    //         name="position"
    //         onChange={handleChange}
    //     />
    //     <InputArea type="text"
    //         placeholder="Vehicle Plate #"
    //         value={inputText.plateNumber}
    //         name="plateNumber"
    //         onChange={handleChange}
    //         />
    //     <InputArea type="dropdown"
    //         placeholder="Vehicle Type"
    //         value={inputText.vehicleType}
    //         name="vehicleType"
    //         onChange={handleChange}
    //     />
    //     <InputArea
    //         type="date"
    //         onChange={handleChange}
    //         value={inputText.dateRequested.toLocaleDateString()}
    //         readOnly={true} />    
    //     <button onClick={handleClick}>Proceed</button>
    // </div>

export default FleetInputArea;