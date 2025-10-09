import { useEffect, useState } from "react";

export default function Home() {
  

const [reactRepos, setReactRepos] = useState([]) //esta criando o const para pegar os respositorios de react
const API = import.meta.env.VITE_GITHUB_API // esta importando a api pelo .env

  useEffect(()=>{
    fetch(`${API}react&per_page=5`) //utiliza o fetch para pegar a api
    .then(res => res.json()) // utiliza o .then para pegar o res e dps usa uma arrow function para transformar em um json
    .then(data => setReactRepos(data.items)) // utiliza o data para selecionar os items do ReactRepos(repositorios de react da api)
  },)

  return (
    <div>
      {reactRepos.map(repo => (
        <repoCard key={repo.name}
        {...repo}/>
      ))}
    </div>
  );
}
