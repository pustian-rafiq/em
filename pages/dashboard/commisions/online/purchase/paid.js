
import React from 'react'
import DashboardLayout from '../../../../../components/Dashboard/DashboardLayout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PaidTable from '../../../../../components/Dashboard/Commisions/OnlineOc/PaidTable';

const Paid = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={2}>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <PaidTable />
                    </Grid>
                    <Grid item xs={12} md={2}>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}
export default Paid
Paid.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};