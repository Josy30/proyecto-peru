import './GastronomyPage.scss';
import lomosaltado from "../../assets/lomosaltado1.png";
import ceviche from "../../assets/ceviche1.png";
import pachamanca from "../../assets/pachamanca1.png";
import juanes from "../../assets/juanes.png";
import { useState } from 'react';

function GastronomyPage (){
    const[information,setInformation] = useState({
        superior :'PERUVIAN CUISINE',
        subtitulo:'Traditional peruvian dish in coast',
        titulo:'LOMO SALTADO',
        descripcion: 'A stir fry that typically combines marinated strips of \nsirloin (or other beef steak) with onions, tomatoes,\n french fries, and other ingredients; and is typically\n served with rice.',
        imagen :lomosaltado,
    })

    const handleClick =(param) => {
        switch(param){
            case 'lomo saltado':
                setInformation({
                    superior :'PERUVIAN CUISINE',
                    subtitulo:'Traditional peruvian dish in coast',
                    titulo:'LOMO SALTADO',
                    descripcion: 'A stir fry that typically combines marinated strips of sirloin \n(or other beef steak) with onions, tomatoes, french fries,\n and other ingredients; and is typically served with rice.',
                    imagen :lomosaltado,
                })
            return;
            case 'ceviche':
                setInformation({
                    superior :'PERUVIAN CUISINE',
                    subtitulo:'Traditional peruvian dish in coast',
                    titulo:'CEVICHE',
                    descripcion: 'Ceviche, originally from Peru, is more than 2000 years old \nand is a dish of raw fish marinated in lime juice, chili, onion, \n cilantro and salt. \nIt can be accompanied with corn, sweet potato or cancha, \nand is served cold or at room temperature. ',
                    imagen :ceviche,
                })
            return;
            case 'pachamanca':
                setInformation({
                    superior :'PERUVIAN CUISINE',
                    subtitulo:'Traditional peruvian mountain dish',
                    titulo:'PACHAMANCA',
                    descripcion: 'The pachamanca is a subway barbecue of hot stones prepared by the Andean people since the time of the Incas. \nIt is composed of meat, chicken, pork, potatoes, vegetables and corn; and it is prepared in a hole in the ground, where preheated stones are placed to cook the ingredients.',
                    imagen :pachamanca,
                    })
            return;
            case 'juane':
                setInformation({
                    superior :'PERUVIAN CUISINE',
                    subtitulo:'Traditional peruvian dish in rainforest',
                    titulo:'JUANES',
                    descripcion: 'Juane is a stew of chicken, rice, eggs, spices and bijao leaves, which is an emblematic dish of the Peruvian jungle. It is one of the most representative dishes of the Amazonian cuisine. ',
                    imagen :juanes,
                        })
            return;
        default:
            return 'none';
            
        }
    }

    return (

        <div className='gastronomypage-padre'>
            <div className='gastronomypage-padre_descripcion'>
                <div className='gastronomypage-padre_descripcion_superior'>
                    <span>{information.superior}</span>
                </div >
                <div className='gastronomypage-padre_descripcion_contenido'>
                    <span>{information.subtitulo}</span>
                    <h1>{information.titulo}</h1>
                    <p>{information.descripcion}</p>
                </div>
            <div className='gastronomypage-padre_botones'>
                    <button className= {information.titulo === 'LOMO SALTADO' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick('lomo saltado')}></button>
                    <button className= {information.titulo === 'CEVICHE' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick('ceviche')}></button>
                    <button className= {information.titulo === 'PACHAMANCA' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick('pachamanca')}></button>
                    <button className= {information.titulo === 'JUANES' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick('juane')}></button>
            </div>
            </div>
            <div className='gastronomypage-padre_imagen'>
                <img className='gastronomypage-padre_imagen_defecto' src={information.imagen}/>
            </div>
        </div>

    )
}

export {GastronomyPage};