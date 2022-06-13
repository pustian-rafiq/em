import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
const CKEditor = dynamic(
  import("../../../components/Dashboard/AdminDashboard/CkEditor/CkEditor.js"),
  {
    ssr: false,
  }
);

const QA = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography
        sx={{
          color: "#6c757d",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
          mb: 2,
        }}
      >
        Question & Answer (Q&A)
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            size="small"
            fullWidth
            multiline
            sx={{ mb: 2 }}
            id="outlined-required"
            label="Question"
            placeholder="Enter Question"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            id="outlined-required"
            label="Position"
            type="number"
            placeholder="Enter Position"
          />
        </Grid>
      </Grid>

      <Box sx={{ mb: 2 }}>
        <InputLabel sx={{ fontSize: "14px", color: "#34395e" }}>
          Description of Q&A
        </InputLabel>
        <CKEditor />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained">Save</Button>
      </Box>
    </Paper>
  );
};

export default QA;

QA.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
