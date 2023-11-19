import React from "react";
import { FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <>
            <header>
                <div className='header-top mobile-hide'>
                    <div className='container'>
                        <div className='wrapper flexitem'>
                            <div className='left'>
                                <ul className='flexitem main-links'>
                                    <li><Link to ='/'>커뮤니티</Link></li>
                                    <li><Link to ='/'>문의사항</Link></li>
                                    <li><Link to ='/'>리뷰</Link></li>
                                </ul>
                            </div>
                            <div className='right'>
                                <ul className='flexitem main-links'>
                                    <li><Link to ='/'>로그인</Link></li>
                                    <li><Link to ='/'>회원가입</Link></li>
                                    <li><Link to ='/'>마이페이지</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="header-nav">
                <div className="container">
                    <div className="wrpper flexitem">
                        <Link to ='/' className="trigger desktop-hide"><FaAlignLeft /></Link>
                        <div className="left flexitem">
                            <div className="logo"><Link to ='/'><span className="circle"></span>.ECOMES</Link></div>
                            <nav className="mobile-hide">
                                <ul className="flexitem second-links">
                                    <li><Link to ='/'>BEST ITEM</Link></li>
                                    <li><Link to ='/Suit'>SUIT</Link></li>
                                    <li><Link to ='/Outer'>OUTER</Link></li>
                                    <li><Link to ='/Top'>TOP</Link></li>
                                    <li><Link to ='/Knit'>KNIT</Link></li>
                                    <li><Link to ='/Shirt'>SHIRT</Link></li>
                                    <li><Link to ='/Pants'>PANTS</Link></li>
                                    <li><Link to ='/Shoes'>SHOES</Link></li>
                                    <li><Link to ='/Discount'>50%</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right">
                            <ul className="flexitem second-links">
                                <li className="mobile-hide"><a href="#">
                                    <div className="icon-large"><FaRegHeart size='28' /></div>
                                    <div className="fly-item"><span className="item-number">0</span></div>
                                </a></li>
                                <li><a href="#" className="iscart">
                                    <div className="icon-large">
                                        <BsCart3 size='30'/></div>
                                        <div className="fly-item"><span className="item-number">0</span></div>
                                    
                                    <div className="icon-text">
                                        <div className="mini-text">Total</div>
                                        <div className="cart-total">₩0.00</div>
                                    </div>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }
}

export default Header;