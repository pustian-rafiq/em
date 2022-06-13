import { Box } from "@mui/material";
import ReceivedTable from "../../../../components/Dashboard/Commisions/DirectRC/ReceivedTable";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";

const DirectPC = () => {
  return (
    <Box>
      <ReceivedTable />
    </Box>
  );
};

export default DirectPC;

DirectPC.getLayout = function pageLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
