function calcularRescisao() {
  const salario = parseFloat(document.getElementById("salario").value);
  const meses = parseInt(document.getElementById("meses").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(salario) || isNaN(meses)) {
    resultado.textContent = "Preencha os campos corretamente.";
    return;
  }

  const avisoPrevio = salario;
  const ferias = (salario / 12) * meses;
  const decimo = (salario / 12) * meses;
  const total = avisoPrevio + ferias + decimo;

  resultado.innerHTML = `
      <strong>Resumo da Rescisão:</strong><br />
      Aviso Prévio: R$ ${avisoPrevio.toFixed(2)}<br />
      Férias Proporcionais: R$ ${ferias.toFixed(2)}<br />
      13º Proporcional: R$ ${decimo.toFixed(2)}<br />
      <strong>Total: R$ ${total.toFixed(2)}</strong>
    `;
}
