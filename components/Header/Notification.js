import React from "react";
import Link from "next/link";

// mui components
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";

// mui icons
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Login from "@mui/icons-material/Login";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Notification = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Badge
        badgeContent={6}
        max={999}
        color="secondary"
        sx={{
          color: "white",
          margin: { xs: "0px 5px", md: "0px 2px" },
        }}
      >
        <Tooltip title="All Notifications">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <NotificationsNoneIcon
              sx={{
                color: "white",
                fontSize: { xs: "16px", md: "17px" },
              }}
            />
          </IconButton>
        </Tooltip>
      </Badge>

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
        <MenuItem sx={{ minWidth: "250px !important" }}>
          <Typography variant="caption" sx={{ fontSize: "10px" }}>
            Notifications
          </Typography>
          <Link href="#markallread">
            <Typography
              variant="caption"
              sx={{
                fontSize: "10px",
                marginLeft: "auto",
                color: "var(--primary)",
                "&:hover": { color: "black" },
              }}
            >
              Mark All As Read
            </Typography>
          </Link>
        </MenuItem>
        <Divider sx={{ margin: "0px !important" }} />

        <Link href="/dashboardttt">
          <MenuItem>
            <ListItemIcon sx={{ minWidth: "auto !important" }}>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>

            <Typography
              variant="caption"
              sx={{ fontSize: "13px", flexGrow: 1, margin: "0px 10px" }}
            >
              Dashboard
            </Typography>
            <Avatar
              className="mna"
              sx={{
                width: "25px !important",
                height: "25px !important",
                marginRight: "0px !important",
              }}
            >
              <MoreVertIcon fontSize="10px" />
            </Avatar>
          </MenuItem>
        </Link>

        <MenuItem>
          <ListItemIcon sx={{ minWidth: "auto !important" }}>
            <Settings />
          </ListItemIcon>
          <Typography
            variant="caption"
            sx={{ fontSize: "13px", flexGrow: 1, margin: "0px 10px" }}
          >
            Khelajog Live
          </Typography>
          <Avatar
            className="mna"
            sx={{
              width: "25px !important",
              height: "25px !important",
              marginRight: "0px !important",
            }}
          >
            <MoreVertIcon fontSize="10px" />
          </Avatar>
        </MenuItem>

        <Link href="/register">
          <MenuItem>
            <ListItemIcon sx={{ minWidth: "auto !important" }}>
              <PersonAdd />
            </ListItemIcon>
            <Typography
              variant="caption"
              sx={{ fontSize: "13px", flexGrow: 1, margin: "0px 10px" }}
            >
              Messi Show
            </Typography>
            <Avatar
              className="mna"
              sx={{
                width: "25px !important",
                height: "25px !important",
                marginRight: "0px !important",
              }}
            >
              <MoreVertIcon fontSize="10px" />
            </Avatar>
          </MenuItem>
        </Link>

        <Link href="/login">
          <MenuItem>
            <ListItemIcon sx={{ minWidth: "auto !important" }}>
              <Login />
            </ListItemIcon>
            <Typography
              variant="caption"
              sx={{ fontSize: "13px", flexGrow: 1, margin: "0px 10px" }}
            >
              Friend Request
            </Typography>
            <Avatar
              className="mna"
              sx={{
                width: "25px !important",
                height: "25px !important",
                marginRight: "0px !important",
              }}
            >
              <MoreVertIcon fontSize="10px" />
            </Avatar>
          </MenuItem>
        </Link>

        <Link href="/logout">
          <MenuItem>
            <ListItemIcon sx={{ minWidth: "auto !important" }}>
              <Logout />
            </ListItemIcon>
            <Typography
              variant="caption"
              sx={{ fontSize: "13px", flexGrow: 1, margin: "0px 10px" }}
            >
              T-Sports Live
            </Typography>
            <Avatar
              className="mna"
              sx={{
                width: "25px !important",
                height: "25px !important",
                marginRight: "0px !important",
              }}
            >
              <MoreVertIcon fontSize="10px" />
            </Avatar>
          </MenuItem>
        </Link>

        <Divider sx={{ margin: "0px !important" }} />

        <Link href="#viewall">
          <MenuItem sx={{ justifyContent: "center", color: "var(--primary)" }}>
            <Typography variant="caption" mr={1}>
              {" "}
              View All
            </Typography>
            <ListItemIcon sx={{ minWidth: "auto !important" }}>
              <ArrowForwardIosIcon
                fontSize="small"
                sx={{ fontSize: "10px", color: "var(--primary)" }}
              />
            </ListItemIcon>
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default Notification;
