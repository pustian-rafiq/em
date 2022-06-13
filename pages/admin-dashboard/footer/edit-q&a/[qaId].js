import {
  Box,
  Button,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import AdminDashboardLayout from "../../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
const CKEditor = dynamic(
  import(
    "../../../../components/Dashboard/AdminDashboard/CkEditor/CkEditor.js"
  ),
  {
    ssr: false,
  }
);

const editQA = ({ qa }) => {
  const [ckData, setCkData] = useState(qa?.answer ? qa?.answer : "");

  console.log(ckData);

  return (
    <Paper sx={{ p: 3 }} component="form">
      <Typography
        sx={{
          color: "#6c757d",
          textAlign: "center",
          fontSize: "14px",
          fontWeight: 400,
          mb: 2,
        }}
      >
        Question & Answer (Q&A)
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            size="small"
            fullWidth
            multiline
            sx={{ mb: 2 }}
            id="outlined-required"
            label="Question"
            placeholder="Enter Question"
            defaultValue={qa.question}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            size="small"
            fullWidth
            sx={{ mb: 2 }}
            id="outlined-required"
            label="Position"
            type="number"
            placeholder="Enter Position"
            defaultValue={qa.position}
          />
        </Grid>
      </Grid>

      <Box sx={{ mb: 2 }}>
        <InputLabel sx={{ fontSize: "14px", color: "#34395e" }}>
          Description of Q&A
        </InputLabel>
        <CKEditor ckData={ckData} setCkData={setCkData} />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained">Save</Button>
      </Box>
    </Paper>
  );
};

export default editQA;

editQA.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

export const getStaticProps = async (context) => {
  const sl = context.params.qaId;
  const qas = rows;
  const qa = qas.find((qa) => qa.sl.toString() === sl);

  return {
    props: { qa },
  };
};

export async function getStaticPaths() {
  const qas = rows;

  const paths = qas.map((qa) => ({
    params: { qaId: qa.sl.toString() },
  }));
  return { paths, fallback: true };
}

const rows = [
  {
    sl: 1,
    question: "How to increase references?",
    answer:
      "Just share your referal link with your friend circle and family members.",
    position: 1,
  },
  {
    sl: 2,
    question: "How to create account?",
    answer: "Go to register page.",
    position: 2,
  },
  {
    sl: 3,
    question: "How to get payment?",
    answer: "Complete your profile.",
    position: 3,
  },
];
