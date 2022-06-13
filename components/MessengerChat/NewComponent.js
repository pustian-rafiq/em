import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faComment,
 faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/system";
import { useRef, useState } from "react";

import {
    Avatar, 
    Paper,

    TextareaAutosize,
    Typography } from "@mui/material";
import CloseIcon  from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';


const NewComponent = () => {
    const [messagetext,setMeeess]=useState([])
   
const nameref =useRef()


    const handlesend=()=>{
      
        const meg = nameref.current.value;
        if(meg!=' '){
        setMeeess([...messagetext,meg])
        }
      
        nameref.current.value =" "

    }

    const closebtn =()=>{
        document.getElementById('close').style.display ='none'
         //const mainmessage = document.getElementById('message-main')?.style.display='block'
    }
    return (
        <Box sx={{width:'400px',marginLeft:'870px',position:'fixed',bottom:'20px',zIndex:'9999'}} id="close">
            
            <header style={{backgroundColor:'var(--primary)',height:'60px',display:'flex'}}>

                   <Avatar
                    sx={{ bgcolor: '#fff',color:'gray' ,marginLeft:'15px',marginTop:'10px' }}
                    alt="Remy Sharp"
                    // src="/broken-image.jpg"
                  >
                      M
                  </Avatar>  

                {/* customer header  */}

                  <Box sx={{color:'#fff', marginLeft:'75px'}}>
                      <Typography variant="h6" >Customer Manager</Typography>
                      <Typography variant="body2" >Customer Manager (online)</Typography>
                      
                  </Box> 
 
                {/* close icon  */}

                <CloseIcon  sx={{color:'#fff',marginLeft:'auto',cursor:'pointer',marginTop:'4px',marginRight:'5px'}}
                onClick={closebtn}
                />
                
            </header>

            <Paper >
                <Box sx={{height:'400px',position:'relative',border:'1px solid #dddddd'}}> 

                {/* main message section  */}
             
               <Box sx={{overflow:'auto'}}>
                {
                    messagetext?.map(newmessage=><span>{newmessage} <br/></span>)
                }
              

               </Box>



            



              {/* message bottom section  */}

               <Box sx={{py:'10px',position:'absolute',bottom:'0',borderTop:'1px solid #dddddd',display:'flex',width:'100%',overflow:'auto'}}  >
              
               <TextareaAutosize type="text" placeholder="Type your message here..." id="chat-message-input" ref={nameref}
                style={{outline:'0',border:'0px',paddingLeft:'10px',width:'90%'}}
               />
               {/* <SendIcon /> */}
               <FontAwesomeIcon icon={faPaperPlane} style={{color:'var(--primary)',cursor:'pointer',fontSize:'17px',marginLeft:'15px'}} onClick={handlesend}/>

               </Box> 



               </Box> 
            </Paper>
                    
        </Box>
    );
};

export default NewComponent;