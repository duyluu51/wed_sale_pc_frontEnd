import axios from 'axios'
import {useState,useEffect} from 'react'
import Slider from '../components/Slider'
import CardAreaShow from "../components/CardAreaShow"
export default function HomePage() {
    //Lấy ra list banner từ DB
    const [listTypeProduct,setListTypeProduct] =useState([])
    useEffect(() => {
        axios.get('https://wed-sale-pc-backend.herokuapp.com/product/bannerhome')
            .then(function ({data}) {
               setListTypeProduct(data.bannerItems[0].list)
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])

    return (
        <div id='homePage' >
            <Slider />

            {/* Có vòng lặp */}
            {listTypeProduct.map((typeProduct,index)=>(
                <CardAreaShow
                    key={index}
                    urlBanner={typeProduct.urlBanner}
                    typeProduct={typeProduct.typeProduct}
                />
            ))}
        </div>
    )
}