import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const paidEmpSalary = () => {
  return (
    <div>
      <h2>paidEmpSalary</h2>
    </div>
  );
};

export default paidEmpSalary;

paidEmpSalary.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
