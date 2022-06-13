import React, { useState } from "react";

// mui components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const comments = [
  {
    id: 1,
    name: "Mohimenol Munna",
    comment:
      "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem",
    image: "/images/svg/refericon.svg",
  },
  {
    id: 2,
    name: "Najmul Vai",
    comment:
      "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem",
    image: "/images/svg/refericon.svg",
  },
  {
    id: 3,
    name: "Mim Vai ",
    comment:
      "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem",
    image: "/images/svg/refericon.svg",
  },
  {
    id: 4,
    name: "Shuvo Hujur",
    comment:
      "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem",
    image: "/images/svg/refericon.svg",
  },
  {
    id: 5,
    name: "Arif vai",
    comment:
      "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem",
    image: "/images/svg/refericon.svg",
  },
  {
    id: 6,
    name: "Rafiq",
    comment:
      "lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem",
    image: "/images/svg/refericon.svg",
  },
];

const Reviews = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "var(--primary)",
        margin: "40px 0px",
        padding: "40px 0px",
      }}
      id="mmm"
    >
      <Container>
        {/* create comment button  */}
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            textAlign="center"
            onClick={handleClickOpen}
            sx={{ backgroundColor: "black" }}
          >
            Create Comment
          </Button>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Leave Your Comment</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="comment"
                label="Comment"
                fullWidth
                multiline
                minRows={3}
                variant="outlined"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
          </Dialog>
        </Box>

        {/* swipper  */}
        <Box>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            style={{
              width: "100%",
              position: "relative",
              minHeight: "150px",
              marginTop: "30px",
              textAlign: "center",
            }}
            //for responsive breakpoint

            breakpoints={{
              // when window width is >= 400px
              400: {
                slidesPerView: 1,
              },
              // when window width is >= 600px
              600: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              // when window width is >= 640px
              800: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {comments.map((comment) => (
              <SwiperSlide
                key={comment.id}
                style={{
                  width: "100%",
                  minHeight: "120px",
                  borderRadius: "15px",
                  padding: "20px",
                  backgroundColor: "var(--white)",
                }}
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: -6,
                    zIndex: 100,
                    fontSize: "30px",
                    color: "var(--black)",
                  }}
                />
                <Grid container>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={comment.image}
                      sx={{
                        // width: 80,
                        // height: 80,
                        // border: "3px solid var(--primary)",

                        width: { xs: "40", sm: "50", md: "70", lg: "80" },
                      }}
                    />
                  </Grid>

                  <Grid item xs={8} sx={{ textAlign: "left" }}>
                    <Typography variant="subtitle2">
                      ----- {comment.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ typography: { sm: "caption", xs: "caption" } }}
                    >
                      {comment.comment}
                    </Typography>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;
