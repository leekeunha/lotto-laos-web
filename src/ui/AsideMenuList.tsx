import { List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { AsideMenuListProps } from './types';

export default function AsideMenuList({ items, navigatePath }: AsideMenuListProps) {
    const navigate = useNavigate();
    const handleMenuClick = (path: string) => {
        navigate(`${navigatePath}/${path}`);
    };
    return (
        <List>
            {items.map((item, index) => (
                <ListItem key={index} onClick={() => handleMenuClick(item.path)}>
                    <ListItemPrefix>
                        <img src={item.src} className="w-6 h-6" alt={item.alt} />
                    </ListItemPrefix>
                    <Typography variant="h5">{item.label}</Typography>
                </ListItem>
            ))}
        </List>
    );
}
