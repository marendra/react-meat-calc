import React from 'react'
import Firebase from '../firebase'

export default function utama (){
  return (
    <div>
    <h1>Home</h1>
    <button onClick={login}>Login</button>
 </div>
  )
  async function login (){
    console.log("got clicked")
    await Firebase.login 
  }
}