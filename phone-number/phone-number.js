export const clean = (number) => {
  number = number.match(/[a-z0-9@:!]/gi).join('');
  
  if (number.match(/[@:!]/g)){
	  throw 'No se permiten puntuaciones';
  }else if (number.match(/[a-z]/gi)){
	  throw 'Letras no permitidas';
  }else if (number.length < 10){
	  throw 'Número incorrecto de dígitos';
  }else if (number.length > 11){
	  throw 'Más de 11 dígitos';
  }else if (number.length === 11 && number[0] != 1){
	  throw '11 dígitos deben comenzar con 1';
  }else if (number)
  
  if (number.length === 11){
  	number = number.slice(1, 11)
  }
  
  if (number[0] == 0){
	  throw 'El código de área no puede comenzar con cero';
  }else if (number[0] == 1){
	  throw 'El código de área no puede comenzar con uno';
  }else if (number[3] == 0){
	  throw 'El código de intercambio no puede comenzar con cero';
  }else if (number[3] == 1){
	  throw 'El código de intercambio no puede comenzar con uno';
  }
  return number;
};