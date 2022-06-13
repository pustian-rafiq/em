import { Box, Button, InputLabel, Paper, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const CKEditor = dynamic(
  import("../../../components/Dashboard/AdminDashboard/CkEditor/CkEditor.js"),
  {
    ssr: false,
  }
);

const goalsManage = () => {
  const [ckData, setCkData] = useState("");
  console.log(ckData);
  return (
    <Paper sx={{ p: 3 }}>
      <Typography
        sx={{
          color: "#6c757d",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
        }}
      >
        Goals
      </Typography>
      <Box sx={{ m: 3 }}>
        <InputLabel sx={{ fontSize: "14px", color: "#34395e" }}>
          Description of Goals
        </InputLabel>
        <CKEditor ckData={ckData} setCkData={setCkData} />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained">Save</Button>
      </Box>
    </Paper>
  );
};

export default goalsManage;

goalsManage.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
