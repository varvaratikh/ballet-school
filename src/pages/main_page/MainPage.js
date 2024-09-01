import React from "react";
import MainPageImg from '../../assets/images/main.png';

import './MainPage.sass';
export const MainPage = () => {
    return (
        <div>
            <img className="main_page_img" src={MainPageImg} alt="image on main page"/>
            <p className="name">Ballet School</p>
            <p className="presents">presents</p>
        </div>
    );
}