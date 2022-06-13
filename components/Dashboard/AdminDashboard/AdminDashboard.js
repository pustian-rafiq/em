import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './AdminDashboard.module.css'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AdminDashboard = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <Grid item xs={12} md={12} sx={{ pt: 4, pb: 4 }}  >
                            <div className={styles.adminContent}>
                                <h2>Consumers</h2>
                                <p>Total consumer: 5586</p>
                                <p>Pending Cashout Amount: $</p>
                                <p>Master Consumer: 59</p>
                            </div>

                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
export default AdminDashboard;
