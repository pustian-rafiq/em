import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import styles from '../../../components/Dashboard/AdminDashboard/AdminDashboard.module.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image'
import AdminDashboardLayout from '../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));
const Input = styled('input')({
    display: 'none',
});

const AddEmployee = ({ countries }) => {

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
            <div className="paymentTitle">
                <span>Add New Employee</span>
            </div>
            <Divider sx={{ mb: 5 }} />
            <div >
                <form >
                    <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
                        <Grid container spacing={2} rowSpacing={4}>
                            <Grid item md={12}>
                                <Item style={{ padding: '20px 20px' }}>
                                    <Grid container spacing={3}>
                                        {/* Left Column of the form*/}
                                        <Grid item xs={12}   md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Code*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}   md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Name*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}   md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Fathers name*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}  md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Mothers name*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}    md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Contact no*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}   md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Email*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}   md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Nid*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}   md={4}  >
                                        <Autocomplete
                                                id="size-small-outlined"
                                                size="small"
                                                options={bloodGroup}
                                                getOptionLabel={(option) => option.name}
                                                defaultValue={bloodGroup[0]}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Select Employee *" placeholder="Select employee" />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={12}  md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Joining date*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}   md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Present address*"
                                                id="outlined-textarea"
                                                multiline
                                            />
                                        </Grid>
                                        <Grid item xs={12}   md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Permanent address*"
                                                id="outlined-textarea"
                                                multiline
                                            />
                                        </Grid>
                                        <Grid item xs={12}   md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Designation*"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Gross salary*"
                                            />
                                        </Grid>
                                        <Grid item xs={12}  md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Date of birth"
                                            />
                                        </Grid>
                                        <Grid item xs={12}    md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Id card status*"
                                            />
                                        </Grid>

                                        <Grid item xs={6}   md={2}  >
                                            {/* <InputLabel htmlFor="component-simple">Profile Photo</InputLabel> */}
                                            <div style={{ border: '1px solid #000', height: '100px', width: '100px', marginBottom: '10px' }}>
                                                {imagePreview.file ?
                                                    <Image src={imagePreview.file} width="80" height="80" />
                                                    :
                                                    <Image src="/images/profile-picture.jpg" width="100" height="100" />
                                                }

                                            </div>
                                            <label htmlFor="contained-button-file">
                                                <Input accept="image/*" onChange={handleChange} id="contained-button-file" multiple type="file" />
                                                <Button component="span" sx={{
                                                    background: '#152313', color: 'white', textTransform: 'capitalize',
                                                    ":hover": {
                                                        background: '#42563F'
                                                    },
                                                }} >
                                                    Upload Logo
                                                </Button>
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}   md={2}  >
                                            <Button component="span" sx={{
                                                background: '#20C20C', color: 'white', textTransform: 'capitalize',
                                                ":hover": {
                                                    background: '#0B4A02'
                                                },
                                            }} >
                                                Save
                                           </Button>
                                        </Grid>
                                    </Grid>
                                </Item>
                            </Grid>
                        </Grid>

                    </Box>
                </form>
            </div>
        </>
    )
}
export default AddEmployee;

AddEmployee.getLayout = function pageLayout(page) {
    return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
const bloodGroup = [
    { name: 'A+' },
    { name: 'A-' },
    { name: 'B+' },
    { name: 'B-' },
    { name: 'O+' },
    { name: 'O-' },
    { name: 'AB+' },
    { name: 'AB-' },
];