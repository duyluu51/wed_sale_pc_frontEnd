import { Link } from 'react-router-dom'
import style from './CardAreaShow.module.css'
import SliderShowCard from '../SliderShowCard'

export default function CardAreaShow({urlBanner,typeProduct}) {
    
    return (
        <div className="mt-4">
            {/* Block tittle */}
            <div className={`${style.blockTittle}`}>
                <h2>{typeProduct}</h2> 
            </div>
            {/* Banner */}  
            <div>
                <div className="card mt-3 mb-3">
                    <img className="card-img-top" src={urlBanner} alt="Card cap" />
                </div>
            </div>
            {/* Slider for product */}  
            <SliderShowCard 
                typeProduct={typeProduct}
            />
        </div>
    )
}
