export const renderBankIcon = (bankName: string) => {
    switch (bankName) {
        case 'BCEL':
            return (
                <img
                    src={'/icons/bcel-bank.png'}
                    className="h-10 w-10 text-3xl"
                    alt="clipboard-check"
                />
            );

        default:
            return null;
    }
};
