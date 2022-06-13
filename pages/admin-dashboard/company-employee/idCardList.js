import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const idCardList = () => {
  return (
    <div>
      <h2>idCardList</h2>
    </div>
  );
};

export default idCardList;

idCardList.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
