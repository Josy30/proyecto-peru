import './Header.scss';


function Header(){

    return (
    <div className='Header-component'>
        <div className='Header-component__star'></div>
        <div classname='Header-component__titles'>
            <div>
                <span>Home</span>
            </div>
            <div>
                <span>Destination</span>
            </div>
            <div>
                <span>Crew</span>
            </div>
            <div>
                <span>Tecnology</span>
            </div>

        </div>

    </div>)

}

export default Header;