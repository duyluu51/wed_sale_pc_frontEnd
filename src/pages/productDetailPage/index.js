import style from './ProductDetailPage.module.css'
import clsx from 'clsx'
import ProductInforShow from './ProductInforShow'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function ProductDetailPage() {
    // Xử lý lấy thông tin product
    const location = useLocation()
    const product = location.state.product

    // Xử lý slider show ảnh
    const [indexImgShow, setIndexImgShow] = useState(0)
    useEffect(() => {
        let sliderImgShow
        sliderImgShow = setInterval(() => {
            setIndexImgShow(prevIndex => {
                if (prevIndex < product.fileUrls.length - 1) {
                    return prevIndex + 1
                } else {
                    return 0
                }
            }
            )
        }, 3000);

        return () => clearInterval(sliderImgShow)
    }, [])

    return (
        <div id='ProductDetailPage' className='mt-4' >
            <div className="row no-gutters" style={{minheight:'448px'}}>
                {/* Show img of product */}
                <div className="col">
                    <div className={clsx(style.pdImg, 'row', 'no-gutters')}>
                        <div className="col-2">
                            <ul className={clsx(`${style.listThumb}`)}>
                                {product.fileUrls.map((fileUrl, index) => (
                                    <li
                                        key={index}
                                        className={clsx(`${style.listThumbItem}`)}
                                        onClick={e => setIndexImgShow(index)}
                                    >
                                        <img className={clsx(`
                                                            ${style.imgThumb}`,
                                            'card-img-top',
                                            'p-1',
                                            { "border border-danger": index === indexImgShow }
                                        )}
                                            src={fileUrl}
                                            alt="Product"
                                        />
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div className="col-10">
                            <img className={clsx('card-img-top')}
                                src={product.fileUrls[indexImgShow]}
                                alt="Product"
                            />
                        </div>
                    </div>
                </div>

                {/* Show detail of product */}
                <div className={clsx(style.pdInfo, 'col')} >
                    <ProductInforShow 
                        productName={product.nameProduct}
                        productBranch={product.branch}
                        productType={product.typeProduct}
                        productId={product._id}
                        productPrice={product.price}
                    />
                </div>
            </div>

            {/* Show description */}
            <div className={clsx('mt-4', style.pdDescription)}>
                <h2>Chi tiết sản phẩm</h2>
                <div className={clsx(style.pdDescriptionLine)}></div>
                <p className={clsx('mt-4')}>
                    {product.description}
                </p>
            </div>
        </div>
    )
}