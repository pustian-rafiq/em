import React from 'react'
import DashboardLayout from '../../../../components/Dashboard/DashboardLayout'
// import styles from './DirectCommision.module.css'
import Divider from '@mui/material/Divider';
import DueCommision from '../../../../components/Dashboard/Commisions/DirectGiveCommison/DueCommision';
import PendingPayment from '../../../../components/Dashboard/Commisions/DirectGiveCommison/PendingPayment';

const Payment = () => {
  return (
    <>
      <div>
        <div className="paymentTitle">
          <span>My Due Commissions</span>
        </div>
        <Divider sx={{ mb: 5 }} />
        <DueCommision />
      </div>

      <div>
        <div className="paymentTitle">
          <span>Pending Payment</span>
        </div>
        <Divider sx={{ mb: 5 }} />
        <PendingPayment />
      </div>
    </>
  )
}

export default Payment

Payment.getLayout = function pageLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
