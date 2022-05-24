import React from 'react'
import './Footer.css';


const Footer = () => {
  return (
    <div className="Footer_Container">
        <div className="Footer_Content">
            <div className="Social_Link">
                <a href=""><i class="ri-facebook-fill"></i></a>
                <a href=""><i class="ri-instagram-line"></i></a>
                <a href=""><i class="ri-twitter-fill"></i></a>
                <a href=""><i class="ri-youtube-fill"></i></a>
            </div>
            <div className="Orther_Link">
                <table>
                    <tr>
                        <td><a href="">Âm thanh  và phụ đề</a></td>
                        <td><a href="">Mô tả âm thanh</a></td>
                        <td><a href="">Trung tâm trợ giúp</a></td>
                        <td><a href="">Thẻ quà tặng</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Trung tâm đa phương tiện</a></td>
                        <td><a href="">Quan hệ với nhà đầu tư</a></td>
                        <td><a href="">Thông báo pháp lý</a></td>
                        <td><a href="">Điều khoản sử dụng</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Quyền riêng tư</a></td>
                        <td><a href="">Âm thanh  và phụ đề</a></td>
                        <td><a href="">Việc làm</a></td>
                        <td><a href="">Thông tin doanh nghiệp</a></td>
                    </tr>
                    <tr>
                        <td><a href="">Liên hệ với chúng tôi</a></td>
                    </tr>
                    <tr>
                        <button>Mã dịch vụ</button>
                    </tr>
                    <tr>
                        <p>Phuc Huynh</p>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Footer