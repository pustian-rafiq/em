import Title from "../../components/Header/Title";
import { Container, Grid, Typography } from "@mui/material";
import Youtubevideo from "../../components/YoutubeVideos/YoutubeVideos";

const vedeos = [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

const Videos = () => {
  return (
    <div>
      <Title>Videos</Title>

      <Typography
        variant="h5"
        sx={{ mt: "10px", py: "3px", textAlign: "center" }}
      >
        Learn from videos
      </Typography>

      <Container maxWidth="lg" sx={{ my: "50px" }}>
        <Grid container spacing={3} sx={{ flexGrow: 1 }}>
          {vedeos.map((video) => {
            return (
              <Grid item xs={12} md={4} lg={3}>
                <Youtubevideo />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Videos;
