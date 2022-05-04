const titulo = document.getElementById("page-title");
const rodape = document.getElementsByTagName("footer")[0];
const corpo = document.getElementsByTagName("body")[0];
const botao = document.getElementById("mode-selector");
botao.addEventListener('click', modoDark);

function modoDark() {
    rodape.classList.toggle("dark-mode");
    botao.classList.toggle("dark-mode");
    corpo.classList.toggle("dark-mode");
    changeText();
}

function changeText() {
    if(botao.classList.contains('dark-mode')){
        botao.innerHTML = "Light Mode";
        titulo.innerHTML = "Dark Mode ON";
        return;
    }
    botao.innerHTML = "Dark Mode";
    titulo.innerHTML = "Light Mode ON";
}