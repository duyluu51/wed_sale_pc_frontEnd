import { Link } from 'react-router-dom'
import BottomHeader from './BottomHeader.js'
import MenuProductHeader from './MenuProductHeader.js'

export default function Header() {

    return (
        <div>
            <div className="container">
                <nav className={`navbar navbar-expand-lg navbar-light bg-light row align-items-start`}>
                    <div className="col-lg-3 col-md-12 col-sm-12 mt-2">
                        <Link to='/' className="navbar-brand text-dark text-uppercase font-weight-bold">
                            <i className="fa-solid fa-house-laptop mr-2"></i>
                            DUY COMPUTER
                        </Link>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12 mt-2">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2 w-75" type="search" placeholder="Nhập tên, sản phẩm cần tìm..." aria-label="Search"/>
                            <button className="btn btn-danger my-2 my-sm-0" type="submit">Tìm kiếm</button>
                        </form>
                    </div>

                    <MenuProductHeader/>
                    
                </nav>
            </div>
            
            <BottomHeader/>

        </div>

    )
}
