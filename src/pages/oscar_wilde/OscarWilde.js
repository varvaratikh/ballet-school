import './OscarWildeStyle.sass'

import backg from '../../assets/images/oscar_wilde/Group 21.png'

export const OscarWilde = () => {
    return(
        <div className="oscar_container">
            <img className="oscar_backg" src={backg} alt="background photo"/>

            <div>
                <span className="stick_one"></span>
                <span className="stick_two"></span>
            </div>

            <text className="oscar">Oscar Wilde</text>

            <text className="oscar_text">I have simple tastes.<br/>
                I am always satisfied with <span className="the_best">the best.</span></text>
        </div>
    );
}