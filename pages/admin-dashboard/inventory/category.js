import { Box, Grid } from "@mui/material";
import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
import AddCategory from "../../../components/Dashboard/AdminDashboard/Inventory/Category/AddCategory";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ShowCategory from "../../../components/Dashboard/AdminDashboard/Inventory/Category/ShowCategory";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const category = () => {
  return (
    <>

      <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
        <Grid container spacing={2} rowSpacing={4}>
          <Grid item md={12}>
            {/* Add Category */}
            <Item style={{ padding: '20px 20px' }}>
              <AddCategory />
            </Item>

            {/* Show Category */}

           
              <ShowCategory />
         


          </Grid>
        </Grid>
      </Box>

    </>
  );
};

export default category;

category.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
