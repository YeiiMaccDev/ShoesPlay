import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
import './LoginPage.css';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

// const registerFormFields = {
//     registerName:      '',
//     registerEmail:     '',
//     registerPassword:  '',
//     registerPassword2: '',
// }



export const LoginPage = () => {

    const { startLogin, errorMessage, startRegister } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    // const { registerEmail, registerName, registerPassword, registerPassword2, onInputChange:onRegisterInputChange } = useForm( registerFormFields );

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    // const registerSubmit = ( event ) => {
    //     event.preventDefault();
    //     if ( registerPassword !== registerPassword2 ) {
    //         Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
    //         return;
    //     }

    //     startRegister({ name: registerName, email: registerEmail, password: registerPassword });
    // }


    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }, [errorMessage])




    return (
        <>
            <div className="section-100vh">
                <div className="widthContainer login-container">
                    <div className=" login-form-1">
                        <h3>Ingreso</h3>
                        <form onSubmit={loginSubmit}>

                            <Grid container >

                                <Grid item xs={12} sx={{ marginTop: .5 }}>
                                    <Typography >Uso único de la administración del catálogo. </Typography>
                                </Grid>

                                <Grid item xs={12} sx={{ marginTop: 3 }}>
                                    <TextField
                                        label="Email"
                                        type="email"
                                        placeholder="example@example.com"
                                        fullWidth
                                        name="loginEmail"
                                        value={loginEmail}
                                        onChange={onLoginInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ marginTop: 3 }}>
                                    <TextField
                                        label="Password"
                                        type="password"
                                        placeholder="**********"
                                        fullWidth
                                        name="loginPassword"
                                        value={loginPassword}
                                        onChange={onLoginInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ marginTop: 3 }}>
                                    <input
                                        type="submit"
                                        className="btnSubmit"
                                        value="Login"
                                    />
                                </Grid>
                            </Grid>

                            {/* <div className="form-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Correo"
                                    name="loginEmail"
                                    value={loginEmail}
                                    onChange={onLoginInputChange}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="loginPassword"
                                    value={loginPassword}
                                    onChange={onLoginInputChange}
                                />
                            </div>
                            <div className="d-grid gap-2">
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Login"
                                />
                            </div> */}
                        </form>
                    </div>

                    {/* <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ registerSubmit }>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={ registerName }
                                onChange={ onRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={ registerEmail }
                                onChange={ onRegisterInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="registerPassword"
                                value={ registerPassword }
                                onChange={ onRegisterInputChange }
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="registerPassword2"
                                value={ registerPassword2 }
                                onChange={ onRegisterInputChange }
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div> */}
                </div>
            </div>
        </>
    )
}