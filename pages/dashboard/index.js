
import AdminDashboard from "../../components/Dashboard/AdminDashboard/AdminDashboard";
import AdminDashboardLayout from "../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
// import Dashboard from "../../components/Dashboard/Dashboard";
// import DashboardLayout from "../../components/Dashboard/DashboardLayout";

const DashboardPage = () => {
  // return <Dashboard />
  return (
    <>
    {/* <Dashboard /> */}
    <AdminDashboard/>
    </>
  )
};

export default DashboardPage;

// DashboardPage.getLayout = function pageLayout(page) {
//   return <DashboardLayout>{page}</DashboardLayout>;
// };
DashboardPage.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
