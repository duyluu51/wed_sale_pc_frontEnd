import style from './ProductDetailPage.module.css'
import clsx from 'clsx'
import { Fragment, useState } from 'react'

export default function ProductInforShow({productName,productBranch,productType,productId,productPrice}) {
    const [oderQty,setOderQty]=useState(1)

    // Xử lý sự kiện đặt hàng
    const handleMinus=(e) => {
        if(oderQty<2) {
            setOderQty(1)
        }else{
            setOderQty(oderQty-1)
        }
    }

    const handlePlus=() => {
        if(oderQty>19) {
            setOderQty(20)
        }else{
            setOderQty(oderQty+1)
        }
    }

    const handleFill=(e) => {
        if (typeof(e.target.value)==='number'&& 1 < e.target.value && e.target.value <20) {
            setOderQty(e.target.value)
        } else{
            setOderQty(1)
        }
    }

    return (
        <Fragment>
            {/* Show detail of product */}
            <div className={clsx(style.pdInfo, 'col')} >
                <div className={clsx(style.wrapPdInfo)}>
                    {/* Show brief detail area */}
                    <h1 className={clsx(style.tittle)}>
                        {productName}
                    </h1>
                    <div className={clsx(style.listInfoDesc)}>
                        <ul>
                            <li className={clsx(style.branch)}>
                                Thương hiệu:
                                <span>{productBranch}</span>
                            </li>

                            <li className={clsx(style.type)}>
                                Loại:
                                <span>{productType}</span>
                            </li>

                            <li className={clsx(style.productId)}>
                                Mã sản phẩm:
                                <span>{productId}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Price and order area */}
                    <div className={clsx(style.priceBoxInfo)}>
                        <div className={clsx('row')}>
                            <div className={clsx('col-7', style.wrapBlockInfo)}>
                                <div className={clsx(style.pdPrice)}>
                                    <p>
                                        <span className={clsx(style.pdLabelPrice)}>Tại Duy Computer:</span>
                                        <span className={clsx(style.pdPriceValue)}>{productPrice}₫</span>
                                    </p>
                                </div>

                                <div className={clsx(style.actionCart, 'mt-4')}>
                                    <button 
                                        type="button" 
                                        className={clsx(style.qtyControl)}
                                        onClick={e=>handleMinus(e)}
                                        >-
                                    </button>
                                    <input 
                                        type="number" 
                                        className={clsx(style.inputQty)} 
                                        maxLength="12" min="1"
                                        value={oderQty}
                                        onChange={e=>handleFill(e)}
                                    />
                                    <button 
                                        type="button" 
                                        className={clsx(style.qtyControl)}
                                        onClick={e=>handlePlus(e)}
                                        >+
                                    </button>
                                </div>

                                <div className='mt-4'>
                                    <button type="button" className="btn btn-success">Thêm vào giỏ hàng</button>
                                </div>

                            </div>

                            <div className={clsx('col-5')}>
                                <div className={clsx(style.pdPolicyWrap)}>
                                    <ul className={clsx(style.listPolicy)}>
                                        {/* item 1 */}
                                        <li className={clsx(style.policyItem, 'mb-3')}>
                                            <div className={clsx(style.policyItemBox)}>
                                                <div className={clsx(style.itemboxImg)}>
                                                    <img src="//theme.hstatic.net/1000262653/1000759281/14/product_policy_1.png?v=320" alt="GIAO HÀNG" />
                                                </div>

                                                <div className={clsx(style.itemboxDetail)}>
                                                    <h5>
                                                        GIAO HÀNG
                                                    </h5>

                                                    <span>
                                                        Miễn phí giao hàng toàn quốc thông qua các đơn vị vận chuyển cho Hóa đơn trên 500,000đ
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        {/* item 2 */}
                                        <li className={clsx(style.policyItem, 'mb-3')}>
                                            <div className={clsx(style.policyItemBox)}>
                                                <div className={clsx(style.itemboxImg)}>
                                                    <img src="//theme.hstatic.net/1000262653/1000759281/14/product_policy_2.png?v=320" alt="SẢN PHẨM" />
                                                </div>

                                                <div className={clsx(style.itemboxDetail)}>
                                                    <h5>
                                                        SẢN PHẨM
                                                    </h5>

                                                    <span>
                                                        Cam kết hàng mới 100% - Bảo hành chính hãng
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        {/* item 3 */}
                                        <li className={clsx(style.policyItem, 'mb-3')}>
                                            <div className={clsx(style.policyItemBox)}>
                                                <div className={clsx(style.itemboxImg)}>
                                                    <img src="//theme.hstatic.net/1000262653/1000759281/14/product_policy_3.png?v=320" alt="ĐỔI TRẢ" />
                                                </div>

                                                <div className={clsx(style.itemboxDetail)}>
                                                    <h5>
                                                        ĐỔI TRẢ
                                                    </h5>

                                                    <span>
                                                        1 đổi 1 lên đến 31 ngày nếu phát sinh lỗi do nhà sản xuất
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                        {/* item 4 */}
                                        <li className={clsx(style.policyItem, 'mb-3')}>
                                            <div className={clsx(style.policyItemBox)}>
                                                <div className={clsx(style.itemboxImg)}>
                                                    <img src="//theme.hstatic.net/1000262653/1000759281/14/product_policy_4.png?v=320" alt="Hỗ trợ" />
                                                </div>

                                                <div className={clsx(style.itemboxDetail)}>
                                                    <h5>
                                                        HỖ TRỢ
                                                    </h5>

                                                    <span>
                                                        Thứ 2 - CN: 09:00 - 19:00 Hotline: 0942390241
                                                    </span>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}