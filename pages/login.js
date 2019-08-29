import React from 'react'
import Firebase from "../firebase"
import Button from '@material-ui/core/Button';
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
    <Button variant="contained" onClick={login}>Login</Button>
    </div>

  )
}