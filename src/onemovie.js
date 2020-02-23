import React from 'react';




const  Onemov=(props) =>{
    return (
        <div>
            <img src={props.info.picture} />
            <h3> {props.info.name}</h3>
            <h3>{props.info.year}</h3>

        </div>
    );
}

export default Onemov;



