import style from './ProductCollectionPage.module.css'
import clsx from 'clsx'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useLayoutEffect } from 'react'
import CardProduct from '../../components/CardProduct'

export default function ProductCollectionPage() {
    // Xử lý lấy thông tin product
    const location = useLocation()
    const { typeProduct, typeDetailProduct } = location.state

    // Dùng axous lấy ra các sản phẩm có type tương ứng
    // fillter theo type product truớc
    const [productCollection, setProductCollection] = useState([])
    const [branchList, setBranchList] = useState([])
    const [branchFilter, setBranchFilter] = useState([])
    const [conditionSort, setConditionSort] = useState('nameAscending')

    // Get data trên server base on loại sản phẩm
    useEffect(() => {
        let isMount = true
        if (isMount) {
            let resultCollection
            let resultBranchList
            axios.get(`/product/collection/${typeProduct}`)
                .then(function ({ data }) {
                    if (typeDetailProduct !== '') {
                        resultCollection = data.productCollection.filter((product, index) => {
                            return product.typeDetailProduct === typeDetailProduct
                        })
                    } else {
                        resultCollection = data.productCollection
                    }
                    setProductCollection(resultCollection)
                    // init branch list
                    resultBranchList = resultCollection.map((product, index) => product.branch)
                    setBranchList(Array.from(new Set(resultBranchList)))
                })
                .catch(function (error) {
                    console.log(error);
                }
                )
        }

        return function cleanup() {
            isMount = false
        }

    }, [typeProduct, typeDetailProduct])

    // Filter theo branch (onprogress)

    const handleFilterByBranch = (branchItem) => {
        let filterResult
        if(branchFilter.includes(branchItem)) {
            filterResult=branchFilter.filter((branch,index)=>branch!==branchItem)
        }else {
            filterResult=[...branchFilter,branchItem]
        }

        let filterList=[]
        let filterListItem
        if(filterResult!==[]) {
            // setBranchFilter(filterResult)
            for(let i=0;i<filterResult.length;i++) {
                filterListItem=productCollection.filter(product=>filterResult[i]===product.branch)
                filterList=[...filterList,...filterListItem]
            }

            console.log(filterList)
        }
    }

    // Handle sort data theo state được chọn

    const handleSortPriceUp = (e) => {
        setConditionSort('priceUp')
        let sortList = productCollection.sort((a, b) => (parseInt(a.price) - parseInt(b.price) > 0) ? 1 : -1)
        setProductCollection(sortList)
    }

    const handleSortPriceDown = (e) => {
        setConditionSort('priceDown')
        let sortList = productCollection.sort((a, b) => (parseInt(a.price) - parseInt(b.price) < 0) ? 1 : -1)
        setProductCollection(sortList)
    }

    const handleSortNameAscending = (e) => {
        setConditionSort('nameAscending')
        let sortList = productCollection.sort((a, b) => (a.nameProduct > b.nameProduct) ? 1 : -1)
        setProductCollection(sortList)
    }

    const handleSortNameDescending = (e) => {
        setConditionSort('nameDescending')
        let sortList = productCollection.sort((a, b) => (a.nameProduct < b.nameProduct) ? 1 : -1)
        setProductCollection(sortList)
    }

    return (
        <div id="productCollectionPage">
            <div className={clsx(style.collectionHead)}>
                <div className={clsx(style.container, 'd-inline-block')}>
                    <h3 className="collection_title">
                        {typeDetailProduct || typeProduct}
                    </h3>
                    <span className="countPd">({productCollection.length} sản phẩm)</span>
                </div>

                {/* Filter theo branch */}
                <div className={clsx(style.filterBranch, 'd-inline-block position-relative')}>
                    <label className={clsx(style.title, 'ml-2', 'mr-2')}
                    >Thương hiệu
                        <span className="ml-2">
                            <i className="fa fa-angle-down"></i>
                        </span>
                    </label>

                    <ul className={clsx(style.listCondition, "list-group position-absolute")}>
                        {branchList.map((branchItem, index) => (
                            <li
                                key={index}
                                className="list-group-item"
                            >
                                <input 
                                    onClick={e=>handleFilterByBranch(branchItem)} 
                                    type="checkbox" 
                                /> {branchItem}
                            </li>
                        ))}

                    </ul>
                </div>

                {/* sort theo price, name */}
                <div className={clsx(style.filterCollection, 'd-inline-block ml-4')}>
                    <label
                        className={clsx(style.title, 'ml-2', 'mr-2')}
                    >Sắp xếp theo
                        <span className="ml-2">
                            <i className="fa fa-angle-down"></i>
                        </span>
                    </label>

                    <ul className={clsx(style.listCondition, "list-group position-absolute")}>
                        <li
                            className="list-group-item"
                            onClick={e => handleSortPriceUp(e)}
                        >
                            <input
                                type='radio'
                                className='mr-1'
                                checked={conditionSort === 'priceUp'}
                                readOnly
                            />
                            Giá: tăng dần
                        </li>

                        <li
                            className="list-group-item"
                            onClick={e => handleSortPriceDown(e)}
                        >
                            <input
                                type='radio'
                                className='mr-1'
                                checked={conditionSort === 'priceDown'}
                                readOnly
                            />
                            Giá: giảm dần
                        </li>

                        <li
                            className="list-group-item"
                            onClick={e => handleSortNameAscending(e)}
                        >
                            <input
                                type='radio'
                                className='mr-1'
                                checked={conditionSort === 'nameAscending'}
                                readOnly
                            />
                            Tên: A-Z
                        </li>

                        <li
                            className="list-group-item"
                            onClick={e => handleSortNameDescending(e)}
                        >
                            <input
                                type='radio'
                                className='mr-1'
                                checked={conditionSort === 'nameDescending'}
                                readOnly
                            />
                            Tên: Z-A
                        </li>
                    </ul>

                </div>

            </div>
            
            {/* Render card product show Area */}
            <div className='d-flex flex-wrap'>
                {productCollection.map((product, index) => (
                    <div key={index}>
                        <CardProduct
                            product={product}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}