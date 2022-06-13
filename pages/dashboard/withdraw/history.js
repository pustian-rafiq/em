import React from 'react'
import DashboardLayout from '../../../components/Dashboard/DashboardLayout'
import TransactionHistory from '../../../components/Dashboard/Withdraw/TransactionHistory'
const History = () => {
    return (
        <>
            <TransactionHistory />
        </>
    )
}

export default History
History.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
