import React, { useState, useEffect } from "react";
import { HeaderWrapper, MenuMobileWrapper } from "./style";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from "react-router-dom";
import Input from "../../../Components/Input";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

const Header = () => {
    const [inputSearch, setInputSearch] = useState("")
    const history = useHistory();
    const handleInputSearch = (event) => {
        const value = event.target.value;
        setInputSearch(value)
        console.log(event)
    }

    const [menuMobile, setMenuMobile] = useState(false);


    const handleRedirectToSearch2 = () => {
        history.push(`/search/${inputSearch}`)
    }
    const handleRedirectToSearch = (event) => {
        if (event.key === "Enter") {
            history.push(`/search/${inputSearch}`)
        }
    }

    const handleChangeState = () => {
        setMenuMobile((state) => !state);
    };

    return (
        <HeaderWrapper>
            <div className="navbar-header">
                {menuMobile ? (
                    <Button className="header-btn" onClick={handleChangeState}>
                        <i class="fas fa-times"></i>
                    </Button>
                ) : (
                    <Button className="header-btn" onClick={handleChangeState}>
                        <i class="fas fa-bars"></i>
                    </Button>
                )}
                <div className="navbar__logo">
                    <NavLink exact activeClassName="selected" to="/"><img alt="Logo NetTruyen" src="//st.imageinstant.net/data/logos/logo-nettruyen.png" /></NavLink>
                </div>
                <div className="search__box">
                    <Input
                        className="input__box"
                        type="text"
                        placeholder="Tìm truyện..."
                        value={inputSearch}
                        onChange={handleInputSearch}
                        onKeyPress={handleRedirectToSearch}/>
                    <button className="search__button" onClick={handleRedirectToSearch2}>
                    <i className="fas fa-search"></i>
                </button>
                </div>
                

                <label onClick={handleChangeState} className={menuMobile ? "overlay" : ""}></label>
                <MenuMobileWrapper menuMobile={menuMobile}>
                <ul  className="list-menu-mobile">
                    <div className="btn-close" onClick={handleChangeState}><i class="fas fa-times"></i></div>
                    <li class="a" onClick={handleChangeState}>
                            <NavLink exact activeClassName="selected" to="/hot">Hot</NavLink>
                        </li>
                        <li class="a" onClick={handleChangeState}>
                            <NavLink exact activeClassName="selected" to="/follow">Theo dõi</NavLink>
                        </li>
                        <li class="a" onClick={handleChangeState}>
                            <NavLink exact activeClassName="selected" to="/sort">Sắp xếp</NavLink>
                        </li>
                        <li class="a" onClick={handleChangeState}>
                            <NavLink exact activeClassName="selected" to="/theloai">Thể loại </NavLink>
                        </li>
                        <li class="a" onClick={handleChangeState}>
                            <a rel="nofollow" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Xếp hạng 
                                <i class="fa fa-sort"></i>
                            </a>
                        </li>
                        <li class="a" onClick={handleChangeState}>
                            <NavLink exact activeClassName="selected" to="/girl">Con Gái</NavLink>
                        </li>
                        <li class="a" onClick={handleChangeState}>
                            <NavLink exact activeClassName="selected" to="/boy">Con Trai</NavLink>
                        </li>
                        <li class="a" onClick={handleChangeState}>
                            <NavLink exact activeClassName="selected" to="/group">Group</NavLink>
                        </li>
                </ul>
            </MenuMobileWrapper>
            </div>
            
        </HeaderWrapper>
    );
};

export default Header;
