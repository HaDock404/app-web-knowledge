import '../styles/header.css';
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter
import Logo from '../assets/logo.png'


function Header() {

    return (
        <header>
            <nav className='header_nav'>
                <Link to="/" className='home_logo'>
                    <div className='logo'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='home_logo_x'>Knowledge Base</div>     
                </Link>
            </nav>
        </header>
    );
}

export default Header;
