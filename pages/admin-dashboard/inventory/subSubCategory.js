import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
import AddSubSubCategory from '../../../components/Dashboard/AdminDashboard/Inventory/SubSubCategory/AddSubSubCategory'
import ShowSubSubCategory from '../../../components/Dashboard/AdminDashboard/Inventory/SubSubCategory/ShowSubSubCategory'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const SubSubCategory = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
        <Grid container spacing={2} rowSpacing={4}>
          <Grid item md={12}>
            {/* Add Category */}
            <Item style={{ padding: '20px 20px' }}>
              <AddSubSubCategory />
            </Item>
            {/* Show Category */}
              <ShowSubSubCategory/>
          </Grid>
        </Grid>
      </Box>

    </>
  );
};
export default SubSubCategory;

SubSubCategory.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
