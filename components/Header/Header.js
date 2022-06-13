import React, { useState } from "react";
import Link from "next/link";

// mui components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// icons
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

// our components
import HeaderTop from "./HeaderTop";
import DropDownMenuItem from "./DropDownMenuItem";
import UserOptions from "./UserOptions";
import CartItemsList from "./CartItemsList";
import WishList from "./WishList";
import Notification from "./Notification";
import ResponsiveSubCategory from "./ResponsiveSubCategory";

// css
import styles from "../../styles/Header/Header.module.css";

const Header = () => {
  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);

  const selectValues = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
  ];

  // open search content
  const openSearch = () => {
    let target = document.getElementById("content");
    target.style.height = "100vh";
  };

  // close search content
  const closeSearch = () => {
    let target = document.getElementById("content");
    target.style.height = "0px";
  };

  // open subcategory menu content
  const openSubCategoryHandler = () => {
    let subCategory = document.getElementById("subcategory");
    subCategory.style.height = "300px";
    setToggleMenuIcon(false);
  };

  // subcategory menu content
  const closeSubCategoryHandler = () => {
    let subCategory = document.getElementById("subcategory");
    subCategory.style.height = "0px";
    setToggleMenuIcon(true);
  };

  return (
    <>
      <HeaderTop />
      {/* main header  */}

      <Box className={styles.header_container}>
        <Box className={styles.header}>
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* logo  */}
              <Box
                sx={{
                  flexGrow: { xs: 1, md: 0 },
                  margin: "0px 10px",
                  display: "flex",
                  padding: { xs: "0px", md: "5px" },
                  justifyContent: { xs: "flex-start", md: "center" },
                  alignItems: "center",
                }}
              >
                <Link href="/">
                  <Typography component="div">
                    <StarBorderPurple500Icon
                      fontSize="large"
                      sx={{ cursor: "pointer", marginRight: "7px" }}
                    />{" "}
                  </Typography>
                </Link>

                <Link href="/">
                  <Typography
                    sx={{
                      marginLeft: "5px",
                      marginTop: "0px",
                      cursor: "pointer",
                      fontSize: { xs: "14px", md: "16px", lg: "22px" },
                      display: { xs: "none", sm: "block" },
                    }}
                    component="div"
                    className={styles.eshan_header}
                  >
                    Ehsan Marketing
                  </Typography>
                </Link>
              </Box>

              {/* dropdown button  */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  // justifyContent: "space-between",
                  alignItems: "center",
                  margin: { xs: "0px", md: "4px" },
                  backgroundColor: "var(--white)",
                  padding: { xs: "0px", md: "4px" },
                  borderRadius: "40px",
                  width: { xs: "none", md: "60%" },
                }}
              >
                <Box>
                  <DropDownMenuItem>Continent</DropDownMenuItem>
                </Box>
                <Box className={styles.varticle_divider}></Box>

                <Box>
                  <DropDownMenuItem>Country</DropDownMenuItem>
                </Box>
                <Box className={styles.varticle_divider}></Box>

                <Box>
                  <DropDownMenuItem>State/Division</DropDownMenuItem>
                </Box>
                <Box className={styles.varticle_divider}></Box>

                <Box>
                  <DropDownMenuItem>City/Town</DropDownMenuItem>
                </Box>
                <Box className={styles.varticle_divider}></Box>

                <Box
                  sx={{
                    width: { xs: "5px", md: "80px", lg: "120px" },
                  }}
                >
                  <input
                    type="text"
                    placeholder="location"
                    size="8"
                    className={styles.location_search_on_header}
                  />
                </Box>
                <Box className={styles.varticle_divider}></Box>

                <Box>
                  <input
                    type="text"
                    placeholder="products"
                    size="10"
                    className={styles.location_search_on_header}
                  />
                </Box>
                <Box className={styles.varticle_divider}></Box>

                <Box>
                  <SearchIcon
                    sx={{
                      marginTop: "5px",
                      marginLeft: { xs: "0px", md: "0px" },
                    }}
                  />
                </Box>
              </Box>

              {/* responsive search button  */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
                onClick={openSearch}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <SearchIcon />
                </IconButton>
              </Box>

              {/* wishlist, notification cart and user section  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  cursor: "pointer",
                }}
              >
                {/* wishlist  */}
                <WishList />

                {/* notification  */}
                <Notification />

                {/* cart items list  */}
                <CartItemsList />

                {/* user options  */}
                <UserOptions />
              </Box>

              {/* responsive subcategory menu button  */}
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  {toggleMenuIcon ? (
                    <MenuIcon onClick={openSubCategoryHandler} />
                  ) : (
                    <CloseIcon onClick={closeSubCategoryHandler} />
                  )}
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* responsive subcategory dropdown after click on menu button  */}
        <Box
          sx={{
            width: "100%",
            height: "0px",
            position: "sticky",
            zIndex: "1000",
            top: "50px",
            left: "0",
            color: "white",
            overflowX: "hidden",
            overflowY: "auto",
            transition: "0.5s",
          }}
          id="subcategory"
        >
          <ResponsiveSubCategory />
        </Box>
      </Box>

      {/* responsive dropdown after click on search button */}
      <Box
        sx={{
          width: "100%",
          height: "0px",
          position: "fixed",
          zIndex: "1000",
          top: "0px",
          left: "0",
          backgroundColor: "rgba(0,0,0, 0.9)",
          color: "white",
          overflowX: "hidden",
          transition: "0.5s",
        }}
        id="content"
      >
        {/* close button  */}
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            right: "45px",
            fontSize: "60px",
            cursor: "pointer",
          }}
          onClick={closeSearch}
        >
          <CloseIcon />
        </Box>
        <Container
          sx={{
            position: "relative",
            top: "20%",
            width: "80%",
            textAlign: "center",
          }}
        >
          <Grid container columnSpacing={2}>
            <Grid item xs={6} sx={{ margin: "10px 0px" }}>
              <Select
                id="gender"
                value={selectValues}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                fullWidth
                label="Country"
                size="small"
                placeholder="outlined"
                variant="outlined"
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6} sx={{ margin: "10px 0px" }}>
              <Select
                id="gender"
                value={selectValues}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                fullWidth
                size="small"
                placeholder="outlined"
                variant="outlined"
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6} sx={{ margin: "10px 0px" }}>
              <Select
                id="gender"
                value={selectValues}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                fullWidth
                size="small"
                placeholder="outlined"
                variant="outlined"
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6} sx={{ margin: "10px 0px" }}>
              <Select
                id="gender"
                value={selectValues}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                fullWidth
                size="small"
                placeholder="outlined"
                variant="outlined"
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6} sx={{ margin: "10px 0px" }}>
              <Select
                id="gender"
                value={selectValues}
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                fullWidth
                size="small"
                placeholder="outlined"
                variant="outlined"
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={6} sx={{ margin: "10px 0px" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "var(--primary)", color: "black" }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
