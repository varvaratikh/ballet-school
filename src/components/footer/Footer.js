import './Footer.sass';

export const Footer = () => {
    return (
        <div className="dark">
            <div className="footer-left">
                <p className="made">made by <span className="highlight">deffium</span></p>
                <p className="rights">© 2024 All rights reserved</p>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-right">
                <ul>
                    <li><a href="#info-page">Story</a></li>
                    <li><a href="#become-ballerina">First significance</a></li>
                    <li><a href="#choreographers">Choreographers</a></li>
                </ul>
                <ul>
                    <li><a href="#numbers">Awards</a></li>
                    <li><a href="#classes">Record</a></li>
                    <li><a href="#contacts">Contacts</a></li>
                </ul>
            </div>

        </div>
    );
}
