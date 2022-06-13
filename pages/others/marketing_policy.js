import { Typography, Box, Container } from "@mui/material";
import Title from "../../components/Header/Title";

const MarketingPolicy = () => {
  return (
    <Container maxWidth="lg">
      <Title>Our Marketing Policy</Title>
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{
            textAlign: "center",
            color: "#45b9e0",
          }}
        >
          Our Marketing Policy
        </Typography>

        <Typography
          variant="body2"
          gutterBottom
          component="div"
          sx={{ lineHeight: "25px", m: "15px 0px 80px 0px" }}
        >
          We know that you care how information about you is used and shared,
          and we appreciate your trust that we will do so carefully and
          sensibly. This Privacy Notice describes how ehsanmarketing.com collect
          and process your personal information through Ehsan Marketing
          websites, devices, products, services, online and physical stores, and
          applications that reference this Privacy Notice. By using Ehsan
          Marketing Services, you are consenting to the practices described in
          this Privacy Notice.
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            color: "#45b9e0",
          }}
        >
          What Personal Information About Customers Does Ehsan Marketing
          Collect?
        </Typography>

        <Typography
          variant="body2"
          gutterBottom
          component="div"
          sx={{ lineHeight: "25px", m: "15px 0px 40px 0px" }}
        >
          Your personal information is collected so that we can provide and
          improve our products and services.
          <br />
          Here are the types of personal information we collect:
          <br />
          <strong style={{ mt: "5px" }}>Information You Give Us: </strong> We
          receive and store any information you provide in relation to Ehsan
          Marketing Services. You can choose not to provide certain information,
          but then you might not be able to take advantage of many of our Ehsan
          Marketing Services.
          <br />
          <strong>Automatic Information:</strong> We automatically collect and
          store certain types of information about your use of Ehsan Marketing
          Services, including information about your interaction with content
          and services available through Ehsan Marketing Services. Like many
          websites, we use "cookies" and other unique identifiers, and we obtain
          certain types of information when your web browser or device accesses
          Ehsan Marketing Services and other content served by or on behalf of
          Ehsan Marketing on other websites.
          <br />
          <strong style={{ mt: "5px" }}>
            Information from Other Sources:
          </strong>{" "}
          We might receive information about you from other sources, such as
          updated delivery and address information from our carriers, which we
          use to correct our records and deliver your next purchase more easily.
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            color: "#45b9e0",
          }}
        >
          For What Purposes Does Ehsan Marketing Use Your Personal Information?
        </Typography>

        <Typography
          variant="body2"
          gutterBottom
          component="div"
          sx={{ lineHeight: "25px", margin: "15px 0px 40px 0px" }}
        >
          Your personal information is used to run, provide, develop, and
          improve the products and services we provide to our customers. <br />
          <strong>These are some of the goals: </strong>
          Product and service purchase and delivery. We collect and use personal
          information to process orders, supply products and services, process
          payments, and communicate with you.
          <br />
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            color: "#45b9e0",
          }}
        >
          What About Cookies and Other Identifiers?
        </Typography>

        <Typography
          variant="body2"
          gutterBottom
          component="div"
          sx={{ lineHeight: "25px", margin: "15px 0px 40px 0px" }}
        >
          To enable our systems to recognize your browser or device and to
          provide and improve Ehsan Marketing Services, we use cookies and other
          identifiers.with you.
          <br />
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            color: "#45b9e0",
          }}
        >
          Does Ehsan Marketing Share Your Personal Information?
        </Typography>

        <Typography
          variant="body2"
          gutterBottom
          component="div"
          sx={{ lineHeight: "25px", margin: "15px 0px 40px 0px" }}
        >
          We are not in the business of selling our customers' personal
          information to outsiders, and information about our customers is a
          vital element of our business.
          <br />
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{
            color: "#45b9e0",
          }}
        >
          How Secure Is Information About Me?
        </Typography>

        <Typography
          variant="body2"
          gutterBottom
          component="div"
          sx={{ lineHeight: "25px", margin: "15px 0px 70px 0px" }}
        >
          We design our systems with your security and privacy in mind. We
          follow the Payment Card Industry Data Security Standard (PCI DSS) when
          handling credit card data. Use a unique password for your Ehsan
          Marketing account that is not used for other online accounts.
          <br />
        </Typography>
      </Box>
    </Container>
  );
};

export default MarketingPolicy;
