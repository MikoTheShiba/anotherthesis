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
  Unstable_Grid2 as Grid,
  Typography
} from '@mui/material';

export const AccountProfileDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [values, setValues] = useState({
    clnNam: "",
    adrnum:"",
    adrstreet:"",
    adrcity:"",
    adrcountry:"",
    clnCon: "",
    docNam: "",
    docLic: "",
    docPTR: ""
  });

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }


  const handleSubmit =
    (event) => {
      event.preventDefault();
      fetch("https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/docdata.json", {
        method: "PUT",
        body: JSON.stringify(values),                                                                                                                                                                                                                                                                               
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(values)
    };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/docdata.json');
      const data = await response.json();
      setValues(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
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
                  label="Clinic Contact"
                  name="clnCon"
                  onChange={handleChange}
                  required
                  value={values.clnCon}
                />
              </Grid>
              <Grid
                xs={12}
                md={12}
              >
                <Typography>Address</Typography>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Numbers"
                  name="adrnum"
                  onChange={handleChange}
                  required
                  value={values.adrnum}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Street"
                  name="adrstreet"
                  onChange={handleChange}
                  required
                  value={values.adrstreet}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="City"
                  name="adrcity"
                  onChange={handleChange}
                  required
                  value={values.adrcity}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Country"
                  name="adrcountry"
                  onChange={handleChange}
                  required
                  value={values.adrcountry}
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
          <Button variant="contained" type="submit">
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