import React, {FC} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { drawerWidth } from './index';
import Drawer from '@mui/material/Drawer';
import { Hidden } from '@mui/material';
import AppBarMenu from "./app-bar-menu/AppBarMenu";
import {MainColors} from "../../../../libs/colors/MainColors";
import SideBar from "./side-bar/SideBar";

interface INavBar {
    children: React.ReactNode;
}

const NavBar:FC<INavBar> = ({children}) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {/*<AppBarMenu*/}
            {/*    isAuth={isAuth}*/}
            {/*    openRegistrationModal={openRegistrationModal}*/}
            {/*    openLoginModal={openLoginModal}*/}
            {/*    balance={balance}*/}
            {/*    token={token}*/}
            {/*    handleClose={handleClose}*/}
            {/*    handleLoginClickOpen={handleLoginClickOpen}*/}
            {/*    handleRegistrationClickOpen={handleRegistrationClickOpen}*/}
            {/*    handleOpenUserMenu={handleOpenUserMenu}*/}
            {/*    handleCloseUserMenu={handleCloseUserMenu}*/}
            {/*    handleSubmit={handleSubmit}*/}
            {/*    anchorElUser={anchorElUser}*/}
            {/*/>*/}
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            >
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': {
                            bgcolor: MainColors.GRAY333,
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    <SideBar />
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Hidden mdDown>
                    <Toolbar />
                </Hidden>
                <Hidden mdUp>
                    <Toolbar />
                </Hidden>
                {children}
            </Box>
        </Box>
    );
};

export default NavBar;
