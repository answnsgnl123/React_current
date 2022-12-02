import { IconLogin, IconRegistered } from '@tabler/icons';

// constant
const icons = { IconLogin , IconRegistered };


const login = {
    id: 'login',
    title: 'Login',
    type: 'group',
    children: [
        {
            id: 'Login',
            title: 'login',
            type: 'item',
            url: '/auth/login',
            icon: icons.IconLogin,
            breadcrumbs: false
        },
        {
            id: 'Register',
            title: 'register',
            type: 'item',
            url: '/auth/registered',
            icon: icons.IconRegistered,
            breadcrumbs: false
        },
    ]
};

export default login;