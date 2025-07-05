import '../styles/header.css';
import { Link } from 'react-router-dom'; //obligatoire avec hashrouter


function Header() {

    return (
        <header>
            <nav className='header_nav'>
                <Link to="https://www.erwin-labs.com/" className='home_logo'>
                    <div className='erwin_logo'>
                        <img src="https://cdn.prod.website-files.com/62d56c0bde36c5e99acfb524/648a060a4e983940f8857fb1_Group%20289660.svg" alt="" />
                    </div>
                    
                    <div className='home_logo_x'>X</div>

                    <div className='fortnite_logo'>
                         <img src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhry3tsj07mzscwq44nf" alt="" />
                    </div>      
                </Link>
            </nav>
        </header>
    );
}

export default Header;
