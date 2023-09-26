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
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mikoforbusinesspurposes@gmail.com',
    password: 'Raphael10!'
  }
});
var details = {
  from: 'mikoforbusinesspurposes@gmail.com',
  to: 'mikoangeles2001@gmail.com',
  subject: 'kill yourself',
  text: 'you serve zero purpose. you should kill yourself NOW.'
}

export const PrescribeForm = () => {
  const [values, setValues] = useState({
    nam: "",
    dob: "",
    age: "",
    dat: "",
    gen: "",
    dos: "",
    qty: null,
    ins: ""
  })
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
      transporter.sendMail(details,(err)=>{
        if(err){
          console.log("oh shid it didnt send");
        }
        else{
          console.log("mail sent successfully");
        }
      })
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
                  label="Generic Name"
                  name="gen"
                  onChange={handleChange}
                  
                  value={values.gen}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Dosage"
                  name="dos"
                  onChange={handleChange}
                  value={values.dos}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <NumberInput
                  name="qty"
                  label="Quantity"
                  placeholder="Quantity"
                  value={values.qty}
                />
              </Grid>
            </Grid>
          </Box>
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