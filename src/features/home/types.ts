export type HomeButtonItem = {
    imgUrl: string;
    title: string;
    link: string;
    type?: 'link' | 'modal';
};

export type HomeButtonsProps = {
    items: HomeButtonItem[];
};
