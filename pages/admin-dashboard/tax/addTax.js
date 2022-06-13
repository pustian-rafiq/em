import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
import AddOrUpdateTax from "../../../components/Dashboard/AdminDashboard/Tax/AddOrUpdateTax";

const addOrUpdateTax = ({ countries }) => {
  return (
    <>
      <AddOrUpdateTax countries={countries} action={"New"} />
    </>
  );
};

export default addOrUpdateTax;

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};

addOrUpdateTax.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
