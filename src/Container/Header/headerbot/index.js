import React from "react";
import { HeaderbotWrapper } from "./style";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from "react-router-dom";


const Headerbot = () => {
    return(
    <HeaderbotWrapper>
        <div className="Footer-main">
                <div className="Footer-content">
                    <ul class="Footer-container">
                        <li class="active">
                            <NavLink exact activeClassName="selected" to="/">
                                <i class="fa fa-home hidden-xs"></i>
                            </NavLink>
                        </li>
                        <li class="">
                            <NavLink exact activeClassName="selected" to="/hot">Hot</NavLink>
                        </li>
                        <li class="">
                            <NavLink exact activeClassName="selected" to="/follow">Theo dõi</NavLink>
                        </li>
                        <li class="">
                            <NavLink exact activeClassName="selected" to="/sort">Sắp xếp</NavLink>
                        </li>
                        <li class="">
                        <NavLink exact activeClassName="selected" to="/theloai">Thể loại </NavLink>
                        </li>
                        <li class="">
                            <a rel="nofollow" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Xếp hạng 
                                <i class="fa fa-sort"></i>
                            </a>
                        </li>
                        <li class="">
                            <NavLink exact activeClassName="selected" to="/girl">Con Gái</NavLink>
                        </li>
                        <li class="">
                            <NavLink exact activeClassName="selected" to="/boy">Con Trai</NavLink>
                        </li>
                        <li class="">
                            <NavLink exact activeClassName="selected" to="/group">Group</NavLink>
                        </li>
                    </ul>
                </div>
        </div>
    </HeaderbotWrapper>
    )
}
export default Headerbot;