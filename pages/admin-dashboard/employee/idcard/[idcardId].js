import React, { useState,useRef } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ReactToPrint from 'react-to-print';
import AdminDashboardLayout from '../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));
const Input = styled('input')({
    display: 'none',
});

const PrintIdCard = () => {
    const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

    return (
        <>
         
          {/* <div ref={componentRef}>Idcard list</div> */}

            <Box sx={{ width: '100%' }} style={{ paddingRight: '5px' }} >
            <ReactToPrint
                trigger={() => <Button sx={{ background: '#6563EF', marginRight: '3px' }} variant='contained'>Print</Button>}
                content={() => componentRef.current}
             >
           </ReactToPrint>
                <Grid container spacing={4}>
                    <Grid sm={12} md={2}></Grid>
                    <Grid item xs={12} sm={12} md={8} sx={{ mt: 5,mb:5}}>
                       <Item >
                           <Grid container spacing={0.5} ref={componentRef}>
                               <Grid sm={12} md={5}  sx={{ml:5,mt:5, mb:5}}>
                                    <Box sx={{height:'340px', width:'250px', border:'1px solid #000'}}>
                                        <Box sx={{width:'100%',height:'150px', background:'#191947'}}>
                                             <Box sx={{textAlign:'center',paddingTop:'15px'}}>
                                                  <Image src="/images/rafiq.jpg" height="70" width="70" className='imageDiv' />
                                              </Box>
                                             <Box  sx={{textAlign:'center',height:'60%',marginTop:'14px'}}>
                                                  {/* <Image src="/images/front_header.jpg" height="120" width="220" className='' /> */}
                                                  <Box sx={{backgroundImage:'url(/images/front_header.jpg)',width:'100%', height:'100%',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                                                  <Typography sx={{zIndex:999,marginTop:'-20px',color:'#000',fontSize:'15px',paddingTop:'12px',fontWeight:'bold'}} variant='h4' component="h4">Md. Rafiqul Islam</Typography>
                                                  <Typography sx={{fontSize:'10px',marginTop:'4px',color:'#000', }}>ReactJs Developer</Typography>
                                                  </Box>
                                                 
                                              </Box>
                                                <Box  sx={{px:2}}>
                                                     <Grid container>
                                                       
                                                    <Grid md={12}>
                                                     <Grid container>
                                                         <Grid xs={3} sm={3} md={3}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >ID</Typography>
                                                         </Grid>
                                                         <Grid xs={1} sm={1} md={1}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >:</Typography>
                                                         </Grid>
                                                         <Grid xs={8} sm={8} md={8}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >1000</Typography>
                                                         </Grid>

                                                     </Grid>
                                                     <Grid container>
                                                         <Grid xs={3} sm={3} md={3}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >DOB</Typography>
                                                         </Grid>
                                                         <Grid xs={1} sm={1} md={1}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >:</Typography>
                                                         </Grid>
                                                         <Grid xs={8} sm={8} md={8}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >Dec 11, 1997</Typography>
                                                         </Grid>

                                                     </Grid>
                                                     <Grid container>
                                                         <Grid xs={3} sm={3} md={3}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >MOBILE</Typography>
                                                         </Grid>
                                                         <Grid xs={1} sm={1} md={1}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >:</Typography>
                                                         </Grid>
                                                         <Grid xs={8} sm={8} md={8}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >01991166550</Typography>
                                                         </Grid>

                                                     </Grid>
                                                     <Grid container>
                                                         <Grid xs={3} sm={3} md={3}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >EMAIL</Typography>
                                                         </Grid>
                                                         <Grid xs={1} sm={1} md={1}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >:</Typography>
                                                         </Grid>
                                                         <Grid xs={8} sm={8} md={8}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000', wordWrap:{md:'break-word'}}} >rafiqul.pust.cse@gmail.com</Typography>
                                                         </Grid>
                                                     </Grid>
                                                     <Grid container>
                                                         <Grid xs={3} sm={3} md={3}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >BLOOD</Typography>
                                                         </Grid>
                                                         <Grid xs={1} sm={1} md={1}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >:</Typography>
                                                         </Grid>
                                                         <Grid xs={8} sm={8} md={8}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >A+</Typography>
                                                         </Grid>
                                                     </Grid>
                                                     <Grid container>
                                                         <Grid xs={3} sm={3} md={3}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >JOIN</Typography>
                                                         </Grid>
                                                         <Grid xs={1} sm={1} md={1}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >:</Typography>
                                                         </Grid>
                                                         <Grid xs={8} sm={8} md={8}>
                                                         <Typography sx={{fontSize:'11px',fontWeight:'bold',color:'#000'}} >AUG 7, 2021</Typography>
                                                         </Grid>
                                                     </Grid>
                                                    </Grid>
                                                      </Grid>
                                              </Box> 
                                              <Box sx={{textAlign:'center',paddingTop:'10px'}}>
                                                  <Image src="/images/bar_code-00011.png" height="30" width="150" />
                                              </Box>  
                                        </Box>

                                    </Box>
                               </Grid>
                               <Grid sm={12} md={5}  sx={{mt:5,mb:5,ml:1}}>
                                    <Box sx={{height:'340px', width:'250px', border:'1px solid #000'}}>
                                         <Box sx={{textAlign:'center',paddingTop:'10px'}}>
                                            <Image src="/images/ehsan.png" height="50" width="200" />
                                        </Box>  
                                         <Box sx={{paddingTop:'3px',px:2,display:'inline-block',display:'flex'}}>
                                       <Typography   sx={{width:'8px',height:'55px', background:'#000'}}></Typography>
                                           <Typography  sx={{ml:1,textAlign:'justify',fontSize:'11px',color:'#000'}}>
                                           If this ID Card is available anywhere without its user, please contact us using the following address.
                                            </Typography>
                                        </Box>  
                                        <Box sx={{textAlign:'center',paddingTop:'2px'}}>
                                            <Image src="/images/qr.png" height="50" width="50" />
                                        </Box>  
                                        <Box sx={{textAlign:'center',paddingTop:'1px'}}>
                                            <Image src="/images/sign.jpeg" height="30" width="200px" />
                                            
                                           <Typography  sx={{ml:8,mt:1,fontSize:'11px',color:'#000',borderTop:'1px dashed #000',width:'100px',textAlign:'center'}}>
                                           Signature of CEO
                                            </Typography>
                                        </Box>  
                                        <Box sx={{textAlign:'center',padding:'3px 5px'}}>   
                                           <Typography  sx={{fontSize:'11px',color:'#000'}}>
                                           Hamida Munzil, Holding No. 1565, Jahurul Nagar, Bogura-5800, Bangladesh.
                                            </Typography>
                                           <Typography  sx={{fontSize:'11px',color:'#000'}}>
                                           Email: infoehsanmarketing@gmail.com, Modile: 01769921000
                                            </Typography>
                                           <Typography  sx={{fontSize:'11px',color:'#000'}}>
                                           Website:https://ehsanmarketing.com/
                                            </Typography>
                                        </Box>  
                                    </Box>
                               </Grid>

                           </Grid>
                       </Item>
                    </Grid>
                   
                </Grid>
            </Box>
        </>
    )
}
export default PrintIdCard

PrintIdCard.getLayout = function pageLayout(page) {
    return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

// export async function getStaticPaths() {
//     // console.log(ConsumerData)
//     //const respose = await fetch('https://jsonplaceholder.typicode.com/posts')
//     // const data = await respose.json()
//     const paths = ConsumerData.map(post => {
//         return {
//             params: {
//                 consumerId: `${post.sl}`
//             }
//         }
//     })
 
//     return {

//         paths: [
//             { params: { consumerId: '1' } },
//             { params: { consumerId: '2' } },
//             { params: { consumerId: '3' } },
//         ],
//         fallback: true,

//     }
//}


// export const getStaticProps = async (context) => {
//     const { params } = context
//     const res = await fetch("https://restcountries.com/v3.1/all")
//     const countries = await res.json()
//     //const {consumerId} = params
//     //const respose = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
//     const consumer = ConsumerData.find((e) => e.sl === parseInt(params.consumerId))
//     // const data = response.json()
//     //const allProfiles = JSON.stringify(response)
//     return {
//         props: {

//             countries,
//             consumer,
//             // consumer: response,
//         }
//     }
// }

 