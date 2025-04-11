let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let respostaCorreta = num1 + num2;

document.getElementById("question").innerText = `Quanto é ${num1} + ${num2}?`;

function checkAnswer() {
    let respostaUsuario = parseInt(document.getElementById("answer").value);
    let resultado = document.getElementById("result");

    if (respostaUsuario === respostaCorreta) {
        resultado.innerText = "Parabéns! Você acertou!";
        resultado.style.color = "green";
    } else {
        resultado.innerText = `Ops! Resposta errada. O certo era ${respostaCorreta}.`;
        resultado.style.color = "red";
    }

    // Nova pergunta
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    respostaCorreta = num1 + num2;
    document.getElementById("question").innerText = `Quanto é ${num1} + ${num2}?`;
    document.getElementById("answer").value = "";
}
