import React from 'react';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Logo from "./logo.svg";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core';
import { Google as GoogleIcon } from '@mui/icons-material'
import {Apple as AppleIcon} from '@mui/icons-material'

const useStyles = makeStyles((theme) => ({
    text1: {
        fontSize:60, 
        marginTop:'1px', 
        fontFamily: 'Times New Roman, sans-serif',
        fontWeight: 'bold' },
    text2: {
        fontSize:25,
         marginTop:'5px'
      ,
    },
  }));




function Head(){
    const classes = useStyles();
    return(
    <Stack spacing={2}  alignItems={"center"}>
    <img src={Logo} alt="logo" width={105} style={{ marginTop: '30px' }}/>

    
    <Typography className={classes.text1} variant='h1'  >
    Evernote</Typography>
    <Typography className={classes.text2}variant='h4'  >
     Remeber   everything   important .</Typography>
  
  
  
  <Button  variant="outlined" color='inherit'  size="medium" 
  style={{width:"35rem", height:"3.5rem", marginTop:'70px' ,borderColor: 'grey', fontSize:21}} 
   startIcon={<GoogleIcon />}>Continue with google</Button>
  <Button variant="outlined" color='inherit' size="medium" style={{width:"35rem", height:"3.5rem", marginTop:'5px' ,marginBottom:'40px' ,borderColor: 'grey',fontSize:21}}startIcon={<AppleIcon />} >Continue With Apple</Button>
  
  
  
  
  <Divider variant="middle" style={{  width:'590px' }}>or</Divider>
      </Stack>
      );}
export default Head;
