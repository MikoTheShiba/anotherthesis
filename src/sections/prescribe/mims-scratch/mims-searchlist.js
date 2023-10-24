import React from 'react';
//import Card from './Card';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {field: 'ill', headerName: 'Illness', width: 150},
  {field: 'gen', headerName: 'Generic Name', width: 200},
  {field: 'brd', headerName: 'Brand', width: 200},
  {field: 'dos', headerName: 'Dosage'},
  {field: 'SRP', headerName: 'SRP'}
]

function SearchList({ filteredMeds, setSelect }) {
  //const filtered = filteredPersons.map( person =>  <Card key={person.id} person={person} />);
  //const [selectedItems, setSelectedItems] = React.useState([]);
  /*React.useEffect(() => {
    console.log(selectedItems);
  });*/
  const handleSelectionChange = async (selection) => {
    //await setSelectedItems(selection);
    await setSelect(selection);
    //console.log("selection: " + selection);
  };
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
        onRowSelectionModelChange={handleSelectionChange}
      />
    </Box>
  );
}

export default SearchList;
