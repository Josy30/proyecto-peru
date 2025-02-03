import './DestinationsPage.scss';
import DestinationsPageImagen1 from "../../assets/Playa-mancora.jpg";


function DestinationsPage (){

    return (

        <div className="destinationspage-padre">
            <div className="destinationspage-padre__imagen">
                <img src={DestinationsPageImagen1}/>
            </div>
            <div className="destinationspage-padre__texto">
                <div className="destinationspage-padre__texto__titular">
                    <span>BEACH</span>
                    <span>MOUNTAIN</span>
                    <span>VALLEY</span>
                    <span>DESERT</span>
                    <span>RAINFOREST</span>
                </div>
                <div>
                    <h1></h1>
                    <p></p>
                </div>
                <div>

                </div>
            </div>
        </div>



    )
}

export {DestinationsPage};