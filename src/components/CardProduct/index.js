import { Link } from 'react-router-dom'
import style from './CardProduct.module.css'

export default function CardProduct({product}) {
    
    return (
        <Link to={`/product/${product.slug}`}
            state={{product}}
            className={`card mt-2 md-2 ${style.cardItem}`}
            >
                <img className="card-img-top"
                    src={product.fileUrls[0]} alt="Product"
                />
                <div className={`${style.cardContent} text-center`}>
                    <h5
                    >
                        {product.nameProduct}
                    </h5>
                    <p >{product.price}</p>
                </div>
        </Link>

    )
}
