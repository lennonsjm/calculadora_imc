function calcularIMC() {
  const form = document.querySelector("form");
  const resposta = document.querySelector(".resultado");

  function imcCalculo(evento) {
    evento.preventDefault();

    const peso = Number(form.querySelector("#input-peso").value);
    const altura = Number(form.querySelector("#input-altura").value);

    resposta.classList.remove("normal", "info", "alerta");

    if (!peso || peso <= 0) {
      resposta.classList.add("alerta");
      resposta.innerHTML = "<p>Por favor, insira um peso válido.</p>";
      return;
    }

    if (!altura || altura <= 0) {
      resposta.classList.add("alerta");
      resposta.innerHTML = "<p>Por favor, insira uma altura válida.</p>";
      return;
    }

    const calculo = peso / (altura * altura);
    let classificacao = "";
    let classe = "";

    if (calculo >= 39.9) {
      classificacao = "Obesidade grau 3";
      classe = "alerta";
    } else if (calculo >= 35) {
      classificacao = "Obesidade grau 2";
      classe = "alerta";
    } else if (calculo >= 30) {
      classificacao = "Obesidade grau 1";
      classe = "alerta";
    } else if (calculo >= 25) {
      classificacao = "Sobrepeso";
      classe = "info";
    } else if (calculo >= 18.5) {
      classificacao = "Peso normal";
      classe = "normal";
    } else {
      classificacao = "Abaixo do peso";
      classe = "alerta";
    }

    resposta.classList.add(classe);

    resposta.innerHTML = `
      <p>Seu IMC é <strong>${calculo.toFixed(2)}</strong>. ${classificacao}</p>
    
    `;
  }

  form.addEventListener("submit", imcCalculo);
}

calcularIMC();
