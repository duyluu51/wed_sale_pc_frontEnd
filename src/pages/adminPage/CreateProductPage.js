import axios from 'axios'
import FormData from 'form-data'
import { useState, useEffect, Fragment, useRef } from 'react'

export default function CreateProductPage() {

    const [listProduct, setListProduct] = useState([])
    const [nameProduct, setNameProduct] = useState('')
    const [branch, setBranch] = useState('')
    const [typeProduct, setTypeProduct] = useState('')
    const [typeDetailProduct, setTypeDetailProduct] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const inputFileRef = useRef()

    //Lấy ra list product từ DB [GET]
    useEffect(() => {
        axios.get('http://localhost:5000/product/store')
            .then(function ({ data }) {
                setListProduct(data.productitem[0].list)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    // Hàm xử lý form submit
    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('nameProduct', nameProduct)
        formData.append('branch', branch)
        formData.append('typeProduct', typeProduct)
        formData.append('typeDetailProduct', typeDetailProduct)
        formData.append('price', price)
        formData.append('description', description)
        for (let i = 0; i < inputFileRef.current.files.length; i++) {
            formData.append('imgs', inputFileRef.current.files[i])
        }

        // Lưu data lên hệ thống
        axios({
            method: "post",
            url: "http://localhost:5000/product/create",
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                // Upload success
                console.log("Save data sucess")
                setNameProduct('')
                setBranch('')
                // setTypeProduct('')
                // setTypeDetailProduct('')
                setPrice('')
                setDescription('')
            })
            
    }

    return (
        <div id="CreateProductPage">

            {/* Nhập Name Product */}
            <form className="mt-2" encType="multipart/form-data" onSubmit={e => handleSubmit(e)} >
                <div className="form-group">
                    <label htmlFor="nameProduct">Name Product</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nameProduct}
                        placeholder="Nhập tên sản phẩm..."
                        onChange={(e) => setNameProduct(e.target.value)}
                    />
                </div>

                {/* Nhập Branch */}
                <div className="form-group">
                    <label htmlFor="branch">Branch</label>
                    <input
                        type="text"
                        className="form-control"
                        value={branch}
                        placeholder="Nhập thương hiệu..."
                        onChange={(e) => setBranch(e.target.value)}
                    />
                </div>

                {/* Nhập Loại sản phẩm */}
                <div className="form-group">
                    <label htmlFor="typeProduct">Loại sản phẩm</label>
                    <select
                        className="form-control"
                        value={typeProduct}
                        onChange={(e) => setTypeProduct(e.target.value)}
                    >
                        <option value="">--Chọn loại sản phẩm--</option>
                        {listProduct.map((product, index) => (
                            <option
                                key={index}
                                value={product.productType}
                            >{product.productType}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Nhập Loại sản phẩm cụ thể*/}
                {typeProduct && (
                    <div className="form-group">
                        <label htmlFor="typeDetailProduct">Loại sản phẩm cụ thể</label>
                        <select
                            className="form-control"
                            value={typeDetailProduct}
                            onChange={(e) => setTypeDetailProduct(e.target.value)}
                        >
                            <option value="">--Chọn loại sản phẩm cụ thể--</option>
                            {listProduct.map((product, index) => (
                                <Fragment key={index}>
                                    {product.productType === typeProduct ? (
                                        <Fragment>
                                            {product.List.map((productDetail, index) => (
                                                <option
                                                    key={index}
                                                    value={productDetail}
                                                >{productDetail}
                                                </option>
                                            ))}
                                        </Fragment>
                                    ) : (<Fragment />)}
                                </Fragment>
                            ))}
                        </select>
                    </div>
                )}

                {/* Nhập price */}
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        value={price}
                        placeholder="Nhập giá sản phẩm..."
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                {/* ĐÍnh kèm hình ảnh sản phẩm */}
                <div className="form-group">
                    <label htmlFor="img">Ảnh sản phẩm</label>
                    <input type="file" className="form-control" multiple ref={inputFileRef} name="imgs" />
                </div>

                {/* Nhập Loại mô tả sản phẩm*/}
                <div className="form-group">
                    <label htmlFor="description">Mô tả chi tiết</label>
                    <textarea
                        className="form-control"
                        rows="8"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>

                {/* Submit form */}
                <div className="form-group">
                    <input type="submit" value="Thêm sản phẩm" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}