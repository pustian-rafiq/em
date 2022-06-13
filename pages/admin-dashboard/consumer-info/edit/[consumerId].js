import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import styles from '../../../../components/Dashboard/AdminDashboard/AdminDashboard.module.css'
import TextField from '@mui/material/TextField';
//import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router'
import AdminDashboardLayout from '../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';
import { ConsumerData } from '../../../../utility/ConsumerData';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));
const Input = styled('input')({
    display: 'none',
});

const EditConsumerDetails = ({ countries }) => {
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
                <span>Edit Consumers Informations:</span>
            </div>
            <Divider sx={{ mb: 5 }} />
            <div >
                <form className={styles.columnSpace}>
                    <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
                        <Grid container spacing={2} rowSpacing={4}>
                            <Grid item md={12}>
                                <Item style={{ padding: '20px 20px' }}>
                                    <div className={styles.sectionTitle}>
                                        <span>Personal Informations</span>
                                    </div>
                                    <Grid container spacing={1}>
                                        {/* Left Column of the form*/}
                                        <Grid item xs={12} md={6} >
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="First name *"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Phone *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Phone *"
                                                />
                                            </Grid>

                                            <Grid item xs={12} md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Address1 *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }

                                                    }
                                                    label="Date of birth"
                                                    id="fullWidth"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12} className={styles.rowSpace}>
                                                <Autocomplete
                                                    id="size-small-outlined"
                                                    size="small"
                                                    options={genderList}
                                                    getOptionLabel={(option) => option.type}
                                                    defaultValue={genderList[0]}
                                                    renderInput={(params) => (
                                                        <TextField    {...params} variant="outlined" label="Gender *" placeholder="Gender *" />
                                                    )}

                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Address1 *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }

                                                    }
                                                    label="Address1*"
                                                    id="fullWidth"
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12} className={styles.rowSpace}>
                                                <Autocomplete
                                                    id="size-small-outlined"
                                                    size="small"
                                                    options={countries}
                                                    getOptionLabel={(option) => option.name.common}
                                                    defaultValue={countries[12]}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Select Country *" placeholder="Select Country *" />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Profile Photo</InputLabel> */}
                                                <div style={{ border: '1px solid #000', height: '160px', width: '160px', marginBottom: '10px' }}>
                                                    {imagePreview.file ?
                                                        <Image src={imagePreview.file} width="160" height="160" />
                                                        :
                                                        <Image src="/images/profile-picture.jpg" width="160" height="160" />
                                                    }

                                                </div>
                                                <Stack>
                                                    <label htmlFor="contained-button-file">
                                                        <Input accept="image/*" onChange={handleChange} id="contained-button-file" multiple type="file" />
                                                        <Button component="span" className={styles.profileBtn} >
                                                            Upload Profile Photo
                                                        </Button>
                                                    </label>
                                                </Stack>

                                            </Grid>

                                        </Grid>

                                        {/* Right Column of the form*/}
                                        <Grid item xs={12} md={6} >

                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Last name*"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Occupation"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Nid number"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                <Autocomplete
                                                    id="size-small-outlined"
                                                    size="small"
                                                    options={religionList}
                                                    getOptionLabel={(option) => option.name}
                                                    defaultValue={religionList[0]}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Religion" placeholder="Religion" />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Address2*"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Spouse Name"
                                                />
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Item>

                                {/* Parents Informations */}

                                <Item style={{ padding: '20px 20px', marginTop: '20px' }}>
                                    <div className={styles.sectionTitle}>
                                        <span>Parents Informations</span>
                                    </div>
                                    <Grid container spacing={1}>
                                        {/* Left Column of the form*/}
                                        <Grid item xs={12} md={6} >
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Father name"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Phone *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Mother Name"
                                                />
                                            </Grid>

                                        </Grid>

                                        {/* Right Column of the form*/}
                                        <Grid item xs={12} md={6} >

                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Father occupation"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Mother occupation"
                                                />
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Item>

                                {/* Biodata */}

                                <Item style={{ padding: '20px 20px', marginTop: '20px' }}>
                                    <div className={styles.sectionTitle}>
                                        <span>Bio Informations</span>
                                    </div>
                                    <Grid container spacing={1}>
                                        {/* Left Column of the form*/}
                                        <Grid item xs={12} md={6} >
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Bio"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Phone *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Height"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Phone *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Hobby"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Phone *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Languages"
                                                />
                                            </Grid>

                                            <Grid item xs={12} md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Address1 *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }

                                                    }
                                                    label="About family members"
                                                    id="fullWidth"
                                                />
                                            </Grid>
                                        </Grid>

                                        {/* Right Column of the form*/}
                                        <Grid item xs={12} md={6} >

                                            <Grid item md={12} className={styles.rowSpace}>
                                                <Autocomplete
                                                    id="size-small-outlined"
                                                    size="small"
                                                    options={bloodGroup}
                                                    getOptionLabel={(option) => option.name}
                                                    defaultValue={bloodGroup[0]}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Blood Group" placeholder="Select Blood Group" />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Weight"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                <Autocomplete
                                                    id="size-small-outlined"
                                                    size="small"
                                                    options={maritalStatus}
                                                    getOptionLabel={(option) => option.status}
                                                    defaultValue={maritalStatus[0]}
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Marital Status" placeholder="Select Marital Status" />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="About tour"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Designation and service organization"
                                                />
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Item>
                                {/* Educational Informations */}

                                <Item style={{ padding: '20px 20px', marginTop: '20px' }}>
                                    <div className={styles.sectionTitle}>
                                        <span>Educational Informations</span>
                                    </div>
                                    <Grid container spacing={1}>
                                        {/* Left Column of the form*/}
                                        <Grid item xs={12} md={6} >
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">First name *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Primary name and session"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Phone *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="College name and session"
                                                />
                                            </Grid>

                                            <Grid item xs={12} md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Address1 *</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }

                                                    }
                                                    label="Psd name and session"
                                                    id="fullWidth"
                                                />
                                            </Grid>
                                        </Grid>

                                        {/* Right Column of the form*/}
                                        <Grid item xs={12} md={6} >

                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Highschool name and session"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="University name and session"
                                                />
                                            </Grid>
                                            <Grid item md={12} className={styles.rowSpace}>
                                                {/* <InputLabel htmlFor="component-simple">Refered by</InputLabel> */}
                                                <TextField
                                                    fullWidth
                                                    size="small"
                                                    inputProps={
                                                        { readOnly: true, }
                                                    }
                                                    id="fullWidth"
                                                    label="Others name and session"
                                                />
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item md={4} className={styles.rowSpace}></Grid>
                                        <Grid item md={4} className={styles.rowSpace}>
                                            <Link href='./update'>
                                                <Button variant="contained" className={styles.saveButton}>
                                                    Update Consumer Informations
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12} md={4} className={styles.rowSpace}></Grid>
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
export default EditConsumerDetails

EditConsumerDetails.getLayout = function pageLayout(page) {
    return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

export async function getStaticPaths() {
    // console.log(ConsumerData)
    //const respose = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await respose.json()
    const paths = ConsumerData.map(post => {
        return {
            params: {
                consumerId: `${post.sl}`
            }
        }
    })
    // const paths = ConsumerData.map( post => {
    //   return {
    //     params: {
    //         consumerId: `${post.sl}`
    //     }
    //   }
    // })
    return {

        paths: [
            { params: { consumerId: '1' } },
            { params: { consumerId: '2' } },
            { params: { consumerId: '3' } },
        ],
        fallback: true,

    }
}


export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch("https://restcountries.com/v3.1/all")
    const countries = await res.json()
    //const {consumerId} = params
    //const respose = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const consumer = ConsumerData.find((e) => e.sl === parseInt(params.consumerId))
    // const data = response.json()
    //const allProfiles = JSON.stringify(response)
    return {
        props: {

            countries,
            consumer,
            // consumer: response,
        }
    }
}


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
const maritalStatus = [
    { status: 'Married' },
    { status: 'Unmarried' },
];
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