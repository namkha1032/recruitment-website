const test = () => {
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={(event) => { setAnchorElUser(event.currentTarget) }}>
                {isMd ? <Typography variant="subtitle1" sx={{ marginRight: 2 }}>{user ? user.name : ""}</Typography> : null}
                <Tooltip title="Open settings">
                    <IconButton sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src={user ? user.image : ""} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                sx={{
                    mt: '45px'
                }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => { setAnchorElUser(null) }}
            >
                {dropdownNavigate.map((dropdown, index) => {
                    if (role != "candidate" && (index == 1 || index == 2 || index == 3)) {
                        return (
                            <Box key={index} />
                        )
                    }
                    else {
                        return (
                            <Box key={index}>
                                {index == 1 || index == dropdownNavigate.length - 1 ? <Divider /> : null}
                                <MenuItem onClick={() => {
                                    if (index == dropdownNavigate.length - 1) {
                                        console.log("logout")
                                        cleanStore(dispatch)
                                        dispatch({ type: "saga/userLogout" })

                                        navigate("/home")
                                    }
                                    else {
                                        navigate(dropdown.to)
                                    }
                                }}
                                    sx={{
                                        backgroundColor: dropdown.active ? "grey.400" : "transparent",
                                        "&:hover": {
                                            backgroundColor: "grey.400"
                                        }
                                    }}>
                                    <Grid container columns={{ md: 12 }}>
                                        <Grid item md={3}>
                                            {dropdown.icon}
                                        </Grid>
                                        <Grid item md={9} sx={{ paddingRight: 3 }}>
                                            <Typography>{dropdown.name}</Typography>
                                            {/* <Typography>hehe hehehheheheheh ehehehehehehehehehehehe</Typography> */}
                                        </Grid>
                                    </Grid>
                                </MenuItem>
                            </Box>
                        )
                    }
                })}
            </Menu>
        </>
    )
}