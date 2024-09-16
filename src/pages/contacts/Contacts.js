import './Contacts.sass'

import insta from '../../assets/images/insta.png'
import youtube from '../../assets/images/youtube.png'

export const Contacts = () => {
    return (
        <div className="contacts_container">

            <text className="connection">Connection</text>
            <text className="contacts">contacts</text>

            <span className="line"></span>

            <p className="number">+7 (843) 234-19-76</p>
            <p className="email">baskerville.ballet@bk.ru</p>
            <p className="waiting">We are waiting for you.</p>

            <div>
                <img className="insta" src={insta} alt="insta_photo"/>
                <img className="youtube" src={youtube} alt="youtube_photo"/>
            </div>

        </div>
    )
}