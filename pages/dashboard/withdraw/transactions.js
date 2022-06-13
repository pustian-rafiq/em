import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import DashboardLayout from '../../../components/Dashboard/DashboardLayout'
import { display } from '@mui/system';
import TransactionForm from '../../../components/Dashboard/Withdraw/TransactionForm';

const Transactions = () => {
    const [open, setOpen] = React.useState(true);
    return (
        <>
        <div>
        <Box sx={{ width: '100%'}}  style={open? {display:'block'} : {display:'none'} }>
                <Alert
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                          
                        >
                            <CloseIcon fontSize="inherit"  onClick={() => {
                                setOpen(false);
                            }} />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                    variant="filled" severity="warning"
                >
                  You have required 10% purchase commission to withdraw money.
                </Alert>
            </Box>
            <TransactionForm/>
        </div>
           
        </>
    )
}

export default Transactions
Transactions.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};


