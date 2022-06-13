import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
import { Button } from '@mui/material';
function createData(name, date) {
  return { name, date };
}

const rows = [
  createData('MM', "28-06-2022"),
  createData('MM',"28-06-2022" ),
  createData('MM', "28-06-2022"),
];

export default function AcccessibleTable() {
  return (
    <>
    <div className="Admin">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        
        <TableHead>
          <TableRow>
            <TableCell>Articles</TableCell>
            <TableCell align="right">Date of publish</TableCell>
            <TableCell align="right">Update post</TableCell>
            <TableCell align="right">Delete post</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align='right'>
                <Button variant='contained'>update</Button> </TableCell>
                <TableCell align="right"> <Button variant='contained'>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
    <div className="Addpost">
    <Button variant='contained'>Post</Button> </div></>
  );
}
