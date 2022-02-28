import { Fragment, useState, useEffect } from 'react'
import clsx from 'clsx'
import axios from 'axios'
import CardProduct from '../CardProduct'
import style from './SliderShowCard.module.css'

export default function SliderShowCard({ typeProduct }) {
    // Khai báo các state
    const [productCollection, setProductCollection] = useState([])
    const [forwardAble, setForwardAble] = useState(false)
    const [backAble, setBackAble] = useState(true)

    // Dùng axous lấy ra các sản phẩm có type tương ứng
    //Lấy ra list banner từ DB
    useEffect(() => {
        axios.get(`/product/collection/${typeProduct}`)
            .then(function ({ data }) {
                setProductCollection(data.productCollection)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    // Xử lý state, Xử lý sự kiện ấn backWard
    const [activeItems, SetactiveItems] = useState([0, 1, 2, 3, 4])
    const handleBackWard = e => {
        setForwardAble(true)
        if (backAble) {
            SetactiveItems(prevItems => {
                let result = prevItems.map((item, index) => {
                    return item > productCollection.length - 2 ? (item - productCollection.length + 1) : item + 1
                })
                if (result[4] === productCollection.length - 1) {
                    setBackAble(false)
                } else {
                    setBackAble(true)
                }
                return result
            })
        }
    }


    // Xử lý state, Xử lý sự kiện ấn forWard
    const handleForWard = e => {
        setBackAble(true)
        if (forwardAble) {
            SetactiveItems(prevItems => {
                let result = prevItems.map((item, index) => {
                    return item < 1 ? productCollection.length - 1 : item - 1
                })
                if (result[0] === 0) {
                    setForwardAble(false)
                } else {
                    setForwardAble(true)
                }

                return result
            })
        }

    }

    return (
        <div className={`${style.sliderArea}`}>
            <ul className={`${style.sliderList}`}>
                {productCollection.map((product, index) => (
                    <li
                        key={index}
                        className={clsx(
                            {
                                'd-none': !(activeItems.includes(index)),
                                'd-block': (activeItems.includes(index))
                            }
                        )}
                    >
                        <CardProduct
                            product={product}
                        />
                    </li>
                ))}

            </ul>

            {/* Forward button */}
            <div
                className={clsx(
                    style.sliderControl,
                    style.backWard,
                    { 'bg-danger': !forwardAble }
                )}
                onClick={e => handleForWard(e)}
            >
                <i className={`fa-solid fa-angle-left`}></i>
            </div>

            {/* BackWard button */}
            <div
                className={clsx(
                    style.sliderControl,
                    style.forWard,
                    { 'bg-danger': !backAble }
                )}
                onClick={e => handleBackWard(e)}
            >
                <i className={`fa-solid fa-angle-right`}></i>
            </div>

        </div>
    )
}