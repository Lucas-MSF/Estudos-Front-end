const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', function ()  {
    filtraLivros(btn.value);
}));
function filtraLivros(tipoFiltro) {
    let livrosFiltro = livros.filter(livro => livro.categoria == tipoFiltro);
    exibirOsLivrosNaTela(livrosFiltro);
    console.table(livrosFiltro);
}