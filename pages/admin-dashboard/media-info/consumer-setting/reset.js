
import AdminDashboardLayout from '../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';

const reset = () => {
    return (
        <div>
            <h1>Reset all customer </h1>
        </div>
    );
};

export default reset;
reset.getLayout = function pageLayout(page) {
    return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
  };