import React from 'react';
import { ReactComponent as Sun } from '../assets/icon-sun.svg';
import { ReactComponent as Moon } from '../assets/icon-moon.svg';
import './Header.css';

const Header = ({ changeTheme, isLightTheme }) => {
    return (
        <header className="header">
            <div className="header__content">
                <span className="header__logo">devfinder</span>
                <button
                    type="button"
                    className="header__button"
                    onClick={changeTheme}
                >
                    {!isLightTheme && (
                        <span>
                            light <Sun />
                        </span>
                    )}
                    {isLightTheme && (
                        <span>
                            dark <Moon />
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
