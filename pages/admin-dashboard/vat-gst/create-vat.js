import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Autocomplete } from '@mui/material';
// import Moment from 'react-moment';
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

const AddVat = () => {

    return (
        <>
            <div className="paymentTitle">
                <span>Add New Vat</span>
            </div>
            <Divider sx={{ mb: 5 }} />
            <div >
                <form >
                    <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
                        <Grid container spacing={2} rowSpacing={4}>
                            <Grid item md={12}>
                                <Item style={{ padding: '20px 20px' }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={4}  >
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Sector*"
                                            />
                                        </Grid>


                                        <Grid item xs={12} md={4} >
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Percentage amt*"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}  >
                                            <Autocomplete
                                                id="size-small-outlined"
                                                size="small"
                                                options={employeeList}
                                                getOptionLabel={(option) => option.name}
                                                //defaultValue={employeeList[0]}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Select Country *" placeholder="Search by country" />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4} >
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="State"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4} >
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="County"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}  >
 
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="City"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={8}  >
 
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Description"
                                                id="outlined-textarea"
                                                multiline
                                            />
                                        </Grid>
                                       
                                        <Grid item xs={6} md={2}  >
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
export default AddVat;

AddVat.getLayout = function pageLayout(page) {
    return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

const employeeList = [
    { name: 'Md. Rafiqul Islam' },
    { name: 'Md. Mim Islam' },
    { name: 'Md. Ariful Islam' },
    { name: 'Md. Munna' },
    { name: 'Md. Nazmul Hossain' },
    { name: 'Md. Shovo' },
];