import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const commissions = () => {
  return (
    <div>
      <h1>commissions</h1>
    </div>
  );
};

export default commissions;

commissions.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
