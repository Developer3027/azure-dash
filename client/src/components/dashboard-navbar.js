import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Menu, MenuItem, Divider } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Login, Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Settings from "@mui/icons-material/Settings";
import { Bell as BellIcon } from "../icons/bell";
import { UserCircle as UserCircleIcon } from "../icons/user-circle";
import { Users as UsersIcon } from "../icons/users";

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

export const DashboardNavbar = (props) => {
  const { accounts, instance } = useMsal();
  // console.log(accounts)
  const { onSidebarOpen, ...other } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280,
          },
          width: {
            lg: "calc(100% - 280px)",
          },
        }}
        {...other}
      >
        <UnauthenticatedTemplate>
          <Toolbar
            disableGutters
            sx={{
              minHeight: 64,
              left: 0,
              px: 2,
            }}
          >
            <IconButton
              onClick={onSidebarOpen}
              sx={{
                display: {
                  xs: "inline-flex",
                  lg: "none",
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            <Tooltip title="Search">
              <IconButton sx={{ ml: 1 }}>
                <SearchIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Contacts">
              <IconButton sx={{ ml: 1 }}>
                <UsersIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton sx={{ ml: 1 }}>
                <Badge badgeContent={4} color="primary" variant="dot">
                  <BellIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Login">
              <IconButton onClick={() => instance.loginRedirect()} sx={{ ml: 1 }}>
                <Avatar sx={{ height: 32, width: 32 }} color="text" />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </UnauthenticatedTemplate>

        <AuthenticatedTemplate>
          <Toolbar
            disableGutters
            sx={{
              minHeight: 64,
              left: 0,
              px: 2,
            }}
          >
            <IconButton
              onClick={onSidebarOpen}
              sx={{
                display: {
                  xs: "inline-flex",
                  lg: "none",
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
            <Tooltip title="Search">
              <IconButton sx={{ ml: 1 }}>
                <SearchIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Box sx={{ flexGrow: 1 }} />
            <Tooltip title="Contacts">
              <IconButton sx={{ ml: 1 }}>
                <UsersIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton sx={{ ml: 1 }}>
                <Badge badgeContent={4} color="primary" variant="dot">
                  <BellIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={handleClick}
              sx={{
                height: 40,
                width: 40,
                ml: 1,
              }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              src="/static/images/avatars/avatar_1.png"
            >
              <UserCircleIcon fontSize="small" />
            </Avatar>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={() => instance.logoutRedirect()}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AuthenticatedTemplate>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
