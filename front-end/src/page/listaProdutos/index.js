import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../service/api';
import Button from '@material-ui/core/Button';
import '../listaProdutos/index.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,

  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

});

export default function ListaProdutos() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  

  async function handleDeleteProduto(code_bar) {
    try {
      await api.delete(`produto/${code_bar}`, {});
      setProducts(products.filter(products => products.code_bar !== code_bar));
    } catch (error) {
      alert('Erro ao deletar cliente');
    }
  }

  useEffect(() => {
    api.get('products', {}).then(response => {
        setProducts(response.data);
    });
  }, []);

  return (
    <div id="container-table">
      <TableContainer component={Paper} id="tabela">
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell >Código de Barras</StyledTableCell >
              <StyledTableCell align="right">Preço</StyledTableCell >
              <StyledTableCell align="right">Quantidade</StyledTableCell >
              <StyledTableCell align="right">Descrição</StyledTableCell >
              <StyledTableCell align="center">Excluir</StyledTableCell >
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(products => (
              <StyledTableRow key={products.code_bar}>
                <StyledTableCell component="th" scope="row">
                  {products.code_bar}
                </StyledTableCell>
                <StyledTableCell align="right">R$ {products.price}</StyledTableCell >
                <StyledTableCell align="right">{products.quantity}</StyledTableCell >
                <StyledTableCell align="right">{products.description}</StyledTableCell >
                <StyledTableCell align="center">
                  <Button variant="contained" color="secondary" type="button" onClick={() => handleDeleteProduto(products.code_bar)}>Deletar</Button></StyledTableCell >
              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}