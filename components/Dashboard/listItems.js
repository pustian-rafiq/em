import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import TvTwoToneIcon from "@mui/icons-material/TvTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import MailTwoToneIcon from "@mui/icons-material/MailTwoTone";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import DockTwoToneIcon from "@mui/icons-material/DockTwoTone";
import Inventory2TwoToneIcon from "@mui/icons-material/Inventory2TwoTone";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import WebTwoToneIcon from "@mui/icons-material/WebTwoTone";
import PieChartTwoToneIcon from "@mui/icons-material/PieChartTwoTone";
import HistoryTwoToneIcon from "@mui/icons-material/HistoryTwoTone";
import NotificationsTwoToneIcon from "@mui/icons-material/NotificationsTwoTone";
import HelpTwoToneIcon from "@mui/icons-material/HelpTwoTone";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import Link from "next/link";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

const listSubHeaderStyle = {
  backgroundColor: "#45b9e0",
  color: "#ffffff",
  paddingLeft: "20px",
  lineHeight: "30px",
  textTransform: "uppercase",
  fontSize: "10px",
  fontWeight: 600,
};
const listItemTextStyle = {
  "& .MuiListItemText-primary": {
    color: "#60686f",
    fontWeight: 600,
    fontSize: "14px",
  },
};
const accordionistItemTextStyle = {
  "& .MuiListItemText-primary": {
    color: "#60686f",
    fontWeight: 400,
    fontSize: "13px",
  },
};

const accordionStyle = {
  "&.MuiAccordion-root": {
    "::before": {
      backgroundColor: "none",
      opacity: 0,
    },
    "&.MuiPaper-root": {
      boxShadow: "none",
    },
  },
};

