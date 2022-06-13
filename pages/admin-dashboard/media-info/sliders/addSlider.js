import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Input,
  InputLabel,
  Paper,
  TextField,
} from "@mui/material";
import AdminDashboardLayout from "../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const addSlider = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            id="outlined-required"
            label="Title"
            type="text"
            placeholder="Enter Title"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Autocomplete
            size="small"
            // disablePortal
            fullWidth
            id="combo-box-demo"
            options={products}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select Product"
                label="Select Product"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel sx={{ fontSize: "14px", color: "#34395e" }}>
            Image
          </InputLabel>
          <Box
            sx={{
              border: "1px solid #b1b1b1cc",
              p: 0.7,
              borderRadius: "5px",
              background: "#ffffff",
              ":hover": {
                border: "1px solid #000000",
              },
            }}
          >
            <Input accept="image/*" id="icon-button-file" type="file" />
          </Box>
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ mt: 2 }}>
        Save
      </Button>
    </Paper>
  );
};

export default addSlider;

addSlider.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

const products = [
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
];
