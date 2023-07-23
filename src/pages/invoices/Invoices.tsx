import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from "./data.js";
import Header from '../../components/Header.js';


function Invoices() {
  return (
    <Box>
      <Header title="INVOICES" subTitle="List of Invoice Balances" />

      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          checkboxSelection
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

export default Invoices
