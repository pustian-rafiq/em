import React, { useState } from 'react'
import AdminDashboardLayout from '../../../components/Dashboard/AdminDashboard/AdminDashboardLayout'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import styles from '../../../components/Dashboard/AdminDashboard/AdminDashboard.module.css'
import TextField from '@mui/material/TextField';
//import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { generateUtilityClass, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { useMutation, gql } from "@apollo/client";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
const Input = styled('input')({
  display: 'none',
});

const ADD_ANIMAL_MUTATION = gql`
mutation(
  $image: String!,
  $category: String!,
  $title: String!,
  $stock: Int!,
  $price: String!,
  $description: [String!]!
  $rating: Float
  $slug: String!
) {
  addAnimal(
    image: $image,
    category: $category,
    title: $title,
    stock: $stock,
    price: $price,
    description: $description,
    rating: $rating,
    slug: $slug,
  ) {
    id
  }
}
`




const RegisterMasterConsumer = ({ countries }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState(countries[12]);
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(genderList[0]);
  const [religion, setReligion] = useState(religionList[0]);
  const [referedBy, setReferedBy] = useState("");
  const [userPhoto, setUserPhoto] = useState("");

  const { register, handleSubmit,formState: { errors }, } = useForm();

  const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION)
  // Image Preview code
  const [imagePreview, setImagePreview] = useState({ file: null });
  const handleChange = (event) => {
    setUserPhoto(event.target.files[0]);
    console.log(event.target.files[0].name)
    setImagePreview({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  const submitHandler = (e) => {
    console.log(e)
    //e.preventDefault()
    // console.log(firstName)
    // console.log(lastName)
    // console.log(country.name.common)
    // console.log(gender.type)
    // console.log(religion.name)
    // console.log(referedBy)
    // console.log(userPhoto)
  }


  return (
    <>
      <Typography sx={{
        fontSize: { xs: '18px', md: '25px', lg: '30px' },
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#6C757D',
        mb: 2
      }} >
        Register a New Master User
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Form start here */}
      <form className={styles.columnSpace} onSubmit={handleSubmit(submitHandler)}>
        <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
          <Grid container spacing={2} rowSpacing={4}>
            <Grid item md={12}>
              <Item style={{ padding: '20px 20px' }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4} >
                    <TextField
                      fullWidth
                      size="small"
                      id="fullWidth"
                      label="First name *"
                      InputLabelProps={{ style: { fontSize: 15 } }}
                      // value={firstName}
                      //onChange={(e)=> setFirstName(e.target.value)}
                      name="firstName"
                      {...register('firstName', {
                        required:true,
                      })}
                    />
                    <Typography sx={{color:'#E75C33'}} >
                    {errors.firstName && errors.firstName.type==="required" && "You must have first name"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}   >
                    <TextField
                      fullWidth
                      size="small"
                      id="fullWidth"
                      label="Last name *"
                    //value={lastName}
                    // onChange={(e)=> setLastName(e.target.value)}
                    name="lastName"
                    {...register('lastName', {
                      required:true,
                      message: "You must have second name!"
                    })}
                    />
                    <Typography sx={{color:'#E75C33'}} >
                    {errors.lastName && errors.lastName.type ==="required" && "You must have second name"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}   >
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={countries}
                      getOptionLabel={(option) => option.name.common}
                      value={country}
                      name="country"
                      {...register('country')}
                      //value={firstName}
                      // value={selectedTeam}
                      // onChange={(_event, newTeam) => {
                      //   setCountry(newTeam);
                      // }}
                      renderInput={(params) => (
                        <TextField {...params} label="Select Country *" placeholder="Select Country *" />
                      )}
                    />

                  </Grid>
                  <Grid item xs={12} sm={6} md={4}  >
                    <TextField
                      fullWidth
                      size="small"
                      id="fullWidth"
                      label="Phone *"
                      name="phone"
                      {...register('phone', {
                        required:true,
                      })}
                    //value={phone}
                    //onChange={(e)=> setPhone(e.target.value)}
                    />
                     <Typography sx={{color:'#E75C33'}} >
                    {errors.phone && errors.phone.type ==="required" && "You must have phone no"}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} >
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={genderList}
                      getOptionLabel={(option) => option.type}
                      //defaultValue={genderList[0]}
                      value={gender}
                      name="gender"
                      {...register('gender')}
                      //value={firstName}
                      //onChange={(e)=> setGender(e.target.value)}
                      renderInput={(params) => (
                        <TextField    {...params} variant="outlined" label="Select Gender *" placeholder="Select Gender *" />
                      )}

                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} >
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      options={religionList}
                      getOptionLabel={(option) => option.name}
                     
                      //value={religion}
                     
                      //value={firstName}
                      // onChange={(e)=> setReligion(e.target.value)}
                      renderInput={(params) => (
                      
                        <TextField  name="religion"  value={religion}
                        {...register('religion')} {...params} label="Select Religion *" placeholder="Select Religion *" />
                        
                      )
              
                    }
                    />
                  </Grid>
                  {/* <Grid item xs={12} sm={6} md={4} >
                    <TextField
                      fullWidth
                      size="small"
                      inputProps={
                        { readOnly: true, }

                      }
                      label="Address1 *"
                      id="fullWidth"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} >
                    <TextField
                      fullWidth
                      size="small"
                      inputProps={
                        { readOnly: true, }
                      }
                      id="fullWidth"
                      label="Address2"
                    />
                  </Grid> */}
                  <Grid item xs={12} sm={6} md={4} >
                    <TextField
                      fullWidth
                      size="small"
                      id="fullWidth"
                      label="Refered by"
                      value={referedBy}
                      name="referedBy"
                      {...register('referedBy')}
                      //value={firstName}
                      onChange={(e) => setReferedBy(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} >
                    {/* <InputLabel htmlFor="component-simple">Profile Photo</InputLabel> */}
                    <div style={{ border: '1px solid #000', height: '140px', width: '120px', marginBottom: '10px' }}>
                      {imagePreview.file ?
                        <Image src={imagePreview.file} width="120" height="140" />
                        :
                        <Image src="/images/profile-picture.jpg" width="120" height="140" />
                      }

                    </div>
                    <Stack  >
                      <label htmlFor="contained-button-file">
                        <Input name="photo"
                      {...register('photo')} accept="image/*" onChange={handleChange} id="contained-button-file" multiple type="file" />
                        <Button component="span" sx={{ width: '160px', background: '#4F5ECE', textTransform: 'capitalize', fontSize: '14px', color: '#ffff', ":hover": { background: '#4F5ECE' } }}>
                          Upload Profile Photo
                        </Button>
                      </label>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} sx={{ textAlign: { xs: 'center' } }} >

                    <Button type='submit' variant="contained" sx={{ textTransform: 'capitalize', fontSize: '15px', width: '100%' }}>
                      Sign Up
                    </Button>

                    <Box sx={{ mt: 1 }}>
                      <Typography sx={{ fontSize: { xs: '12px', md: '15px' } }}>Already have an account ? <Link href="/signin" style={{ background: 'red' }}>Sign In</Link> </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>

        </Box>
      </form>

    </>
  )
}
export default RegisterMasterConsumer

RegisterMasterConsumer.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};


export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all")
  const countries = await res.json()

  return {
    props: {
      countries,
    }
  }
}


const religionList = [
  { name: 'Islam' },
  { name: 'Hinduism' },
  { name: 'Christianity' },
  { name: 'Buddhism' },
  { name: 'Jainism' },
  { name: 'Others' },
];
const genderList = [
  { type: 'Male' },
  { type: 'Female' },
  { type: 'Others' },
];