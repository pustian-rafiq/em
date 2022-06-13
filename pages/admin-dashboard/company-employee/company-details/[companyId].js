import React, { useState } from 'react'
import AdminDashboardLayout from '../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from 'next/image'
import {Typography } from '@mui/material';
import Link from 'next/link';
import {useRouter} from 'next/router'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const CompanyDetails = () => {
const router = useRouter()
const {companyId} = router.query

    return (
        <>
            <div className="paymentTitle">
                <span>Company Details Information</span>
            </div>
            <Divider sx={{ mb: 5 }} />

            <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
                <Grid container spacing={4} rowSpacing={4}>
                    <Grid item xs={12} md={12}>
                        <Item style={{ padding: '20px 20px' }}>
                            <Grid container spacing={1} sx={{ py: 3 }}>
                                <Grid item xs={2} md={2}>Company Logo</Grid>
                                <Grid item xs={8} md={7}> <Image src="/images/profile-picture.jpg" width="100" height="100" /></Grid>
                            </Grid>
                            <Grid container spacing={1} sx={{ py: 3 }}>
                                <Grid item xs={4} md={2}>Name</Grid>
                                <Grid item xs={8} md={7}>: Ehsan Marketing</Grid>
                            </Grid>
                            <Grid container spacing={1} sx={{ py: 3 }} >
                                <Grid item xs={2} md={2}>Code</Grid>
                                <Grid item xs={8} md={7}>: EM-00001</Grid>
                            </Grid>
                            <Grid container spacing={1} sx={{
                                py: 3
                            }} >
                                <Grid item xs={12} sm={4} md={2}>ID Card Request Text</Grid>
                                <Grid item xs={12} sm={8} md={7}>: If this ID Card is available anywhere without its user, please contact us using the following address.</Grid>
                            </Grid>
                            <Grid container spacing={1} sx={{ py: 3 }} >
                                <Grid item xs={2} md={2}>Mobile</Grid>
                                <Grid item xs={8} md={7}>: 01769921000</Grid>
                            </Grid>
                            <Grid container spacing={1} sx={{ py: 3 }}>
                                <Grid item xs={2} md={2}>Email</Grid>
                                <Grid item xs={8} md={7}>: infoehsanmarketing@gmail.com</Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{ py: 3 }} >

                                <Grid item xs={2} md={2}>Website URL</Grid>
                                <Grid item xs={8} md={7}>: https://ehsanmarketing.com/</Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{ py: 3 }} >
                                <Grid item xs={2} md={2}>CEO Sign</Grid>
                                <Grid item xs={8} md={7}> <Image src="/images/profile-picture.jpg" width="100" height="100" /></Grid>
                            </Grid>
                            <Grid container spacing={2} sx={{ py: 3 }} >
                                <Grid item xs={2} md={3}>
                                    <Link
                                     href={`/admin-dashboard/company-employee/edit-company/${companyId}/`} passHref>
                                        <Typography variant='span' component='span' sx={{ cursor: 'pointer', background: '#4F5ECE', borderRadius: '5px', fontSize: '14px', padding: '10px 10px', color: '#fff' }}>
                                            Details
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={2} md={3}>
                                    <Link href={`/admin-dashboard/company-employee/company-details/`} passHref>
                                        <Typography variant='span' component='span' sx={{ cursor: 'pointer', background: '#4F5ECE', borderRadius: '5px', fontSize: '14px', padding: '10px 10px', color: '#fff' }}>
                                            Details
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                             
                        </Item>
                    </Grid>
                </Grid>

            </Box>

        </>
    )
}

export default CompanyDetails

CompanyDetails.getLayout = function pageLayout(page) {
    return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};