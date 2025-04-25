const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("2025-04-15T00:00:00");
const tempoObjetivo2 = new Date("2025-03-05T00:00:00");
const tempoObjetivo3 = new Date("2025-07-02T00:00:00");
const tempoObjetivo4 = new Date("2025-11-10T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];



for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }
}

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date;
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = math.floor(tempoFinal / 1000);
    let minutos = math.floor(segundos / 60);
    let horas = math.floor(minutos / 60);
    let dias = math.floor(hora / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + "dias " + horas + " Horas " + minutos + " Minutos " + segundos + " Segundo ";
}