import { Autocomplete, Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
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
import AdminDashboardLayout from '../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';

const EditCategory = () => {
  // Image Preview code
  const [imagePreview, setImagePreview] = useState({ file: null });
  const handleChange = (event) => {
    // setPicturePath(event.target.files[0]);
    console.log(event.target.files[0])
    setImagePreview({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };
  return (
    <>
      <form >
     
        <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
          <Grid container spacing={2} columnSpacing={3}>
            <Grid md={12}>
              <Item>
                <Typography
                  sx={{
                    pb: 5,
                    fontWeight: 'bold',
                    fontSize: '20px',
                    textAlign: 'center',
                    color: '#777779'
                  }}
                >
                  Update Category
                </Typography>  
                <Grid container spacing={2} columnSpacing={3}>
                  <Grid md={2}></Grid>
                  <Grid item md={6}>
                    <Grid container spacing={1} rowSpacing={2}>
                      <Grid item xs={12} md={12} >
                        <TextField
                          fullWidth
                          size="small"
                          id="fullWidth"
                          label="Category Name"
                        />
                      </Grid>
                      <Grid item xs={12} md={12} >
                        <TextField
                          fullWidth
                          size="small"
                          id="fullWidth"
                          label="Slug (category-slug-name)"
                        />
                      </Grid>
                      <Grid item xs={12} md={12} >
                        <Autocomplete
                          id="size-small-outlined"
                          size="small"
                          options={religionList}
                          getOptionLabel={(option) => option.name}
                          defaultValue={religionList[0]}
                          renderInput={(params) => (
                            <TextField {...params} label="Vat" placeholder="Vat" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={12} >
                        <TextField
                          fullWidth
                          size="small"
                          id="fullWidth"
                          label="Fontawesome Icon (fa fa-cog)"
                        />
                      </Grid>

                    </Grid>
                  </Grid>
                  <Grid item md={4}>
                    <Grid container spacing={1} rowSpacing={2}>
                      <Grid item xs={12} md={4} >
                        <div style={{ border: '1px solid #000', height: '150px', width: '150px', marginBottom: '10px' }}>
                          {imagePreview.file ?
                            <Image src={imagePreview.file} width="150" height="150" />
                            :
                            <Image src="/images/profile-picture.jpg" width="150" height="150" />
                          }

                        </div>
                        <label htmlFor="contained-button-file">
                          <Input accept="image/*" onChange={handleChange} id="contained-button-file" multiple type="file" />
                          <Button component="span" sx={{
                            background: '#152313', color: 'white', mt: 1, textTransform: 'capitalize', width: '180px',
                            ":hover": {
                              background: '#42563F'
                            },
                          }} >
                            Upload Category Photo
                          </Button>
                        </label>
                      </Grid>

                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2} >  </Grid>
                  <Grid item xs={12} md={4} >
                    <Button component="span" sx={{
                      background: '#20C20C', color: 'white', textTransform: 'capitalize',
                      ":hover": {
                        background: '#0B4A02'
                      },
                    }} >
                      Update
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      
                      










































                      
                      
                      
                      
                      
                      
                      
                       Category
                    </Button>
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

export default EditCategory

EditCategory.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

const religionList = [
  { name: 'Islam' },
  { name: 'Hinduism' },
  { name: 'Christianity' },
  { name: 'Buddhism' },
  { name: 'Jainism' },
  { name: 'Others' },
];