import React from "react";
import Link from "next/link";

// mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

// icons
import StarIcon from "@mui/icons-material/Star";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideocamIcon from "@mui/icons-material/Videocam";
import FavoriteIcon from "@mui/icons-material/Favorite";

// css
import styles from "../../styles/Products/Products.module.css";

const Product = ({ product }) => {
  // mouse enter handle
  const productOverlayEnterHandler = () => {
    let poc = document.getElementById(`product_overlay_container${product.id}`);

    poc.style.height = "100%";
    poc.style.borderRadius = "0px";
    poc.style.padding = "5px";
 

  };

  // mouse leave handler
  const productOverlayLeaveHandler = () => {
    let poc = document.getElementById(`product_overlay_container${product.id}`);

    poc.style.height = "0%";
    poc.style.borderRadius = "0px 0px 50px 50px";
    poc.style.padding = "0px";
  };

  return (
    <Card className={styles.product_card}>
      {/* image  */}
      <CardActionArea className={styles.card_action_area}>
        <MoreVertIcon
          className={styles.three_dot_icon}
          onMouseEnter={productOverlayEnterHandler}
        />

        <CardMedia
          component="img"
          className={styles.card_action_area__card_media}
          image={product.image}
          alt="panjabi"
        />

        <Box
          className={styles.card_media__overlay}
          id={`product_overlay_container${product.id}`}
          onMouseLeave={productOverlayLeaveHandler}
        >
          <Box>
            <Typography variant="caption">
              Shop: Ehsan Marketing Shop
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption">Country: Bangladesh</Typography>
          </Box>
          <Box>
            <Typography variant="caption">Shop owner: Munna</Typography>
          </Box>
          <Box>
            <Typography variant="caption">Master Consumer</Typography>
          </Box>

          <Box>
            <Typography variant="caption">
              Ehsan Marketing Commission: 1%
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="caption"
              component="span"
              sx={{
                backgroundColor: "var(--primary-deep)",
                borderRadius: "2px",
                color: "var(--white)",
                padding: "2px",
              }}
            >
              $22.50
            </Typography>
            <Typography
              variant="caption"
              component="span"
              sx={{
                backgroundColor: "var(--primary-deep)",
                borderRadius: "2px",
                marginLeft: "5px",
                color: "var(--white)",
                padding: "2px",
              }}
            >
              $5.01
            </Typography>
          </Box>

          <Box
            sx={{
              paddingTop: "0px",
              marginTop: "10px",
            }}
          >
            <Typography
              variant="caption"
              component="span"
              sx={{
                backgroundColor: "var(--primary-deep)",
                borderRadius: "2px",
                color: "var(--white)",
                padding: "2px",
              }}
            >
              <VideocamIcon sx={{ fontSize: "12px", marginRight: "3px" }} />
              Video
            </Typography>

            <Typography
              variant="caption"
              component="span"
              sx={{
                backgroundColor: "var(--primary-deep)",
                borderRadius: "2px",
                marginLeft: "5px",
                color: "var(--white)",
                padding: "2px",
              }}
            >
              {" "}
              <FavoriteIcon sx={{ fontSize: "15px", marginRight: "3px",paddingTop:'5px' }} />
              Wish List
            </Typography>

            <Typography
              variant="caption"
              component="span"
              sx={{
                backgroundColor: "var(--primary-deep)",
                borderRadius: "2px",
                marginLeft: "5px",
                color: "var(--white)",
                padding: "2px",
              }}
            >
              {" "}
              <LiveTvIcon sx={{ fontSize: "12px", marginRight: "3px" }} />
              Live
            </Typography>
          </Box>
        </Box>
      </CardActionArea>

      {/* content  */}
      <CardContent sx={{ padding: "5px 8px" }}>
        {/* header  */}
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography gutterBottom variant="p" sx={{color:'#007bff',fontSize:'16px',m:'7px 0px 4px 0px',display:'block'}}>
              Panjabi
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              variant="caption"
              sx={{
                backgroundColor: "#ffff80",
                padding: "3px 6px",
                borderRadius: "10px",
                color: "green",
                textTransform: "capitalize",
                fontSize: "9px",
              }}
            >
              new
            </Typography>
          </Grid>
        </Grid>

        {/* rating  */}
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            varient="caption"
            component="span"
            sx={{ fontSize: "11px" }}
          >
            (5.0)
          </Typography>
          <Rating
            name="product-feedback"
            value={4}
            readOnly
            precision={0.5}
            size="small"
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
            sx={{color:'#ffc107',fontSize:'17px'}}
          />
        </Box>
        <Divider sx={{ borderBottom: "1px dashed rgba(0, 0, 0, 0.29)",mt:'5px' }} />

        {/* price  */}
        <Box mt={1}>
          <Typography variant="caption">
            <>
              <del style={{color:'gray',fontSize:'14px'}}>&#2547;550.0</del>
              <Typography
                variant="caption"
                component="span"
                sx={{
                  backgroundColor: "var(--primary)",
                  borderRadius: "2px",
                  marginLeft: "5px",
                  color: "var(--white)",
                  padding: "2px",
                }}
              >30% off
              </Typography>
            </>
          </Typography>
        </Box>
        <Box>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle2">
                &#2547;<span style={{marginLeft:'2px'}}>510.20</span> <Typography variant="caption" sx={{color:'gray'}}> (14 piece) </Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">$4.50</Typography>
            </Grid>
          </Grid>
        </Box>

        {/* made in  */}
        <Typography variant="caption" color="text.secondary">
          Made By Bangladesh
        </Typography>
      </CardContent>

      {/* action buttons  */}
      <CardActions sx={{ display: "flex", paddingTop: "0px" }}>
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          size="small"
          sx={{ flexGrow: 1, backgroundColor: "var(--primary)",fontSize:'11px','&:hover':{backgroundColor:'rgb(31 155 197)',transition:'0.5s'} }}
        >Add To Cart
        </Button>

        <Link href={`products/${product.id}`}>
          <Button
            variant="contained"
            startIcon={<VisibilityIcon/>}
            size="small"
            sx={{ backgroundColor: "#8f8f8f",fontSize:'11px','&:hover':{backgroundColor:'rgb(31 155 197)',transition:'0.5s'} }}
          >View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Product;
