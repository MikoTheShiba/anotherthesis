import { useCallback, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';


function Qtyinsform({selectedMeds, setQty, qtyList, insList, setIns, mimsdb}){
    async function checkqtylist(x) {
      if ((Object.keys(qtyList)).includes(x)){
        return qtyList[x]
      }
      else{
        qtyList[x]="";
        return ""
      }
    }
    async function checkinslist(x) {
      if ((Object.keys(insList)).includes(x)){
        return insList[x]
      }
      else{
        insList[x]="";
        return ""
      }
    }
    const handleChangeQTY = (e) => {
      setQty((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
    const handleChangeINS = (e) => {
      setIns((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
    return (<Grid container spacing={3}>{selectedMeds.map((x)=>(
            <Grid container>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label={mimsdb[x]["brd"]+" quantity"}
                  name={x.toString()}
                  onChange={handleChangeQTY}
                  value={qtyList[x.toString()]}
                />
                
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label={mimsdb[x]["brd"]+" instructions"}
                  name={x.toString()}
                  onChange={handleChangeINS}
                  value={insList[x.toString()]}
                />
              </Grid>
            </Grid>
          ))}
    </Grid>)
}

export default Qtyinsform;