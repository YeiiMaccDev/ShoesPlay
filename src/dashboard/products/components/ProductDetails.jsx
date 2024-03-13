import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment, useState } from 'react';
import { Add } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';
import AutoCompleteSelect from './AutoCompleteSelect';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export const FormProduct = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button variant="outlined" sx={{ paddingY: '5px' }} onClick={handleClickOpen}>
                <Add />
                Crear Producto
            </Button>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{ margin: 0, width: { sm: '100%' } }}
            >

                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Crear Producto
                </DialogTitle>

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>

                <form >
                    <Grid container sx={{ padding: '1rem' }}>
                        <Grid item xs={12} sx={{ marginTop: 2 }}>
                            <TextField
                                label="Nombre"
                                type="text"
                                name='name'
                                placeholder="Zapato elegante para caballero"
                                fullWidth
                                required
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ marginTop: 2 }}>
                            <TextField
                                label="Descripción"
                                type="text"
                                variant="filled"
                                name="description"
                                fullWidth
                                multiline
                                placeholder="Descripción del producto, material, color...etc."
                                minRows={3}
                            />
                        </Grid>

                        <Grid container justifyContent="space-between">
                            <Grid item xs={6} sx={{ marginTop: 2 }}>
                                <TextField
                                    label="Precio"
                                    type="number"
                                    name='price'
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={5} sx={{ marginTop: 2 }}>
                                <TextField
                                    label="Descuento"
                                    type="number"
                                    name='discount'
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="space-between">
                            <Grid item xs={6} sx={{ marginTop: 2, }}>
                                <TextField
                                    label="Stock"
                                    type="number"
                                    name='stock'
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={5} sx={{ marginTop: 2 }}>
                                <TextField
                                    label="Marca"
                                    type="text"
                                    name='brand'
                                    placeholder="Nacional - MarcaX"
                                    fullWidth
                                    required
                                />
                            </Grid>
                        </Grid>


                        <Grid container justifyContent="space-between">
                            <Grid item xs={6} sx={{ marginTop: 2, }}>
                                <AutoCompleteSelect nameAC={"category"} labelAC={"Categoría"} />
                            </Grid>

                            <Grid item xs={5} sx={{ marginTop: 2 }}>
                                <AutoCompleteSelect nameAC={"gender"} labelAC={"Genero"} />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                            <Grid item xs={12} sm={12}>
                                <Button
                                    variant="contained"
                                    type='submit'
                                    fullWidth
                                >
                                    Guardar
                                </Button>
                            </Grid>
                        </Grid>


                    </Grid>
                </form>


                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cerrar
                    </Button>
                </DialogActions>

            </BootstrapDialog>
        </Fragment>
    );
}
