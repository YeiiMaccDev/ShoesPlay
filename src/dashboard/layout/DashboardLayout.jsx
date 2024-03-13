
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { DrawerDashboard, DrawerHeader } from '../components/Drawer/DrawerDashboard';
import { Category, Inventory, Person, Wc } from '@mui/icons-material';

// List Menu items
const itemsMenu = [
    { path: 'categories', name: 'Categorías', icon: <Category /> },
    { path: 'genders', name: 'Generos', icon: <Wc /> },
    { path: 'products', name: 'Productos', icon: <Inventory /> },
]
const itemsMenuAdmin = [{ path: 'users', name: 'Usuarios', icon: <Person /> }]

export const DashboardLayout = () => {

    console.log('Layout')
    return (
        <Box sx={{ display: 'flex' }}>
            <DrawerDashboard itemsMenu={itemsMenu} itemsMenuAdmin={itemsMenuAdmin} />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

                <Outlet />
            </Box>

        </Box>
    )
}
