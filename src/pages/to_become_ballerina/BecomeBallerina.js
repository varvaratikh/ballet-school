import React from "react";

import ballerina from '../../assets/images/ballerina.png';

import './BecomeBallerina.sass';

export const BecomeBallerina = () => {
    return (
        <div className="ballerina_container">
            <img className="ballerina" src={ballerina}/>
            <p className="ballerina_text">ballerina</p>
            <text className="text1">
                &nbsp;&nbsp;<span className="span1">T</span><span className="span2">o become a ballerina,</span>
                <br/>
                it is necessary to diligently
                and diligently<br/> engage in ballet from an early age.
                It is <br/>important to attend ballet classes,<br/> participate
                in various competitions and <br/>performances to gain
                experience and skills.<br/>It is also necessary to take care
                of your <br/>health, eat properly and maintain physical fitness.
            </text>

            <text className="text2">
                &nbsp;&nbsp;<span className="span3">H</span>aving a strong will, patience, and willingness to work hard
                is very important, as the profession of a ballerina requires great
                effort and dedication. In addition, it is important to find a good
                teacher who can help develop you as a dancer and help you achieve your goals.
            </text>
        </div>
    );
}