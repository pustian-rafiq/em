import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MenuItem, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import AdminDashboardLayout from '../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));


const AddNotice = () => {
  const [category, setCategory] = useState("");
  const [noticeFor, setNoticeFor] = useState("");
  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };
  const noticeHandler = (event) => {
    setNoticeFor(event.target.value);
  };
  return (
    <>
      <div className="paymentTitle">
        <span>Add Notice Category</span>
      </div>
      <Divider />
      <div >
        <form >
          <Box sx={{ flexGrow: 1, maxWidth: '100%', }} >
            <Grid container spacing={2} rowSpacing={4}>
              <Grid item md={12}>
                <Item style={{ padding: '30px 20px' }}>
                  <Typography variant="h4" component="div" sx={{
                    background: '#0DA8EE',
                    width: '80px',
                    fontSize: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    borderRadius: '5px',
                    //cursor: 'pointer',
                    py: 1
                  }}>
                    <ArrowBackIcon />
                    <Link href="/admin-dashboard/media-info/notice/notices/">
                      Back
                    </Link>
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item md={3}></Grid>
                    <Grid item md={6}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={12}  >
                          <TextField
                            fullWidth
                            size="small"
                            id="fullWidth"
                            label="Title"
                          />
                        </Grid>
                        <Grid item xs={12} md={12}  >
                          <TextField
                            fullWidth
                            size="small"
                            id="outlined-select-currency"
                            select
                            value={noticeFor}
                            label="Notice For*"
                            onChange={noticeHandler}
                          //helperText="Please select your currency"
                          >
                            {noticeList.map((option) => (
                              <MenuItem key={option.name} value={option.name}>
                                {option.name}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={12}  >
                          <TextField
                            fullWidth
                            size="small"
                            id="outlined-select-currency"
                            select
                            value={category}
                            label="Category*"
                            onChange={categoryHandler}
                          //helperText="Please select your currency"
                          >
                            {categoryList.map((option) => (
                              <MenuItem key={option.name} value={option.name}>
                                {option.name}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        
                        <Grid item xs={12} md={12}  >
                          <TextField
                            fullWidth
                            size="small"
                            id="fullWidth"
                            label="Description"
                          />
                        </Grid>
                        <Grid item xs={6} md={3}  >
                          <Button component="span" sx={{
                            background: '#20C20C', color: 'white', textTransform: 'capitalize',
                            ":hover": {
                              background: '#0B4A02'
                            },
                          }} >
                            Save
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item md={3}></Grid>
                  </Grid>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </form>
      </div>
    </>
  )
}
export default AddNotice;

AddNotice.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
const noticeList = [
  { name: 'Consumer' },
  { name: 'Master' },
  { name: 'Registration' },
  { name: 'Main Site' },
  { name: 'Badge' },
];
const categoryList = [
  { name: 'Consumer' },
  { name: 'Master' },
  { name: 'Registration' },
  { name: 'Main Site' },
  { name: 'Badge' },
];