import React, { FC, memo, useContext } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Chip, Hidden } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import {drawerWidth} from "../index";
import {MainColors} from "../../../../../libs/colors/MainColors";
import {ButtonColors} from "../../../../../libs/colors/ButtonColors";

interface AppBarMenuInt {
    isAuth: boolean;
    openRegistrationModal: boolean;
    openLoginModal: boolean;
    balance: string | null;
    token: string | null;
    handleClose: () => void;
    handleLoginClickOpen: () => void;
    handleRegistrationClickOpen: () => void;
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseUserMenu: () => void;
    handleSubmit: () => void;
    anchorElUser: HTMLElement | null;
}

const AppBarMenu: FC<AppBarMenuInt> = ({
                                           isAuth,
                                           balance,
                                           handleClose,
                                           openRegistrationModal,
                                           openLoginModal,
                                           handleLoginClickOpen,
                                           handleRegistrationClickOpen,
                                           handleOpenUserMenu,
                                           anchorElUser,
                                           handleCloseUserMenu,
                                           handleSubmit,
                                           token,
                                       }) => {

    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                bgcolor: MainColors.GRAY333,
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >

                <Hidden mdDown>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: {
                                md: 'flex-end',
                                sm: 'space-between',
                            },
                            width: '100%',
                        }}
                    >
                        <Box sx={{ flexGrow: 0 }}>


                        </Box>
                    </Box>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default memo(AppBarMenu);
