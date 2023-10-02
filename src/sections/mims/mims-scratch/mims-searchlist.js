import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {field: 'ill', headerName: 'Illness'},
  {field: 'gen', headerName: 'Generic Name'},
  {field: 'brd', headerName: 'Brand'},
  {field: 'dos', headerName: 'Dosage'},
  {field: 'srp', headerName: 'SRP'}
]

function SearchList({ filteredMeds }) {
  //const filtered = filteredPersons.map( person =>  <Card key={person.id} person={person} />);
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filteredMeds}
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
