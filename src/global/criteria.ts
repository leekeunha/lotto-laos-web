import { Criteria } from '../features/authentication/types';

export const baseCriteriaList: Criteria[] = [
    {
        validate: (password) => password.length >= 8,
        message: 'At least 8 characters',
    },
    {
        validate: (password) => /(?=.*[A-Z])(?=.*\d)/.test(password),
        message: 'At least 1 capital character & number',
    },
];

export const confirmCriteria: Criteria = {
    validate: (password, confirmPassword) => password.length > 0 && password === confirmPassword,
    message: 'Must match the confirmed password',
};
