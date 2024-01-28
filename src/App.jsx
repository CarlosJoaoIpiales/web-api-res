import React from 'react';
import CountriesCard from './CountriesCard';

function App() {
    return (
        <div className="App flex flex-col items-center">
            <header className="bg-blue-300 p-4">
                <h1 className="text-lg font-bold flex flex-col items-center">App de Países</h1>
            </header>
            <main className="p-4 flex flex-col items-center">
                <CountriesCard />
            </main>
        </div>
    );
}

export default App;
