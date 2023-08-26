import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useGetAllStudentQuery } from "../../../redux/StudentApi/StudentApi";

interface Column {
  id: "name" | "batchId" | "phone" | "fees" | "email"|"address"|"batch";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "batch", label: "Batch", minWidth: 100 },
  { id: "batchId", label: "Batch\u00a0Id", minWidth: 100 },
  {
    id: "fees",
    label: "Fees\u00a0",
    minWidth: 170,
    // align: "right",
    
  },
  { id: "email",
  
  label: "Email\u00a0Id", minWidth: 100 },


  {
    id: "phone",
    label: "Phone",
    minWidth: 170,
    // align: "right",
  
  },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
    // align: "right",
  
  },
 
 
 
];

interface Data {
  name: string;
  batch:string;
  batchId: string;
  phone: number;
  fees: number;
  email:string;
  address:string;
  density: number;
}

export default function TableData() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data } = useGetAllStudentQuery();
  console.log(data?.data);
  // Map the fetched data to match the Data interface
  const formattedRows = data?.data.map((student) => ({
    name: student.name,
    batch:student.batch,
    batchId: student.batchId, // Use batchId or any other relevant field
    phone: student.phone,
    fees: student.fees,
    email:student.email,
    address:student.address

  }));

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "var(--light)",
        color: "var(--dark)",
      }}
    >
      <TableContainer sx={{ width: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "var(--light)",
                    color: "var(--dark)",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{ backgroundColor: "var(--light)", color: "var(--dark)" }}
          >
            {formattedRows
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {" "}
                    {/* Use a unique key */}
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ color: "var(--dark)" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ color: "var(--dark)" }}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={formattedRows?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
