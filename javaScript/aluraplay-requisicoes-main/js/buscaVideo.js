import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";
const lista = document.querySelector('[data-lista]');


const botaoBusca = document.querySelector('[data-botao-busca]');


async function buscarVideos(evento) {
    evento.preventDefault();
    const busca = document.querySelector('[data-busca]');
    const listaApi = await conectaApi.buscaVideo(busca.value);
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    listaApi.forEach(video => lista.appendChild(
        constroiCard(video.titulo, video.descricao, video.url, video.imagem)));

    if(listaApi.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum video encontrado com os parametros passados</h2>`;
    }
}

botaoBusca.addEventListener('click', evento => buscarVideos(evento));