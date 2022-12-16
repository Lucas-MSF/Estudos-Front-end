const botaoCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const camera = document.querySelector('[data-video]');
const tirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');

let imagemURL = "";

botaoCamera.addEventListener('click', async function() {
    const iniciaCamera = await navigator.mediaDevices
    .getUserMedia({ video: true, audio: false });
    botaoCamera.style.display = "none";
    campoCamera.style.display = "block"; 
    camera.srcObject = iniciaCamera;
})

tirarFoto.addEventListener('click', function(){
    canvas.getContext('2d').drawImage(camera, 0,0 , canvas.width, canvas.height);
    imagemURL = canvas.toDataURL('image/jpeg');
    campoCamera.style.display = "none";
    mensagem.style.display = "block";
})