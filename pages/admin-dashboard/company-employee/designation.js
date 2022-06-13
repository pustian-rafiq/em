import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const designation = () => {
  return (
    <div>
      <h2>designation</h2>
    </div>
  );
};

export default designation;

designation.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
