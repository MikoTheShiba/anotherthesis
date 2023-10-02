import { useCallback, useState } from 'react';
import mimsdata from '../../../src/jsons/mimsdb.json';
import pathis from '../../../src/jsons/pathis.json';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  TextareaAutosize,
  Unstable_Grid2 as Grid,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';


async function patUp() {
  const response = await fetch("https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/pathis.json", {method: "PUT", body: JSON.stringify(pathis), headers: {"Content-type": "application/json; charset=UTF-8"}});
  //const response = await fetch("https://hureyjsonprac-default-rtdb.firebaseio.com/client/C001.json");
  const movies = await response.json();
  console.log(movies);
}
async function mimUp() {
  const response = await fetch("https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/mimsdb.json", {method: "PUT", body: JSON.stringify(mimsdata), headers: {"Content-type": "application/json; charset=UTF-8"}});
  //const response = await fetch("https://hureyjsonprac-default-rtdb.firebaseio.com/client/C001.json");
  const movies = await response.json();
  console.log(movies);
}
patUp();
mimUp();
export const Jsonupload = () => {
  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );
  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    }`
  );
  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="Sync data to the Firebase"
          title="UPLOAD"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid xs={12} sm={12} lg={4} xl={4}>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button variant="contained">
                    Update MIMS
                  </Button>
                </CardActions>
              </Grid>
              <Grid xs={12} sm={12} lg={8} xl={8}>
                <StyledTextarea
                  maxRows={4}
                  defaultValue={JSON.stringify(mimsdata, null, 2)}
                />
              </Grid>
              <Grid xs={12} sm={12} lg={4} xl={4}>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button variant="contained">
                    Update Patients
                  </Button>
                </CardActions>
              </Grid>
              <Grid xs={12} sm={12} lg={8} xl={8}>
                <StyledTextarea
                  maxRows={4}
                  defaultValue={JSON.stringify(pathis, null, 2)}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        
      </Card>
    </form>
  );
};
/*<TextField
                  fullWidth
                  label="Doctor's Name"
                  name="docNam"
                  onChange={handleChange}
                  type="number"
                  value={values.docNam}
                />*/

/*<TextField
                  fullWidth
                  label="Select State"
                  name="docPTR"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.docPTR}
                >
                  {states.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>*/