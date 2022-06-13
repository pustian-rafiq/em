import React from 'react'
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';

const NoticeCategories = () => {
  return (
    <div>NoticeCategories</div>
  )
}

export default NoticeCategories
NoticeCategories.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
