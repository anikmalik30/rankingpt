import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.css';

import SvgIcons from './SvgIcon';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const languages = [
        { value: 'en', label: <SvgIcons name="017-united-states" size={48} color="#000" /> },
        { value: 'pt', label: <SvgIcons name="042-portugal" size={48} color="#000" /> },
        { value: 'es', label: <SvgIcons name="031-spain" size={48} color="#000" /> },
        { value: 'de', label: <SvgIcons name="022-germany" size={48} color="#000" /> },
    ];

    const handleLanguageChange = (selectedOption) => {
        const lang = selectedOption.value;
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('siteLanguage', lang); // Save globally for session persistence
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedLanguage = sessionStorage.getItem('siteLanguage');
            if (savedLanguage && savedLanguage !== i18n.language) {
                i18n.changeLanguage(savedLanguage);
                setSelectedLanguage(savedLanguage);
            }
        }
    }, [i18n]);

    return (
        <Select
            options={languages}
            onChange={handleLanguageChange}
            defaultValue={languages.find(lang => lang.value === (typeof window !== 'undefined' ? sessionStorage.getItem('siteLanguage') : 'en'))}
            isSearchable={false}
            styles={{
                control: (provided) => ({
                    ...provided,
                    width: 50, // Icon-only width
                    minHeight: 'auto',
                    border: '1px solid #ccc',
                    boxShadow: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    marginLeft: '20px',
                    // borderRadius: '50%',
                    transition: 'border-color 0.2s ease',
                    '&:hover': {
                        borderColor: '#007bff',
                    },
                }),
                option: (provided, state) => ({
                    ...provided,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                    color: state.isSelected ? '#fff' : '#333',
                    backgroundColor: state.isSelected ? '#007bff' : '#fff',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                }),
                singleValue: (provided) => ({
                    ...provided,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                }),
                dropdownIndicator: (provided) => ({
                    ...provided,
                    display: 'none', // Hide default indicator
                }),
                indicatorSeparator: () => ({
                    display: 'none', // Remove separator line
                }),
            }}
        />
    );
}

export default LanguageSwitcher;