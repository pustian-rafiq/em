import * as React from "react";

// mui components
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";

// mui icons
import EmailIcon from "@mui/icons-material/Email";
import ListIcon from "@mui/icons-material/List";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SendIcon from "@mui/icons-material/Send";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

// css
import styles from "../../styles/Products/Products.module.css";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const rows = [
  { id: "1", name: "Gender", value: "10" },
  { id: "2", name: "Gender", value: "100" },
  { id: "3", name: "Gender", value: "2" },
  { id: "4", name: "Gender", value: "1" },
  { id: "5", name: "Gender", value: "80" },
];

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: lavenderblush;
  // width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[400]};
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  // min-width: 320px;
  background-color: transparent;
  color: black;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;

const shopQA = [
  {
    id: 1,
    question: "what is your name ?",
    time: "5 months ago",
    isAnswered: true,
    answer: "My Name is Md. Halim",
    isAdmin: false,
  },
  {
    id: 2,
    question: "How Old are you ?",
    time: "1 months ago",
    isAnswered: true,
    answer: "10 years",
    isAdmin: false,
  },

  {
    id: 3,
    question: "what is country name ?",
    time: "3 months ago",
    isAnswered: false,
    answer: null,
    isAdmin: true,
  },
];

export default function Shop() {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab sx={{ padding: "5px 3px" }}>
          <MenuItem sx={{ padding: "0px", margin: "0px", fontSize: "10px" }}>
            <ListItemIcon sx={{ minWidth: "25px !important" }}>
              <EmailIcon fontSize="small" />
            </ListItemIcon>
            Overview 
          </MenuItem>
        </Tab>
        <Tab sx={{ padding: "5px 3px" }}>
          <MenuItem sx={{ padding: "0px", margin: "0px", fontSize: "10px" }}>
            <ListItemIcon sx={{ minWidth: "25px !important" }}>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            Customer Review (1)
          </MenuItem>
        </Tab>
        <Tab sx={{ padding: "5px 3px" }}>
          <MenuItem sx={{ padding: "0px", margin: "0px", fontSize: "10px" }}>
            <ListItemIcon sx={{ minWidth: "25px !important" }}>
              <QuestionMarkIcon fontSize="small" />
            </ListItemIcon>
            QA Section (0)
          </MenuItem>
        </Tab>
        <Tab sx={{ padding: "5px 3px" }}>
          <MenuItem sx={{ padding: "0px", margin: "0px", fontSize: "10px" }}>
            <ListItemIcon sx={{ minWidth: "25px !important" }}>
              <ListIcon fontSize="small" />
            </ListItemIcon>
            Specifications (0)
          </MenuItem>
        </Tab>
        <Tab sx={{ padding: "5px 3px" }}>
          <MenuItem sx={{ padding: "0px", margin: "0px", fontSize: "10px" }}>
            <ListItemIcon sx={{ minWidth: "25px !important" }}>
              <VisibilityIcon fontSize="small" />
            </ListItemIcon>
            Contact Seller
          </MenuItem>
        </Tab>
      </TabsList>

      <TabPanel value={0}>
        <Box sx={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <Typography>Ok</Typography>
        </Box>
      </TabPanel>
      <TabPanel value={1}>
        <Box sx={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <Typography>Review Status (1) | (Avg 5.0/5)</Typography>
        </Box>

        <Box sx={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <Typography>5 Stars 100%</Typography>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{
              height: "12px",
              borderRadius: "20px",
              backgroundColor: "#e9ecef",
            }}
          />
        </Box>

        <Box sx={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <Typography>4 Stars 80%</Typography>
          <LinearProgress
            variant="determinate"
            value={80}
            sx={{
              height: "12px",
              borderRadius: "20px",
              backgroundColor: "#e9ecef",
            }}
          />
        </Box>

        <Box sx={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <Typography>3 Stars 60%</Typography>
          <LinearProgress
            variant="determinate"
            value={60}
            sx={{
              height: "12px",
              borderRadius: "20px",
              backgroundColor: "#e9ecef",
            }}
          />
        </Box>

        <Box sx={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <Typography>2 Stars 40%</Typography>
          <LinearProgress
            variant="determinate"
            value={40}
            sx={{
              height: "12px",
              borderRadius: "20px",
              backgroundColor: "#e9ecef",
            }}
          />
        </Box>

        <Box sx={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <Typography>1 Stars 20%</Typography>
          <LinearProgress
            variant="determinate"
            value={20}
            sx={{
              height: "12px",
              borderRadius: "20px",
              backgroundColor: "#e9ecef",
            }}
          />
        </Box>
      </TabPanel>

      <TabPanel value={2}>
        <Box sx={{ width: "90%", margin: "auto", marginTop: "10px" }}>
          <Typography variant="subtitle1">Previous Question Answers</Typography>
        </Box>

        {shopQA.map((item) => (
          <Box
            key={item.id}
            sx={{ width: "90%", margin: "auto", marginTop: "1px" }}
          >
            <Box sx={{ display: "flex" }}>
              <Typography
                variant="caption"
                component="span"
                sx={{ padding: "0px", margin: "0px" }}
              >
                <MenuItem sx={{ padding: "0px", margin: "0px" }}>
                  <ListItemIcon
                    className="pera"
                    sx={{
                      padding: "0px",
                      minWidth: "17px !important",
                      marginRight: "5px",
                    }}
                  >
                    <ContactSupportIcon
                      sx={{
                        padding: "0px",
                        fontSize: "15px",
                      }}
                    />
                  </ListItemIcon>
                  {item.question}
                </MenuItem>
              </Typography>

              <Typography
                variant="caption"
                component="span"
                sx={{
                  backgroundColor: "#868e96",
                  color: "var(--white)",
                  padding: "0px 3px",
                  marginLeft: "5px",
                  marginTop: "5px",
                  height: "18px",
                  borderRadius: "10px",
                }}
              >
                {item.time}
              </Typography>
            </Box>

            <Box sx={{ padding: "5px 20px" }}>
              {item.isAnswered ? (
                item.isAdmin ? (
                  <Box>
                    <Typography variant="caption" sx={{ margin: "10px 0px" }}>
                      {item.answer}{" "}
                    </Typography>
                    <Typography component="div">
                      <Button
                        size="small"
                        sx={{
                          marginRight: "5px",
                          padding: "0px",
                          minWidth: "0px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            padding: "0px",
                          },
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        sx={{
                          marginLeft: "5px",
                          padding: "0px",
                          minWidth: "0px",
                          "&:hover": {
                            backgroundColor: "transparent",
                            padding: "0px",
                          },
                        }}
                      >
                        Delete
                      </Button>
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="caption" sx={{ margin: "10px 0px" }}>
                    {item.answer}
                  </Typography>
                )
              ) : item.isAdmin ? (
                <Box>
                  <Accordion
                    sx={{
                      boxShadow: "none",
                      padding: "10px 0px",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<KeyboardArrowDownIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={styles.expandedd_accordion_title}
                      sx={{
                        display: "inline-flex",
                        justifyContent: "flex-start",
                        alignItems: "start",
                        padding: "0px",
                        minHeight: "0px !important",
                        "& > .MuiAccordionSummary-content": {
                          margin: "0px",
                        },
                      }}
                    >
                      <Typography
                        className="name-munna2"
                        sx={{
                          color: "var(--primary)",
                          margin: "0px",
                          minHeight: "0px",
                        }}
                      >
                        reply
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails
                      sx={{
                        padding: "0px",
                        marginTop: "20px",
                      }}
                    >
                      <InputLabel shrink htmlFor="last_name">
                        <Typography sx={{ marginLeft: "5px" }} component="div">
                          Answer
                        </Typography>
                      </InputLabel>

                      <OutlinedInput
                        sx={{ backgroundColor: "white" }}
                        fullWidth
                        size="small"
                        placeholder="Answer"
                      />

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          fontSize: "12px",
                          backgroundColor: "var(--primary)",
                          color: "white",
                          marginTop: "10px",
                        }}
                      >
                        Submit
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ) : (
                <Box>
                  <Typography>Ans :: </Typography>
                </Box>
              )}
            </Box>
          </Box>
        ))}

        <Box sx={{ width: "90%", margin: "10px auto 20px" }}>
          <fieldset style={{ padding: "20px", border: "1px solid #ddd" }}>
            <legend>
              {" "}
              <Typography
                sx={{ marginLeft: "5px" }}
                variant="caption"
                component="div"
              >
                Ask Question
              </Typography>
            </legend>

            <OutlinedInput
              sx={{ backgroundColor: "white", fontSize: "12px" }}
              fullWidth
              size="small"
              placeholder="Ask Your Question"
            />
            <Button
              type="submit"
              variant="contained"
              startIcon={
                <SendIcon
                  sx={{
                    transform: "rotate(-45deg)",
                    marginRight: "-5px !important",
                    marginTop: "-5px !important",
                  }}
                />
              }
              sx={{
                backgroundColor: "#868e96",
                fontSize: "12px",
                color: "white",
                marginTop: "10px",
                "&:hover": {
                  backgroundColor: "var(--primary)",
                },
              }}
            >
              Submit
            </Button>
          </fieldset>
        </Box>
      </TabPanel>

      <TabPanel value={3}>
        <Box sx={{ width: "90%", margin: "10px auto" }}>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "30%", border: "1px solid #e9ecef" }}>
                    Brand Name
                  </TableCell>
                  <TableCell sx={{ width: "70%", border: "1px solid #e9ecef" }}>
                    Value
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: "30%", border: "1px solid #e9ecef" }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ width: "30%", border: "1px solid #e9ecef" }}
                    >
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </TabPanel>

      <TabPanel value={4}>
        <Box sx={{ width: "90%", margin: "10px auto" }}>
          <Typography>Contact With This Product Seller</Typography>
          <Grid container>
            <Grid item xs={12} mt={2}>
              <OutlinedInput
                type="text"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  fontSize: "12px",
                }}
                fullWidth
                size="small"
                placeholder="Name"
              />
            </Grid>

            <Grid item xs={12} mt={2}>
              <OutlinedInput
                type="email"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  fontSize: "12px",
                }}
                fullWidth
                size="small"
                placeholder="Contact Email"
              />
            </Grid>

            <Grid item xs={12} mt={2}>
              <OutlinedInput
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  fontSize: "12px",
                }}
                fullWidth
                size="small"
                placeholder="Write Details Here"
              />
            </Grid>

            <Grid item xs={12} mt={2}>
              <OutlinedInput
                type="file"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  fontSize: "12px",
                }}
                fullWidth
                size="small"
                placeholder="Choose File"
              />
            </Grid>

            <Grid item xs={12} mt={2}>
              <Button
                type="submit"
                variant="contained"
                startIcon={
                  <SendIcon
                    sx={{
                      transform: "rotate(-45deg)",
                      marginRight: "-5px !important",
                      marginTop: "-5px !important",
                    }}
                  />
                }
                sx={{
                  backgroundColor: "#868e96",
                  fontSize: "12px",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "var(--primary)",
                  },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
    </TabsUnstyled>
  );
}
