import React, {useState} from 'react';
// import InputArea from './InputArea';

function FleetInputArea(props){

    
    const date = new Date();




function handleChange(event){
    const {name, value} = event.target;
    setInputText((prevValue)=>{
     return {...prevValue, [name]: value};
    });
}



    function handleClick(){
       console.log("clicked");
    }




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
                value={props.inputText.nameOfRequester} />

                <input type="text"
                name="plateNumber"
                placeholder="Name of Requester"
                value={props.inputText.nameOfRequester} />

                <input type="text"
                name="vehicleType"
                placeholder="Name of Requester"
                value={props.inputText.nameOfRequester} />
            </form>
    </>);

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
}

export default FleetInputArea;