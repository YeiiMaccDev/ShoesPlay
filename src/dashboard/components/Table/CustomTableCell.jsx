import { Button, TableCell } from "@mui/material"

export const CustomTableCell = ({ row = {}, column = {} }) => {
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