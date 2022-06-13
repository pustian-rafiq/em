import { Box, Breadcrumbs, Button, ButtonGroup, CardMedia, Container, Divider, Grid, IconButton, Paper, Typography } from "@mui/material";

import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan,faReceipt

} from "@fortawesome/free-solid-svg-icons";

import Link from 'next/link'
import Title from "../../components/Header/Title";
import ScrollTop from "../../components/ScrollTop/ScrollTop";

const Cartdetails = () => {

    
    return (
         <Box>

             <Title>Shopping Cart</Title>

             {/* cart details header  */}

             <Container sx={{mt:'20px'}}>
                    <Box textAlign="left">
                        <IconButton >
                            <ListIcon fontSize='large' sx={{color:'var(--primary)'}}  />
                            <Typography ml={1} sx={{fontSize:'22px',color:'#000'}}>Your Shopping Cart</Typography>
                        </IconButton>
                    </Box>
             </Container>

             <Container sx={{my:'30px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Paper  elevation={3} sx={{border:'1px solid transparent',mt:'25px',':hover':{
                            border:'1px solid var(--primary)',
                            transition:'1s'
                        }}}>

                            <Grid container spacing={1}>
                                
                                {/* delete icons  */}
                                <Grid item xs={1}>
                                    {/* <DeleteIcon 
                                        color="error" 
                                       /> */}

                                            <FontAwesomeIcon icon={faTrashCan}  
                                            
                                            style={{
                                            border:'1px solid #d9d9d9',
                                            padding:'8px',
                                            color:'gray',
                                            fontSize:'18px',
                                            borderRadius:'50%',
                                            // marginLeft:'10px'
                                            // textAlign:'center'
                                            margin:'50px auto',
                                            display:'block'
                                            }}/>
                                </Grid>

                                 {/* images */}
                                <Grid item xs={2}>
                                  


                    <CardMedia
                        component="img"
                        height="150"
                        image="/images/products/m-2.jpg"
                        alt="green iguana"
                        sx={{
                            border:'1px solid #d9d9d9',
                            padding:'5px',
                            margin:'10px 0px'
                        }}

                        />
                                
                                </Grid>
                                

                                {/* description  */}
                                <Grid item xs={3} md={4}>
                                    <strong><p style={{marginLeft:'4px',fontSize:'14px'}}>Pangabi</p></strong>
                                    <Breadcrumbs aria-label="breadcrumb"
                                      sx={{
                                          color:'var(--primary)',
                                          fontSize:'12px',
                                          margin:'5px'
                                      }}
                                    >
                                    <Link href="/">
                                      Mens Fashion
                                    </Link>
                                    <Link
                                    href="/"
                                    >
                                      Hot Sale
                                    </Link>

                                     <Link
                                        href="/"
                                      >
                                       Panjabi
                                    </Link>
                                    </Breadcrumbs>
                                    <Divider sx={{my:'7px',width:'80%'}}/>

                                    <Box    
                                    sx={{fontSize:'13px',color:'rgba(0, 0, 0, 0.5)'}}> 
                                    <Typography 
                                    variant="p"
                                    sx={{display:'block',mb:'4px'}}
                                    >Discount: 24% 
                                    </Typography>

                                    <Typography 
                                    variant="p"
                                    sx={{display:'block',mb:'4px'}}
                                    >Price:<del style={{color:'red'}}> Tk.550.00 </del> || Tk.450</Typography>

                                     <Typography 
                                      variant="p"
                                      sx={{display:'block',mb:'4px'}}
                                    >variant:
                                    </Typography>

                                      <Typography 
                                      variant="p"
                                      sx={{display:'block',mb:'4px'}}
                                    >In Stock: 256pcs
                                    </Typography>

                                    <Typography 
                                      variant="p"
                                    >Shop: Super shop BD
                                    </Typography>

                                    </Box>
                                </Grid>
                                 
                                {/* qyantity  */}
                                <Grid item xs={2} md={2} sx={{mt:'40px',ml:'0px'}}>
                                    <ButtonGroup variant="outlined" aria-label="outlined button group" size="small">
                                        <Button><RemoveIcon /></Button>
                                        <Button>1</Button>
                                        <Button><AddIcon/></Button>
                                    </ButtonGroup>
                                </Grid>

                                {/* total amount  */}
                                <Grid item xs={2} sm={3} md={3} sx={{textAlign:'center',mt:'25px'}}>
                                    <Typography variant="body1">Tk. 350.00</Typography>
                                    <Typography variant='body2'><del>Tk. 100.00</del></Typography>
                                    <Typography variant="body1" sx={{color:'green'}}>SAVED: Tk 30.00</Typography>

                                </Grid>                                


                            </Grid>
                        </Paper>
                        
                        <Box sx={{textAlign:'right'}}> 
                         <Button 
                         variant="contained" 
                         sx={{textTransform:'capitalize',background:'gray',
                         marginTop:'8px',
                          ':hover':{
                        backgroundColor:'var(--primary)'}
                        }}
                         startIcon={<ShoppingCartIcon />}>Continue Shopping
                             </Button>
                         </Box> 
                    
                    </Grid>
                    <Grid item xs={3}>
                    <Paper  elevation={3}>
                     <Box>
                         <Box sx={{fontSize:'20px',padding:'14px 0px',mt:'18px'}}>
                              <FontAwesomeIcon icon={faReceipt} style={{
                                  color:"var(--primary)"
                              }} />
                              <Typography variant="p" sx={{ml:'6px'}}>Billing Summary</Typography>
                         </Box>

                         <Box sx={{padding:'5px'}}>
                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                 <Typography variant="body1">
                                        Sub Total :
                                 </Typography>

                                  <Typography variant="body1">
                                    360.00
                                 </Typography>
                            </Box>

                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                 <Typography variant="body1">
                                      Sub Total :
                                 </Typography>

                                  <Typography variant="body1">
                                    360.00
                                 </Typography>
                            </Box>

                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                 <Typography variant="body1">
                                      Shipping :
                                 </Typography>

                                  <Typography variant="body1">
                                    00.00
                                 </Typography>
                            </Box>

                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                 <Typography variant="body1">
                                      Total :
                                 </Typography>

                                  <Typography variant="body1">
                                    460.00
                                 </Typography>
                            </Box>

                            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                 <Typography variant="body1">
                                      Payable Total :
                                 </Typography>

                                  <Typography variant="body1">
                                    360.00
                                 </Typography>
                            </Box>

                           
                         </Box>
                        
                     </Box>
                      <Button variant="contained" 
                      fullWidth='true'
                      sx={{textTransform:'capitalize',backgroundColor:'var(--primary)',my:'20px'}}
                      
                      endIcon={<ChevronRightIcon />}>Process Order
                            </Button>
                    </Paper>

                       
                    </Grid>
                    
                </Grid>
             </Container>
            

         <ScrollTop />
         </Box>
    );
};

export default Cartdetails;