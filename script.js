
const formulario = document.getElementById("formulario");
const campoValor = document.getElementById("valor");
const origem = document.getElementById("origem");
const destino = document.getElementById("destino");
const botaoConverter = document.getElementById("converter");
const botaoInverter = document.getElementById("inverter");

const mensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");
const valorConvertido = document.getElementById("valorConvertido");
const detalhes = document.getElementById("detalhes");
const dataCotacao = document.getElementById("dataCotacao");

const simbolos = {
    BRL: "R$",
    USD: "US$",
    EUR: "€",
    GBP: "£"
};

function formatarMoeda(valor, codigo) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: codigo
    }).format(valor);
}

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const valor = Number(campoValor.value);
    const moedaOrigem = origem.value;
    const moedaDestino = destino.value;

    mensagem.textContent = "";
    resultado.hidden = true;

    if (
        campoValor.value.trim() === "" ||
        !Number.isFinite(valor) ||
        valor <= 0
    ) {
        mensagem.textContent = "Digite um valor maior que zero.";
        return;
    }

    if (moedaOrigem === moedaDestino) {
        valorConvertido.textContent = formatarMoeda(
            valor,
            moedaDestino
        );

        detalhes.textContent = "As duas moedas são iguais.";
        dataCotacao.textContent = "Não foi necessária uma consulta.";
        resultado.hidden = false;
        return;
    }

    botaoConverter.disabled = true;
    botaoConverter.textContent = "Convertendo...";

    try {
        const url =
            `https://api.frankfurter.dev/v1/latest?base=${moedaOrigem}&symbols=${moedaDestino}`;

        const resposta = await fetch(url);

        if (!resposta.ok) {
            throw new Error("Não foi possível obter a cotação.");
        }

        const dados = await resposta.json();
        const taxa = dados.rates[moedaDestino];

        if (typeof taxa !== "number") {
            throw new Error("Cotação indisponível.");
        }

        const convertido = valor * taxa;

        valorConvertido.textContent = formatarMoeda(
            convertido,
            moedaDestino
        );

        detalhes.textContent =
            `${formatarMoeda(valor, moedaOrigem)} = ` +
            `${formatarMoeda(convertido, moedaDestino)}`;

        dataCotacao.textContent =
            `Cotação de referência de ${dados.date}`;

        resultado.hidden = false;

    } catch (erro) {
        mensagem.textContent =
            "Não foi possível consultar a cotação. " +
            "Verifique sua conexão e tente novamente.";

        console.error(erro);

    } finally {
        botaoConverter.disabled = false;
        botaoConverter.textContent = "Converter";
    }
});

botaoInverter.addEventListener("click", function () {
    const moedaAnterior = origem.value;

    origem.value = destino.value;
    destino.value = moedaAnterior;

    resultado.hidden = true;
    mensagem.textContent = "";
});
