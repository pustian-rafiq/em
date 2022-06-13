import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const idCardGroup = () => {
  return (
    <div>
      <h2>idCardGroup</h2>
    </div>
  );
};

export default idCardGroup;

idCardGroup.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
