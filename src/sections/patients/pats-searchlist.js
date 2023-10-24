import React from 'react';
//import Card from './Card';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {field: 'nam', headerName: 'Name', width: 130},
  {field: 'dob', headerName: 'Birthday'},
  {field: 'age', headerName: 'Age'},
  {field: 'dat', headerName: 'Date'},
  {field: 'prs', headerName: 'Medlist', width: 200},
  {field: 'email', headerName: 'email', width: 200},
  {field: 'doc', headerName: 'Doctor', width: 130}
]

function SearchList({ filteredPats }) {
  //const filtered = filteredPersons.map( person =>  <Card key={person.id} person={person} />);
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filteredPats}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default SearchList;
