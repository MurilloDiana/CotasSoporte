import React, {useState, useRef} from 'react';
import Sidebar from './../components/Sidebar';
import { Grid, Typography, TextField, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Button } from "@material-ui/core";

const Formulario = () => {
    const nameRef = useRef();
    const lastNameRef = useRef();
    const genderRef = useRef();
    const bioRef = useRef();
    let user = {};
    const [values, setGender] = useState(user.gender);
    const _onChange = (param) => {
        setGender(param.target.value);
    }
    const _onSubmit = (params) => {
        params.preventDefault();
        user = {
            name: nameRef,
            lastName: lastNameRef,
            gender: genderRef,
            bio: bioRef
        }
    }
    return (
        <Grid container>
            <Typography variant='h1'>Formulario</Typography>
            {user.name && 
                <Grid>
                    <Typography variant='body1'>Nombre: <Typography style={{fontWeight: 'bold'}}>{user.name}</Typography> </Typography>
                    <Typography variant='body1'>Apellidos: <Typography style={{fontWeight: 'bold'}}>{user.lastName}</Typography> </Typography>
                    <Typography variant='body1'>Bio: <Typography style={{fontWeight: 'bold'}}>{user.bio}</Typography> </Typography>
                    <Typography variant='body1'>Genero: <Typography style={{fontWeight: 'bold'}}>{user.gender}</Typography> </Typography>
                </Grid>
            }
            <Grid>
                <Grid alignItems='center'>
                    <TextField inputMode='text' label='Nombre' ref={user.name} />
                    <TextField inputMode='text' label='Apellidos' ref={user.lastName} />
                    <TextField inputMode='text' label='Biografia' ref={user.bio} />
                    <FormControl>
                        <FormLabel>Género</FormLabel>
                        <RadioGroup value={values} onChange={_onChange}>
                            <FormControlLabel value='Hombre' control={<Radio />} label='Hombre' />
                            <FormControlLabel value='Mujer' control={<Radio />} label='Mujer' />
                        </RadioGroup>
                    </FormControl>
                    <Button type='submit' variant='contained' color='primary' onClick={_onSubmit}>Enviar</Button>
                </Grid>
            </Grid>
            <Sidebar blog='false' />
        </Grid>
    )
}
export default Formulario;