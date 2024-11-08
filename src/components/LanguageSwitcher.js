import React, { useEffect } from 'react';
import Select from 'react-select';
import 'flag-icons/css/flag-icons.css';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const languages = [
        { value: 'en', label: <span className="fi fi-gb"></span> },
        { value: 'pt', label: <span className="fi fi-pt"></span> },
        { value: 'es', label: <span className="fi fi-es"></span> },
        { value: 'de', label: <span className="fi fi-de"></span> },
    ];

    const handleLanguageChange = (selectedOption) => {
        const lang = selectedOption.value;
        i18n.changeLanguage(lang);
        if (typeof window !== "undefined") {
            sessionStorage.setItem('siteLanguage', lang);  // Save globally for session persistence
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLanguage = sessionStorage.getItem('siteLanguage');
            if (savedLanguage && savedLanguage !== i18n.language) {
                i18n.changeLanguage(savedLanguage);
            }
        }
    }, [i18n]);



    return (
        <Select
            options={languages}
            onChange={handleLanguageChange}
            defaultValue={languages.find(lang => lang.value === sessionStorage.getItem('siteLanguage'))}
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
};

export default LanguageSwitcher;
