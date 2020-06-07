import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const RegistroProveedor = () => {
    const matches = useMediaQuery('(max-width:1024px)');
    if (matches) {
        return (
            <>
                <h1>Registro de Proveedores</h1>
                <form
                    noValidate
                    autoComplete="off"
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="nombre"
                                label="Nombre"
                                fullWidth
                                placeholder="Libreria miriam"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="telefono"
                                label="Teléfono"
                                fullWidth
                                placeholder="####-####"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="correo"
                                label="Correo"
                                fullWidth
                                placeholder="ejemplo@domnio.com"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="direccion"
                                label="Dirección"
                                placeholder="El Salvador, San Vicente, Apastepeque"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<SaveIcon />}
                            >
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </>
        );
    } else {
        return (
            <>
                <h1>Registro de Proveedores</h1>
                <form
                    noValidate
                    autoComplete="off"
                    style={{ marginLeft: "10rem", marginRight: "10rem" }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <TextField
                                required
                                id="nombre"
                                label="Nombre"
                                fullWidth
                                placeholder="Libreria miriam"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="telefono"
                                label="Teléfono"
                                fullWidth
                                placeholder="####-####"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="correo"
                                label="Correo"
                                fullWidth
                                placeholder="ejemplo@domnio.com"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="direccion"
                                label="Dirección"
                                placeholder="El Salvador, San Vicente, Apastepeque"
                                fullWidth
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                startIcon={<SaveIcon />}
                            >
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </>
        );
    }

};

export default RegistroProveedor;
