import './PopUpStyle.sass'

export const PopUp = ({ closePopUp }) => {
    return (
        <div className="popup_container">
            <div className="popup_content">
                <h2 className="information">Add information</h2>
                <input type="text" className="input1" placeholder="class date"/>
                <input type="text" className="input2" placeholder="telephone"/>
                <button className="close_button" onClick={closePopUp}>Sign up</button>
            </div>
        </div>
    );
};