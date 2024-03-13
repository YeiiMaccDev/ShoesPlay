import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { useCategoryStore } from '../../../hooks/useCategoryStore';

const columns = [
  { id: 'name', label: 'Nombre', minWidth: 170 },
  { id: 'edit', label: 'Editar', minWidth: 150 },
  { id: 'delete', label: 'Eliminar', minWidth: 150 },
];


const CustomTableCell = ({ row = {}, column = {} }) => {
  const valueColumn = column.id

  if (valueColumn === 'edit') {
    return (
      <TableCell align={column.align}>
        <Button variant="outlined" color="error">
          Editar
        </Button>
      </TableCell>
    )
  }

  if (valueColumn === 'delete') {
    return (
      <TableCell align={column.align}>
        <Button variant="outlined" color="error">
          Eliminar
        </Button>
      </TableCell>
    )
  }

  const valueRow = row[valueColumn]

  return (
    <TableCell align={column.align}>
      {valueRow}
    </TableCell>
  )
}

export const StickyHeadTable = () => {
  const { isLoadingCategories, categories = [], startLoadingCategories } = useCategoryStore();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  useEffect(() => {
    startLoadingCategories();
  }, [])

  if (isLoadingCategories) {
    console.log('esta buscando')
    return (<h1>Cargando...</h1>)
  }

  const rows = categories.map(({name, _id}) => ({ name, id: _id }));


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id} >

                    {
                      columns.map(
                        (column) => (<CustomTableCell key={column.id} row={row} column={column} />)
                      )
                    }

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
