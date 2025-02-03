import Header from '../../Components/Header/Header';
import { useNavigate } from 'react-router';
import './HomePage.scss';

function HomePage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/destinations');
    }

    return(
        <div className='Head'>
        <div className='Homepage-component'>
        <div className='Homepage-component__texto'>
            <span>
                SO, YOU WANT TO TRAVEL TO
            </span>
            <h1>
                PERÚ
            </h1>
            <p>
            Let's face it: if you want to go to Perú,<br/> 
            it's best to really know the reasons why <br/>
            and not be left wondering when you get there. <br/>
            Sit back and relax, because we will show you <br/>
            what you need, an out of this world experience!
            </p>
        </div>
        <div className='Homepage-component__busquedapadre'>
        <div className='Homepage-component__busqueda'>
            <button 
            className='Homepage-component__busqueda__button-explore'
            onClick={handleClick}>
            Explore
            </button>

        </div>
        </div>

        </div>
        </div>



    )


}

export {HomePage};