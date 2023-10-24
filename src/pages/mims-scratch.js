import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import Search from 'src/sections/mims/mims-scratch/mims-search-scratch';

const now = new Date();

const jsontoarraywithid = (data) => {
    var arrr= [];
    var listing = Object.keys(data)
    listing.map((x) => arrr.push(data[x]))
    for (let i = 0; i < arrr.length; i++){
        arrr[i]["id"]=parseInt(listing[i])
    }
    return arrr
  }
const Page = () => {
  const [testdata, setTestData] = useState(null);
  const [jtadata, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/mimsdb.json');
      const data = await response.json();
      setTestData(data);
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
    <>
        <Head>
            <title>
                MIMS Database
            </title>
        </Head>
        <Box
        component="main"
        >
            <Container>
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
                            <Search details={testdata} />
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
