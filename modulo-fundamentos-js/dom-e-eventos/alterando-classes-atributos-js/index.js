const quadrado = document.querySelector('.quadrado');
console.log(quadrado);

quadrado.classList.remove('azul');
quadrado.classList.add('preto');
quadrado.classList.toggle("preto");
console.log(quadrado.classList.contains("azul"));



// mexendo com atributos dos elementos
const inputCor = document.getElementById('cor');

//setAttribute - define um atributo
inputCor.setAttribute('placeholder', 'Digite uma cor');
//getAttribute - obtem o valor de um atributo
const valorPlaceHolder = inputCor.getAttribute('placeholder');
//removeAttribute - remove um atributo
inputCor.removeAttribute('placeholder');