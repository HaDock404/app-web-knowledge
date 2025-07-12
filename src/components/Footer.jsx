import '../styles/footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Link to="https://github.com/HaDock404" className='link_footer'>
                Créé par Gael Delescluse
            </Link>
            
        </footer>
    )
}

export default Footer