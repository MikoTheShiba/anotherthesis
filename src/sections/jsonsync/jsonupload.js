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
  StyledTextarea,
  Unstable_Grid2 as Grid
} from '@mui/material';

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
              <Grid xs={12} sm={12} lg={3} xl={3}>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button variant="contained">
                    Save details
                  </Button>
                </CardActions>
              </Grid>
              <Grid xs={12} sm={12} lg={3} xl={9}>
                <StyledTextarea
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Maximum 4 rows"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
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