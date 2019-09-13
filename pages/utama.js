import React from 'react'
import Firebase from '../firebase'
import Typography from '@material-ui/core/Typography';
import { typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';

require('typeface-roboto')

export default function utama (){
  return (
    <div>
    <Box variant="h2"  fontWeight="fontWeightBold">Assets</Box>
    
 </div>
  )
  async function login (){
      try {
      await Firebase.login()
    } catch (error) {
      alert(error)
    }
  }
}