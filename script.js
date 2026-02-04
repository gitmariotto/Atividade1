const precoBase = 200;
const desconto = 0.10;
const frete = 23;

const valorDesconto = precoBase * desconto;
const precoFinal = precoBase - valorDesconto;
const precoComFrete = precoFinal + frete;

document.getElementById('preco-final').innerText = precoFinal;
document.getElementById('preco-com-frete').innerText = precoComFrete;
   