// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const table_test = {
    id: 'table_test',
    title: 'table_test',
    type: 'group',
    children: [
        {
            id: 'test',
            title: 'table_test',
            type: 'item',
            url: '/table_test/test',
            icon: icons.Icontable_test,
            breadcrumbs: false
        }
    ]
};

export default table_test;
