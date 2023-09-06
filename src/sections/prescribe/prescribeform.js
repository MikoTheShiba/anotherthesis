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
  Unstable_NumberInput as NumberInput,
  NumberInputProps,
  NumberInputClasses,
  Unstable_Grid2 as Grid
} from '@mui/material';
const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  },
  {
    value: 'los-angeles',
    label: 'Los Angeles'
  }
];
export const PrescribeForm = () => {
  const [values, setValues] = useState({
    det: {
      nam: "",
      dob: "",
      age: "",
      dat: ""},
    prs: {
      gen: "",
      dos: "",
      qty: 0,
      ins: ""
    }  
  });

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

  return (
    <form
      autoComplete="off"
      noValidate
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
                  label="Patient Name"
                  name="det.nam"
                  onChange={handleChange}
                  required
                  value={values.det.nam}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="det.dob"
                  onChange={handleChange}
                  required
                  value={values.det.dob}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Age"
                  name="det.age"
                  onChange={handleChange}
                  required
                  value={values.det.age}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Date"
                  name="det.dat"
                  onChange={handleChange}
                  required
                  value={values.det.dat}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Generic Name"
                  name="prs.gen"
                  onChange={handleChange}
                  required
                  value={values.prs.gen}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Dosage"
                  name="prs.dos"
                  onChange={handleChange}
                  required
                  value={values.prs.dos}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Quantity"
                  name="prs.qty"
                  onChange={handleChange}
                  required
                  value={values.prs.qty}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save details
          </Button>
        </CardActions>
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