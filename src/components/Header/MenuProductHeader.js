import style from './Header.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MenuProductHeader() {
    //Lấy ra list product từ DB
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        axios.get('/product/store')
            .then(function ({ data }) {
                setListProduct(data.productitem[0].list)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className="collapse navbar-collapse col-lg-5 col-md-3">

            <ul className="navbar-nav mr-auto">
                {listProduct.map((product, index) => (
                    <li key={index} className={`nav-item active`}>
                        <div className="dropdown btn-group">
                            <Link
                                to={`/collection/${product.productType}`}
                                state={{
                                    'typeDetailProduct': '',
                                    'typeProduct': product.productType
                                }}
                                className={`navbar-brand text-dark ${style.btnGroupNav}`}
                            >
                                <img className={`${style.navIcon}`} src={product.icon} alt="product" />
                                <span>{product.productType}</span>
                            </Link>

                            <div className={`dropdown-menu ${style.dropdownHover}`}>
                                {product.List.map((productDetail, index) => (
                                    <Link
                                        to={`/collection/${product.productDetail}`}
                                        state={{
                                            'typeDetailProduct': productDetail,
                                            'typeProduct': product.productType
                                        }}
                                        key={index} className="dropdown-item"
                                    >{productDetail}
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </li>
                ))}

            </ul>

        </div>
    )
}
