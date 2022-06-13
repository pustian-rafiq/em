import { Box, Typography } from "@mui/material";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";

const Master = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/root-flower.jpg')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          color: "#14A33D",
          fontWeight: 700,
          fontSize: "28px",
        }}
      >
        WOW! You are a root customer!
      </Typography>
    </Box>
  );
};

export default Master;

Master.getLayout = function pageLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
