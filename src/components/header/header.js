import React from 'react';
// import { Link } from "react-scroll";
import Navbar from '../app-burger/app-burger';

import './header.css';

const Header = () => {
    return (
        <div className="header-app">
            <div className="header">
                <div className="logo">
                    <h1>СпецМонтаж<br />Люкс</h1>
                </div>
                
                <div className="data">
                <Navbar />
                    {/* <ul>
                      <Link className="aboutUs"
                            activeClass="active"
                            to="aboutUs"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                           О нас
                       </Link >
                       <Link className="ourWork"
                            activeClass="active"
                            to="ourWork"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                           Наши работы
                       </Link >
                       <Link className="price"
                             activeClass="active"
                             to="price"
                             spy={true}
                             smooth={true}
                             offset={-70}
                             duration={500}>
                          Цена и оплата
                      </Link >
                      <Link className="contacts"
                             activeClass="active"
                             to="contacts"
                             spy={true}
                             smooth={true}
                             offset={-70}
                             duration={500}>
                         Контакты
                       </Link >
                    </ul> */}
                </div>
            </div>
            <div><h1>header</h1></div>
        </div>
    );
};

export default Header;