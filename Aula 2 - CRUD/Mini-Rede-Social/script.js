// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){
    mostrarPost();
    document.querySelector("#postForm").addEventListener("submit", addPost)
}

//CREATE
function addPost(infosDoEvento){
    infosDoEvento.preventDefault()

    //cria variaveis para todos os posts 
    const textoPost = document.querySelector("#postText").value
    const categoriaPost = document.querySelector("#postCategory").value
    const imagemPost = document.querySelector("#postImage").value
    const dataPost = new Date().toLocaleString()
    
    // pega o array de cima e junta com o novoPost
    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: dataPost,
    }

    //deixa o post do mais novo para o mais antigo por conta do unshift
    posts.unshift(novoPost)


    //chama a função mostrarPost para mostrar o novo post
    mostrarPost()
}
//READ
function mostrarPost(){
    //pega a id postList
    const listaPosts = document.querySelector("#postList")
    listaPosts.innerHTML = ""

    //passa nos items do array
    posts.forEach(pegaItem => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
        <h2>${pegaItem.text}</h2>
        <img src ="${pegaItem.image}"/>
        <p>${pegaItem.category}</p>
        <p>${pegaItem.date}</p>
        `

        //adiciona o post
        listaPosts.append(cardPost)

    })
}
//UPDATE
function editarPost(){

}
//DELETE
function deletarPost(){

}