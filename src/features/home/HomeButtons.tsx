import { Card } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeButtonsProps } from './types';
import { useUser } from '../authentication/useUser';
import QRCodeReaderModal from '../../ui/QRCodeReaderModal';

const HomeButtons: React.FC<HomeButtonsProps> = ({ items }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleCancel = () => {
        setOpenModal(false);
    };

    const handleButtonClick = (item: any) => {
        if (item.type === 'modal') {
            setOpenModal(true);
        }
    };

    const { user } = useUser();

    return (
        <>
            {items.map((item, index) =>
                item.type === 'modal' ? (
                    <button
                        key={index}
                        className="home-button"
                        onClick={() => handleButtonClick(item)}
                    >
                        <Card className="m-2">
                            <img className="p-3" src={item.imgUrl} alt={item.title} />
                        </Card>
                        <p className="text-xs text-center">{item.title}</p>
                    </button>
                ) : (
                    <Link to={item.link} key={item.title} className="home-button">
                        <Card className="m-2">
                            <img className="p-3" src={item.imgUrl} alt={item.title} />
                        </Card>
                        <p className="text-xs text-center break-words">{item.title}</p>
                    </Link>
                ),
            )}

            <QRCodeReaderModal
                open={openModal}
                onCancel={handleCancel}
                value={user?.memberId || ''}
            />
        </>
    );
};

export default HomeButtons;
