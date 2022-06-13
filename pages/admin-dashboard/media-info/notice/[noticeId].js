import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import AdminDashboardLayout from "../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const rows = [
  {
    sl: 1,
    title:
      "Consumer Service Email- cs.ehsanmarketing@gmail.com (কঞ্জুমার সার্ভিস ইমেইল- cs.ehsanmarketing@gmail.com)",
    description:
      "Consumer Service Email- cs.ehsanmarketing@gmail.com (কঞ্জুমার সার্ভিস ইমেইল- cs.ehsanmarketing@gmail.com)",
  },
  {
    sl: 2,
    title:
      "We do not have an official page on Facebook (ফেসবুকে আমাদের অফিসিয়াল কোন পেইজ নেই)",
    description:
      "We do not have an official page on Facebook (ফেসবুকে আমাদের অফিসিয়াল কোন পেইজ নেই)",
  },
  {
    sl: 3,
    title:
      "***Keep everyone subscribing to our YouTube channel to get updated information (আপডেট তথ্য পেতে সবাই আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করে রাখুন)",
    description:
      "***Keep everyone subscribing to our YouTube channel to get updated information (আপডেট তথ্য পেতে সবাই আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করে রাখুন)",
  },
];

const singleNotice = ({ notice }) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6} md={6}>
          <InputLabel
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              fontWeight: 600,
              color: "#34395e",
            }}
          >
            Notice for<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Select
            fullWidth
            defaultValue={"select"}
            sx={{ background: "#ffffff" }}
          >
            <MenuItem value={"select"}>Selece One</MenuItem>
            <MenuItem value={"consumer"}>Consumer</MenuItem>
            <MenuItem value={"master_user"}>Master User</MenuItem>
            <MenuItem value={"registration"}>Registration</MenuItem>
            <MenuItem value={"main_site"}>Main Site</MenuItem>
            <MenuItem value={"badge"}>Badge</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <InputLabel
            sx={{
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              fontWeight: 600,
              color: "#34395e",
            }}
          >
            Category<span style={{ color: "red" }}>*</span>
          </InputLabel>
          <Select
            fullWidth
            defaultValue={"general_notice"}
            sx={{ background: "#ffffff" }}
          >
            <MenuItem value={"general_notice"}>General Notice</MenuItem>
          </Select>
        </Grid>
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
            <OutlinedInput multiline maxRows={4} defaultValue={notice?.title} />
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
              defaultValue={notice?.description}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button variant="contained">Save</Button>
    </Box>
  );
};

export default singleNotice;

export const getStaticProps = async (context) => {
  const sl = context.params.noticeId;
  const notices = rows;
  const notice = notices.find((notice) => notice.sl.toString() === sl);

  return {
    props: { notice },
  };
};

export async function getStaticPaths() {
  const notices = rows;

  const paths = notices.map((notice) => ({
    params: { noticeId: notice.sl.toString() },
  }));
  return { paths, fallback: true };
}

singleNotice.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
