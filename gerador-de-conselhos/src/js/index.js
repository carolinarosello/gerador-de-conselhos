
const botao = document.getElementsByClassName('btn')
const id = document.getElementById('numero')
const descricao = document.querySelector('.descricao')



async function embaralharConselhos(){

    const resposta = await fetch("https://api.adviceslip.com/advice");
    const conteudo = await resposta.json();
    const idConselho = `A D V I C E #${conteudo.slip.id}`;
    const textoConselho = `"${conteudo.slip.advice}"`;

    id.innerHTML = idConselho;
    descricao.innerHTML = textoConselho;
}

botao.addEventListener("click", embaralharConselhos);
embaralharConselhos()
