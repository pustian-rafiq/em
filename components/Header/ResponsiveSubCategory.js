import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const ResponsiveSubCategory = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          display: { md: "none", sm: "block" },
          backgroundColor: "gray",
          border: "1px solid green",
          padding: "15px",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor: "gray",
            color: "#fff",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: "#fff" }}>
              Arts, Crafts and Collectibles
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List
              sx={{ width: "100%", backgroundColor: "#7a7979" }}
              component="nav"
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="Arts & Craft" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open} timeout="auto">
                <List
                  component="div"
                  disablePadding
                  sx={{ backgroundColor: "#545454" }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Crafting Tool" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Craft Paint" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Crafting Tool" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Craft Paint" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Crafting Tool" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Craft Paint" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* /new mwnu list / */}

              <ListItemButton onClick={handleClick2}>
                <ListItemText primary="Collectibles" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  sx={{ backgroundColor: "#545454" }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Animation Art & Merchandise" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Arcade, Jukeboxes & Pinball" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Autographs" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Baby & Nursery" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Banks, Registers " />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Craft Paint 2" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            backgroundColor: "gray",
            color: "#fff",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ color: "#fff" }}>
              Automobile And Motocycles
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List
              sx={{ width: "100%", backgroundColor: "#7a7979" }}
              component="nav"
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText primary="Auto Replacement" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open} timeout="auto" sx={{}}>
                <List
                  component="div"
                  disablePadding
                  sx={{ backgroundColor: "#545454" }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Crafting Tool 3" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Craft Paint 3" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Crafting Tool3 " />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Craft Paint" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Crafting Tool" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Craft Paint" />
                  </ListItemButton>
                </List>
              </Collapse>

              {/* /new mwnu list / */}

              <ListItemButton onClick={handleClick2}>
                <ListItemText primary="Tools And Replacement Care" />
                {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  sx={{ backgroundColor: "#545454" }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Animation Art & Merchandise 4" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Arcade, Jukeboxes & Pinball 4" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Autographs 4" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Baby & Nursery 4" />
                  </ListItemButton>

                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Banks, Registers 4" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Art & Craft Paint 4" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default ResponsiveSubCategory;
