import { Box } from "@mui/material";
import PendingTable from "../../../../components/Dashboard/Commisions/DirectRC/PendingTable";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";

const DirectPcPending = () => {
  return (
    <Box>
      <PendingTable />
    </Box>
  );
};

export default DirectPcPending;

DirectPcPending.getLayout = function pageLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
