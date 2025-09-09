const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre uma IA capaz de compor músicas, textos e obras de arte em segundos. Qual é sua primeira reação?",
        alternativas: [
            { texto: "Fico animado e quero explorar todas as possibilidades!", afirmacao: "Você é curioso e vê a IA como uma ferramenta de criação." },
            { texto: "Fico apreensivo, será que isso vai substituir humanos?", afirmacao: "Você tem consciência dos riscos e da responsabilidade no uso da IA." }
        ]
    },
    {
        enunciado: "Uma escola decide usar IA para personalizar o aprendizado de cada aluno. Como você se sente diante disso?",
        alternativas: [
            { texto: "Acho incrível! Cada aluno terá um aprendizado sob medida.", afirmacao: "Você valoriza inovação e aprendizado personalizado." },
            { texto: "Tenho receio, e se a IA cometer erros ou enviesar as informações?", afirmacao: "Você valoriza a supervisão humana e a ética no uso da tecnologia." }
        ]
    },
    {
        enunciado: "Você precisa tomar uma decisão ética: uma IA pode resolver um problema de saúde rapidamente, mas envolve dados sensíveis de várias pessoas. O que você faz?",
        alternativas: [
            { texto: "Usaria a IA, desde que com segurança e anonimização.", afirmacao: "Você prioriza resultados, mas respeita a privacidade." },
            { texto: "Não usaria, a privacidade das pessoas é mais importante.", afirmacao: "Você valoriza princípios éticos acima de resultados imediatos." }
        ]
    },
    {
        enunciado: "Você quer criar uma imagem futurista usando IA. Como procede?",
        alternativas: [
            { texto: "Uso ferramentas tradicionais e tento criar sozinho.", afirmacao: "Você valoriza o aprendizado manual e o esforço próprio." },
            { texto: "Uso geradores de imagem IA para acelerar o processo.", afirmacao: "Você busca eficiência e aproveita a tecnologia ao máximo." }
        ]
    },
    {
        enunciado: "Um projeto de grupo permite usar IA, mas seu colega entrega o trabalho totalmente gerado pela máquina. Como você age?",
        alternativas: [
            { texto: "Aceito, afinal é permitido usar IA.", afirmacao: "Você se adapta às regras, mas pode depender da tecnologia." },
            { texto: "Reviso e ajusto para incluir nossas próprias ideias.", afirmacao: "Você mantém responsabilidade e criatividade humana." }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
