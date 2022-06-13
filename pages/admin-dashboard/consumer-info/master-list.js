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
import { Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { visuallyHidden } from '@mui/utils';
import FilterListIcon from '@mui/icons-material/FilterList';

function createData(sl, photo, name, cin, phone, email, reference1, reference2, total) {
  return {
    sl,
    photo,
    name,
    photo,
    cin,
    phone,
    email,
    reference1,
    reference2,
    total
  };
}

const rows = [
  createData(1, '/200/300', 'Md.Rabiul Islam', '1111250', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(2, '/200/300', 'Md.Rafiqul Islam', '1111251', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(3, '/200/300', 'Md.Rafiul Islam', '11112533', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(4, '/200/300', 'Md.Rakibul Islam', '1111252', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(5, '/200/300', 'Md.Faridul Islam', '11112522', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(6, '/200/300', 'Md.Shahibul Islam', '1111254', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(7, '/200/300', 'Md.Foridul Islam', '1111250', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(8, '/200/300', 'Md.Rafiqul Islam', '1111250', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(9, '/200/300', 'Md.Rafiqul Islam', '1111250', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(10, '/200/300', 'Md.Rafiqul Islam', '1111250', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(11, '/200/300', 'Md.Rafiqul Islam', '1111250', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),
  createData(12, '/200/300', 'Md.Rafiqul Islam', '1111250', '01991166550', 'rafiqul.pust.cse@gmail.com', 13, 15, 28),

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
    id: 'sl',
    numeric: false,
    disablePadding: true,
    label: 'SL.',
  },
  {
    id: 'photo',
    numeric: true,
    disablePadding: false,
    label: "Photo",
  },
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'cin',
    numeric: true,
    disablePadding: false,
    label: 'CIN',
  },
  {
    id: 'phone',
    numeric: true,
    disablePadding: false,
    label: 'Phone',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'reference1',
    numeric: true,
    disablePadding: false,
    label: 'Reference1',
  },
  {
    id: 'reference2',
    numeric: true,
    disablePadding: false,
    label: 'Reference2',
  },
  {
    id: 'total',
    numeric: true,
    disablePadding: false,
    label: 'Total',
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
      <TableRow >

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            //align={headCell.numeric ? 'right' : 'left'}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ paddingLeft: '10px', background: 'rgb(235, 235, 235)' }}
            className="tableBorder"
            sx={{fontSize:{xs:'12px',md:'15px'} }}
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

const MasterConsumerList = () => {
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
  const tableDatas = rows.filter((search) => {
    return (
      search.cin
        .toLowerCase()
        .includes(searchText.toLowerCase())
      //   search.calories.toLowerCase().includes(searchText.toLowerCase()) ||
      //search.fat.toLowerCase().includes(searchText.toLowerCase())
    );
  });
  const tableData = stableSort(tableDatas, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      const labelId = `enhanced-table-checkbox-${index}`;

      return (
        <TableRow
          hover={true}
          tabIndex={-1}
          key={row.sl}
          className="rowHover"
        
        >
          <TableCell
            component="th"
            id={labelId}
            scope="row"
            padding="none"
            className="tableBorder"
            align="center"
            sx={{fontSize:{xs:'12px',md:'15px'} }}
          >
            {row.sl}
          </TableCell>
          <TableCell className="tableBorder" align="left" sx={{width:'70px',height:'70px' }}>
            <Image src="/images/profile-picture.jpg" width="70" height="70" />
          </TableCell>
          <TableCell className="tableBorder" align="left"  sx={{fontSize:{xs:'12px',md:'15px'} }}>{row.name}</TableCell>
          <TableCell className="tableBorder" align="left"  sx={{fontSize:{xs:'12px',md:'15px'} }}>{row.cin}</TableCell>
          <TableCell className="tableBorder" align="left"  sx={{fontSize:{xs:'12px',md:'15px'} }}>{row.phone}</TableCell>
          <TableCell className="tableBorder" align="left"  sx={{fontSize:{xs:'12px',md:'15px'} }}>{row.email}</TableCell>
          <TableCell className="tableBorder" align="left"  sx={{fontSize:{xs:'12px',md:'15px'} }}>{row.reference1}</TableCell>
          <TableCell className="tableBorder" align="left"  sx={{fontSize:{xs:'12px',md:'15px'} }}>{row.reference2}</TableCell>
          <TableCell className="tableBorder" align="left"  sx={{fontSize:{xs:'12px',md:'15px'} }}>{row.reference1 + row.reference2}</TableCell>

        </TableRow>
      );
    })
  return (
    <>
      <Typography sx={{
        fontSize: {xs:'18px',md:'25px',lg:'30px'},
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#6C757D',
      }} >
        Master Consumer List
      </Typography>
      <Divider sx={{ mb: 5 }} />
      <Box sx={{ width: '100%' }} style={{ paddingRight: '5px' }} >
        <Paper sx={{ width: '100%', mb: 2, mt: 3 }} style={{ paddingRight: '10px', paddingLeft: '10px' }} >
          <Box style={{ marginTop: '10px' }} className="searchSection" >
            <Box className="searchLabel">
              Search
            </Box>
            <Box className="searchInput" >
              <input type="text" placeholder='Search for name, address and others..'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <ClearIcon className="clearIcon" onClick={searchTextHandler} />
            </Box>
          </Box>
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
                rowCount={tableDatas.length}
              />
              <TableBody >
                {/* Show tbale bodt data */}
                {tableData}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
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
            count={tableDatas.length}
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

export default MasterConsumerList

MasterConsumerList.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};