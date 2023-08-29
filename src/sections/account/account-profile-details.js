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

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    clnNam: "Poleveda Elementary Clinic",
    clnAdr: "3141 Poleveda Main, Hydrogen Lane, Mendel City, Lung Nation",
    clnCon: "+633141592653",
    docNam: "Pamela Earl",
    docLic: "92713270812",
    docPTR: "77128754"
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
                  helperText="Please specify the first name"
                  label="Clinic Name"
                  name="clnNam"
                  onChange={handleChange}
                  required
                  value={values.clnNam}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Clinic Address"
                  name="clnAdr"
                  onChange={handleChange}
                  required
                  value={values.clnAdr}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Clinic Contact"
                  name="clnCon"
                  onChange={handleChange}
                  required
                  value={values.clnCon}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Doctor's Name"
                  name="docNam"
                  onChange={handleChange}
                  required
                  value={values.docNam}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Medical License Number"
                  name="docLic"
                  onChange={handleChange}
                  required
                  value={values.docLic}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Doc PTR"
                  name="docPTR"
                  onChange={handleChange}
                  required
                  value={values.docPTR}
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