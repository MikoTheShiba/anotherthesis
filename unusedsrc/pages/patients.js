import { useCallback, useMemo, useState, useEffect } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { PatientsTable } from 'src/sections/patients/patients-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';
//import testdata from '../jsons/pathis.json';

//direct from Firebase
/* async function pathisrobbery(){
  const respo = await fetch("https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/pathis.json");
  const cum = await respo.json();
  return cum;
}
const testdata = pathisrobbery(); */

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

const now = new Date();
const jsontoarray = (data) => {
  var arrr= [];
  var listing = Object.keys(data)
  listing.map((x) => arrr.push(data[x]))
  return arrr
}




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
  
  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
    useEffect(() => {
      fetchData();
    }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('https://escription-24d8b-default-rtdb.asia-southeast1.firebasedatabase.app/pathis.json');
      const rdata = await response.json();
      setData(jsonarray(rdata));
      setIsLoading(false);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );
  const useCustomers = (page, rowsPerPage) => {
    return useMemo(
      () => {
        return applyPagination(data, page, rowsPerPage);
      },
      [page, rowsPerPage]
    );
  };
  const [customers, customerResults] = useState(useCustomers(page, rowsPerPage));
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);
  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );
  if (isLoading) {
    return <div>LOADING</div>
  }
  return (
    <>
      <Head>
        <title>
          Patient History | Devias Kit
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
                  Patients
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
            <CustomersSearch />
            <PatientsTable
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
