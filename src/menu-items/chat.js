// assets
import { IconBrandTwitch } from '@tabler/icons';

// constant
const icons = { IconBrandTwitch };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const chat = {
    id: 'chat',
    title: '채팅',
    type: 'group',
    children: [
        {
            id: 'chat',
            title: 'chat',
            type: 'item',
            url: '/chat',
            icon: icons.IconBrandTwitch,
            breadcrumbs: false
        }
    ]
};

export default chat;