import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import burger_btn from '../assets/burger-bnt.png';
import close_btn from '../assets/close-bnt.png';
import iconDoll from '../assets/icon-dolls.png';
import iconCute from '../assets/icon/icon_cute_w.svg';
import dollsAvatar from '../assets/avatar.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    useEffect(() => {
        let userInfoJson = localStorage.getItem('userInfo');
        if (userInfoJson) {
            setUserInfo(JSON.parse(userInfoJson))
        }
    }, []);

    //登出
    const logout = () => {
        localStorage.removeItem('userInfo');
        window.location.href = '/'
    }

    return (
        <>
            <header className="topBar">
                <nav className="left">
                    <Link to="/" className="Home">
                        <div className="logo"></div>
                    </Link>
                    <ul className="menu">
                        <Link to="tutorial" className="tutorial"> <li><img src={iconCute} alt="裝飾icon" />新手教學</li></Link>
                        <Link to="dolls" className="products-dolls"><li><img src={iconCute} alt="裝飾icon" />人偶</li></Link>
                        <Link to="dressUp" className="products-dressUp"><li><img src={iconCute} alt="裝飾icon" />裝扮</li></Link>
                        <Link to="Faq" className="faq"><li><img src={iconCute} alt="裝飾icon" />Q&A</li></Link>
                    </ul>
                </nav>

                <nav id="web-nav">
                    <ul className="icon">
                        <li className='search'>
                            <input type="search" name="search" id="search" title="search" placeholder="Search" />
                        </li>
                        <li>
                            <Link to="cart" className="btn_cart common-css">
                            </Link>
                        </li>
                        <li>
                            <Link to="my-collection" className="btn_my-collection common-css">
                            </Link>
                        </li>
                        {
                            userInfo ?
                                <>
                                  <li>
                                        <Link to="my-account"
                                        ><img src={dollsAvatar} alt="會員" className='avatar' />
                                        </Link>
                                    </li>
                                    <button onClick={() => logout()}>登出</button>
                                </>
                                : <li><Link to="Login" className="btn_my-account common-css"></Link></li>
                        }

                    </ul>
                </nav>
                <nav id="phone-nav">
                    <button className='hamburger' onClick={handleMenuToggle}>
                        <img src={isMenuOpen ? close_btn : burger_btn} alt={isMenuOpen ? "close" : "burger"} />
                    </button>
                    <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        <li><Link to="/" onClick={closeMenu}><img src={iconDoll} alt="icon" /></Link></li>
                        <li><Link to="tutorial" className="tutorial" onClick={closeMenu}>新手教學</Link></li>
                        <li><Link to="dolls" className="products-dolls" onClick={closeMenu}>人偶</Link></li>
                        <li><Link to="dressUp" className="products-dressUp" onClick={closeMenu}>裝扮</Link></li>
                        <li><Link to="Faq" className="faq" onClick={closeMenu}>Q&A</Link></li>
                    </ul>/
                </nav>
            </header>
        </>
    );
}


export default Header;
