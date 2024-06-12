import React from "react";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "@mui/material";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  continue: {
    width:"35rem", 
    height:"3.5rem", 
    marginBottom:'25px', 
    borderRadius: '15px', 
    bgcolor: 'green' ,
    fontSize: '20px'
       },
  
  
  
}));




function Second(){
  const classes = useStyles();
    return(
    <Stack spacing={2}  alignItems={"center"}>
      <TextField  id="outlined-basic" 
      style={{ width: 550  ,fontSize:21 ,marginTop:'40px' }}
      label="Enter emailadress or username" variant="outlined"> 
      </TextField>
       
      <Button  className={classes.continue}
      variant="contained" color='success'  size="medium" >
      Continue</Button>
     
     <FormGroup>
     <FormControlLabel required control={<Checkbox />} label="Remeber me for 30 days"  variant='h4'/> 
     </FormGroup>
   
   <Link href="#" color={"inherit"} underline="none" variant='h5' >Don,t have an account </Link>
   <Link href="#"  underline="none" variant='h5' style={{ color: 'green' }}>Create Account </Link>
   
   </Stack>);}
export default Second;