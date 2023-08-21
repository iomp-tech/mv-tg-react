import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <span className="footer__info">
                        ИП Кудряшов А. А.
                    </span>
                    <span className="footer__info">ИНН 720410077658</span>

                    {/* <Link to="/policy" className="footer__link">
                        Сведения об образовательной организации
                    </Link> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
