import { Link } from "react-router-dom";
import styles from './footer.module.css';

//assets
import PokemonPic from '../assets/pikachu.png'
import PokemonPok from '../assets/pokeball.png'
import PokemonMap from '../assets/pointer.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img src={PokemonPic} alt="Pokeball" />
                Pokemons
            </Link>
            <Link className={styles.footerLink} to="/pokemons">
                <img src={PokemonPok} alt="Items" />
                Items
            </Link>
            <Link
                className={styles.footerLink}
                to="/pokemons"
                onClick={(event) =>event.preventDefault()}
            >
                <img src={PokemonMap} alt="Map" />
                Map
            </Link>
        </footer>
    );
};

export default Footer;