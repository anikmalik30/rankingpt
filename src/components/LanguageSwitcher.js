import React from 'react';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        const currentPath = window.location.pathname;
        let newPath = currentPath;

        if (lng === 'en') {
            // Remove language prefix if it exists
            newPath = currentPath.replace(/^\/pt/, '');
        } else if (lng === 'pt') {
            // Add language prefix if it doesn't exist
            if (!currentPath.startsWith('/pt')) {
                newPath = `/pt${currentPath}`;
            }
        }

        i18n.changeLanguage(lng);
        navigate(newPath);
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('pt')}>Português</button>
            {/* Add more buttons for additional languages */}
        </div>
    );
};

export default LanguageSwitcher;