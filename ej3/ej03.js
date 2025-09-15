/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  const digits = [
    [1, 1, 1, 1, 1, 1, 0],   //0
    [0, 1, 1, 0, 0, 0, 0],   //1
    [1, 1, 0, 1, 1, 0, 1],   //2
    [1, 1, 1, 1, 0, 0, 1],   //3
    [0, 1, 1, 0, 0, 1, 1],   //4
    [1, 0, 1, 1, 0, 1, 1],   //5
    [1, 0, 1, 1, 1, 1, 1],   //6
    [1, 1, 1, 0, 0, 0, 0],   //7
    [1, 1, 1, 1, 1, 1, 1],   //8
    [1, 1, 1, 1, 0, 1, 1]    //9
  ];


  const numero = Math.floor(Math.random() * 10);

  const nombreSegmento = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  nombreSegmento.forEach((seg, i) => {
    const encender = document.getElementById('seg-' + seg);
    if (digits[numero][i]) {
      encender.classList.add('on')
    } else {
      encender.classList.remove('on')
    }
  });
};
