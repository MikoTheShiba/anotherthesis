import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';

import Search from 'src/sections/patients/pats-search-scratch';

const now = new Date();

const jsontoarraywithidnoparseint = (data) => {
    var arrr= [];
    var listing = Object.keys(data)
    listing.map((x) => arrr.push(data[x]))
    for (let i = 0; i < arrr.length; i++){
        arrr[i]["id"]=listing[i]
    }
    return arrr
  }
const Page = () => {
  const [jtadata, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/pathis.json');
      const data = await response.json();
      setData(jsontoarraywithidnoparseint(data));
      setIsLoading(false);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
        <Head>
            <title>
                Patient History
            </title>
        </Head>
        <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
        >
            <Container maxWidth="x1">
                <Stack spacing={3}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={4}
                    >
                        <Stack spacing={1}>
                            <Typography variant="h4">
                                MIMS DATABASE
                            </Typography>
                            <Search details={jtadata} />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
