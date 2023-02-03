import { DashboardOutlined, ProfileOutlined,PlusCircleFilled } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    ProfileOutlined,
    PlusCircleFilled
};

const menuItem = {
    menu: [
        {
            label: 'Voir enchères',
            url: '/home',
            icon: icons.ProfileOutlined
        },
        {
            label: 'Historiques',
            url: '/menu',
            icon: icons.DashboardOutlined
        }
    ]
};

export default menuItem;
