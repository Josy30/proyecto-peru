import './DestinationsPage.scss';
import playa from "../../assets/Playa-mancora.jpg";
import mountain from "../../assets/montaña2.avif";
import valle from "../../assets/valle2.jpg";
import desert from "../../assets/desert2.jpg";
import rainforest from "../../assets/rainforest2.jpg"
import { useState } from 'react';
import { useLocation } from 'react-router';


function DestinationsPage (){
    const location = useLocation();
    const [information, setInformation] = useState({
        titulo:'BEACH',
        texto:"On the beaches of Peru, you can find year-round sunshine and warm weather, especially on beaches like Mancora and Punta Sal, where the temperature during the day is usually semi-tropical, and at night there is a refreshing wind. If you want to watch dolphins and humpback whales, you can visit Punta Sal and Mancora. Although most of the beaches are suitable for water sports, others are calm and without waves, such as Paracas Bay are ideal for a day of total relaxation, without the fear of the strong currents that the ocean often brings.",
        extension:"EXTENSION",
        extension1:"1,693 KM",
        numero:"BEACHES",
        numero1:"247",
        visita:"BEST SEASON",
        visita1: "Dec - Feb",
        imagen:playa
    })

    const handleClick = (param) => {
        switch(param) {
        case 'beach':
            setInformation({
                titulo:'BEACH',
                texto:"On the beaches of Peru, you can find year-round sunshine and warm weather, especially on beaches like Mancora and Punta Sal, where the temperature during the day is usually semi-tropical, and at night there is a refreshing wind. If you want to watch dolphins and humpback whales, you can visit Punta Sal and Mancora. Although most of the beaches are suitable for water sports, others are calm and without waves, such as Paracas Bay are ideal for a day of total relaxation, without the fear of the strong currents that the ocean often brings.",
                extension:"EXTENSION",
                extension1:"1,693 KM",
                numero:"BEACHES",
                numero1:"247",
                visita:"BEST SEASON",
                visita1: "Dec - Feb",
                imagen:playa
            })
            return;
        case 'mountain':
            setInformation({
                titulo:'MOUNTAIN',
                texto:"The Andes Mountain Range crosses Peru from north to south. In the Peruvian Andes are some of the highest peaks of the American continent, among them the Huascaran. In the mountains of Peru you can practice various sports, such as mountain biking, hiking, mountaineering, paragliding, rafting and climbing. ",
                extension:"MOUNTAINS",
                extension1:"21,478",
                numero:"MOUNTAINS RANGE",
                numero1:"19",
                visita:"HIGHEST POINT",
                visita1:"6,768 msnm",
                imagen:mountain

            
            
            })
            return;
        case 'valley':
            setInformation({
                titulo:'VALLEY',
                texto:'Peru is home to hidden valleys (river formations descending from the mountains) that offer unique experiences and breathtaking scenery. The Lares valley is known for its hot springs, ideal for relaxation. Another unmissable destination is the Colca Valley, famous for being one of the deepest in the world, and also for having the chance to see condors; the Sacred Valley of the Incas in Cusco and the Mantaro Valley, which is the largest in the Peruvian highlands. You can also do activities such as hiking, horseback riding, mountain biking, trekking, flora and fauna watching.',
                extension:"EXTENSION",
                extension1:"",
                numero:"N de playas",
                numero1:"247",
                imagen:valle
            })
            return;
        case 'desert':
            setInformation({
                titulo:'DESERT',
                texto:'The Peruvian desert is located on most of the coast from north to south, and in the middle is the oasis of the huacachina which means (woman who cries); which gives meaning to the legend of this beautiful place in Ica; an impressive green lagoon, surrounded by miles of dunes. The Peruvian desert also has the famous Nazca lines, a set of geoglyphic figures visible only from the air because of their immense size.',
                extension:"EXTENSION",
                extension1:"2,500 KM",
                numero:"N de playas",
                numero1:"247",
                imagen: desert
            })
            return;
        case 'rainforest':
            setInformation({
                titulo:'RAINFOREST',
                texto:'The Peruvian Amazon rainforest is one of the most biodiverse and endemic areas of flora and fauna (i.e. it does not exist anywhere else in the world) on the planet, covering more than 193 million hectares. More than 60% of Peru is covered by tropical forests, making it the fourth country with the largest area of these vital ecosystems in the world.',
                extension:"Extensión",
                extension1:"1691 KM",
                numero:"N de playas",
                numero1:"247",
                imagen: rainforest

            })
            return;
        default:
            return 'none';
        }
    }

    return (

        <div className="destinationspage-padre">
            <div className="destinationspage-padre__imagen">
                <img className='imagen1' src={information.imagen}/>
            </div>
            <div className="destinationspage-padre__texto">
                <div className="destinationspage-padre__texto__titular">
                    <span className= {information.titulo === 'BEACH' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick("beach")}>BEACH</span>
                    <span className= {information.titulo === 'MOUNTAIN' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick("mountain")}>MOUNTAIN</span>
                    <span className= {information.titulo === 'VALLEY' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick("valley")}>VALLEY</span>
                    <span className= {information.titulo === 'DESERT' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick("desert")}>DESERT</span>
                    <span className= {information.titulo === 'RAINFOREST' ?`seleccionado` : "no-seleccionado"}onClick={()=>handleClick("rainforest")}>RAINFOREST</span>
                </div>
                <div className='destinationspage-padre__texto__contenido'>
                    <h1>{information.titulo}</h1>
                    <p>{information.texto}</p>
                </div>
                <div className='destinationspage-padre__texto__detalles'>
                    <div >
                        <span className='detalles1'>{information.extension}</span>
                        <span className='detalles2'>{information.extension1}</span>
                    </div>
                    <div>
                        <span className='detalles1'>{information.numero}</span>
                        <span className='detalles2'>{information.numero1}</span>
                    </div>
                    <div>
                        <span className='detalles1'>{information.visita}</span>
                        <span className='detalles2'>{information.visita1}</span>
                    </div>
                </div>
            </div>
        </div>



    )
}

export {DestinationsPage};