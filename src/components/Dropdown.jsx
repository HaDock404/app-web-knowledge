import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import '../styles/dropdown.css'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang) => {
        setIsOpen(!isOpen);
        setLanguage(lang);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                {language}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => handleLanguageChange('English')}>English</div>
                    <div className="dropdown-item" onClick={() => handleLanguageChange('Français')}>Français</div>
                </div>
            )}
        </div>
    )
}

export default Dropdown