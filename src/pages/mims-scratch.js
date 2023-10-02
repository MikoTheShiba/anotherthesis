import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import testdata from '../jsons/mimsdb.json';
import Search from 'src/sections/mims/mims-scratch/mims-search-scratch';

const now = new Date();

function binarySearch(value, list) {
  let low = 0;    //left endpoint 
  let high = list.length - 1;   //right endpoint 
  let position = -1;
  let found = false;
  let mid;

  while (found === false && low <= high) {
      mid = Math.floor((low + high)/2);
      if (list[mid] == value) {
          found = true;
          position = mid;
      } else if (list[mid] > value) {  //if in lower half 
          high = mid - 1;
      } else {  //in in upper half 
          low = mid + 1;
      }
  }
  return position;
}
const searchTag = (data) => {
  var searchlight = {};
  var keylist = Object.keys(data);
  function light(x){
      if (data[x]["ill"] in searchlight) {
          searchlight[data[x]["ill"]].push(x)
      }
      else{
          searchlight[data[x]["ill"]]=[x]
      }
      if (data[x]["gen"] in searchlight) {
          searchlight[data[x]["gen"]].push(x)
      }
      else{
          searchlight[data[x]["gen"]]=[x]
      }
      if (data[x]["brd"] in searchlight) {
          searchlight[data[x]["brd"]].push(x)
      }
      else{
          searchlight[data[x]["brd"]]=[x]
      }
      if (data[x]["dos"] in searchlight) {
          searchlight[data[x]["dos"]].push(x)
      }
      else{
          searchlight[data[x]["dos"]]=[x]
      }
  }
  keylist.map(light)
  return searchlight
}
const listToResult_Binary = (data, list) => {
  var fin = {};
  var sortedList = Object.keys(list).sort();
  var stuff = binarySearch(data, sortedList)
  function finfill(x){
      fin[x]=testdata[x]
  }
  if (stuff!=0){
      list[sortedList[stuff]].map(finfill)
  }
  else{
      fin = {'000000':{
          ill: 'no results found',
          gen: 'no results found',
          brd: 'no results found',
          dos: 'no results found',
          srp: 0,
      }}
  }
  return fin
}
const tagbinder = searchTag(testdata);


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
  const [jtadata, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/mimsdb.json');
      const data = await response.json();
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
