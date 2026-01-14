import { MyBank } from '../../models/MyBank';

export interface BankInfoProps {
    myBank: MyBank;
}

export interface BankRemoveModalProps {
    open: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

export interface EditBankAccountButtonProps {
    myBank: MyBank;
}
