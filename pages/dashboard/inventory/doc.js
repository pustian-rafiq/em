import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

const Doc = () => {
  return <div>Doc</div>;
};

export default Doc;
Doc.getLayout = function pageLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
