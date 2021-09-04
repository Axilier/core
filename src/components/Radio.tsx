import React, { ChangeEvent, useState } from 'react';
import { RadioProps } from '../Types';
import styles from '../css/Radio.module.css';

const Radio = ({ options, onChange }: RadioProps): JSX.Element => {
    const [contactMethod, setContactMethod] = useState(options[0]);
    const handleContactChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
        setContactMethod(event.target.value);
    };
    return (
        <form className={styles.contactRadio}>
            {options.map(element => (
                <label
                    key={element}
                    htmlFor={element}
                    className={styles.radioContainer}
                >
                    {element}
                    <input
                        id={element}
                        type='radio'
                        name='radio'
                        value={element}
                        checked={contactMethod === element}
                        onChange={handleContactChange}
                    />
                    <span className={styles.radioCheckmark} />
                </label>
            ))}
        </form>
    );
};

export default Radio;
