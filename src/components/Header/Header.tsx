import React from "react";
import {NavLink} from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

import $api from "../../http/";

const Header: React.FC = () => {
    const [menu, setMenu] = React.useState<any>();
    const [isLoaded, setIsLoaded] = React.useState<any>();

    React.useEffect(() => {
        $api.get("/header").then(({data}) => {
            setMenu(data);
            setIsLoaded(true);
        });
    }, []);

    return (
        <>
            {isLoaded ? (
                <header className="header">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="header-logo">
                                <img
                                    className="header-logo__image"
                                    src={Logo}
                                    alt="IOMP"
                                />
                            </div>
                            <div className="header-menu">
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `header-menu__link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                >
                                    {menu[0].timetableTitle}
                                </NavLink>
                                <NavLink
                                    to="/course"
                                    className={({isActive}) =>
                                        `header-menu__link ${
                                            isActive ? "active" : ""
                                        }`
                                    }
                                >
                                    {menu[0].courseTitle}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </header>
            ) : null}
        </>
    );
};

export default Header;
