import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { MimsTable } from 'src/sections/mims/mims-table';
import { MimsSearch } from 'src/sections/mims/mims-search';
import { applyPagination } from 'src/utils/apply-pagination';
import testdata from '../jsons/mimsdb.json';

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
const listToResult = (data) => {
  var fin = {}
  function finfill(x){
      fin[x]=testdata[x]
  }
  data.map(finfill);
  return fin
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

const jsontoarray = (data) => {
  var arrr= [];
  var listing = Object.keys(data)
  listing.map((x) => arrr.push(data[x]))
  return arrr
}
const data = jsontoarray(testdata)

const tagbinder = (data) => {
  
}
/* async function mimsdl() {
  //const response = await fetch("https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/mimsdb.json", {method: "PUT", body: JSON.stringify(testdata), headers: {"Content-type": "application/json; charset=UTF-8"}}).then(fetch("https://hureyjsonprac-default-rtdb.firebaseio.com/client/C001.json"));
  const response = await fetch("https://hureyjsonprac-default-rtdb.firebaseio.com/client/C001.json");
  const movies = await response.json();
  console.log(movies);
}
mimsdl(); */
const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [customers, customerResults] = useState(useCustomers(page, rowsPerPage));
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

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
        <Container maxWidth="xl">
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
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <MimsSearch />
            <MimsTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
