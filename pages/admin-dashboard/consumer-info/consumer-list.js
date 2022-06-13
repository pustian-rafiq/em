import React from 'react'
import AdminDashboardLayout from '../../../components/Dashboard/AdminDashboard/AdminDashboardLayout';
import ClearIcon from '@mui/icons-material/Clear';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { Button, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { visuallyHidden } from '@mui/utils';
import Link from 'next/link';

import { gql } from "@apollo/client";
import client from "../../../endpoints/Client";

function createData(
  no,
  consumer_name,
  consumer_id,
  consumer_phone,
  consumer_email,
  refer_byid,
  reference1_id,
  reference2_id,
  password
) {
  return {
    no,
    consumer_name,
    consumer_id,
    consumer_phone,
    consumer_email,
    refer_byid,
    reference1_id,
    reference2_id,
    password
  };
}

const rows = [
  createData(1, 'Md.Rafiqul Islam', '1111250', '01991166550', 'rafiqul.pust.cse@gmail.com', 0, 1 - 1111157, 2 - 1111157, 'testpass123'),
  createData(2, 'Md.Rabiul Islam', '1111251', '01991166550', 'rafiqul.pust.cse@gmail.com', 0, 1 - 1111157, 2 - 1111157, 'testpass123'),
  createData(3, 'Md.Rakibul Islam', '1111252', '01991166550', 'rafiqul.pust.cse@gmail.com', 0, 1 - 1111157, 2 - 1111157, 'testpass123'),
  createData(4, 'Md.Rafiul Islam', '1111253', '01991166550', 'rafiqul.pust.cse@gmail.com', 0, 1 - 1111157, 2 - 1111157, 'testpass123'),
  createData(5, 'Md.Mohidul Islam', '1111254', '01991166550', 'rafiqul.pust.cse@gmail.com', 0, 1 - 1111157, 2 - 1111157, 'testpass123'),

];

function descendingComparator(a, b, orderBy) {

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'no',
    numeric: false,
    disablePadding: true,
    label: 'No.',
  },
  {
    id: 'consumer_name',
    numeric: true,
    disablePadding: false,
    label: "Consumer Name",
  },
  {
    id: 'consumer_id',
    numeric: true,
    disablePadding: false,
    label: 'Consumer ID',
  },
  {
    id: 'consumer_phone',
    numeric: true,
    disablePadding: false,
    label: 'Consumer Phone',
  },

  {
    id: 'consumer_email',
    numeric: true,
    disablePadding: false,
    label: 'Consumer Email',
  },
  {
    id: 'refer_byid',
    numeric: true,
    disablePadding: false,
    label: 'Refered By ID',
  },
  {
    id: 'reference1_id',
    numeric: true,
    disablePadding: false,
    label: 'Reference1 ID',
  },
  {
    id: 'reference2_id',
    numeric: true,
    disablePadding: false,
    label: 'Reference2 ID',
  },
  {
    id: 'password',
    numeric: true,
    disablePadding: false,
    label: 'Password',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead  >
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            //align={headCell.numeric ? 'right' : 'left'}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ paddingLeft: '10px', background: 'rgb(235, 235, 235)' }}
            className="tableBorder"
            sx={{ fontSize: { xs: '12px', md: '15px' } }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const ConsumerList = ({consumers}) => {


  //console.log("consumers",consumers.edges[0].node.username)

  const [searchText, setSearchText] = React.useState("");

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('sl');
  const [selected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const searchTextHandler = () => {
    setSearchText("")
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  //Show bank data and searches real time
  // const tableDatas = consumers.edges?.filter((search) => {
  //   return (
  //     search.consumer_name.toLowerCase().includes(searchText.toLowerCase()) ||
  //     search.consumer_id.toLowerCase().includes(searchText.toLowerCase()) ||
  //     search.refer_byid.toLowerCase().includes(searchText.toLowerCase()) ||
  //     search.reference1_id.toLowerCase().includes(searchText.toLowerCase()) ||
  //     search.reference2_id.toLowerCase().includes(searchText.toLowerCase()) ||
  //     search.consumer_email.toLowerCase().includes(searchText.toLowerCase())
  //   );
  // });
  const tableData = stableSort(consumers?.edges, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      // const labelId = `enhanced-table-checkbox-${index}`;

      return (
        <TableRow
          hover={true}
          tabIndex={-1}
          key={row.cin}
          style={{ background: 'rgb(247, 247, 247)' }}
          className="rowHover"
        >
          <TableCell component="th" scope="row" className="tableBorder"> {row.node.id}</TableCell>
          <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}>{row.node.username}</TableCell>
          {/* <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}>{row.consumer_id}</TableCell>
          <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}>{row.consumer_phone}</TableCell>
          <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}>{row.consumer_email}</TableCell>
          <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}>{row.refer_byid}</TableCell>
          <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}>{row.reference1_id}</TableCell>
          <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}>{row.reference2_id}</TableCell>
          <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}>{row.password}</TableCell>*/}
          <TableCell className="tableBorder" align="left" sx={{ fontSize: { xs: '12px', md: '15px' } }}> 
            <Link href={`./edit/${row.no}`} passHref>
              <Button className="selectButton ">
                Edit
              </Button>
            </Link>
          </TableCell>

        </TableRow>
      );
    })
  return (
    <>
      <Typography sx={{
        fontSize: { xs: '18px', md: '25px', lg: '30px' },
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#6C757D',
        mb: 2
      }} >
        Master Consumer List
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Box sx={{ width: '100%' }} style={{ paddingRight: '5px' }} >
        <Paper sx={{ width: '100%', mb: 2, mt: 3 }} style={{ paddingRight: '10px', paddingLeft: '10px' }} >
          <div style={{ marginTop: '10px' }} className="searchSection" >
            <div className="searchLabel">
              Search
            </div>
            <div className="searchInput">
              <input type="text" placeholder='Search for name, address and others..'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <ClearIcon className="clearIcon" onClick={searchTextHandler} />
            </div>
          </div>
          <TableContainer style={{ marginTop: '0px', background: 'white' }} >
            <Table
              // sx={{ minWidth: 750 }}
              sx={{
                "& .MuiTableRow-root:hover": {
                  backgroundColor: "red"
                },
                minWidth: 750
              }}
              aria-labelledby="tableTitle"
              size="small"
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                //rowCount={tableDatas.length}
              />
              <TableBody>
                {/* Show tbale bodt data */}
                {tableData}

                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 93 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 50, 100]}
            component="div"
            //count={tableDatas.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  )
}
export default ConsumerList

ConsumerList.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};

//Fetch data using graphql

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
     query {
  allConsumerNode(last:10){
        edges{
          node{
            username
            id
            isMaster
            
          }
        }
        pageInfo{
          endCursor
          hasNextPage
          startCursor
          hasPreviousPage
        }
    }
  }
    `,
  });

  return {
    props: {
      consumers: data.allConsumerNode,
    },
  };
}