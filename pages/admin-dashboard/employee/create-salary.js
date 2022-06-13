import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdminDashboardLayout from '../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';
import { Autocomplete } from '@mui/material';
// import Moment from 'react-moment';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));
const Input = styled('input')({
    display: 'none',
});

const AddSalary = () => {
    const date = new Date();
    var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthName=months[date.getMonth()];
    const paymentTime = <Moment format='MM Do YYYY, h:mm:ss a'>{date}</Moment>

    return (
        <>
            <div className="paymentTitle">
                <span>Add Employee Salary</span>
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
                                        <Grid item xs={12} md={4}  >
                                            <Autocomplete
                                                id="size-small-outlined"
                                                size="small"
                                                options={employeeList}
                                                getOptionLabel={(option) => option.name}
                                                //defaultValue={employeeList[0]}
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Select Employee *" placeholder="Search by name" />
                                                )}
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Salary month*"
                                                value={monthName}
                                                inputProps={
                                                    { readOnly: true, }
                                                }
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
                                        <Grid item xs={12} md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Increment amount*"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Reduce amount*"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4} >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Total salary*"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Receive amount*"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                id="fullWidth"
                                                label="Remaining amount*"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4}  >
                                            {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Reduce amount description"
                                                multiline
                                                id="outlined-textarea"
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={4
                                        }  >
                           {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                            <TextField
                                                fullWidth
                                                size="small"
                                                value={(paymentTime.props.children).toString()}
                                                inputProps={
                                                    { readOnly: true, }
                                                }
                                                multiline
                                                id="outlined-textarea"
                                               label="Salary payment time"
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
export default AddSalary;

AddSalary.getLayout = function pageLayout(page) {
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