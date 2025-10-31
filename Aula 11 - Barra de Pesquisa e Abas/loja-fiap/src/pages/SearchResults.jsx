import { useParams } from "react-router-dom"; // serve para usar os parametros da url
import { useEffect, useState } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";

const SearchResults = () => {

    const {termoBusca} = useParams() // sempre deve guardar a execução em uma variavel, sempre desestruturar o parametro 
    const [products, setProducts] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL;
    
      useEffect(() => {
        const fetchProduct = async () => {
          const res = await fetch(`${API_URL}`);
          const data = await res.json();
          setProducts(data);
        };
        fetchProduct();
      }, []);

      const produtosFiltrados = products.filter(pegaItem => pegaItem.title.toLowerCase().includes(termoBusca.toLowerCase())) // serve para filtrar os produtos pelo titulo deles, tbm deixa em letra minuscula

      if(!produtosFiltrados){ // if para mostrar uma mensagem se nao encontrou nenhum produto
        return <p className="text-center">Nenhum produto encontrado </p>
      }

    return (
        <div>
            <h1 className="text-2xl font-bold">Resultados da Pesquisa para: {termoBusca}</h1>
            <SectionContainer tittle="Resultados">
            {produtosFiltrados.map(pegaItem => 
                <ProductCard {...pegaItem}/>
            )}
            </SectionContainer>
        </div>
    );
};

export default SearchResults;