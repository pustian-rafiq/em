import { Box, Container } from "@mui/material";
import contacts from '../../styles/contact.module.css'

const backgroundStyle = {
    backgroundImage: `linear-gradient(to bottom, rgb(4 27 32 / 22%) 0%, #0a7c95 100%), 
     url(./images/contact-banner.jpg)`,
    backgroundSize: "cover",
    height: "40vh",
    backgroundPosition:'center center'
}


const Contact = () => {

    const handlecontact =(e)=>{
        e.preventDefault();
        console.log('design by mim ');
    }

    return (
        <Box >

            <Box sx={backgroundStyle}>
                
            </Box>

            <Container sx={{m:'40px 0px'}}>
                
                
                 <form action="">
               
                    <div>
                        <label className={contacts.input_name}>Name : </label><br/>
                        <input type="text" placeholder="Enter your name" className={contacts.input_style}></input>
                    </div>
                  
                     <div>
                        <label className={contacts.input_name}>Email : </label><br/>
                        <input type="text" 
                            placeholder="Enter your email"
                            className={contacts.input_style}
                        ></input>
                       </div>

                        <div>
                            <label className={contacts.input_name}>subject : </label><br/>
                            <input type="text"
                            placeholder="Your subject"
                            className={contacts.input_style}
                            ></input>
                        </div>     

                         <div>
                            <label className={contacts.input_name}>Image files : </label><br/>
                            <input type="file"
                            placeholder="Your subject"
                            className={contacts.input_style}
                            ></input>
                        </div>
                         
                         <br/>

                        <button className={contacts.submit} onClick={handlecontact}>Submit</button>
                        
                      
                
                 </form>
               
            </Container>
            
        </Box>
    );
};

export default Contact;