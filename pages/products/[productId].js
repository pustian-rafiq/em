import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// mui components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";

// icons
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ReplayIcon from "@mui/icons-material/Replay";
import FavoriteIcon from "@mui/icons-material/Favorite";

// our components
import PlayProductVideo from "../../components/Products/PlayProductVideo";
import Shop from "../../components/Shop/Shop";
import Products from "../../components/Products/Products";
import ReactImageSlider from "../../components/Products/ReactImageSlider";
import Link from "next/link";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
import Title from "../../components/Header/Title";

// css

const relatedProducts = [
  { id: 1, title: "Home", image: "/images/products/m-1.jpg" },
  { id: 2, title: "About", image: "/images/products/m-2.jpg" },
  { id: 3, title: "Contact", image: "/images/products/m-3.jpeg" },
  { id: 4, title: "Settings", image: "/images/products/m-4.jpeg" },
];

const props = {
  width: 300,
  height: 150,
  zoomWidth: 500,
  img: "/images/products/m-1.jpg",
};

const ProductDetails = ({ data }) => {
  const [productNumber, setProductNumber] = useState(0);

  // product increment decrement handler
  const productIncrementDecrementHandler = (type) => {
    if (type === 1) {
      setProductNumber(productNumber + 1);
    } else {
      if (productNumber > 0) {
        setProductNumber(productNumber - 1);
      } else {
        setProductNumber(0);
      }
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const router = useRouter();
  const { productId } = router.query;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log("user data from static side generation ::", data);

  return (
    <> 
    <Title>Single Product Page</Title>
    <Box
      sx={{
        backgroundColor: "var(--secondary)",
      }}
    >
      <Container>
        {/* products details  */}
        <Grid
          container
          sx={{
            padding: "30px 0px",
          }}
        >
          <Grid item container xs={12}>
            {/* images  */}
            <Grid item xs={12} md={5}>
              <ReactImageSlider />
            </Grid>

            {/* info  */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                backgroundColor: "var(--secondary)",
                padding: "20px",
              }}
            >
              {/* title  */}
              <Typography variant="subtitle1">
                Black Cotton Formal Shirt For Men
              </Typography>
              {/* rating  */}
              <Box>
                <Rating
                  sx={{ fontSize: "15px" }}
                  name="product-feedback"
                  value={4}
                  readOnly
                  precision={0.5}
                  size="small"
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />

                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "15px",
                    paddingRight: "5px",
                    marginRight: "5px",
                    borderRight: "2px solid black",
                  }}
                  component="span"
                >
                  (4.0)
                </Typography>
                <Typography
                  varient="caption"
                  sx={{
                    fontSize: "13px",
                  }}
                  component="span"
                >
                  Total Review 1
                </Typography>
              </Box>
              {/* price  */}
              <Box
                sx={{
                  marginTop: "10px",
                }}
              >
                <Typography variant="h5" component="span">
                  ৳ 350.00
                </Typography>

                <Typography
                  variant="caption"
                  component="span"
                  sx={{ margin: "0px 5px" }}
                >
                  ($ 350.00)
                </Typography>

                <Typography variant="caption" sx={{ margin: "0px 5px" }}>
                  <>
                    <del>5500</del>
                    <Typography
                      variant="caption"
                      component="span"
                      sx={{
                        backgroundColor: "var(--primary)",
                        borderRadius: "10px",
                        marginLeft: "5px",
                        fontSize: "10px",
                        color: "var(--white)",
                        padding: "4px",
                      }}
                    >
                      30% off
                    </Typography>
                  </>
                </Typography>
              </Box>{" "}
              {/* stock status  */}
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "20px", opacity: 0.6 }}
              >
                Available: in stock
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ marginTop: "2px", opacity: 0.6 }}
              >
                Product Origin: BANGLADESH
              </Typography>
              {/* product number  */}
              <Box sx={{ margin: "20px 0px" }}>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                >
                  <Button
                    sx={{
                      border: "1px solid #b9b9b9;",
                      color: "#555",
                      fontSize: "1px",
                    }}
                    onClick={() => productIncrementDecrementHandler(0)}
                  >
                    <RemoveIcon
                      sx={{
                        fontSize: "15px",
                      }}
                    />
                  </Button>
                  <Button sx={{ border: "1px solid  #b9b9b9", color: "#555" }}>
                    {productNumber}
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid  #b9b9b9",
                      color: "#555",
                      fontSize: "10px",
                    }}
                    onClick={() => productIncrementDecrementHandler(1)}
                  >
                    <AddIcon
                      sx={{
                        fontSize: "15px",
                      }}
                    />{" "}
                  </Button>
                </ButtonGroup>
              </Box>
              {/* add to cart  */}
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    margin: "15px 0px",
                    backgroundColor: "var(--primary)",
                    borderRadius: "25px",
                  }}
                  endIcon={<ShoppingCartIcon />}
                >
                  Add To Cart
                </Button>
              </Box>
              {/* social icon list  */}
              <Box>
                <IconButton
                  variant="contained"
                  aria-label="delete"
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#1976d2;",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                    },
                  }}
                >
                  <AddIcon fontSize="inherit" />
                </IconButton>

                <IconButton
                  variant="contained"
                  aria-label="delete"
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#1976d2",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                    },
                  }}
                >
                  <FacebookIcon fontSize="inherit" />
                </IconButton>

                <IconButton
                  variant="contained"
                  aria-label="delete"
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#1976d2",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                    },
                  }}
                >
                  <TwitterIcon fontSize="inherit" />
                </IconButton>

                <IconButton
                  variant="contained"
                  aria-label="delete"
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#1976d2",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                    },
                  }}
                >
                  <MailOutlineIcon fontSize="inherit" />
                </IconButton>

                <IconButton
                  variant="contained"
                  aria-label="delete"
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#1976d2",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                    },
                  }}
                >
                  <WhatsAppIcon fontSize="inherit" />
                </IconButton>

                <IconButton
                  variant="contained"
                  aria-label="delete"
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#1976d2",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                    },
                  }}
                >
                  <FacebookIcon fontSize="inherit" />
                </IconButton>
                <IconButton
                  variant="contained"
                  aria-label="delete"
                  size="small"
                  sx={{
                    color: "white",
                    backgroundColor: "#1976d2",
                    borderRadius: "5px",
                    margin: "5px",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                    },
                  }}
                >
                  <LocalPrintshopIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Grid>

            {/* more info/left sidebar  */}
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                backgroundColor: "white",
                padding: "20px",
              }}
            >
              <Stack>
                {/* DELIVERY OPTIONS   */}
                <Box>
                  <Divider
                    sx={{
                      borderTop: "1px dashed rgba(0, 0, 0, 0.35)",
                      marginBottom: "5px",
                    }}
                  />
                  <Typography variant="subtitle2">DELIVERY OPTIONS</Typography>

                  <MenuItem sx={{ paddingLeft: "0px", fontSize: "12px" }}>
                    <ListItemIcon>
                      <LocationOnIcon fontSize="small" />
                    </ListItemIcon>
                    Uttara sector#10, Dhaka
                  </MenuItem>

                  <MenuItem
                    sx={{
                      paddingLeft: "0px",
                      fontSize: "12px",
                      alignItems: "start",
                    }}
                  >
                    <ListItemIcon>
                      <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <Stack>
                      <Typography variant="caption" component="p">
                        Home Delivery{" "}
                      </Typography>
                      <Typography variant="caption" component="p">
                        3-5 days (Free)
                      </Typography>
                    </Stack>
                  </MenuItem>

                  <MenuItem
                    sx={{
                      paddingLeft: "0px",
                      fontSize: "12px",
                      alignItems: "start",
                    }}
                  >
                    <ListItemIcon>
                      <LocalShippingIcon fontSize="small" />
                    </ListItemIcon>
                    <Stack>
                      <Typography variant="caption" component="p">
                        Express Delivery
                      </Typography>
                      <Typography variant="caption" component="p">
                        2 days (Extra Charge $2)
                      </Typography>
                    </Stack>
                  </MenuItem>

                  <MenuItem sx={{ paddingLeft: "0px", fontSize: "12px" }}>
                    <ListItemIcon>
                      <KeyboardIcon fontSize="small" />
                    </ListItemIcon>
                    Cash on delivery available
                  </MenuItem>
                </Box>

                {/* RETURN and WARRENTY */}
                <Box>
                  <Divider
                    sx={{
                      borderTop: "1px dashed rgba(0, 0, 0, 0.35)",
                      marginBottom: "5px",
                    }}
                  />
                  <Typography variant="subtitle2" component="span">
                    RETURN &amp; WARRENTY
                  </Typography>

                  <MenuItem
                    sx={{
                      paddingLeft: "0px",
                      fontSize: "12px",
                      alignItems: "start",
                    }}
                  >
                    <ListItemIcon>
                      <ReplayIcon fontSize="small" />
                    </ListItemIcon>
                    <Stack>
                      <Typography variant="caption" component="p">
                        7 Days Return
                      </Typography>
                      <Typography variant="caption" component="p">
                        Change of mind is not applicable.
                      </Typography>
                    </Stack>
                  </MenuItem>

                  <MenuItem
                    sx={{
                      paddingLeft: "0px",
                      fontSize: "12px",
                      alignItems: "start",
                    }}
                  >
                    <ListItemIcon>
                      <FavoriteIcon fontSize="small" />
                    </ListItemIcon>
                    24 Seller Warranty
                  </MenuItem>
                </Box>

                {/* SHOP REVIEW  */}
                <Box>
                  <Divider
                    sx={{
                      borderTop: "0.1px dashed rgba(0, 0, 0, 0.35)",
                      marginBottom: "5px",
                    }}
                  />
                  <Typography variant="subtitle2" component="span">
                    SHOP REVIEW
                  </Typography>

                  <Box
                    sx={{
                      border: "0.1px solid #e3e5ed",
                      margin: "5px 0px",
                      padding: "5px",
                    }}
                  >
                    <Typography
                      varient="caption"
                      component="span"
                      sx={{
                        fontSize: "8px",
                      }}
                    >
                      POSITIVE SELLER RATINGS
                    </Typography>
                    <Typography
                      varient="caption"
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      90%
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      border: "0.1px solid #e3e5ed",
                      margin: "5px 0px",
                      padding: "5px",
                    }}
                  >
                    <Typography
                      varient="caption"
                      component="span"
                      sx={{
                        fontSize: "8px",
                      }}
                    >
                      POSITIVE SELLER RATINGS
                    </Typography>
                    <Typography
                      varient="caption"
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      90%
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      border: "0.1px solid #e3e5ed",
                      margin: "5px 0px",
                      padding: "5px",
                    }}
                  >
                    <Typography
                      varient="caption"
                      component="span"
                      sx={{
                        fontSize: "8px",
                      }}
                    >
                      POSITIVE SELLER RATINGS
                    </Typography>
                    <Typography
                      varient="caption"
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      90%
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          {/* product video button  */}
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "var(--secondary)",
              marginTop: "30px",
            }}
          >
            <PlayProductVideo />
          </Grid>
        </Grid>

        {/* shop  */}
        <Grid
          container
          sx={{
            margin: "20px 0px",
          }}
        >
          {/* shop profile  */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea sx={{ width: "100%", height: "200px" }}>
                <CardMedia
                  component="img"
                  image="/images/products/m-2.jpg"
                  alt="green iguana"
                  sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </CardActionArea>

              <CardContent sx={{ padding: "10px" }}>
                <Stack>
                  <Typography variant="caption" component="p">
                    Ehsan Marketing Shop
                  </Typography>
                  <Typography variant="subtitle2">Top Brands</Typography>
                  <Typography variant="caption">
                    100.0% Positive feedback
                  </Typography>
                  <Typography variant="caption">{10} Followers</Typography>
                </Stack>
              </CardContent>
              <Divider />
              <CardActions>
                
                <Link href="/ShoppingCart"> 
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<HomeIcon />}
                  sx={{ backgroundColor: "#666" }}
                >
                  Go To Shop
                </Button>

              </Link>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<AddIcon />}
                  sx={{ backgroundColor: "var(--primary)" }}
                >
                  Follow
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* shop details  */}
          <Grid item xs={12} sm={8} sx={{ backgroundColor: "var(--white)" }}>
            <Shop />
          </Grid>
        </Grid>

        {/* related products  */}
        <Box>
          <Products products={relatedProducts} title="Related Products" />
        </Box>
      </Container>
      <ScrollTop />
    </Box>
    </>
  );
};

// dynamic path for dynamic static site generation
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { productId: "1" } },
      { params: { productId: "2" } },
      { params: { productId: "3" } },
      { params: { productId: "4" } },
      { params: { productId: "5" } },
    ],
    fallback: true,
  };
};

// static site generation
export const getStaticProps = async (context) => {
  const { params } = context;

  // console.log("user dynamic id by getStaticPaths ::", params);

  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${params.productId}`
  );

  // console.log("user data from json placeholder ::", res.data);

  return {
    props: {
      data: res.data,
    },
  };
};

export default ProductDetails;
