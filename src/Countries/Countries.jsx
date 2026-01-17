import { useEffect, useState } from "react";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h1>from Countries</h1>
            <p>Countries : {countries.length}</p>
            
        </div>
    );
};

export default Countries;