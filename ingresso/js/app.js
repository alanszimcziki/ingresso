function comprar() {
  let tipo = document.getElementById('tipo-ingresso').value;
  let qtd = parseInt(document.getElementById('qtd').value);

  if (tipo == 'pista') {
    comprarPista(qtd);
  } else if (tipo == 'superior') {
    comprarSuperior(qtd);
  } else {
    comprarInferior(qtd);
  }
}

function comprarPista(qtd) {
  let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
  if (qtd > qtdPista) {
    alert('Quantidade de ingressos indisponível para o tipo pista!');
  } else {
    qtdPista = qtdPista - qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Ingresso obtido com sucesso!');
  }
}
function comprarSuperior(qtd) {
  let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
  if (qtd > qtdSuperior) {
    alert('Quantidade de ingressos indisponível para o tipo superior!');
  } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert('Ingresso obtido com sucesso!');
  }
}
function comprarInferior(qtd) {
  let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
  if (qtd > qtdInferior) {
    alert('Quantidade de ingressos indisponível para o tipo inferior!');
  } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    alert('Ingresso obtido com sucesso!');
  }
}

