import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";
import { GiSleevelessJacket } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { PiShirtFoldedLight } from "react-icons/pi";
import { PiTShirtFill } from "react-icons/pi";
import { PiPants } from "react-icons/pi";
import { GiConverseShoe } from "react-icons/gi";
import { GiPearlNecklace } from "react-icons/gi";
import { MdFiberNew } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import MainImg from "./assets/main_2.jpg"
import Best from "../../../src/components/Best/Best";
import NewArrival from "../../components/NewArrivals/NewArrivals";
import Footer from "../../components/Footer/Footer";
// import SearchResult from "../../components/SearchResult/SearchResult";
// import data from "../../components/Assets/All_products";

class Home extends React.Component {

    render() {
        return (
        <>
        <div className="header-main mobile-hide">
            <div className="container">
                <div className="wrapper flexitem">
                    <div className="left">
                        <div className="dpt-cat">
                            <div className="dpt-head">
                                <div className="main-text">모든 상품</div>
                                <div className="mini-text mobile-hide">Total 1059 Products</div>
                                <a href='/' className="dpt-trigger mobile-hide">
                                    <FaAlignRight size="20" color="#fff" />
                                </a>
                            </div>
                            <div className="dpt-menu">
                                <ul className="second-links">
                                    <li className="has-child best">
                                        <Link to ='/'>
                                            <div className="icon-large"><FaAward /></div>
                                            Best Item
                                        </Link>
                                    </li>
                                    <li className="has-child suit">
                                        <Link to ='/Suit'>
                                            <div className="icon-large"><FaSuitcase /></div>
                                            SUIT
                                        </Link>
                                    </li>
                                    <li className="has-child outer">
                                        <Link to ='/Outer'>
                                            <div className="icon-large"><FaSnowflake /></div>
                                            OUTER
                                            <div className="menu icon-small"><FaAngleRight /></div>
                                        </Link>
                                        <ul>
                                            <li><a href="">점퍼</a></li>
                                            <li><a href="">패딩</a></li>
                                            <li><a href="">코트</a></li>
                                            <li><a href="">자켓</a></li>
                                            <li><a href="">집업</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child top">
                                        <Link to ='/Top'>
                                            <div className="icon-large"><IoShirtOutline /></div>
                                            TOP
                                            <div className="menu icon-small"><FaAngleRight /></div>
                                        </Link>
                                        <ul>
                                            <li><a href="">긴팔</a></li>
                                            <li><a href="">가디건</a></li>
                                            <li><a href="">후드.맨투맨</a></li>
                                            <li><a href="">반팔</a></li>
                                            <li><a href="">나시</a></li>
                                            <li><a href="">트레이닝</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child knit">
                                        <Link to ='/Knit'>
                                            <div className="icon-large"><PiTShirtFill /></div>
                                            KNIT
                                        </Link>
                                    </li>
                                    <li className="has-child shirt">
                                        <Link to ='/Shirt'>
                                            <div className="icon-large"><PiShirtFoldedLight /></div>
                                            SHIRT
                                            <div className="menu icon-small"><FaAngleRight /></div>
                                        </Link>
                                        <ul>
                                            <li><a href="">스트라이프</a></li>
                                            <li><a href="">심플/베이직</a></li>
                                            <li><a href="">체크/패턴</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child pants">
                                        <Link to ='/Pants'>
                                            <div className="icon-large"><PiPants /></div>
                                            PANTS
                                            <div className="menu icon-small"><FaAngleRight /></div>
                                        </Link>
                                        <ul>
                                            <li><a href="">와이드</a></li>
                                            <li><a href="">슬랙스</a></li>
                                            <li><a href="">데님</a></li>
                                            <li><a href="">면바지</a></li>
                                            <li><a href="">조거</a></li>
                                            <li><a href="">반바지</a></li>
                                            <li><a href="">트레이닝</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child shoes">
                                        <Link to ='/Shoes'>
                                            <div className="icon-large"><GiConverseShoe /></div>
                                            SHOES
                                            <div className="menu icon-small"><FaAngleRight /></div>
                                        </Link>
                                        <ul>
                                            <li><a href="">스니커즈</a></li>
                                            <li><a href="">로퍼</a></li>
                                            <li><a href="">구두</a></li>
                                            <li><a href="">첼시/워커</a></li>
                                            <li><a href="">샌들/슬리퍼</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child acc">
                                        <Link to ='/Acc'>
                                            <div className="icon-large"><GiPearlNecklace /></div>
                                            ACC
                                            <div className="menu icon-small"><FaAngleRight /></div>
                                        </Link>
                                        <ul>
                                            <li><a href="">넥타이/행거칩</a></li>
                                            <li><a href="">스카프/머플러</a></li>
                                            <li><a href="">팔찌/반지</a></li>
                                            <li><a href="">안경/시계</a></li>
                                            <li><a href="">가방/장갑</a></li>
                                            <li><a href="">모자/벨트</a></li>
                                            <li><a href="">양말/기타</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-child new">
                                        <Link to ='/New'>
                                            <div className="icon-large"><MdFiberNew /></div>
                                            NEW
                                        </Link>
                                    </li>
                                    <li className="has-child 50%">
                                        <Link to ='/Discount'>
                                            <div className="icon-large"><CiDiscount1 /></div>
                                            50%
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="search-box">
                            <form action="" className="search">
                                <span className="icon-large"><IoMdSearch /></span>
                                <input type="search" placeholder="Search for products" onChange={this.handleChange} />
                                <button type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main>
            <div className="slider">
                <div className="container">
                    <div className="wrapper">
                        <div className="myslider">
                            <div className="wrapper">
                                <div className="slide">
                                    <div className="item">
                                        <div className="image object-cover">
                                            <img src={MainImg} alt="picture" />
                                        </div>
                                        <div className="text-content flexcol">
                                            <h4>New Product</h4>
                                            <h2><span>Come and Get It!</span><br></br><span>Brand New!</span></h2>
                                            <button className="primary-button">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Best />
        <NewArrival />
        <Footer />
        </>
    )
    }
}

export default Home;