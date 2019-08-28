import React from 'react'
import Firebase from '../firebase'

export default function utama (){
  return (
    <div>
    <h1>Home</h1>
    <button onClick={Firebase.login}>Login</button>
 </div>
  )
}