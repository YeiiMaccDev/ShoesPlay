import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Fragment, useState } from 'react';
import { Add, Google } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from '../../../hooks';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const categoryFormFiels = {
    name: ''
}

export const FormCategory = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    const { name, onInputChange: onCategoryInputChange } = useForm(categoryFormFiels);

    const submitForm = (event) => {
        event.preventDefault();
        console.log({ name })
    }

    return (
        <Fragment>
            <Button variant="outlined" sx={{ paddingY: '5px' }} onClick={handleClickOpen}>
                <Add />
                Crear Categoría
            </Button>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{ margin: 0, width: { sm: '100%' } }}
            >

                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Crear Categoría
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

                <form onSubmit={submitForm}>
                    <Grid container sx={{ padding: '1rem' }}>
                        <Grid item xs={12} sx={{ marginTop: 3 }}>
                            <TextField
                                label="Nombre"
                                type="text"
                                name='name'
                                value={name}
                                onChange={onCategoryInputChange}
                                placeholder="Zapatilla deportiva"
                                fullWidth
                            />
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
                            <Grid item xs={12} sm={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    type='submit'
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
