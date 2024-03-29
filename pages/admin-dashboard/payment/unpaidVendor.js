import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import ClearIcon from '@mui/icons-material/Clear';
import { Autocomplete, Button, ButtonBase, Divider, Grid, TextField } from '@mui/material';
import AdminDashboardLayout from "../../../components/Dashboard/AdminDashboard/AdminDashboardLayout";
import Link from 'next/link';


const rows = [
  {
    sl: 1,
    name: "Jon",
    cin: '111001',
    account_no: '1100810123823',
    total_amt: 100,
  },
  {
    sl: 2,
    name: "Jon",
    cin: '111089991',
    account_no: '01711571561',
    total_amt:300,
  },
  {
    sl: 3,
    name: "Joneee",
    cin: '111001111',
    account_no: '01711571561',
    total_amt:400,
  },
  {
    sl: 4,
    name: "Jon",
    cin: '1110',
    account_no: '01711571561',
    total_amt: 100,
  },
 
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
    numeric: true,
    disablePadding: true,
    label: 'SL.',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'cin',
    numeric: false,
    disablePadding: false,
    label: 'CIN',
  },

  {
    id: 'bkash',
    numeric: false,
    disablePadding: false,
    label: 'Bkash Acount.',
  },
  {
    id: 'total_amt',
    numeric: false,
    disablePadding: false,
    label: 'Total Amount',
  },
   
  {
    id: 'payment',
    numeric: false,
    disablePadding: false,
    label: 'Payment',
  },
];
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };


  return (
    <TableHead>
      <TableRow>

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            style={{ paddingLeft: '10px' }}
            align="left"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            className="tableBorder headbackground"
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
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
 
const UnPaidVendor = () => {

  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('no');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const searchTextHandler = () => {
    setSearchText("")
  }
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.sl);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, sl) => {
    const selectedIndex = selected.indexOf(sl);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, sl);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (sl) => selected.indexOf(sl) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  //Show bank data and searches real time
  const tableDatas = rows.filter((search) => {
    return (
      search.name.toLowerCase().includes(searchText.toLowerCase()) ||
      search.cin.toLowerCase().includes(searchText.toLowerCase()) ||
      search.account_no.toLowerCase().includes(searchText.toLowerCase())

    );
  });

  const tableData = stableSort(tableDatas, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      const isItemSelected = isSelected(row.sl);
      const labelId = `enhanced-table-checkbox-${index}`;

      return (
        <TableRow
          hover
          onClick={(event) => handleClick(event, row.sl)}
          role="checkbox"
          aria-checked={isItemSelected}
          tabIndex={-1}
          key={row.sl}
          selected={isItemSelected}
          className="rowHover"
        >
          <TableCell className="tableBorder" component="th" id={labelId} scope="row" align="left">{row.sl}</TableCell>
          <TableCell className="tableBorder" align="left">{row.name}</TableCell>
          <TableCell className="tableBorder" align="left">{row.cin}</TableCell>
          <TableCell className="tableBorder" align="left">{row.account_no}</TableCell>
          <TableCell className="tableBorder" align="left">{row.total_amt}</TableCell>
          <TableCell className="tableBorder" align="left">
          <Link href={`/admin-dashboard/tax/update/${row.sl}/`} passHref>
              <Button sx={{color:'#fff',textTransform:'capitalize', mr: 1, cursor: 'pointer', background: '#4F5ECE', borderRadius: '3px', padding: '5px 2px' }}>Pay Him</Button>
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
        marginBottom:'20px'
      }} >
       Unpaid Vendor
      </Typography>
      <Divider />
      <Box sx={{ width: '100%' }} style={{ paddingRight: '5px' }} >
        <Paper sx={{ width: '100%', mb: 2, mt: 3,pb:3 }} style={{ paddingRight: '15px', paddingLeft: '15px' }}>
          <div style={{ marginTop: '0px' }} className="searchSection" >
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
          <TableContainer style={{ marginTop: '0px', background: 'white' }}>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size="small"
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
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
            rowsPerPageOptions={[5, 10, 25]}
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
};

export default UnPaidVendor;

UnPaidVendor.getLayout = function pageLayout(page) {
  return <AdminDashboardLayout>{page}</AdminDashboardLayout>;
};
