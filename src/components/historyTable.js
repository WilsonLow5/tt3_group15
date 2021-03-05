import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
});



export default function BasicTable() {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
      let mounted = true;
    const doFetch = async () => {
      try {
        const url = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view';
        const article = { accountKey: '0d5face7-207f-4cce-9340-787cffd84441'};
        const headers = { 
            'x-api-key': 'Qjstc0HrUl4agLzgkROfI9XqteNBxvdM5B8x0jWO'
        };
        await axios.post(url, article, { headers })
            .then((response) => {
                    setItems(response.request);
                    setLoading(false);
                    console.log(response.request);
                    
            })
            .catch((error) => {console.log(error);})

         } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    doFetch();
    return () => {
      mounted = false;
    };
  }, []);

  console.log(items);


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction ID</TableCell>
            <TableCell align="right">Order Type </TableCell>
            <TableCell align="right">Timestamp</TableCell>
            <TableCell align="right">Asset Symbol</TableCell>
            <TableCell align="right">Asset Amount</TableCell>
            <TableCell align="right">Asset Price</TableCell>
            <TableCell align="right">Cash Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {items.response.map((row) => (
            <TableRow key={row.transactionId}>
              <TableCell component="th" scope="row">
                {row.transactionId}
              </TableCell>
              {/* <TableCell align="right">{row.transID}</TableCell>
              <TableCell align="right">{row.orderType}</TableCell>
              <TableCell align="right">{row.timeStamp}</TableCell>
              <TableCell align="right">{row.assetSymbol}</TableCell>
              <TableCell align="right">{row.assetAmount}</TableCell>
              <TableCell align="right">{row.assetPrice}</TableCell>
              <TableCell align="right">{row.cashAmount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}