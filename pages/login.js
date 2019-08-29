import React from 'react'
import Firebase from "../firebase"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function Login (){
  async function login (){
    try {
      await Firebase.login()
    }
    catch(error) {
      alert(error)
    }
  }
   
  return (
    <div>
    <Grid 
    container
  direction="row"
  justify="center"
  alignItems="center">
    <Button variant="contained" onClick={login}>Login</Button>
    </Grid>
    </div>

  )
}