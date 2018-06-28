import React from 'react'

const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll', border: '3px solid black', height:'800px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;