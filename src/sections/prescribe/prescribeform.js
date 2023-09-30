import { useCallback, useState } from 'react';
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
import { CustomNumberInput as NumberInput } from 'src/components/CustomNumberInput';
import { sendMail, sendMailClient } from "./emailjs";
import clinicdata from '../../jsons/docdata.json'
import Search from 'src/sections/prescribe/mims-scratch/mims-search-scratch';
import testdata from 'src/jsons/mimsdb.json';
const jsontoarraywithid = (data) => {
  var arrr= [];
  var listing = Object.keys(data)
  listing.map((x) => arrr.push(data[x]))
  for (let i = 0; i < arrr.length; i++){
      arrr[i]["id"]=parseInt(listing[i])
  }
  return arrr
}
const jtadata = jsontoarraywithid(testdata);

export const PrescribeForm = () => {
  const [values, setValues] = useState({
    nam: "",
    dob: "",
    age: "",
    dat: "",
    ins: "",
    email: ""
  })
  const [selectedMeds, setSelect] = useState([]);
  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit =
    (event) => {
      event.preventDefault();
      fetch("https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/pathis.json", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      sendMail(values, clinicdata, selectedMeds, testdata);
    };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="Patient Name"
                  name="nam"
                  onChange={handleChange}
                  
                  value={values.nam}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dob"
                  onChange={handleChange}
                  
                  value={values.dob}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  onChange={handleChange}
                  
                  value={values.age}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Date"
                  name="dat"
                  onChange={handleChange}
                  
                  value={values.dat}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={12}
                md={12}
              >
                <TextField
                  fullWidth
                  label="Instructions"
                  name="ins"
                  onChange={handleChange}
                  value={values.ins}
                />
              </Grid>
            </Grid>
          </Box>
          <Search details={jtadata} setSelect={setSelect}/>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" type="submit">
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

/*<NumberInput
                  name="qty"
                  label="Quantity"
                  placeholder="Quantity"
                  value={values.qty}
                />*/