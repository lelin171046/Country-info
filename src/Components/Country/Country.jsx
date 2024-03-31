import '../css/style.css'
import React, { useState } from 'react';

const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    const {name, flags, capital} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited)

    }
    
    return (
        <div className={`box ${visited? 'visited': 'nonVisit'}`}>
            <button onClick={()=>handleVisitedCountry(country)}>Mark as a visited</button>
            <h1 style={{color: visited? 'white': 'black'}}>Name:{name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Captal:{capital}</p>
            <button onClick={handleVisited}>{visited? 'Visited': 'Lets Go'}</button>
            {visited? 'visit done': 'Will be visit'}
            <br />
            <button onClick={()=>handleVisitedFlag(flags)}>Add Flag</button>
        </div>
    );
};

export default Country;