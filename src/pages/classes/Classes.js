import './ClassesPage.sass';
import {useState} from "react";
import {PopUp} from "./pop_up/PopUp";

export const Classes = () => {

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const openPopUp = () => {
        setIsPopUpOpen(true);
    }

    const closePopUp = () => {
        setIsPopUpOpen(false);
    }

    return(
        <div className="classes_container">
            <text className="group">
                Group
            </text>
            <text className="classes">
                classes
            </text>
            <text className="individual">
                Individual
            </text>
            <text className="iclasses">
                classes
            </text>

            <span className="rectangle1"></span>
            <span className="rectangle2"></span>

            <span className="line1"></span>
            <span className="line2"></span>

            <text className="text_group">
                Group classes promote team spirit by providing
                students with synchronized movement, coordination
                and interaction, as well as support and inspiration
                in a friendly environment.
            </text>

            <text className="text_indivi">
                Group classes promote team spirit by providing
                students with synchronized movement, coordination
                and interaction, as well as support and inspiration
                in a friendly environment.
            </text>

            <text className="price1">
                $ 58
            </text>

            <text className="price2">
                $ 43
            </text>

            <button onClick={openPopUp} className="buttonm">Sign up for a free lesson</button>

            {isPopUpOpen && <PopUp closePopUp={closePopUp} />}
        </div>
    )
}