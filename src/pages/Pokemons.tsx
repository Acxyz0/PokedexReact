import {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Pokemons = () => {
    const [query, setQuery] = useState("");

    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <h1>
                    POKEMONS
                </h1>
            </main>

           <Footer />

        </>
    );
};

export default Pokemons;