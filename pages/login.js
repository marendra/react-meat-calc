import React from 'react'
import Firebase from "./firebase"

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
    <button  onClick={login}>Login</button>
    </div>

  )
}