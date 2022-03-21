import React from "react";
import { FooterWrapper } from "./style";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return (
        <FooterWrapper>
            <div className="Footer-main">
                <ul className="footer-column">
                    <li className="footer-left">
                        <a title="Truyện tranh online" href="/">
                            <img alt="Logo NetTruyen" src="//st.imageinstant.net/data/logos/logo-nettruyen.png" />
                        </a>
                        <p className="footer-title">Hoàng Tuấn Thành version 1.0</p>
                        <iframe class="fb-page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FReactjs-app-112271111351857&tabs=events&width=300&height=100&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" frameborder="0"> </iframe>
                    </li>
                    <li className="footer-main">
                        <div className="footer-text"> <i class="fas fa-map-marked-alt"></i>Số 290 P. Tây Sơn, Trung Liệt, Đống Đa, Hà Nội</div>
                        <div className="footer-text"><i class="fas fa-envelope"></i>Mr.kem2309@gmail.com</div>
                        <div className="footer-text"><i class="fas fa-phone-alt"></i>0346285105</div>
                        
                        <iframe 
                        className="map" 
                        width="400px"
                        height="200px"
                        allowfullscreen loading="lazy"
                        title="map" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6293835773517!2d105.82042791467757!3d21.007488393880678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adff5b664301%3A0xb95a224ee216725d!2zVmnDqsyjbiDEkGHMgG8gVGHMo28gQ05UVCBRdcO0zIFjIFTDqsyBIEktVEVDSA!5e0!3m2!1svi!2s!4v1642797350207!5m2!1svi!2s" 
                        frameborder="0"></iframe>
                    </li >
                </ul>
                
            </div>
            
        </FooterWrapper>
    )
}
export default Footer;