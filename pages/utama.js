import React from 'react'
import Firebase from '../firebase'

export default function utama (){
  return (
    <div>
    <h1>Home</h1>
    
 </div>
  )
  async function login (){
    console.log("got clicked")
   try {
      await Firebase.login()
    } catch (error) {
      alert(error)
    }
  }
}