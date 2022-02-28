import style from './Footer.module.css'

export default function Footer() {

    return (
        <div id="footer" className="bg-secondary mt-4">
            <div className="container p-4">
                <div className="row">
                    <div className="col-4">
                        <img className="mt-4" data-load="true" alt="Bộ Công Thương" src="//theme.hstatic.net/1000262653/1000759281/14/dtb.png?v=320" />
                    </div>

                    <div className="col-8">
                        <p className="text-light">
                            CÔNG TY CỔ PHẦN DUY COMPUTER
                            <br />
                            Giấy chứng nhận đăng ký kinh doanh số 3603351885, do sở KH &amp; ĐT tỉnh Đồng Nai cấp 25/01/2016
                            <br />
                            Địa chỉ: Số 443-445, Đường Đồng Khởi, Khu phố 6, Phường Tân Tiến, Thành phố Biên Hoà, Đồng Nai
                            <br />
                            Điện thoại: 0942390241<br />
                            Email: duyluu51@gmail.com
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}
