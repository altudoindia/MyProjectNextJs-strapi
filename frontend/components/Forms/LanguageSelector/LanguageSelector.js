import Styles from './LanguageSelector.module.scss';
import Section from '../../PageStructure/Container/Section'
import React from "react";

const options = [
    {
        label: "English",
        value: "english",
    },
    {
        label: "French",
        value: "french",
    }
];

const LanguageSelector = ({ languageselector }) => {
    return (
        <Section className='ps-0' replaceclass="true">
                <div className="select-container">
                    <select className="form-select">
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>
        </Section>
    )
}

export default LanguageSelector