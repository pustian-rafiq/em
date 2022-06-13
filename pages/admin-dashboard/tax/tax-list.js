


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TableSortLabel from '@mui/material/TableSortLabel';
import ClearIcon from '@mui/icons-material/Clear';
import { Divider, Typography } from '@mui/material';
import Link from 'next/link';
import Add from "@mui/icons-material/Add";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';

function createData(sl, sector, country,  percentage) {
  return {
    sl, sector, country,  percentage
  };
}

const rows = [
  createData(1, 'tax1', 'Algeria','24.0'),
  createData(2, 'tax2', 'Algeria','334.0'),
  createData(3, 'tax3', 'Algeria','44.0'),
  createData(4, 'tax4', 'Algeria','414.0'),
  createData(5, 'tax5', 'Algeria','164.0'),
 
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
    id: 'sector',
    numeric: false,
    disablePadding: false,
    label: 'Sector',
  },
 
  {
    id: 'country',
    numeric: false,
    disablePadding: false,
    label: 'Country',
  },
  {
    id: 'percentage',
    numeric: false,
    disablePadding: false,
    label: 'Percentage(%)',
  },

 
  {
    id: 'action',
    numeric: false,
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
      <TableRow >

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            style={{ paddingLeft: '10px', background: 'rgb(235, 235, 235)' }}
            sortDirection={orderBy === headCell.id ? order : false}
            className="tableBorder"
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
    </TableHead >
  );
}
EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const TaxtList = () => {

  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('no');
  const [selected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
      search.country.toLowerCase().includes(searchText.toLowerCase())
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
          style={{ background: 'rgb(247, 247, 247)' }}
          className="rowHover"
        >

          <TableCell className="tableBorder" id={labelId} component="th" scope="row">{row.sl}</TableCell>
          <TableCell className="tableBorder" align="left">{row.sector}</TableCell>
          <TableCell className="tableBorder" align="left">{row.country}</TableCell>
          <TableCell className="tableBorder" align="left">{row.percentage}</TableCell>
          <TableCell className="tableBorder " align="left" style={{width:'5%'}} >
            <Link href={`/admin-dashboard/tax/update/${row.sl}/`} passHref>
              <Typography
                variant='span' component='span' sx={{ cursor: 'pointer', background: '#FF990D', borderRadius: '3px', padding: '10px 2px'}}>
                <Tooltip title="Update Tax">
                  <IconButton sx={{color: '#fff'}}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </IconButton>
                </Tooltip>
              </Typography>
            </Link>
          </TableCell>
        </TableRow>
      );
    })
  return (
    <div>
      <Typography sx={{
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#6C757D',
      }} >
    Tax List
      </Typography>
      <Divider />

      <Box sx={{ width: '100%' }} style={{ paddingRight: '5px' }} >
        <Paper sx={{ width: '100%', mb: 2, mt: 3 }} style={{ paddingRight: '15px', paddingLeft: '15px' }} >
          <Typography variant="h4" component="div" sx={{
            background: '#0DA8EE',
            width: '145px',
            fontSize: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            float: 'right',
            color: '#fff',
            borderRadius: '20px',
            mt: 2,
            cursor: 'pointer',
            py: 1
          }}>
            <Add />
            <Link href="/admin-dashboard/tax/create-tax/">
              Add New Tax
            </Link>
          </Typography>

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
              sx={{

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
              <TableBody>
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
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
}

export default TaxtList;

TaxtList.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
