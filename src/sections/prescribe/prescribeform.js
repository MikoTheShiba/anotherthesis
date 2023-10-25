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
import { CustomNumberInput as NumberInput } from 'src/components/CustomNumberInput';
import Qtyinsform from './qtyinsform';
import { sendMail, sendMailClient } from "./emailjs";
import Search from 'src/sections/prescribe/mims-scratch/mims-search-scratch';
const jsontoarraywithid = (data) => {
  var arrr= [];
  var listing = Object.keys(data)
  listing.map((x) => arrr.push(data[x]))
  for (let i = 0; i < arrr.length; i++){
      arrr[i]["id"]=parseInt(listing[i])
  }
  return arrr
}

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
  const [testdata, setTestData] = useState([]);
  const [jtadata, setData] = useState(null);
  const [clinicdata, setClinic] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [qtyList, setQty] = useState({});
  const [insList, setIns] = useState([]);
  const gengen = (medlist) => {
    let genlist = []
    medlist.map((x) => {let n = jtadata[String(x)]['gen']; if(genlist.indexOf(n) == -1){genlist.push(n)}});
    return genlist
  }
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
        body: JSON.stringify(Object.assign({}, values, { "prs":gengen(selectedMeds), "doc":clinicdata.docNam })),
        headers: {
          "Content-Type": "application/json"
        }
      });
      sendMail(values, clinicdata, selectedMeds, testdata, qtyList, insList);
    };
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/mimsdb.json');
      const docstuff = await fetch('https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/docdata.json');
      const data = await response.json();
      const docs = await docstuff.json();
      setTestData(data);
      setClinic(docs);
      setData(jsontoarraywithid(data));
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
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="Fill in the details and hit PRESCRIBE."
          title="Prescribe"
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
          <Search
            //revert this back to jtadata once this fiasco is over
            details={testdata}
            setSelect={setSelect}
            selectedMeds={selectedMeds}
            clinicdata={clinicdata}
          />
          <Qtyinsform
            selectedMeds={selectedMeds}
            setQty={setQty}
            qtyList={qtyList}
            setIns={setIns}
            insList={insList}
            mimsdb={testdata}
          />
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" type="submit">
            PRESCRIBE!
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