import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <Link to="/">
                        <span>Softball Stuff</span>
                    </Link>
                </div>
                <ul className="menu">
                    <li>
                        <Link to="/hitters">
                            <span>Hitters</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;