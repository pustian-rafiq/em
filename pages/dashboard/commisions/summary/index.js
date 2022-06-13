import React from 'react'
import Summary from '../../../../components/Dashboard/Commisions/Summary/Summary'
import DashboardLayout from '../../../../components/Dashboard/DashboardLayout'

const SummaryPage = () => {
  return (
   <Summary/>
  )
}

export default SummaryPage
SummaryPage.getLayout = function pageLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>;
};