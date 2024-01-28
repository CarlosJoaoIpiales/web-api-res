import React, { useState, useEffect } from 'react';

const CountriesCard = () => {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error("Error al obtener los datos de los países:", error));
    }, []);

    if (!countries) return <div>Cargando...</div>;

    return (
        <div className="flex flex-col items-center">
            {countries.slice(0, 5).map(country => (
                <div key={country.cca3} className="mb-4 p-4 max-w-md bg-white rounded-lg border border-gray-200 shadow-md">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900">{country.name.common}</h5>
                    <iframe 
                        src={`https://maps.google.com/maps?q=${country.capital}&t=&z=4&ie=UTF8&iwloc=&output=embed`} 
                        frameBorder="0" 
                        scrolling="no" 
                        marginHeight="0" 
                        marginWidth="0"
                        width="100%" 
                        height="250px"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default CountriesCard;
