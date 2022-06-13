import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Rating, Typography } from '@mui/material';
//swipper js code 

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from 'next/image';
import Chat from '../../components/MessengerChat/Chat';
import Title from '../../components/Header/Title';
import ScrollTop from '../../components/ScrollTop/ScrollTop';




const shopPage = () => {

    return (
      <>    
      <Title>My Shop </Title> 
        <Container sx={{my:'30px',position:'relative'}}>
          <Grid container spacing={2} >
                <Grid item xs={3} >
                  <Box sx={{backgroundColor:'rgba(0, 0, 0, 0.05)',py:'15px'}}>
                      <Box sx={{textAlign:'center'}}> 
                        <Typography variant='body1' sx={{mb:'7px'}}>Ehsan Marketing Shop</Typography>
                        <Image src='/images/logo.png' alt="ehsan logo"  height={90} width={90} />
                        <Typography variant='body2'>Address:</Typography>
                     </Box>

                     <Box sx={{textAlign:'center',mt:'18px'}}>
                         <Typography variant="body1">
                          <Rating name="half-rating" defaultValue={3.5} precision={0.5} size="large" />
                         </Typography>
                     </Box>
                  </Box>
                </Grid>

                <Grid item xs={9} sx={{zIndex:'-55'}}>
                   <Swiper
        spaceBetween={10}
        slidesPerView={1}
         effect={"fade"}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
       
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation,EffectFade]}
      >
        <SwiperSlide
          style={{
            width: "100%",
            height: "350px",
            textAlign: "center",
          }}
        //   className={styles.slider_img}
        >
          <Image
            src="/images/product_slider2/ems5.jpg"
            alt="eshan_marketing_slider"
            layout="fill"
            //  sx={{}}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "350px",
            textAlign: "center",
          }}
          
        >
          <Image
            src="/images/product_slider2/ems3.jpg"
            alt="eshan_marketing_slider"
            layout="fill"
            //  sx={{}}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "350px",
            textAlign: "center",
          }}
      
        >
          <Image
            src="/images/product_slider2/ems2.jpg"
            alt="eshan_marketing_slider"
            layout="fill"
            //  sx={{}}
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "100%",
            height: "350px",
            textAlign: "center",
          }}
        
        >
          <Image
            src="/images/product_slider2/ems1.jpg"
            alt="eshan_marketing_slider"
            layout="fill"
            //  sx={{}}
          />
        </SwiperSlide>
                   </Swiper>

                   {/* <Slider /> */}
                </Grid>
         
      
                </Grid>
                           
        </Container>

        <ScrollTop />
        </>
    );
};

export default shopPage;