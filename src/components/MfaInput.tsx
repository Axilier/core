import React, {
    ClipboardEvent,
    createRef,
    KeyboardEvent,
    useCallback,
    useEffect,
    useState,
} from 'react';
import Layout from './Layout';
import styles from '../css/MfaInput.module.css';
import { MfaInputProps } from '../Types';

const MfaInput = ({
    id,
    value,
    nextFocusElementId,
    onChange,
}: MfaInputProps): JSX.Element => {
    const [code, setCode] = useState<Array<never | string>>(
        value ? value.split('') : [],
    );
    const onChangeCallback = useCallback(onChange, [onChange]);
    const inputs = Array.from(Array(6)).map(() =>
        createRef<HTMLInputElement>(),
    );

    useEffect(() => {
        setCode(value ? value.split('') : []);
        onChangeCallback(value || '');
    }, [value, onChangeCallback]);

    const changeCharacter = (index: number, newValue: string) => {
        const newCode = [...code];
        newCode[index] = newValue;
        setCode(newCode);
        onChange(newCode.join(''));
    };

    const isNum = (inputValue: string) =>
        Number.isNaN(Number(inputValue)) ? '' : inputValue;

    const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
        if (event.clipboardData) {
            const pastedContent = event.clipboardData.getData('Text').split('');
            const numbersChecked = pastedContent.map(element =>
                Number.isNaN(Number(element)) ? '' : element,
            );
            setCode(numbersChecked);
            onChange(numbersChecked.join(''));
            if (nextFocusElementId) {
                const nextElement = document.getElementById(nextFocusElementId);
                if (!nextElement) {
                    throw new Error('Next Focus Element not found');
                }
                nextElement.focus();
            }
        }
    };

    const onKeyDown = (e: KeyboardEvent, index: number) => {
        switch (e.key) {
            case 'Backspace':
            case 'Delete':
                if (index !== 0) {
                    inputs[index - 1].current?.focus();
                }
                changeCharacter(index, '');
                break;
            case 'ArrowLeft':
                inputs[index - 1].current?.focus();
                break;
            case 'ArrowRight':
                inputs[index + 1].current?.focus();
                break;
            default: {
                const newValue = isNum(e.key);
                if (newValue === '') return;
                changeCharacter(index, newValue);
                if (index < 5) {
                    inputs[index + 1].current?.focus();
                } else if (nextFocusElementId) {
                    const nextElement = document.getElementById(
                        nextFocusElementId,
                    );
                    if (!nextElement) {
                        throw new Error('Next Focus Element not found');
                    }
                    nextElement.focus();
                }
            }
        }
    };

    return (
        <Layout className={styles.mfaInput} orientation={'row'}>
            {Array.from(Array(6)).map((element, index) => (
                <input
                    ref={inputs[index]}
                    onKeyDown={e => onKeyDown(e, index)}
                    onPaste={event => onPaste(event)}
                    value={code[index] || ''}
                    maxLength={1}
                    id={`${id}-mfa-input-${index}`}
                    /* eslint-disable-next-line react/no-array-index-key */
                    key={`${id}-mfa-input-${index}`}
                    onChange={() => null}
                />
            ))}
        </Layout>
    );
};

export default MfaInput;
