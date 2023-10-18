import React from 'react'
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
  Stack,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDcsybvoUwVgL5XN7scx4PKY43ztA8Qa3o",
    authDomain: "escription-24d8b.firebaseapp.com",
    databaseURL: "https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "escription-24d8b",
    storageBucket: "escription-24d8b.appspot.com",
    messagingSenderId: "440703625057",
    appId: "1:440703625057:web:9f49bebf39585001ba4720",
    measurementId: "G-132X605FEE"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const SignInForm = (router) => {
    const handleChange = (e) => {
        setValues((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }
    const [values, setValues] = useState({
        email:"",
        pass:""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        try{
            signInWithEmailAndPassword(auth, values.email, values.pass).then((userCredential) => {console.log(userCredential)});
            router.push('/')
        } catch(err) {
            console.log(err)
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
                <TextField
                    fullWidth
                    type="email"
                    name="email"
                    label="Email Address"
                    onChange={handleChange}
                    value={values.email}
                />
                <TextField
                    fullWidth
                    type="pass"
                    name="pass"
                    label="Password"
                    onChange={handleChange}
                    value={values.pass}
                />
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
            </Stack>
        </form>
    )
}

export default SignInForm;