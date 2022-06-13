import AdminDashboardLayout from "../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const messages = () => {
  return (
    <div>
      <h1>Message</h1>
    </div>
  );
};

export default messages;

messages.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
