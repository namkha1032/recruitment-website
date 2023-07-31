import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const open = Boolean(anchorElUser);
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography variant="body1">hehehe</Typography>
                <Typography variant="body1">hehehe</Typography>
                <Typography variant="body1">hehehe</Typography>
                <Typography variant="body1">hehehe</Typography>
                <Typography variant="body1">hehehe</Typography>
                <Typography variant="body1">hehehe</Typography>
                <Typography variant="body1">hehehe</Typography>
                <Typography variant="body1">hehehe</Typography>
                <Typography variant="body1">hehehe</Typography>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={(event) => setAnchorElUser(event.currentTarget)}
                        size="small"
                        sx={{ ml: 2 }}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorElUser}
                id="account-menu"
                open={open}
                onClose={() => setAnchorElUser(null)}
                onClick={() => setAnchorElUser(null)}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => setAnchorElUser(null)}>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={() => setAnchorElUser(null)}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => setAnchorElUser(null)}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={() => setAnchorElUser(null)}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={() => setAnchorElUser(null)}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
