import './country.css'

const Country = ({ country }) => {
    const { name, flags, area, cca2, capital, population } = country;
    console.log(country);

    return (
        <div className="country" >
            <h2> {name.common}</h2>
            <p>area : <strong>{area}</strong></p>
            <p><strong>{cca2}</strong></p>
            <p> <strong>{capital}</strong> </p>
            <p> population : <strong>{population}</strong>  </p>
            <div >
                <img src={flags.png} style={{ borderRadius:'15px' ,}}/>
            </div>
        </div>

    );
};

export default Country;