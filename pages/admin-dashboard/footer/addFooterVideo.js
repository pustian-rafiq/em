import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const addFooterVideo = () => {
  return (
    <Paper sx={{ p: 3 }} component="form">
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#6c757d", fontSize: "14px" }}>
          Add Footer Video
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6} sx={{ my: { xs: 1, sm: 2, md: 3 } }}>
          <InputLabel
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              fontWeight: 600,
              color: "#34395e",
            }}
          >
            Video Title<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <FormControl fullWidth sx={{ background: "#ffffff" }}>
            <OutlinedInput placeholder="Enter Video Title" />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              fontWeight: 600,
              color: "#34395e",
            }}
          >
            Video Url<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <FormControl fullWidth sx={{ background: "#ffffff" }}>
            <OutlinedInput placeholder="Enter Video URL" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <InputLabel
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              fontWeight: 600,
              color: "#34395e",
            }}
          >
            Description<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <FormControl fullWidth sx={{ background: "#ffffff" }}>
            <OutlinedInput
              placeholder="Enter Video Description"
              multiline
              rows={4}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ my: 1 }}>
        Save
      </Button>
    </Paper>
  );
};

export default addFooterVideo;

addFooterVideo.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
