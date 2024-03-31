import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css'




const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlag, setVisitedflag] =   useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setCountries(data)
            })
    }, [])
    // console.log(countries);
    const handleVisitedFlag= flag =>{
    console.log('flag addd');
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedflag(newVisitedFlag)
    };
    
    const handleVisitedCountry= country =>
    {
        console.log('this is marked');
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }
    return (
        
        <div className="">
        {/* Visited country */}
            <h3>Country:{countries.length}</h3>
            <h3>Country visited:{visitedCountry.length}</h3>
           <h1>{visitedFlag.length}</h1>
    <div className="Flg">
               {
                visitedFlag.map((flag, Idx) => <div><img key={Idx} src={flag.png} alt="" /></div>)
               }
            </div>
        <div>
            <ul>
                {
                    visitedCountry.map(country=> <li key={country.cca3}>{country.name.common}</li>)
                }
            </ul>
        </div>
<div className="box-Container">
            {
            // display countries//
                countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} country={country}>
                    
                </Country>)
            }
        </div>
        </div>
    );
};

export default Countries;