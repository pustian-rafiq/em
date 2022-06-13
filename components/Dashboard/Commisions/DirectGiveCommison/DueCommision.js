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
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from '../../../../pages/dashboard/commisions/directcommision/DirectCommision.module.css'

//import styles from '../styles/DataTable.module.css'

import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "white",
      },
      '&:nth-of-type(even)': {
        backgroundColor: "grey",
      },
    },
  }))(TableRow);

function createData(sl, cin, salesprice, commision, salespriceusd, commisionusd, select) {
    return {
        sl,
        cin,
        salesprice,
        commision,
        salespriceusd,
        commisionusd,
        select
    };
}

const rows = [
    createData(1, 'Cupcake', 305, 3.7, 67, 4.3,),
    createData(2, 'Donut', 452, 25.0, 51, 4.9,),
    createData(3, 'Eclair', 262, 16.0, 24, 6.0,),
    createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
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
        id: 'cin',
        numeric: true,
        disablePadding: false,
        label: "Receiver's CIN",
    },
    {
        id: 'salesprice',
        numeric: true,
        disablePadding: false,
        label: 'Sales Price',
    },
    {
        id: 'commision',
        numeric: true,
        disablePadding: false,
        label: 'Commission',
    },
    {
        id: 'salespriceusd',
        numeric: true,
        disablePadding: false,
        label: 'Sales Price in USD($)',
    },
    {
        id: 'commisionusd',
        numeric: true,
        disablePadding: false,
        label: 'Commission in USD($)',
    },
    {
        id: 'select',
        numeric: false,
        disablePadding: false,
        label: 'Select',
    },
];


function EnhancedTableHead(props) {
    const {order, orderBy,onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead  >
            <StyledTableRow>

                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        //align={headCell.numeric ? 'right' : 'left'}
                        align="left"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        style={{ paddingLeft: '10px', background: 'rgb(247, 247, 247)', background: 'rgb(235, 235, 235)' }}
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
                {/* <TableCell  className="tableBorder" padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all rows',
                        }}
                    />
                </TableCell> */}
            </StyledTableRow>
        </TableHead >
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    //onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >

                </Typography>
            )}
            {/* 
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )} */}
        </Toolbar>
    );
};
EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};


const DueCommision = () => {
    const [searchText, setSearchText] = React.useState("");

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [commision, setCommision] = useState(0);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const searchTextHandler = () => {
        setSearchText("")
    }

    // const handleSelectAllClick = (event) => {
    //     if (event.target.checked) {
    //         const newSelecteds = rows.map((n) => n.select);
    //         setSelected(newSelecteds);
    //         return;
    //     }
    //     setSelected([]);
    // };
    const handleClick = (event, cin, getCommision) => {
        const selectedIndex = selected.indexOf(cin);
        let newSelected = [];
        commision += getCommision
        setCommision(commision)
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, cin);
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
    const isSelected = (select) => selected.indexOf(select) !== -1;
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
            const isItemSelected = isSelected(row.select);

            return (
                <TableRow
                    onClick={(event) => handleClick(event, row.cin, row.commision)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                    className="rowHover"
                    tabIndex={-1}
                    key={row.sl}
                    style={{ background: 'rgb(247, 247, 247)' }}
                >

                    <TableCell

                        className="tableBorder"
                    >
                        {row.sl}
                    </TableCell>
                    <TableCell className="tableBorder" align="left">{row.cin}</TableCell>
                    <TableCell className="tableBorder" align="left">{row.salesprice}</TableCell>
                    <TableCell className="tableBorder" align="left">{row.commision}</TableCell>
                    <TableCell className="tableBorder" align="left">{row.salespriceusd}</TableCell>
                    <TableCell component="th"id={labelId}scope="row" className="tableBorder" align="left">{row.commisionusd}</TableCell>
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                                'aria-labelledby': labelId,
                            }}
                        />
                    </TableCell>
                </TableRow>
            );
        })


    return (
        <Box sx={{ width: '100%' }} style={{ paddingRight: '5px' }} >
            <Paper sx={{ width: '100%', mb: 2, mt: 3 }} style={{ paddingRight: '15px', paddingLeft: '15px' }} >
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
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer style={{ marginTop: '0px', background: 'white' }} >
                    <Table
                        // sx={{ minWidth: 750 }}
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
                            // onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
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
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <div className={styles.submitSection}>
                <h4>Total:{commision}</h4>
                <Button className={styles.submitButton}>
                   Submit Selected for pay
                </Button>
            </div>
        </Box>
    );
}
export default DueCommision
