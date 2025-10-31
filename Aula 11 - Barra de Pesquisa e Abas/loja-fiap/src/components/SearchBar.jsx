import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const navigate = useNavigate() // serve para navegar para outra pagina pelo onFocus
    const [search, setSearch] = useState('')
    function handleSearch(e){
        
        console.log(e.target.value)// serve para mostrar no console tudo o que o usuario esta escrevendo
        setSearch(e.target.value)
        navigate(`searchWelcome/${e.target.value}`)// serve para redirecionar o usuario para o que ele esta escrevendo na barra de pesquisa utilizando e.target.value mostrando na url 
    }

    return (
         <div className="w-64">
         <input
            type="text"
            id="search"
            placeholder="Pesquisar produtos..."
            onChange = {handleSearch} // serve para mostrar a mudança na função "handleSearch"
            onFocus = {() => navigate("searchWelcome")}// serve para navegar para a pagina searchWelcome
            onBlur = {() => navigate("/")}// serve para quando nao estiver no foco da barra de pesquisa voltar para a home page
            value = {search}// serve para modificar o value com o search utilizando o useState
            className="pl-10 pr-3 py-1 w-64 bg-transparent border-b-2 border-black focus:border-black outline-none transition-colors duration-300"
          />

        <ul className="hidden absolute top-full left-0 w-full bg-white border shadow mt-1 z-10 max-h-60 overflow-y-auto">
            <li> Itens  </li>
        </ul>
        
        </div>
          
    )
}

export default SearchBar;