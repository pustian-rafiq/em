import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { mainListItems } from "./listItems";
import { useState } from "react";
import { Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import Head from "next/head";
import Customization from "./Customization/Customization";
import Link from "next/link";

const drawerWidth = 240;

function Copyright(props) {
  return (
    <Typography
      color="#98a6ad"
      fontSize={"11px"}
      fontWeight={600}
      textTransform="uppercase"
      align="center"
      {...props}
    >
      {"© "}
      2012 - {new Date().getFullYear()}
      <a href="ehsanmarketing.com" style={{ color: "#6777ef" }}>
        {" "}
        EHSAN MARKETING{" "}
      </a>
      DEVELOPED BY{" "}
      <a href="ehsansoftware.com" style={{ color: "#6777ef" }}>
        {" "}
        EHSAN SOFTWARE{" "}
      </a>
      (A SISTER CONCERN OF{" "}
      <a href="worldehsan.org" style={{ color: "#6777ef" }}>
        {" "}
        EHSAN Group{" "}
      </a>
      ) ALL RIGHTS RESERVED.
    </Typography>
  );
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: "0.7s",
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: "0.7s",
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiListSubheader-root": {
    transition: "0.7s",
  },
  "& .MuiAccordionSummary-root": {
    transition: "0.7s",
  },
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: "0.7s",
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: "0.7s",
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
      "& .MuiListSubheader-root": {
        color: "#45b9e0",
        marginTop: "10px",
        marginBottom: "10px",
        lineHeight: "3px",
        fontSize: "0",
        transition: "0.7s",
      },
      "& .MuiAccordionSummary-root": {
        color: "rgba(255,255,255,0)",
        left: -30,
        transition: "0.7s",
      },
      "& .MuiAccordionSummary-expandIconWrapper": {
        color: "rgba(255,255,255,0)",
        transition: "0.7s",
      },
    }),
  },
  "& .MuiToolbar-root": {
    backgroundColor: "#ffffff",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
  },
}));

const mdTheme = createTheme();

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // =====================================
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // =====================================

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <Head>
          <title>Dashboard</title>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        </Head>
        <CssBaseline />
        <AppBar
          elevation={0}
          position="absolute"
          open={open}
          sx={{
            backgroundColor: "#ffffff",
            color: "#000000",
            boxShadow:
              "rgba(0, 0, 0, 0.04) 0px 4px 0px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
        >
          <Toolbar
            sx={
              {
                // pr: "24px", // keep right padding when drawer closed
              }
            }
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                // marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, ml: "20px" }}
            >
              Dashboard
            </Typography>
            <IconButton
              color="inherit"
              sx={{ mr: 2, display: { xs: "none", md: "block" } }}
            >
              <Badge badgeContent={4} color="success">
                <EmailOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              sx={{ mr: 2, display: { xs: "none", md: "block" } }}
            >
              <Badge badgeContent={4} color="success">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>

            {/* =============================================== */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/broken-image.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* =============================================== */}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{ height: "100vh", overflow: "auto" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              position: "fixed",
              zIndex: 5,
              "&.MuiToolbar-root": {
                paddingRight: 6,
              },
            }}
          >
            <Typography>
              <Link href="/">
                <Typography
                  textTransform={"uppercase"}
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#000000",
                    ":hover": {
                      color: "#6777ef",
                      cursor: "pointer",
                    },
                  }}
                >
                  Ehsan Marketing
                </Typography>
              </Link>
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{ mt: 10 }}>
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* Code to display */}
            {children}
            <Copyright sx={{ pt: 4 }} />
            <Customization />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashboardLayout;
