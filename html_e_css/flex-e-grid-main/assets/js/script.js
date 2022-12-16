const links = document.querySelectorAll('.menu-lateral__link');
const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
});


links.forEach(link => {
    link.addEventListener('click', (event) => addClasseAtivo(event));
});

function addClasseAtivo(event) {
    event.preventDefault();
    const linkClicado = event.target;
    removedorDeAtivo();
    linkClicado.classList.add("menu-lateral__link--ativo");
}
function removedorDeAtivo() {
    links.forEach(link => link.classList.remove("menu-lateral__link--ativo"));

}
