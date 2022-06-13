import React, { useState,useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styles from '../../../../components/Dashboard/Commisions/Commision.module.css'
import DashboardLayout from '../../../../components/Dashboard/DashboardLayout';
import { CommisionData } from '../../../../utility/Data';
import SearchData from '../../../../components/Dashboard/Commisions/DirectGiveCommison/SearchData';

const SendCommision = () => {
    const ref = useRef()
    const [searchText, setSearchText] = useState("")
    const [showData, setShowData] = useState([])
    var findData=[]
    const serachHandler = () => {
        console.log(ref.current.value)
       findData = CommisionData.filter((search) => {
            return (
                search.cin
                    .toLowerCase()
                    .includes(ref.current.value.toLowerCase())
            );
        });
        console.log(CommisionData)
        setShowData(findData)
    }

    console.log("CommisionData",findData)

    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <div className={styles.searchTitle}>
                Search by CIN or Phone(without country code like 17XXXXXXXX)
            </div>
            <Grid container>
                <Grid item xs={10} md={11}>
                    <div className={styles.searchSection} >
                        <div className={styles.searchInput}>
                            <input type="text" placeholder='Ex.17xxxxxxxx or CIN'
                                onChange={(e) => setSearchText(e.target.value)}
                                value={searchText}
                                ref={ref}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2} md={1} className={styles.searchLabel}>
                    <div onClick={serachHandler} >
                        Search
                    </div>
                </Grid>
            </Grid>
            {
                showData.length > 0 ?
                    <SearchData showCommisionData={showData} />
                    : ''
            }

        </Box>
    );
}
export default SendCommision

SendCommision.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
