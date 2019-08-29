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
   <Grid
  container

  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
    <Button variant="contained" onClick={Login}>Login </Button>
  </Grid>   

</Grid> 

  )
}