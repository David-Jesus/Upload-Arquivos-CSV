import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import api from '../service/api';

function Uploads() {

    // const [codigo, setCodigo] = useState('');
    // const [titulo, setTitulo] = useState('');
    // const [isbn, setIsbn] = useState('');
    // const [quantidade, setQuantidade] = useState('');
    // const [codigoassunto, setAssunto] = useState('');

    // async function handleCadastro(e) {
    //     e.preventDefault();

    //     const dados = {
    //         codigo,
    //         titulo,
    //         isbn,
    //         quantidade,
    //         codigoassunto
    //     };

    //     try {
    //         console.log(dados);
    //         const response = await api.put('/book', dados);
    //         const codigo = response.data.codigo;
    //         console.log(response.data);
    //         alert("o id do livro é " + codigo);
    //         // history.push('/');
    //     } catch (error) {
    //         alert("Erro ao cadastrar livro " + error.message);            
    //     }
    // }

    return (
        <label htmlFor="upload-photo">
        <input
        //   style={{ display: 'none' }}
          id="upload-photo"
          name="upload-photo"
          type="file"
        />
       {/*
        <Fab
          color="secondary"
          size="small"
          component="span"
          aria-label="add"
          variant="extended"
        >
          <AddIcon /> Upload photo
        </Fab>
        <br />
        <br />
      
        <Fab color="primary" size="small" component="span" aria-label="add">
          <AddIcon />
        </Fab> */}
        <h2>Helo World</h2>
      </label>
    );
}

export default Uploads;