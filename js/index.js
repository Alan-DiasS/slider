const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");

let imagemVazio = 0;

setaAvancar.addEventListener("click", () => {
    if (imagemVazio === imagens.length -1) {
        return;
    }
    imagemVazio++;
    
    esconderImagemAberta()

    mostrarImagem()

    mostrarOuESconderSetas()

})

setaVoltar.addEventListener("click", () => {
    if(imagemVazio === 0){
        return;
    }
    imagemVazio--;

    esconderImagemAberta();

    mostrarImagem()

    mostrarOuESconderSetas()
})

function mostrarImagem() {
    imagens[imagemVazio].classList.add(`mostrar`);
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarOuESconderSetas() {
    const naoEhAPrimeiraImagem = imagemVazio !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.add("opacidade");
    }else{
        setaVoltar.classList.remove("opacidade");
    }

    const chegouNaUltimaImagem = imagemVazio != 0 && imagemVazio === imagens.length -1;
    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade");
    }else{
        setaAvancar.classList.remove("opacidade");
    }
}