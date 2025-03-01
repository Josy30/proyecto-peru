import './Header.scss';
import Logo from "../../assets/logoperu.svg";
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router'

function Header(){

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (route) => {
        navigate(route)
    }

    return (
    <div className='Header-component'>
        <div className='Header-component__star'>
        <img className='logo' src={Logo}/>
        </div>
        <div className='Header-component__titles'>
            <div>
                <button 
                className={location.pathname === '/' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/')}
                >HOME
                </button>
            </div>
            <div>
                <button 
            className={location.pathname === '/destinations' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/destinations')}>
                DESTINATIONS
                </button>
            </div>
            <div>
                <button 
            className={location.pathname === '/gastronomy' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/gastronomy')}
                >GASTRONOMY
                </button>
            </div>
            <div>
                <button 
            className={location.pathname === '/climate' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/climate')}
                >CLIMATE
                </button>
            </div>

        </div>

    </div>)

}

export default Header;