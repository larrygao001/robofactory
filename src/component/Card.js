import React from 'react';

const Card=({name,email,id})=>{
    return(
        <div className="tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow">
            <img src={`https://www.robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;