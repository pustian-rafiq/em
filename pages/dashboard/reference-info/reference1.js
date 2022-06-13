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
import { Divider, Grid } from '@mui/material';
import DashboardLayout from '../../../components/Dashboard/DashboardLayout';


function createData(cin, name, phone) {
  return {
    cin,
    name,
    phone
  };
}

const rows = [
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11111, 'Md. Rabiul Islam', '01991166550'),
  createData(111120, 'Md.Rafiqul Islam', '01991166550'),
  createData(111130, 'Md.Rafiqul Islam', '01991166550'),
  createData(111410, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
  createData(11110, 'Md.Rafiqul Islam', '01991166550'),
];

function EnhancedTableHead(props) {
  return (
    <TableHead  >
      <TableRow>
        <TableCell
          align="left"
          style={{ paddingLeft: '10px', background: 'rgb(247, 247, 247)', background: 'rgb(235, 235, 235)' }}
          className="tableBorder"
        > CIN</TableCell>
        <TableCell
          align="left"
          style={{ paddingLeft: '10px', background: 'rgb(247, 247, 247)', background: 'rgb(235, 235, 235)' }}
          className="tableBorder"
        >Name</TableCell>
        <TableCell
          align="left"
          style={{ paddingLeft: '10px', background: 'rgb(247, 247, 247)', background: 'rgb(235, 235, 235)' }}
          className="tableBorder"
        >Pnone</TableCell>
      </TableRow>
    </TableHead >
  );
}


const Reference1 = () => {
  const [page, setPage] = useState(0);
  const [dense] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(30);

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
  //Show transaction history data
  const tableData = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      return (
        <TableRow
          className="rowHover"
          tabIndex={-1}
          key={row.cin}
          style={{ background: 'rgb(247, 247, 247)' }}
        >
          <TableCell className="tableBorder" >{row.cin}</TableCell>
          <TableCell className="tableBorder" align="left">{row.name}</TableCell>
          <TableCell className="tableBorder" align="left">{row.phone}</TableCell>
        </TableRow>
      );
    })


  return (
    <>
      <div>
        <div className="paymentTitle">
          <span>Reference-1 Consumers</span>
        </div>
        <Divider sx={{ mb: 5 }} />

        <Box sx={{ width: '100%' }} style={{ paddingRight: '5px' }} >
          <Grid container spacing={2}>
            <Grid xm={12} md={2}></Grid>
            <Grid item xs={12} md={8}>
              <Paper sx={{ width: '100%', mb: 2, mt: 3 }} style={{ paddingRight: '15px', paddingLeft: '15px' }} >
                <div style={{ marginTop: '10px' }} className="searchSection" ></div>
                <TableContainer style={{ marginTop: '0px', background: 'white' }} >
                  <Table
                    sx={{
                      minWidth: 150
                    }}
                    aria-labelledby="tableTitle"
                    size="small"
                  >
                    <EnhancedTableHead />
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
                  rowsPerPageOptions={[30, 50, 100, 200, 500]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
                
              </Paper>
            </Grid>
          </Grid>

        </Box>
      </div>
    </>
  );
}
export default Reference1;
Reference1.getLayout = function pageLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
