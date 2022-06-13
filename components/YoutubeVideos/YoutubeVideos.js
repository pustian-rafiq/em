import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import Image from "next/image";
// import youtube from "./images/videoblock.jpg";
import YouTubeIcon from "@mui/icons-material/YouTube";

import ImageListItemBar from "@mui/material/ImageListItemBar";
import videolist from "../../styles/video.module.css";
import Box from "@mui/material/Box";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: -5,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const Youtubevideo = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          padding: "0px",
        }}
      >
        <Image
          src='/images/videoblock.jpg'
          alt="Picture of the author"
          width={300}
          height={200}
        />

        <ImageListItemBar
          className={videolist.listtitle}
          title="৩৫. সফলতার জন্য করনীয়-"
          sx={{
            backgroundImage: `linear-gradient(to left, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)`,
            ".MuiImageListItemBar-title": {
              color: "#000",
            },
          }}
          actionIcon={
            <YouTubeIcon sx={{ color: "#000", m: "5px 0px 0px 40px" }} />
          }
          actionPosition="left"
        />
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>

        <DialogContent sx={{ margin: "0 auto" }}>
          <iframe
            width="550"
            height="400"
            src="https://www.youtube.com/embed/pDuEd0FNbBw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default Youtubevideo;
