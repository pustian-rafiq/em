import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const idCardGenerate = () => {
  return (
    <div>
      <h2>idCardGenerate</h2>
    </div>
  );
};

export default idCardGenerate;

idCardGenerate.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
