import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const inventoryDoc = () => {
  return (
    <div>
      <h1>inventoryDoc</h1>
    </div>
  );
};

export default inventoryDoc;

inventoryDoc.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
