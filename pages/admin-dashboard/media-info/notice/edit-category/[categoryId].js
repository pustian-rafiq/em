import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AdminDashboardLayout from "../../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const rows = [
  {
    sl: 1,
    title: "General",
    description: "General",
  },
  {
    sl: 2,
    title: "Special",
    description: "Special",
  },
];

const editCategory = ({ category }) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6} sx={{ my: 3 }}>
          <InputLabel
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              fontWeight: 600,
              color: "#34395e",
            }}
          >
            Title<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <FormControl fullWidth sx={{ background: "#ffffff" }}>
            <OutlinedInput
              multiline
              maxRows={4}
              defaultValue={category.title}
              placeholder="Enter Title"
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} sx={{ my: 3 }}>
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
              multiline
              maxRows={4}
              defaultValue={category.description}
              placeholder="Enter Description"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button variant="contained">Save</Button>
    </Box>
  );
};

export default editCategory;

editCategory.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

export const getStaticProps = async (context) => {
  const sl = context.params.categoryId;
  const categories = rows;
  const category = categories.find((category) => category.sl.toString() === sl);

  return {
    props: { category },
  };
};

export async function getStaticPaths() {
  const categories = rows;

  const paths = categories.map((category) => ({
    params: { categoryId: category.sl.toString() },
  }));
  return { paths, fallback: true };
}
