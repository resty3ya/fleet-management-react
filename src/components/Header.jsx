import React from 'react';


const customStyle={
    marginTop: "auto 0px",
    padding: "16px 32px",
    backgroundColor: "#112D4E",
    color: "#DBE2EF",
    boxShadow:"0 0 10px 0 rgba(0,0,0,0.3)"
}

const fontStyle={
    fontFamily: "'Roboto', sans-serif"
}

function Header(props){
    return <header style={customStyle}>
        <h1 style={fontStyle}>{props.headerTitle}</h1>
    </header>
}

export default Header;