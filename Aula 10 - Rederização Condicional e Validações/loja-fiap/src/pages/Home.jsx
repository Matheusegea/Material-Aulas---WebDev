import { useState, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setIsLoading(true)// serve para começar o Loading do const [isLoading, setIsLoading] = useState(false) e deixar como (true) falando que esta carregando
    fetch(`${API_URL}/category/electronics`)
      .then((res) => res.json())
      .then((data) => setElectronics(data));

    fetch(`${API_URL}/category/jewelery`)
      .then((res) => res.json())
      .then((data) => setJewelery(data));

    fetch(`${API_URL}/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => setMensClothing(data));

    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
      .finally(() => setIsLoading(false)); //serve para terminar a função IsLoading deixando o loading (false)
  }, []);

  const filtradosJaquetas = allProducts.filter(pegaItem => pegaItem.title.includes("jacket") || pegaItem.title.includes("coat") || pegaItem.description.includes("jacket") || pegaItem.description.includes("coat")) // .filter serve como um filtro para pegar itens com nome de jacket ou coat, utilizando pegaItem.title(essa informação vem da api), e tbm utiliza pegaItem.description jacket e coat para filtrar
  // o const filtradosJaquetas foi criado para se nao tiver nenhuma jaqueta aparecer nenhum produto encontrado

  if (isLoading){ // serve para colocar o Carregando ... utilizando a função (isLoading) quando abre a pagina ou reinicia 
    return <p>Carregando ...</p>
  }

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        {electronics.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Joias">
        {jewelery.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        {mensClothing.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Mais avaliados">
        {allProducts
        .filter(pegaItem => pegaItem.rating.rate >= 4) // .filter serve como um filtro para pegar itens da loja com mais de 4 estrelas, utilizando .rating.rate(essa informação vem da api)
        .sort((a, b) => b.rating.rate - a.rating.rate || b.price - a.price) // .sort serve para arrumar a ordem das estrelas, sendo b - a ordem decrescente e a - b crescente, sendo o b - a para price a mesma coisa
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="De 50 a 100">
        {allProducts
        .filter(pegaItem => pegaItem.price >= 50 && pegaItem.price <= 100) // .filter serve como um filtro para pegar itens mais de 50 e menos de 100, utilizando pegaItem.price(essa informação vem da api)
        .sort((a, b) => a.price - b.price) // .sort serve para arrumar a ordem das estrelas, sendo b - a ordem decrescente e a - b crescente, sendo o b - a para price a mesma coisa
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="jaquetas e casacos">
        { filtradosJaquetas.length > 0 ? filtradosJaquetas // utiliza o const da linha 31 para poder ver se tem algo no filtro, utilizando o filtradosJaquetas.length > 0 ja a ? serve como um if
        .sort((a, b) => a.price - b.price) // .sort (a,b) => a.price - b.price serve para organizar do mais barato para o mais caro
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
        :// esse : serve para a ? da linha 72 funcionar como if, respondendo a condição do filtro ser > 0 ou nao
        <p>Nenhum produto encontrado.</p>
      }
      </SectionContainer>
    </div>
  );
}
