import React from "react";
import './InfoPage.sass';
import Group from '../../assets/images/group.png';
import Statues from '../../assets/images/statues.png'

export const InfoPage = () => {
    return(
        <div className="info_container">
            <div className="rectangle"></div>
            <p className="tu">tu - <br/> sei Arte</p>
            <img className="photo" src={Group}/>
            <p className="text">
                &nbsp;&nbsp;Dancing is an amazing art that unites people worldwide,
                allowing them to convey emotions and feelings through movement and music.
                Ballet, in particular, is a unique and expressive form of dance,
                requiring dedication and hard work but ultimately providing
                unparalleled satisfaction and self-expression.
            </p>
            <img className="statues" src={Statues}/>
            <p className="first">BAL<span className="ffirst">LETTO</span></p>
            <p className="second">BALLET<span className="ssecond">TO</span></p>
            <p className="thirst">BAL<span className="tthirst">LET</span>TO</p>
        </div>
    );
}