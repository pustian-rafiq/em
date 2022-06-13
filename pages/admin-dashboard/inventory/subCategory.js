import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AddSubCategory from '../../../components/Dashboard/AdminDashboard/Inventory/SubCategory/AddSubCategory'
import ShowSubCategory from '../../../components/Dashboard/AdminDashboard/Inventory/SubCategory/ShowSubCategory'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const SubCategory = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
        <Grid container spacing={2} rowSpacing={4}>
          <Grid item md={12}>
            {/* Add Category */}
            <Item style={{ padding: '20px 20px' }}>
              <AddSubCategory />
            </Item>
            {/* Show Category */}
              <ShowSubCategory/>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};
export default SubCategory;

SubCategory.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
