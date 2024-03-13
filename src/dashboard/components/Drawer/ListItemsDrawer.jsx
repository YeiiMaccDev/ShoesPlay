import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

export const ListItemsDrawer = ({ items, handleDrawerClose }) => {
    return (
        <List>
            {items.map((item, index) => (

                <NavLink key={index}
                    to={item.path}
                    className={({ isActive }) => `${isActive ? 'DrawerNavLink_active' : 'DrawerNavLink'}`}
                >

                    <ListItem sx={{ display: 'block' }} >


                        <ListItemButton
                            onClick={handleDrawerClose}
                            sx={{
                                minHeight: 40,
                                justifyContent: open ? 'initial' : 'center',
                                px: .1,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'inherit',
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>

                            <ListItemText
                                primary={item.name}
                                sx={{ opacity: open ? 1 : 0, display: open ? 'inline-block' : 'none' }} />

                        </ListItemButton>

                    </ListItem>
                </NavLink>
            ))
            }
        </List >
    )
};