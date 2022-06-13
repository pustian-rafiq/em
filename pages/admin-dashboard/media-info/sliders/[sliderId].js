import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import AdminDashboardLayout from "../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const rows = [
  {
    sl: 1,
    title: "General",
    img: "Image",
  },
  {
    sl: 2,
    title: "Special",
    img: "Image",
  },
];

const editSlider = ({ slider }) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6}>
          <InputLabel
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              fontWeight: 600,
              color: "#34395e",
            }}
          >
            Title
          </InputLabel>
          <FormControl fullWidth sx={{ background: "#ffffff" }}>
            <OutlinedInput
              defaultValue={slider.title}
              placeholder="Enter Title"
            />
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
            Product
          </InputLabel>
          <Autocomplete
            // disablePortal
            fullWidth
            id="combo-box-demo"
            options={products}
            sx={{ background: "#ffffff" }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select Product" />
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
              p: 1.5,
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
    </Box>
  );
};

export default editSlider;

export const getStaticProps = async (context) => {
  const sl = context.params.sliderId;
  const sliders = rows;
  const slider = sliders.find((slider) => slider.sl.toString() === sl);

  return {
    props: { slider },
  };
};

export async function getStaticPaths() {
  const sliders = rows;

  const paths = sliders.map((slider) => ({
    params: { sliderId: slider.sl.toString() },
  }));
  return { paths, fallback: true };
}

editSlider.getLayout = function pageLayout(page) {
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
