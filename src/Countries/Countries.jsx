import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <p>Countries : {countries.length}</p>
            {
                countries.map(country => <Country key={country.cca2} country={country}></Country>)
            }

        </div>
    );
};

export default Countries;