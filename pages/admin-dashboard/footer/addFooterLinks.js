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
import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const addFooterLinks = () => {
  return (
    <Paper sx={{ p: 3 }} component="form">
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#6c757d", fontSize: "14px" }}>
          Add Footer Link
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6} sx={{ my: { xs: 1, sm: 2, md: 3 } }}>
          <TextField
            size="small"
            fullWidth
            id="outlined-required"
            label="Link Title"
            type="text"
            placeholder="Enter Link Title"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            id="outlined-required"
            label="Link Url"
            type="text"
            placeholder="Enter Link Url"
          />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 1 }}>
        Save
      </Button>
    </Paper>
  );
};

export default addFooterLinks;

addFooterLinks.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
