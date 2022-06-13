import React, { useState } from "react";

// mui components
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

// mui icons
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";

const CartItemsList = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const [cartDrawerStyle, setCartDrawerStyle] = useState(96);

  if (typeof window === "object") {
    window.onscroll = function () {
      cartDrawerHandler();
    };

    function cartDrawerHandler() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setCartDrawerStyle(56);
      } else {
        setCartDrawerStyle(96);
      }
    }
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ padding: "0px" }}>
        <ListItem
          sx={{
            margin: "0px",
            boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)",
            alignItems: "start",
          }}
        >
          <ListItemIcon
            sx={{
              color: "var(--primary)",
              minWidth: "auto",
            }}
          >
            <ShoppingCartIcon sx={{ color: "var(--primary)" }} />
          </ListItemIcon>

          <ListItemText
            sx={{ textAlign: "center", marginTop: "0px" }}
            primary={
              <>
                <Typography variant="subtitle2">Your Shopping Cart</Typography>
                <Typography variant="caption">2 items in Cart</Typography>
              </>
            }
          />

          <ListItemIcon
            sx={{
              minWidth: "auto",
              border: "1px solid rgba(0, 0, 0, 0.6)",
              borderRadius: "5px",
            }}
          >
            <CloseIcon
              sx={{
                transition: "transform 500ms",
                "&:hover": {
                  transform: "rotate(90deg)",
                },
              }}
            />
          </ListItemIcon>
        </ListItem>

        {["Inbox", "Starred", "Send email", "Drafts"].map((item, index) => (
          <ListItem button key={item} className="tm">
            <ListItemIcon sx={{ minWidth: "auto" }}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item} sx={{ marginLeft: "10px" }} />
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <DeleteIcon
                sx={{
                  fontSize: "18px",
                  "&:hover": {
                    color: "salmon",
                  },
                }}
              />
            </ListItemIcon>
          </ListItem>
        ))}

        <Divider />
        <ListItem sx={{ justifyContent: "space-around" }}>
        <Link  href="/ShoppingCart">
          <Button
            sx={{
              fontSize: "10px",
              padding: "5px 10px",
              borderRadius: "15px",
              backgroundColor: "#727b84",
              "& > .MuiButton-startIcon": {
                minWidth: "auto",
                marginRight: "5px !important",
              },
            }}
            className="khelabalok"
            variant="contained"
            startIcon={<VisibilityIcon size="small" />}
            size="small"
          >
            View Cart
          </Button>
        </Link>
          <Button
            sx={{
              fontSize: "10px",
              padding: "5px 10px",
              backgroundColor: "#727b84",
              borderRadius: "15px",
              "& > .MuiButton-startIcon": {
                minWidth: "auto",
                marginRight: "5px !important",
              },
            }}
            variant="contained"
            startIcon={<ShoppingCartIcon size="small" />}
          >
            Checkout
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <Badge
        badgeContent={100}
        max={99}
        color="secondary"
        sx={{
          color: "white",
          margin: { xs: "0px 10px", md: "0px 0px" },
        }}
        onClick={toggleDrawer("right", true)}
      >
        <Tooltip title="Account settings">
          <IconButton size="small" sx={{ ml: 2 }}>
            <AddShoppingCartIcon
              sx={{
                color: "white",
                fontSize: { xs: "20px", md: "20px" },
              }}
            />
          </IconButton>
        </Tooltip>
      </Badge>

      <Drawer
        id="drawer_container"
        variant="persistent"
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{
          ".MuiDrawer-paper": {
            width: "250px",
            height: "auto",
            marginTop: `${cartDrawerStyle}px`,
            boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)",
          },
        }}
      >
        {list("right")}
      </Drawer>
    </Box>
  );
};

export default CartItemsList;
