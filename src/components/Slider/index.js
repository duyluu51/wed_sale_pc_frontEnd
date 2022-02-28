import axios from 'axios'
import { useState, useEffect } from 'react'
import style from './Slider.module.css'

export default function Slider() {
    //Lấy ra list banner từ DB
    const [listBanner, setListBanner] = useState([])
    useEffect(() => {
        axios.get('/product/banner')
            .then(function ({ data }) {
                setListBanner(data.banners[0].list)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div id="slider" className="mt-2">
            <div className="row">
                <div className="col-8">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            {listBanner.map((bannerItem, index) => (
                                <li data-target="#carouselExampleIndicators"
                                    key={index}
                                    data-slide-to={index}
                                    className={index === 0 ? "active" : ""}>
                                </li>
                            ))}

                        </ol>
                        <div className="carousel-inner" >
                            {listBanner.map((bannerItem, index) => (
                                <div key={index} className={index === 0 ? `active carousel-item ${style.sliderShow}` : `carousel-item ${style.sliderShow}`} >
                                    <img className="d-block w-100 h-100"
                                        src={bannerItem.urlBanner}
                                        alt={`Slide ${index + 1}`}
                                    />
                                </div>
                            ))}

                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="col-4">
                    <div className="card ">
                        <img className="card-img-top"
                            src="https://res.cloudinary.com/dvnipovxd/image/upload/v1645499876/banner/slider_1_image_bqnwjj.jpg"
                            style={{ height: 145 }}
                            alt="Banner" 
                        />
                    </div>
                    <div className="card mt-2">
                        <img className="card-img-top"
                            src="https://res.cloudinary.com/dvnipovxd/image/upload/v1645499871/banner/slider_5_image_esxkga.jpg"
                            style={{ height: 145 }}
                            alt="Banner" 
                        />
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <img src="https://res.cloudinary.com/dvnipovxd/image/upload/v1645516905/banner/banner_home_1_upwovj.png" 
                        className="img-fluid" 
                        alt="Banner" 
                    />
                </div>

                <div className="col">
                    <img src="https://res.cloudinary.com/dvnipovxd/image/upload/v1645516897/banner/bannerHome2_tf50r2.png" 
                        className="img-fluid" 
                        alt="Banner" />
                </div>
            </div>
        </div>
    )
}