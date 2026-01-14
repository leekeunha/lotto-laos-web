import { PropsWithChildren, ReactNode } from 'react';
import { LineInPayment } from '../pages/types';
import { InputProps, TextareaProps } from '@material-tailwind/react';
import { FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface AsideMenuListProps {
    items: AsideMenuItem[];
    navigatePath: string;
}

export interface BackButtonProps {
    text?: string;
    backTo?: string;
}

export interface CenteredContainerProps {
    children: React.ReactNode;
}
export interface ColumnGridProps {
    cols: number;
    children: React.ReactNode;
}

export interface CustomCheckboxProps {
    name: string;
    label: string | React.ReactNode;
    containerProps?: object;
    onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    rules?: RegisterOptions;
}

export interface DateFormatterProps {
    date?: Date | null;
    className?: string;
    showTime?: boolean;
}

export interface DetailCardRowProps {
    label: string;
    value: React.ReactNode;
    labelClassName?: string;
}

export interface HrProps {
    className?: string;
    thickness?: number;
}

export interface IconWithTitleProps {
    svgFileName: string;
    title: string;
    iconClassName?: string;
    titleClassName?: string;
}
export interface NoDataWithSadIconProps {
    text?: string;
}

export interface ShortPointsWithExclamationIconProps {
    text?: string;
}

export interface MoveHomeButtonProps {
    text?: string;
}
export interface SanitizedHTMLProps {
    html: string;
    className?: string;
}

export interface TableFooterProps {
    children: ReactNode;
}

export interface TicketIconProps {
    color?: string;
    width?: number;
    height?: number;
}

export interface TotalPriceCardProps {
    numberOfLine: number;
}
export interface CopyToClipboardProps {
    value: string;
    className?: string;
}

export type FormRowVerticalProps = {
    children: ReactNode;
};

export interface MenuItemProps {
    url: string;
    label: string;
}

export interface ProtectedRouteProps {
    children: ReactNode;
}

export interface SearchProps {
    searchPath: string;
}

export interface OptionWithIcon {
    value: string;
    label: string;
    svgFileName: string;
}

export interface RHFSelectWithIconsProps {
    items: OptionWithIcon[];
    name: string;
    label: string;
    rules?: RegisterOptions;
}

export interface SectionTitleProps {
    title: string;
}

export type SignInOutButtonProps = {
    className?: string;
};

export type FormTitleProps = {
    title: string;
    subtitle: string;
};

export type OnboardingStepperProps = {
    activeStep: number;
    setActiveStep: (step: number) => void;
};

export type CustomModalProps = {
    open: boolean;
    title?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    cancelText?: string;
    confirmText: string;
    children?: ReactNode;
    showCloseButton?: boolean;
};

export type FormRowProps = {
    label: string;
    error: string;
    children: React.ReactNode;
};

export type Country = {
    name: string;
    language: string;
    flags: {
        svg: string;
    };
};

export interface OpenMenusState {
    isLotteryInfoOpen: boolean;
    isResultOpen: boolean;
    isStore: boolean;
    isAboutDlpe: boolean;
}

export interface MenuItemType {
    key: string;
    label: string | null;
    icon: string | null;
    link: string;
}

export type AccordionItemProps = {
    index: number;
    header: string;
    body: string;
    open: number;
    handleOpen: (value: number) => void;
};

export interface DefaultAccordionProps {
    items: {
        header: string;
        body: string;
    }[];
    defaultOpenIndex?: number;
}

export interface PageTitleProps {
    title?: string;
    subtitle?: string;
    showBackButton?: boolean;
    showMoveHomeButton?: boolean;
    svgFileName?: string;
    backTo?: string;
}

export interface PaginationProps {
    count: number;
}

export interface AsideMenuItem {
    src: string;
    alt: string;
    label: string;
    path: string;
}
export interface AsideProps {
    title?: string;
    menuItems: AsideMenuItem[];
    navigatePath: string;
    footer?: React.ReactNode;
}

export interface Option {
    value: string;
    label: string;
}

export interface FilterProps {
    filterField: string;
    options: Option[];
}

export interface HeaderProps {
    className?: string;
}

export interface TableBodyProps<T> {
    data: T[];
    renderItem: (item: T, index?: number) => ReactNode;
}

export interface NumberMarblesCardsProps {
    //TODO: 여기 바꿔어야 함. auto,semiauto,manual 같은 타입 추가해서.
    lines: LineInPayment[];
    chipColor?: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'gray';
}

export interface OptionType {
    value: string;
    label: string;
}

export interface CustomInputProps extends Omit<InputProps, 'name'> {
    name: string;
    label: string;
    rules?: RegisterOptions;
    containerProps?: React.HTMLProps<HTMLDivElement>;
    children?: ReactNode;
}

export interface EmptyProps {
    resourceName: string;
}

export interface FormatCurrencyProps {
    amount: number;
    currency?: string;
    displayType?: 'symbol' | 'code' | 'name';
    color?: string;
    fontWeight?: string;
}

export interface IconImageProps {
    fileName: string;
    className?: string;
}

export interface NumberMarblesProps {
    numbers: number[];
    highlightNumbers?: number[];
    marbleSize?: number;
    textClass?: string;
}

export type NumberMarbleProps = {
    number: number;
    onClick?: () => void;
    editable?: boolean;
    isHighlighted?: boolean;
    marbleSize?: number;
    textClass?: string;
};

export interface SectionProps {
    title?: string;
    description?: string;
    hasHr?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export interface InformationCardProps {
    className?: string;
    description: string;
}

export interface CustomTextAreaProps extends Omit<TextareaProps, 'name'> {
    name: string;
    label: string;
}

export interface UseQRScannerProps {
    isOpen: boolean;
    onScanSuccess: (scannedText: string) => void;
    onClose: () => void;
}

export interface QRCodeScannerProps {
    isOpen: boolean;
    onClose: () => void;
    onScanSuccess: (scannedText: string) => void;
}

export interface FileUploadProps {
    previewUrl: string | null;
    setFile: (file: File | null) => void;
    setPreviewUrl: (url: string | null) => void;
}

export interface QRCodeReaderModalProps {
    open: boolean;
    onCancel: () => void;
    value: string;
}

export type RHFCheckboxProps<T extends FieldValues> = {
    name: Path<T>;
    label: string | React.ReactNode;
    containerProps?: object;
};

export interface PageContainerProps extends PropsWithChildren {
    className?: string;
}
