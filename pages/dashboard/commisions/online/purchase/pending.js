
import React from 'react'
import PendingTable from '../../../../../components/Dashboard/Commisions/OnlineOc/PendingTable';
import DashboardLayout from '../../../../../components/Dashboard/DashboardLayout';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Pending = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={2}>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <PendingTable />
                    </Grid>
                    <Grid item xs={12} md={2}>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}

export default Pending
Pending.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
