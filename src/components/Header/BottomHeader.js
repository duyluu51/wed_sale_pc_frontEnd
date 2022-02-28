import {Link} from 'react-router-dom'
import style from'./Header.module.css'
export default function BottomHeader() {
    return (
        <div className="card-header bg-danger">
            <div className="container">
                <ul className="navbar-nav mr-auto d-flex flex-row">
                    <li className="nav-item active mr-4">
                        <a href="#" className="text-light">
                            <i className="fa-solid fa-gift mr-2"></i>
                            <span className="text-white">Ưu Đãi</span>
                        </a>
                    </li>

                    <li className="nav-item active mr-4">
                        <a href="#" className="text-light">
                            <i className="fa-solid fa-file mr-2"></i>
                            <span className="text-white">Bảng Giá</span>
                        </a>
                    </li>

                    <li className={`nav-item active mr-4 position-relative ${style.bottomHeaderDropdown}`}>
                        <a href="#" className="text-light">
                            <i className="fa-solid fa-screwdriver-wrench mr-2"></i>
                            <span className="text-white">Setting</span>
                        </a>

                        <div className={`dropdown-menu position-absolute ${style.dropdownMenu}`} aria-labelledby="dropdownMenuButton">
                            <a className={`dropdown-item ${style.dropdownMenuItem}`} href="#">Danh sách sản phẩm</a>
                            <Link to='/admin/createproduct' className={`dropdown-item ${style.dropdownMenuItem}`}>Thêm sản phẩm</Link>

                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
