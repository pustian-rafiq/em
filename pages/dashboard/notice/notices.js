import React from 'react'
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';

const Notices = () => {
  return (
    <div>Notices</div>
  )
}

export default Notices
Notices.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
