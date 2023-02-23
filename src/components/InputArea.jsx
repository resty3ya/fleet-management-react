import React from 'react';


function InputArea(props){
 


    return (<input 
    name={props.name}
    placeholder={props.placeholder}
    type={props.type}
    readOnly={false}
    />)
}

export default InputArea;