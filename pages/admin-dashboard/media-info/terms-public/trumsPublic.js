import AdminDashboardLayout from "../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const trumsPublic = () => {
  return (
    <div>
      <h1>Public terms and conditions</h1>
    </div>
  );
};

export default trumsPublic;
trumsPublic.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
