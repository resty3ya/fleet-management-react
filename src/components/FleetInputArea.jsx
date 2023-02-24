import React from 'react';
import PropTypes from 'prop-types';

function FleetInputArea(props){

    const handleTextChange=(e)=>{
        const {name, value} = e.target;
        props.setInputText({...props.inputText, [name]: value})
    }

    const handleDateChange=(e)=>{
        const date = new Date(e.target.value);
        const formattedDate = date.toISOString().substr(0,10);
        const newUserInput = {...props.inputText, dateOfRequest:formattedDate};
        props.setInputText(newUserInput);
    }


    return (
            <form>
                <input type="text"
                name="nameOfRequester"
                placeholder="Name of Requester"
                value={props.inputText.nameOfRequester} 
                onChange={handleTextChange}
                />

                <input type="text"
                name="position"
                placeholder="Position"
                value={props.inputText.position}
                onChange={handleTextChange}
                />

                <input type="text"
                name="plateNumber"
                placeholder="Plate Number"
                value={props.inputText.plateNumber} 
                onChange={handleTextChange}
                />

                <input 
                value={props.inputText.dateOfRequest}
                type="date"
                name="dateOfRequest"
                id="dateOfRequest"
                placeholder="Date of Request"
                onChange={handleDateChange}
                readOnly
                />

                <select id="vehicleType" name="vehicleType" value={props.inputText.vehicleType}>
                    <option value="hondaCivic">Honda Civic</option>
                    <option value="toyotaPrado">Toyota Prado</option>
                    <option value="chevroletTrailblazer">Chevrolet Trailblazer</option>
                </select>
                <button>Submit</button>
            </form>);
}

FleetInputArea.propTypes = {
    inputText: PropTypes.shape({
        nameOfRequester: PropTypes.string,
        position: PropTypes.string,
        plateNumber: PropTypes.string,
        dateOfRequest: PropTypes.string,
        vehicleType: PropTypes.string
    }),
    setInputText: PropTypes.func
}

const date = new Date();
const formattedDate = date.toISOString().substr(0, 10);

FleetInputArea.defaultProps = {
    inputText: {
        nameOfRequester:"",
        position:"",
        plateNumber:"",
        dateOfRequest: formattedDate,
        vehicleType:""      
    }
}

export default FleetInputArea;