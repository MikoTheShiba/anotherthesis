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


function Qtyinsform({selectedMeds, setQty, qtyList, insList, setIns}){
    const renderField = (x) => {
            <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name={x.toString()}
                  onChange={handleChange}
                  value=""
                />
            </Grid>
    }
    return (<Grid container spacing={3}>{selectedMeds.map(renderField)}</Grid>)
}

export default Qtyinsform;