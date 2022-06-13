import React from "react";

// mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

// our components
import LeftSidebar from "./LeftSidebar";
import Slider from "./Slider";
import RightSidebar from "./RightSidebar";

// css
import styles from "../../styles/HeroSection/HeroSection.module.css";

const HeroSection = () => {
  return (
    <>
      <Box>
        <Container>
          {/* test slogan  */}
          <Box className={styles.right_to_Left_slogan}>
            <Typography className={styles.text} variant="caption">
              We do not have an official page on Facebook (ফেসবুকে আমাদের
              অফিসিয়াল কোন পেইজ নেই). ***Keep everyone subscribing to our
              YouTube channel to get updated information (আপডেট তথ্য পেতে সবাই
              আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করে রাখুন){" "}
            </Typography>
          </Box>

          {/* hero section  */}
          <Grid container className={styles.hero_content}>
            <Grid item xs={12} sm={6} md={3} lg={3} sx={{
              display:{xs:'none',md:'block'}
            }}>
              <LeftSidebar />
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} sx={{
              order:{sm:1,xs:1,md:2}
            }}>
              <Slider />
            </Grid>

            <Grid item xs={12} sm={6} md={2} lg={2} sx={{
              order:{sm:3,xs:3,md:3}
            }}>
              <RightSidebar />
            </Grid>

            {/* <Grid item sx={{display:{sm:'block',md:'none'}}} >
              <RightSidebar />
            </Grid> */}

          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
