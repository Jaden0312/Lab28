import React from "react";
import { useState } from 'react';
import { FaApple } from 'react-icons/fa';


function Header() {
    let [메뉴제목,메뉴제목변경] = useState(['Mac','ipad','ipone','Watch','TV','Register','Login']);
    return (
        <>
        <div className="logo">
            <FaApple size="20" color="#fff" />
        </div>
        <nav className="nav-menu">
        <ul>
            <li><a href=""></a>{ 메뉴제목[0] }</li>
            <li><a href=""></a>{ 메뉴제목[1] }</li>
            <li><a href=""></a>{ 메뉴제목[2] }</li>
            <li><a href=""></a>{ 메뉴제목[3] }</li>
            <li><a href=""></a>{ 메뉴제목[4] }</li>
            <li><a href=""></a>{ 메뉴제목[5] }</li>
            <li><a href=""></a>{ 메뉴제목[6] }</li>
        </ul>
        </nav>
        </>
    )
}

export default Header;