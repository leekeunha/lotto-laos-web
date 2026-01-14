import { useRef, FormEvent, KeyboardEvent, FocusEvent } from 'react';

export default function useVerificationCodeInput(handleChange: () => void) {
    const inputRefs = useRef(Array(6).fill(null));

    //TODO: 불필요한 코드인데 테스트 후 삭제하기
    console.log(handleChange);
    const handleInput = (e: FormEvent<HTMLInputElement>, index: number) => {
        const { value } = e.currentTarget;
        const isSingleDigit = /^[0-9]$/.test(value);

        if (isSingleDigit) {
            inputRefs.current[index]!.value = value;
            if (value !== '' && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        } else {
            e.currentTarget.value = '';
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            inputRefs.current[index].value = '';
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        e.target.value = '';
    };

    return { inputRefs, handleInput, handleKeyDown, handleFocus };
}
