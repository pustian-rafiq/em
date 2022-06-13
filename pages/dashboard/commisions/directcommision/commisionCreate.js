import React, { useRef, useState } from 'react'
import DashboardLayout from '../../../../components/Dashboard/DashboardLayout';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import styles from './DirectCommision.module.css'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Link from 'next/link';

const CommisionCreate = () => {
    const ref = useRef()

    return (
        <>
            <div className="paymentTitle">
                <span>Send Direct Commisssion</span>
            </div>
            <Divider sx={{ mb: 5 }} />
            <div >
                <form className={styles.columnSpace}>
                    <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
                        <Grid container spacing={2} rowSpacing={3}>
                            {/* Left Column of the form*/}
                            <Grid item xs={12} md={6} >
                                <Grid item md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Reciever Name*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        inputProps={
                                            { readOnly: true, }
                                        }
                                        id="fullWidth"
                                    />
                                </Grid>
                                <Grid container rowSpacing={3} spacing={0.5} className={styles.rowSpace}>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel htmlFor="component-simple">Reciever Phone No*</InputLabel>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            inputProps={
                                                { readOnly: true, }
                                            }
                                            id="fullWidth"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <InputLabel htmlFor="component-simple">Reciever Country*</InputLabel>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            inputProps={
                                                { readOnly: true, }
                                            }
                                            id="fullWidth"
                                        />
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Receiver Gender*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        inputProps={
                                            { readOnly: true, }
                                        }
                                        id="fullWidth"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Shopkeeper CIN*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        inputProps={
                                            { readOnly: true, }
                                        }
                                        id="fullWidth"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Total Sales Amount*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="fullWidth"
                                        className={styles.inputBgColor}
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Product Details*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="fullWidth"
                                        className={styles.inputBgColor}
                                    />
                                </Grid>
                            </Grid>

                            {/* Right Column of the form*/}
                            <Grid item xs={10} md={6} >
                                <Grid item md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Reciever CIN*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        inputProps={
                                            { readOnly: true, }
                                        }
                                        id="fullWidth"
                                    />
                                </Grid>
                                <Grid item md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Reciever Address</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        inputProps={
                                            { readOnly: true, }
                                        }
                                        id="fullWidth"
                                    />
                                </Grid>
                                <Grid item md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Shopkeeper Name*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        inputProps={
                                            { readOnly: true, }
                                        }
                                        id="fullWidth"
                                    />
                                </Grid>
                                <Grid item md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Sender Email*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        inputProps={
                                            { readOnly: true, }
                                        }
                                        id="fullWidth"
                                    />
                                </Grid>
                                <Grid item md={12} className={styles.rowSpace}>
                                    <InputLabel htmlFor="component-simple">Giving Amount*</InputLabel>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="fullWidth"
                                        className={styles.inputBgColor}
                                    />
                                </Grid>
                                <Grid item md={12} className={styles.rowSpace}>
                                    <Link href='./payment'>
                                        <Button variant="contained" className={styles.saveButton}>
                                            Save
                                        </Button>
                                    </Link>

                                </Grid>
                            </Grid>
                        </Grid>

                    </Box>
                </form>
            </div>

        </>
    )
}

export default CommisionCreate

CommisionCreate.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
