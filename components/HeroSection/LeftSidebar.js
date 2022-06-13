import React from "react";
import Tippy from "@tippyjs/react";
// import "tippy.js/animations/shift-toward.css";
import "tippy.js/dist/tippy.css";

// mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

// icons
import Delete from "@mui/icons-material/Delete";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import MenuIcon from "@mui/icons-material/Menu";

// css
import styles from "../../styles/HeroSection/HeroSection.module.css";
import styles2 from "../../styles/HeroSection/megamenu.module.css";

import Megamenu from "./Megamenu";

const sideBarArray = [
  { id: 1, title: "Arts,Crafts,Collectibles" },
  { id: 2, title: "Automobile & Motorcycles" },
  { id: 3, title: "Books & Entertainment And Media" },
  { id: 4, title: "Business And Indudtrials" },
  { id: 5, title: "Computer Office And Security" },
  { id: 6, title: "Consumer Elecronices" },
  { id: 7, title: "Elecronic Devices" },
  { id: 8, title: "Food & Beverage And Groceries" },
  { id: 9, title: "Furnitire & Decor" },
  { id: 10, title: "Gifts,Sports & Toys" },
  { id: 11, title: "Gifts,Sports & Toys" },
  { id: 13, title: "Gifts,Sports & Toys" },
  { id: 14, title: "Gifts,Sports & Toys" },
  { id: 16, title: "Gifts,Sports & Toys" },
];

const LeftSidebar = () => {
  return (
    <>
      <Box className={styles.left_sidebar}>
        <Box textAlign="center">
          <IconButton>
            <MenuIcon />
            <Typography ml={1}>Category</Typography>
          </IconButton>
        </Box>

      
         
              {/* <Box style={{ display: "flex" }}>
                <span className=" megamrnu-1">
                  <Box
                    className="sidebar-title"
                    style={{ margin: "15px 0px 5px 0px", fontSize: "12px" }}
                  >
                    <Typography variant="body1" gutterBottom component="div">
                      Arts And Crafts
                    </Typography>
                  </Box>

                  <Box className="sidebar-content">
                    <p>Art & Crafting Tool</p>
                    <p>Art & Craft Paint</p>
                    <p>Art Fixatives</p>
                    <p>Art Ink</p>
                    <p>Beading & Jewelry Making</p>
                    <p>Buttons & Snaps</p>
                    
                  </Box>
                </span>

                <span className=" megamrnu-2">
                  <Box
                    className="sidebar-title"
                    style={{ margin: "15px 0px 5px 0px" }}
                  >
                    <Typography variant="body1" gutterBottom component="div">
                      Collections
                    </Typography>
                  </Box>

                  <Box className="sidebar-content">
                    <p>Needlework</p>
                    <p>Organization, Storage &amp; Transport</p>
                    <p>Origami Paper</p>
                    <p>Painting, Drawing &amp; Art Supplies</p>
                    <p>Paint Mediums</p>
                    <p>Party Decorations &amp; Supplies</p>
                    <p>Printmaking</p>
                    <p>Scrapbooking &amp; Stamping</p>
                    <p>Scrapbooking &amp; Stamping Kits</p>
                  </Box>
                </span>
              </Box> */}

              {
                sideBarArray.map(sidebar=> 
                      <Box>
              <Grid container >

                {/* <Grid item>
                  <IconButton>
                    <SupervisedUserCircleIcon />
                  </IconButton>
                </Grid> */}

                <Grid item xs={12} md={12}>

              
                   
                 
                  
                  <Typography pt={1} sx={{ fontSize: "14px" , display:'flex',color:'gray'}} className={styles2.megamenuContainer}>
                     <SupervisedUserCircleIcon />
                      <Megamenu  sidebar={sidebar} />
                       <NavigateNextIcon />
                  </Typography>

             
               
              

                </Grid>

                {/* <Grid item>
                  <IconButton>
                    <NavigateNextIcon />
                  </IconButton>
                </Grid> */}


              </Grid>
              <Divider />
            </Box>
                  
                  
                  )
              }
            
        
          
       
      </Box>
    </>
  );
};

export default LeftSidebar;
