
const entradaTexto = document.getElementById("entradaTexto");
const resultado = document.getElementById("resultado");

function esconderImagem(){
  document.getElementById("imgCond").style.display = "none";
}

function botaoCrip(){
  const textoCrip = criptografar(entradaTexto.value);
  resultado.value = textoCrip;
  entradaTexto.value = "";
}

function criptografar(cripString){
  let codigo = [["i" , "imes"] , ["a" , "ai"] , ["e" , "enter"] , ["o" , "ober"] , ["u" , "ufat"]];
  cripString = cripString.toLowerCase();
  for(let i = 0 ; i < codigo.length ; i++){
    if(cripString.includes(codigo[i][0])){
      cripString = cripString.replaceAll(codigo[i][0], codigo[i][1]);
    }
  }
  return cripString;
}

function botaoDescrip(){
  const textoDescrip = descriptografar(entradaTexto.value);
  resultado.value = textoDescrip;
  entradaTexto.value = "";
}

function descriptografar(decripString){
  let codigo = [["i" , "imes"] , ["a" , "ai"] , ["e" , "enter"] , ["o" , "ober"] , ["u" , "ufat"]];
  decripString = decripString.toLowerCase();
  for(let i = 0 ; i < codigo.length ; i++){
    if(decripString.includes(codigo[i][0])){
      decripString = decripString.replaceAll(codigo[i][1], codigo[i][0]);
    }
  }
  return decripString;
}

function copiarResultado() {
  var copyText = document.getElementById("resultado");
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Texto copiado!");
}