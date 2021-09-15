import React, { useState } from 'react';
import './upload.css';
import api from '../service/api';

function Uploads() {

  const [file, setFile] = useState('');

  async function handleCadastro(e) {
    e.preventDefault();

    const dados = {
      file
    };

    try {
      console.log(dados);
      if(file != ""){

     
      const formData = new FormData();
      formData.append('file', document.getElementById('upload-file').files[0]);
      const config = {
        Headers: {
          'content-type': 'multipart/form-data'
        }
      }
  
      api.post('products', formData);
      }
      else{
        const span = document.getElementById('no-file');
        span.innerHTML = "* Insira um arquivo!";
        span.style.display = 'block';
      }
    } catch (error) {
      alert("Erro ao enviar arquivo: " + error.message);
    }
  }

  function setNameFile(e) {
    const div = document.getElementById('label');
    var span = document.getElementById('no-file');
    if (!e) {
      div.value = 'Upload .CSV';
      setFile("");
      span.style.display = 'block';
    }
    else {
      const name = document.getElementById("upload-file").files[0].name;
      const div  = document.getElementById('label');
    
      if (name == "") {
        div.value = "Upload .CSV"
      }
      else {
        setFile(document.getElementById('upload-file').files[0]);
        span.style.display = 'none';
        div.value = name;
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleCadastro}>
        <div id="content">
          <input id="label" disabled defaultValue="Upload .CSV"/>
          <label id="image-upload">
            <input
              id="upload-file"
              name="upload-photo"
              type="file"
              onChange={e => setNameFile(e.target.value)}
              accept=".csv,, text/csv"
            />
          </label>
          <button color="secondary" type="submit" id="enviar">Enviar</button>

        </div>
        <p id="no-file"> Teste  </p>
      </form>
      
    </div>
  );
  }

export default Uploads;