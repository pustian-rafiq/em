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
import AdminDashboardLayout from "../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";

const footerVideoEdit = ({ video }) => {
  return (
    <Paper sx={{ p: 3 }} component="form">
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ color: "#6c757d", fontSize: "14px" }}>
          Update Footer Video
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={6} sx={{ my: { xs: 1, sm: 2, md: 3 } }}>
          <TextField
            size="small"
            fullWidth
            id="outlined-required"
            label="Video Title"
            type="text"
            placeholder="Enter Video Title"
            defaultValue={video.title}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            size="small"
            fullWidth
            id="outlined-required"
            label="Video Url"
            type="text"
            placeholder="Enter Video Url"
            defaultValue={video.url}
          />
        </Grid>
        <Grid item xs={12} sx={{ my: { xs: 1 } }}>
          <TextField
            size="small"
            fullWidth
            id="outlined-required"
            label="Video Description"
            type="text"
            placeholder="Enter Video Description"
            multiline
            rows={4}
            defaultValue={video?.url}
          />
        </Grid>
      </Grid>
      <Button variant="contained" sx={{ my: 1 }}>
        Save
      </Button>
    </Paper>
  );
};

export default footerVideoEdit;

footerVideoEdit.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

export const getStaticProps = async (context) => {
  const sl = context.params.footerVideoId;
  const footerVideos = rows;
  const footerVideo = footerVideos.find(
    (footerVideo) => footerVideo.sl.toString() === sl
  );

  return {
    props: { video: footerVideo },
  };
};

export async function getStaticPaths() {
  const footerVideos = rows;

  const paths = footerVideos.map((footerVideo) => ({
    params: { footerVideoId: footerVideo.sl.toString() },
  }));
  return { paths, fallback: true };
}

const rows = [
  {
    sl: 1,
    title:
      "৭৭. অন্যান্য ই কমার্স সাইট থেকে কি ইহসান মার্কেটিং কোম্পানীর সার্ভিস পাওয়া যাবে?",
    url: "https://ehsanmap.com/",
  },
  { sl: 2, title: "৭৬. এখানে কাজটা কি?", url: "https://ehsanblog.com/" },
  { sl: 3, title: "৭৫. এখানে কি টার্গেট আছে?", url: "http://ehsannews.com/	" },
  {
    sl: 4,
    title:
      "৭৪. সমাজের উঁচু শ্রেণীর লোকদের মধ্যে আমি একজন, সামান্য এই বিষয় নিয়ে কি বলবো?",
    url: "https://www.ehsansoftware.com/",
  },
  {
    sl: 5,
    title: "৭৩. মানুষ আমার কথা শোনেনা।",
    url: "https://ehsanmarketing.com/",
  },
  {
    sl: 6,
    title: "৭২. সামান্য এই টাকার জন্য আবার কি কাজ করবো?",
    url: "https://mail.worldehsan.com/mail/",
  },
  {
    sl: 7,
    title:
      "৭১. মানুষকে কঞ্জুমার হওয়ার কথা বললে যদি কমজুমার না হয় তাহলে আমার সন্মান শেষ হয়ে যাবে।",
    url: "http://worldehsan.live/",
  },
  {
    sl: 8,
    title: "৭০. কঞ্জুমার হওয়ার কথা মানুষকে বললে আমি ছোট হয়ে যাবো।	",
    url: "http://worldehsan.live/",
  },
  {
    sl: 9,
    title: "৬৯. উচ্চ শিক্ষিত তাই এই কাজ আমার দ্বারা সম্ভব নয়?",
    url: "http://worldehsan.live/",
  },
  {
    sl: 10,
    title: "৬৮. লেখাপড়া নেই তাহলে কি কাজ করতে পারবো?	",
    url: "http://worldehsan.live/	",
  },
];
