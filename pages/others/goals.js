import { Typography, Box } from "@mui/material";
import Title from "../../components/Header/Title";

const Goals = () => {
  return (
    <>
      <Title>Our goals</Title>

      <Box sx={{ mb: "40px" }}>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Our Goals{" "}
        </h1>
        <Typography
          variant="h5"
          component="div"
          sx={{
            p: "10px",
            textAlign: "center",
            //  bgcolor: 'warning.main'
          }}
        >
          <span
            style={{ backgroundColor: "rgb(147, 248, 64)", padding: "5px" }}
          >
            {" "}
            To benefit every human being in the world financially even if it is
            minimal.
          </span>
        </Typography>
      </Box>
    </>
  );
};

export default Goals;
