import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const addNewEmployee = () => {
  return (
    <div>
      <h2>addNewEmployee</h2>
    </div>
  );
};

export default addNewEmployee;

addNewEmployee.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
