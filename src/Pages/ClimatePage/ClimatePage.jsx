import { useState } from 'react';
import costa from '../../assets/costa.png';
import selva from '../../assets/selva1.jpg';
import sierra from '../../assets/sierra1.avif';
import './ClimatePage.scss';

function ClimatePage (){

    const [information,setInformation] = useState({
            subtitulo: '',
            titulo:'COAST',
            descripcion:'From Tacna to Tumbes: Mild to warm climate, moderate but with high humidity and dense fog in winter, where temperatures range from 53.6 to 64.4 °F. In summer, there is little fog, and temperatures range from 77 to 95 °F. Heavy rains occur from December to April, especially in the higher areas. During the other seasons, the average temperature is around 68 °F.',
            imagen:costa,
    })

    const handleClick = (param) => {
            switch(param) {
            case 'costa':
                setInformation({
                    subtitulo:"",
                    titulo:'COAST',
                    descripcion:'From Tacna to Tumbes: Mild to warm climate, moderate but with high humidity and dense fog in winter, where temperatures range from 53.6 to 64.4 °F. In summer, there is little fog, and temperatures range from 77 to 95 °F. Heavy rains occur from December to April, especially in the higher areas. During the other seasons, the average temperature is around 68 °F.',
                    imagen:costa
                })
                return;
            
            case 'selva':
                setInformation({
                    subtitulo:"",
                    titulo:'THE AMAZON',
                    descripcion:'Like the Andes, the Amazon has two well-defined seasons: the rainy season (November – March) with abundant precipitation, and the low-rainfall season (April – October), ideal for visiting. The humidity is very high throughout the year. Occasionally, between May and August, the temperature can drop to 46.4°-53.6 °F.',
                    imagen:selva
                
                })
                return;
            
            case 'sierra':
                setInformation({
                    subtitulo:"",
                    titulo:'THE ANDES',
                    descripcion:'It has two seasons: summer (April – October), with sunny days, cold nights, and little rain (an ideal time to visit), with temperatures reaching up to 75.2 °F, and at night it can drop to 0 °F. In winter (November – March), there are abundant rains, and temperatures range between 59 and 26.6°F.',
                    imagen:sierra
                    
                    })
                    return;
                
            
            }
        }




    return (
        <div>
            <div className='climatepage_padre'>
                <h2>CLIMATE</h2>
                <p>Did you know that Peru has 28 types of climate out of the 32 that exist in the world, that is 87.5% of the world's total? </p> 
            </div>
            <div className='climatepage_padre-caja'>
                <div className='climatepage_padre-caja-botones'>
                    <button className= {information.titulo === 'COAST' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick('costa')}>1</button>
                    <button className= {information.titulo === 'THE AMAZON' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick('selva')}>2</button>
                    <button className= {information.titulo === 'THE ANDES' ?`seleccionado` : "no-seleccionado"} onClick={()=>handleClick('sierra')}>3</button>
                </div>
                <div className='climatepage_padre-caja-descripcion'>
                <span>{information.subtitulo}</span>
                <h1>{information.titulo}</h1>
                <p>{information.descripcion}</p>
                </div>
            <div className='climatepage_padre-imagen'>
                <img className='climate_imagen' src={information.imagen}></img>
            </div>
            </div>
        </div>
        



    )

}

export {ClimatePage};