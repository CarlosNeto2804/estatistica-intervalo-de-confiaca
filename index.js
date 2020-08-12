const conj = [3.83, 1.88, 1.55, 2.64, 0.4, 1.87, 4.98, 3.52, 4.16, 3.56];
const coefi_confianca = (value = 90) => {
  const faixas = [
    { chave: 90, valor: 1.64 },
    { chave: 95, valor: 1.96 },
    { chave: 99, valor: 2.57 },
  ];
  return faixas.find((f) => f.chave == value);
};
const n = (conj = []) => conj.length;
const x = (conj = []) => conj.reduce((a, b) => a + b, 0);

const margen_erro = (a, b) => a / Math.sqrt(b);
const intervalo = (sigma, faixa) => {
  const media_X = x(conj) / n(conj);
  console.log(media_X);
  const m_e = margen_erro(sigma, conj.length);
  const { valor } = coefi_confianca(faixa);
  return {
    sum: media_X + (valor*m_e),
    sub: media_X - (valor*m_e),
  }
};