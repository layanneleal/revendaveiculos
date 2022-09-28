function mostrarPromocao() {
  //Cria referência aos elementos manipulados pelo programa.
  let inVeiculo = document.getElementById('inVeiculo')
  let inPreco = document.getElementById('inPreco')
  let outVeiculo = document.getElementById('outVeiculo')
  let outEntrada = document.getElementById('outEntrada')
  let outParcela = document.getElementById('outParcela')

  //Obtem conteúdo dos campos de entrada.
  let veiculo = inVeiculo.value
  let preco = Number(inPreco.value)

  //Calcula valor da entrada e das parcelas.
  let entrada = preco * 0.50
  let parcela = (preco * 0.50) / 12

  //Altera o contéudo dos parágrafos de resposta.
  outVeiculo.textContent = 'Promoção: '+ veiculo
  outEntrada.textContent = 'Entrada de R$: '+ entrada.toFixed(2)
  outParcela.textContent = '+ 12x de R$: '+ parcela.toFixed(2)
}
  //Cria uma refeência ao elemento btVerPromocao (botão)
  let btVerPromocao = document.getElementById('btVerPromocao')

  //Registra um evento associado ao botão, para carregar uma função.
  btVerPromocao.addEventListener('click', mostrarPromocao)