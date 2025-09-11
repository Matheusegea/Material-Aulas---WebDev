import { useEffect, useState } from "react";

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([]) // nao precisa necessariamente ser usuarios no set, o set tem que ser o primeiro nome do const

  useEffect(()=> {
  
  fetch("https://jsonplaceholder.typicode.com/users")//fetch serve para consumir a api
  .then(response => response.json())//.then com essa arrow function faz o response virar um json
  .then(data => setUsuarios(data))//esse setUsuarios no data serve para pegar os usuarios do const [usuarios, setUsuarios]
  .catch(error => console.log(error))//.catch error serve para pegar o erro da api
  .finally(console.log("Carregamento Finalizado"))//.finally serve para avisar quando a api termina de rodar
  },[])//array serve para atualizar apenas uma vez 

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {usuarios.map(PegaItem => (   //esse usuarios.map serve para pegar o nome dos usuarios que estao na api para pegar objetos dentro de um json basta usar .primeiroObjetoJSON.SegundoObjeto
        <div key ={PegaItem.id}>
          <p>{PegaItem.name}</p>  
          <p>{PegaItem.email}</p>
          <p>{PegaItem.address.city}</p>
        </div>
      ))}
    </div>
  );
}
