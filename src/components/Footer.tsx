import { Link } from "react-router-dom";
import styles from './footer.module.css';

//assets
import PokemonPic from '../assets/pikachu.png'
import PokemonPok from '../assets/pokeball.png'
import PokemonMap from '../assets/pointer.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link
                onClick={(event) =>event.preventDefault()}
                className={styles.footerLink}
                to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball" />
                Pokemons
            </Link>
            <Link
                onClick={(event) =>event.preventDefault()}
                className={styles.footerLink}
                to="/pokemons">
                <img className={styles.footerIcon} src={PokemonPok} alt="Items" />
                Items
            </Link>
            <Link
                onClick={(event) =>event.preventDefault()}
                className={styles.footerLink}
                to="/pokemons"
            >
                <img className={styles.footerIcon} src={PokemonMap} alt="Map" />
                Map
            </Link>
        </footer>
    );
};

export default Footer;