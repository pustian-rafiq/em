import AdminDashboardLayout from "../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const terms = () => {
  return (
    <div>
      <h1>Enter terms and condition </h1>
      {/* GO TO: pages/other/termsCondition */}
    </div>
  );
};

export default terms;
terms.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
