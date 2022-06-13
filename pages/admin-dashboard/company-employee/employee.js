import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const employee = () => {
  return (
    <div>
      <h2>employee</h2>
    </div>
  );
};

export default employee;

employee.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
