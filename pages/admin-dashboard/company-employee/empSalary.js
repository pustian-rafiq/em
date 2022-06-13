import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const empSalary = () => {
  return (
    <div>
      <h2>empSalary</h2>
    </div>
  );
};

export default empSalary;

empSalary.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
