import React from 'react';

function Nonprofits(props) {

    return (
        <div>
            <h1>{props.nonProfitsName}</h1>
            <p>{props.nonProfitsDesc}</p>
 
        </div>
    )
}

export default Nonprofits;