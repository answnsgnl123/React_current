import { Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState ,useEffect } from 'react';


export default function Testpage() {
  
  const dataload = async () => {
    const response = await axios.get('/data/wordlist')
    setArtists(response.data)
  }
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    dataload()
  },[]);

  console.log(artists)
  return (
    <MainCard title="Sample Card">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Word number (index num)</TableCell>
                <TableCell align="right">words</TableCell>
                <TableCell align="right">like</TableCell>
                <TableCell align="right">views</TableCell>
           
            </TableRow>
            </TableHead>
            <TableBody>
            {artists.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="right">{row.words}</TableCell>
                <TableCell align="right">{row.like}</TableCell>
                <TableCell align="right">{row.views}</TableCell>
    
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </MainCard>
  );
}