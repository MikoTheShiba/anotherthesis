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
      console.log(qtyList);
      if ((Object.keys(qtyList)).includes(x)){
        return qtyList[x]
      }
      else{
        qtyList[x]="";
        return ""
      }
    }
    const handleChangeQTY = (e) => {
      setQty((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
    return (<Grid container spacing={3}>{selectedMeds.map((x)=>(
            <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label={mimsdb[x]["brd"]+" quantity"}
                  name={x.toString()}
                  onChange={handleChangeQTY}
                  value={qtyList[x.toString()]}
                />
            </Grid>
          ))}
    </Grid>)
}

export default Qtyinsform;