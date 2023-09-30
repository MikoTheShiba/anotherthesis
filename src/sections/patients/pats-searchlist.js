import React from 'react';
//import Card from './Card';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {field: 'nam', headerName: 'Name'},
  {field: 'dob', headerName: 'Birthday'},
  {field: 'age', headerName: 'Age'},
  {field: 'dat', headerName: 'Date'},
  {field: 'prs', headerName: 'Medlist'}
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
