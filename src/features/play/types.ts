export interface PickNumbersFormValues {
    lines: LottoLine[];
    selectedNumbers: number[];
    editIndex: number | null;
    count: number;
}

export interface LottoLine {
    numbers: number[];
    selectedType: SelectedType;
}

export interface SelectedLineProps {
    editIndex: number | null;
}

export enum SelectedType {
    Semi = 'Semi',
    Auto = 'Auto',
    Manu = 'Manu',
}
