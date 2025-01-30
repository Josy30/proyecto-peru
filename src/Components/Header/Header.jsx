import './Header.scss';
import Logo from "../../assets/logoperu.svg";
import { useNavigate } from 'react-router';



function Header(){

    const navigate = useNavigate();

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
                className='Button-header'
                onClick={() =>handleClick('/')}
                >Home
                </button>
            </div>
            <div>
                <button 
                className='Button-header'
                onClick={() =>handleClick('/destinations')}
                >Destinations
                </button>
            </div>
            <div>
                <button 
                className='Button-header'
                onClick={() =>handleClick('/gastronomy')}
                >Gastronomy
                </button>
            </div>
            <div>
                <button 
                className='Button-header'
                onClick={() =>handleClick('/climate')}
                >Climate
                </button>
            </div>

        </div>

    </div>)

}

export default Header;