export const mainListItems = (
  <>
    {/* First section starts here */}
    <ListSubheader inset sx={listSubHeaderStyle}>
      Main
    </ListSubheader>
    <Link href={"/"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <StarTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Go to Website" />
        </ListItemButton>
      </a>
    </Link>
    <Link href={"/dashboard"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <TvTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Dashboard" />
        </ListItemButton>
      </a>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <LanguageTwoToneIcon />
      </ListItemIcon>
      <ListItemText sx={listItemTextStyle} primary="My Website" />
    </ListItemButton>
    <a href="https://mail.worldehsan.com/mail/">
      <ListItemButton>
        <ListItemIcon>
          <MailTwoToneIcon />
        </ListItemIcon>
        <ListItemText sx={listItemTextStyle} primary="Go to Email" />
      </ListItemButton>
    </a>

    {/* First section ends here */}
    {/* Second section starts here */}
    <ListSubheader component="div" inset sx={listSubHeaderStyle}>
      Reference Info
    </ListSubheader>
    <Link href={"/dashboard/reference-info/root-masters"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <AttachMoneyTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Root/Masters" />
        </ListItemButton>
      </a>
    </Link>
    <Link href={"/dashboard/reference-info/reference1"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <AttachMoneyTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Reference-1" />
        </ListItemButton>
      </a>
    </Link>
    <Link href={"/dashboard/reference-info/reference2"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <AttachMoneyTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Reference-2" />
        </ListItemButton>
      </a>
    </Link>
    {/* Second section ends here */}
    {/* Third section starts here */}
    <ListSubheader component="div" inset sx={listSubHeaderStyle}>
      My inventory
    </ListSubheader>
    <Link href={"/dashboard/inventory/doc"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <DockTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="How to add? Doc" />
        </ListItemButton>
      </a>
    </Link>
    {/* =============accordion start=========== */}
    <Accordion sx={accordionStyle}>
      <ListItemButton
        sx={{
          py: 0,
          border: "none",
        }}
      >
        <ListItemIcon>
          <Inventory2TwoToneIcon />
        </ListItemIcon>
        <ListItemText sx={listItemTextStyle}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&.MuiAccordionSummary-root": {
                pl: 0,
                border: "none",
              },
              "&.MuiButtonBase-root": {
                border: "none",
                py: 0,
              },
            }}
          >
            WareHouse
          </AccordionSummary>
        </ListItemText>
      </ListItemButton>

      <AccordionDetails>
        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon
              // sx={{
              //   "&.MuiListItemIcon-root": {
              //     display: "inline",
              //     color: "red",
              //     ":hover": {
              //       pl: "20px",
              //     },
              //   },
              // }}
              >
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Add Warehouse"
              />
            </ListItemButton>
          </a>
        </Link>

        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Warehouse List"
              />
            </ListItemButton>
          </a>
        </Link>

        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Add Product"
              />
            </ListItemButton>
          </a>
        </Link>
        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="All Products"
              />
            </ListItemButton>
          </a>
        </Link>

        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="All Variants"
              />
            </ListItemButton>
          </a>
        </Link>

        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Tag Manage"
              />
            </ListItemButton>
          </a>
        </Link>

        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Product Unit"
              />
            </ListItemButton>
          </a>
        </Link>

        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Offer Manage"
              />
            </ListItemButton>
          </a>
        </Link>
      </AccordionDetails>
    </Accordion>
    {/* ============================ */}
    <Accordion sx={accordionStyle}>
      <ListItemButton
        sx={{
          py: 0,
        }}
      >
        <ListItemIcon>
          <LocalMallTwoToneIcon />
        </ListItemIcon>
        <ListItemText sx={listItemTextStyle}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&.MuiAccordionSummary-root": {
                pl: 0,
                border: "none",
              },
              "&.MuiButtonBase-root": {
                border: "none",
                py: 0,
              },
            }}
          >
            Shop
          </AccordionSummary>
        </ListItemText>
      </ListItemButton>
      <AccordionDetails>
        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText sx={accordionistItemTextStyle} primary="Add Shop" />
            </ListItemButton>
          </a>
        </Link>
        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Shop List"
              />
            </ListItemButton>
          </a>
        </Link>
        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Publish Products"
              />
            </ListItemButton>
          </a>
        </Link>
      </AccordionDetails>
    </Accordion>
    {/* ================================================= */}
    <Accordion sx={accordionStyle}>
      <ListItemButton
        sx={{
          py: 0,
        }}
      >
        <ListItemIcon>
          <ShoppingCartTwoToneIcon />
        </ListItemIcon>
        <ListItemText sx={listItemTextStyle}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&.MuiAccordionSummary-root": {
                pl: 0,
                border: "none",
              },
              "&.MuiButtonBase-root": {
                border: "none",
                py: 0,
              },
            }}
          >
            Order
          </AccordionSummary>
        </ListItemText>
      </ListItemButton>
      <AccordionDetails>
        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Order List"
              />
            </ListItemButton>
          </a>
        </Link>
        <Link href={"/dashboard/inventory/doc"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="My Orders"
              />
            </ListItemButton>
          </a>
        </Link>
      </AccordionDetails>
    </Accordion>
    {/* =============accordion end=========== */}
    {/* Third section ends here */}
    {/* Fourth section starts here */}
    <ListSubheader component="div" inset sx={listSubHeaderStyle}>
      Commissions
    </ListSubheader>
    {/* =============accordion start=========== */}
    <Accordion sx={accordionStyle}>
      <ListItemButton
        sx={{
          py: 0,
        }}
      >
        <ListItemIcon>
          <WebTwoToneIcon />
        </ListItemIcon>
        <ListItemText sx={listItemTextStyle}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&.MuiAccordionSummary-root": {
                pl: 0,
                border: "none",
              },
              "&.MuiButtonBase-root": {
                border: "none",
                py: 0,
              },
            }}
          >
            Direct GC
          </AccordionSummary>
        </ListItemText>
      </ListItemButton>
      <AccordionDetails>
        <Link href={"/dashboard/commisions/directcommision/send"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Send Commisions"
              />
            </ListItemButton>
          </a>
        </Link>

        <Link href={"/dashboard/commisions/directcommision/payment"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText sx={accordionistItemTextStyle} primary="Pay Now" />
            </ListItemButton>
          </a>
        </Link>
        <Link href={"/dashboard/commisions/directcommision/mypaidlist"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="My Paid DC"
              />
            </ListItemButton>
          </a>
        </Link>
        <Link href={"/dashboard/commisions/directcommision/paid"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Paid Commission"
              />
            </ListItemButton>
          </a>
        </Link>
      </AccordionDetails>
    </Accordion>
    {/* ============================ */}
    <Accordion sx={accordionStyle}>
      <ListItemButton
        sx={{
          py: 0,
        }}
      >
        <ListItemIcon>
          <WebTwoToneIcon />
        </ListItemIcon>
        <ListItemText sx={listItemTextStyle}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&.MuiAccordionSummary-root": {
                pl: 0,
                border: "none",
              },
              "&.MuiButtonBase-root": {
                border: "none",
                py: 0,
              },
            }}
          >
            Direct RC
          </AccordionSummary>
        </ListItemText>
      </ListItemButton>
      <AccordionDetails>
        <Link href={"/dashboard/commisions/direct-rc/received"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Direct PC"
              />
            </ListItemButton>
          </a>
        </Link>
        <Link href={"/dashboard/commisions/direct-rc/pending"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="Direct PC Pending"
              />
            </ListItemButton>
          </a>
        </Link>
      </AccordionDetails>
    </Accordion>
    {/* ================================================= */}
    <Accordion sx={accordionStyle}>
      <ListItemButton
        sx={{
          py: 0,
        }}
      >
        <ListItemIcon>
          <WebTwoToneIcon />
        </ListItemIcon>
        <ListItemText sx={listItemTextStyle}>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              "&.MuiAccordionSummary-root": {
                pl: 0,
                border: "none",
              },
              "&.MuiButtonBase-root": {
                border: "none",
                py: 0,
              },
            }}
          >
            Online OC
          </AccordionSummary>
        </ListItemText>
      </ListItemButton>
      <AccordionDetails>
        <Link href={"/dashboard/commisions/online/purchase/paid"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText sx={accordionistItemTextStyle} primary="OOPC" />
            </ListItemButton>
          </a>
        </Link>
        <Link href={"/dashboard/commisions/online/purchase/pending"}>
          <a>
            <ListItemButton>
              <ListItemIcon>
                <ChevronRightTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                sx={accordionistItemTextStyle}
                primary="OOPC Pending"
              />
            </ListItemButton>
          </a>
        </Link>
      </AccordionDetails>
    </Accordion>
    {/* =============accordion end=========== */}
    <Link href={"/dashboard/commisions/direct-rc/pending"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <WebTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="RC (DC+OOC)" />
        </ListItemButton>
      </a>
    </Link>
    <Link href={"/dashboard/commisions/summary"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <PieChartTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Summary" />
        </ListItemButton>
      </a>
    </Link>
    {/* Fourth section ends here */}
    {/* Fifth section starts here */}
    <ListSubheader inset sx={listSubHeaderStyle}>
      Withdraw
    </ListSubheader>
    <Link href={"/dashboard/withdraw/transactions"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <AttachMoneyTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Withdraw Money" />
        </ListItemButton>
      </a>
    </Link>
    <Link href={"/dashboard/withdraw/history"}>
      <a>
        <ListItemButton>
          <ListItemIcon>
            <HistoryTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle} primary="Withdraw History" />
        </ListItemButton>
      </a>
    </Link>
    {/* Fifth section ends here */}
    {/* Sixth section starts here */}
    <ListSubheader component="div" inset sx={listSubHeaderStyle}>
      Info
    </ListSubheader>
    {/* =============accordion start=========== */}
    <div>
      <Accordion sx={accordionStyle}>
        <ListItemButton
          sx={{
            py: 0,
          }}
        >
          <ListItemIcon>
            <NotificationsTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                "&.MuiAccordionSummary-root": {
                  pl: 0,
                  border: "none",
                },
                "&.MuiButtonBase-root": {
                  border: "none",
                  py: 0,
                },
              }}
            >
              Notice
            </AccordionSummary>
          </ListItemText>
        </ListItemButton>
        <AccordionDetails>
          <Link href={"/dashboard/notice/notices/"}>
            <a>
              <ListItemButton>
                <ListItemIcon>
                  <ChevronRightTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  sx={accordionistItemTextStyle}
                  primary="Notices"
                />
              </ListItemButton>
            </a>
          </Link>
          <Link href={"/dashboard/notice/noticecategories/"}>
            <a>
              <ListItemButton>
                <ListItemIcon>
                  <ChevronRightTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  sx={accordionistItemTextStyle}
                  primary="Notices Categories"
                />
              </ListItemButton>
            </a>
          </Link>
        </AccordionDetails>
      </Accordion>
      {/* ============================ */}
      <Accordion sx={accordionStyle}>
        <ListItemButton
          sx={{
            py: 0,
          }}
        >
          <ListItemIcon>
            <HelpTwoToneIcon />
          </ListItemIcon>
          <ListItemText sx={listItemTextStyle}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                "&.MuiAccordionSummary-root": {
                  pl: 0,
                  border: "none",
                },
                "&.MuiButtonBase-root": {
                  border: "none",
                  py: 0,
                },
              }}
            >
              Help
            </AccordionSummary>
          </ListItemText>
        </ListItemButton>
        <AccordionDetails>
          <Link href={"/dashboard/commisions/directcommision/paid"}>
            <a>
              <ListItemButton>
                <ListItemIcon>
                  <ChevronRightTwoToneIcon />
                </ListItemIcon>
                <ListItemText
                  sx={accordionistItemTextStyle}
                  primary="Message"
                />
              </ListItemButton>
            </a>
          </Link>
        </AccordionDetails>
      </Accordion>
    </div>
    {/* ============accordion ends============== */}
    {/* Sixth section ends here */}
  </>
);
