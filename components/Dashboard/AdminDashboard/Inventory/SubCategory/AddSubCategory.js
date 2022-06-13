import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material'
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

const AddCategory = () => {
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
                <Typography
                    sx={{
                        pb: 1,
                        fontWeight: 'bold',
                        fontSize: '20px',
                        textAlign: 'center',
                        color: '#777779'
                    }}
                >
                    Create new sub-category
                </Typography>
                <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
                    <Grid container spacing={2} columnSpacing={3}>
                        <Grid md={2}></Grid>
                        <Grid item md={6}>
                            <Grid container spacing={1} rowSpacing={2}>
                                <Grid item xs={12} md={12} >
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="fullWidth"
                                        label="Sub Category Name"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} >
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="fullWidth"
                                        label="Slug (sub-category-slug-name)"
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
                                    <Autocomplete
                                        id="size-small-outlined"
                                        size="small"
                                        options={categoryList}
                                        getOptionLabel={(option) => option.name}
                                        defaultValue={categoryList[0]}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Select Category" placeholder="Select Category" />
                                        )}
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
                                Save Category
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </>
    )
}

export default AddCategory

const categoryList = [
    { name: 'Mens Fashion' },
    { name: "Women's Fashion" },
    { name: "Consumer Electronics" },
    { name: 'Travel & Ticket' },
    { name: 'Business & Industrial' },
    { name: 'Vehicle service and Accessories' },
];
const religionList = [
    { name: 'Islam' },
    { name: 'Hinduism' },
    { name: 'Christianity' },
    { name: 'Buddhism' },
    { name: 'Jainism' },
    { name: 'Others' },
];

